<template>
  <div class="container-xxl my-md-3 bd-layout">
    <div class="row justify-content-center align-items-md-center">
      <h2>Bitte Trage deine Benutzerdaten ein.</h2>
        <form class="row g-3 needs-validation" id="user-create-form" novalidate>
          <div class="col-md-4">
            <label for="firstName" class="form-label">Vorname</label>
            <input type="text" class="form-control" id="firstName" v-model="firstName" placeholder="Mark" required>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4">
            <label for="lastName" class="form-label">Nachname</label>
            <input type="text" class="form-control" id="lastName" v-model="lastName" placeholder="Otto" required>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4">
            <label for="mail" class="form-label">Email</label>
            <input type="text" class="form-control" id="mail" v-model="email" placeholder="markotto@gmail.com" required>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <h2>Bitte Trage dein Inserat ein.</h2>
          <div class="col-md-4">
            <label for="titel" class="form-label">Titel</label>
            <input type="text" class="form-control" id="titel" v-model="titel" placeholder="Hose" required>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4">
            <label for="category" class="form-label">Kategorie</label>
            <select class="form-select" id="category" v-model="category" required>
              <option selected disabled value="">wähle...</option>
              <option>Auto</option>
              <option>Elektronik</option>
              <option>Kind</option>
              <option>Hobby</option>
              <option>Haus</option>
              <option>Mode</option>
              <option>Medien</option>
              <option>Ramsch</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
          <div class="col-md-4">
            <label for="zipcode" class="form-label">Postleitzahl</label>
            <input type="text" class="form-control" placeholder="000000" id="zipcode" v-model="zipcode" required>
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
          <div class="col-md-8">
            <label for="upload" class="form-label">Foto</label>
            <input @input="handleImage" class="form-control" type="file" accept="image/*" id="upload" required>
          </div>
          <div class="col-md-4">
            <img style="" :src="image" alt="">
          </div>
          <div class="col-md-4">
            <label for="description" class="form-label">Beschreibung</label>
            <div class="input-group">
              <textarea type="text" class="form-control" aria-label="With textarea" id="description" v-model="description" required></textarea>
            </div>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit" @click.prevent="createUser">Submit form</button>
          </div>
        </form>
      </div>
  </div>
</template>

<script>
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import router from '@/router'
export default {
  name: 'NewEntry',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      titel: '',
      category: '',
      zipcode: '',
      description: '',
      image: null,
      imageFile: null,
      imageURL: '',
      userId: '',
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {

    async createUser () {
      console.log('createUser')
      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + 'api/v1/users'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const user = JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email
        })

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: user,
          redirect: 'follow'
        }

        const response = await fetch(endpoint, requestOptions)
        await this.handleUserResponse(response)
        if (response.ok) await this.createEntry()
      }
    },
    async createEntry () {
      console.log('createEntry')
      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + 'api/v1/entries'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const entry = JSON.stringify({
          titel: this.titel,
          timestamp: new Date(),
          category: this.category.toUpperCase(),
          zipcode: this.zipcode,
          description: this.description,
          imageURL: this.imageURL,
          userId: this.userId

        })

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: entry,
          redirect: 'follow'
        }

        const response = await fetch(endpoint, requestOptions)
        await this.handleEntryResponse(response)
        if (response.ok) {
          router.push({ path: '/entry', query: { firstName: this.firstName, lastName: this.lastName, email: this.email, titel: this.titel, category: this.category, zipcode: this.zipcode, description: this.description, imageURL: this.imageURL, new: true } })
        }
      }
    },
    handleEntryResponse: async function (response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'))
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    },
    handleUserResponse: async function (response) {
      if (response.ok) {
        const location = response.headers.get('location')
        this.$emit('created', location)
        this.userId = location.match(/[0-9.]+$/).toString()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    },
    validate () {
      const form = document.getElementById('user-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
    },
    handleImage (e) {
      const selectedImage = e.target.files[0]
      this.imageFile = selectedImage
      this.createImageURL(selectedImage)
      this.uploadImage()
    },
    createImageURL (fileObject) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.image = e.target.result
      }
      reader.readAsDataURL(fileObject)
    },
    uploadImage () {
      const storage = getStorage()
      const storageRef = ref(storage, `${this.imageFile.name}`)
      uploadBytes(storageRef, this.imageFile)
        .then(() => {
          console.log('Image uploaded: ', storageRef)
        })
        .then(() => {
          getDownloadURL(storageRef).then((url) => {
            this.imageURL = url
            console.log(this.imageURL)
          })
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
<style scoped>
img{width: 17rem;}
</style>

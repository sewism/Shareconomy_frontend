<template>
  <div class="container-xxl my-md-4 bd-layout">
    <div class="row">
      <div class="card w-75">
        <div class="card-body">
          <h1 class="card-title">{{ titel }}</h1>
          <img :src="imageURL" height="500" alt="">
          <p class="card-text">{{ description }}</p>
        </div>
      </div>
        <div class="card w-25">
         <div class="card-body">
           <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
             <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
             <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
           </svg>
           <h1></h1>
           <h4 class="card-text">{{ firstName }} {{ lastName }}</h4>
           <p class="card-text" style="text-align:left"> Email: {{ email }}</p>
           <p class="card-text" style="text-align:left">Postleitzahl: {{ zipcode }}</p>
         </div>
        </div>
      </div>
  </div>
  <Toast v-if="this.new"></Toast>
</template>

<script>
import Toast from '@/components/Toast'
export default {
  name: 'Entry',
  components: { Toast },
  data: function () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      titel: '',
      category: '',
      zipcode: '',
      description: '',
      imageURL: '',
      new: false
    }
  },
  mounted () {
    const urlParams = new URLSearchParams(window.location.search)
    this.firstName = urlParams.get('firstName')
    this.lastName = urlParams.get('lastName')
    this.email = urlParams.get('email')
    this.titel = urlParams.get('titel')
    this.category = urlParams.get('category')
    this.zipcode = urlParams.get('zipcode')
    this.description = urlParams.get('description')
    this.imageURL = urlParams.get('imageURL')
    this.new = urlParams.get('new')
  }
}
</script>

<template>
  <div className="container-fluid">
    <div className="row flex-xl-nowrap">
      <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <button @click="selectedCat = 'AUTO'" class="btn d-inline-flex align-items-center">Auto</button></li>
          <li class="list-group-item">
            <button @click="selectedCat = 'ELEKTRONIK'" class="btn d-inline-flex align-items-center">Elektronik</button></li>
          <li class="list-group-item">
            <button @click="selectedCat = 'KIND'" class="btn d-inline-flex align-items-center">Kind</button></li>
          <li class="list-group-item">
            <button @click="selectedCat = 'HOBBY'" class="btn d-inline-flex align-items-center">Hobby</button></li>
          <li class="list-group-item">
            <button @click="selectedCat = 'HAUS'" class="btn d-inline-flex align-items-center">Haus</button></li>
          <li class="list-group-item">
            <button @click="selectedCat = 'MODE'" class="btn d-inline-flex align-items-center">Mode</button></li>
          <li class="list-group-item">
            <button @click="selectedCat = 'MEDIEN'" class="btn d-inline-flex align-items-center">Medien</button></li>
          <li class="list-group-item">
            <button @click="selectedCat = 'RAMSCH'" class="btn d-inline-flex align-items-center">Ramsch</button></li>
        </ul>
      </div>
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="entry in entriesFiltered" :key="entry.id">
            <div class="card h-100">
              <img :src="entry.imageURL" class="card-img-top" :alt="entry.titel">
              <div class="card-body">
                <h5 class="card-title">{{ entry.titel }}</h5>
                <p class="card-text">
                  In {{ entry.zipcode }} gibt es einen schönen {{ entry.titel }}.
                  Angeboten von {{ entry.user.firstName }} {{ entry.user.lastName }}
                </p>
                <router-link class="stretched-link" to="/entry?"></router-link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    const selectedCat = null
    return {
      entries: [], selectedCat
    }
  },
  computed: {
    entriesFiltered: function () {
      if (this.selectedCat === null) {
        return this.entries
      } else {
        return this.entries.filter(entry => !entry.category.indexOf(this.selectedCat))
      }
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/entries'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(entry => {
        this.entries.push(entry)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

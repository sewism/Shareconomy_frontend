<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="entry in entries" :key="entry.id">
      <div class="card h-100">
        <img src="../assets/hammer2.jpg" class="card-img-top" :alt="entry.titel">
        <div class="card-body">
          <h5 class="card-title">{{ entry.titel }}</h5>
          <p class="card-text">
            In {{ entry.zipcode}} gibt es einen schönen {{ entry.titel}}.
            Angeboten von {{ entry.user.firstName }} {{ entry.user.lastName }}
          </p>
          <a href="#" class="stretched-link"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Entries',
  data: function () {
    return {
      entries: []
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

<style scoped>

</style>

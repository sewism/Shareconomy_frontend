<template>
  <div class="card h-100">
    <div class="card-body">
      <h5 class="card-title">{{ entry }}</h5>
      <p class="card-text">
        In 24710 gibt es einen schönes {{ entry }}.
        Angeboten von Otto
      </p>
      <router-link class="stretched-link" to="/entry"></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Entry',
  props: {
    entry: String
  }
}
</script>

<style scoped>

</style>

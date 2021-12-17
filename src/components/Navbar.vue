<template>
  <nav className="navbar navbar-light bg-light">
    <div className="container-xxl d-flex align-items-md-center">
      <a className="navbar-brand">Shareconomy</a>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Suche" aria-label="Search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Postleitzahl" aria-label="Search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div v-if="guest">
        <a className="btn btn-primary" href="#" role="button">Login</a>
      </div>
      <div v-else>
        <a className="btn btn-primary" href="#" role="button">User</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: function () {
  }
}
</script>

<style scoped>

</style>

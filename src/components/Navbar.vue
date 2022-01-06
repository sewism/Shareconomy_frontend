<template>
  <nav className="navbar navbar-light bg-light">
    <div className="container-xxl d-flex align-items-md-center">
      <a class="navbar-brand" href="/">Shareconomy</a>
      <form className="d-flex">
        <router-link to="/new">
        <a className="btn btn-primary" href="#" role="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-plus" viewBox="0 0 16 16">
            <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
          </svg>
          Inserat erstellen</a>
        </router-link>
      </form>
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

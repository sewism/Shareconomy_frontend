<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="../assets/hammer2.jpg" class="card-img-top" alt="../assets/hammer2.jpg">
          <div class="card-body">
            <h5 class="card-title">Hammer</h5>
            <p class="card-text">Funktionstüchtiger und schöner Hammer</p>
            <a href="#" class="stretched-link"></a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="../assets/hammer2.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Hammer</h5>
            <p class="card-text">Funktionstüchtiger und schöner Hammer</p>
            <a href="#" class="stretched-link"></a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="../assets/hammer2.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Hammer</h5>
            <p class="card-text">Funktionstüchtiger und schöner Hammer</p>
            <a href="#" class="stretched-link"></a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="../assets/hammer2.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Hammer</h5>
            <p class="card-text">Funktionstüchtiger und schöner Hammer</p>
            <a href="#" class="stretched-link"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

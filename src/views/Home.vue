<template>
  <div className="container-fluid">
    <div className="row flex-xl-nowrap">
      <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
        <CategoryList></CategoryList>
      </div>
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <Entries></Entries>
      </main>
    </div>
  </div>
</template>

<script>
import Entries from '@/views/Entries'
import CategoryList from '@/components/CategoryList'

export default {
  name: 'Home',
  components: { CategoryList, Entries }
}
</script>

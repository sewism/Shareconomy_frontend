<template>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <div id="liveToast" class="toast show" role="status" aria-live="polite" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">Shareconomy</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Super, du hast dein neues Inserat angelegt!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast'
}
</script>

<style scoped>

</style>

<template>
  <div>
    <router-link to="/">index</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.state.logout = false
  },
  beforeRouteLeave(to, from, next) {
    console.log('%c login', 'color: orange', to, from)
    to.meta.keepAlive = false;
    next();
  }
}
</script>


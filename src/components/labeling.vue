<template>
  <div>
    <router-link to="/">index</router-link>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    console.log('%c labeling', 'color: red', to, from)
    to.meta.keepAlive = true;
    next();
  }
}
</script>


<template>
  <div>
    <div style="display: flex;">
      <router-link to="/login">Login</router-link> | 
      <router-link to="/labeling">Labeling</router-link>
    </div>

    {{ count }} <button @click="count += 1">plus</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  activated() {
    console.log('activated')
  },
  mounted() {
    console.log('mounted')
  },
}
</script>

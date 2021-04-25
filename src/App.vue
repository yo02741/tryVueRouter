<template>
  <div id="app">
    <keep-alive v-if="!$store.state.logout">
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"  />
  </div>
</template>
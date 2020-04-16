<template>
  <div id="app">
    <h1>
      <img alt="Vue logo" src="./assets/logo.png" />
    </h1>
    <nav>
      <span>
        <router-link to="/ask">Ask</router-link>
      </span>
      <span>
        <router-link to="/jobs">Jobs</router-link>
      </span>
      <span>
        <router-link to="/news">News</router-link>
      </span>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  methods: {
    fetchData() {
      console.log("hello");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  span {
    + span {
      margin-left: 1em;
    }
  }
}
</style>

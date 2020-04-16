<template>
  <div id="app">
    <div class="wrapper">
      <h1>
        <img alt="Vue logo" src="./assets/logo.png" width="100" />
      </h1>
      <nav>
        <span>
          <router-link to="/">Main</router-link>
        </span>
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
@import "./assets/css/common.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f5f5;

  .wrapper {
    max-width: 560px;
    margin: 0 auto;
    background-color: #fff;
    min-height: 100vh;

    h1 {
      padding: 1em 0;
    }
  }
}
nav {
  margin: 1em 0;
  font-size: 1.4rem;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  span {
    + span {
      margin-left: 1em;
    }
  }
  a {
    display: inline-block;
    padding: 1em 1em;
    text-decoration: none;
    color: inherit;
    &:hover {
      background-color: #f5f5f5;
    }
  }
}
</style>

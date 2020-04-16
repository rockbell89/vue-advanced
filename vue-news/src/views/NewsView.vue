<template>
  <div>
    <h2>NEWS</h2>
    <div class="news-list">
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fecthNewsList } from "@/api/index";

export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    fecthNewsList()
      .then(res => {
        console.log(res);
        this.users = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss">
h2 {
  font-size: 1.6rem;
  margin: 1em 0;
  font-weight: 600;
}
.news-list {
  border-bottom: 1px solid #dcdcdc;
  li {
    padding: 1em 1.5em;
    text-align: left;
    border-top: 1px solid #dcdcdc;
  }
}
</style>
import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main";
import AskView from "../views/AskView";
import JobsView from "../views/JobsView";
import NewsView from "../views/NewsView";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: "/",
      component: Main,
      // redirect: '/jobs',
      // redirect : {
      //   name : 'jobs'
      // }
      // redirect : to => {
      //   "path / location" 반환
      // }
    },
    {
      path: "/ask",
      component: AskView,
    },
    {
      path: "/jobs",
      component: JobsView,
    },
    {
      path: "/news",
      component: NewsView,
    },
  ],
});
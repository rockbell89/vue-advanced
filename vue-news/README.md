# vue-news

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vetur

### vue-router
```
npm i vue-router --save
```
```
import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const router = new VueRouter({
  [
    {
      path : '/', // url 주소
      component: '', // 표시될 컴포넌트 페이지
    }
  ]
})
```


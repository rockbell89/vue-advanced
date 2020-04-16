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

## Project Settings
### vetur
```
1. vscode vetur 플러그인 설치
2. vue + [tab]키로 자동완성
```
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


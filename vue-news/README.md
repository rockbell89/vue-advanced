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

### sass-loader / node-sass
>sass / scss 사용을 위한 설치
```
npm i -D sass-loader node-sass
npm i -D style-loader css-loader
```

```
css-loader : css파일들을 읽어줌
style-loader : 읽은 css 파일들을 style태그로 만들어 head태그 안에 넣어줌
url-loader : file-loader와 같이 동작 하지만, byte 제한을 설정하여 그 보다 작은 경우 DataURL을 반환해준다
```

### axios

```
npm i -S axios
```
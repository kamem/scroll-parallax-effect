# vue scroll-parallax-effect

## Example
https://github.com/kamem/scroll-parallax-effect/tree/master/example/parallax-vue3

## Usage

### vue2
```javascript
import Vue from 'vue'
import Parallax from 'scroll-parallax-effect/vue'
import App from './App'

Vue.use(Parallax)

const app = new Vue({
  el: '#app',
  render: (h) => h(App)
})
```

### Vue3
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import Parallax from 'scroll-parallax-effect/vue'

createApp(App).use(Parallax).mount('#app')
```

横方向にしたい場合は下記

### vue2
```javascript
Vue.use(Parallax, { direction: 'x' })
```

### Vue3
```javascript
createApp(App).use(Parallax, { direction: 'x' }).mount('#app')
```

他の[オプション](./README.md#scrollstatus-option)もここで指定できます。


* v-parallax-timing
* v-parallax-speed
* v-parallax-fit

### timing

```javascript
<template>
<div v-parallax-timing />
</template>
```


### speed
```javascript
<template>
<div
  v-parallax-speed
  styles="top"
  :speed="3"
  contentScrollPosition="#speed"
/>
</template>
```

```javascript
<template>
<div
  v-parallax-speed="parallaxSpeed"
/>
</template>

<script>
export default {
  data() {
    return {
      parallaxSpeed: {
        styles: "top"
        speed: 3
        contentScrollPosition: '#speed'
      }
    }
  },
}
</script>
```


### fit
```javascript
<template>
<div
  v-parallax-fit
  :start="1000"
  :end="2000"
  :fromStyle="{
    opacity: 0,
  }"
  :toStyle="{
    opacity: 1,
  }"
  easing="easeOutBack"
/>
</template>
```

```javascript
<template>
<div
  v-parallax-fit="parallaxFit"
/>
</template>

<script>
export default {
  data() {
    return {
      parallaxFit: {
        start: 1000,
        end: 2000,
        fromStyle: {
          opacity: 0
        },
        toStyle: {
          opacity: 1,
        },
        easing: 'easeOutBack'
      }
    }
  },
}
</script>
```

#### 複数指定したい場合
```javascript
<template>
<div
  v-parallax-fit="parallaxFit"
/>
</template>

<script>
export default {
  data() {
    return {
      parallaxFit: [
        {
          start: 0,
          end: 1000,
          fromStyle: {
            opacity: 0
          },
          toStyle: {
            opacity: 1,
          },
          easing: 'easeOutBack'
        },
        {
          start: 1000,
          end: 2000,
          fromStyle: {
            opacity: 1
          },
          toStyle: {
            opacity: 0,
          },
          easing: 'easeOutBack'
        }
      ]
    }
  },
}
</script>
```
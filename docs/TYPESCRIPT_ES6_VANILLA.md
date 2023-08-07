# scroll-parallax-effect Typescript ES6 Vanilla

## Example
### Typescript
* [y scroll sample](http://kamem.github.io/scroll-parallax-effect/docs/example/typescript/y-typescript.html)
* [x scroll sample](http://kamem.github.io/scroll-parallax-effect/docs/example/typescript/x-typescript.html)

### Vanilla
* [y scroll sample](http://kamem.github.io/scroll-parallax-effect/docs/example/vanilla/y-vanilla.html)
* [x scroll sample](http://kamem.github.io/scroll-parallax-effect/docs/example/vanilla/x-vanilla.html)

## Usage

### ES6 Typescript
```Typescript
import {
  ParallaxTiming,
  ParallaxSpeed,
  ParallaxFit
} from 'scroll-parallax-effect'
```

直接HTMLに読みたい場合はdistフォルダのファイルを使い下記の通り読み込んでください。

https://kamem.github.io/scroll-parallax-effect/dist/scroll-parallax-effect/scroll-parallax-effect.min.js

### Vanilla
```javascript
<script type="text/javascript" src="../js/scroll-parallax-effect.min.js"></script>
```

横方向にしたい場合は下記

### ES6 Typescript
```Typescript
import {
  updateStatus,
} from 'scroll-parallax-effect'
updateStatus({ direction: 'x' })
```

### Vanilla
```Javascript
Parallax.updateStatus({ direction: 'x' })
```

他の[ScrollStatusのオプション](./README.md#scrollstatus-option)もここで指定できます。


### Timing

### ES6 Typescript
```Typescript
import {
  ParallaxTiming,
} from 'scroll-parallax-effect'
new ParallaxTiming('#timing')
```

### Vanilla
```Javascript
new Parallax.ParallaxTiming('#timing')
```

### speed

### ES6 Typescript
```Typescript
import {
  ParallaxSpeed,
} from 'scroll-parallax-effect'
new ParallaxSpeed('.speed', {
  style: 'top',
  speed: 3,
  contentScrollPosition: '#speed'
})
```

### vanilla
```Javascript
new Parallax.ParallaxSpeed('.speed', {
  style: 'top',
  speed: 3,
  contentScrollPosition: '#speed'
})
```

### fit

### ES6 Typescript
```Typescript
import {
  ParallaxFit,
} from 'scroll-parallax-effect'
new ParallaxFit('.fit', {
  start: 1000,
  end: 2000,
  fromStyle: {
    opacity: 0
  },
  toStyle: {
    opacity: 1,
  },
  easing: 'easeOutBack'
})
```

### Vanilla
```Javascript
new Parallax.ParallaxTiming('.fit', {
  start: 1000,
  end: 2000,
  fromStyle: {
    opacity: 0
  },
  toStyle: {
    opacity: 1,
  },
  easing: 'easeOutBack'
})
```

#### 複数指定したい場合

### ES6 Typescript
```es6
import {
  ParallaxFit,
} from 'scroll-parallax-effect'
new ParallaxFit('.fit', [
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
])
```

### Vanilla
```Javascript
new Parallax.ParallaxTiming('.fit', [
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
])
```

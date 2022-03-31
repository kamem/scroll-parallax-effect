# vanilla es6 scroll-parallax-effect

[![example2](http://github.develo.org/scrollParallax/public/img/thumbs/example2.jpg)](http://github.develo.org/scrollParallax/public/example2/)

## Example
### es6
* [y scroll](http://github.develo.org/scrollParallax/public/example1_es6/)

### vanilla
* [y scroll](http://github.develo.org/scrollParallax/public/example1_vanilla/)


## Usage

### ES6
```ES6
import {
  ParallaxTiming,
  ParallaxSpeed,
  ParallaxFit
} from 'scroll-parallax-effect'
```

直接HTMLに読みたい場合はdistフォルダのファイルを使い下記の通り読み込んでください。

### vanilla
```javascript
<script type="text/javascript" src="../js/scrollParallax.min.js"></script>
```


横方向にしたい場合は下記

### ES6
```es6
import {
  updateStatus,
} from 'scroll-parallax-effect'
updateStatus({ direction: 'x' })
```

### vanilla
```Javascript
Parallax.updateStatus({ direction: 'x' })
```

他の[オプション](../README.md#Usage)もここで指定できます。


### timing

### ES6
```es6
import {
  ParallaxTiming,
} from 'scroll-parallax-effect'
new ParallaxTiming('#timing')
```

### vanilla
```Javascript
new Parallax.ParallaxTiming('#timing')
```


### speed

```es6
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

### ES6
```es6
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

### vanilla
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

### ES6
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

### vanilla
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
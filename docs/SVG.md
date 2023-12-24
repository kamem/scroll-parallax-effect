# scroll-parallax-effect Typescript ES6 Vanilla

- [Example](#example)
- [Usage](#usage)
  - [ScrollStatus Usage](#scrollstatus-usage)
  - [Timing Usage](#timing-usage)
  - [Speed Usage](#speed-usage)
  - [Fit Usage](#fit-usage)
- [Option](#option)
  - [ScrollStatus Option](#scrollstatus-option)
  - [共通 Option](#共通-option)
  - [Timing Option](#timing-option)
  - [Speed Option](#speed-option)
  - [Fit Option](#fit-option)

## Example
- [y scroll sample](http://kamem.github.io/scroll-parallax-effect/docs/example/svg/svg.html)

## Option

- [共通 Option](#共通-option)

| Option Name | Description  | Type                             | default                                            |
| :---------- | :----------- | :------------------------------- | :------------------------------------------------- |
| el          | タグ・タグ名 | `string` `Element` `HTMLElement` | 指定したタグここで指定したタグの中身の path を取得 |
| paths       | パスの配列   | `NodeListOf<SVGGeometryElement>` | path の配列、上よりここで指定した path が優先      |

### Timing Option

| Option Name     | Description                                                                                                                                                                                 | Type                                          | default                             |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------- | :---------------------------------- |
| speed           | パスの出るスピード                                                                                                                                                                          | `number`                                      | 2                                   |
| easing          | [easing plugin](http://semooh.jp/jquery/cont/doc/easing/)の名前を指定、また関数を指定することもできます。[Easing Functions for JavaScript](https://spicyyoghurt.com/tools/easing-functions) | `string` or `function`                        | `linear`                            |
| triggerPosition | 指定した位置にきたときに`toggle`を実行します                                                                                                                                                | [スクロール位置の指定](#スクロール位置の指定) | `undefinedの場合targetの位置を取得` |

- [Timing Usage](#timing-usage)

### Speed Option

| Option Name     | Description                                                                                                                                                                                 | Type                                          | default                             |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------- | :---------------------------------- |
| speed           | パスの出るスピード                                                                                                                                                                          | `number`                                      | 2                                   |
| easing          | [easing plugin](http://semooh.jp/jquery/cont/doc/easing/)の名前を指定、また関数を指定することもできます。[Easing Functions for JavaScript](https://spicyyoghurt.com/tools/easing-functions) | `string` or `function`                        | `linear`                            |
| triggerPosition | 指定した位置にきたときに`toggle`を実行します                                                                                                                                                | [スクロール位置の指定](#スクロール位置の指定) | `undefinedの場合targetの位置を取得` |

- [Timing Usage](#timing-usage)

### Fit Option

| Option Name     | Description                                  | Type                                          | default                             |
| :-------------- | :------------------------------------------- | :-------------------------------------------- | :---------------------------------- |
| motion          | motion の値                                  | `SvgFitMotion` `SvgFitMotion[]`               | []                                  |
| triggerPosition | 指定した位置にきたときに`toggle`を実行します | [スクロール位置の指定](#スクロール位置の指定) | `undefinedの場合targetの位置を取得` |

- [Fit Usage](#timing-usage)

#### Motion

| Option Name | Description                                                                                                                                                                                 | Type                                          | Default  |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------- | :------- |
| start       | 移動を始めるスクロール位置（2 つ目からは省略すると最後の end の位置からとなります。）                                                                                                       | [スクロール位置の指定](#スクロール位置の指定) | -        |
| end         | 移動が終わるスクロール位置                                                                                                                                                                  | [スクロール位置の指定](#スクロール位置の指定) | -        |
| from        | パスをどのぐらい描画するかの割合(0 - 1)                                                                                                                                                     | number                                        | -        |
| to          | パスをどのぐらい描画するかの割合(0 - 1)                                                                                                                                                     | number                                        | -        |
| easing      | [easing plugin](http://semooh.jp/jquery/cont/doc/easing/)の名前を指定、また関数を指定することもできます。[Easing Functions for JavaScript](https://spicyyoghurt.com/tools/easing-functions) | `string` or `function`                        | `linear` |

## Usage

### ES6 Typescript

```ES6
import {
  SvgParallaxTiming,
  SvgParallaxSpeed,
  SvgParallaxFit,
} from 'scroll-parallax-effect/svg'
```

直接 HTML に読みたい場合は dist フォルダのファイルを使い下記の通り読み込んでください。

https://kamem.github.io/scroll-parallax-effect/dist/scroll-parallax-effect/scroll-parallax-effect-svg.min.js

### Vanilla

```javascript
<script
  type="text/javascript"
  src="../js/scroll-parallax-effect-svg.min.js"
></script>
```

横方向にしたい場合は下記

### ES6 Typescript

```es6
import { updateStatus } from "scroll-parallax-effect";
updateStatus({ direction: "x" });
```

### Vanilla

```Javascript
Parallax.updateStatus({ direction: 'x' })
```

他の[ScrollStatus のオプション](./README.md#scrollstatus-option)もここで指定できます。

### Timing Usage

### ES6 Typescript

```es6
import { SvgParallaxTiming } from "scroll-parallax-effect/svg";
new SvgParallaxTiming("#timing");
```

### Vanilla

```Javascript
new Parallax.SvgTiming('#timing')
```

### Speed Usage

### ES6 Typescript

```Typescript
import {
  SvgParallaxSpeed,
} from 'scroll-parallax-effect/svg'
new SvgParallaxSpeed('.speed', {
  triggerPosition: ['.speed', -300],
  speed: 0.2,
  threshold: 0.5
})
```

### Vanilla

```Javascript
new Parallax.SvgSpeed('.speed', {
  triggerPosition: ['#music', -300],
  speed: 0.2,
  threshold: 0.5
})
```

### Fit Usage

### ES6 Typescript

```Typescript
import {
  ParallaxFit,
} from 'scroll-parallax-effect/svg'
new SvgParallaxFit('#fit', { motion: [
  {
    start: ['#fit', -380],
    end: ['#fit', -200],
    from: 0,
    to: 0.5,
    easing: 'easeOutCubic'
  },
  {
    end: ['#fit', -100],
    to: 0.3,
  },
  {
    end: ['#fit', -10],
    to: 1,
    easing: 'easeInOutQuart'
  },
]})
```

### Vanilla

```Javascript
new Parallax.SvgFit('#fit', { motion: [
  {
    start: ['#fit', -380],
    end: ['#fit', -200],
    from: 0,
    to: 0.5,
    easing: 'easeOutCubic'
  },
  {
    end: ['#fit', -100],
    to: 0.3,
  },
  {
    end: ['#fit', -10],
    to: 1,
    easing: 'easeInOutQuart'
  },
]})
```

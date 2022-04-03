# scroll-parallax-effect
* [Install](#install)
* [Example](#example)
  * [Typescript](#typescript)
  * [Vanilla](#vanilla)
  * [SVG](#svg)
* [Documents](#documents)
* [Usage](#usage)
  * [ScrollStatus Usage](#scrollstatus-usage)
  * [Timing Usage](#timing-usage)
  * [Speed Usage](#speed-usage)
  * [Fit Usage](#fit-usage)
* [Option](#option)
  * [ScrollStatus Option](#scrollstatus-option)
  * [共通 Option](#共通-option)
  * [Timing Option](#timing-option)
  * [Speed Option](#speed-option)
  * [Fit Option](#fit-option)

## Install

### npm 
```terminal
npm install scroll-parallax-effect
```

### yarn
```terminal
yarn add scroll-parallax-effect
```

## Example

### Typescript
* [y scroll sample](http://github.develo.org/scroll-parallax-effect/docs/example/typescript/y-typescript.html)
* [x scroll sample](http://github.develo.org/scroll-parallax-effect/docs/example/typescript/x-typescript.html)

### Vanilla
* [y scroll sample](http://github.develo.org/scroll-parallax-effect/docs/example/vanilla/y-vanilla.html)
* [x scroll sample](http://github.develo.org/scroll-parallax-effect/docs/example/vanilla/x-vanilla.html)

### SVG
* [y scroll sample](http://github.develo.org/scroll-parallax-effect/docs/example/svg/svg.html)

## Documents
* [Typescript ES6 Vanilla](/docs/TYPESCRIPT_ES6_VANILLA.md)
* [Vue](/docs/VUE.md)
* [SVG](/docs/SVG.md)

## Usage

```Typescript
import {
  ParallaxTiming,
  ParallaxSpeed,
  ParallaxFit
} from 'scroll-parallax-effect'
```
or 
```Typescript
import ParallaxTiming from 'scroll-parallax-effect/timing'
import ParallaxSpeed from 'scroll-parallax-effect/speed'
import ParallaxFit from 'scroll-parallax-effect/fit'
```

### ScrollStatus Usage
* [ScrollStatus Option](#scrollstatus-option)
```Typescript
import {
  updateStatus
} from 'scroll-parallax-effect'
updateStatus({
  threshold: 0.5,
  targetPercentage: 0.005
 })
```

### Timing Usage

* [Timing Option](#timing-option)

#### クラスonを付与
```Typescript
new ParallaxTiming('#timing')
```

#### クラス名だけ変更したい
```Typescript
new ParallaxTiming('#timing', { className: 'test'})
```

#### 少し早めのタイミングで
```Typescript
new ParallaxTiming('#timing', {
  threshold: 0.5
})
```

#### ナビゲーションにonを付与したい場合など（別のターゲットを指定したい）
```Typescript
document.querySelectorAll('.gnav > ul > *').forEach(function(el) {
  const targetElementName = el.querySelector('a')?.getAttribute('href')
  new ParallaxTiming(el, { target: targetElementName } )
})
```

#### 関数を指定
```Typescript
new ParallaxTiming('#timing', {
  toggle: [
    (el, o) => { el?.classList.add('test') },
    (el, o) => { el?.classList.remove('test') },
  ]
})
```

### Speed Usage
  * [Speed Option](#speed-option)

### top
```Typescript
new ParallaxSpeed('.speed', {
  style: 'top',
  speed: 3,
  contentScrollPosition: '#speed'
})
```

### transform
```Typescript
new ParallaxSpeed('.speed', {
    style: 'transform',
    contentScrollPositionStyleValue: 'rotate(0deg)',
    targetPercentage: 0.05,
    contentScrollPosition: 0,
    speed: -0.2,
  }
)
```

### background-color
```Typescript
new ParallaxSpeed(
  'body', 
  {
    contentScrollPositionStyleValue: 'rgb(0,0,0)',
    style: ['background-color'],
    speed: [[0.02, 0.03, 0.039]], // rgbの3つの値に対応します
    min: [[30, 30, 30]], // rgbの3つの値に対応します
  }
)
```

### 複数スタイルを与える、ランダムでspeedを変える
```Typescript
document.querySelectorAll('.speed').forEach((el, i) => {
  new ParallaxSpeed(el, {
    style: [
      'transform',
      'top',
      'opacity'
    ],
    contentScrollPositionStyleValue: `rotate(${Math.floor(Math.random() * 60 * i)}deg)`,
    speed: [
      Math.random() * 0.05 * ([-1, 1][Math.floor(Math.random() * 2)]),
      Math.random() * 0.15,
      0.005
    ],
    contentScrollPosition: '#speed',
  })
})
```

### Fit Usage
* [Fit Option](#fit-option)

#### opacity
```Typescript
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

#### startとfromStyleは省略することができます。
省略した場合は一つ前のend,toStyleを取得します。
```Typescript
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
    end: 2000,
    toStyle: {
      opacity: 0,
    },
  }
])
```

## Option

### ScrollStatus Option

| Option Name | Description | default
|:-----------|:------------|:------------|
| stage      | スクロールさせたいwindow | `window`
| direction  | スクロールの方向(`y` or `x`) | `y`
| targetPercentage| 全体の慣性の割合を指定します | `0.2`
| threshold | スクロール量 + (画面幅 / threshold)となる | `0`

  * [ScrollStatus Usage](#scrollstatus-Usage)

### 共通 Option

| Option Name | Description | default
|:-----------|:------------|:------------|
| status| スクロール位置・向きなどのクラスを指定 | `default Status`
| targetPercentage| 全体の慣性の割合を指定します | `0.2`
| threshold | スクロール量 + (画面幅 / threshold)となる | `0`

### Timing Option
* 指定位置を通過したとき、指定のクラスを追加・削除します。  
* 特定位置を通過したときに、指定の関数を実行することもできます。

| Option Name | Description | Type |default
|:-----------|:------------|:------------|:------------|
| target | ここで指定したタグを通過したときにtoggleが実行されます。 | `string`  `Element`  `HTMLElement` | 指定したタグ
| className | 追加したいクラス名 | `string` | `on`
| triggerPosition | 指定した位置にきたときに`toggle`を実行します  |  [スクロール位置の指定](#スクロール位置の指定)  | `undefinedの場合targetの位置を取得`
| toggle | 上から下に通過した場合に[0]を実行し、下から上に通過した場合[1]を実行します。 | `[() => this.addClass('on'), () => this.removeClass('on')]`

  * [Timing Usage](#timing-Usage)

### Speed Option
* スクロール量に応じてcssを変化させます。 
* スクロール1に対して、どのぐらい移動するかをspeedで指定することができます。

| Option Name | Description | Type | Default
|:-----------|:------------|:------------|:------------|
| style or styles | 変化させたいcssの値 | `string` | `'top'`
| speed | スクロール量 * speed ので値を変化させる | `number` | `2`
| min | 最小値 | `number` | `-999999`
| max | 最大値 | `number` | `999999`
| contentScrollPositionStyleValue | スクロールが`contentScrollPosition`の位置にきたときに、ここで指定したstyleに落ち着きます。指定がない場合はcssで予め指定していたstyleになります。| `string` | 自身のタグのstyle
| contentScrollPosition | スクロールがここで指定した位置に来た時に、希望の位置（contentScrollPositionStyleValue）にstyleが落ち着きます。|  [スクロール位置の指定](#スクロール位置の指定) | 指定したタグの位置

  * [Speed Usage](#speed-Usage)

**※ contentScrollPositionStyleValueに初期値の値を指定しないと動作しないことがあります。**

### Fit Option

移動距離に応じてcssを変化させます。
スクロールがstartからendまで移動したときにfromStyleからtoStyleにcssが変化していきます。
easingを指定することも可能です。

#### Motion | Motion[]

| Option Name | Description | Type | Default
|:-----------|:------------|:------------|:------------|
| start | 移動を始めるスクロール位置（2つ目からは省略すると最後のendの位置からとなります。）|  [スクロール位置の指定](#スクロール位置の指定) |-
| end | 移動が終わるスクロール位置 | [スクロール位置の指定](#スクロール位置の指定)  | -
| fromStyle | 始めのcss（cssは文字列で指定してください）（2つ目からは省略すると最後のtoStyleの最後の値からとなります。） | [key in CSSStyleDeclarationName]?: string or number | -
| toStyle | 終わりのcss（cssは文字列で指定してください） | [key in CSSStyleDeclarationName]?: string or number | -
| easing | [easing plugin](http://semooh.jp/jquery/cont/doc/easing/)の名前を指定、また関数を指定することもできます。[Easing Functions for JavaScript](https://spicyyoghurt.com/tools/easing-functions) | `string` or `function` | `linear`

  * [Fit Usage](#fit-Usage)

### スクロール位置の指定
スクロール位置はいくつかの指定方法があります。

| Value | Output | Description
|:-----------|:------------|:------------|
| 1000 | 1000 | 数値で指定
| '.header' | `タグの位置を取得` | タグ名で指定
| document.querySelector('.header') | `タグの位置を取得` | elementで指定
| ['.header', -100] | `タグの位置 - 100` | タグの位置から微調整
| end | `一番下` | Windowの最後のスクロール位置を指定
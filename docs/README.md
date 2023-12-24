# scroll-parallax-effect

- [Install](#install)
- [Example](#example)
  - [Typescript](#typescript)
  - [Vanilla](#vanilla)
  - [SVG](#svg)
- [Documents](#documents)
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

- [y scroll sample](http://kamem.github.io/scroll-parallax-effect/docs/example/typescript/y-typescript.html)
- [x scroll sample](http://kamem.github.io/scroll-parallax-effect/docs/example/typescript/x-typescript.html)

### Vanilla

- [y scroll sample](http://kamem.github.io/scroll-parallax-effect/docs/example/vanilla/y-vanilla.html)
- [x scroll sample](http://kamem.github.io/scroll-parallax-effect/docs/example/vanilla/x-vanilla.html)

### SVG

- [y scroll sample](http://kamem.github.io/scroll-parallax-effect/docs/example/svg/svg.html)

## Documents

- [Typescript ES6 Vanilla](/docs/TYPESCRIPT_ES6_VANILLA.md)
- [Vue](/docs/VUE.md)
- [SVG](/docs/SVG.md)

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

- [ScrollStatus Option](#scrollstatus-option)

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

- [Timing Option](#timing-option)

#### クラス on を付与

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

#### ナビゲーションに on を付与したい場合など（別のターゲットを指定したい）

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

- [Speed Option](#speed-option)

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

### 複数スタイルを与える、ランダムで speed を変える

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

- [Fit Option](#fit-option)

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

#### start と fromStyle は省略することができます。

省略した場合は一つ前の end,toStyle を取得します。

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

| Option Name      | Description                               | default  |
| :--------------- | :---------------------------------------- | :------- |
| stage            | スクロールさせたい window                 | `window` |
| direction        | スクロールの方向(`y` or `x`)              | `y`      |
| targetPercentage | 全体の慣性の割合を指定します              | `0.2`    |
| threshold        | スクロール量 + (画面幅 / threshold)となる | `0`      |

- [ScrollStatus Usage](#scrollstatus-Usage)

### 共通 Option

| Option Name      | Description                               | default          |
| :--------------- | :---------------------------------------- | :--------------- |
| status           | スクロール位置・向きなどのクラスを指定    | `default Status` |
| targetPercentage | 全体の慣性の割合を指定します              | `0.2`            |
| threshold        | スクロール量 + (画面幅 / threshold)となる | `0`              |

### Timing Option

- 指定位置を通過したとき、指定のクラスを追加・削除します。
- 特定位置を通過したときに、指定の関数を実行することもできます。

| Option Name     | Description                                                                  | Type                                                        | default                             |
| :-------------- | :--------------------------------------------------------------------------- | :---------------------------------------------------------- | :---------------------------------- |
| target          | ここで指定したタグを通過したときに toggle が実行されます。                   | `string` `Element` `HTMLElement`                            | 指定したタグ                        |
| className       | 追加したいクラス名                                                           | `string`                                                    | `on`                                |
| triggerPosition | 指定した位置にきたときに`toggle`を実行します                                 | [スクロール位置の指定](#スクロール位置の指定)               | `undefinedの場合targetの位置を取得` |
| toggle          | 上から下に通過した場合に[0]を実行し、下から上に通過した場合[1]を実行します。 | `[() => this.addClass('on'), () => this.removeClass('on')]` |

- [Timing Usage](#timing-Usage)

### Speed Option

- スクロール量に応じて css を変化させます。
- スクロール 1 に対して、どのぐらい移動するかを speed で指定することができます。

| Option Name                     | Description                                                                                                                                            | Type                                          | Default            |
| :------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------- | :----------------- |
| style or styles                 | 変化させたい css の値                                                                                                                                  | `string`                                      | `'top'`            |
| speed                           | スクロール量 \* speed ので値を変化させる                                                                                                               | `number`                                      | `2`                |
| min                             | 最小値                                                                                                                                                 | `number`                                      | `-999999`          |
| max                             | 最大値                                                                                                                                                 | `number`                                      | `999999`           |
| contentScrollPositionStyleValue | スクロールが`contentScrollPosition`の位置にきたときに、ここで指定した style に落ち着きます。指定がない場合は css で予め指定していた style になります。 | `string`                                      | 自身のタグの style |
| contentScrollPosition           | スクロールがここで指定した位置に来た時に、希望の位置（contentScrollPositionStyleValue）に style が落ち着きます。                                       | [スクロール位置の指定](#スクロール位置の指定) | 指定したタグの位置 |

- [Speed Usage](#speed-Usage)

**※ contentScrollPositionStyleValue に初期値の値を指定しないと動作しないことがあります。**

### Fit Option

移動距離に応じて css を変化させます。
スクロールが start から end まで移動したときに fromStyle から toStyle に css が変化していきます。
easing を指定することも可能です。

#### Motion | Motion[]

| Option Name | Description                                                                                                                                                                                 | Type                                                | Default  |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------- | :------- |
| start       | 移動を始めるスクロール位置（2 つ目からは省略すると最後の end の位置からとなります。）                                                                                                       | [スクロール位置の指定](#スクロール位置の指定)       | -        |
| end         | 移動が終わるスクロール位置                                                                                                                                                                  | [スクロール位置の指定](#スクロール位置の指定)       | -        |
| fromStyle   | 始めの css（css は文字列で指定してください）（2 つ目からは省略すると最後の toStyle の最後の値からとなります。）                                                                             | [key in CSSStyleDeclarationName]?: string or number | -        |
| toStyle     | 終わりの css（css は文字列で指定してください）                                                                                                                                              | [key in CSSStyleDeclarationName]?: string or number | -        |
| easing      | [easing plugin](http://semooh.jp/jquery/cont/doc/easing/)の名前を指定、また関数を指定することもできます。[Easing Functions for JavaScript](https://spicyyoghurt.com/tools/easing-functions) | `string` or `function`                              | `linear` |

- [Fit Usage](#fit-Usage)

### スクロール位置の指定

スクロール位置はいくつかの指定方法があります。

| Value                             | Output             | Description                         |
| :-------------------------------- | :----------------- | :---------------------------------- |
| 1000                              | 1000               | 数値で指定                          |
| '.header'                         | `タグの位置を取得` | タグ名で指定                        |
| document.querySelector('.header') | `タグの位置を取得` | element で指定                      |
| ['.header', -100]                 | `タグの位置 - 100` | タグの位置から微調整                |
| end                               | `一番下`           | Window の最後のスクロール位置を指定 |

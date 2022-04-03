<script setup lang="ts">
import Header from '@/components/Header.vue'
import MainHeader from '@/components/MainHeader.vue'
import Items from '@/components/Items.vue'
import Squares from '@/components/Squares.vue'
import Triangles from '@/components/Triangles.vue'
import Circles from '@/components/Circles.vue'

</script>

<template>
  <div class="app">
    <div style="position: fixed;top: 30px;left: 8px;">
      <p>{{$scrollStatus.scrollPosition}}</p>
      <p>{{$scrollStatus.contentSize}}</p>
    </div>
    <Header />

    <main id="contents">
      <article>
        <MainHeader />

        <Items name="install">
          <template v-slot:title>Install</template>
          <p class="install-code">npm install scroll-parallax</p>
          <p class="install-code">yarn add scroll-parallax</p>
        </Items>

        <Items name="timing" v-parallax-timing>
          <template v-slot:title>Timing</template>
          <template v-slot:text>指定したタグを通過したときに指定のクラスを追加するまた、上から下、下から上に向かって通過したときにそれぞれ関数を実行することもできます。</template>
          <template v-slot:code>&lt;div v-parallax-timing /&gt;</template>
          <Squares />
        </Items>

        <Items name="speed">
          <template v-slot:title>Speed</template>
          <template v-slot:text>スクロール量に応じてcssを変化させます。スクロール1に対して、どのぐらい移動するかをspeedで指定することができます。</template>
          <template v-slot:code>&lt;div
  v-parallax-speed
  styles=&quot;top&quot;
  :speed=&quot;3&quot;
  contentScrollPosition=&quot;#speed&quot;
/&gt;</template>
          <Triangles />
        </Items>

        <Items name="fit">
          <template v-slot:title>Fit</template>
          <template v-slot:text>移動距離に応じてcssを変化させます。<br>
    スクロールがstartからendまで移動したときに<br>
    fromStyleからtoStyleにcssが変化していきます。<br>
    easingを指定することも可能です。</template>
          <template v-slot:code>&lt;div
  v-parallax-fit
  :start=&quot;1000&quot;
  :end=&quot;2000&quot;
  :fromStyle=&quot;{
    opacity: 0,
  }&quot;
  :toStyle=&quot;{
    opacity: 1,
  }&quot;
  easing=&quot;easeOutBack&quot;
/&gt;
</template>

          <Circles />
        </Items>
      </article>
    </main>
  </div>
</template>

<style>
:root {
  --color-black: rgba(0, 0, 0, 0.8);
}

#contents {
  height: 100%;
}

#contents > article {
  display: flex;
  height: 100%;
  overflow: hidden;
}

.install-code {
  margin: 32px auto 0;
  padding: 8px 16px;
  background-color: var(--color-black);
  letter-spacing: 0.1em;
}

* {
  margin: 0;
  padding: 0;
}

.app {
  height: 100%;
}

html{
  scroll-behavior: smooth;
  height: 100%;
}

body {
  background-color: #2b2b2b;
  color: #fff;
  display: flex;
  width: calc(100% * 5);
  flex-direction: column;
  height: 100%;
}
</style>

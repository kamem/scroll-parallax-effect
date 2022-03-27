<template>
  <div class="triangles">
    <img 
      class="triangle"
      v-for="i of 3"
      :src="'../img/triangle.svg'"
      v-parallax-speed
      :styles="['transform', 'top', 'opacity']"
      :contentScrollPositionStyleValue="`rotate(${Math.floor(Math.random() * 60 * i)}deg)`"
      :speed="[
        Math.random() * 0.05 * ([-1, 1][Math.floor(Math.random() * 2)]),
        Math.random() * 0.15,
        0.005
      ]"
      contentScrollPosition="#speed"
    />
  </div>
</template>

<script>
export default {
  name: 'Triangles'
}
</script>

<style scoped lang="postcss">
.triangles {
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: -1;
  width: 100%;
}

.triangle {
  position: absolute;
  &:nth-child(1) {
    top: -80px;
    right: -80px;
  }
  &:nth-child(2) {
    top: 80px;
    left: 120px;
    width: 240px;
    height: 160px;
  }
  &:nth-child(3) {
    bottom: -30px;
    left: 50px;
    width: 240px;
    height: 240px;
  }
}
</style>

<template>
  <div class="circles">
    <div class="circle" v-for="i of 3"
      v-parallax-fit
      :start="['#fit', -300 + i * 50]"
      :end="['#fit', i * 100]"
      :fromStyle="{
        opacity: 0,
        transform: 'scale(0.3)',
      }"
      :toStyle="{
        opacity: 1,
        transform: 'scale(1)',
      }"
      easing="easeOutBack"
    />
  </div>
</template>

<script>
export default {
  name: 'Circles'
}
</script>

<style scoped>
.circle {
  position: absolute;
  z-index: -1;
  background-color: #1176ff;
  border-radius: 50%;

  &:nth-child(1) {
    top: -50px;
    left: -40px;
    width: 580px;
    height: 580px;
  }
  &:nth-child(2) {
    bottom: -40px;
    right: -30px;
    width: 200px;
    height: 200px;
  }
  &:nth-child(3) {
    top: 30px;
    right: 40px;
    width: 120px;
    height: 120px;
  }
}
</style>

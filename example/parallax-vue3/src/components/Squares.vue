<template>
  <div class="squares">
    <div class="square" v-for="i of 3"></div>
  </div>
</template>

<script>
export default {
  name: 'Squares'
}
</script>

<style scoped>
.square {
  position: absolute;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s;
  background-color: #67ad0c;
  &:nth-child(1) {
    top: -10px;
    left: -50px;
    width: 500px;
    height: 500px;
    transform: rotate( -60deg);
    transition-delay: 0.2s;
  }
  &:nth-child(2) {
    bottom: -40px;
    right: 160px;
    width: 160px;
    height: 160px;
    transform: rotate( 60deg);
    transition-delay: 0.5s;
  }
  &:nth-child(3) {
    bottom: 80px;
    right: 10px;
    width: 80px;
    height: 80px;
    transform: rotate( -70deg);
    transition-delay: 0.7s;
  }
}

.on {
  & .square {
   opacity: 1;
  }
}
</style>

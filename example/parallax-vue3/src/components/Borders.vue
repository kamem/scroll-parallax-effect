<template>
  <div class="borders">
    <div 
      class="border"
      v-for="i of 8"
      v-parallax-speed
      :style="{
        width: `${Math.floor(Math.random() * 300) + 300}px`,
        opacity: Math.random() + 0.1
      }"
      :styles="['width', 'left']"
      :speed="Math.random() * 0.2 + 0.5 * ([-1, 1][Math.floor(Math.random() * 2)])"
    />
  </div>
</template>
  
<script>
export default {
  name: 'Borders',
  mounted() {
    this.parallaxTiming({
      triggerPosition: 600,
      toggle: [
        function(e, over) {console.log(over)},
        function(e, over) {console.log(over)},
      ]
    })
  }
}
</script>

<style scoped>
.borders {
  transform: rotate(45deg);
  position: absolute;
  top: -150px;
  left: -150px;
  z-index: -1;
}

.border {
  margin-bottom: 8px;
  background-color: #1176ff;
  width: 300px;
  height: 54px;
  position: relative;
}
</style>

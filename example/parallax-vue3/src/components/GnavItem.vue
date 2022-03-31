<template>
  <li :class="['gnav-item', name]" v-parallax-timing :target="`#${name}`"><a :href="`#${name}`"><slot /></a></li>
</template>

<script>
export default {
  name: 'Header',
  props: {
    name: String,
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<style scoped>
.gnav-item {
  list-style-type: none;
  margin: 12px 0;
  & > a {
    display: block;
    box-sizing: border-box;
    padding-top: 12px;
    width: 12px;
    height: 12px;
    background-color: #fff;
    border-radius: 50%;
    overflow: hidden;
  }
  &.on > a{
    background-color: #1176ff;
  }
  &.timing.on > a {
    background-color: #67ad0c;
  }
  &.speed.on > a {
    background-color: #ff15d0;
  }
  &.fit.on > a {
    background-color: #1176ff;
  }
}

</style>

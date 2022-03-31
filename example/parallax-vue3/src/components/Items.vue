<template>
  <section :class="['parallax-item', name]" :id="name">
    <h2 class="parallax-item-title"><slot name="title" /></h2>
    <div class="parallax-body">
      <p class="parallax-item-text" v-if="$slots.text"><slot name="text" /></p>
      <pre class="parallax-item-code" v-if="$slots.code"><slot name="code" /></pre>
    </div>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'Items',
  props: {
    name: String
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<style scoped>
.parallax-item {
  display: flex;
  padding: 24px 0 0 0;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  &:nth-child(odd){
    & .parallax-body {
      flex-direction: row-reverse;
    }
    & .parallax-item-text {
      flex-direction: row;
    }
    & .parallax-item-code {
      flex-direction: row-reverse;
    }
  }
}

.parallax-item-title {
  margin: 0 auto 48px;
  padding: 16px 24px;
  background-color: var(--color-black);
  letter-spacing: 0.1em;
}

.parallax-body {
  display: flex;
}

.parallax-item-text {
  margin: 0 8%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  line-height: 2.8;
  font-size: 20px;
  letter-spacing: 0.15em;
  flex-direction: row-reverse;
}

.parallax-item-code {
  padding: 48px;
  background-color: rgba(0, 0, 0, 0.3);
  width: 40%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  line-height: 1.8;
  min-height: 500px;
}
</style>

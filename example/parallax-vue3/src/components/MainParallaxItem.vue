<template>
  <a :href="href" class="main-parallax-item">
  <dl>
    <dt class="main-parallax-item-label"><slot name="label" /></dt>
    <dd class="main-parallax-item-value"><slot name="value" /></dd>
  </dl>
  </a>
</template>

<script>
export default {
  name: 'MainParallaxItem',
  props: {
    href: String
  }
}
</script>

<style scoped>
.main-parallax-item {
  color: #fff;
  text-align: center;
  text-decoration: none;

  & > * {
    transition: opacity 0.15s;
  }

  &:hover > * {
    opacity: 0.6;
  }
}

.main-parallax-item-label {
  padding: 10px 0;
  width: 160px;
  background-color: var(--color-black);
  text-align: center;
  text-decoration: underline;
  display: inline-block;
  margin-bottom: 24px;
  letter-spacing: 0.1em;
}

.main-parallax-item-value {
  padding: 10px 20px;
  text-decoration: underline;
  display: inline-block;
  margin-bottom: 24px;
  letter-spacing: 0.1em;
}
</style>

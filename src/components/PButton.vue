<template>
  <component :is="tag">
    <slot name="default"/>
  </component>
</template>

<script>
export default {
  name: 'PButton',
  props: {
    tag: {
      type: String,
      default: 'button',
      validator: (val) => ['button', 'a', 'input'].includes(val)
    }
  }
}
</script>

<style>

</style>
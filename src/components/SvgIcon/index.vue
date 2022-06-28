<!--
 * @Author: MacLoki
 * @Date: 2022-06-28 17:32:14
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-28 22:17:33
 * @FilePath: /vue3-mall-admin/src/components/SvgIcon/index.vue
-->
<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true
  }
})
const iconName = computed(() => {
  return `#icon-${props.icon}`
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

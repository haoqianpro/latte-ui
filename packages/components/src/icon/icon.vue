<template>
  <div class="latte-icon">
    <svg class="icon" :style="iconColor" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import './font/iconfont.js';
import './style/index.scss';
export default defineComponent({
  name: 'icon',
  props: {
    name: String,
    color: String,
  },
  setup(props) {
    const iconName = computed(() => {
      return `#latte-${props.name}`;
    });
    const iconColor = computed(() => {
      return {
        color: props.color,
      };
    });
    return {
      iconName,
      iconColor,
    };
  },
});
</script>

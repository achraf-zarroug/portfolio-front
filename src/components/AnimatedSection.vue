<script setup lang="ts">
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const props = defineProps({
  delay: { type: Number, default: 0 },
  direction: { type: String, default: 'up' }, // up, down, left, right
});

const target = ref(null);
const targetIsVisible = ref(false);

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      targetIsVisible.value = true;
      stop();
    }
  },
  { threshold: 0.2 }
);

const getInitialTransform = () => {
  switch (props.direction) {
    case 'up': return 'translateY(50px)';
    case 'down': return 'translateY(-50px)';
    case 'left': return 'translateX(-50px)';
    case 'right': return 'translateX(50px)';
    default: return 'translateY(50px)';
  }
};
</script>

<template>
  <div
    ref="target"
    class="transition-all duration-1000 ease-out"
    :style="{
      opacity: targetIsVisible ? 1 : 0,
      transform: targetIsVisible ? 'translate(0, 0)' : getInitialTransform(),
      transitionDelay: `${delay}ms`
    }"
  >
    <slot></slot>
  </div>
</template>

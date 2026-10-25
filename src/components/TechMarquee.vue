<template>
  <div class="role-ribbon" aria-label="Ingénieur logiciel · Développeur Full-Stack · Architecte logiciel">
    <div class="role-ribbon-track" aria-hidden="true">
      <template v-for="copy in 2" :key="copy">
        <span v-for="(role, index) in roles" :key="`${copy}-${index}`" class="role-ribbon-item">
          {{ role }} <i>✦</i>
        </span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const roles = [
  'Ingénieur logiciel',
  'Développeur Full-Stack',
  'Architecte logiciel',
  '.NET & Vue.js'
]
</script>

<style scoped>
.role-ribbon {
  position: relative;
  z-index: 2;
  width: 106%;
  margin: -22px -3% 32px;
  overflow: hidden;
  transform: rotate(-2.2deg);
  border-top: 1px solid rgba(176, 111, 255, .16);
  border-bottom: 1px solid rgba(176, 111, 255, .16);
  background: rgba(8, 6, 17, .9);
  box-shadow: 0 10px 40px rgba(38, 13, 67, .18);
}
.role-ribbon-track {
  display: flex;
  width: max-content;
  align-items: center;
  gap: clamp(28px, 6vw, 90px);
  padding: 18px 0;
  animation: role-ribbon-scroll 30s linear infinite;
}
.role-ribbon:hover .role-ribbon-track { animation-play-state: paused; }
.role-ribbon-item {
  white-space: nowrap;
  color: #e5d7f5;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(17px, 2vw, 25px);
  font-style: italic;
  font-weight: 600;
}
.role-ribbon-item i {
  margin-left: clamp(16px, 3vw, 42px);
  color: #bd78ff;
  font-family: sans-serif;
  font-style: normal;
  text-shadow: 0 0 18px rgba(189, 120, 255, .9);
}
@keyframes role-ribbon-scroll { to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .role-ribbon-track { animation: none; } }
</style>

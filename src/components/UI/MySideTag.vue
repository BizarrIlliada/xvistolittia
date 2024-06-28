<template>
  <div class="my-side-tag df df--aic">
    <div :style="{ width: lineWidth }" class="my-side-tag__line"></div>
    <span class="my-side-tag__text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    text: string;
    lineWidth?: string;
  }

  defineOptions({
    name: 'MySideTag',
  });

  withDefaults(defineProps<Props>(), {
    lineWidth: '90px',
  });
</script>

<style scoped lang="scss">
  .my-side-tag {
    gap: 10px;

    @include phone {
      display: none;
    }

    &__line {
      height: 1px;
      background-color: $green-primary;
    }

    &__text {
      color: $green-primary;
      font-size: 14px;
      line-height: 18.2px;
    }
  }
</style>

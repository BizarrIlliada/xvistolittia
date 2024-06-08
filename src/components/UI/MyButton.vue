<template>
  <button :disabled="disabled" :class="myButtonClasses">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  defineOptions({
    name: 'MyButton',
  });

  interface Props {
    disabled?: boolean,
    severity?: 'primary' | 'secondary',
  }

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    severity: 'primary',
  });

  const myButtonClasses = computed(() => {
    const mainClass = 'my-button';
    const classes = [
      mainClass,
      mainClass + `--${props.severity}`,
    ];

    return classes;
  });
</script>

<style scoped lang="scss">
  .my-button {
    padding: 8px 12px;
    border: 1px solid transparent;
    transition: .3s;
    cursor: pointer;

    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;

    &--primary {
      color: $app-primary;
      background-color: $app-secondary;

      &:hover {
        color: $app-secondary;
        background-color: $app-primary;
        border-color: $app-secondary;
      }
    }

    &--secondary {
      color: $app-secondary;
      background-color: transparent;

      &:hover {
        position: relative;
        color: $green-primary;

        &::after {
          content: '';
          height: 1px;
          width: 100%;
          position: absolute;
          left: 0;
          bottom: -1px;
          background-color: $green-primary;
          animation: underline .3s ease;
        }
      }
    }

    &:active {
      opacity: .5;
    }

    &:disabled, &:disabled:hover {
      opacity: 0.6;
      pointer-events: none;
    }
  }

  @keyframes underline {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }
</style>

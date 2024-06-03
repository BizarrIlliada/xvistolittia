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
    rounded?: boolean,
  }

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    severity: 'primary',
  });

  const myButtonClasses = computed(() => {
    //TODO: create more button variations
    const mainClass = 'my-button'
    const classes = [
      mainClass,
      mainClass + `--${props.severity}`,
    ];

    if (props.rounded) {
      classes.push('my-button--rounded');
    }

    return classes;
  });
</script>

<style scoped lang="scss">
  .my-button {
    padding: 8px 12px;
    background-color: $app-secondary;
    border: none;
    color: $app-primary;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: 1px solid transparent;
    transition: .3s;
    cursor: pointer;

    &:hover {
      color: $app-secondary;
      background-color: $app-primary;
      border-color: $app-secondary;
    }

    &:active {
      opacity: .5;
    }

    &:disabled, &:disabled:hover {
      opacity: 0.6;
      pointer-events: none;
    }

    &--rounded {
      border-radius: 10px;
    }
  }
</style>

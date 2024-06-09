<template>
  <div class="my-input">
    <label for="" class="my-input__label"></label>
    <input
      :type="type"
      :placeholder="placeholder"
      :class="inputClasses"
      :value="modelValue"
      @input="onInput"
    >
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';

  defineOptions({
    name: 'MyInput',
  });

  const emits = defineEmits(['update:modelValue']);

  interface Props {
    id: string,
    modelValue: string,
    type?: 'text' | 'password' | 'number',
    placeholder?: string,
    invalid?: boolean,
  }

  const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
    type: 'text',
    placeholder: '',
    invalid: false,
  });

  const isPasswordVisible = ref(false);

  const inputClasses = computed(() => {
    const mainClass = 'my-input__input'
    const classes = [mainClass];

    if (props.invalid) {
      classes.push(mainClass + '--invalid');
    }

    return classes;
});

  function onInput(event: Event) {
    const target = event.target as HTMLInputElement;

    emits('update:modelValue', target.value);
  }
</script>

<style scoped lang="scss">
  .my-input {

    &__input {
      height: 36px;
      width: 100%;
      padding: 8px;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid $surface-400;
      outline: none;
      color: $green-900;
      font-size: 16px;
      line-height: 20px;
      transition: .3s;

      &:focus {
        border-bottom-color: $green-primary;

        &::placeholder {
          color: $green-primary;
        }
      }

      &::placeholder {
        color: $surface-500;
        transition: .3s;
      }

      &--invalid {
        border-bottom-color: $red-600;

        &:focus {
          border-bottom-color: $red-600;
        }

        &::placeholder {
          color: $red-400;
        }
      }
    }
  }
</style>
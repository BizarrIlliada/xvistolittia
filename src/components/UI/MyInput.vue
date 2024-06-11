<template>
  <div class="my-input">
    <input
      :id="id"
      :type="inputType"
      :placeholder="placeholder"
      :class="inputClasses"
      :value="modelValue"
      @input="onInput"
    >

    <div v-if="type === 'password'" class="my-input__eye-container" @click="togglePasswordVisibility">
      <i
        class="pi"
        :class="{
          'pi-eye': !isPasswordVisible,
          'pi-eye-slash': isPasswordVisible,
        }"
      ></i>
    </div>

    <Transition name="error">
      <small v-if="invalid && errorMessage" class="my-input__error">
        {{ errorMessage }}
      </small>
    </Transition>
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
    errorMessage?: string,
  }

  const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
    type: 'text',
    placeholder: '',
    invalid: false,
    errorMessage: '',
  });

  const inputClasses = computed(() => {
    const mainClass = 'my-input__input'
    const classes = [mainClass];

    if (props.invalid) {
      classes.push(mainClass + '--invalid');
    }

    if (props.type === 'password') {
      classes.push(mainClass + '--password');
    }

    return classes;
});

  const isPasswordVisible = ref(false);

  const inputType = computed(() => {
    if (props.type === 'password') {
      return isPasswordVisible.value ? 'text' : 'password';
    }

    return props.type;
  });

  function togglePasswordVisibility() {
    isPasswordVisible.value = !isPasswordVisible.value;
  }

  function onInput(event: Event) {
    const target = event.target as HTMLInputElement;

    emits('update:modelValue', target.value);
  }
</script>

<style scoped lang="scss">
  .my-input {
    position: relative;

    &__input {
      height: 36px;
      width: 100%;
      padding: 8px;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid $surface-400;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
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
          color: $red-600;
        }
      }

      &--password {
        padding-right: 32px;
      }
    }

    &__eye-container {
      position: absolute;
      right: 8px;
      display: inline-block;
      transform: translateY(50%);
      cursor: pointer;
      color: $green-900;
    }

    &__error {
      position: absolute;
      left: 0;
      bottom: -20px;
      transform: translateY(0);
      opacity: 1;
      color: $red-600;
      font-size: 13px;
      line-height: 18px;
    }
  }

  .error-enter-active,
  .error-leave-active {
    transition: .3s ease;
  }

  .error-enter-from,
  .error-leave-to {
    transform: translateY(-30%);
    opacity: 0;
  }
</style>

<template>
  <section class="auth">
    <h2 class="auth__title">
      {{ $t('authPage.login') }}
    </h2>
    <p class="auth__message">
      {{ $t('authPage.welcomeBack') }}
    </p>

    <form class="auth__form" @submit="onSubmit">
      <!-- TODO: remove rounded angels on inputs (IPhone), refactor translations -->
      <MyInput
        id="login-email-input"
        :placeholder="$t('authPage.email')"
        :invalid="!!errors.email"
        :errorMessage="errors.email ? $t(errors.email) : ''"
        class="auth__input"
        v-model.trim="email"
      ></MyInput>
      <MyInput
        id="login-password-input"
        type="password"
        :placeholder="$t('authPage.password')"
        :invalid="!!errors.password"
        :errorMessage="errors.password ? $t(errors.password) : ''"
        class="auth__input auth__input--last"
        v-model="password"
      ></MyInput>

      <MyButton class="auth__button">
        {{ $t('authPage.login') }}
      </MyButton>
    </form>

    <div class="auth__side-tag">
      <div></div>
      <span>welcome</span>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/stores/authStore';
  // import { ref } from 'vue';
  import { defineRule, useForm, useField } from 'vee-validate';
  import { useValidationRules } from '@/tools/hooks/validation-rules';

  const router = useRouter();
  const authStore = useAuthStore();

  const { requiredRule, emailRule } = useValidationRules();

  // TODO: make it iterable
  defineRule('required', requiredRule);
  defineRule('email', emailRule);

  const { handleSubmit, errors, resetForm } = useForm();

  const { value: email } = useField('email', 'required|email');
  const { value: password } = useField('password', 'required');

  const onSubmit = handleSubmit(async (values) => {
    try {
      await authStore.login(values.email, values.password);
      router.push({ name: 'HomePage' });
    } catch (error) {
      resetForm();
    }
  });
</script>

<style scoped lang="scss">
  @import '@/assets/styles/shared/auth.scss';
</style>

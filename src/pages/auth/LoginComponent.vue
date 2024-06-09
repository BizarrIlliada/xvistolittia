<template>
  <section class="auth">
    <h2 class="auth__title">
      {{ $t('authPage.login') }}
    </h2>
    <p class="auth__message">
      {{ $t('authPage.welcomeBack') }}
    </p>

    <form class="auth__form">
      <MyInput
        :placeholder="$t('authPage.email')"
        class="auth__input"
      ></MyInput>
      <MyInput
        type="password"
        :placeholder="$t('authPage.password')"
        class="auth__input auth__input--last"
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
</script>

<style scoped lang="scss">
  @import '@/assets/styles/shared/auth.scss';
</style>

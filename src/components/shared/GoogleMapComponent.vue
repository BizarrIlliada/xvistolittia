<template>
  <div class="google-map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20631.87646565426!2d24.203807!3d49.729916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473aebcf9827df27%3A0xc26f50402d5f7397!2sXVI%20Stolittia!5e0!3m2!1sen!2sus!4v1717505025812!5m2!1sen!2sus"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="google-map__map"
    ></iframe>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .google-map {
    &__map {
      border: none;
      box-shadow: $app-shadow;
      min-height: 450px;
      width: 100%;
    }
  }
</style>

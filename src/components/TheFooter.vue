<template>
  <footer class="app-footer df df--jcc df--aic">
    <a href="https://www.google.com/maps?ll=49.728063,24.191313&z=13&t=m&hl=en&gl=US&mapclient=embed&cid=14010505202342261655"
      target="_blank" class="app-footer__contact df">
      <span class="pi pi-map-marker"></span>
      {{ $t('shared.sholomyn') }}
    </a>

    <a href="https://www.instagram.com/xvistolittia/" target="_blank" class="app-footer__contact df">
      <span class="pi pi-instagram"></span>
      @xvistolittia
    </a>

    <a href="tel:+380 98 020 46 03" class="app-footer__contact df">
      <span class="pi pi-phone"></span>
      +380 (98) 020 46 03
    </a>

    <a href="https://t.me/xvistolittia" target="_blank" class="app-footer__contact df">
      <span class="pi pi-telegram"></span>
      @xvistolittia
    </a>
  </footer>
</template>

<style scoped lang="scss">
  .app-footer {
    min-height: 70px;
    gap: 16px;
    background-color: $green-primary;
    color: $app-primary;
    box-shadow: #32325D40 0px 8px 15px -12px inset, #0000004D 0px 5px 9px -5px inset;

    @include tablet {
      flex-direction: column;
      height: min-content;
      padding-top: 20px;
      padding-bottom: 20px;
    }

    &__contact {
      gap: 4px;
    }
  }
</style>

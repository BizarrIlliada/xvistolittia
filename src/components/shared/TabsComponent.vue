<template>
  <div class="tabs df df--col">
    <nav class="tabs__tabs">
      <ul class="tabs__tabs-list df">
        <li
          v-for="tab in tabs"
          :key="tab"
          class="tabs__tab"
          :class="{ 'tabs__tab--active': tab === selectedTab }"
          @click="changeTab(tab)"
        >
          {{ tab }}
        </li>
      </ul>
    </nav>

    <section class="tabs__body">
      <slot></slot>
    </section>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    tabs: string[],
    selectedTab: string,
  }

  defineProps<Props>();

  const emits = defineEmits<{
    onTabSelect: [tabName: string];
  }>();

  function changeTab(tabName: string) {
    emits('onTabSelect', tabName);
  }
</script>

<style scoped lang="scss">
  @import '@/assets/styles/utils/_animations.scss';

  .tabs {
    gap: 20px;

    &__tabs {
      overflow-x: scroll;
    }

    &__tabs-list {
      gap: 40px;
      list-style: none;
    }

    &__tab {
      position: relative;
      padding: 8px 0 10px;
      color: $surface-500;
      font-size: 18px;
      line-height: 27px;
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase;
      transition: .3s;
      cursor: pointer;

      &:hover {
        color: $surface-900;
      }

      &--active {
        color: $surface-900;

        &::after {
          content: '';
          height: 2px;
          width: 100%;
          position: absolute;
          left: 0;
          bottom: 0;
          background-color: $surface-900;
          animation: underline .3s ease;
        }
      }
    }
  }
</style>

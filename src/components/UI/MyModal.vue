<template>
  <div class="my-modal-backdrop" @click.self="closeModal">
    <div class="my-modal">

    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MyModal',
});

const emits = defineEmits(['onCloseModal']);

function closeModal() {
  console.log('Closed modal');

  emits('onCloseModal');
}
</script>

<style scoped lang="scss">
.my-modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #0003;
  z-index: 100;
}

.my-modal {

}
</style>

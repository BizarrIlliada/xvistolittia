declare global {
  interface HTMLElement {
    clickOutsideEvent?: (event: MouseEvent) => void;
  }
}

import type { DirectiveBinding } from 'vue';

export const clickOutside = {
  name: 'click-outside',

  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    el.clickOutsideEvent = function (event: MouseEvent) {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value.handler(event, el);
      }
    };
  },
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (binding.value.isShown && el.clickOutsideEvent) {
      document.body.addEventListener("click", el.clickOutsideEvent);
    }
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    if (el.clickOutsideEvent) {
      if (binding.value.isShown && !binding.oldValue.isShown) {
        document.body.addEventListener("click", el.clickOutsideEvent);
      } else if (!binding.value.isShown && binding.oldValue.isShown) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
      }
    }
  },
  unmounted(el: HTMLElement) {
    if (el.clickOutsideEvent) {
      document.body.removeEventListener("click", el.clickOutsideEvent);
    }
  },
};

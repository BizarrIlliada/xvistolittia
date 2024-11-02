import type { DirectiveBinding } from 'vue';

declare global {
  interface HTMLElement {
    onScroll?: () => void;
  }
}

export const parallax = {
  name: 'parallax',

  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const value = binding.value || 0.02;
    const isAbsolute = binding.modifiers.absY;
    const transformProp = 'transform';

    const applyParallax = () => {
      const scrollY = window.scrollY;
      const offset = isAbsolute
        ? scrollY * value
        : (scrollY - el.getBoundingClientRect().top - scrollY) * value;

      el.style[transformProp] = `translateY(${offset}px)`;
    };

    applyParallax();

    requestAnimationFrame(() => {
      el.style.transition = 'transform 0.1s ease-out';
    });

    const onScroll = () => {
      requestAnimationFrame(applyParallax);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    el.onScroll = onScroll;
  },

  unmounted(el: HTMLElement) {
    if (el.onScroll) {
      window.removeEventListener('scroll', el.onScroll);
    }
  }
};

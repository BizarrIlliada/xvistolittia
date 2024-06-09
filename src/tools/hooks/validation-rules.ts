export function useValidationRules() {
  function requiredRule(value: string) {
    if (!value || !value.length) {
      return 'authPage.errors.required';
    }

    return true;
  }

  function emailRule(value: string) {
    if (!/^[a-zA-Z0-9._%+-]+[^.]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      return 'authPage.errors.email';
    }

    return true;
  }

  return {
    requiredRule,
    emailRule,
  }
}

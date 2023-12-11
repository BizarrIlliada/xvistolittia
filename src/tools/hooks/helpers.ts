export function useHelpers() {
  function firstLetterToUpperCase(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return {
    firstLetterToUpperCase,
  }
}

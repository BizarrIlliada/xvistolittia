export function useHelpers() {
  function generateUrl(path: string) {
    return new URL(path.replace('@', '/src'), import.meta.url).href;
  }

  return {
    generateUrl,
  };
}
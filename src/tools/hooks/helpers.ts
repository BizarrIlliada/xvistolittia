export function useHelpers() {
  function generateUrl(path: string) {
    const url = new URL(path.replace('@', '/src'), import.meta.url).href
    console.log(url);

    return url;
  }

  return {
    generateUrl,
  };
}
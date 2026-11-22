/**
 * Add Astro's configured base path to an internal route or public asset path.
 * Paths passed here should be site-local paths such as `branding/logo.png`.
 */
export function withBasePath(path: string): string {
  const basePath = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const relativePath = path.replace(/^\/+/, "");

  return `${basePath}${relativePath}`;
}

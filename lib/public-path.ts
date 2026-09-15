const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function siteHref(path: string) {
  if (!basePath || !path.startsWith("/")) return path;

  const separatorIndex = path.search(/[?#]/);
  const pathname = separatorIndex === -1 ? path : path.slice(0, separatorIndex);
  const suffix = separatorIndex === -1 ? "" : path.slice(separatorIndex);
  const trailingPath =
    pathname === "/" || pathname.endsWith("/") ? pathname : `${pathname}/`;

  return `${basePath}${trailingPath}${suffix}`;
}

export function publicAsset(path: string) {
  return `${basePath}${path}`;
}

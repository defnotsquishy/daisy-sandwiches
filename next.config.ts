import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const githubBasePath = "/daisy-sandwiches";

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: "export",
      basePath: githubBasePath,
      trailingSlash: true,
    }
  : {
      async redirects() {
        return [
          { source: "/menus", destination: "/menu", permanent: true },
          { source: "/about-1", destination: "/trailer", permanent: true },
          { source: "/home", destination: "/", permanent: true },
        ];
      },
    };

export default nextConfig;

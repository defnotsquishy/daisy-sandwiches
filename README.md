# Daisy Sandwiches

Website redesign for Daisy Sandwiches at Godalming Railway Station.

- Production site: <https://daisy-sandwiches-godalming.nathanyu2010.chatgpt.site>
- GitHub Pages mirror: <https://defnotsquishy.github.io/daisy-sandwiches/>

## Local development

Requires Node.js 22 and pnpm.

```bash
pnpm install
pnpm dev
```

## Validation

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm run build:vercel
```

Business details, prices and opening hours should be confirmed with Daisy before future updates are published.

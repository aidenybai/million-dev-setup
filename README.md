# Million dev setup

> Note: I'm not sure how to correctly setup a dev environment for Next.js – this is a key piece needed to solve hydration

## Getting started

1. Clone + `pnpm install`
2. Replace 'PUT ABSOLUTE PATH TO MILLION HERE' in `package.json` with the absolute path to your local million repo `/packages/compiler/index.ts`
3. `pnpm run dev` to start the dev server
4. View the site at `localhost:5173/__inspect` to view code diffs
5. Also feel free to live test in `/test`
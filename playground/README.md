# Demo projects

- [`svelte/`](./svelte) — Svelte + Vite
- [`sveltekit/`](./sveltekit) — SvelteKit with the navigation adapter

Build the package from the repository root before starting a demo:

```sh
bun install
bun run build
```

Then enter either demo directory, install its dependencies, and start it:

```sh
cd playground/svelte
bun install
bun run dev
```

For SvelteKit, use `cd playground/sveltekit` instead. Each demo is intentionally minimal and uses the package from the local repository.

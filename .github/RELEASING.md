# Release notes (maintainer only)

This package is maintained by Angga Islami (`AnggaaIs`). Bug reports and feature requests are welcome through GitHub Issues.

## npm release

1. Make sure CI is green on `main`.
2. Update `version` in `package.json` and push the change.
3. Create a GitHub Release for the matching tag (for example, `v1.0.0`).
4. The `Publish to npm` workflow runs unit tests, builds and verifies the tarball, then publishes the package.

The GitHub repository needs an Actions secret named `NPM_TOKEN` with publish access to `svelte-toploader`. For a one-off manual publish, log in to npm and run `npm publish` from the package root. Its `prepack` script builds and checks the package first.

# Release notes (maintainer only)

This package is maintained by Angga Islami (`AnggaaIs`). Bug reports and feature requests are welcome through GitHub Issues.

## npm release

1. Make sure CI is green on `main`.
2. Update `version` in `package.json` and push the change.
3. For the very first npm publish, log in with the owning npm account and run `npm publish` from the package root. The `prepack` script builds and checks the package.
4. Add an npm publish token as the `NPM_TOKEN` Actions secret in GitHub repository settings.
5. For future versions, create a GitHub Release for the matching tag (for example, `v1.0.1`). The `Publish to npm` workflow runs tests, rebuilds and verifies the tarball, then publishes it.

The workflow expects the release tag to match the version in `package.json` and needs an `NPM_TOKEN` with publish access to `svelte-toploader`.

# Maintainer notes

## Releases

The package is published to npm. The public README is for package users; release steps live here.

1. Make sure CI is green on the default branch.
2. Update `version` in `package.json` and commit the change.
3. Create a GitHub Release for the matching tag (for example, `v1.0.0`). This starts the npm release workflow.
4. The workflow runs checks and publishes to npm. The GitHub repository needs an Actions secret named `NPM_TOKEN` with publish access to the `svelte-toploader` package.

For a manual publish from this directory, log in to npm and run `npm publish`. The `prepack` script builds and checks the package first.

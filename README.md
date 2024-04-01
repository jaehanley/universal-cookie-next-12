This repo demonstrates an issue with built versions of Next 12 and the `universal-cookie` package. The issue is that the `universal-cookie` package is not able to call `cookies.get` when built with Next 12.x. This issue does not occur when running the app in development mode.

## Steps to reproduce
1. Clone this repo
2. Run `yarn install`
3. Run `yarn build`
4. Run `yarn start`
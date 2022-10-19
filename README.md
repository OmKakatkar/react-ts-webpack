# React TypeScript WebPack Starter

A custom React Typescript starter using Webpack 5.

## Download and Setup

Step 1: Install degit if you haven't already.

```bash
npm install -g degit
```

Step 2 : Run the command with your app name.

```bash
npx degit https://github.com/OmKakatkar/react-ts-webpack my-app
```

Step 3: Install dependencies

```bash
cd my-app && yarn
```

## Dev Server

```bash
yarn start
```

## Production Build

```bash
yarn build
```

## Linting

- Make sure you have installed [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugin for VSCode.
- Then run the following command for manual linting.

```bash
yarn lint
```

## Formatting

- Install the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugin for VSCode.
- Then run the following command for manual formatting.

```bash
yarn format
```

## Automatic Linting and Formatting with VSCode

- Go to Manage > Settings > User.
- Enable the `Format On Save` option.
- Now your code will the auto linted and formatted on save.

## Pre Commit Hook

- The starter uses `husky` for a pre-commit hook.
- It is useful while developing as a team to ensure the code to be commited is properly linted and formatted.
- This does not require any any additional setup.
- It would auto format the code before commit without errors.
- It would try to fix linting error before aborting the commit if it could not fix the linting issues.

## Features

- Provides a starter folder for React TypeScript Web Application
- Babel and Webpack 5
- HTML Parser
- CSS Loader
- Image Loader
- Inline SVG Loader
- Dev Server with Webpack
- Separate Dev and Prod Configs for Webpack
- React Refresh for Hot Reload
- ESLint
- Prettier
- Pre Commit Linting + Formatting with Husky
- Babel Runtime
- Asset Copy Plugin
- Code Splitting (Vendor + Main + Runtime)
- Caching
- Lazy Loading
- Support for dotenv files

## Notes

- Use `.env.development` for dev environment
- Use `.env.production` for prod environment
- Modify babel config in [babelrc](https://github.com/OmKakatkar/react-ts-webpack/blob/main/.babelrc)
- [All linting rules](https://github.com/OmKakatkar/react-ts-webpack/blob/main/.eslintrc.js)
- [All formatting rules](https://github.com/OmKakatkar/react-ts-webpack/blob/main/.prettierrc.js)
- [TypeScript Config](https://github.com/OmKakatkar/react-ts-webpack/blob/main/tsconfig.json)
- [Webpack Config](https://github.com/OmKakatkar/react-ts-webpack/tree/main/webpack) includes dev, prod configs along with a common config. More plugins can be added here.

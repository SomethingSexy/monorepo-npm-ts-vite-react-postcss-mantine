# monorepo-npm-ts-vite-react-postcss-maintine

## Prerequisites

- Node
  - https://nodejs.org/en

## What this includes

- [x] Monorepo via NPM workspaces. This does not publish to any package registry yet. The app-core pulls from sdk locally.
- [x] TypeScript
- [x] Vite
- [x] React
- [x] ~~Tailwind~~ Moving to basic PostCSS with Mantine
- [x] UI Library - Mantine
- [x] Semantic Release
- [ ] Semantic Release publish package to Github Packages
- [ ] Semantic Release changelog
- [x] Prettier
- [x] Linting - eslint
- [ ] Testing
- [ ] Common configuration package
  - [x] eslint
  - [ ] prettier
- [ ] App deployment models
  - [x] ngnix with docker image
  - [ ] node with docker image

## Installation

`npm run ci`

## Usage

### Deploying

Build for production

`npm run build`

Run dev container or run docker compose locally

### Developing

#### SDK

Build SDK

`npm run build`

#### Applications

Build and run the app in dev mode

`npm run dev`

Build for production

`npm run build`

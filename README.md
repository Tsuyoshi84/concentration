# Concentration

[![Test](https://github.com/Tsuyoshi84/concentration/actions/workflows/test.yml/badge.svg)](https://github.com/Tsuyoshi84/concentration/actions/workflows/test.yml)
[![CodeQL](https://github.com/Tsuyoshi84/concentration/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/Tsuyoshi84/concentration/actions/workflows/codeql-analysis.yml)
[![Coverage Status](https://coveralls.io/repos/github/Tsuyoshi84/concentration/badge.svg)](https://coveralls.io/github/Tsuyoshi84/concentration)
[![codebeat badge](https://codebeat.co/badges/4f17cdc6-e6be-42ea-907a-c4e4164f2588)](https://codebeat.co/projects/github-com-tsuyoshi84-concentration-master)

It is a Concentration game. You can play [here](https://tsuyoshi84.github.io/concentration/).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use `pnpm build:prod` for a production build (or `ng build --configuration=production`).

## Running unit tests

Run `ng test` to execute the unit tests via [Vitest](https://vitest.dev/).

CI runs the same unit tests and a production build. End-to-end tests are not configured; the former Protractor target was removed because Protractor is end-of-life.

## Linting

Use Biome for TypeScript/JavaScript/HTML linting and formatting, and Stylelint for CSS:

- `pnpm check` — lint and apply safe fixes with [Biome](https://biomejs.dev/)
- `pnpm format` — format with Biome
- `pnpm lint-css` — lint CSS with [Stylelint](https://stylelint.io/)

`ng lint` is not configured. The former `@angular-eslint` target was removed because the required packages were never installed and Biome already covers the project's lint needs.

## Deploy

Run `npm run-script deploy` to deploy the app to the github page.

# JS Quirks and Feature

For fun and learn

## Help

[Snyk blog: create npm package](https://snyk.io/blog/best-practices-create-modern-npm-package/)

### Package testing

#### npm pack

1. Build library `pnpm build`
2. From within your npm package directory, run `npm pack` in your terminal. Note the .tgz file it produces and the location of it.
3. Change directories to the project directory where you want to use the npm package. Example: cd /path/to/project
4. From within the client project directory, run `pnpm install /path/to/qnf-js-lib.tgz` but replace it with the proper path to the location of the .tgz file from step 1
5. Then you can start using the package in that client project to test things out
   This will give you the closest to production experience for using your npm package.

#### npm link

1. Build library `pnpm build`
1. From within your npm package directory run `npm link` in your terminal
1. Change directories to the project directory where you want to use the npm package. Example: `cd /path/to/project`
1. From within the client project directory run `npm link @r2kode/qnf-jslib`

#### Relative path

1. Build library `pnpm build`
2. From within your client project directory run `pnpm install /path/to/your/qnf-js-lib` in your terminal

## Bookmarks

[TS Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)

[30 seconds of code](https://www.30secondsofcode.org/js/p/1)

[zod](https://zod.dev/)

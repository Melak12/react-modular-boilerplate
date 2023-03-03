# React Modular Boilerplate for Enterprise Apps

🚀 Quickly dive into your product development without worring about the folder structure and configurations.

This is well structured template (**starter kit**) with modular (feature-driven) architecture for building medium to enterprise react web app.

As we all know the complexity of the code grows with the time of the app being in development. This particular architecture will be an overkill for a simple 1-3 page app or prototype. But for an app which is expected to grow with a new and new features added to it, this structure provides quite an accessible way to balance the growing complexity.

In his artcle [Screaming Architecture](https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html) Bob Martin says: <br/>
&nbsp; "Your architectures should tell readers about the system, not about the frameworks you used in your system. If you are building a health-care system, then when new programmers look at the source repository, their first impression should be: “Oh, this is a heath-care system”."

### benefits
- The biggest pro of this structure is the ease of adding/updating code. Since the bulk of the code is broken down into different features (modules) it is easy to add new features or update existing `modules`. This separation also simplifies the codebase since now files can be considered private which helps with understanding the codebase.

- Another benefit is that the code outside the `modules` folder is generally pretty simple to understand since most of the business logic is wrapped up inside the `modules` folder. This again makes understanding and working with the code that much easier.

- Better code discoverability - it's easier to locate things, what is located where.

- Better encapsulation - no need for other modules to know too much about each other or too easily include code from each other, no need for the code which is used only for one feature to pile in the common place;

- Better testability - the more separate the components are, the easier to test them independently from each other.

 - Easier to work for a team - different people can work on different features (`modules`) without interfering much with each other's work.

 - Better reusability, the core can be reused for other apps, also features can be detached more or less freely, considering that the core will stay the same or similar;


### Rule of Thumb 
- Don't use or import one module in another module directly. Use global store to manage common states. 
- Only import resources or components from modules coming from their `.index.ts` file only. Unless doing so, you would get ESlint error.  

## Features
- 100% Typescript
- Axios Http Client with interceptiors
- Sample Todo Examples
- Modular architecture: in compliance with the  best architectural practices
- Import alias 
- Unit testing with Jest
- MUI - Material UI 
- ESLINT - Configured to get Eslint error when you try to import a component or a class inside a module that doesn't come from index.ts
- Commonly used utility functions (`/src/utils/`)
- [MIT](LICENSE) License

## Tech Stack
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Jest](https://jestjs.io/),

## Directory Structure

`├──`[`assets`](./src/assets/) — Global static assets such as images, svgs, icons, so on.<br>
`├──`[`components`](./src/components/) — Global shared components<br>
`├──`[`config`](./src/config/) — Global configurations and constants<br>
`├──`[`contexts`](./src/contexts/) — Shared React Contexts<br>
`├──`[`hooks`](./src/contexts/) — Shared custom react hooks <br/>
`├──`[`models`](./src/models/) — Application wise model classes<br/>
`├──`[`modules`](./src/modules/) — Modules (features) that are independent each other.<br/>
&nbsp; &emsp;`├──`[`Auth`](./src/modules/Auth) — module related to Authentication <br/>
&nbsp; &emsp;`├──`[`Todo`](./src/modules/Todo) — module related to Todo List <br/>
&nbsp; &emsp;`├──...` <br/>
`├──`[`pages`](./src/modules/) — Shared pages that are not necessarily be included in modules.<br/>
`├──`[`routes`](./src/routes/) — Anything related to routing setup.<br/>
`├──`[`services`](./src/services/) — Contains all external and shared services.<br/>
`├──`[`tests`](./src/tests/) — Contains tests for shared services, functions and components. <br/>
&nbsp; &ensp;&nbsp; &emsp;&nbsp;Note: tests for individual modules are included in the module (feature) directory.<br/>
`├──`[`utils`](./src/utils/) — Global Utility functions <br>
`├──`[`index.html`](./index.html) — HTML page containing application entry point<br>
`├──`[`index.tsx`](./src/index.tsx) — Single-page application (SPA) entry point<br>
`├──`[`package.json`](./package.json) — Workspace settings and NPM dependencies<br>
`├──`[`tsconfig.ts`](./tsconfig.json) — TypeScript configuration<br>
`├──`[`tsconfig.aliases.ts`](./tsconfig.aliases.json) — Extended Typescript configuration that contains import aliases. <br>
`└──`[`vite.config.ts`](./vite.config.ts) — JavaScript bundler configuration ([docs](https://vitejs.dev/config/))<br>
`├──`[`.eslintrc.json`](./.eslintrc.json) — ESlint configuration and rules<br>


### Installation
``` bash
# install dependencies
npm install

# serve at localhost
npm run dev
```

### Requirements
- [Node.js](https://nodejs.org/) v18+

### Optional Recommendations
- [VSCode](https://code.visualstudio.com/): Free code editing IDE

### Contribution
Let’s create great products together! We encourage and welcome collaboration and any type of contribution. 👉 Learn the [contributing docs](CONTRIBUTING.md) on how to contribute the right way.


###  Give a shout-out to me

- ⭐ Star my GitHub repo
- 🐞 Create requests, submit bugs, suggest new features
- ☄️  Share to your friends and collegues
- 🔥 Follow me on [Twitter](https://twitter.com/MelakeWub) and [LinkedIn](https://www.linkedin.com/in/melake-wub/)
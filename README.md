# FirstAngularProject

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.


### 📁 `src/` Folder Overview

This folder contains the main source code for the Angular application. It is organized in a modular and feature-based structure to keep the codebase maintainable and scalable.

-   **`index.html`** -- The main HTML file loaded in the browser.

-   **`main.ts`** -- The entry point for the Angular app; bootstraps the root module.

-   **`styles.css`** -- Global styles applied across the entire application.

#### 📁 `app/` -- Main Application Code

The `app` folder houses all the main pages, routes, and configuration files.

-   **`app.component.*`** -- Root component of the application.

-   **`app.routes.ts`** -- Application-wide route definitions.

-   **`app.config.ts`** -- Configuration settings or constants.

##### 🏠 `home/` -- Homepage Feature

Contains subcomponents that make up the homepage:

-   **`hero/`** -- Top section of the homepage.

-   **`stats/`** -- Section showing statistics or metrics.

-   **`services/`** -- Services offered.

-   **`additional-services/`** -- Additional features or services highlighted.

##### 📄 `about/` -- About Page Component

##### ✉️ `contact/` -- Contact Page Components

Includes a nested component:

#### 📁 `components/` -- All reusable components

##### 📎 `header/` -- Header Component (navigation, branding, etc.)

##### 📎 `cta/` -- Call-to-action button with changeable text

##### 📎 `hero/` -- Hero component (Needs image, title and button text to be set)

##### 📎 `scroll-to-top` -- Scroll-to-top button 

##### 📎 `footer/` -- Footer Component

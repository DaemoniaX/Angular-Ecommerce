# Angular1

This project was developed using Angular CLI version 19.2.12.

It is a basic, unfinished e-commerce application featuring:

🛒 Purchase Page
Dynamic stock indicator (only indicates whether stock is available; the stock count does not decrease when items are "purchased").

Product display module: includes picture, description, and price.

Header with links to the cart and homepage.

"About Us" section (currently just text, not linked or scrollable).

🧺 Cart Page
All items are displayed as a list of blocks.

You cannot add items that are out of stock.

Supports adding/removing multiple items.

Includes a purchase summary.

Developed by @DaemoniaX on 21/05/2025 (France).
This project will be improved after the exam period.
## Development server

To start a local development server you need first to install angular throught npm, then run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

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

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Angular1

This project was developped using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.12.  
It is a basic unfinished E-commerce app with :  
A puchase market page {  
    -dynamic stock indicator(half since it shows if there is stock, but if you "purchase" some, the stock will not decrease)  
    -[picture + description + price] module  
    -header links to cart and homepage when clicking  
    -About us section, links not there it's just text, and it is not linked down  
}A cart market page{  
    -all of the items are added as a list of blocks  
    -you can't add items that are out of stocks  
    -you can purchase multiple items and add/remove items  
    -there is a summary puchase  
}  
Tailwind was used.  
Developped by me @DaemoniaX the 21/05/2025 FR. It will be improved after the exam period.  
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
## Docker part
  
The docker image is accessible at daemoniax/angular-ecommerce-app-dockerversion or at https://hub.docker.com/r/daemoniax/angular-ecommerce-app-dockerversion,  
you can pull the image using :

```bash
docker pull daemoniax/angular-ecommerce-app-dockerversion
```

The Dockerfile and .dockerignore are in the github folder, even tho node_module folder is not incuded in the github repo.
## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

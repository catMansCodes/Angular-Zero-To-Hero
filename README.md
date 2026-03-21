# AngularZeroToHero

### This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.19.

This guide provides step-by-step instructions for creating a new angular 19 project with complte Zero to One practical study guide.

## Table of Contents

1. [Step-00: Prerequisites](#step-0-prerequisites)
2. [Step-01: Create An Angular Project](#step-01-create-an-angular-project)
3. [Step-02: Install Third Party Packages And Configurations](#step-02-install-third-party-packages-and-configurations)
4. [Step-03: Install Or Configure The Theme](#step-03-install-or-configure-the-theme)
5. [Step-04: Create Core Components For Home Page](#step-04-create-core-components-for-home-page)

---

## Step-0: Prerequisites

Before starting, ensure you have:

- Node.js v22 or higher installed
- npm installed
- NodeJS download & setup:  [Download node](https://nodejs.org/en)
- Angular Download & setup: [Angular official](https://angular.dev/)

```bash
node -v        # >= 22.x recommended 
npm -v 

npm install -g @angular/cli@19  #Install Angular CLI 19 globally
ng version  #Verify the version 
```
---

### Step-01: Create An Angular Project

- Generate/Create an angular application

```bash
ng new AngularZeroToHero

cd : AngularZeroToHero
ng serve #ng s or npm run start
```

---

### Step-02: Install Third Party Packages And Configurations
- Install the Bootstrap 5

```bash
npm install bootstrap@5
```

- Install the Fontawsome free verion 6

```bash  
npm install @fortawesome/fontawesome-free@6 
```

- Update `angular.json` file with Bootstrap & fontawsome modules path.

```json
"styles": [ 
  "node_modules/bootstrap/dist/css/bootstrap.min.css", 
  "node_modules/@fortawesome/fontawesome-free/css/all.min.css", 
  "src/styles.css" 
] 

"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" 
] 
```

- Use the Google Lato fonts & add the font entries in `index.html` file. We can add it on our global css file also.

```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
```
---

### Step-03: Install Or Configure The Theme

- There are multiple options for angular theming i.e: 
- PrimeNG - https://primeng.org/templates
- Material Theme - https://material.angular.dev/guide/theming 
- Bootstrap Theme - https://getbootstrap.com/docs/4.1/getting-started/theming/ 
- Our own cusom Theme

**Note:** 
- In this Tutorial we are using bootstrep 5 with our custom Theme/Template.
---

### Step-04: Create Core Components For Home Page

- Generate the core compoents for the Home Page
- The App structure will be like 1.Header <--> 2. Layout(Side nav + main conatins) <--> 3. Footer

```bash
ng g c header
ng g c layout
ng g c footer
```

- add the selectores entries on app compoenets

```html
<app-header></app-header>
<app-layout></app-layout>
<app-footer></app-footer>
```

- Inside layout component create 2 more components

```bash
ng g c side-nav-bar
ng g c main-content
```

- Update layout componet html

```html
<section class="app-body-wrapper">

    <div class="container app-body-contains">
        <app-side-nav-bar></app-side-nav-bar>
        <app-main-content></app-main-content>
    </div>

</section>
```

- In `<app-main-content></app-main-content>` component use the `<router-outlet></router-outlet>` to load other components using router.

- Build Reusable  `<app-page-title></app-page-title>` component & use it in other all component.
---


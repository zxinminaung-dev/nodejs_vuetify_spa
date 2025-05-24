# Node.js + Vue 3 + Vuetify 3 Single Page Application

A minimal Single Page Application (SPA) using **Vue 3**, **Vuetify 3**, and **Express.js** with file-based routing, API integration, and material design components.

## 📁 Project Structure

```
project-root/
│
├── public/
│   ├── index.html            # Main HTML entry point
│   ├── assets/               # Vue, Vuetify, Axios JS/CSS assets
│   ├── icons/                # Material Design Icons
│   ├── src/
│   │   └── views/            # Vue views: Home.js, About.js, Contact.js
│   └── router/
│       └── user.router.js    # Example Express router for users
│
├── assets/                   # Public static assets (if any)
├── server.js                 # Express server file
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** installed.

```bash
node -v
npm -v
```

### Install Dependencies

There are no dependencies required for the frontend — everything is loaded via CDN. You only need to install dependencies for the backend (if any).

If you plan to use `express` only:

```bash
npm init -y
npm install express
```

### Run the App

```bash
npm start 
```
or 
```bash
node app.js 
```
By default, the app runs on:

```
http://localhost:3500
```

## 🧩 Features

- Vue 3 + Vue Router 4 (via CDN)
- Vuetify 3 with Material Design Icons (via CDN)
- SPA navigation using `<router-view>`
- Dynamic navigation drawer
- Axios HTTP requests
- Express.js API with a user route

## 🌐 Available Routes

### Frontend (SPA)

- `/` → Home view
- `/about` → About view (fetches users via `/api/user`)
- `/contact` → Contact view

### Backend (API)

- `/api/user` → Responds with mock or database user data (defined in `public/router/user.router.js`)

## 📝 Example Code

### `/public/index.html`

Defines root `#app`, loads Vue, Vuetify, Router, Axios, and includes page logic for routing and rendering.

```html
<script>
  const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ];
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(""),
    routes,
  });
</script>
```

### `About` View: Data Fetching

```js
window.About = {
template: `
        <v-col cols="12" :elevation="2">
          <v-card>
            <v-card-title>{{ title }}</v-card-title>
            <v-card-subtitle>{{ description }}</v-card-subtitle>
            <v-card-text>
              <v-data-table :items="userList"></v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
  `,
  data() {
    return {
      title: "About Page",
      userList: []
    };
  },
  created() {
    this.GetUserList();
  },
  methods: {
    GetUserList() {
      axios.get('http://localhost:3500/api/user')
        .then(response => {
          this.userList = response.data;
        });
    }
  }
};
```

## 🛠 Customize & Extend

You can extend this SPA by:

- Adding new views under `public/src/views/`
- Registering new routes in the `routes` array
- Creating additional Express routes under `public/router/`

## 📦 Build Notes

Since this app loads everything via CDN, there's no build step. You can convert this into a full Vue CLI/Vite app if needed in the future.

## 🧑‍💻 Author - Zin Min Aung

This template was built for lightweight development using Vue 3 and Vuetify 3 without needing a build toolchain.

## 📄 License

This project is licensed under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files 
(the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.

© 2025 Zin Min Aung

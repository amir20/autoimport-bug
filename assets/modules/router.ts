import { type App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";

export const install = (app: App) => {
  const router = createRouter({
    history: createWebHistory("/"),
    routes,
  });

  app.use(router);
};

import {
  RootRoute,
  Route,
  Router,
} from "@tanstack/react-router";

import Home from "./Home";
import About from "./About";

const rootRoute = new RootRoute();

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
]);

const router = new Router({
  routeTree,
});

export default router;
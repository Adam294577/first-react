// import { type RouteConfig } from "@react-router/dev/routes";
// import { flatRoutes } from "@react-router/fs-routes";

// export default flatRoutes() satisfies RouteConfig;

import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("./index.jsx"),
  route("/home", "./home.jsx"),
  route("/about", "./about.jsx"),
  // pattern ^           ^ module file
] satisfies RouteConfig;

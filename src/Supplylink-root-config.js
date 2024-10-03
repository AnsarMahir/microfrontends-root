import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@supplilink/sign-in",
  app: () => System.import("@supplilink/sign-in"),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@Supplylink/navbar",
//   app: () => System.import("@Supplylink/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});

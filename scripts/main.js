import appNav from "./components/appNav.js";
import appView from "./components/appView.js";

$(document).ready(() => {
  const app = Vue.createApp({
    components: {
      "app-nav": appNav,
      "app-view": appView,
    },

    data() {
      return {};
    },
  });

  app.mount("#app");
  //app.unmount();
});

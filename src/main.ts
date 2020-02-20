import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import {
  Form,
  Field,
  Button,
  Panel,
  Icon,
  Toast,
  Col,
  Row,
  NavBar
} from "vant";

import "vant/lib/index.css";

Vue.config.productionTip = false;
Vue.config.silent = true;

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Panel);
Vue.use(Icon);
Vue.use(Toast);
Vue.use(Col);
Vue.use(Row);
Vue.use(NavBar);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import App from "./components/App/App.svelte.js";
const app = new App({
  target: document.body
});
export default app;
if (import.meta?.hot) {
  undefined /* [snowpack] import.meta.hot */ .accept();
  undefined /* [snowpack] import.meta.hot */ .dispose(() => {
    app.$destroy();
  });
}

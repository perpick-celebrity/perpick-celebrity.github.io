import Request from "../utils/HttpClient.js";
import config from "../config/config.js";
const Apis = {
  login: () => Request({
    url: "auth/login",
    method: "POST",
    data: {
      account: config.PP_USERNAME,
      password: config.PP_PASSWORD
    }
  })
};
export default Apis;

import axios from "axios";
import router from "@/router";

export function setupAxiosAuth() {
  axios.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      if (error.response.status === 401) {
        router.push("/login");
      }
      throw error;
    }
  );
}

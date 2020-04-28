import axios from "axios";
import router from "@/router";

export function setupAxiosInterceptor(jwtToken: string) {
  axios.defaults.headers.common["X-App-Auth-Token"] = jwtToken;
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

export function saveJwtToken(token: string) {
  window.localStorage.setItem("jwt_token", token);
}

export function receiveJwtToken(): string {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return window.localStorage.getItem("jwt_token")!;
}

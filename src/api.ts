import axios from "axios";

export const request = axios.create({
  baseURL: "https://api.v2.suivitracking.staging.bfast-vn.net",
});
function eraseCookie(name: string) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
export function setToken(token: string): void {
  localStorage.setItem("userToken", token);
}

export function deleteToken(): void {
  localStorage.removeItem("userToken");
  eraseCookie("userToken");
}

function getCookie(name: string) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function getToken(): string {
  return localStorage.getItem("userToken") || getCookie("userToken") || "";
}

request.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (config.headers && token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// request.interceptors.response.use(
//   (response) => {
//     // const config = response.config;
//     // Access the config object here
//     return response;
//   },
//   (error) => {
//     if (
//       error.response.status == 401 &&
//       !error.request.responseURL.includes("/getMe") &&
//       !error.request.responseURL.includes("/login") &&
//       !error.request.responseURL.includes("/reset-password")
//     ) {
//       deleteToken();
//       return (window.location.href = "/auth/login");
//     }
//     // Handle error
//     return Promise.reject(error?.response?.data?.error || error);
//   }
// );

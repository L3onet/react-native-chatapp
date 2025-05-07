const SERVER_IP = "192.168.10.128:3977";

export const ENV = {
  SERVER_IP: SERVER_IP,
  BASE_PATH: `http://${SERVER_IP}`,
  API_URL: `http://${SERVER_IP}/api`,
  SOCKET_URL: `http://${SERVER_IP}`,
  ENDPOINTS: {
    AUTH: {
      REGISTER: "auth/register",
      LOGIN: "auth/login",
      REFRESH_ACCESS_TOKEN: "auth/refresh-access-token",
    },
    ME: "user/me",
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
}
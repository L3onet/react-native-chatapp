import { jwtDecode } from "jwt-decode";

export function hasExpiredToken(token) {
  const { exp } = jwtDecode(token);
  const currentDate = new Date().getTime() / 1000;
  
  if (exp <= currentDate) {
    return true;
  }

  return false;
}
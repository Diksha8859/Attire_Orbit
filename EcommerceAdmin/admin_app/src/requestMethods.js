// requestMethods.js

// Assuming you have something like this:
import axios from 'axios';

// Make sure you correctly import and initialize your access token
const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
const currentUser = user && JSON.parse(user)?.currentUser;
const accessToken = currentUser?.accessToken || null;

if (!accessToken) {
  console.error("Access token is not available");
}

// Assuming you have an axios instance that uses the access token
export const publicRequest = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const userRequest = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: { token: `Bearer ${accessToken}` },
});

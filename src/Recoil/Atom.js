import { atom } from "recoil";


const loginUser = JSON.parse(localStorage.getItem('currentuser')) || false
console.log(loginUser)

export const IsLogin = atom({
    key: "IsLogin",
    default: loginUser,
  });
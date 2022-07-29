import { atom } from "recoil";

export const baseUrlState = atom({
  key: "baseUrlState",
  default:
    "https://asia-northeast3-fu-webapp.cloudfunctions.net/api/codingTest",
});

export const accessKeyState = atom({
  key: "accessKeyState",
  default: "imsimple2563",
});

export const phoneNumberState = atom({
  key: "phoneNumberState",
  default: "",
});

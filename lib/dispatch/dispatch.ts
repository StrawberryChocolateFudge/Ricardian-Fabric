import { AccountantPage, CreatePages, ManagerPages } from "../types";
import {
  dispatch_setAccountantPages,
  dispatch_setCreatePages,
  dispatch_setManagerPages,
} from "./stateChange";

//Dispatch an event to trigger something
export function dispatch(to: any, detail: any) {
  document.body.dispatchEvent(new CustomEvent(to, { detail }));
}

export function goToCreateRoutes() {
  dispatch_setCreatePages(CreatePages.Routes);
}

export function gotToManagerRoutes() {
  dispatch_setManagerPages(ManagerPages.Routes);
}

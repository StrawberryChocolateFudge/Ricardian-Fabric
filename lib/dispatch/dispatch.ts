import { CreatePages } from "../types";
import { dispatch_setCreatePages } from "./stateChange";

//Dispatch an event to trigger something
export function dispatch(to :any, detail : any) {
  document.body.dispatchEvent(new CustomEvent(to, { detail }));
}


export function goToCreateRoutes(){
  dispatch_setCreatePages(CreatePages.Routes);
}
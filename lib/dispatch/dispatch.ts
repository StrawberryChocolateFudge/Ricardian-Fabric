//Dispatch an event to trigger something
export function dispatch(to :any, detail : any) {
  document.body.dispatchEvent(new CustomEvent(to, { detail }));
}

import { dispatch_renderError } from "../../dispatch/render";
import { dispatch_setIPFS, dispatch_setPage } from "../../dispatch/stateChange";
import { PageState, State } from "../../types";
import { getById } from "../../view/utils";

export function ipfsConfigActions(props: State) {
  const applyButton = getById("apply-ipfs-config-changes");

  applyButton.onclick = function () {
    const hostEl = getById("ipfs-host") as HTMLInputElement;
    const subdomainEl = getById("ipfs-subdoman-resolution") as HTMLInputElement;
    const portEl = getById("ipfs-port") as HTMLInputElement;
    const protocolEl = getById("ipfs-protocol") as HTMLInputElement;

    if (hostEl.value === "") {
      dispatch_renderError("Invalid config!");
      return;
    }
    if (subdomainEl.value === "") {
      dispatch_renderError("Invalid config!");
      return;
    }
    if (portEl.value === "") {
      dispatch_renderError("Invalid config!");
      return;
    }

    if (isNaN(parseInt(portEl.value))) {
      dispatch_renderError("Invalid port config");
      return;
    }

    if (protocolEl.value === "") {
      dispatch_renderError("Invalid config!");
      return;
    }

    dispatch_setIPFS({
      host: hostEl.value,
      v2Url: subdomainEl.value,
      port: parseInt(portEl.value),
      protocol: protocolEl.value,
    });
    dispatch_setPage(PageState.Dashboard);
  };
}

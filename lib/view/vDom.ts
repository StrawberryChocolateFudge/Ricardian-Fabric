import { render } from "lit-html";
import { fetchDependency } from "../fetch";
import { AcceptablePageProps } from "../types";
import {
  acceptablePageLayout,
  initialStringDom,
} from "./templates/acceptablePage";
import {
  getArweaveDependencyUrl,
  getBundleSrcUrl,
  getCommunityJsDependencyUrl,
} from "./utils";

export async function createAcceptablePage(
  pageProps: AcceptablePageProps
): Promise<string> {
  const parser = new DOMParser();

  const doc = parser.parseFromString(initialStringDom, "text/html");

  const arweaveDepUrl = getArweaveDependencyUrl();
  const communityJsDepURl = getCommunityJsDependencyUrl();
  const bundlerSrcUrl = getBundleSrcUrl();
  const arweaveCode = await fetchDependency(arweaveDepUrl);
  const communityCode = await fetchDependency(communityJsDepURl);
  const bundeCode = await fetchDependency(bundlerSrcUrl);

  render(
    acceptablePageLayout(
      {
        arweaveDeps: {
          src: arweaveDepUrl,
          code: arweaveCode,
        },
        communityJsDep: {
          src: communityJsDepURl,
          code: communityCode,
        },
        mainDep: {
          src: bundlerSrcUrl,
          code: bundeCode,
        },
      },
      pageProps
    ),
    doc.body
  );
  const serializer = new XMLSerializer();
  return serializer.serializeToString(doc);
}

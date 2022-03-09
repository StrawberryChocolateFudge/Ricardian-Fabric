# Ricardian-Fabric DAO

## THE MAINTAINED CODE HAS MOVED TO THE ORGANIZATION https://github.com/Ricardian-Fabric/Ricardian-Fabric
## THIS REPO IS DEPRECATED

## DOCS

Detailed docs on how to use it can be found at docs.ricadianfabric.com

## 0.0.4

The latest version of ricadian fabric.
DEPLOYED AT:
https://5sogpgw5uhq7a6lr3kkw7mxkq2mxvgikf66qujhhmte5zntm.arweave.net/7Jxn_mt2h4fB5cdqVb7L-qhpl6mQovvQok52TJ3LZsI

## Use

Run the front end

`yarn run dev`

## Deployment

`yarn build`

After the build, the js dependency must be separately deployed.

The URL to access it must be placed into the data-dependency on page.
The state must be configured for using this dataprop with getSourceFromDataProp(pageEl)

Bump up the version in the data-version prop too.

Then run `yarn inline`

The final bundle.html is ready to be deployed!

Upload these files using the Ricardian Fabric permaweb upload feature

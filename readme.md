# Ricardian-Fabric IPFS-Web3 version

The IPFS version of Ricardian fabric.


# 0.0.4
The latest version of ricadian fabric, still under development and not in production. 
The latest version on testnet is 0.0.3 and there are breaking changes in contract verification and signing between the versions.
It is advised to wait to use the version on the website till I update it to the latest version. 
 

## Use

Run the front end

`yarn run dev`

## Deployment

`yarn build`

After the build, the js dependency must be separately deployed.

The URL to access it must be placed into the data-dependency on page.
The state must be configured for using this dataprop with getSourceFromDataProp(pageEl)

The same goes for the logo. it must be separately deployed and the url placed in the data-logo dataprop

Bump up the version in the data-version prop too.

Then run `yarn inline`

The final bundle.html is ready to be deployed!

## 

Detailed docs on how to use it can be found on docs.ricadianfabric.com, currently version 0.0.3 is documented there.
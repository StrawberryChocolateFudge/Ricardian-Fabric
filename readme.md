# Ricardian-Fabric IPFS-Web3 version

The IPFS version of Ricardian fabric.
 

This branch (withIPFS) is for Ricardian Fabric, this version uses IPFS and web3 and an ipfs-arweave bridge on the server side
Now with with a docx dropper!
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

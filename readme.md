# Ricardian-Fabric

A new take on Ricardian Contracts.
A tool that helps to create payable, handwritten, machine processable financial contracts that live on arweave.

This branch (firstImpl) is for Ricardian Fabric Lite, the version without payments and things that require KYC.

## Use

Run the front end

`yarn run dev`

You need testweave-docker
`docker-compose up`

## post to

This field will describe the endpoint you want to hit.  
The https will be appended if it's missing.  
The post will only happen if either webhook or redirect is selected.

The id of the transaction will be appended like /{transactionid}
Webhooks have an optional secret parameter which is a preshared secret that will be posted in the request body :
`{ secret: string }`

You can use this to collect any details you like.  It will be not saved anywhere.
The participant will be able to fill it out on the acceptable contract page.

For redirection, there is no secret but you may give a cookie on your website to identify the users who get redirected there. It's up to you!

## Deployment

`yarn build`

After the build, the js dependency must be separately deployed.

The URL to access it must be placed into the data-dependency on page.
The state must be configured for using this dataprop with getSourceFromDataProp(pageEl)

The same goes for the logo. it must be separately deployed and the url placed in the data-logo dataprop

Then run `yarn inline`

The final bundle.html is ready to be deployed!

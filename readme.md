# Ricardian-Fabric

A new take on Ricardian Contracts.
A tool that helps to create payable, handwritten, machine processable financial contracts that live on arweave.

WORK-IN-PROGRESS!

Use cases:

1.Terms and aggreements for websites

2.Liability Waivers

3.Rental agreements

4.General contracting

5.Deposits

6.Smart contract legal compliance for regulators.

7.Smart contract onboarding for seniors and people who cannot read code.

8.Helps to defend agains scams by providing a legal grip on smart contracts (users have somebody to sue)

9.Issuance of dept securities

10.Repurchase agreements

## Use

Run the front end

`yarn run dev`

You need testweave-docker
`docker-compose up`

## post to

This field will describe the endpoint you want to hit.  
The https will be appended if it's missing.  
The post will only happen if either webhook or redirect is selected.

The id of the transaction will be appended like /{id}
Webhooks have an optional secret parameter which is a preshared secret that will be posted in the request body :
`{ secret: string }`

The acceptor will be able to fill it out on the acceptable contract page.

For redirection, there is no secret but you may give a cookie on your website to identify the users who get redirected there. It's up to you!

## Deployment

`yarn build`

After the build, the js dependency must be separately deployed.

The URL to access is must be placed into the data-dependency on page.
The state must be configured for using this dataprop with getSourceFromDataProp(pageEl)

Then run `yarn inline`

The final bundle.html is ready to be deployed!

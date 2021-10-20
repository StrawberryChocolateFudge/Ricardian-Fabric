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


## GeoCoding

Access is blocked based on GeoLocation.
For this to work, a csv file with the data is deployed on the permaweb.
Here:
https://arweave.net/Wl0lmZU2A1D60EqMePwX77PpFpTEIMUdKGSBM-uGlto

The current position is checked against this based on the selected country blocks.

The countries blocked for OFEC:

	1.Afghanistan, 2.Belarus, 3.Bosnia and Herzegovina, 4.Burundi, 5.Central African Republic, 6.China (PR), 
	7.Comoros,8.Crimea Region of Ukraine,9.Cuba,10.Cyprus,11.Democratic Republic of the Congo,12.Guinea, 
	13.Guinea Bissau,14.Haiti,15.Iran,16.Iraq,17.Kyrgyzstan,18.Laos,19.Lebanon,20.Libya,21.Mali,22.Mauritania 
	23.Moldova,24.Montenegro,25.Myanmar,26.Nicaragua,27.North Korea - DPRK,	28.Palestinian Territories,29.Russia, 
	30.Rwanda,31.Serbia,32.Somalia,33.South Sudan,34.Sudan,35.Syria,36.Tunisia,37.Venezuela,38.Yemen,39.Zimbabwe.

List of countries blocked For UN:
	1.Afghanistan,2.Central African Republic,3.Democratic Republic of the Congo,4.Guinea Bissau,5.Iran,6.Iraq,7.Lebanon,
	8.Libya,9.Mali,10.Montenegro,11.North Korea,12.Serbia,13.Somalia,14.South Sudan,15.Sudan,16.Syria,17: Yemen

List of countries blocked For EU:
	1.Belarus,2.Bosnia and Herzegovina, 4.Burundi, 5.Central African Republic, 6.China (PR),7.Democratic Republic of the Congo,
	8.Guinea,9.Guinea Bissau,10.Haiti,11.Iran,12.Lebanon,13.Libya.14.Moldova,15.Montenegro,16.Myanmar(Burma),17.Nicaragua,
	18.North Korea,19.Russia,20.Serbia,21.South Sudan,22.Syria,23.Tunisia,,24.Ukraine,25.Venezuela,26.Zibabwe

resources: https://sanctionsmap.eu/#/main,

USA and New York State can be separately blocked. 
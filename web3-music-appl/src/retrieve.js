import process from 'process'
import minimist from 'minimist'
import { Web3Storage, getFilesFromPath } from 'web3.storage'
import { showMessage, showLink, jsonFile, getSavedToken, makeGatewayURL } from './utils/helpers'
import { create } from 'ipfs-http-client';

function getAccessToken () {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDU0M0M4NjAwYjc1NjQyNzhhODIyNjc2ODNhRDk3MzNkRDM3ZDg0MTAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTA5MDIzMjkxOTYsIm5hbWUiOiJ0ZXN0X2FjY2VzcyJ9.F_ImkI9RfRPOnaYgkOO7sPmVthKdGTOwOp0oV1AJtrU"

}

async function getImageMetadata (cid) {
    
    const url = makeGatewayURL(cid, 'metadata.json')
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`error fetching image metadata: [${res.status}] ${res.statusText}`)
    }
    const metadata = await res.json()
    const gatewayURL = makeGatewayURL(cid, metadata.path)
    const uri = `ipfs://${cid}/${metadata.path}`
    return { ...metadata, cid, gatewayURL, uri }
  }

async function * listImageMetadata () {
    const token = getAccessToken()
    if (!token) {
      console.error('No API token for Web3.Storage found.')
      return
    }
  
    const web3storage = new Web3Storage({ token })
    for await (const upload of web3storage.list()) {
      
  
      try {
        console.log(upload.cid)
        const metadata = await getImageMetadata(upload.cid)
        yield metadata
      } catch (e) {
        console.error('error getting image metadata:', e)
        continue
      }
    }
  }
  
// async function getLinks(ipfsPath) {
//     const url = 'https://dweb.link/api/v0'
//     const ipfs = create({ url })
  
//     const links = []
//     for await (const link of ipfs.ls(ipfsPath)) {
//       links.push(link)
//     }
//     console.log(links)
// }

// function makeStorageClient () {
//   return new Web3Storage({ token: getAccessToken() })
// }

// async function retrieve (cid) {
//     const client = makeStorageClient()
//     const res = await client.get(cid)
//     console.log(`Got a response! [${res.status}] ${res.statusText}`)
//     if (!res.ok) {
//       throw new Error(`failed to get ${cid}`)
//     }
  
//     // request succeeded! do something with the response object here...
// }

// async function retrieveFiles (cid) {
//     const client = makeStorageClient()
//     const res = await client.get(cid)
//     console.log(`Got a response! [${res.status}] ${res.statusText}`)
//     if (!res.ok) {
//       throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`)
//     }
  
//     // unpack File objects from the response
//     const files = await res.files()
//     for (const file of files) {
//       console.log(`${file.cid} -- ${file.name} -- ${file.size}`)
//     }
//   }

function AllMusic(){
    //console.log(retrieveFiles("bafybeic6bbwdtgbog74twlf4o2ydqcnuoapvwi6bwkqazwhzsxqtzzfqju"))
    console.log("IN RETRIEVE")
    console.log(getImageMetadata("bafybeifgppcsbf557zlwwky76nyteuzla7amm5zyfisp7elr3jyp64ei4y"))
    console.log("FINISHED METADATA")
    return <div></div>
}
export default AllMusic;
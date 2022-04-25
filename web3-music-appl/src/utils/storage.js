import { Web3Storage } from "web3.storage";
import { getFilesFromPath } from "web3.storage";

//Api functions for web 3 storage
function getAccessToken() {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  //return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDM1QmJkRGYxMDBhQzZFZjRjRTk1NzZhZWY2QjQwNDBCN0E3ZmE3NzciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDc3MzAxODYyOTksIm5hbWUiOiJ1cGxvYWRNdXNpYyJ9.OlQt_7YGKiGGFB9C0RhkvOGwl6TN5BBCaI6J96uh_E4";
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGY5NUI4MTU2MTI5RjI1ZDA3MmNkQmE5QTM2RDEzN2QyRTMwMDc5QzYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTA5MTQ0MzAxODMsIm5hbWUiOiJXZWIzIE11c2ljIn0.nEyXTXA8UYbkFXMUV5hbnoJ4TmjIUCZUMocQDoEAQb0"
  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  return process.env.WEB3STORAGE_TOKEN;
}

export function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}
export async function storeFiles(files) {
  const client = makeStorageClient();
  const cid = await client.put(files);
  console.log("stored files with cid:", cid);
  return cid;
}

export async function listUploads() {
  const client = makeStorageClient();
  const songNames = [];
  for await (const upload of client.list()) {
    songNames.push(upload.name);
    console.log(
      `${upload.name} - cid: ${upload.cid} - size: ${upload.dagSize}`
    );
  }
  const searchTest = client.console.log(searchTest);
  return songNames;
}
export async function retrieve(cid) {
  const client = makeStorageClient();
  const res = await client.get(cid);
  console.log(`Got a response! [${res.status}] ${res.statusText}`);
  if (!res.ok) {
    throw new Error(`failed to get ${cid}`);
  }

  // request succeeded! do something with the response object here...
}

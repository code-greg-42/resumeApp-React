import { create } from 'ipfs-http-client';
import { Buffer } from 'buffer';

const projectId = '2CDb5s8hxGZEZgQtUPxjk9KwDtH';
const projectSecret = 'fa39105826d2be41836e84e8a989a16a';
const buffer = Buffer.from(projectId + ":" + projectSecret);
const bufferString = buffer.toString('base64');
const auth = 'Basic ' + bufferString;

const ipfs = create({
  host: 'ipfs.infura.io',
  protocol: 'https',
  path: 'ipfs/api/v0',
  port: 5001,
  headers: {
  Authorization: auth
  }
});

export async function postToIpfs(data) {
    let result = await ipfs.add({
      path: '/',
      content: JSON.stringify(data),
    });
      return result.path;
  }

 export async function retrieveFromIpfs(cid) {
    let response = ipfs.cat(cid);
    let content = [];
    for await (const chunk of response) {
      content = [...content, ...chunk];
    };
    const raw = Buffer.from(content).toString('utf8');
    const data = JSON.parse(raw);
    return data;
}
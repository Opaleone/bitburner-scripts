import { recursiveScan } from "recursiveScan";

/** @param {NS} ns */
export async function main(ns) {
  const serverList = recursiveScan(ns, ns.getHostname(), []);
  let displayStr = [];

  const regEx = /contract-([\d]){0,255}.cct/gi

  serverList.forEach(server => {
    if (ns.hasRootAccess(server)) {
      try {
        let serverFiles = ns.ls(server);
        let cnt = 0;
  
        for (const file of serverFiles) {
          if (file.match(regEx)) cnt++;
        }
        
        if (cnt > 0) displayStr.push(`${server}: ${cnt} contracts`);
      } catch (e) {
        ns.tprint(e.message);
      }
    }
  })

  displayStr.forEach(str => {
    ns.tprint(str);
  })
}
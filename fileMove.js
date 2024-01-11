import { recursiveScan } from "recursiveScan";

/** @param {NS} ns */
export async function main(ns) {
  const serverList = recursiveScan(ns, ns.getHostname());

  serverList.forEach(server => {
    if (ns.hasRootAccess(server)) {
      let regEx = /([a-z\d-]).+\.([lit|txt]).+/gi;
      const serverFiles = ns.ls(server);

      for (const file of serverFiles) {
        if (file.match(regEx)) {
          ns.scp(file, 'home', server);
        }
      }
    }
  })
}
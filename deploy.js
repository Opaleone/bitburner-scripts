import { recursiveScan } from "recursiveScan";
/** @param {NS} ns **/
export async function main(ns) {
  const serverList = recursiveScan(ns, ns.getHostname(), []);
  
  for (const server of serverList) {
    if (ns.hasRootAccess(server)) {
      if (!ns.fileExists('hack.js', server)) ns.scp("hack.js", server, "home");
    }
  }
}
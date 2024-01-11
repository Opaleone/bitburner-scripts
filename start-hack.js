import { recursiveScan } from "recursiveScan";

/** @param {NS} ns */
export async function main(ns) {
  const serverList = recursiveScan(ns, ns.getHostname());

  for (const server of serverList) {
    if (ns.hasRootAccess(server)) {
      try {
        let t = (Math.floor((ns.getServerMaxRam(server) - ns.getServerUsedRam(server)) / ns.getScriptRam('hack.js', server)));

        ns.exec('hack.js', server, t);
      } catch (e) {
        ns.tprint(e.message);
      }
    }
  }
}
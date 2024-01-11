import { recursiveScan } from "recursiveScan";

/** @param {NS} ns */
export async function main(ns) {
  const serverList = recursiveScan(ns, ns.getHostname());

  serverList.forEach(server => {
    ns.killall(server, true);
  })
}
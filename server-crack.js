import { recursiveScan } from "recursiveScan";

/** @param {NS} ns */
export async function main(ns) {  
  const serverList = recursiveScan(ns, ns.getHostname());

  serverList.forEach(server => {
    if (!ns.hasRootAccess(server)) {
      try {
        if (ns.fileExists("BruteSSH.exe", "home")) ns.brutessh(server);
        if (ns.fileExists("FTPCrack.exe", 'home')) ns.ftpcrack(server);
        if (ns.fileExists("relaySMTP.exe", 'home')) ns.relaysmtp(server);
        if (ns.fileExists("HTTPWorm.exe", 'home')) ns.httpworm(server);
        if (ns.fileExists("SQLInject.exe", 'home')) ns.sqlinject(server);
        ns.nuke(server);
  
        ns.tprint(`${server} hacked successfully!`);
      } catch (e) {
        ns.tprint(`${server} hack unsuccessful. Error: ${e.message}`);
      }
    }
  })
}
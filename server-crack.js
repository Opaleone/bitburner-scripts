/** @param {NS} ns */
export async function main(ns) {  
  const serverList = ns.scan(ns.getHostname());

  serverList.forEach((server) => {
    if (ns.hasRootAccess(server) === false) {
      try {
        if (fileExists("BruteSSH.exe", "home")) {
          brutessh(target);
        }
        ns.nuke(server);
      } catch (e) {
        ns.tprint(e);
      }
    }
  })
}
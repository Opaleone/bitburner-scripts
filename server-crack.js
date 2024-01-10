/** @param {NS} ns */
export async function main(ns) {  
  const serverList = ns.scan(ns.getHostname());

  const tryHack = (server) => {
    try {
      if (ns.fileExists("BruteSSH.exe", "home")) {
        ns.brutessh(server);
      }
      ns.nuke(server);

      ns.tprint(`${server} hacked successfully!`);
    } catch (e) {
      ns.tprint('Unsuccessful!');
      ns.tprint(e.message);
    }
  }

  serverList.forEach((server) => {
    if (!ns.hasRootAccess(server)) {
      tryHack(server);
    } else {
      const subServerList = ns.scan(server);

      if (subServerList.includes('home')) {
        subServerList.splice(0, 1);
      }

      subServerList.forEach((subServer) => {
        tryHack(subServer)
      })
    }
  })
}
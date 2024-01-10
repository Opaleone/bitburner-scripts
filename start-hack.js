/** @param {NS} ns */
export async function main(ns) {
  const serverList = ns.scan(ns.getHostname());

  for (const server of serverList) {
    try {
      let t = (Math.floor((ns.getServerMaxRam(server) - ns.getServerUsedRam(server)) / ns.getScriptRam('hack.js', server)));

      ns.exec('hack.js', server, t);

      const subServerList = ns.scan(server);

      if (subServerList.includes('home')) subServerList.splice(0, 1);

      subServerList.forEach(subServer => {
        let t = (Math.floor((ns.getServerMaxRam(subServer) - ns.getServerUsedRam(subServer)) / ns.getScriptRam('hack.js', subServer)));
        ns.exec('hack.js', subServer, t);
      });
    } catch (e) {
      ns.tprint(e.message);
    }
  }
}
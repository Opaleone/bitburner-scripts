 /** @param {NS} ns **/
export async function main(ns) {
  const serverList = ns.scan(ns.getHostname());
  
  for (const server of serverList) {
    if (!ns.fileExists('hack.js', server)) ns.scp("hack.js", server, "home");
    else {
      const subServerList = ns.scan(server);

      if (subServerList.includes('home')) subServerList.splice(0, 1);

      subServerList.forEach((subServer) => {
        if (!ns.fileExists('hack.js', subServer)) {
          ns.scp("hack.js", subServer, "home");
        }
      })
    }
  }
}
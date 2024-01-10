 /** @param {NS} ns **/
export async function main(ns) {
  const serverList = ns.scan(ns.getHostname());
  
  for (const server of serverList) {
    ns.scp("hack.js", server, "home");
  }
}
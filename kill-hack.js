/** @param {NS} ns */
export async function main(ns) {
  const serverList = ns.scan(ns.getHostname());

  serverList.forEach((server) => {
    ns.killall(server, true);
  })
}
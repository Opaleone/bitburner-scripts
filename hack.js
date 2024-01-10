 /** @param {NS} ns **/
export async function main(ns) {
  const host = ns.getHostname();

  const mT = ns.getServerMaxMoney(host) * 0.75;
  const sT = ns.getServerMinSecurityLevel(host) + 5;

  while(true) {
    if (ns.getServerSecurityLevel(host) > sT) {
      await ns.weaken(host);
    } else if (ns.getServerMoneyAvailable(host) < mT) {
      await ns.grow(host);
    } else {
      await ns.hack(host);
    }
  }
}
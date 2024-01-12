import { recursiveScan } from "recursiveScan";

/** @param {NS} ns */
export async function main(ns) {
  const host = ns.getHostname();

  ns.exec('server-crack.js', host);
  ns.exec('deploy.js', host);
  ns.exec('start-hack.js', host);
}
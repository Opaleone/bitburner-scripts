/** @param {NS} ns */

export function recursiveScan (ns, root, found = []) {
  if (!found.includes(root)) {
    found.push(root);
    for (const server of ns.scan(root)) {
      if (!found.includes(server)) recursiveScan(ns, server, found);
    }
  }
  return found;
}
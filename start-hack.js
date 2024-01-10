export async function main(ns) {
  const serverList = ns.scan(ns.getHostname());

  for (const server of serverList) {
    ns.exec('hack.js', server);

    
  }
}
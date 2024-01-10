export async function main(ns) {
  const serverList = ns.scan(ns.getHostname());

  for (const server of serverList) {
    ns.exec('hack.js', server, 3);

    const subServerList = ns.scan(server);

    if (subServerList.includes('home')) subServerList.splice(0, 1);

    subServerList.forEach(subServer => {
      ns.exec('hack.js', subServer, 3);
    });
  }
}
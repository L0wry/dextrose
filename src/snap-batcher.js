import log from "./logger";

export default async(dextrose, snapPath, teardown) => {

  try {
    const componentsLoaded = await dextrose.client.getLoadedComponents();

    log.info('snapBatcher', `Found Loaded components in the App: ${componentsLoaded}`)

    for (let i = 0; i < componentsLoaded.length; i++) {
      await dextrose.client.loadComponent(componentsLoaded[i]);
      const outputName = componentsLoaded[i].replace(/\s/g, "_").replace(/[\[\]\\+.,\/#!$%\^&\*;:{}=\-`'~()]/g,"");  
      await dextrose.snapper.snap(`${snapPath}/${outputName}`)

      log.info('snapBatcher', `Snapped component: ${outputName}`)
    }
  } catch (err) {
    throw (err)
  } finally {

    teardown();
  }
}
const serverURL = window.location.host;
const localhostURL = ':';

let url = localhostURL;

let isProductionBuild = true;
if(isProductionBuild) {
    url = serverURL;
}
export const WebsocketURL = `ws://${url}/ws`;
export const ApiURL = `http://${url}`;

import { renderClient } from "./index";


export default class Client {
    startRender() {
        try {
            renderClient();
        } catch(e: any) {
            return false;
        }

        
        return true;
    }

}
import App from "./source/app/app";


export default class Application extends App {
    run() {
        try {
            const details = this.runSetup();
            this.runServer(details);
        } catch(e: any) {
            throw new Error(e);
        }
    }


    constructor(props: any) {
        super();
    }

}
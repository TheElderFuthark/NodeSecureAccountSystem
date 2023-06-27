import Server from "./server/server";


export default class App {
    server: any = null;


    runServer(obj: any) {
        const s = this.server.initiateServer();
        this.server.startInitialServerRun(s, obj.port);
    }


    runSetup() {
        this.server = new Server(null);
        return this.server.getServerAddress();
    }

}
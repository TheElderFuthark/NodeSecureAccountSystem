import API from "./api/api";


export default class Server extends API {
    startInitialServerRun(server: any, port: number) {
        this.sendFiles(server);
        this.runFinally(server, port);
    }


    initiateServer() {
        const s = this.makeServer();
        return s;
    }


    buildServerAddress(details: any) {
        return "" + 
            details.protocol + 
            details.address + 
            details.port + 
            details.domain;
    }


    getServerAddress() {
        return {
            protocol: this.getProtocolType(), 
            address: this.getHostAddress(),
            port: this.getPort(),
            domain: this.getDomain()
        };

    }


    constructor(props: any) {
        super();
    }

}
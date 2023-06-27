const Express = require("express");
const path = require("path");


export default class API {
    server: any = null;


    runFinally(server: any, port: number) {
        server.listen(port, () => {
            console.log("Server is online at port: " + port + "... ");
        });

    }


    sendFiles(server: any) {
        server.get("/", (req: any, res: any) => {
            res.sendFile(
                "public/index.html", 
                { root: "public/" }, 
                (e: any) => {
                console.error(e);
            });


            res.sendFile( 
                "public/styles/index.css", 
                { root: "public/styles/" }, 
                (e: any) => {
                console.error(e);
            });
            
        });

    }


    makeServer() {
        this.server = Express();
        this.server.use(Express.static("public"));


        return this.server;
    }


    getDomain() {
        return "/";
    }


    getPort() {
        return 4080;
    }

    
    getHostAddress() {
        return "127.0.0.1";
    }


    getProtocolType() {
        return "http://";
    }

}
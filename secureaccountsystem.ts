import Application from "./application/application";


class SecureAccountSystem extends Application {
    start() {
        try {
            this.run();
        } catch(e: any) { 
            return <number> e;
        }
        

        return 0;
    }

}


/*  MAIN ENTRY POINT
    ================
*/
const sys = (system: SecureAccountSystem = new SecureAccountSystem(null)) => {
    return system.start();
};


console.log(sys());
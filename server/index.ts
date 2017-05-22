/*                _       _
                 | |     | |
  _ __   ___   __| |_   _| |_   _ ___
 | '_ \ / _ \ / _` | | | | | | | / __|
 | | | | (_) | (_| | |_| | | |_| \__ \
 |_| |_|\___/ \__,_|\__,_|_|\__,_|___/
 @nodulus open source | ©Roi ben haim  ®2016
 */


import * as http from "http";
import * as url from "url";

const config = require("@nodulus/config");
const consts = config.consts;

const path = require("path");
const rest = require("@nodulus/api");

class Startup {
    constructor() {



        var log = require("@nodulus/logs").logger;
        var core = require("@nodulus/core");
        // var io = require("@nodulus/socket")(core.server);
        //core.use('/', core.static(global.clientAppRoot));
        //load modules
        var nodulus_modules = config.modulesSettings;
        console.log("");
        console.log("***************************************************************************");
        console.log("***__active nodules_____________________________________________________***");
        console.log("***_____________________________________________________________________***");





        var api = rest.start(core);
        console.log("***_____________________________________________________________________***");


        core.use('/@nodulus/luncher.json', (req: any, res: any) => {
            res.sendFile(path.join(process.cwd(), './nodulus.json'));
        });



    }

    print(char: string, num: number): string {
        var str: string = "";
        for (var i = 0; i < num; i++)
            str += char;
        return str;
    }
}



module.exports = new Startup();
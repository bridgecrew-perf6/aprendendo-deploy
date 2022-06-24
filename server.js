import { readFile } from "fs";
import { Router } from "./router.js";
import config from "./config.js";
const router = new Router(config.port);

router.ligar();

router.GET('/',(req,res)=>{
    readFile("./users.json",(err,data)=>{
        if(err){
            console.log(err);
        }
        res.end(data.toString());
    });
});



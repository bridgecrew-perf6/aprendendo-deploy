import { createServer } from "http";
export class Router{
    constructor(port){
        this.port = port;
        this.server = createServer();
    }

    ligar(){
        this.server.listen(this.port,()=>{
            console.log(`Servidor rodando na porta ${this.port}`)
        });
    }

    GET(path,callback){
        this.server.on("request",(req,res)=>{
            if(req.url == path && req.method == "GET"){
                if(typeof callback == 'function'){ 
                    callback(req,res)
                }
            }
        })
    }
}
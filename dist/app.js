"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@tsed/common");
const path = require("path");
const core_1 = require("@tsed/core");
const compress = require("compression");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const rootDir = path.resolve(__dirname);
const baseRoute = '/api';
let Server = Server_1 = class Server extends common_1.ServerLoader {
    $onMountingMiddlewares() {
        this
            .use((req, res, next) => {
            res.header('Access-Control-Allow-Credentials', 'true');
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length');
            next();
        })
            .use(cookieParser())
            .use(compress({}))
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
            extended: true,
        }));
    }
    $onReady() {
        console.log('Server started...');
    }
};
Server.Initialize = () => new Server_1().start();
Server = Server_1 = __decorate([
    common_1.ServerSettings({
        rootDir,
        endpointUrl: baseRoute,
        env: core_1.Env.DEV,
        mount: {
            [baseRoute]: [
                `${rootDir}/modules/user/controller/userCtrl.js`,
                `${rootDir}/modules/department/controller/departmentCtrl.js`,
            ],
        },
        componentsScan: [
            `${rootDir}/modules/**/*Service.js`,
        ],
        httpPort: 8080,
        debug: true,
        acceptMimes: ['application/json'],
    })
], Server);
exports.Server = Server;
Server.Initialize().catch(err => {
    console.error(err);
});
var Server_1;
//# sourceMappingURL=app.js.map
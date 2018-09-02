import { IServerLifecycle, ServerLoader, ServerSettings } from '@tsed/common';
import * as path from 'path';
import { Env } from '@tsed/core';
import * as compress from 'compression';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as Express from 'express';

const rootDir = path.resolve(__dirname);
const baseRoute = '/api';

@ServerSettings({
  rootDir,
  endpointUrl: baseRoute,
  env: Env.DEV,
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
export class Server extends ServerLoader implements IServerLifecycle {
  static Initialize = (): Promise<any> => new Server().start();
  $onMountingMiddlewares() {
    this
			.use((req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
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
}

Server.Initialize().catch(err => {
  console.error(err)
});

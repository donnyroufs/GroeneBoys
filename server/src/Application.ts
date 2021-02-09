import "reflect-metadata";

import express, { Express } from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "./Container";
import { connectDatabase } from "./Data/CreateConnection";
import cors from "cors";
import morgan from "morgan";

class Application {
  static PORT = process.env.PORT || 5000;

  private app!: Express;

  constructor() {
    this.setupInversify(this.run.bind(this));
  }

  private run() {
    this.app.listen(Application.PORT, this.onAppListen.bind(this));
  }

  private async setupInversify(callback: () => void) {
    const server = new InversifyExpressServer(container);

    server.setConfig((application: express.Application) => {
      application.use(express.json());
      application.use(morgan("common"));
      application.use(cors());
    });

    await connectDatabase();

    // @ts-ignore
    this.app = server.build();

    callback();
  }

  private onAppListen() {
    console.log(
      `Application is running on http://localhost:${Application.PORT}`
    );
  }
}

export default new Application();

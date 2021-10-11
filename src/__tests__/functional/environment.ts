import app, { init, close } from "../../app";
import JestEnvironment from "jest-environment-node";

export default class Environment extends JestEnvironment {
  constructor(config: any) {
    super(config as any);
  }

  async setup() {
    this.global.testServer = app;
    await init();
    await super.setup();
  }

  async teardown() {
    close();
  }
}

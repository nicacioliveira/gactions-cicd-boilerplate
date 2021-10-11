import JestEnvironment from "jest-environment-node";

export default class Environment extends JestEnvironment {
  constructor(config: any) {
    super(config as any);
  }

  async setup() {
    await super.setup();
  }

  async teardown() {}
}

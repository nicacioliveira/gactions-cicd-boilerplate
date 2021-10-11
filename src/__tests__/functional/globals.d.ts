declare namespace NodeJS {
  interface Global {
    testServer: import("express").Application;
  }
}

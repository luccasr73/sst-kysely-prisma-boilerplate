import { SSTConfig } from "sst";
import { API } from "./src/stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "sst-kysely-prisma-boilerplate",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(API);
  }
} satisfies SSTConfig;

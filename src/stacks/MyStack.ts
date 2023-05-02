import { StackContext, Api, Config } from "sst/constructs";

export function API({ stack }: StackContext) {
  const DATABASE_NAME = new Config.Secret(stack, 'DATABASE_NAME');
  const DATABASE_USER = new Config.Secret(stack, 'DATABASE_USER');
  const DATABASE_HOST = new Config.Secret(stack, 'DATABASE_HOST');
  const DATABASE_PASS = new Config.Secret(stack, 'DATABASE_PASS');

  const api = new Api(stack, "api", {
    routes: {
      "POST /users": "src/packages/functions/src/create.handler",
      "GET /users": "src/packages/functions/src/list.handler",
    },
  });

  api.bind([DATABASE_NAME, DATABASE_USER, DATABASE_HOST, DATABASE_PASS]);
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}

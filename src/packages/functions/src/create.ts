import { ApiHandler, useBody } from "sst/node/api";
import { create } from "@sst-kysely-prisma-boilerplate/core/user";
import { app } from "./app";
import { z } from "zod";

export const createParams = z.object({
  name: z.string(),
  email: z.string()
})

 const main = ApiHandler(async (event) => {
  const {body} = event

  await create(createParams.parse(body))
  return {
    body: `created`
  };
});


export const handler = app(main); 
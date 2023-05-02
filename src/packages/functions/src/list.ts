import { ApiHandler, useBody } from "sst/node/api";
import { listAll } from "@sst-kysely-prisma-boilerplate/core/user";
import { app } from "./app";

const main = ApiHandler(async (event) => {
    const data = await listAll()
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
    };
});


export const handler = app(main); 
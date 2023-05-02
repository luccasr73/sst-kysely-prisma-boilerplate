import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import httpEventNormalizer from '@middy/http-event-normalizer';
import httpHeaderNormalizer from '@middy/http-header-normalizer';
import jsonBodyParser from '@middy/http-json-body-parser';
import httpSecurityHeaders from '@middy/http-security-headers';

export const app = (handler:any)=>{
    return middy()
    .use(httpEventNormalizer())
    .use(httpHeaderNormalizer())
    .use(jsonBodyParser())
    .use(httpSecurityHeaders())
    .use(httpErrorHandler())
    .handler(handler);
}
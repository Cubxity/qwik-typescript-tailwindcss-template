/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is render outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - pnpm run start
 * - pnpm run preview
 * - pnpm run build
 *
 */

import type { RenderToStreamOptions } from "@builder.io/qwik/server";
import { renderToStream } from "@builder.io/qwik/server";
import { manifest } from "@qwik-client-manifest";

import Root from "./root";

export default function (opts: RenderToStreamOptions) {
  return renderToStream(<Root />, {
    manifest,
    ...opts,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang: "en-us",
    },
    prefetchStrategy: {
      implementation: {
        linkInsert: null,
        workerFetchInsert: null,
        prefetchEvent: "always",
      },
    },
  });
}

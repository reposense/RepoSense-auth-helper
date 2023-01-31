# RepoSense-auth-helper

Exchanges the `code` from GitHub together with the `client_secret` to obtain the oAuth `access_token`, as outlined in step 2 of the [oAuth web application flow](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#web-application-flow).

This helper is necessary as the `client_secret` cannot be exposed on any client-only application.

Deployed with [Cloudflare Workers](https://workers.cloudflare.com/), eliminating the need for traditional server-based solutions like [Gatekeeper](https://github.com/prose/gatekeeper).

## Setting Up
Create a `.dev.vars` file in the root directory and insert the `client_secret` of the GitHub oAuth app like so:
```
CLIENT_SECRET=<YOUR_CLIENT_SECRET_HERE>
```

Refer to the [Cloudflare guide](https://developers.cloudflare.com/workers/get-started/guide/) to learn how to run the worker locally.
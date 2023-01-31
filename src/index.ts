export interface Env {
	AUTH_URL: string,
	CLIENT_ID: string,
	CLIENT_SECRET: string
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const responseHeaders = new Headers();
		responseHeaders.set('Access-Control-Allow-Origin', '*');
		
		const { searchParams } = new URL(request.url);
		const code = searchParams.get('code');
		if (code) {
			return authenticate(code);
		} else {
			return new Response('Code not provided', {
				headers: responseHeaders,
			});
		}

		async function authenticate(code: string) {
				const bodyParams = {
					client_id: env.CLIENT_ID,
					client_secret: env.CLIENT_SECRET,
					code: code
				};
				const response = await fetch(env.AUTH_URL, {
					method: 'POST',
					body: JSON.stringify(bodyParams),
					headers: {
						accept: 'application/json',
						'content-type': 'application/json',
					}
				});
				return new Response(response.body, {
					headers: responseHeaders,
				});
		}
	},
};

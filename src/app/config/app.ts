	import { Router, type RouteConfig } from "@lit-labs/router";
	const app : { pages:Array<RouteConfig>, router: Router, navigate:(ruta:string)=>void } = {
		pages: [],
		router: null as unknown as Router,
		navigate : (ruta:string) => {
			app.router.goto(ruta);
            history.pushState(null, '', ruta);
		}
	}
	export default app;
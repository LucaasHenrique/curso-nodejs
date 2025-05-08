import express from "express";
import routes from "./routes.js";
import Database from "./database/index.js";
import Youch from "youch";
import * as Sentry from "@sentry/node";
//import authMiddleware from "./app/middlewares/auth.js";


class App {
	constructor() {
		this.server = express();
		Sentry.init({
		  dsn: process.env.SENTRY_DSN, 
			// Setting this option to true will send default PII data to Sentry.
			// For example, automatic IP address collection on events
			sendDefaultPii: true,
		});
		this.middlewares();
		this.routes();
		Database.init(); // Inicializando a conexão com o banco de dados
		Database.associate(); // Associando os modelos
		this.exceptionHandler();
	}

	middlewares() {
		Sentry.setupExpressErrorHandler(this.server);	
		this.server.use(express.json());
		this.server.use(express.urlencoded({ extended: false }));
		//this.server.use(authMiddleware)
	}

	routes() {
		this.server.use(routes);
		Sentry.setupExpressErrorHandler(this.server);
	}
  
	exceptionHandler() {
		this.server.use(async (err, req, res, next) => {
			if (process.env.NODE_ENV === "development") {
				const errors = await new Youch(err, req).toJSON();
				return res.status(500).json(errors);
			}

			return res.status(500).json({error: "Internal Server Error" });
		}) 
	}
}

export default new App().server;

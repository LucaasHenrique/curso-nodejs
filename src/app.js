import express from "express";
import routes from "./routes.js";
import Database from "./database/index.js";
//import authMiddleware from "./app/middlewares/auth.js";

class App {
	constructor() {
		this.server = express();
		this.middlewares();
		this.routes();
		Database.init(); // Inicializando a conexão com o banco de dados
		Database.associate(); // Associando os modelos
	}

	middlewares() {
		this.server.use(express.json());
		this.server.use(express.urlencoded({ extended: false }));
		//this.server.use(authMiddleware)
	}

	routes() {
		this.server.use(routes);
	}
}

export default new App().server;

import { Sequelize } from "sequelize";
import config from "../config/database.js";
import Customer from "../app/models/Customer.js";
import User from "../app/models/User.js";
import Contact from "../app/models/Contact.js";
import File from "../app/models/File.js"

const models = [Customer, User, Contact, File];   

class Database {
  constructor() {
    this.connection = new Sequelize(config);
    this.init();  
  }

  init() {
    models.forEach(model => model.init(this.connection));
    this.associate();
  }

  associate() {
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });  
  }
}

export default new Database();
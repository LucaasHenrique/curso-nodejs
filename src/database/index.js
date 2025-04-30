import { Sequelize } from "sequelize";
import config from "../config/database.js";
import Customer from "../app/models/Customer.js";
import User from "../app/models/Users.js";
import Contacts from "../app/models/Contacts.js";

const models = [Customer, User, Contacts];   

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
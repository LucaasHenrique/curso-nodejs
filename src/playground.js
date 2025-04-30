import { Op } from 'sequelize'
import Database from "./database/index.js";
import Customer from "./app/models/Customer.js";  
import Contacts from './app/models/Contacts.js';

class Playground {
    static async play() {
        //Database.init();

        // Database.associate();

        //const customer = await Customer.findByPk(2);
        //customer.destroy();

        // const customer = await Customer.findByPk(1);        
        // console.log("Antes: ", JSON.stringify(customer, null, 2));  
       
        // const newCustomer = await customer.update({
        //     status: "ARCHIVED"
        // });

        // console.log("Antes: ", JSON.stringify(customer, null, 2));  

        //const customer = await Customer.create({name: "marcos", email: "marcos@gmail.com"});
        //const customer1 = await Customer.scope(["active", "name"]).findAll();
        // const customer = await Customer.findAll({ 
        //     include: [{
        //         model: Contacts,
        //         /*where: {
        //             status: "ACTIVE"
        //         },
        //         required: false*/
        //     }],
        //     attributes: { exclude: ['createdAt', 'updatedAt'] },
        //     where: {
        //         [Op.or]: 
        //             {status: {
        //                 [Op.notIn]: ['ARCHIVED']
        //             },
        //             name: {
        //                 [Op.like]: '%lucas%'
        //             }
        //         },
        //         createdAt: {
        //             [Op.between]: ['2025-01-01', '2025-12-31']
        //         }  
        //     },
        //     order: [['name', 'ASC']],
        //     limit: 2,
        //     offset: 2 * 1 - 2 // LIMIT * PAGE - LIMIT
        // });

        // console.log(JSON.stringify(customer, null, 2)); 
        //console.log(JSON.stringify(customer1, null, 2)); 
    }

}

Playground.play();
import Sequelize, { Model, Op } from "sequelize";

class Customer extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            status: {
                type: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
                defaultValue: "ACTIVE"
                }
            }, {
                scopes: {
                    active: {
                        where: {
                            status: "ACTIVE"
                        }
                    },
                    name: {
                        where: {
                            name: "lucas"
                        } 
                    },
                    created(date) {
                        return {
                            where: {
                                createdAt: {
                                    [Op.gte]: date
                                }
                            }
                        }
                    }
                }, 

                /*hooks: {
                    beforeValidate: (customer) => {
                        customer.status = "ARCHIVED";
                    }
                },*/
                sequelize,
            	name: {
					singular: "customer",
					plural: "customers",
				}
            }
        );
        return this;
    }

    static associate(models) {
        this.hasMany(models.Contact);
    }
};

export default Customer;
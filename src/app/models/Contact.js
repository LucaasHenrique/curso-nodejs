import Sequelize, { ENUM, Model } from "sequelize";

class Contact extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				status: {
					type: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
					defaultValue: "ACTIVE"
				}
			},
			{
				sequelize,
				name: {
					singular: "contact",
					plural: "contacts",
				}
			},
		);

		// this.addHook("beforeSave", async (contact) => {
		// 	if (contact.status) {
		// 		contact.status = contact.status.toUpperCase();
		// 	}
		// });
	}

	static associate(models) {
		this.belongsTo(models.Customer, {
			foreignKey: "customer_id",
		});
	}
}

export default Contact;

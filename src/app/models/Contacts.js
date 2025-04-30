import Sequelize, { ENUM, Model } from "sequelize";

class Contacts extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
			},
			{
				sequelize,
				name: {
					singular: "contact",
					plural: "contacts",
				}
			},
		);
	}

	static associate(models) {
		this.belongsTo(models.Customer, {
			foreignKey: "customer_id",
		});
	}
}

export default Contacts;

import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING
            }, {
                sequelize,    
                name: {
					singular: "user",
					plural: "users",
				}

            }
        );
        this.addHook("beforeSave", async user => {
            if (user.password) {
              user.password_hash = await bcrypt.hash(user.password, 8);
            } 
        });

        return this;
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }

    static associate(models) {
		this.belongsTo(models.File, {
			foreignKey: "file_id",
		});
	}
};

export default User;
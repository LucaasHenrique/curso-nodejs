module.exports = {
  async up (queryInterface, Sequelize) { 
    await queryInterface.addColumn('contacts', "status", { 
      type: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
      allowNull: false,
      defaultValue: "ACTIVE",
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn("contacts", "status", { transaction});
      await queryInterface.sequelize.query(
        'DROP TYPE IF EXISTS "enum_customers_status";',{ 
          transaction 
      });
    }); 
  }
};
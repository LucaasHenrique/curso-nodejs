module.exports = {
  async up (queryInterface, Sequelize) {  
    await queryInterface.removeColumn('users', "provider");
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.addColumn('users', "provider", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    });
    
  }
};
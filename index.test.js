const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test
        const testRest = await Restaurant.bulkCreate(seedRestaurant)
        expect(testRest[0].name).toEqual('AppleBees')
    });

    test('can create a Menu', async () => {
        // TODO - write test
        const testMenu = await Menu.bulkCreate(seedMenu)
        expect(testMenu[0].title).toEqual('Breakfast')
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        const testRest = await Restaurant.bulkCreate(seedRestaurant)
        const foundRest = await Restaurant.findByPk(1)
        expect(foundRest.rating).toEqual(5)
    });

    test('can find Menus', async () => {
        // TODO - write test
        const testMenu = await Menu.bulkCreate(seedMenu)
        const findMenu = await Menu.findByPk(1)
        expect(findMenu.title).toEqual('Breakfast')
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        const testRest = await Restaurant.bulkCreate(seedRestaurant)
        const foundRest = await Restaurant.findByPk(1)
        expect(foundRest.name).toEqual('AppleBees')

        await foundRest.destroy()
        const findRest = await Restaurant.findByPk(1)
        expect(findRest).toBeNull()
    });
})
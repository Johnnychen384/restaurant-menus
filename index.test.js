const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index');
const Item = require('./models/Item');
const {
    seedRestaurant,
    seedMenu,
    seedItem
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeEach(async () => {
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


    test("Restaurant can have mutiple menus", async () => {
        const testRest = await Restaurant.bulkCreate(seedRestaurant)
        const testMenu = await Menu.bulkCreate(seedMenu)

        await testRest[0].addMenus(testMenu[0])
        await testRest[0].addMenus(testMenu[1])
        const findMenu = await testRest[0].getMenus()
        
        expect(findMenu.length).toBe(2)
    })

    test("Test mulitple menus and multiple", async () => {
        const testMenu = await Menu.create({
            title: 'Breakfast'
          })
        const testItem = await Item.create({
            name: 'bhindi masala',
            image: 'someimage.jpg',
            price: 9.50,
            vegetarian: true
          })

          const testItem1 = await Item.create({
            name: 'bhindi masalaasfasfasf',
            image: 'someimage.jpg',
            price: 9.50,
            vegetarian: false
          })

        //   Test to check if an instance of Item is created.
        expect(testItem.name).toBe('bhindi masala')

        await testMenu.addItem(testItem)
        await testMenu.addItem(testItem1)
        
        let foundMenu = await testMenu.getItems()

        expect(foundMenu.length).toBe(2)

        

    })  




    test("Test mulitple menus and multiple using eager loading", async () => {
        const testMenu = await Menu.create({
            title: 'Breakfast'
          })
        const testItem = await Item.create({
            name: 'bhindi masala',
            image: 'someimage.jpg',
            price: 9.50,
            vegetarian: true
          })

        //   Test to check if an instance of Item is created.
        expect(testItem.name).toBe('bhindi masala')

        await testMenu.addItem(testItem)
        

        const someMenu = await Menu.findAll({
            include: [
                {model: Item}
            ]
        })

        expect(someMenu[0].dataValues.Items.length).toBe(1)

    })  
})
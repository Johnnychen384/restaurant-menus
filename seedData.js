const seedRestaurant = [
  {
    name: 'AppleBees',
    location: 'Texas',
    cuisine: 'FastFood',
    rating: 5
  },
  {
    name: 'LittleSheep',
    location: 'Dallas',
    cuisine: 'Hotpot',
    rating: 5
  },
  {
    name: 'Spice Grill',
    location: 'Houston',
    cuisine: 'Indian',
    rating: 3
  }
]

const seedMenu = [
  {
    title: 'Breakfast'
  },
  {
    title: 'Lunch'
  },
  {
    title: 'Dinner'
  },
]

const seedItem = [
  {
    name: 'bhindi masala',
    image: 'someimage.jpg',
    price: 9.50,
    vegetarian: true
  },
  {
    name: 'egusi soup',
    image: 'someimage.jpg',
    price: 10.50,
    vegetarian: false
  },
  {
    name: 'hamburger',
    image: 'someimage.jpg',
    price: 6.50,
    vegetarian: false
  }
]

module.exports = {
  seedRestaurant,
  seedMenu,
  seedItem,
};

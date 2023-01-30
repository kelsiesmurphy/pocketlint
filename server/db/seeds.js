use product_data;
db.dropDatabase();

db.products.insertMany([
  {
    "title": "The Leather Wallet",
    "price": 40,
    "image": ""
  },
  {
    "title": "The Notebook",
    "price": 10,
    "image": ""
  },
  {
    "title": "The Flashlight",
    "price": 30,
    "image": ""
  },
  {
    "title": "The Card Clip",
    "price": 20,
    "image": ""
  },
])
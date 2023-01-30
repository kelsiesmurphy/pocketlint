use product_data;
db.dropDatabase();

db.products.insertMany([
  {
    "title": "The Leather Wallet",
    "price": 40,
    "image": "https://user-images.githubusercontent.com/77012426/215561933-deebba6a-d22e-41a0-aeb2-a1910d8ee75f.jpg"
  },
  {
    "title": "The Notebook",
    "price": 10,
    "image": "https://user-images.githubusercontent.com/77012426/215561915-b4e3d4f8-51aa-4199-9598-520bf7bb2789.jpg"
  },
  {
    "title": "The Flashlight",
    "price": 30,
    "image": "https://user-images.githubusercontent.com/77012426/215561928-0f922934-6863-461e-83fd-5c65eb147f52.jpg"
  },
  {
    "title": "The Card Clip",
    "price": 20,
    "image": "https://user-images.githubusercontent.com/77012426/215561903-00681d1b-c97a-4871-8325-29a67a0767e3.jpg"
  },
])
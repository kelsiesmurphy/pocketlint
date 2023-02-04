use product_data;
db.dropDatabase();

db.products.insertMany([
  {
    "title": "The Leather Wallet",
    "slug": "the-leather-wallet",
    "price": 40,
    "stripe_price_id": "price_1MXUT1C6t2VOFQ2qWJZDNk6T",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "image": "https://user-images.githubusercontent.com/77012426/215561933-deebba6a-d22e-41a0-aeb2-a1910d8ee75f.jpg"
  },
  {
    "title": "The Notebook",
    "slug": "the-notebook",
    "price": 10,
    "stripe_price_id": "price_1MXUSQC6t2VOFQ2qxTjDF2lb",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "image": "https://user-images.githubusercontent.com/77012426/215561915-b4e3d4f8-51aa-4199-9598-520bf7bb2789.jpg"
  },
  {
    "title": "The Flashlight",
    "slug": "the-flashlight",
    "price": 30,
    "stripe_price_id": "price_1MXUShC6t2VOFQ2qDlQS9hQD",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "image": "https://user-images.githubusercontent.com/77012426/215561928-0f922934-6863-461e-83fd-5c65eb147f52.jpg"
  },
  {
    "title": "The Card Clip",
    "slug": "the-card-clip",
    "price": 20,
    "stripe_price_id": "price_1MXUTEC6t2VOFQ2qmK04rIHQ",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "image": "https://user-images.githubusercontent.com/77012426/215561903-00681d1b-c97a-4871-8325-29a67a0767e3.jpg"
  },
])
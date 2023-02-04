# Personal Project - PocketLint

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#reflections">Reflections</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT -->
### PocketLint

PocketLint is a fictional minimal e-commerce site that sells high quality items you would carry everyday in your pocket.

<!-- <img align="center" src="https://user-images.githubusercontent.com/77012426/215357993-4820f91b-c4f4-4cba-ab64-1fdffa60bfcc.jpg" alt="Pocketlint landing page home"> -->

https://user-images.githubusercontent.com/77012426/216736152-d4d81a26-46d2-4bf5-ba04-72eb44cfd9ac.mp4

<!-- BUILT WITH -->
## Built With

* React
* MongoDB
* Express.js
* NodeJS
* TailwindCSS
* Stripe Checkout

<!-- REFLECTIONS -->
## Reflections
In using TailwindCSS for the first time, I have discovered its pros and cons, and have come to the conclusion that I would use it again for personal projects in the future. I also have increased my knowledge in MongoDB and Express, and the Stripe API has very thorough documentation. This was a fun project to do, and the next step would probably be to build out an admin dashboard.

<!-- GETTING STARTED -->
## Getting Started
### Prerequisites

To run this app, you must run the following in the client directory: 
* pnpm install
  ```sh
  pnpm install
  ```

* run in development
  ```sh
  pnpm run dev
  ```
  
  Then you must navigate to the server directory and run the following: 
* pnpm install
  ```sh
  pnpm install
  ```
  
  * seed the database
  ```sh
  mongosh < db/seeds.js
  ```

* get the server running
  ```sh
  pnpm run server:dev
  ```
Note: To stop the server enter ctrl + c in your Terminal

### Important note about Stripe integration:
To get the Stripe functionality working, you must have a Stripe account and set up the API key yourself to run locally in the test environment. 
For this project, I did not save the API key in a .env file as [this is insecure in a React application](https://create-react-app.dev/docs/adding-custom-environment-variables/), and I also did not save it in the database. 
When running locally, I created a secret.js file in the client directory, with the following code:
  ```sh
  const secret = 'YOUR-STRIPE-PK-TEST-KEY-HERE'

  export default secret
  ```
If you have another way to handle this more effectively, I would be eager to learn about it. 
In future, I intend to enhance the security and functionality of the payments, perhaps with a checkout feature.

<!-- CONTACT -->
## Contact

Kelsie Murphy - [LinkedIn](https://www.linkedin.com/in/kelsiesmurphy/) - [Twitter](https://twitter.com/kelsiesmurphy)

Project Link: [https://github.com/kelsiesmurphy/pocketlint](https://github.com/kelsiesmurphy/pocketlint)

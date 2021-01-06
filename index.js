const cars = [
    "https://images.app.goo.gl/52C75PJd99qJ7v2f7",
    "https://images.app.goo.gl/mhXgr4rBMV8j8PiH9",
    "https://images.app.goo.gl/f26ZLGJkGQmBYj57A",
    "https://images.app.goo.gl/Dxx5PFPmV3J1zhHq6",
    "https://images.app.goo.gl/JMUBHEi3fqm6De917",
    "https://images.app.goo.gl/smiM2RVVqqNweo4m6",
    "https://images.app.goo.gl/KEPpt6jX5GHVRT3E9"
    
   ];
   
 
 
   /**
    * @returns {string}
    */
 
   function randomCar() {
     return cars[Math.floor(Math.random() * cars.length)];
   }
   
 
   module.exports = {
     randomCar
   };
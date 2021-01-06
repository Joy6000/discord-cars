const cars = [
    "https://media.discordapp.net/attachments/796133907803930666/796212995775791114/JDPA_202020Audi20A320Dark20Gray20Front20View.png?width=901&height=676",
    "https://media.discordapp.net/attachments/796133907803930666/796213151678726154/MW-HY837_at_gla_ZH_20200122173813.png",
    "https://media.discordapp.net/attachments/796133907803930666/796214062467907624/home-shopping-image.png",
    "https://media.discordapp.net/attachments/796133907803930666/796214163994574878/JDPA_202020Audi20A320Dark20Gray20Front20View.png?width=901&height=676",
    "https://media.discordapp.net/attachments/796133907803930666/796214316776554506/USC70JES052A021001.png"
    
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
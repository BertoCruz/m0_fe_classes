// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed
// in, with "*~*" at the beginning and end of the string

class Unicorn {
  constructor(name) {
    this.name = name;
    this.color = "Silver";
    this.message = `What's up? my name is ${this.name}`;
  }

  say(newMessage) {
    this.message = `*~* ${newMessage} *~*`;
    console.log(`\n${this.message}\n`);
  }
}
console.log("-------------------------\n U N I C O R N")
var unicorn1 = new Unicorn("Eustice");
console.log(unicorn1);


unicorn1.say("I waaaaant it thaaaaat way!");
console.log(unicorn1);



// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false

class Vampire {
  constructor(name) {
    this.name = name;
    this.pet = "bat";
    this.thirsty = true;
  }

  drink(){
    this.thirsty = false;
    console.log("My thirst! it has been quenched! thank you.")
  }

  changePet(newPet) {
    this.pet = newPet;
    console.log(`My new pet ${this.pet}, I shall love you`);
  }
}

 console.log("-------------------------\n V A M P I R E")
 var vampire1 = new Vampire("Blade");
 console.log(vampire1);

 vampire1.drink();
 vampire1.changePet("Nomak");
 console.log(vampire1);



//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson

class Dragon {
  constructor (name, rider, color){
  this.name = name;
  this.rider = rider;
  this.color = color;
  this.isHungry = true;
  this.eat = 4;
  }


  changeEat(newEat) {
    this.eat = newEat;
    if (this.eat >= 4){
      this.isHungry = true;
    } else {
      this.isHungry = false;
    }
  }
}


console.log("-------------------------\n D R A G O N")
var dragon1 = new Dragon ("Toothless", "Hiccup", "black");
console.log(dragon1);

dragon1.changeEat(2);
console.log(dragon1);


//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.

class Hobbit {
  constructor(name, disposition) {
    this.name = name;
    this.disposition = disposition;
    this.age = 0;
    this.isAdult = false;
    //once a Hobbit is 33, it should be an adult
    this.isOld = false;
    //once a Hobbit is 101, it is old.
    this.hasRing = false;
    //If the Hobbit's name is "Frodo", true, if not, false.

    if(this.name === "Frodo"){ this.hasRing = true;}
  }

// this line of code should produce a random index number to call from the disposition array for when
//celebrateBirthday is called. However, function is not being read right within this class so that
//I can invoke it in the celebrateBirthday method.

  // function pickOne(array) {
  //   //pick random index value
  //   const randomIndex = Math.floor(Math.random() * array.length);
  //
  //   //get random item
  //   const item = array[randomIndex];
  //   return item;
  // }

  celebrateBirthday() {
    for (var i = 0; i <= 101; i++){
      this.age = i;
      console.log(this.age);

      if(this.age === 33) {
        this.isAdult = true;
        console.log(`You are now... an ADULT, my dear ${this.name}! ;)`);
      } else if(this.age === 101) {
        this.isOld = true;
        console.log(`My My My how you've grown up so fast, ${this.disposition[0]} ${this.name}! ;)`);
      }
    }
  }
}

console.log("-------------------------\n H O B B I T")

var hobbit1 = new Hobbit("Frodo",["Brave", "Selfless", "Thoughtful", "Wise, Observant"]);
var hobbit2 = new Hobbit("Sam", ["Loyal", "Supportive", "Defender", "Educate", "Jolly"]);

console.log(hobbit1);
console.log(hobbit2);

console.log("--------Hobbit1--------")
hobbit1.celebrateBirthday();
console.log(hobbit1);
console.log("--------Hobbit2--------")
hobbit2.celebrateBirthday();
console.log(hobbit2);

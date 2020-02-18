import baskets from "../assets/images/baskets.jpg";
import biker from "../assets/images/biker.jpg";
import carRide from "../assets/images/carRide.jpg";
import chapel from "../assets/images/chapel.jpg";
import desertBiker from "../assets/images/desertBiker.jpg";
import hippo from "../assets/images/hippo.jpg";
import jeep from "../assets/images/jeep.jpg";
import jungle from "../assets/images/jungle.jpg";
import market from "../assets/images/market.jpg";
import redSnake from "../assets/images/redSnake.jpg";
import river from "../assets/images/river.jpg";
import statue from "../assets/images/statue.jpg";
import tent from "../assets/images/tent.jpg";
import wildDogs from "../assets/images/wildDogs.jpg";
import winning from "../assets/images/winning.jpg";

export const PAGES = [
    {
        id: "start",
        story: "You wake up and find yourself in a jungle surrounded by three equally confused people. You see their names floating above their heads. You look up and see your own name. ",
        image: jungle,
        button1: "Begin the adventure!",
        button1Id: "river",
        button2: "",
        button2Id: "",
    },
    {
        id: "river",
        story: "Yourself, and three companions, stubble upon a river. Your friend approaches the river for a drink. As they reach the waters edge a giant hippo explodes from the water grabbing her in its mouth.",
        image: river,
        button1: "Be a hero.",
        button1Id: "hippoDeath",
        button2: "Run away.",
        button2Id: "car",
    },
    {
        id: "hippoDeath",
        story: "You are eaten by a hippo in an attempt to save them. GAME OVER.",
        image: hippo,
        button1: "Reset",
        button1Id: "start",
        button2: "",
        button2Id: "",
    },
    {
        id: "car",
        story: "You run away from the hippos narrowly escaping their chomping jaws. As you flee a car pulls up alongside you. “Get in” the stranger shouts. You and the two remaining adventurers jump straight in.",
        image: jeep,
        button1: "Introduce yourself.",
        button1Id: "storyGoal",
        button2: "",
        button2Id: ""
    },
    {
        id: "storyGoal",
        story: "Hello. The stranger greets you warmly. “My name is Nigel and you lucky adventurers have been chosen to lift the curse on Jumanji. You must take this jewel to the jaguar statue”. He hands you a jewel. “Well this is your stop, good luck out there” Nigel says as he waves goodbye. You get out of the car and discuss what to do.",
        image: carRide,
        button1: "This is too hard, lets just go home.",
        button1Id: "giveUp",
        button2: "I want to save Jumanji",
        button2Id: "findDesert",
    },
    {
        id: "giveUp",
        story: "You give up and spend your days hiding from the hippos. GAME OVER.",
        image: tent,
        button1: "Reset",
        button1Id: "start",
        button2: "",
        button2Id: ""
    },
    {
        id: "findDesert",
        story: "Exploring deeper you find a break in the trees leading to a desert. As you walk deeper into the desert you are suddenly attacked by a villainous biker gang.",
        image: desertBiker,
        button1: "Jump off a cliff to try and escape.",
        button1Id: "cliffJump",
        button2: "Try and outrun the gang back through the trees.",
        button2Id: "bikerDeath"
    },
    {
        id: "bikerDeath",
        story: "The bikers catch up to you and end your adventure. GAME OVER.",
        image: biker,
        button1: "Reset",
        button1Id: "start",
        button2: "",
        button2Id: ""
    },
    {
        id: "cliffJump",
        story: "You jump the cliff and fall into a river, escaping the bikers successfully. You let the river carry you downstream until you see some buildings. You leave the river and find yourself in a bazaar. You see many buildings in front of you including a chapel with magnificent towers, as you are admiring the town a boy bumps into you and quickly gets up to run away.",
        image: market,
        button1: "Investigate the chapel.",
        button1Id: "insideChapel",
        button2: 'Follow the suspicious boy',
        button2Id: 'basketRoom',
    },
    {
        id: "insideChapel",
        story: "You enter and see two doors. One with crimson red glass, the other adorned with glass of royal blue.",
        image: chapel,
        button1: "Enter the red door",
        button1Id: "redDoorDeath",
        button2: "Enter the blue door.",
        button2Id: "blueDoorDeath",
    },
    {
        id: "redDoorDeath",
        story: "You are poisoned by venomous snakes. GAME OVER",
        image: redSnake,
        button1: "Reset",
        button1Id: "start",
        button2: "",
        button2Id: "",
    },
    {
        id: "blueDoorDeath",
        story: "You are eaten by a room full of wild dogs. GAME OVER.",
        image: wildDogs,
        button1: "Reset",
        button1Id: "start",
        button2: "",
        button2Id: "",
    },
    {
        id: "basketRoom",
        story: "The boy leads you to a room full of baskets and then escapes through a child size gap in the wall. Your group decides to investigate the baskets. You find various fruits and grains. Then in the very last basket you find the missing map piece that can lead you to the jaguar statue.",
        image: baskets,
        button1: "Head to the jaguar statue to save Jumanji.",
        button1Id: "statue",
        button2: "",
        button2Id: "",
    },
    {
        id: "statue",
        story: "You arrive at the statue and see a gap in the jaguar statues eye that is just the right size for the jewel.",
        image: statue,
        button1: "Place the jewel into the jaguar's eye.",
        button1Id: "win",
        button2: "",
        button2Id: "",
    },
    {
        id: "win",
        story: "You broke the curse and saved Jumanji. YOU WIN!!!",
        image: winning,
        button1: "Reset",
        button1Id: "start",
        button2: "",
        button2Id: "",
    } 
]
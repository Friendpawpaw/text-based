var yes;
var no = " ";
var doom = " ";
var die =
  "You cannot answer a simple question, you don't deserve a chance, press F5 yourself";

let character = prompt("What is your name, new changeller");
console.log(character);
let ready = prompt(
  `You are in the Music Panda, ready to answer questions, ${character}?`
);
console.log(ready);

// What a mortal, Now you are in the frontgate, ready to answer question!
if (
  ready.toLowerCase() == "yes" ||
  ready.toLowerCase() == "ok" ||
  ready.toLowerCase() == "sure"
) {
  ready = prompt(
    "The first question, which one is latest Cantonese Song: 1. 樹木真美 2. 樹"
  );
  console.log(ready);
  var firstQuestion = ready;
} else if (ready.toLowerCase() == "no" && no === " ") {
  console.log(die);
  no = prompt("You Lost! You Try Again?");
} else if (
  ready.toLowerCase() != "no" &&
  ready.toLowerCase() != "yes" &&
  ready.toLowerCase() != "ok" &&
  ready.toLowerCase() != "sure" &&
  doom == " " &&
  no === " "
) {
  doom = alert(
    "You cannot answer a simple question, you don't deserve a chance, press F5 yourself."
  );
  console.log(die);
} else {
  console.log(die);
}
// The first question, which one is latest Cantonese Song: 1.樹木真美 2.樹
if (firstQuestion == "1") {
  firstQuestion = prompt("Who sing that song? 1. Serrini 2. Aga");
  console.log(firstQuestion);
  var firstLocation = firstQuestion;
} else if (firstQuestion === "2" && no === " ") {
  console.log(die);
  no = prompt("You Lost! You got 0 questions right. Try Again?");
} else if (
  firstQuestion != "1" &&
  firstQuestion != "2" &&
  doom == " " &&
  no === " "
) {
  doom = alert(
    "You cannot answer a simple question, you don't deserve a chance, press F5 yourself."
  );
  console.log(firstQuestion);
  console.log(die);
} else {
  console.log(die);
}

// Where do you want to go? 1. Monster Room 2. Bear Room
if (firstLocation === "1") {
  firstLocation = prompt(
    "The Second question, which one is latest Cantonese Song: 1. 沖繩流浪貓 2. 土瓜灣情歌"
  );
  console.log(firstLocation);
  var SecondQuestion = firstLocation;
} else if (firstLocation == "2" && no === " ") {
  console.log(die);
  no = prompt("You Lost! You got 1 questions right. Try Again?");
} else if (
  firstLocation != "1" &&
  firstLocation != "2" &&
  doom == " " &&
  no === " "
) {
  doom = alert(
    "You cannot answer a simple question, you don't deserve a chance, press F5 yourself."
  );
  console.log(die);
} else {
  console.log(die);
}

// The Second question, which one is latest Cantonese Song: 1.嘔吐 2.20GB
if (SecondQuestion == "1") {
  SecondQuestion = prompt(
    "Who sing that song? 1. Nowhere Boys 2. My Little Airport"
  );
  console.log(SecondQuestion);
  var SecondLocation = SecondQuestion;
} else if (SecondQuestion == "2" && no === " ") {
  console.log(die);
  no = prompt("You Lost! You got 2 questions right. Try Again?");
} else if (
  SecondQuestion != "1" &&
  SecondQuestion != "2" &&
  doom == " " &&
  no === " "
) {
  doom = alert(
    "You cannot answer a simple question, you don't deserve a chance, press F5 yourself."
  );
  console.log(die);
} else {
  console.log(die);
}

// Where do you want to go? 1. Sliver Room 2. Gold Room
if (SecondLocation === "2") {
  SecondLocation = prompt(
    "The third question, which one is latest Cantonese Song: 1. 凡星 2. 世界與你無關"
  );
  console.log(SecondLocation);
  var ThirdQuestion = SecondLocation;
} else if (SecondLocation == "1" && no === " ") {
  console.log(die);
  no = prompt("You Lost! You got 3 questions right. Try Again?");
} else if (
  SecondLocation != "1" &&
  SecondLocation != "2" &&
  doom == " " &&
  no === " "
) {
  doom = alert(
    "You cannot answer a simple question, you don't deserve a chance, press F5 yourself."
  );
  console.log(die);
} else {
  console.log(die);
}

// The third question, which one is latest Cantonese Song: 1.日沒前 2.笛女
if (ThirdQuestion == "2") {
  ThirdQuestion = prompt("Who sing that song? 1. 黃妍 2. 陳蕾 3. 葉巧琳");
  console.log(ThirdQuestion);
  var ThirdLocation = ThirdQuestion;
} else if (ThirdQuestion == "1" && no === " ") {
  console.log(die);
  no = prompt("You Lost! You got 4 questions right. Try Again?");
} else if (
  ThirdQuestion != "1" &&
  ThirdQuestion != "2" &&
  doom == " " &&
  no === " "
) {
  doom = alert(
    "You cannot answer a simple question, you don't deserve a chance, press F5 yourself."
  );
  console.log(die);
} else {
  console.log(die);
}

// Where do you want to go? 1. Mahogany Room 2. Exit Room 3. Oak Room
if (ThirdLocation === "2") {
  ThirdLocation = prompt(
    "The fourth question, which one is latest Cantonese Song: 1. 我地 2. 最難行的路"
  );
  console.log(ThirdLocation);
  var FourthQuestion = ThirdLocation;
} else if (
  (ThirdLocation == "1" && no === " ") ||
  (ThirdLocation == "3" && no === " ")
) {
  console.log(die);
  no = prompt("You Lost! You got 5 questions right. Try Again?");
} else if (
  ThirdLocation != "1" &&
  ThirdLocation != "2" &&
  ThirdLocation != "3" &&
  doom == " " &&
  no === " "
) {
  doom = alert(
    "You cannot answer a simple question, you don't deserve a chance, press F5 yourself."
  );
} else {
  console.log(die);
}

// The fourth question, which one is latest Cantonese Song: 1.我地 2.女神
if (FourthQuestion == "1") {
  FourthQuestion = prompt("Who sing that song? 1. Per Se 2. 方皓玟 3. 鄭欣宜");
  console.log(FourthQuestion);
  var FourthLocation = FourthQuestion;
} else if (FourthQuestion == "2" && no === " ") {
  console.log(die);
  no = prompt("You Lost! You got 6 questions right. Try Again?");
} else if (
  FourthQuestion != "1" &&
  FourthQuestion != "2" &&
  doom == " " &&
  no === " "
) {
  doom = alert(
    "You cannot answer a simple question, you don't deserve a chance, press F5 yourself."
  );
} else {
  console.log(die);
}

// Where do you want to go? 1. Crystal Room 2. Diamond Room 3. Go back to Gold Room
if (FourthLocation === "3") {
  FourthLocation = prompt(
    "The fifth question, which one is latest Cantonese Song: 1. Summer Sea 2. Sorrowful"
  );
  console.log(FourthLocation);
  var FifthQuestion = FourthLocation;
} else if (
  (FourthLocation == "1" && no === " ") ||
  (FourthLocation == "2" && no === " ")
) {
  console.log(die);
  no = prompt("You Lost! You got 7 questions right. Try Again?");
} else if (
  FourthLocation != "1" &&
  FourthLocation != "2" &&
  FourthLocation != "3" &&
  doom == " " &&
  no === " "
) {
  doom = alert(
    "You cannot answer a simple question, you don't deserve a chance, press F5 yourself."
  );
} else {
  console.log(die);
}

// The fifth question, which one is latest Cantonese Song: 1.Summer Sea 2.Sorrowful
if (FifthQuestion == "2") {
  FifthQuestion = prompt("Who sing that song? 99. Whizz 100. Kiri T");
  console.log(FifthQuestion);
  var FifthLocation = FifthQuestion;
} else if (FifthQuestion == "1" && no === " ") {
  console.log(die);
  no = prompt("You Lost! You got 8 questions right. Try Again?");
} else if (
  FifthQuestion != "1" &&
  FifthQuestion != "2" &&
  doom == " " &&
  no === " "
) {
  doom = alert(
    "You cannot answer a simple question, you don't deserve a chance, press F5 yourself."
  );
} else {
  console.log(die);
}

// Where do you want to go? 99. Wizard's Room 100. Magician's Room
if (FifthLocation === "99") {
  FifthLocation = prompt(
    "The final question, 我哋香港呢，係好正㗎！成日呢，啲人喺到話香港無Future，Well，我哋自己寫出嚟囉！讀多啲書，飲多啲水，食多啲健康嘅食物，唔好食咁多糖，各位小朋友，: 1. 我哋將來就係社會嘅棟樑！2. 我哋將來就係未來社會嘅棟樑！"
  );
  console.log(FifthLocation);
  var SixthQuestion = FifthLocation;
} else if (FifthQuestion == "100" && no === " ") {
  console.log(die);
  no = prompt("You Lost! You got 9 questions right. Try Again?");
} else if (
  FifthLocation != "99" &&
  FifthLocation != "100" &&
  doom == " " &&
  no === " "
) {
  doom = alert(
    "You cannot answer a simple question, you don't deserve a chance, press F5 yourself."
  );
} else {
  console.log(die);
}

// the final final question
if (SixthQuestion == "1") {
  SixthQuestion = prompt(
    "What is this song? 101. Let Us Go Then You and I 010. All We Have Is Now"
  );
  console.log(SixthQuestion);
  var SixthLocation = SixthQuestion;
} else if (FifthQuestion == "2" && no === " ") {
  console.log(die);
  no = prompt("You Lost! You got 10 questions right. Try Again?");
} else if (
  FifthLocation != "1" &&
  FifthLocation != "2" &&
  doom == " " &&
  no === " "
) {
  doom = alert(
    "You cannot answer a simple question, you don't deserve a chance, press F5 yourself."
  );
} else {
  console.log(die);
}

// The final question
if (SixthLocation == "101") {
  SixthLocation = prompt(
    `congratulations! you win, ${character}. You got 10 questions right. want to try again?`
  );
  console.log(SixthLocation);
  var victoryChoice = SixthLocation;
} else if (SixthLocation == "010" && no === " ") {
  console.log(die);
  no = prompt("You Lost! You got 11 questions right. Try Again?");
} else if (
  SixthLocation != "101" &&
  SixthLocation != "010" &&
  doom == " " &&
  no === " "
) {
  doom = alert(
    "You cannot answer a simple question, you don't deserve a chance, press F5 yourself."
  );
} else {
  console.log(die);
}

// replay(win & lost)
if (
  no.toLowerCase() == "yes" ||
  no.toLowerCase() == "ok" ||
  no.toLowerCase() == "sure"
) {
  location.reload();
} else if (no.toLowerCase() == "no") {
  alert("End Game~");
} else {
  console.log(die);
}

if (
  victoryChoice.toLowerCase() == "yes" ||
  victoryChoice.toLowerCase() == "ok" ||
  victoryChoice.toLowerCase() == "sure"
) {
  location.reload();
} else if (victoryChoice.toLowerCase() == "no") {
  alert("End Game~");
} else if (
  victoryChoice.toLowerCase() != "no" &&
  victoryChoice.toLowerCase() != "yes" &&
  victoryChoice.toLowerCase() != "ok" &&
  victoryChoice.toLowerCase() != "sure" &&
  doom == " " &&
  no === " "
) {
  doom = alert(
    "You cannot answer a simple question, but you win, so I let you go!"
  );
} else {
  console.log(die);
}

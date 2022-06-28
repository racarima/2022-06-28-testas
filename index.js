/* 1. Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus).
Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės
kintamuosius atspausdintų tokį sakinį : "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".*/

const h1 = document.querySelector("h1");
myName = "Rima";
myLastName = "Sabaitiene";
myBirtDate = 1984;
thisYear = 2022;

console.log(
  `Aš esu ${myName} ${myLastName}. Man yra ${thisYear - myBirtDate} metai(ų)`
);
h1.innerHTML = `Aš esu ${myName} ${myLastName}. Man yra ${
  thisYear - myBirtDate
} metai(ų)`;

/* 2. Sugeneruokite 6 kintamuosius kurių reikšmės būtų atsitiktiniai skaičiai nuo 1000 iki 9999.
Atspausdinkite reikšmes viename strige, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų <NEGALIMA className="
"></NEGALIMA>*/

let random1 = Math.floor(Math.random() * 9999 + 1000);
let random2 = Math.floor(Math.random() * 9999 + 1000);
let random3 = Math.floor(Math.random() * 9999 + 1000);
let random4 = Math.floor(Math.random() * 9999 + 1000);
let random5 = Math.floor(Math.random() * 9999 + 1000);
let random6 = Math.floor(Math.random() * 9999 + 1000);

/* 3. Parašykite funkciją, kuri priimtų du parametrus ‘exclude’ ir ‘length’.
Funcija turi sugeneruoti atsitiktinį stringą iš lotyniškų didžiūjų raidžių. Stringo ilgis nurodomas antru perduodamu parametru.
Pirmuoju parametru palikite galimybę į funkciją perduoti simbolius kurių sugeneruotame stringe neturėtų būti.
Aprašykite funkciją taip, kad ją iššaukinėjant, būtų privaloma nurodyti tik generuojamo stringo ilgį.*/

//function random (exclude, length)

/* 4. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200.
Suskaičiuokite kiek yra kiekvienos raidės.*/

let letters = ["A", "B", "C", "D"];
arr = [];
for (let i = 0; i < 200; i++) {
  const randomLetters = letters[Math.floor(Math.random() * letters.length)];
  arr[i] = randomLetters;
}
console.log(arr);

/* 5. Išrūšiuokite 4 uždavinio masyvą pagal abecėlę.*/
arr.sort();
console.log(arr);

/* 6. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25.
Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.*/

let array = [];
let array1 = Math.floor(Math.random() * 25 + 5);
let array2 = Math.floor(Math.random() * 25 + 5);
console.log(array1);
console.log(array2);
array.unshift(array2);
array.unshift(array1);
for (let i = 0; i < 8; i++) {
  array[i] = array[i] + array[i + 1];
  array.push(array[i]);
}
array.unshift(array2);
array.unshift(array1);
array.pop();
array.pop();
console.log(array);

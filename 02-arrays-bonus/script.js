const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
for(let i=teachers.length - 1; i>=0; i--){
  reversedTeachers.push(teachers[i])
}
console.log(reversedTeachers)


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = null;
for(let i=0; i<teachers.length; i++){
  
}


// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(1,1)
console.log(teachers)


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let flag = false
for(let i = 0; i<teachers.length; i++){
  if(teachers[i] != ""){
    flag = true
  }
}
const isFabioPresent = flag;
console.log(isFabioPresent)


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let strings = "";
for(let i = 0; i<teachers.length; i++){
  strings+= teachers[i];
  if(i<teachers.length - 1){
    strings+=", ";
  }
}

const teachersString = strings;
console.log(teachersString)
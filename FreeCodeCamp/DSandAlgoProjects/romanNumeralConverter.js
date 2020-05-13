const symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function convertToRoman(num) {
 let res = "";
 for(let i = 0; i < values.length; i++){
   while(num >= values[i]){
     num -= values[i];
     res += symbols[i];
   }
 }
 return res;
}

console.log(convertToRoman(36));

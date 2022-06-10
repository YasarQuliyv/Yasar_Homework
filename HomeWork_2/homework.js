//1. sum adlı funksiya yazın. Funksiya ədədlərdən ibarət bir array i parametr kimi
//qəbul etməli və array ın bütün elementlərinin cəmini qaytarmalıdır:

function sum(nums = []) {
   let sum = 0;
   for (let num of nums) {
      sum += num;
   }
   return sum;
}
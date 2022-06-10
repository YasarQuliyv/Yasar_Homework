// function map(arr=[],func)
// {
//     let newArr=[];
//     func=function (arr)
//     {
       
       
//         let b=arr/2;
//         for(let i=0;i<b;i++)
//         {
//             if(arr%i!==0)
//             {
//                return false;
//                 break;
                
//             }

//         }
      
//         return true;

//     }
//     for(let i=0;i<arr.length;i++)
//     {
//         newArr.push(func(arr[i]));
//     }
//     return newArr;
// }   function map(a = [], func) {

    function map(a = [], func) {

        let newarr = [];
        func =
          function IsPrime(a) {
            let flag = true;
            let m = a / 2;
            for (let i = 2; i <= m; i++) {
              if (a % i == 0) {
                flag = false;
                return false;
              }
            }
            if (flag) {
              return true;
            }
          }
      
        for (let j = 0; j < a.length; j++) {
          newarr.push(func(a[j]));
        }
      
        return newarr;
      }
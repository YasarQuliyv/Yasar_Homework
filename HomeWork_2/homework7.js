//  1. usul

// function includes(arr=[])
// {
// let a= arr.indexOf('Yashar')
// if(a==-1)
// {
//     return false;
// }
// else{
//     return true;
// }
// }

// 2. usul
function includes(arr = [], check) {
    let a = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === check) {
            a++;
        }

        if (a === 1) return true;
        else return false;
    }
}
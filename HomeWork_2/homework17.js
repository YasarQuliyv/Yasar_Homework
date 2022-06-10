// function every(arr = [], element) {
//     for (let i = 0; i < arr.length; i++) {
//         var a = 0;
//         var b = 0;
//         if (element === arr[i]) {
//             a++;
//         }
//         else {
//             b++;

//         }
//     }
//     return `${b > 0 ? false : true}`;
// }
const sites1 = ['my.gov.az', 'report.az', 'google.com', 'asan.gov.az', 'now.sh'];
const sites2 = ['my.gov.az', 'report.az', 'asan.gov.az'];
function every(arr,domain)
{
    let a=0;
    let b=0;
    for(let i=0; i<arr.length;i++)
    {
        if(arr[i].endsWith(domain))
        {
            a++;
        }
        else
        {
            b++;
        }
    }
    return `${b > 0 ? false : true}`;
}
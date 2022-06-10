function some(arr=[],element)
{
    let cavab= true;
    let a=0;
    for(let i=0; i<arr.length;i++)
    {
        if(element=== arr[i])
            {
                a++;

            }
    }
    return `${a>0 ? true:false}`;

}
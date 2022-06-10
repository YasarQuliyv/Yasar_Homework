
function fn(arr1=[])
{
    let arr2=[];
    for(let i=0;i<arr1.length;i++)
    {
        if(arr1[i]%2==0 || arr1[i]%3==0 )
        {
            if( arr1[i]!==2 && arr1[i]!==3)
            {
                arr2.push(arr1[i]);
            }
            
            
        }
    }
    return 'Sade olmayan eded!:'+ arr2; 
  
}

function filter(arr=[],fn)
{
    return fn ;
}


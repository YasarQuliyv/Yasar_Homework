 function find (arr=[],element) {
    for (let i = 0; i < arr.length; i++) {
        var b = 0;
        if (element == arr[i]) {
            if (b === 0) {
                var a = arr[i];
                b++;
            }

        }
       

    }
    return `${b==0 ? a: '-1'}`;
}
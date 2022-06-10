function union(arr1 = [], arr2 = []) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i]);

    }


    for (let i = 0; i < arr2.length; i++) {
        let yoxlama = arr3.indexOf(arr2[i]);
        if (yoxlama === -1) {
            arr3.push(arr2[i]);
        }
    }
    return arr3;
}
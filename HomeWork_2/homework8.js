function unique(array = []) {
    let array1 = [];
    for (let i = 0; i < array.length; i++) {
        let yoxlama = array1.indexOf(array[i]);
        if (yoxlama === -1) {
            array1.push(array[i]);
        }
    }
    return array1;
}
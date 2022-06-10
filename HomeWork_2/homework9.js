function intersection(arr1 = [], arr2 = []) {
    let partner = [];
    for (let i = 0; i < arr1.length; i++) {
        let yoxlama = arr2.indexOf(arr1[i]);
        if (yoxlama !== -1) {
            partner.push(arr1[i]);
        }
    }
    return partner;
}
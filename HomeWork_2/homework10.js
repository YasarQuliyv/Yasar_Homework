function flat2d(arr = [[]]) {
    let yashar;
    let YASHAR = [];
    for (let i = 0; i < arr.length; i++) {
        yashar = arr[i];
        for (let j = 0; j < yashar.length; j++) {
            YASHAR.push(yashar[j]);
        }

    }

    return YASHAR;
}
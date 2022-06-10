function reverse(arr = []) {
    let massiv = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        massiv.push(arr[i]);
    }
    return massiv;
}
function geometricMean(arr = []) {
    let hasil = 1;
    for (let i = 0; i < arr.length; i++) {
        hasil *= arr[i];
    }
    let hendesi_orta = Math.pow(hasil, 1 / arr.length);
    return hendesi_orta;
}
function euclideanDistance(array1 = [x, y], array2 = [x1, y1]) {
    // let evklid= Math.sqrt(Math.pow(x1-x,2)+Math.pow(y1-y,2));
    let xx = Math.pow(array2[0] - array1[0], 2);
    let yy = Math.pow(array2[1] - array1[1], 2);
    let evklid = Math.sqrt(xx + yy);
    return evklid;
}
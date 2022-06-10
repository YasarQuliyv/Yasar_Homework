function arithmeticMean(ededler = []) {
    let sum = 0;
    for (let i = 0; i < ededler.length; i++) {
        sum += ededler[i];
    }
    let ededi_orta = sum / ededler.length;
    return ededi_orta;
}
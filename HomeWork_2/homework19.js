function generatePassword(passwordLength) {

let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'R', 'r', 'S', 's','T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];
 let password;
    for (let i = 0; i <passwordLength; i++) {
        password += arr[Math.floor(Math.random() * arr.length)];
    }
    return password;

}

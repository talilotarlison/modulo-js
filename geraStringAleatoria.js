function geraStringAleatoria(tamanho) {
    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}

console.log(geraStringAleatoria(8)); // PQjN0tnQ
console.log(geraStringAleatoria(7)); // sAqUdYY
console.log(geraStringAleatoria(6)); // gle8cp
console.log(geraStringAleatoria(5)); // 3jJe3
//https://www.webtutorial.com.br/funcao-para-gerar-uma-string-aleatoria-random-com-caracteres-especificos-em-javascript/

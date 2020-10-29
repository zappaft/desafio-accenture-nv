const tabl = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['x', 'w', 'y', 'z'],
  0: [' ']
}

module.exports = {
  translate(codigo) {
    var palavra = '';
    codigoSplit = codigo.split(' ');
    codigoSplit.forEach(lista => {
      var adjustedIndex;
      if (lista[0] in tabl) {
        const tabl_lista = tabl[lista[0]];
        if (lista.length > tabl_lista.length) {
          adjustedIndex = (lista.length - 1) % tabl_lista.length;
          palavra += this.getChar(tabl_lista, adjustedIndex);
        } else {
          palavra += this.getChar(tabl_lista, lista.length - 1);
        }
      }
    });
    return palavra;
  },

  getChar(tabl, ind) {
    return tabl[ind];
  }
}

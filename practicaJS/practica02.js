var listOriginal = [12, 6, 8, 9, 5, 7,];

var listaModificada = miMap(listaOriginal, function (valor) {
    return valor * 2;


    function miMap(lista, cbTransform) {
        let listaNueva = [];

        for (let i = 0; i < lista.length; i++) {
            listaNueva.push(cbTransform(lista[i, i, lista]));
        }
        return listaNueva;
    }
});
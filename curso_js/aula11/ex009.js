function verificar(){
    var txtum = window.document.querySelector("input#txt1");
    var resu = window.document.getElementById("resu");
    var pais = 'brasil';

    if (txtum.value.toLowerCase() == pais) {
        resu.innerHTML = 'Você é Brasileiro!'
    } else {
        resu.innerHTML = 'Você é Estrangeiro!'
    }
    txtum.value = ""
}

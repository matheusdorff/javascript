function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //bom dia!
        img.src = 'pexels-souvenirpixels-414612.jpg'
        window.document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){
        // boa tarde!   
        img.src = 'pexels-todd-trapani-488382-1420440.jpg'
        window.document.body.style.background = '#b9846f'
    }else{
        //boa noite
        img.src = 'pexels-brakou-1723637.jpg'
        window.document.body.style.background = '#515154'
    }
}

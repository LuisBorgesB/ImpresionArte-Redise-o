var contenedorFlotante = document.getElementById('contenedorGeneralFlotanteProductos')
var cuerpo = document.querySelector("body")
var botonAtras = document.getElementById('atras')
var botonSiguiente = document.getElementById('siguiente')
var menu = document.getElementById('menuDesplegable')
var sombrasDetalleProd = document.getElementById('contenedorSoporteFlotante')

var telf = document.getElementById('telf')
var corr =document.getElementById('corr')
var contenedorFlotanteTelfCorr =document.getElementById('contenedorFlotanteTelfCorr')
var contenedorFlotanteMedio =document.getElementById('contenedorFlotanteMedio')
var correo =document.getElementById('correo')
var telefono =document.getElementById('telefono')
var copyPhone = document.getElementById('copyPhone')
var copyMail = document.getElementById('copyMail')
var textPhone = document.getElementById('copyMail')
var textoCorreo = document.getElementById('copyMail')


/*FUNCION COPIAR PORTAPAPELES*/
document.getElementById('copyPhone').addEventListener('click', function () {
    var inputTemporal = document.createElement('input') 
    inputTemporal.setAttribute('value', document.getElementById('textPhone').innerHTML)
    document.body.appendChild(inputTemporal)
    inputTemporal.select()
    document.execCommand('copy')
    document.body.removeChild(inputTemporal)
})
document.getElementById('copyMail').addEventListener('click', function () {
    var inputTemporal = document.createElement('input') 
    inputTemporal.setAttribute('value', document.getElementById('textoCorreo').innerHTML)
    document.body.appendChild(inputTemporal)
    inputTemporal.select()
    document.execCommand('copy')
    document.body.removeChild(inputTemporal)
})







/*FUNCION DESPLEGAR TELEFONO Y CORREO*/
corr.addEventListener('click', function () {
    contenedorFlotanteTelfCorr.style.visibility="visible"
    contenedorFlotanteMedio.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    correo.style.visibility="visible"
})
telf.addEventListener('click', function () {
    contenedorFlotanteTelfCorr.style.visibility="visible"
    contenedorFlotanteMedio.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    telefono.style.visibility="visible"
})
contenedorFlotanteTelfCorr.addEventListener('click', function () {
    contenedorFlotanteTelfCorr.style.visibility="hidden"
    contenedorFlotanteMedio.style.visibility="hidden"
    cuerpo.classList.remove('oscurecerBodyDP')
    correo.style.visibility="hidden"
    telefono.style.visibility="hidden"
})
document.addEventListener('keypress', function (event) {
    var keyName = event.key(27)
    if (event.key == keyName) {
        alert('funciono')
    }
})





var inicioMenuDezplegable = document.getElementById('I')
var nosotrosMenuDezplegable = document.getElementById('N')
var productoMenuDezplegable = document.getElementById('P')
var faqMenuDezplegable = document.getElementById('F')
var contactoMenuDezplegable = document.getElementById('C')

var nosotrosMenuInicio = document.getElementById('Nos')
var productoMenuInicio = document.getElementById('Prod')
var faqMenuInicio = document.getElementById('Faq')
var contactoMenuInicio = document.getElementById('Cont')

inicioMenuDezplegable.addEventListener('click', function () {
    location.href="../index.html#inicio"
    menu.classList.remove('menuDesplegableON')
    menu.classList.add('menuDesplegableOFF')
    cuerpo.classList.remove('oscurecerBody')
})

nosotrosMenuDezplegable.addEventListener('click', function () {
    location.href="../index.html#nosotros"
    menu.classList.remove('menuDesplegableON')
    menu.classList.add('menuDesplegableOFF')
    cuerpo.classList.remove('oscurecerBody')
})
productoMenuDezplegable.addEventListener('click', function () {
    location.href="../index.html#productos"
    menu.classList.remove('menuDesplegableON')
    menu.classList.add('menuDesplegableOFF')
    cuerpo.classList.remove('oscurecerBody')
})
faqMenuDezplegable.addEventListener('click', function () {
    location.href="../index.html#faq"
    menu.classList.remove('menuDesplegableON')
    menu.classList.add('menuDesplegableOFF')
    cuerpo.classList.remove('oscurecerBody')
})
contactoMenuDezplegable.addEventListener('click', function () {
    location.href="../index.html#contacto"
    menu.classList.remove('menuDesplegableON')
    menu.classList.add('menuDesplegableOFF')
    cuerpo.classList.remove('oscurecerBody')
})

nosotrosMenuInicio.onclick = irNosotros
productoMenuInicio.onclick = irProductos
faqMenuInicio.onclick = irFaq
contactoMenuInicio.onclick = irContacto
function irNosotros() {
    location.href="../index.html#nosotros"
}
function irProductos() {
    location.href="../index.html#productos"
}
function irFaq() {
    location.href="../index.html#faq"
}
function irContacto() {
    location.href="../index.html#contacto"
}


var Prod_1 = document.getElementById('P1')
var Prod_2 = document.getElementById('P2')
var Prod_3 = document.getElementById('P3')
var Prod_4 = document.getElementById('P4')
var Prod_5 = document.getElementById('P5')
var Prod_6 = document.getElementById('P6')
var Prod_7 = document.getElementById('P7')
var Prod_8 = document.getElementById('P8')
var Prod_9 = document.getElementById('P9')
var Prod_10 = document.getElementById('P10')
var Prod_11 = document.getElementById('P11')
var Prod_12 = document.getElementById('P12')
var Prod_13 = document.getElementById('P13')
var Prod_14 = document.getElementById('P14')
var Prod_15 = document.getElementById('P15')
var Prod_16 = document.getElementById('P16')
var Prod_17 = document.getElementById('P17')
var Prod_18 = document.getElementById('P18')
var Prod_19 = document.getElementById('P19')
var Prod_20 = document.getElementById('P20')
var Prod_21 = document.getElementById('P21')
var Prod_22 = document.getElementById('P22')
var Prod_23 = document.getElementById('P23')
var Prod_24 = document.getElementById('P24')
var Prod_25 = document.getElementById('P25')
var Prod_26 = document.getElementById('P26')

var DProd_1 = document.getElementById('DP1')
var DProd_2 = document.getElementById('DP2')
var DProd_3 = document.getElementById('DP3')
var DProd_4 = document.getElementById('DP4')
var DProd_5 = document.getElementById('DP5')
var DProd_6 = document.getElementById('DP6')
var DProd_7 = document.getElementById('DP7')
var DProd_8 = document.getElementById('DP8')
var DProd_9 = document.getElementById('DP9')
var DProd_10 = document.getElementById('DP10')
var DProd_11 = document.getElementById('DP11')
var DProd_12 = document.getElementById('DP12')
var DProd_13 = document.getElementById('DP13')
var DProd_14 = document.getElementById('DP14')
var DProd_15 = document.getElementById('DP15')
var DProd_16 = document.getElementById('DP16')
var DProd_17 = document.getElementById('DP17')
var DProd_18 = document.getElementById('DP18')
var DProd_19 = document.getElementById('DP19')
var DProd_20 = document.getElementById('DP20')
var DProd_21 = document.getElementById('DP21')
var DProd_22 = document.getElementById('DP22')
var DProd_23 = document.getElementById('DP23')
var DProd_24 = document.getElementById('DP24')
var DProd_25 = document.getElementById('DP25')
var DProd_26 = document.getElementById('DP26')

/*FUNCION SALIR DETALLE PRODUCTO*/
sombrasDetalleProd.addEventListener('click', function () {
    contenedorFlotante.style.visibility="hidden"
    DProd_1.style.visibility="hidden"
    DProd_2.style.visibility="hidden"
    DProd_3.style.visibility="hidden"
    DProd_4.style.visibility="hidden"
    DProd_5.style.visibility="hidden"
    DProd_6.style.visibility="hidden"
    DProd_7.style.visibility="hidden"
    DProd_8.style.visibility="hidden"
    DProd_9.style.visibility="hidden"
    DProd_10.style.visibility="hidden"
    DProd_11.style.visibility="hidden"
    DProd_12.style.visibility="hidden"
    DProd_13.style.visibility="hidden"
    DProd_14.style.visibility="hidden"
    DProd_15.style.visibility="hidden"
    DProd_16.style.visibility="hidden"
    DProd_17.style.visibility="hidden"
    DProd_18.style.visibility="hidden"
    DProd_19.style.visibility="hidden"
    DProd_20.style.visibility="hidden"
    DProd_21.style.visibility="hidden"
    DProd_22.style.visibility="hidden"
    DProd_23.style.visibility="hidden"
    DProd_24.style.visibility="hidden"
    DProd_25.style.visibility="hidden"
    DProd_26.style.visibility="hidden"
    cuerpo.classList.remove('oscurecerBodyDP')
    botonAtras.style.visibility="hidden"
    botonSiguiente.style.visibility="hidden"
    sombrasDetalleProd.style.visibility="hidden"
})

/*FUNCIONES DESPLEGAR DETALLES DE PRODUCTOS*/
Prod_1.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_1.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_2.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_2.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_3.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_3.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_4.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_4.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_5.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_5.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_6.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_6.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_7.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_7.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_8.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_8.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_9.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_9.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_10.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_10.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_11.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_11.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_12.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_12.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_13.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_13.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_14.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_14.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_15.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_15.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_16.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_16.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_17.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_17.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_18.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_18.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_19.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_19.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_20.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_20.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_21.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_21.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_22.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_22.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_23.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_23.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_24.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_24.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_25.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_25.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})
Prod_26.addEventListener('click', function () {
    contenedorFlotante.style.visibility="visible"
    DProd_26.style.visibility="visible"
    cuerpo.classList.add('oscurecerBodyDP')
    botonAtras.style.visibility="visible"
    botonSiguiente.style.visibility="visible"
    sombrasDetalleProd.style.visibility="visible"
})

/*FUNCION BOTON ATRAS*/
botonAtras.addEventListener('click', function () {
    if (DProd_2.style.visibility=="visible") {
        DProd_2.style.visibility="hidden"
        DProd_1.style.visibility="visible"
    } else if (DProd_3.style.visibility=="visible") {
        DProd_3.style.visibility="hidden"
        DProd_2.style.visibility="visible"
    } else if (DProd_4.style.visibility=="visible") {
        DProd_4.style.visibility="hidden"
        DProd_3.style.visibility="visible"
    } else if (DProd_5.style.visibility=="visible") {
        DProd_5.style.visibility="hidden"
        DProd_4.style.visibility="visible"
    } else if (DProd_6.style.visibility=="visible") {
        DProd_6.style.visibility="hidden"
        DProd_5.style.visibility="visible"
    } else if (DProd_7.style.visibility=="visible") {
        DProd_7.style.visibility="hidden"
        DProd_6.style.visibility="visible"
    } else if (DProd_8.style.visibility=="visible") {
        DProd_8.style.visibility="hidden"
        DProd_7.style.visibility="visible"
    } else if (DProd_9.style.visibility=="visible") {
        DProd_9.style.visibility="hidden"
        DProd_8.style.visibility="visible"
    } else if (DProd_10.style.visibility=="visible") {
        DProd_10.style.visibility="hidden"
        DProd_9.style.visibility="visible"
    } else if (DProd_11.style.visibility=="visible") {
        DProd_11.style.visibility="hidden"
        DProd_10.style.visibility="visible"
    } else if (DProd_12.style.visibility=="visible") {
        DProd_12.style.visibility="hidden"
        DProd_11.style.visibility="visible"
    } else if (DProd_13.style.visibility=="visible") {
        DProd_13.style.visibility="hidden"
        DProd_12.style.visibility="visible"
    } else if (DProd_14.style.visibility=="visible") {
        DProd_14.style.visibility="hidden"
        DProd_13.style.visibility="visible"
    } else if (DProd_15.style.visibility=="visible") {
        DProd_15.style.visibility="hidden"
        DProd_14.style.visibility="visible"
    } else if (DProd_16.style.visibility=="visible") {
        DProd_16.style.visibility="hidden"
        DProd_15.style.visibility="visible"
    } else if (DProd_17.style.visibility=="visible") {
        DProd_17.style.visibility="hidden"
        DProd_16.style.visibility="visible"
    } else if (DProd_18.style.visibility=="visible") {
        DProd_18.style.visibility="hidden"
        DProd_17.style.visibility="visible"
    } else if (DProd_19.style.visibility=="visible") {
        DProd_19.style.visibility="hidden"
        DProd_18.style.visibility="visible"
    } else if (DProd_20.style.visibility=="visible") {
        DProd_20.style.visibility="hidden"
        DProd_19.style.visibility="visible"
    } else if (DProd_21.style.visibility=="visible") {
        DProd_21.style.visibility="hidden"
        DProd_20.style.visibility="visible"
    } else if (DProd_22.style.visibility=="visible") {
        DProd_22.style.visibility="hidden"
        DProd_21.style.visibility="visible"
    } else if (DProd_23.style.visibility=="visible") {
        DProd_23.style.visibility="hidden"
        DProd_22.style.visibility="visible"
    } else if (DProd_24.style.visibility=="visible") {
        DProd_24.style.visibility="hidden"
        DProd_23.style.visibility="visible"
    } else if (DProd_25.style.visibility=="visible") {
        DProd_25.style.visibility="hidden"
        DProd_24.style.visibility="visible"
    } else if (DProd_26.style.visibility=="visible") {
        DProd_26.style.visibility="hidden"
        DProd_25.style.visibility="visible"
    } 
})
/*FUNCION BOTON SIGUIENTE*/
botonSiguiente.addEventListener('click', function () {
    if (DProd_1.style.visibility=="visible") {
        DProd_1.style.visibility="hidden"
        DProd_2.style.visibility="visible"
    } else if (DProd_2.style.visibility=="visible") {
        DProd_2.style.visibility="hidden"
        DProd_3.style.visibility="visible"
    } else if (DProd_3.style.visibility=="visible") {
        DProd_3.style.visibility="hidden"
        DProd_4.style.visibility="visible"
    } else if (DProd_4.style.visibility=="visible") {
        DProd_4.style.visibility="hidden"
        DProd_5.style.visibility="visible"
    } else if (DProd_5.style.visibility=="visible") {
        DProd_5.style.visibility="hidden"
        DProd_6.style.visibility="visible"
    } else if (DProd_6.style.visibility=="visible") {
        DProd_6.style.visibility="hidden"
        DProd_7.style.visibility="visible"
    } else if (DProd_7.style.visibility=="visible") {
        DProd_7.style.visibility="hidden"
        DProd_8.style.visibility="visible"
    } else if (DProd_8.style.visibility=="visible") {
        DProd_8.style.visibility="hidden"
        DProd_9.style.visibility="visible"
    } else if (DProd_9.style.visibility=="visible") {
        DProd_9.style.visibility="hidden"
        DProd_10.style.visibility="visible"
    } else if (DProd_10.style.visibility=="visible") {
        DProd_10.style.visibility="hidden"
        DProd_11.style.visibility="visible"
    } else if (DProd_11.style.visibility=="visible") {
        DProd_11.style.visibility="hidden"
        DProd_12.style.visibility="visible"
    } else if (DProd_12.style.visibility=="visible") {
        DProd_12.style.visibility="hidden"
        DProd_13.style.visibility="visible"
    } else if (DProd_13.style.visibility=="visible") {
        DProd_13.style.visibility="hidden"
        DProd_14.style.visibility="visible"
    } else if (DProd_14.style.visibility=="visible") {
        DProd_14.style.visibility="hidden"
        DProd_15.style.visibility="visible"
    } else if (DProd_15.style.visibility=="visible") {
        DProd_15.style.visibility="hidden"
        DProd_16.style.visibility="visible"
    } else if (DProd_16.style.visibility=="visible") {
        DProd_16.style.visibility="hidden"
        DProd_17.style.visibility="visible"
    } else if (DProd_17.style.visibility=="visible") {
        DProd_17.style.visibility="hidden"
        DProd_18.style.visibility="visible"
    } else if (DProd_18.style.visibility=="visible") {
        DProd_18.style.visibility="hidden"
        DProd_19.style.visibility="visible"
    } else if (DProd_19.style.visibility=="visible") {
        DProd_19.style.visibility="hidden"
        DProd_20.style.visibility="visible"
    } else if (DProd_20.style.visibility=="visible") {
        DProd_20.style.visibility="hidden"
        DProd_21.style.visibility="visible"
    } else if (DProd_21.style.visibility=="visible") {
        DProd_21.style.visibility="hidden"
        DProd_22.style.visibility="visible"
    } else if (DProd_22.style.visibility=="visible") {
        DProd_22.style.visibility="hidden"
        DProd_23.style.visibility="visible"
    } else if (DProd_23.style.visibility=="visible") {
        DProd_23.style.visibility="hidden"
        DProd_24.style.visibility="visible"
    } else if (DProd_24.style.visibility=="visible") {
        DProd_24.style.visibility="hidden"
        DProd_25.style.visibility="visible"
    } else if (DProd_25.style.visibility=="visible") {
        DProd_25.style.visibility="hidden"
        DProd_26.style.visibility="visible"
    }
})





/*OCULTAR Y VISIBILIZAR EL BOTON DEL MENU*/
var botonMenu = document.getElementById('botonDezplegarMenu')
document.addEventListener('scroll', function () {
    if (scrollY > 550) {
        botonMenu.style.visibility="visible"
    } else {
        botonMenu.style.visibility="hidden"
    }
})
/*DESPLEGAR Y OCULTAR EL MENU*/
botonMenu.addEventListener('click', function () {
    if (menu.className == 'menuDesplegableOFF') {
        menu.classList.remove('menuDesplegableOFF')
        menu.classList.add('menuDesplegableON')
        cuerpo.classList.add('oscurecerBody')
    } else {
        menu.classList.remove('menuDesplegableON')
        menu.classList.add('menuDesplegableOFF')
        cuerpo.classList.remove('oscurecerBody')
    }
})
/*OSCURECER LA FOTO DEL PRODUCTO*/
/*
var foto1 = document.getElementById('P1')
var foto2 = document.getElementById('P2')
var foto3 = document.getElementById('P3')
var foto4 = document.getElementById('P4')
var foto5 = document.getElementById('P5')
var foto6 = document.getElementById('P6')
var foto7 = document.getElementById('P7')
var foto8 = document.getElementById('P8')
var foto9 = document.getElementById('P9')
var foto10 = document.getElementById('P10')
var foto11 = document.getElementById('P11')
var foto12 = document.getElementById('P12')
var foto13 = document.getElementById('P13')
var foto14 = document.getElementById('P14')
var foto15 = document.getElementById('P15')
var foto16 = document.getElementById('P16')
var foto17 = document.getElementById('P17')
var foto18 = document.getElementById('P18')
var foto19 = document.getElementById('P19')
var foto20 = document.getElementById('P20')
var foto21 = document.getElementById('P21')
var foto22 = document.getElementById('P22')
var foto23 = document.getElementById('P23')
var foto24 = document.getElementById('P24')
var foto25 = document.getElementById('P25')
var foto26 = document.getElementById('P26')
*/
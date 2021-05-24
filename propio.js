const   num1 = document.querySelector(".Btn_1"), num2 = document.querySelector(".Btn_2"), 
        num3 = document.querySelector(".Btn_3"), num4 = document.querySelector(".Btn_4"), 
        num5 = document.querySelector(".Btn_5"), num6 = document.querySelector(".Btn_6"), 
        num7 = document.querySelector(".Btn_7"), num8 = document.querySelector(".Btn_8"), 
        num9 = document.querySelector(".Btn_9"), num0 = document.querySelector(".Btn_0"),
        opsuma = document.querySelector(".Btn_sum"), oprest = document.querySelector(".Btn_res"),
        opmult = document.querySelector(".Btn_mult"), opdiv = document.querySelector(".Btn_div"),
        raiz = document.querySelector(".Btn_raiz"), porcent = document.querySelector(".Btn_porc"),
        seno = document.querySelector(".Btn_sen"), coseno = document.querySelector(".Btn_cos"),
        c = document.querySelector(".Btn_c"), ce = document.querySelector(".Btn_ce"),
        del = document.querySelector(".Btn_del"), frac = document.querySelector(".Btn_frac"),
        coma = document.querySelector(".Btn_coma"), neg_pos = document.querySelector(".Btn_neg_pos"),
        igual = document.querySelector(".Btn_igual"), pantalla = document.querySelector(".pantalla");


let     valor1, valor2, tecla;
var estado = true;

const resolver = ()=>{
    let resultado;

    switch (tecla){
        case "+":
            resultado = parseFloat(valor1) + parseFloat(valor2);
            pintar_pantalla(resultado);
            break; 

        case "-":
            resultado = parseFloat(valor1) - parseFloat(valor2);
            pintar_pantalla(resultado);
            break;

        case "*":
            resultado = parseFloat(valor1) * parseFloat(valor2);
            pintar_pantalla(resultado);
            break; 

        case "/":
            if (valor2 == "0"){
                resultado = "Not division por 0";
                pintar_pantalla(resultado);
                estado = false;
            }else{
                resultado = parseFloat(valor1) / parseFloat(valor2);
                pintar_pantalla(resultado);
            }
            break;

        case "Raiz":
                if (parseFloat(valor1) > 0){
                    resultado = Math.sqrt(parseFloat(valor1));
                    borrar_pantalla();
                    pintar_pantalla(resultado);
                }else{
                    borrar_pantalla();
                    pintar_pantalla("entrada no valida");
                    estado = false;
                }
            break;

        case "Sen":
            resultado = Math.sin(parseFloat(valor1));
            borrar_pantalla();
            pintar_pantalla(resultado);
            break;
        
        case "Cos":
            resultado = Math.cos(parseFloat(valor1));
            borrar_pantalla();
            pintar_pantalla(resultado);
            break;

        case "1/x":
            resultado = 1/valor1;
            borrar_pantalla();
            pintar_pantalla(resultado);
            break;
        
        case "+/-":
            resultado = -1 * valor1;
            borrar_pantalla();
            pintar_pantalla(resultado);
            break;
        
        case "Del":
            tam = valor1.length;
            resultado = valor1.substring(0,(tam-1));
            borrar_pantalla();
            pintar_pantalla(resultado);
            break;
    }
}

const obtener_valor = ()=>{

    let xy;
    xy = pantalla.innerText;
    return xy;
}

const resetear = ()=>{

    pantalla.textContent = "";
    valor1 = 0.0;
    valor2 = 0.0;
    tecla = "";
}

const borrar_pantalla = ()=>{

    pantalla.textContent = "";
}

const pintar_pantalla = (xx)=>{

    pantalla.textContent = pantalla.textContent  + xx;
}

const add_event_listener = (valor)=>{

    valor.addEventListener("click",(e)=>{

        let xx = e.target.innerText;

        if( ( xx == "Del" || 
            xx == "Raiz" || 
            xx == "Sen" || 
            xx == "Cos" || 
            xx == "%" || 
            xx == "1/x" || 
            xx == "+/-" ) && estado){
                
            if (pantalla.innerText == "" ){
                    pintar_pantalla("");
            }else{
                if ( estado ){
                    tecla = xx;
                    valor1 = obtener_valor();
                    resolver();
                }
            }

        }else if(xx == "C" || xx == "CE" ){
            resetear();
            estado = true;

        }else{
            if ( estado ){

                if ( (xx == "+") || (xx == "-") || (xx == "*") || (xx == "/") ){
                    tecla = xx;
                    valor1 = obtener_valor();
                    borrar_pantalla();
                }else if( xx == "=" ){
                    valor2 = obtener_valor();
                    borrar_pantalla();
                    resolver();
                }else{
                    pintar_pantalla(xx);
                }
            }

        }
                
                
        
        
    });
}

const iniciar = ()=>{
    add_event_listener(num1); add_event_listener(num2); add_event_listener(num3); add_event_listener(num4); 
    add_event_listener(num5); add_event_listener(num6); add_event_listener(num7); add_event_listener(num8); 
    add_event_listener(num9); add_event_listener(num0); 
    add_event_listener(opsuma); add_event_listener(oprest); add_event_listener(opmult); add_event_listener(opdiv);
    add_event_listener(seno); add_event_listener(coseno);  add_event_listener(porcent); add_event_listener(neg_pos); 
    add_event_listener(raiz); add_event_listener(frac); add_event_listener(del); add_event_listener(c); 
    add_event_listener(ce); add_event_listener(coma); add_event_listener(igual);
};

    iniciar();
const QMetros = prompt("Digite um valor em metros: ");

const Op = prompt("Deseja converter o valor para qual unidade de medida dentre as citadas: " 
+"\n" + "1 - Milimetro (mm)"
+"\n" + "2 - Centimetro(cm)"
+"\n" + "3 - Decimetro(dm)"
+"\n" + "4 - Decâmetro(dam)"
+"\n" + "5 - Hectômetro(hm)"
+"\n" + "6 - Quilometro(km)" );

//alert(QMetros);
//alert(Op);

switch(Op){
    case '1':
        alert("O equivalente a " + QMetros + "m em milimetros é: " + (QMetros*1000));
        break;

    case '2':
        alert("O equivalente a " + QMetros + "m em centimetros é: " + (QMetros*100));
        break;

    case '3':
        alert("O equivalente a " + QMetros + "m em decimetros é: " + (QMetros*10));
        break;

    case '4':
        alert("O equivalente a " + QMetros + "m em decametro é: " + (QMetros/10));
        break; 

    case '5':
        alert("O equivalente a " + QMetros + "m em hectometro é: " + (QMetros/100));
        break;
        
    case '6':
        alert("O equivalente a " + QMetros + "m em quilometro é: " + (QMetros/1000));
        break;
        
    default:
        alert("Opção inavlida!");
}
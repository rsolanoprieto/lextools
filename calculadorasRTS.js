console.log("Ajuste cuantía 5 Registro");
var input1 = 0;
var input2 = 0;
var input3 = 0;
var btnCalcular =$('#btn-calcular')[0];
var RNacional =0;
var ANacional =0;
var CAbogados =0;
var RPapel =0;
var Fiscal =0;
var Agrario =0;
var Educacion =0;
var Contadores =0;
var CRoja =0;
var Parques =0;
var Municipal =0;
var Traspaso =0;
var RLibros =0;
var Fauna =0;
var Placa =0;
var Honorarios =0;
var totalTimbres =0;
var descuentoTimbres =0;
var iva =0;
var total =0;
function ValorRNacional (input,cuantia){
    function getRNvalue (inputValue, colones){
        let result = (Math.ceil(inputValue/1000))*colones;
        if(result<2000){return 2000} 
        else {return result};
    };
    if (cuantia==0){return 0};
    if (cuantia==1){return getRNvalue (input,1)};
    if (cuantia==2){return getRNvalue (input,5)};
    if(cuantia==3){return 2000};
    if(cuantia==4){return 46220};
    if(cuantia==5){return(getRNvalue (input,2)+getRNvalue (input,5))};
    if(cuantia==6){return 300};
    if(cuantia==7){return(getRNvalue (input,5)+46220)};
};
function ValorANacional (input, cuantia){
    let value = 0;
    if(input<=100000){value = 10} else if(input>100000){value = 20};
    if(cuantia==0){return 0};
    if(cuantia==1){return value}
    if(cuantia==2){return 20}
    if(cuantia==3){return 5}
    if(cuantia==4){return value+value}
};
function DeclaracionJurada (cuantia){
    if (cuantia==0){return 0}
    if (cuantia==1){return 60500}
};
function ValorCAbogados (input,input2,cuantia){
    function getCAValue (inputValue){
        let result = 0;
        if(inputValue<=250000){result = 0};
        if(inputValue>250000){result = 1100};
        if(inputValue>1000000){result = 2200};
        if(inputValue>5000000){result = 5500};
        if(inputValue>25000000){result = 11000};
        if(inputValue>50000000){result = 16500};
        if(inputValue>100000000){result = 27500};
        if(inputValue>500000000){result = 55000}; 
        return result;
    };
    if(cuantia==0){return 0};
    if(cuantia==1){return getCAValue(input)};
    if(cuantia==2){return 275};
    if(cuantia==3){return (getCAValue(input)*2)};
    if(cuantia==4){return getCAValue(input)+getCAValue(input2)};
};
function ValorRPapel (input,pliegos,cuantia){
    function getRPapelValue (inputValue){ 
        let result = 0;   
        if(inputValue<=25000){result = 12.5};
        if(inputValue>25000){result = 25};
        if(inputValue>75000){result = 31.25};
        if(inputValue>100000){result = 62.5};
        if(inputValue>250000){result = 125};
        if(inputValue>500000){result = 156.25};
        if(inputValue>1000000){result = 312.5};
        if(inputValue>1500000){result = 625};
        if(inputValue==0){result = 125}; 
        return result;
    };
    if (pliegos==0){pliegos=1};
    let valuePliegos = (pliegos-1)*12.5;
    if(cuantia==0){return 0};
    if(cuantia==1){return getRPapelValue(input)+valuePliegos};
    if(cuantia==2){return 125};
    if(cuantia==3){return 12.5};
    //cuantia 1 pero sin pliegos
    if(cuantia==4){return getRPapelValue(input)};
};
function ValorFiscal (input,pliegos,cuantia){
    let value = 0; 
    if(input<=25000){value=12.5};
    if(input>25000){value=25};
    if(input>75000){value=31.25};
    if(input>100000){value=62.5};
    if(input>250000){value=125};
    if(input>500000){value=156.25};
    if(input>1000000){value=312.5};
    if(input>1500000){value=625};
    if(cuantia==0){return 0};
    if(cuantia==1){return (Math.ceil(input/1000))*5};
    if(cuantia==2){return value};
    if(cuantia==3){return 125};
    if(cuantia==4){return 62.5};
    if(cuantia==5){
        if (pliegos==0){pliegos=1};
        return (6.25+(pliegos-1)*2.5);
    };
    if (cuantia==6){return 12.5};
};
function ValorAgrario (input,cuantia){
    let value = Math.ceil(input/1000)
    if (cuantia==0){return 0};
    if (cuantia==1){return value*3};
    if (cuantia==2){return value*1.5};
    if (cuantia==3){return value};
    if (cuantia==4){return value*1.25};
    if (cuantia==5){return 10000};
    if (cuantia==6){return 11175};
    if (cuantia==7){
        let exceso= input-5000000;
        if (exceso<=0){return 2235}
        else{return 2235 + (Math.ceil(exceso/1000))*1.4};
    };
    if (cuantia==8){return (value*3)*2};
};
function ValorEducacion (input, cuantia){
    let value = 0; 
    if (input<=500000){value=5000};
    if (input>500000){value=6000};
    if (input>2000000){value=12000};
    if (input>4000000){value=18000};
    if (cuantia==0){return 0};
    if (cuantia==1){return 5000};
    if (cuantia==2){return value};
};
function ValorContadores (input,cuantia){
    if (cuantia==0){return 0};
    if (cuantia==1){return 75}
};
function ValorCRoja (input, cuantia){
    if (cuantia==0){return 0};
    if (cuantia==1){return 500}
    if (cuantia==2){return 1000}
};
function ValorParques (input, cuantia){
    if (cuantia==0){return 0};
    if (cuantia==1){return 500}
    if (cuantia==2){return 1000}
};
function ValorMunicipal (input,cuantia){
    if (cuantia==0){return 0};
    if (cuantia==1){return (Math.ceil(input/1000))*2};
};
function ValorRLibros (input,cuantia){
    if (cuantia==0){return 0};
    if (cuantia==1){return 15910}
};
function ValorFauna (input,cuantia){
    if (cuantia==0){return 0};
    if (cuantia==1){return (462200*0.25)/100};
};
function ValorPlaca (input,cuantia){
    if (cuantia==0){return 0};
    if (cuantia==1){return 17600}
    if (cuantia==2){return 10900}
};
function ValorTraspaso (input,cuantia){
    if (cuantia==0){return 0};
    if (cuantia==1){return (input*2.5)/100};
    if (cuantia==2){return (input*1.5)/100};
};
function ValorHonorarios (input1, input2, input3, cuantia, porcentaje, minimo) {
    function calculo1 (input){
        let total = 0;
        if(input <= 11000000){total = input*2/100};
        if(input > 11000000 && input <= 16500000){total=220000+(input-11000000)*1.5/100}
        if(input >16500000 && input <= 33000000){total=220000+82500+(input-16500000)*1.25/100}
        if(input>33000000){total=220000+82500+206250+(input-33000000)*1/100};
        return total;
    };
    function calculo2 (input){
        let total = 0;
        if (input <= 16500000){total = input*20/100};
        if (input > 16500000 && input <= 82500000){total=3300000+(input-16500000)*15/100}
        if (input>82500000){total=3300000+9900000+(input-82500000)*10/100};
        return total;
    };
    let result = 0;
    if (cuantia==0){result = 0};
    if (cuantia==1){
        result = calculo1(input1)*porcentaje/100;
        if (result<minimo){result = minimo};   
    };
    if (cuantia==2){
        result = calculo2(input1)*porcentaje/100;
        if (result<minimo){result = minimo};    
    };
    if (cuantia==3){
        result = 60500*porcentaje/100;
    };
    if (cuantia==4){
        result = 121000*porcentaje/100;
    };
    if (cuantia==5){
        result = 383000*porcentaje/100;
    };
    if (cuantia==6){
        result = 18150*porcentaje/100;
    };
    if (cuantia==7){
        result = calculo1(input1)+181500;
    };
    if (cuantia==8){
        let calculo3 = calculo1(input1);
        let calculo4 = calculo1(input2)*25/100;
        if (calculo3 < 60500){calculo3=60500};
        if (calculo4 < 60500){calculo4=60500};
        result = calculo3+calculo4;
    };
    if (cuantia==9){
        let value1 = calculo1(input1)*150/100;
        let value2 = (input2+input3)*60500;
        if (value1>value2){result = value1}
        else if (value1<value2){result = value2};
        if (minimo==60500){
            if (result<60500){result = minimo};  
        }; 
        if (minimo==121000){
            if (result<121000){result = minimo};  
        }; 
    };
    // cuantia 1 pero con input 2
    if (cuantia==10){
        result = calculo1(input2)*porcentaje/100;
        if (minimo==60500){
            if (result<60500){result = minimo};  
        }; 
        if (minimo==121000){
            if (result<121000){result = minimo};  
        };  
    };
    return result;
};  

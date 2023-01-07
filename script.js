let prato, bebida, sobremesa;
let price_prato, price_bebida, price_sobremesa;

function selectPrato(item){
    checkSelection('.comida');

    const icon = item.querySelector('ion-icon');

    item.classList.add("select-border");
    icon.classList.remove('hide');

    prato = item.querySelector('h4').innerHTML;

    checkSend();
}

function selectBebida(item){
    checkSelection('.bebida');

    const icon = item.querySelector('ion-icon');

    item.classList.add("select-border");
    icon.classList.remove('hide');

    bebida = item.querySelector('h4').innerHTML;
    console.log(bebida);

    checkSend();
}

function selectSobremesa(item){
    checkSelection('.sobremesa');

    const icon = item.querySelector('ion-icon');

    item.classList.add("select-border");
    icon.classList.remove('hide');

    sobremesa = item.querySelector('h4').innerHTML;
    console.log(sobremesa);

    checkSend();
}

function checkSelection(selector){
    const botAnt = document.querySelector(`${selector} .select-border`);
    if(botAnt != null){
        botAnt.classList.remove("select-border");
        botAnt.querySelector(`${selector} ion-icon`).classList.add("hide");
    }
}

function checkSend(){
    if((prato !== undefined) && (bebida !== undefined) && (sobremesa !== undefined)){
        const but = document.querySelector(".rodape button");
        but.innerHTML = "Fechar pedido";
        but.disabled = false;
    }
}

function ativo(){
    window.open("https://www.w3schools.com/jsref/jsref_tofixed.asp")
}

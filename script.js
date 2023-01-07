let prato, bebida, sobremesa;
let price_prato, price_bebida, price_sobremesa, total_price;

function selectPrato(item){
    checkSelection('.comida');

    const icon = item.querySelector('ion-icon');

    item.classList.add("select-border");
    icon.classList.remove('hide');

    prato = item.querySelector('h4').innerHTML;

    price_prato= (item.querySelector('h5').innerHTML).replace(',','.'); //Pega preco, muda virgula para ponto
    price_prato = Number(price_prato.replace(/[^0-9\.-]+/g,"")); //remove cedula, transforma em float
    checkSend();
}

function selectBebida(item){
    checkSelection('.bebida');

    const icon = item.querySelector('ion-icon');

    item.classList.add("select-border");
    icon.classList.remove('hide');

    bebida = item.querySelector('h4').innerHTML;
    price_bebida= (item.querySelector('h5').innerHTML).replace(',','.');
    price_bebida = Number(price_bebida.replace(/[^0-9\.-]+/g,""));

    checkSend();
}

function selectSobremesa(item){
    checkSelection('.sobremesa');

    const icon = item.querySelector('ion-icon');

    item.classList.add("select-border");
    icon.classList.remove('hide');

    sobremesa = item.querySelector('h4').innerHTML;
    price_sobremesa= (item.querySelector('h5').innerHTML).replace(',','.');
    price_sobremesa = Number(price_sobremesa.replace(/[^0-9\.-]+/g,""));


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

    total_price = (price_prato + price_bebida + price_sobremesa).toFixed(2).replace('.',',');
    
    //Prato
    const pratoEnviar = document.querySelector('.confirm :nth-child(2) :first-child');
    pratoEnviar.innerHTML = prato;
    const precoPratoEnviar = document.querySelector('.confirm :nth-child(2) :last-child');
    precoPratoEnviar.innerHTML = (price_prato.toFixed(2).replace('.',','));
    //toFixed(2) mostra 2 casas decimais.
  
    //Bebida
    const bebEnviar = document.querySelector('.confirm :nth-child(3)  :first-child');
    bebEnviar.innerHTML = bebida;
    const precoBebEnviar = document.querySelector('.confirm :nth-child(3)  :last-child');
    precoBebEnviar.innerHTML = price_bebida.toFixed(2).replace('.',',');

    //Sobremesa
    const sobEnviar = document.querySelector('.confirm :nth-child(4)  :first-child');
    sobEnviar.innerHTML = sobremesa;
    const precosobEnviar = document.querySelector('.confirm :nth-child(4)  :last-child');
    precosobEnviar.innerHTML = price_sobremesa.toFixed(2).replace('.',',');

    //Total
    const totalEnviar = document.querySelector('.confirm :nth-child(5) :last-child');

    totalEnviar.innerHTML = "R$ " + total_price ;

    document.querySelector('.bonus').classList.remove("hide");
    document.querySelector('.bonus').classList.add("flex");
}

function pedir(){
    const nome = prompt("Insira seu Nome: ");
    const end = prompt("Insira seu Endereço");
    const pedido =
`Olá, gostaria de fazer o pedido:
- Prato: ${prato}
- Bebida: ${bebida}
- Sobremesa: ${sobremesa}
Total: R$ ${total_price }

Nome: ${nome}
Endereço: ${end}`;

    const enconded = encodeURIComponent(pedido);
    window.open("https://wa.me/5547992553527?text="+enconded);
}

function cancelar(){
    document.querySelector('.bonus').classList.remove("flex");
    document.querySelector('.bonus').classList.add("hide");
}

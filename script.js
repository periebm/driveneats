function selectPrato(item){
    checkSelection('.comida');

    const icon = item.querySelector('ion-icon');

    item.classList.add("select-border");
    icon.classList.remove('hide');
}

function selectBebida(item){
    checkSelection('.bebida');

    const icon = item.querySelector('ion-icon');

    item.classList.add("select-border");
    icon.classList.remove('hide');
}

function selectSobremesa(item){
    checkSelection('.sobremesa');

    const icon = item.querySelector('ion-icon');

    item.classList.add("select-border");
    icon.classList.remove('hide');
}

function checkSelection(selector){
    const botAnt = document.querySelector(`${selector} .select-border`);
    if(botAnt != null){
        botAnt.classList.remove("select-border");
        botAnt.querySelector(`${selector} ion-icon`).classList.add("hide");
    }
}

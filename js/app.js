let arrayOriginal = [];
let listaAmigos = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');
let inputs = document.getElementById('nome-amigo');

function adicionar(){

    let userInputValue = inputs.value;

    if(userInputValue.trim() == ''){
        alert('Insira um nome válido!');
        return ;
    }

    if(arrayOriginal.includes(inputs.value)) {
        alert('player já adicionado');
        return;
    }

    arrayOriginal.push(inputs.value);
    listaAmigos.innerText = arrayOriginal;
    inputs.value = '';
}

function embaralhar(array) {

    let novoArray = [...array]; //faz copia do array para não altera-lo
    
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));
        [novoArray[i], novoArray[random]] = [novoArray[random], novoArray[i]];
    }
    return novoArray;
}

function sortear () {

    if(arrayOriginal.length < 4){
        alert('Numero de jogadores insuficiente!');
        return;
    }

    listaSorteio.innerHTML  = '';

    let arraySorteado1 = embaralhar(arrayOriginal); 
    let arraySorteado2 = embaralhar(arrayOriginal);

    for (let i = 0; i < arrayOriginal.length; i++) {
        if (arraySorteado1[i] === arraySorteado2[i]) {
            return sortear(); 
        }
    }

    for (let i = 0;i < arrayOriginal.length; i++) {
        listaSorteio.innerHTML =  listaSorteio.innerHTML + arraySorteado1[i] + '-->' + arraySorteado2[i] + '<br>';
    }
}

function reiniciar () {
    arrayOriginal = [];
    listaAmigos.innerText = '';
    listaSorteio.innerText = '';
    inputs.value = '';
    
}

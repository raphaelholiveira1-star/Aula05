function prepararPedido() {
    return new Promise((resolve, reject) => {
        temPao = false; 
        setTimeout(() => {
            if (temPao){
            
            resolve("Hambúrguer pronto");

            }else{

                reject(new Error("Não deu para fazer o Hambúrguer"));
                
            }

        }, 2000);
    })
}

prepararPedido().then((resultado) => {
    console.log(resultado)
}).catch((erro) => {
    console.log(erro.message)
});
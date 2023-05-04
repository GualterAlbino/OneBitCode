function VerificaIdade(Idade){
    return new Promise((Resolvido,Rejeitado) => {
        if(Idade){
            Resolvido(Idade > 18);
        }else {
            Rejeitado(new Error("Idade não informada"))
        }
    })
}

function getIdade(Aniveversario) {
    return new Promise((Resolvido,Rejeitado) => {
        if(Aniveversario){
            const AnoNasc = new Date(Aniveversario).getFullYear();
            const AnoAtual = new Date().getFullYear();
            Resolvido(AnoAtual - AnoNasc);
        } else {
            Rejeitado(new Error("Data de nasc requerida"))
        }
    })
}

getIdade('2022-09-02')
.then((Idade) => {
    return VerificaIdade(Idade);//Necesasrio informar o RETURN para encadear os THEN

}).then((Maior18) => {
    if(Maior18){
        console.log("Maior de idade")
    }else {
        console.log("Menor de idade")
    }
}).catch((err) => {
    console.log(err)
})

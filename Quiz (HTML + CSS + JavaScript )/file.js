function FinalizarQuiz(){

    let RespostaUm = document.getElementById("RespostaUm")
    let RespotaDois = document.getElementById("RespostaDois")
    let RespostaTres = document.getElementById("RespostaTres")
    let Pontuacao = document.getElementById("PontuacaoTotal")
    
    
    Pontuacao.value = (Number(RespostaUm.value) + Number(RespotaDois.value) + Number(RespostaTres.value))
    
    if(RespostaUm.value == 2 || RespotaDois.value == 2 || RespostaTres.value == 2){
        
        alert("assinale todas as respostas !")
        
        return;

    }else{

        alert("Quiz Finalizado! Confira sua pontuação")

    }


    if(Pontuacao.value == 3){

        alert("Parabéns você acertou todas as perguntas!")

    }

}
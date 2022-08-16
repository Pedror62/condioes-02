function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length ==  0 || Number(fano.value) > ano) {
            window.alert('[ERRO} TENTE NOVAMENTE NÃO CONRESPONDE A ANOS DE VIDA, MAS SIM A MESES DE VIDA!')
    }  else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
         genero = 'homem'
         if (idade >= 0 && idade < 10) {
            //criança   
            
            img.setAttribute('src', 'bbmenino.jpg')
              
         } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'meninojovem.jpg')
             
         } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'adultomasculino.jpg')
               
         } else {
            //idoso
            img.setAttribute('src', 'idosomasculino.jpg')
            
         }

        } else if (fsex[1].checked) {
            genero = 'sexo feminino'
            if (idade >= 0 && idade < 10) {
                //criança   
                img.setAttribute('src', 'bbmenina.jpg')
                 
             } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'meninajovem.jpg')
                 
             } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.jpg' )
              
             } else {
                //idoso
                img.setAttribute('src', 'idosafeminina.jpg')
           
             }
    
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero}:${idade} anos.`
        res.appendChild(img)

   }
}

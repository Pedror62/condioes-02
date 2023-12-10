 function verificar() {
   let data = new Date();
   let ano = data.getFullYear();
   let fano = document.querySelector('#txtano');
   let res = document.querySelector('#res');

   if (fano.value.length == 0 || Number(fano.value) > ano) {
      // window.alert('[ERRO] TENTE NOVAMENTE. O ANO NÃO CORRESPONDE A ANOS DE VIDA, MAS SIM A MESES DE VIDA!');
   } else {
      let fsex = document.getElementsByName('radsex');
      let idade = ano - Number(fano.value);
      let genero = ' ';
      let img = document.createElement('img');
      img.setAttribute('id', 'foto');

      if (fsex[0].checked) {
         genero = 'masculino';
        if (idade <= 9) {
            img.setAttribute('src', 'bbmenino.jpg');
         }
          else if (idade <= 11) {
           
            img.setAttribute('src', 'adolecente.jpg');
          } 
      
         else if (idade <= 19) {
            img.setAttribute('src', 'adultomasculino.jpg');
         } 
         else if (idade <= 29) {
            img.setAttribute('src', 'adultomasculino.jpg');
         }
         else if(idade <= 50) {
            
            img.setAttribute('src', 'idosomasculino.jpg');
         }
         
      
      } else if (fsex[1].checked) {
         genero = 'sexo feminino';
         if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'bbmenina.jpg');
         } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'meninajovem.jpg');
         } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'mulher.jpg');
         } else {
            //idoso
            img.setAttribute('src', 'idosafeminina.jpg');
         }
      }

      res.style.textAlign = 'center';
      res.innerHTML = `Detectamos ${genero}: ${idade} anos.`;
      res.appendChild(img);
   }


   res.style.color = '#000'; // Define a cor do texto para azul
   res.style.fontSize = '18px'; // Define o tamanho da fonte para 18 pixels

   res.style.textAlign= 'center'
   res.style.display =' flex'
   res.style.flexDirection = 'column';
   res.style.alignItems = 'center';
   res.style.gap= '1rem' 
 }

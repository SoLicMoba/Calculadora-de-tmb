var revelar = document.querySelector('.revelar')
revelar.classList.add('hidden')

function calcular() {
  var peso = Number(document.querySelector('#peso').value);
    var altura = Number(document.querySelector('#altura').value);
    var idade = Number(document.querySelector('#idade').value);
    var genero = document.querySelector('#genero').value;
    var res = document.querySelector('.resultado');

    var atividadeFisica = document.querySelector('#atividadeFisica').value

    var caloriasIngeridasEmagrecer = document.querySelector('.caloriasIngeridasEmagrecer')
    var caloriasIngeridasManterPeso = document.querySelector('.caloriasIngeridasManterPeso')
    var caloriasIngeridasGanharPeso = document.querySelector('.caloriasIngeridasGanharPeso')

  if (revelar.classList.contains("hidden") || peso != '' && altura != '' && idade != '') {
    revelar.classList.remove('hidden')

    if (genero == '' || peso == '' || altura == '' || idade == '') {
      res.innerHTML = `<h4> Por favor, insira as informações nos campos acima. </h4>`
    } else if (atividadeFisica == 'primeiro') {
      if (genero == 'homem') {
        res.innerHTML = `<h4>Sua taxa metabólica basal é: </h4> ${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 )}`

          caloriasIngeridasEmagrecer.innerHTML = `${ 
            Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 - 350)} até ${ 
              Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 - 250 )} Kcal `

          caloriasIngeridasManterPeso.innerHTML = innerHTML = `${ 
            Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 - 50)} até ${ 
              Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 + 200 )} Kcal `

          caloriasIngeridasGanharPeso.innerHTML = innerHTML = `${ 
            Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 + 300)} até ${ 
              Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 + 500 )} Kcal `

      } else {
        res.innerHTML = `<h4>Sua taxa metabólica basal é: </h4> ${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 )
        }`

        caloriasIngeridasEmagrecer.innerHTML = `${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 - 300 ) 
        } até ${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 - 200 ) 
        } Kcal`

        caloriasIngeridasManterPeso.innerHTML = `${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 - 50 ) 
        } até ${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 + 200 ) 
        } Kcal`

        caloriasIngeridasGanharPeso.innerHTML = `${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 + 350 ) 
        } até ${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 + 550 ) 
        } Kcal`

        

      }
    } else if (atividadeFisica == 'segundo') {
      if (genero == 'homem') {
        res.innerHTML = `<h4>Sua taxa metabólica basal é: </h4> ${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.35 )
         }`

         caloriasIngeridasEmagrecer.innerHTML = `${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.35 - 300 )
         } até ${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.35 - 200 )
         } Kcal`

         caloriasIngeridasManterPeso.innerHTML = innerHTML = `${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.35 - 50)} até ${ 
            Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.35 + 200 )} Kcal `

          caloriasIngeridasGanharPeso.innerHTML = innerHTML = `${ 
            Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 + 450)} até ${ 
              Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 + 700 )} Kcal `

      } else {
        res.innerHTML = `<h4>Sua taxa metabólica basal é: </h4> ${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.30 )
        }`

        caloriasIngeridasEmagrecer.innerHTML = `${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.30 - 250 )} até ${
            Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.30 - 150 )} Kcal`

            caloriasIngeridasManterPeso.innerHTML = `${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.30 - 50 ) 
            } até ${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.30 + 200 ) 
            } Kcal`

            caloriasIngeridasGanharPeso.innerHTML = `${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 + 500 ) 
            } até ${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 + 700 ) 
            } Kcal`
      }
    } else if (atividadeFisica == 'terceiro') {
      if (genero == 'homem') {
        res.innerHTML = `<h4>Sua taxa metabólica basal é: </h4> ${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.45 )
         }`

         caloriasIngeridasEmagrecer.innerHTML = `${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.45 - 250 )
         } até ${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.45 - 150 )
         } Kcal`

         caloriasIngeridasManterPeso.innerHTML = innerHTML = `${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.45 - 50)} até ${ 
            Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.45 + 200 )} Kcal `

            caloriasIngeridasGanharPeso.innerHTML = innerHTML = `${ 
              Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 + 660)} até ${ 
                Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 + 900 )} Kcal `

      } else {
        res.innerHTML = `<h4>Sua taxa metabólica basal é: </h4> ${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.40 )
        }`

        caloriasIngeridasEmagrecer.innerHTML = `${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.40 - 200 )} até ${
            Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.40 - 100 )}`

          caloriasIngeridasManterPeso.innerHTML = `${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.40 - 50 ) 
            } até ${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.40 + 200 ) 
            } Kcal`

            caloriasIngeridasGanharPeso.innerHTML = `${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 + 700 ) 
            } até ${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 + 900 ) 
            } Kcal`

      }
    } else if (atividadeFisica == 'quarto') {
      if (genero == 'homem') {
        res.innerHTML = `<h4>Sua taxa metabólica basal é: </h4> ${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.55 )
         }`

         caloriasIngeridasEmagrecer.innerHTML = `${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.55 - 250 )
         } até ${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.55 - 150 )
         } Kcal`

         caloriasIngeridasManterPeso.innerHTML = innerHTML = `${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.55 - 50)} até ${ 
            Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.55 + 200 )} Kcal `

            caloriasIngeridasGanharPeso.innerHTML = innerHTML = `${ 
              Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 + 900)} até ${ 
                Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 + 1100 )} Kcal `

      } else {
        res.innerHTML = `<h4>Sua taxa metabólica basal é: </h4> ${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.50 )
        }`

        caloriasIngeridasEmagrecer.innerHTML = `${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.50 - 200 )} até ${
            Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.50 - 80 )}`

            caloriasIngeridasManterPeso.innerHTML = `${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.50 + 50 ) 
            } até ${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.50 + 250 ) 
            } Kcal`

            caloriasIngeridasGanharPeso.innerHTML = `${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 + 900 ) 
            } até ${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 + 1100 ) 
            } Kcal`
      }
    }

  } else {

  }



    
}


/* 

res.innerHTML = `Sua taxa metabolica basal é: ${ 
        Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) )
       }`

*/


/* 

{
      res.innerHTML = `Sua taxa metabolica basal é: ${Math.round(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade))}`
    }

*/

/* 

    if (genero == '' || peso == '' || altura == '' || idade == '') {
      res.innerHTML = `Por favor, insira as informações nos campos acima.`
    } else if (atividadeFisica == 'primeiro') {
      if (genero == 'homem') {
        res.innerHTML = `Sua taxa metabolica basal é: ${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 )}`

          caloriasIngeridasEmagrecer.innerHTML = `${ 
            Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 - 350)} até ${ 
              Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 - 250 )} Kcal `

          caloriasIngeridasManterPeso.innerHTML = innerHTML = `${ 
            Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 - 50)} até ${ 
              Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 + 200 )} Kcal `

          caloriasIngeridasGanharPeso.innerHTML = innerHTML = `${ 
            Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 + 300)} até ${ 
              Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 + 500 )} Kcal `

      } else {
        res.innerHTML = `Sua taxa metabolica basal é: ${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 )
        }`

        caloriasIngeridasEmagrecer.innerHTML = `${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 - 300 ) 
        } até ${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 - 200 ) 
        } Kcal`

        caloriasIngeridasManterPeso.innerHTML = `${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 - 50 ) 
        } até ${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 + 200 ) 
        } Kcal`

        caloriasIngeridasGanharPeso.innerHTML = `${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 + 350 ) 
        } até ${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 + 550 ) 
        } Kcal`

        

      }
    } else if (atividadeFisica == 'segundo') {
      if (genero == 'homem') {
        res.innerHTML = `Sua taxa metabolica basal é: ${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.35 )
         }`

         caloriasIngeridasEmagrecer.innerHTML = `${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.35 - 300 )
         } até ${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.35 - 200 )
         } Kcal`

         caloriasIngeridasManterPeso.innerHTML = innerHTML = `${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.35 - 50)} até ${ 
            Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.35 + 200 )} Kcal `

          caloriasIngeridasGanharPeso.innerHTML = innerHTML = `${ 
            Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 + 450)} até ${ 
              Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 + 700 )} Kcal `

      } else {
        res.innerHTML = `Sua taxa metabolica basal é: ${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.30 )
        }`

        caloriasIngeridasEmagrecer.innerHTML = `${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.30 - 250 )} até ${
            Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.30 - 150 )} Kcal`

            caloriasIngeridasManterPeso.innerHTML = `${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.30 - 50 ) 
            } até ${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.30 + 200 ) 
            } Kcal`

            caloriasIngeridasGanharPeso.innerHTML = `${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 + 500 ) 
            } até ${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 + 700 ) 
            } Kcal`
      }
    } else if (atividadeFisica == 'terceiro') {
      if (genero == 'homem') {
        res.innerHTML = `Sua taxa metabolica basal é: ${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.45 )
         }`

         caloriasIngeridasEmagrecer.innerHTML = `${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.45 - 250 )
         } até ${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.45 - 150 )
         } Kcal`

         caloriasIngeridasManterPeso.innerHTML = innerHTML = `${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.45 - 50)} até ${ 
            Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.45 + 200 )} Kcal `

            caloriasIngeridasGanharPeso.innerHTML = innerHTML = `${ 
              Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 + 660)} até ${ 
                Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 + 900 )} Kcal `

      } else {
        res.innerHTML = `Sua taxa metabolica basal é: ${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.40 )
        }`

        caloriasIngeridasEmagrecer.innerHTML = `${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.40 - 200 )} até ${
            Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.40 - 100 )}`

          caloriasIngeridasManterPeso.innerHTML = `${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.40 - 50 ) 
            } até ${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.40 + 200 ) 
            } Kcal`

            caloriasIngeridasGanharPeso.innerHTML = `${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 + 700 ) 
            } até ${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 + 900 ) 
            } Kcal`

      }
    } else if (atividadeFisica == 'quarto') {
      if (genero == 'homem') {
        res.innerHTML = `Sua taxa metabolica basal é: ${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.55 )
         }`

         caloriasIngeridasEmagrecer.innerHTML = `${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.55 - 250 )
         } até ${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.55 - 150 )
         } Kcal`

         caloriasIngeridasManterPeso.innerHTML = innerHTML = `${ 
          Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.55 - 50)} até ${ 
            Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.55 + 200 )} Kcal `

            caloriasIngeridasGanharPeso.innerHTML = innerHTML = `${ 
              Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 + 900)} até ${ 
                Math.round(parseFloat(66 + (13.7 * peso) + ( 5 * altura ) - ( 6.8 * idade)) * 1.25 + 1100 )} Kcal `

      } else {
        res.innerHTML = `Sua taxa metabolica basal é: ${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.50 )
        }`

        caloriasIngeridasEmagrecer.innerHTML = `${
          Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.50 - 200 )} até ${
            Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.50 - 80 )}`

            caloriasIngeridasManterPeso.innerHTML = `${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.50 + 50 ) 
            } até ${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.50 + 250 ) 
            } Kcal`

            caloriasIngeridasGanharPeso.innerHTML = `${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 + 900 ) 
            } até ${
              Math.round(parseFloat(655 + (9.6 * peso) + (1.7 * altura) - (4.7 * idade)) * 1.20 + 1100 ) 
            } Kcal`
      }
    }

*/
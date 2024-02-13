//1 = Pouca Fome, 2 = Fome Normal, 3 ou mais = Muita Fome
var valorDaFome = 1
var resu

comer();
function comer() {
   console.log("O jantar está servido!")
   console.log("")
   console.log("Pegue o prato e sirva-se!")
   console.log("-----------------------")
   console.log("")
   console.log("1 Deseja arroz? ")
   console.log("Se sim, servir! Senão, vá para a próxima opção.")
   console.log("")
   console.log("2 Deseja feijão?")
   console.log("Se sim, servir! Senão, vá para a próxima opção.")
   console.log("")
   console.log("3 Deseja macarrão? ")
   console.log("Se sim, servir! Senão, vá para a próxima opção.")
   console.log("")
   console.log("4 Deseja fritas? ")
   console.log("Se sim, servir! Senão, vá para a próxima opção.")
   console.log("")
   console.log("5 Deseja carne cozida?")
   console.log("Se sim, servir! Senão, vá para a próxima opção.")
   console.log("")
   console.log("6 Deseja salada? ")
   console.log("Se sim, servir! Senão, vá para a próxima opção.")
   console.log("")
   console.log("Começar a comer.")
   console.log("")
   console.log("Já terminou? Comeu muito rápido!")
 }

if(valorDaFome === 1) {  	
       resu = ("Está satisfeito? levantar e lavar o prato.")
       
}       
else if(valorDaFome === 2){
       resu = ("Se não está satisfeito, servir novamente.")
       
}  
if(valorDaFome > 2)
        resu = ("Vai comer assim no inferno. Lave o seu prato e não volte mais!")



    console.log(resu)
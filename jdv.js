var i = 1
function colocar(quadrado) {
         
         if(quadrado.value!="x" && quadrado.value!="o"){
        if (i % 2 == 0) {                                 //i/2 resto 0 == par
            console.log("par")
            var O = document.createElement("img")         //criando elemento img
            O.src = "./imagens/O.png";                    //INSERINDO A IMAGEM NO O
            quadrado.appendChild(O);                      //aplicando imagem em determinado "quadrado"
            i++                                           //contador add um a click
            quadrado.value="o";                           //retornando quadrado com valor "o" para n ficar vazio 
            verifica();                                              
        }
        else {
            console.log("impar")
            var X = document.createElement("img")
            X.src = "./imagens/X.png";
            quadrado.appendChild(X);
            i++ 
            quadrado.value="x";
            verifica()
      }
      } 
      }

//REINICIO
function reiniciar() {  //funçao reiniciar
    location.reload();  //comando para recaregar a pagina
}

//vetores


var $ = function (id) {
    return document.getElementById(id).value //$ retornando document.getElementById
}

function verifica(){
//horizontal
var vet1 = [$("K1"), $("K2"), $("K3")];
var vet2 = [$("K4"), $("K5"), $("K6")];
var vet3 = [$("K7"), $("K8"), $("K9")];
//vertical
var vet4 = [$("K1"), $("K4"), $("K7")];
var vet5 = [$("K2"), $("K5"), $("K8")];
var vet6 = [$("K3"), $("K6"), $("K9")];
//diagonal
var vet7 = [$("K1"), $("K5"), $("K9")];
var vet8 = [$("K3"), $("K5"), $("K7")];

    var cod1 = vet1[0] +vet1[1]+vet1[2]
    if( cod1 == 'ooo'){
        var V = document.createElement("img")                         //criando variavel V 
            V.src = "./imagens/vencedor.jpg";                         //validando imagem no V             
            figura.appendChild(V);                                    //aplicando a imagem 
            document.getElementById("vencedor").innerHTML="O ganhou!" //aviso de q bolinha ganhou
}
            else if(cod1 == 'xxx'){                                   //condição de xxx em um vetor
            var V = document.createElement("img")    
            V.src = "./imagens/vencedor.jpg";                   
            figura.appendChild(V);
            document.getElementById("vencedor").innerHTML="X ganhou!" //h2 conectado
}
            

    var cod2 = vet2[0] + vet2[1] + vet2[2]
    if( cod2 == 'ooo'){
        var V = document.createElement("img")       
            V.src = "./imagens/vencedor.jpg";                    
            figura.appendChild(V);
            [document.getElementById("vencedor").innerHTML="O ganhou!"]
}
            else if(cod2 == 'xxx'){
            var V = document.createElement("img")    
            V.src = "./imagens/vencedor.jpg";                   
            figura.appendChild(V);
            [document.getElementById("vencedor").innerHTML="X ganhou!"]
}

    var cod3 = vet3[0] + vet3[1] + vet3[2]
    if( cod3 == 'ooo'){
             var V = document.createElement("img")       
            V.src = "./imagens/vencedor.jpg";                    
            figura.appendChild(V);
            [document.getElementById("vencedor").innerHTML="O ganhou!"]
        }
            else if(cod3 == 'xxx'){
            var V = document.createElement("img")    
            V.src = "./imagens/vencedor.jpg";                   
            figura.appendChild(V);
            [document.getElementById("vencedor").innerHTML="X ganhou!"]
            }

    var cod4 = vet4[0] + vet4[1] + vet4[2]
    if( cod4 == 'ooo'){
            var V = document.createElement("img")       
            V.src = "./imagens/vencedor.jpg";                    
            figura.appendChild(V);
            [document.getElementById("vencedor").innerHTML="O ganhou!"]
} 
            else if(cod4 == 'xxx'){
            var V = document.createElement("img")    
            V.src = "./imagens/vencedor.jpg";                   
            figura.appendChild(V);
            [document.getElementById("vencedor").innerHTML="X ganhou!"]
}
    var cod5 = vet5[0] + vet5[1] + vet5[2]
    if( cod5 == 'ooo'){
            var V = document.createElement("img")       
            V.src = "./imagens/vencedor.jpg";                    
            figura.appendChild(V);
            [document.getElementById("vencedor").innerHTML="O ganhou!"]
}
    else if(cod5 == 'xxx'){
            var V = document.createElement("img")    
            V.src = "./imagens/vencedor.jpg";                   
            figura.appendChild(V);
            [document.getElementById("vencedor").innerHTML="X ganhou!"]            
}
    var cod6 = vet6[0] + vet6[1] + vet6[2]
    if( cod6 == 'ooo'){
            var V = document.createElement("img")       
            V.src = "./imagens/vencedor.jpg";                    
            figura.appendChild(V);
            [document.getElementById("vencedor").innerHTML="O ganhou!"]            
}
    else if(cod6 == 'xxx'){
            var V = document.createElement("img")    
            V.src = "./imagens/vencedor.jpg";                   
            figura.appendChild(V);
            [document.getElementById("vencedor").innerHTML="X ganhou!"]           
}
    var cod7 = vet7[0] + vet7[1] + vet7[2]
    if( cod7 == 'ooo'){
             var V = document.createElement("img")       
             V.src = "./imagens/vencedor.jpg";                    
             figura.appendChild(V);
            [document.getElementById("vencedor").innerHTML="O ganhou!"]             
}
    else if(cod7 == 'xxx'){
             var V = document.createElement("img")    
             V.src = "./imagens/vencedor.jpg";                   
             figura.appendChild(V);
            [document.getElementById("vencedor").innerHTML="X ganhou!"]             
}
    var cod8 = vet8[0] + vet8[1] + vet8[2]
    if( cod8 == 'ooo'){
             var V = document.createElement("img")       
             V.src = "./imagens/vencedor.jpg";                    
             figura.appendChild(V);
             [document.getElementById("vencedor").innerHTML="O ganhou!"]             
}
    else if(cod8 == 'xxx'){
             var V = document.createElement("img")    
             V.src = "./imagens/vencedor.jpg";                   
             figura.appendChild(V);
             [document.getElementById("vencedor").innerHTML="X ganhou!"]       
}
    var cod9 = vet9[0] + vet9[1] + vet9[2]
    if( cod9 == 'ooo'){
             var V = document.createElement("img")       
             V.src = "./imagens/vencedor.jpg";                    
             figura.appendChild(V);
            [document.getElementById("vencedor").innerHTML="O ganhou!"]             
}
    else if(cod9 == 'xxx'){
             var V = document.createElement("img")    
             V.src = "./imagens/vencedor.jpg";                   
             figura.appendChild(V);
            [document.getElementById("vencedor").innerHTML="X ganhou!"]             
}
}

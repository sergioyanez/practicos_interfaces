'use strict';
document.addEventListener("DOMContentLoaded", function(){
  /*
  1.	Repaso Javascript: 
      Definir una matriz de 100 elementos x 100 elementos y completarla con valores enteros random,
      y resuelva los siguientes incisos: 

      a)	Escribir una función que retorne el valor máximo de toda la matriz 

      b)	Escribir una función que retorne el valor máximo contenido en las filas pares
          y el valor mínimo en las filas impares 

      c)	Calcular el valor promedio de cada fila y guardarlos en un arreglo. 
  */
  function punto1() {
      let showMatrix = document.getElementById('showMatrix');
      let results = document.getElementById('results');
      let matrix = createMatrix(5, 5);
      let arreglo = [];
      //console.log(matrix);
      puntoA(matrix);
      puntoB(matrix);
      puntoC(matrix);

      function createMatrix(rows, cols) {
        let matrix = [];
        for (let i = 0; i < rows; i++) {
          matrix[i] = new Array(cols);
          let row = document.createElement('TR');
          let rowIndex = document.createElement('TD');
          rowIndex.innerText = 'Fila ' + i;
          row.appendChild(rowIndex);
          for (let j = 0; j < cols; j++) {
            let entero = Math.floor(Math.random() * 100);
            matrix[i][j] = entero;
            let td = document.createElement('TD');
            td.innerHTML = entero;
            row.appendChild(td);
          }
          showMatrix.appendChild(row);
        }
        return matrix;
      }

      function puntoA(matrix) {
          let punto1a = document.createElement('h4');
          punto1a.innerHTML = 'PUNTO 1 A';
          results.appendChild(punto1a);
          let max = matrix[0][0];
          let rowMax;
          for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
              if (matrix[i][j] > max) {
                max = matrix[i][j];
                rowMax = i;
              }
            }
          }
          let p = document.createElement('P');
          p.innerHTML = 'El elemento mayor de toda la matriz es ' + max + ' (fila ' + rowMax + ')';
          results.appendChild(p);
        }
      
        function puntoB(matrix) {
          let punto1b = document.createElement('h4');
          punto1b.innerHTML = 'PUNTO 1 B';
          results.appendChild(punto1b); 
          let max = matrix[0][0];
          let min = matrix [0][0];
          let rowMaxPar;
          let rowMaxImpar;
          for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
              if (matrix[i][j] > max && i % 2 == 0) {
                max = matrix[i][j];
                rowMaxPar = i;
              }
              if (matrix[i][j] < min && i % 2 != 0) {
                  min = matrix[i][j];
                  rowMaxImpar = i;
                }
            }
          }
          let pPar = document.createElement('P');
          let pImpar = document.createElement('P');
          pPar.innerHTML = 'El elemento mayor de las filas pares es ' + max +' y está en la fila '+rowMaxPar ;
          results.appendChild(pPar);
          pImpar.innerHTML = 'El elemento menor de las filas impares es ' + min+' y está en la fila '+rowMaxImpar ;
          results.appendChild(pImpar);
        }
      /*
      c)	Calcular el valor promedio de cada fila y guardarlos en un arreglo.
      */
      function arregloConPromedios(matrix){
          let arreglo = [];
          let suma = 0;
          let contador = 0;
          let promedio = 0;
          for(let i = 0 ; i < matrix.length ; i++){
              for (let j = 0; j < matrix[i].length; j++){
                  suma+= matrix[i][j];
                  contador++
              }
              promedio = suma/contador;
              arreglo.push(promedio);
              suma = 0;
              contador = 0;
              promedio = 0;
                        
          }
          return arreglo;
      }
      //console.log( arregloConPromedios(matrix) );
      function puntoC(matrix){
          let punto1c = document.createElement('h4');
          punto1c.innerHTML = 'PUNTO 1 C';
          results.appendChild(punto1c); 
          let arr = new Array();
          let p = document.createElement('P');
          p.innerHTML = 'El promedios de cada fila es :';
          results.appendChild(p);
          arr = arregloConPromedios(matrix);        
          for (let j = 0; j < arr.length; j++) {   
              let index = document.createElement('TD');
              results.appendChild(index);
              let row = document.createElement('TR');        
              let numero = arr[j];  
              row.innerHTML = numero;         
              index.appendChild (row);                      
          }
      }
  }
  /*
  2.	Pintar una región rectangular de un color utilizando el Contexto de HTML5. 
  */
  function punto2(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffd910";
    let width = 300;
    let height = 150;
    ctx.fillRect(0, 0, width,height);
  }

  /*
Ejercicio extra pedido en clases. Armar una pirámide con rectángulos
*/
function punto2bis(){
  let canvas = document.getElementById("myCanvas8");
  let ctx = canvas.getContext("2d");
  let width = 300;
  let height = 150;   
  ctx.fillStyle = "#000000";   
  ctx.fillRect(150, 50, 50,50); 
  ctx.fillRect(100, 100, 50,50);
  ctx.fillRect(200, 100, 50,50);
  ctx.fillRect(50, 150, 50,50);
  ctx.fillRect(150, 150, 50,50);
  ctx.fillRect(250, 150, 50,50);
  ctx.fillRect(0, 200, 50,50);
  ctx.fillRect(100, 200, 50,50);
  ctx.fillRect(200, 200, 50,50);
  ctx.fillRect(300, 200, 50,50);
  
}
  /*
  3.	Pintar una región rectangular de un color utilizando la estructura de ImageData. 
  */
  function punto3(){
    let canvas = document.getElementById("myCanvas2");
    let ctx = canvas.getContext("2d");
    let width = 300;
    let height = 150;
    let r = 255;
    let g = 0;
    let b = 255;
    let a = 255;
    let imageData = ctx.createImageData(width,height);
    for(let x = 0 ; x < width ; x++){
      for (let y = 0 ; y < height ; y++){
        setPixel(imageData,x,y,r,g,b,a);
      }
    }
    ctx.putImageData(imageData,0,0);

    function setPixel(imageData,x,y,r,g,b,a){
      let index = ( x + y * imageData.width ) * 4;
      imageData.data[index] = r;
      imageData.data[index +1] = g;
      imageData.data[index +2] = b;
      imageData.data[index +3] = a;
    }
    
  }

  /*
  4.	Especificar la función para pintar un cuadrado utilizando un gradiente de la siguiente forma: 
  de negro a blanco, de arriba hacia abajo.
  */
  function punto4(){
    let canvas = document.getElementById("myCanvas11");
    let ctx = canvas.getContext("2d");
    let r = 0;
    let g = 0;
    let b = 0;
    let a = 255;
    let imageData = ctx.createImageData(canvas.width,canvas.height);
    for(let x = 0 ; x < imageData.width ; x++){
      
      for (let y = 0 ; y < imageData.height ; y++){   
        let color = (y*255)/(imageData.height-1)   
          setPixel(x,y,color,color,color,a);     
      }
    }
    ctx.putImageData(imageData,0,0);

    function setPixel(x,y,r,g,b,a){
      let index = ( x + y * imageData.width ) * 4;
      imageData.data[index] = r;
      imageData.data[index +1] = g;
      imageData.data[index +2] = b;
      imageData.data[index +3] = a;
    }

  }
  function punto4bis(){
    let canvas = document.getElementById("myCanvas3");
    let ctx = canvas.getContext("2d");
    let gradient = ctx.createLinearGradient(0, 10,10 ,150);
    gradient.addColorStop (0, 'black');
    gradient.addColorStop (1, 'white');
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,300,200);
  }

  /*
  5.	Pintar un rectángulo en pantalla, utilizando tres colores en un gradiente: 
  De negro a amarillo en la primera mitad del ancho del rectángulo,  y de amarillo a rojo, en la segunda mitad.
   Por otro lado, en Y el degrade se mantiene constante. 
  */

   function punto5(){
    let canvas = document.getElementById("myCanvas9");
    let ctx = canvas.getContext("2d");
    let r = 0;
    let g = 0;
    let b = 0;
    let a = 255;
    let coef= 255/(canvas.width/2);
    let imageData = ctx.createImageData(canvas.width,canvas.height);

    for(let x = 0 ; x < imageData.width ; x++){
      if(x<=canvas.width/2){        
        r=coef*x;
        g=coef*x;
        b=0;
      }
      else{       
        r=coef*x;
        g=coef*(canvas.width-x);
        b=0;
      }
      for (let y = 0 ; y < imageData.height ; y++){      
          setPixel(x,y,r,g,b,a);     
      }
    }
    ctx.putImageData(imageData,0,0);

    function setPixel(x,y,r,g,b,a){
      let index = ( x + y * imageData.width ) * 4;
      imageData.data[index] = r;
      imageData.data[index +1] = g;
      imageData.data[index +2] = b;
      imageData.data[index +3] = a;
    }

  }
   function punto5bis(){
    let canvas = document.getElementById("myCanvas4");
    let ctx = canvas.getContext("2d");
    let gradient = ctx.createLinearGradient(255, 0,0 ,0);
    gradient.addColorStop (1, 'black');      
    gradient.addColorStop (0.4, 'yellow');
    gradient.addColorStop (0.4, 'yellow');
    gradient.addColorStop (0, 'red');   
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,canvas.width,canvas.height);     
  }

  /*
  6.	Pintar un rectángulo en pantalla, utilizando tres o cuatro colores en un gradiente. 
      Los tres colores deben ser armonías tonales. Puede ser en el eje X o Y.
  */
      function punto6(){
        let canvas = document.getElementById("myCanvas10");
        let ctx = canvas.getContext("2d");
        let r = 0;
        let g = 0;
        let b = 0;
        let a = 255;
        let imageData = ctx.createImageData(canvas.width,canvas.height);
        let coef= 255/(canvas.width/4);
        for(let x = 0 ; x < imageData.width ; x++){
    
          if(x<=canvas.width/4){        // x va de  0 a 100
            r=coef*x;
            g=255;
            b=0;     
          }
    
          else if(x>=canvas.width/4 && x < canvas.width/2){  // x va de 100 a 200
            r=255;
            g=((canvas.width-x)/2)+105;
            b=0;
          }
    
          else if (x>=canvas.width/2 && x < canvas.width*3/4){  // x va de 200 a 300     
            r=255;
            g=(canvas.width-x)+5;
            b=0;
          }
          
          else{                                      // x va de 300 a 400
            r=255;
            g=(canvas.width-x)+5;
            b=0;
          }
    
          for (let y = 0 ; y < imageData.height ; y++){      
              setPixel(x,y,r,g,b,a);
         
          }
        }
        ctx.putImageData(imageData,0,0);
    
        function setPixel(x,y,r,g,b,a){
          let index = ( x + y * imageData.width ) * 4;
          imageData.data[index] = r;
          imageData.data[index +1] = g;
          imageData.data[index +2] = b;
          imageData.data[index +3] = a;
        }
    
      } 
      function punto6bis(){
        let canvas = document.getElementById("myCanvas5");
        let ctx = canvas.getContext("2d");
        let gradient = ctx.createLinearGradient(255, 0,0 ,0);
        gradient.addColorStop(1, "black");
        gradient.addColorStop(0.8, "magenta");
        gradient.addColorStop(0.6, "blue");
        gradient.addColorStop(0.5, "green");
        gradient.addColorStop(0.4, "yellow");
        gradient.addColorStop(0.2, "orange");
        gradient.addColorStop(0, "red");       
        ctx.fillStyle = gradient;
        ctx.fillRect(0,0,canvas.width,canvas.height);
      }

 
  /*
    7.	Cargar una Imagen desde disco o URL 
    a)	Dibujar la imagen dentro del canvas 
  */
  function punto7a(){
    let canvas = document.getElementById("myCanvas6");
    let ctx = canvas.getContext("2d");  
    let imageData;
    let width = canvas.width;
    let height = canvas.height;
    let image1 = new Image();
    image1.src = "images/tigre.jpg";
    image1.onload = function(){
      myDrawImageMethod(this);
    }
    function myDrawImageMethod(image){
      ctx.drawImage(image1,0,0,width, height);
    }
    imageData = ctx.getImageData(0,0,width, height)
//    console.log(imageData);
    ctx.putImageData(imageData,0,0);
  }

  
   



  /*
  7.	Cargar una Imagen desde disco o URL: 
    b)	Implementar una función que aplique el filtro de escala de grises 
    y muestre el resultado en el canvas. 
  */
    
    function punto7b(){  
      let imageData;
      let grayPixel;
      let r ;        
      let g ;
      let b ;
      let a = 255;
      let btn = document.getElementById("grey");
      btn.addEventListener('click', greyScale)
      let canvas = document.getElementById("myCanvas7");
      let ctx = canvas.getContext("2d"); 
      let width = canvas.width;
      let height = canvas.height; 
      let image1 = new Image();
      image1.src = "images/tigre.jpg";
      image1.onload = () =>{
        myDrawImageMethod(image1);
      }
      function myDrawImageMethod(image){
        ctx.drawImage(image1,0,0,width, height);
      }

      function greyScale(){
        image1.src = "images/tigre.jpg";
        image1.onload = function(){
          ctx.drawImage(image1,0,0,width, height);
          imageData = ctx.getImageData(0,0, width, height);
              for (let x = 0; x < width; x++) {
                for (let y = 0; y < height; y++) {
                  r = getRed(imageData,x,y);        
                  g = getGreen(imageData,x,y);
                  b = getBlue(imageData,x,y);         
                  grayPixel = generateAverageGray(r,g,b);          
                  setPixel(imageData,x,y, grayPixel, grayPixel, grayPixel,a);          
                }        
              }
              ctx.putImageData(imageData,0,0); 
        }           
      }

      function generateAverageGray(r,g,b){
        let gray = (r+g+b)/3;
        return gray;
      }    
    }
    
    function filtroNegativo(){  
      let imageData;
      let r ;        
      let g ;
      let b ;
      let a = 255;
      let btn = document.getElementById("negative");
      btn.addEventListener('click', negativeFilter)
      let canvas = document.getElementById("myCanvasNeg");
      let ctx = canvas.getContext("2d"); 
      let width = canvas.width;
      let height = canvas.height; 
      let image1 = new Image();
      image1.src = "images/jaguar.jpg";
      image1.onload = () =>{
        myDrawImageMethod(image1);
      }
      function myDrawImageMethod(image){
        ctx.drawImage(image1,0,0,width, height);
      }

      function negativeFilter(){
        image1.src = "images/jaguar.jpg";
        image1.onload = function(){
          ctx.drawImage(image1,0,0,width, height);
          imageData = ctx.getImageData(0,0, width, height);
              for (let x = 0; x < width; x++) {
                for (let y = 0; y < height; y++) {
                  r = getRed(imageData,x,y);        
                  g = getGreen(imageData,x,y);
                  b = getBlue(imageData,x,y);                   
                  setPixel(imageData,x,y, 255-r, 255-g, 255-b,a);          
                }        
              }
              ctx.putImageData(imageData,0,0); 
        }           
      }   
    }

    function filtroSepia(){  
      let imageData;
      let r ;        
      let g ;
      let b ;
      let a = 255;
      let btn = document.getElementById("sepia");
      btn.addEventListener('click', sepiaFilter)
      let canvas = document.getElementById("myCanvasSepia");
      let ctx = canvas.getContext("2d"); 
      let width = canvas.width;
      let height = canvas.height; 
      let image1 = new Image();
      image1.src = "images/leon.jpg";
      image1.onload = () =>{
        myDrawImageMethod(image1);
      }
      function myDrawImageMethod(image){
        ctx.drawImage(image1,0,0,width, height);
      }

      function sepiaFilter(){
        image1.src = "images/leon.jpg";
        image1.onload = function(){
          ctx.drawImage(image1,0,0,width, height);
          imageData = ctx.getImageData(0,0, width, height);
              for (let x = 0; x < width; x++) {
                for (let y = 0; y < height; y++) {
                  r = 0.898*getRed(imageData,x,y)+0.769*getGreen(imageData,x,y)+0.189*getBlue(imageData,x,y);
                  if(r>255){
                    r = 255;
                  }        
                  g = 0.649*getRed(imageData,x,y)+0.686*getGreen(imageData,x,y)+0.168*getBlue(imageData,x,y);
                  if(g>255){
                    g = 255;
                  }
                  b = 0.349*getRed(imageData,x,y)+0.686*getGreen(imageData,x,y)+0.168*getBlue(imageData,x,y); 
                  if(b>255){
                    b = 255;
                  }                  
                  setPixel(imageData,x,y,r,g,b,a);          
                }        
              }
              ctx.putImageData(imageData,0,0); 
        }           
      }   
    }
    
    function filtroBinarizacion(){  
      let imageData;
      let r ;        
      let g ;
      let b ;
      let a = 255;
      let btn = document.getElementById("binarizacion");
          btn.addEventListener('click', binarizationFilter);
      let canvas = document.getElementById("myCanvasBin");
      let ctx = canvas.getContext("2d"); 
      let width = canvas.width;
      let height = canvas.height; 
      let image1 = new Image();
      image1.src = "images/lobo.jpg";
      image1.onload = () =>{
        myDrawImageMethod(image1);
      }
      function myDrawImageMethod(image){
        ctx.drawImage(image1,0,0,width, height);
      }

      function binarizationFilter(){
        let pixel;
        image1.src = "images/lobo.jpg";
        image1.onload = function(){
          ctx.drawImage(image1,0,0,width, height);
          imageData = ctx.getImageData(0,0, width, height);
              for (let x = 0; x < width; x++) {
                for (let y = 0; y < height; y++) {
                 pixel = getRed(imageData,x,y) +getGreen(imageData,x,y)+ getBlue(imageData,x,y); 
                   //uso 381 ((255 + 255 + 255) / 2) como valor frontera entre Blanco y Negro.
                 if(pixel>381){
                  setPixel(imageData,x,y,255,255,255,a); 
                 }else{
                  setPixel(imageData,x,y,0,0,0,a);   
                 }
                }        
              }
              ctx.putImageData(imageData,0,0); 
        }           
      }   
    }

    function filtroBrillo(){  
      let imageData;
      let r ;        
      let g ;
      let b ;
      let a = 255;
      let btn1 = document.getElementById("brillo1");
          btn1.addEventListener('click', brightnessFilter);
      let canvas = document.getElementById("myCanvasBrillo");
      let ctx = canvas.getContext("2d"); 
      let width = canvas.width;
      let height = canvas.height; 
      let image1 = new Image();
      image1.src = "images/lobo.jpg";
      image1.onload = () =>{
        myDrawImageMethod(image1);
      }
      function myDrawImageMethod(image){
        ctx.drawImage(image1,0,0,width, height);
      }
      imageData = ctx.getImageData(0,0, width, height); 

      function brightnessFilter(){       
        imageData = ctx.getImageData(0,0, width, height);       
        for (let x = 0; x < width; x++) {
                for (let y = 0; y < height; y++) {                                              
                  r = getRed(imageData,x,y);        
                  g = getGreen(imageData,x,y);
                  b = getBlue(imageData,x,y); 
                  setPixelmasBrillo(imageData,x,y,r,g,b,a)
                }        
              }
              ctx.putImageData(imageData,0,0);
       
              
        }           
         
    }

function filtroSobel(){
  let imageData;
  let imageData2;
  let r,r1,r2 ;        
  let g,g1,g2 ;
  let b,b1,b2 ;
  let a = 255;
  let btn1 = document.getElementById("sobel");
      btn1.addEventListener('click', sobelFilter);
  let canvas = document.getElementById("myCanvasSobel1");
  let ctx = canvas.getContext("2d"); 
  let width = canvas.width;
  let height = canvas.height; 
  let image1 = new Image();
  image1.src = "images/ImageForSobelOperator.png";
  image1.onload = () =>{
    myDrawImageMethod(image1);
  }
  function myDrawImageMethod(image){
    let imgWidth = image.width;
    let imgHeight = image.height;
    
    if(imgWidth < imgHeight){ // ajusta,para mantener el aspecto de la imagen original, si la imagen tiene más alto que ancho
        let proportion = (height * 100) / imgHeight;
        imgWidth = imgWidth * (proportion/100);
        imgHeight = imgHeight * (proportion/100);
    } else if (imgWidth > imgHeight){  // ajusta,para mantener el aspecto de la imagen original, si la imagen tiene más ancho que alto
        let proportion = (width * 100) / imgWidth;
        imgWidth = imgWidth * (proportion/100);
        imgHeight = imgHeight * (proportion/100);
    } else { // ajusta,para mantener el aspecto de la imagen original, si la imagen tiene mismo alto que ancho
        let proportionWidth = (width * 100) / imgWidth;
        let proportionHeight = (height * 100) / imgHeight;
        imgWidth = imgWidth * (proportionWidth/100);
        imgHeight = imgHeight * (proportionHeight/100);
    }
    ctx.drawImage(image1,0,0,width, height);
  }
  imageData = ctx.getImageData(0,0, width, height);


  function greyScale(){
    image1.src = "images/ImageForSobelOperator.png";
    image1.onload = function(){
      ctx.drawImage(image1,0,0,width, height);
      imageData = ctx.getImageData(0,0, width, height);
          for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
              r = getRed(imageData,x,y);        
              g = getGreen(imageData,x,y);
              b = getBlue(imageData,x,y);         
            let  grayPixel = generateAverageGray(r,g,b);          
              setPixel(imageData,x,y, grayPixel, grayPixel, grayPixel,a);          
            }        
          }
          ctx.putImageData(imageData,0,0); 
    }           
  }

  function generateAverageGray(r,g,b){
    let gray = (r+g+b)/3;
    return gray;
  } 
  greyScale(); 

  function sobelFilter(){       
    imageData = ctx.getImageData(0, 0, width, height);
    imageData2 = ctx.getImageData(0, 0, width, height);   
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        r2 = getRed(imageData, x-1, y)*(-2)+getRed(imageData, x+1, y)*(2)+getRed(imageData, x-1, y+1)*(-1)+getRed(imageData, x-1, y-1)*(-1)+getRed(imageData, x, y+1)*(0)+getRed(imageData, x, y-1)*(0)+getRed(imageData, x+1, y+1)*(1)+getRed(imageData, x+1, y-1)*(1);
        g2 =getGreen(imageData, x-1, y)*(-2)+getGreen(imageData, x+1, y)*(2)+getGreen(imageData, x-1, y+1)*(-1)+getGreen(imageData, x-1, y-1)*(-1)+getGreen(imageData, x, y+1)*(0)+getGreen(imageData, x, y-1)*(0)+getGreen(imageData, x+1, y+1)*(1)+getGreen(imageData, x+1, y-1)*(1);
        b2 = getBlue(imageData, x-1, y)*(-2)+getBlue(imageData, x+1, y)*(2)+getBlue(imageData, x-1, y+1)*(-1)+getBlue(imageData, x-1, y-1)*(-1)+getBlue(imageData, x, y+1)*(0)+getBlue(imageData, x, y-1)*(0)+getBlue(imageData, x+1, y+1)*(1)+getBlue(imageData, x+1, y-1)*(1);
      
        r1 = getRed(imageData, x-1, y+1)*(1)+getRed(imageData, x-1, y-1)*(-1)+getRed(imageData, x, y+1)*(2)+getRed(imageData, x, y-1)*(-2)+getRed(imageData, x+1, y+1)*(1)+getRed(imageData, x+1, y-1)*(-1);
        g1 =getGreen(imageData, x-1, y+1)*(1)+getGreen(imageData, x-1, y-1)*(-1)+getGreen(imageData, x, y+1)*(2)+getGreen(imageData, x, y-1)*(-2)+getGreen(imageData, x+1, y+1)*(1)+getGreen(imageData, x+1, y-1)*(-1);
        b1 = getBlue(imageData, x-1, y+1)*(1)+getBlue(imageData, x-1, y-1)*(-1)+getBlue(imageData, x, y+1)*(2)+getBlue(imageData, x, y-1)*(-2)+getBlue(imageData, x+1, y+1)*(1)+getBlue(imageData, x+1, y-1)*(-1);
        r= Math.sqrt(Math.pow(r1,2)+Math.pow(r2,2));
        g= Math.sqrt(Math.pow(g1,2)+Math.pow(g2,2));
        b= Math.sqrt(Math.pow(b1,2)+Math.pow(b2,2));
        setPixel(imageData2, x, y, r,g,b, a);
      }
    }
    ctx.putImageData(imageData2, 0, 0);
  }

}

function filtroSobelHorizontal(){
  let imageData;
  let imageData2;
  let r,r1,r2 ;        
  let g,g1,g2 ;
  let b,b1,b2 ;
  let a = 255;
  let btn1 = document.getElementById("sobel-horizontal");
      btn1.addEventListener('click', sobelHorizontalFilter);
  let canvas = document.getElementById("myCanvasSobel2");
  let ctx = canvas.getContext("2d"); 
  let width = canvas.width;
  let height = canvas.height; 
  let image1 = new Image();
  image1.src = "images/ImageForSobelOperator.png";
  image1.onload = () =>{
    myDrawImageMethod(image1);
  }
  function myDrawImageMethod(image){
    let imgWidth = image.width;
    let imgHeight = image.height;
    
    if(imgWidth < imgHeight){ // ajusta,para mantener el aspecto de la imagen original, si la imagen tiene más alto que ancho
        let proportion = (height * 100) / imgHeight;
        imgWidth = imgWidth * (proportion/100);
        imgHeight = imgHeight * (proportion/100);
    } else if (imgWidth > imgHeight){  // ajusta,para mantener el aspecto de la imagen original, si la imagen tiene más ancho que alto
        let proportion = (width * 100) / imgWidth;
        imgWidth = imgWidth * (proportion/100);
        imgHeight = imgHeight * (proportion/100);
    } else { // ajusta,para mantener el aspecto de la imagen original, si la imagen tiene mismo alto que ancho
        let proportionWidth = (width * 100) / imgWidth;
        let proportionHeight = (height * 100) / imgHeight;
        imgWidth = imgWidth * (proportionWidth/100);
        imgHeight = imgHeight * (proportionHeight/100);
    }
    ctx.drawImage(image1,0,0,width, height);
  }
  imageData = ctx.getImageData(0,0, width, height);


  function greyScale(){
    image1.src = "images/ImageForSobelOperator.png";
    image1.onload = function(){
      ctx.drawImage(image1,0,0,width, height);
      imageData = ctx.getImageData(0,0, width, height);
          for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
              r = getRed(imageData,x,y);        
              g = getGreen(imageData,x,y);
              b = getBlue(imageData,x,y);         
            let  grayPixel = generateAverageGray(r,g,b);          
              setPixel(imageData,x,y, grayPixel, grayPixel, grayPixel,a);          
            }        
          }
          ctx.putImageData(imageData,0,0); 
    }           
  }

  function generateAverageGray(r,g,b){
    let gray = (r+g+b)/3;
    return gray;
  } 
  greyScale(); 


  function sobelHorizontalFilter(){
    imageData = ctx.getImageData(0, 0, width, height);
    imageData2 = ctx.getImageData(0, 0, width, height); 
   
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        r = getRed(imageData, x-1, y+1)*(1)+getRed(imageData, x-1, y-1)*(-1)+getRed(imageData, x, y+1)*(2)+getRed(imageData, x, y-1)*(-2)+getRed(imageData, x+1, y+1)*(1)+getRed(imageData, x+1, y-1)*(-1);
        g =getGreen(imageData, x-1, y+1)*(1)+getGreen(imageData, x-1, y-1)*(-1)+getGreen(imageData, x, y+1)*(2)+getGreen(imageData, x, y-1)*(-2)+getGreen(imageData, x+1, y+1)*(1)+getGreen(imageData, x+1, y-1)*(-1);
        b = getBlue(imageData, x-1, y+1)*(1)+getBlue(imageData, x-1, y-1)*(-1)+getBlue(imageData, x, y+1)*(2)+getBlue(imageData, x, y-1)*(-2)+getBlue(imageData, x+1, y+1)*(1)+getBlue(imageData, x+1, y-1)*(-1);
        setPixel(imageData2, x, y, r,g,b, a);
      }
    }
    ctx.putImageData(imageData2, 0, 0);
  }
}

function filtroSobelVertical(){
  let imageData;
  let imageData2;
  let r,r1,r2 ;        
  let g,g1,g2 ;
  let b,b1,b2 ;
  let a = 255;
  let btn1 = document.getElementById("sobel-vertical");
      btn1.addEventListener('click', sobelVerticalFilter);
  let canvas = document.getElementById("myCanvasSobel3");
  let ctx = canvas.getContext("2d"); 
  let width = canvas.width;
  let height = canvas.height; 
  let image1 = new Image();
  image1.src = "images/ImageForSobelOperator.png";
  image1.onload = () =>{
    myDrawImageMethod(image1);
  }
  function myDrawImageMethod(image){
    let imgWidth = image.width;
    let imgHeight = image.height;
    
    if(imgWidth < imgHeight){ // ajusta,para mantener el aspecto de la imagen original, si la imagen tiene más alto que ancho
        let proportion = (height * 100) / imgHeight;
        imgWidth = imgWidth * (proportion/100);
        imgHeight = imgHeight * (proportion/100);
    } else if (imgWidth > imgHeight){  // ajusta,para mantener el aspecto de la imagen original, si la imagen tiene más ancho que alto
        let proportion = (width * 100) / imgWidth;
        imgWidth = imgWidth * (proportion/100);
        imgHeight = imgHeight * (proportion/100);
    } else { // ajusta,para mantener el aspecto de la imagen original, si la imagen tiene mismo alto que ancho
        let proportionWidth = (width * 100) / imgWidth;
        let proportionHeight = (height * 100) / imgHeight;
        imgWidth = imgWidth * (proportionWidth/100);
        imgHeight = imgHeight * (proportionHeight/100);
    }
    ctx.drawImage(image1,0,0,width, height);
  }
  imageData = ctx.getImageData(0,0, width, height);


  function greyScale(){
    image1.src = "images/ImageForSobelOperator.png";
    image1.onload = function(){
      ctx.drawImage(image1,0,0,width, height);
      imageData = ctx.getImageData(0,0, width, height);
          for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
              r = getRed(imageData,x,y);        
              g = getGreen(imageData,x,y);
              b = getBlue(imageData,x,y);         
            let  grayPixel = generateAverageGray(r,g,b);          
              setPixel(imageData,x,y, grayPixel, grayPixel, grayPixel,a);          
            }        
          }
          ctx.putImageData(imageData,0,0); 
    }           
  }

  function generateAverageGray(r,g,b){
    let gray = (r+g+b)/3;
    return gray;
  } 
  greyScale();
  function sobelVerticalFilter(){
    imageData = ctx.getImageData(0, 0, width, height);
    imageData2 = ctx.getImageData(0, 0, width, height); 
    
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        r = getRed(imageData, x-1, y)*(-2)+getRed(imageData, x+1, y)*(2)+getRed(imageData, x-1, y+1)*(-1)+getRed(imageData, x-1, y-1)*(-1)+getRed(imageData, x, y+1)*(0)+getRed(imageData, x, y-1)*(0)+getRed(imageData, x+1, y+1)*(1)+getRed(imageData, x+1, y-1)*(1);
        g =getGreen(imageData, x-1, y)*(-2)+getGreen(imageData, x+1, y)*(2)+getGreen(imageData, x-1, y+1)*(-1)+getGreen(imageData, x-1, y-1)*(-1)+getGreen(imageData, x, y+1)*(0)+getGreen(imageData, x, y-1)*(0)+getGreen(imageData, x+1, y+1)*(1)+getGreen(imageData, x+1, y-1)*(1);
        b = getBlue(imageData, x-1, y)*(-2)+getBlue(imageData, x+1, y)*(2)+getBlue(imageData, x-1, y+1)*(-1)+getBlue(imageData, x-1, y-1)*(-1)+getBlue(imageData, x, y+1)*(0)+getBlue(imageData, x, y-1)*(0)+getBlue(imageData, x+1, y+1)*(1)+getBlue(imageData, x+1, y-1)*(1);
        setPixel(imageData2, x, y, r,g,b, a);
      }
    }
    ctx.putImageData(imageData2, 0, 0);
  }
}

    function setPixelmasBrillo(imageData, x, y, r, g, b, a){
      let index = (x+y*imageData.width) * 4;   
  
      imageData.data[index + 3]=a;      
      imageData.data[index + 0] = r + 10;
      imageData.data[index + 1] = g + 10;
      imageData.data[index + 2] = b + 10;
      
  }

    function setPixel(image,x,y,r,g,b,a){
      let index = ( x + y * image.width ) * 4;
      image.data[index] = r;
      image.data[index +1] = g;
      image.data[index +2] = b;
      image.data[index +3] = a;  
    }

    function getRed(image,x,y){
      let index =(x+y*image.width)*4;
     return image.data[index];
    }  
   function getGreen(image,x,y){
    let index=(x+y*image.width)*4;
    return image.data[index+1];
    }  
    function getBlue(image,x,y){
    let index=(x+y*image.width)*4;
    return image.data[index+2];
    }  
  

  punto1();
  punto2();
  punto2bis();
  punto3();
  punto4();
  punto4bis();
  punto5();
  punto5bis();
  punto6();
  punto6bis();
  punto7a();
  punto7b();// filtro de grises
  filtroNegativo();
  filtroSepia();
  filtroBinarizacion();
  filtroBrillo();
  filtroSobel();
  filtroSobelHorizontal();
  filtroSobelVertical();
});

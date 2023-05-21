//2x2
//add
function add(event){
    {
        event.preventDefault()
    }

    let a1 = document.getElementById("a1").value
    a1 = Number(a1)
    let a2 = document.getElementById("a2").value
    a2 = Number(a2)
    let a3 = document.getElementById("a3").value
    a3 = Number(a3)
    let a4 = document.getElementById("a4").value
    a4 = Number(a4)

    let value =document.getElementById("value").value
    value = Number(value)
     
    let result =""
    
    let matrix = [
       [a1, a2],
       [a3, a4]
      ]

      for (let i=0; i < matrix.length; i++){
      for (let j=0; j < matrix[i].length; j++)
      result += (matrix [i][j] + value) +","+ ""
      document.getElementById("result").innerHTML = result
}
}



//2x2
//subtract
function subtract(event){
    {
        event.preventDefault()
    }

    let a1 = document.getElementById("a1").value
    a1 = Number(a1)
    let a2 = document.getElementById("a2").value
    a2 = Number(a2)
    let a3 = document.getElementById("a3").value
    a3 = Number(a3)
    let a4 = document.getElementById("a4").value
    a4 = Number(a4)

    let value =document.getElementById("value").value
    value = Number(value)
     
    let result =""
    
    let matrix = [
       [a1, a2],
       [a3, a4]
      ]

      for (let i=0; i < matrix.length; i++){
      for (let j=0; j < matrix[i].length; j++)
      result += (matrix [i][j] - value) +","+ ""
      document.getElementById("result").innerHTML = result
}
}


//2x2
//multiply
function multiply(event){
    {
        event.preventDefault()
    }

    let a1 = document.getElementById("a1").value
    a1 = Number(a1)
    let a2 = document.getElementById("a2").value
    a2 = Number(a2)
    let a3 = document.getElementById("a3").value
    a3 = Number(a3)
    let a4 = document.getElementById("a4").value
    a4 = Number(a4)

    let value =document.getElementById("value").value
    value = Number(value)
     
    let result =""
    
    let matrix = [
       [a1, a2],
       [a3, a4]
      ]

      for (let i=0; i < matrix.length; i++){
      for (let j=0; j < matrix[i].length; j++)
      result += (matrix [i][j] * value) +","+ ""
      document.getElementById("result").innerHTML = result
}
}




//3x3
//add2
function add2(event){
    {
        event.preventDefault()
    }

    let a1 = document.getElementById("a1").value
    a1 = Number(a1)
    let a2 = document.getElementById("a2").value
    a2 = Number(a2)
    let a3 = document.getElementById("a3").value
    a3 = Number(a3)
    let a4 = document.getElementById("a4").value
    a4 = Number(a4)
    let a5 = document.getElementById("a5").value
    a5 = Number(a5)
    let a6 = document.getElementById("a6").value
    a6 = Number(a6)
    let a7 = document.getElementById("a7").value
    a7 = Number(a7)
    let a8 = document.getElementById("a8").value
    a8 = Number(a8)
    let a9 = document.getElementById("a9").value
    a9 = Number(a9)

    let value =document.getElementById("value").value
    value = Number(value)
     
    let result =""
    
    let matrix = [
       [a1, a2, a3],
       [a4, a5, a6],
       [a7, a8, a9]
      ]

      for (let i=0; i < matrix.length; i++){
      for (let j=0; j < matrix[i].length; j++)
      result += (matrix [i][j] + value) +","+ ""
      document.getElementById("result2").innerHTML = result
}
}


//3x3
//subtract2
function subtract2(event){
    {
        event.preventDefault()
    }

    let a1 = document.getElementById("a1").value
    a1 = Number(a1)
    let a2 = document.getElementById("a2").value
    a2 = Number(a2)
    let a3 = document.getElementById("a3").value
    a3 = Number(a3)
    let a4 = document.getElementById("a4").value
    a4 = Number(a4)
    let a5 = document.getElementById("a5").value
    a5 = Number(a5)
    let a6 = document.getElementById("a6").value
    a6 = Number(a6)
    let a7 = document.getElementById("a7").value
    a7 = Number(a7)
    let a8 = document.getElementById("a8").value
    a8 = Number(a8)
    let a9 = document.getElementById("a9").value
    a9 = Number(a9)

    let value =document.getElementById("value").value
    value = Number(value)
     
    let result =""
    
    let matrix = [
       [a1, a2, a3],
       [a4, a5, a6],
       [a7, a8, a9]
      ]

      for (let i=0; i < matrix.length; i++){
      for (let j=0; j < matrix[i].length; j++)
      result += (matrix [i][j] - value) +","+ ""
      document.getElementById("result2").innerHTML = result
}
}


//3x3
//multiply2
function multiply2(event){
    {
        event.preventDefault()
    }

    let a1 = document.getElementById("a1").value
    a1 = Number(a1)
    let a2 = document.getElementById("a2").value
    a2 = Number(a2)
    let a3 = document.getElementById("a3").value
    a3 = Number(a3)
    let a4 = document.getElementById("a4").value
    a4 = Number(a4)
    let a5 = document.getElementById("a5").value
    a5 = Number(a5)
    let a6 = document.getElementById("a6").value
    a6 = Number(a6)
    let a7 = document.getElementById("a7").value
    a7 = Number(a7)
    let a8 = document.getElementById("a8").value
    a8 = Number(a8)
    let a9 = document.getElementById("a9").value
    a9 = Number(a9)

    let value =document.getElementById("value").value
    value = Number(value)
     
    let result =""
    
    let matrix = [
       [a1, a2, a3],
       [a4, a5, a6],
       [a7, a8, a9]
      ]

      for (let i=0; i < matrix.length; i++){
      for (let j=0; j < matrix[i].length; j++)
      result += (matrix [i][j] * value) +","+ ""
      document.getElementById("result2").innerHTML = result
}
}


//4x4
//add4
function add4(event){
    {
        event.preventDefault()
    }

    let a1 = document.getElementById("a1").value
    a1 = Number(a1)
    let a2 = document.getElementById("a2").value
    a2 = Number(a2)
    let a3 = document.getElementById("a3").value
    a3 = Number(a3)
    let a4 = document.getElementById("a4").value
    a4 = Number(a4)
    let a5 = document.getElementById("a5").value
    a5 = Number(a5)
    let a6 = document.getElementById("a6").value
    a6 = Number(a6)
    let a7 = document.getElementById("a7").value
    a7 = Number(a7)
    let a8 = document.getElementById("a8").value
    a8 = Number(a8)
    let a9 = document.getElementById("a9").value
    a9 = Number(a9)
    let a10 = document.getElementById("a10").value
    a10 = Number(a10)
    let a11 = document.getElementById("a11").value
    a11 = Number(a11)
    let a12 = document.getElementById("a12").value
    a12 = Number(a12)
    let a13 = document.getElementById("a13").value
    a13 = Number(a13)
    let a14 = document.getElementById("a14").value
    a14 = Number(a14)
    let a15 = document.getElementById("a15").value
    a15 = Number(a15)
    let a16 = document.getElementById("a16").value
    a6 = Number(a16)
   

    let value =document.getElementById("value").value
    value = Number(value)
     
    let result =""
    
    let matrix = [
       [a1, a2, a3, a4],
       [a5, a6, a7, a8],
       [a9, a10, a11, a12],
       [a12, a14, a15, a16]
      ]

      for (let i=0; i < matrix.length; i++){
      for (let j=0; j < matrix[i].length; j++)
      result += (matrix [i][j] + value) +","+ ""
      document.getElementById("result4").innerHTML = result
}
}


//4x4
//subtract4
function subtract4(event){
    {
        event.preventDefault()
    }

    let a1 = document.getElementById("a1").value
    a1 = Number(a1)
    let a2 = document.getElementById("a2").value
    a2 = Number(a2)
    let a3 = document.getElementById("a3").value
    a3 = Number(a3)
    let a4 = document.getElementById("a4").value
    a4 = Number(a4)
    let a5 = document.getElementById("a5").value
    a5 = Number(a5)
    let a6 = document.getElementById("a6").value
    a6 = Number(a6)
    let a7 = document.getElementById("a7").value
    a7 = Number(a7)
    let a8 = document.getElementById("a8").value
    a8 = Number(a8)
    let a9 = document.getElementById("a9").value
    a9 = Number(a9)
    let a10 = document.getElementById("a10").value
    a10 = Number(a10)
    let a11 = document.getElementById("a11").value
    a11 = Number(a11)
    let a12 = document.getElementById("a12").value
    a12 = Number(a12)
    let a13 = document.getElementById("a13").value
    a13 = Number(a13)
    let a14 = document.getElementById("a14").value
    a14 = Number(a14)
    let a15 = document.getElementById("a15").value
    a15 = Number(a15)
    let a16 = document.getElementById("a16").value
    a6 = Number(a16)
   

    let value =document.getElementById("value").value
    value = Number(value)
     
    let result =""
    
    let matrix = [
       [a1, a2, a3, a4],
       [a5, a6, a7, a8],
       [a9, a10, a11, a12],
       [a12, a14, a15, a16]
      ]

      for (let i=0; i < matrix.length; i++){
      for (let j=0; j < matrix[i].length; j++)
      result += (matrix [i][j] - value) +","+ ""
      document.getElementById("result4").innerHTML = result
}
}


//4x4
//multiply4
function multiply4(event){
    {
        event.preventDefault()
    }

    let a1 = document.getElementById("a1").value
    a1 = Number(a1)
    let a2 = document.getElementById("a2").value
    a2 = Number(a2)
    let a3 = document.getElementById("a3").value
    a3 = Number(a3)
    let a4 = document.getElementById("a4").value
    a4 = Number(a4)
    let a5 = document.getElementById("a5").value
    a5 = Number(a5)
    let a6 = document.getElementById("a6").value
    a6 = Number(a6)
    let a7 = document.getElementById("a7").value
    a7 = Number(a7)
    let a8 = document.getElementById("a8").value
    a8 = Number(a8)
    let a9 = document.getElementById("a9").value
    a9 = Number(a9)
    let a10 = document.getElementById("a10").value
    a10 = Number(a10)
    let a11 = document.getElementById("a11").value
    a11 = Number(a11)
    let a12 = document.getElementById("a12").value
    a12 = Number(a12)
    let a13 = document.getElementById("a13").value
    a13 = Number(a13)
    let a14 = document.getElementById("a14").value
    a14 = Number(a14)
    let a15 = document.getElementById("a15").value
    a15 = Number(a15)
    let a16 = document.getElementById("a16").value
    a6 = Number(a16)
   

    let value =document.getElementById("value").value
    value = Number(value)
     
    let result =""
    
    let matrix = [
       [a1, a2, a3, a4],
       [a5, a6, a7, a8],
       [a9, a10, a11, a12],
       [a12, a14, a15, a16]
      ]

      for (let i=0; i < matrix.length; i++){
      for (let j=0; j < matrix[i].length; j++)
      result += (matrix [i][j] * value) +","+ ""
      document.getElementById("result4").innerHTML = result
}
}


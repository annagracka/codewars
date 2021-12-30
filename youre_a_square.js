var isSquare = function(n){
    return ((n <= 0) ? false
            : !Number(Math.sqrt(n).isInteger())
           ? false
           : true)
  }


console.log(isSquare(25)) //,"es");
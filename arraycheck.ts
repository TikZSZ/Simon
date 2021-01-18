var array1= [1,2,3,4,5]
var array2= [1,2,3,4,5]
var n=array1.length
var m=array2.length

function checker(array1,array2){

  if(array1.length===array2.length){

    for(var i=0;i<array1.length;i++){
      
      if(array1[i]===array2[i]){
      }else{
        return false
      }
    }
    return true

  }else{
      return false
  }
  
}
console.log(check(array1,array2));


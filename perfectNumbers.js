
let sumOfDiveners = 1
let perfectNumbers = []
let flag = 0
let findingPerfectNum = (number)=>{
for (let i = number; i > 1; i--) {
   for(let j = 2 ; j <= i/2; j++){
       if(i % j == 0){
           sumOfDiveners = sumOfDiveners + j
   }
}
   if(sumOfDiveners == i){
       perfectNumbers[flag] = i
       sumOfDiveners = 1
       flag++
   }else{
    sumOfDiveners = 1
}
}
}

findingPerfectNum(1000)
for (let i = 0; i < perfectNumbers.length; i++) {
    console.log(perfectNumbers[i] + ": Mükemmel sayıdır.")    
}

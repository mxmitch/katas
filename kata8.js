const multiplicationTable = function(maxValue) {
    var answer = "";
    for(let j=1;j<=maxValue;j++){
        for(let i=1;i<=maxValue;i++){
            if(i === maxValue){
                answer += (i*j) + "\n";
            } else {
            answer += (i*j) + " "; 
            }
        }
    }
    return answer;
  };
  
  console.log(multiplicationTable(1));
  console.log(multiplicationTable(5));
  console.log(multiplicationTable(10));
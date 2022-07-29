function descendingOrder(n) {
 
    let newNumArr = n.toString().split("");
    let sortArr = newNumArr.sort();
    let reverseArr = sortArr.reverse();
    let joinArr = parseInt(reverseArr.join(""));
    return console.log(joinArr);
   }
   
   descendingOrder(42145);
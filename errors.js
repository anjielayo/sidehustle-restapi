function divide (dividend,divisor){
    if (divisor==0){
        throw new Error("cannot divide by zero");

    }
    return dividend/divisor;
}
//console.log(divide(5,0));

try{
    console.log(divide(7,0));
}
catch(e){
    console.error("You divided by zero. Change denominator")
}
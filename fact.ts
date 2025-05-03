function calcFactorial(n: number) : void {
    let fact : number = 1;
    for(let i: number = 1; i <= n; i++) {
        fact = fact * i;  
    }
    console.log(`Factorial of ${n} = ${fact}`);
}
calcFactorial(4);
calcFactorial(7);


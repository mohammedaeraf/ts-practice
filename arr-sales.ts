
let sales: number[] = [90000, 10000, 25000];
let totalSales: number = 0;
for(let i: number = 0; i < sales.length; i++) {
    totalSales = totalSales + sales[i];
}
console.log(`Total Sales = ${totalSales}`);
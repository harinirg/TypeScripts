function sum(a: number, ...b: number[]): number {
    let result:number= a;

    for (let i = 0; i < b.length; i++) {
        result += b[i]!;
    }
    return result;
}
let result1 = sum(3, 5);
let result2 = sum(3, 5, 7, 9);

console.log(result1);
console.log(result2);
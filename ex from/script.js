// задачи с собеседования на понимание основа .41
//1)
let x = 5;alert(x++);
//*5 */
let y = 5;alert(++x);
//*6 */
//2)
// [] + false - null + true
console.log(typeof([] + false)) //*false*(string)
console.log([] + false - null + true) //*NaN*

//3)
let d = 1; 
let c = y = 2; //с право на лево
alert(c);
//*2 */
//4)
console.log([] + 1 + 2); //*12*
//5)
alert("1"[0]);//*1*
//6)
console.log(2 && 1 && null && 0 && undefined);//*null*
//7)
console.log(!!(1 &&  2) === (1 && 2));// !! превращает значение в булинновое
           //3
alert(null || 2 & 3 || 4);
//*3* */
//9)
const ad = [1,2,3];
const bd = [1,2,3];

console.log(ad === bd);
//10)
alert(+"Infinity")
//11)
console.log("Ежик" > "яблоко");
//12)
console.log(0 || "" || 2 || undefined || true || false);
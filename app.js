// Chapter 35 to 38

//////////////////////////

1
// function date(){
//     var d=new Date();
//     alert(d);
// }

// date();


2
// function greeting(){
//     var fname= prompt("First name: ");
//     var lname= prompt("Last name: ")
//     alert("Welcome " + fname + " "+ lname)
// }

// greeting();

3
// function add(){
//     return num1 + num2;
// }
// var num1 = +prompt("Enter first number:")
// var num2 = +prompt("Enter second number: ")

// add()

4
// function cal(no1,opr,no2){
//     if(opr === "+"){
//      alert(no1 + no2);
       
//     }
//    if(opr === "-"){
//      alert(no1 - no2);
  
     
//     }
//   if(opr === "*"){
//     alert(no1 *no2);

     
//     }
//   if(opr === "/"){
//     alert(no1 / no2);

      
//     }
//     else{
//         alert("Enter right operation")
//     }
// }

// var a=+prompt("Enter first no");
// var b=prompt("Enter Operator");
// var c=+prompt("Enter Second no");
// cal(a,b,c);

5
// function square(s){
//    alert(s*s)
// }
// var a=+prompt("Enter a no to make it Square")
// square(a)



6
// var a=+prompt("To find factorial of a number. \n Enter a no:")
// var ans=a;
// function factorial(no){
//     if(no ==0 || no==1){
//        return 1
//     }
//     for(i=no-1; i>=1; i--){
//         ans=ans*i;
//     }
//     return ans;
// }
// var b=factorial(a);
// alert(b)



7
// function count(start,end){
//     for(i=start; i<=end; i++){
//         document.write(i+"<br>")
//     }
// }
// var s=+prompt("Enter a No where to start counting")
// var e=+prompt("Enter a No where to end counting")

// count(s,e)

8
// function  calculateHypotenuse(base,per){
//   var a=Math.sqrt(base*base+per*per)
//   return a
    
// }
// var b=+prompt("To find Hypontenuse\n Enter base of triangle:")
// var p=+prompt("To find Hypontenuse\n Enter perpendicular of triangle:")

// var c=calculateHypotenuse(b,p)
// document.write("Hypotenuse of a right angle triangle " + c)


9
// function area(w,h){
//     alert("Area of Rectangle is "+w*h)
// }
// //i
// // area(13,15)

// //ii
// var height=+prompt("Area of Rectangle /n Enter height")
// var width=+prompt("Area of Rectangle /n Enter Width")
// area(height,width)

10
// function palindrome(){
//     var word=prompt("Enter a word");
//     var check="";
//     for(var i=word.length-1; i>=0; i--){
//         check += word[i];
//     }
//     if(word === check){
//         alert(word+" is palindrome word")
//     }
//     else{
//         alert("Word is not palindrome")
//     }
// }
// palindrome()



// 11
// function capital(c){
//    var b= c.toUppercase()
//    return b
// }
// var a=capital("the quick brown fox")
// alert(a)


14
// function calcCircumference(r){
//    var coc=2*3.14*r
//     alert("The circumference is "+ Math.floor(coc));
// }
// var radius=+prompt("To calculate Circumference of circle   \n Enter radius of circle:")
// calcCircumference(radius)

// function calcArea(ra){
//     var coa=3.14*ra*ra;
//      alert("The Area is "+ Math.floor(coa));
//  }
//  var radius1=+prompt("To calculate Area of circle   \n Enter radius of circle:")
//  calcArea(radius1)
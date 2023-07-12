var sum=10+10;
console.log(sum);

var difference=12-5;
console.log(difference);

var product=12*5;
console.log(product);

var div=25/5;
console.log(div);

var incrimental=35;
incrimental++;
console.log(incrimental);

var dicrimental=35;
dicrimental--;
console.log(dicrimental);

var Decimals=5.6;
console.log(Decimals);

var add=3.5*4.00;
console.log(add);

var sub=4.23/2.02;
console.log(sub);

var remainder;
remainder=11%3;
console.log(remainder);

var a=3;
var b=12;
var c=15;
a=a+12;
console.log(a);
b=10+b;
console.log(b);
c=c+10;
console.log(c);

var a=3;
var b=12;
var c=15;
a+=12;
console.log(a);
b+=3;
console.log(b);
c+=10;
console.log(c);

var a=10;
var b=12;
var c=15;
a=a-2;
console.log(a);
b=10-b;
console.log(b);
c=c-10;
console.log(c);

var a=10;
var b=12;
var c=15;
a-=2;
console.log(a);
b-=10;
console.log(b);
c-=10;
console.log(c);

var a=10;
var b=12;
var c=4.6;
a=a*2;
console.log(a);
b=b*10;
console.log(b);
c=c*10;
console.log(c);

var a=10;
var b=12;
var c=4.6;
a*=2;
console.log(a);
b*=10;
console.log(b);
c*=10;
console.log(c);

var a=10;
var b=120;
var c=200;
a=a/2;
console.log(a);
b=b/10;
console.log(b);
c=c/5;
console.log(c);

var a=10;
var b=120;
var c=200;
a/=2;
console.log(a);
b/=10;
console.log(b);
c/=5;
console.log(c);

var myfirstname="Chandrabhanu";
var lastname="Nayanajith";
console.log(myfirstname,lastname);

var mystr="I am a\"double quoted\"String inside\"double qotes";
console.log(mystr);

var mystr="Firstline\n\t\\secondline\nthirdline";
console.log(mystr);

var ourstring="This is the start."+"This is the end.";
console.log(ourstring);

var ourstring="This is the start.";
ourstring+="This is the end.";
console.log(ourstring);

var myname="Nayanajith";
var mystr="Hello,My Name is " + myname + " How are You!";
console.log(mystr);

var lastnamelength=0;
var lastname="Nayanajith";
lastnamelength=lastname.length;
console.log(lastnamelength);

var firstletteroflastname="";
var firstname="Nayanajith";
firstletteroflastname=firstname[0];
console.log(firstletteroflastname);

var firstname="Nayanajith";
secondletteroflastname=firstname[1];
var lastname="chandrabhanu";
var thirdletteroflastname=lastname[2];
console.log(secondletteroflastname,thirdletteroflastname);

var myname="Nayanajith";
var lastleterofname=myname[myname.length-1];
console.log(lastleterofname);
 
var myname="Nayanajith";
var lastleterofname=myname[myname.length-4];
console.log(lastleterofname);

function wordblanks(mynoun,myadjective,myverb,myadverb){
    var result=""
    result += "The " + myadjective + " " + mynoun + " " + myverb + " to the store " + myadverb;
    return result;}
    console.log(wordblanks("dog","big","ran","quickly"));
    console.log(wordblanks("bike","slow","flew","slowly"));

var myArray= [50,60,70,80];
var mydata=myArray[0];
console.log(mydata);   

var myArray=[45,56,78];
myArray[2]=89;
console.log(myArray);

var myArray=[[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
mydata=myArray[2][2];
console.log(mydata);

var myArray=[["jhon",23],["cat",2]];
myArray.push(["dog",3]);
console.log(myArray);

var myArray=[["jhon",23],["cat",2],["dog",3]];
var removedarray=myArray.pop(2);
console.log(myArray);

var myArray=[["jhon",23],["cat",2],["dog",3]];
var removedarray=myArray.shift(2);
console.log(myArray);

var myArray=[["jhon",23],["cat",2],["dog",3]];
var removedarray=myArray.shift(2);
console.log(myArray);

var myArray=[["jhon",23],["cat",2],["dog",3]];
var removedarray=myArray.shift(2);
console.log(myArray);

var myArray=[["jhon",23],["cat",2],["dog",3]];
var removedarray=myArray.shift();
myArray.unshift(["John",60]);
console.log(myArray);

function ourfunction(){
    console.log("Hey World");
}
ourfunction();
ourfunction();

function myfunction(a,b){
    console.log(a-b);
}
myfunction(10,5);

function myfunction(a,b){
    console.log(a+b);
}
myfunction(10,5);

var mycar = 10;
function fun1(){
    myvan=5;
}
function fun2(){
    var output="";
    if (typeof mycar!="undefined"){
        output+= " mycar: " + mycar;
    }
    if (typeof myvan!="undefined"){
        output+= " myvan: " + myvan;
    }
    console.log(output);

}
fun1();
fun2();


function myjob(){
    var myvar=20;
    console.log(myvar);
}
myjob();

var outerwear="t-shirt";
function myoutfit(){
    var outerwear="sweater";
    return outerwear;
}
console.log(myoutfit());
console.log(outerwear);

function minusseven(num){
    return num-7;
}
console.log(minusseven(10));

function fivetimes(num){
    return num*5;
}
console.log(fivetimes(10));


var changed=0;
function change(num){
    return(num+5)/3;
}
changed=change(10);
console.log(changed);


















































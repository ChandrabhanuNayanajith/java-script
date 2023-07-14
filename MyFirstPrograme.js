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

function nextinline(arr,item){
    return arr.shift(); 
}
var testarr=[1,2,3,4,5];

console.log("Before : " + JSON.stringify(testarr));
console.log(nextinline(testarr,6));
console.log("After: " + JSON.stringify(testarr));

function trueorfalse(wasthattrue){
    if(wasthattrue){
        return "yes , it is true";
    }
    return "no, that is false";
}
console.log(trueorfalse(false));

function testequal(val){
    if (val==12){
        return "equal";
    }
    return "not equal";

}
console.log(testequal(10));

function compareequality(a,b){
    if (a==b){
        return "equal";
    }
    return "not equal";

}
console.log(compareequality(10,"10"));

function compareequality(a,b){
    if (a==b){
        return "equal";
    }
    return "not equal";

}
console.log(compareequality(10,"15"));

function testequal(val){
    if (val!=99){
        return "equal";
    }
    return "not equal";

}
console.log(testequal(10));

function testgraterthan(val){
    if (val>100){
        return "over 100";
    }
    if (val>10){
        return "over 10";
    }
    return "10 or under";
}
console.log(testgraterthan(10));

function testgraterthanequal(val){
    if (val>=20){
        return "20 or over";
    }
    if (val>=10){
        return "10 or over";
    }
    return "less than ten";
}
console.log(testgraterthanequal(10));

function testlessthan(val){
    if (val<20){
        return "under 20";
    }
    if (val<50){
        return "under 50";
    }
    return "55 or over";
}
console.log(testlessthan(10));

function testlessthanequal(val){
    if (val<=20){
        return "small than or equal 20";
    }
    if (val<=24){
        return "smaller tha or equal 24";
    }
    return "more than 24";
}
console.log(testlessthanequal(10));

function logic(val){
    if (val <10 || val > 20 ){
        return "outside";
    }
    return "inside";
}
console.log(logic(15));

function testelse(val){
    var result=""
    if (val>5){
        result= "biger than 5";
    }else{
    result="5 or smaller";
    }
    return result;
}
console.log(testelse(10));

function testifelse(val){
    if (val>10){
        retur="grather than 10";
    }else if (val<5) {
        retur="small than 5";
    }else{return "between 5 and 10";
}
    }
    
console.log(testifelse(7));

function mylogic(val){
    if (val<5){
        retur="less than 5";
    }else if (val<10) {
        retur="less than 10";
    }else{return "grather than or equal 10";
}
    }
    
console.log(mylogic(3));

function testline(num){
    if (num<5){
        return "Tiny"
    }else if (num<10) {
        return"small"
    }else if (num<15){
        return "medium"
    }else if (num<20){
        return "large"
    }else{
        return "huge"
    } 
}
console.log(testline(7));


var names =[ "Hole-in-hole!","egle","bridie","par","bogey","double bogey","Go-Home!"];
function golfscore(par,strocks){
    if (strocks==1){
        return names[o]
    }else if(strocks<=par-2){
        return names[1]
    }else if(strocks==par-1){
        return names[2]
    }else if(strocks==par){
        return names[3]
    }else if(strocks==par+1){
        return names[4]
    }else if(strocks==par+2){
        return names[5]
    }else if(strocks>=par-3){
        return names[6]
    }
    
}
console.log(golfscore(5,4));


function caseinswitch(val){
    var answer="";
    switch (val){
        case 1:
            answer="alpha";
            break;

        case 2:
            answer="beta";
            break;
        case 3:
                answer="gama";
                break;    
            
    }
    return answer;
}
console.log(caseinswitch(2));

function sequenceswitch(val){
    var answer="";
    switch (val){
        case 1:
        case 2:
        case 3:
    answer="low";
    break;  
        case 4:
        case 5:
        case 6:
    answer="mid";
    break;    
        case 7:
        case 8:
        case 9:
    answer="high";
    break;      
    }
    return answer;
}
console.log(sequenceswitch(8));


function isless(a,b){
    return a<b;
}
console.log(isless(10,15));


var count = 0;
function cc(card){
    switch(card){
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
            count ++;
         break;
         case 10:
         case "j":
         case "Q":
         case "k":
         case "a" :
            count --;
            break;
    }
var holdbet="hold";
if (count>0){
    holdbet="bet";
    
}
    return count + " "+ holdbet;
}
cc(2),cc(3),cc(7),cc('k'),cc('a');
console.log(cc(4));

var ourdog={
    "name":"camper",
    "legs":4,
    "tails":1,
    "friends":["everything!"],
};
ourdog.name="happy camper";
console.log(ourdog);


var myobj={
    gift:"pen",
    pet:"cat",
    bed:"solo",
};
function checkObj(checkProp){
    if (myobj.hasOwnProperty(checkProp)){
        return myobj[checkProp];
    }else{
        return "not found"
    }
    }
console.log(checkObj("gift"));

var mystorage={
    "car":{
        "inside":{
            "glove box":"maps",
            "passenger seat":"crumbs",
        },
        "outside":{
            "truck":"jack"
        }
    }
};
var gloveBoxContents= mystorage.car.inside["glove box"];
console.log(gloveBoxContents);

var myArray = [];
 var i = 0;
while(i < 5) {
myArray.push (i) ;

i++;
}
console. log (myArray) ;

var myarray=[];
for (var  i=1; i<6; i++){
    myarray.push(i);
}
console.log(myArray);


var myarray=[];
for (var  i=1; i<10; i+=2){
    myarray.push(i);
}
console.log(myArray);















































































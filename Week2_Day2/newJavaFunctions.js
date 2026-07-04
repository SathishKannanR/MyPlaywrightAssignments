//Function Declaration
function userProfile(name) {
    console.log(`Hello ${name}`);    
}userProfile("Sathish");

//Arrow Function
let double=(a)=>{
    let y=a*a;
    //console.log(y);
    return y;
}
console.log(double(2));

//Anonymous Function
const AnoyFunc=()=>{
setTimeout(()=>{console.log(`This message is delayed by 2 Seconds`);},2000)

}

//CallBack Function
const getUserData=(callback)=>{
    setTimeout(()=>{callback();},3000)
}
const displayMsg=()=>{
    console.log("Call Back Message");    
}
getUserData(displayMsg);



function strRev(name) 
{    
let rev="";
let len=name.length;
for (let i = len-1; i>=0; i--) 
{

    rev=rev + name.charAt(i);
}
console.log(`the reversed string is: ${rev}`);
console.log(`The original name is :${name}`);
if(rev===name)
{
    console.log(`The string "${name}" is a Palindrome`);
    
}
else
{
    console.log(`The String "${name}" is not a palindrome`);
    
}
}
strRev("sathish");
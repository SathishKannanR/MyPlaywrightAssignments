/* function numberType(num) 
{
    switch (true) {
        case (num>0):
            console.log(`The number ${num} is a Positive Number`);
            break;
        case (num<0):
            console.log(`The number ${num} is a Negative Number`);            
            break;   
        default:
            console.log(`The number ${num} is Zero`);
            break;
    }
}numberType(-7) */

function numberType(num) 
{
    if(num>0)
    {
    console.log(`The number ${num} is a Positive Number`);    
    }
    else if (num<0) {
        console.log(`The number ${num} is a Negative Number`);  
    }
    else
    {
      console.log(`The number ${num} is a Zero`);   
    }
}numberType(-7)
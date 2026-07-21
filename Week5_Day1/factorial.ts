function factorial(n:number) {
    if(n>0)  
     
    {
        let fact=1;
    for (let i = 1; i < n; i++)
    {
       fact= fact*i;  
        
    }
    console.log(`Factorial of ${n} is: ${fact}` );
    }
else if(n<0)
{
    console.log(`The number ${n} is a negative number`);
    
}
else
{
    console.log(`The number ${n} is a zero`);
    
}
    
}factorial(5)
factorial(0)
factorial(-3)
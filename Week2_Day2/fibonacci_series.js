function fibonacci(num) {
    let a=0;
    let b=1;
    console.log(a);
    console.log(b);
    let i=0;   
    while(i<=num) {
       let c=a+b;
       a=b;
       b=c;
       console.log(c);
       i++;     
    }
    
}fibonacci(25)

//Using for Loop
/* function fibonacci(num) {
    let a=0;
    let b=1;
    console.log(a);
    console.log(b);      
    for (let i = 0; i < num; i++)  {
       let c=a+b;
       a=b;
       b=c;
       console.log(c);     
    }
    
}fibonacci(25) */
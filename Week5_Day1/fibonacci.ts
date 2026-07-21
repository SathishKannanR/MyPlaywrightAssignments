function fibonacci(n:number) {
    if(n>0)
    {
        let n1=0;
        let n2=1;
        let fib;
        console.log(n1);
        console.log(n2);
        for (let i = 0; i < n; i++) {
            fib=n1+n2;
            n1=n2;
            n2=fib;
          console.log(fib);  
        }
              
    }
    
}fibonacci(5)
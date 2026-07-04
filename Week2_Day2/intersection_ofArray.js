function arrayIntersection(a,b) {
    let output=[];
    for (let i = 0; i <= a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if(a[i]===b[j])
            {
                output.push(a[i])
                break;
            }
            
        }
        
    }
let finalOutput= new Set(output)
return finalOutput;
    
}console.log(arrayIntersection(['3','1','2','1','5'],['5','3','7','8','1']));

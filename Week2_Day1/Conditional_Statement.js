function launchBrowser(browserName) {
    if (browserName==="Chrome") {
        console.log("This is a Chrome Browser");
        
    } else {
        console.log("This is a Edge Browser");
    }

    
}launchBrowser("Chrome")
function runTests(test) {
    switch (test) {
        case "Smoke":
            console.log('This is a smoke Testing');
            break;
        case "Sanity":
            console.log('This is a Sanity Testing');
            break;
        case "Exploratory":
            console.log('This is a Exploratory Testing');
            break;    
        default:
            console.log('This is a Regression Testing');
            break;
    }
    
}runTests("Exploratory")
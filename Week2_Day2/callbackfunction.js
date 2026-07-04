//Using Function Name
let browser="Chrome";
function checkBrowserVersion(num) {
setTimeout(()=>{num(browser)},2000)
    
}
function PrintbrowserVersion(BrowserVersion) {
    console.log(`The Browser version is: ${BrowserVersion}`);
    return checkBrowserVersion;
}
checkBrowserVersion(PrintbrowserVersion)
/*-------------------------------------------------------------------------------------------------*/
//Using Arrow Function
let browser1="Msedge";
const checkBrowserVersion1=(browserversion)=>{
setTimeout(()=>{browserversion(browser1)},2000)
}
const PrintBrwVer=(PrintBrowseVersion1)=>{console.log(`The Browser Version is: ${PrintBrowseVersion1}`);
}
checkBrowserVersion1(PrintBrwVer);

import { chromium, test } from "@playwright/test";
test("RedBus Automation",async()=>{
    const browser= await chromium.launch({headless:false})
    const context= await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.redbus.in");
    const Url=page.url()
    console.log('The url is:', Url);

    const Title=await page.title()
    console.log('The tiltle is:', Title);    
})
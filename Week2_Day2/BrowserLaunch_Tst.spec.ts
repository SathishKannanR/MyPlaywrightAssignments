import { chromium, test } from "@playwright/test";

test("To launch a browser", async () => {

const browserInstance = await chromium.launch({ headless: false, channel:
"msedge" });

const browserContext = await browserInstance.newContext();

const page = await browserContext.newPage();

await page.goto("https://login.salesforce.com/?locale=in");

const url=page.url()
console.log(url);

const title=await page.title()
console.log(title);

});
/**
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */
module.exports = async (browser, context) => {
    // launch browser for LHCI
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    const baseurl = "https://www.totaljobs.com";
    const authurl = `${baseurl}/account/signin`;
    const membersAreaUrl = `${baseurl}/membersarea`;
    const email = "lighthouse@example.com";
    const data2 = "ExamplePassword1";
    await page.goto(authurl);

    const cookies = [
        {
            name: "CONSENTMGR",
            value: "consent:true",
        },
    ];

    await page.setCookie(...cookies);
    await page.goto(authurl);

    const emailInput = await page.$('input[id="Form_Email"]');
    const data2Input = await page.$('input[id="Form_Password"]');
    await emailInput.type(email);
    await data2Input.type(data2);

    const checkboxInput = await page.$('input[id="Form_RememberMe"]');
    await checkboxInput.click();

    await page.screenshot({ path: "before_submit.png", fullPage: true });

    await Promise.all([page.click('input[id="btnLogin"]'), page.waitForNavigation()]);

    await page.screenshot({ path: "after_submit.png", fullPage: true });

    await page.goto(membersAreaUrl);

    await page.screenshot({ path: "after_members_area_load.png", fullPage: true });

    await page.waitForFunction('document.querySelector("body").innerText.includes("Here is your job search at a glance")');

    // close session for next run
    await page.close();
};

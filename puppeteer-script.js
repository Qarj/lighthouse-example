/**
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */
module.exports = async (browser, context) => {
  // launch browser for LHCI
  const page = await browser.newPage();
  const url = "https://www.totaljobs.com/account/signin";
  const email = "lighthouse@example.com";
  const data2 = "ExamplePassword1";
  await page.goto(url);

  const cookies = [
    {
      name: "CONSENTMGR",
      value:
        "c1:1%7Cc2:1%7Cc3:1%7Cc4:1%7Cc5:0%7Cc6:1%7Cc7:1%7Cc8:0%7Cc9:1%7Cc10:0%7Cc11:0%7Cc12:1%7Cc13:1%7Cc14:0%7Cc15:0%7Cts:1648382863749%7Cconsent:true",
    },
    {
      name: "anotherCookie",
      value: "anotherValue",
    },
  ];

  await page.setCookie(...cookies);
  await page.goto(url);

  //   await page.type("#Form_Email", "lighthouse@example.com");
  //   await page.type("#Form_Password", "ExamplePassword1");

  const emailInput = await page.$('input[id="Form_Email"]');
  const data2Input = await page.$('input[id="Form_Password"]');
  await emailInput.type(email);
  await data2Input.type(data2);

  await Promise.all([
    page.click('input[id="btnLogin"]'),
    page.waitForNavigation(),
  ]);

  // close session for next run
  await page.close();
};

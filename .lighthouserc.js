module.exports = {
  ci: {
    collect: {
      puppeteerScript: "puppeteer-script-alt.js",
      puppeteerLaunchOptions: {
        defaultViewport: { width: 1920, height: 1080 },
        dumpio: true,
        slowMo: 100,
      },
      settings: {
        extraHeaders: {
          DudCookie:
            "CONSENTMGR=c1:1%7Cc2:1%7Cc3:1%7Cc4:1%7Cc5:0%7Cc6:1%7Cc7:1%7Cc8:0%7Cc9:1%7Cc10:0%7Cc11:0%7Cc12:1%7Cc13:1%7Cc14:0%7Cc15:0%7Cts:1648382863749%7Cconsent:true",
        },
        disableStorageReset: true,
      },
    },
  },
};

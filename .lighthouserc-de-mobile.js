module.exports = {
    ci: {
        collect: {
            puppeteerScript: "puppeteer-de-sub.js",
            puppeteerLaunchOptions: {
                defaultViewport: { width: 1920, height: 1080 },
                dumpio: true,
                slowMo: 100,
            },
            settings: {
                extraHeaders: {
                    myHeader: "lighthouseCi=true",
                },
                disableStorageReset: true,
            },
        },
    },
};

module.exports = {
    ci: {
        collect: {
            puppeteerScript: "puppeteer-totaljobs.js",
            puppeteerLaunchOptions: {
                defaultViewport: { width: 1920, height: 1080 },
                dumpio: true,
                slowMo: 100,
            },
            psiStrategy: "mobile",
            settings: {
                extraHeaders: {
                    myHeader: "lighthouseCi=true",
                },
                disableStorageReset: true,
            },
        },
    },
};

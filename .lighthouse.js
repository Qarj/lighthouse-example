module.exports = {
  ci: {
    collect: {
      settings: {
        extraHeaders: JSON.stringify({ Cookie: "CONSENTMGR=consent:true" }),
      },
    },
  },
};

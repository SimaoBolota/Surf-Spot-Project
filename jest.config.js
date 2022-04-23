const config = {
    verbose: true,
    "preset": "jest-puppeteer"
  };
  
  module.exports = config;
  
  // Or async function
  module.exports = async () => {
    return {
      verbose: true,
      "preset": "jest-puppeteer"
    };
  };
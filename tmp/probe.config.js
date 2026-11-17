const base = require('../playwright.config.js');
module.exports = { ...base, testDir: __dirname, testMatch: 'probe.spec.js', reporter: 'list' };

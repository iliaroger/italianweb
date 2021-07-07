module.exports = {
  i18n: {
    locales: ['en-GB'],
    defaultLocale: 'en-GB',
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});

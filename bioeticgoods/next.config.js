module.exports = {
  i18n: {
    locales: ['en_GB'],
    defaultLocale: 'en_GB',
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});

const buildValidations = require('./build-utils/build-validations');
const commonConfig = require('./build-utils/webpack.common');
const argv = require('webpack-nano/argv');
const { merge } = require('webpack-merge');
// We can include Webpack plugins, through addons, that do
// not need to run every time we are developing.
// We will see an example when we set up 'Bundle Analyzer'
const addons = (/* string | string[] */ addonsArg) => {
    let addons = Array.isArray(addonsArg)
        ? addonsArg.filter((item) => item !== true)
        : [addonsArg].filter(Boolean);
    return addons.map((addonName) =>
        require(`./build-utils/addons/webpack.${addonName}.js`)
    );
};
module.exports = () => {
    // This is where we read the custom flag rom 'scripts'
    // section in 'package.json'.
    const { env, addons: addonsArg } = argv;
    if (!env) {
        throw new Error(buildValidations.ERR_NO_ENV_FLAG);
    }
    // Select which Webpack configuration to use; development
    // or production
    const envConfig = require(`./build-utils/webpack.${env}.js`);
    // 'webpack-merge' will combine our shared configurations, the
    // environment specific configurations and any addons we are
    // including
    const mergedConfig = merge(commonConfig, envConfig, ...addons(addonsArg));
    return mergedConfig;
};
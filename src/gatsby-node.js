exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
    const config = getConfig();

    // Let Webpack know how to resolve the modern exports map
    config.resolve.conditionNames = ['import', 'require', 'module', 'browser'];

    actions.replaceWebpackConfig(config);
};

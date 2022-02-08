/* eslint-disable */
const { ExtendLocalIntercept } = require('@larsroettig/component-targetables');

function localIntercept(targets) {
    const { Targetables } = require('@magento/pwa-buildpack');
    const targetables = Targetables.using(targets);

    const extendLocalIntercept = new ExtendLocalIntercept(targetables);

    const customSearchPaths = [
        'core-overrides/components',
        'core-overrides/RootComponents'
    ];
    extendLocalIntercept.allowCustomTargetables(
        '*.targetables.js',
        customSearchPaths
    );
    extendLocalIntercept.allowCssOverwrites(
        '*.module.css',
        customSearchPaths
    );
}

module.exports = localIntercept;

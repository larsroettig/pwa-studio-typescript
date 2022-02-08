/**
 * @param {*} ProductFullDetail
 * @see @magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js
 */
const interceptComponent = ProductFullDetail => {
    const UpSellItems = ProductFullDetail.addImport(
        "UpSellItems from 'src/components/UpSellItems'"
    );

    ProductFullDetail.insertAfterJSX(
        '<Form/>',
        `<${UpSellItems} product={ product } />`
    );
};

exports.interceptComponent = interceptComponent;

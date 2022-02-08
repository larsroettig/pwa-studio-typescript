const dotenv = require('dotenv');
dotenv.config();
const origin = process.env.MAGENTO_BACKEND_URL;

module.exports = {
    client: {
        service: {
            name: 'project-name-pwa',
            url: origin.concat('graphql'),
            headers: {
                'Content-Type': 'application/json'
            },
            skipSSLValidation: true
        },
        includes: ['./src/talons/**/*.gql.ts']
    }
};

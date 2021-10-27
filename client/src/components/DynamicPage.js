import React from 'react';
import Layout from './Layout';

const DynamicPage = () => {
    return (
        <Layout>
            {/* <Header as="h2">Dynamic Page</Header> */}
            <p>This page was loaded asynchronously!!!</p>
        </Layout>
    )
};

export default DynamicPage;
import React, { useEffect } from 'react';
import Layout from './Layout';

const Finalpayment = () => {
    useEffect(() => {

    }, [])
    const a = new URLSearchParams(window.location.search);
    return (
        <Layout>
            {/* <Header as="h2">Dynamic Page</Header> */}
            <p>{a.get('redirect_status')}</p>
        </Layout>
    )
};

export default Finalpayment
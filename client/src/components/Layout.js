import React from 'react';
import { Head } from './Header';


const Layout = ({ children }) => {
    return (
        <div>
            <Head />
            {children}
        </div>
    );
};
export default Layout;
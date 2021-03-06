import React from 'react';
import { Spinner } from 'react-bootstrap';
// import { ReactDelayRender } from 'react-delay-render';

const Loading = () => {
    return <div style={{ display: "flex", alignItems: "center", width: "100%", height: "100%", justifyContent: "center" }}><Spinner animation="border" /></div>
};

export default Loading
// ReactDelayRender({ delay: 300 })(Loading);
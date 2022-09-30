import './loading.scss';
import React from 'react';
import { Spinner } from 'react-bootstrap';

function Loading() {
    return (
        <div className="isLoading">
            <Spinner className="spinner" animation="border" />
        </div>
    );
}

export default Loading;

import React from 'react'
import loadingGif from '../img/gif/loading-arrow.gif'

export const Loading = () => {
    return (

        <div className="loading">
            <h4>Loading data..</h4>
            <img src={loadingGif} alt="loading arrow" />
        </div>
    )
}

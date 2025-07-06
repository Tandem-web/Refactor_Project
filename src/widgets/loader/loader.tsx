import React from 'react'
import './loader.scss'

interface  LoaderProps {

}

const Loader:React.FC<LoaderProps> = () => {
    return (
        <>
            <div className='loader-container'>
                <span className="loader"></span>
            </div>
        </>
    )
}

export default Loader
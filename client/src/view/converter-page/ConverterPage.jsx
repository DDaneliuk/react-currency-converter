import React from 'react'
// components
import ConverterForm from "../../components/converter-form/ConverterForm";

const ConverterPage = () => {
    return (
        <div className="pageWrapper">
             <div className="heading">
                 <h1>Converter</h1>
             </div>
            <div>
                <ConverterForm/>
            </div>
        </div>

    )
}

export default ConverterPage

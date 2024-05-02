import React from 'react'

const ImportListClients = () => {
    return (
        <>
            <div className=''>
                <label htmlFor="">Import your CSV file </label> <br />
                <input type="file" name="" id="" />
                <button className=' align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#3C5B6F] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'>
                    Import
                </button>
            </div>
            <div>
                
            </div>
        </>
    )
}

export default ImportListClients

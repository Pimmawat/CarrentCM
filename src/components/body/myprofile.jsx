import React from 'react'

function Myprofile({ data }) {
    return (
        <div>
            <p> I from My frofile componant</p>
            <p>Myname : {data.fname}</p>
            <p>Lastname : {data.lname}</p>
            <div className='avatar'>
                <div className='w-24 mask mask-hexagon'>
                    <img src={data.img} width="150" height="150" alt={data.fisrtname} />
                </div>
            </div>
        </div>
    )
}

export default Myprofile
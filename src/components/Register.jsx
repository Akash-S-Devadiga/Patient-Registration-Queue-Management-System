import React, { useContext } from 'react'
import { DataContext } from '../context/Datacontext'
const Register = () => {

        const {value1, setvalue1, value2, setvalue2, total, settotal}=useContext(DataContext)
   
    const submithandler = (e) => {
        e.preventDefault();
        if(value1.trim()===""||value2.trim()==="")
        {
            alert("Please fill all the fields")
            return
        }
     const tottall={
        name:value1,
        Phone:value2
     }
     settotal(prev=>[...prev,tottall])
        setvalue1("")
        setvalue2("")
        console.log(total)
    }

    return (
        <div className="main flex">
            <div className='flex flex-col gap-2 '>
                <form className='flex flex-col gap-10 m-6 text-3xl' onSubmit={submithandler}>
                    <div>
                        <label>Patient Name : </label>
                        <input
                              value={value1}
                                onChange={(e)=>{setvalue1(e.target.value)}}
                            className='border-2 border-black' type="text" placeholder='Enter Patient Name'></input>
                    </div>
                    <div>
                        <label>Phone Number : </label>
                        <input
                                value={value2}
                                onChange={(e)=>{setvalue2(e.target.value)}}
                            className='border-2 border-black' type="text" placeholder='Enter Phone Number'></input>
                    </div>
                    <button className='border-2 border-black bg-teal-400 hover:bg-teal-500'>Register</button>
                </form>
            </div>


            <div className="display flex flex-col gap-10 m-10 p-5 text-3xl w-200">
             {total.map((data,idx)=>{
                return <div key={idx} className='border-2 border-black p-4'>
                     <p><strong>Queue Number:</strong> {idx+1}</p>
                    <p><strong>Name:</strong> {data.name}</p>
                    <p><strong>Phone:</strong> {data.Phone}</p>
                </div>
             })}

            </div>
        </div>
    )
}

export default Register

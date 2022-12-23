import axios from 'axios';
import React, { useRef } from 'react'

const Verify = () => {
   const tokenRef = useRef('')

    const handleSubmit = async (e) => {
      e.preventDefault()
        try {
            
            const data = { token: tokenRef.current.value };
            const resp = await axios.post('http://localhost:8081/api/v1/users/verify', {
                verifyData: data
            })
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
      

    
  }
  return (
    <div>
      <form
        action=""
        className="w-2/5 m-auto p-8 shadow-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full border outline-none mb-2 text-lg pl-2"
          placeholder="Token"
          ref={tokenRef}
        />
       
        <button className="bg-gray-900 text-white px-3">Verify</button>
      </form>
    </div>)
}

export default Verify
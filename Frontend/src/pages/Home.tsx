import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate=useNavigate();
  const [roomname,setRoomname]=useState("");

   function handleclick(){
    if(roomname.trim()!=""){
     navigate(`/room/${roomname}`)
     setRoomname("");
    }
    
   }
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="border-2 border-gray-500 p-2 h-59 w-2xl bg#242424 rounded-lg shadow-md">
        <p className="">
          <div className="flex ">
            <div >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          </div>
          <div className="ml-3 text-xl pb-1 press-start-2p-regular">
          Real Time Chat
          </div>
          </div>
          <div>
          <p className="text-xs press-start-2p-regular">temorary room that expires after both users exit</p>
          </div>
          <div>
          <button type="button" className="text-black text- mt-5  mb-5 w-full bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 "> Create New Room</button>
          </div>
          <div className="flex">
            <div>
              <input onKeyDown={(e)=>{
              if(e.key=="Enter"){
                handleclick()
              }
            }} onChange={(a)=>setRoomname(a.target.value)} value={roomname} type="text" placeholder="Enter Room Code" className="border h-10 w-lg"></input>
              
            </div>
            <div>
            <button  onClick={handleclick} type="button" className="text-black  cursor-pointer ml-2 w-30 bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 "> Join Room</button>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Home;

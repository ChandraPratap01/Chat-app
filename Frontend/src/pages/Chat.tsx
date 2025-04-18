import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { id } = useParams();
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const [message, setmessage] = useState("");
  const [response, setresponse] = useState<string[]>([]);
  const wsref = useRef<WebSocket | null>(null);
  useEffect(() => {
    const ws = new WebSocket("http://localhost:8080");
    ws.onmessage = (event) => {
      setresponse((m) => [...m, event.data]);
    };
    ws.onerror = (e) => {
      console.log(e);
    };
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: id,
          },
        })
      );
    };
    wsref.current = ws;
    return () => {
      ws.close();
    };
  }, [id]);
  useEffect(()=>{
    bottomRef.current?.scrollIntoView({behavior:"smooth"})
  },[response])
  return (
    <div className="   flex-col *:  ml-50 mr-50 mt-5 min-h-screen ">
      <div className="h-[85vh] mb-2 overflow-x-hidden px-4">
        {response.map((x) => (
          <div className="flex mb-2 w-fit  max-w-[80%] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm   font-semibold text-gray-900 dark:text-white break-all">
                 {x}
                </span>
              </div>
              <p className="text-sm font-normal py- text-gray-900 dark:text-white"></p>
            </div>
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>

      <div className=" w-full flex px-2 ">
        <input
          onChange={(e) => setmessage(e.target.value)}
          value={message}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              if (wsref.current == null) return;
              if (message == "") return;
              wsref.current.send(
                JSON.stringify({
                  type: "chat",
                  payload: {
                    message: message,
                  },
                })
              );
              setmessage("");
            }
          }}
          placeholder=" Write Your Chat"
          className=" focus:outline-none border-2 w-full block  p-4 text-gray-900   rounded-lg  text-base dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
        ></input>

        <button
          onClick={() => {
            if (wsref.current == null) return;
            if (message == "") return;
            wsref.current.send(
              JSON.stringify({
                type: "chat",
                payload: {
                  message: message,
                },
              })
            );
            setmessage("");
          }}
          className="border-2 rounded-lg w-30 cursor-pointer  dark:border-gray-600"
        >
          Send
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Chat;

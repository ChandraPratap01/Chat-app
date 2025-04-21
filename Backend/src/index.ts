import { WebSocketServer, WebSocket } from "ws";
const PORT=process.env.PORT || 8080;
const wss = new WebSocketServer({ port: Number(PORT) });
interface alluser {
  socket: WebSocket;
  roomId: string;
}
const users: alluser[] = [];
wss.on("connection", (socket) => {
  console.log("user connected");
  socket.on("error", console.error);
  socket.on("message", (message) => {
   // @ts-ignore
    const parsemessage=JSON.parse(message)
    if(parsemessage.type=="join"){
      users.push({
        socket,
        roomId:parsemessage.payload.roomId        
      })
    }
    if(parsemessage.type=="chat"){
      const CurrRoom=users.find((x)=>x.socket===socket)?.roomId
      if(!CurrRoom)return
      const SendAll=users.filter((x)=>x.roomId===CurrRoom)
      SendAll.forEach((user)=>{
        user.socket.send(JSON.stringify({
          message:parsemessage.payload.message,
          sender:user.socket===socket?"you":"them"
        }))
      })
    }
  })
  socket.on("close",()=>{
    const curruser=users.findIndex((x)=>x.socket===socket)
    if(curruser==-1)return 
    users.splice(curruser,1);
    console.log("user left")
   })
  socket.send(JSON.stringify({
    message:"Welcome to the chat room!",
    sender:"server"
}))
})
import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });
interface alluser {
  socket: WebSocket;
  roomId: string;
}
const users: alluser[] = [];
wss.on("connection", (socket) => {
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
      const CurrRoom=users.find((x)=>x.socket==socket)?.roomId
      const SendAll=users.filter((x)=>x.roomId==CurrRoom)
      SendAll.forEach((user)=>{
        user.socket.send(parsemessage.payload.message)
      })
    }
  })
  // socket.on("close",()=>{
  //   const CurrRoom=users.find((x)=>x.socket==socket)?.roomId
  //   const index=users.findIndex((x)=>x.socket==socket)          
  //   users.splice(index,1)
  //   const SendAll=users.filter((x)=>x.roomId==CurrRoom)

  //   SendAll.forEach((user)=>{
  //     user.socket.send(JSON.stringify({
  //       type:"leave",
  //       payload:{
  //         message:"user left"
  //       }
  //     }))
  //   })  

  //  })
});

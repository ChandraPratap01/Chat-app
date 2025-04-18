"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
const users = [];
wss.on("connection", (socket) => {
    socket.on("error", console.error);
    socket.on("message", (message) => {
        var _a;
        // @ts-ignore
        const parsemessage = JSON.parse(message);
        if (parsemessage.type == "join") {
            users.push({
                socket,
                roomId: parsemessage.payload.roomId
            });
        }
        if (parsemessage.type == "chat") {
            const CurrRoom = (_a = users.find((x) => x.socket == socket)) === null || _a === void 0 ? void 0 : _a.roomId;
            const SendAll = users.filter((x) => x.roomId == CurrRoom);
            SendAll.forEach((user) => {
                user.socket.send(parsemessage.payload.message);
            });
        }
    });
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
const users = [];
wss.on("connection", (socket) => {
    console.log("user connected");
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
            const CurrRoom = (_a = users.find((x) => x.socket === socket)) === null || _a === void 0 ? void 0 : _a.roomId;
            const SendAll = users.filter((x) => x.roomId === CurrRoom);
            SendAll.forEach((user) => {
                user.socket.send(parsemessage.payload.message);
            });
        }
    });
    socket.on("close", () => {
        const curruser = users.findIndex((x) => x.socket === socket);
        if (curruser == -1)
            return;
        users.splice(curruser, 1);
        console.log("user left");
    });
    socket.send("Welcome to the chat room!");
});

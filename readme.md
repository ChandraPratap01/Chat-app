# Chat App

This is a real-time chat application where users can create rooms, join rooms, and chat with others in the same room. The room is automatically deleted when no users are present in it. The application is built using React, TypeScript, WebSocket, and Node.js.

## Features
- Create chat rooms.
- Join existing chat rooms.
- Real-time messaging using WebSocket.
- Automatic deletion of empty rooms.

## Project Structure
The project is divided into two main folders:

- **Frontend**: Contains the React-based client-side code.
- **Backend**: Contains the Node.js server-side code.

### Folder Structure
```
Chat_App/
├── Backend/
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│       ├── index.ts
│       ├── index.js
├── Frontend/
│   ├── package.json
│   ├── vite.config.ts
│   ├── src/
│       ├── App.tsx
│       ├── pages/
│           ├── Chat.tsx
│           ├── Home.tsx
```

## Technologies Used
- **Frontend**:
  - React
  - TypeScript
  - Vite

- **Backend**:
  - Node.js
  - TypeScript
  - WebSocket

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn

## Getting Started

### 1. Clone the Repository
```bash
git clone <https://github.com/ChandraPratap01/Chat-app.git>
cd Chat_App
```

### 2. Install Dependencies
#### Frontend
```bash
cd Frontend
npm install
```

#### Backend
```bash
cd Backend
npm install
```

### 3. Run the Application
#### Start the Backend Server
```bash
cd Backend
npm run start
```

#### Start the Frontend
```bash
cd Frontend
npm run dev
```

### 4. Open the Application
Visit `http://localhost:5173/` in your browser to use the chat app.

## Scripts
### Frontend
- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run lint`: Lint the code.

### Backend
- `npm run start`: Start the server.
- `npm run build`: Build the TypeScript code.
- `npm run dev`: Start the server in development mode.

## 📸 Screenshot

### 🏠 Home Page
![Home Page](/assets/Screenshot%202025-04-19%20145342.png)

---

### 💬 Chat Room Name
![Chat Room Name](/assets/Screenshot%202025-04-19%20145807.png)

---

### 💬 Chat Room
![Chat Room](/assets/Screenshot%202025-04-19%20145826.png)

### 🤝 Author
Made with ❤️ Chandra


## License
This project is licensed under the MIT License.
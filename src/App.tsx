import AppSidebar from "./features/sidebar/app-sidebar"
import ChatPanel from "./features/chat/chat-panel"
import RoomDetailsPanel from "./features/room/room-details-panel"

export function App() {
  return (
    <div className="flex min-h-svh">
      <AppSidebar />
      <ChatPanel />
      <RoomDetailsPanel />
    </div>
  )
}

export default App

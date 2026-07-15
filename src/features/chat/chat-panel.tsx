function ChatPanel() {
  return (
    <div className="flex flex-col flex-1 bg-white border-r border-layout">
      {/* Header */}
      <div className="flex w-full h-16 bg-white border-b border-layout p-4">
        <div className="flex w-full h-full bg-red-100" role="chat-title" />
        <div className="flex w-full h-full bg-blue-100" role="chat-context-menu" />
      </div>
      {/* Body */}
      <div className="flex flex-col w-full flex-1 p-4" role="chat-body">
        <div className="flex w-full h-full bg-green-100" role="chat-messages" />
        <div className="flex w-full h-20 bg-yellow-100" role="chat-input-bar" />
      </div>
    </div>
  )
}

export default ChatPanel
function AppSidebar() {
  return (
    <div className="min-w-side-panel bg-white border-r border-layout flex flex-col">
      {/* Header */}
      <div className="flex w-full h-16 bg-white border-b border-layout justify-between items-center align-middle p-4">
        <div className="flex  w-full h-full">
          <div className="flex w-10 h-full bg-red-100" role="user-avatar" />
          <div className="flex w-full h-full bg-blue-100" role="user-name" />
        </div>
        <div className="flex w-10 h-full bg-green-100" role="user-edit-button" />
      </div>
      {/* Body */}
      <div className="flex flex-col w-full flex-1 p-4" role="sidebar-body">
        <div className="flex w-full h-20 bg-yellow-100" role="search-bar" />
        <div className="flex w-full h-128 bg-purple-100" role="sidebar-items" />
        <div className="flex flex-col w-full h-full" role="chat-room-list">
          <div className="flex w-full h-10 bg-orange-100"/>
          <div className="flex w-full flex-1 bg-orange-200"/>
        </div>
      </div>
    </div>
  )
}

export default AppSidebar
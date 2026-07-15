function RoomDetailsPanel() {
  return (
    <div className="min-w-side-panel bg-white flex flex-col">
      {/* Header */}
      <div className="flex w-full h-16 bg-white border-b border-layout p-4">
      <div className="flex w-full h-full bg-red-100" role="room-title" />
      <div className="flex w-full h-full bg-blue-100" role="room-context-menu" />
      </div>
      {/* Body */}
      <div className="flex flex-col w-full flex-1 p-4" role="room-details-body">
        <div className="flex w-full h-60 bg-green-100" role="room-details-info" />
        <div className="flex w-full h-60 bg-blue-100" role="room-details-context-menu" />
        <div className="flex w-full flex-1 bg-purple-100" role="room-details-members" />
      </div>
    </div>
  )
}

export default RoomDetailsPanel
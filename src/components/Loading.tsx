import React from 'react'

function Loading() {
 return (
  <div className="fixed h-screen inset-0 flex items-center justify-center bg-black/60">
   <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" />
  </div>
 )
}

export default Loading

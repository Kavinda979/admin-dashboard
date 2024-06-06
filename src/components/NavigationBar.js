import React from 'react'

function NavigationBar() {
  return (
    <div>
        <nav class="bg-white shadow-md fixed w-full h-20" style="width: 1168px; height: 80px; left: 272px;">
    <div class="max-w-screen-lg mx-auto px-4 flex justify-between items-center h-full">
      <div class="text-xl font-bold">
        Dashboard
      </div>
      <div class="flex items-center space-x-4">
        <div>
          <img src="path/to/bell-icon.png" alt="Bell Icon" class="w-6 h-6" />
        </div>
        <div>
          <img src="path/to/ellipse-photo.png" alt="User Photo" class="w-8 h-8 rounded-full" />
        </div>
        <div>
          <img src="path/to/dropdown-icon.png" alt="Dropdown Icon" class="w-6 h-6" />
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default NavigationBar
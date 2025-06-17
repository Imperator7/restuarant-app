'use client'
import sampleMenu from '@/data/sampleMenu'

export default function Menu() {
  const menuItems = sampleMenu

  return (
    <div>
      <h1>Menu Page</h1>
      <p>This is the menu page of the application.</p>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

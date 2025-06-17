import { MenuItem } from '@/types'

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="menu-card">
      <h2>{item.name}</h2>
      {item.price && <p>Price: ${item.price.toFixed(2)}</p>}
    </div>
  )
}

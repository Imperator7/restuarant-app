type MenuItem = {
  id: number
  name: string
  price?: number
}

type Menu = {
  item: MenuItem
}

export type { Menu, MenuItem }

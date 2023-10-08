import { IItem } from '@/models/item'

export interface IGildedRose {
  items: Array<IItem>
  updateQuality(): void
}

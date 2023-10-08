import { IGildedRose } from '@/models'
import { IItemQualityCalculator } from '@/services'

export class GildedRose implements IGildedRose {
  items: Array<IItemQualityCalculator>

  constructor(items = [] as Array<IItemQualityCalculator>) {
    this.items = items
  }

  updateQuality(): void {
    this.items.forEach(item => item.updateQuality())
  }
}

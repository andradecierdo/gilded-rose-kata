export interface IItem {
  name: string
  sellIn: number
  quality: number
}

export class Item implements IItem {
  name: string
  sellIn: number
  quality: number

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

export interface IGildedRose {
  items: Array<Item>
  updateQuality(): void
}

export class GildedRose implements IGildedRose {
  items: Array<Item>

  constructor(items = [] as Array<Item>) {
    this.items = items
  }

  updateQuality(): void {
    this.items.forEach(item => {
      if (item.name !== 'Sulfuras, Hand of Ragnaros') {
        item.sellIn--

        switch (item.name) {
          case 'Aged Brie':
            const addition = item.sellIn < 0 ? 2 : 1
            item.quality = (item.quality + addition) > 50 ? 50 : item.quality + addition
            break
          case 'Backstage passes to a TAFKAL80ETC concert':
            if (item.sellIn < 0) {
              item.quality = 0
            } else if (item.quality < 50) {
              const addition = item.sellIn < 5 ? 3 : item.sellIn < 10 ? 2 : 1
              let newQuality = item.quality + addition
              item.quality = newQuality > 50 ? 50 : newQuality
            }
            break
          case 'Conjured Mana Cake':
            const deduction = item.sellIn < 0 ? -4 : -2
            item.quality = (item.quality + deduction) < 0 ? 0 : item.quality + deduction
            break
          default:
            // Normal items
            const deduct = item.sellIn < 0 ? -2 : -1
            item.quality = (item.quality + deduct) < 0 ? 0 : item.quality + deduct
        }
      }
    })
  }
}

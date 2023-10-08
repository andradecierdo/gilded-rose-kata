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

enum Enum {
  Sulfuras = 'Sulfuras, Hand of Ragnaros',
  AgedBrie = 'Aged Brie',
  BackStagePassess = 'Backstage passes to a TAFKAL80ETC concert',
  ConjuredManaCake = 'Conjured Mana Cake',
}

export class GildedRose implements IGildedRose {
  items: Array<Item>

  constructor(items = [] as Array<Item>) {
    this.items = items
  }

  updateQuality(): void {
    this.items.forEach(item => {
      if (item.name !== Enum.Sulfuras) {
        item.sellIn--

        switch (item.name) {
          case Enum.AgedBrie:
            GildedRose.updateAgedBrieItem(item)
            break
          case Enum.BackStagePassess:
            GildedRose.updateBackStagePassesItem(item)
            break
          case Enum.ConjuredManaCake:
            GildedRose.updateConjuredManaCakeItem(item)
            break
          default:
            GildedRose.updateRegularItem(item)
        }
      }
    })
  }

  private static updateAgedBrieItem(item: IItem): void {
    const addition = item.sellIn < 0 ? 2 : 1
    item.quality = (item.quality + addition) > 50 ? 50 : item.quality + addition
  }

  private static updateBackStagePassesItem(item: IItem): void {
    if (item.sellIn < 0) {
      item.quality = 0
    } else if (item.quality < 50) {
      const addition = item.sellIn < 5 ? 3 : item.sellIn < 10 ? 2 : 1
      let newQuality = item.quality + addition
      item.quality = newQuality > 50 ? 50 : newQuality
    }
  }

  private static updateConjuredManaCakeItem(item: IItem): void {
    const deduction = item.sellIn < 0 ? -4 : -2
    const newQuality = item.quality + deduction
    item.quality = newQuality < 0 ? 0 : newQuality
  }

  private static updateRegularItem(item: IItem): void {
    const deduction = item.sellIn < 0 ? -2 : -1
    const newQuality = item.quality + deduction
    item.quality = newQuality < 0 ? 0 : newQuality
  }
}

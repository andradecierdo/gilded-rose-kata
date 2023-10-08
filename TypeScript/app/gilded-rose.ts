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
  maxQuality = 50
  minQuality = 0

  constructor(items = [] as Array<Item>) {
    this.items = items
  }

  updateQuality(): void {
    this.items.forEach(item => {
      if (item.name !== Enum.Sulfuras) {
        item.sellIn--

        switch (item.name) {
          case Enum.AgedBrie:
            this.updateAgedBrieItem(item)
            break
          case Enum.BackStagePassess:
            this.updateBackStagePassesItem(item)
            break
          case Enum.ConjuredManaCake:
            this.updateConjuredManaCakeItem(item)
            break
          default:
            this.updateRegularItem(item)
        }
      }
    })
  }

  private updateAgedBrieItem(item: IItem): void {
    const addition = item.sellIn < 0 ? 2 : 1
    item.quality = this.increaseQuality(item.quality, addition)
  }

  private updateBackStagePassesItem(item: IItem): void {
    if (item.sellIn < 0) {
      item.quality = 0
    } else if (item.quality < this.maxQuality) {
      const addition = item.sellIn < 5 ? 3 : item.sellIn < 10 ? 2 : 1
      item.quality = this.increaseQuality(item.quality, addition)
    }
  }

  private updateConjuredManaCakeItem(item: IItem): void {
    const deduction = item.sellIn < 0 ? -4 : -2
    item.quality = this.decreaseQuality(item.quality, deduction)
  }

  private updateRegularItem(item: IItem): void {
    const deduction = item.sellIn < 0 ? -2 : -1
    item.quality = this.decreaseQuality(item.quality, deduction)
  }

  private decreaseQuality(quality: number, deduction: number): number {
    const newQuality = quality + deduction
    return newQuality < this.minQuality ? this.minQuality : newQuality
  }

  private increaseQuality(quality: number, addition: number): number {
    const newQuality = quality + addition
    return newQuality > this.maxQuality ? this.maxQuality : newQuality
  }
}

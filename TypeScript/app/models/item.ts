export enum ItemName {
  Sulfuras = 'Sulfuras, Hand of Ragnaros',
  AgedBrie = 'Aged Brie',
  BackStagePassess = 'Backstage passes to a TAFKAL80ETC concert',
  ConjuredManaCake = 'Conjured Mana Cake',
}

export interface IItem {
  name: string
  sellIn: number
  quality: number
}

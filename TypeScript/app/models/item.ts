export enum ItemType {
  Sulfuras,
  AgedBrie,
  BackStagePassess,
  ConjuredManaCake,
  RegularItem,
}

export interface IItem {
  name: string
  sellIn: number
  quality: number
  type: ItemType
}

export class Item implements IItem {
  name: string
  sellIn: number
  quality: number
  type: ItemType

  constructor(name: string, sellIn: number, quality: number, type: ItemType) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
    this.type = type
  }
}

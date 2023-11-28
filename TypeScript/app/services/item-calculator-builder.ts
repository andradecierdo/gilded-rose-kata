import {
  AgedBrieItem,
  BackStagePassesItem,
  ConjuredManaCakeItem,
  IItemQualityCalculator,
  RegularItem,
  SulfurasItem,
} from '../services'
import { IItem, ItemType } from '../models'

export interface IItemCalculatorBuilder {
  getItemCalculator(item: IItem): IItemQualityCalculator
}

export class ItemCalculatorBuilder implements IItemCalculatorBuilder {
  getItemCalculator(item: IItem): IItemQualityCalculator {
    switch (item.type) {
      case ItemType.AgedBrie:
        return new AgedBrieItem(item)
      case ItemType.BackStagePassess:
        return new BackStagePassesItem(item)
      case ItemType.ConjuredManaCake:
        return new ConjuredManaCakeItem(item)
      case ItemType.Sulfuras:
        return new SulfurasItem(item)
      default:
        return new RegularItem(item)
    }
  }
}

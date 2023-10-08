import { Item } from '@/services/item'
import { IItem } from '@/models'

export interface IQualityManager {
  updateQuality(): void
}

export interface IItemQualityManager {
  updateItemSellIn(): void
  calculateQuality(): number
  calculateQualityAdjustment(): number
}

export interface IQualityLimiter {
  max: number
  min: number
  limit(quality: number): number
}

export interface IItemQualityCalculator extends IItem, IQualityManager {}

export abstract class ItemQualityManager extends Item implements IItemQualityCalculator, IItemQualityManager, IQualityLimiter {
  max = 50
  min = 0

  constructor(item: IItem) {
    super(item.name, item.sellIn, item.quality)
  }

  abstract calculateQualityAdjustment(): number

  limit(quality: number): number {
    if (quality < this.min) {
      return this.min
    }
    if (quality > this.max) {
      return this.max
    }
    return quality
  }

  updateItemSellIn(): void {
    this.sellIn--
  }

  calculateQuality(): number {
    return this.quality + this.calculateQualityAdjustment()
  }

  updateQuality(): void {
    this.updateItemSellIn()
    this.quality = this.limit(this.calculateQuality())
  }
}

export class RegularItem extends ItemQualityManager {
  calculateQualityAdjustment(): number {
    return this.sellIn < 0 ? -2 : -1
  }
}

export class ConjuredManaCakeItem extends RegularItem {
  calculateQualityAdjustment(): number {
    return super.calculateQualityAdjustment() * 2
  }
}

export class AgedBrieItem extends ItemQualityManager {
  calculateQualityAdjustment(): number {
    return this.sellIn < 0 ? 2 : 1
  }
}

export class BackStagePassesItem extends AgedBrieItem {
  calculateQualityAdjustment(): number {
    if (this.sellIn < 0) {
      return -this.quality // To make the quality equal to zero
    }
    if (this.sellIn < 5) {
      return 3
    }
    if (this.sellIn < 10) {
      return 2
    }
    return super.calculateQualityAdjustment()
  }
}

export class SulfurasItem extends Item implements IItemQualityCalculator {
  constructor(item: IItem) {
    super(item.name, item.sellIn, item.quality)
  }

  updateQuality(): void { } // Do nothing
}

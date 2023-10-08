import { IItemQualityCalculator, IQualityManager } from '@/services'

export interface IGildedRose extends IQualityManager {
  items: Array<IItemQualityCalculator>
}

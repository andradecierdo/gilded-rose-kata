import { IItemCalculatorBuilder, IQualityManager } from '../services'
import { IItem } from './'

export interface IGildedRose extends IQualityManager {
  items: IItem[]
  calculatorBuilder: IItemCalculatorBuilder
}

import { IItem, IGildedRose } from '../models'
import { IItemCalculatorBuilder, ItemCalculatorBuilder } from './'

export class GildedRose implements IGildedRose {
  items: IItem[]
  calculatorBuilder: IItemCalculatorBuilder

  constructor(items = [] as IItem[]) {
    this.items = items
    this.calculatorBuilder = new ItemCalculatorBuilder()
  }

  updateQuality(): void {
    this.items = this.items.map(item => {
      const itemCalculator = this.calculatorBuilder.getItemCalculator(item)
      itemCalculator.updateQuality()
      return itemCalculator
    })
  }
}

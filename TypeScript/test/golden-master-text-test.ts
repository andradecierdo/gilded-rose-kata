import { GildedRose } from '../app/services'
import { Item, ItemType } from '../app/models'

const items = [
  new Item("+5 Dexterity Vest", 10, 20, ItemType.RegularItem), //
  new Item("Aged Brie", 2, 0, ItemType.AgedBrie), //
  new Item("Elixir of the Mongoose", 5, 7, ItemType.RegularItem), //
  new Item("Sulfuras, Hand of Ragnaros", 0, 80, ItemType.Sulfuras), //
  new Item("Sulfuras, Hand of Ragnaros", -1, 80, ItemType.Sulfuras),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20, ItemType.BackStagePassess),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49, ItemType.BackStagePassess),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49, ItemType.BackStagePassess),
  new Item("Conjured Mana Cake", 3, 6, ItemType.ConjuredManaCake),
]

const gildedRose = new GildedRose(items)

let days: number = 2
if (process.argv.length > 2) {
  days = +process.argv[2]
}

for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------")
  console.log("name, sellIn, quality")
  gildedRose.items.forEach(element => {
    console.log(element.name + ' ' + element.sellIn + ' ' + element.quality)
  })
  console.log()
  gildedRose.updateQuality()
}

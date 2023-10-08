import {
  AgedBrieItem,
  BackStagePassesItem,
  ConjuredManaCakeItem,
  GildedRose,
  RegularItem,
  SulfurasItem
} from '@/services'

const items = [
  new RegularItem({ name: "+5 Dexterity Vest", sellIn: 10, quality: 20 }),
  new AgedBrieItem({ name: "Aged Brie", sellIn: 2, quality: 0 }),
  new RegularItem({ name: "Elixir of the Mongoose", sellIn: 5, quality: 7 }),
  new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 }),
  new SulfurasItem({ name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 }),
  new BackStagePassesItem({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 15, quality: 20 }),
  new BackStagePassesItem({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 49 }),
  new BackStagePassesItem({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 49 }),
  // this conjured item does not work properly yet
  new ConjuredManaCakeItem({ name: "Conjured Mana Cake", sellIn: 3, quality: 6 })
];

const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
    days = +process.argv[2];
  }

for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach(element => {
    console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);

  });
  console.log();
  gildedRose.updateQuality();
}

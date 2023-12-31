import { GildedRose } from '../../app/services'
import { Item, ItemType } from '../../app/models'

describe('Gilded Rose', () => {
  const items = [
    new Item("+5 Dexterity Vest", 10, 20, ItemType.RegularItem),
    new Item("Aged Brie", 2, 0, ItemType.AgedBrie),
    new Item("Sulfuras, Hand of Ragnaros", 0, 80, ItemType.Sulfuras),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20, ItemType.BackStagePassess),
    new Item("Conjured Mana Cake", 3,6, ItemType.ConjuredManaCake)
  ]
  const gildedRose = new GildedRose(items)

  it('should display initial values of the list of items', () => {

    expect(gildedRose.items[0].name).toBe('+5 Dexterity Vest')
    expect(gildedRose.items[0].sellIn).toBe(10)
    expect(gildedRose.items[0].quality).toBe(20)

    expect(gildedRose.items[1].name).toBe('Aged Brie')
    expect(gildedRose.items[1].sellIn).toBe(2)
    expect(gildedRose.items[1].quality).toBe(0)

    expect(gildedRose.items[2].name).toBe('Sulfuras, Hand of Ragnaros')
    expect(gildedRose.items[2].sellIn).toBe(0)
    expect(gildedRose.items[2].quality).toBe(80)

    expect(gildedRose.items[3].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(gildedRose.items[3].sellIn).toBe(15)
    expect(gildedRose.items[3].quality).toBe(20)

    expect(gildedRose.items[4].name).toBe('Conjured Mana Cake')
    expect(gildedRose.items[4].sellIn).toBe(3)
    expect(gildedRose.items[4].quality).toBe(6)
  })

  it('should update items quality and sellIn on 1st day', () => {
    gildedRose.updateQuality()

    expect(gildedRose.items[0].name).toBe('+5 Dexterity Vest')
    expect(gildedRose.items[0].sellIn).toBe(9)
    expect(gildedRose.items[0].quality).toBe(19)

    expect(gildedRose.items[1].name).toBe('Aged Brie')
    expect(gildedRose.items[1].sellIn).toBe(1)
    expect(gildedRose.items[1].quality).toBe(1)

    expect(gildedRose.items[2].name).toBe('Sulfuras, Hand of Ragnaros')
    expect(gildedRose.items[2].sellIn).toBe(0)
    expect(gildedRose.items[2].quality).toBe(80)

    expect(gildedRose.items[3].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(gildedRose.items[3].sellIn).toBe(14)
    expect(gildedRose.items[3].quality).toBe(21)

    expect(gildedRose.items[4].name).toBe('Conjured Mana Cake')
    expect(gildedRose.items[4].sellIn).toBe(2)
    expect(gildedRose.items[4].quality).toBe(4)
  })

  it('should update items quality and sellIn on 2nd day', () => {
    gildedRose.updateQuality()

    expect(gildedRose.items[0].name).toBe('+5 Dexterity Vest')
    expect(gildedRose.items[0].sellIn).toBe(8)
    expect(gildedRose.items[0].quality).toBe(18)

    expect(gildedRose.items[1].name).toBe('Aged Brie')
    expect(gildedRose.items[1].sellIn).toBe(0)
    expect(gildedRose.items[1].quality).toBe(2)


    expect(gildedRose.items[2].name).toBe('Sulfuras, Hand of Ragnaros')
    expect(gildedRose.items[2].sellIn).toBe(0)
    expect(gildedRose.items[2].quality).toBe(80)

    expect(gildedRose.items[3].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(gildedRose.items[3].sellIn).toBe(13)
    expect(gildedRose.items[3].quality).toBe(22)

    expect(gildedRose.items[4].name).toBe('Conjured Mana Cake')
    expect(gildedRose.items[4].sellIn).toBe(1)
    expect(gildedRose.items[4].quality).toBe(2)
  })

  it('should update items quality and sellIn on 3rd day', () => {
    gildedRose.updateQuality()

    expect(gildedRose.items[0].name).toBe('+5 Dexterity Vest')
    expect(gildedRose.items[0].sellIn).toBe(7)
    expect(gildedRose.items[0].quality).toBe(17)

    expect(gildedRose.items[1].name).toBe('Aged Brie')
    expect(gildedRose.items[1].sellIn).toBe(-1)
    expect(gildedRose.items[1].quality).toBe(4)

    expect(gildedRose.items[2].name).toBe('Sulfuras, Hand of Ragnaros')
    expect(gildedRose.items[2].sellIn).toBe(0)
    expect(gildedRose.items[2].quality).toBe(80)

    expect(gildedRose.items[3].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(gildedRose.items[3].sellIn).toBe(12)
    expect(gildedRose.items[3].quality).toBe(23)

    expect(gildedRose.items[4].name).toBe('Conjured Mana Cake')
    expect(gildedRose.items[4].sellIn).toBe(0)
    expect(gildedRose.items[4].quality).toBe(0)
  })

  it('should update items quality and sellIn on 4th day', () => {
    gildedRose.updateQuality()

    expect(gildedRose.items[0].name).toBe('+5 Dexterity Vest')
    expect(gildedRose.items[0].sellIn).toBe(6)
    expect(gildedRose.items[0].quality).toBe(16)

    expect(gildedRose.items[1].name).toBe('Aged Brie')
    expect(gildedRose.items[1].sellIn).toBe(-2)
    expect(gildedRose.items[1].quality).toBe(6)

    expect(gildedRose.items[2].name).toBe('Sulfuras, Hand of Ragnaros')
    expect(gildedRose.items[2].sellIn).toBe(0)
    expect(gildedRose.items[2].quality).toBe(80)

    expect(gildedRose.items[3].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(gildedRose.items[3].sellIn).toBe(11)
    expect(gildedRose.items[3].quality).toBe(24)

    expect(gildedRose.items[4].name).toBe('Conjured Mana Cake')
    expect(gildedRose.items[4].sellIn).toBe(-1)
    expect(gildedRose.items[4].quality).toBe(0)
  })

  it('should update items quality and sellIn on 5th day', () => {
    gildedRose.updateQuality()

    expect(gildedRose.items[0].name).toBe('+5 Dexterity Vest')
    expect(gildedRose.items[0].sellIn).toBe(5)
    expect(gildedRose.items[0].quality).toBe(15)

    expect(gildedRose.items[1].name).toBe('Aged Brie')
    expect(gildedRose.items[1].sellIn).toBe(-3)
    expect(gildedRose.items[1].quality).toBe(8)

    expect(gildedRose.items[2].name).toBe('Sulfuras, Hand of Ragnaros')
    expect(gildedRose.items[2].sellIn).toBe(0)
    expect(gildedRose.items[2].quality).toBe(80)

    expect(gildedRose.items[3].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(gildedRose.items[3].sellIn).toBe(10)
    expect(gildedRose.items[3].quality).toBe(25)

    expect(gildedRose.items[4].name).toBe('Conjured Mana Cake')
    expect(gildedRose.items[4].sellIn).toBe(-2)
    expect(gildedRose.items[4].quality).toBe(0)
  })
})

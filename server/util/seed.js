let products = [
    {
      imageUrl: 'https://cdn.shopify.com/s/files/1/0156/6146/products/BoldHoodieBlackA1A5L.A-Edit_GB_BK_d0c96e5a-cc03-4c5b-a077-87576b9f28cd_855x.jpg?v=1647041465',
      name: 'Black Hoodie',
      price: 40.99 ,
      description: 'cool hoodie',
    },
    {
      imageUrl: 'https://cdn.shopify.com/s/files/1/0156/6146/products/ArrivalSlimSleevelessT-ShirtCoreOliveA2A1P-EBF1.AllImages1-Edit.HK_855x.jpg?v=1644430199',
      name: 'Mens Olive Tank',
      price: 54.69 ,
      description: 'cool tank',
    },
    {

      imageUrl: "https://cdn.shopify.com/s/files/1/0156/6146/products/ELEVATESPORTSBRACoastalBlueLakesideBlueNavyB3A7B-UBR9-0696_3d47a23c-4b06-4e64-8f43-7eef374d9369_855x.jpg?v=1665600802",
      name: 'Sports Bra Navy',
      price: 59.69 ,
      description: 'cool blue sports bra',
    },
    {
      imageUrl: "https://cdn.shopify.com/s/files/1/0156/6146/products/ADAPTMARLSEAMLESSLEGGINGSENG-L-A0060AtlanticBlueSharkBlueB3A5Z-UBSS1_855x.jpg?v=1665514377",
      name: 'Blue Leggings',
      price: 65.59 ,
      description: 'cool leggings',
    },
    {
      imageUrl: "https://cdn.shopify.com/s/files/1/0156/6146/products/2.2LWaterBottleBlackI1A2U201-Edit_BK_846cedec-9af2-4635-9343-505c53b871aa_855x.jpg?v=1658432152",
      name: 'Water Bottle',
      price: 10.85 ,
      description: 'cool water bottle',
    },
    {
      imageUrl: "https://cdn.shopify.com/s/files/1/0156/6146/products/LCBagBlackBlackI1A1C-BBF721-Edit_BK_e738df39-c69b-42f2-b9ce-b0c9d08dfb23_885x.jpg?v=1658432156",
      name: 'LC Bag',
      price: 12.99 ,
      description: 'Gymshark cool bag',
    },
    {
      imageUrl: "https://cdn.shopify.com/s/files/1/0156/6146/products/CrewSocks3PkWhiteI1A2F-WBBM1_600x.jpg?v=1658432148",
      name: 'Crew Socks ',
      price: 14.99 ,
      description: 'cool socks',
    },
    {
      imageUrl: "https://cdn.shopify.com/s/files/1/0156/6146/products/SharkheadBeanieBlackI2A1P-BBBB.201_600x.jpg?v=1665514404",
      name: 'Beanie Black',
      price: 16.99 ,
      description: 'cool beanie',
    },
    {
      imageUrl: "https://cdn.shopify.com/s/files/1/0156/6146/products/SharkheadBackpackBlackI2A1K-BBBB.189_3a1db624-8f98-4ca9-a8c8-9b6db4b4d4ba_438x.jpg?v=1669826710",
      name: 'Backpack Sharkhead ',
      price: 16.99 ,
      description: 'cool backpack',
    },
    {
      imageUrl: "https://cdn.shopify.com/s/files/1/0156/6146/products/Sport5Short_2In1_SlateBlue-WinterTealA3A5K-UBSL-0057.8_800x.jpg?v=1667298409",
      name: 'Shorts 5"  ',
      price: 25.99 ,
      description: 'cool shorts',
    },
    
  ]

//   app.post('/seed', async (req,res) => {
//     await Resort.bulkCreate(skiResorts)
//   })
module.exports = {
    seed: async (req,res) => {
        const {Product} = require('../models/product')
            await Product.bulkCreate(products)
          }
}
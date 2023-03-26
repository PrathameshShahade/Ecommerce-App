const Shop = require("../modules/Shop");
const { verifyToken, verifyTokenAndAutharization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newShop = new Shop(req.body);

    try{
      const savedShop = await newShop.save();
      res.status(200).json(savedShop);
    }catch(err){
        res.status(500).json(err)
    }
});


//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res)=>{

try{
    const updatedShop = await User.findByIdAndUpdate(
        req.params.id,
         {
        $set:req.body,
         },{new:true}
    );
res.status(200).json(updatedShop);

}catch(err){
    res.status(500).json(err);
}
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
          await Shop.findByIdAndDelete(req.params.id);
          res.status(200).json("Shop has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
})

//GET PRODUCT
router.get("/find/:id",  async (req, res) => {
    try{
         const shop = await Shop.findById(req.params.id);
          res.status(200).json(shop)
    }catch(err){
        res.status(500).json(err);
    }
})
//Get Shops By Query
router.get("/searchshops",  async (req, res) => {
    const query = req.query.q;

    try{
         const shop = await Shop.find({
            pin: {$regex: query, $options:"i"}
         });
          res.status(200).json(shop)
    }
    catch(err){
        res.status(500).json(err);
    }
})


//GET ALL SHOPS
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try{
        let shops;

        if(qNew){
            shops = await Shop.find().sort({ createdAt: -1}).limit(1);
        }else if(qCategory){
            shops = await Shop.find({
                categories:{
                    $in:[qCategory],
                },
            });
        } else{
            shops = await Shop.find();
        } 
          res.status(200).json(shops)
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router
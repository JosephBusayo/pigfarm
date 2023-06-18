const Swine = require ('../database/swine.js');
const Feed = require ('../database/feeds.js');

const {Router} = require('express')
const router = Router()


router.get('/', async(req, res) => {
    try{
        const swines = await Swine.find().sort({createdAt: -1})
        const feeds = await Feed.find().sort({createdAt: -1})

        res.send({
            message : "Successfully retrieved",
            payload : {swines, feeds},
            status_code : 200
        })
    }catch(err){
        res.send({message : err, status_code : 400})
    }
})


router.post('/add-swine', async (req, res) => {
    const swine = new Swine(req.body)
    try{
        const savedSwine = await swine.save()
        res.send({
            message : 'Saved successfully',
            status_code : 201
        })
    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router

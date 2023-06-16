const Feed = require ('../database/feeds.js');
const {Router} = require('express')
const router = Router()


router.post('/add-feed', async (req, res) => {
    const feed = new Feed(req.body)
    try{
        const savedFeed = await feed.save()
        res.send({
            message : 'Saved successfully',
            payload: savedFeed,
            status_code : 201
        })
    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router

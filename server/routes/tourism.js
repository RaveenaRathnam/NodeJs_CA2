


const router = require(`express`).Router()

const tourismModel = require(`../models/tourism`)

// read all records
router.get(`/tourism`, (req, res) => 
{   
    tourismModel.find((error, data) => 
    {
        res.json(data)
    })
})


// Read one record
router.get(`/tourism/:id`, (req, res) => 
{
    tourismModel.findById(req.params.id, (error, data) => 
    {
        res.json(data)
    })
})


// Add new record
router.post(`/tourism`, (req, res) => 
{
    tourismModel.create(req.body, (error, data) => 
    {
        if(error)
        {
        res.json(errorMessage)
        }
        else{
            res.json(data)
        }

    })
})


// Update one record
router.put(`/tourism/:id`, (req, res) => 
{
    tourismModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (error, data) => 
    {
        res.json(data)
    })        
})


// Delete one record
router.delete(`/tourism/:id`, (req, res) => 
{
    tourismModel.findByIdAndRemove(req.params.id, (error, data) => 
    {
        res.json(data)
    })       
})



module.exports = router
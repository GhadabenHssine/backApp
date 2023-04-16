const express = require("express")
const router = express.Router()
const controller = require("../controller/userController")
// test 
router.get("/hi", (req, res) => {
    res.send("hello ")
})

// post contact 
//with req.body
router.post("/", controller.postContact)

// get contact 
router.get("/", controller.getContact)

// get contact  by id 
router.get("/:id", controller.getContactById)

// delete  contact  by id 
router.delete("/:id", controller.deleteContact)

// update  contact  by id 
//methode put
router.put("/:id", controller.editContact)

module.exports = router
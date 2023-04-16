const Contact = require("../model/User");

exports.postContact = async (req, res) => {
    try {
        //create a new contact with contacte model
        const newContact = new Contact(req.body)
        // destrct req body 
        const { name, email } = req.body
        // test if the user has an email
        if (!email || !name) {
            res.status(400).send({ message: " name  & email is required  check again" })
            return;
        }
        // test 2: if the email already exist
        const user = await Contact.findOne({ email: req.body.email })
        if (user) {
            res.status(400).send({ message: "user already exist email should be unique" })
            return;
        }
        // save  the contact
        const result = await newContact.save()
        res.status(200).send({ response: result, message: "user is saved " })
    } catch (error) {
        res.status(500).send({ message: "can not save it " })
        console.log(error);
    }
}
// get all contact
exports.getContact = async (req, res) => {
    try {
        const result = await Contact.find()
        res.status(200).send({ response: result, message: "getting contacts successfully" })
    } catch (error) {
        res.status(500).send({ message: "can not get contacts" })
        console.log(error)
    }
}


// get one  contact by id 
exports.getContactById = async (req, res) => {
    try {
        const result = await Contact.findOne({ _id: req.params.id })
        res.status(200).send({ response: result, message: "getting contact successfully" })
    } catch (error) {
        res.status(500).send({ message: "can not get contact" })
        console.log(error)
    }
}

// delete contact by params id

exports.deleteContact = async (req, res) => {
    try {
        const query = { _id: req.params.id }
        await Contact.deleteOne(query)
        res.status(200).send({ message: "user deleted" })
    } catch (error) {
        res.status(500).send({ message: "can not deleted " })
    }
}

// edit contact by params id

exports.editContact = async (req, res) => {
    try {
        const query = { _id: req.params.id }
        const result = await Contact.updateOne(query, { $set: { ...req.body } })
        res.status(200).send({ message: "user updated" })
    } catch (error) {
        res.status(500).send({ message: "can not updated " })
    }
}
//Importing your model from before. Take note of the relative file path. Using .. goes back to your main project folder, then navigates into /models.
import Property from '../models/property.model.js';

//Add a property to the collection in our Mongo database using a POST HTTP Verb.
async function createProperty(req, res) {
    try {
        const newProperty = await Property.create(req.body);
        /* The main part of this controller method createProperty is the Mongoose method Property.create(). We're passing in the req.body from Axios for this creation statement: Whatever gets passed as the POST's body, from the PropertyCreate component request on the front-end, will become the data for our model to attempt to save. */
        res.json(newProperty);
    } catch (error) {
        console.log(error);
        //If you do get an error, send it out to the client. Every http request needs a response, even errors.
        res.status(400).json(error);
    }
}

//Retrieve all properties from the collection.
    async function getAllProperties(req, res) {
    try {
        const allProperties = await Property.find(); // here is our query to find Meals
        res.json(allProperties);
    } catch (error) {
        console.log(error);
        res.status(400).json(error); // here is our error response
    }
}

//Retrieve a single meal from the collection.
async function getOneProperty(req, res) {
    try {
        const foundProperty = await Property.findById(req.params.id);
        res.json(foundProperty);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

//Edit a meal from the collection.
async function updateOneProperty(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedProperty = await Property.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedProperty);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

//Delete a meal from the collection.
async function deleteOneProperty(req, res) {
    try {
        const deletedProperty = await Property.findByIdAndDelete(req.params.id);
        res.json(deletedProperty);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

/* At the bottom of every controller, we export all of our functions. It is up to us to define the name of these functions that we export, and it's best to be as clear and exhaustive as possible. */
export {
    createProperty,
    getAllProperties,
    getOneProperty,
    updateOneProperty,
    deleteOneProperty
};

/* Just like the mongoose.config.js, this controller is designed to communicate to other files outside your JavaScript runtime. That means you need to create a Promise, wait for a reponse, and have logic set up to deal with errors. */

/* Note: This is not the only way to define promises in JavaScript, and you might notice that the Promises back in React look a little different. We want to expose you to both traditional Promises with callbacks and also Promises using async / await!

const newProperty = await Property.create(req.body); */
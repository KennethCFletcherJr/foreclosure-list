//This line imports what you need from Mongoose
import { model, Schema } from "mongoose";
/* const PropertySchema = new Schema({}, {})copy
This creates a Schema, the actual blueprint of your model. Schemas often take two objects, one to define the data and the other for options, such as "," { timestamps: true }. */
const PropertySchema = new Schema(
  /* This defines a single column of your Property collection. We're saying every Property  has a streetNumber, and every streetNumber is a type number that's optional.

"required" is a validation rule that must be true to save a number, and the final string is an error message thrown if we fail it. We also have two more rules, one for the minlength, one for the maxlength, all using the same format. */
  {
    streetNumber: {
      type: Number,
      minlength: [1, "Street Number must be at least one digit! (If unknown, enter 'UNK')"],
      maxlength: [20, "Street Number  must be no more than 20 digits long!"],
    },
    streetName: {
      type: String,
      required: [true, "Street Name is required! (If unknown, enter 'UNK')"],
      minlength: [3, "Street Name must be at least three characters! (If unknown, enter 'UNK')"],
      maxlength: [20, "Street Name must be no more that 20 characters long!"],
    },
    unitIdentifiers: {
      type: String,
      required: [true, "Unit Identifiers, Building, Suite, Condo, Apartment Numbers and/or Names are required! (If unknown, enter 'UNK')"],
      minlength: [3, "Unit Identifiers must be at least three characters! (If unknown, enter 'UNK')"],
      maxlength: [20, "Unit Identifiers must be no more that 20 characters long!"],
    },
   
    geographicLocation: {
    required: [true, "Geographical Location, incuding town, city, county, or Google map coordinates are  required! (If unknown, enter 'UNK')"],
      type: String,
       minlength: [3, "Unit Identifiers must be at least three characters!"],
       maxlength: [20, "Unit Identifiers must be no more that 20 characters long!"],
    },

    state: {
      type: String,
      required: [true, "State is Required!"],
      minlength: [2, "Enter 2 Digit State Abbreviation"],
      maxlength: [2, "Enter 2 Digit State Abbreviation"],
    },

    zipCode: {
      type: String,
      minlength: [5, "Enter 5 digit zipcode with, or without, 4 digit extension"],
      maxlength: [10, "Enter 5 digit zipcode with, or without, 4 digit extension"],
    },

     defaultDate: {
      type: Date,
    min: ['1990-01-01', "Default dates after '1990-01-01' may be entered. Enter YYYY-MM-DD format. If unknown, leave blank"], //Placeholder starting date in code.]
    max: [Date.now, "Future default dates cannot be entered."],
   /*  completed: {type: Date, default: Date.now} */
    },

    listingDate: {
        type: Date,
        min: ['1990-01-01', "Listing Dates after 2019-01-01 may be entered. Enter YYYY-MM-DD format. If unknown, leave blank"],
        //Placeholder starting date in code.
        max: [Date.now, "Future listing dates cannot be entered."],
    },

    auctionDate: {
        type: Date,
        min: ['2019-01-01', "Passed aution dates after 2019-01-01 may be entered. Enter YYYY-MM-DD format. If unknown, leave blank"],
        max: ['2030-12-31', "Future auction dates may be listed up to 2020-12-31."],
    },
    //Americanize date order and establish the correct format so that extra trailing letters are truncated.
    startingBid: {
            type: Number,
            get: v => (v/100).toFixed(2),
            set: v => v*100,
        },

    documentUpload: {
        type: Boolean,
        default: false,
    },

    propertyDetails: {
        type: String,
        minlength: [3, "Please list number of Bedrooms, Baths, and the Square Footage, or Acreage "]
        //Placeholders for code: BR: BA: SQFT: ACRE: 

    }
     /* isAvailable: {
            type: Boolean,
            default: false
        } */

  },
  
  { timestamps: true }
  //The options object, in this case, tells every Property to save timestamps.

);

//The final function saves your Book Schema and exports it at the bottom.
const Property = model("Property", PropertySchema);
export default Property;

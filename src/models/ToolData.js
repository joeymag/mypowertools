import { Schema, model, models } from "mongoose";

const ToolDataSchema = new Schema({
   
    brand: {
        type: String,
    },
    
    tooltype: {
        type: String,
    },
    paidprice: {
        type: Number,
    },
    isstolen: {
        type: Boolean,
        default: false,
    },
    serail: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
    },
}, {timestamps: true});

const ToolData = models.ToolData || model('ToolData', ToolDataSchema);

export default ToolData;
import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
    
    name:{ type: String, default: ''},
    rank:{ type: String, default: ''},
    tel:{ type: String, default: ''},
}, { timestamps: true, versionKey: false })

module.exports = mongoose.models.Admin || mongoose.model('Admin', AdminSchema)
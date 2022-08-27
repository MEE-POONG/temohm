import mongoose from 'mongoose'

const BannerHomeSchema = new mongoose.Schema({
    img: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    credit: { type: String, default: '' },
    img2: { type: String, default: '' },
    title2: { type: String, default: '' },
    description2: { type: String, default: '' },
    title3: { type: String, default: '' },
    price3_1: { type: Number, default: '' },
    price3_2: { type: Number, default: '' },
    price3_3: { type: Number, default: '' },
    img4: { type: String, default: '' },
    title4: { type: String, default: '' },
    undertitle4: { type: String, default: '' },
    header5: { type: String, default: '' },
    tel5: { type: Number, default: '' },
    img5: { type: String, default: '' },
    description5: { type: String, default: '' },
}, { timestamps: true, versionKey: false })

module.exports = mongoose.models.BannerHome || mongoose.model('BannerHome', BannerHomeSchema)
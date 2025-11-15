const postSchema = require('../models/post.js')
const { post } = require('../routes/auth.js')


const createPost = async (req,res) => {
    try {
        //yeni post yapacak
        const newPost = await postSchema.create(req.body)
        
        res.status(200).json({
            newPost
        })
    } catch (error) {
            return res.status(500).json({message: error.message})
    }
}

const getPost = async (req,res) => {
    try {
        //tum urunleri gosterecek herhangi bir parametre filtresi olmadan
        const getPost = await postSchema.find()

        res.status(200).json({
            getPost
        })
    } catch (error) {
            return res.status(500).json({message: error.message})
    }
}

const getDetail = async (req,res) => {
    try {
        //gelen id numarasi
        const {id} = req.params
        //id numarasina gore bulma
        const detailPost = await postSchema.findById(id)

        res.status(200).json({
            detailPost
        })
    } catch (error) {
            return res.status(500).json({message: error.message})
    }
}

const getUpdate = async (req,res) => {
    try {
        const {id} = req.params

        const updatePost = await postSchema.findByIdAndUpdate(id, req.body, {new: true})

        res.status(200).json({
            updatePost
        })
    } catch (error) {
            return res.status(500).json({message: error.message})
    }
}

const deletePost = async (req,res) => {
    try {
        const {id} = req.params

        await postSchema.findByIdAndDelete(id)

        res.status(200).json({
            message: "Silinme islemi basariyla gerceklesti"
        })
    } catch (error) {
            return res.status(500).json({message: error.message})
    }
}

const searchPost = async (req,res) => {
    const {search, tag} = req.query;
    try {
        //arama ve filtreleme
        const title = new RegExp(search, "i")
        
        const posts =  await postSchema.find({ $or: [{title}], tag:{$in: tag.split(",")}})

        res.status(200).json({
            posts
        })
        return 
    } catch (error) {
        return res.status(500).json({message: error.message})

    }
}

module.exports = {createPost, searchPost, getPost, getDetail, getUpdate, deletePost}

import {Request , Response} from 'express'
import {Post} from 'firebase-backend'

const posts:Array<object> =[];




export default new Post ((req:Request,res:Response)=>{

    const {title,content} = req.body

    if(!title || !content){
        res.status(400).send('Invalid request')
    }else{
        posts.push({title,content})
        res.status(201).json({message:'Post created successfully',posts})
    }

})
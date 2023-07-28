import {Get} from 'firebase-backend'
import {Request , Response} from 'express'
import posts from './createPost.endpoint'



export default new Get ((req:Request,res:Response)=>{

    res.json({posts,message:"Hello tHERE"})
})



 
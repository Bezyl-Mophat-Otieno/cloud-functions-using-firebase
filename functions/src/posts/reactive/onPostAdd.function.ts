import * as functions from 'firebase-functions';

export default functions.firestore
.document('posts/{postId}')
.onCreate((snapShot,context)=>{
    console.log('Post created',snapShot.data())
    console.log(context)
})
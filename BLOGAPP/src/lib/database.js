import { databases,storage } from "./appwrite"
import { ID ,Query} from "appwrite"
const DB_ID=import.meta.env.VITE_DATABASE_ID
const post_coll=import.meta.env.VITE_POST_COLLECTION_ID
const user_coll=import.meta.env.VITE_USER_COLLECTION_ID
const bucket=import.meta.env.VITE_BUCKETID

// create post function
export const createPost=async(data,id)=>{
    // data
    try{
    // thubnail url
    let url=""
        if(data.thumbnail && data.thumbnail[0]){

            const res=await storage.createFile(
                bucket,
                ID.unique(),
                data.thumbnail[0],

            )
             url= storage.getFileView(bucket,res.$id );
        }
        // document create
        const res=await databases.createDocument(
            DB_ID,
            post_coll,
            ID.unique(),
            {
                title:data.title,
                blogContent:data.blogContent,
                thumbnail:url,
                tags:data.tags,
                category:data.category,
                status:data.status,
                userId:id,
            }
        )
        return res


    }
    catch(error){
        console.log("error occured while posting",error)
        
    }
}

// getuserPost
export const getUserPost=async(id)=>{
    // id-> match -> return data
    try{
        const res=await databases.listDocuments(
            DB_ID,
            post_coll,
            [
                Query.equal("userId",id)
            ]
        )
        return res
    }
    catch(error){
        console.log("error occured while getting user post",error)

    }
} 

// get post by id
export const getPostById=async(id)=>{
    try{
        const res=await databases.getDocument(
            DB_ID,
            post_coll,
            id
        )
        return res

    }
    catch(error){
        console.log("error occured while getting post by id",error)
    }
}

// update post by  id
export const updatePostById=async(id,post)=>{
    try{
        let url=""
        console.log("start")
        const selectedFile=post.thumbnail?.[0]
        if(selectedFile instanceof File){
            const res=await storage.createFile(
                bucket,
                ID.unique(),
                post.thumbnail[0],
                
            )
            console.log("in if")
            url= storage.getFileView(bucket,res.$id );
            console.log("in if")
        }
        else{
            url=post.thumbnail
        }
        
        const res=await databases.updateDocument(
            DB_ID,
            post_coll,
            id,
            {
                title:post.title,
                blogContent:post.blogContent,
                thumbnail:url,
                tags:post.tags,
                category:post.category,
                status:post.status,
                
            }
        )
        return res

    }
    catch(error){
        console.log("error occured while updating post by id",error)
    }
}

// delete post by id
export const deletePostById=async(id)=>{
    try{
        const res=await databases.deleteDocument(
            DB_ID,
            post_coll,
            id
        )
        return res
    }
    catch(error){
        console.log("error occured while deleting post by id",error)
    }
}
export const getUserData=async(userid)=>{
    try{
        const res=await databases.listDocuments(
            DB_ID,
            user_coll,
            [Query.equal("userid",userid)]
        )
        return res

    }
    catch(error){
        console.log("error occured while getting user data",error)
    }

}

// update user data
export const updateUserData=async(docid,userdata)=>{
    try{
        let url=""
        console.log("start")
        const selectedFile=userdata.profilePic?.[0]
        if(selectedFile instanceof File){
            const res=await storage.createFile(
                bucket,
                ID.unique(),
                userdata.profilePic[0],
                
            )
            // console.log("in if")
            url= storage.getFileView(bucket,res.$id );
            // console.log("in if")
        }
        else{
            url=userdata.profilePic
        }
        
        const res=await databases.updateDocument(
            DB_ID,
            user_coll,
            docid,
            {
               fullname:userdata.fullname,
               profilePic:url,
               bio:userdata.bio
                
            }
        )
        console.log(res)
        return res

    }
    catch(error){
        console.log("error occured while updating user data",error)
    }

}

// get all post

export const getAllPost=async()=>{
    try{
        const res=await databases.listDocuments(
            DB_ID,
            post_coll
        )
        console.log(res)
        return res

    }
    catch(error){
        console.log("error occured while getting all post",error)
    }
}
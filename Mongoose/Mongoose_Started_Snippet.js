// Author: Shamim Bin Nur
// Github:
// Linkedin:
// Description: This is a precise and simply descibed code snipet for getting started with MongoDB in Node js.


//import mongose
const mongoose = require('mongoose');

//Connect to cloud mongoose server
mongoose.connect(DATABASE_CONNECTION_URL,
    { useUnifiedTopology: true, useNewUrlParser: true })
    .then( ()=> console.log("I will log when connection establish successfully"),
    (err) => {
        console.log(err)
    });

// mongose.conect( url, { useUnifiedTopology: true, useNewUrlParser: true }).then( callback for successfull connection, callback for error handling )


// PROCESS TO ADD DATA TO mongoDB
// need to connect with database
// dataSchema -> dataModel -> insert data to dataModel -> save that data model, so that it finally be added to database
// "Schema" is like a pattern that you will follow while inserting data.
// We make schema first then we make "Model" using that schema.


//creating a schema named "postSchema"
const postSchema = new Schema({
    name:  String, // definig name field will be type of String
    id:   Number, // definig age field will be type of Number
    // advance way to config a field with more options
    date: {
        type: Date, 
        default: Date.now // if value of data is not inserted it will automatically add value.
    },
});

//Creating PostModel with our predefined postSchema
const PostModel = mongoose.model("Post", postSchema);


//add post to database
const createPost = async ()=>{
    const post = new PostModel({
        name : "Shamim Bin NUr",
        id: 011
    })

    try {
        const createdData = await post.save(post);
        console.log(createdData)
    } catch (error) {
        console.log(error)
    }
}

//getAllPost from database
const gettAllPost = async ()=>{
    try {
        const foundData = await PostModel.find();
        console.log(foundData)
    } catch (error) {
        console.log(error)
    }
}

//get specific post database
const getSpecificPost = async ()=>{
    const id = "011"
    
    try {
        const foundData = await PostModel.findOne({ id : id });
        console.log(foundData)
    } catch (error) {
        console.log(error)
    }
}

//delete post from database
const deletePost = async ()=>{
    const id = "011";
    
    try {
        const foundData = await PostModel.deleteOne({ id : id });
        console.log(foundData)
    } catch (error) {
        console.log(error)
        res.json({ "error " : error})
    }
}

//update post from database
const deletePost = async ()=>{
    const id = "011";
    const name ="New Name"
    
    try {
        const updatedData = await PostModel.updateOne({ id : id }, {$set:{name: name}});
        console.log(updatedData)
    } catch (error) {
        console.log(error)
    }
}
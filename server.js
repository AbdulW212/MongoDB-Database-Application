require("dotenv").config();
// -----> allows .env
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDb = require("./config/connectToDb.js");
//---------------------------------------------------requires 

const User = require("./models/user");
const usersController = require("./controllers/usersController.js");
const Post = require("./models/post");
const postsController = require("./controllers/postsController.js");
const Comment = require("./models/comment");
const commentsController = require("./controllers/commentsController.js");


//--------------------------------------------------Import Models and Controllers
const cors = require("cors");
app.use(express.json());
app.use(cors());
// Allow to convert our data to json becuz Express doesnt naturally convert our data to json
connectToDb();
// This initializes our connectToDB() function

//---------------------------------------------------middleWare




app.get("/", (req, res) => {
    res.send("This is a Landing Page");
  });

// Obj: We want to establish CRUD routes for our Users Model
app.get("/users", usersController.fetchAllUsers);
// -----------------> GET all Users - [Read]
app.get("/users/:id", usersController.fetchUser);
// -----------------> GET a Specific User by ID - [Read]
app.post("/users", usersController.createUser);
// -----------------> Create a User - [Create / POST]
app.put("/users/:id", usersController.updateUser);
// -----------------> Update a Specific User - [Update]
app.delete("/users/:id", usersController.deleteUser);
// -----------------> Delete a Specific User - [Delete]
// -------------------------------------------------User routes


// Obj: We want to establish CRUD routes for our Post Model
app.get("/posts", postsController.fetchAllPosts);
// -----------------> GET all Posts - [Read]
app.get("/posts/:id", postsController.fetchPost);
// -----------------> GET a Specific Post by ID - [Read]
app.post("/posts", postsController.createPost);
// -----------------> Create a Post - [Create / POST]
app.put("/posts/:id", postsController.updatePost);
// -----------------> Update a Specific Post - [Update]
app.delete("/posts/:id", postsController.deletePost);
// -----------------> Delete a Specific Post - [Delete]


// Obj: We want to establish CRUD routes for our Comment Model
app.get("/comments", commentsController.fetchAllComments);
// -----------------> GET all Comments - [Read]
app.get("/comments/:id", commentsController.fetchComment);
// -----------------> GET a Specific Comment by ID - [Read]
app.post("/comments", commentsController.createComment);
// -----------------> Create a Comment - [Create / POST]
app.put("/comments/:id", commentsController.updateComment);
// -----------------> Update a Specific Comment - [Update]
app.delete("/comments/:id", commentsController.deleteComment);
// -----------------> Delete a Specific Comment - [Delete]

//---------------------------------------------------Routing

app.listen(PORT, () => {
    console.log(`Express Server Listening on port num: ${PORT}`);
  });
//-----------------------------------------------------Server
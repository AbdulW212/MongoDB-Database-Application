const Post = require("../models/post");

const fetchAllPosts = async (req, res) => {
  // 1. Get all Post from DB
  // 2. Send the posts back as a response
  const posts = await Post.find();
  // --------------------------------(1)
  res.json({ posts: posts });
  // --------------------------------(2)
};

const fetchPost = async (req, res) => {
  // 1. Get id off the url
  // 2. Find the note assoc. w/ ID
  // 3.Send response with that post as the payload

  const postId = req.params.id;
  // --------------------------------(1)
  const post = await Post.findById(postId);
  // --------------------------------(2)
  res.json({ post: post });
  // --------------------------------(3)
};

const createPost = async (req, res) => {
  // 1. Get data from req.body
  // 2.Create post
  // 3. Respond with new copy of Post
  console.log(`BODY: ${req.body}`);
  const title = req.body.title;
  const body = req.body.body;
  // const {title,body} = req.body
  // --------------------------------(1)
  const post = await Post.create({
    title: title,
    body: body,
  });
  // --------------------------------(2)
  res.json({ post: post });
  // --------------------------------(3)
};

const updatePost = async (req, res) => {
  // 1. Get id off the url
  // 2. Get the data off the id
  // 3. Find and Update Post
  // 4. Retrieve updatedPost and send it as a response
  const postId = req.params.id;
  // --------------------------------(1)
  const { title, body } = req.body;
  // --------------------------------(2)
  const post = await Post.findByIdAndUpdate(postId, {
    title: title,
    body: body,
  });
  // --------------------------------(2)
  const updatedPost = await Post.findById(postId);
  res.json({ post: updatedPost });
};

const deletePost = async(req, res) => {
    // 1. Get the id off the url
    // 2. Delete the record
    // 3. Send Response
    const postId = req.params.id
  // --------------------------------(1)
  await Post.deleteOne({
     _id: postId 
    })
    // --------------------------------(2)
  res.json({success: "Record has been deleted successfully"})
}

module.exports = {
    fetchAllPosts,
    fetchPost,
    createPost,
    updatePost,
    deletePost
}


const User = require("../models/user");

const fetchAllUsers = async (req, res) => {
  // 1. Get all Notes from DB
  // 2. Send the notes back as a response
  const users = await User.find();
  // --------------------------------(1)
  res.json({ users: users });
  // --------------------------------(2)
};

const fetchUser = async (req, res) => {
  // 1. Get id off the url
  // 2. Find the note assoc. w/ ID
  // 3.Send response with that note as the payload

  const userId = req.params.id;
  // --------------------------------(1)
  const user = await User.findById(userId);
  // --------------------------------(2)
  res.json({ user: user });
  // --------------------------------(3)
};

const createUser = async (req, res) => {
  // 1. Get data from req.body
  // 2.Create note
  // 3. Respond with new copy of Note
  console.log(`BODY: ${req.body}`);
  const title = req.body.title;
  const body = req.body.body;
  // const {title,body} = req.body
  // --------------------------------(1)
  const user = await User.create({
    title: title,
    body: body,
  });
  // --------------------------------(2)
  res.json({ user: user });
  // --------------------------------(3)
};

const updateUser = async (req, res) => {
  // 1. Get id off the url
  // 2. Get the data off the id
  // 3. Find and Update Note
  // 4. Retrieve updatedNote and send it as a response
  const userId = req.params.id;
  // --------------------------------(1)
  const { title, body } = req.body;
  // --------------------------------(2)
  const user = await User.findByIdAndUpdate(userId, {
    title: title,
    body: body,
  });
  // --------------------------------(2)
  const updatedUser = await User.findById(userId);
  res.json({ user: updatedUser });
};

const deleteUser = async(req, res) => {
    // 1. Get the id off the url
    // 2. Delete the record
    // 3. Send Response
    const userId = req.params.id
  // --------------------------------(1)
await User.deleteOne({ 
    _id: userId 
});
    // --------------------------------(2)
  res.json({success: "Record has been deleted successfully"})
}

module.exports = {
    fetchAllUsers,
    fetchUser,
    createUser,
    updateUser,
    deleteUser
}



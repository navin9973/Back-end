const Todo = require("../models/todo");

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;  //http://localhost:3000/api/v1/createTodo
    const dataOfresponse = await Todo.create({ title, description }); 
    res.status(200).json({
      success: true,
      Data: dataOfresponse,
      message: "entry successfull",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      Data: "internal server fail",
      message: err.message,
    });
  }
};

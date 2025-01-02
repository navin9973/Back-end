const Todo = require("../models/todo");

exports.deleteTodo = async (req, res) => {
  try {
   const id=req.params.id;
    const todo = await Todo.findByIdAndDelete({_id:id}); 
    res.status(200).json({
      success: true,
      Data: todo,
      message: "deleted successfull",
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

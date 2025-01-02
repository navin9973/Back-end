const Todo = require("../models/todo");

exports.updateTodo = async (req, res) => {
  try {
    const id= req.params.id;
    const { title, description } = req.body;
    const updateData = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() },
    )
    res.status(200).json({
      success: true,
      Data: updateData,
      message: "updated  successfull",
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

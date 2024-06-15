const mongoose = require('mongoose');

const storySchema =  mongoose.Schema(
  {
    title:{
      type:String,
      required:true,
      trim:true,
      unique:true,
    },
    comments:[{
      comment:String,
      rating:Number,
    }]
  }
)

const Story = mongoose.model("Story",storySchema);
module.exports=Story;
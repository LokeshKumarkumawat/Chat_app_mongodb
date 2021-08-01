const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = new Schema({
    user:{type: 'string',require:true},
    message:{type: 'string',require:true},
    msg_type:{type: 'string',require:true}
    
})


module.exports = mongoose.model('Chat', userSchema, 'chats');

// export default mongoose.model('Chat',userSchema,'chats') //not workinh

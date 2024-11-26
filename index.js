const { Telegraf } = require('telegraf'); // Import the Telegraf module

const token = 'bottokenid'; // Your bot token id

const bot = new Telegraf(token); // Create a new Telegraf instance

const mongoose = require('mongoose'); // Import the mongoose module
const Schema = mongoose.Schema; // Create a new mongoose schema

mongoose.connect('mongoose_connect_url',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("Database bağlandı")
    }

); // Connect to the database

const userSchema = new Schema({ 
    name: String,
    age: Number
}); // Create a new schema
 
const User = mongoose.model('User', userSchema); // Create a new model


bot.start((ctx) => {

}); // Start the bot
bot.launch({
    allowedUpdates: [
        'update_id',
        'message',
        'edited_message',
        'channel_post',
        'edited_channel_post',
        'inline_query',
        'chosen_inline_result',
        'callback_query',
        'shipping_query',
        'pre_checkout_query',
        'poll',
        'poll_answer',
        'my_chat_member',
        'chat_member',
        'chat_join_request'
    ], // Allowed updates to receive
});

bot.on('message', async (ctx) => { // When the bot receives a message

    ctx.reply(`Hello, ${ctx.message.from.first_name}! `); // Reply to the user


    const args = ctx.message.text.split(' '); // Split the message into arguments
    if (args[0] === '/register') { // If the first argument is '/register'
        const age = args[1]; // Get the age
        const name = args[2]; // Get the name
        // If the user doesn't enter a name
        if (!age) return ctx.reply('Please enter your age!'); // If the user doesn't enter an age
        if (isNaN(age)) return ctx.reply('Please enter a valid age!'); // If the user enters an invalid age
        if (!name) return ctx.reply('Please enter your name!'); // If the user doesn't enter an age
        if (isNaN(name)) return ctx.reply('Please enter a valid name!'); // If the user enters an invalid age


        const user = new User({ name: args[2], age: age }); // Create a new user
        var savedUser = await user.save(); // Save the user to the database
        if (!savedUser) return ctx.reply('An error occurred while saving the user!'); // If an error occurred while saving the user
        return ctx.reply('User saved successfully!'); // Reply to the user
    }
    if (args[0] === '/get') { // If the first argument is '/get'
        const name = args[1]; // Get the name
        if (!name) return ctx.reply('Please enter a name!'); // If the user doesn't enter a name
        //get user mongodb
        var user = await User.findOne({ name: name}) // Find the user by name
        if (!user) return ctx.reply('User not found!'); // If the user is not found
        return ctx.reply(`User found! Name: ${user.name}, Age: ${user.age}`); // Reply to the user
        
    }

});

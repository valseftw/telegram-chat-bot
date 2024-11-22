const { Telegraf } = require('telegraf'); // Import the Telegraf module

const token = 'bottokenid'; // Your bot token id

const bot = new Telegraf(token); // Create a new Telegraf instance

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

});
# Telegram Chat Bot - Powered by Telegraf

Welcome to the repository of my Telegram Chat Bot! 🎉  
This bot is developed using the [Telegraf](https://github.com/telegraf/telegraf) framework, providing an efficient and straightforward way to interact with Telegram's Bot API.

## 🚀 Features

- **Real-time communication**: The bot responds to user commands and messages efficiently.  
- **Powered by Telegraf**: Leverages the flexibility and features of the Telegraf framework.  

## 📚 Future Enhancements

This project is a work in progress, and I aim to expand its capabilities based on user feedback.  
Some planned enhancements include:
- **Database Integration**: Connecting the bot to MongoDB to store, update, and manage user data.  
- **Advanced Features**:
               *New repositories will include functionalities for data creation, modification, and more!* 

Your suggestions and feedback are always welcome! Feel free to open an issue or reach out for feature requests.  

## 🛠️ Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/valseftw/telegram-chat-bot.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the bot:
   ```bash
   node index.js
   ```
4. Ensure your Node.js version is '20.11.1' or compatible.:
## 📜 Code Explanation

The bot is built using the Telegraf framework and integrates MongoDB for storing user data. Below is a brief explanation of the main functionality:

1. Bot Initialization: The bot connects to Telegram's Bot API using the Telegraf library.
2. Database Connection: MongoDB is used to save user data such as names and ages.
3. Register Command:
    a. Users can register with the /register command followed by their age and name.
    b. The bot validates inputs and stores the information in the database.
4. Get Command:
    a. You can get user specific name /get <name>.
    b. You can get all users /get allusers.
5. Message Handling: The bot greets users and responds dynamically to messages.

**With these features, the bot ensures real-time interaction and efficient data management.**

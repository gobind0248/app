const GOOGLE_SHEETS_CONFIG = {
    // Default sheet ID (for fallback)
    DEFAULT_SHEET_ID: '1G6tTHT56T6FmqOwOvVFVPoVqoSs-TSBz_-SiW9imQvk',
    DEFAULT_GID: '0'
};

// WhatsApp Configuration
const WHATSAPP_CONFIG = {
    ENABLED: true,
    PHONE_NUMBER: '919706195457',
    MESSAGE_TEMPLATE: {
        LOGIN: "🔔 *New User Login* 🔔\n👤 Username: {username}\n📛 Name: {name}\n🏫 Class: {class}\n👥 Role: {role}\n📅 Date: {date}\n⏰ Time: {time}\n🌐 IP: {ip}",
        QUIZ_RESULT: "📊 *Quiz Result* 📊\n👤 Username: {username}\n📛 Name: {name}\n🏫 Class: {class}\n📚 Subject: {subject}\n📖 Chapter: {chapter}\n✅ Correct: {correct}\n📋 Total: {total}\n📈 Score: {percentage}%\n⏱️ Time: {timeTaken}\n📅 Date: {date}"
    }
};

// Telegram Configuration
const TELEGRAM_CONFIG = {
    ENABLED: true,
    BOT_TOKEN: '83559038htutytyTEmzBjqthB8Q',
    CHAT_ID: '59076vghh',
    MESSAGE_TEMPLATE: {
        LOGIN: "🔔 *New User Login* 🔔\n👤 Username: {username}\n🎓 Name: {name}\n🏫 Class: {class}\n👥 Role: {role}\n📅 Date: {date}\n⏰ Time: {time}\n🌐 IP: {ip}",
        QUIZ_RESULT: "📊 *Quiz Result* 📊\n👤 Username: {username}\n🎓 Name: {name}\n🏫 Class: {class}\n📚 Subject: {subject}\n📖 Chapter: {chapter}\n✅ Correct: {correct}\n📋 Total: {total}\n🔷 Attempted: {attempted}\n📈 Score: {percentage}%\n⏱️ Time Taken: {timeTaken}\n📅 Date: {date}"
    }
};

// Admin Notification Settings
const ADMIN_CONFIG = {
    NOTIFY_ON_LOGIN: false, // Set to true if admin wants notifications for their own login
    NOTIFY_ON_QUIZ_RESULT: false // Set to true if admin wants notifications for their own quiz results
};

// Logo configuration
const LOGO_CONFIG = {
    src: 'logo.png',
    alt: 'G. S. Tutorial Logo',
    width: '40px',
    height: '40px'
};

// Logging Configuration
const LOGGING_CONFIG = {
    ENABLE_CONSOLE_LOG: true,
    LOG_LEVEL: 'INFO',
    AUTO_SEND_NOTIFICATIONS: true
};

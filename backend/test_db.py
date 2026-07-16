import mysql.connector
from config import Config

try:
    conn = mysql.connector.connect(
        host=Config.DB_HOST,
        user=Config.DB_USER,
        password=Config.DB_PASSWORD,
        database=Config.DB_NAME
    )

    if conn.is_connected():
        print("✅ MySQL Connected Successfully!")

    conn.close()

except Exception as e:
    print("❌ Error:", e)
from flask import Blueprint, request, jsonify
from database import get_db_connection

contact_bp = Blueprint("contact", __name__)

@contact_bp.route("/contact", methods=["POST"])
def contact():

    data = request.get_json()

    conn = get_db_connection()
    cursor = conn.cursor()

    sql = """
    INSERT INTO contact_messages (name, email, subject, message)
    VALUES (%s, %s, %s, %s)
    """

    values = (
        data["name"],
        data["email"],
        data["subject"],
        data["message"]
    )

    cursor.execute(sql, values)
    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"message": "Message saved successfully!"})
from flask import Flask, jsonify, request
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials, firestore

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

# Initialize Firebase Admin SDK
# Note: You'll need to add your serviceAccountKey.json later
try:
    cred = credentials.Certificate("serviceAccountKey.json")
    firebase_admin.initialize_app(cred)
    db = firestore.client()
except Exception as e:
    print(f"Firebase Init Warning: {e}")
    db = None

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy", "service": "automation-backend"}), 200

@app.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not all([name, email, message]):
        return jsonify({"error": "Missing required fields"}), 400

    # Save to Firestore if connected
    if db:
        try:
            doc_ref = db.collection('contacts').add({
                'name': name,
                'email': email,
                'message': message,
                'timestamp': firestore.SERVER_TIMESTAMP
            })
            return jsonify({"success": True, "id": doc_ref[1].id}), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500
    else:
        # Fallback (mock)
        print(f"Received contact form: {name} ({email}) - {message}")
        return jsonify({"success": True, "message": "Message received (mock mode)"}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)

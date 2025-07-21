from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api')
def api():
    return jsonify(message="Hello from Python!")

if __name__ == '__main__':
    app.run(debug=True)
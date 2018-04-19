from flask import Flask, render_template, jsonify
from pantheon.pantheons import Pantheon
import pantheon.names as names

app = Flask(__name__, static_folder='../static/dist', template_folder='../static')

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/names', methods=['GET'])
def fetch_names():
    results = names.get_ethnicities()
    return jsonify(names=results)

if __name__ == '__main__':
    app.run()

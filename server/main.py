from flask import Flask, render_template, jsonify, request
from pantheon.pantheons import Pantheon
from pantheon.gods import God

import pantheon.names as names
import pantheon.tokens as tokens

app = Flask(__name__, static_folder='../static/dist', template_folder='../static')

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/api/names', methods=['GET'])
def fetch_names():
    results = names.get_ethnicities()
    return jsonify(names=results)

@app.route('/api/texts', methods=['GET'])
def fetch_texts():
    results = tokens.get_tokens_dirs()
    return jsonify(texts=results)

@app.route('/api/gods', methods=['POST'])
def fetch_gods():
    data = request.get_json()
    names.set_name_lists(data['namesSource']);
    tokens.set_tokens_lists(data['textsSource']);

    godA = data['godA']
    godB = data['godB']

    parentA = God(godA['seedWordA'], godA['seedWordB'], godA['chromosomes'], godA['gender'])
    parentB = God(godB['seedWordA'], godB['seedWordB'], godB['chromosomes'], godB['gender'])

    pantheon = Pantheon(parentA, parentB)
    pantheon.spawn(5)
    gods = [god.__dict__ for god in list(pantheon.__dict__['gods'].values())]

    return jsonify({'gods': gods})

if __name__ == '__main__':
    app.run()

# main.py

from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS
import geojson
import shapely.wkt
# pip install Flask-PyMongo
# pip install Flask
# pip install dnspython
# npm install -g --force nodemon
# pip install flask-cors

app = Flask(__name__)

# Stringa di connessione al DB
# Importante qui va specificato il nome del DB
app.config["MONGO_URI"] = "mongodb+srv://navarettearnold:OTQ1NGBauyWEKbNv@cluster0.0gmimrb.mongodb.net/Relab"

mongo = PyMongo(app)
# Per rispondere alle chiamate cross origin
CORS(app)

# Annotation that allows the function to be hit at the specific URL.


@app.route("/")
# Generic Python functino that returns "Hello world!"
def index():
    return "Hello world!"

# Questa route effettua una find() su tutto il DB (si limita ai primi 100 risultati)
@app.route('/ci_vettore/<foglio>', methods=['GET'])
def get_vettore(foglio):
    mil4326WKT = mongo.db.MilWKT4326
    output = []
    query = {
        "FOGLIO": foglio
    }
    for s in mil4326WKT.find(query):
        output.append({
            "INDIRIZZO": s['INDIRIZZO'],
            "WGS84_X": s["WGS84_X"],
            "WGS84_Y": s["WGS84_Y"],
            "CLASSE_ENE": s["CLASSE_ENE"],
            "EP_H_ND": s["EP_H_ND"],
            "FOGLIO": s["FOGLIO"],
            "CI_VETTORE": s['CI_VETTORE']
        }
        )
    # Nota che abbiamo eliminato la chiave result perchè i dati sono già formattati
    return jsonify(output)


@app.route('/geogeom', methods=['GET'])
def get_all_stars():
    mil4326WKT = mongo.db.MilWKT4326
    output = []

    match = {
        '$match': {
            'EP_H_ND': {'$gt': 0}
        }
    }
    group = {
        '$group': {
            '_id': {
                'SEZ': '$SEZ',
                'WKT': '$WKT'
            },
            'AVG': {
                '$avg': '$EP_H_ND'
            },
            'SUM': {
                '$sum': '$EP_H_ND'
            }
        }
    }
    limit = {
        '$limit': 10
    }

    for s in mil4326WKT.aggregate([match, group, limit]):
        g1 = shapely.wkt.loads(s['_id']['WKT'])
        g2 = geojson.Feature(geometry=g1,
                             properties={'id': s['_id']['SEZ'], 'media': s['AVG'], 'somma': s['SUM'], 'sezione': s['_id']['SEZ']})
        output.append(g2)
    return jsonify({'result': output})


# Checks to see if the name of the package is the run as the main package.
if __name__ == "__main__":
    # Runs the Flask application only if the main.py file is being run.
    app.run(debug=True)

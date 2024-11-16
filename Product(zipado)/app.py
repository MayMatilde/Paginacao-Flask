from flask import Flask
from controllers.controller import arraso

app = Flask(__name__)
app.register_blueprint(arraso)

if __name__ == "__main__":
    app.run(debug=True)

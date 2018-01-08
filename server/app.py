from flask import Flask, request
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/app', methods = ['POST'])
def returnClassify():
    print "===================================="
    print request.json['request']
    return "None"

if __name__ == '__main__':
    app.run(debug= True,port = 8000)
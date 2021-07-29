import time;
import pickle;
from flask import Flask,request,render_template,jsonify;
import os
import numpy as np

app=Flask(__name__)

@app.route('/time')
def get_current_time():
	return{'time':time.time() }




@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    print("inside predict");
    data = request.get_json(silent=True)
    print("the req is     ",data.get('arr'))
    model = pickle.load(open('model.pkl', 'rb'));
    a=data.get('arr');
    #b=a;
    #b=a.split(",")
    output = [] 
  
    # function used for removing nested  
    # lists in python.  
    def reemovNestings(a): 
        for i in a: 
            if type(i) == list: 
                reemovNestings(i) 
            else: 
                output.append(i) 
  

    reemovNestings(a) 
    print ('The list after removing nesting: ', output) 
    print("type of a is ",type(output));
    for i in range(0, len(output)): 
        if (i==2 or i==3):
            output[i] = float(output[i])
        output[i] = int(output[i]) 
    arr = np.array(output)
    c = arr.reshape(1,-1)
    prediction = model.predict(c);
    print("the predicted value is",prediction)
    print("before jsonify");
    predict = str(prediction[0]);
    response = jsonify(message="The price for the car is : $"+predict)
    print("after jsonify");
    # Enable Access-Control-Allow-Origin
    #response.headers.add("Access-Control-Allow-Origin", "*")
    print("this is response in python", response);
    return response
    
if __name__ == "__main__":
    app.run(debug=True)
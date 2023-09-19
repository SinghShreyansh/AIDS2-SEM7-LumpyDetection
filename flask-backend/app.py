from __future__ import print_function
import json
from flask_cors import CORS
from fpdf import FPDF
from flask import Flask, request, render_template, Markup
import numpy as np
import pickle
import pandas as pd
import requests
import io
import os
import datetime
from keras.models import load_model
import cv2

app = Flask(__name__)
CORS(app)

model = load_model("./LumpyDisease.h5")

print("model loaded")



# routing
@app.route("/", methods=["GET"])
def home():
    return "server started..."




@app.route("/disease-predict", methods=["GET", "POST"])
def cowHealth():
    if request.method == "POST":
        image = request.files["file"]
        filename = image.filename
        file_path = os.path.join("./static/uploads", filename)
        #flask-backend\static\uploads\negative.jpg
        image.save(file_path)

        img = cv2.imread(file_path) #load image path
        if img.size == 0:
            return "Image not found!"

        img = cv2.resize(img,(150, 150))
        img_array = np.array(img)

        img_array.shape
        img_array=img_array.reshape(1,150,150,3)

        a=model.predict(img_array)
        indices = a.argmax()
        indices = int(indices)
        print(indices)

        if indices==0:
            res = 'Probably a Healthy cow'
            return {"result":res,"indices":indices}
        else:
            res = 'Probably an Infected cow'
            return {"result":res,"indices":indices}

    else:
        return {"result":"No result"}



if __name__ == "__main__":
    app.run()

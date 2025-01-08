import streamlit as st
import numpy as np
import json
from PIL import Image
import tensorflow as tf

# Load class indices
with open('class_indices.json') as f:
    class_indices = json.load(f)

# Load the TFLite model
interpreter = tf.lite.Interpreter(model_path="crop_disease_predictor.tflite")
interpreter.allocate_tensors()

# Get input and output details for the model
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()


# Define a function to preprocess the image and make predictions
def predict_disease(img_path):
    # Load and preprocess the image
    img = Image.open(img_path)
    img = img.resize((224, 224))  # Resize to match input size for your model
    img_array = np.array(img) / 255.0  # Normalize the image
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension

    # Set the input tensor to the preprocessed image
    interpreter.set_tensor(input_details[0]['index'], img_array.astype(np.float32))

    # Run inference
    interpreter.invoke()

    # Get the output prediction
    output_data = interpreter.get_tensor(output_details[0]['index'])
    predicted_class_idx = np.argmax(output_data, axis=1)[0]
    predicted_class = list(class_indices.keys())[list(class_indices.values()).index(predicted_class_idx)]

    return predicted_class, output_data[0][predicted_class_idx]

# Set up the Streamlit interface
st.title("Crop Disease Prediction")
st.write("Upload an image of the crop to predict its disease.")

# Upload image
uploaded_file = st.file_uploader("Choose a crop image", type=["jpg", "jpeg", "png"])

if uploaded_file is not None:
    # Display the image
    img = Image.open(uploaded_file)
    st.image(img, caption="Uploaded Image", use_column_width=False, width=200)

    # Predict disease when the user clicks the "Predict" button
    if st.button("Predict Disease"):
        # Predict the disease
        disease, confidence = predict_disease(uploaded_file)
        
        #Show the prediction and confidence
        st.write(f"Prediction: {disease}")
        st.write(f"Confidence: {confidence:.2f}")

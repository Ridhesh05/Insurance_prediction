from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import InsuranceSerializer
import numpy as np
import joblib
import os 

# Load the model
model_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'Model', 'insurancepredictor.pkl')
model = joblib.load(model_path)

@api_view(['POST'])
def predict(request):
    if request.method == 'POST':
        # Deserialize input data using the serializer
        serializer = InsuranceSerializer(data=request.data)
        if serializer.is_valid():
            # Extract validated data from the serializer
            input_data = serializer.validated_data
            # Convert data to a tuple and then to a numpy array
            input_data_as_numpy_array = np.array(list(input_data.values())).reshape(1, -1)
            # Make prediction
            prediction = model.predict(input_data_as_numpy_array)
            # Return the prediction as a response
            return Response({'prediction': prediction})
        else:
            # Return errors if input data is invalid
            return Response(serializer.errors, status=400)

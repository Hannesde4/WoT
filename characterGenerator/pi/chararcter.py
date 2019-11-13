import datetime
from time import sleep

from sense_hat import SenseHat
sense = SenseHat()

import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

B = [173, 216, 230] # Lightblue
O = [255, 255, 255]  # White

matrix =[
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O
    ]

# Create a callback on_snapshot function to capture changes
def on_snapshot(doc_snapshot, changes, read_time):
    for doc in doc_snapshot:
        print(u'Received document snapshot: {}'.format(doc.id))

doc_ref = db.collection(u'character').document(u'theChosenOne')

# Watch the document
doc_watch = doc_ref.on_snapshot(on_snapshot)

data = doc_watch
i  = 0

while i < len(data):
    if data[i] == 1:
        matrix[i] == B
    print(data[i])
    i += 1

sense.set_pixels(matrix)
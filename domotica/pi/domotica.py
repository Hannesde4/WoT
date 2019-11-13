import datetime
from time import sleep

from sense_hat import SenseHat
sense = SenseHat()

import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

R = [255, 0, 0]  # Red
G = [0, 255, 0] # Green
Y = [255, 255, 224] # Lightyellow
U = [174, 160, 75] # Darkyellow
B = [173, 216, 230] # Lightblue
D = [0, 0, 139] # Darkblue
O = [255, 255, 255]  # White

matrix =[
    R, R, R, O, D, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, U, O, O, O, U,
    D, O, O, O, O, O, O, O,
    D, O, O, O, O, O, O, O,
    O, O, O, U, O, O, O, U,
    O, O, O, O, O, O, O, O,
    R, R, R, O, D, O, O, O
    ]

# Create a callback on_snapshot function to capture changes
def on_snapshot(doc_snapshot, changes, read_time):
    for doc in doc_snapshot:
        print(u'Received document snapshot: {}'.format(doc.id))

doc_ref = db.collection(u'status').document(u'currentStatus')

# Watch the document
doc_watch = doc_ref.on_snapshot(on_snapshot)

data = doc_watch

#light 1
if data[19] == 1:
    matrix[19] = Y

if data[19] == 0:
    matrix[19] = U

#light 2
if data[23] == 1:
    matrix[23] = Y

if data[23] == 0:
    matrix[23] = U

#light 3
if data[43] == 1:
    matrix[43] = Y

if data[43] == 0:
    matrix[43] = U

#light 4
if data[47] == 1:
    matrix[47] = Y

if data[47] == 0:
    matrix[47] = U

#power 1
if data[24] == 1:
    matrix[24] = B

if data[24] == 0:
    matrix[24] = D

#power 2
if data[4] == 1:
    matrix[4] = B

if data[4] == 0:
    matrix[4] = D

#power 3
if data[32] == 1:
    matrix[32] = B

if data[32] == 0:
    matrix[32] = D

#power 4
if data[60] == 1:
    matrix[60] = B

if data[60] == 0:
    matrix[60] = D

#light 1
if data[0] == 1:
    matrix[0] = G
    matrix[1] = G
    matrix[2] = G

if data[0] == 0:
    matrix[0] = R
    matrix[1] = R
    matrix[2] = R

#door 2
if data[56] == 1:
    matrix[56] = G
    matrix[57] = G
    matrix[58] = G

if data[56] == 0:
    matrix[56] = R
    matrix[57] = R
    matrix[58] = R


sense.set_pixels(matrix)
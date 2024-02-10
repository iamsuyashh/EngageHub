import pyrebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

config = {
 "apiKey": "AIzaSyDvGnYNlMBLq5cDR8w06abvj-PQ-MN7kbc",
  "authDomain": "engagehub-7a1ab.firebaseapp.com",
  "projectId": "engagehub-7a1ab",
  "storageBucket": "engagehub-7a1ab.appspot.com",
  "messagingSenderId": "983754062149",
  "appId": "1:983754062149:web:91b435866d838ae4b3e62c",
  "databaseURL": "https://engagehub-7a1ab-default-rtdb.asia-southeast1.firebasedatabase.app/",
  "serviceAccount": "engagehub-7a1ab-firebase-adminsdk-3hzsz-cd6e2eb4e3.json"
}
cred = credentials.Certificate(r"engagehub-7a1ab-firebase-adminsdk-3hzsz-cd6e2eb4e3.json")
firebase = pyrebase.initialize_app(config)
firebase_admin.initialize_app(cred)
firestoreDb = firestore.client()
data={
    'Event_id':1,
    'Event_Name': "Techno",
    'Details':"adsifknaksdfn"
}
docRef = firestoreDb.collection("Events").document('Event1')
docRef.set(data)
auth = firebase.auth()
db = firebase.database()
def add_user_to_firestore(user_id, user_data):
    try:
        # Add the user to the 'users' collection
        db.child('events').child("event1").set(user_data)
        users = db.child("users").get()
        print(users.val())
        print("User added to Firestore successfully!")
    except Exception as e:
        print("Error:", e)

def read_event_details():
    try:
        # Add the user to the 'users' collection
        event_data =  db.child('events').get().val()
        if event_data:
            print("Event Data:",event_data)
    except Exception as e:
        print("Error:", e)

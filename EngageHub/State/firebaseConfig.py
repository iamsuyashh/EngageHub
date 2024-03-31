import pyrebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore, storage
import reflex as rx
from ..components.eventCard import EventState
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
# docRef = firestoreDb.collection("Events").document('Event1')
# docRef.set(data)
auth = firebase.auth()
db = firestore.client()
def add_user_to_firestore(user_data):
    try:
        email = user_data.get("email")
        # Add the user to the 'users' collection
        db.collection('users').document(email).set(user_data)
        print("User added to Firestore successfully!")
    except Exception as e:
        print("Error:", e)
def read_users():
    try:
        # Retrieve all documents from the 'users' collection
        users_ref = db.collection('users').get()
        users_data = []
        for user in users_ref:
            users_data.append(user.to_dict())
        return users_data

    except Exception as e:
        print("Error:", e)
        return []
def read_events():
    try:
        events_ref = db.collection('Event').get()
        events_data = []
        for event in events_ref:
            event_data = event.to_dict()
            # Fetch the registered users for this event
            registered_users_ref = event.reference.collection('registered_users').get()
            registered_users_data = []
            for user in registered_users_ref:
                registered_users_data.append(user.to_dict())
            event_data['registered_users'] = registered_users_data
            events_data.append(event_data)
            # print(events_data)
        return events_data

    except Exception as e:
        print("Error:", e)
        return []
def get_registered_user(eventName):
    events = read_events()
    for event in events:
        if event['header'] == eventName:
            print(event.get('registered_users', []))
            return event.get('registered_users', [])

    return []

def read_event_details():
    try:
        # Initialize an empty list to store event details
        events_list = []

        # Retrieve all documents from the 'Events' collection
        events_ref = db.collection('Event').stream()
        for event in events_ref:
            # Convert each event document to a dictionary
            event_dict = event.to_dict()

            # Append the event dictionary to the events list
            events_list.append(event_dict)

        # Return the list of event dictionaries
        return events_list if events_list else []  # Return an empty list if events_list is None

    except Exception as e:
        print("Error:", e)
        return []
def read_featured_video():
    try:
        # Initialize an empty list to store event details
        events_list = []

        # Retrieve all documents from the 'Events' collection
        url_list = db.collection('featuredvideo').document("url").get()
        if url_list.exists:
            # Convert the document to a dictionary
            event_dict = url_list.to_dict()
            events_list.append(event_dict)
            return event_dict  # Return a list containing the event dictionary
        else:
            print(f"Event '{url_list}' does not exist")

        # Return the list of event dictionaries
        return events_list if events_list else []  # Return an empty list if events_list is None

    except Exception as e:
        print("Error:", e)
        return []

def update_featured_video_link(new_link):
    try:
        # Reference to the "featured video" collection
        collection_ref = db.collection('featuredvideo')

        # Reference to the document to be updated
        doc_ref = collection_ref.document("url")

        # Update the 'link' field inside the 'url' field with the new link
        doc_ref.set({'link': new_link})

        print("Document link updated successfully.")

    except Exception as e:
        print("Error:", e)
def read_live_stream_link():
    try:
        # Initialize an empty list to store event details
        events_list = []

        # Retrieve all documents from the 'Events' collection
        url_list = db.collection('liveStream').document("url").get()
        if url_list.exists:
            # Convert the document to a dictionary
            event_dict = url_list.to_dict()
            events_list.append(event_dict)
            return event_dict  # Return a list containing the event dictionary
        else:
            print(f"Event '{url_list}' does not exist")

        # Return the list of event dictionaries
        return events_list if events_list else []  # Return an empty list if events_list is None

    except Exception as e:
        print("Error:", e)
        return []
def update_live_stream_link(new_link):
    try:
        # Reference to the "featured video" collection
        collection_ref = db.collection('liveStream')

        # Reference to the document to be updated
        doc_ref = collection_ref.document("url")

        # Update the 'link' field inside the 'url' field with the new link
        doc_ref.set({'link': new_link})

        print("Document link updated successfully.")

    except Exception as e:
        print("Error:", e)
def read_event_info(eventName):
    print("Event State in Firebase: ",eventName)
    # eventN = State.current_event
    eventN= str(eventName)
    try:
        # Retrieve the document from the 'Events' collection
        event_list=[]
        # eventName = GlobalState.eventName
        event_ref = db.collection('Event').document(eventN).get()
        if event_ref.exists:
            # Convert the document to a dictionary
            event_dict = event_ref.to_dict()
            event_list.append(event_dict)
            return event_dict  # Return a list containing the event dictionary
        else:
            print(f"Event '{eventName}' does not exist")
            return None  # Return an empty list if the document does not exist

    except Exception as e:
        print("Error:", e)
        return None
def read_all_data():
    try:
    # Initialize an empty dictionary to store event details
        events_dict = {}

        # Retrieve all documents from the 'Events' collection
        events_ref = db.collection('Event').stream()
        for event_doc in events_ref:
            # Convert each event document to a dictionary
            event_dict = event_doc.to_dict()

            # Initialize an empty list to store documents of the 'Subcollection'
            subcollection_docs = []

            # Get the reference to the 'Subcollection' of the current event document
            subcollection_ref = event_doc.reference.collection('Subcollection')

            # Retrieve all documents from the 'Subcollection'
            docs_ref = subcollection_ref.stream()
            for doc in docs_ref:
                # Convert each document to a dictionary and append it to the list
                subcollection_docs.append(doc.to_dict())

            # Add the list of documents to the event dictionary
            event_dict['Subcollection'] = subcollection_docs

            # Add the event dictionary to the events dictionary
            events_dict[event_doc.id] = event_dict

        # Return the dictionary of event details
        return events_dict

    except Exception as e:
        print("Error:", e)
        return {}
    
def createEvent(header, date, description, location, venue, link, time, url):
    try:
        # Upload file to Firebase Storage
        # Add event data to Firestore
        event_data = {
            "header": header,
            "date": date,
            "description": description,
            "location": location,
            "venue": venue,
            "link": link,
            "time": time,
            "url": url,
        }

        db.collection('Event').document(header).set(event_data)

        print("Event added to Firestore successfully!")
    except Exception as ex:
        print("Error:", ex)
def read_upcoming_events(limit=3):
    try:
        # Initialize an empty list to store event details
        events_list = []

        # Retrieve a limited number of documents from the 'Events' collection
        events_ref = db.collection('UpcomingEvents').limit(limit).stream()
        for event in events_ref:
            # Convert each event document to a dictionary
            event_dict = event.to_dict()

            # Append the event dictionary to the events list
            events_list.append(event_dict)

        # Return the list of event dictionaries
        return events_list if events_list else []  # Return an empty list if events_list is None

    except Exception as e:
        print("Error:", e)
        return []
def updateEvent(header, date, description, location, venue, link, time, url):
    try:

        # Add event data to Firestore
        event_data = {
            "header": header,
            "date": date,
            "description": description,
            "location": location,
            "venue": venue,
            "link": link,
            "time": time,
            "url": url,
        }

        db.collection('Event').document(header).set(event_data)
        event_ref = db.collection('UpcomingEvents').document(header)
        event = event_ref.get()
        if event.exists:
             event_ref.set(event_data)
        print("Event added to Firestore successfully!")
    except Exception as ex:
        print("Error:", ex)
def delteEvent(header):
    try:

        # Add event data to Firestore
        db.collection('Event').document(header).delete()
        print(f"Event '{header}' deleted successfully!")
        db.collection('UpcomingEvents').document(header).delete()
        print(f"Event '{header}' deleted successfully!")
        return True
    except Exception as ex:
        print("Error:", ex)
def createUpcomingEvent(header,date,description,location,venue,link,time,url):
    try:
        event_list=[]
        db.collection('UpcomingEvents').document(header).set({
            "header":header,
            "date": date,"description":description,"location":location,"venue":venue,"link":link,"time":time,"url":url
        })
        createEvent(header,date,description,location,venue,link,time,url)
        print("Event added to Firestore successfully!")
    except Exception as ex:
        print("Error",ex)
def register_for_event(header,name,email,pid,ph_Number):
    try:
        db.collection('Event').document(header).collection('registered_users').document(str(pid)).set({
            "name": name,
            "email": email,
            "pid": pid,
            "ph_Number": ph_Number
        })
        print("Event added to Firestore successfully!")
        return True
    except Exception as ex:
        print("Error",ex)
        return False
    
    # Image Carousel
def fetch_images():
    images = []
    docs = db.collection("Carousel").stream()
    for doc in docs:
        images.append(doc.to_dict()['url'])
        print("Images:",images)
    return images
def add_images(images):
    for image_url in images:
        db.collection("Carousel").add({'url': image_url})
def fetch_registered_users(event_name):
    event_ref = db.collection('Event').document(event_name)
    registered_users_dict = {}
    if event_ref.get().exists:
        registered_users_ref = event_ref.collection('registered_users').get()
        for user_doc in registered_users_ref:
            user_id = user_doc.id
            user_data = user_doc.to_dict()
            registered_users_dict[user_id] = user_data
        print("registered_users_dict", registered_users_dict)
    return registered_users_dict
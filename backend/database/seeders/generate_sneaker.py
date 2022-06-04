import json
import random
from faker import Faker

faker_canada = Faker('es_CA')
with open('names.json', 'r') as f:
  names = json.load(f)
  
with open('sneakers.json', 'r') as f:
  sneakers = json.load(f)

sneakersDummyJSON = []
for i in range (len(sneakers)):
    sneakersDummyJSON.append({
        "name": sneakers[i]["shoeName"],
        "brand": sneakers[i]["brand"],
        "colorway": sneakers[i]["colorway"],
        "location": faker_canada.city(),
        "size": random.randint(6,15),
        "rate": (sneakers[i]["retailPrice"])/5,
        "description": sneakers[i]["description"],
        "listedBy": i,
        "rentedBy": (i+1) % len(sneakers),
        "imageURL": sneakers[i]["thumbnail"]
    })
    
with open('dummy_sneakers.json', 'w') as f:
    json.dump(sneakersDummyJSON, f)
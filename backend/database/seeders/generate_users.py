from random import shuffle, seed
import json
from faker.providers.person.en import Provider

first_names = list(set(Provider.first_names))
last_names = list(set(Provider.last_names))

seed(4321)
shuffle(first_names)
names = []
for i in range(86):
    names.append({
        "firstName": first_names[i],
        "lastName": last_names[i],
        "email": f"{first_names[i]}.{last_names[i]}@gmail.com"
    })

with open('names.json', 'w') as f:
    json.dump(names, f)
from typing import List, Tuple, Callable
from tkinter import Tk
from tkinter.filedialog import askopenfilename
import json

Tk().withdraw()

def printSongDetails(song):
    print(f'{song["officialName"]} by {song["songAuthor"]}')
    print("-" * 50)
    print(f'Difficulty: {song["difficulty"]}')
    print(f'Settings: \n{song["settings"]}')

def printKeyDetails(key):
    keysymbol = key['symbol']
    if keysymbol == " ":
        keysymbol = "space"
    print(f'{keysymbol}, for {key["duration"]} beats, color: {key["color1"]} -> {key["color2"]}, speed: {key["speed"]} px/ms')

def barredInput(prompt: str, requirement: Callable[[str], bool]):
    while True:
        inp = input(prompt)
        if requirement(inp):
            return inp

def saveData(FILE: str, song):
    with open(FILE, "w") as outfile:
        outfile.write(json.dumps(song, indent=4))

FILE = askopenfilename()

with open(FILE) as infile:
    data = infile.read()

song = json.loads(data)

printSongDetails(song)

mapM = [-1, 0]
totalBeats = 0
nextMeasure = 1
for i in range(len(song['keys'])):
    while totalBeats >= nextMeasure * 4:
        nextMeasure += 1
        mapM.append(i)
        print("-" * 25 + str(nextMeasure))
    totalBeats += song['keys'][i]['duration']
    printKeyDetails(song['keys'][i])
mapM.append(len(song['keys']))

running = True
while running:
    while totalBeats >= nextMeasure * 4:
        nextMeasure += 1
        mapM.append(i)
        print("-" * 25 + str(nextMeasure))
    
    inp = input()
    if inp.upper() == "EXIT":
        running = False
        break
    elif inp.upper() == "SAVE":
        saveData(FILE, song)
        continue
    
    newkey = inp.split()
    if newkey[0] == "space":
        newkey[0] = " "

    newkey[1], newkey[4] = float(newkey[1]), float(newkey[4])
    
    song['keys'].append({"symbol": newkey[0], "duration": newkey[1], "color1": newkey[2], "color2": newkey[3], "speed": newkey[4]})

    totalBeats += newkey[1]

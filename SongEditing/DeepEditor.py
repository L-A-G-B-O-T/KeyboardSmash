
from typing import List, Tuple, Callable
from tkinter import Tk     # from tkinter import Tk for Python 3.x
from tkinter.filedialog import askopenfilename
import json

Tk().withdraw() # we don't want a full GUI, so keep the root window from appearing

songMeasures = 0

def printSongDetails(song):
    print(f'{song["officialName"]} by {song["songAuthor"]}')
    print("-" * 50)
    print(f'Difficulty: {song["difficulty"]}')
    print(f'Settings: \n{song["settings"]}')
    print(f'Measures: {songMeasures}')

def printKeyDetails(key):
    keysymbol = key['symbol']
    if keysymbol == " ":
        keysymbol = "space"
    print(f'{keysymbol}, for {key["duration"]} beats, color: {key["color1"]} -> {key["color2"]}, speed: {key["speed"]} px/ms')

def getMapMeasure(song):
    global songMeasures
    mapM = [-1, 0]
    totalBeats = 0
    nextMeasure = 1
    for i in range(len(song['keys'])):
        while totalBeats >= nextMeasure * 4:
            nextMeasure += 1
            mapM.append(i)
        totalBeats += song['keys'][i]['duration']
    mapM.append(len(song['keys']))
    songMeasures = len(mapM) - 2

    return mapM

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
mapMeasureToKeyIndex = getMapMeasure(song)
    
printSongDetails(song)
while True:
    measureLoc = int(input("Input a measure Number to get data about a song measure: "))
    
    
    focus = True
    while focus:
        print(f"\nMeasure #{measureLoc}:")
        low = mapMeasureToKeyIndex[measureLoc]
        high = mapMeasureToKeyIndex[measureLoc + 1]
        for i in range(low, high):
            printKeyDetails(song["keys"][i])
        print('''
0: Exit this measure
1: Next measure
2: Previous measure
3: Edit this measure's keys
4: Insert a new key
5: Remove an existing key
6: Save all changes''')
        query = int(input('Enter a number to perform its corresponding query: '))
        match query:
            case 0:
                focus = False
            case 1:
                measureLoc = min(measureLoc + 1, songMeasures)
            case 2:
                measureLoc = max(0, measureLoc - 1)
            case 3:
                j = int(barredInput("\nEnter the key # that you want to edit: ", lambda inp : 0 <= int(inp) < high - low))
                oldkey = song["keys"][j + low]
                keysymbol = oldkey['symbol']
                if keysymbol == " ":
                    keysymbol = "space"
                key = list(input(f"\nEnter the values of the edited key in this format:\n{keysymbol} {oldkey['duration']} {oldkey['color1']} {oldkey['color2']} {oldkey['speed']}\n").split())
                if key[0].lower() == "space":
                    key[0] = " "
                song["keys"][j + low] = {"symbol": key[0],"duration": float(key[1]),"color1": key[2],"color2": key[3],"speed": float(key[4])}
                mapMeasureToKeyIndex = getMapMeasure(song)
            case 4:
                j = int(barredInput("\nEnter the key # position where you want to insert the new key: ", lambda inp : 0 <= int(inp) < high - low + 1))
                key = list(input("\nEnter the values of the new key in this format:\nsymbol duration color1 color2 speed\n").split())
                if key[0].lower() == "space":
                    key[0] = " "
                song["keys"].insert(j + low, {"symbol": key[0],"duration": float(key[1]),"color1": key[2],"color2": key[3],"speed": float(key[4])})
                mapMeasureToKeyIndex = getMapMeasure(song)
            case 5:
                j = int(barredInput("\nEnter the key # that you want to remove: ", lambda inp : 0 <= int(inp) < high - low))
                printKeyDetails(song["keys"][j + low])
                if input("To Confirm, type DELETE: ") == "DELETE":
                    song["keys"].pop(j + low)
                    mapMeasureToKeyIndex = getMapMeasure(song)
            case 6:
                saveData(FILE, song)
            case _:
                pass

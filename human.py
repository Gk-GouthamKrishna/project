import cv2
import imutils
import numpy as np
import argparse

HOGCV = cv2.HOGDescriptor()
HOGCV.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())
def detect(frame):
   
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    box_cordinates, weights =  HOGCV.detectMultiScale(gray, winStride=(8, 8), padding=(8, 8), scale=1.05)
    
    
    person = 1
    for x,y,w,h in box_cordinates:
        cv2.rectangle(frame, (x,y), (x+w,y+h), (0,255,0), 2)
        cv2.putText(frame, f'person {person}', (x,y), cv2.FONT_ITALIC, 0.5, (0,0,255), 1)
        person += 1
    
   
    cv2.putText(frame, f'Person in Room : {person-1}', (40,70), cv2.FONT_ITALIC, 0.8, (0,255,0), 2)
    cv2.imshow('output', frame)

    return frame



def detectfromvideo():   
    video = cv2.VideoCapture(0)
   

    while True:
        check, frame = video.read()

        frame = detect(frame)
        

        key = cv2.waitKey(1)
        if key == ord('q'):
                break

    video.release()
    cv2.destroyAllWindows()

detectfromvideo()



   

    

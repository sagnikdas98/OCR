#!/usr/bin/python3
import json
import numpy as np
import cv2 as cv
from PIL import Image


image_config_file = 'config/image_path.json'

image_file = json.load(open(image_config_file, 'r'))

image_file_path = image_file['image_path']
dest_file_path = image_file['dest_path']
print(image_file_path, dest_file_path )

# img = Image.open(img).convert('RGB')
# img = cv2.cvtColor(numpy.array(pil_image), cv2.COLOR_RGB2BGR)
# print(img.dtype)
# img.show()



img = cv.imread(image_file_path,flags=2)

ret,img = cv.threshold(img, 127, 255, cv.THRESH_BINARY)

# img = cv.adaptiveThreshold(img,255,cv.ADAPTIVE_THRESH_GAUSSIAN_C,cv.THRESH_BINARY,11,2)


# cv.imshow("window",img)

# cv.waitKey(3000) 

cv.imwrite(dest_file_path, img)
cv.destroyAllWindows() 
#!/usr/bin/python3
import json
import numpy as np
import cv2 as cv
from PIL import Image


image_config_file = 'config/image_path.json'
img = json.load(open(image_config_file, 'r'))['image_path']
print(img)

# img = Image.open(img).convert('RGB')
# img = cv2.cvtColor(numpy.array(pil_image), cv2.COLOR_RGB2BGR)
# print(img.dtype)
# img.show()



img = cv.imread(img,cv.IMREAD_UNCHANGED)
cv.imshow("window",img)
cv.waitKey(0) 
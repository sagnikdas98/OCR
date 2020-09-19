#!/usr/bin/python3
import json
import pdf2image

pdf_config_file = 'config/pdf_path.json'
pdf_config = json.load(open(pdf_config_file, 'r'))



images = pdf2image.convert_from_path(pdf_config['pdf_path'],output_folder=pdf_config['output_image_path'], fmt="jpeg", )
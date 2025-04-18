import zipfile
import os
from datetime import datetime

now = datetime.now()

current_day = now.day
current_month = now.month
current_year = now.year % 2000

def zip_directory(directory, zip_name):
    with zipfile.ZipFile(zip_name, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(directory):
            for file in files:
                file_path = os.path.join(root, file)
                zipf.write(file_path, os.path.relpath(file_path, directory))

# Example usage
directory_to_zip = './build'
output_zip_file = f'./build_archive/build-{current_month:02}-{current_day:02}-{current_year}.zip'
output_zip_2 = f'./current-build.zip'
zip_directory(directory_to_zip, output_zip_file)
zip_directory(directory_to_zip, output_zip_2)
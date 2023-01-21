import os
import random


def random_rename(dir):
    files = os.listdir(dir)

    if not dir.endswith('/'):
        dir += '/'

    for filename in files:
        splitted_filename = filename.split('.')
        new_name = str(random.randint(10000, 99999))

        if (len(splitted_filename) > 1):
            new_name += '.' + splitted_filename[-1]

        os.rename(dir + filename, dir + new_name)

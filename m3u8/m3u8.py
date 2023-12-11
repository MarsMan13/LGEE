import requests
from tqdm import tqdm

def string_to_time(time_str):
    splitted = time_str.split(':')
    try:
        return (int(splitted[0]), int(splitted[1]), int(splitted[2]))
    except:
        print("Your time format must be Hours:Minutes:Seconds")

def time_to_idx(time_tuple):
    h, m, s = time_tuple
    return (3600 * h + 60 * m + s) // 3

m3u8_url = input("Input m3u8 original url: ")
start_time = input("Input clip start time: ")
end_time = input("Input clip end time: ")
fname = input("Input output file name: ")

start_idx = time_to_idx(string_to_time(start_time))
end_idx = time_to_idx(string_to_time(end_time))

comb_start_idx = m3u8_url.find('playlist.m3u8')
general_url = m3u8_url[:comb_start_idx]

with open(fname, "wb") as ofile:
    for i in tqdm(range(start_idx, end_idx)):
        full_url = general_url + f'seg-{i}.ts'
        data = requests.get(full_url).content
        ofile.write(data)

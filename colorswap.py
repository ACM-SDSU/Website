from PIL import Image

# Define the red and white colors
red = (237, 54, 36) # ED3624
white = (255, 255, 255)

# # Open the image
# img = Image.open("./src/images/hack25/proposal.jpeg").convert("RGB")
# pixels = img.load()

# # Swap colors
# for y in range(img.height):
#     for x in range(img.width):
#         px = pixels[x,y]
#         if px == red:
#             pixels[x,y] = white
#         elif px == white:
#             pixels[x,y] = red
#         else:
#             lerp = 1 - (px[0]-red[0])/18
#             r = red[0] + lerp * (white[0]-red[0])
#             g = red[1] + lerp * (white[1]-red[1])
#             b = red[2] + lerp * (white[2]-red[2])
#             pixels[x,y] = (int(r),int(g),int(b))

# # Save the result
# img.save("./src/images/hack25/proposal_swap.jpeg")

thickness = 18

def addRedBorder(imgname):
    # Open the image
    filename = f"./src/images/hack25/{imgname}.jpeg"
    img = Image.open(filename).convert("RGB")
    pixels = img.load()
    for y in range(img.height):
        for i in range(thickness):
            pixels[i,y] = red
            pixels[img.width-1-i,y] = red
    for x in range(img.width):
        for i in range(thickness):
            pixels[x,i] = red
            pixels[x,img.height-1-i] = red
    img.save(f"./src/images/hack25/{imgname}_final.jpeg")

for file in ["register","lastday","proposal","projectdue","hackathon"]:
    addRedBorder(file)

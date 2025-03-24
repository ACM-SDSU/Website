from PIL import Image

# Open the image
img = Image.open("./src/images/hack25/proposal.jpeg").convert("RGB")
pixels = img.load()

# Define the red and white colors
red = (237, 54, 36) # ED3624
white = (255, 255, 255)

# Swap colors
for y in range(img.height):
    for x in range(img.width):
        px = pixels[x,y]
        if px == red:
            pixels[x,y] = white
        elif px == white:
            pixels[x,y] = red
        else:
            lerp = 1 - (px[0]-red[0])/18
            r = red[0] + lerp * (white[0]-red[0])
            g = red[1] + lerp * (white[1]-red[1])
            b = red[2] + lerp * (white[2]-red[2])
            pixels[x,y] = (int(r),int(g),int(b))

# Save the result
img.save("./src/images/hack25/proposal_swap.jpeg")

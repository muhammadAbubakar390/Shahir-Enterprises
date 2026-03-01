from PIL import Image
import os

img = Image.open('public/partners-all.png')
width, height = img.size

# The image has 6 rows and 2 columns
rows = 6
cols = 2

# We need to account for the horizontal lines and some padding
# Let's try splitting it into 12 even chunks first and then crop the white space
chunk_w = width // cols
chunk_h = height // rows

if not os.path.exists('public/brands'):
    os.makedirs('public/brands')

for r in range(rows):
    for c in range(cols):
        left = c * chunk_w
        top = r * chunk_h
        right = left + chunk_w
        bottom = top + chunk_h
        
        # Crop the logo area
        logo = img.crop((left, top, right, bottom))
        
        # Trim white space (optional but good)
        # We can find the bounding box of non-white pixels
        # Assuming background is white (255, 255, 255)
        bg = Image.new(logo.mode, logo.size, (255, 255, 255))
        from PIL import ImageChops
        diff = ImageChops.difference(logo, bg)
        bbox = diff.getbbox()
        if bbox:
            logo = logo.crop(bbox)
            # Add some padding back
            pad = 20
            new_logo = Image.new("RGB", (logo.width + pad*2, logo.height + pad*2), (255, 255, 255))
            new_logo.paste(logo, (pad, pad))
            logo = new_logo
            
        logo.save(f'public/brands/brand_{r*cols + c + 1}.png')

print("Extraction complete")

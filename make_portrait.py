from PIL import Image

raw_img = Image.open('src/assets/kalam_raw.jpg')
w, h = raw_img.size

# Crop Kalam's face from the 4800x6000 high-res photo
crop_box = (int(w * 0.22), int(h * 0.10), int(w * 0.88), int(h * 0.72))
kalam_face = raw_img.crop(crop_box).resize((320, 380), Image.Resampling.LANCZOS)
kalam_face.save('src/assets/kalam_web_portrait.jpg', quality=98)
print('Successfully created kalam_web_portrait.jpg')

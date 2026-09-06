from PIL import Image, ImageDraw, ImageFont

raw_img = Image.open('src/assets/kalam_raw.jpg')
w, h = raw_img.size
crop_box = (int(w * 0.22), int(h * 0.10), int(w * 0.88), int(h * 0.72))
kalam_face = raw_img.crop(crop_box).resize((360, 480), Image.Resampling.LANCZOS)

card = Image.new('RGB', (800, 920), color='#f4efe6')
draw = ImageDraw.Draw(card)

for y in range(680):
    r = int(246 - (y/680)*12)
    g = int(241 - (y/680)*12)
    b = int(233 - (y/680)*12)
    draw.line([(0, y), (800, y)], fill=(r, g, b))

card.paste(kalam_face, (410, 160))

try:
    font_quote = ImageFont.truetype('georgia.ttf', 32)
    font_author = ImageFont.truetype('arialbd.ttf', 24)
    font_insp = ImageFont.truetype('georgia.ttf', 26)
    font_name = ImageFont.truetype('arialbd.ttf', 38)
    font_sub = ImageFont.truetype('arial.ttf', 28)
except Exception as e:
    font_quote = font_author = font_insp = font_name = font_sub = ImageFont.load_default()

lines = [
    '"Dream,',
    'Dream, Dream.',
    'Dreams transform',
    'into thoughts',
    'and thoughts result',
    'in action."'
]

y_pos = 140
for l in lines:
    draw.text((45, y_pos), l, fill='#27272a', font=font_quote)
    y_pos += 46

draw.text((45, y_pos + 20), '- Dr. A.P.J. Abdul Kalam', fill='#475569', font=font_author)

banner = Image.new('RGB', (800, 240), color='#4a2c0d')
b_draw = ImageDraw.Draw(banner)

for y in range(240):
    r = int(74 - (y/240)*30)
    g = int(44 - (y/240)*20)
    b = int(13 - (y/240)*5)
    b_draw.line([(0, y), (800, y)], fill=(r, g, b))

b_draw.text((400, 35), 'Inspired by the vision of', fill='#fef08a', font=font_insp, anchor='mm')
b_draw.text((400, 105), 'Dr. A.P.J. Abdul Kalam', fill='#fbbf24', font=font_name, anchor='mm')
b_draw.text((400, 175), 'Celebrating Young Achievers', fill='#ffffff', font=font_sub, anchor='mm')

card.paste(banner, (0, 680))
card.save('src/assets/kalam_quote_card_web.jpg', quality=98)
print('Successfully generated kalam_quote_card_web.jpg')

from PIL import Image, ImageDraw, ImageFont
import os

logos = [
    {"name": "claude", "bg": "#D97757", "text": "Claude", "tx": "#FFFFFF"},
    {"name": "n8n", "bg": "#FF6C37", "text": "n8n", "tx": "#FFFFFF"},
    {"name": "openai", "bg": "#10A37F", "text": "OpenAI", "tx": "#FFFFFF"},
    {"name": "antigravity", "bg": "#000000", "text": "Anti-G", "tx": "#FFFFFF"},
]

out_dir = "/Users/arjunthapa/Desktop/My portfolio/3d-portfolio/public/images"

for logic in logos:
    img = Image.new('RGB', (256, 256), color=logic["bg"])
    d = ImageDraw.Draw(img)
    # Very basic centering
    w, h = 256, 256
    text = logic["text"]
    d.text((w/2 - len(text)*3, h/2), text, fill=logic["tx"])
    img.save(os.path.join(out_dir, f"{logic['name']}.png"))

print("Created 4 placeholder logos")

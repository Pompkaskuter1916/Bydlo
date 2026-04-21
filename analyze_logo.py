from PIL import Image
import sys

def analyze(path):
    print(f"Analyzing {path}")
    try:
        img = Image.open(path).convert('RGBA')
        pixels = img.getdata()
        
        colors = {}
        for r, g, b, a in pixels:
            if a > 0: # non-transparent
                color = (r, g, b)
                colors[color] = colors.get(color, 0) + 1
        
        # sort by frequency
        sorted_colors = sorted(colors.items(), key=lambda x: x[1], reverse=True)[:5]
        print("Top 5 non-transparent colors:")
        for color, count in sorted_colors:
            hex_color = '#{:02x}{:02x}{:02x}'.format(*color)
            print(f"Color: {hex_color} count: {count}")
    except Exception as e:
        print(f"Error: {e}")

analyze('/Users/kamil/Downloads/logosv2-main/public/logobeztla.webp')
analyze('/Users/kamil/Downloads/logosv2-main/public/nowelogo.webp')

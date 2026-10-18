with open('/tmp/shopunforsaken.html') as f:
    lines = f.readlines()

output = []
for line in lines:
    if 'slideshow__slide' in line or 'product-card' in line or 'thb-full-menu' in line or 'section-' in line:
        output.append(line.strip()[:150])

print(f"Total matching lines: {len(output)}")
for l in output[:40]:
    print(l)

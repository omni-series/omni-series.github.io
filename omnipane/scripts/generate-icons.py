"""Generate favicon assets from public/images/OmniPaneExplorer.png (preserves alpha)."""
from __future__ import annotations

import base64
from io import BytesIO
from pathlib import Path

from PIL import Image

PUBLIC = Path(__file__).resolve().parents[1]
SRC = PUBLIC / "images" / "OmniPaneExplorer.png"
ICONS = PUBLIC / "images" / "icons"


def load_source() -> Image.Image:
    if not SRC.is_file():
        raise FileNotFoundError(SRC)
    return Image.open(SRC).convert("RGBA")


def save_png(img: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, format="PNG", optimize=True)


def save_ico(img: Image.Image, path: Path, sizes: tuple[int, ...] = (16, 32, 48)) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, format="ICO", sizes=[(s, s) for s in sizes])


def save_svg_with_embed(img: Image.Image, path: Path, embed_size: int = 256) -> None:
    resized = img.resize((embed_size, embed_size), Image.Resampling.LANCZOS)
    buf = BytesIO()
    resized.save(buf, format="PNG", optimize=True)
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    svg = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        f'<svg xmlns="http://www.w3.org/2000/svg" '
        f'xmlns:xlink="http://www.w3.org/1999/xlink" '
        f'viewBox="0 0 {embed_size} {embed_size}" role="img" '
        f'aria-label="OmniPane Explorer">\n'
        f'  <image width="{embed_size}" height="{embed_size}" '
        f'preserveAspectRatio="xMidYMid meet" '
        f'xlink:href="data:image/png;base64,{b64}"/>\n'
        "</svg>\n"
    )
    path.write_text(svg, encoding="utf-8")


def save_svg_external(path: Path, href: str, size: int = 1024) -> None:
    svg = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        f'<svg xmlns="http://www.w3.org/2000/svg" '
        f'xmlns:xlink="http://www.w3.org/1999/xlink" '
        f'viewBox="0 0 {size} {size}" role="img" aria-label="OmniPane Explorer">\n'
        f'  <image width="{size}" height="{size}" preserveAspectRatio="xMidYMid meet" '
        f'xlink:href="{href}"/>\n'
        "</svg>\n"
    )
    path.write_text(svg, encoding="utf-8")


def main() -> None:
    src = load_source()
    ICONS.mkdir(parents=True, exist_ok=True)

    save_png(src.resize((16, 16), Image.Resampling.LANCZOS), ICONS / "favicon-16x16.png")
    save_png(src.resize((32, 32), Image.Resampling.LANCZOS), ICONS / "favicon-32x32.png")
    save_png(src.resize((180, 180), Image.Resampling.LANCZOS), ICONS / "apple-touch-icon.png")
    save_ico(src, ICONS / "favicon.ico")
    save_ico(src, PUBLIC / "favicon.ico")  # root for /favicon.ico auto-discovery

    # SVG: embed 256px PNG (alpha preserved) for portable favicon
    save_svg_with_embed(src, ICONS / "favicon.svg", embed_size=256)
    save_svg_external(ICONS / "favicon-src.svg", "../OmniPaneExplorer.png", size=src.width)

    print(f"Source: {SRC} ({src.width}x{src.height})")
    for p in sorted(ICONS.glob("*")):
        print(f"  {p.name}: {p.stat().st_size} bytes")
    print(f"  favicon.ico (root): {(PUBLIC / 'favicon.ico').stat().st_size} bytes")


if __name__ == "__main__":
    main()

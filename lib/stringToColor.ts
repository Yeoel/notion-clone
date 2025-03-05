function stringToLightColor(str: string) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Generate color components (R, G, B) in the light range (150-255)
  let r = (hash >> 16) & 0xff;
  let g = (hash >> 8) & 0xff;
  let b = hash & 0xff;

  // Ensure the color is in the light range by shifting values up
  r = Math.floor(150 + (r % 106)); // 150-255 range
  g = Math.floor(150 + (g % 106));
  b = Math.floor(150 + (b % 106));

  return `rgb(${r}, ${g}, ${b})`;
}

export default stringToLightColor;

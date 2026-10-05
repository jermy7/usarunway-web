import fs from 'fs';
import { createRequire } from 'module';
import { feature } from 'topojson-client';
import { geoNaturalEarth1, geoContains } from 'd3-geo';
const require = createRequire(import.meta.url);
const topo = require('world-atlas/land-110m.json');
const land = feature(topo, topo.objects.land);
const W = 1000, H = 520;
const proj = geoNaturalEarth1().fitExtent([[10, 10], [W - 10, H - 10]], { type: 'Sphere' });
const step = 9;
const dots = [];
for (let y = step / 2; y < H; y += step) {
  const off = (Math.round(y / step) % 2) * (step / 2);
  for (let x = step / 2 + off; x < W; x += step) {
    const ll = proj.invert([x, y]);
    if (!ll || !isFinite(ll[0])) continue;
    if (geoContains(land, ll)) dots.push([Math.round(x), Math.round(y)]);
  }
}
const pt = (lon, lat) => proj([lon, lat]).map((v) => Math.round(v * 10) / 10);
const cities = {
  austin: pt(-97.74, 30.27),
  from: {
    Bratislava: pt(17.1, 48.15), London: pt(-0.12, 51.5), Munich: pt(11.58, 48.14),
    Madrid: pt(-3.7, 40.4), 'Tel Aviv': pt(34.78, 32.08), Tokyo: pt(139.7, 35.7), Seoul: pt(126.98, 37.56),
  },
};
fs.writeFileSync('src/data/map.json', JSON.stringify({ w: W, h: H, dots, cities }));
console.log(dots.length, 'dots');

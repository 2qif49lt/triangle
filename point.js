'use strict';

function generate_grid(width, height, bleed_x, bleed_y, cell_size, variance, rand_fn) {
  let w = width + bleed_x;
  let h = height + bleed_y;
  let half_cell_size = cell_size * 0.5;
  let double_v = variance * 2;
  let negative_v = -variance;

  let points = [];
  for (let i = -bleed_x; i < w; i += cell_size) {
    for (let j = -bleed_y; j < h; j += cell_size) {
      let x = (i + half_cell_size) + (rand_fn() * double_v + negative_v);
      let y = (j + half_cell_size) + (rand_fn() * double_v + negative_v);
      points.push([Math.floor(x), Math.floor(y)]);
    }
  }

  return points;
}

export { generate_grid};

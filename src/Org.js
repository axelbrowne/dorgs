class Org {
  constructor(col, row, env, parents = null) {
    this.c = col;
    this.r = row;
    this.env = env;
    this.lifetime = 0;
  }

  update() {
    console.log(this.lifetime);
    this.lifetime++;
    this.updateGrid();
  }

  updateGrid() {
    this.env.grid_map.setCellState(this.c, this.r, 'org');
    this.env.grid_map.setCellOwner(this.c, this.r, this);
    this.env.renderer.addToRender(this.env.grid_map.cellAt(this.c, this.r));
  }
}

export default Org;

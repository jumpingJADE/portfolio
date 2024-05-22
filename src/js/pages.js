export class Work {
  constructor(id, title, img_src, description, state) {
    this.id = id;
    this.title = title;
    this.img_src = img_src;
    this.description = description;
    this.state = state;
  }

  build() {
    const work = document.createElement('div');
    work.classList.add(`page-${this.state}`);
    // calculate turn id
    const turnId = Math.ceil(this.id / 2);
    // 设置 HTML 内容
    work.innerHTML = `
      <h1 class="title">${this.title}</h1>
      <div class="portfolio-box">
          <div class="img-box">
              <img src="${this.img_src}" alt="${this.title}">
          </div>
          <div class="info-box">
              <p>Description:</p>
              <p>${this.description}</p>
          </div>
      </div>
      <span class="number-page">${this.id}</span>
      <!-- next button -->
      <span class="nextprev-btn ${this.state === 'front' ? '' : 'back'}" data-page="turn-${turnId}">
      <i class='bx bx-chevron-${this.state === 'front' ? 'right' : 'left'}'></i>
      </span>
    `;

    return work;
  }
}

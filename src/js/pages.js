export class Work {
  constructor(id, title, img_src, description, state) {
    this.id = id;
    this.title = title;
    this.img_src = img_src;
    this.description = description;
    this.state = state; // 使用 'state' 以匹配你的数据库字段
  }

  build() {
    const work = document.createElement('div');
    work.classList.add(`page-${this.state}`); // 使用 `state` 来设置类名

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
      <span class="nextprev-btn" data-page="turn-${this.id}">
          <i class='bx bx-chevron-right'></i>
      </span>
    `;

    return work;
  }
}

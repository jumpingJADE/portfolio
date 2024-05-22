export class Profile {
  img_src = null;
  name = null;
  title = null;
  intro = null;
  constructor(name, img_src, title, intro) {
    this.name = name,
      this.img_src = img_src,
      this.title = title,
      this.intro = intro
  }
  build() {
    const profile = document.createElement('div')
    profile.classList.add('profile-page')
    profile.innerHTML = `
    <img src="${this.img_src}" alt="">
                    <h1>${this.name}<h1>
                    <h3>${this.title}</h3>
                    <p>${this.intro}</p>
    `
    return profile;
  }

}
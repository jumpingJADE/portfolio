export class Profile {
  img_src = null;
  name = null;
  intro = null;
  constructor(name, img_src, intro) {
    this.name = name,
      this.img_src = img_src,
      this.intro = intro
  }
  build() {
    const profile = document.createElement('div')
    profile.classList.add('profile-page')
    profile.innerHTML = `
    <img src="${this.img_src}" alt="">
                    <h1>${this.name}/<h1>
                    <h3>Web Developer</h3>
                    <p>${this.intro}</p>
    `
    return profile;
  }

}
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Kevin 星球"
  text: "记录知识,问题思考"
  tagline: iOS, Flutter, Web, Java
  actions:
    - theme: brand
      text: GitHub
      link: https://github.com/husangen
  image:
    src: /assets/logo.png
    alt: logo

# features:
#   - title: 设计模式
#     details: 《设计模式》中一共归纳了23中设计模式，而这23中设计模式又可以分为：创建型、结构型和行为型

---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
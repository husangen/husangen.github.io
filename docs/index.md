---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Kevin 星球"
  text: "求知 求思"
  tagline: Stay hungry, Stay foolish
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
  --vp-home-hero-name-color: transparent!important;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff)!important;

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%)!important;
  --vp-home-hero-image-filter: blur(44px)!important;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px)!important;
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px)!important;
  }
}
</style>

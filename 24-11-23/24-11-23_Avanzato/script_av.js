// Header generator Function //
const headerGen = () => {
  const headerEl = document.createElement("header");
  const headerWrapEl = document.createElement("div");

  const logoContEl = document.createElement("div");
  const logoEl = document.createElement("img");

  const menuContEl = document.createElement("nav");
  const menuUlEl = document.createElement("ul");
  const menuLiElOne = document.createElement("li");
  const menuLiElTwo = document.createElement("li");
  const menuLiElThree = document.createElement("li");
  const menuLiElFour = document.createElement("li");
  const menuLiElFive = document.createElement("li");

  const optionCont = document.createElement("div");
  const signUpEl = document.createElement("p");
  const orderNowEl = document.createElement("a");

  headerEl.className = "main-header";
  headerWrapEl.className = "header-wrapper";
  logoContEl.className = "logo";
  menuContEl.className = "menu";
  optionCont.className = "option";
  orderNowEl.className = "header-btn";

  logoEl.src = "img/logo.svg";
  menuLiElOne.textContent = "Home";
  menuLiElTwo.textContent = "About";
  menuLiElThree.textContent = "Shop";
  menuLiElFour.textContent = "Pages";
  menuLiElFive.textContent = "Contact";
  signUpEl.textContent = "Sing up";
  orderNowEl.textContent = "Order now";

  logoContEl.appendChild(logoEl);
  menuUlEl.append(
    menuLiElOne,
    menuLiElTwo,
    menuLiElThree,
    menuLiElFour,
    menuLiElFive
  );
  menuContEl.appendChild(menuUlEl);
  optionCont.append(signUpEl, orderNowEl);
  headerWrapEl.append(logoContEl, menuContEl, optionCont);
  headerEl.appendChild(headerWrapEl);
  document.body.appendChild(headerEl);

  return headerEl;
};
headerGen();

// Hero generator Function //
const heroGen = () => {
  const sectionHeroEl = document.createElement("section");
  const heroContEl = document.createElement("div");

  const heroTextContEl = document.createElement("div");
  const titleAlphaEl = document.createElement("h1");
  const pHeroEl = document.createElement("p");
  const btnHeroEl = document.createElement("button");

  const heroImgContEl = document.createElement("div");
  const heroImgEl = document.createElement("img");

  sectionHeroEl.className = "hero";
  heroContEl.className = "hero-wrapper";
  heroTextContEl.className = "hero-text";
  titleAlphaEl.textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";
  pHeroEl.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, nobis";
  btnHeroEl.textContent = "Go now";
  heroImgContEl.className = "hero-img";
  heroImgEl.src = "img/hero-img.jpg";

  heroTextContEl.append(titleAlphaEl, pHeroEl, btnHeroEl);
  heroImgContEl.appendChild(heroImgEl);
  heroContEl.append(heroTextContEl, heroImgContEl);
  sectionHeroEl.appendChild(heroContEl);

  document.body.appendChild(sectionHeroEl);

  return sectionHeroEl;
};
heroGen();

const objectCardList = [
  {
    title: "Lorem ipsum dolor",
    paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    img: "img/section-img1.jpg",
  },
  {
    title: "Lorem ipsum dolor",
    paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    img: "img/section-img2.jpg",
  },
  {
    title: "Lorem ipsum dolor",
    paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    img: "img/section-img3.jpg",
  },
];

// Card info generator function //
const cardGen = (objectCard, cardElClass) => {
  const cardEl = document.createElement("div");
  const imgCardEl = document.createElement("img");
  const titleCardEl = document.createElement("h4");
  const pCardEl = document.createElement("p");

  cardEl.className = cardElClass;
  imgCardEl.src = objectCard.img;
  imgCardEl.alt = "section image";
  titleCardEl.textContent = objectCard.title;
  pCardEl.textContent = objectCard.paragraph;

  cardEl.append(imgCardEl, titleCardEl, pCardEl);

  return cardEl;
};

const mainEl = document.createElement("main");
document.body.appendChild(mainEl);

const sectionInfoEl = document.createElement("section");
sectionInfoEl.className = "main-section";
mainEl.appendChild(sectionInfoEl);

const sectionTextContEl = document.createElement("div");
sectionTextContEl.className = "section-text";
sectionInfoEl.appendChild(sectionTextContEl);

const titleInfoSection = document.createElement("h3");
const pInfoSection = document.createElement("p");

titleInfoSection.textContent = "Lorem ipsum dolor sit amet.";
pInfoSection.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis at dolor animi.";

sectionTextContEl.append(titleInfoSection, pInfoSection);

const cardContEl = document.createElement("div");
cardContEl.className = "card-wrapper";

objectCardList.forEach((card) => {
  cardContEl.appendChild(cardGen(card, "card"));
});

sectionInfoEl.appendChild(cardContEl);

// Services generator function
const servicesSection = (classWrap, servicesImage) => {
  const sectionContEl = document.createElement("section");
  const servicesWrapEl = document.createElement("div");
  const imgServicesContEl = document.createElement("div");
  const imgServicesEl = document.createElement("img");

  const servicesTextContEl = document.createElement("div");
  const titleServicesEl = document.createElement("h2");
  const paragraphServicesEl = document.createElement("p");
  const btnServicesEl = document.createElement("button");

  sectionContEl.className = "services";
  servicesWrapEl.className = classWrap;
  imgServicesContEl.className = "services-img";
  imgServicesEl.src = servicesImage;

  servicesTextContEl.className = "services-text";
  titleServicesEl.textContent = "Lorem ipsum dolor sit amet.";
  paragraphServicesEl.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, nobis.";
  btnServicesEl.textContent = "Go now";

  imgServicesContEl.appendChild(imgServicesEl);
  servicesTextContEl.append(
    titleServicesEl,
    paragraphServicesEl,
    btnServicesEl
  );

  servicesWrapEl.append(imgServicesContEl, servicesTextContEl);
  sectionContEl.appendChild(servicesWrapEl);
  document.body.appendChild(sectionContEl);

  return sectionContEl;
};

servicesSection("services-wrapper", "img/services-img1.jpg");

const servicesLineContEl = document.createElement("div");
const servecesLineTextEl = document.createElement("h3");
servicesLineContEl.className = "services-line";
servecesLineTextEl.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, nobis.";
servicesLineContEl.appendChild(servecesLineTextEl);
document.body.appendChild(servicesLineContEl);

servicesSection("services-wrapper2", "img/services-img2.jpg");

const blogSectionEl = document.createElement("section");
const blogSectionText = document.createElement("div");
const titleBlog = document.createElement("h3");
const pBlogSection = document.createElement("p");
const blogCardWrapEl = document.createElement("div");

blogSectionEl.className = "blog-section";
blogSectionText.className = "section-text";
blogCardWrapEl.className = "blog-card-wrapper";

titleBlog.textContent = "Our blog";
pBlogSection.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, nobis.";

blogSectionText.append(titleBlog, pBlogSection);
blogSectionEl.append(blogSectionText, blogCardWrapEl);
document.body.appendChild(blogSectionEl);

// Blog card mock + forEach //
const cardBlogList = [
  {
    title: "Lorem ipsum dolor",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet sint aut voluptas sapiente voluptatibus earum eum, voluptatum optio dolorum molestias?",
    img: "img/blog-card-img1.jpg",
  },
  {
    title: "Lorem ipsum dolor",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet sint aut voluptas sapiente voluptatibus earum eum, voluptatum optio dolorum molestias?",
    img: "img/blog-card-img2.jpg",
  },
  {
    title: "Lorem ipsum dolor",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet sint aut voluptas sapiente voluptatibus earum eum, voluptatum optio dolorum molestias?",
    img: "img/blog-card-img1.jpg",
  },
  {
    title: "Lorem ipsum dolor",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet sint aut voluptas sapiente voluptatibus earum eum, voluptatum optio dolorum molestias?",
    img: "img/blog-card-img2.jpg",
  },
];

cardBlogList.forEach((card) => {
  blogCardWrapEl.appendChild(cardGen(card, "blog-card"));
});

const footerEl = document.createElement("footer");
document.body.appendChild(footerEl);

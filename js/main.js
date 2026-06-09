let images = [
  "https://images.openai.com/static-rsc-4/OXaCcbUSmHgC3e4CnIeP-mDN_-KEIw7AdqIRPZepyniye7IcrwgCc_hsnMVMa6N3TSY_OMFDXb1poCEIxybtGXg4sF4cSd5lQCV6Lw-FmXSw0bOWOOt5ZheItlynlBnkNWInJno7HqGJFTinI2pGREdQ6F1V-Qq1-iO3ThprmURoy6ctPB7l9W3z_7Y8oMKN?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/MJ_CRkXUooe7G8oQPqSf53nEAH46ORQfXsKZ4QhVVfRzIFO8XXNOf2lD9jnyViXRoA3ajPlMJDAArsvkBLt0UdpTC6HT5Fzs3YLyKMUKQloF_XM3NYCI8hx6p3K7bxKdzZSFlgN8iHWFtRGio_Mcz2eh7t9DWByn9E3nGKZXxtQuZSHralqeF8JR6cO_nZbV?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/VNgMPK0ky2EcQAO76NZtyfmSQvdWmzAe5DUst7mkkVlKyS9Y6DvWDhOH5zWiDX3z6KcrtH5EtfCAvG8JqmWxtLpvuG6vk83xgh8ioepM5ZysqlNtbYL15-dimvSSo0pFYByw9PY6ulsH4ia9PY-KI3ePO9R7HfswZJErMDpz3pVFcShY9T5U3npHdaLmaCue?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/IOlLklKNN0E6ReQTxivzX2uEfe7zkMA1H657iua2SPCkbitcB3xdIOsXwbOdkziikvvH9cti1p81bLIk-Rzm5b_0KS2S11VLdrdztx5jT2sw1wfGFmmL8BxLXZypArlDXaF-IGLBREyFkAlo3Xh-koKVpfRSEAjlOWm-7h2Fa308zWYyu0uDtUWK4wBmczgX?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/StuUuK_Clgd0y3-IP9K-AMw8fabduSM0riAazqPJRm6gNBX4MSzk3gKukrJ1fDXVA8MoctPeZW3JxJ5RH9jkFefYAKSOqzaoOuXYqvW5CAORNNRdVl7FFY8kDAVIc0dLv0E2wN0-vHzr0t08arp6zhnra8tpxdMe0-xPQBdh9t1yVDo047HrIgs8loMn82Iw?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/RqU3Vcl9bZQH9b0hRVYLyVY6QgYKhpJqtfr5T8qLKUVkGCLs-ezQgkm6jJATcj1sDMQSo2VmMbjfic20Nar8UiF2Ktnla4p9SAX4Au4Z6gYRgPCH1KEKX-8g2JRPKOA2-dnbIpEewUnPZhT4gZw_KTGRpRTRlKSUITIc0HA8s0cvn1iW7a_4Kl1LdQZYUwZJ?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/znm4zPUW1QcJn8IsRlhQ3I19isWNzxvPkfOdqIey32ZfAMdw4wmJe4rYubW3O-av6cHcf1chcqCXkSfRILZ5kNggqSwCb1aeLiW55C3467jz8gPVChPiKJm1PBsZ3qik6wSLYfPl7Z2gvFa-n5cHd5FrrRTAgAXjQ4KjSTLtnUj9AuNoPjebCZ6V52Q8foV6?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/PKOZUf5ALMztIvg7i9_cIUOqR3RpakVeC2P1_0GXx7NnH0T2M3wmBW0SNUA_0T-hOPdnRhvtoxlpX-dOxDk15mFuvGFepI65unE6Jgkr_nF-wFyFz4FNXIGK1IUbyTfcqEobZT6A8Nu2Cy9pvu4awhq56YDj7nAwsWtexfCBpYVi04wIhvJ9IzOrnxjNkbRl?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/a7r_V-BgZ2RXjYz62fYEAaDAb8-En_qevhQNYtPysh3B2e6YN_WLx46MDTC60jXqMXCbPDPNfhhN_Lea0YM6g0YE7SwgtXoIatuUis438bZ7d-SSh5gEydcfQ7jaTseFO6aDgsGOYxP-Ybk1P-TErO_4Q4XNrqKmsDlFfX6DsvFewUCRoilCN6lj2_jAVsRt?purpose=fullsize",
];
let img = document.querySelectorAll(".nkar img");
let img2 = document.querySelectorAll(".nkar2 img");
let cards = document.querySelectorAll(".nkar .card");
let cards2 = document.querySelectorAll(".nkar2 .card");
let count = 0;
let syochik = document.createElement("div");
syochik.className = "syochik";
syochik.innerHTML = "Points: " + count;

document.querySelectorAll(".desktop, .mobile").forEach((el) => {
  el.prepend(syochik.cloneNode(true));
});
function updateScore() {
  document.querySelectorAll(".syochik").forEach((el) => {
    el.innerHTML = "Points: " + count;
  });
}
function shuffle(arr) {
  let a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  return a;
}
let randomimages = shuffle(images);
let randomimages2 = shuffle(images);

let firstCard = null;
let firstImg = null;
let firstSrc = null;

let secondCard = null;
let secondImg = null;
let secondSrc = null;

let firstisnkar = null;
let lock = false;
for (let i = 0; i < cards.length; i++) {
  cards[i].onclick = function () {
    if (lock || cards[i] === firstisnkar) return;
    let img = cards[i].querySelector("img");
    let src = randomimages[i];
    let isnkar = true;
    if (firstCard && firstisnkar === isnkar) return;
    img.src = src;
    cards[i].classList.add("open");
    if (!firstCard) {
      firstCard = cards[i];
      firstImg = img;
      firstSrc = src;
      firstisnkar = isnkar;
    } else {
      secondCard = cards[i];
      secondImg = img;
      secondSrc = src;
      stugum();
    }
  };
}
for (let i = 0; i < cards2.length; i++) {
  cards2[i].onclick = function () {
    if (lock || cards2[i] === firstCard) return;
    let img = cards2[i].querySelector("img");
    let src = randomimages2[i];
    let isnkar = false;
    if (firstCard && firstisnkar === isnkar) return;
    img.src = src;
    cards2[i].classList.add("open");
    if (!firstCard) {
      firstCard = cards2[i];
      firstImg = img;
      firstSrc = src;
      firstisnkar = isnkar;
    } else {
      secondCard = cards2[i];
      secondImg = img;
      secondSrc = src;
      stugum();
    }
  };
}
function stugum() {
  lock = true;
  if (firstSrc === secondSrc) {
    setTimeout(() => {
      firstCard.style.opacity = "0";
      secondCard.style.opacity = "0";
      setTimeout(() => {
        firstCard.style.visibility = "hidden";
        secondCard.style.visibility = "hidden";
        count++;
        updateScore();
        reset();
      }, 500);
    }, 500);
  } else {
    setTimeout(() => {
      firstCard.classList.remove("open");
      secondCard.classList.remove("open");
      reset();
    }, 700);
  }
}
function reset() {
  firstCard = null;
  firstImg = null;
  firstSrc = null;
  secondCard = null;
  secondImg = null;
  secondSrc = null;
  firstisnkar = null;
  lock = false;
}

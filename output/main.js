(() => {
    "use strict";
    class e {
        
        #e = "";
        #t = "";
        #s = "";
        #a = "";
        #i = "";
        #o = "";
        #l = -1;
        #n = -1;
        #c = -1;
        #r = "";
        #g = [];
        constructor(e, t, s, a, i, o, l, n, c, r, g) {
            this.#e = e, this.#t = t, this.#s = s, this.#a = a, this.#i = i, this.#o = o, this.#l = l, this.#n = n, this.#c = c, this.#r = r, this.#g.push(...g)
        }
        getid() {
            return this.#e
        }
        categoryIncluded(e) {
            return this.#g.includes(e)
        }
        render(e, t) {
            t.includes(this.#e);
            let s = this.#o ? this.#o : "./images/book.jpg",
                a = `<div class="catalog-show-block" data-id="${this.#e}">\n        <div class="catalog-show-block-frame"><img class="catalog-show-block-img" src="${s}" alt="book.jpg">\n        </div>\n        \n        <div class="catalog-show-block-info">\n           <p class="catalog-show-block-info-autor">${this.#i}</p>\n           <p class="catalog-show-block-info-name"></span>${this.#s}</p>\n        \n           <div class="catalog-show-block-info-esteeme">`; - 1 != this.#l && (a += ` <div class="catalog-show-block-info-esteeme-stars">\n                  <img class="catalog-show-block-info-esteeme-star" src="${this.#l>0?"./images/star_gold.svg":"./images/star_gray.svg"}"\n                       alt="star_gold.svg">\n                  <img class="catalog-show-block-info-esteeme-star" src="${this.#l>1?"./images/star_gold.svg":"./images/star_gray.svg"}"\n                       alt="star_gold.svg">\n                  <img class="catalog-show-block-info-esteeme-star" src="${this.#l>2?"./images/star_gold.svg":"./images/star_gray.svg"}"\n                       alt="star_gray.svg">\n                  <img class="catalog-show-block-info-esteeme-star" src="${this.#l>3?"./images/star_gold.svg":"./images/star_gray.svg"}"\n                       alt="star_gray.svg">\n                  <img class="catalog-show-block-info-esteeme-star" src="${this.#l>4?"./images/star_gold.svg":"./images/star_gray.svg"}"\n                       alt="star_gray.svg">\n               </div>`), -1 != this.#n && (a += `<p class="catalog-show-block-info-esteeme-review">${this.#n} review</p>`), a += `</div>\n                \n           <p class="catalog-show-block-info-description"></span>${this.#a}</p>`, -1 != this.#c && (a += `<p class="catalog-show-block-info-price"></span>${this.#c+" "+this.#r}</p>`), a += `<button class="catalog-show-block-info-btn" data-id="${this.#e}" >${t.includes(this.#e)?"in the cart":"buy now"}</button>\n        </div>\n    </div>`, e.innerHTML += a
        }
    }
    let t = [],
        s = [],
        a = ["Whithout category"],
        i = a[0],
        o = 0;
    const l = document.querySelector(".catalog-download-btn"),
        n = document.querySelector(".catalog-menu-nav"),
        c = document.querySelector(".catalog-show"),
        r = document.querySelector(".header-icons-item-count");
    let g = [{
            url: "./images/slide1.jpg",
            title: "Слайд1"
        }, {
            url: "./images/slide2.jpg",
            title: "Слайд2"
        }, {
            url: "./images/slide3.jpg",
            title: "Слайд3"
        }],
        d = {
            dots: !0,
            titles: !0,
            autoplay: !0,
            autoplayInterval: 5e3
        };

    function u() {
        n.innerHTML = "";
        let e = !1;
        a.forEach((t => {
            e = i === t, n.innerHTML += e ? `<li class="catalog-menu-nav-item active" data-category="${t}"><a href="#a1" data-category="${t}">${t}</a></li>` : `<li class="catalog-menu-nav-item" data-category="${t}"><a href="#a1" data-category="${t}">${t}</a></li>`
        }))
    }
    async function h() {
        ! function(t) {
            let i = t.items;
            i && (i.forEach((t => {
                let i = t ?.id,
                    o = t ?.selfLink,
                    l = t ?.volumeInfo ?.title;
                l = l.length > 40 ? l.slice(0, 40) + "..." : l;
                let n = t ?.volumeInfo ?.subtitle ? t ?.volumeInfo ?.subtitle : "";
                n = n.length > 100 ? n.slice(0, 100) + "..." : n;
                let c = t ?.volumeInfo ?.authors,
                    r = "";
                c && (r = c.join(","));
                let g = t ?.volumeInfo ?.imageLinks ?.smallThumbnail ? t ?.volumeInfo ?.imageLinks ?.smallThumbnail : "./images/book.jpg",
                    d = t ?.volumeInfo ?.pageCount ? t ?.volumeInfo ?.pageCount : -1,
                    h = -1,
                    m = "";
                "NOT_FOR_SALE" != t ?.saleInfo ?.saleability && (h = t ?.saleInfo ?.retailPrice ?.amount ? t ?.saleInfo ?.retailPrice ?.amount : -1, m = t ?.saleInfo ?.retailPrice ?.currencyCode ? t ?.saleInfo ?.retailPrice ?.currencyCode : "");
                let v = t ?.volumeInfo ?.categories;
                v ? v.forEach((e => {
                    a.includes(e) || a.push(e)
                })) : v = ["Whithout category"], u();
                let f = new e(i, o, l, n, r, g, -1, d, h, m, v),
                    y = s.find((e => e.id === i));
                y || s.push(f)
            })), s.sort(((e, t) => {
                const s = e.getid(),
                    a = t.getid();
                return s > a ? -1 : s < a ? 1 : 0
            })))
        }(await fetch(`https://www.googleapis.com/books/v1/volumes?q=""subject:${"Whithout category"===i?"":i}""&key=AIzaSyCCjrE5pqwH7hoFMHZ3IhEcNp8U-Imtu3w&printType=books&startIndex=${o}&maxResults=6&langRestrict=en`).then((e => e.json())).then((e => e)).catch((e => {
            console.log("error" + e)
        }))), o += 6, m()
    }

    function m() {
        c.innerHTML = "", s.filter((e => e.categoryIncluded(i))).forEach((e => {
            e.render(c, t)
        }))
    }
    document.addEventListener("DOMContentLoaded", (function() {
        ! function(e) {
            if (!g || !g.length) return;
            e = e || {
                dots: !0,
                autoplay: !1
            };
            let t = document.querySelector(".slider-images"),
                s = document.querySelector(".slider-dots");

            function a(a) {
                t.querySelector(".active").classList.remove("active"), t.querySelector(".n" + a).classList.add("active"), e.dots && (s.querySelector(".active").classList.remove("active"), s.querySelector(".n" + a).classList.add("active"))
            }
            g.forEach(((e, s) => {
                let a = `<div class="image n${s} ${0===s?"active":""}" style="background-image:url(${g[s].url});" data-index="${s}"></div>`;
                t.innerHTML += a
            })), e.dots && (g.forEach(((e, t) => {
                let a = `<div class="slider-dots-item n${t} ${0===t?"active":""}" data-index="${t}"></div>`;
                s.innerHTML += a
            })), s.querySelectorAll(".slider-dots-item").forEach((e => {
                e.addEventListener("click", (function() {
                    a(this.dataset.index)
                }))
            }))), e.autoplay && setInterval((() => {
                let e = +t.querySelector(".active").dataset.index;
                a(e === g.length - 1 ? 0 : e + 1)
            }), e.autoplayInterval)
        }(d), u(), h()
    })), document.addEventListener("click", (function(e) {
        var s, a;
        null != e.target.dataset.category && (i = e.target.dataset.category, u(), m()), null != e.target.dataset.id && (s = e.target.dataset.id, a = e.target, t.includes(s) ? (t = t.filter((e => e !== s)), a.innerHTML = "by now") : (t.push(s), a.innerHTML = "in the cart"), r.innerHTML = t.length)
    })), l.addEventListener("click", (function() {
        h()
    }))
})();
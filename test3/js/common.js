gsap.timeline({ repeat: -1 })
  // 続けて動かしたい要素を追加
  .to(".card3", { x: 100, y: -100, duration: 1 })
  .to(".card3", { opacity: 0, duration: 1 }, "-=0.4")
  .to(".card1", { zIndex: 2, rotate: "random(-30, -15)" }, "-=1")
  .to(".card2", { zIndex: 3, rotate: "random(-30, -15)" }, "-=1")
  .to(".card3", { zIndex: 1, rotate: -30 })
  .to(".card3", { x: -150, y: 100, duration: 1 })
  .to(".card3", { x: 0, y: 0, opacity: 1, duration: 1 }, "-=0.4")
  // 2枚目
  .to(".card2", { x: 100, y: -100, duration: 1 })
  .to(".card2", { opacity: 0, duration: 1 }, "-=0.4")
  .to(".card3", { zIndex: 2, rotate: "random(-30, -15)" }, "-=1")
  .to(".card1", { zIndex: 3, rotate: "random(-30, -15)" }, "-=1")
  .to(".card2", { zIndex: 1, rotate: -15 })
  .to(".card2", { x: -150, y: 100, duration: 1 })
  .to(".card2", { x: 0, y: 0, opacity: 1, duration: 1 }, "-=0.4")
  // 3枚目
  .to(".card1", { x: 100, y: -100, duration: 1 })
  .to(".card1", { opacity: 0, duration: 1 }, "-=0.4")
  .to(".card2", { zIndex: 2, rotate: "random(-30, -15)" }, "-=1")
  .to(".card3", { zIndex: 3, rotate: "random(-30, -15)" }, "-=1")
  .to(".card1", {zIndex: 1, rotate: -10 })
  .to(".card1", { x: -150, y: 100, duration: 1 })
  .to(".card1", { x: 0, y: 0, opacity: 1, duration: 1 }, "-=0.4")


window.addEventListener('load', function(){
  const wrapCharSpan = function(str){
    return [...str].map(char => `<span>${char}</span>`).join('');
  }

  //対象の要素を取得する
  const target = document.querySelector('.text-appear-text');
  //要素の内容を関数の実行結果で置き換える
  target.innerHTML = wrapCharSpan(target.textContent);

  const child = target.childNodes;

  for (let i = 0; i < child.length; i++){
    // console.log(children.item(i).nodeName);
    child[i].classList.add('child');
  }
});

gsap.registerPlugin(ScrollTrigger);

function initTypeAnim() {
  gsap.to(".child", {
    duration: 0.5,
    scale: (1, 1),
    ease: "power4.out",
    stagger: 0.04,
  });
}
ScrollTrigger.create({
  trigger: ".text-appear",
  start: "top 90%",
  onEnter: initTypeAnim,
  once: true,
  toggleClass: "is-active",
});

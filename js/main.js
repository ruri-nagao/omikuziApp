const rabbit = document.getElementsByClassName('rabbit');
const modal = document.getElementsByClassName('modal-content');
const result = document.getElementById('staticBackdropLabel');
const message = document.getElementById('message');
const luckyItem = document.getElementById('luckyItem');
const reloadBtn = document.getElementById('reloadBtn');
const btnClose = document.getElementById('btnClose');
const post = document.getElementById('post');

const omikuzi = [
  {
    result: '大吉',
    message: 'うさぎのようにぴょーんっと跳ね上がる1年になるでしょう。 <br> お仕事も趣味も楽しめそう!',
    luckyItem: 'うさぎのチョコレート',
  },
  {
    result: '吉',
    message: 'うさぎのような可愛さで周りをめろめろにしちゃう1年になるでしょう。 <br> 何事もトントン拍子に進みそう!',
    luckyItem: 'うさぎのカチューシャ',
  },
  {
    result: '中吉',
    message: 'うさぎのような早い逃げ足で災いからのがれる1年になるでしょう。 <br> 毎日とっても元気に過ごせそう!',
    luckyItem: 'うさぎの靴下',
  },
  {
    result: '小吉',
    message: 'うさぎを可愛がるように周りの人に愛情が溢れる1年になるでしょう。 <br> 大好きなみんなに感謝を伝えよう!',
    luckyItem: 'うさぎ柄の便箋',
  },
  {
    result: '末吉',
    message: 'うさぎの長い耳のように、どんなに小さい音でも聞こえる1年になるでしょう。 <br> 良い情報がたくさん集まります!取捨選択が大事。',
    luckyItem: 'うさぎのヘッドホン',
  },
  {
    result: '凶',
    message: 'うさぎのように怠けると、かめさんにどんどん追い抜かれる1年になるでしょう。 <br> 継続が大切!毎日こつこつ積み上げよう。',
    luckyItem: 'うさぎがモチーフな講師',
  },
];

const randomNum = () => {
  return Math.floor(Math.random() * omikuzi.length);
};

const showResult = () => {
  const num = randomNum();
  result.innerHTML = omikuzi[num].result;
  message.innerHTML = omikuzi[num].message;
  luckyItem.innerHTML += omikuzi[num].luckyItem;

  btnClose.addEventListener('click', () => {
    window.location.reload();
  });

  post.addEventListener('click', () => {
    window.location.href = `https://twitter.com/intent/tweet?text=おみくじの結果は「${omikuzi[num].result}」でした。%0A&hashtags=るり先生のおみくじアプリ%0A,ZeroPlus`;
  });
};

rabbit[0].addEventListener('click', () => {
  modal[0].classList.add('color-red');
  showResult();
});

rabbit[1].addEventListener('click', () => {
  modal[0].classList.add('color-blue');
  showResult();
});

rabbit[2].addEventListener('click', () => {
  modal[0].classList.add('color-yellow');
  showResult();
});

rabbit[3].addEventListener('click', () => {
  modal[0].classList.add('color-green');
  showResult();
});

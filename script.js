const faces = [
  { src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/images/face/caixukun.png", alt: "xukun" },
  { src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/images/face/guoqilin.png", alt: "qilin" },
  { src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/images/face/leijiayin.png", alt: "jiayin" },
  { src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/images/face/lisa.png", alt: "lisa" },
  { src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/images/face/shenteng.png", alt: "shenteng" },
  { src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/images/face/wangyibo.png", alt: "yibo" },
  { src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/images/face/wuyifan.png", alt: "yifan" },
  { src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/images/face/xiaozhan.png", alt: "xiaozhan" },
  { src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/images/face/yangchaoyue.png", alt: "chaoyue" },
  { src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/images/face/yiyangqianxi.png", alt: "qianxi" },
];

function handleStart() {
  let timing = 12;
  const startButton = document.getElementById("start");
  startButton.disabled = true;

  if (startButton) {
    beginSpin();
    handleFaceChange();
  }

  function beginSpin() {
    const sheet = new CSSStyleSheet();
    const degree = generateRandomRotateDeg();
    sheet.insertRule(`#wheel {transform: rotate(${degree}deg)}`, 0);
    document.adoptedStyleSheets = [sheet];
  }

  function handleFaceChange() {
    const loop = function () {
      clearTimeout(self.timer);
      const index = Math.floor(Math.random() * 10);
      $("#face").prop("src", faces[index].src).prop("alt", faces[index].alt);
      if (timing-- > 0) {
        self.timer = setTimeout(loop, 500);
      } else {
        handleResult(faces[index].alt);
        startButton.disabled = false;
      }
    }.bind(this);
    loop();
  }
}

function handleResult(result) {
  console.log(result);
}

function generateRandomRotateDeg() {
  const initialDegree = 720;
  const randomDegree = Math.floor(Math.random() * 12) * 60;
  const totalDegree = initialDegree + randomDegree;
  return totalDegree;
}

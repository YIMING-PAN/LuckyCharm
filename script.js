const faces = [
  {
    src:
      "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/face/caixukun.png",
    alt: "xukun",
    alias: "坤坤",
  },
  {
    src:
      "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/face/guoqilin.png",
    alt: "qilin",
    alia: "郭麒麟",
  },
  {
    src:
      "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/face/leijiayin.png",
    alt: "jiayin",
    alias: "雷佳音",
  },
  {
    src:
      "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/face/lisa.png",
    alt: "lisa",
    alias: "Lisa",
  },
  {
    src:
      "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/face/shenteng.png",
    alt: "shenteng",
    alias: "沈腾",
  },
  {
    src:
      "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/face/wangyibo.png",
    alt: "yibo",
    alias: "王一博",
  },
  {
    src:
      "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/face/wuyifan.png",
    alt: "yifan",
    alias: "吴亦凡",
  },
  {
    src:
      "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/face/xiaozhan.png",
    alt: "xiaozhan",
    alias: "肖战",
  },
  {
    src:
      "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/face/yangchaoyue.png",
    alt: "chaoyue",
    alias: "杨超越",
  },
  {
    src:
      "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/face/yiyangqianxi.png",
    alt: "qianxi",
    alias: "易烊千玺",
  },
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
    const degree = generateRandomRotateDeg();
    const wheel = document.getElementById("wheel");
    wheel.setAttribute("style", `transform: rotate(${degree}deg);`);
  }

  function handleFaceChange() {
    const loop = function () {
      clearTimeout(self.timer);
      const index = Math.floor(Math.random() * 10);
      $("#face")
        .prop("src", faces[index].src)
        .prop("alt", faces[index].alt)
        .prop("alias", faces[index].alias);
      if (timing-- > 0) {
        self.timer = setTimeout(loop, 500);
      } else {
        handleResult(faces[index].alias);
        startButton.disabled = false;
      }
    }.bind(this);
    loop();
  }
}

function handleResult(result) {
  const resultContent = document.createElement("span");
  resultContent.innerHTML = `<span>恭喜同学获得<h3>${result}</h3>的祝福！</span>`;
  const content = document.getElementById("content");
  content.appendChild(resultContent);
  console.log(resultContent);
}

function generateRandomRotateDeg() {
  const initialDegree = 720;
  const randomDegree = Math.floor(Math.random() * 12) * 60;
  const totalDegree = initialDegree + randomDegree;
  return totalDegree;
}

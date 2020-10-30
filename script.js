const faces = [
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/caixukun.png",
    alt: "xukun",
    alias: "坤坤",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/guoqilin.png",
    alt: "qilin",
    alias: "郭麒麟",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/leijiayin.png",
    alt: "jiayin",
    alias: "雷佳音",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/lisa.png",
    alt: "lisa",
    alias: "Lisa",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/shenteng.png",
    alt: "shenteng",
    alias: "沈腾",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/wangyibo.png",
    alt: "yibo",
    alias: "王一博",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/wuyifan.png",
    alt: "yifan",
    alias: "吴亦凡",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/xiaozhan.png",
    alt: "xiaozhan",
    alias: "肖战",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/yangchaoyue.png",
    alt: "chaoyue",
    alias: "杨超越",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/yiyangqianxi.png",
    alt: "qianxi",
    alias: "易烊千玺",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/denglun.png",
    alt: "denglun",
    alias: "邓伦",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/jennie.png",
    alt: "jennie",
    alias: "Jennie",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/kenan.png",
    alt: "kenan",
    alias: "柯南",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/liuyuxi.png",
    alt: "liuyuxi",
    alias: "刘雨昕",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/pengyuchang.png",
    alt: "pengyuchang",
    alias: "彭昱畅",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/qiaoshan.png",
    alt: "qiaoshan",
    alias: "乔杉",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/rose.png",
    alt: "rose",
    alias: "Rose",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/sabeining.png",
    alt: "sabeining",
    alias: "撒贝宁",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/zhaolusi.png",
    alt: "zhaolusi",
    alias: "赵露思",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/songxiaobao.png",
    alt: "songxiaobao",
    alias: "宋小宝",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/wangjunkai.png",
    alt: "wangjunkai",
    alias: "王俊凯",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/yueyunpeng.png",
    alt: "yueyunpeng",
    alias: "小岳岳",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/yuqian.png",
    alt: "yuqian",
    alias: "于谦",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/zhangyixing.png",
    alt: "zhangyixing",
    alias: "张艺兴",
  },
  {
    src: "https://raw.githubusercontent.com/YIMING-PAN/LuckyCharm/master/images/faces/zhangyunlei.png",
    alt: "zhangyunlei",
    alias: "张云雷",
  },
];

if (typeof $ !== undefined) {
  function handleStart() {
    const startButton = document.getElementById("start");
    startButton.disabled = true;
    if (startButton) {
      beginSpin();
      handleFaceChange();
    }
  }
}

function beginSpin() {
  const degree = generateRandomRotateDeg();
  const wheel = document.getElementById("wheel");
  wheel.setAttribute("style", `transform: rotate(${degree}deg);`);
}

function handleFaceChange() {
  // Transition time / Wheel speed = timing
  let timing = 15;
  const loop = function () {
    clearTimeout(self.timer);
    // Get a random index from faces
    const index = Math.floor(Math.random() * faces.length);
    $("#face")
      .prop("src", faces[index].src)
      .prop("alt", faces[index].alt)
      .prop("alias", faces[index].alias);
    if (timing-- > 0) {
      // Wheel speed, should equal wheel rotate transition time
      self.timer = setTimeout(loop, 400);
    } else {
      handleResult(faces[index].alias);
    }
  }.bind(this);
  loop();
}

function handleResult(starName) {
  // Display result after 1s
  setTimeout(function () {
    document.getElementById("game").setAttribute("style", "display:none");
    document.getElementById("result").removeAttribute("style");
  }, 1000);
}

function generateRandomRotateDeg() {
  // One turn = 360
  const initialDegree = 720;
  // Spin speed
  const randomDegree = Math.floor(Math.random() * 12) * 60;
  //should totalDegree % 60 = 0, each 60 degree correspond to one university
  const totalDegree = initialDegree + randomDegree;
  return totalDegree;
}

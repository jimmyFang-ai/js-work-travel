

let data = [
  {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  },
  {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
  },
  {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
  }
];


// DOM
// 表單欄位
const ticketName = document.querySelector('#ticketName');
const ticketImgUrl = document.querySelector('#ticketImgUrl');
const ticketRegion = document.querySelector('#ticketRegion');
const ticketPrice = document.querySelector('#ticketPrice');
const ticketNum = document.querySelector('#ticketNum');
const ticketRate = document.querySelector('#ticketRate');
const ticketDescription = document.querySelector('#ticketDescription');
const addTicketBtn = document.querySelector('.addTicket-btn');

// form 表單
const addTicketForm = document.querySelector('.addTicket-form');

// 所有的 inputs
const inputs = document.querySelectorAll('input[type=text], input[type=number],#ticketRegion,textarea')

// 地區搜尋
const searchArea = document.querySelector('.search-area');
const regionSearch = document.querySelector('.regionSearch');

// 地區搜尋資料數量
const searchResulNum = document.querySelector('#searchResulNum');

// 套票卡片列表
const ticketCardArea = document.querySelector('.ticketCard-area');



// 初始化
function init() {
  // 預設套票列表不會顯示
  renderData([]);
};
init();


// 新增套票按鈕 綁定 click 監聽事件
addTicketBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // 初始化 ticketObj 變數並賦予物件型別，用來儲存input 欄位的值
  const ticketObj = {
    "id": new Date().getTime(),
    "name": ticketName.value.trim(),
    "imgUrl": ticketImgUrl.value.trim(),
    "area": ticketRegion.value,
    "description": ticketDescription.value.trim(),
    "group": Number(ticketNum.value),
    "price": Number(ticketPrice.value),
    "rate": Number(ticketRate.value)
  };


  // 個別欄位驗證
  let isTicketNameValid = checkTicketName();
  let isTicketImgUrlValid = checkticketImgUrl();
  let isTicketRegionValid = checkticketRegion();
  let isTicketPriceValid = checkticketPrice();
  let istTicketNumValid = checkticketNum();
  let istTicketRateValid = checkticketRate();
  let istTicketDescriptionValid = checkticketDescription();


  // 全部驗證欄位
  let isFormValid =
    isTicketNameValid &&
    isTicketImgUrlValid &&
    isTicketRegionValid &&
    isTicketPriceValid &&
    istTicketNumValid &&
    istTicketRateValid &&
    istTicketDescriptionValid;



  // 全部欄位都驗證過才會送出套票表單
  if (isFormValid) {
    setTimeout(() => {
      alert('套票資料已建立');
    }, "1000")

    // 建立套票資料
    creatTicketData(ticketObj);

    // // 清除所有成功訊息
    [...inputs].forEach((input) => {
      input.parentElement.classList.remove('success');
    });

    // 清除表單欄位資料
    addTicketForm.reset();
  };

});


// 套票表單綁定 input 監聽事件 
addTicketForm.addEventListener('input', (e) => {
  switch (e.target.id) {
    case 'ticketName':
      checkTicketName();
      break;
    case 'ticketImgUrl':
      checkticketImgUrl();
      break;
    case 'ticketRegion':
      checkticketRegion();
      break;
    case 'ticketPrice':
      checkticketPrice();
      break;
    case 'ticketNum':
      checkticketNum();
      break;
    case 'ticketRate':
      checkticketRate();
      break;
    case 'ticketDescription':
      checkticketDescription();
      break;
  }
});



// 驗證規則

// 必須驗證欄位，不得為空，如果為空回傳false ，否則回傳 true
function isRequired(value) {
  return value === '' ? false : true;
};


// 驗證數字必須大於1
function isNumValid(price) {
  return price <= 0 ? false : true;
};


// 驗證個別欄位

// 驗證套票名稱
function checkTicketName() {
  let valid = false;

  const ticketNameValue = ticketName.value.trim();

  if (!isRequired(ticketNameValue)) {
    setErrorMsg(ticketName, '套票名稱 必填!');
  } else {
    setSuccessMsg(ticketName);
    valid = true;
  };

  return valid;
};

// 驗證套票圖片網址
function checkticketImgUrl() {
  let valid = false;

  const ticketImgUrValue = ticketImgUrl.value.trim();

  if (!isRequired(ticketImgUrValue)) {
    setErrorMsg(ticketImgUrl, '套票圖片網址 必填!');
  } else {
    setSuccessMsg(ticketImgUrl);
    valid = true;
  };

  return valid;
};


// 驗證套票景點地區
function checkticketRegion() {
  let valid = false;

  const ticketRegionValue = ticketRegion.value.trim();

  if (!isRequired(ticketRegionValue)) {
    setErrorMsg(ticketRegion, '景點地區 必填!');
  } else {
    setSuccessMsg(ticketRegion);
    valid = true;
  };

  return valid;
};


// 驗證套票金額
function checkticketPrice() {
  let valid = false;

  const ticketPriceValue = ticketPrice.value.trim();

  if (!isRequired(ticketPriceValue)) {
    setErrorMsg(ticketPrice, '套票金額 必填!');
  } else if (!isNumValid(ticketPriceValue)) {
    setErrorMsg(ticketPrice, '套票金額 必須大於 1 !');
  } else {
    setSuccessMsg(ticketPrice);
    valid = true;
  };

  return valid;
};


// 驗證套票組數
function checkticketNum() {
  let valid = false;

  const ticketNumValue = ticketNum.value.trim();

  if (!isRequired(ticketNumValue)) {
    setErrorMsg(ticketNum, '套票組數 必填!');
  } else if (!isNumValid(ticketNumValue)) {
    setErrorMsg(ticketNum, '套票組數 必須大於 1 !');
  } else {
    setSuccessMsg(ticketNum);
    valid = true;
  };

  return valid;
};


// 驗證套票星級
function checkticketRate() {
  let valid = false;

  const ticketRateValue = ticketRate.value.trim();

  if (!isRequired(ticketRateValue)) {
    setErrorMsg(ticketRate, '套票星級 必填!');
  } else if (!isNumValid(ticketRateValue) || ticketRateValue > 10) {
    setErrorMsg(ticketRate, '套票星級 必須大於 1 ， 且小於 10!');
  } else {
    setSuccessMsg(ticketRate);
    valid = true;
  };

  return valid;
};


// 驗證套票描述
function checkticketDescription() {

  let valid = false;

  const ticketDescriptionValue = ticketDescription.value.trim();

  if (!isRequired(ticketDescriptionValue)) {
    setErrorMsg(ticketDescription, '套票描述 必填!');
  } else if (ticketDescriptionValue.length >= 100) {
    setErrorMsg(ticketDescription, '套票描述 文字限 100字');
  } else {
    setSuccessMsg(ticketDescription);
    valid = true;
  };

  return valid;
};


// 設定表單驗證 error 訊息
function setErrorMsg(element, message) {

  // 表單欄位 DOM
  let elementId = element.getAttribute('id');

  //  表單欄位
  const inuptControl = element.parentElement;
  // ticketMessage
  const ticketMessage = document.querySelector(`#${elementId}-message`);
  const errorMsg = document.querySelector(`#${elementId}-message span`);

  // 切換 表單欄位顏色
  inuptControl.classList.add('error');
  inuptControl.classList.remove('success');


  // 判斷驗證狀態，如果錯誤就移除 class: d-none ，是成功就加上class: d-none
  if (inuptControl.classList.contains('error')) {
    ticketMessage.classList.remove('d-none');
    errorMsg.textContent = message;
  } else if (inuptControl.classList.contains('success')) {
    ticketMessage.classList.add('d-none');
  };
};


// 設定表單驗證 success 訊息
function setSuccessMsg(element) {

  // 驗證訊息 id
  let elementId = element.getAttribute('id');

  //  表單欄位
  const inuptControl = element.parentElement;

  // ticketMessage
  const ticketMessage = document.querySelector(`#${elementId}-message`);


  // 切換 表單欄位顏色
  inuptControl.classList.add('success');
  inuptControl.classList.remove('error');


  // 判斷驗證狀態，如果錯誤就移除 class: d-none ，是成功就加上class: d-none
  if (inuptControl.classList.contains('error')) {
    ticketMessage.classList.remove('d-none');
  } else if (inuptControl.classList.contains('success')) {
    ticketMessage.classList.add('d-none');
  };
};



// 建立套票資料
function creatTicketData(formObj) {
  data.push(formObj);

  // 新增完套票後，切換
  regionSearch.value = '全部地區';
  renderData(data);
};


// 搜選區 綁定 change 監聽事件
regionSearch.addEventListener('change', (e) => {

  // 取出 option 內的 value 值
  let regionValue = e.target.value;

  // 拿 regionValue 與 data.area 去1並回傳比對篩選符合的資料
  const filterData = data.filter((item) => {
    return item.area === regionValue;
  });


  // 判斷篩選資料顯示
  // 如果為全部地區就顯示全部資料，反則顯示個別地區資料
  regionValue === "全部地區" ? renderData(data) : renderData(filterData);
});


// 畫面顯示
function renderData(ticketData) {
  let htmlTemplate = ticketData.map((item) => {
    if (ticketData.length > 0) {
      return `<li class="ticketCard" id="${item.id}">
      <div class="ticketCard-img">
          <a href="#">
              <img src="${item.imgUrl}"
                  alt="">
          </a>
          <div class="ticketCard-region">${item.area}</div>
          <div class="ticketCard-rank">${item.rate}</div>
      </div>
      <div class="ticketCard-content">
          <div>
              <h3>
                  <a href="#" class="ticketCard-name">${item.name}</a>
              </h3>
              <p class="ticketCard-description">
                  ${item.description}
              </p>
          </div>
          <div class="ticketCard-info">
              <p class="ticketCard-num">
                  <span><i class="fas fa-exclamation-circle"></i></span>
                  剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
              </p>
              <p class="ticketCard-price">
                  TWD <span id="ticketCard-price">$${item.price}</span>
              </p>
          </div>
      </div>
      </li>`
    } else {
      return '';
    };
  }).join('');

  // 顯示畫面
  ticketCardArea.innerHTML = htmlTemplate;

  // 判斷有資料才移除 searchArea 的class 的 d-none樣式
  ticketData.length > 0 ? searchArea.classList.remove('d-none') : '';

  // 顯示搜尋數量
  searchResulNum.textContent = ticketData.length;
};




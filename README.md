

Week 1 筆記

 - 變數
   - 宣告變數 var let const 

     var

     let 

     const 
     
  
 - 資料型別
   - 資料種類
       基本型別:  String Number  Boolean  Undefined Null  symbol
       物件型別:  Object Array Function 
       
   - 資料間運算
     - 加、減、乘、除，運算過程轉型問題

 - 運算子
   - 賦值運算子
   - 遞增、遞減運算子






 Week 1 JS 核心篇 -  變數 與 作用域


 - 1. 變數與全域屬性:
   
   - 全域屬性:
  
     1. 沒有使用關鍵字宣告的變數或使用 var 關鍵字宣告的變數會在全域物件(window)下建立一個新的屬性與值。

     2. 可以使用 delete 關鍵字刪除，把屬性從全域物件下刪除，變數則不能。

     ```jsx
      全域物件下的屬性
       a = 2;
      var b = 4;
      console.log(window.a); // 2
      console.log(window.b); // 4

      刪除全域物件下的屬性
      delete a;
      console.log(window.a); //undefined
     ```
    

   

   - 變數:
     - 使用 var 、let 、const 關鍵字宣告的名稱可稱為變數。
    
     
     var :
         - 在同一個作用域下，重複宣告同一個變數。
         - 可重新賦寫值

        ```jsx
        var a = 2;
        var a = 3;
        a = 5;
        console.log(a);
        ```
     let :
         - 在同一個作用域下，不可重複宣告同一個變數，會出現錯誤訊息。
         - 可重新賦寫值
      ```jsx
      let  a = 2;
      // let  a = 3; //Identifier 'a' has already been declared
      a = 5;
      console.log(a);

      ```

     const:
         - 用於常數宣告，必須賦予值。
         - 在同一個作用域下，不可重複宣告同一個變數，會出現錯誤訊息。
         - 不可重新賦寫值
  
        ```jsx
            const  a = 2;
         // const  a = 3; //Identifier 'a' has already been declared
         // a = 5;   //Assignment to constant variable.
          console.log(a);
        ```



 - 2. 變數作用域(scope):
  - 可分為 local (區塊) 與 global (全域)
  - 作用域範圍練(scope chain):
    - 內層作用域的資料可以存取外層作用域的資料
    - 外層作用域無法取得內層作用域的資料。

    ```jsx
    var a = 1;
    function fn() {
     var b = 2;
     console.log(a, b); // 1 2
    };
    fn();

    console.log(a); // 1
    console.log(b); // b is not defined
    ```
    
    var 作用域 :  
    - 是函式作用域(function)，會被限制在函式內，在函式外宣告變數是屬於global(window 全域作用域)
    
    ```jsx
    // var 作用域
    var  a = 1;
      function fn() {
      var  b = 2;
      console.log(a , b);

        function fn2() {
        console.log(a , b);
        debugger;
      };
    fn2();
    };
     fn(); 
    ```

    let 、 const 作用域:
    - 是區塊作用域(Block)，會被限制在區塊內，列如: if{}、fn(){}
    - 在區塊外宣告變數是Script(Script作用域)
   
    ```jsx
     // let  作用域
     let a = 1;

     if (true) {
     let b = 2;
     console.log(a, b); //1 2
     debugger;
    };
    ```



 - 詞法作用域:
   程式碼撰寫完的當下就決定了作用域

  ```jsx
  var myName = 'Jimmy';

  function fn() {
    console.log(myName);
  };

  function fn2() {
    var myName = 'Bob';
    fn();  // Jimmy
  };
  fn2();
  ```
   
 - 提升(Hoisting):
   函式陳述式的提升優先於函式表達式
   


  






JS 核心 表達式與陳述式
 

## 表達式與陳述式:

 陳述式:
        JavaScript 的語句類型，用於命令執行指定的一系列操作，
        重點是**不會回傳結果**。

        ex: 流程控制 if...else 、變數宣告 var 、let 、const、函式 function、for 迴圈


 表達式:
        又稱表示式、運算式，經常與運算子符號與上下語句做結合，並運算及**回傳結果**。
        列如: 運算子、立即函式











# 動態型別:
因為 JavaScript 是**弱型別**，也稱為**動態型別語言**，這代表你不必特別宣告變數的型別。程式在運作時，型別會自動轉換，並且在執行階段才會確立型別。


我們可以先從下列範例，來理解 JavaScript 型別的轉換機制，

1. 變數提升
在 JavaScript 執行程式碼前，會先建立一個執行環境，並且分為兩個階段去運行程式碼，
  - 創造環境:
  使用 var 關鍵字宣告變數，僅提升變數宣告部分，並在記憶體建立一個空間存放變數與值，且將值賦予 undefined 資料型別的預設值。

  let 、const 關鍵字宣告變數 ，對於提升部分較為嚴謹，詳細的解說部分，可參考另一篇文章 const 、let 、var 的差異。
  
            
  - 執行階段:
   **此時才會確立型別**，會將數字型別 1 的值賦予到 變數 a 上。
  
```jsx

// 創造環境
var a; // unundefined

// 執行階段
a = 1;

console.log(typeof a); // number
console.log(typeof 1); // number
```

2. 修改變數的值
因為 JavaScript 動態型別語言，所以我們可以將宣告變數的值，不斷的去轉換成其他資料型別。

```jsx
// 宣告變數
var data =  'hello,word';
console.log(typeof data);

// 修改變數的值和型別
data = 123;
console.log(typeof data);
```


## 型別轉換陷阱
強制轉型的分類:

- 顯性的轉換 Explicit conversion:
    我們宣告變數 data 並賦予 'hello,word' 字串型別的值，並且不斷的去修改他的值和型別，這個過程叫顯性轉換。

   ```jsx
  // 宣告變數
  var data =  'hello,word';
  console.log(typeof data);

  // 修改變數的值和型別
  data = 123;
  console.log(typeof data);
  ```
  
- 隱性的轉換 Implicit conversion:
    透過運算子與變數的值做結合時，JavaScript 會自動轉型，在實戰開發中，如果不清楚隱性轉型的機制會踩到滿多雷的。

```jsx
var  data = 1;
console.log(data , typeof data);  //1 'number'
data = 1 + '';
console.log(data , typeof data); // 1 string
```







JS 核心課 week 3

## JavaScript 的型別有哪些

### 資料型別介紹:

- 原始型別:
**null** 是屬於原始型別，只是透過 typeof 檢驗型別時，出現 'object'，這個是JS 存在已久的bug，如果去修復的話，會造成過往使用 null 去做資料存取或判斷的建置的網頁會出現錯誤。 

```jsx
console.log(typeof '1'); // 'string'
console.log(typeof  1); // 'number'
console.log(typeof  true); // 'boolean'
console.log(typeof  undefined); // 'undefined'
console.log(typeof  null); // 'object' (JS 存在已久的bug ，本質為原始型別);
console.log(typeof Symbol(1)); //'symbol'
console.log(typeof 100n); //'bigint'
```

- 物件型別:
除了原始型別以外，其他都是物件，**function** 屬於物件型別的一種。


```jsx
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
console.log(typeof function() {}); // 'function'
```


### 型別判斷方法

- 判別物件型別 + console.dir(obj)
  - 一個物件的組成是裡面包含 屬性(key) : 值(value)所組成，並且可以去自由擴增屬性與值。
  - 我們可以透過 console.dir(obj) 去查找到所屬物件底下prototype(原型)方法。

  
**物件(Object)**
```jsx
const obj  =  {
    name: 'Jimmy',
    age: 30
};

obj.career =  'cook';
obj['hobby'] = ['running' , 'readingBook'];
console.log(obj); 
```

**陣列(Array)** 錯誤寫法，開發時不要這樣寫
僅驗證說物件型別可以自由擴增屬性與值的說法，開發時還是元素(element)的索引值(index)去存取陣列的值。

```jsx
const array = [];
array.name = 'Bob';
console.log(array);
```


**函式(Function)** 
實戰中滿常用到的，可在函式下新增屬性與值。

```jsx
function fn() {}; 
fn.age = 30;
console.dir(fn);
```

- 原始型別:
  - 原始型別無法向物件型別可以去新增屬性與值，無法使用console.dir()取得原始型別底下的方法。
```jsx
let num = 1;
num.age = 30;
console.log(num); // 1

let str = 'hello';
str.myName = "Bob";
console.log(str);  //'hello'
```
  - 因為原始型別的方法來自於「原始型別包裹物件」

```jsx
console.dir(String);
```




## 動態型別
因為 JavaScript 是**弱型別**，也稱為**動態型別語言**，這代表你不必特別宣告變數的型別。程式在運作時，型別會自動轉換，並且在執行階段才會確立型別。

### 認識型別轉換:
 
 ####  **顯性轉換（單純）**

- 原始型別及包裹物件
依據原始型別或方法，轉換其結果，其中`null` 與 `undefined`沒有原始型別包裹物件，所以無法使用原型方法。

1. 包裹物件
```jsx
let price = 100;
console.log(typeof String(price)); // 轉字串 'string'
console.log(typeof Number(price)); // 轉字串 'number'
console.log(typeof Boolean(price)); // 轉字串 'boolean'
console.log(typeof Symbol(price));     // 轉 'symbol'
console.log(typeof BigInt(price));     // 轉 'bigint'
```

2. 原型方法
使用原型方法前要注意有沒有**原始型別包裹物件**與**原型(prototype)鍊**中有沒有該方法。

```jsx
let price = 100;

// 檢查原始型別包裹物件內的原型(prototype)鍊中的方法
console.dir(Number);

// 將數字型別使用原型方法 .toString() 轉型為字串
console.log(typeof price.toString()); // string
```



- 正負運算子(數值)，(轉型為 number)
僅使用在一元運算子加上 (+ 、-)正負運算子的表達式，並使用`Number(value)`的型別方法，將運算元轉型成 number 型別。

```jsx
console.log(+'1'); // 1
console.log(-'20'); // -20
console.log(+'100元'); // NaN
```

-  邏輯 NOT 運算子（轉型為 boolean）
如果遇到非 boolean 的運算元時，會先使用 `Boolean(value)`，轉成布林值，最後在使用 !(NOT) 運算子轉變相反的布林值。

```jsx
console.log(!false); // ture
console.log(!0);  // true

console.log(!true); //false
console.log(!1); // false
console.log(!'1'); // false


// 特殊狀況
console.log(!''); // true  
console.log(!'0'); //flase，'0'是一個字串，只要不是空字串就會回傳 true，最後在 !true，回傳false
console.log(!' '); //flase，' '這不是一個空字串，就會回傳true，最後在 !true，回傳false
```




#### 隱性轉換

-  +運算子(二元運算子相加)

 - 規則一：前後運算元如果其中之一為 **字串** 型別，+ 視為**字串運算子**。

```jsx
console.log(2 + '1'); //string , '11'
console.log('1' + true); //string ,  '1true'
console.log('1' + null); // string , '1null'
console.log('1' + undefined); // string , '1undefined'
console.log('1' + {}); // string  , '1[object Object]'

// [1,2] 會被使用String() 去轉型為字串，變成 '1,2'，在與 '1' 做相加
console.log('1' + [1,2]); // string  , '11,2'


//  [] 會被使用String() 去轉型為字串，得到''，在與 '1' 做相加
console.log('1' + []); // string  , '1' 
```


 - 規則二：前後運算元如果無法轉型為**原始型別（就是指物件型別）**，+ 視為**字串運算子**。
  
```jsx
// 因為 {} 會被使用String(),轉型為 [object Object]，在與 1 做相加
console.log(1 + {}); // string  , 1[object Object]
```
  例外狀況:

```jsx
{} + 1 //1  ，{ } 被視為大擴號 + 1 
```


 - 規則三：上述情況以外，+ 視為**算數運算子**
  當`數字`與`物件和字串型別`以外的原始型別，使用 `+` 運算子做運算會使用Number()轉型數字型別在相加。

```jsx
console.log(1 + null); // number , 1
console.log(1 + undefined);  //NaN
console.log(1 + true);  // number , 2
```



-  算術運算子 (- 、 * 、 /)
  -  `原始型別`使用`- 、 * 、 / ` 做運算時，會使用Number()轉型為數字再做運算。

```jsx
console.log('3' - 1); //2
console.log('5' * true);// 4
console.log(2 * null);// 0
console.log(100 / undefined); // NaN，undefined 無法被轉為數字型別會出現 NaN
```

 -  `物件型別` 與`非物件別`使用`- 、 * 、 / ` 做運算時，將`物件`使用toString()轉型為字串，最後使用Number()轉型為數字再做運算。
  
```jsx
console.log([100] * '10'); // 90
console.log([8] - null); // 8
console.log([100, 1] * true); 
// NaN , 因為使用toString()轉為字串後是'[100,1]'，在使用Number() 轉數字會出現NaN 用來計算都會是NaN。
console.log({} - 5); //NaN , 因為使用toString()轉為字串後是'[object, Objsect]'，在使用Number() 轉數字會出現 NaN 用來計算都會是NaN。

```


- 型別轉換注意事項
BigInt 與 Number 型別無法混合計算
```jsx
console.log(1n * 100); // Cannot mix BigInt and other types, use explicit conversions
```

## 型別比較

### 嚴格比較
`值`與`型別`要相同才會回傳true，並且`不會自動轉型`。


需注意的例外狀況（如果真的不熟，可以背起來）

```jsx
// false
console.log(NaN === NaN);
console.log(undefined === null);  //在 ===(嚴格比較)，undefined是原始型別，null 為 物件型別。
console.log({} === {}); //所比較的是物件的記憶體位置，因為兩個物件的記憶體位置都是不一樣的。
console.log([] === []); //所比較的是物件的記憶體位置，因為兩個物件的記憶體位置都是不一樣的。
console.log(new Number(0) === new Number(0));

// true
console.log(+0 === -0);
```

### 寬鬆相等
`值相等`，`型別不一樣`時，`會自動轉型`為相同型別再做比較。

#### Number, String, Boolean 這三者進行比對時
通通都使用 `Number()` 進行轉型
```jsx
console.log( 1 == '1'); //true
console.log( 1 == true); //true
console.log( 0 == false);//true
```


#### null, undefined
不轉型（都是 false），但 `null` 與 `undefined` 相比則是 true
```jsx
console.log(null == 0); //false
console.log(null == ''); //false
console.log(null == false);//false

console.log(null == undefined); //true
console.log(null == null);//true
console.log(undefined == undefined); //true
```


#### 物件與非物件比對

物件與其它型別比較時，會透過 `包裹物件` 將物件轉為相同型別。

例外狀況：

1. 陣列轉數值，會先使用toString()轉字串 ，再套用 Number()轉數字。
```jsx
console.log([0] == 0); //true
console.log(['a'] == 'a'); //true
console.log('[object Object]' == {}); //true, {} 會使用String()去轉型成字串為'[object Object]'
```

2. 布林採用 Number() 轉型
```jsx
console.log([] == false); //true ，[]  與 false 都會 Number()去轉型為數字
console.log([1] == true); // true
```


#### 參考資料:

真假值：https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy

真假值表：https://dorey.github.io/JavaScript-Equality-Table/












## 資料出處:
--- 

[JS 核心篇: 運算子、型別與文法]
[運算式與運算子](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E6%A2%9D%E4%BB%B6%EF%BC%88%E4%B8%89%E5%85%83%EF%BC%89%E9%81%8B%E7%AE%97%E5%AD%90)
[運算子優先序與相依性](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table)











# 運算子介紹
就是可透過符號或單詞來運算前後的數值，並回傳一個結果。


以下我們參考 [運算式與運算子 - MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_Operators)文件列出常見的運算子種類:

 - 賦值運算子 
 - 比較運算子 
 - 算術運算子 
 - 邏輯運算子
 - 字串運算子
 - 條件（三元）運算子
 - 逗點運算子
 - 一元運算子
 - 關係運算子

在  JavaScript 大部分都是`一元運算子`及`二元運算子`所組成，也就是運算元在運算子前後的概念 ，以及以及一種特殊的 `三元運算子`，也就是 條件運算子。

## 一元運算子
一個運算子，位於運算元的前或後所組成。

```jsx
 x = 5;

// ++ 放在運算元後，是先回傳 x = 5，在做運算 ++，等到下次取值時才會回傳運算後的結果
 x++;   // 5

// ++ 放在運算元前 ，是先運算 ++，在做回傳 
// 因為我們已經拿到先前 x++ 運算後回傳的值是 6 ，我們在使用 ++x 運算後，會回傳 7
 ++x; // 7


// 檢視運算元的資料型別 (僅用於大部分的型別有效)
typeof x; // number
  
// 刪除物件屬性使用
// 因為 x 是在全域物件下建立的屬性，我們可以用 delete 刪除
 delete x; // true
```


## 二元運算子
一個運算子，位於二個運算元的前或後所組成

```jsx

// 算數運算子
5 + 6;

// 邏輯運算子
// 邏輯運算式是由左向右解析的， 他們會以下列規則嘗試進行 短路解析:

// || (or)  從由左向右解析，找尋第一個為 true 的布林值並回傳，如果全部都為flase 的話，就會回傳最後一個被解析的 false 的布林值。

true || false; // true

// && (and)  從由左向右解析，找尋第一個為 false 的布林值並回傳，如果全部都為 true 的話，就會回傳最後一個被解析的 ture 的布林值。
true && false; // false

```

## 三元運算子(條件運算子)
是 JavaScript 中唯一需要三個運算元的運算子。 這個運算子接受兩個運算元作為值且一個運算元作為條件。

```jsx

let age = 20;

// 假如 age 大於等於 18 。為true 的話，就會把 '成人' 賦予到isAldult 變數上，否則就是 false ，把' 小孩' 賦予到 isAldult 變數。
let isAldult = (age >= 18) ? '成人' : '小孩';

console.log(isAldult);
```



#優先性與相依性

從上面圖片中，我可以認識到優先性與相依性的概念，當出現`運算子優先權重都是一樣`時， 就會先`依照運算式的相依性原則去做運算`。



## 進階觀念:
我們已經了解優先性與相依性的概念，可以來練習以下幾題範例程式碼吧!

### 比較運算子
當比較運算子優先權重都一樣時，會依照相依性原則會從左至右做比較。

```jsx
// 1.
console.log(1 < 2 < 3);  //true

// 2.
console.log(3 > 2 > 1); // false
```


### 賦值運算子
當賦值運算子優先權重都一樣時，會依照相依性原則會從右至左賦予值到變數上

```jsx
// 先定義一個 b 變數，並賦予物件型別，並在這物件下新增
// a 的屬性，並給予數字型別  2 的值，並且新增 writable 的條件 
// 不可將 a 屬性的值重新賦寫

var b = {};
Object.defineProperty(b, 'a', {
    value: 2,
    writable: false
});

b.a = 3;

// b.a 的值一樣會是 2 ，即使賦予 3 的值，還是沒被複寫
// console.log(b.a); // 2

var a = 3;


a = b.a = 1;
console.log(a , b.a); // 1 , 2
```
因為 變數 a 被賦予的值是從 b.a = 1;，所回傳的表達式結果為數字 1 的結果。


## 資料出處:
--- 

[JS 核心篇: 運算子、型別與文法]
[運算式與運算子](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E6%A2%9D%E4%BB%B6%EF%BC%88%E4%B8%89%E5%85%83%EF%BC%89%E9%81%8B%E7%AE%97%E5%AD%90)
[運算子優先序與相依性](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table)















# 刷題練習  codeWars

## 7kyu  Filter the number

思考模式:  把傳入字串列中的字串部分過濾掉並回傳數字


解法一.
1. 使用split('')將字串轉陣列在使用 filter()下篩選條件
2. 運用 isisNaN 內含Number()轉數字的資料轉型方法把 false 結果使用 !(not) 轉為 true 的結果回傳出來。
   
```jsx
var filterString = function (value) {

  const newNum = value.split('').filter((num) => {
    return !isNaN(num);
  }).join('');


  return Number(newNum);
};

console.log(filterString("123"));//123
console.log(filterString("a1b2c3"));//123
console.log(filterString("aa1bb2cc3dd")); //123
```


解法二.
使用字串方法 replace()

https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/replace

```jsx
var filterString = function(value) {
  return parseInt(value.replace(/[^\d]/g, ""))
};


console.log(filterString("123"));//123
console.log(filterString("a1b2c3"));//123
console.log(filterString("aa1bb2cc3dd")); //123
```



"# js-work-travel" 

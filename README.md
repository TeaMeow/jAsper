## 索引

* type Attribute
    * [**.attr**(attr *[string|object]*, value *[string|undefined]*) [string|null]]()
    * [**.removeAttr**(attr *[string]*)]()
* type Content
    * [**.val**(value *[string|int|undefined]*) *[string|null]*]()
    * [**.empty**()]()
    * [**.text**(text *[string|undefined]*) *[string|null]*]()
    * [**.html**(html *[string|undefined]*) *[string|null]*]()
    * [**.fdPush**(obj *[object]*) *[FormData]*]()
    * [**.map**(callback *[func]*) *[array]*]()
* type CSS
    * [**.cssAnimate**(animate *[string]*, callback *[func|int]*, time *[int]*)]()
    * [**.css**(property *[object|array|string]*, value *[string|undefined]*) *[object|string]*]()
    * [**.hasClass**(classes *[string]*) *[bool]*]()
    * [**.classList**() *[array]*]()
    * [**.addClass**(classes *[string]*)]()
    * [**.removeClass**(classes *[string]*)]()
    * [**.toggleClass**(classes *[string]*)]()
    * [**.getCss**(property *[string]*) *[string|null]*]()
* type DOM
    * [**.wrap**(element *[HTMLHtmlElement]*)]()
    * [**.append**(html *[HTMLHtmlElement|string]*)]()
    * [**.after**(html *[string]*)]()
    * [**.before**(html *[string]*)]()
    * [**.prepend**(html *[string]*)]()
    * [**.appendTo**(selector *[string]*)]()
    * [**.prependTo**(selector *[string]*)]()
    * [**.insertAfter**(selector *[string]*)]()
    * [**.insertBefore**(selector *[string]*)]()
    * [**.template**()]()
    * [**.clone**(deep *[bool]*)]()
    * [**.remove**()]()
    * [**.children**()]()
    * [**.find**(selector *[string]*)]()
    * [**.parent**()]()
    * [**.parents**(selector *[string]*)]()
    * [**.closest**(selector *[string]*)]()
    * [**.contains**(wants *[string|jAsper]*)]()
    * [**.next**()]()
    * [**.prev**()]()
* type Validate
    * [**.validate**() *[string|bool]*]()
* type Visibility
    * [**.hide**()]()
    * [**.show**()]()
    * [**.isHidden**()]()
    * [**.toggle**()]()
* type Event
    * [**.mousedown**(callback *[func]*)]()
    * [**.mouseup**(callback *[func]*)]()
    * [**.keyup**(callback *[func]*)]()
    * [**.mousemove**(callback *[func]*)]()
    * [**.click**(callback *[func]*)]()
    * [**.dragstart**(callback *[func]*)]()
    * [**.longPress**(callback *[func]*, clickCallback *[func]*, timer *[int]*)]()
    * [**.trigger**(event *[string]*)]()
    * [**.scrollBottom**(scroll *[func]*, reachBottom *[func]*)]()
    * [**.ready**(callback *[func]*)]()
    * [**.focus**()]()
    * [**.isBottom**() *[bool]*]()
    * [**.delayKeyup**(callback *[func]*, ms *[int]*)]()
    * [**.on**(eventName *[string]*, selector *[string|func]*, handler *[func|undefined]*, once *[bool]*)]()
    * [**.one**(eventName *[string]*, selector *[string|func]*, handler *[func|undefined]*)]()
    * [**.off**(eventName *[string]*, handler *[string|undefined]*)]()
    * [**jA.binder**(binds *[string]*, rebind *[bool|undefined]*)]()
* type Extend
    * [**.avgColor**(type *[string]*)]()
    * [**.dropzone**(config *[object]*)]()
    * [**.genDate**(type *[string]*, direction *[string]*)]()
    * [**.urlParam**(paramName *[string]*)]()
    * [**jA.geo**(option *[object]*)]()
    * [**jA.cookie**(name *[string]*, value *[string|undefined]*, options *[object|undefined]*)]()
* type Form
    * [**.formExplode**(extraData *[object|undefined]*)]()
    * [**.formValidate**(rules *[object]*, stopAtFirst *[bool|undefined]*)]()
    * [**.serialize**() *[string]*]()
* type Network
    * [**.load**(url *[string]*, data *[object]*)]()
    * [**jA.ajax**(obj *[object]*)]()
    * [**jA.getJSON**(url *[string]*, callback *[func]*)]()
    * [**jA.xhrResponse**(XHR *[XMLHttpRequest]*, type *[string]*)]()
    * [**jA.pjax**(option *[object]*)]()
    * [**jA.post**(url *[string]*, data *[object]*, dataType *[string|undefined]*)]()
    * [**jA.patch**(url *[string]*, data *[object]*, dataType *[string|undefined]*)]()
    * [**jA.delete**(url *[string]*, data *[object]*, dataType *[string|undefined]*)]()
    * [**jA.get**(url *[string]*, data *[object]*, dataType *[string|undefined]*)]()
    * [**jA.put**(url *[string]*, data *[object]*, dataType *[string|undefined]*)]()
    * [**jA.sse**(obj *[object]*)]()

## .attr

新增標籤（Attribute）到指定元素上。

```js
jA('#hello').attr('data-item-name', 'helloWorld');
```

## .removeAttr

移除指定元素的特定標籤（Attribute）。

```js
jA('#hello').removeAttr('data-item-name');
```

## .val

設置一個元素的值，如果傳入的值是空的則為取得該元素的值。

```js
// 設置。
jA('input').val('Yolo!!');
// 獲取。
jA('input').val();
```

## .empty

清空一個元素的 HTML 或是值。

```js
jA('input').empty();
```

## .text

替一個元素設定裡面的文字，如果沒有文字傳入，則是取得該元素的文字。

```js
jA('div').text('嗨嗨！');
```

## .html

替一個元素設定裡面的 HTML，如果沒有 HTML 傳入，則是取得該元素的 HTML。

```js
jA('div').html('<span>嗨嗨！</span>');
```

## .fdPush

將物件的內容全部推送進 FormData 中。

```js
```

## .map

和 ES 的陣列 map 用法相同。

```js
```

## .cssAnimate

進行 CSS 動畫，很適合用在 Animate.css。

```js
jA('div').cssAnimate('fadeIn', function()
{
    alert('動畫結束！');
});
```

## .css

替元素設置或移除單個、多個 CSS 屬性。

```js
// 獲取。
jA('div').css("width")
// 設置。
jA('div').css("width", "300px")
// 設置多個。
jA('div').css
({
    "width" : "300px",
    "height": "600px"
})
```

## .hasClass

檢查元素是否有該類別（Class）名稱。

```js
jA('div').hasClass('ts button');
```

## .classList

回傳元素的類別陣列。

```js
```

## .addClass

替元素加上單個、多個樣式類別。

```js
jA('div').addClass('fitted button large');
```

## .removeClass

替元素移除單個、多個樣式類別。

```js
jA('div').removeClass('large');
```

## .toggleClass

替元素切換單個、多個樣式類別。

```js
jA('div').toggleClass('bold smile button large');
```

## .getCss

取得元素的已計算樣式。

```js
```

## .wrap

將目前元素用一個指定元素包起來。

```js
jA('#hello').wrap('<section>');
```

## .append

在目前元素後面新增一個元素。

```js
jA('#hello').append('<span>我很好。</span>');
```

## .after

在目前元素後面以 HTML 新增一個元素。

```js
jA('#hello').after('<div id="world">世界！</div>');
```

## .before

在目前元素前面以 HTML 新增一個元素。

```js
jA('#hello').before('<div id="world">世界！</div>');
```

## .prepend

在目前元素前面以 HTML 新增一個元素。

```js
jA('#hello').prepend('<span>我很好。</span>');
```

## .appendTo

將目前的元素移動到指定元素的後面。

```js
jA('.foo').appendTo('#bar');
```

## .prependTo

將目前的元素移動到指定元素的前面。

```js
jA('.foo').prependTo('#bar');
```

## .insertAfter

將目前的元素插入到指定元素的後面。

```js
```

## .insertBefore

將目前的元素插入到指定元素的前面。

```js
```

## .template

取得 `<template>` 的內容。

```js
```

## .clone

複製元素。

```js
```

## .remove

移除元素。

```js
```

## .children

取得元素的子節點。

```js
```

## .find

在目前的元素中搜尋指定節點。

```js
```

## .parent

取得目前元素的父節點。

```js
```

## .parents

取得目前元素的所有父節點。

```js
```

## .closest

取得此元素的指定父節點。

```js
```

## .contains

此元素是否含有我們指定的子節點。

```js
```

## .next

取得此元素的下一個元素。

```js
```

## .prev

取得此元素的上一個元素。

```js
```

## .validate

以 HTML5 驗證該元素。

```js
```

## .hide

隱藏元素。

```js
jA('div').hide();
```

## .show

顯示元素。

```js
jA('div').show();
```

## .isHidden

元素是否正處於隱藏狀態。

```js
jA('div').isHidden();
```

## .toggle

切換元素的顯示狀態，如果是隱藏的則顯示，反之。

```js
jA('div').toggle();
```

## .mousedown

當滑鼠按下的事件綁定。

```js
```

## .mouseup

當滑鼠放開的事件綁定。

```js
```

## .keyup

當按鍵放開的事件綁定。

```js
```

## .mousemove

當滑鼠移動的事件綁定。

```js
```

## .click

按下並放開的事件綁定。

```js
```

## .dragstart

當拖曳開始的事件綁定。

```js
```

## .longPress

長按事件綁定。

```js
```

## .trigger

觸發指定事件。

```js
```

## .scrollBottom

捲軸卷到底的事件綁定。

```js
```

## .ready

當網頁已經準備的事件綁定。

```js
```

## .focus

聚焦目前元素。

```js
```

## .isBottom

是否已經捲到元素的最底部。

```js
```

## .delayKeyup

延遲按鍵放開，在搜尋功能時非常有用。

```js
```

## .on

綁定事件監聽器。

```js
```

## .one

綁定僅觸發一次的事件監聽器。

```js
```

## .off

移除指定的事件監聽器。

```js
```

## .avgColor

將圖片轉換成 Canvas 然後取得其中的平均色。

```js
```

## .dropzone

在目前元素監聽檔案的丟放事件。

```js
```

## .genDate

生成年、月、日還有指定方向。

```js
```

## .urlParam

取得網址的單個、多個參數。

```js
```

## .formExplode

將一個表單的內容轉換成 FormData 格式。

```js
jA('form').formExplode();
```

## .formValidate

以 HTML5 驗證表單欄位。

```js
jA('form').formValidate(
{
    username: 
    {
        minlength: usernameTooShort(),
        maxlength: usernameTooLong()
    },
    password: 
    {
        minlength: passwordTooShort(),
        maxlength: passwordTooLong()
    },
    email:
    {
        email    : emailIncorrect()
    }
});
```

## .serialize

將表單轉換成參數字串。

```js
jA('form').serialize();
```

## .load

透過 XHR 讀取 HTML 內容，然後替換到這個元件內的內容。

```js
```

## jA.ajax

在非換頁的情況下傳遞 HTTP 請求取得資訊。

```js
```

## jA.getJSON

簡易型的 `ajax`，用以取得遠端 JSON 資料。

```js
```

## jA.xhrResponse

取得 XHR（AJAX）中的回應內容

```js
```

## jA.pjax

透過 AJAX 來取得下一頁的頁面內容並且套用到目前的頁面上，這可以讓網頁不需重新整理就能達到換頁的效果，亦可更換頁面的局部畫面。

```js
```

## jA.post

`ajax` 中以 POST 送出的簡寫函式。

```js
```

## jA.patch

`ajax` 中以 PATCH 送出的簡寫函式。

```js
```

## jA.delete

`ajax` 中以 DELETE 送出的簡寫函式。

```js
```

## jA.put

`ajax` 中以 PUT 送出的簡寫函式。

```js
```

## jA.get

`ajax` 中以 GET 送出的簡寫函式。

```js
```

## jA.sse

專門處理 Server Sent-Event 的函式。

```js
```

## jA.cookie

設置、編輯、移除 Cookie。當傳入的值是空白的時候會取得該 Cookie，如果傳入的選項是 `-1` 那麼則是移除該 Cookie。選項接受 `expires`、`domain` 和 `path`。

```js
```

## jA.binder

一次綁定多個事件和元素。

```js
jA.binder(
{
    'click             | .hello': this.commentToolbar,
    'click             | .world': this.newMeow,
    'cut paste keydown | #test' : this.delayedResizeTextarea,
    'submit            | form'  : this.newComment
}, true);
```

## jA.geo

取得使用者的地理位置，並且將資料回傳給 Callback。

```js
```

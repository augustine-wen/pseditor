# PSEditor

PSEditor is an open source jQuery plugin, which provides a WYSIWYG HTML editor that can be easily added into any web site, and based on CLEditor.

For **demo** see:  
http://augustine-wen.github.io/pseditor


## Required

* [jQuery](http://jquery.com/) : 1.10.1+
* [jQuery UI](http://jqueryui.com/) : 1.9.2+
* [CLEditor](http://premiumsoftware.net/cleditor/) :1.4.4+
* jquery.cleditor.plugin.js - Cleditor Plugin (source)
* jquery.pseditor.min.js - jQuery Plugin (minified)
* jquery.pseditor.css - Style Sheet (source)
* images/buttons.gif - CLEditor Toolbar Button Image Strip
* images/toolbar.gif - CLEditor Toolbar Background Image
* images/btn_cancel.png - Cancel Button Image
* images/btn_ok.png - Ok Button Image
* images/btn_picL.png - Left Button Image
* images/btn_picR.png - Right Button Image
* images/outerlink.png - OuterLink Button Image
* images/pic_bg.png - Album Background Image
* images/trash.png - Trash Button Image

## Getting Started

```html
<link rel="stylesheet" type="text/css" href="css/jquery.cleditor.css">
<link rel="stylesheet" type="text/css" href="css/pseditor.css">
<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.10.3/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/jquery.cleditor.min.js"></script>
<script type="text/javascript" src="js/jquery.cleditor.plugin.js"></script>
<script type="text/javascript" src="js/jquery.pseditor.min.js"></script>
```

## Usage

Html:
```html
<div id="strContent">
  ...
</div>
```
JavaScript:
```javascript
$('#strContent').PSEditor({
  getImgUrl : 'testjson2'
});
```

## Option Parameter
* **getImgUrl**  
  Type: String  
  A string containing the URL to which the request **Image List** is sent, like [this](https://github.com/ashramwen/PSEditor/blob/master/testjson2) or [this](https://github.com/ashramwen/PSEditor/blob/master/testjson)

## Public Methods
* **Get(index)**  
  Get data from the set of matched elements to the one at the specified index.
```javascript
var editors = $('#strContent').PSEditor({
		getImgUrl : 'testjson2'
	});
console.log(JSON.stringify(editors.Get(0)));
```

* **GetAll()**  
  Get data from all of the set of elements.
```javascript
var editors = $('#strContent').PSEditor({
		getImgUrl : 'testjson2'
	});
console.log(JSON.stringify(editors.GetAll()));
```

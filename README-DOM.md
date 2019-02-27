# DOM (Document Object Model)

Representasi element HTML pada dokumen yang akan di modelkan atau di terjemakan sebagai objek.

Objek dari dokumen ini menyediakan sekumpulan fungsi dan atribut/dat yang bisa kita manfaatkan dalam memanipulasi element-element HTML.

DOM oleh browser akan di simpan membentuk sebuah hirarki yang di sebut sebagai DOM tree.

Struktur hirarki DOM : root node, parent node, child node, sibling

Node type : Element, Atribut, text, dst [read more here](https://www.w3schools.com/jsref/prop_node_nodetype.asp)

Node Collection ada 2 yaitu node list dan HTML Collection



## DOM Selector

#### Single element

```bash
document.getElementById(idName)
document.querySelector(.className,#idName,tagName)
```

#### Single element

```bash
document.querySelectorAll(.className)
document.getElementByClassName(className)
document.getElementByTagName(tagName)
```

## DOM Manipulation


### change style

```bash
document.getElementById(idName).style.color = "red"
```
### change content

```bash
document.getElementById(idName).textContent = "text"
document.getElementById(idName).innerText = "text"
document.getElementById(idName).innerHTML = "<h1>text</h>"
```

### change attribute

```bash
document.getElementById(idName).setAttribute('class', 'className')
document.getElementById(idName).getAttribute('href')
document.getElementById(idName).removeAttribute('href')
```

### class attribute

```bash
document.getElementById(idName).classList.add()
document.getElementById(idName).classList.remove()
document.getElementById(idName).classList.toggle()
document.getElementById(idName).classList.item(2)
document.getElementById(idName).classList.contains('className')
document.getElementById(idName).classList.toggle('satu', 'dua')
```
### node manipulation
[read more here](https://www.w3schools.com/jsref/met_document_createelement.asp)
```bash
var a = element.createElement('p');
var text = element.createTextNode('your text here');
a.appendChild(text)
a.insertBefore(new-elemenet element)
element.removeChild()
element.replaceChild(newElement,oldElement)
```

## Event
Kejadian yang terjadi di dalam DOM [read more here](https://www.w3schools.com/jsref/obj_mouseevent.asp) or [here](https://developer.mozilla.org/en-US/docs/Web/Events)

Ada 2 cara untuk mendengarkan event

#### event handler

```bash
<p onclick="changeColor">change color</p>

element.onclick = changecolor
```


#### addEventListener

```bash
element.addEventListener('click', changeColor);
```

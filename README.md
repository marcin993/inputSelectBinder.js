# inputSelectBinder.js
Simple script that allows you to dynamiccaly pass ```<input>``` value to the ```<select>``` list.

## How to use?
First copy file ```inputSelectBinder.min.js``` to your project directory and then add ```<script>``` tag to your HTML document, right before ```</body>``` tag, for example:
```html
  ...HTML Code
  <script src="vendors/inputSelectBinder.min.js"></script>
</body>
```

After initialize new instance of ```InputSelectBinder```. For this purpose you should add after above ```<script>``` tag:
```html
<script>
new InputSelectBinder({
      inputs: [
        document.getElementById("answer_1"),
        document.getElementById("answer_2"),
        document.getElementById("answer_3"),
        document.getElementById("answer_4"),
      ],
      target: document.getElementById("correctAnswersList")
    });
</script>
```

### Configuration object
Configuration object accepts following parameters:

| Property | Description | Type | Required | Example | Note |
| --- | --- | --- | --- | --- | --- |
| inputs | Text fields to binding. | Array | Yes | ```[document.getElementById("field1"), document.getElementById("field2"), document.getElementById("field3")]``` | Array must contain only valid references to HTMLElement objects. |
| listAttr | HTML attributes for generated ```<select>``` list. | Object | No | ```{ cssClass: "form select-control", id: "selectList" }``` | Because "class" is reserved word in JavaScript if you want add HTML class attribute you should use "cssClass" key instead "class" in listAttr object. |
| target | Container in which select list will be rendered. | Object (HTMLElement) | Yes | ```document.querySelector("div .select-list")``` | - |

## License
MIT

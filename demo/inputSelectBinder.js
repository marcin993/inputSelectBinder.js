/* TODO
1. Config object type-checking
2. Porządek w kodzie
3. JSBenchmark
*/

function InputSelectBinder(config) {
  if (!config) {
    throw new Error('Config object is not defined!');
  }

  if (!config.inputs) {
    throw new Error('Undefined "inputs" property in config parametr!');
  }

  this.config = this.validConfigObject(config);

  function bindFields(e, index) {
    var value = e.target.value;

    if (value !== this.inputVals[index]) {
      this.inputVals[index] = value;
      this.rebuildOptionElem(index, value);
    }
  }

  this.inputVals = this.buildInputValueObj(this.config.inputs);

  document.addEventListener('DOMContentLoaded', function () {
    this.buildSelectList();

    // Text inputs listeners
    this.config.inputs.forEach(function (input, index) {
      input.addEventListener('keyup', function (e) {
        bindFields.apply(this, [e, index]);
      }.bind(this));

      input.addEventListener('change', function (e) {
        bindFields.apply(this, [e, index]);
      }.bind(this));
    }.bind(this));
  }.bind(this));
}

InputSelectBinder.prototype.buildInputValueObj = function (inputs) {
  var obj = {};

  inputs.forEach(function (elem, index) {
    obj[index] = elem.value;
  });

  return obj;
};

InputSelectBinder.prototype.rebuildOptionElem = function (index, value) {
  var elem = document.querySelector('[data-index=\'' + index + '\']');

  elem.setAttribute('value', value);
  elem.textContent = value;
};

InputSelectBinder.prototype.buildSelectList = function () {
  var fragment = document.createDocumentFragment();
  var selectList = document.createElement('select');
  var inputs = this.config.inputs;
  var inputsLength = inputs.length;
  var i;
  var option;
  var listAttr = this.config.listAttr;
  var listAttrKeys = Object.keys(listAttr);
  var listAttrKeysLength = listAttrKeys.length;

  // Adding custom attributes to <select> element
  if (listAttr) {
    for (i = 0; i < listAttrKeysLength; i += 1) {
      if (listAttrKeys[i] === 'cssClass') {
        selectList.setAttribute('class', listAttr[listAttrKeys[i]]);
      } else {
        selectList.setAttribute(listAttrKeys[i], listAttr[listAttrKeys[i]]);
      }
    }
  }

  // Create <option> elements
  for (i = 0; i < inputsLength; i += 1) {
    option = document.createElement('option');
    option.setAttribute('data-index', i);
    option.setAttribute('value', inputs[i].value);
    option.textContent = inputs[i].value;
    selectList.appendChild(option);
  }

  fragment.appendChild(selectList);
  this.config.target.appendChild(fragment);
};

InputSelectBinder.prototype.validConfigObject = function (configObj) {
  var config = {};
  var i;
  var listAttr;
  var listAttrKeys;
  var listAttrKeysLength;

  if (!Array.isArray(configObj.inputs)) {
    throw new Error('Property "inputs" in config parametr must be an Array and contain reference to correct <input> elements, for example: [document.getElementById("input1"), document.getElementById("input2")]!');
  } else {
    for (i = 0; i < configObj.inputs.length; i += 1) {
      if (configObj.inputs[i].onclick === undefined) {
        throw new Error('All elements passed in array in config object as property "inputs" must be a refer to a valid existing DOM element, for example: document.getElementById("sampleInput")');
      }
    }

    config.inputs = configObj.inputs;
  }

  if (!configObj.target) {
    throw new Error('Undefined "target" property in config parametr!');
  } else {
    if (configObj.target.onclick === undefined) {
      throw new Error('Value "target" property in config object must be a refer to a valid existing DOM element, for example: document.getElementById("sampleDiv")');
    }

    config.target = configObj.target;
  }

  if (configObj.listAttr) {
    listAttr = configObj.listAttr;
    listAttrKeys = Object.keys(listAttr);
    listAttrKeysLength = listAttrKeys.length;

    for (i = 0; i < listAttrKeysLength; i += 1) {
      if (listAttrKeys[i] === 'class') {
        throw new Error('You must not use "class" key to add HTML class attribiute, because this is reserved word in JavaScript! That add this attribute you should use "cssClass" key in "listAttr" object.');
      }
    }

    config.listAttr = configObj.listAttr;
  }

  return config;
};

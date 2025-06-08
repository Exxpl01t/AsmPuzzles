const Blockly = require('blockly/core')
const {javascriptGenerator, Order} = require('blockly/javascript');

const logic_blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{

        // AND

  "type": "AND",
  "tooltip": "Логическое И между всеми битами двух операндов. Результат помещается в первый операнд.",
  "helpUrl": "",
  "message0": "AND %1 ,  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": [
        "LABEL",
        "OFFSET",
        "DEREF",
        "x16_REG",
        "x8_REG",
        "SREG"
      ]
    },
    {
      "type": "input_value",
      "name": "op2",
      "check": [
        "LABEL",
        "NUMBER",
        "OFFSET",
        "DEREF",
        "x16_REG",
        "x8_REG",
        "SREG"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "inputsInline": true
},

{
  "type": "NOT",
  "tooltip": "Инвертирует каждый бит в операнде.",
  "helpUrl": "",
  "message0": "NOT %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": [
        "x16_REG",
        "x8_REG",
        "OFFSET",
        "DEREF"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "inputsInline": true
},

{
  "type": "OR",
  "tooltip": "Логическое ИЛИ между всеми битами двух операндов. Результат помещается в первый операнд.",
  "helpUrl": "",
  "message0": "OR %1 ,  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": [
        "LABEL",
        "OFFSET",
        "DEREF",
        "x16_REG",
        "x8_REG",
        "SREG"
      ]
    },
    {
      "type": "input_value",
      "name": "op2",
      "check": [
        "LABEL",
        "NUMBER",
        "OFFSET",
        "DEREF",
        "x16_REG",
        "x8_REG",
        "SREG"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "inputsInline": true
},

{
  "type": "XOR",
  "tooltip": "Логическое НЕ ИЛИ между всеми битами двух операндов. Результат помещается в первый операнд.",
  "helpUrl": "",
  "message0": "XOR %1 ,  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": [
        "LABEL",
        "OFFSET",
        "DEREF",
        "x16_REG",
        "x8_REG",
        "SREG"
      ]
    },
    {
      "type": "input_value",
      "name": "op2",
      "check": [
        "LABEL",
        "NUMBER",
        "OFFSET",
        "DEREF",
        "x16_REG",
        "x8_REG",
        "SREG"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "inputsInline": true
},                  

]);


javascriptGenerator.forBlock['AND'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `AND ${value_op1}, ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['NOT'] = function(block, generator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.NONE);

  const code = `NOT ${value_name}
  `;
  return code;
}

javascriptGenerator.forBlock['OR'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `OR ${value_op1}, ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['XOR'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `XOR ${value_op1}, ${value_op2}
  `;
  return code;
}

module.exports = {logic_blocks};
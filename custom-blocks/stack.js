const Blockly = require('blockly/core')
const {javascriptGenerator, Order} = require('blockly/javascript');

const stack_blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{

  "type": "POP",
  "tooltip": "Выгружает машинное слово (16 бит) со стека в операнд.",
  "helpUrl": "",
  "message0": "POP %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": [
        "x16_REG",
        "SREG",
        "OFFSET",
        "DEREF"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "inputsInline": true
},                

{
  "type": "POPA",
  "tooltip": "Выгружает все регистры общего назначения (DI, SI, BP, SP, BX, DX, CX, AX) со стека.",
  "helpUrl": "",
  "message0": "POPA %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270
},
                
{
  "type": "POPF",
  "tooltip": "Выгружает регистр флагов (FLAGS) со стека.",
  "helpUrl": "",
  "message0": "POPF %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270
},

{
  "type": "PUSH",
  "tooltip": "Загружает машинное слово (16 бит) из операнда в стек.",
  "helpUrl": "",
  "message0": "PUSH %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": [
        "x16_REG",
        "SREG",
        "OFFSET",
        "DEREF",
        "NUMBER"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "inputsInline": true
},

{
  "type": "PUSHA",
  "tooltip": "Загружает все регистры общего назначения (AX, CX, DX, BX, SP, BP, SI, DI) в стек.",
  "helpUrl": "",
  "message0": "PUSHA %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "inputsInline": true
},
                    
{
  "type": "PUSHF",
  "tooltip": "Загружает регистр флагов (FLAGS) в стек.",
  "helpUrl": "",
  "message0": "PUSHF %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "inputsInline": true
},

]);

javascriptGenerator.forBlock['POP'] = function(block, generator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.NONE);

  const code = `POP ${value_name}
  `;
  return code;
}

javascriptGenerator.forBlock['POPA'] = function() {
  const code = `POPA
  `;
  return code;
}

javascriptGenerator.forBlock['POPF'] = function() {
  const code = `POPF
  `;
  return code;
}

javascriptGenerator.forBlock['PUSH'] = function(block, generator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.NONE);

  const code = `PUSH ${value_name}
  `;
  return code;
}

javascriptGenerator.forBlock['PUSHA'] = function() {
  const code = `PUSHA
  `;
  return code;
}

javascriptGenerator.forBlock['PUSHF'] = function() {
  const code = `PUSHF
  `;
  return code;
}

module.exports = {stack_blocks};
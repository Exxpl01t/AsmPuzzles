const Blockly = require('blockly/core')
const {javascriptGenerator, Order} = require('blockly/javascript');

const ariphm_blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{

  "type": "ADD",
  "tooltip": "Складывает 2 операнда. Результат помещается в первый операнд.",
  "helpUrl": "",
  "message0": "ADD %1 ,  %2",
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
  "colour": 135,
  "inputsInline": true
},

{
  "type": "SUB",
  "tooltip": "Вычитает второй операнд из первого. Результат помещается в первый операнд.",
  "helpUrl": "",
  "message0": "SUB %1 ,  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": [
        "LABEL",
        "NUMBER",
        "OFFSET",
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
        "x16_REG",
        "x8_REG",
        "SREG"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 135,
  "inputsInline": true
},                  

{
  "type": "DIV",
  "tooltip": "Беззнаковое деление. Если операнд - байт, то результат в AL = AX / операнд, в AH = остаток от деления. Если операнд - машинное слово, то в результате AX = (DX AX) / операнд, DX = остаток от деления.",
  "helpUrl": "",
  "message0": "DIV %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": [
        "x16_REG",
        "x8_REG",
        "DEREF"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 135,
  "inputsInline": true
},

{
  "type": "IDIV",
  "tooltip": "Знаковое деление. Если операнд - байт, то результат в AL = AX / операнд, в AH = остаток от деления. Если операнд - машинное слово, то в результате AX = (DX AX) / операнд, DX = остаток от деления.",
  "helpUrl": "",
  "message0": "IDIV %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": [
        "x16_REG",
        "x8_REG",
        "DEREF"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 135,
  "inputsInline": true
},

{
  "type": "MUL",
  "tooltip": "Беззнаковое умножение. Если операнд - байт, то в результате AX = AL * операнд, если операнд - машинное слово, то в результате (DX AX) = AX * операнд.",
  "helpUrl": "",
  "message0": "MUL %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": [
        "x16_REG",
        "x8_REG",
        "DEREF"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 135,
  "inputsInline": true
},
                    

{
  "type": "IMUL",
  "tooltip": "Знаковое умножение. Если операнд - байт, то в результате AX = AL * операнд, если операнд - машинное слово, то в результате (DX AX) = AX * операнд.",
  "helpUrl": "",
  "message0": "IMUL %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": [
        "x16_REG",
        "x8_REG",
        "DEREF"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 135,
  "inputsInline": true
},
                    
{
  "type": "INC",
  "tooltip": "Увеличивает операнд на единицу (инкремент)",
  "helpUrl": "",
  "message0": "INC %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": [
        "x16_REG",
        "x8_REG",
        "DEREF"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 135,
  "inputsInline": true
},
                    
                    

{
  "type": "DEC",
  "tooltip": "Уменьшение операнда на единицу (декремент)",
  "helpUrl": "",
  "message0": "DEC %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": [
        "x16_REG",
        "x8_REG",
        "DEREF"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 135,
  "inputsInline": true
},
       
{
  "type": "NEG",
  "tooltip": "Делает число в операнде отрицательным.",
  "helpUrl": "",
  "message0": "NEG %1",
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
  "colour": 135,
  "inputsInline": true
},                  

{
  "type": "AAA",
  "tooltip": "ASCII Добавление после Сложения. Корректирует результат в AH и AL после сложения при работе с binary-coded decimal числами",
  "helpUrl": "",
  "message0": "AAA %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 135
},

{
  "type": "AAD",
  "tooltip": "ASCII Добавление перед Делением. Приготовляет два binary-coded decimal числа (в AH и AL) для деления",
  "helpUrl": "",
  "message0": "AAD %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 135
},

{
  "type": "AAM",
  "tooltip": "ASCII Добавление после Умножения. Корректирует результат умножения двух binary-coded decimal числа (в AH и AL)",
  "helpUrl": "",
  "message0": "AAM %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 135
},

{
  "type": "AAS",
  "tooltip": "ASCII Добавление после Вычитания. Корректирует результат в AH и AL после вычитания при работе с binary-coded decimal числами",
  "helpUrl": "",
  "message0": "AAS %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 135
},

{
  "type": "ADC",
  "tooltip": "Складывает два операнда + единицу или ноль из Carry флага (CF). Результат записывается в первый операнд",
  "helpUrl": "",
  "message0": "ADC %1 ,  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": [
        "LABEL",
        "NUMBER",
        "OFFSET",
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
        "x16_REG",
        "x8_REG",
        "SREG"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 135,
  "inputsInline": true
},

{
  "type": "SBB",
  "tooltip": "Вычитает второй операнд из первого, после чего вычитает Carry флаг (CF) из первого. Результат помещается в первый операнд.",
  "helpUrl": "",
  "message0": "SBB %1 ,  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": [
        "LABEL",
        "NUMBER",
        "OFFSET",
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
        "x16_REG",
        "x8_REG",
        "SREG"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 135,
  "inputsInline": true
},
                    
        
{
  "type": "DAA",
  "tooltip": "Десятичное Прибавление после Сложения. Корректирует результат сложения двух упакованных binary-coded decimal чисел",
  "helpUrl": "",
  "message0": "DAA %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 135
},
                    
{
  "type": "DAS",
  "tooltip": "Десятичное Прибавление после Вычитания. Корректирует результат вычитания двух упакованных binary-coded decimal чисел",
  "helpUrl": "",
  "message0": "DAS %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 135
},


                    
                    

]);


javascriptGenerator.forBlock['ADD'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `ADD ${value_op1}, ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['SUB'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `SUB ${value_op1} ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['DIV'] = function(block, generator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.NONE);

  const code = `DIV ${value_name}
  `;
  return code;
}

javascriptGenerator.forBlock['IDIV'] = function(block, generator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.NONE);

  const code = `IDIV ${value_name}
  `;
  return code;
}

javascriptGenerator.forBlock['MUL'] = function(block, generator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.NONE);

  const code = `MUL ${value_name}
  `;
  return code;
}

javascriptGenerator.forBlock['IMUL'] = function(block, generator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.NONE);

  const code = `IMUL ${value_name}
  `;
  return code;
}

javascriptGenerator.forBlock['INC'] = function(block, generator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.NONE);

  const code = `INC ${value_name}
  `;
  return code;
}

javascriptGenerator.forBlock['DEC'] = function(block, generator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.NONE);

  const code = `DEC ${value_name}
  `;
  return code;
}

javascriptGenerator.forBlock['NEG'] = function(block, generator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.NONE);

  const code = `NEG ${value_name}
  `;
  return code;
}

javascriptGenerator.forBlock['AAA'] = function() {
  const code = `AAA
  `;
  return code;
}

javascriptGenerator.forBlock['AAD'] = function() {
  const code = `AAD
  `;
  return code;
}

javascriptGenerator.forBlock['AAM'] = function() {
  const code = `AAM
  `;
  return code;
}

javascriptGenerator.forBlock['AAS'] = function() {
  const code = `AAS`;
  return code;
}

javascriptGenerator.forBlock['ADC'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `ADC ${value_op1}, ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['SBB'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `SBB ${value_op1} ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['DAA'] = function() {
  const code = `DAA
  `;
  return code;
}

javascriptGenerator.forBlock['DAS'] = function() {
  const code = `DAS
  `;
  return code;
}

module.exports = {ariphm_blocks};
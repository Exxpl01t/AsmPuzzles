const Blockly = require('blockly/core')
const {javascriptGenerator, Order} = require('blockly/javascript');

const shifts_blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{

  "type": "RCL",
  "tooltip": "Передвигает все биты первого операнда влево через флаг Carry (CF). Число передвижений установлено во втором операнде, который может быть числом или регистром CL.",
  "helpUrl": "",
  "message0": "RCL %1 ,  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": [
        "x16_REG",
        "x8_REG",
        "OFFSET",
        "DEREF"
      ]
    },
    {
      "type": "input_value",
      "name": "op2",
      "check": [
        "NUMBER",
        "x8_REG"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},

{
  "type": "RCR",
  "tooltip": "Передвигает все биты первого операнда вправо через флаг Carry (CF). Число передвижений установлено во втором операнде, который может быть числом или регистром CL.",
  "helpUrl": "",
  "message0": "RCR %1 ,  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": [
        "x16_REG",
        "x8_REG",
        "OFFSET",
        "DEREF"
      ]
    },
    {
      "type": "input_value",
      "name": "op2",
      "check": [
        "NUMBER",
        "x8_REG"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},
                    
{
  "type": "ROL",
  "tooltip": "Передвигает все биты первого операнда влево. Число передвижений установлено во втором операнде, который может быть числом или регистром CL.",
  "helpUrl": "",
  "message0": "ROL %1 ,  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": [
        "x16_REG",
        "x8_REG",
        "OFFSET",
        "DEREF"
      ]
    },
    {
      "type": "input_value",
      "name": "op2",
      "check": [
        "NUMBER",
        "x8_REG"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},
                              
{
  "type": "ROR",
  "tooltip": "Передвигает все биты первого операнда вправо. Число передвижений установлено во втором операнде, который может быть числом или регистром CL.",
  "helpUrl": "",
  "message0": "ROR %1 ,  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": [
        "x16_REG",
        "x8_REG",
        "OFFSET",
        "DEREF"
      ]
    },
    {
      "type": "input_value",
      "name": "op2",
      "check": [
        "NUMBER",
        "x8_REG"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},
                     
{
  "type": "SAL",
  "tooltip": "Сдвигает все биты первого операнда влево. Число передвижений установлено во втором операнде, который может быть числом или регистром CL.",
  "helpUrl": "",
  "message0": "SAL %1 ,  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": [
        "x16_REG",
        "x8_REG",
        "OFFSET",
        "DEREF"
      ]
    },
    {
      "type": "input_value",
      "name": "op2",
      "check": [
        "NUMBER",
        "x8_REG"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},
                    
{
  "type": "SAR",
  "tooltip": "Сдвигает все биты первого операнда вправо. Число передвижений установлено во втором операнде, который может быть числом или регистром CL.",
  "helpUrl": "",
  "message0": "SAR %1 ,  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": [
        "x16_REG",
        "x8_REG",
        "OFFSET",
        "DEREF"
      ]
    },
    {
      "type": "input_value",
      "name": "op2",
      "check": [
        "NUMBER",
        "x8_REG"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},
      
{
  "type": "SHL",
  "tooltip": "Сдвигает все биты первого операнда влево. Число передвижений установлено во втором операнде, который может быть числом или регистром CL.",
  "helpUrl": "",
  "message0": "SAL %1 ,  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": [
        "x16_REG",
        "x8_REG",
        "OFFSET",
        "DEREF"
      ]
    },
    {
      "type": "input_value",
      "name": "op2",
      "check": [
        "NUMBER",
        "x8_REG"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},
                    
{
  "type": "SHR",
  "tooltip": "Сдвигает все биты первого операнда вправо. Число передвижений установлено во втором операнде, который может быть числом или регистром CL.",
  "helpUrl": "",
  "message0": "SAR %1 ,  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": [
        "x16_REG",
        "x8_REG",
        "OFFSET",
        "DEREF"
      ]
    },
    {
      "type": "input_value",
      "name": "op2",
      "check": [
        "NUMBER",
        "x8_REG"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},

]);

javascriptGenerator.forBlock['RCL'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `RCL ${value_op1}, ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['RCR'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `RCR ${value_op1}, ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['ROL'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `ROL ${value_op1}, ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['ROR'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `ROR ${value_op1}, ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['SAL'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `SAL ${value_op1}, ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['SAR'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `SAR ${value_op1}, ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['SHL'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `SAL ${value_op1}, ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['SHR'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `SAR ${value_op1}, ${value_op2}
  `;
  return code;
}

module.exports = {shifts_blocks};
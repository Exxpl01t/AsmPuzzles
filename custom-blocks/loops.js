const Blockly = require('blockly/core')
const {javascriptGenerator, Order} = require('blockly/javascript');

const loops_blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{

  "type": "LOOP",
  "tooltip": "Уменьшает CX на 1 (декремент CX), после чего прыжок на операнд-метку если CX не равен 0.",
  "helpUrl": "",
  "message0": "LOOP %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "inputsInline": true
},

{
  "type": "LOOPE",
  "tooltip": "Уменьшает CX на 1 (декремент CX), после чего прыжок на операнд-метку если CX не равен 0 И ZF = 1.",
  "helpUrl": "",
  "message0": "LOOPE %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "inputsInline": true
},
                    
{
  "type": "LOOPNE",
  "tooltip": "Уменьшает CX на 1 (декремент CX), после чего прыжок на операнд-метку если CX не равен 0 И ZF = 0.",
  "helpUrl": "",
  "message0": "LOOPNE %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "inputsInline": true
},

{
  "type": "LOOPNZ",
  "tooltip": "Уменьшает CX на 1 (декремент CX), после чего прыжок на операнд-метку если CX не равен 0 И ZF = 0.",
  "helpUrl": "",
  "message0": "LOOPNZ %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "inputsInline": true
},

{
  "type": "LOOPZ",
  "tooltip": "Уменьшает CX на 1 (декремент CX), после чего прыжок на операнд-метку если CX не равен 0 И ZF = 1.",
  "helpUrl": "",
  "message0": "LOOPZ %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "inputsInline": true
},
]);

javascriptGenerator.forBlock['LOOP'] = function(block, generator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.NONE);

  const code = `LOOP ${value_name}
  `;
  return code;
}

javascriptGenerator.forBlock['LOOPE'] = function(block, generator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.NONE);

  const code = `LOOPE ${value_name}
  `;
  return code;
}

javascriptGenerator.forBlock['LOOPNE'] = function(block, generator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.NONE);

  const code = `LOOPNE ${value_name}
  `;
  return code;
}

javascriptGenerator.forBlock['LOOPNZ'] = function(block, generator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.NONE);

  const code = `LOOPNZ ${value_name}
  `;
  return code;
}

javascriptGenerator.forBlock['LOOPZ'] = function(block, generator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.NONE);

  const code = `LOOPZ ${value_name}
  `;
  return code;
}

module.exports = {loops_blocks};
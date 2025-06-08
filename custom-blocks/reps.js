const Blockly = require('blockly/core')
const {javascriptGenerator, Order} = require('blockly/javascript');

const rep_blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{

          // REP

  "type": "REP",
  "tooltip": "Повторяет инструкцию из списка [MOVSB, MOVSW, LODSB, LODSW, STOSB, STOSW] CX раз.",
  "helpUrl": "",
  "message0": "REP %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 45
},
    
          // REPE

{
  "type": "REPE",
  "tooltip": "Повторяет инструкцию из списка [CMPSB, CMPSW, SCASB, SCASW] пока флаг ZF = 1, но не более CX раз.",
  "helpUrl": "",
  "message0": "REPE %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 45
},
    
          // REPNE

{
  "type": "REPNE",
  "tooltip": "Повторяет инструкцию из списка [CMPSB, CMPSW, SCASB, SCASW] пока флаг ZF = 0, но не более CX раз.",
  "helpUrl": "",
  "message0": "REPNE %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 45
},
    
          // REPNZ

{
  "type": "REPNZ",
  "tooltip": "Повторяет инструкцию из списка [CMPSB, CMPSW, SCASB, SCASW] пока флаг ZF = 0, но не более CX раз.",
  "helpUrl": "",
  "message0": "REPNZ %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 45
},
    
          // REPZ

{
  "type": "REPZ",
  "tooltip": "Повторяет инструкцию из списка [CMPSB, CMPSW, SCASB, SCASW] пока флаг ZF = 1, но не более CX раз.",
  "helpUrl": "",
  "message0": "REPZ %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 45
},

]);


javascriptGenerator.forBlock['REP'] = function() {
  const code = `REP
  `;
  return code;
}

javascriptGenerator.forBlock['REPE'] = function() {
    const code = `REPE
  `;
  return code;
}

javascriptGenerator.forBlock['REPNE'] = function() {
  const code = `REPNE
  `;
  return code;
}

javascriptGenerator.forBlock['REPNZ'] = function() {
  const code = `REPNZ
  `;
  return code;
}

javascriptGenerator.forBlock['REPZ'] = function() {
  const code = `REPZ
  `;
  return code;
}

module.exports = {rep_blocks};
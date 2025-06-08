const Blockly = require('blockly/core')
const {javascriptGenerator, Order} = require('blockly/javascript');

const flags_blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{

  "type": "CLC",
  "tooltip": "Выставляет ноль в Carry Flag (CF).",
  "helpUrl": "",
  "message0": "CLC %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180
},         

{
  "type": "CLD",
  "tooltip": "Выставляет ноль в Direction Flag (DF). SI и DI будут инкрементированы следующими инструкциями: [CMPSB, CMPSW, LODSB, LODSW, MOVSB, MOVSW, STOSB, STOSW]",
  "helpUrl": "",
  "message0": "CLD %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180
},
                   
{
  "type": "CLI",
  "tooltip": "Выставляет ноль в Interrupt Flag (IF). Это действие отключает аппаратные прерывания.",
  "helpUrl": "",
  "message0": "CLI %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180
},
                    
{
  "type": "CMC",
  "tooltip": "Инвертирует бит в Carry Flag (CF).",
  "helpUrl": "",
  "message0": "CMC %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180
},

{
  "type": "STC",
  "tooltip": "Выставляет единицу в Carry Flag (CF).",
  "helpUrl": "",
  "message0": "STC %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180
},

{
  "type": "STD",
  "tooltip": "Выставляет единицу в Direction Flag (DF). SI и DI будут декрементированы следующими инструкциями: [CMPSB, CMPSW, LODSB, LODSW, MOVSB, MOVSW, STOSB, STOSW]",
  "helpUrl": "",
  "message0": "STD %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180
},
                    
{
  "type": "STI",
  "tooltip": "Выставляет единицу в Interrupt Flag (IF). Это действие включает аппаратные прерывания.",
  "helpUrl": "",
  "message0": "STI %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180
},

]);

javascriptGenerator.forBlock['CLC'] = function() {
  const code = `CLC
  `;
  return code;
}

javascriptGenerator.forBlock['CLD'] = function() {
  const code = `CLD
  `;
  return code;
}

javascriptGenerator.forBlock['CLI'] = function() {
  const code = `CLI
  `;
  return code;
}

javascriptGenerator.forBlock['CMC'] = function() {
  const code = `CMC
  `;
  return code;
}

javascriptGenerator.forBlock['STC'] = function() {
  const code = `STC
  `;
  return code;
}

javascriptGenerator.forBlock['STD'] = function() {
  const code = `STD
  `;
  return code;
}

javascriptGenerator.forBlock['STI'] = function() {
  const code = `STI
  `;
  return code;
}

module.exports = {flags_blocks};
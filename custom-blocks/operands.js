const Blockly = require('blockly/core')
const {javascriptGenerator, Order} = require('blockly/javascript');

const ops_blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{

        // LABEL

  "type": "LABEL",
  "tooltip": "Метка",
  "helpUrl": "",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "LABEL_NAME",
      "text": "Имя метки"
    },
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "output": 'LABEL',
  "colour": 210
},     

        // NUMBER

{
  "type": "NUMBER",
  "tooltip": "Десятичное, шестнадцатеричное или двоичное число.",
  "helpUrl": "",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "number_type",
      "options": [
        [ "dec", "dec" ],
        [ "hex", "hex" ],
        [ "bin", "bin" ],
      ]
    },
    {
      "type": "field_input",
      "name": "number_field",
      "text": "Число",
    },
    {
      "type": "input_end_row",
      "name": "NAME",
    }
  ],
  "output": 'NUMBER',
  "colour": 210
},    

        // OFFSET

{
  "type": "OFFSET",
  "tooltip": "Взятие адреса памяти",
  "helpUrl": "",
  "message0": "OFFSET %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": [
        "LABEL",
        "NUMBER",
        "x16_REG",
        "x8_REG",
        "SREG"
      ]
    }
  ],
  "output": 'OFFSET',
  "colour": 210
},                  

        // x16_REG
        
{
  "type": "x16_REG",
  "tooltip": "16-битный регистр общего назначения",
  "helpUrl": "",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "REGS",
      "options": [
        [ "AX", "AX" ],
        [ "BX", "BX" ],
        [ "CX", "CX" ],
        [ "DX", "DX" ],
        [ "DI", "DI" ],
        [ "SI", "SI" ],
        [ "BP", "BP" ],
        [ "SP", "SP" ],
      ]
    },
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "output": 'x16_REG',
  "colour": 210
},

        // x8_REG

{
  "type": "x8_REG",
  "tooltip": "8-битные половины регистров AX, BX, CX, DX. Буква \"H\" в названии половины означает, что это верхние 8 бит регистра (левые 8 бит). Буква \"L\" означает, что это нижние 8 бит регистра (правые 8 бит).",
  "helpUrl": "",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "REGS",
      "options": [
        [ "AH", "AH" ],
        [ "AL", "AL" ],
        [ "BH", "BH" ],
        [ "BL", "BL" ],
        [ "CH", "CH" ],
        [ "CL", "CL" ],
        [ "DH", "DH" ],
        [ "DL", "DL" ],
      ]
    },
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "output": 'x8_REG',
  "colour": 210
},

        // SREG

{
  "type": "SREG",
  "tooltip": "16-битный сегментный регистр",
  "helpUrl": "",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "SREGS",
      "options": [
        [ "DS", "DS" ],
        [ "ES", "ES" ],
        [ "SS", "SS" ],
        [ "CS", "CS" ],
      ]
    },
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "output": 'SREG',
  "colour": 210
},

{
  "type": "DEREF",
  "tooltip": "Разыменование адреса памяти",
  "helpUrl": "",
  "message0": "[ %1 ] %2",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Метка / рег."
    },
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 210
}
                    

]);

javascriptGenerator.forBlock['LABEL'] = function(block) {
  const text_label_name = block.getFieldValue('LABEL_NAME');

  const code = `${text_label_name}`;
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['NUMBER'] = function(block) {
  const dropdown_number_type = block.getFieldValue('number_type');
  const text_number_field = block.getFieldValue('number_field');

  let number_field = text_number_field;
  if (dropdown_number_type == 'hex')
    number_field = '0' + number_field + 'h'
  else if (dropdown_number_type == 'bin')
    number_field = number_field + 'b'


  const code = `${number_field}`;
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['OFFSET'] = function(block, generator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.NONE);

  const code = `OFFSET ${value_name}`;
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['DEREF'] = function(block) {
  const text_name = block.getFieldValue('NAME');

  const code = `[ ${text_name} ]`;
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['x16_REG'] = function(block) {
  const dropdown_regs = block.getFieldValue('REGS');

  const code = `${dropdown_regs}`;
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['x8_REG'] = function(block) {
  const dropdown_regs = block.getFieldValue('REGS');

  const code = `${dropdown_regs}`;
  return [code, Order.NONE];
}

javascriptGenerator.forBlock['SREG'] = function(block) {
  const dropdown_regs = block.getFieldValue('SREGS');

  const code = `${dropdown_regs}`;
  return [code, Order.NONE];
}

module.exports = {ops_blocks};
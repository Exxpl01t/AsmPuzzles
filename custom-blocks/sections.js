const Blockly = require('blockly/core')
const {javascriptGenerator, Order} = require('blockly/javascript');

const sect_blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{

  "type": "START_DATA",
  "tooltip": "Начало ассемблерной программы. Здесь перечислены метки с данными.",
  "helpUrl": "",
  "message0": "Начало секции .DATA %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "nextStatement": [
    "LABEL_DATA_NORMAL",
    "LABEL_DATA_DUP",
    "START_CODE"
  ],
  "colour": 45
},

{
  "type": "LABEL_DATA_NORMAL",
  "tooltip": "Метка с данными. Предназначена для секции .DATA. Числа разделять запятой.",
  "helpUrl": "",
  "message0": "%1 %2 %3 %4",
  "args0": [
    {
      "type": "field_input",
      "name": "LABEL",
      "text": "Имя метки"
    },
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [ "DB", "DB" ],
        [ "DW", "DW" ],
        [ "DD", "DD" ],
        [ "DQ", "DQ" ]
      ]
    },
    {
      "type": "field_input",
      "name": "DATA",
      "text": "Введите данные."
    },
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": [
    "START_DATA",
    "LABEL_DATA_NORMAL",
    "LABEL_DATA_DUP"
  ],
  "nextStatement": [
    "LABEL_DATA_NORMAL",
    "LABEL_DATA_DUP",
    "START_CODE"
  ],
  "colour": 45
},
                    
{
  "type": "LABEL_DATA_DUP",
  "tooltip": "Метка с данными. Предназначена для секции .DATA. Данные после 'dup' дублируются на число раз перед dup.",
  "helpUrl": "",
  "message0": "%1 %2 %3 %4 dup ( %5 %6 ) %7",
  "args0": [
    {
      "type": "field_input",
      "name": "LABEL",
      "text": "Имя метки"
    },
    {
      "type": "field_dropdown",
      "name": "BYTES",
      "options": [
        [ "DB", "DB" ],
        [ "DW", "DW" ],
        [ "DD", "DD" ],
        [ "DQ", "DQ" ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "NUM1",
      "options": [
        [ "dec", "dec"],
        [ "hex","hex"],
        [ "bin","bin" ]
      ]
    },
    {
      "type": "field_input",
      "name": "TIMES",
      "text": "times"
    },
    {
      "type": "field_dropdown",
      "name": "NUM2",
      "options": [
        [ "dec", "dec" ],
        [ "hex","hex"],
        ["bin","bin"]
      ]
    },
    {
      "type": "field_input",
      "name": "DATA",
      "text": "data"
    },
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": [
    "START_DATA",
    "LABEL_DATA_NORMAL",
    "LABEL_DATA_DUP"
  ],
  "nextStatement": [
    "LABEL_DATA_NORMAL",
    "LABEL_DATA_DUP",
    "START_CODE"
  ],
  "colour": 45
},

{
  "type": "START_CODE",
  "tooltip": "Конец секции .DATA. Начало секции .CODE",
  "helpUrl": "",
  "message0": "Конец секции .DATA. Начало секции .CODE %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": [
    "LABEL_DATA_NORMAL",
    "LABEL_DATA_DUP"
  ],
  "nextStatement": null,
  "colour": 45
},

{
  "type": "PROGRAM_START",
  "tooltip": "Начало ассемблерной программы. Установка секции .DATA в регистр DS",
  "helpUrl": "",
  "message0": "(Начало программы) %1 MOV AX, @data %2 MOV DS, AX %3",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME1"
    },
    {
      "type": "input_end_row",
      "name": "NAME2"
    },
    {
      "type": "input_end_row",
      "name": "NAME3"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 45
},

{
  "type": "PROGRAM_END",
  "tooltip": "Выход из программы с помощью функции 4Сh прерывания 21h",
  "helpUrl": "",
  "message0": "(Выход из программы) %1 MOV AX, 4C00h %2 INT 21h %3",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME1"
    },
    {
      "type": "input_end_row",
      "name": "NAME2"
    },
    {
      "type": "input_end_row",
      "name": "NAME3"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 45
},

                    
{
  "type": "END_CODE",
  "tooltip": "Конец секции .CODE. Конец программы.",
  "helpUrl": "",
  "message0": "Конец секции .CODE %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "colour": 45
},
                                       
                    

]);

javascriptGenerator.forBlock['START_DATA'] = function() {

  // TODO: Assemble javascript into the code variable.
  const code = `MODEL SMALL

    STACK 100h

    .DATA  
  `;
  return code;
}

javascriptGenerator.forBlock['LABEL_DATA_NORMAL'] = function(block) {
  const text_label = block.getFieldValue('LABEL');
  const dropdown_name = block.getFieldValue('NAME');
  const text_data = block.getFieldValue('DATA');

  // TODO: Assemble javascript into the code variable.
  const code = `${text_label} ${dropdown_name} ${text_data}
  `;
  return code;
}

javascriptGenerator.forBlock['LABEL_DATA_DUP'] = function(block) {
  const text_label = block.getFieldValue('LABEL');
  const dropdown_bytes = block.getFieldValue('BYTES');
  const dropdown_num1 = block.getFieldValue('NUM1');
  const text_times = block.getFieldValue('TIMES');
  const dropdown_num2 = block.getFieldValue('NUM2');
  const text_data = block.getFieldValue('DATA');

  // TODO: Assemble javascript into the code variable.
  let times = text_times;
  if (dropdown_num1 == 'hex')
    times = '0' + times + 'h'
  else if (dropdown_num1 == 'bin')
    times = times + 'b'

  let data = text_data;
  if (dropdown_num2 == 'hex')
    data = '0' + data + 'h'
  else if (dropdown_num2 == 'bin')
    data = data + 'b'

  const code = `${text_label} ${dropdown_bytes} ${times} dup (${data})
  `;
  return code;
}

javascriptGenerator.forBlock['START_CODE'] = function() {

  // TODO: Assemble javascript into the code variable.
  const code = `
    .CODE

    MAIN PROC 

  `;
  return code;
}


javascriptGenerator.forBlock['PROGRAM_START'] = function() {
  const code = `MOV AX, @data
  MOV DS, AX
  `;
  return code;
}

javascriptGenerator.forBlock['PROGRAM_END'] = function() {
  const code = `MOV AX, 4C00h
  INT 21h
  `;
  return code;
}

javascriptGenerator.forBlock['END_CODE'] = function() {

  // TODO: Assemble javascript into the code variable.
  const code = `
    MAIN ENDP
    END MAIN
  `;
  return code;
}

module.exports = {sect_blocks};
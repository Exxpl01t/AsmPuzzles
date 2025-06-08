const Blockly = require('blockly/core')
const {javascriptGenerator, Order} = require('blockly/javascript');

const misc_blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{

  "type": "SET_LABEL",
  "tooltip": "Установка новой метки в секции .CODE",
  "helpUrl": "",
  "message0": "%1 : %2",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Новая метка"
    },
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345
},

{
  "type": "INT",
  "tooltip": "Прерывание. Перед вызовом прерывания требуется установить нужную функцию, загрузив в регистр AX какое-либо число",
  "helpUrl": "",
  "message0": "INT %1 %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "dropdown",
      "options": [
        [ "hex", "hex" ],
        [ "dec", "dec" ],
        [ "bin", "bin" ]
      ]
    },
    {
      "type": "field_input",
      "name": "number",
      "text": "00"
    },
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345
},
                    
{
  "type": "CMP",
  "tooltip": "Вычитает из первого операнда второй операнд. Результат нигде не хранится. Выставляются флаги в регистре FLAGS",
  "helpUrl": "",
  "message0": "CMP %1 ,  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": [
        "LABEL",
        "NUMBER",
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
  "colour": 345,
  "inputsInline": true
},                                

{
  "type": "CBW",
  "tooltip": "Конвертирует байт AL в машинное слово AX. (Если самый правый бит AL = 1, то есть AL - отрицательно, то AH = 0FFh, иначе AH = 0.",
  "helpUrl": "",
  "message0": "CBW %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},

{
  "type": "CWD",
  "tooltip": "Конвертирует машинное слово AX в двойное машинное слово (DX AX). (Если самый правый бит AX = 1, то есть AX - отрицательно, то DX = 0FFFFh, иначе DX = 0.",
  "helpUrl": "",
  "message0": "CWD %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},
                    
{
  "type": "CMPSB",
  "tooltip": "Сравнивает следующие байты как CMP: ES:[DI] и DS:[SI]. Обновляет DI и SI в зависимости от Direction Flag (DF)",
  "helpUrl": "",
  "message0": "CMPSB %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},
                              
{
  "type": "CMPSW",
  "tooltip": "Сравнивает следующие машинные слова как CMP: ES:[DI] и DS:[SI]. Обновляет DI и SI в зависимости от Direction Flag (DF)",
  "helpUrl": "",
  "message0": "CMPSW %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},
                    
{
  "type": "HLT",
  "tooltip": "Приостанавливает систему до следующего прерывания.",
  "helpUrl": "",
  "message0": "HLT %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},
                    
{
  "type": "IN",
  "tooltip": "Ввод из порта в AL или AX (первый операнд). Второй операнд есть номер порта. Он может быть однобайтовым числом или регистром DX.",
  "helpUrl": "",
  "message0": "IN %1 ,  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": [
        "x16_REG",
        "x8_REG"
      ]
    },
    {
      "type": "input_value",
      "name": "op2",
      "check": [
        "x16_REG",
        "NUMBER"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},
                    
{
  "type": "OUT",
  "tooltip": "Вывод из AL или AX (второй операнд) в порт. Первый операнд есть номер порта. Он может быть однобайтовым числом или регистром DX.",
  "helpUrl": "",
  "message0": "OUT %1 , %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op2",
      "check": [
        "x16_REG",
        "NUMBER"
      ]
    },
    {
      "type": "input_value",
      "name": "op1",
      "check": [
        "x16_REG",
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
  "type": "INTO",
  "tooltip": "Вызов Прерывания 4 если Overflow Flag (OF) = 1.",
  "helpUrl": "",
  "message0": "INTO %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},
                
{
  "type": "IRET",
  "tooltip": "Возврат из прерывания",
  "helpUrl": "",
  "message0": "IRET %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},
   
{
  "type": "NOP",
  "tooltip": "Ничего не делает",
  "helpUrl": "",
  "message0": "NOP %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},

{
  "type": "SCASB",
  "tooltip": "Сравнивает следующие байты как CMP: AL и ES:[DI]. Обновляет DI в зависимости от Direction Flag (DF)",
  "helpUrl": "",
  "message0": "SCASB %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},
                    
{
  "type": "SCASW",
  "tooltip": "Сравнивает следующие машинные слова как CMP: AX и ES:[DI]. Обновляет DI в зависимости от Direction Flag (DF)",
  "helpUrl": "",
  "message0": "SCASW %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "inputsInline": true
},
                                 
{
  "type": "TEST",
  "tooltip": "Логическое И между всеми битами двух операндов. Результат нигде не хранится. Обновляет флаги в регистре FLAGS.",
  "helpUrl": "",
  "message0": "TEST %1 ,  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": [
        "LABEL",
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
  "colour": 345,
  "inputsInline": true
},

]);

javascriptGenerator.forBlock['SET_LABEL'] = function(block) {
  const text_name = block.getFieldValue('NAME');
  const code = `${text_name}:
  `;
  return code;
}

javascriptGenerator.forBlock['INT'] = function(block) {
  const dropdown_dropdown = block.getFieldValue('dropdown');
  const text_number = block.getFieldValue('number');

  let number = text_number;
  if (dropdown_dropdown == 'hex')
    number = '0' + number + 'h'
  else if (dropdown_dropdown == 'bin')
    number = number + 'b'

  const code = `INT ${number}
  `;
  return code;
}

javascriptGenerator.forBlock['CMP'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `CMP ${value_op1}, ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['CBW'] = function() {
  const code = `CBW
  `;
  return code;
}

javascriptGenerator.forBlock['CWD'] = function() {
  const code = `CWD
  `;
  return code;
}

javascriptGenerator.forBlock['CMPSB'] = function() {
  const code = `CMPSB
  `;
  return code;
}

javascriptGenerator.forBlock['CMPSW'] = function() {
  const code = `CMPSW
  `;
  return code;
}

javascriptGenerator.forBlock['HLT'] = function() {
  const code = `HLT
  `;
  return code;
}

javascriptGenerator.forBlock['IN'] = function() {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `IN ${value_op1} ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['OUT'] = function() {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `OUT ${value_op1} ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['INTO'] = function() {
  const code = `INTO
  `;
  return code;
}

javascriptGenerator.forBlock['IRET'] = function() {
  const code = `IRET
  `;
  return code;
}

javascriptGenerator.forBlock['NOP'] = function() {
  const code = `NOP
  `;
  return code;
}

javascriptGenerator.forBlock['SCASB'] = function() {
  const code = `SCASB
  `;
  return code;
}

javascriptGenerator.forBlock['SCASW'] = function() {
  const code = `SCASW
  `;
  return code;
}

javascriptGenerator.forBlock['TEST'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);
  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `TEST ${value_op1} ${value_op2}
  `;
  return code;
}

module.exports = {misc_blocks};

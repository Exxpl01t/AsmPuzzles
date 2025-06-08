const Blockly = require('blockly/core')
const {javascriptGenerator, Order} = require('blockly/javascript');

const movs_blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{

        // MOV
        
  "type": "MOV",
  "tooltip": "Инструкция MOV копирует содержимое из второго операнда в первый операнд.",
  "helpUrl": "",
  "message0": "MOV  %1 ,  %2",
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
  "colour": 0,
  "inputsInline": true
},

          // LEA

{
  "type": "LEA",
  "tooltip": "Вычисляет адрес, указанный во втором операнде, и загружает этот адрес (смещение) в первый операнд, не обращаясь к памяти.",
  "helpUrl": "",
  "message0": "LEA %1 , %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "x16_REG"
    },
    {
      "type": "input_value",
      "name": "op2",
      "check": [
        "LABEL",
        "NUMBER",
        "OFFSET"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "inputsInline": true
},
                    


          // LDS

{
  "type": "LDS",
  "tooltip": "Загружает двойное машинное слово из памяти (второй операнд) в регистр (первый операнд) и регистр DS.",
  "helpUrl": "",
  "message0": "LDS %1 , %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "x16_REG"
    },
    {
      "type": "input_value",
      "name": "op2",
      "check": [
        "LABEL",
        "NUMBER",
        "OFFSET"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "inputsInline": true
},         

          // LES

{
  "type": "LES",
  "tooltip": "Загружает двойное машинное слово из памяти (второй операнд) в регистр (первый операнд) и регистр ES.",
  "helpUrl": "",
  "message0": "LES %1 , %2",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "x16_REG"
    },
    {
      "type": "input_value",
      "name": "op2",
      "check": [
        "LABEL",
        "NUMBER",
        "OFFSET"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "inputsInline": true
},

          // LODSB

{
  "type": "LODSB",
  "tooltip": "Загружает байт из DS:[SI] в AL. Инкремент или декремент SI - в зависимости от DF.",
  "helpUrl": "",
  "message0": "LODSB %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0
},

          // LODSW

{
  "type": "LODSW",
  "tooltip": "Загружает машинное слово из DS:[SI] в AL. SI += 2 или SI -= 2 - в зависимости от DF.",
  "helpUrl": "",
  "message0": "LODSW %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0
},               

          // MOVSB

{
  "type": "MOVSB",
  "tooltip": "Копирует байт из DS:[SI] в ES:[DI]. Обновляет SI и DI в зависимости от DF.",
  "helpUrl": "",
  "message0": "MOVSB %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0
},

          // MOVSW

{
  "type": "MOVSW",
  "tooltip": "Копирует машинное слово из DS:[SI] в ES:[DI]. Обновляет SI и DI в зависимости от DF.",
  "helpUrl": "",
  "message0": "MOVSW %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0
},            

          // STOSB

{
  "type": "STOSB",
  "tooltip": "Копирует байт из AL в ES:[DI]. Обновляет SI в зависимости от DF.",
  "helpUrl": "",
  "message0": "STOSB %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0
},

          // STOSW

{
  "type": "STOSW",
  "tooltip": "Копирует машинное слово из AX в ES:[DI]. Обновляет SI в зависимости от DF.",
  "helpUrl": "",
  "message0": "STOSW %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0
},

          // XCHG

{
  "type": "XCHG",
  "tooltip": "Меняет местами содержимое 2 операндов.",
  "helpUrl": "",
  "message0": "XCHG %1 , %2",
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
  "colour": 0,
  "inputsInline": true
},

          // XLATB

{
  "type": "XLATB",
  "tooltip": "Копирует байт из DS:[BX + беззнаковый AL] в AL.",
  "helpUrl": "",
  "message0": "XLATB %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0
},

          // LAHF

{
  "type": "LAHF",
  "tooltip": "Загружает в AH первые 8 бит регистра FLAGS",
  "helpUrl": "",
  "message0": "LAHF %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0
},

          // SAHF

{
  "type": "SAHF",
  "tooltip": "Загружает в первые 8 бит регистра FLAGS регистр AH.",
  "helpUrl": "",
  "message0": "SAHF %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0
},
]);


javascriptGenerator.forBlock['MOV'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `MOV ${value_op1}, ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['LEA'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `LEA ${value_op1}, ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['LDS'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `LDS ${value_op1}, ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['LES'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `LES ${value_op1}, ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['LODSB'] = function() {

  const code = `LODSB
  `;
  return code;
}

javascriptGenerator.forBlock['LODSW'] = function() {

  const code = `LODSW
  `;
  return code;
}

javascriptGenerator.forBlock['MOVSB'] = function() {

  const code = `MOVSB
  `;
  return code;
}

javascriptGenerator.forBlock['MOVSW'] = function() {

  const code = `MOVSW
  `;
  return code;
}

javascriptGenerator.forBlock['STOSB'] = function() {

  const code = `STOSB
  `;
  return code;
}

javascriptGenerator.forBlock['STOSW'] = function() {

  const code = `STOSW
  `;
  return code;
}

javascriptGenerator.forBlock['XCHG'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const value_op2 = generator.valueToCode(block, 'op2', Order.NONE);

  const code = `XCHG ${value_op1}, ${value_op2}
  `;
  return code;
}

javascriptGenerator.forBlock['XLATB'] = function() {

  const code = `XLATB
  `;
  return code;
}

javascriptGenerator.forBlock['LAHF'] = function() {

  const code = `LAHF
  `;
  return code;
}

javascriptGenerator.forBlock['SAHF'] = function() {

  const code = `SAHF
  `;
  return code;
}

module.exports = {movs_blocks};
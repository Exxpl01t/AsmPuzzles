const Blockly = require('blockly/core')
const {javascriptGenerator, Order} = require('blockly/javascript');

const jumps_blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{

        // CALL

  "type": "CALL",
  "tooltip": "Вызов процедуры",
  "helpUrl": "",
  "message0": "CALL %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true           
},

        // RET

{
  "type": "RET",
  "tooltip": "Возврат из процедуры",
  "helpUrl": "",
  "message0": "RET %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90
},

        // RETF

{
  "type": "RETF",
  "tooltip": "Возврат из FAR процедуры",
  "helpUrl": "",
  "message0": "RETF %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
},

        // JMP

{
  "type": "JMP",
  "tooltip": "Прыжок по метке",
  "helpUrl": "",
  "message0": "JMP %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},

{
  "type": "JA",
  "tooltip": "Близкий прыжок по метке, если первый операнд больше второго операнда, например при предыдущей инструкции CMP (или если CF = 0 И ZF = 0, что то же самое). Беззнаково.",
  "helpUrl": "",
  "message0": "JA %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},

{
  "type": "JAE",
  "tooltip": "Близкий прыжок по метке, если первый операнд больше или равен второму операнду, например при предыдущей инструкции CMP (или если CF = 0, что то же самое). Беззнаково.",
  "helpUrl": "",
  "message0": "JAE %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},

{
  "type": "JB",
  "tooltip": "Близкий прыжок по метке, если первый операнд меньше второго операнда, например при предыдущей инструкции CMP (или если CF = 1, что то же самое). Беззнаково.",
  "helpUrl": "",
  "message0": "JB %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JBE",
  "tooltip": "Близкий прыжок по метке, если первый операнд меньше или равен второму операнду, например при предыдущей инструкции CMP (или если CF = 1 И ZF = 1, что то же самое). Беззнаково.",
  "helpUrl": "",
  "message0": "JBE %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JC",
  "tooltip": "Близкий прыжок по метке, если CF = 1.",
  "helpUrl": "",
  "message0": "JC %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},

{
  "type": "JCXZ",
  "tooltip": "Близкий прыжок по метке, если регистр CX = 0.",
  "helpUrl": "",
  "message0": "JCXZ %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JE",
  "tooltip": "Близкий прыжок по метке, если первый операнд равен второму операнду, например при предыдущей инструкции CMP (или если ZF = 1, что то же самое). Знаково / Беззнаково.",
  "helpUrl": "",
  "message0": "JE %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
            
{
  "type": "JG",
  "tooltip": "Близкий прыжок по метке, если первый операнд больше второго операнда, например при предыдущей инструкции CMP (или если ZF = 0 И SF = OF, что то же самое). Знаково.",
  "helpUrl": "",
  "message0": "JG %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JGE",
  "tooltip": "Близкий прыжок по метке, если первый операнд больше или равен второму операнду, например при предыдущей инструкции CMP (или если SF = OF, что то же самое). Знаково.",
  "helpUrl": "",
  "message0": "JGE %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JL",
  "tooltip": "Близкий прыжок по метке, если первый операнд меньше второго операнда, например при предыдущей инструкции CMP (или если SF не равно OF, что то же самое). Знаково.",
  "helpUrl": "",
  "message0": "JL %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JLE",
  "tooltip": "Близкий прыжок по метке, если первый операнд меньше или равен второму операнду, например при предыдущей инструкции CMP (или если ZF = 1 И SF не равно OF, что то же самое). Знаково.",
  "helpUrl": "",
  "message0": "JLE %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JNA",
  "tooltip": "Близкий прыжок по метке, если первый операнд не больше второго операнда, например при предыдущей инструкции CMP (или если ZF = 1 И CF = 1, что то же самое). Беззнаково.",
  "helpUrl": "",
  "message0": "JNA %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JNAE",
  "tooltip": "Близкий прыжок по метке, если первый операнд не больше и не равен второму операнду, например при предыдущей инструкции CMP (или если CF = 1, что то же самое). Беззнаково.",
  "helpUrl": "",
  "message0": "JNAE %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},

{
  "type": "JNB",
  "tooltip": "Близкий прыжок по метке, если первый операнд не меньше второго операнда, например при предыдущей инструкции CMP (или если CF = 0, что то же самое). Беззнаково.",
  "helpUrl": "",
  "message0": "JNB %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JNBE",
  "tooltip": "Близкий прыжок по метке, если первый операнд не меньше и не равен второму операнду, например при предыдущей инструкции CMP (или если CF = 0 И ZF = 0, что то же самое). Беззнаково.",
  "helpUrl": "",
  "message0": "JNBE %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JNC",
  "tooltip": "Близкий прыжок по метке, если CF = 0.",
  "helpUrl": "",
  "message0": "JNC %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},

{
  "type": "JNE",
  "tooltip": "Прыжок по метке только при ZF = 0",
  "helpUrl": "",
  "message0": "JNE %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
         
{
  "type": "JNG",
  "tooltip": "Близкий прыжок по метке, если первый операнд не больше второго операнда, например при предыдущей инструкции CMP (или если ZF = 1 И SF не равен OF, что то же самое). Знаково.",
  "helpUrl": "",
  "message0": "JNG %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JNGE",
  "tooltip": "Близкий прыжок по метке, если первый операнд не больше и не равен второму операнду, например при предыдущей инструкции CMP (или если SF не равен OF, что то же самое). Знаково.",
  "helpUrl": "",
  "message0": "JNGE %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JNL",
  "tooltip": "Близкий прыжок по метке, если первый операнд не меньше второго операнда, например при предыдущей инструкции CMP (или если SF = OF, что то же самое). Знаково.",
  "helpUrl": "",
  "message0": "JNL %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JNLE",
  "tooltip": "Близкий прыжок по метке, если первый операнд не меньше и не равен второму операнду, например при предыдущей инструкции CMP (или если SF = OF И ZF = 0, что то же самое). Знаково.",
  "helpUrl": "",
  "message0": "JNLE %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JNO",
  "tooltip": "Близкий прыжок по метке, если OF = 0.",
  "helpUrl": "",
  "message0": "JNO %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JNP",
  "tooltip": "Близкий прыжок по метке, если результат предыдущей инструкции нечётный (или если PF = 0, что то же самое).",
  "helpUrl": "",
  "message0": "JNP %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JNS",
  "tooltip": "Близкий прыжок по метке, если результат предыдущей инструкции беззнаковый (положительный) (или если SF = 0, что то же самое).",
  "helpUrl": "",
  "message0": "JNS %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JNZ",
  "tooltip": "Близкий прыжок по метке, если результат предыдущей инструкции не ноль (не равны) (или если ZF = 0, что то же самое).",
  "helpUrl": "",
  "message0": "JNZ %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JO",
  "tooltip": "Близкий прыжок по метке, если OF = 1.",
  "helpUrl": "",
  "message0": "JO %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JP",
  "tooltip": "Близкий прыжок по метке, если результат предыдущей инструкции чётный (или если PF = 1, что то же самое).",
  "helpUrl": "",
  "message0": "JP %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JPE",
  "tooltip": "Близкий прыжок по метке, если результат предыдущей инструкции чётный (или если PF = 1, что то же самое).",
  "helpUrl": "",
  "message0": "JPE %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JPO",
  "tooltip": "Близкий прыжок по метке, если результат предыдущей инструкции нечётный (или если PF = 0, что то же самое).",
  "helpUrl": "",
  "message0": "JPO %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JS",
  "tooltip": "Близкий прыжок по метке, если результат предыдущей инструкции знаковый (отрицательный) (или если SF = 1, что то же самое).",
  "helpUrl": "",
  "message0": "JS %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                    
{
  "type": "JZ",
  "tooltip": "Близкий прыжок по метке, если результат предыдущей инструкции ноль (равны) (или если ZF = 1, что то же самое).",
  "helpUrl": "",
  "message0": "JZ %1",
  "args0": [
    {
      "type": "input_value",
      "name": "op1",
      "check": "LABEL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "inputsInline": true
},
                  


]);

javascriptGenerator.forBlock['CALL'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `CALL ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['RET'] = function() {
  const code = `RET
  `;
  return code;
}

javascriptGenerator.forBlock['RETF'] = function() {
  const code = `RETF
  `;
  return code;
}

javascriptGenerator.forBlock['JMP'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JMP ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JA'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JA ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JAE'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JAE ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JB'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JB ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JBE'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JBE ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JC'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JC ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JCXZ'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JCXZ ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JE'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JE ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JG'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JG ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JGE'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JGE ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JL'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JL ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JLE'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JLE ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JNA'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JNA ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JNAE'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JNAE ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JNB'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JNB ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JNBE'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JNBE ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JNC'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JNC ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JNE'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JNE ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JNG'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JNG ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JNGE'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JNGE ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JNL'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JNL ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JNLE'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JNLE ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JNO'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JNO ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JNP'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JNP ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JNS'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JNS ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JNZ'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JNZ ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JO'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JO ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JP'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JP ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JPE'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JPE ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JPO'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JPO ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JS'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JS ${value_op1}
  `;
  return code;
}

javascriptGenerator.forBlock['JZ'] = function(block, generator) {
  const value_op1 = generator.valueToCode(block, 'op1', Order.NONE);

  const code = `JZ ${value_op1}
  `;
  return code;
}

module.exports = {jumps_blocks};
// Define different toolboxes
const toolboxes = {
  sections: {
    kind: "flyoutToolbox",
    contents: [
      {
        'kind': 'block',
        'type': 'START_DATA'
      },
      {
        'kind': 'block',
        'type': 'LABEL_DATA_NORMAL'
      },
      {
        'kind': 'block',
        'type': 'LABEL_DATA_DUP'
      },
      {
        'kind': 'block',
        'type': 'START_CODE'
      },
      {
        kind: "block",
        type: "PROGRAM_START"
      },
      {
        kind: "block",
        type: "PROGRAM_END"
      },
      {
        'kind': 'block',
        'type': 'END_CODE'
      },
    ]
  },
  operands: {
    kind: "flyoutToolbox",
    contents: [
      {
        'kind': 'block',
        'type': 'LABEL'
      },
      {
        'kind': 'block',
        'type': 'NUMBER'
      },
      {
        'kind': 'block',
        'type': 'OFFSET'
      },
      {
        'kind': 'block',
        'type': 'DEREF'
      },
      {
        'kind': 'block',
        'type': 'x16_REG'
      },
      {
        'kind': 'block',
        'type': 'x8_REG'
      },
      {
        'kind': 'block',
        'type': 'SREG'
      },
    ]
  },
  mov_instructions: {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "MOV"
      },
      {
        kind: "block",
        type: "LEA"
      },
      {
        kind: "block",
        type: "LDS"
      },
      {
        kind: "block",
        type: "LES"
      },
      {
        kind: "block",
        type: "LODSB"
      },
      {
        kind: "block",
        type: "LODSW"
      },
      {
        kind: "block",
        type: "MOVSB"
      },
      {
        kind: "block",
        type: "MOVSW"
      },
      {
        kind: "block",
        type: "STOSB"
      },
      {
        kind: "block",
        type: "STOSW"
      },
      {
        kind: "block",
        type: "XCHG"
      },
      {
        kind: "block",
        type: "XLATB"
      },
      {
        kind: "block",
        type: "LAHF"
      },
      {
        kind: "block",
        type: "SAHF"
      },
    ]
  },
  logic: {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "AND"
      },
      {
        kind: "block",
        type: "NOT"
      },
      {
        kind: "block",
        type: "OR"
      },
      {
        kind: "block",
        type: "XOR"
      },
    ]
  },
  arithmetics: {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "INC"
      },
      {
        kind: "block",
        type: "DEC"
      },
      {
        kind: "block",
        type: "NEG"
      },
      {
        kind: "block",
        type: "ADD"
      },
      {
        kind: "block",
        type: "SUB"
      },
      {
        kind: "block",
        type: "MUL"
      },
      {
        kind: "block",
        type: "DIV"
      },
      {
        kind: "block",
        type: "IMUL"
      },
      {
        kind: "block",
        type: "IDIV"
      },
      {
        kind: "block",
        type: "AAA"
      },
      {
        kind: "block",
        type: "AAD"
      },
      {
        kind: "block",
        type: "AAM"
      },
      {
        kind: "block",
        type: "AAS"
      },
      {
        kind: "block",
        type: "ADC"
      },
      {
        kind: "block",
        type: "SBB"
      },
      {
        kind: "block",
        type: "DAA"
      },
      {
        kind: "block",
        type: "DAS"
      },
    ]
  },
  jumps: {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "CALL"
      },
      {
        kind: "block",
        type: "RET"
      },
      {
        kind: "block",
        type: "RETF"
      },
      {
        kind: "block",
        type: "JMP"
      },
      {
        kind: "block",
        type: "JA"
      },
      {
        kind: "block",
        type: "JAE"
      },
      {
        kind: "block",
        type: "JB"
      },
      {
        kind: "block",
        type: "JBE"
      },
      {
        kind: "block",
        type: "JC"
      },
      {
        kind: "block",
        type: "JCXZ"
      },
      {
        kind: "block",
        type: "JE"
      },
      {
        kind: "block",
        type: "JG"
      },
      {
        kind: "block",
        type: "JGE"
      },
      {
        kind: "block",
        type: "JL"
      },
      {
        kind: "block",
        type: "JLE"
      },
      {
        kind: "block",
        type: "JNA"
      },
      {
        kind: "block",
        type: "JNAE"
      },
      {
        kind: "block",
        type: "JNB"
      },
      {
        kind: "block",
        type: "JNBE"
      },
      {
        kind: "block",
        type: "JNC"
      },
      {
        kind: "block",
        type: "JNE"
      },
      {
        kind: "block",
        type: "JNG"
      },
      {
        kind: "block",
        type: "JNGE"
      },
      {
        kind: "block",
        type: "JNL"
      },
      {
        kind: "block",
        type: "JNLE"
      },
      {
        kind: "block",
        type: "JNO"
      },
      {
        kind: "block",
        type: "JNP"
      },
      {
        kind: "block",
        type: "JNS"
      },
      {
        kind: "block",
        type: "JNZ"
      },
      {
        kind: "block",
        type: "JO"
      },
      {
        kind: "block",
        type: "JP"
      },
      {
        kind: "block",
        type: "JPE"
      },
      {
        kind: "block",
        type: "JPO"
      },
      {
        kind: "block",
        type: "JS"
      },
      {
        kind: "block",
        type: "JZ"
      },
    ]
  },
  stack: {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "POP"
      },
      {
        kind: "block",
        type: "POPA"
      },
      {
        kind: "block",
        type: "POPF"
      },
      {
        kind: "block",
        type: "PUSH"
      },
      {
        kind: "block",
        type: "PUSHA"
      },
      {
        kind: "block",
        type: "PUSHF"
      },
    ]
  },
  loops: {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "LOOP"
      },
      {
        kind: "block",
        type: "LOOPE"
      },
      {
        kind: "block",
        type: "LOOPNE"
      },
      {
        kind: "block",
        type: "LOOPNZ"
      },
      {
        kind: "block", 
        type: "LOOPZ"
      },
    ]
  },
  flags: {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "CLC"
      },
      {
        kind: "block",
        type: "CLD"
      },
      {
        kind: "block",
        type: "CLI"
      },
      {
        kind: "block",
        type: "CMC"
      },
      {
        kind: "block",
        type: "STC"
      },
      {
        kind: "block",
        type: "STD"
      },
      {
        kind: "block",
        type: "STI"
      },
    ]
  },
  rep: {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "REP"
      },
      {
        kind: "block",
        type: "REPE"
      },
      {
        kind: "block",
        type: "REPNE"
      },
      {
        kind: "block",
        type: "REPNZ"
      },
      {
        kind: "block",
        type: "REPZ"
      },
    ]
  },
  shifts: {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "RCL"
      },
      {
        kind: "block",
        type: "RCR"
      },
      {
        kind: "block",
        type: "ROL"
      },
      {
        kind: "block",
        type: "ROR"
      },
      {
        kind: "block",
        type: "SAL"
      },
      {
        kind: "block",
        type: "SAR"
      },
      {
        kind: "block",
        type: "SHL"
      },
      {
        kind: "block",
        type: "SHR"
      },
    ]
  },
  misc: {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "SET_LABEL"
      },
      {
        kind: "block",
        type: "INT"
      },
      {
        kind: "block",
        type: "CMP"
      },
      {
        kind: "block",
        type: "TEST"
      },
      {
        kind: "block",
        type: "IN"
      },
      {
        kind: "block",
        type: "OUT"
      },
      {
        kind: "block",
        type: "NOP"
      },
      {
        kind: "block",
        type: "HLT"
      },
      {
        kind: "block",
        type: "CBW"
      },
      {
        kind: "block",
        type: "CWD"
      },
      {
        kind: "block",
        type: "CMPSB"
      },
      {
        kind: "block",
        type: "CMPSW"
      },
      {
        kind: "block",
        type: "INTO"
      },
      {
        kind: "block",
        type: "IRET"
      },
      {
        kind: "block",
        type: "SCASB"
      },
      {
        kind: "block",
        type: "SCASW"
      },
    ]
  },
};

module.exports = {toolboxes};
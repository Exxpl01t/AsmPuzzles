const {sect_blocks} = require('./custom-blocks/sections')
const {movs_blocks} = require('./custom-blocks/movs')
const {logic_blocks} = require('./custom-blocks/logic')
const {jumps_blocks} = require('./custom-blocks/jumps')
const {stack_blocks} = require('./custom-blocks/stack')
const {rep_blocks} = require('./custom-blocks/reps')
const {ops_blocks} = require('./custom-blocks/operands')
const {ariphm_blocks} = require('./custom-blocks/ariphmetics')
const {loops_blocks} = require('./custom-blocks/loops')
const {flags_blocks} = require('./custom-blocks/flags')
const {shifts_blocks} = require('./custom-blocks/shifts')
const {misc_blocks} = require('./custom-blocks/misc')
const {toolboxes} = require('./custom-blocks/toolboxes')

const {javascriptGenerator} = require('blockly/javascript');

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Blockly
  Blockly.common.defineBlocks(sect_blocks);
  Blockly.common.defineBlocks(ops_blocks);
  Blockly.common.defineBlocks(movs_blocks);
  Blockly.common.defineBlocks(logic_blocks);
  Blockly.common.defineBlocks(jumps_blocks);
  Blockly.common.defineBlocks(stack_blocks);
  Blockly.common.defineBlocks(rep_blocks);
  Blockly.common.defineBlocks(loops_blocks);
  Blockly.common.defineBlocks(ariphm_blocks);
  Blockly.common.defineBlocks(flags_blocks);
  Blockly.common.defineBlocks(shifts_blocks);
  Blockly.common.defineBlocks(misc_blocks);

  const workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolboxes.sections,
    trashcan: true,
    grid: {
      spacing: 20,
      length: 3,
      colour: '#ccc',
      snap: true
    },
    scrollbars: true,
    move: {
        scrollbars: true,
        drag: true,
        wheel: true
    }
  });

  // Add event listeners to toolbox buttons
  document.querySelectorAll('.toolbox-btn').forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      document.querySelectorAll('.toolbox-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Get the toolbox type from data attribute
      const toolboxType = this.getAttribute('data-toolbox');
      
      // Update the toolbox
      workspace.updateToolbox(toolboxes[toolboxType]);
    });
  });

  // Set the first button as active by default
  document.querySelector('.toolbox-btn').classList.add('active');

  let props = undefined;
  let DOS_command_interface = undefined;
  const console_open_delay = 1000; // 1 second

  function restartDosConsole() {
  if (props !== undefined)
    props.stop()
    .then(startDosConsole());
  }

  function stopDosConsole() {
    if (props !== undefined)
      props.stop()
  }

  function startDosConsole() {
    props = Dos(document.getElementById("dos"), {
      url: "./assets/bundle6.jsdos",
      autoStart: true,
      kiosk: true,
      imageRendering: "smooth",
      onEvent: function(eventName, data) {
        if (eventName === "ci-ready") {
          DOS_command_interface = data;
        }
      }
    });
  }

  startDosConsole();

  // now user may press 'Launch console' button
  // and swap 2 buffers
  function setupConsoleForRun() {
    blockly_div = document.getElementById("blockly");
    dosbox_div = document.getElementById("dosbox");

    blockly_div.style.display = "none";
    dosbox_div.style.display = "block";
    setTimeout(() => {
      writeBlocklyIntoDOSfs(DOS_command_interface);
    }, console_open_delay);
  }

  document.getElementById('runCodeButton').addEventListener('click', () => {
    if (DOS_command_interface !== undefined) {
      restartDosConsole();
      setupConsoleForRun();
      setTimeout(() => {
        typeStringInChunks("BUILD.BAT", DOS_command_interface);
      }, console_open_delay);
    }
  });

  document.getElementById('debugButton').addEventListener('click', () => {
    if (DOS_command_interface !== undefined) {
      restartDosConsole();
      setupConsoleForRun();
      setTimeout(() => {
        typeStringInChunks("DEBUG.BAT", DOS_command_interface);
      }, console_open_delay);
    }
  });
  
  document.getElementById('closeButton').addEventListener('click', () => {
    blockly_div = document.getElementById("blockly");
    dosbox_div = document.getElementById("dosbox");
  
    blockly_div.style.display = "flex";
    dosbox_div.style.display = "none";

    stopDosConsole();
  });

  function writeBlocklyIntoDOSfs(ci) {
    // get code
    javascriptGenerator.addReservedWords('code');
    const workspace = Blockly.getMainWorkspace();
    const code = javascriptGenerator.workspaceToCode(workspace);
    console.log('Generated code:\n\n' + code);
    // write code to DOS fs 
    try {
      const stream = stringToReadableStream(code);
      ci.fsWriteFile("TEST.ASM", stream)
    } catch (error) {
      console.error("Error writing file:", error);
    }
  }
})

function stringToReadableStream(str) {
  // Create a TextEncoder to convert string to Uint8Array
  const encoder = new TextEncoder();
  
  // Create a ReadableStream
  return new ReadableStream({
    start(controller) {
      // Encode and enqueue the string
      controller.enqueue(encoder.encode(str));
      // Close the stream
      controller.close();
    }
  });
}

function typeStringInChunks(text, ci, chunkSize = 5, delay = 75) {
    const chars = Array.from(text);
    
    for (let i = 0; i < chars.length; i += chunkSize) {
        const chunk = chars.slice(i, i + chunkSize);
        const keyCodes = chunk.map(c => c.charCodeAt(0));
        
        setTimeout(() => {
            ci.simulateKeyPress(...keyCodes);
        }, delay * (i / chunkSize));
    }
    setTimeout(() => {
      simulateEnterKey(ci);
    }, 200);
}

function simulateEnterKey(emulator) {
  const dosboxElement = document.getElementById("dos");
  
  // Create and dispatch keydown event for Enter
  const keyDownEvent = new KeyboardEvent('keydown', {
    key: 'Enter',
    keyCode: 13,
    which: 13,
    bubbles: true,
    cancelable: true
  });
  
  // Create and dispatch keypress event
  const keyPressEvent = new KeyboardEvent('keypress', {
    key: 'Enter',
    keyCode: 13,
    which: 13,
    bubbles: true,
    cancelable: true
  });
  
  // Create and dispatch keyup event
  const keyUpEvent = new KeyboardEvent('keyup', {
    key: 'Enter',
    keyCode: 13,
    which: 13,
    bubbles: true,
    cancelable: true
  });
  
  // Dispatch the events in sequence with small delays
  dosboxElement.dispatchEvent(keyDownEvent);
  setTimeout(() => {
    dosboxElement.dispatchEvent(keyPressEvent);
    setTimeout(() => {
      dosboxElement.dispatchEvent(keyUpEvent);
    }, 50);
  }, 50);
}

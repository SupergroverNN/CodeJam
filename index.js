let language = "RU";
let isCaps = false;
let isShift = false;
let pressed = new Set();
const langKey = ["ShiftLeft", "ControlLeft"];

const dataRuLower = [
  [
    { code: "Backquote", value: "ё" },
    { code: "Digit1", value: "1" },
    { code: "Digit2", value: "2" },
    { code: "Digit3", value: "3" },
    { code: "Digit4", value: "4" },
    { code: "Digit5", value: "5" },
    { code: "Digit6", value: "6" },
    { code: "Digit7", value: "7" },
    { code: "Digit8", value: "8" },
    { code: "Digit9", value: "9" },
    { code: "Digit0", value: "0" },
    { code: "Minus", value: "-" },
    { code: "Equal", value: "=" },
    { code: "Backspace", value: "Backspace" }
  ],
  [
    { code: "Tab", value: "Tab" },
    { code: "KeyQ", value: "й" },
    { code: "KeyW", value: "ц" },
    { code: "KeyE", value: "у" },
    { code: "KeyR", value: "к" },
    { code: "KeyT", value: "е" },
    { code: "KeyY", value: "н" },
    { code: "KeyU", value: "г" },
    { code: "KeyI", value: "ш" },
    { code: "KeyO", value: "щ" },
    { code: "KeyP", value: "з" },
    { code: "BracketLeft", value: "х" },
    { code: "BracketRight", value: "ъ" },
    { code: "Backslash", value: "\\" }
  ],
  [
    { code: "CapsLock", value: "Caps Lock" },
    { code: "KeyA", value: "ф" },
    { code: "KeyS", value: "ы" },
    { code: "KeyD", value: "в" },
    { code: "KeyF", value: "а" },
    { code: "KeyG", value: "п" },
    { code: "KeyH", value: "р" },
    { code: "KeyJ", value: "о" },
    { code: "KeyK", value: "л" },
    { code: "KeyL", value: "д" },
    { code: "Semicolon", value: "ж" },
    { code: "Quote", value: "э" },
    { code: "Enter", value: "Enter" }
  ],
  [
    { code: "ShiftLeft", value: "Shift" },
    { code: "KeyZ", value: "я" },
    { code: "KeyX", value: "ч" },
    { code: "KeyC", value: "с" },
    { code: "KeyV", value: "м" },
    { code: "KeyB", value: "и" },
    { code: "KeyN", value: "т" },
    { code: "KeyM", value: "ь" },
    { code: "Comma", value: "б" },
    { code: "Period", value: "ю" },
    { code: "Slash", value: "." },
    { code: "ArrowUp", value: "▲" },
    { code: "ShiftRight", value: "Shift" }
  ],
  [
    { code: "ControlLeft", value: "Ctrl" },
    { code: "lang", value: "RU" },
    { code: "AltLeft", value: "Alt" },
    { code: "Space", value: "Space" },
    { code: "AltRight", value: "Alt" },
    { code: "ControlRight", value: "Ctrl" },
    { code: "ArrowLeft", value: "◄" },
    { code: "ArrowDown", value: "▼" },
    { code: "ArrowRight", value: "►" }
  ]
];
const dataRuUpper = [
  [
    { code: "Backquote", value: "Ё" },
    { code: "Digit1", value: "!" },
    { code: "Digit2", value: '"' },
    { code: "Digit3", value: "№" },
    { code: "Digit4", value: ";" },
    { code: "Digit5", value: "%" },
    { code: "Digit6", value: ":" },
    { code: "Digit7", value: "?" },
    { code: "Digit8", value: "*" },
    { code: "Digit9", value: "(" },
    { code: "Digit0", value: ")" },
    { code: "Minus", value: "_" },
    { code: "Equal", value: "+" },
    { code: "Backspace", value: "Backspace" }
  ],
  [
    { code: "Tab", value: "Tab" },
    { code: "KeyQ", value: "Й" },
    { code: "KeyW", value: "Ц" },
    { code: "KeyE", value: "У" },
    { code: "KeyR", value: "К" },
    { code: "KeyT", value: "Е" },
    { code: "KeyY", value: "Н" },
    { code: "KeyU", value: "Г" },
    { code: "KeyI", value: "Ш" },
    { code: "KeyO", value: "Щ" },
    { code: "KeyP", value: "З" },
    { code: "BracketLeft", value: "Х" },
    { code: "BracketRight", value: "Ъ" },
    { code: "Backslash", value: "/" }
  ],
  [
    { code: "CapsLock", value: "Caps Lock" },
    { code: "KeyA", value: "Ф" },
    { code: "KeyS", value: "Ы" },
    { code: "KeyD", value: "В" },
    { code: "KeyF", value: "А" },
    { code: "KeyG", value: "П" },
    { code: "KeyH", value: "Р" },
    { code: "KeyJ", value: "О" },
    { code: "KeyK", value: "Л" },
    { code: "KeyL", value: "Д" },
    { code: "Semicolon", value: "Ж" },
    { code: "Quote", value: "Э" },
    { code: "Enter", value: "Enter" }
  ],
  [
    { code: "ShiftLeft", value: "Shift" },
    { code: "KeyZ", value: "Я" },
    { code: "KeyX", value: "Ч" },
    { code: "KeyC", value: "С" },
    { code: "KeyV", value: "М" },
    { code: "KeyB", value: "И" },
    { code: "KeyN", value: "Т" },
    { code: "KeyM", value: "Ь" },
    { code: "Comma", value: "Б" },
    { code: "Period", value: "Ю" },
    { code: "Slash", value: "," },
    { code: "ArrowUp", value: "▲" },
    { code: "ShiftRight", value: "Shift" }
  ],
  [
    { code: "ControlLeft", value: "Ctrl" },
    { code: "lang", value: "RU" },
    { code: "AltLeft", value: "Alt" },
    { code: "Space", value: "Space" },
    { code: "AltRight", value: "Alt" },
    { code: "ControlRight", value: "Ctrl" },
    { code: "ArrowLeft", value: "◄" },
    { code: "ArrowDown", value: "▼" },
    { code: "ArrowRight", value: "►" }
  ]
];
const dataEnLower = [
  [
    { code: "Backquote", value: "`" },
    { code: "Digit1", value: "1" },
    { code: "Digit2", value: "2" },
    { code: "Digit3", value: "3" },
    { code: "Digit4", value: "4" },
    { code: "Digit5", value: "5" },
    { code: "Digit6", value: "6" },
    { code: "Digit7", value: "7" },
    { code: "Digit8", value: "8" },
    { code: "Digit9", value: "9" },
    { code: "Digit0", value: "0" },
    { code: "Minus", value: "-" },
    { code: "Equal", value: "=" },
    { code: "Backspace", value: "Backspace" }
  ],
  [
    { code: "Tab", value: "Tab" },
    { code: "KeyQ", value: "q" },
    { code: "KeyW", value: "w" },
    { code: "KeyE", value: "e" },
    { code: "KeyR", value: "r" },
    { code: "KeyT", value: "t" },
    { code: "KeyY", value: "y" },
    { code: "KeyU", value: "u" },
    { code: "KeyI", value: "i" },
    { code: "KeyO", value: "o" },
    { code: "KeyP", value: "p" },
    { code: "BracketLeft", value: "[" },
    { code: "BracketRight", value: "]" },
    { code: "Backslash", value: "\\" }
  ],
  [
    { code: "CapsLock", value: "Caps Lock" },
    { code: "KeyA", value: "a" },
    { code: "KeyS", value: "s" },
    { code: "KeyD", value: "d" },
    { code: "KeyF", value: "f" },
    { code: "KeyG", value: "g" },
    { code: "KeyH", value: "h" },
    { code: "KeyJ", value: "j" },
    { code: "KeyK", value: "k" },
    { code: "KeyL", value: "l" },
    { code: "Semicolon", value: ";" },
    { code: "Quote", value: "'" },
    { code: "Enter", value: "Enter" }
  ],
  [
    { code: "ShiftLeft", value: "Shift" },
    { code: "KeyZ", value: "z" },
    { code: "KeyX", value: "x" },
    { code: "KeyC", value: "c" },
    { code: "KeyV", value: "v" },
    { code: "KeyB", value: "b" },
    { code: "KeyN", value: "n" },
    { code: "KeyM", value: "m" },
    { code: "Comma", value: "," },
    { code: "Period", value: "." },
    { code: "Slash", value: "/" },
    { code: "ArrowUp", value: "▲" },
    { code: "ShiftRight", value: "Shift" }
  ],
  [
    { code: "ControlLeft", value: "Ctrl" },
    { code: "lang", value: "EN" },
    { code: "AltLeft", value: "Alt" },
    { code: "Space", value: "Space" },
    { code: "AltRight", value: "Alt" },
    { code: "ControlRight", value: "Ctrl" },
    { code: "ArrowLeft", value: "◄" },
    { code: "ArrowDown", value: "▼" },
    { code: "ArrowRight", value: "►" }
  ]
];
const dataEnUpper = [
  [
    { code: "Backquote", value: "~" },
    { code: "Digit1", value: "!" },
    { code: "Digit2", value: "@" },
    { code: "Digit3", value: "#" },
    { code: "Digit4", value: "$" },
    { code: "Digit5", value: "%" },
    { code: "Digit6", value: "^" },
    { code: "Digit7", value: "&" },
    { code: "Digit8", value: "*" },
    { code: "Digit9", value: "(" },
    { code: "Digit0", value: ")" },
    { code: "Minus", value: "_" },
    { code: "Equal", value: "+" },
    { code: "Backspace", value: "Backspace" }
  ],
  [
    { code: "Tab", value: "Tab" },
    { code: "KeyQ", value: "Q" },
    { code: "KeyW", value: "W" },
    { code: "KeyE", value: "E" },
    { code: "KeyR", value: "R" },
    { code: "KeyT", value: "T" },
    { code: "KeyY", value: "Y" },
    { code: "KeyU", value: "U" },
    { code: "KeyI", value: "I" },
    { code: "KeyO", value: "O" },
    { code: "KeyP", value: "P" },
    { code: "BracketLeft", value: "{" },
    { code: "BracketRight", value: "}" },
    { code: "Backslash", value: "|" }
  ],
  [
    { code: "CapsLock", value: "Caps Lock" },
    { code: "KeyA", value: "A" },
    { code: "KeyS", value: "S" },
    { code: "KeyD", value: "D" },
    { code: "KeyF", value: "F" },
    { code: "KeyG", value: "G" },
    { code: "KeyH", value: "H" },
    { code: "KeyJ", value: "J" },
    { code: "KeyK", value: "K" },
    { code: "KeyL", value: "L" },
    { code: "Semicolon", value: ":" },
    { code: "Quote", value: '"' },
    { code: "Enter", value: "Enter" }
  ],
  [
    { code: "ShiftLeft", value: "Shift" },
    { code: "KeyZ", value: "Z" },
    { code: "KeyX", value: "X" },
    { code: "KeyC", value: "C" },
    { code: "KeyV", value: "V" },
    { code: "KeyB", value: "B" },
    { code: "KeyN", value: "N" },
    { code: "KeyM", value: "M" },

    { code: "Comma", value: "<" },
    { code: "Period", value: ">" },
    { code: "Slash", value: "?" },
    { code: "ArrowUp", value: "▲" },
    { code: "ShiftRight", value: "Shift" }
  ],
  [
    { code: "ControlLeft", value: "Ctrl" },
    { code: "lang", value: "EN" },
    { code: "AltLeft", value: "Alt" },
    { code: "Space", value: "Space" },
    { code: "AltRight", value: "Alt" },
    { code: "ControlRight", value: "Ctrl" },
    { code: "ArrowLeft", value: "◄" },
    { code: "ArrowDown", value: "▼" },
    { code: "ArrowRight", value: "►" }
  ]
];
let data = dataRuLower;
renderTextErea();
renderKeyboard(data);
document.body.onkeydown = handleDown;
document.body.onkeyup = handleUp;
document.body.onblur = handleBlur;

function renderTextErea() {
  let textarea = document.createElement("textarea");
  textarea.className = "inputarea";
  document.body.append(textarea);
}

function renderKeyboard(arr) {
  let keyboard = document.createElement("div");
  keyboard.className = "keyboard";
  document.body.append(keyboard);
  arr.forEach(row => {
    let line = document.createElement("div");
    line.className = "one_line";
    row.forEach(item => {
      let newButton = document.createElement("div");
      if (item.value.length > 1) {
        newButton.className = `one_button ${item.value
          .split(" ")
          .join("_")
          .toLowerCase()}`;
      } else {
        newButton.className = "one_button";
      }
      newButton.innerHTML = `<p>${item.value}</p>`;
      newButton.setAttribute("data-keyCode", item.code);
      newButton.onmousedown = () => handleMouseDown(item.value, item.code);
      newButton.onmouseup = () => handleMouseUp(item.code);
      line.append(newButton);
    });
    keyboard.append(line);
  });
}

function handleDown(event) {
  let button = document.querySelector(`[data-keyCode=${event.code}]`);
  pressed.add(event.code);
  if (button && !event.repeat && event.code === "CapsLock") {
    isCaps = !isCaps;
    capsing();
    let button = document.querySelector(`[data-keyCode=${event.code}]`);
    isCaps ? button.classList.add("active") : button.classList.remove("active");
  }
  if (button && event.code.includes("Shift")) {
    isShift = true;
    capsing();
    let button = document.querySelector(`[data-keyCode=${event.code}]`);
    button.classList.add("active");
  }
  if (button  && event.code !== "CapsLock") {
    button.classList.add("active");
  }
  for (let code of langKey) {
    if (!pressed.has(code)) {
      return;
    }
  }
  changeLanguage();
}

function handleUp(event) {
  let button = document.querySelector(`[data-keyCode=${event.code}]`);
  if (button && event.code !== "CapsLock") {
    button.classList.remove("active");
  }
  if (button && event.code.includes("Shift")) {
    isShift = false;
    capsing();
    button.classList.remove("active");
  }

  pressed.delete(event.code);
}

function handleBlur() {
  let buttons = document.querySelectorAll(".one_button");
  buttons.forEach(button => button.classList.remove("active"));
}
function capsing() {
  document.querySelector(".keyboard").remove();
  if(isCaps || isShift){
    data = language === "RU"
    ? dataRuUpper
    : dataEnUpper;
  } else {
    data = language === "RU"
    ? dataRuLower
    : dataEnLower;
  }
  renderKeyboard(data);
}

function changeLanguage() {
  language = language === "RU" ? "EN" : "RU";
  data = language === "RU" ? dataRuLower : dataEnLower;
  document.querySelector(".keyboard").remove();
  renderKeyboard(data);
}

function handleMouseUp(code) {
  let button = document.querySelector(`[data-keyCode=${code}]`);
  button.classList.remove('animate');
  if(code.includes('Shift')){
    isShift = false;
     capsing()
  }
}
function handleMouseDown(v, code) {
  let textarea = document.querySelector("textarea");
  let button = document.querySelector(`[data-keyCode=${code}]`);
  button.classList.add('animate');
  // setTimeout(()=> button.classList.remove('animate'), 300);
  if (v === "Backspace") {
    let val = textarea.value;
    textarea.value = val ? val.slice(0, val.length - 1) : val;
  } else {
    let value;
    switch (v) {
      case "Tab":
        value = "\t";
        break;
      case "Space":
        value = " ";
        break;
      case "RU":
      case "EN":
      case "Ctrl":
      case "Alt":
        return;
      case "Enter":
        value = "\n";
        break;
      case "Shift":
        isShift = true;
        capsing();
        return;
      case "Caps Lock": {
        isCaps = !isCaps;
        capsing();
        let capslock = document.querySelector(".caps_lock");
        isCaps ? capslock.classList.add("active") : capslock.classList.remove("active");
        return;
      }
      default:
        value = v;
    }
    textarea.value += value;
  }
}

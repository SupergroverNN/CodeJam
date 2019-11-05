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
    { code: "Backslash", value: "\\" }
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
let data = dataRuLower;

renderKeyboard(data);

function renderKeyboard(arr) {
  let keyboard = document.createElement("div");
  keyboard.className = "keyboard";
  document.body.append(keyboard);
  arr.forEach(row => {
    // добавление ряда кнопок
    let line = document.createElement("div");
    line.className = "one_line";
    // добавление кнопки
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
      newButton.onclick = () => handleClick(item.value);
      line.append(newButton);
    });
    keyboard.append(line);
  });
}
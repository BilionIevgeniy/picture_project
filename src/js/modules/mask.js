// Phone number mask template
const PHONE_MASK = "+4 (___) ___ __ __";
// Default digits to use when input is incomplete
const DEFAULT_DIGITS = "4";

const mask = (selector) => {
  const setCursorPosition = (position, element) => {
    element.focus();
    if (element.setSelectionRange) {
      element.setSelectionRange(position, position);
    } else if (element.createTextRange) {
      const range = element.createTextRange();
      range.collapse(true);
      range.moveEnd("character", position);
      range.moveStart("character", position);
      range.select();
    }
  };

  const applyMask = (event) => {
    const input = event.target;
    const digitsOnly = input.value.replace(/\D/g, "");
    let maskedValue = digitsOnly;

    // If fewer digits than default, use default
    if (digitsOnly.length <= DEFAULT_DIGITS.length) {
      maskedValue = DEFAULT_DIGITS;
    }

    // Apply the mask
    let digitIndex = 0;
    input.value = PHONE_MASK.replace(/./g, (char) => {
      if (/[_\d]/.test(char) && digitIndex < maskedValue.length) {
        return maskedValue.charAt(digitIndex++);
      } else if (digitIndex >= maskedValue.length) {
        return "";
      }
      return char;
    });

    // Handle blur event: clear if only default prefix
    if (event.type === "blur") {
      if (input.value === "+4") {
        input.value = "";
      }
    } else {
      // Set cursor to end of input
      setCursorPosition(input.value.length, input);
    }
  };

  // Select and bind event listeners to inputs
  const inputs = document.querySelectorAll(selector);
  inputs.forEach((input) => {
    input.addEventListener("input", applyMask);
    input.addEventListener("focus", applyMask);
    input.addEventListener("blur", applyMask);
  });
};

export default mask;

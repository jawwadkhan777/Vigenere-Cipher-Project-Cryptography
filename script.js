console.log("cipher");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const textarea = form.querySelector("textarea");
  const messageSpan = document.getElementById("message");
  const buttons = form.querySelectorAll("button");

  buttons[0].addEventListener("click", function (event) {
    event.preventDefault();
    const text = textarea.value;
    const key = "SECRET"; // Change this key as needed
    const encryptedText = vigenereCipher(text, key, true);
    messageSpan.textContent = encryptedText;
  });

  buttons[1].addEventListener("click", function (event) {
    event.preventDefault();
    const text = textarea.value;
    const key = "SECRET"; // Use the same key as encryption
    const decryptedText = vigenereCipher(text, key, false);
    messageSpan.textContent = decryptedText;
  });
});

function vigenereCipher(text, key, encrypt = true) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // text = text.toUpperCase();
  key = key.toUpperCase();
  let result = "";
  let keyIndex = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char == char.toLowerCase()) {
      console.log("Lower Case");
      const charIndex = alphabet.toLowerCase().indexOf(char);
      console.log(charIndex);

      if (charIndex !== -1) {
        const keyChar = key[keyIndex % key.length];
        console.log(keyChar);

        const keyCharIndex = alphabet.indexOf(keyChar);
        let newIndex;

        if (encrypt) {
          newIndex = (charIndex + keyCharIndex) % alphabet.length;
          console.log(charIndex + keyCharIndex);

          console.log(alphabet.length);

          console.log(newIndex);
        } else {
          newIndex =
            (charIndex - keyCharIndex + alphabet.length) % alphabet.length;
        }

        result += alphabet[newIndex].toLowerCase();
        keyIndex++;
      } else {
        result += char;
      }
    } else {
      const charIndex = alphabet.indexOf(char);
      if (charIndex !== -1) {
        const keyChar = key[keyIndex % key.length];
        console.log(keyChar);

        const keyCharIndex = alphabet.indexOf(keyChar);
        let newIndex;

        if (encrypt) {
          newIndex = (charIndex + keyCharIndex) % alphabet.length;
          console.log(charIndex + keyCharIndex);

          console.log(alphabet.length);

          console.log(newIndex);
        } else {
          newIndex =
            (charIndex - keyCharIndex + alphabet.length) % alphabet.length;
        }

        result += alphabet[newIndex];
        keyIndex++;
      } else {
        result += char;
      }
    }
  }
  return result;
}

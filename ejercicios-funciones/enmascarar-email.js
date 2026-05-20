function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const firstLetter = email.slice(0, 1);
  const lastLetter = email.slice(atIndex - 1, atIndex);
  const asterisksCount = atIndex - 2;
  const hiddenPart = "*".repeat(asterisksCount);
  const domain = email.slice(atIndex);
  
  return firstLetter + hiddenPart + lastLetter + domain;
}

const email = "apple.pie@example.com";
console.log(maskEmail(email));

/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateRandomDomain() {
  let pronouns = ["The", "My ", "our", "how"];
  let adjectives = ["great", "big", "crushed", "broke"];
  let nouns = ["homework", " phone", "car"];
  let ends = [".com", ".net", ".org", ".us"];
  const domainNames = [];
  for (const pronoun of pronouns) {
    for (const adjective of adjectives) {
      for (const noun of nouns) {
        for (const end of ends) {
          const domainName = `${pronoun}${adjective}${noun}${end}`;
          domainNames.push(domainName);
        }
      }
    }
  }

  return domainNames;
}
window.onload = () => {
  const button = document.querySelector("#domainbutton");
  const p = document.querySelector("#domain");
  button.onclick = () => {
    p.innerHTML = generateRandomDomain();
  };
};

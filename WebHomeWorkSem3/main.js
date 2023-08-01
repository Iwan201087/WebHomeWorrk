const myName=prompt("Введите Ваше имя: ");
function greeting(name) {
    if (name.slice(-1) == 'а' || name.slice(-1) == 'ь') {
      alert(`Добрый день, уважаемая ${name}!`);
      console.log(`Добрый день, уважаемая ${name}!`);
    } else {
      alert(`Добрый день, уважаемый ${name}!`);
      console.log(`Добрый день, уважаемый ${name}!`);
    }
  }
  greeting(myName);
  
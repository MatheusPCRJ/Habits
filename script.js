const form = document.querySelector('#forMother');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const dayExists = nlwSetup.dayExists(today)

  if(dayExists) {
    alert("Dia já incluso!")
    return
  }

  alert("Adicionado com sucesso!")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("FeitoComNLW", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("FeitoComNLW")) || {}
nlwSetup.setData(data)
nlwSetup.load(data)
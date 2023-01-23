const form = document.querySelector('#forMother');
const nlwSetup = new NLWSetup(form);

const data = {
  run: ["01-01", "01-02", "01-06"],
  water: ['01-01', '01-02', '01-03'],
  food: ['01-01', '01-02', '01-03']
}

nlwSetup.setData(data)
nlwSetup.load(data)

const mensage = Abce;
alert(mensage)
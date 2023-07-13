const tabs = document.querySelector('.tabs');
const tabList = document.querySelectorAll('.tab');
const btn = document.querySelector('.btn');
const p = document.querySelector('.paragraph-orange');
const summary = document.querySelector('.summary');
const firstPage = document.querySelector('.first-page');
const alert = document.querySelector('.alert');
let chosenNumber = "-1";

// choose number of stars
tabs.addEventListener('click', function(e) {
  e.preventDefault();

  if(e.target.className == 'tab') {

    Array.from(tabList).forEach(tab => {
      tab.style.backgroundColor = 'hsl(216, 8%, 24%)';
      tab.style.color = 'hsl(216, 12%, 54%)';
    });

    e.target.style.backgroundColor = 'hsl(25, 97%, 53%)';
    e.target.style.color = '#fff';
    chosenNumber = e.target.textContent;
  }
});

// submit
btn.addEventListener('click', function() {
  if(chosenNumber != "-1") {
    const text = `You selected ${chosenNumber} out of 5`;
    p.textContent = text;
    summary.style.display = 'block';
    firstPage.style.display = 'none';
  } else {
    alert.style.display = 'block';
    setTimeout(() => {
      alert.style.display = 'none';
    }, 3000);


  }
})

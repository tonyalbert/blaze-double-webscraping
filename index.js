const puppeteer = require('puppeteer');

async function monitorPage(url) {
  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();
  await page.goto(url);


 console.log('pagina carregada')

  

  async function ultimoNumero(){
  const myDivElements = await page.evaluate(() => {
    const myDiv = document.querySelector('.entry');
    const myClassElements = myDiv.querySelectorAll('.number');
    return Array.from(myClassElements).map(e => e.textContent);
});
console.log(myDivElements);

};

ultimoNumero()

setInterval(()=>{
  ultimoNumero();

},25000);

    
}

monitorPage('https://blaze.com/pt/games/double');

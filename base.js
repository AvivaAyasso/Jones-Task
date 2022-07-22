 let name = '#name'
let email = '#email'
let phone = '#phone'
let company = '#company'
let employees = '#employees'
let call_back_button = 'button.primary.button'
let nextpage = 'div[class="row"]'



const { expect } = require('chai')
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('http://contractorsinsurancereview.com/ExampleForm/');

  //Insert the details
  await page.type(name, 'aviva')
  await page.type(email, 'avivaaa@gmail.com')
  await page.type(phone, '0525346456')
  await page.type(company, 'Jones')
  await page.screenshot({path:'details.png'}) //Screenshot of the details that i inserted

  await page.select(employees, '51-500') // Changing the amount of employees
  await page.screenshot({path: 'amount.png'}); //Screenshot of the amount changed

  await page.click(call_back_button) //Pressing the call back button
  await page.screenshot({path: 'thankyoupage.png'}); //Screenshot of the thank you page

  const massage = await page.$eval(nextpage, el => el.innerText) //
  if(massage === "Thank You!\nYou'll hear from us soon.\nNumber: 8"){
    console.log('I reached to the thank you page');
  }


  
  await page.close();
  await browser.close();
})();

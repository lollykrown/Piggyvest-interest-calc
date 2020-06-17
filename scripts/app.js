document.querySelector('button').addEventListener("click", ()=>{
  event.preventDefault();
  const results = document.getElementById('results');
  //results.style.visibility = 'visible';

  const dailyElem = document.getElementById('daily');
  const interestElem = document.getElementById('interest');
  const totalElem = document.getElementById('total') ;
  const duration =  document.getElementById('duration').value;
  let savingsElem = document.getElementById('savings').value;
  if (savingsElem === 'NaN') {
    savingsElem = 0
  }

  let savings = parseFloat(savingsElem);
  interestRatePerDay = 0.1/365;
  console.log(interestRatePerDay)
  let dailyInterest = savings * interestRatePerDay;
  let interest = dailyInterest * duration;
  console.log(dailyInterest)
  console.log(interest)

  let total = (savings + interest).toFixed(2);
  console.log(total)

  dailyElem.innerText = `Daily Interest: ${dailyInterest.toFixed(2)}`;
  interestElem.innerText = `Interest for ${duration} days: ${interest.toFixed(2)}`;
  totalElem.innerText = `Total of savings plus interest earned: ${total}`;
})
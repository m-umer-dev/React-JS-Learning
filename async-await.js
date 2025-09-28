async function atm() {
  let card = new Promise((res, rej) => {
    res("Card is Processed");
  }, 2000);
  let pin = new Promise((res, rej) => {
    res("Pin is Checking");
  }, 5000);
  console.log("Wait Card is processing....");
  let cardres = await card;
  console.log(cardres);
  console.log("Enter Pin");
  let pinres = await pin;
  console.log(pinres);
  return [cardres, pinres];
}
atm();

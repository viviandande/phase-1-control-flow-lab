function scuberGreetingForFeet(feetTraveled) {
  if(feetTraveled <= 400){
      return "This one is on me!"
  } else if(feetTraveled >= 2000 && feetTraveled <2500){
      return "I will gladly take your thirty bucks."

  }else{
      return "No can do."
  }
}

function ternaryCheckCity(city){
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  switch(tip){
      case "generous":
      return "Thank you so much.";
      break;

      case "not as generous":
      return  "Thank you.";
      break;

      default:
      case "if anything else":
      return "Bye.";

  }
}
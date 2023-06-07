
  //დავალება 2
  // დაწერეთ for ციკლი 0 დან 100 - მდე console.log ში დაბეჭდეთ ინდექსი i
  for(let i = 0; i < 100; i++){
    console.log(i);
  }

  //შექმენით 5 ელემენტიანი  მასივი, სადაც დაამატებთ სახელებს, გამოიყენეთ pop,shift,unshift,push მეთოდები და განახორციელეთ სხვადასხვა სახელების წაშლა/დამატება. დალოგეთ თითოეული ქმედების შემდგომ  მასივის მნიშვნელობა. ისე როგორც ლექციაზე გავაკეთეთ.
    
  let Names = ["Saba", "Lizi", "Mariami", "Nika", "Gio"]
    Names.unshift("Tika"); 
    Names.push("Anano");
    Names.shift("Saba");
    Names.pop("Gio");   
    console.log(Names);

    //შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი და for ცილის გამოყენებით დათვალეთ ჯამი

    let numbers2 = [2, 5, 7, 12, 30];
    let sum = 0;
    for (let i = 0; i < numbers2.length; i++){
        sum = sum + numbers2[i];
    }
    console.log(sum);

    //დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი  არის 3ის ჯერადი , ხოლო თუ არაა მაშნ false-ს 

    const getEvenorOdd = (number) =>{
        if(number % 3 === 0){
            return true;
        }else{
            return false;
        }
    };
    console.log(getEvenorOdd(2));

    // დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს კოდი.

    const getSymbolFromeCode = (symbol) => {
        if(symbol === "USD"){
          return "$";
        } else if ( symbol === "EUR"){
          return "€";
        } else if (symbol === "GEL"){
          return "ლ";
        }
      }
      console.log(getSymbolFromeCode("USD"));




//დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება.

    let numbers = [10, 15, 20, 25, 30, 35, 40];
    let filteredNumbers = numbers.filter((number) => number % 2 === 0);
    console.log(filteredNumbers);

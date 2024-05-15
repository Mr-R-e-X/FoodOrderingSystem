let itemDiv = document.querySelector("#items");

// data fetching
async function fetchMenu() {
  try {
    let dataUrl =
      "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";
    let data = await fetch(dataUrl);
    let menu = await data.json();
    return menu;
  } catch (error) {
    console.error(error);
  }
}

// Get Menu
async function getMenu() {
  try {
    itemDiv.innerHTML = "";
    let addBtnSrc = "https://cdn-icons-png.flaticon.com/128/11528/11528933.png";
    let menuData = await fetchMenu();
    console.log(menuData);
    if (menuData !== undefined) {
      itemDiv.innerHTML = "";
      menuData.map((item) => {
        itemDiv.innerHTML += `
            <div class="relative w-72 h-72 p-2 my-2 shadow-lg rounded-lg transition duration-300 transform hover:scale-105 hover:bg-slate-700">
              <div class="h-52 flex justify-center items-center rounded-lg overflow-hidden">
                  <div class="shimmer absolute opacity-100"></div>
                  <img src="${item.imgSrc}" alt="${item.name}" name="${item.name}" title="${item.name}" class="hidden h-full w-full object-cover meal-img transition-all duration-300" onload="removeShimmer(this)" />
              </div>
              <div class="flex justify-between items-center h-16 mt-2">
                  <div class="flex flex-col justify-center items-start text-white">
                      <p class="font-normal text-sm">${item.name}</p>
                      <p class="text-base text-green-500">$ ${item.price}/-</p>
                  </div>
                  <div class="flex justify-center items-center">
                      <img src="${addBtnSrc}" class="h-10 w-10 cursor-pointer"/>
                  </div>
              </div>
            </div>
        `;
      });
      return menuData;
    }
  } catch (error) {
    console.error(error);
  }
}

//removing shimmer ui
function removeShimmer(img) {
  img.previousElementSibling.classList.add(
    "hidden",
    "transition-all",
    "duration-300"
  );
  img.classList.remove("hidden");
}

//taking order

function TakeOrder(menu) {
  try {
    let takenOrder = new Promise((resolve, reject) => {
      setTimeout(() => {
        let orderedMeal = [];
        for (let i = 0; i < 3; i++) {
          let randomIndex = Math.floor(Math.random() * menu.length);
          orderedMeal.push(menu[randomIndex]);
        }
        resolve({ orders: orderedMeal });
      }, 2500);
    });
    return takenOrder;
  } catch (error) {
    console.error(error);
  }
}

// Order Prep function

function OrderPrep() {
  try {
    let orderPreparation = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
    return orderPreparation;
  } catch (error) {
    console.error(error);
  }
}

// Pay order function

function PayOrder() {
  try {
    let payment = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
    return payment;
  } catch (error) {
    console.error(error);
  }
}

// thnq fucnction

function ThankYou() {
  alert("Thankyou for eating with us today!");
}

// Handle order process function

async function HandleOrderProcess() {
  try {
    const menu = await getMenu();
    const order = await TakeOrder(menu);
    console.log(`Order: ${JSON.stringify(order)}`);
    const prepration = await OrderPrep();
    console.log(`Order Preparation Status: ${JSON.stringify(prepration)}`);
    const payment = await PayOrder();
    console.log(`Payment Status: ${JSON.stringify(payment)}`);
    if (Promise.all([order, prepration, payment])) {
      ThankYou();
    }
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", HandleOrderProcess);

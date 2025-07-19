let products = [
  {
    id: 1,
    name: "Chiken Biryani",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.SrMYxLRZSN9CWVIgRBfitAHaHa?r=0&w=720&h=720&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: "₹ 450.00",
    type: "Non-Veg",
    desc: "🍗 Chicken Biryani – Succulent chicken simmered in aromatic spices and layered with basmati.",
    quantity: 1,
  },
  {
    id: 2,
    name: "Mutton Biryani",
    image: "https://cdn.wallpapersafari.com/20/62/Ae0M1H.jpg",
    price: "₹ 1200.00",
    type: "Non-Veg",
    desc: "🔥 Mutton Biryani – Where tender meat meets bold spices in a royal rice symphony!",
    quantity: 1,
  },
  {
    id: 3,
    name: "Sharwama",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.nLHgSP6aJXpMHqzxY91KlQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: "₹ 300.00",
    type: "Non-Veg",
    desc: "🌯 Shawarma – Layers of juicy perfection wrapped in spice, grilled to golden glory!",
    quantity: 1,
  },
  {
    id: 4,
    name: "Paneer Biryani",
    image:
      "https://i.pinimg.com/originals/e0/8d/47/e08d4724b1b6a4499ce2fbe74d761a44.jpg",
    price: "₹ 600.00",
    type: "Veg",
    desc: "🧀 Paneer Biryani – Soft paneer cubes tucked in fragrant basmati, dancing with spices in every bite!",
    quantity: 1,
  },
  {
    id: 5,
    name: "Spring Rolls",
    image: "https://wallpaperaccess.com/full/6905828.jpg",
    price: "₹ 259.00",
    type: "Veg",
    desc: "🥢Spring Rolls – Crispy on the outside, bursting with flavor inside—your crunch craving, answered!",
    quantity: 1,
  },
  {
    id: 6,
    name: "Sunaday",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.MTy7rWtkg-Xb_E8kvOodVAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: "₹ 200.00",
    type: "Dairy",
    desc: "🍨 Sunday Ice Cream – Scoop into Sunday sweetness with swirls of chill and cheer!",
    quantity: 1,
  },
  {
    id: 7,
    name: "Chicken 65",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style.jpg",
    price: "₹ 320.00",
    type: "Non-Veg",
    desc: "🔥 Chicken 65 – Fiery, crispy bites of deep-fried chicken goodness!",
    quantity: 1,
  },
  {
    id: 8,
    name: "Paneer Butter Masala",
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2019/05/Paneer-Butter-Masala.jpg",
    price: "₹ 260.00",
    type: "Veg",
    desc: "🧈 Paneer Butter Masala – Creamy, buttery, and utterly delicious!",
    quantity: 1,
  },
  {
    id: 9,
    name: "Hyderabadi Chicken Biryani",
    image:
      "https://vismaifood.com/storage/app/uploads/public/980/eb9/ed6/thumb__700_0_0_0_auto.jpg",
    price: "₹ 360.00",
    type: "Non-Veg",
    desc: "🍗 Hyderabadi Chicken Biryani – Aromatic layers of spiced rice and chicken!",
    quantity: 1,
  },
  {
    id: 10,
    name: "Masala Dosa",
    image:
      "https://culinarydelightsandbeyond.com/wp-content/uploads/2023/03/dosa-5oF7d_hPJG4-scaled.jpg",
    price: "₹ 120.00",
    type: "Veg",
    desc: "🥞 Masala Dosa – Crispy dosa with flavorful potato filling!",
    quantity: 1,
  },
  {
    id: 11,
    name: "Butter Chicken",
    image:
      "https://www.mysavoryadventures.com/wp-content/uploads/2023/04/restaurant-style-butter-chicken.jpg",
    price: "₹ 300.00",
    type: "Non-Veg",
    desc: "🧈 Butter Chicken – Rich, creamy, and spiced just right!",
    quantity: 1,
  },
  {
    id: 12,
    name: "Veg Pulao",
    image:
      "https://www.funfoodfrolic.com/wp-content/uploads/2022/05/Veg-Pulao-Blog.jpg",
    price: "₹ 180.00",
    type: "Veg",
    desc: "🌿 Veg Pulao – A colorful medley of vegetables and fragrant basmati!",
    quantity: 1,
  },
  {
    id: 13,
    name: "Tandoori Chicken",
    image:
      "https://www.easycookingwithmolly.com/wp-content/uploads/2023/11/air-fryer-whole-tandoori-chicken-3-480x480.jpg",
    price: "₹ 340.00",
    type: "Non-Veg",
    desc: "🔥 Tandoori Chicken – Smoky, spicy, and perfectly charred!",
    quantity: 1,
  },
  {
    id: 14,
    name: "Palak Paneer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_I8R5TXGoabQURaYGUMiLe7d1GIcdpLdTLQ&s",
    price: "₹ 240.00",
    type: "Veg",
    desc: "🌿 Palak Paneer – Nutritious spinach gravy with soft paneer cubes!",
    quantity: 1,
  },
  {
    id: 15,
    name: "Fish Curry",
    image:
      "https://vismaifood.com/storage/app/uploads/public/daa/96d/7bc/thumb__1200_0_0_0_auto.jpg",
    price: "₹ 380.00",
    type: "Non-Veg",
    desc: "🐟 Fish Curry – Coastal flavors in every spicy, tangy bite!",
    quantity: 1,
  },
  {
    id: 16,
    name: "Chole Bhature",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Chole_Bhature_from_Nagpur.JPG",
    price: "₹ 150.00",
    type: "Veg",
    desc: "😋 Chole Bhature – Puffy bhature with spicy chickpea curry!",
    quantity: 1,
  },
];

function renderProducts(data) {
  data.map((item) => {
    document.querySelector(".products").innerHTML += `
 
  <div class="items">
    <div class="imgContainer">
      <img src="${item.image}" alt="${item.name}" />
      <p class="name">${item.name}</p>
    </div>
    <div class="descriptionContainer">
      <p class="price">Price: ${item.price}</p>
      <p class="description">${item.desc}</p>
    </div>
    <div class="btnContainer">
      <button class="btn" onclick="addTocart(event, ${item.id})">Add +</button>
      <p class="type">${item.type}</p>
    </div>
  </div>
`;
  });
}

renderProducts(products);
let priceDetails = document.getElementById("amountDetails");
let btns = document.querySelectorAll(".btn");
let addedProducts = [];
function addTocart(event, id) {
  let ele = event.target;
  ele.innerText = "Added";
  ele.style.color = "green";
  ele.style.backgroundColor = "white";
  let product = filterItem(id);
  addedProducts.push(product);
  renderAddedItems(addedProducts);
  priceDetails.style.display = "block";
  ele.disabled = true;
}

function filterItem(id) {
  let item = products.find((item) => item.id == id);
  return item;
}

let types = document.querySelectorAll(".type");
for (const type of types) {
  if (type.innerText == "Non-Veg") {
    type.style.color = "red";
  } else if (type.innerText == "Veg") {
    type.style.color = "green";
  } else {
    type.style.color = "brown";
  }
}

let orderInfo = document.querySelector(".orderInfo");
function renderAddedItems(items) {
  orderInfo.innerHTML = "";
  getPrice(items);
  items.map((item) => {
    orderInfo.innerHTML += `
    <div class="addedOrder">
      <div class="addedOrderDescription">
         <h3>${item.name}</h3>
         <span class="quantity">Qty: ${item.quantity}</span>
      </div>

      <p class="amount">Amount: <span>${item.price}</span></p>
      
      <div class="addedOrderButtons">
        <button onclick="removeQuantity(${item.id})" class="decrease">-</button>
        <button onclick="removeItem(${item.id})" class="btnRemove">Remove</button>
        <button onclick="addQuantity(${item.id})" class="add">+</button>
      </div>
    </div>
    `;
  });
}

function removeItem(id) {
  let removeEle = btns[id - 1];
  let idx = addedProducts.findIndex((item) => item.id == id);
  addedProducts.splice(idx, 1);
  removeEle.innerText = "Add +";
  removeEle.style.color = "white";
  removeEle.style.backgroundColor = "#4db8ff";
  removeEle.disabled = false;
  if (addedProducts.length == 0) {
    priceDetails.style.display = "none";
    orderInfo.innerHTML = `
      <p style="font-size:20px; color:red; font-weight:bold">No items added</p>
    `;
  } else {
    renderAddedItems(addedProducts);
  }
}

function getPrice(items) {
  let amount = 0;
  let price = document.getElementById("price");
  let sum = items.map((item) => item.price.slice(1) * item.quantity);
  for (const price of sum) {
    amount += parseInt(price);
  }
  price.innerText = `₹ ${amount}.00`;
}

function addQuantity(id) {
  let item = filterItem(id);
  let count = ++item.quantity;
  let newObj = { ...item, quantity: count };
  let idx = addedProducts.findIndex((item) => item.id == id);
  addedProducts.splice(idx, 1, newObj);
  getPrice(addedProducts);
  renderAddedItems(addedProducts);
}

function removeQuantity(id) {
  let add = document.querySelector(".decrease");
  let item = filterItem(id);
  let count = --item.quantity;

  if (count < 1) {
    add.disabled = true;
  } else {
    let newObj = { ...item, quantity: count };
    let idx = addedProducts.findIndex((item) => item.id == id);
    addedProducts.splice(idx, 1, newObj);
    renderAddedItems(addedProducts);
  }
}

let showOrders = {};
let tokenNum = 1;
function showOrderLogs() {
  const date = new Date();
  let day = date.getDate();
  let validDay = day <= 9 ? `0${day}` : day;
  let month = date.getMonth();
  let validMonth = month <= 9 ? `0${month}` : month;
  let year = date.getFullYear();
  let hours = date.getHours();
  let validHours = hours <= 9 ? `0${hours}` : hours;
  let minute = date.getMinutes();
  let validMinute = minute <= 9 ? `0${minute}` : minute;
  let second = date.getSeconds();
  let validSecond = second <= 9 ? `0${second}` : second;
  orderInfo.innerHTML = "";
  document.getElementById("amountDetails").style.display = "none";
  showOrders[`token${addedProducts.length}`] = addedProducts;

  btns.forEach((item) => {
    item.disabled = false;
    item.innerText = "Add +";
    item.style.backgroundColor = "#4db8ff";
    item.style.color = "white";
  });

  showOrderLogsAfter(
    validDay,
    validMonth,
    year,
    validHours,
    validMinute,
    validSecond
  );
}

function showOrderLogsAfter(day, month, year, hours, minute, second) {
  for (const token in showOrders) {
    document.getElementById("orderLogs").innerHTML += `
  <div class="orders">
  <div class="order-header">
    <h3>
      🏷️ Token Number: <span class="token-id">#${tokenNum}</span>
    </h3>
    <div class="order-meta">
      📅 <strong>Date:</strong> ${day}/${month}/${year}<br />
      ⏰ <strong>Time:</strong> ${hours}:${minute}:${second}
    </div>
  </div>

  <table class="order-table">
    <tbody class="tbody${tokenNum}"></tbody>
  </table>

  <h3 class="total-bill">Total Bill: ₹${getTotal(showOrders[token])}.00</h3>
</div>
`;
    let tbody = document.querySelector(`.tbody${tokenNum}`);
    tbody.innerHTML = "";
    let count = 1;
    showOrders[token].map((item) => {
      tbody.innerHTML += `
      <tr>
          <th>${count++}</th>
          <th>${item.name}</th>
          <th>Quantity: ${item.quantity}</th>
          <th>Price: ₹ ${item.price.slice(1) * item.quantity}.00</th>
        </tr>
    `;
    });
    tokenNum++;
  }
  addedProducts.length = 0;
  products.map((item) => {
    if (item.quantity > 1) {
      item.quantity = 1;
    }
  });
}

function getTotal(items) {
  let amount = 0;
  let sum = items.map((item) => item.price.slice(1) * item.quantity);
  for (const price of sum) {
    amount += parseInt(price);
  }
  return amount;
}

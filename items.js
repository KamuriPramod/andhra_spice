// ============================================================
// items.js
// Andhra Spice & Family Restaurant
// Menu + food photos + cart + menu rendering
// ============================================================


// ============================================================
// RESTAURANT / FOOD PHOTOS
// ============================================================

// Photos associated with the Andhra Spice restaurant listing.
// Replace these later with restaurant-owned photos if available.
const restaurantPhotos = {
  biryani1:
    "https://lh3.googleusercontent.com/vw4NPM2cx69KWTh8o5pWaureN8ZGbYDKLlXy-Xwo5b5Q2c0ePzE5fy9EkOlwUo-P6ilrsowzUPMgMILgJPTDFlH6dV26KUot7aGur92B%3Dw1200-rw",

  biryani2:
    "https://img.magicpin.com/8236125_store_images_1.webp",

  menu:
    "https://lh3.googleusercontent.com/nivtWk-9M0C_PbLdMLGKOvb6AlwQMRZswNVU0gsnaKjexN1rDjcDlvz3sayTyLcykj9yK0o8IqdjM5PZUJWT16WkYnFnrLww3Lcb5pgW%3Dw1200-rw",

  biryani3:
    "https://lh3.googleusercontent.com/FBhctHhDpbW-A9TTmpqk8GAs0io9aAyY6xOe9o6qhA0_bbvyZPuhvbt4jUnsgCTgKWWavFJMoXr5YdMqUzB02t-27yLQX-9-LUBvEGHPVg%3Dw1200-rw",

  preparation:
    "https://lh3.googleusercontent.com/-60IQvQfkYfLtEHxVif5siwlqhbbu0fF74M8AM04ne12WdRA3fw9xjy4zEwN7S2tFrodzh4Zr_i35eUeDAsB8ZwUS5QykEuz2Q1sm6T2ZtQ%3Dw1200-rw",

  fried:
    "https://lh3.googleusercontent.com/kwfDJU8qqh3m35J7CflRr4QnTamLxLN52hFsKsTs97m48h-i_zVk7310vaZAwpR0-at5YbRQnMRfY5Ktic8OvAge-15gAvpyNlfeA7B9%3Dw1200-rw"
};


// ============================================================
// RELATED FOOD PHOTO FALLBACKS
// ============================================================

const fallbacks = {

  chickenBiryani:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hyderabadi%20Chicken%20Biryani.jpg",

  chickenBiryani2:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Food-Chicken-Biryani.jpg",

  muttonBiryani:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mutton%20biryani.jpg",

  vegBiryani:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable%20Biryani.JPG",

  mushroomBiryani:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/MushroomBiryani.jpg",

  fishBiryani:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fish%20Biryani.JPG",

  kajuBiryani:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Veg%20Kaju%20Biryani.jpg",

  friedRice:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/FriedRice.JPG",

  vegFriedRice:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable%20fried%20rice.jpg",

  chicken65:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_65.jpg",

  chickenTikka:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/ChickenTikka.jpg",

  tandooriChicken:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tandoori%20Chicken.jpg",

  paneerTikka:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer%20tikka.jpg",

  paneer:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer%20butter%20masala.jpg",

  mushroom:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mushroom%20Curry.jpg",

  gobi:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Gobi%20curry.jpg",

  dal:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dal%20Tadka.jpg",

  prawn:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Prawn%20fry.jpg",

  fish:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/FISH%20CURRY.jpg",

  naan:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Naan.jpg",

  naan2:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Naan_.jpg",

  gulab:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Gulab%20Jamun.jpg",

  kaju:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kaju.jpg",

  food:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chickenbiryani.JPG"
};


// ============================================================
// PHOTO HELPER
// ============================================================

function pickPhoto(pool, name) {

  const hash = [...name].reduce(
    (sum, ch) => sum + ch.charCodeAt(0),
    0
  );

  return pool[hash % pool.length];

}


// ============================================================
// FIND RELATED PHOTO FOR EACH FOOD ITEM
// ============================================================

function getDishPhoto(name) {

  const n = name.toLowerCase();


  // Chicken biryani
  if (
    /gongura chicken biryani|
     ulavacharu chicken biryani|
     chicken dum biryani|
     special chicken biryani|
     chicken biryani fry|
     chicken biryani|
     chicken leg piece biryani|
     chicken family pack|
     chicken.*couple pack|
     chicken.*jambo/
      .test(n)
  ) {

    return {
      src: pickPhoto(
        [
          restaurantPhotos.biryani1,
          restaurantPhotos.biryani3,
          fallbacks.chickenBiryani,
          fallbacks.chickenBiryani2
        ],
        name
      ),
      label: "Restaurant / related biryani photo"
    };

  }


  // Mutton biryani
  if (
    /gongura mutton biryani|
     ulavacharu mutton biryani|
     mutton nalli|
     mutton dum biryani|
     keema biryani|
     special mutton biryani|
     mutton biryani|
     mutton family pack|
     mutton.*couple pack/
      .test(n)
  ) {

    return {
      src: pickPhoto(
        [
          restaurantPhotos.biryani2,
          fallbacks.muttonBiryani,
          restaurantPhotos.biryani3
        ],
        name
      ),
      label: "Restaurant / related mutton biryani photo"
    };

  }


  // Mushroom biryani
  if (/mushroom biryani/.test(n)) {

    return {
      src: pickPhoto(
        [
          fallbacks.mushroomBiryani,
          fallbacks.vegBiryani
        ],
        name
      ),
      label: "Related mushroom biryani photo"
    };

  }


  // Fish biryani
  if (/fish biryani/.test(n)) {

    return {
      src: pickPhoto(
        [
          fallbacks.fishBiryani,
          restaurantPhotos.biryani3
        ],
        name
      ),
      label: "Related fish biryani photo"
    };

  }


  // Prawn biryani
  if (/prawns biryani/.test(n)) {

    return {
      src: pickPhoto(
        [
          fallbacks.prawn,
          restaurantPhotos.biryani2
        ],
        name
      ),
      label: "Related prawn photo"
    };

  }


  // Veg biryani
  if (/veg biryani/.test(n)) {

    return {
      src: pickPhoto(
        [
          fallbacks.vegBiryani,
          restaurantPhotos.preparation
        ],
        name
      ),
      label: "Related veg biryani photo"
    };

  }


  // Kaju biryani
  if (/kaju.*biryani|biryani.*kaju/.test(n)) {

    return {
      src: pickPhoto(
        [
          fallbacks.kajuBiryani,
          fallbacks.vegBiryani
        ],
        name
      ),
      label: "Related kaju biryani photo"
    };

  }


  // Kunda / Bongu / Bucket
  if (/kunda|bongu|bucket biryani/.test(n)) {

    return {
      src: pickPhoto(
        [
          restaurantPhotos.biryani1,
          restaurantPhotos.biryani2,
          restaurantPhotos.preparation
        ],
        name
      ),
      label: "Restaurant listing biryani photo"
    };

  }


  // Fried rice
  if (/fried rice/.test(n)) {

    return {
      src: pickPhoto(
        [
          fallbacks.friedRice,
          fallbacks.vegFriedRice,
          restaurantPhotos.fried
        ],
        name
      ),
      label: "Related fried rice photo"
    };

  }


  // Chicken 65
  if (/chicken 65/.test(n)) {

    return {
      src: fallbacks.chicken65,
      label: "Related Chicken 65 photo"
    };

  }


  // Chicken tikka
  if (
    /chicken tikka|
     malai tikka|
     zafrani tikka|
     achari tikka/
      .test(n)
  ) {

    return {
      src: pickPhoto(
        [
          fallbacks.chickenTikka,
          restaurantPhotos.fried
        ],
        name
      ),
      label: "Related tikka photo"
    };

  }


  // Tandoori / kabab
  if (
    /tangadi|
     tandoori chicken|
     kabab|
     kebab|
     hariyali/
      .test(n)
  ) {

    return {
      src: pickPhoto(
        [
          fallbacks.tandooriChicken,
          restaurantPhotos.fried,
          fallbacks.chickenTikka
        ],
        name
      ),
      label: "Restaurant / related tandoori starter photo"
    };

  }


  // Paneer starters
  if (
    /paneer tikka|
     paneer garlic|
     harayali paneer|
     paneer chatpat/
      .test(n)
  ) {

    return {
      src: pickPhoto(
        [
          fallbacks.paneerTikka,
          fallbacks.paneer
        ],
        name
      ),
      label: "Related paneer starter photo"
    };

  }


  // Prawns
  if (/prawn|prawns/.test(n)) {

    return {
      src: pickPhoto(
        [
          fallbacks.prawn,
          restaurantPhotos.fried
        ],
        name
      ),
      label: "Related prawn photo"
    };

  }


  // Fish
  if (/fish/.test(n)) {

    return {
      src: pickPhoto(
        [
          fallbacks.fish,
          restaurantPhotos.biryani3
        ],
        name
      ),
      label: "Related fish photo"
    };

  }


  // Mushroom
  if (/mushroom/.test(n)) {

    return {
      src: fallbacks.mushroom,
      label: "Related mushroom curry photo"
    };

  }


  // Gobi
  if (/gobi/.test(n)) {

    return {
      src: fallbacks.gobi,
      label: "Related gobi curry photo"
    };

  }


  // Dal
  if (/dal/.test(n)) {

    return {
      src: fallbacks.dal,
      label: "Related dal photo"
    };

  }


  // Paneer curry
  if (/paneer/.test(n)) {

    return {
      src: pickPhoto(
        [
          fallbacks.paneer,
          fallbacks.paneerTikka
        ],
        name
      ),
      label: "Related paneer photo"
    };

  }


  // Roti / Naan / Kulcha
  if (/roti|naan|kulcha/.test(n)) {

    return {
      src: pickPhoto(
        [
          fallbacks.naan,
          fallbacks.naan2
        ],
        name
      ),
      label: "Related Indian bread photo"
    };

  }


  // Kaju
  if (/kaju/.test(n)) {

    return {
      src: fallbacks.kaju,
      label: "Related cashew photo"
    };

  }


  // Desserts
  if (/gulab|sweet|dessert/.test(n)) {

    return {
      src: fallbacks.gulab,
      label: "Related dessert photo"
    };

  }


  // Other curries
  if (
    /curry|
     masala|
     kofta|
     palak|
     methi|
     aloo|
     tomato|
     capsicum|
     kolapuri|
     kurma|
     patiala|
     mixed veg|
     baby corn/
      .test(n)
  ) {

    return {
      src: pickPhoto(
        [
          fallbacks.paneer,
          fallbacks.mushroom,
          fallbacks.gobi,
          fallbacks.dal
        ],
        name
      ),
      label: "Related curry photo"
    };

  }


  // Curd rice
  if (/curd rice/.test(n)) {

    return {
      src: restaurantPhotos.biryani1,
      label: "Restaurant listing food photo"
    };

  }


  // General fallback
  return {
    src: pickPhoto(
      [
        restaurantPhotos.biryani1,
        fallbacks.chickenBiryani2,
        restaurantPhotos.fried
      ],
      name
    ),
    label: "Related food photo"
  };

}


// ============================================================
// MENU
// ============================================================

const MENU = {

  "Fried Rice": {

    items: [

      ["Curd Rice", 80],

      ["Spl. Curd Rice", 100],

      ["Veg Fried Rice", 220],

      ["Gobi Fried Rice", 250],

      ["Mushroom Fried Rice", 260],

      ["Paneer Fried Rice", 260],

      ["Paneer Mushroom Fried Rice", 280],

      ["Capsicum Fried Rice", 200],

      ["Kaju Fried Rice", 300],

      ["Kaju Paneer Fried Rice", 320],

      ["Jeera Fried Rice", 220],

      ["Veg Mixed Fried Rice", 300],

      ["Egg Fried Rice", 230],

      ["Spl. Egg Fried Rice", 260],

      ["Chicken Fried Rice", 290],

      ["Special Chicken Fried Rice", 320],

      ["Non-Veg Mixed Fried Rice", 400],

      ["Mutton Fried Rice", 370],

      ["Spl. Mutton Fried Rice", 400],

      ["Fish Fried Rice", 320],

      ["Prawns Fried Rice", 370]

    ]

  },


  "Special Biryani & Dry": {

    note:
      "Served Afternoon 12:00–3:00 PM · Evening 6:30–10:00 PM",

    items: [

      ["Gongura Chicken Biryani", 290],

      ["Gongura Mutton Biryani", 390],

      ["Ulavacharu Chicken Biryani", 310],

      ["Ulavacharu Mutton Biryani", 410],

      ["Mutton Nalli Ghost Biryani", 390]

    ]

  },


  "Biryani (Basmathi / Local Rice)": {

    note:
      "Served 11:30 AM–10:30 PM · Choice of Basmathi or Chitty Muthyalu rice, same price",

    items: [

      ["Biryani Rice", 160],

      ["Veg Biryani", 210],

      ["Paneer Biryani", 250],

      ["Kaju Biryani", 310],

      ["Mushroom Biryani", 250],

      ["Kaju & Paneer Biryani", 290],

      ["Egg Biryani", 220],

      ["Chicken Dum Biryani", 270],

      ["Chicken Leg Piece Biryani", 280],

      ["Special Chicken Biryani", 310],

      ["Chicken Lollipop Biryani", 310],

      ["Mutton Dum Biryani", 390],

      ["Keema Biryani", 350],

      ["Special Mutton Biryani", 420],

      ["Fish Biryani", 360],

      ["Prawns Biryani", 410],

      ["Natukodi Biryani", 390],

      ["Chicken Biryani Fry Pcs", 260],

      ["Mutton Biryani Fry Pcs", 380],

      ["Chicken Family Pack", 610],

      ["Chicken Leg Piece Family Pack", 630],

      ["Special Chicken Family Pack", 660],

      ["Mutton Family Pack", 760],

      ["Special Mutton Family Pack", 810],

      ["Chicken Biryani Couple Pack", 380, "Takeaway only"],

      ["Spl. Chicken Biryani Couple Pack", 410, "Takeaway only"],

      ["Mutton Biryani Couple Pack", 470, "Takeaway only"],

      ["Mini Jambo Pack Biryani", 440],

      ["Jambo Pack Biryani", 810]

    ]

  },


  "Kunda & Bongu Biryani": {

    items: [

      ["Veg Kunda Biryani", "460 / 480 (P)"],

      ["Veg Kunda Family Pack", "590 / 620 (P)"],

      ["Chicken Kunda Biryani", "580 / 600 (P)"],

      ["Chicken Kunda Family Pack", "810 / 830 (P)"],

      ["Mutton Kunda Biryani", "690 / 710 (P)"],

      ["Mutton Kunda Family Pack", "960 / 980 (P)"],

      ["Chicken Bongu Biryani", "640 / 660 (P)"],

      ["Spl Chicken Bongu Biryani", "660 / 680 (P)"],

      ["Mutton Bongu Biryani", "760 / 780 (P)"],

      ["Spl Mutton Bongu Biryani", "800 / 820 (P)"]

    ]

  },


  "Bucket Biryani": {

    items: [

      ["Bucket Chicken Biryani", 1080],

      ["Bucket Spl. Chicken Biryani", 1170],

      ["Bucket Mutton Biryani", 1340],

      ["Bucket Fish Biryani", 1180],

      ["Bucket Prawns Biryani", 1280],

      ["Mini Bucket Chicken Biryani", 910],

      ["Mini Bucket Spl. Chicken Biryani", 950],

      ["Mini Bucket Mutton Biryani", 1170],

      ["Mini Bucket Fish Biryani", 980],

      ["Mini Bucket Prawns Biryani", 1100]

    ]

  },


  "Starters & Dry Items": {

    groups: [

      {

        title: "Tandoori Non-Veg Starters",

        items: [

          ["Tangadi Kabab (1 pc.)", 90],

          ["Tangadi Kabab (4 pcs.)", 340],

          ["Tandoori Chicken Half", 280],

          ["Tandoori Chicken Full", 510],

          ["Chicken Tikka (8 pcs.)", 330],

          ["Malai Tikka (8 pcs.)", 340],

          ["Zafrani Tikka (8 pcs.)", 340],

          ["Achari Tikka (8 pcs.)", 340],

          ["Hariyali Kabab (8 pcs.)", 340]

        ]

      },


      {

        title: "Tandoori Veg Starters",

        items: [

          ["Paneer Tikka (8 pcs.)", 250],

          ["Paneer Garlic Kabab (8 pcs.)", 250],

          ["Harayali Paneer (8 pcs.)", 250],

          ["Paneer Chatpat Kabab (8 pcs.)", 250]

        ]

      },


      {

        title: "Prawns Dry Items",

        items: [

          ["Prawns 65 (Dry)", 390],

          ["Pepper Prawns", 390],

          ["Loose Prawns (Dry)", 390],

          ["Ginger Prawns (Dry)", 390],

          ["Golden Fried Prawns (Dry)", 390],

          ["Prawns Roast (Dry)", 390]

        ]

      }

    ]

  },


  "Veg Curries & Rotis": {

    groups: [

      {

        title: "Veg Curries",

        items: [

          ["Tomato Curry", 170],

          ["Dal Fry", 180],

          ["Dal Tadka", 200],

          ["Capsicum Curry", 200],

          ["Veg. Kolapuri", 220],

          ["Aloo Mutter", 220],

          ["Aloo Gobi", 220],

          ["Gobi Mutter", 220],

          ["Veg Kayamath", 240],

          ["Methi Chaman", 240],

          ["Paneer Sai Kurma", 240],

          ["Veg. Kofta", 240],

          ["Malai Kofta", 240],

          ["Baby Corn Masala", 240],

          ["Mix Veg Curry", 240],

          ["Veg. Patiyala", 240],

          ["Kadai Veg", 240],

          ["Aloo Palak", 240],

          ["Plain Palak", 240],

          ["Palak Paneer", 260],

          ["Kadai Paneer", 240],

          ["Mushroom Masala", 250],

          ["Mushroom Curry / Fry", 250],

          ["Paneer Butter Masala", 250],

          ["Paneer Mutter", 250],

          ["Paneer Mushroom Curry", 260],

          ["Kaju Paneer Curry", 290],

          ["Kaju Curry", 320]

        ]

      },


      {

        title: "Rotis & Naan",

        items: [

          ["Tandoori Roti", 25],

          ["Butter Roti", 30],

          ["Plain Naan", 35],

          ["Butter Naan", 40],

          ["Plain Kulcha", 40],

          ["Butter Kulcha", 45],

          ["Masala Kulcha", 50],

          ["Stuffed Kulcha", 55]

        ]

      }

    ]

  },


  "Drinks": {

    items: [

      ["Water Bottle", 20],

      ["Cool Drinks", 20],

      ["Goli Soda", 30]

    ]

  }

};


// ============================================================
// VEG / NON-VEG / EGG CLASSIFICATION
// ============================================================

function classify(name) {

  const n =
    name.toLowerCase();


  if (
    /chicken|
     mutton|
     fish|
     prawn|
     natukodi|
     keema|
     kabab|
     kebab|
     tikka|
     ghost|
     gosht/
      .test(n)
  ) {

    return "nonveg";

  }


  if (/egg/.test(n)) {

    return "egg";

  }


  return "veg";

}


// ============================================================
// CART
// ============================================================

let itemIndex = 0;

const itemsByIndex = {};

const cart = {};


// ============================================================
// FOOD CARD
// ============================================================

function dishCard([name, price, sub]) {

  const cls =
    classify(name);


  const priceHtml =
    typeof price === "number"
      ? "₹" + price
      : price;


  const idx =
    itemIndex++;


  itemsByIndex[idx] = {

    name,

    price

  };


  const photo =
    getDishPhoto(name);


  const controlHtml =
    typeof price === "number"

      ? `

        <div
          class="control"
          id="ctrl-${idx}">

          ${controlInner(idx)}

        </div>

      `

      : `

        <div class="control call-only">

          Call to order

        </div>

      `;


  return `

    <div class="dish-card">


      <div class="dish-photo-wrap">

        <img
          class="dish-photo"

          src="${photo.src}"

          alt="${name}"

          loading="lazy"

          onerror="
            this.src='${fallbacks.food}';
            this.onerror=null;
          "
        >

      </div>


      <div class="dish-main">


        <div class="dish-info">


          <div class="dish-name">

            <span
              class="dot ${cls}">
            </span>

            ${name}

          </div>


          <div class="dish-price">

            ${priceHtml}

          </div>


          ${
            sub
              ? `
                <div class="dish-sub">
                  ${sub}
                </div>
              `
              : ""
          }


        </div>


        ${controlHtml}


      </div>


    </div>

  `;

}


// ============================================================
// ADD / REMOVE BUTTON
// ============================================================

function controlInner(idx) {

  const c =
    cart[idx];


  if (
    c &&
    c.qty > 0
  ) {

    return `

      <div class="stepper">


        <button
          onclick="changeQty(${idx},-1)"
          aria-label="Remove one">

          −

        </button>


        <span>

          ${c.qty}

        </span>


        <button
          onclick="changeQty(${idx},1)"
          aria-label="Add one">

          +

        </button>


      </div>

    `;

  }


  return `

    <button
      class="add-btn"
      onclick="changeQty(${idx},1)">

      ADD

    </button>

  `;

}


// ============================================================
// CHANGE QUANTITY
// ============================================================

function changeQty(idx, delta) {

  const item =
    itemsByIndex[idx];


  if (!item) {
    return;
  }


  if (!cart[idx]) {

    cart[idx] = {

      name: item.name,

      price: item.price,

      qty: 0

    };

  }


  cart[idx].qty += delta;


  if (
    cart[idx].qty <= 0
  ) {

    delete cart[idx];

  }


  const ctrlEl =
    document.getElementById(
      `ctrl-${idx}`
    );


  if (ctrlEl) {

    ctrlEl.innerHTML =
      controlInner(idx);

  }


  renderCartSummary();

}


// ============================================================
// CART SUMMARY
// ============================================================

function renderCartSummary() {

  const entries =
    Object.values(cart);


  const totalQty =
    entries.reduce(
      (sum, item) =>
        sum + item.qty,
      0
    );


  const totalPrice =
    entries.reduce(
      (sum, item) =>
        sum + item.qty * item.price,
      0
    );


  const bar =
    document.getElementById(
      "cartBar"
    );


  if (
    totalQty > 0
  ) {

    bar.classList.add("show");

  } else {

    bar.classList.remove("show");

    if (
      typeof closeDrawer === "function"
    ) {

      closeDrawer();

    }

  }


  const countEl =
    document.getElementById(
      "cartCount"
    );


  const totalEl =
    document.getElementById(
      "cartTotal"
    );


  const drawerTotalEl =
    document.getElementById(
      "drawerTotal"
    );


  if (countEl) {

    countEl.textContent =
      totalQty +
      (
        totalQty === 1
          ? " item"
          : " items"
      );

  }


  if (totalEl) {

    totalEl.textContent =
      "₹" + totalPrice;

  }


  if (drawerTotalEl) {

    drawerTotalEl.textContent =
      "₹" + totalPrice;

  }


  const deliveryEl =
    document.getElementById(
      "deliveryTotal"
    );


  if (deliveryEl) {

    deliveryEl.textContent =
      "₹" +
      (
        totalQty > 0
          ? 40
          : 0
      );

  }


  const grandEl =
    document.getElementById(
      "grandTotal"
    );


  if (grandEl) {

    grandEl.textContent =
      "₹" +
      (
        totalPrice +
        (
          totalQty > 0
            ? 40
            : 0
        )
      );

  }


  const body =
    document.getElementById(
      "cartBody"
    );


  if (!body) {
    return;
  }


  if (
    entries.length === 0
  ) {

    body.innerHTML = `

      <div class="empty-cart">

        Your cart is empty

      </div>

    `;

    return;

  }


  body.innerHTML =
    entries
      .map(
        item => `

          <div class="cart-row">

            <span>

              ${item.name}
              ×
              ${item.qty}

            </span>


            <span>

              ₹${item.qty * item.price}

            </span>

          </div>

        `
      )
      .join("");

}


// ============================================================
// RENDER MENU
// ============================================================

function renderMenu() {

  const toolbar =
    document.getElementById(
      "menuToolbar"
    );


  const panelsEl =
    document.getElementById(
      "menuPanels"
    );


  if (
    !toolbar ||
    !panelsEl
  ) {

    console.error(
      "menuToolbar or menuPanels not found in index.html"
    );

    return;

  }


  const catNames =
    Object.keys(MENU);


  toolbar.innerHTML =
    catNames
      .map(
        (name, i) => `

          <button
            class="cat-chip ${
              i === 0
                ? "active"
                : ""
            }"
            data-cat="${i}">

            ${name}

          </button>

        `
      )
      .join("");


  panelsEl.innerHTML =
    catNames
      .map(
        (name, i) => {

          const cat =
            MENU[name];


          let inner =
            "";


          if (cat.note) {

            inner += `

              <div class="cat-note">

                ${cat.note}

              </div>

            `;

          }


          if (cat.items) {

            inner += `

              <div class="dish-grid">

                ${cat.items
                  .map(dishCard)
                  .join("")}

              </div>

            `;

          }


          if (cat.groups) {

            inner +=
              cat.groups
                .map(
                  group => `

                    <div class="subheading">

                      ${group.title}

                    </div>


                    <div class="dish-grid">

                      ${group.items
                        .map(dishCard)
                        .join("")}

                    </div>

                  `
                )
                .join("");

          }


          return `

            <div
              class="cat-panel ${
                i === 0
                  ? "active"
                  : ""
              }"
              data-cat="${i}">

              ${inner}

            </div>

          `;

        }
      )
      .join("");

}


// ============================================================
// CATEGORY BUTTONS
// ============================================================

function setupCategoryButtons() {

  const toolbar =
    document.getElementById(
      "menuToolbar"
    );


  if (!toolbar) {
    return;
  }


  toolbar.addEventListener(
    "click",
    event => {

      const btn =
        event.target.closest(
          ".cat-chip"
        );


      if (!btn) {
        return;
      }


      document
        .querySelectorAll(
          ".cat-chip"
        )
        .forEach(
          button =>
            button.classList.remove(
              "active"
            )
        );


      document
        .querySelectorAll(
          ".cat-panel"
        )
        .forEach(
          panel =>
            panel.classList.remove(
              "active"
            )
        );


      btn.classList.add(
        "active"
      );


      const panel =
        document.querySelector(
          `.cat-panel[data-cat="${btn.dataset.cat}"]`
        );


      if (panel) {

        panel.classList.add(
          "active"
        );

      }

    }
  );

}


// ============================================================
// START MENU
// ============================================================

function startMenu() {

  renderMenu();

  setupCategoryButtons();

  renderCartSummary();

}


// Start only when the HTML has loaded.
if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    startMenu
  );

} else {

  startMenu();

}

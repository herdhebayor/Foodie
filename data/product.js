export const data = [
    // Burgers
  {
    id: "burger_001",
    slug: "signature-cheeseburger",
    name: "Signature Cheeseburger",
    shortDescription:"Juicy flame-grilled beef layered with aged cheddar and house burger sauce.",
    description:"Our signature cheeseburger features a juicy flame-grilled 100% beef patty topped with aged cheddar cheese, crisp lettuce, tomatoes, dill pickles, red onions and our creamy house burger sauce inside a toasted brioche bun.",
    category: "Burgers",
    badge: "Best Seller",
    tags: [
      "Burger",
      "Beef",
      "Cheese",
      "Lunch",
      "Dinner"
    ],
    images: [
        "/images/burgers/signature-cheeseburger/1.webp",
        "/images/burgers/signature-cheeseburger/2.webp"
      ],
    pricing: {
      currency: "NGN",
      basePrice: 6200,
      finalPrice: 6200
    },
    preparationTime: "15-20 mins",
    ingredients: [
      "Brioche Bun",
      "100% Beef Patty",
      "Aged Cheddar",
      "Lettuce",
      "Tomato",
      "Red Onion",
      "Dill Pickles",
      "House Burger Sauce",
      "Butter"
    ],
    removeIngredients: [
      "Onions",
      "Pickles",
      "Tomato",
      "Lettuce",
      "Cheddar Cheese"
    ],
    allergens: [
      "Gluten",
      "Milk",
      "Egg",
      "Sesame"
    ],
    nutrition: {
      calories: 760,
      protein: 38,
      carbohydrates: 42,
      fat: 44,
      fiber: 3,
      sodium: 980
    },
    spiceLevel: "Mild",
    variants: [
      {
        id: "single",
        name: "Single Patty",
        price: 0
      },
      {
        id: "double",
        name: "Double Patty",
        price: 1800
      },
      {
        id: "triple",
        name: "Triple Patty",
        price: 3600
      }
    ],
    extras: [
      {
        id: "cheddar",
        name: "Extra Cheddar",
        price: 700
      },
      {
        id: "patty",
        name: "Extra Beef Patty",
        price: 1800
      },
      {
        id: "egg",
        name: "Fried Egg",
        price: 600
      },
      {
        id: "bacon",
        name: "Beef Bacon",
        price: 1200
      },
      {
        id: "jalapeno",
        name: "Jalapeños",
        price: 500
      }
    ],
    rating: {
      average: 4.9,
      count: 386
    },
    reviews: [
      {
        id: "r001",
        user: "Daniel",
        rating: 5,
        comment:
          "Perfectly cooked beef and the cheese was amazing."
      },
      {
        id: "r002",
        user: "Amara",
        rating: 5,
        comment:
          "One of the best burgers I've had."
      }
    ],
    frequentlyBoughtTogether: [
      "side_001",
      "drink_001",
      "dessert_003"
    ],
    relatedProducts: [
      "burger_002",
      "burger_003",
      "burger_004"
    ],
    seo: {
      title: "Signature Cheeseburger | Foodie",
      description:"Premium cheeseburger made with grilled beef and aged cheddar."
    }
  },
  {
    id: "burger_002",
    slug: "classic-beef-burger",
    name: "Classic Beef Burger",
    shortDescription:"Simple, juicy and satisfying.",
    description:"A perfectly seasoned beef patty served with fresh vegetables, pickles and creamy burger sauce inside a toasted brioche bun.",
    category: "Burgers",
    badge: "Customer Favorite",
    pricing: {
      currency: "NGN",
      basePrice: 5600,
      finalPrice: 5600
    },
    preparationTime: "15 mins",
    ingredients: [
      "Beef Patty",
      "Brioche Bun",
      "Lettuce",
      "Tomato",
      "Pickles",
      "Burger Sauce"
    ],
    allergens: [
      "Gluten",
      "Egg",
      "Sesame"
    ],
    variants: [
      {
        id: "single",
        name: "Single Patty",
        price: 0
      },
      {
        id: "double",
        name: "Double Patty",
        price: 1800
      },
    ],
    rating: {
      average: 4.8,
      count: 251
    },
    frequentlyBoughtTogether: [
      "side_001",
      "drink_002"
    ],
    relatedProducts: [
      "burger_001",
      "burger_005"
    ]
  },
  {
    id: "burger_003",
    slug: "crispy-chicken-burger",
    name: "Crispy Chicken Burger",
    pricing: {
      currency: "NGN",
      basePrice: 5900,
      finalPrice: 5900
    },
    description:"Golden crispy chicken breast served with lettuce, tomatoes and spicy mayo on a toasted bun.",
    ingredients: [
      "Chicken Breast",
      "Brioche Bun",
      "Lettuce",
      "Tomato",
      "Spicy Mayo"
    ],
    allergens: [
      "Gluten",
      "Egg"
    ],
    spiceLevel: "Medium",
    relatedProducts: [
      "burger_005",
      "burger_001"
    ],
    frequentlyBoughtTogether: [
      "side_003",
      "drink_004"
    ]
  },
  {
    id: "burger_004",
    slug: "double-beef-burger",
    name: "Double Beef Burger",
    badge: "Most Popular",
    pricing: {
      currency: "NGN",
      basePrice: 8200,
      finalPrice: 8200
    },
    description:"Two flame-grilled beef patties stacked with melted cheddar, fresh vegetables and our signature burger sauce.",
    ingredients: [
      "Double Beef Patty",
      "Brioche Bun",
      "Cheddar",
      "Lettuce",
      "Tomato",
      "Onions",
      "Burger Sauce"
    ],
    allergens: [
      "Milk",
      "Gluten",
      "Egg",
      "Sesame"
    ],
    nutrition: {
      calories: 1085,
      protein: 58,
      carbohydrates: 46,
      fat: 69,
      fiber: 4,
      sodium: 1320
    },
    variants: [
      {
        id: "double",
        name: "Double Patty",
        price: 0
      },
      {
        id: "triple",
        name: "Triple Patty",
        price: 1800
      }
    ],
    relatedProducts: [
      "burger_001",
      "burger_002",
      "burger_003"
    ],
    frequentlyBoughtTogether: [
      "side_002",
      "drink_001",
      "dessert_002"
    ]
  },
{
    id: "burger_005",
    slug: "mushroom-swiss-burger",
    name: "Mushroom Swiss Burger",
    shortDescription:"Flame-grilled beef topped with sautéed mushrooms and melted Swiss cheese.",
    description:"A premium burger featuring a juicy grilled beef patty, sautéed button mushrooms, creamy Swiss cheese, caramelized onions and garlic aioli on a toasted brioche bun.",
    category: "Burgers",
    badge: "Chef's Choice",
    pricing: {
        currency: "NGN",
        basePrice: 7200,
        finalPrice: 7200
    },
    preparationTime: "18-22 mins",
    ingredients: [
        "Brioche Bun",
        "Beef Patty",
        "Swiss Cheese",
        "Button Mushrooms",
        "Garlic Aioli",
        "Caramelized Onion",
        "Butter"
    ],
    removeIngredients: [
        "Swiss Cheese",
        "Mushrooms",
        "Garlic Aioli",
        "Onions"
    ],
    allergens: [
        "Gluten",
        "Milk",
        "Egg",
        "Sesame"
    ],
    nutrition: {
        calories: 810,
        protein: 39,
        carbohydrates: 43,
        fat: 47,
        fiber: 4,
        sodium: 990
    },
    variants: [
        {
            id: "single",
            name: "Single Patty",
            price: 0
        },
        {
            id: "double",
            name: "Double Patty",
            price: 1800
        }
    ],
    extras: [
        {
            id: "extra_mushrooms",
            name: "Extra Mushrooms",
            price: 700
        },
        {
            id: "extra_swiss",
            name: "Swiss Cheese",
            price: 900
        },
        {
            id: "extra_patty",
            name: "Extra Beef Patty",
            price: 1800
        }
    ],
    rating: {
        average: 4.8,
        count: 182
    },
    relatedProducts: [
        "burger_001",
        "burger_003",
        "burger_005"
    ],
    frequentlyBoughtTogether: [
        "side_002",
        "drink_007"
    ]
},
{
    id: "burger_06",
    slug: "ultimate-triple-stack",
    name: "Ultimate Triple Stack",
    badge: "Ultimate Feast",
    pricing: {
        currency: "NGN",
        basePrice: 10500,
        finalPrice: 10500
    },
    description:"Three juicy grilled beef patties layered with cheddar, bacon, lettuce, tomatoes, onions and our signature burger sauce.",
    ingredients: [
        "Triple Beef Patty",
        "Cheddar",
        "Beef Bacon",
        "Brioche Bun",
        "Tomato",
        "Lettuce",
        "Burger Sauce"
    ],
    allergens: [
        "Milk",
        "Egg",
        "Gluten",
        "Sesame"
    ],
    nutrition: {
        calories: 1360,
        protein: 74,
        carbohydrates: 55,
        fat: 90
    },
    variants: [
        {
            id: "triple",
            name: "Triple Patty",
            price: 0
        }
    ],
    relatedProducts: [
        "burger_005",
        "burger_001",
        "burger_009"
    ],
    frequentlyBoughtTogether: [
        "side_002",
        "drink_001",
        "dessert_003"
    ],
    rating: {
        average: 4.9,
        count: 141
    }
},
{
    id: "burger_007",
    slug: "truffle-mushroom-burger",
    name: "Truffle Mushroom Burger",
    shortDescription:"Premium beef burger finished with truffle mayo and sautéed mushrooms.",
    description:"A gourmet burger featuring a juicy flame-grilled beef patty, sautéed mushrooms, aged cheddar, fresh rocket leaves and creamy truffle mayonnaise on a toasted brioche bun.",
    category: "Burgers",
    badge: "Premium",
    pricing: {
        currency: "NGN",
        basePrice: 8600,
        finalPrice: 8600
    },
    preparationTime: "20-25 mins",
    ingredients: [
        "Brioche Bun",
        "Beef Patty",
        "Aged Cheddar",
        "Sautéed Mushrooms",
        "Rocket Leaves",
        "Truffle Mayo",
        "Butter"
    ],
    allergens: [
        "Gluten",
        "Milk",
        "Egg",
        "Sesame"
    ],
    nutrition: {
        calories: 890,
        protein: 42,
        carbohydrates: 44,
        fat: 55,
        fiber: 4,
        sodium: 1010
    },
    variants: [
        {
            id: "single",
            name: "Single Patty",
            price: 0
        },
        {
            id: "double",
            name: "Double Patty",
            price: 1800
        }
    ],
    rating: {
        average: 4.9,
        count: 137
    },
    relatedProducts: [
        "burger_006",
        "burger_014",
        "burger_001"
    ],
    frequentlyBoughtTogether: [
        "side_002",
        "drink_007",
        "dessert_001"
    ]
},
{
    id: "burger_008",
    slug: "southern-fried-chicken-burger",
    name: "Southern Fried Chicken Burger",
    badge: "Customer Favorite",
    pricing: {
        currency: "NGN",
        basePrice: 6400,
        finalPrice: 6400
    },
    description:"Extra crispy buttermilk chicken breast with lettuce, pickles and creamy garlic mayo inside a toasted brioche bun.",
    preparationTime: "15-18 mins",
    ingredients: [
        "Chicken Breast",
        "Brioche Bun",
        "Garlic Mayo",
        "Lettuce",
        "Pickles",
        "Butter"
    ],
    allergens: [
        "Gluten",
        "Egg",
        "Milk"
    ],
    nutrition: {
        calories: 745,
        protein: 36,
        carbohydrates: 45,
        fat: 39,
        fiber: 3,
        sodium: 940
    },
    variants: [
        {
            id: "regular",
            name: "Regular",
            price: 0
        },
        {
            id: "double_chicken",
            name: "Double Chicken",
            price: 1900
        }
    ],
    rating: {
        average: 4.8,
        count: 263
    },
    relatedProducts: [
        "burger_004",
        "burger_018"
    ],
    frequentlyBoughtTogether: [
        "side_003",
        "drink_002",
        "dessert_002"
    ]
},
{
    id: "burger_009",
    slug: "buffalo-chicken-burger",
    name: "Buffalo Chicken Burger",
    badge: "Spicy",
    pricing: {
        currency: "NGN",
        basePrice: 6800,
        finalPrice: 6800
    },
    description:"Crispy fried chicken tossed in buffalo sauce with ranch dressing, lettuce and tomato.",
    spiceLevel: "Hot",
    ingredients: [
        "Chicken Breast",
        "Buffalo Sauce",
        "Ranch Dressing",
        "Tomato",
        "Lettuce",
        "Brioche Bun"
    ],
    allergens: [
        "Gluten",
        "Egg",
        "Milk"
    ],
    nutrition: {
        calories: 790,
        protein: 38,
        carbohydrates: 46,
        fat: 42
    },
    rating: {
        average: 4.7,
        count: 148
    },
    relatedProducts: [
        "burger_017",
        "burger_007"
    ],
    frequentlyBoughtTogether: [
        "side_003",
        "drink_004"
    ]
},
{
    id: "burger_010",
    slug: "veggie-garden-burger",
    name: "Veggie Garden Burger",
    badge: "Vegetarian",
    pricing: {
        currency: "NGN",
        basePrice: 5400,
        finalPrice: 5400
    },
    description:"A wholesome vegetable patty served with avocado, lettuce, tomatoes, cucumber and herb mayo.",
    ingredients: [
        "Vegetable Patty",
        "Brioche Bun",
        "Avocado",
        "Tomato",
        "Lettuce",
        "Cucumber",
        "Herb Mayo"
    ],
    allergens: [
        "Gluten",
        "Egg",
        "Milk"
    ],
    nutrition: {
        calories: 590,
        protein: 18,
        carbohydrates: 53,
        fat: 26,
        fiber: 8,
        sodium: 640
    },
    variants: [
        {
            id: "regular",
            name: "Regular",
            price: 0
        }
    ],
    rating: {
        average: 4.6,
        count: 94
    },
    relatedProducts: [
        "burger_008",
        "burger_012"
    ],
    frequentlyBoughtTogether: [
        "side_004",
        "drink_006",
        "dessert_001"
    ]
},

// Sides

{
    id: "side_001",
    slug: "classic-fries",
    name: "Classic Fries",
    shortDescription:"Golden crispy potato fries lightly seasoned with sea salt.",
    description:"Freshly cut potatoes fried until perfectly golden and crispy, finished with sea salt and served with your choice of dipping sauce.",
    category: "Sides",
    badge: "Best Seller",
    pricing: {
        currency: "NGN",
        basePrice: 2200,
        finalPrice: 2200
    },
    preparationTime: "8-10 mins",
    ingredients: [
        "Fresh Potatoes",
        "Vegetable Oil",
        "Sea Salt"
    ],
    allergens: [],
    nutrition: {
        calories: 365,
        protein: 5,
        carbohydrates: 48,
        fat: 17,
        fiber: 5,
        sodium: 380
    },
    variants: [
        {
            id: "regular",
            name: "Regular",
            price: 0
        },
        {
            id: "large",
            name: "Large",
            price: 700
        }
    ],
    extras: [
        {
            id: "cheese_sauce",
            name: "Cheese Sauce",
            price: 500
        },
        {
            id: "garlic_aioli",
            name: "Garlic Aioli",
            price: 400
        },
        {
            id: "bbq",
            name: "BBQ Dip",
            price: 400
        }
    ],
    rating: {
        average: 4.8,
        count: 512
    },

    relatedProducts: [
        "side_002",
        "side_004"
    ],
    frequentlyBoughtTogether: [
        "burger_001",
        "burger_002",
        "drink_001"
    ]
},
{
    id: "side_002",
    slug: "loaded-cheese-fries",
    name: "Loaded Cheese Fries",
    badge: "Most Popular",
    pricing: {
        currency: "NGN",
        basePrice: 3900,
        finalPrice: 3900
    },
    description:"Crispy fries topped with cheddar cheese sauce, beef bacon, spring onions and our signature sauce.",
    ingredients: [
        "French Fries",
        "Cheddar Cheese",
        "Beef Bacon",
        "Spring Onion",
        "Signature Sauce"
    ],
    allergens: [
        "Milk"
    ],
    nutrition: {
        calories: 690,
        protein: 19,
        carbohydrates: 56,
        fat: 42
    },
    relatedProducts: [
        "side_001",
        "side_003"
    ],
    frequentlyBoughtTogether: [
        "burger_003",
        "burger_010"
    ]
},
{
    id: "side_003",
    slug: "sweet-potato-fries",
    name: "Sweet Potato Fries",
    pricing: {
        currency: "NGN",
        basePrice: 2800,
        finalPrice: 2800
    },
    description:"Crispy sweet potato fries lightly seasoned with paprika and sea salt.",
    ingredients: [
        "Sweet Potatoes",
        "Sea Salt",
        "Paprika",
        "Vegetable Oil"
    ],
    allergens: [],
    nutrition: {
        calories: 410,
        protein: 4,
        carbohydrates: 58,
        fat: 16
    },
    relatedProducts: [
        "side_001"
    ],
    frequentlyBoughtTogether: [
        "burger_004",
        "burger_007"
    ]
},
{
    id: "side_004",
    slug: "onion-rings",
    name: "Onion Rings",
    badge: "Customer Favorite",
    pricing: {
        currency: "NGN",
        basePrice: 2600,
        finalPrice: 2600
    },
    description:"Thick onion rings coated in crispy golden breadcrumbs and served with garlic dip.",
    ingredients: [
        "Onions",
        "Breadcrumbs",
        "Flour",
        "Egg",
        "Vegetable Oil"
    ],
    allergens: [
        "Gluten",
        "Egg"
    ],
    nutrition: {
        calories: 420,
        protein: 7,
        carbohydrates: 49,
        fat: 20
    },
    relatedProducts: [
        "side_001",
        "side_002"
    ],
    frequentlyBoughtTogether: [
        "burger_003",
        "burger_006"
    ]
},
{
    id: "side_005",
    slug: "mozzarella-sticks",
    name: "Mozzarella Sticks",
    badge: "Chef's Choice",
    pricing: {
        currency: "NGN",
        basePrice: 3600,
        finalPrice: 3600
    },
    description:"Golden fried mozzarella sticks served with warm marinara dipping sauce.",
    ingredients: [
        "Mozzarella Cheese",
        "Breadcrumbs",
        "Egg",
        "Flour",
        "Marinara Sauce"
    ],
    allergens: [
        "Milk",
        "Gluten",
        "Egg"
    ],
    nutrition: {
        calories: 540,
        protein: 20,
        carbohydrates: 34,
        fat: 34
    },
    relatedProducts: [
        "side_004"
    ],
    frequentlyBoughtTogether: [
        "burger_001",
        "drink_006"
    ]
},
{
    id: "side_006",
    slug: "garlic-bread",
    name: "Garlic Bread",
    pricing: {
        currency: "NGN",
        basePrice: 1800,
        finalPrice: 1800
    },
    description:"Freshly baked garlic butter bread toasted until golden.",
    ingredients: [
        "Bread",
        "Garlic Butter",
        "Parsley"
    ],
    allergens: [
        "Gluten",
        "Milk"
    ]
},
{
    id: "side_007",
    slug: "coleslaw",
    name: "Creamy Coleslaw",
    pricing: {
        currency: "NGN",
        basePrice: 1200,
        finalPrice: 1200
    },
    description:"Fresh cabbage and carrots tossed in creamy homemade coleslaw dressing.",
    ingredients: [
        "Cabbage",
        "Carrots",
        "Mayonnaise",
        "Black Pepper"
    ],
    allergens: [
        "Egg"
    ]
},
{
    id: "side_008",
    slug: "mac-and-cheese",
    name: "Creamy Mac & Cheese",
    badge: "Comfort Food",
    pricing: {
        currency: "NGN",
        basePrice: 3400,
        finalPrice: 3400
    },
    description:"Creamy macaroni pasta baked with cheddar and mozzarella cheese.",
    ingredients: [
        "Macaroni",
        "Cheddar",
        "Mozzarella",
        "Milk",
        "Butter"
    ],
    allergens: [
        "Gluten",
        "Milk"
    ]
},
{
    id: "side_009",
    slug: "fried-plantain",
    name: "Sweet Fried Plantain",
    pricing: {
        currency: "NGN",
        basePrice: 1700,
        finalPrice: 1700
    },
    description:"Perfectly ripe plantains fried until caramelized and golden.",
    ingredients: [
        "Ripe Plantain",
        "Vegetable Oil"
    ],
    allergens: []
},
{
    id: "side_010",
    slug: "seasoned-potato-wedges",
    name: "Seasoned Potato Wedges",
    badge: "Popular",
    pricing: {
        currency: "NGN",
        basePrice: 2900,
        finalPrice: 2900
    },
    description:"Crispy potato wedges seasoned with herbs, paprika and black pepper.",
    ingredients: [
        "Potatoes",
        "Paprika",
        "Garlic Powder",
        "Mixed Herbs",
        "Vegetable Oil"
    ],
    allergens: [],
    relatedProducts: [
        "side_001",
        "side_003"
    ],
    frequentlyBoughtTogether: [
        "burger_005",
        "burger_009"
    ]
},
{
    id: "side_011",
    slug: "crispy-chicken-wings",
    name: "Crispy Chicken Wings",
    shortDescription:"Golden fried chicken wings tossed in your favorite sauce.",
    description:"Six crispy chicken wings served plain or tossed in your choice of BBQ, Buffalo, Sweet Chilli or Honey Garlic sauce.",
    category: "Sides",
    badge: "Best Seller",
    pricing: {
        currency: "NGN",
        basePrice: 4800,
        finalPrice: 4800
    },
    preparationTime: "15-18 mins",
    ingredients: [
        "Chicken Wings",
        "Seasoned Flour",
        "Vegetable Oil",
        "Choice of Sauce"
    ],
    allergens: [
        "Gluten"
    ],
    variants: [
        {
            id: "6pc",
            name: "6 Pieces",
            price: 0
        },
        {
            id: "12pc",
            name: "12 Pieces",
            price: 3800
        }
    ],
    extras: [
        {
            id: "extra_dip",
            name: "Extra Dip",
            price: 400
        }
    ],
    frequentlyBoughtTogether: [
        "drink_001",
        "side_001"
    ],
    relatedProducts: [
        "side_012",
        "side_013"
    ]
},
{
    id: "side_012",
    slug: "buffalo-wings",
    name: "Buffalo Wings",
    badge: "Spicy",
    pricing: {
        currency: "NGN",
        basePrice: 5100,
        finalPrice: 5100
    },
    description:"Crispy wings coated in spicy buffalo sauce and served with ranch dressing.",
    ingredients: [
        "Chicken Wings",
        "Buffalo Sauce",
        "Butter",
        "Ranch Dressing"
    ],
    allergens: [
        "Milk",
        "Egg",
        "Gluten"
    ],
    spiceLevel: "Hot",
    relatedProducts: [
        "side_011"
    ],
    frequentlyBoughtTogether: [
        "drink_004",
        "side_007"
    ]
},
{
    id: "side_013",
    slug: "bbq-wings",
    name: "Smoky BBQ Wings",
    pricing: {
        currency: "NGN",
        basePrice: 5100,
        finalPrice: 5100
    },
    description:"Juicy fried wings coated in our rich smoky barbecue glaze.",
    ingredients: [
        "Chicken Wings",
        "BBQ Sauce"
    ],
    allergens: [
        "Gluten"
    ],
    relatedProducts: [
        "side_011"
    ]
},
{
    id: "side_014",
    slug: "chicken-tenders",
    name: "Chicken Tenders",
    badge: "Customer Favorite",
    pricing: {
        currency: "NGN",
        basePrice: 4500,
        finalPrice: 4500
    },
    description:"Tender strips of chicken breast coated in seasoned breadcrumbs and fried until crispy.",
    ingredients: [
        "Chicken Breast",
        "Breadcrumbs",
        "Flour",
        "Egg"
    ],
    allergens: [
        "Gluten",
        "Egg"
    ],
    variants: [
        {
            id: "4pc",
            name: "4 Pieces",
            price: 0
        },
        {
            id: "8pc",
            name: "8 Pieces",
            price: 3500
        }
    ],
    frequentlyBoughtTogether: [
        "drink_002",
        "side_001"
    ]
},
{
    id: "side_015",
    slug: "cheesy-garlic-fries",
    name: "Cheesy Garlic Fries",
    badge: "Popular",
    pricing: {
        currency: "NGN",
        basePrice: 3600,
        finalPrice: 3600
    },
    description:"Golden fries tossed with roasted garlic butter and finished with melted cheddar cheese.",
    ingredients: [
        "French Fries",
        "Garlic Butter",
        "Cheddar Cheese",
        "Parsley"
    ],
    allergens: [
        "Milk"
    ],
    relatedProducts: [
        "side_001",
        "side_002"
    ]
},
{
    id: "side_016",
    slug: "jalapeno-poppers",
    name: "Jalapeño Poppers",
    badge: "Hot",
    pricing: {
        currency: "NGN",
        basePrice: 3900,
        finalPrice: 3900
    },
    description:"Fresh jalapeños stuffed with cream cheese, coated in crispy breadcrumbs and fried until golden.",
    ingredients: [
        "Jalapeños",
        "Cream Cheese",
        "Breadcrumbs"
    ],
    allergens: [
        "Milk",
        "Gluten"
    ]
},
{
    id: "side_017",
    slug: "loaded-potato-wedges",
    name: "Loaded Potato Wedges",
    pricing: {
        currency: "NGN",
        basePrice: 4100,
        finalPrice: 4100
    },
    description:"Seasoned potato wedges topped with cheddar cheese, beef bacon and spring onions.",
    ingredients: [
        "Potato Wedges",
        "Cheddar Cheese",
        "Beef Bacon",
        "Spring Onion"
    ],
    allergens: [
        "Milk"
    ],
    frequentlyBoughtTogether: [
        "burger_009",
        "drink_001"
    ]
},
{
    id: "side_018",
    slug: "garden-salad",
    name: "Garden Side Salad",
    badge: "Healthy Choice",
    pricing: {
        currency: "NGN",
        basePrice: 2500,
        finalPrice: 2500
    },
    description:"Fresh lettuce, cucumber, tomatoes, carrots and red onions served with your choice of dressing.",
    ingredients: [
        "Lettuce",
        "Tomatoes",
        "Cucumber",
        "Carrots",
        "Red Onion"
    ],
    allergens: []
},
{
    id: "side_019",
    slug: "caesar-side-salad",
    name: "Caesar Side Salad",
    pricing: {
        currency: "NGN",
        basePrice: 3200,
        finalPrice: 3200
    },
    description:"Fresh romaine lettuce tossed with parmesan cheese, garlic croutons and creamy Caesar dressing.",
    ingredients: [
        "Romaine Lettuce",
        "Parmesan Cheese",
        "Croutons",
        "Caesar Dressing"
    ],
    allergens: [
        "Milk",
        "Egg",
        "Gluten"
    ]
},
{
    id: "side_020",
    slug: "fried-mozzarella-bites",
    name: "Fried Mozzarella Bites",
    badge: "Chef's Choice",
    pricing: {
        currency: "NGN",
        basePrice: 3800,
        finalPrice: 3800
    },
    description:"Crispy bite-sized mozzarella cheese served with warm marinara dipping sauce.",
    ingredients: [
        "Mozzarella Cheese",
        "Breadcrumbs",
        "Egg",
        "Marinara Sauce"
    ],
    allergens: [
        "Milk",
        "Egg",
        "Gluten"
    ],
    relatedProducts: [
        "side_005",
        "side_015"
    ],
    frequentlyBoughtTogether: [
        "drink_006",
        "burger_001"
    ]
},

//Wraps


{
    id: "wrap_001",
    slug: "crispy-chicken-wrap",
    name: "Crispy Chicken Wrap",
    shortDescription:"Golden crispy chicken wrapped with fresh vegetables and garlic mayo.",
    description:"Crispy chicken breast, lettuce, tomatoes, cheddar cheese and creamy garlic mayo wrapped in a warm flour tortilla.",
    category: "Wraps",
    badge: "Best Seller",
    pricing: {
        currency: "NGN",
        basePrice: 5200,
        finalPrice: 5200
    },
    preparationTime: "12-15 mins",
    ingredients: [
        "Flour Tortilla",
        "Crispy Chicken Breast",
        "Lettuce",
        "Tomato",
        "Cheddar Cheese",
        "Garlic Mayo"
    ],
    allergens: [
        "Gluten",
        "Milk",
        "Egg"
    ],
    nutrition: {
        calories: 640,
        protein: 36,
        carbohydrates: 48,
        fat: 31,
        fiber: 5,
        sodium: 890
    },
    variants: [
        {
            id: "regular",
            name: "Regular",
            price: 0
        },
        {
            id: "large",
            name: "Large",
            price: 1200
        }
    ],
    extras: [
        {
            id: "extra_chicken",
            name: "Extra Chicken",
            price: 1700
        },
        {
            id: "extra_cheese",
            name: "Extra Cheddar",
            price: 700
        },
        {
            id: "jalapenos",
            name: "Jalapeños",
            price: 500
        }
    ],
    rating: {
        average: 4.9,
        count: 286
    },
    relatedProducts: [
        "wrap_002",
        "burger_004"
    ],
    frequentlyBoughtTogether: [
        "side_001",
        "drink_002"
    ]
},
{
    id: "wrap_002",
    slug: "grilled-chicken-wrap",
    name: "Grilled Chicken Wrap",
    badge: "Healthy Choice",
    pricing: {
        currency: "NGN",
        basePrice: 5400,
        finalPrice: 5400
    },
    description:"Tender grilled chicken breast with avocado, lettuce, tomatoes and ranch dressing wrapped in a soft tortilla.",
    ingredients: [
        "Flour Tortilla",
        "Grilled Chicken",
        "Avocado",
        "Lettuce",
        "Tomato",
        "Ranch Dressing"
    ],
    allergens: [
        "Gluten",
        "Egg",
        "Milk"
    ],
    nutrition: {
        calories: 590,
        protein: 39,
        carbohydrates: 41,
        fat: 28
    },
    relatedProducts: [
        "wrap_001",
        "wrap_003"
    ],
    frequentlyBoughtTogether: [
        "side_018",
        "drink_006"
    ]
},
{
    id: "wrap_003",
    slug: "bbq-chicken-wrap",
    name: "BBQ Chicken Wrap",
    badge: "Popular",
    pricing: {
        currency: "NGN",
        basePrice: 5600,
        finalPrice: 5600
    },
    description:"Grilled chicken tossed in smoky BBQ sauce with cheddar cheese and fresh vegetables.",
    ingredients: [
        "Flour Tortilla",
        "Grilled Chicken",
        "BBQ Sauce",
        "Cheddar Cheese",
        "Lettuce",
        "Tomato"
    ],
    allergens: [
        "Gluten",
        "Milk"
    ],
    frequentlyBoughtTogether: [
        "side_010",
        "drink_001"
    ],
    relatedProducts: [
        "wrap_002",
        "burger_003"
    ]
},
{
    id: "wrap_004",
    slug: "spicy-beef-wrap",
    name: "Spicy Beef Wrap",
    badge: "Hot",
    pricing: {
        currency: "NGN",
        basePrice: 5900,
        finalPrice: 5900
    },
    description:"Seasoned minced beef, jalapeños, cheddar cheese, lettuce and chipotle mayo wrapped in a warm tortilla.",
    spiceLevel: "Hot",
    ingredients: [
        "Flour Tortilla",
        "Seasoned Beef",
        "Cheddar",
        "Jalapeños",
        "Lettuce",
        "Chipotle Mayo"
    ],
    allergens: [
        "Gluten",
        "Milk",
        "Egg"
    ],
    relatedProducts: [
        "burger_013",
        "wrap_005"
    ],
    frequentlyBoughtTogether: [
        "side_003",
        "drink_003"
    ]
},
{
    id: "wrap_005",
    slug: "steak-wrap",
    name: "Grilled Steak Wrap",
    badge: "Premium",
    pricing: {
        currency: "NGN",
        basePrice: 6800,
        finalPrice: 6800
    },
    description:"Tender grilled beef strips with sautéed onions, mushrooms and pepper sauce in a toasted tortilla.",
    ingredients: [
        "Flour Tortilla",
        "Grilled Beef",
        "Mushrooms",
        "Onions",
        "Pepper Sauce",
        "Cheddar Cheese"
    ],
    allergens: [
        "Gluten",
        "Milk"
    ],
    frequentlyBoughtTogether: [
        "side_017",
        "drink_007"
    ]
},
{
    id: "wrap_006",
    slug: "caesar-chicken-wrap",
    name: "Caesar Chicken Wrap",
    pricing: {
        currency: "NGN",
        basePrice: 5500,
        finalPrice: 5500
    },
    description:"Grilled chicken, romaine lettuce, parmesan cheese, croutons and Caesar dressing wrapped in a flour tortilla.",
    ingredients: [
        "Flour Tortilla",
        "Grilled Chicken",
        "Parmesan",
        "Romaine Lettuce",
        "Caesar Dressing",
        "Croutons"
    ],
    allergens: [
        "Gluten",
        "Milk",
        "Egg"
    ]
},
{
    id: "wrap_007",
    slug: "veggie-wrap",
    name: "Garden Veggie Wrap",
    badge: "Vegetarian",
    pricing: {
        currency: "NGN",
        basePrice: 4500,
        finalPrice: 4500
    },
    description:"Fresh vegetables, avocado, cucumber, tomatoes, lettuce and herb dressing wrapped in a warm tortilla.",
    ingredients: [
        "Flour Tortilla",
        "Avocado",
        "Lettuce",
        "Tomatoes",
        "Cucumber",
        "Carrots",
        "Herb Dressing"
    ],
    allergens: [
        "Gluten"
    ]
},
{
    id: "wrap_008",
    slug: "buffalo-chicken-wrap",
    name: "Buffalo Chicken Wrap",
    badge: "Spicy",
    pricing: {
        currency: "NGN",
        basePrice: 5700,
        finalPrice: 5700
    },
    description:"Crispy chicken tossed in buffalo sauce with ranch dressing and fresh vegetables.",
    ingredients: [
        "Flour Tortilla",
        "Chicken Breast",
        "Buffalo Sauce",
        "Ranch",
        "Lettuce",
        "Tomatoes"
    ],
    allergens: [
        "Gluten",
        "Milk",
        "Egg"
    ]
},
{
    id: "wrap_009",
    slug: "shawarma-style-wrap",
    name: "Chicken Shawarma Wrap",
    badge: "Most Popular",
    pricing: {
        currency: "NGN",
        basePrice: 5000,
        finalPrice: 5000
    },
    description:"Marinated chicken strips with cabbage, carrots, onions and creamy shawarma sauce wrapped in a toasted flatbread.",
    ingredients: [
        "Shawarma Bread",
        "Chicken",
        "Cabbage",
        "Carrots",
        "Onions",
        "Shawarma Sauce"
    ],
    allergens: [
        "Gluten",
        "Egg",
        "Milk"
    ],
    frequentlyBoughtTogether: [
        "drink_001",
        "side_001"
    ]
},
{
    id: "wrap_010",
    slug: "ultimate-loaded-wrap",
    name: "Ultimate Loaded Wrap",
    badge: "Ultimate Feast",
    pricing: {
        currency: "NGN",
        basePrice: 7600,
        finalPrice: 7600
    },
    description:"Our biggest wrap packed with grilled chicken, beef strips, beef bacon, cheddar cheese, lettuce, tomatoes and signature sauce.",
    ingredients: [
        "Large Tortilla",
        "Grilled Chicken",
        "Beef Strips",
        "Beef Bacon",
        "Cheddar",
        "Lettuce",
        "Tomato",
        "Signature Sauce"
    ],
    allergens: [
        "Gluten",
        "Milk",
        "Egg"
    ],
    nutrition: {
        calories: 980,
        protein: 61,
        carbohydrates: 58,
        fat: 56
    },
    variants: [
        {
            id: "regular",
            name: "Regular",
            price: 0
        }
    ],
    rating: {
        average: 4.9,
        count: 173
    },
    relatedProducts: [
        "wrap_005",
        "burger_020"
    ],
    frequentlyBoughtTogether: [
        "side_002",
        "drink_001",
        "dessert_002"
    ]
},
{
    id: "wrap_011",
    slug: "peri-peri-chicken-wrap",
    name: "Peri-Peri Chicken Wrap",
    shortDescription:"Flame-grilled peri-peri chicken wrapped with fresh vegetables and garlic mayo.",
    description:"Tender peri-peri marinated chicken breast, crisp lettuce, tomatoes, red onions and creamy garlic mayo wrapped in a warm flour tortilla.",
    category: "Wraps",
    badge: "Chef's Choice",
    pricing: {
        currency: "NGN",
        basePrice: 5900,
        finalPrice: 5900
    },
    preparationTime: "15-18 mins",
    ingredients: [
        "Flour Tortilla",
        "Peri-Peri Chicken",
        "Lettuce",
        "Tomato",
        "Red Onion",
        "Garlic Mayo"
    ],
    allergens: [
        "Gluten",
        "Egg"
    ],
    nutrition: {
        calories: 615,
        protein: 41,
        carbohydrates: 42,
        fat: 27
    },
    variants: [
        {
            id: "regular",
            name: "Regular",
            price: 0
        },
        {
            id: "large",
            name: "Large",
            price: 1200
        }
    ],
    extras: [
        {
            id: "extra_chicken",
            name: "Extra Chicken",
            price: 1700
        },
        {
            id: "extra_cheese",
            name: "Extra Cheddar",
            price: 700
        }
    ],
    rating: {
        average: 4.8,
        count: 196
    },
    relatedProducts: [
        "wrap_001",
        "wrap_008"
    ],
    frequentlyBoughtTogether: [
        "side_003",
        "drink_004"
    ]
},
{
    id: "wrap_012",
    slug: "philly-steak-wrap",
    name: "Philly Steak Wrap",
    badge: "Premium",
    pricing: {
        currency: "NGN",
        basePrice: 7100,
        finalPrice: 7100
    },
    description:"Tender grilled beef strips with sautéed peppers, onions, mushrooms and melted mozzarella cheese.",
    ingredients: [
        "Flour Tortilla",
        "Beef Strips",
        "Mozzarella",
        "Bell Peppers",
        "Onions",
        "Mushrooms"
    ],
    allergens: [
        "Gluten",
        "Milk"
    ],
    frequentlyBoughtTogether: [
        "side_015",
        "drink_007"
    ],
    relatedProducts: [
        "wrap_005",
        "burger_016"
    ]
},
{
    id: "wrap_013",
    slug: "honey-mustard-chicken-wrap",
    name: "Honey Mustard Chicken Wrap",
    badge: "New",
    pricing: {
        currency: "NGN",
        basePrice: 5600,
        finalPrice: 5600
    },
    description:"Grilled chicken breast paired with honey mustard dressing, lettuce, tomatoes and cheddar cheese.",
    ingredients: [
        "Flour Tortilla",
        "Grilled Chicken",
        "Honey Mustard",
        "Cheddar",
        "Lettuce",
        "Tomatoes"
    ],
    allergens: [
        "Gluten",
        "Milk",
        "Egg"
    ],
    relatedProducts: [
        "wrap_002",
        "wrap_011"
    ],
    frequentlyBoughtTogether: [
        "side_018",
        "drink_006"
    ]
},
{
    id: "wrap_014",
    slug: "chipotle-beef-wrap",
    name: "Chipotle Beef Wrap",
    badge: "Spicy",
    pricing: {
        currency: "NGN",
        basePrice: 6100,
        finalPrice: 6100
    },
    description:"Seasoned beef strips, chipotle mayo, cheddar cheese, jalapeños and fresh vegetables wrapped in a toasted tortilla.",
    ingredients: [
        "Flour Tortilla",
        "Beef Strips",
        "Chipotle Mayo",
        "Cheddar",
        "Jalapeños",
        "Lettuce"
    ],
    allergens: [
        "Gluten",
        "Milk",
        "Egg"
    ],
    spiceLevel: "Medium",
    relatedProducts: [
        "wrap_004",
        "burger_013"
    ],
    frequentlyBoughtTogether: [
        "side_001",
        "drink_003"
    ]
},
{
    id: "wrap_015",
    slug: "fish-fillet-wrap",
    name: "Crispy Fish Wrap",
    badge: "Seafood",
    pricing: {
        currency: "NGN",
        basePrice: 6300,
        finalPrice: 6300
    },
    description:"Crispy fish fillet with lettuce, tomatoes, pickles and creamy tartar sauce wrapped in a warm tortilla.",
    ingredients: [
        "Flour Tortilla",
        "Fish Fillet",
        "Lettuce",
        "Tomato",
        "Pickles",
        "Tartar Sauce"
    ],
    allergens: [
        "Fish",
        "Gluten",
        "Egg"
    ],
    frequentlyBoughtTogether: [
        "side_010",
        "drink_005"
    ],
    relatedProducts: [
        "wrap_001",
        "wrap_007"
    ]
},
{
    id: "wrap_016",
    slug: "falafel-wrap",
    name: "Falafel Wrap",
    badge: "Vegetarian",
    pricing: {
        currency: "NGN",
        basePrice: 4700,
        finalPrice: 4700
    },
    description:"Freshly made falafel served with hummus, lettuce, tomatoes, cucumber and tahini sauce.",
    ingredients: [
        "Flour Tortilla",
        "Falafel",
        "Hummus",
        "Tahini",
        "Lettuce",
        "Tomato",
        "Cucumber"
    ],
    allergens: [
        "Gluten",
        "Sesame"
    ]
},
{
    id: "wrap_017",
    slug: "beef-shawarma-wrap",
    name: "Beef Shawarma Wrap",
    badge: "Popular",
    pricing: {
        currency: "NGN",
        basePrice: 5700,
        finalPrice: 5700
    },
    description:"Thinly sliced marinated beef with cabbage, carrots, onions and creamy shawarma sauce wrapped in toasted flatbread.",
    ingredients: [
        "Shawarma Bread",
        "Marinated Beef",
        "Cabbage",
        "Carrots",
        "Onions",
        "Shawarma Sauce"
    ],
    allergens: [
        "Gluten",
        "Milk",
        "Egg"
    ],
    relatedProducts: [
        "wrap_009",
        "wrap_012"
    ],
    frequentlyBoughtTogether: [
        "side_001",
        "drink_001"
    ]
},
{
    id: "wrap_018",
    slug: "mexican-chicken-wrap",
    name: "Mexican Chicken Wrap",
    badge: "Hot",
    pricing: {
        currency: "NGN",
        basePrice: 6200,
        finalPrice: 6200
    },
    description:"Spicy grilled chicken, black beans, sweet corn, cheddar cheese, salsa and chipotle mayo wrapped in a warm tortilla.",
    ingredients: [
        "Flour Tortilla",
        "Grilled Chicken",
        "Black Beans",
        "Sweet Corn",
        "Cheddar",
        "Salsa",
        "Chipotle Mayo"
    ],
    allergens: [
        "Gluten",
        "Milk",
        "Egg"
    ],
    frequentlyBoughtTogether: [
        "side_003",
        "drink_003"
    ]
},
{
    id: "wrap_019",
    slug: "turkey-bacon-wrap",
    name: "Turkey Bacon Wrap",
    badge: "High Protein",
    pricing: {
        currency: "NGN",
        basePrice: 6500,
        finalPrice: 6500
    },
    description:"Grilled turkey breast, turkey bacon, cheddar cheese, lettuce, tomatoes and ranch dressing.",
    ingredients: [
        "Flour Tortilla",
        "Turkey Breast",
        "Turkey Bacon",
        "Cheddar",
        "Ranch Dressing",
        "Lettuce",
        "Tomatoes"
    ],
    allergens: [
        "Gluten",
        "Milk",
        "Egg"
    ],
    relatedProducts: [
        "wrap_002",
        "wrap_013"
    ],
    frequentlyBoughtTogether: [
        "side_018",
        "drink_006"
    ]
},
{
    id: "wrap_020",
    slug: "ultimate-feast-wrap",
    name: "Ultimate Feast Wrap XL",
    badge: "Ultimate Feast",
    pricing: {
        currency: "NGN",
        basePrice: 8500,
        finalPrice: 8500
    },
    description:"An extra-large tortilla packed with grilled chicken, beef strips, beef bacon, cheddar cheese, avocado, lettuce, tomatoes and our signature sauce.",
    ingredients: [
        "XL Flour Tortilla",
        "Grilled Chicken",
        "Beef Strips",
        "Beef Bacon",
        "Cheddar Cheese",
        "Avocado",
        "Lettuce",
        "Tomato",
        "Signature Sauce"
    ],
    allergens: [
        "Gluten",
        "Milk",
        "Egg"
    ],
    nutrition: {
        calories: 1180,
        protein: 68,
        carbohydrates: 63,
        fat: 69
    },
    variants: [
        {
            id: "xl",
            name: "Extra Large",
            price: 0
        }
    ],
   rating: {
        average: 4.9,
        count: 221
    },
    relatedProducts: [
        "wrap_010",
        "burger_020",
        "burger_010"
    ],
    frequentlyBoughtTogether: [
        "side_002",
        "drink_001",
        "dessert_003"
    ]
},
//Mains
  {
    id: "main_001",
    slug: "seafood-okra-deluxe",
    name: "Seafood Okra Deluxe",
    shortDescription: "Rich, viscous traditional okra soup loaded with fresh prawns, calamari, and fish.",
    description: "Our premium seafood okra is prepared with freshly chopped okra cooked in rich palm oil, loaded with fresh jumbo prawns, tender calamari rings, local fresh fish, and traditional spices, served hot with your choice of swallow.",
    category: "Mains",
    badge: "Chef's Choice",
    tags: ["Seafood", "Soup", "Local", "Dinner", "Swallow"],
    pricing: { currency: "NGN", basePrice: 14500, finalPrice: 14500 },
    preparationTime: "25-30 mins",
    ingredients: ["Fresh Okra", "Palm Oil", "Jumbo Prawns", "Calamari", "Fresh Fish", "Ugu Leaves", "Crayfish", "Locust Beans"],
    allergens: ["Crustaceans", "Molluscs"],
    spiceLevel: "Medium",
    variants: [
      { id: "standard", name: "Regular Bowl", price: 0 },
      { id: "jumbo", name: "Party Size Bowl", price: 9500 }
    ],
    extras: [
      { id: "prawns", name: "Extra Jumbo Prawns (3pcs)", price: 3500 },
      { id: "snail", name: "Add Premium Snail (1pc)", price: 2500 }
    ],
    rating: { average: 4.9, count: 242 },
    frequentlyBoughtTogether: ["drink_002", "dessert_003"],
    relatedProducts: ["main_002", "main_003"]
  },
  {
    id: "main_002",
    slug: "smoky-party-jollof-rice",
    name: "Smoky Party Jollof Rice",
    pricing: { currency: "NGN", basePrice: 6500, finalPrice: 6500 },
    category: "Mains",
    badge: "Best Seller",
    description: "Long-grain rice cooked to smoky perfection in a rich, seasoned tomato and bell pepper base.",
    ingredients: ["Long-grain Rice", "Tomato Paste", "Tatase Peppers", "Aromatics", "Vegetable Oil"],
    allergens: [],
    spiceLevel: "Medium",
    relatedProducts: ["main_001", "main_004"],
    frequentlyBoughtTogether: ["side_010", "drink_001"]
  },
  {
    id: "main_003",
    slug: "native-egusi-soup",
    name: "Native Egusi Soup",
    pricing: { currency: "NGN", basePrice: 7500, finalPrice: 7500 },
    category: "Mains",
    badge: "Customer Favorite",
    description: "Rich melon seed soup cooked with palm oil, bitterleaf, and stockfish, served with pounded yam.",
    ingredients: ["Melon Seeds", "Palm Oil", "Bitterleaf", "Stockfish", "Crayfish"],
    allergens: [],
    spiceLevel: "Medium",
    relatedProducts: ["main_001", "main_006"],
    frequentlyBoughtTogether: ["side_010", "drink_001"]
  },
  {
    id: "main_004",
    slug: "special-fried-rice",
    name: "Naija Style Fried Rice",
    pricing: { currency: "NGN", basePrice: 6200, finalPrice: 6200 },
    category: "Mains",
    description: "Fragrant seasoned rice stir-fried with mixed vegetables, liver chunks, and sweet corn.",
    ingredients: ["Rice", "Curry Powder", "Mixed Vegetables", "Beef Liver Chunks", "Sweet Corn"],
    allergens: [],
    spiceLevel: "Mild",
    relatedProducts: ["main_002", "main_010"],
    frequentlyBoughtTogether: ["side_010", "drink_001"]
  },
  {
    id: "main_005",
    slug: "village-efo-riro",
    name: "Village Efo Riro",
    pricing: { currency: "NGN", basePrice: 8000, finalPrice: 8000 },
    category: "Mains",
    description: "Rich, rich spinach soup prepared with bleached palm oil, locust beans, and smoked fish chunks.",
    ingredients: ["Shoko Spinach", "Bleached Palm Oil", "Iru (Locust Beans)", "Smoked Fish", "Pomo"],
    allergens: [],
    spiceLevel: "Hot",
    relatedProducts: ["main_003", "main_007"],
    frequentlyBoughtTogether: ["side_010", "drink_001"]
  },
  {
    id: "main_006",
    slug: "pounded-yam-efo-riro-combo",
    name: "Pounded Yam & Efo Combo",
    pricing: { currency: "NGN", basePrice: 9500, finalPrice: 9500 },
    category: "Mains",
    badge: "Traditional",
    description: "Smooth, stretchy fresh pounded yam paired perfectly with a hearty bowl of rich vegetable soup.",
    ingredients: ["White Yam", "Spinach", "Bell Peppers", "Assorted Meat", "Palm Oil"],
    allergens: [],
    spiceLevel: "Medium",
    relatedProducts: ["main_003", "main_005"],
    frequentlyBoughtTogether: ["side_010", "drink_001"]
  },
  {
    id: "main_007",
    slug: "fisherman-soup-special",
    name: "Rivers State Fisherman Soup",
    pricing: { currency: "NGN", basePrice: 15000, finalPrice: 15000 },
    category: "Mains",
    badge: "Premium",
    description: "A rich, watery, palm-oil based seafood soup originating from the Niger Delta, thickened lightly with cocoyam.",
    ingredients: ["Fresh Fish", "Crab Claws", "Periwinkles", "Cocoyam Paste", "Palm Oil", "Uziza Leaves"],
    allergens: ["Crustaceans", "Molluscs"],
    spiceLevel: "Hot",
    relatedProducts: ["main_001", "main_009"],
    frequentlyBoughtTogether: ["side_010", "drink_001"]
  },
  {
    id: "main_008",
    slug: "ofada-rice-designer-stew",
    name: "Ofada Rice & Designer Stew",
    pricing: { currency: "NGN", basePrice: 8500, finalPrice: 8500 },
    category: "Mains",
    badge: "Highly Requested",
    spiceLevel: "Hot",
    description: "Local unpolished short-grain rice served wrapped in uma leaves with a fiery bleached palm oil and green pepper sauce filled with assorted meat.",
    ingredients: ["Ofada Rice", "Green Bell Peppers", "Bleached Palm Oil", "Locust Beans", "Assorted Meat Chunks"],
    allergens: [],
    relatedProducts: ["main_002", "main_005"],
    frequentlyBoughtTogether: ["side_010", "drink_001"]
  },
  {
    id: "main_009",
    slug: "oxtail-peppersoup-mains",
    name: "Rich Oxtail Peppersoup",
    pricing: { currency: "NGN", basePrice: 11000, finalPrice: 11000 },
    category: "Mains",
    description: "Deeply comforting, spicy broth brewed with tender oxtail joints and traditional native pepper soup spices.",
    ingredients: ["Oxtail Joints", "Ehu Spices", "Uziza Seeds", "Scent Leaves", "Habanero"],
    allergens: [],
    spiceLevel: "Hot",
    relatedProducts: ["main_007", "main_010"],
    frequentlyBoughtTogether: ["side_010", "drink_001"]
  },
  {
    id: "main_010",
    slug: "yam-porridge-asaro",
    name: "Asaro (Yam Porridge)",
    pricing: { currency: "NGN", basePrice: 5500, finalPrice: 5500 },
    category: "Mains",
    description: "Fluffy white yam cubes mashed and cooked in a well-seasoned palm oil pepper mix, garnished with dry fish.",
    ingredients: ["White Yam", "Palm Oil", "Onions", "Bell Peppers", "Dry Fish Chunks"],
    allergens: [],
    spiceLevel: "Medium",
    relatedProducts: ["main_004", "main_009"],
    frequentlyBoughtTogether: ["side_010", "drink_001"]
  },

  //Grills
  {
    id: "grill_001",
    slug: "hausaland-suya-platter",
    name: "Aboki Style Beef Suya Platter",
    shortDescription: "Thinly sliced beef flank coated in spicy, nutty Yaji and charcoal-grilled.",
    description: "Our signature suya features premium thin-cut beef strips marinated heavily in authentic northern Yaji spice (ground peanuts, ginger, chili), skewered and flame-grilled over burning coals, served traditional style with sliced onions, tomatoes, and extra cabbage.",
    category: "Grills and BBQ",
    badge: "Midnight Favorite",
    tags: ["Beef", "Suya", "Spicy", "Street Food", "Dinner"],
    pricing: { currency: "NGN", basePrice: 7500, finalPrice: 7500 },
    preparationTime: "15-20 mins",
    ingredients: ["Beef Flank", "Yaji Spice Mix", "Groundnut Cake Kuli-Kuli", "Ginger Powder", "Vegetable Oil", "Onions"],
    removeIngredients: ["Onions", "Extra Yaji Dusting"],
    allergens: ["Peanuts"],
    spiceLevel: "Hot",
    variants: [
      { id: "regular", name: "Standard Pack", price: 0 },
      { id: "family", name: "Mega Sharing Box", price: 8000 }
    ],
    extras: [
      { id: "masa", name: "Add Rice Masa (4pcs)", price: 1500 },
      { id: "kidney", name: "Add Grilled Kidney Skewer", price: 1200 }
    ],
    rating: { average: 4.9, count: 680 },
    frequentlyBoughtTogether: ["drink_008", "drink_002"],
    relatedProducts: ["grill_002", "grill_005"]
  },
  {
    id: "grill_002",
    slug: "charcoal-grilled-whole-croaker",
    name: "Charcoal Grilled Whole Croaker",
    pricing: { currency: "NGN", basePrice: 13500, finalPrice: 13500 },
    category: "Grills and BBQ",
    badge: "Lounge Classic",
    spiceLevel: "Hot",
    description: "A whole fresh Croaker fish heavily scored, marinated in a rich habanero and garlic paste, and slowly grilled over charcoal.",
    ingredients: ["Whole Croaker Fish", "Habanero Paste", "Garlic Oil", "Bell Peppers", "Onions"],
    allergens: ["Fish"],
    relatedProducts: ["grill_001", "grill_009"],
    frequentlyBoughtTogether: ["side_010", "drink_001"]
  },
  {
    id: "grill_003",
    slug: "spicy-ram-suya-skewers",
    name: "Spicy Ram Suya Skewers",
    pricing: { currency: "NGN", basePrice: 9000, finalPrice: 9000 },
    category: "Grills and BBQ",
    spiceLevel: "Hot",
    description: "Rich and chewy cuts of ram meat seasoned with heavy suya pepper and char-grilled to authentic mallam specifications.",
    ingredients: ["Ram Meat Cuts", "Yaji Spice", "Peanut Extract", "Vegetable Oil"],
    allergens: ["Peanuts"],
    relatedProducts: ["grill_001", "grill_004"],
    frequentlyBoughtTogether: ["side_010", "drink_001"]
  },
  {
    id: "grill_004",
    slug: "bbq-turkey-wings-peppery",
    name: "Peppery BBQ Turkey Wings",
    pricing: { currency: "NGN", basePrice: 7200, finalPrice: 7200 },
    category: "Grills and BBQ",
    badge: "Customer Favorite",
    spiceLevel: "Medium",
    description: "Jumbo, meaty turkey wings tossed in a localized sticky, spicy honey-shombo barbecue glaze.",
    ingredients: ["Jumbo Turkey Wings", "Shombo Pepper", "Honey", "Local BBQ Spice"],
    allergens: [],
    relatedProducts: ["grill_007", "grill_008"],
    frequentlyBoughtTogether: ["side_010", "drink_001"]
  },
  {
    id: "grill_005",
    slug: "smoky-chicken-suya",
    name: "Smoky Chicken Suya",
    pricing: { currency: "NGN", basePrice: 6800, finalPrice: 6800 },
    category: "Grills and BBQ",
    description: "Boneless chicken thighs deeply marinated in aromatic peanut-suya mix and smoke-grilled over coal.",
    ingredients: ["Boneless Chicken Thighs", "Yaji Pepper", "Onion Slices"],
    allergens: ["Peanuts"],
    spiceLevel: "Medium",
    relatedProducts: ["grill_001", "grill_003"]
  },
  {
    id: "grill_006",
    slug: "grilled-kilishi-premium",
    name: "Gourmet Kilishi Pack",
    pricing: { currency: "NGN", basePrice: 5000, finalPrice: 5000 },
    category: "Grills and BBQ",
    badge: "Authentic Hausa",
    description: "Sun-dried thin sheets of premium beef, heavily coated in a rich peanut and chili paste, then briefly fire-toasted.",
    ingredients: ["Dehydrated Beef Flank", "Kuli-Kuli Paste", "Chili Powders", "Ginger Extract"],
    allergens: ["Peanuts"],
    spiceLevel: "Hot",
    relatedProducts: ["grill_001", "grill_003"]
  },
  {
    id: "grill_007",
    slug: "asun-smoky-peppered-goat",
    name: "Smoky Asun (Peppered Goat)",
    pricing: { currency: "NGN", basePrice: 8500, finalPrice: 8500 },
    category: "Grills and BBQ",
    badge: "Party Essential",
    spiceLevel: "Hot",
    description: "Bite-sized chunks of bone-in goat meat roasted over open flame, chopped up and sautéed violently in a rich, coarse scotch bonnet and onion mix.",
    ingredients: ["Goat Meat Chunks", "Coarse Habanero Peppers", "Onions", "Local Seasoning Cube"],
    allergens: [],
    relatedProducts: ["grill_003", "grill_008"]
  },
  {
    id: "grill_008",
    slug: "peppered-grilled-chicken-lap",
    name: "Peppered Charcoal Chicken Quarter",
    pricing: { currency: "NGN", basePrice: 5500, finalPrice: 5500 },
    category: "Grills and BBQ",
    description: "A huge chicken quarter (lap) grilled over coals and continuously basted in a rich local red pepper stew.",
    ingredients: ["Chicken Quarter", "Red Pepper Reduction", "Garlic", "Onions"],
    allergens: [],
    spiceLevel: "Medium",
    relatedProducts: ["grill_004", "grill_005"]
  },
  {
    id: "grill_009",
    slug: "grilled-jumbo-prawns-yaji",
    name: "Yaji Glazed Jumbo Prawns",
    pricing: { currency: "NGN", basePrice: 16000, finalPrice: 16000 },
    category: "Grills and BBQ",
    badge: "Seafood Choice",
    description: "Jumbo tiger prawns split down the middle and grilled with garlic-butter infused with smooth suya pepper.",
    ingredients: ["Jumbo Tiger Prawns", "Garlic Butter", "Suya Spice Dusting"],
    allergens: ["Crustaceans", "Milk", "Peanuts"],
    spiceLevel: "Medium",
    relatedProducts: ["grill_002", "grill_010"]
  },
  {
    id: "grill_010",
    slug: "roasted-bole-fish-platter",
    name: "Port Harcourt Bole & Fish",
    pricing: { currency: "NGN", basePrice: 9500, finalPrice: 9500 },
    category: "Grills and BBQ",
    badge: "South-South Special",
    spiceLevel: "Hot",
    description: "Perfectly roasted ripe yellow plantains served alongside roasted scaly Mackerel fish and a rich, spicy palm oil pepper sauce.",
    ingredients: ["Ripe Plantain", "Mackerel Fish", "Palm Oil Sauce", "Utazi Leaves"],
    allergens: ["Fish"],
    relatedProducts: ["grill_002", "grill_007"]
  },
  //Rice bowls
  {
    id: "rice_001",
    slug: "authentic-smoky-jollof-rice",
    name: "Authentic Smoky Jollof Rice",
    shortDescription: "The ultimate Nigerian party jollof cooked over premium smoke.",
    description: "Our legendary long-grain rice is slow-cooked in a vibrant seasoned blend of crushed tomatoes, tatase (bell peppers), shombo, onions, and local spices, yielding that authentic bottom-pot burnt flavor profile.",
    category: "Rice",
    badge: "National Pride",
    tags: ["Rice", "Jollof", "Party Style", "Lunch", "Dinner"],
    pricing: { currency: "NGN", basePrice: 5000, finalPrice: 5000 },
    preparationTime: "15 mins",
    ingredients: ["Long-grain Parboiled Rice", "Tomato Paste", "Tatase Peppers", "Aromatics Mix", "Vegetable Oil", "Butter"],
    removeIngredients: ["Butter Coating"],
    allergens: ["Milk"],
    spiceLevel: "Medium",
    variants: [
      { id: "single", name: "Standard Plate Portion", price: 0 },
      { id: "large", name: "Full Takeaway Pack", price: 3500 }
    ],
    extras: [
      { id: "dodo", name: "Portion of Sweet Dodo", price: 1000 },
      { id: "coleslaw", name: "Creamy Coleslaw", price: 800 }
    ],
    rating: { average: 4.9, count: 1250 },
    frequentlyBoughtTogether: ["chick_001", "drink_002"],
    relatedProducts: ["rice_002", "rice_003"]
  },
  {
    id: "rice_002",
    slug: "classic-nigerian-fried-rice",
    name: "Classic Nigerian Fried Rice",
    pricing: { currency: "NGN", basePrice: 5200, finalPrice: 5200 },
    category: "Rice",
    badge: "Party Classic",
    description: "Fragrant parboiled rice stir-fried rich in curry powder, thyme, chicken stock, mixed vegetables, and tiny chopped beef liver.",
    ingredients: ["Parboiled Rice", "Chicken Stock Base", "Curry Powder", "Green Peas", "Carrots", "Beef Liver Chunks"],
    allergens: [],
    spiceLevel: "Mild",
    relatedProducts: ["rice_001", "rice_004"]
  },
  {
    id: "rice_005",
    slug: "white-rice-banga-soup",
    name: "White Rice & Banga Soup Combo",
    pricing: { currency: "NGN", basePrice: 9000, finalPrice: 9000 },
    category: "Rice",
    description: "Steamed long-grain white rice served alongside a rich bowl of palm fruit extract soup cooked with native delta spices and fresh catfish.",
    ingredients: ["White Rice", "Palm Fruit Extract Concentrate", "Beletete Leaves", "Aidan Fruit Spice", "Catfish"],
    allergens: ["Fish"],
    spiceLevel: "Medium",
    relatedProducts: ["rice_006", "rice_008"]
  },
  {
    id: "rice_006",
    slug: "coconut-rice-delight",
    name: "Rich Coconut Rice Special",
    pricing: { currency: "NGN", basePrice: 6500, finalPrice: 6500 },
    category: "Rice",
    badge: "Aromatic",
    description: "Rice cooked slow inside fresh, rich squeezed coconut milk broth, subtly seasoned with dry pepper and shredded smoked fish.",
    ingredients: ["Parboiled Rice", "Fresh Coconut Milk", "Fish Stock", "Dry Pepper", "Onions"],
    allergens: [],
    spiceLevel: "Mild",
    relatedProducts: ["rice_001", "rice_002"]
  },
  {
    id: "rice_007",
    slug: "ayamese-stew-white-rice",
    name: "White Rice & Ayamase Stew",
    pricing: { currency: "NGN", basePrice: 8000, finalPrice: 8000 },
    category: "Rice",
    spiceLevel: "Hot",
    description: "Steamed white rice served side-by-side with a spicy, rich green pepper designer stew cooked down with boiled farm eggs.",
    ingredients: ["White Rice", "Green Bell Peppers", "Palm Oil", "Locust Beans", "Boiled Eggs"],
    allergens: ["Egg"],
    relatedProducts: ["rice_003", "rice_009"]
  },
  {
    id: "rice_008",
    slug: "white-rice-local-tomato-stew",
    name: "White Rice & Fried Tomato Stew",
    pricing: { currency: "NGN", basePrice: 4500, finalPrice: 4500 },
    category: "Rice",
    description: "Simple steamed white rice drenched in a rich, deeply fried sour-free tomato and red pepper oil stew.",
    ingredients: ["Long-grain White Rice", "Fresh Tomatoes", "Red Bell Peppers", "Vegetable Oil"],
    allergens: [],
    spiceLevel: "Mild",
    relatedProducts: ["rice_005", "rice_007"]
  },
  {
    id: "rice_009",
    slug: "basmati-jollof-rice-gourmet",
    name: "Gourmet Basmati Jollof Rice",
    pricing: { currency: "NGN", basePrice: 7800, finalPrice: 7800 },
    category: "Rice",
    badge: "Premium Grain",
    description: "An upscale version of our jollof made using slender, fragrant premium basmati rice grains infused with rich butter.",
    ingredients: ["Premium Basmati Rice", "Tomato Reduction", "Tatase Paste", "Aromatics", "Butter"],
    allergens: ["Milk"],
    spiceLevel: "Medium",
    relatedProducts: ["rice_001", "rice_006"]
  },
  {
    id: "rice_010",
    slug: "oriental-shrimp-fried-rice",
    name: "Shrimp Fried Rice Special",
    pricing: { currency: "NGN", basePrice: 7200, finalPrice: 7200 },
    category: "Rice",
    description: "Seasoned rice flash-fried in light sesame vegetable oil, tossed heavily with small sweet pink shrimp tails and green onions.",
    ingredients: ["Rice", "Small Shrimps", "Sesame Oil", "Green Spring Onions", "Soy Sauce", "Carrots"],
    allergens: ["Crustaceans", "Soy"],
    spiceLevel: "Mild",
    relatedProducts: ["rice_002", "rice_006"]
  },

  //Pasta
  {
    id: "past_001",
    slug: "naija-jollof-spaghetti",
    name: "Naija Jollof Spaghetti",
    shortDescription: "Spaghetti cooked in a smoky, spicy tomato and bell pepper base.",
    description: "Our signature jollof spaghetti is parboiled and simmered in a rich, deeply seasoned mix of blended tomatoes, tatase, shombo, and onions, cooked down until smoky and perfectly al dente.",
    category: "Pasta",
    badge: "Student Favorite",
    tags: ["Pasta", "Spicy", "Jollof", "Lunch"],
    pricing: { currency: "NGN", basePrice: 4500, finalPrice: 4500 },
    preparationTime: "15-20 mins",
    ingredients: ["Spaghetti", "Tomato Paste", "Shombo Pepper", "Tatase", "Onions", "Vegetable Oil", "Local Spices"],
    removeIngredients: ["Onions"],
    allergens: ["Gluten"],
    spiceLevel: "Medium",
    variants: [
      { id: "standard", name: "Regular Plate", price: 0 },
      { id: "jumbo", name: "Mega Takeaway Pack", price: 3000 }
    ],
    extras: [
      { id: "boiled-egg", name: "Add Boiled Egg", price: 500 },
      { id: "dodo", name: "Side of Fried Plantain", price: 1000 }
    ],
    rating: { average: 4.8, count: 512 },
    frequentlyBoughtTogether: ["drink_002", "prot_004"],
    relatedProducts: ["past_002", "past_005"]
  },
  {
    id: "past_002",
    slug: "stir-fried-suya-spaghetti",
    name: "Stir-Fried Suya Spaghetti",
    pricing: { currency: "NGN", basePrice: 6800, finalPrice: 6800 },
    category: "Pasta",
    badge: "Chef's Special",
    spiceLevel: "Hot",
    description: "Spaghetti stir-fried with shredded beef suya, green peppers, onions, and a heavy dusting of authentic Yaji spice.",
    ingredients: ["Spaghetti", "Beef Suya Strips", "Yaji Pepper", "Green Bell Peppers", "Carrots", "Soy Sauce"],
    allergens: ["Gluten", "Peanuts", "Soy"],
    relatedProducts: ["past_001", "past_004"]
  },
  {
    id: "past_003",
    slug: "creamy-chili-prawn-pasta",
    name: "Creamy Chili Prawn Pasta",
    pricing: { currency: "NGN", basePrice: 12500, finalPrice: 12500 },
    category: "Pasta",
    badge: "Premium",
    description: "Fettuccine pasta tossed in a rich, garlic-infused heavy cream sauce spiked with local dry pepper and loaded with sautéed prawns.",
    ingredients: ["Fettuccine", "Jumbo Prawns", "Heavy Cream", "Garlic", "Cameroon Pepper", "Parmesan"],
    allergens: ["Gluten", "Milk", "Crustaceans"],
    spiceLevel: "Medium",
    relatedProducts: ["past_006", "past_009"]
  },
  {
    id: "past_004",
    slug: "native-spaghetti-stir-fry",
    name: "Native Spaghetti Stir-Fry",
    pricing: { currency: "NGN", basePrice: 5500, finalPrice: 5500 },
    category: "Pasta",
    spiceLevel: "Medium",
    description: "Local style pasta stir-fried with palm oil, locust beans (iru), diced smoked fish, and fresh scent leaves.",
    ingredients: ["Spaghetti", "Light Palm Oil", "Iru (Locust Beans)", "Smoked Fish Chunks", "Scent Leaves", "Crayfish"],
    allergens: ["Gluten"],
    relatedProducts: ["past_001", "past_007"]
  },
  {
    id: "past_005",
    slug: "peppered-macaroni-and-cheese",
    name: "Spicy Baked Mac & Cheese",
    pricing: { currency: "NGN", basePrice: 7500, finalPrice: 7500 },
    category: "Pasta",
    description: "Macaroni baked in a gooey blend of cheddar and mozzarella, kicked up with chopped green chilis and red peppers.",
    ingredients: ["Macaroni", "Cheddar Cheese", "Mozzarella", "Scotch Bonnet bits", "Béchamel sauce"],
    allergens: ["Gluten", "Milk"],
    spiceLevel: "Medium",
    relatedProducts: ["past_001", "past_002"]
  },
  {
    id: "past_006",
    slug: "seafood-jollof-pasta-feast",
    name: "Seafood Jollof Pasta Feast",
    pricing: { currency: "NGN", basePrice: 14000, finalPrice: 14000 },
    category: "Pasta",
    badge: "Platter",
    description: "A rich jollof pasta combination featuring penne tossed with prawns, calamari, and chunks of fried croaker fish.",
    ingredients: ["Penne Pasta", "Tomato Pepper Base", "Prawns", "Calamari", "Croaker Fish Chunks"],
    allergens: ["Gluten", "Crustaceans", "Molluscs", "Fish"],
    spiceLevel: "Medium",
    relatedProducts: ["past_003", "past_008"]
  },
  {
    id: "past_008",
    slug: "chicken-alfredo-naija-style",
    name: "Spicy Chicken Alfredo",
    pricing: { currency: "NGN", basePrice: 9500, finalPrice: 9500 },
    category: "Pasta",
    description: "Classic creamy white sauce pasta loaded with pan-seared chicken breast slices, heavily seasoned with black and white pepper.",
    ingredients: ["Spaghetti", "Chicken Breast Strips", "Heavy Cream", "Garlic Butter", "White Pepper"],
    allergens: ["Gluten", "Milk"],
    spiceLevel: "Mild",
    relatedProducts: ["past_003", "past_006"]
  },
  {
    id: "past_009",
    slug: "minced-beef-bolognese",
    name: "Spicy Beef Noodles Sauce",
    pricing: { currency: "NGN", basePrice: 5800, finalPrice: 5800 },
    category: "Pasta",
    description: "Spaghetti served topped with a thick, peppery Nigerian-spiced minced beef and tomato sauce layer.",
    ingredients: ["Spaghetti", "Minced Beef", "Tomato Paste", "Local Thyme", "Curry Powder"],
    allergens: ["Gluten"],
    spiceLevel: "Mild",
    relatedProducts: ["past_001", "past_005"]
  },
  {
    id: "past_010",
    slug: "indomie-style-instant-noodles",
    name: "Gourmet Fried Noodles Special",
    pricing: { currency: "NGN", basePrice: 3800, finalPrice: 3800 },
    category: "Pasta",
    badge: "Quick Meal",
    spiceLevel: "Hot",
    description: "Two packs of instant noodles stir-fried dry with fresh carrots, green beans, habanero peppers, and fried eggs broken inside.",
    ingredients: ["Instant Wheat Noodles", "Noodle Seasoning Pack", "Habanero", "Carrots", "Eggs"],
    allergens: ["Gluten", "Egg", "Soy"],
    relatedProducts: ["past_001", "past_007"]
  },
  //Proteins
  {
    id: "prot_001",
    slug: "fried-assorted-meat-mix",
    name: "Fried Assorted Meat Portion",
    shortDescription: "A well-fried mix of local beef cuts, tripe, and cow skin.",
    description: "A classic protein side. A rich portion of boiled and deeply fried assorted meat cuts including tender beef cubes, Shaki (tripe), and Pomo (cow skin) tossed lightly in a savory pepper mixture.",
    category: "Proteins",
    badge: "Soups Best Friend",
    tags: ["Beef", "Assorted", "Fried", "Local"],
    pricing: { currency: "NGN", basePrice: 3800, finalPrice: 3800 },
    preparationTime: "10 mins",
    ingredients: ["Beef Cubes", "Shaki (Tripe)", "Pomo (Cow Skin)", "Vegetable Oil", "Onions", "Seasoning Cubes"],
    removeIngredients: ["Pomo"],
    allergens: [],
    spiceLevel: "Mild",
    variants: [
      { id: "standard", name: "Standard Portion", price: 0 },
      { id: "large", name: "Mega Double Portion", price: 3200 }
    ],
    extras: [{ id: "sauce", name: "Toss in Extra Hot Pepper Sauce", price: 800 }],
    rating: { average: 4.8, count: 410 },
    frequentlyBoughtTogether: ["main_002", "main_003"],
    relatedProducts: ["prot_002", "prot_006"]
  },
  {
    id: "prot_002",
    slug: "hard-local-chicken-fried",
    name: "Fried Crunchy Country Chicken",
    pricing: { currency: "NGN", basePrice: 4000, finalPrice: 4000 },
    category: "Proteins",
    description: "Tougher, intensely flavorful local agricultural chicken boiled with heavy herbs and deep fried to a rich crunch.",
    ingredients: ["Local Breed Chicken", "Curry Powder", "Thyme", "Onions"],
    allergens: [],
    spiceLevel: "Mild",
    relatedProducts: ["prot_001", "prot_003"]
  },
  {
    id: "prot_003",
    slug: "deep-fried-croaker-cutlet",
    name: "Fried Croaker Fish Steak",
    pricing: { currency: "NGN", basePrice: 4800, finalPrice: 4800 },
    category: "Proteins",
    badge: "Seafood Add-on",
    description: "A thick center-cut slab of fresh Croaker fish seasoned with local salt-pepper mix and crisped in vegetable oil.",
    ingredients: ["Croaker Fish Slice", "Sea Salt", "Local Seasoning"],
    allergens: ["Fish"],
    spiceLevel: "Mild",
    relatedProducts: ["prot_005", "prot_009"]
  },
  {
    id: "prot_004",
    slug: "peppered-chicken-gizzard",
    name: "Peppered Gizzard Portion",
    pricing: { currency: "NGN", basePrice: 3500, finalPrice: 3500 },
    category: "Proteins",
    spiceLevel: "Hot",
    description: "Firm, crunchy chicken gizzards deep fried and thoroughly coated in a fiery red habanero pepper reduction sauce.",
    ingredients: ["Chicken Gizzards", "Habanero Pepper Sauce", "Onions"],
    allergens: [],
    relatedProducts: ["prot_001", "prot_007"]
  },
  {
    id: "prot_005",
    slug: "poached-stockfish-ear",
    name: "Boiled Premium Stockfish Ear",
    pricing: { currency: "NGN", basePrice: 6500, finalPrice: 6500 },
    category: "Proteins",
    badge: "Traditional Luxury",
    description: "Imported Norwegian stockfish (Panla/Okporoko) boiled slow and steady till succulent, bursting with traditional ocean umami flavors.",
    ingredients: ["Dried Stockfish Cut", "Water", "Salt"],
    allergens: ["Fish"],
    spiceLevel: "Mild",
    relatedProducts: ["prot_006", "prot_009"]
  },
  {
    id: "prot_006",
    slug: "tender-stewed-cow-tail",
    name: "Stewed Cow Tail Joint",
    pricing: { currency: "NGN", basePrice: 5500, finalPrice: 5500 },
    category: "Proteins",
    description: "A gelatinous and deeply flavorful single joint of cow tail simmered inside rich red tomato stew.",
    ingredients: ["Cow Tail Joint", "Tomato Fried Stew", "Aromatics"],
    allergens: [],
    spiceLevel: "Mild",
    relatedProducts: ["prot_001", "prot_005"]
  },
  {
    id: "prot_007",
    slug: "giant-peppered-snail",
    name: "Fiery Peppered Jumbo Snail",
    pricing: { currency: "NGN", basePrice: 6000, finalPrice: 6000 },
    category: "Proteins",
    badge: "Premium Delicacy",
    spiceLevel: "Hot",
    description: "One giant land snail cleaned thoroughly with alum and lime, boiled, lightly fried, and smothered in native pepper sauce.",
    ingredients: ["Giant Congo Land Snail", "Scotch Bonnet Peppers", "Onions"],
    allergens: ["Molluscs"],
    relatedProducts: ["prot_004", "prot_001"]
  },
  {
    id: "prot_008",
    slug: "soft-boiled-farm-eggs",
    name: "Boiled Egg Pair",
    pricing: { currency: "NGN", basePrice: 1000, finalPrice: 1000 },
    category: "Proteins",
    description: "Two simple hard-boiled farm fresh eggs, perfect for dropping into your stew or rice dishes.",
    ingredients: ["Farm Eggs"],
    allergens: ["Egg"],
    spiceLevel: "Mild",
    relatedProducts: ["prot_001", "prot_004"]
  },
  {
    id: "prot_009",
    slug: "fried-titus-fish-mackerel",
    name: "Fried Titus Fish (Mackerel)",
    pricing: { currency: "NGN", basePrice: 3200, finalPrice: 3200 },
    category: "Proteins",
    description: "Classic oil-rich Mackerel (Titus) fish sliced, spiced with onion salt, and deep-fried till golden-crisp.",
    ingredients: ["Mackerel Fish", "Vegetable Oil", "Salt Blend"],
    allergens: ["Fish"],
    spiceLevel: "Mild",
    relatedProducts: ["prot_003", "prot_005"]
  },
  {
    id: "prot_010",
    slug: "peppered-pomo-chunks",
    name: "Spicy Peppered Pomo Cubes",
    pricing: { currency: "NGN", basePrice: 2800, finalPrice: 2800 },
    category: "Proteins",
    badge: "Chewy Goodness",
    spiceLevel: "Hot",
    description: "Bite-sized soft cow skin chunks cooked down in a spicy sauce of blended red chilis and plenty onions.",
    ingredients: ["Cow Skin (Pomo)", "Blended Chili Peppers", "Onions"],
    allergens: [],
    relatedProducts: ["prot_001", "prot_004"]
  },

  //Chickens
  {
    id: "chick_001",
    slug: "crispy-fried-chicken-quarter",
    name: "Crispy Fried Chicken Lap",
    shortDescription: "A huge, deeply seasoned local fried chicken quarter.",
    description: "Our legendary chicken lap (quarter leg) is slow-boiled inside an aromatic curry-thyme broth until completely tender, then deep-fried in hot vegetable oil until the skin attains a rich golden-brown crunch while preserving internal moisture.",
    category: "Chicken",
    badge: "Proteins Best Seller",
    tags: ["Chicken", "Fried", "Crunchy", "Lunch"],
    pricing: { currency: "NGN", basePrice: 4000, finalPrice: 4000 },
    preparationTime: "10-12 mins",
    ingredients: ["Chicken Quarter Leg", "Curry Powder", "Local Thyme", "Garlic Powder", "Onion Salt", "Vegetable Oil"],
    removeIngredients: ["Skin"],
    allergens: [],
    spiceLevel: "Mild",
    variants: [
      { id: "single", name: "1 Piece Lap", price: 0 },
      { id: "double", name: "2 Piece Combo Pack", price: 3600 }
    ],
    extras: [{ id: "pepper-sauce", name: "Smother in Hot Pepper Sauce", price: 800 }],
    rating: { average: 4.9, count: 980 },
    frequentlyBoughtTogether: ["rice_001", "drink_009"],
    relatedProducts: ["chick_002", "chick_004"]
  },
  {
    id: "chick_002",
    slug: "fiery-peppered-chicken-chunks",
    name: "Fiery Peppered Chicken Chunks",
    pricing: { currency: "NGN", basePrice: 4500, finalPrice: 4500 },
    category: "Chicken",
    badge: "Party Style",
    spiceLevel: "Hot",
    description: "Hard cutlet pieces of fried agricultural chicken tossed violently inside a dense, concentrated hot scotch bonnet and fried onion pepper sauce.",
    ingredients: ["Hard Breed Chicken Parts", "Coarse Scotch Bonnet Mix", "Onions", "Bouillon Seasoning"],
    allergens: [],
    relatedProducts: ["chick_001", "chick_007"]
  },
  {
    id: "chick_003",
    slug: "charcoal-grilled-chicken-suya",
    name: "Aboki Style Chicken Suya",
    pricing: { currency: "NGN", basePrice: 6500, finalPrice: 6500 },
    category: "Chicken",
    badge: "Smoky Flavor",
    spiceLevel: "Hot",
    description: "Boneless slices of chicken thighs heavily rolled in northern dry peanut Yaji pepper, skewered and charred over red-hot coals.",
    ingredients: ["Boneless Chicken Thighs", "Yaji Powder Spice", "Peanut Cake Base", "Vegetable Oil Coating"],
    allergens: ["Peanuts"],
    relatedProducts: ["chick_001", "chick_005"]
  },
  {
    id: "chick_004",
    slug: "stewed-chicken-breasts",
    name: "Stewed Chicken Breast Cutlet",
    pricing: { currency: "NGN", basePrice: 4200, finalPrice: 4200 },
    category: "Chicken",
    description: "Lean, boneless chicken breast fillet boiled and lightly seared, then simmered slowly inside a smooth local red tomato stew drop.",
    ingredients: ["Chicken Breast Fillet", "Fried Tomato Stew Base", "Onions", "Herbs"],
    allergens: [],
    spiceLevel: "Mild",
    relatedProducts: ["chick_001", "chick_002"]
  },
  {
    id: "chick_005",
    slug: "bbq-glazed-chicken-wings-naija",
    name: "Honey Shombo Chicken Wings",
    pricing: { currency: "NGN", basePrice: 5800, finalPrice: 5800 },
    category: "Chicken",
    badge: "Lounge Favorite",
    spiceLevel: "Medium",
    description: "6 pieces of jumbo chicken wings grilled and coated in a sticky sauce made from local honey combined with crushed red shombo peppers.",
    ingredients: ["Jumbo Wings", "Honey Glaze", "Shombo Chili Red", "Garlic Powder"],
    allergens: [],
    relatedProducts: ["chick_003", "chick_006"]
  },
  {
    id: "chick_006",
    slug: "local-chicken-peppersoup-pot",
    name: "Spicy Chicken Peppersoup",
    pricing: { currency: "NGN", basePrice: 5500, finalPrice: 5500 },
    category: "Chicken",
    spiceLevel: "Hot",
    description: "A restorative, highly spicy local watery broth brewed using hard country chicken chunks, ehu native seeds, and fresh scent leaves.",
    ingredients: ["Country Chicken Cuts", "Ehu Native Spices", "Uziza Seeds", "Fresh Scent Leaves", "Habanero Juice"],
    allergens: [],
    relatedProducts: ["chick_002", "chick_008"]
  },
  {
    id: "chick_007",
    slug: "crispy-gizzard-dodo-skewers",
    name: "Gizdodo Skewers (2 Sticks)",
    pricing: { currency: "NGN", basePrice: 3800, finalPrice: 3800 },
    category: "Chicken",
    badge: "Chop-Chop",
    description: "Skewered sticks alternating between crunchy deep-fried chicken gizzards and sweet, oily fried ripe plantain cubes, brushed with pepper sauce.",
    ingredients: ["Chicken Gizzards", "Ripe Plantains", "Red Bell Pepper Glaze"],
    allergens: [],
    spiceLevel: "Medium",
    relatedProducts: ["chick_002", "chick_005"]
  },
  {
    id: "chick_009",
    slug: "whole-grilled-spiced-chicken",
    name: "Whole Charcoal Roasted Chicken",
    pricing: { currency: "NGN", basePrice: 16500, finalPrice: 16500 },
    category: "Chicken",
    badge: "Family Size",
    description: "A whole entire chicken split-open, marinated for 24 hours in a heavy garlic, ginger, and chili paste, then slowly roasted over charcoal.",
    ingredients: ["Whole Chicken", "Chili Paste", "Ginger Extract", "Garlic Purée", "Vegetable Oil Rub"],
    allergens: [],
    spiceLevel: "Medium",
    relatedProducts: ["chick_001", "chick_003"]
  },
  {
    id: "chick_010",
    slug: "buttermilk-fried-chicken-strips",
    name: "Crunchy Chicken Strips & Dip",
    pricing: { currency: "NGN", basePrice: 4800, finalPrice: 4800 },
    category: "Chicken",
    description: "Boneless chicken breast strips dipped inside seasoned buttermilk flour batter and fried crispy, served with a side of local spicy mayonnaise.",
    ingredients: ["Chicken Breast Strips", "Buttermilk Coating", "Wheat Flour", "Spicy Garlic Mayonnaise"],
    allergens: ["Gluten", "Milk", "Egg"],
    spiceLevel: "Mild",
    relatedProducts: ["chick_001", "chick_005"]
  },


  //Dessert
  {
    id: "dessert_001",
    slug: "puff-puff-chocolate-injection",
    name: "Gourmet Chocolate-Injected Puff Puff",
    shortDescription: "Sweet fried dough balls injected with warm, premium milk chocolate.",
    description: "Our modern take on a local classic: 6 pieces of soft, chewy, perfectly spherical yeast dough balls fried golden brown, injected individually with rich warm milk chocolate and dusted lightly with powdered sugar.",
    category: "Desserts",
    badge: "Street-Style Sweet",
    tags: ["Dough", "Sweet", "Puff Puff", "Chocolate", "Warm"],
    pricing: { currency: "NGN", basePrice: 3500, finalPrice: 3500 },
    preparationTime: "8 mins",
    ingredients: ["Flour", "Yeast", "Sugar", "Nutmeg", "Milk Chocolate Filling", "Vegetable Oil"],
    removeIngredients: ["Chocolate Filling Injection"],
    allergens: ["Gluten", "Milk"],
    spiceLevel: "Mild",
    variants: [
      { id: "six", name: "6 Piece Box", price: 0 },
      { id: "twelve", name: "12 Piece Sharing Box", price: 2800 }
    ],
    extras: [
      { id: "caramel", name: "Add Caramel Dipping Sauce", price: 700 },
      { id: "icecream", name: "Add Scoop of Vanilla Ice Cream", price: 1200 }
    ],
    rating: { average: 4.9, count: 520 },
    frequentlyBoughtTogether: ["drink_003", "main_002"],
    relatedProducts: ["dessert_002", "dessert_006"]
  },
  {
    id: "dessert_002",
    slug: "sweet-chin-chin-parfait",
    name: "Crunchy Chin Chin Parfait",
    pricing: { currency: "NGN", basePrice: 4200, finalPrice: 4200 },
    category: "Desserts",
    badge: "Crunchy Treat",
    description: "Layers of smooth, creamy Greek vanilla yogurt interlined with crispy, miniature sweet fried chin-chin bits and fresh strawberries.",
    ingredients: ["Vanilla Yogurt", "Mini Chin-Chin Flakes", "Butter", "Strawberries"],
    allergens: ["Gluten", "Milk", "Egg"],
    relatedProducts: ["dessert_001", "dessert_007"]
  },
  {
    id: "dessert_003",
    slug: "sweet-coconut-candy-tart",
    name: "Sticky Coconut Candy Tart",
    pricing: { currency: "NGN", basePrice: 4500, finalPrice: 4500 },
    category: "Desserts",
    description: "A buttery pastry crust filled with caramelized grated coconut flakes cooked in dark brown sugar syrup.",
    ingredients: ["Fresh Coconut Flakes", "Brown Sugar", "Pastry Shell", "Butter"],
    allergens: ["Gluten", "Milk"],
    relatedProducts: ["dessert_005", "dessert_009"]
  },
  {
    id: "dessert_004",
    slug: "plantain-moin-moin-cake",
    name: "Sweet Plantain Pudding (Epiti)",
    pricing: { currency: "NGN", basePrice: 3000, finalPrice: 3000 },
    category: "Desserts",
    description: "A traditional Western Nigerian dessert baked from overripe sweet plantains mixed with cornmeal, palm oil, and ginger.",
    ingredients: ["Overripe Plantains", "Cornmeal Flour", "Light Palm Oil", "Ginger Extract"],
    allergens: [],
    relatedProducts: ["dessert_006", "dessert_009"]
  },
  {
    id: "dessert_005",
    slug: "yam-flour-pancake-honey",
    name: "Sweet Elubo (Yam) Pancakes",
    pricing: { currency: "NGN", basePrice: 3800, finalPrice: 3800 },
    category: "Desserts",
    description: "Three soft, earthy pancakes made from premium yam flour, served warm and drenched in wild local honey.",
    ingredients: ["Yam Flour Flour", "Eggs", "Milk", "Wild Honey Drizzle"],
    allergens: ["Gluten", "Milk", "Egg"],
    relatedProducts: ["dessert_001", "dessert_002"]
  },
  {
    id: "dessert_006",
    slug: "warm-agege-bread-butter-pudding",
    name: "Agege Bread & Butter Pudding",
    pricing: { currency: "NGN", basePrice: 4800, finalPrice: 4800 },
    category: "Desserts",
    badge: "Fusion Special",
    description: "A sweet custard pudding made by baking thick cubes of dense local Agege bread soaked in sweet vanilla cream and nutmeg spiced raisins.",
    ingredients: ["Agege Bread", "Heavy Cream", "Sugar", "Nutmeg", "Raisins"],
    allergens: ["Gluten", "Milk", "Egg"],
    relatedProducts: ["dessert_001", "dessert_007"]
  },
  {
    id: "dessert_008",
    slug: "sweet-fried-asa-plantain-slices",
    name: "Cinnamon Glazed Dodo Ikire",
    pricing: { currency: "NGN", basePrice: 3200, finalPrice: 3200 },
    category: "Desserts",
    description: "Traditional sweet, dark, round fried palm-oil plantain delicacies modernly rolled in sugar and fine cinnamon dust.",
    ingredients: ["Overripe Plantain Skins", "Palm Oil Essence", "Cinnamon", "Sugar Glaze"],
    allergens: [],
    relatedProducts: ["dessert_004", "dessert_010"]
  },
  {
    id: "dessert_009",
    slug: "zobo-hibiscus-infused-sorbet",
    name: "Zobo Poached Pear Sorbet",
    pricing: { currency: "NGN", basePrice: 4600, finalPrice: 4600 },
    category: "Desserts",
    badge: "Zesty & Cold",
    description: "A elegant dessert featuring fresh pears slow-poached in dark spiced hibiscus juice, served cold over dairy-free lime sorbet.",
    ingredients: ["Zobo Extract", "Fresh Pears", "Cloves", "Ginger", "Lime Sorbet"],
    allergens: [],
    relatedProducts: ["dessert_003", "dessert_004"]
  },
  {
    id: "dessert_010",
    slug: "gourmet-meat-pie-tartlets",
    name: "Sweet Milk-Pie Tartlets",
    pricing: { currency: "NGN", basePrice: 3900, finalPrice: 3900 },
    category: "Desserts",
    description: "Crispy Nigerian shortcrust pastry shells loaded internally with sweet, thick sweetened condensed milk cream filling.",
    ingredients: ["Flour", "Margarine", "Condensed Milk Paste", "Vanilla Extract"],
    allergens: ["Gluten", "Milk"],
    relatedProducts: ["dessert_002", "dessert_006"]
  },
  //Drinks

  {
    id: "drink_001",
    slug: "premium-zobo-drink",
    name: "House Spiced Zobo Infusion",
    shortDescription: "Chilled dark hibiscus tea brewed heavily with ginger, cloves, and pineapple.",
    description: "Our legendary zobo is crafted by boiling organic dried red roselle (hibiscus) leaves with plenty crushed ginger root, sweet cloves, alligator pepper, and ripe pineapple peels, served ice-cold with orange slice accents.",
    category: "Drinks",
    badge: "100% Organic",
    tags: ["Drink", "Cold", "Hibiscus", "Ginger", "Local"],
    pricing: { currency: "NGN", basePrice: 2000, finalPrice: 2000 },
    preparationTime: "3 mins",
    ingredients: ["Dried Hibiscus Leaves", "Ginger Root", "Cloves", "Pineapple Juices", "Sugar Syrup"],
    removeIngredients: ["Sugar Syrup Injection"],
    allergens: [],
    spiceLevel: "Medium",
    variants: [
      { id: "glass", name: "Standard Mason Jar", price: 0 },
      { id: "bottle", name: "Takeaway 1-Litre Bottle", price: 2500 }
    ],
    extras: [{ id: "rum", name: "Add Shot of Local White Rum", price: 1500 }],
    rating: { average: 4.9, count: 489 },
    frequentlyBoughtTogether: ["grill_001", "main_002"],
    relatedProducts: ["drink_002", "drink_006"]
  },
  {
    id: "drink_002",
    slug: "classic-lagos-chapman",
    name: "Classic Lagos Chapman",
    pricing: { currency: "NGN", basePrice: 3200, finalPrice: 3200 },
    category: "Drinks",
    badge: "Party Classic",
    description: "The ultimate signature mix of Fanta, Sprite, drops of Angostura aromatic bitters, and blackcurrant syrup, heavy on cucumber toppings.",
    ingredients: ["Fanta", "Sprite", "Angostura Bitters Blend", "Blackcurrant Cordial", "Cucumber", "Lemon"],
    allergens: [],
    relatedProducts: ["drink_001", "drink_004"]
  },
  {
    id: "drink_003",
    slug: "sweet-creamy-kunu-aya",
    name: "Chilled Tiger-Nut Milk (Kunu Aya)",
    pricing: { currency: "NGN", basePrice: 2800, finalPrice: 2800 },
    category: "Drinks",
    badge: "Energy Drink",
    description: "A rich, milky dairy-free northern traditional drink blended naturally from raw tiger nuts, dates, and a little ginger.",
    ingredients: ["Tiger Nuts (Aya)", "Dried Dates (Dabino)", "Fresh Ginger", "Water"],
    allergens: [],
    relatedProducts: ["drink_007", "drink_010"]
  },
  {
    id: "drink_004",
    slug: "palm-wine-tapped-fresh",
    name: "Fresh Tapped Palm Wine (Nkwu)",
    pricing: { currency: "NGN", basePrice: 3500, finalPrice: 3500 },
    category: "Drinks",
    badge: "Alcoholic",
    description: "Pure, unadulterated sweet palm sap tapped fresh, served chilled inside traditional calabash cups with an effervescent foam head.",
    ingredients: ["Natural White Palm Sap Juice"],
    allergens: [],
    relatedProducts: ["drink_001", "drink_005"]
  },
  {
    id: "drink_005",
    slug: "ogogoro-craft-cocktail-shot",
    name: "Craft Palm-Spirit (Ogogoro) Cocktail",
    pricing: { currency: "NGN", basePrice: 4500, finalPrice: 4500 },
    category: "Drinks",
    badge: "Strong Drink",
    description: "A double shot of premium triple-distilled local palm wine spirit shaken up with lime juice and lemongrass syrup.",
    ingredients: ["Distilled Palm Spirit", "Lime Juice", "Lemongrass Infusion"],
    allergens: [],
    relatedProducts: ["drink_004", "drink_009"]
  },
  {
    id: "drink_006",
    slug: "fresh-sugar-cane-ginger-juice",
    name: "Cold-Pressed Sugarcane Ginger Juice",
    pricing: { currency: "NGN", basePrice: 2500, finalPrice: 2500 },
    category: "Drinks",
    spiceLevel: "Medium",
    description: "Pure juice extracted straight from northern sugarcane stalks, spiked up with fresh hot ginger roots over ice.",
    ingredients: ["Raw Sugarcane Stalk Juice", "Ginger Extract"],
    allergens: [],
    relatedProducts: ["drink_001", "drink_003"]
    },
  {
    id: "drink_007",
    slug: "creamy-sweet-kunu-zaki",
    name: "Millet-Spice Drink (Kunu Zaki)",
    pricing: { currency: "NGN", basePrice: 2200, finalPrice: 2200 },
    category: "Drinks",
    description: "A traditional liquid cereal beverage made from fermented millet grain flour, flavored natively with sweet potatoes and cloves.",
    ingredients: ["Millet Seeds", "Sweet Potatoes", "Cloves (Kanumfari)", "Ginger"],
    allergens: [],
    relatedProducts: ["drink_003", "drink_006"]
  },
  {
    id: "drink_008",
    slug: "star-lager-beer-cold",
    name: "Star Larger Beer (Cold Bottle)",
    pricing: { currency: "NGN", basePrice: 2000, finalPrice: 2000 },
    category: "Drinks",
    badge: "Ice Cold Bar",
    description: "Nigeria's famous cold brewed premium lager beer, crispy on the tongue with a clean bitter finish.",
    ingredients: ["Water", "Sorghum", "Malted Barley", "Hops"],
    allergens: ["Gluten"],
    relatedProducts: ["drink_004", "drink_009"]
  },
  {
    id: "drink_009",
    slug: "malta-guinness-can",
    name: "Malta Guinness (Premium Malt)",
    pricing: { currency: "NGN", basePrice: 1500, finalPrice: 1500 },
    category: "Drinks",
    description: "A thick, classic non-alcoholic dark malt beverage packed with energy, loaded with B-vitamins, served chilled.",
    ingredients: ["Water", "Sugar", "Malted Sorghum", "Malted Barley"],
    allergens: ["Gluten"],
    relatedProducts: ["drink_002", "drink_010"]
  },
  {
    id: "drink_010",
    slug: "peak-milk-milo-dinosaur-shake",
    name: "Classic Bournvita/Milo Cream Shake",
    pricing: { currency: "NGN", basePrice: 3800, finalPrice: 3800 },
    category: "Drinks",
    badge: "Childhood Nostalgia",
    description: "Rich chocolate Milo powder blended with liquid Peak milk and vanilla cream, heavily topped with thick scoops of extra dry Milo dust.",
    ingredients: ["Milo Chocolate Powder", "Peak Liquid Milk", "Vanilla Ice Cream Base"],
    allergens: ["Milk", "Gluten"],
    relatedProducts: ["drink_003", "drink_007"]
  },
  {
    id: "drink_001",
    slug: "coca-cola-60cl",
    name: "Coca-Cola (60cl PET)",
    shortDescription: "Chilled classic carbonated soft drink.",
    description: "The classic refreshing taste of Coca-Cola, served ice-cold in the popular 60cl enlarged bottle size to maximize your meal satisfaction.",
    category: "Drinks",
    badge: "Best Seller",
    tags: ["Soda", "Chilled", "Sweet"],
    pricing: { currency: "NGN", basePrice: 600, finalPrice: 600 },
    preparationTime: "2 mins",
    ingredients: ["Carbonated Water", "Sugar", "Caramel Color", "Caffeine"],
    removeIngredients: [],
    allergens: [],
    spiceLevel: "Mild",
    variants: [{ id: "regular", name: "60cl Cold Bottle", price: 0 }],
    extras: [{ id: "ice-cup", name: "Add Cup of Clean Ice", price: 200 }],
    rating: { average: 4.9, count: 2150 },
    frequentlyBoughtTogether: ["rice_001", "past_001"],
    relatedProducts: ["drink_002", "drink_003"]
  },
  {
    id: "drink_002",
    slug: "fanta-orange-60cl",
    name: "Fanta Orange (60cl PET)",
    pricing: { currency: "NGN", basePrice: 600, finalPrice: 600 },
    category: "Drinks",
    description: "Bright, bubbly, and intensely fruity orange soda served completely frosty.",
    ingredients: ["Carbonated Water", "Sugar", "Orange Juice Concentrate", "Citric Acid"],
    allergens: [],
    spiceLevel: "Mild",
    relatedProducts: ["drink_001", "drink_003"]
  },
  {
    id: "drink_003",
    slug: "sprite-60cl",
    name: "Sprite Lemon-Lime (60cl PET)",
    pricing: { currency: "NGN", basePrice: 600, finalPrice: 600 },
    category: "Drinks",
    description: "Crisp, clean, lemon-lime flavored carbonated soft drink that pairs excellently with spicy jollof.",
    ingredients: ["Carbonated Water", "Sugar", "Citric Acid", "Natural Lemon & Lime Flavors"],
    allergens: [],
    spiceLevel: "Mild",
    relatedProducts: ["drink_001", "drink_002"]
  },
  {
    id: "drink_004",
    slug: "eva-premium-water",
    name: "Eva Premium Table Water (75cl)",
    pricing: { currency: "NGN", basePrice: 400, finalPrice: 400 },
    category: "Drinks",
    badge: "Pure Hydration",
    description: "Deeply chilled, crisp, and refreshing purified table water.",
    ingredients: ["Purified Spring Water"],
    allergens: [],
    spiceLevel: "Mild",
    relatedProducts: ["drink_001", "drink_005"]
  },
  {
    id: "drink_005",
    slug: "hollandia-yoghurt-strawberry",
    name: "Hollandia Yoghurt Strawberry (31.5cl)",
    pricing: { currency: "NGN", basePrice: 1200, finalPrice: 1200 },
    category: "Drinks",
    badge: "Creamy Choice",
    description: "A smooth, refreshing, and rich drinking yogurt bursting with sweet strawberry flavor.",
    ingredients: ["Water", "Milk Solids", "Sugar", "Stabilizer", "Strawberry Flavor", "Yogurt Cultures"],
    allergens: ["Milk"],
    spiceLevel: "Mild",
    relatedProducts: ["drink_006", "drink_011"]
  },
  {
    id: "drink_006",
    slug: "fanyogo-yogurt-drink-pouch",
    name: "FanYogo Yogurt Drink Pouch",
    pricing: { currency: "NGN", basePrice: 800, finalPrice: 800 },
    category: "Drinks",
    description: "The classic, creamy ambient yogurt snack loved across Nigeria, served chilled or semi-frozen.",
    ingredients: ["Water", "Skimmed Milk Powder", "Sugar", "Lactic Acid", "Yogurt Culture"],
    allergens: ["Milk"],
    spiceLevel: "Mild",
    relatedProducts: ["drink_005", "drink_012"]
  },
  {
    id: "drink_007",
    slug: "creamy-vanilla-milkshake",
    name: "Classic Vanilla Milkshake",
    pricing: { currency: "NGN", basePrice: 3500, finalPrice: 3500 },
    category: "Drinks",
    badge: "House Dessert",
    description: "Rich vanilla bean ice cream blended smooth with fresh full cream milk and topped with light whipped cream.",
    ingredients: ["Vanilla Ice Cream", "Full Cream Milk", "Whipped Cream Syrup"],
    allergens: ["Milk"],
    spiceLevel: "Mild",
    relatedProducts: ["drink_008", "drink_013"]
  },
  {
    id: "drink_008",
    slug: "milo-chocolate-milkshake",
    name: "Gourmet Milo Dinosaur Milkshake",
    pricing: { currency: "NGN", basePrice: 4200, finalPrice: 4200 },
    category: "Drinks",
    badge: "Nostalgic Favorite",
    description: "Creamy chocolate milkshake blended with local Milo powder, topped with a mountain of dry, crunchy Milo malt granules.",
    ingredients: ["Chocolate Ice Cream", "Milo Powder Extract", "Full Cream Milk", "Milo Crunchy Topping"],
    allergens: ["Milk", "Gluten"],
    spiceLevel: "Mild",
    relatedProducts: ["drink_007", "drink_014"]
  },
  {
    id: "drink_009",
    slug: "five-alive-pulpy-orange",
    name: "5Alive Pulpy Orange (85cl)",
    pricing: { currency: "NGN", basePrice: 1800, finalPrice: 1800 },
    category: "Drinks",
    description: "Naturally refreshing fruit juice drink containing real orange juice extracts and juicy pulp you can feel.",
    ingredients: ["Water", "Orange Juice Concentrate", "Orange Pulp", "Sugar"],
    allergens: [],
    spiceLevel: "Mild",
    relatedProducts: ["drink_001", "drink_004"]
  },
  {
    id: "drink_010",
    slug: "chapman-mocktail-mix",
    name: "Classic Nigerian Chapman",
    pricing: { currency: "NGN", basePrice: 2800, finalPrice: 2800 },
    category: "Drinks",
    badge: "Signature Mocktail",
    description: "The definitive Nigerian lounge drink. A refreshing signature mix of bitters, blackcurrant cordial, Fanta, and Sprite, garnished with cucumber slices.",
    ingredients: ["Fanta", "Sprite", "Angostura Bitters", "Blackcurrant Syrup", "Fresh Cucumber Slices"],
    allergens: [],
    spiceLevel: "Mild",
    relatedProducts: ["drink_001", "drink_018"]
  },
  {
    id: "drink_011",
    slug: "hollandia-yoghurt-exotic",
    name: "Hollandia Yoghurt Exotic Fruit (31.5cl)",
    pricing: { currency: "NGN", basePrice: 1200, finalPrice: 1200 },
    category: "Drinks",
    description: "Creamy drinking yogurt mixed with an exotic, tropical blend of fruit flavors for a sweet, refreshing kick.",
    ingredients: ["Water", "Milk Solids", "Sugar", "Tropical Fruit Flavors Blend"],
    allergens: ["Milk"],
    spiceLevel: "Mild",
    relatedProducts: ["drink_005", "drink_012"]
  },
  {
    id: "drink_012",
    slug: "viju-milk-drink-strawberry",
    name: "Viju Milk Drink Strawberry (50cl)",
    pricing: { currency: "NGN", basePrice: 900, finalPrice: 900 },
    category: "Drinks",
    description: "A popular, sweet milk-and-juice compound drink bursting with bright strawberry aroma.",
    ingredients: ["Water", "Skimmed Milk Powder", "Refined Sugar", "Strawberry Juice Concentrate"],
    allergens: ["Milk"],
    spiceLevel: "Mild",
    relatedProducts: ["drink_006", "drink_011"]
  },
  {
    id: "drink_013",
    slug: "cookies-cream-milkshake",
    name: "Oreo Cookies & Cream Milkshake",
    pricing: { currency: "NGN", basePrice: 4000, finalPrice: 4000 },
    category: "Drinks",
    badge: "Premium Treat",
    description: "Thick vanilla ice cream blended with crushed chocolate sandwich cookies, drizzled heavily with chocolate syrup.",
    ingredients: ["Vanilla Ice Cream", "Oreo Cookie Crumbly Bits", "Full Cream Milk", "Chocolate Syrup"],
    allergens: ["Milk", "Gluten", "Soy"],
    spiceLevel: "Mild",
    relatedProducts: ["drink_007", "drink_014"]
  },
  {
    id: "drink_014",
    slug: "salted-caramel-milkshake",
    name: "Sweet Salted Caramel Milkshake",
    pricing: { currency: "NGN", basePrice: 3800, finalPrice: 3800 },
    category: "Drinks",
    description: "Decadent cream milkshake blended with buttery caramel syrup and a precise pinch of sea salt.",
    ingredients: ["Vanilla Bean Ice Cream", "Full Cream Milk", "Salted Caramel Sauce Injection"],
    allergens: ["Milk"],
    spiceLevel: "Mild",
    relatedProducts: ["drink_007", "drink_013"]
  },
  {
    id: "drink_015",
    slug: "maltina-can",
    name: "Maltina Classic (33cl Can)",
    pricing: { currency: "NGN", basePrice: 800, finalPrice: 800 },
    category: "Drinks",
    badge: "Classic Non-Alcoholic",
    description: "The rich, smooth, and nourishing premium malt drink packed with essential vitamins.",
    ingredients: ["Water", "Malted Barley", "Sorghum", "Sucrose", "Hops Extract", "Vitamins Mix"],
    allergens: ["Gluten"],
    spiceLevel: "Mild",
    relatedProducts: ["drink_016", "drink_001"]
  },
  {
    id: "drink_016",
    slug: "amstel-malta-can",
    name: "Amstel Malta (33cl Can)",
    pricing: { currency: "NGN", basePrice: 850, finalPrice: 850 },
    category: "Drinks",
    description: "A premium malt drink with less sugar formulation, offering a rich, distinctive, and classy taste profile.",
    ingredients: ["Water", "Malted Barley", "Sorghum", "Sucrose", "Hops"],
    allergens: ["Gluten"],
    spiceLevel: "Mild",
    relatedProducts: ["drink_015", "drink_001"]
  },
  {
    id: "drink_017",
    slug: "house-zobo-drink",
    name: "Spiced Hibiscus Zobo (50cl)",
    pricing: { currency: "NGN", basePrice: 1500, finalPrice: 1500 },
    category: "Drinks",
    badge: "100% Organic",
    description: "Traditional local drink brewed from deep red roselle/hibiscus leaves, packed with crushed ginger, garlic, cloves, pineapple peels, and sweetened naturally.",
    ingredients: ["Hibiscus Calyces Extracts", "Fresh Ginger Root", "Cloves (Kanafuru)", "Pineapple Juice Extract"],
    allergens: [],
    spiceLevel: "Medium",
    relatedProducts: ["drink_010", "drink_018"]
  },
  {
    id: "drink_018",
    slug: "palm-wine-mocktail",
    name: "Sweet Palm Wine Mocktail",
    pricing: { currency: "NGN", basePrice: 3200, finalPrice: 3200 },
    category: "Drinks",
    badge: "Local Twist",
    description: "A completely non-alcoholic, pasteurized take on fresh palm wine, muddled beautifully with lime juice and mint leaves.",
    ingredients: ["De-alcoholized Palm Wine Base", "Fresh Lime Slices", "Mint Leaves Extract", "Simple Syrup"],
    allergens: [],
    spiceLevel: "Mild",
    relatedProducts: ["drink_010", "drink_017"]
  },
  {
    id: "drink_019",
    slug: "fearless-energy-drink",
    name: "Fearless Energy Classic (50cl)",
    pricing: { currency: "NGN", basePrice: 700, finalPrice: 700 },
    category: "Drinks",
    description: "Quick energy boost beverage packed with active caffeine and taurine to revitalize your stamina instantly.",
    ingredients: ["Carbonated Water", "Sugar", "Taurine", "Caffeine", "B-Vitamins"],
    allergens: [],
    spiceLevel: "Mild",
    relatedProducts: ["drink_001", "drink_020"]
  },
  {
    id: "drink_020",
    slug: "pepsi-60cl-pet",
    name: "Pepsi Cola (60cl PET)",
    pricing: { currency: "NGN", basePrice: 600, finalPrice: 600 },
    category: "Drinks",
    description: "Maximum refreshment offering a cool, citrus-forward cola burst to wash down heavy proteins perfectly.",
    ingredients: ["Carbonated Water", "High Fructose Corn Syrup", "Caramel Color", "Phosphoric Acid"],
    allergens: [],
    spiceLevel: "Mild",
    relatedProducts: ["drink_001", "drink_019"]
  }

  //Pasta
]
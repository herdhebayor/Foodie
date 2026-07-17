//waffle not done
export const data = {
  products: [
    {
      id: "food_101",
      slug: "chocolate-cake-1",
      name: "Chocolate Cake Slice",
      shortDescription: "Rich, moist chocolate layer cake with smooth ganache.",
      description:
        "Our Chocolate Cake Slice is a rich, moist chocolate layer cake covered in premium chocolate ganache. Prepared fresh daily using quality pastry ingredients, it's a favourite among regular dessert lovers and pairs beautifully with a hot coffee or cold drink.",
      category: {
        id: "cat_dessert",
        name: "Dessert",
      },
      pricing: {
        currency: "NGN",
        basePrice: 3800,
        finalPrice: 3800,
      },
      images: ["/images/chocolate_cake_slice.jpg", "/images/dessert-1-2.jpg"],
      badges: ["Popular"],
      availability: {
        inStock: true,
        quantityAvailable: 23,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "variant_slice",
          name: "Single Slice",
          price: 3800,
        },
        {
          id: "variant_whole",
          name: "Whole Cake (8 Slices)",
          price: 25000,
        },
      ],
      extras: [
        {
          id: "extra_ice_cream",
          name: "Vanilla Ice Cream Scoop",
          price: 1200,
        },
        {
          id: "extra_whipped_cream",
          name: "Whipped Cream",
          price: 600,
        },
      ],
      customizations: {
        servedTemperature: ["Room Temperature", "Chilled"],
        removeIngredients: [],
      },
      ingredients: [
        "Flour",
        "Egg",
        "Milk",
        "Butter",
        "Baking Soda",
        "Cocoa Powder",
        "Chocolate Ganache",
      ],
      nutrition: {
        servingSize: "150g",
        calories: 420,
        protein: 5,
        carbs: 58,
        fat: 20,
        sugar: 39,
        fiber: 2,
        sodium: 210,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten", "Egg"],
      prepTime: "5 mins",
      reviewStats: {
        averageRating: 4.2,
        totalReviews: 278,
      },
      reviews: [
        {
          id: "rev_7_0",
          user: "Ibrahim O.",
          rating: 4,
          comment:
            "Solid option if you need a quick sweet treat. Ganache is smooth and layers are soft.",
          date: "2026-05-27",
        },
        {
          id: "rev_7_1",
          user: "Femi D.",
          rating: 3,
          comment:
            "It tasted fine, but the sponge cake layer was slightly dry on the edges.",
          date: "2026-03-05",
        },
        {
          id: "rev_7_2",
          user: "Kunle E.",
          rating: 5,
          comment:
            "Really impressed with the presentation and taste. Deep chocolate flavor that is worth every naira.",
          date: "2026-03-09",
        },
      ],
      metrics: {
        soldCount: 317,
        wishlistCount: 1199,
        views: 14031,
        cartAdds: 9428,
        trendingScore: 76,
      },
      recommendation: {
        score: 74,
        reason: "Frequently ordered item",
      },
      frequentlyBoughtTogether: [
        "Burger",
        "Pizza",
        "Snacks and Sides",
        "Drink",
      ],
      relatedProducts: [],
      seo: {
        metaTitle: "Chocolate Cake Slice | Foodie",
        metaDescription:
          "Order rich and moist chocolate layer cake with smooth ganache on Foodie app.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-08T23:12:00",
    },
    {
      id: "food_102",
      slug: "chin-chin-3",
      name: "Crunchy Chin Chin",
      shortDescription: "Crunchy sweet fried pastry bite-sized cubes.",
      description:
        "Our Crunchy Chin Chin features sweet, bite-sized pastry cubes fried to a perfect crisp. Made using high-quality local ingredients, it is a timeless Nigerian snack favorite that pairs beautifully with cold drinks or travels well for on-the-go snacking.",
      category: {
        id: "cat_snacks",
        name: "Snacks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 1500,
        finalPrice: 1500,
      },
      images: ["/images/chin-chin.jpg", "/products/chin-chin-3-2.jpg"],
      badges: ["New"],
      availability: {
        inStock: true,
        quantityAvailable: 42,
      },
      variants: [
        {
          id: "size_mini",
          name: "Mini Pack (150g)",
          price: 1500,
        },
        {
          id: "size_medium",
          name: "Medium Pack (350g)",
          price: 3000,
        },
        {
          id: "size_family",
          name: "Family Jar (1kg)",
          price: 7500,
        },
      ],
      extras: [],
      customizations: {
        removeIngredients: [],
      },
      ingredients: ["Flour", "Sugar", "Egg", "Vegetable Oil", "Milk", "Nutmeg"],
      nutrition: {
        servingSize: "50g",
        calories: 240,
        protein: 4,
        carbs: 34,
        fat: 10,
        sugar: 12,
        fiber: 1,
        sodium: 95,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Gluten", "Egg", "Milk"],
      prepTime: "5 mins",
      reviewStats: {
        averageRating: 4.0,
        totalReviews: 237,
      },
      frequentlyBoughtTogether: ["Drink"],
      relatedProducts: [],
      reviews: [
        {
          id: "rev_3_0",
          user: "Uche K.",
          rating: 5,
          comment:
            "This was absolutely delicious, perfectly crunchy and the jar size was generous.",
          date: "2026-01-16",
        },
        {
          id: "rev_3_1",
          user: "Musa B.",
          rating: 5,
          comment:
            "Exceeded my expectations. The subtle nutmeg flavor is rich and tastes homemade.",
          date: "2026-05-08",
        },
        {
          id: "rev_3_2",
          user: "Bayo C.",
          rating: 3,
          comment:
            "Delivery took longer than expected but the chin chin itself is quite nice.",
          date: "2026-05-25",
        },
        {
          id: "rev_3_3",
          user: "Kunle F.",
          rating: 3,
          comment:
            "The pack size was a little smaller than I expected, but the crispness was great.",
          date: "2026-05-09",
        },
      ],
      metrics: {
        soldCount: 3546,
        wishlistCount: 877,
        views: 49644,
        cartAdds: 5775,
      },
      seo: {
        metaTitle: "Crunchy Nigerian Chin Chin | Foodie",
        metaDescription:
          "Order fresh, crunchy sweet fried chin chin snacks online via the Foodie app.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-08T23:13:00",
    },
    {
      id: "food_103",
      slug: "glazed-doughnut-6",
      name: "Classic Glazed Doughnut",
      shortDescription: "Soft doughnut coated in a sweet sugar glaze.",
      description:
        "Our Classic Glazed Doughnut is a soft, fluffy yeast-risen pastry coated in a sweet, translucent sugar glaze — the perfect companion for your morning coffee or midday sweet craving.",
      category: {
        id: "cat_snacks",
        name: "Snacks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 3200,
        finalPrice: 3200,
      },
      images: [
        "/images/glazed-doughnut.jpg",
        "/products/glazed-doughnut-6-2.jpg",
      ],
      badges: ["Featured"],
      variants: [
        {
          id: "qty_single",
          name: "Single Doughnut",
          price: 3200,
        },
        {
          id: "qty_half_dozen",
          name: "Box of 6",
          price: 15000,
        },
      ],
      extras: [
        {
          id: "extra_glaze",
          name: "Extra Caramel Drizzle",
          price: 400,
        },
      ],
      customizations: {
        removeIngredients: [],
      },
      ingredients: [
        "Flour",
        "Sugar",
        "Yeast",
        "Butter",
        "Eggs",
        "Milk",
        "Salt",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 420,
        protein: 12,
        carbs: 48,
        fat: 16,
        sugar: 6,
        fiber: 8,
        sodium: 520,
      },
      availability: {
        inStock: true,
        quantityAvailable: 39,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten", "Egg"],
      prepTime: "5 mins",
      reviewStats: {
        averageRating: 4.5,
        totalReviews: 81,
      },
      reviews: [
        {
          id: "rev_6_0",
          user: "Ibrahim C.",
          rating: 5,
          comment:
            "This was absolutely delicious, arrived fresh and the texture was incredibly pillowy soft.",
          date: "2026-01-20",
        },
        {
          id: "rev_6_1",
          user: "Emeka S.",
          rating: 3,
          comment:
            "The glaze melted a bit in transit due to the heat, but the flavor profile was nice.",
          date: "2026-05-08",
        },
        {
          id: "rev_6_2",
          user: "Segun V.",
          rating: 5,
          comment:
            "Perfect sweetness level. Goes amazingly well with a hot cup of black coffee.",
          date: "2026-05-19",
        },
        {
          id: "rev_6_3",
          user: "Femi W.",
          rating: 5,
          comment:
            "One of the best pastries I've had delivered this month. Packaging kept the glaze beautifully intact.",
          date: "2026-02-11",
        },
      ],
      metrics: {
        soldCount: 3322,
        wishlistCount: 278,
        views: 33220,
        cartAdds: 4717,
      },
      frequentlyBoughtTogether: ["Burger", "Drink"],
      relatedProducts: [],
      seo: {
        metaTitle: "Classic Glazed Doughnut | Foodie",
        metaDescription:
          "Order pillowy soft, sugar-glazed doughnuts fresh from the bakery on the Foodie app.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-08T23:14:00",
    },
    {
      id: "food_104",
      slug: "veggie-wrap-2",
      name: "Healthy Veggie Wrap",
      shortDescription:
        "Wholesome vegetable patty wrapped fresh with crisp garden greens.",
      description:
        "A wholesome vegetable patty served with fresh avocado, lettuce, tomatoes, cucumber, and a light herb mayo wrapped inside a soft, toasted tortilla flatbread.",
      category: {
        id: "cat_wrap",
        name: "Wraps",
      },
      pricing: {
        currency: "NGN",
        basePrice: 5400,
        finalPrice: 5400,
      },
      images: ["/images/vegie-wrap.jpg", "/products/wrap-2-2.jpg"],
      badges: ["New"],
      availability: {
        inStock: true,
        quantityAvailable: 29,
      },
      variants: [
        {
          id: "size_regular",
          name: "Regular Wrap",
          price: 5400,
        },
        {
          id: "size_large",
          name: "Large Wrap",
          price: 6400,
        },
      ],
      extras: [
        {
          id: "extra_avocado",
          name: "Extra Avocado Slices",
          price: 1000,
        },
        {
          id: "extra_patty",
          name: "Extra Veggie Patty",
          price: 1800,
        },
      ],
      customizations: {
        spiceLevel: ["Mild", "Medium", "Hot"],
        removeIngredients: ["Tomato", "Avocado", "Cucumber", "Lettuce"],
      },
      ingredients: [
        "Vegetable Patty",
        "Tortilla Wrap",
        "Avocado",
        "Tomato",
        "Lettuce",
        "Cucumber",
        "Herb Mayo",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 420,
        protein: 12,
        carbs: 48,
        fat: 16,
        sugar: 6,
        fiber: 8,
        sodium: 520,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Gluten"],
      prepTime: "15-20 mins",
      reviewStats: {
        averageRating: 4.5,
        totalReviews: 433,
      },
      reviews: [
        {
          id: "rev_29_1",
          user: "John D.",
          rating: 5,
          comment: "Good value for the price. Packed full of crispy greens.",
          date: "2026-04-07",
        },
        {
          id: "rev_29_2",
          user: "Chinedu O.",
          rating: 5,
          comment:
            "Fresh ingredients and generous portion size. The herb mayo matches perfectly.",
          date: "2026-02-23",
        },
        {
          id: "rev_29_3",
          user: "Chioma A.",
          rating: 4,
          comment:
            "Absolutely delicious and arrived nice and fresh. Perfect clean eating option.",
          date: "2026-02-11",
        },
        {
          id: "rev_29_4",
          user: "David K.",
          rating: 5,
          comment:
            "Very wholesome lunch wrap. The avocado spread was perfectly ripe.",
          date: "2026-04-16",
        },
        {
          id: "rev_29_5",
          user: "Tunde S.",
          rating: 4,
          comment: "Solid macro profile for active gym days. Tastes clean.",
          date: "2026-02-23",
        },
        {
          id: "rev_29_6",
          user: "Joy N.",
          rating: 4,
          comment:
            "One of the best light healthy items I've ordered on the app so far.",
          date: "2026-02-26",
        },
      ],
      metrics: {
        soldCount: 455,
        wishlistCount: 1544,
        views: 31108,
        cartAdds: 9285,
        trendingScore: 57,
      },
      recommendation: {
        score: 84,
        reason: "Frequently ordered item",
      },
      frequentlyBoughtTogether: ["Drinks", "Burgers", "Desserts"],
      relatedProducts: [],
      seo: {
        metaTitle: "Healthy Veggie Wrap | Foodie",
        metaDescription:
          "Order wholesome garden veggie wraps fresh from the kitchen on the Foodie app.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-08T23:16:00",
    },
    {
      id: "burger_105",
      slug: "signature-cheeseburger",
      name: "Cheeseburger",
      shortDescription:
        "Juicy flame-grilled beef layered with aged cheddar and house burger sauce.",
      description:
        "Our signature cheeseburger features a juicy flame-grilled 100% beef patty topped with aged cheddar cheese, crisp lettuce, tomatoes, dill pickles, red onions and our creamy house burger sauce inside a toasted brioche bun.",
      category: {
        id: "cat_burger",
        name: "Burger",
      },
      tags: ["Burger", "Beef", "Cheese", "Lunch", "Dinner"],
      badges: ["Featured"],
      pricing: {
        currency: "NGN",
        basePrice: 6200,
        finalPrice: 6200,
      },
      images: ["/images/cheese-burger.jpg", "/products/burger-3-2.jpg"],
      availability: {
        inStock: true,
        quantityAvailable: 94,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "variant_single",
          name: "Single Patty",
          price: 6200,
        },
        {
          id: "variant_double",
          name: "Double Patty",
          price: 8000,
        },
        {
          id: "variant_triple",
          name: "Triple Patty",
          price: 9800,
        },
      ],
      extras: [
        {
          id: "cheddar",
          name: "Extra Cheddar",
          price: 700,
        },
        {
          id: "patty",
          name: "Extra Beef Patty",
          price: 1800,
        },
        {
          id: "egg",
          name: "Fried Egg",
          price: 600,
        },
        {
          id: "bacon",
          name: "Beef Bacon",
          price: 1200,
        },
        {
          id: "jalapeno",
          name: "Jalapeños",
          price: 500,
        },
      ],
      customizations: {
        spiceLevel: ["Mild", "Medium", "Hot"],
        removeIngredients: [
          "Onions",
          "Pickles",
          "Tomato",
          "Lettuce",
          "Cheddar Cheese",
        ],
      },
      ingredients: [
        "Brioche Bun",
        "100% Beef Patty",
        "Aged Cheddar",
        "Lettuce",
        "Tomato",
        "Red Onion",
        "Dill Pickles",
        "House Burger Sauce",
        "Butter",
      ],
      nutrition: {
        servingSize: "350g",
        calories: 760,
        protein: 38,
        carbs: 42,
        fat: 44,
        sugar: 7,
        fiber: 3,
        sodium: 980,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Gluten", "Milk", "Egg", "Sesame"],
      prepTime: "15-20 mins",
      reviewStats: {
        averageRating: 4.9,
        totalReviews: 386,
      },
      reviews: [
        {
          id: "rev_8_1",
          user: "Tunde A.",
          rating: 4,
          comment:
            "Fresh ingredients and generous portion size. Bun was nicely toasted.",
          date: "2026-02-14",
        },
        {
          id: "rev_8_2",
          user: "John D.",
          rating: 5,
          comment:
            "The house burger sauce is excellent. Definitely ordering this again.",
          date: "2026-02-21",
        },
        {
          id: "rev_8_3",
          user: "Aisha M.",
          rating: 5,
          comment:
            "Perfect cheese melt and a well-seasoned patty. Arrived hot and fresh.",
          date: "2026-02-27",
        },
        {
          id: "rev_8_4",
          user: "Chioma O.",
          rating: 4,
          comment:
            "Solid burger overall. Good size and flavor profile, though delivery was slightly delayed.",
          date: "2026-02-20",
        },
      ],
      metrics: {
        soldCount: 4820,
        wishlistCount: 1240,
        views: 42350,
        cartAdds: 11280,
      },
      frequentlyBoughtTogether: ["Drinks", "Dessert", "Sides"],
      relatedProducts: [],
      seo: {
        metaTitle: "Signature Cheeseburger | Foodie",
        metaDescription:
          "Premium cheeseburger made with flame-grilled beef and aged cheddar on the Foodie app.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-08T23:18:00",
    },
    {
      id: "food_106",
      slug: "waffle-4",
      name: "Classic Golden Waffle",
      shortDescription:
        "Golden, crispy waffle made fresh and toasted to perfection.",
      description:
        "Indulge in our Best-Selling Waffle, baked to a flawless golden crunch on the outside while remaining light, fluffy, and soft on the inside. Every waffle features deep grid pockets designed perfectly to lock in your favorite syrups, butter, or toppings.",
      category: {
        id: "cat_dessert",
        name: "Dessert",
      },
      pricing: {
        currency: "NGN",
        basePrice: 4000,
        finalPrice: 4000,
      },
      images: ["/images/waffle.jpg", "/products/dessert-4-2.jpg"],
      badges: ["Popular"],
      availability: {
        inStock: true,
        quantityAvailable: 69,
      },
      variants: [
        {
          id: "size_regular",
          name: "Regular Waffle",
          price: 4000,
        },
        {
          id: "size_large",
          name: "Double Stack Waffle",
          price: 6500,
        },
      ],
      extras: [
        {
          id: "extra_maple_syrup",
          name: "Pure Maple Syrup",
          price: 500,
        },
        {
          id: "extra_whipped_cream",
          name: "Whipped Cream",
          price: 600,
        },
        {
          id: "extra_berries",
          name: "Fresh Berry Medley",
          price: 1200,
        },
        {
          id: "extra_ice_cream",
          name: "Vanilla Ice Cream Scoop",
          price: 1200,
        },
      ],
      customizations: {
        spiceLevel: ["Mild", "Medium", "Hot"],
        removeIngredients: [],
      },
      ingredients: [
        "Wheat Flour",
        "Water",
        "Vegetable Oil",
        "Sugar",
        "Eggs",
        "Whey",
        "Baking Powder",
        "Salt",
        "Soy Lecithin",
        "Natural Vanilla Flavor",
      ],
      nutrition: {
        servingSize: "180g",
        calories: 410,
        protein: 8,
        carbs: 55,
        fat: 18,
        sugar: 12,
        fiber: 2,
        sodium: 380,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten", "Egg", "Soy"],
      prepTime: "15-20 mins",
      reviewStats: {
        averageRating: 4.7,
        totalReviews: 225,
      },
      reviews: [
        {
          id: "rev_7_0",
          user: "Ibrahim O.",
          rating: 4,
          comment:
            "Solid option if you're looking for a quick breakfast. Arrives warm and nicely packed.",
          date: "2026-05-27",
        },
        {
          id: "rev_7_1",
          user: "Femi D.",
          rating: 3,
          comment:
            "Taste was okay, but it lost a bit of its crispiness on its way through transit.",
          date: "2026-03-05",
        },
        {
          id: "rev_7_2",
          user: "Kunle E.",
          rating: 5,
          comment:
            "Really impressed with the presentation and taste. Fluffy texture inside is premium quality.",
          date: "2026-03-09",
        },
      ],
      metrics: {
        soldCount: 2293,
        wishlistCount: 185,
        views: 14826,
        cartAdds: 9792,
        trendingScore: 95,
      },
      recommendation: {
        score: 80,
        reason: "Frequently ordered item",
      },
      frequentlyBoughtTogether: ["Drinks", "Burgers"],
      relatedProducts: [],
      seo: {
        metaTitle: "Classic Golden Waffle | Foodie",
        metaDescription:
          "Order fluffy, golden waffles fresh from the kitchen on the Foodie app.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-08T23:09:00",
    },
    {
      id: "food_107",
      slug: "bbq-beef-pizza-5",
      name: "BBQ Beef Pizza",
      shortDescription:
        "Pepperoni, sausage, beef and bacon piled on one pizza.",
      description:
        "Our BBQ Beef Pizza is pepperoni, sausage, beef and bacon piled on one pizza. Prepared fresh using quality ingredients, it's a favourite among regular customers and pairs well with any of our available sides or drinks. Every order is made to order and packaged to arrive fresh.",
      category: {
        id: "cat_pizza",
        name: "Pizza",
      },
      pricing: {
        currency: "NGN",
        basePrice: 12500,
        finalPrice: 12500,
      },
      images: ["/images/beef_pizza.jpg", "/products/pizza-5-2.jpg"],
      badges: ["Popular", "Featured"],
      availability: {
        inStock: true,
        quantityAvailable: 81,
      },
      variants: [
        {
          id: "size_regular",
          name: "Regular (10-inch)",
          price: 12500,
        },
        {
          id: "size_large",
          name: "Large (12-inch)",
          price: 15500,
        },
      ],
      extras: [
        {
          id: "extra_cheese",
          name: "Extra Mozzarella",
          price: 1000,
        },
        {
          id: "extra_bacon",
          name: "Extra Crispy Bacon",
          price: 1500,
        },
        {
          id: "extra_bbq_sauce",
          name: "Extra BBQ Drizzle",
          price: 500,
        },
      ],
      customizations: {
        spiceLevel: ["Mild", "Medium", "Hot"],
        removeIngredients: ["Onion", "Tomato"],
      },
      ingredients: [
        "Pepperoni",
        "Sausage",
        "Beef",
        "Bacon",
        "Pizza Dough",
        "BBQ Sauce",
        "Mozzarella Cheese",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 675,
        protein: 26,
        carbs: 94,
        fat: 37,
        sugar: 18,
        fiber: 7,
        sodium: 570,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.9,
        totalReviews: 90,
      },
      reviews: [
        {
          id: "rev_26_0",
          user: "Femi I.",
          rating: 5,
          comment:
            "Really impressed with the presentation and taste. A bit pricey but worth every naira.",
          date: "2026-04-19",
        },
        {
          id: "rev_26_1",
          user: "Femi H.",
          rating: 4,
          comment:
            "Decent meal overall, though it could use a bit more seasoning for my taste.",
          date: "2026-01-16",
        },
        {
          id: "rev_26_2",
          user: "Uche H.",
          rating: 5,
          comment:
            "Exceeded my expectations. The flavour was rich and it didn't feel like typical delivery food at all.",
          date: "2026-01-21",
        },
      ],
      metrics: {
        soldCount: 4274,
        wishlistCount: 1060,
        views: 6957,
        cartAdds: 1271,
        trendingScore: 57,
      },
      recommendation: {
        score: 69,
        reason: "Frequently ordered item",
      },
      frequentlyBoughtTogether: ["Burgers", "Drinks", "Sides"],
      relatedProducts: [],
      seo: {
        metaTitle: "BBQ Beef Pizza | Foodie",
        metaDescription: "Order delicious bbq beef pizza on Foodie app.",
      },
    },
    {
      id: "food_108",
      slug: "brownie-6",
      name: "Fudge Brownie",
      shortDescription: "Rich, fudgy chocolate brownie made fresh daily.",
      description:
        "Our Fudge Brownie is prepared with premium dark chocolate and high-quality ingredients, served fresh with a rich, chewy center for the ultimate dessert experience.",
      category: {
        id: "cat_dessert",
        name: "Dessert",
      },
      pricing: {
        currency: "NGN",
        basePrice: 3500,
        discountPercentage: 0,
        discountAmount: 0,
        finalPrice: 3500,
      },
      images: ["/images/brownie.jpg", "/products/dessert-6-2.jpg"],
      badges: ["Recommended", "New"],
      availability: {
        inStock: true,
        quantityAvailable: 42,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "size_regular",
          name: "Regular Slice",
          price: 3500,
        },
        {
          id: "size_large",
          name: "Large Sharing Box",
          price: 12000,
        },
      ],
      extras: [
        {
          id: "extra_chocolate_sauce",
          name: "Extra Chocolate Drizzle",
          price: 400,
        },
        {
          id: "add_whipped_cream",
          name: "Whipped Cream",
          price: 500,
        },
      ],
      customizations: {
        removeIngredients: [],
      },
      ingredients: [
        "Dark Chocolate",
        "Cocoa Powder",
        "Butter",
        "Sugar",
        "Flour",
        "Eggs",
        "Vanilla Extract",
      ],
      nutrition: {
        servingSize: "150g",
        calories: 480,
        protein: 6,
        carbs: 58,
        fat: 24,
        sugar: 41,
        fiber: 3,
        sodium: 160,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten", "Eggs"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.7,
        totalReviews: 242,
      },
      reviews: [
        {
          id: "rev_26_0",
          user: "Femi I.",
          rating: 5,
          comment:
            "Absolutely rich and fudgy. Very good quality and worth every naira.",
          date: "2026-04-19",
        },
        {
          id: "rev_26_1",
          user: "Tunde A.",
          rating: 4,
          comment:
            "Very delicious dessert, though it was a bit too sweet for my personal taste.",
          date: "2026-01-16",
        },
        {
          id: "rev_26_2",
          user: "Uche H.",
          rating: 5,
          comment:
            "Exceeded my expectations. It was delivered warm and tasted like high-end bakery quality.",
          date: "2026-01-21",
        },
      ],
      metrics: {
        soldCount: 1395,
        wishlistCount: 979,
        views: 1212,
        cartAdds: 4815,
        trendingScore: 82,
      },
      recommendation: {
        score: 71,
        reason: "Frequently ordered dessert",
      },
      frequentlyBoughtTogether: ["Drinks", "Dessert", "Burger"],
      relatedProducts: [],
      seo: {
        metaTitle: "Fudge Brownie Dessert | Foodie",
        metaDescription:
          "Order rich and decadent fudge brownies on the Foodie app.",
      },
    },
    {
      id: "food_109",
      slug: "milkshake-7",
      name: "Chocolate Malt Milkshake",
      shortDescription: "Creamy chocolate milkshake blended with premium malt.",
      description:
        "Our Chocolate Malt Milkshake is prepared fresh with premium chocolate ice cream, rich malt powder, and fresh milk for the ultimate classic diner beverage experience.",
      category: {
        id: "cat_drink",
        name: "Drinks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 4500,
        discountPercentage: 5,
        discountAmount: 225,
        finalPrice: 4275,
      },
      images: ["/images/milkshake.jpg", "/products/drinks-7-2.jpg"],
      badges: ["Popular"],
      availability: {
        inStock: true,
        quantityAvailable: 77,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "size_regular",
          name: "Regular (350ml)",
          price: 4275,
        },
        {
          id: "size_large",
          name: "Large (500ml)",
          price: 5500,
        },
      ],
      extras: [
        {
          id: "extra_whipped_cream",
          name: "Whipped Cream & Cherry",
          price: 600,
        },
        {
          id: "extra_malt",
          name: "Extra Malt Scoop",
          price: 500,
        },
        {
          id: "add_oreo",
          name: "Crushed Oreo Topping",
          price: 700,
        },
      ],
      customizations: {
        milkType: ["Whole Milk", "Almond Milk (+₦1,200)", "Oat Milk (+₦1,500)"],
        removeIngredients: [],
      },
      ingredients: [
        "Chocolate Ice Cream",
        "Malt Powder",
        "Whole Milk",
        "Chocolate Syrup",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 670,
        protein: 12,
        carbs: 88,
        fat: 22,
        sugar: 74,
        fiber: 1,
        sodium: 280,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.8,
        totalReviews: 3,
      },
      reviews: [
        {
          id: "rev_27_0",
          user: "Chidi O.",
          rating: 5,
          comment:
            "Proper old-school malt flavor. Thick, creamy, and hits the spot perfectly.",
          date: "2026-05-12",
        },
        {
          id: "rev_27_1",
          user: "Amina B.",
          rating: 4,
          comment:
            "Really thick and delicious, though it melts slightly fast during delivery traffic.",
          date: "2026-05-29",
        },
        {
          id: "rev_27_2",
          user: "Tobi F.",
          rating: 5,
          comment:
            "Best milkshake on the app. The malt addition makes a massive difference.",
          date: "2026-06-02",
        },
      ],
      metrics: {
        soldCount: 2619,
        wishlistCount: 540,
        views: 4796,
        cartAdds: 4446,
        trendingScore: 86,
      },
      recommendation: {
        score: 65,
        reason: "Frequently ordered item",
      },
      frequentlyBoughtTogether: ["Dessrt", "Burgers", "Snacks"],
      relatedProducts: [],
      seo: {
        metaTitle: "Chocolate Malt Milkshake | Foodie",
        metaDescription:
          "Order creamy chocolate malt milkshakes online via the Foodie app.",
      },
    },
    {
      id: "food_110",
      slug: "classic-beef-burger-8",
      name: "Classic Beef Burger",
      shortDescription: "Delicious classic beef burger made fresh daily.",
      description:
        "A perfectly seasoned beef patty served with fresh vegetables, pickles and creamy burger sauce inside a toasted brioche bun.",
      category: {
        id: "cat_burger",
        name: "Burger",
      },
      pricing: {
        currency: "NGN",
        basePrice: 5600,
        finalPrice: 5600,
      },
      images: ["/images/classic_burger.jpg", "/products/burger-8-2.jpg"],
      badges: ["Recommended", "New"],
      availability: {
        inStock: true,
        quantityAvailable: 31,
      },
      variants: [
        {
          id: "variant_single",
          name: "Single Patty",
          price: 5600,
        },
        {
          id: "variant_double",
          name: "Double Patty",
          price: 7500,
        },
      ],
      extras: [
        {
          id: "extra_cheese",
          name: "Extra Cheddar Cheese",
          price: 1000,
        },
        {
          id: "extra_bacon",
          name: "Crispy Turkey Bacon",
          price: 1500,
        },
        {
          id: "extra_patty",
          name: "Extra Beef Patty",
          price: 2000,
        },
      ],
      customizations: {
        spiceLevel: ["Mild", "Medium", "Hot"],
        removeIngredients: ["Onion", "Tomato", "Pickles"],
      },
      ingredients: [
        "Beef Patty",
        "Brioche Bun",
        "Lettuce",
        "Tomato",
        "Pickles",
        "Burger Sauce",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 535,
        protein: 43,
        carbs: 47,
        fat: 37,
        sugar: 6,
        fiber: 4,
        sodium: 405,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Egg", "Gluten", "Sesame"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.4,
        totalReviews: 363,
      },
      reviews: [
        {
          id: "rev_17_0",
          user: "Bayo R.",
          rating: 5,
          comment:
            "Fast delivery and the food was still warm when it got to me. Genuinely tasty, would recommend to friends.",
          date: "2026-02-25",
        },
        {
          id: "rev_17_1",
          user: "Ada C.",
          rating: 4,
          comment:
            "Portion was a little smaller than I expected, but the flavour was nice.",
          date: "2026-02-10",
        },
        {
          id: "rev_17_2",
          user: "Femi S.",
          rating: 4,
          comment:
            "Exceeded my expectations. The flavour was rich and it didn't feel like typical delivery food at all.",
          date: "2026-04-12",
        },
        {
          id: "rev_17_3",
          user: "Hassan R.",
          rating: 5,
          comment:
            "The brioche bun stayed soft and wasn't soggy. Highly recommend the extra cheese option.",
          date: "2026-03-11",
        },
      ],
      metrics: {
        soldCount: 3159,
        wishlistCount: 947,
        views: 34919,
        cartAdds: 7897,
        trendingScore: 57,
      },
      recommendation: {
        score: 75,
        reason: "Frequently ordered item",
      },
      frequentlyBoughtTogether: ["Drinks", "Dessert", "Sides"],
      relatedProducts: [],
      seo: {
        metaTitle: "Classic Beef Burger | Foodie",
        metaDescription: "Order delicious classic beef burger on Foodie app.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-08T22:58:00",
    },
    {
      id: "food_111",
      slug: "plantain-chips-19",
      name: "Crunchy Plantain Chips",
      shortDescription:
        "Thinly sliced plantains fried until golden and crunchy.",
      description:
        "Our Crunchy Plantain Chips are thinly sliced plantains fried until perfectly crisp. Prepared fresh using quality ingredients, they are a favorite snack among regular customers and pair well with any of our cold drinks. Every order is packaged securely to arrive fresh.",
      category: {
        id: "cat_snacks",
        name: "Snacks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 2500,
        finalPrice: 2500,
      },
      images: [
        "/images/plantain-chips.jpg",
        "/products/plantain-chips-19-2.jpg",
      ],
      badges: ["Limited Time"],
      availability: {
        inStock: true,
        quantityAvailable: 3,
      },
      variants: [
        {
          id: "size_regular",
          name: "Regular Pack",
          price: 2500,
        },
        {
          id: "size_large",
          name: "Large Pack",
          price: 3500,
        },
      ],
      extras: [],
      customizations: {
        removeIngredients: [],
      },
      ingredients: ["Plantain", "Vegetable Oil", "Salt"],
      nutrition: {
        servingSize: "100g",
        calories: 510,
        protein: 2,
        carbs: 64,
        fat: 30,
        sugar: 4,
        fiber: 5,
        sodium: 240,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.5,
        totalReviews: 124,
      },
      reviews: [
        {
          id: "rev_19_0",
          user: "Nneka N.",
          rating: 5,
          comment:
            "Super crispy and not greasy at all. The perfect afternoon snack.",
          date: "2026-05-10",
        },
        {
          id: "rev_19_1",
          user: "Emeka Y.",
          rating: 5,
          comment:
            "Really impressed with the packaging and taste. A bit pricey but worth every naira.",
          date: "2026-06-07",
        },
        {
          id: "rev_19_2",
          user: "Ibrahim H.",
          rating: 5,
          comment:
            "This was absolutely delicious, perfectly thin and the portion size was generous. Will definitely order again.",
          date: "2026-05-06",
        },
        {
          id: "rev_19_3",
          user: "Amaka W.",
          rating: 4,
          comment:
            "Fast delivery and the chips stayed perfectly crunchy. Genuinely tasty snack.",
          date: "2026-04-20",
        },
        {
          id: "rev_19_4",
          user: "Grace J.",
          rating: 4,
          comment:
            "Exceeded my expectations. The crunch is spot on and they aren't overly salted.",
          date: "2026-04-23",
        },
        {
          id: "rev_19_5",
          user: "Zainab S.",
          rating: 4,
          comment:
            "Perfect snack companion for work. Keeps well if you don't finish it at once.",
          date: "2026-02-22",
        },
      ],
      frequentlyBoughtTogether: ["Drink"],
      relatedProducts: [],
      metrics: {
        soldCount: 1020,
        wishlistCount: 567,
        views: 9180,
        cartAdds: 1584,
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-08T23:01:00",
    },
    {
      id: "food_112",
      slug: "scotch-egg-20",
      name: "Classic Scotch Egg",
      shortDescription:
        "Whole boiled egg wrapped in seasoned sausage meat, breaded and fried golden.",
      description:
        "Our Classic Scotch Egg features a perfectly boiled egg wrapped in seasoned savory sausage meat, coated in crisp breadcrumbs, and fried to golden perfection. Prepared fresh daily using quality local ingredients, it makes for a satisfying quick bite or pairing with any beverage.",
      category: {
        id: "cat_snacks",
        name: "Snacks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 1400,
        finalPrice: 1400,
      },
      images: ["/images/scotch-egg.jpg", "/products/scotch-egg-20-2.jpg"],
      badges: ["Popular"],
      availability: {
        inStock: true,
        quantityAvailable: 52,
      },
      variants: [
        {
          id: "qty_single",
          name: "Single (1 Piece)",
          price: 1400,
        },
        {
          id: "qty_double",
          name: "Twin Pack (2 Pieces)",
          price: 2600,
        },
      ],
      extras: [
        {
          id: "side_chili_sauce",
          name: "Spicy Pepper Sauce Dip",
          price: 300,
        },
      ],
      customizations: {
        spiceLevel: ["Mild", "Medium", "Hot"],
        removeIngredients: [],
      },
      ingredients: [
        "Egg",
        "Sausage Meat",
        "Breadcrumbs",
        "Spices",
        "Vegetable Oil",
      ],
      nutrition: {
        servingSize: "120g",
        calories: 290,
        protein: 14,
        carbs: 12,
        fat: 19,
        sugar: 1,
        fiber: 1,
        sodium: 480,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Gluten", "Egg"],
      prepTime: "15-30 mins",
      reviewStats: {
        averageRating: 4.2,
        totalReviews: 42,
      },
      reviews: [
        {
          id: "rev_20_0",
          user: "Ifeoma R.",
          rating: 4,
          comment:
            "Solid option if you're in a hurry. Crisp exterior and well-seasoned sausage meat layer.",
          date: "2026-04-16",
        },
        {
          id: "rev_20_1",
          user: "Hassan K.",
          rating: 5,
          comment:
            "Fast delivery and the snack was still warm when it got to me. Genuinely tasty snack.",
          date: "2026-03-20",
        },
        {
          id: "rev_20_2",
          user: "Nneka S.",
          rating: 4,
          comment:
            "Really impressed with the texture and clean taste. A great companion for afternoon tea.",
          date: "2026-06-01",
        },
        {
          id: "rev_20_3",
          user: "Bayo Q.",
          rating: 4,
          comment:
            "It was good but arrived slightly later than the estimated time. Flavour profile made up for it though.",
          date: "2026-04-21",
        },
        {
          id: "rev_20_4",
          user: "Segun U.",
          rating: 4,
          comment:
            "Decent portion size. Coating is perfectly golden brown and meat isn't dry.",
          date: "2026-04-27",
        },
        {
          id: "rev_20_5",
          user: "Segun K.",
          rating: 4,
          comment:
            "Good execution of a classic snack. Hits the spot for a light workday breakfast.",
          date: "2026-06-11",
        },
      ],
      metrics: {
        soldCount: 1397,
        wishlistCount: 347,
        views: 16764,
        cartAdds: 2215,
      },
      frequentlyBoughtTogether: ["Drink"],
      relatedProducts: [],
      seo: {
        metaTitle: "Classic Scotch Egg Snack | Foodie",
        metaDescription:
          "Order delicious crispy scotch eggs on the Foodie app.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-08T23:03:00",
    },
    {
      id: "food_113",
      slug: "bbq-chicken-platter-21",
      name: "BBQ Chicken Platter",
      shortDescription:
        "Charcoal-grilled chicken glazed in smoky barbecue sauce.",
      description:
        "Our BBQ Chicken Platter features tender charcoal-grilled chicken glazed in a rich, smoky barbecue sauce. Prepared fresh using high-quality ingredients, it is a favorite hearty meal that pairs beautifully with our sides and cold beverages.",
      category: {
        id: "cat_proteins",
        name: "Proteins",
      },
      pricing: {
        currency: "NGN",
        basePrice: 8100,
        finalPrice: 8100,
      },
      images: [
        "/images/bbq-chicken-platter.jpg",
        "/products/bbq-chicken-platter-21-2.jpg",
      ],
      badges: ["Popular Choice"],
      availability: {
        inStock: true,
        quantityAvailable: 24,
      },
      variants: [
        {
          id: "variant_half",
          name: "Half Chicken Platter",
          price: 8100,
        },
        {
          id: "variant_full",
          name: "Full Chicken Platter",
          price: 14500,
        },
      ],
      extras: [
        {
          id: "side_french_fries",
          name: "Side French Fries",
          price: 1500,
        },
        {
          id: "side_yam_fries",
          name: "Side Yam Fries",
          price: 1500,
        },
        {
          id: "side_potatoe_wedges",
          name: "Side Potatoe Wedges",
          price: 1500,
        },
        {
          id: "side_jollof_rice",
          name: "Side sweet puff-puff mixed",
          price: 2000,
        },
        {
          id: "extra_bbq_sauce",
          name: "Extra BBQ Sauce Dip",
          price: 500,
        },
      ],
      customizations: {
        spiceLevel: ["Mild", "Medium", "Hot"],
        removeIngredients: [],
      },
      ingredients: [
        "Chicken",
        "Smoky BBQ Sauce",
        "House Spice Rub",
        "Vegetable Oil",
      ],
      nutrition: {
        servingSize: "550g",
        calories: 780,
        protein: 62,
        carbs: 44,
        fat: 32,
        sugar: 28,
        fiber: 2,
        sodium: 890,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
      },
      allergens: ["Soy"],
      delivery: {
        estimatedTime: "20-40 mins",
        deliveryFee: 1500,
        freeDelivery: false,
      },
      reviewStats: {
        averageRating: 4.3,
        totalReviews: 146,
      },
      reviews: [
        {
          id: "rev_21_0",
          user: "Segun B.",
          rating: 3,
          comment:
            "Portion of the sides was a little smaller than I expected, but the chicken flavor was excellent.",
          date: "2026-05-07",
        },
        {
          id: "rev_21_1",
          user: "Amaka Y.",
          rating: 5,
          comment:
            "Really impressed with the presentation and taste. Perfectly charred skin.",
          date: "2026-02-02",
        },
        {
          id: "rev_21_2",
          user: "Amaka W.",
          rating: 4,
          comment:
            "Exceeded my expectations. The sauce was rich and it didn't feel like typical mass-produced food at all.",
          date: "2026-01-16",
        },
        {
          id: "rev_21_3",
          user: "Musa W.",
          rating: 5,
          comment:
            "My go-to order now. Consistent wood-smoke flavor every single time I order from here.",
          date: "2026-03-06",
        },
        {
          id: "rev_21_4",
          user: "Bola H.",
          rating: 5,
          comment:
            "Fast delivery and the platter was still warm when it got to me. Genuinely juicy chicken.",
          date: "2026-01-27",
        },
        {
          id: "rev_21_5",
          user: "Funke P.",
          rating: 4,
          comment:
            "Great tangy sauce profile. Definitely worth the naira spent for a proper dinner meal.",
          date: "2026-03-23",
        },
      ],
      metrics: {
        soldCount: 2319,
        wishlistCount: 860,
        views: 30147,
        cartAdds: 4142,
      },
      frequentlyBoughtTogether: ["Burger", "Pizza", "Drink"],
      relatedProducts: [],
      seo: {
        metaTitle: "Smoky BBQ Chicken Platter | Foodie",
        metaDescription:
          "Order tender charcoal-grilled barbecue chicken platters on the Foodie app.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-08T23:05:00",
    },
    {
      id: "food_13",
      slug: "tropical-smoothie-23",
      name: "Tropical Fruit Smoothie",
      shortDescription: "Blended mango, pineapple, and banana smoothie.",
      description:
        "Our Tropical Fruit Smoothie is a refreshing, thick blend of ripe mangoes, juicy pineapples, and sweet bananas. Made fresh to order with 100% real fruit and no added sugars, it is a healthy, ice-cold beverage perfect for any time of the day.",
      category: {
        id: "cat_drinks",
        name: "Drinks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 1900,
        discountPercentage: 15,
        discountAmount: 285,
        finalPrice: 1615,
      },
      images: [
        "/images/tropical-smoothie.jpg",
        "/products/tropical-smoothie-23-2.jpg",
      ],
      badges: ["Popular Choice"],
      variants: [
        {
          id: "size_regular",
          name: "Regular (350ml)",
          price: 1615,
        },
        {
          id: "size_large",
          name: "Large (500ml)",
          price: 2400,
        },
      ],
      extras: [
        {
          id: "extra_chia",
          name: "Chia Seeds Topping",
          price: 400,
        },
        {
          id: "extra_ginger",
          name: "Fresh Ginger Blast",
          price: 300,
        },
      ],
      customizations: {
        removeIngredients: ["Banana", "Pineapple"],
      },
      ingredients: ["Mango", "Pineapple", "Banana", "Ice"],
      nutrition: {
        servingSize: "350g",
        calories: 210,
        protein: 2,
        carbs: 52,
        fat: 0.5,
        sugar: 38,
        fiber: 6,
        sodium: 5,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      availability: {
        inStock: true,
        quantityAvailable: 9,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      prepTime: "5 mins",
      reviewStats: {
        averageRating: 4.2,
        totalReviews: 60,
      },
      reviews: [
        {
          id: "rev_23_0",
          user: "Kunle M.",
          rating: 5,
          comment:
            "Really impressed with the freshness and taste. A bit pricey but worth every naira.",
          date: "2026-06-11",
        },
        {
          id: "rev_23_1",
          user: "Uche C.",
          rating: 4,
          comment:
            "Decent drink overall, though it could be a bit colder when it arrives through traffic.",
          date: "2026-06-08",
        },
        {
          id: "rev_23_2",
          user: "Hassan C.",
          rating: 4,
          comment:
            "It was good but arrived slightly later than the estimated time. Taste made up for it though.",
          date: "2026-01-14",
        },
        {
          id: "rev_23_3",
          user: "Ibrahim W.",
          rating: 3,
          comment:
            "Portion was a little smaller than I expected, but the flavour was nice and tropical.",
          date: "2026-01-10",
        },
        {
          id: "rev_23_4",
          user: "Yemi L.",
          rating: 4,
          comment:
            "Exceeded my expectations. The fruit flavor was rich and it didn't feel artificial at all.",
          date: "2026-02-14",
        },
        {
          id: "rev_23_5",
          user: "Femi Z.",
          rating: 5,
          comment:
            "My go-to breakfast drink now. Consistent thick texture every single time I order.",
          date: "2026-02-06",
        },
      ],
      metrics: {
        soldCount: 726,
        wishlistCount: 322,
        views: 8712,
        cartAdds: 1113,
      },
      frequentlyBoughtTogether: [
        "Burger",
        "Pizza",
        "Snacks ",
        " Sides",
        "Drink",
      ],
      relatedProducts: [],
      seo: {
        metaTitle: "Fresh Tropical Fruit Smoothie | Foodie",
        metaDescription:
          "Order fresh blended mango, pineapple, and banana smoothies on the Foodie app.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-08T23:08:00",
    },
    {
      id: "food_114",
      slug: "peri-peri-chicken-24",
      name: "Peri Peri Chicken",
      shortDescription:
        "Flame-grilled chicken marinated overnight in peri peri spice.",
      description:
        "Our Peri Peri Chicken is succulent flame-grilled chicken marinated overnight in an authentic, zesty peri peri spice blend. Prepared fresh at The Grill Hub using premium quality ingredients, it's a favourite among regular customers and pairs beautifully with any of our fresh sides or cold drinks.",
      category: {
        id: "cat_chickens",
        name: "Chickens",
      },
      restaurant: {
        id: "rest_009",
        name: "The Grill Hub",
        slug: "the-grill-hub",
        rating: 4.6,
        verified: true,
      },
      pricing: {
        currency: "NGN",
        basePrice: 7000,
        finalPrice: 7000,
      },
      images: [
        "/images/peri-peri-chicken.jpg",
        "/images/peri-peri-chicken-24-2.jpg",
      ],
      badges: ["Recommended"],
      availability: {
        inStock: true,
        quantityAvailable: 42,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "portion_quarter",
          name: "Quarter Chicken",
          price: 5600,
        },
        {
          id: "portion_half",
          name: "Half Chicken",
          price: 9500,
        },
      ],
      extras: [
        {
          id: "side_french_fries",
          name: "Side Fries",
          price: 1500,
        },
        {
          id: "extra_peri_sauce",
          name: "Extra Peri Peri Sauce Dip",
          price: 500,
        },
      ],
      customizations: {
        spiceLevel: ["Mild", "Medium", "Hot", "Extra Hot"],
        removeIngredients: [],
      },
      ingredients: [
        "Chicken",
        "Peri Peri Chili Marinade",
        "Garlic",
        "Lemon Juice",
        "Herbs and Spices",
      ],
      nutrition: {
        servingSize: "300g",
        calories: 480,
        protein: 54,
        carbs: 4,
        fat: 28,
        sugar: 1,
        fiber: 1,
        sodium: 620,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "10-25 mins",
      reviewStats: {
        averageRating: 4.3,
        totalReviews: 110,
      },
      reviews: [
        {
          id: "rev_24_0",
          user: "Femi R.",
          rating: 3,
          comment:
            "Not bad, but I've had better and spicier versions of this from other places nearby.",
          date: "2026-01-06",
        },
        {
          id: "rev_24_1",
          user: "Obinna U.",
          rating: 5,
          comment:
            "My go-to order now. Consistent quality and perfectly charred skin every single time I order from here.",
          date: "2026-06-14",
        },
        {
          id: "rev_24_2",
          user: "Chioma P.",
          rating: 5,
          comment:
            "One of the best chicken meals I've had delivered this month. Packaging was neat and the taste was on point.",
          date: "2026-02-04",
        },
      ],
      metrics: {
        soldCount: 3020,
        wishlistCount: 1187,
        views: 30200,
        cartAdds: 5420,
      },
      frequentlyBoughtTogether: [" Sides", "Drink"],
      relatedProducts: [],
      seo: {
        metaTitle: "Flame-Grilled Peri Peri Chicken | Foodie",
        metaDescription:
          "Order juicy flame-grilled Peri Peri chicken marinated overnight on the Foodie app.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-08T23:11:00",
    },
    {
      id: "food_115",
      slug: "suya-skewers-29",
      name: "Suya Skewers",
      shortDescription: "Grilled beef skewers coated in spicy suya pepper mix.",
      description:
        "Our Suya Skewers feature tender, flame-grilled beef skewers heavily coated in authentic, spicy Hausa yaji (suya pepper mix). Prepared fresh at Snack Corner using quality flank steak, it is served traditional style with sliced onions and cabbage. It pairs perfectly with any of our available sides or cold drinks.",
      category: {
        id: "cat_snacks",
        name: "Snacks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 1450,
        finalPrice: 1450,
      },
      images: ["/images/suya-skewers.jpg", "/products/suya-skewers-29-2.jpg"],
      badges: ["Recommended"],
      availability: {
        inStock: true,
        quantityAvailable: 41,
      },
      variants: [
        {
          id: "var_beef",
          name: "Beef Suya",
          priceModifier: 0,
        },
        {
          id: "var_chicken",
          name: "Chicken Suya",
          priceModifier: 200,
        },
      ],
      extras: [
        {
          id: "ext_suya_pepper",
          name: "Extra Yaji Pepper",
          price: 100,
        },
        {
          id: "ext_onions",
          name: "Extra Sliced Onions",
          price: 100,
        },
        {
          id: "ext_masa",
          name: "Side of Masa (Rice Cakes)",
          price: 400,
        },
      ],
      customizations: {
        spiceLevel: ["Mild", "Medium", "Classic Spicy", "Hyper Spicy"],
        removeIngredients: ["Onions", "Cabbage", "Yaji Pepper"],
      },
      ingredients: [
        "Beef Flank Steak",
        "Peanut Cake Powder (Kuli-Kuli)",
        "Ginger",
        "Chili Pepper",
        "Garlic",
        "Vegetable Oil",
        "Stock Cubes",
      ],
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
      },
      allergens: ["Peanuts"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.7,
        totalReviews: 96,
      },
      reviews: [
        {
          id: "rev_29_0",
          name: "Segun V.",
          rating: 5,
          comment:
            "Fast delivery and the food was still warm when it got to me. Genuinely tasty, would recommend to friends.",
          date: "2026-04-04",
        },
        {
          id: "rev_29_1",
          name: "Bola K.",
          rating: 4,
          comment:
            "Decent meal overall, though it could use a bit more seasoning for my taste.",
          date: "2026-02-20",
        },
        {
          id: "rev_29_2",
          name: "Zainab S.",
          rating: 5,
          comment:
            "My go-to order now. Consistent quality every single time I order from here.",
          date: "2026-06-18",
        },
      ],
      metrics: {
        soldCount: 3200,
        wishlistCount: 1233,
        views: 44800,
        cartAdds: 4180,
      },
      frequentlyBoughtTogether: ["Drink"],
      relatedProducts: [],
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-06-13T21:03:51.414359",
    },
    {
      id: "food_116",
      slug: "french-fries-30",
      name: "French Fries",
      shortDescription:
        "Crispy, golden-brown potato fries lightly tossed in sea salt.",
      description:
        "Indulge in our signature French Fries, cut from premium potatoes and double-fried to achieve a perfectly crisp exterior with a fluffy, tender center. Lightly tossed in fine sea salt immediately after frying, this classic side is served hot and fresh from the kitchen at Grill & Chill. Ideal as a standalone snack or paired with your favorite burger or cold beverage, each batch is packed in ventilated containers to preserve maximum crispiness during delivery.",
      category: {
        id: "cat_snacks",
        name: "Sides",
      },
      pricing: {
        currency: "NGN",
        basePrice: 2400,
        finalPrice: 2400,
      },
      images: ["/images/french_fries.jpg", "/products/french-fries-30-2.jpg"],
      badges: ["Recommended", "Top Seller"],
      availability: {
        inStock: true,
        quantityAvailable: 36,
      },
      variants: [
        {
          id: "var_regular",
          name: "Regular Size",
          priceModifier: 2400,
        },
        {
          id: "var_large",
          name: "Large Size",
          priceModifier: 3200,
        },
      ],
      extras: [
        {
          id: "ext_ketchup",
          name: "Extra Tomato Ketchup",
          price: 150,
        },
        {
          id: "ext_mayo",
          name: "Garlic Mayonnaise Dip",
          price: 250,
        },
        {
          id: "ext_chili",
          name: "Spicy Chili Sauce",
          price: 200,
        },
      ],
      customizations: {
        spiceLevel: ["No Spice (Salted Only)", "Spicy Peri-Peri Seasoning"],
        removeIngredients: ["Salt"],
      },
      ingredients: ["Potatoes", "Vegetable Oil", "Sea Salt"],
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.5,
        totalReviews: 139,
      },
      reviews: [
        {
          id: "rev_30_0",
          user: "Tolu N.",
          rating: 5,
          comment:
            "This was absolutely delicious, arrived hot and the portion size was generous. Will definitely order again.",
          date: "2026-06-11",
        },
        {
          id: "rev_30_1",
          user: "Bayo C.",
          rating: 4,
          comment:
            "Really impressed with the presentation and taste. A bit pricey but worth every naira.",
          date: "2026-01-03",
        },
        {
          id: "rev_30_2",
          user: "Hassan L.",
          rating: 4,
          comment:
            "Really impressed with the presentation and taste. A bit pricey but worth every naira.",
          date: "2026-02-26",
        },
        {
          id: "rev_30_3",
          user: "Kunle K.",
          rating: 5,
          comment:
            "My go-to order now. Consistent quality every single time I order from here.",
          date: "2026-01-22",
        },
        {
          id: "rev_30_4",
          user: "Hassan B.",
          rating: 5,
          comment:
            "Fast delivery and the food was still warm when it got to me. Genuinely tasty, would recommend to friends.",
          date: "2026-05-10",
        },
        {
          id: "rev_30_5",
          user: "Ifeoma G.",
          rating: 4,
          comment:
            "My go-to order now. Consistent quality every single time I order from here.",
          date: "2026-06-05",
        },
      ],
      frequentlyBoughtTogether: [" Burger", "Pizza", "Drink"],
      relatedProducts: [],
      metrics: {
        soldCount: 1917,
        wishlistCount: 231,
        views: 21087,
        cartAdds: 3243,
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T20:51:00Z",
    },
    {
      id: "food_117",
      slug: "vanilla-ice-cream-cup-33",
      name: "Vanilla Ice Cream Cup",
      shortDescription:
        "Rich, velvety vanilla ice cream made with real dairy cream.",
      description:
        "Treat yourself to our classic Vanilla Ice Cream Cup, crafted at Cluck House using premium dairy cream and infused with authentic Madagascar vanilla extract. Exceptionally smooth, rich, and velvety, it is the perfect cooling sweet treat after a spicy meal or as a standalone dessert. Each cup is carefully packed using insulated thermal packaging and ice gel packs to ensure it arrives perfectly chilled and frozen at your doorstep.",
      category: {
        id: "cat_desserts",
        name: "Desserts",
      },
      pricing: {
        currency: "NGN",
        basePrice: 2600,
        finalPrice: 2600,
      },
      images: [
        "/images/vanilla-ice-cream-cup.jpg",
        "/images/vanilla-ice-cream-cup-33-2.jpg",
      ],
      badges: ["Sweet Treat"],
      availability: {
        inStock: true,
        quantityAvailable: 28,
      },
      variants: [
        {
          id: "var_standard",
          name: "Standard Cup (150ml)",
          priceModifier: 2600,
        },
        {
          id: "var_large",
          name: "Large Cup (300ml)",
          priceModifier: 3800,
        },
      ],
      extras: [
        {
          id: "ext_chocolate_syrup",
          name: "Chocolate Drizzle",
          price: 200,
        },
        {
          id: "ext_sprinkles",
          name: "Rainbow Sprinkles",
          price: 150,
        },
        {
          id: "ext_crushed_oreos",
          name: "Crushed Cookie Topping",
          price: 300,
        },
      ],
      customizations: {
        spiceLevel: [],
        removeIngredients: [],
      },
      ingredients: [
        "Fresh Cream",
        "Whole Milk",
        "Sugar",
        "Madagascar Vanilla Extract",
        "Egg Yolks",
      ],
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: true,
      },
      allergens: ["Milk", "Egg"],
      delivery: {
        estimatedTime: "30-45 mins",
        deliveryFee: 1998,
        freeDelivery: false,
      },
      reviewStats: {
        averageRating: 4.0,
        totalReviews: 58,
      },
      reviews: [
        {
          id: "rev_33_0",
          user: "Bola M.",
          rating: 5,
          comment:
            "My go-to order now. Consistent quality every single time I order from here.",
          date: "2026-03-28",
        },
        {
          id: "rev_33_1",
          user: "Joy F.",
          rating: 3,
          comment:
            "Solid option if you're in a hurry. Nothing spectacular but definitely not disappointing.",
          date: "2026-05-03",
        },
        {
          id: "rev_33_2",
          user: "Kemi Y.",
          rating: 5,
          comment:
            "My go-to order now. Consistent quality every single time I order from here.",
          date: "2026-03-12",
        },
        {
          id: "rev_33_3",
          user: "Emeka E.",
          rating: 3,
          comment:
            "It was good but arrived slightly later than the estimated time. Taste made up for it though.",
          date: "2026-02-09",
        },
      ],
      metrics: {
        soldCount: 1332,
        wishlistCount: 788,
        views: 9324,
        cartAdds: 1630,
      },
      frequentlyBoughtTogether: [" Sides", "Snacks", "Drink"],
      relatedimages: [],
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T20:53:00Z",
    },
    {
      id: "food_118",
      slug: "meat-pie-35",
      name: "Meat Pie",
      shortDescription:
        "Classic Nigerian meat pie with a rich, buttery, flaky crust.",
      description:
        "Bite into our golden, classic Nigerian Meat Pie, featuring a rich, buttery shortcrust pastry filled to the brim with perfectly seasoned minced beef, cubed potatoes, and carrots. Baked fresh daily at Pizza Palace, each pie is lightly seasoned with local spices to deliver a comforting, savory flavor. It serves as an excellent midday snack or quick breakfast on the go, packaged carefully to stay warm and intact during transit.",
      category: {
        id: "cat_snacks",
        name: "Snacks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 2000,
        finalPrice: 2000,
      },
      images: ["/images/meat-pie.jpg", "/images/meat-pie-35-2.jpg"],
      badges: ["Freshly Baked"],
      availability: {
        inStock: true,
        quantityAvailable: 9,
      },
      variants: [
        {
          id: "var_standard",
          name: "Standard Size",
          priceModifier: 2000,
        },
        {
          id: "var_jumbo",
          name: "Jumbo Size",
          priceModifier: 2600,
        },
      ],
      extras: [
        {
          id: "ext_chili_jam",
          name: "Side Spicy Chili Jam",
          price: 200,
        },
      ],
      customizations: {
        spiceLevel: [],
        removeIngredients: [],
      },
      ingredients: [
        "Wheat Flour",
        "Minced Beef",
        "Potatoes",
        "Carrots",
        "Butter",
        "Onions",
        "Spices",
      ],
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Gluten", "Egg", "Milk"],
      delivery: {
        estimatedTime: "15-30 mins",
        deliveryFee: 1000,
        freeDelivery: false,
      },
      reviewStats: {
        averageRating: 3.4,
        totalReviews: 94,
      },
      reviews: [
        {
          id: "rev_35_0",
          user: "Femi M.",
          rating: 4,
          comment:
            "My go-to order now. Consistent quality every single time I order from here.",
          date: "2026-03-10",
        },
        {
          id: "rev_35_1",
          user: "Bola S.",
          rating: 3,
          comment:
            "Solid option if you're in a hurry. Nothing spectacular but definitely not disappointing.",
          date: "2026-02-22",
        },
        {
          id: "rev_35_2",
          user: "Grace V.",
          rating: 3,
          comment:
            "Delivery took longer than expected and the packaging had leaked slightly.",
          date: "2026-02-13",
        },
        {
          id: "rev_35_3",
          user: "Kunle M.",
          rating: 4,
          comment:
            "Exceeded my expectations. The flavour was rich and it didn't feel like typical delivery food at all.",
          date: "2026-03-21",
        },
        {
          id: "rev_35_4",
          user: "Ifeoma L.",
          rating: 3,
          comment:
            "Portion was a little smaller than I expected, but the flavour was nice.",
          date: "2026-03-01",
        },
      ],
      metrics: {
        soldCount: 1556,
        wishlistCount: 229,
        views: 17116,
        cartAdds: 2743,
      },
      frequentlyBoughtTogether: ["Drink"],
      relatedimages: [],
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T20:59:00Z",
    },
    {
      id: "food_119",
      slug: "zobo-drink-37",
      name: "Zobo Drink",
      shortDescription:
        "Refreshing hibiscus drink infused with ginger, pineapple, and local spices.",
      description:
        "Quench your thirst with our premium Zobo Drink, an authentic Nigerian hibiscus herbal tea brewed fresh daily at The Burger Spot. Slow-simmered with crushed ginger, sweet pineapple juices, cloves, and a hint of citrus, this vibrant crimson beverage delivers a perfect balance of sweet, tart, and zesty notes. Served ice-cold, it functions as the ultimate refreshing companion to cut through a rich burger meal and is securely sealed to prevent delivery leaks.",
      category: {
        id: "cat_drinks",
        name: "Drinks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 2500,
        finalPrice: 2500,
      },
      images: ["/images/zobo-drink.jpg", "/images/zobo-drink-37-2.jpg"],
      badges: ["Refreshing Choice"],
      availability: {
        inStock: true,
        quantityAvailable: 53,
      },
      variants: [
        {
          id: "var_regular",
          name: "Regular Bottle (500ml)",
          priceModifier: 2500,
        },
        {
          id: "var_large",
          name: "Sharing Size Bottle (1L)",
          priceModifier: 3700,
        },
      ],
      extras: [
        {
          id: "ext_extra_ginger",
          name: "Extra Spicy Ginger Shot Infusion",
          price: 150,
        },
      ],
      customizations: {
        spiceLevel: ["Mildly Gingery", "Classic Zesty", "Strong Ginger Kick"],
        removeIngredients: [],
      },
      ingredients: [
        "Dried Hibiscus Calyces (Zobo Leaves)",
        "Fresh Ginger",
        "Pineapple Juice",
        "Cloves (Konafuru)",
        "Water",
        "Sugar",
      ],
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 3.2,
        totalReviews: 230,
      },
      reviews: [
        {
          id: "rev_37_0",
          user: "Funke I.",
          rating: 2,
          comment:
            "Delivery took longer than expected and the packaging had leaked slightly.",
          date: "2026-06-02",
        },
        {
          id: "rev_37_1",
          user: "Emeka W.",
          rating: 5,
          comment:
            "My go-to order now. Consistent quality every single time I order from here.",
          date: "2026-05-28",
        },
        {
          id: "rev_37_2",
          user: "Joy F.",
          rating: 4,
          comment:
            "Decent meal overall, though it could use a bit more seasoning for my taste.",
          date: "2026-04-09",
        },
        {
          id: "rev_37_3",
          user: "Bola H.",
          rating: 2,
          comment:
            "Not bad, but I've had better versions of this from other places nearby.",
          date: "2026-04-27",
        },
        {
          id: "rev_37_4",
          user: "Chidi M.",
          rating: 2,
          comment:
            "Not bad, but I've had better versions of this from other places nearby.",
          date: "2026-03-17",
        },
        {
          id: "rev_37_5",
          user: "Musa A.",
          rating: 4,
          comment:
            "Exceeded my expectations. The flavour was rich and it didn't feel like typical delivery food at all.",
          date: "2026-01-11",
        },
      ],
      metrics: {
        soldCount: 2826,
        wishlistCount: 1630,
        views: 22608,
        cartAdds: 3380,
      },
      frequentlyBoughtTogether: [" Sides", "Snacks"],
      relatedimages: [],
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:05:00Z",
    },
    {
      id: "food_120",
      slug: "potato-wedges-39",
      name: "Potato Wedges",
      shortDescription:
        "Crispy, seasoned potato wedges baked and fried for extra crunch.",
      description:
        "Enjoy our premium Potato Wedges, cut into thick, hearty smiles from choice potatoes, lightly tossed in a rustic blend of garlic powder, onion powder, paprika, and herbs. Par-baked then flash-fried to create a satisfyingly crisp outer skin with a fluffy, pillowy center, this flavorful side dish is prepared fresh to order at Pizza Palace. Perfectly engineered to retain heat, it serves as an excellent companion to any pizza slice or cold beverage.",
      category: {
        id: "cat_sides",
        name: "Sides",
      },
      pricing: {
        currency: "NGN",
        basePrice: 2300,
        finalPrice: 2300,
      },
      images: ["/images/potato-wedges.jpg", "/images/potato-wedges-39-2.jpg"],
      badges: ["Recommended"],
      availability: {
        inStock: true,
        quantityAvailable: 12,
      },
      variants: [
        {
          id: "var_regular",
          name: "Regular Portion",
          priceModifier: 2300,
        },
        {
          id: "var_large",
          name: "Large Sharing Portion",
          priceModifier: 3000,
        },
      ],
      extras: [
        {
          id: "ext_bbq",
          name: "Smoked BBQ Dipping Sauce",
          price: 200,
        },
        {
          id: "ext_garlic_sour",
          name: "Garlic Herb Sour Cream Dip",
          price: 250,
        },
      ],
      customizations: {
        spiceLevel: ["Mildly Seasoned", "Spicy Cajun Style"],
        removeIngredients: ["Salt"],
      },
      ingredients: [
        "Potatoes",
        "Vegetable Oil",
        "Paprika",
        "Garlic Powder",
        "Onion Powder",
        "Black Pepper",
        "Sea Salt",
      ],
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "30-45 mins",
      reviewStats: {
        averageRating: 4.2,
        totalReviews: 241,
      },
      reviews: [
        {
          id: "rev_39_0",
          user: "Yemi H.",
          rating: 4,
          comment:
            "Decent meal overall, though it could use a bit more seasoning for my taste.",
          date: "2026-06-24",
        },
        {
          id: "rev_39_1",
          user: "Joy K.",
          rating: 5,
          comment:
            "Really impressed with the presentation and taste. A bit pricey but worth every naira.",
          date: "2026-01-05",
        },
        {
          id: "rev_39_2",
          user: "Ibrahim Y.",
          rating: 5,
          comment:
            "Really impressed with the presentation and taste. A bit pricey but worth every naira.",
          date: "2026-04-22",
        },
        {
          id: "rev_39_3",
          user: "Ibrahim Z.",
          rating: 3,
          comment:
            "Delivery took longer than expected and the packaging had leaked slightly.",
          date: "2026-01-05",
        },
        {
          id: "rev_39_4",
          user: "Obinna G.",
          rating: 4,
          comment:
            "Decent meal overall, though it could use a bit more seasoning for my taste.",
          date: "2026-02-02",
        },
      ],
      metrics: {
        soldCount: 423,
        wishlistCount: 90,
        views: 4230,
        cartAdds: 617,
      },
      frequentlyBoughtTogether: [" Burgers", "Drinks", "Dessert", "Pizza"],
      relatedimages: [],
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:06:00Z",
    },
    {
      id: "food_121",
      slug: "classic-small-chops-package-45",
      name: "Classic Small Chops Package",
      shortDescription:
        "A curated party platter of Puff Puff, Samosas, Spring Rolls, and Peppered Gizzard.",
      description:
        "The ultimate Nigerian party starter! Our Classic Small Chops Package combines your favorite finger foods into one box. Every standard box contains 10 pillowy golden Puff Puffs, 4 crispy beef Samosas, 4 crunchy vegetable Spring Rolls, and 2 skewers of fiery Peppered Gizzard. Handcrafted fresh daily at Snack Corner using authentic spices, this platter is hot-packed to order to ensure every bite stays perfectly crispy and delicious during transit.",
      category: {
        id: "cat_platters",
        name: "Snacks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 6500,
        finalPrice: 6500,
      },
      images: [
        "/images/small-chops.jpg",
        "/images/small-chops-package-45-2.jpg",
      ],
      badges: ["Top Seller"],
      availability: {
        inStock: true,
        quantityAvailable: 25,
      },
      variants: [
        {
          id: "var_standard_pack",
          name: "Standard Box (Ideal for 1-2)",
          priceModifier: 6500,
        },
        {
          id: "var_party_pack",
          name: "Mega Party Platter (Double Quantity)",
          priceModifier: 11500,
        },
      ],
      extras: [
        {
          id: "ext_extra_gizzard",
          name: "Extra Skewer of Peppered Gizzard",
          price: 800,
        },
        {
          id: "ext_barbecue_sauce",
          name: "Sweet BBQ Dipping Sauce",
          price: 250,
        },
        {
          id: "ext_puff_puff_5x",
          name: "Add 5 Extra Puff Puff",
          price: 500,
        },
      ],
      customizations: {
        spiceLevel: ["Medium Spicy (Standard)", "Extra Hot Asun Style"],
        removeIngredients: ["Remove Gizzard"],
      },
      ingredients: [
        "Wheat Flour",
        "Yeast",
        "Minced Beef",
        "Cabbage",
        "Carrots",
        "Turkey Gizzard",
        "Chili Pepper",
        "Vegetable Oil",
        "Local Seasonings",
      ],
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Gluten"],
      prepTime: "30-50 mins",
      reviewStats: {
        averageRating: 4.8,
        totalReviews: 312,
      },
      reviews: [
        {
          id: "rev_45_0",
          user: "Tunde A.",
          rating: 5,
          comment:
            "The puff puff was so soft and the samosas were packed with meat! Arrived warm too.",
          date: "2026-06-15",
        },
        {
          id: "rev_45_1",
          user: "Nkechi O.",
          rating: 5,
          comment:
            "Perfect snack box. Saved me a lot of stress for my mini office gathering.",
          date: "2026-05-18",
        },
      ],
      metrics: {
        soldCount: 4510,
        wishlistCount: 890,
        views: 32100,
        cartAdds: 5120,
      },
      frequentlyBoughtTogether: [" Sides", "Drink"],
      relatedimages: [],
      createdAt: "2026-02-01T10:00:00Z",
      updatedAt: "2026-07-09T21:09:00Z",
    },
    {
      id: "food_122",
      slug: "vanilla-milkshake-43",
      name: "Vanilla Milkshake",
      shortDescription:
        "Thick and creamy vanilla milkshake topped with whipped cream.",
      description:
        "Satisfy your sweet tooth with our signature Vanilla Milkshake, blended fresh to order at Sweet Treats Kitchen. Crafted with rich vanilla bean ice cream, whole milk, and pure vanilla extract, this beverage is whipped until perfectly thick and frothy, then finished with a generous dollop of fresh whipped cream. It is delivered in insulated thermal packaging with ice packs to ensure it arrives ice-cold and refreshing.",
      category: {
        id: "cat_drinks",
        name: "Drinks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 2400,
        finalPrice: 2400,
      },
      images: [
        "/images/vanilla-milkshake.jpg",
        "/images/vanilla-milkshake-43-2.jpg",
      ],
      badges: ["New"],
      availability: {
        inStock: true,
        quantityAvailable: 14,
      },
      variants: [
        {
          id: "var_regular",
          name: "Regular Size (400ml)",
          priceModifier: 2400,
        },
        {
          id: "var_large",
          name: "Large Size (600ml)",
          priceModifier: 3200,
        },
      ],
      extras: [
        {
          id: "ext_caramel_drizzle",
          name: "Caramel Syrup Drizzle",
          price: 200,
        },
        {
          id: "ext_crushed_oreos",
          name: "Crushed Chocolate Cookies",
          price: 300,
        },
        {
          id: "ext_extra_whipped",
          name: "Extra Whipped Cream",
          price: 150,
        },
      ],
      customizations: {
        spiceLevel: [],
        removeIngredients: ["Whipped Cream"],
      },
      ingredients: [
        "Vanilla Bean Ice Cream",
        "Whole Milk",
        "Whipped Cream",
        "Vanilla Extract",
      ],
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: true,
      },
      allergens: ["Milk"],
      prepTime: "30-45 mins",
      reviewStats: {
        averageRating: 4.2,
        totalReviews: 226,
      },
      reviews: [
        {
          id: "rev_43_0",
          user: "Obinna M.",
          rating: 4,
          comment:
            "This was absolutely delicious, arrived perfectly frozen and the portion size was generous. Will definitely order again.",
          date: "2026-06-23",
        },
        {
          id: "rev_43_1",
          user: "Nneka C.",
          rating: 5,
          comment:
            "Fast delivery and the drink was still ice-cold when it got to me. Genuinely tasty!",
          date: "2026-03-05",
        },
        {
          id: "rev_43_2",
          user: "Femi Q.",
          rating: 5,
          comment:
            "Super thick and creamy vanilla flavor. Perfectly packaged so nothing leaked.",
          date: "2026-02-12",
        },
        {
          id: "rev_43_3",
          user: "Segun Q.",
          rating: 3,
          comment:
            "It was good but arrived slightly melted due to rider delay. Taste made up for it though.",
          date: "2026-01-28",
        },
      ],
      metrics: {
        soldCount: 1097,
        wishlistCount: 540,
        views: 8776,
        cartAdds: 1440,
      },
      frequentlyBoughtTogether: [" Sides", "Burgers", "Pizza", "Snacks"],
      relatedimages: [],
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:13:00Z",
    },

    {
      id: "food_123",
      slug: "chapman-45",
      name: "Chapman",
      shortDescription:
        "A chilled, fruity Nigerian mocktail with a refreshing citrus finish.",
      description:
        "Quench your thirst with Nigeria's ultimate mocktail! Our classic Chapman is handcrafted fresh to order at Grill & Chill, blending Fanta, Sprite, real Angostura bitters, and a rich splash of blackcurrant Zobo syrup. Garnished with freshly sliced cucumber, orange, and lemon wheels, this vibrant drink delivers a perfect sparkling balance of sweet and tangy flavors. Served ice-cold and tightly sealed to prevent leaks during delivery.",
      category: {
        id: "cat_drinks",
        name: "Drinks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 1900,
        finalPrice: 1900,
      },
      images: ["/images/chapman.jpg", "/images/chapman-45-2.jpg"],
      badges: ["Popular Choice", "Refreshing"],
      availability: {
        inStock: true,
        quantityAvailable: 60,
      },
      variants: [
        {
          id: "var_regular",
          name: "Regular Cup (500ml)",
          priceModifier: 1900,
        },
        {
          id: "var_large",
          name: "Jumbo Cup (750ml)",
          priceModifier: 2500,
        },
      ],
      extras: [
        {
          id: "ext_extra_bitters",
          name: "Extra Splash of Angostura Bitters",
          price: 150,
        },
      ],
      customizations: {
        spiceLevel: [],
        removeIngredients: ["Cucumber Garnish", "Lemon Slices"],
      },
      ingredients: [
        "Fanta",
        "Sprite",
        "Angostura Bitters",
        "Blackcurrant Syrup",
        "Cucumber",
        "Orange",
        "Lemon",
      ],
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "10-25 mins",
      reviewStats: {
        averageRating: 4.0,
        totalReviews: 209,
      },
      reviews: [
        {
          id: "rev_45_0",
          user: "Hassan L.",
          rating: 5,
          comment:
            "Exceeded my expectations. The flavour was rich and it didn't feel like typical delivery food at all.",
          date: "2026-02-13",
        },
        {
          id: "rev_45_1",
          user: "Musa O.",
          rating: 3,
          comment:
            "Solid option if you're in a hurry. Nothing spectacular but definitely not disappointing.",
          date: "2026-03-04",
        },
        {
          id: "rev_45_2",
          user: "Chidi J.",
          rating: 4,
          comment:
            "This was absolutely delicious, arrived ice-cold and the portion size was generous. Will definitely order again.",
          date: "2026-05-13",
        },
        {
          id: "rev_45_3",
          user: "Nneka X.",
          rating: 4,
          comment:
            "Exceeded my expectations. The flavour was rich and it didn't feel like typical delivery food at all.",
          date: "2026-02-11",
        },
      ],
      metrics: {
        soldCount: 1385,
        wishlistCount: 520,
        views: 19390,
        cartAdds: 1976,
      },
      frequentlyBoughtTogether: [" Sides", "Snacks", "Desserts"],
      relatedimages: [],
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:14:00Z",
    },
    {
      id: "food_124",
      slug: "fresh-fruit-salad-46",
      name: "Fresh Fruit Salad",
      shortDescription:
        "A vibrant, refreshing mix of diced seasonal fresh fruits.",
      description:
        "Refresh your day with our vibrant Fresh Fruit Salad, prepared fresh daily at Grill & Chill. We combine a crisp, sweet selection of locally sourced seasonal fruits including juicy watermelon, ripe sweet pawpaw, tangy pineapples, crisp apples, and sweet grapes. Hand-diced to perfection, this healthy dessert is packed in a chilled, air-tight container to keep it crisp, cool, and refreshing until it reaches your doorstep.",
      category: {
        id: "cat_desserts",
        name: "Desserts",
      },
      pricing: {
        currency: "NGN",
        basePrice: 1700,
        finalPrice: 1700,
      },
      images: ["/images/fruit-salad.jpg", "/images/fresh-fruit-salad-46-2.jpg"],
      badges: ["Healthy Choice", "Freshly Cut"],
      availability: {
        inStock: true,
        quantityAvailable: 48,
      },
      variants: [
        {
          id: "var_regular",
          name: "Regular Bowl (350g)",
          priceModifier: 1700,
        },
        {
          id: "var_large",
          name: "Large Sharing Bowl (700g)",
          priceModifier: 2900,
        },
      ],
      extras: [
        {
          id: "ext_honey",
          name: "Pure Honey Drizzle",
          price: 300,
        },
        {
          id: "ext_greek_yogurt",
          name: "Side Greek Yogurt Scoop",
          price: 600,
        },
        {
          id: "ext_cashew_nuts",
          name: "Roasted Cashew Nut Topping",
          price: 400,
        },
      ],
      customizations: {
        spiceLevel: [],
        removeIngredients: ["Pineapple", "Pawpaw"],
      },
      ingredients: [
        "Watermelon",
        "Pineapple",
        "Pawpaw (Papaya)",
        "Apple",
        "Grapes",
      ],
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.8,
        totalReviews: 47,
      },
      reviews: [
        {
          id: "rev_46_0",
          user: "Uche U.",
          rating: 5,
          comment:
            "Fast delivery and the fruits were still cold and crisp when they got to me. Genuinely tasty, would recommend.",
          date: "2026-04-22",
        },
        {
          id: "rev_46_1",
          user: "Segun E.",
          rating: 4,
          comment:
            "This was absolutely delicious, arrived perfectly chilled and the portion size was generous. Will definitely order again.",
          date: "2026-06-09",
        },
        {
          id: "rev_46_2",
          user: "Chidi M.",
          rating: 5,
          comment:
            "Exceeded my expectations. The fruit assortment was fresh and juicy, not soggy at all.",
          date: "2026-05-02",
        },
        {
          id: "rev_46_3",
          user: "Obinna C.",
          rating: 5,
          comment:
            "My go-to healthy snack now. Consistent freshness every single time I order from here.",
          date: "2026-05-13",
        },
        {
          id: "rev_46_4",
          user: "Uche V.",
          rating: 5,
          comment:
            "Super fresh! The combination of fruits was spot on and it makes a perfect healthy dessert.",
          date: "2026-01-20",
        },
      ],
      metrics: {
        soldCount: 872,
        wishlistCount: 413,
        views: 9592,
        cartAdds: 1444,
      },
      frequentlyBoughtTogether: [" Sides", "Drink"],
      relatedimages: [],
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:16:00Z",
    },
    {
      id: "food_125",
      slug: "yam-chips-51",
      name: "Yam Chips",
      shortDescription:
        "Thick-cut white yam fried crisp on the outside, fluffy inside.",
      description:
        "Savor our classic local Yam Chips (Dundun)—thick-cut slices of premium white yam, lightly salted and deep-fried to achieve a beautifully crisp, golden-brown exterior and a soft, fluffy center. Prepared fresh to order at Snack Corner, this traditional Nigerian street food favorite is best enjoyed hot alongside our signature pepper sauce, fried fish, or grilled turkey, and is packaged carefully to arrive warm and intact.",
      category: {
        id: "cat_sides",
        name: "Sides",
      },
      pricing: {
        currency: "NGN",
        basePrice: 850,
        finalPrice: 850,
      },
      images: ["/images/yam_fries.jpg", "/images/yam-chips-51-2.jpg"],
      badges: ["Recommended", "Street Favorite"],
      availability: {
        inStock: true,
        quantityAvailable: 15,
      },
      variants: [
        {
          id: "var_regular",
          name: "Regular Portion",
          priceModifier: 850,
        },
        {
          id: "var_large",
          name: "Large Sharing Portion",
          priceModifier: 1300,
        },
      ],
      extras: [
        {
          id: "ext_ata_dindin",
          name: "Spicy Fried Pepper Sauce (Ata Dindin)",
          price: 250,
        },
        {
          id: "ext_fried_egg",
          name: "Side Fried Egg",
          price: 300,
        },
        {
          id: "ext_fried_fish",
          name: "Portion of Fried Fish",
          price: 1200,
        },
      ],
      customizations: {
        spiceLevel: [],
        removeIngredients: ["Salt"],
      },
      ingredients: ["White Yam", "Vegetable Oil", "Salt"],
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "10-25 mins",
      reviewStats: {
        averageRating: 4.6,
        totalReviews: 117,
      },
      reviews: [
        {
          id: "rev_51_0",
          user: "Obinna O.",
          rating: 4,
          comment:
            "Exceeded my expectations. The flavour was rich and it didn't feel like typical delivery food at all.",
          date: "2026-05-21",
        },
        {
          id: "rev_51_1",
          user: "Amaka I.",
          rating: 4,
          comment:
            "My go-to order now. Consistent quality every single time I order from here.",
          date: "2026-01-07",
        },
        {
          id: "rev_51_2",
          user: "Zainab I.",
          rating: 5,
          comment:
            "Fast delivery and the food was still warm when it got to me. Genuinely tasty, would recommend to friends.",
          date: "2026-02-23",
        },
        {
          id: "rev_51_3",
          user: "Nneka V.",
          rating: 5,
          comment:
            "Exceeded my expectations. The flavour was rich and it didn't feel like typical delivery food at all.",
          date: "2026-02-25",
        },
        {
          id: "rev_51_4",
          user: "Segun Q.",
          rating: 5,
          comment:
            "Fast delivery and the food was still warm when it got to me. Genuinely tasty, would recommend to friends.",
          date: "2026-01-11",
        },
      ],
      metrics: {
        soldCount: 861,
        wishlistCount: 199,
        views: 6888,
        cartAdds: 1234,
      },
      frequentlyBoughtTogether: ["Chicken ", "Drink"],
      relatedimages: [],
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:18:00Z",
    },
    {
      id: "food_126",
      slug: "premium-bottled-water-52",
      name: "Mr V Bottled Water",
      shortDescription: "Chilled and sealed pure bottled water.",
      description:
        "Stay hydrated with our premium selection of pure, refreshing bottled water. Sourced from trusted local brands including Eva, Mr. V, and Nestlé Pure Life, each bottle is thoroughly filtered, securely factory-sealed, and kept chilled in our refrigerators. It serves as the essential refreshing companion to balance out any spicy or savory meal from Snack Corner.",
      category: {
        id: "cat_drinks",
        name: "Drinks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 400,
        finalPrice: 400,
      },
      images: ["/images/mr-v_water.jpg", "/images/bottled-water-52-2.jpg"],
      badges: ["Essential"],
      availability: {
        inStock: true,
        quantityAvailable: 52,
      },
      variants: [],
      extras: [],
      customizations: {
        temperature: ["Chilled", "Room Temperature"],
      },
      ingredients: [],
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "5 mins",
      reviewStats: {
        averageRating: 4.5,
        totalReviews: 135,
      },
      reviews: [
        {
          id: "rev_52_0",
          user: "Musa B.",
          rating: 5,
          comment:
            "Arrived ice-cold, which was exactly what I needed with my spicy suya.",
          date: "2026-01-22",
        },
        {
          id: "rev_52_1",
          user: "Femi Q.",
          rating: 5,
          comment:
            "Fast delivery and the bottle was clean, chilled, and perfectly factory-sealed.",
          date: "2026-03-23",
        },
        {
          id: "rev_52_2",
          user: "Uche H.",
          rating: 4,
          comment: "Good old reliable water. Neatly packaged.",
          date: "2026-02-08",
        },
      ],
      metrics: {
        soldCount: 1334,
        wishlistCount: 475,
        views: 14674,
        cartAdds: 1855,
      },
      frequentlyBoughtTogether: [" Sides", "Snacks"],
      relatedimages: [],
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:20:00Z",
    },
    {
      id: "food_127",
      slug: "chicken-nuggets-53",
      name: "Chicken Nuggets",
      shortDescription: "Bite-sized crispy breaded chicken breast pieces.",
      description:
        "Enjoy our crispy golden Chicken Nuggets, made from premium, tender chicken breast meat lightly seasoned with white pepper, garlic, and local spices. Coated in a crunchy breading and flash-fried to order at Cluck House, each batch is crispy on the outside and juicy on the inside. Perfectly packaged in a ventilated container to keep them hot and crunchy, they pair beautifully with any of our signature dipping sauces.",
      category: {
        id: "cat_snacks",
        name: "Snacks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 1600,
        finalPrice: 1600,
      },
      images: [
        "/images/chicken-nuggets.jpg",
        "/images/chicken-nuggets-53-2.jpg",
      ],
      badges: ["Top Seller", "Kids Favorite"],
      availability: {
        inStock: true,
        quantityAvailable: 3,
      },
      variants: [
        {
          id: "var_6_pcs",
          name: "6 Pieces Box",
          priceModifier: 1600,
        },
        {
          id: "var_12_pcs",
          name: "12 Pieces Sharing Box",
          priceModifier: 3000,
        },
      ],
      extras: [
        {
          id: "ext_sweet_chili",
          name: "Sweet Chili Dipping Sauce",
          price: 200,
        },
        {
          id: "ext_smoky_bbq",
          name: "Smoky Barbecue Sauce",
          price: 250,
        },
        {
          id: "ext_honey_mustard",
          name: "Honey Mustard Dip",
          price: 250,
        },
      ],
      customizations: {
        spiceLevel: ["Original (Mild)", "Spicy Peppered Dusting"],
        removeIngredients: [],
      },
      ingredients: [
        "Chicken Breast Meat",
        "Wheat Flour",
        "Breadcrumbs",
        "Garlic Powder",
        "White Pepper",
        "Vegetable Oil",
        "Salt",
      ],
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Gluten", "Egg", "Milk"],
      prepTime: "15-30 mins",
      reviewStats: {
        averageRating: 4.6,
        totalReviews: 205,
      },
      reviews: [
        {
          id: "rev_53_0",
          user: "Chidi R.",
          rating: 5,
          comment:
            "This was absolutely delicious, arrived hot and the portion size was generous. Will definitely order again.",
          date: "2026-02-17",
        },
        {
          id: "rev_53_1",
          user: "Tolu Q.",
          rating: 4,
          comment:
            "One of the best meals I've had delivered this month. Packaging was neat and the taste was on point.",
          date: "2026-01-15",
        },
        {
          id: "rev_53_2",
          user: "Ifeoma O.",
          rating: 4,
          comment:
            "Decent meal overall, though it could use a bit more seasoning for my taste.",
          date: "2026-01-26",
        },
        {
          id: "rev_53_3",
          user: "Amaka S.",
          rating: 5,
          comment:
            "Fast delivery and the food was still warm when it got to me. Genuinely tasty, would recommend to friends.",
          date: "2026-05-02",
        },
        {
          id: "rev_53_4",
          user: "Ada M.",
          rating: 5,
          comment:
            "Really impressed with the presentation and taste. A bit pricey but worth every naira.",
          date: "2026-01-09",
        },
      ],
      metrics: {
        soldCount: 1865,
        wishlistCount: 159,
        views: 11190,
        cartAdds: 2604,
      },
      frequentlyBoughtTogether: [" Sides", "Snacks", "Drink"],
      relatedimages: [],
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:22:00Z",
    },
    {
      id: "food_026",
      slug: "premium-bottled-water-52",
      name: "Eva Bottled Water",
      shortDescription: "Chilled and sealed pure bottled water.",
      description:
        "Stay hydrated with our premium selection of pure, refreshing bottled water. Sourced from trusted local brands including Eva, Mr. V, and Nestlé Pure Life, each bottle is thoroughly filtered, securely factory-sealed, and kept chilled in our refrigerators. It serves as the essential refreshing companion to balance out any spicy or savory meal from Snack Corner.",
      category: {
        id: "cat_drinks",
        name: "Drinks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 400,
        finalPrice: 400,
      },
      images: ["/images/eva-table-water.jpg", "/images/bottled-water-52-2.jpg"],
      badges: ["Essential"],
      availability: {
        inStock: true,
        quantityAvailable: 52,
      },
      variants: [
        {
          id: "var_eva",
          name: "Eva Water (75cl)",
          priceModifier: 600,
        },
        {
          id: "var_eva-2",
          name: "Eva water (1L)",
          priceModifier: 1200,
        },
      ],
      extras: [],
      customizations: {
        temperature: ["Chilled", "Room Temperature"],
      },
      ingredients: [],
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "5 mins",
      reviewStats: {
        averageRating: 4.5,
        totalReviews: 135,
      },
      reviews: [
        {
          id: "rev_52_0",
          user: "Musa B.",
          rating: 5,
          comment:
            "Arrived ice-cold, which was exactly what I needed with my spicy suya.",
          date: "2026-01-22",
        },
        {
          id: "rev_52_1",
          user: "Femi Q.",
          rating: 5,
          comment:
            "Fast delivery and the bottle was clean, chilled, and perfectly factory-sealed.",
          date: "2026-03-23",
        },
        {
          id: "rev_52_2",
          user: "Uche H.",
          rating: 4,
          comment: "Good old reliable water. Neatly packaged.",
          date: "2026-02-08",
        },
      ],
      metrics: {
        soldCount: 1334,
        wishlistCount: 475,
        views: 14674,
        cartAdds: 1855,
      },
      frequentlyBoughtTogether: [" Sides", "Snacks"],
      relatedimages: [],
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:20:00Z",
    },
    {
      id: "food_128",
      slug: "puff-pastry-delight-55",
      name: "Puff Pastry Delight",
      shortDescription:
        "Flaky sweet shortcrust pastry lightly dusted with powdered sugar.",
      description:
        "Indulge in our Puff Pastry Delight—golden, multi-layered French-style puff pastry baked fresh daily at Sweet Treats Kitchen. Crafted with rich, premium butter layers, each pastry is baked until light, crisp, and exceptionally flaky, then finished with a delicate dusting of fine powdered icing sugar. It serves as an elegant sweet snack or dessert that pairs beautifully with a hot cup of coffee or cold beverage.",
      category: {
        id: "cat_snacks",
        name: "Snacks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 2600,
        finalPrice: 2600,
      },
      images: ["/images/pastry.jpg", "/images/puff-pastry-delight-55-2.jpg"],
      badges: ["Limited Time", "Sweet Treat"],
      availability: {
        inStock: true,
        quantityAvailable: 26,
      },
      variants: [
        {
          id: "var_single",
          name: "Single Pastry",
          priceModifier: 2600,
        },
        {
          id: "var_box_of_3",
          name: "Box of 3 Pastries",
          priceModifier: 7200,
        },
      ],
      extras: [
        {
          id: "ext_caramel_sauce",
          name: "Side Caramel Dipping Sauce",
          price: 300,
        },
        {
          id: "ext_chocolate_dip",
          name: "Side Melted Chocolate Dip",
          price: 350,
        },
      ],
      customizations: {
        spiceLevel: [],
        removeIngredients: ["Powdered Sugar"],
      },
      ingredients: [
        "Wheat Flour",
        "Premium Butter",
        "Water",
        "Icing Sugar",
        "Salt",
        "Egg Wash",
      ],
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Gluten", "Egg", "Milk"],
      prepTime: "10-25 mins",
      reviewStats: {
        averageRating: 4.2,
        totalReviews: 123,
      },
      reviews: [
        {
          id: "rev_55_0",
          user: "Ifeoma J.",
          rating: 3,
          comment:
            "It was good but arrived slightly later than the estimated time. Taste made up for it though.",
          date: "2026-06-08",
        },
        {
          id: "rev_55_1",
          user: "Joy V.",
          rating: 5,
          comment:
            "My go-to order now. Consistent quality every single time I order from here.",
          date: "2026-03-27",
        },
        {
          id: "rev_55_2",
          user: "Ifeoma H.",
          rating: 4,
          comment:
            "Really impressed with the presentation and taste. A bit pricey but worth every naira.",
          date: "2026-03-14",
        },
        {
          id: "rev_55_3",
          user: "Hassan F.",
          rating: 5,
          comment:
            "My go-to order now. Consistent quality every single time I order from here.",
          date: "2026-06-21",
        },
      ],
      metrics: {
        soldCount: 4140,
        wishlistCount: 202,
        views: 45540,
        cartAdds: 7282,
      },
      frequentlyBoughtTogether: ["Drink"],
      relatedimages: [],
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:23:00Z",
    },
    {
      id: "food_130",
      slug: "egg-roll-60",
      name: "Egg Roll",
      shortDescription:
        "Classic Nigerian-style deep-fried pastry with a whole boiled egg inside.",
      description:
        "Enjoy a true local favorite! Our Nigerian Egg Roll features a perfectly hard-boiled egg wrapped in a thick, slightly sweet, yeast dough, deep-fried until beautifully golden-brown and crisp on the outside. Prepared fresh daily at Pizza Palace, this hearty and comforting pastry snack is a classic staple that pairs wonderfully with a cold beverage or juice.",
      category: {
        id: "cat_snacks",
        name: "Snacks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 850,
        finalPrice: 850,
      },
      images: ["/images/egg-roll.jpg", "/images/egg-roll-60-2.jpg"],
      badges: ["Local Favorite"],
      availability: {
        inStock: true,
        quantityAvailable: 17,
      },
      variants: [
        {
          id: "var_single",
          name: "Single Egg Roll",
          priceModifier: 850,
        },
        {
          id: "var_pack_of_3",
          name: "Value Pack of 3",
          priceModifier: 2700,
        },
      ],
      extras: [
        {
          id: "ext_chili_sauce",
          name: "Side Spicy Pepper Sauce Drizzle",
          price: 200,
        },
      ],
      customizations: {
        spiceLevel: [],
        removeIngredients: [],
      },
      ingredients: [
        "Wheat Flour",
        "Whole Boiled Egg",
        "Sugar",
        "Butter",
        "Yeast",
        "Vegetable Oil",
        "Salt",
      ],
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Gluten", "Egg", "Milk"],
      prepTime: "10-25 mins",
      reviewStats: {
        averageRating: 3.8,
        totalReviews: 38,
      },
      reviews: [
        {
          id: "rev_60_0",
          user: "Chioma C.",
          rating: 3,
          comment:
            "Delivery took longer than expected and the box was slightly crushed, but the egg roll itself tasted good.",
          date: "2026-02-10",
        },
        {
          id: "rev_60_1",
          user: "Femi R.",
          rating: 5,
          comment:
            "Fast delivery and the food was still warm when it got to me. Genuinely tasty, would recommend to friends.",
          date: "2026-04-11",
        },
        {
          id: "rev_60_2",
          user: "Ifeoma A.",
          rating: 4,
          comment:
            "Decent snack overall, though it could use a bit more sugar in the dough for my taste.",
          date: "2026-01-12",
        },
      ],
      metrics: {
        soldCount: 3660,
        wishlistCount: 960,
        views: 25620,
        cartAdds: 4898,
      },
      frequentlyBoughtTogether: ["Drink"],
      relatedimages: [],
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:30:00Z",
    },
    {
      id: "food_131",
      slug: "spicy-chicken-wings-bucket-61",
      name: "Spicy Chicken Wings Bucket",
      shortDescription:
        "Crispy chicken wings tossed in a fiery pepper-butter glaze.",
      description:
        "Dive into our ultimate Spicy Chicken Wings Bucket, loaded with juicy jumbo chicken wings deep-fried to a perfect crunch and drenched in our signature fiery habanero pepper-butter glaze. Prepared fresh to order at The Burger Spot, this flavor-packed bucket is seasoned with a touch of local chili and garlic. It is packed hot in a ventilated bucket to maintain optimal skin crispiness during delivery and is perfect for sharing.",
      category: {
        id: "cat_chicken",
        name: "Chicken",
      },
      pricing: {
        currency: "NGN",
        basePrice: 9900,
        finalPrice: 9900,
      },
      images: [
        "/images/spicy-chicken-wings.jpg",
        "/images/spicy-chicken-wings-bucket-61-2.jpg",
      ],
      badges: ["Customer Favorite"],
      availability: {
        inStock: true,
        quantityAvailable: 43,
      },
      variants: [
        {
          id: "var_regular_10pcs",
          name: "Regular Bucket (10 Pieces)",
          priceModifier: 9900,
        },
        {
          id: "var_large_15pcs",
          name: "Large Bucket (15 Pieces)",
          priceModifier: 12850,
        },
      ],
      extras: [
        {
          id: "ext_blue_cheese",
          name: "Blue Cheese Dipping Sauce",
          price: 400,
        },
        {
          id: "ext_ranch_dip",
          name: "Creamy Ranch Dip",
          price: 350,
        },
        {
          id: "ext_celery_sticks",
          name: "Side of Crisp Celery Sticks",
          price: 250,
        },
      ],
      customizations: {
        spiceLevel: [
          "Medium Heat",
          "Classic Fiery Glaze",
          "Suicidal Pepper Kick",
        ],
        removeIngredients: [],
      },
      ingredients: [
        "Chicken Wings",
        "Wheat Flour",
        "Butter",
        "Habanero Pepper (Rodo)",
        "Garlic Powder",
        "Cayenne Pepper",
        "Vegetable Oil",
        "Salt",
      ],
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Gluten", "Milk", "Egg", "Soy"],
      prepTime: "10-25 mins",
      reviewStats: {
        averageRating: 4.5,
        totalReviews: 121,
      },
      reviews: [
        {
          id: "rev_61_0",
          user: "Musa W.",
          rating: 5,
          comment:
            "Exceeded my expectations. The flavour was rich and it didn't feel like typical delivery food at all.",
          date: "2026-01-03",
        },
        {
          id: "rev_61_1",
          user: "Zainab E.",
          rating: 5,
          comment:
            "Really impressed with the presentation and taste. A bit pricey but worth every naira.",
          date: "2026-04-24",
        },
        {
          id: "rev_61_2",
          user: "Ada J.",
          rating: 4,
          comment:
            "This was absolutely delicious, arrived hot and the portion size was generous. Will definitely order again.",
          date: "2026-03-15",
        },
        {
          id: "rev_61_3",
          user: "Bola F.",
          rating: 3,
          comment:
            "It was good but arrived slightly later than the estimated time. Taste made up for it though.",
          date: "2026-04-14",
        },
        {
          id: "rev_61_4",
          user: "Emeka A.",
          rating: 5,
          comment:
            "Fast delivery and the food was still warm when it got to me. Genuinely tasty, would recommend to friends.",
          date: "2026-03-03",
        },
        {
          id: "rev_61_5",
          user: "Tolu M.",
          rating: 5,
          comment:
            "My go-to order now. Consistent quality every single time I order from here.",
          date: "2026-03-01",
        },
      ],
      metrics: {
        soldCount: 3256,
        wishlistCount: 1605,
        views: 22792,
        cartAdds: 5233,
      },
      frequentlyBoughtTogether: ["Sides", "Drinks"],
      relatedimages: [],
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:31:00Z",
    },
    {
      id: "food_132",
      slug: "puff-puff-63",
      name: "Puff Puff",
      shortDescription:
        "Soft, sweet, and pillowy deep-fried golden dough balls.",
      description:
        "Indulge in our classic Nigerian Puff Puff—pillowy, sweet dough balls lightly aromatized with a hint of nutmeg and deep-fried to a perfect golden brown. Crispy on the outside and remarkably fluffy on the inside, these comforting finger foods are prepared fresh daily at Sweet Treats Kitchen. Every batch is fried to order and securely packed in a ventilated grease-proof box to preserve maximum freshness during transit.",
      category: {
        id: "cat_snacks",
        name: "Snacks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 1700,
        finalPrice: 1700,
      },
      images: ["/images/puff-puff.jpg", "/images/puff-puff-63-2.jpg"],
      badges: ["Recommended", "Top Seller", "Freshly Fried"],
      availability: {
        inStock: true,
        quantityAvailable: 23,
      },
      variants: [
        {
          id: "var_standard_10pcs",
          name: "Standard Portion (10 Pieces)",
          priceModifier: 1700,
        },
        {
          id: "var_sharing_20pcs",
          name: "Sharing Portion (20 Pieces)",
          priceModifier: 3300,
        },
      ],
      extras: [
        {
          id: "ext_chocolate_drizzle",
          name: "Melted Chocolate Drizzle",
          price: 400,
        },
        {
          id: "ext_condensed_milk",
          name: "Sweet Condensed Milk Dip",
          price: 300,
        },
      ],
      customizations: {
        spiceLevel: ["Classic Sweet", "Peppered Puff Puff Twist"],
        removeIngredients: [],
      },
      ingredients: [
        "Wheat Flour",
        "Sugar",
        "Yeast",
        "Nutmeg",
        "Water",
        "Vegetable Oil",
      ],
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: false,
      },
      allergens: ["Gluten"],
      prepTime: "15-30 mins",
      reviewStats: {
        averageRating: 4.4,
        totalReviews: 33,
      },
      reviews: [
        {
          id: "rev_63_0",
          user: "Emeka S.",
          rating: 5,
          comment:
            "Exceeded my expectations. The flavour was rich and it didn't feel like typical delivery food at all.",
          date: "2026-05-07",
        },
        {
          id: "rev_63_1",
          user: "Joy R.",
          rating: 3,
          comment:
            "Delivery took longer than expected and the paper box was slightly squashed, but the puff puff was still soft and warm.",
          date: "2026-06-01",
        },
        {
          id: "rev_63_2",
          user: "Amaka Z.",
          rating: 5,
          comment:
            "One of the best meals I've had delivered this month. Packaging was neat and the taste was on point.",
          date: "2026-06-10",
        },
        {
          id: "rev_63_3",
          user: "Bayo E.",
          rating: 5,
          comment:
            "Really impressed with the presentation and taste. A bit pricey but worth every naira.",
          date: "2026-03-21",
        },
        {
          id: "rev_63_4",
          user: "Grace N.",
          rating: 5,
          comment:
            "One of the best meals I've had delivered this month. Packaging was neat and the taste was on point.",
          date: "2026-04-26",
        },
      ],
      metrics: {
        soldCount: 3758,
        wishlistCount: 1972,
        views: 45096,
        cartAdds: 5539,
      },
      frequentlyBoughtTogether: ["Drink"],
      relatedimages: [],
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:32:00Z",
    },
    {
      id: "food_133",
      slug: "veggie-supreme-pizza-109",
      name: "Veggie Supreme Pizza",
      shortDescription:
        "A colorful medley of seasonal vegetables and melted mozzarella on a rustic crust.",
      description:
        "Indulge in our Veggie Supreme Pizza, a colorful masterpiece baked fresh daily at Pizza Palace. Built on a hand-tossed, rustic thin crust smothered in savory Italian tomato herb sauce, it is generously loaded with premium mozzarella cheese, sweet bell peppers, crunchy red onions, juicy cherry tomatoes, sliced black olives, and sweet corn. Perfect for vegetable lovers looking for a premium, guilt-free slice.",
      category: {
        id: "cat_pizza",
        name: "Pizza",
      },
      pricing: {
        currency: "NGN",
        basePrice: 8500,
        finalPrice: 8500,
      },
      images: ["/images/veggie_pizza.jpg", "/images/pizza-9-2.jpg"],
      badges: ["Featured", "Recommended", "Healthy Choice"],
      availability: {
        inStock: true,
        quantityAvailable: 100,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_regular",
          name: "Regular Size (10 inch)",
          priceModifier: 8500,
        },
        {
          id: "var_large",
          name: "Large Size (12 inch)",
          priceModifier: 12500,
        },
      ],
      extras: [
        {
          id: "ext_extra_cheese",
          name: "Extra Mozzarella Cheese",
          price: 1000,
        },
        {
          id: "ext_mushrooms",
          name: "Add Sautéed Mushrooms",
          price: 800,
        },
      ],
      customizations: {
        spiceLevel: ["Original (Mild)", "Spicy Chili Flake Dusting"],
        removeIngredients: ["Onions", "Tomatoes", "Black Olives"],
      },
      ingredients: [
        "Wheat Flour",
        "Pizza Sauce",
        "Mozzarella Cheese",
        "Bell Peppers",
        "Red Onions",
        "Cherry Tomatoes",
        "Black Olives",
        "Sweet Corn",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 723,
        protein: 13,
        carbs: 49,
        fat: 14,
        sugar: 1,
        fiber: 6,
        sodium: 272,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.2,
        totalReviews: 362,
      },
      reviews: [
        {
          id: "rev_15_0",
          user: "Emeka S.",
          rating: 5,
          comment:
            "Really impressed with the presentation and taste. A bit pricey but worth every naira.",
          date: "2026-04-07",
        },
        {
          id: "rev_15_1",
          user: "Uche T.",
          rating: 4,
          comment:
            "It was good but arrived slightly later than the estimated time. Taste made up for it though.",
          date: "2026-06-24",
        },
        {
          id: "rev_15_2",
          user: "Emeka S.",
          rating: 4,
          comment:
            "Exceeded my expectations. The flavour was rich and it didn't feel like typical delivery food at all.",
          date: "2026-03-01",
        },
        {
          id: "rev_15_3",
          user: "Grace G.",
          rating: 5,
          comment:
            "Fast delivery and the food was still warm when it got to me. Genuinely tasty, would recommend to friends.",
          date: "2026-05-03",
        },
      ],
      metrics: {
        soldCount: 4076,
        wishlistCount: 488,
        views: 36339,
        cartAdds: 2667,
        trendingScore: 96,
      },
      recommendation: {
        score: 96,
        reason: "Frequently ordered item",
      },
      frequentlyBoughtTogether: ["Drinks", "Dessert"],
      relatedimages: [],
      seo: {
        metaTitle: "Veggie Supreme Pizza | Pizza Palace",
        metaDescription:
          "Order our fresh, hot Veggie Supreme Pizza loaded with colorful vegetables and melted mozzarella from Pizza Palace.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:37:00Z",
    },
    {
      id: "food_134",
      slug: "orange-juice-110",
      name: "Fresh Orange Juice",
      shortDescription:
        "Pure, freshly squeezed orange juice made daily with zero added sugar.",
      description:
        "Refresh your senses with our premium Fresh Orange Juice, squeezed daily at Sweet Treats Kitchen from the finest locally sourced citrus fruits. 100% natural, sweet, and bursting with Vitamin C, this vibrant beverage contains absolutely no added sugars, water, or artificial preservatives. Served perfectly ice-cold and sealed securely in a spill-proof bottle to ensure maximum freshness upon arrival.",
      category: {
        id: "cat_juice",
        name: "Juice",
      },
      pricing: {
        currency: "NGN",
        basePrice: 3000,
        finalPrice: 3000,
      },
      images: ["/images/orange-juice.jpg", "/images/drinks-10-2.jpg"],
      badges: ["Popular", "Featured", "100% Natural"],
      availability: {
        inStock: true,
        quantityAvailable: 22,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_regular_500ml",
          name: "Regular Bottle (500ml)",
          priceModifier: 3000,
        },
        {
          id: "var_large_750ml",
          name: "Large Bottle (750ml)",
          priceModifier: 4200,
        },
      ],
      extras: [
        {
          id: "ext_mint_leaves",
          name: "Infuse Fresh Mint Leaves",
          price: 150,
        },
        {
          id: "ext_ginger_shot",
          name: "Add Fresh Ginger Shot",
          price: 250,
        },
      ],
      customizations: {
        temperature: ["Chilled with Ice", "Chilled No Ice", "Room Temperature"],
      },
      ingredients: ["100% Freshly Squeezed Oranges"],
      nutrition: {
        servingSize: "400g",
        calories: 180,
        protein: 3,
        carbs: 43,
        fat: 0,
        sugar: 34,
        fiber: 1,
        sodium: 4,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "10-15 mins",
      reviewStats: {
        averageRating: 4.1,
        totalReviews: 392,
      },
      reviews: [
        {
          id: "rev_110_0",
          user: "Tolu B.",
          rating: 5,
          comment:
            "Incredibly fresh juice, you can tell it's not the boxed artificial stuff. Arrived ice-cold!",
          date: "2026-05-14",
        },
        {
          id: "rev_110_1",
          user: "Chidi E.",
          rating: 4,
          comment:
            "Perfect natural sweet flavor. Tightly sealed bottle so nothing spilled in the rider's bag.",
          date: "2026-06-20",
        },
      ],
      metrics: {
        soldCount: 2879,
        wishlistCount: 1689,
        views: 8161,
        cartAdds: 4573,
        trendingScore: 62,
      },
      recommendation: {
        score: 72,
        reason: "Frequently ordered item",
      },
      frequentlyBoughtTogether: [
        "Desserts",
        "Pizza",
        "Snacks",
        "Burgers",
        " Sides",
      ],
      relatedimages: [],
      seo: {
        metaTitle: "Fresh Orange Juice | Sweet Treats Kitchen",
        metaDescription:
          "Order 100% natural, freshly squeezed orange juice made daily with no added preservatives from Sweet Treats Kitchen.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:40:00Z",
    },
    {
      id: "food_135",
      slug: "watermelon-juice-111",
      name: "Fresh Watermelon Juice",
      shortDescription:
        "Pure, cold-pressed watermelon juice made fresh daily with zero added sugar.",
      description:
        "Quench your thirst with our premium Fresh Watermelon Juice, pressed daily at Sweet Treats Kitchen from the sweetest ripe watermelons. 100% natural, incredibly hydrating, and bursting with vitamins, this vibrant crimson beverage contains absolutely no added sugars, artificial water dilution, or preservatives. Served ice-cold and sealed in a spill-proof bottle to guarantee freshness.",
      category: {
        id: "cat_juice",
        name: "Juice",
      },
      pricing: {
        currency: "NGN",
        basePrice: 2500,
        finalPrice: 2500,
      },
      images: ["/images/watermelon-juice.jpg", "/images/drinks-11-2.jpg"],
      badges: ["Featured"],
      availability: {
        inStock: true,
        quantityAvailable: 66,
      },
      variants: [
        {
          id: "var_regular_500ml",
          name: "Regular Bottle (500ml)",
          priceModifier: 2500,
        },
        {
          id: "var_large_750ml",
          name: "Large Bottle (750ml)",
          priceModifier: 3500,
        },
      ],
      extras: [
        {
          id: "ext_mint_leaves",
          name: "Infuse Fresh Mint Leaves",
          price: 200,
        },
        {
          id: "ext_lime_squeeze",
          name: "Add a Fresh Lime",
          price: 200,
        },
      ],
      customizations: {
        temperature: ["Chilled with Ice", "Chilled No Ice", "Room Temperature"],
      },
      ingredients: ["100% Fresh Watermelon"],
      nutrition: {
        servingSize: "400g",
        calories: 120,
        protein: 2,
        carbs: 30,
        fat: 0,
        sugar: 24,
        fiber: 2,
        sodium: 4,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "10-15 mins",
      reviewStats: {
        averageRating: 4.8,
        totalReviews: 454,
      },
      reviews: [
        {
          id: "rev_111_0",
          user: "Nneka A.",
          rating: 5,
          comment:
            "The best thing to drink on a hot afternoon in Lagos! Pure, sweet watermelon taste with no artificial junk.",
          date: "2026-05-18",
        },
        {
          id: "rev_111_1",
          user: "Femi T.",
          rating: 5,
          comment:
            "Super refreshing and arrived perfectly cold. Tightly sealed bottle too.",
          date: "2026-06-02",
        },
      ],
      metrics: {
        soldCount: 2036,
        wishlistCount: 390,
        views: 27634,
        cartAdds: 8456,
        trendingScore: 80,
      },
      recommendation: {
        score: 73,
        reason: "Frequently ordered item",
      },
      frequentlyBoughtTogether: ["Burger", "Desserts", "Snacks ", " Sides"],
      relatedimages: [],
      seo: {
        metaTitle: "Fresh Watermelon Juice | Sweet Treats Kitchen",
        metaDescription:
          "Order 100% natural, cold-pressed watermelon juice made fresh daily with no added preservatives from Sweet Treats Kitchen.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:42:00Z",
    },
    {
      id: "food_136",
      slug: "fried-chicken-112",
      name: "Crispy Fried Chicken",
      shortDescription:
        "Golden, crunchy southern-style fried chicken seasoned with local spices.",
      description:
        "Satisfy your cravings with our signature Crispy Fried Chicken, prepared fresh daily at Cluck House. Made from premium, tender chicken pieces marinated overnight in a rich blend of garlic, white pepper, and local herbs, each piece is double-dredged in seasoned flour and flash-fried to a perfect golden crunch. Exceptionally juicy on the inside and crispy on the outside, it is packaged in a ventilated box to maintain its crunch during delivery.",
      category: {
        id: "cat_chicken",
        name: "Chicken",
      },
      pricing: {
        currency: "NGN",
        basePrice: 4800,
        finalPrice: 4800,
      },
      images: ["/images/fried-chicken.jpg", "/images/chicken-12-2.jpg"],
      badges: ["Popular"],
      availability: {
        inStock: true,
        quantityAvailable: 68,
      },
      variants: [
        {
          id: "var_2_pcs",
          name: "Standard Box (2 Pieces)",
          priceModifier: 4800,
        },
        {
          id: "var_4_pcs",
          name: "Jumbo Box (4 Pieces)",
          priceModifier: 8500,
        },
      ],
      extras: [
        {
          id: "ext_smoky_bbq",
          name: "Smoky Barbecue Dip",
          price: 500,
        },
        {
          id: "ext_sweet_chili",
          name: "Sweet Chili Sauce",
          price: 500,
        },
        {
          id: "ext_french_fries",
          name: "Side Portion of French Fries",
          price: 1000,
        },
      ],
      customizations: {
        spiceLevel: [
          "Original Mild",
          "Spicy Naija Heat",
          "Fiery Ghost Pepper Dusting",
        ],
      },
      ingredients: [
        "Premium Chicken Cuts",
        "Wheat Flour",
        "Buttermilk",
        "Garlic Powder",
        "White Pepper",
        "Cayenne Pepper",
        "Vegetable Oil",
        "Salt",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 546,
        protein: 37,
        carbs: 12,
        fat: 41,
        sugar: 0,
        fiber: 1,
        sodium: 503,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.9,
        totalReviews: 316,
      },
      reviews: [
        {
          id: "rev_27_0",
          user: "Segun U.",
          rating: 4,
          comment:
            "It was good but arrived slightly later than the estimated time. Taste made up for it though.",
          date: "2026-04-04",
        },
        {
          id: "rev_27_1",
          user: "Grace L.",
          rating: 5,
          comment:
            "This was absolutely delicious, arrived hot and the portion size was generous. Will definitely order again.",
          date: "2026-04-07",
        },
        {
          id: "rev_27_2",
          user: "Emeka V.",
          rating: 4,
          comment:
            "Exceeded my expectations. The flavour was rich and it didn't feel like typical delivery food at all.",
          date: "2026-05-12",
        },
        {
          id: "rev_27_3",
          user: "Chioma I.",
          rating: 3,
          comment:
            "Food arrived lukewarm and the seasoning felt inconsistent compared to my last order.",
          date: "2026-01-07",
        },
        {
          id: "rev_27_4",
          user: "Femi G.",
          rating: 3,
          comment:
            "Food arrived lukewarm and the seasoning felt inconsistent compared to my last order.",
          date: "2026-06-21",
        },
      ],
      metrics: {
        soldCount: 4541,
        wishlistCount: 174,
        views: 21552,
        cartAdds: 1436,
        trendingScore: 53,
      },
      recommendation: {
        score: 97,
        reason: "Frequently ordered item",
      },
      frequentlyBoughtTogether: ["Burger", "Drinks", "Snacks", "Sides"],
      relatedimages: [],
      seo: {
        metaTitle: "Crispy Fried Chicken | Cluck House",
        metaDescription:
          "Order hot, crunchy golden fried chicken pieces seasoned to perfection from Cluck House on our delivery app.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:44:00Z",
    },
    {
      id: "food_137",
      slug: "deluxe-wrap-113",
      name: "Deluxe Chicken Shawarma Wrap",
      shortDescription:
        "Tender grilled chicken, crisp vegetables, and creamy garlic sauce enclosed in a toasted tortilla.",
      description:
        "Savor our Deluxe Chicken Shawarma Wrap, a premium handcrafted favorite made fresh daily at The Burger Spot. Packed with seasoned, grilled chicken breast strips, crisp shredded cabbage, sweet carrots, and juicy tomatoes, everything is generously drizzled with our signature creamy garlic mayo and a touch of sweet chili sauce. Tightly rolled in a soft flour tortilla and lightly toasted for a satisfying crunch, it is wrapped in foil to arrive hot and intact.",
      category: {
        id: "cat_wrap",
        name: "Wrap",
      },
      pricing: {
        currency: "NGN",
        basePrice: 4600,
        finalPrice: 4600,
      },
      images: ["/images/deluxe-wrap.jpg", "/images/wrap-13-2.jpg"],
      badges: ["Featured"],
      availability: {
        inStock: true,
        quantityAvailable: 18,
      },
      variants: [
        {
          id: "var_regular",
          name: "Regular Size Wrap",
          priceModifier: 4600,
        },
        {
          id: "var_large",
          name: "Jumbo Size Wrap",
          priceModifier: 6000,
        },
      ],
      extras: [
        {
          id: "ext_extra_chicken",
          name: "Add Extra Grilled Chicken",
          price: 1000,
        },
        {
          id: "ext_cheddar_slice",
          name: "Add Melted Cheddar Cheese Slice",
          price: 400,
        },
        {
          id: "ext_sausage",
          name: "Add Grilled Sausage Link",
          price: 600,
        },
      ],
      customizations: {
        spiceLevel: ["Mild Sauce", "Medium Spicy Cream", "Hot Pepper Infusion"],
        removeIngredients: ["Cabbage", "Tomatoes", "Garlic Mayo"],
      },
      ingredients: [
        "Flour Tortilla",
        "Grilled Chicken Breast",
        "Shredded Cabbage",
        "Carrots",
        "Tomatoes",
        "Garlic Mayonnaise",
        "Sweet Chili Sauce",
        "Spices",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 704,
        protein: 28,
        carbs: 50,
        fat: 22,
        sugar: 3,
        fiber: 6,
        sodium: 452,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.5,
        totalReviews: 337,
      },
      reviews: [
        {
          id: "rev_29_1",
          user: "John D.",
          rating: 5,
          comment: "Good value for the price. The chicken was well-seasoned.",
          date: "2026-04-07",
        },
        {
          id: "rev_29_2",
          user: "John D.",
          rating: 5,
          comment: "Fresh ingredients and generous portion size.",
          date: "2026-02-23",
        },
        {
          id: "rev_29_3",
          user: "Chioma O.",
          rating: 4,
          comment: "Absolutely delicious and arrived hot.",
          date: "2026-02-11",
        },
        {
          id: "rev_29_4",
          user: "David K.",
          rating: 5,
          comment: "Perfect evening snack. The wrap wasn't soggy at all.",
          date: "2026-04-16",
        },
      ],
      metrics: {
        soldCount: 771,
        wishlistCount: 908,
        views: 44081,
        cartAdds: 9760,
        trendingScore: 83,
      },
      recommendation: {
        score: 80,
        reason: "Frequently ordered item",
      },
      frequentlyBoughtTogether: ["Drinks", "Dessert", "Sides", "Snacks"],
      relatedimages: [],
      seo: {
        metaTitle: "Deluxe Chicken Wrap | The Burger Spot",
        metaDescription:
          "Order our fresh, hot Deluxe Chicken Shawarma Wrap toasted to perfection with veggies and garlic sauce from The Burger Spot.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:45:00Z",
    },
    {
      id: "food_138",
      slug: "veggie-burger-117",
      name: "Veggie Burger",
      shortDescription:
        "Wholesome, grilled plant-based patty served with crisp greens on a toasted bun.",
      description:
        "Savor our wholesome Veggie Burger, crafted fresh daily at Chicken Republic Grill. Featuring a savory pan-seared vegetable patty made from mashed sweet potatoes, sweet corn, and green peas, it is layered with melted cheddar cheese, crisp lettuce, fresh tomato slices, pickles, and a smear of herb mayonnaise inside a soft toasted brioche bun. Packaged carefully to arrive warm and perfectly intact.",
      category: {
        id: "cat_burgers",
        name: "Burgers",
      },
      pricing: {
        currency: "NGN",
        basePrice: 5500,
        finalPrice: 5500,
      },
      images: ["/images/veggie_burger.jpg", "/images/burger-17-2.jpg"],
      badges: ["Healthy Choice"],
      availability: {
        inStock: true,
        quantityAvailable: 26,
      },
      variants: [
        {
          id: "var_regular",
          name: "Regular Single Patty",
          priceModifier: 5500,
        },
        {
          id: "var_large",
          name: "Jumbo Double Patty",
          priceModifier: 6500,
        },
      ],
      extras: [
        {
          id: "ext_extra_cheese",
          name: "Extra Cheddar Cheese Slice",
          price: 500,
        },
        {
          id: "ext_avocado",
          name: "Add Sliced Fresh Avocado",
          price: 800,
        },
        {
          id: "ext_french_fries",
          name: "Side Portion of French Fries",
          price: 1000,
        },
      ],
      customizations: {
        spiceLevel: ["Classic Mild", "Spicy Pepper Mayo Kick"],
        removeIngredients: ["Onions", "Tomatoes", "Pickles", "Cheese"],
      },
      ingredients: [
        "Vegetable Patty (Sweet Potato, Peas, Corn)",
        "Brioche Bun",
        "Cheddar Cheese",
        "Lettuce",
        "Tomatoes",
        "Pickles",
        "Mayonnaise",
        "Spices",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 421,
        protein: 18,
        carbs: 55,
        fat: 12,
        sugar: 6,
        fiber: 8,
        sodium: 898,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.6,
        totalReviews: 201,
      },
      reviews: [
        {
          id: "rev_20_0",
          user: "Ifeoma R.",
          rating: 4,
          comment:
            "Solid option if you're in a hurry. Nothing spectacular but definitely not disappointing.",
          date: "2026-04-16",
        },
        {
          id: "rev_20_1",
          user: "Hassan K.",
          rating: 4,
          comment:
            "Fast delivery and the food was still warm when it got to me. Genuinely tasty, would recommend to friends.",
          date: "2026-03-20",
        },
        {
          id: "rev_20_2",
          user: "Nneka S.",
          rating: 4,
          comment:
            "Really impressed with the presentation and taste. A bit pricey but worth every naira.",
          date: "2026-06-01",
        },
        {
          id: "rev_20_3",
          user: "Bayo Q.",
          rating: 3,
          comment:
            "It was good but arrived slightly later than the estimated time. Taste made up for it though.",
          date: "2026-04-21",
        },
        {
          id: "rev_20_4",
          user: "Segun U.",
          rating: 3,
          comment:
            "Delivery took longer than expected and the paper box was slightly squashed, but the burger itself was excellent.",
          date: "2026-04-27",
        },
        {
          id: "rev_20_5",
          user: "Segun K.",
          rating: 3,
          comment:
            "Not bad, but I've had better versions of this from other places nearby.",
          date: "2026-06-11",
        },
      ],
      metrics: {
        soldCount: 4686,
        wishlistCount: 1860,
        views: 27632,
        cartAdds: 3032,
        trendingScore: 65,
      },
      recommendation: {
        score: 70,
        reason: "Frequently ordered item",
      },
      frequentlyBoughtTogether: ["Drinks", "Dessert", "Sides"],
      relatedimages: [],
      seo: {
        metaTitle: "Healthy Veggie Burger | Chicken Republic Grill",
        metaDescription:
          "Order our flame-grilled Veggie Burger loaded with a wholesome plant-based patty, melted cheese, and fresh greens from Chicken Republic Grill.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:50:00Z",
    },
    {
      id: "food_139",
      slug: "chicken-bucket-18",
      name: "Crispy Chicken Bucket",
      shortDescription:
        "8 pieces of golden, crispy, fresh buttermilk fried chicken.",
      description:
        "Our signature Crispy Chicken Bucket is prepared fresh daily using premium, tender chicken marinated in local buttermilk and tossed in our secret 11-spice blend. Fried to a perfect golden crunch and served piping hot for the ultimate sharing experience.",
      category: {
        id: "cat_chicken",
        name: "Chicken",
      },
      pricing: {
        currency: "NGN",
        basePrice: 14500,
        finalPrice: 14500,
      },
      images: ["/images/chicken-bucket.jpg", "/images/chicken-18-2.jpg"],
      badges: ["New", "Popular"],
      availability: {
        inStock: true,
        quantityAvailable: 95,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_cb_8p",
          name: "8 Pieces (Standard)",
          priceModifier: 12500,
        },
        {
          id: "var_cb_12p",
          name: "12 Pieces (Large)",
          priceModifier: 18500,
        },
      ],
      extras: [
        {
          id: "ext_fries",
          name: "Large French Fries",
          price: 1800,
        },
        {
          id: "ext_coleslaw",
          name: "Creamy Coleslaw",
          price: 1200,
        },
        {
          id: "ext_dipping_sauce",
          name: "Signature Spicy Dip",
          price: 500,
        },
      ],
      customizations: {
        spiceLevel: ["Classic Mild", "Regular Spicy", "Naija Hot"],
        removeIngredients: ["Remove Skin"],
      },
      ingredients: [
        "Premium Chicken Cuts",
        "Buttermilk Marination",
        "Wheat Flour Blend",
        "Vegetable Oil",
        "Secret Spice Mix",
        "Garlic Powder",
        "Onion Powder",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 842,
        protein: 52,
        carbs: 34,
        fat: 48,
        sugar: 1,
        fiber: 2,
        sodium: 890,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten", "Celery"],
      prepTime: "25-45 mins",
      reviewStats: {
        averageRating: 4.5,
        totalReviews: 438,
      },
      reviews: [
        {
          id: "rev_24_0",
          user: "Femi R.",
          rating: 4,
          comment:
            "Very crispy skin and the chicken was well seasoned inside. Will buy again.",
          date: "2026-01-06",
        },
        {
          id: "rev_24_1",
          user: "Obinna U.",
          rating: 5,
          comment:
            "My go-to order now. Consistent quality every single time I order from here.",
          date: "2026-06-14",
        },
        {
          id: "rev_24_2",
          user: "Chioma P.",
          rating: 5,
          comment:
            "One of the best meals I've had delivered this month. Packaging was neat and the taste was on point.",
          date: "2026-02-04",
        },
      ],
      metrics: {
        soldCount: 3870,
        wishlistCount: 766,
        views: 21000,
        cartAdds: 4228,
        trendingScore: 84,
      },
      recommendation: {
        score: 88,
        reason: "Top trending sharing platter this week",
      },
      frequentlyBoughtTogether: ["Milkshakes", "Soda", "Dessert", "Juice"],
      relatedimages: [],
      seo: {
        metaTitle: "Order Crispy Fried Chicken Bucket Online | Foodie",
        metaDescription:
          "Get 8 pieces of freshly fried, golden crispy chicken delivered hot. Order the best chicken bucket on Foodie now.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T16:48:00.000Z",
    },

    //here
    {
      id: "food_140",
      slug: "chicken-wrap-20",
      name: "Big Bang Chicken Wrap",
      shortDescription:
        "Toasted tortilla packed with spicy chicken, cheese, and sweet chili sauce.",
      description:
        "Our Big Bang Chicken Wrap is loaded with tender, flame-grilled chicken breast strips, melted shredded mozzarella, crisp lettuce, juicy tomatoes, and our signature spicy sweet chili explosion sauce, all wrapped up and toasted in a soft flour tortilla.",
      category: {
        id: "cat_wrap",
        name: "Wrap",
      },
      pricing: {
        currency: "NGN",
        basePrice: 4600,
        finalPrice: 4600,
      },
      images: ["/images/bang-bang-chicken-wrap.jpg", "/images/wrap-20-2.jpg"],
      badges: ["Popular", "Recommended"],
      availability: {
        inStock: true,
        quantityAvailable: 15,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_wrap_regular",
          name: "Standard (No hot-dog)",
          priceModifier: 4600,
        },
        {
          id: "var_wrap_medium",
          name: "Plus One Hot-Dog",
          priceModifier: 5800,
        },
        {
          id: "var_wrap_large",
          name: "Plus Two Hot-Dogs",
          priceModifier: 7000,
        },
      ],
      extras: [
        {
          id: "ext_extra_cheese",
          name: "Extra Mozzarella",
          price: 1000,
        },
        {
          id: "ext_avocado",
          name: "Fresh Avocado Slices",
          price: 1100,
        },
      ],
      customizations: {
        spiceLevel: ["Mild", "Medium", "Hot Sauce"],
        removeIngredients: ["Onions", "Tomatoes", "Lettuce"],
      },
      ingredients: [
        "Flame-Grilled Chicken Breast",
        "Flour Tortilla Wrap",
        "Shredded Mozzarella Cheese",
        "Sweet Chili Sauce",
        "Fresh Lettuce",
        "Sliced Tomatoes",
        "Red Onions",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 616,
        protein: 46,
        carbs: 54,
        fat: 24,
        sugar: 8,
        fiber: 5,
        sodium: 840,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.7,
        totalReviews: 360,
      },
      reviews: [
        {
          id: "rev_26_0",
          user: "Femi I.",
          rating: 5,
          comment:
            "Really impressed with the presentation and taste. Premium quality and worth every naira.",
          date: "2026-04-19",
        },
        {
          id: "rev_26_1",
          user: "Femi H.",
          rating: 4,
          comment:
            "Decent meal overall, filling and fresh. Could use a bit more of that signature hot sauce!",
          date: "2026-01-16",
        },
        {
          id: "rev_26_2",
          user: "Uche H.",
          rating: 5,
          comment:
            "Exceeded my expectations. The flavour was rich and it didn't feel like typical heavy delivery food at all.",
          date: "2026-01-21",
        },
      ],
      metrics: {
        soldCount: 2804,
        wishlistCount: 1326,
        views: 21572,
        cartAdds: 2541,
        trendingScore: 96,
      },
      recommendation: {
        score: 92,
        reason: "Top rated lunch wrap this week",
      },
      frequentlyBoughtTogether: ["Drinks", "Dessert", "Sides"],
      relatedimages: [],
      seo: {
        metaTitle: "Big Bang Spicy Chicken Wrap Online Delivery | Foodie",
        metaDescription:
          "Order the best Big Bang Chicken Wrap on the Foodie app. Loaded with grilled chicken, cheese, and hot sweet chili sauce.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T16:50:00.000Z",
    },
    {
      id: "food_141",
      slug: "smoothie-21",
      name: "Berry Bliss Smoothie",
      shortDescription:
        "Creamy blend of strawberries, blueberries, greek yogurt, and honey.",
      description:
        "Our Berry Bliss Smoothie is a refreshing, antioxidant-rich blend of premium strawberries, wild blueberries, and raspberries, whipped together with thick greek yogurt and a touch of pure organic honey. Served ice-cold for an instant refreshing kick.",
      category: {
        id: "cat_drink",
        name: "Drinks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 3500,
        finalPrice: 3500,
      },
      images: ["/images/smoothie.jpg", "/images/drinks-21-2.jpg"],
      badges: ["Popular", "Featured"],
      availability: {
        id: "avail_121",
        inStock: true,
        quantityAvailable: 63,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_sm_regular",
          name: "Regular (500ml)",
          priceModifier: 3500,
        },
        {
          id: "var_sm_large",
          name: "Large (700ml)",
          priceModifier: 4700,
        },
      ],
      extras: [
        {
          id: "ext_protein",
          name: "Whey Protein Scoop",
          price: 1500,
        },
        {
          id: "ext_chia",
          name: "Organic Chia Seeds",
          price: 600,
        },
      ],
      customizations: {
        spiceLevel: [],
        removeIngredients: ["No Honey"],
      },
      ingredients: [
        "Strawberries",
        "Blueberries",
        "Greek Yogurt",
        "Organic Honey",
        "Apple Juice Base",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 280,
        protein: 8,
        carbs: 58,
        fat: 2,
        sugar: 44,
        fiber: 6,
        sodium: 45,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: true,
      },
      allergens: ["Milk"],
      prepTime: "15-30 mins",
      reviewStats: {
        averageRating: 4.8,
        totalReviews: 175,
      },
      reviews: [
        {
          id: "rev_21_0",
          user: "Amara K.",
          rating: 5,
          comment:
            "Thick, creamy, and wasn't overly sugary. Tastes super authentic!",
          date: "2026-05-12",
        },
      ],
      metrics: {
        soldCount: 2450,
        wishlistCount: 480,
        views: 29173,
        cartAdds: 5779,
        trendingScore: 88,
      },
      recommendation: {
        score: 90,
        reason: "Top paired beverage with breakfasts",
      },
      frequentlyBoughtTogether: [
        "Burgers",
        "Snacks",
        "Sides",
        "Dessert",
        "Pizza",
      ],
      relatedimages: [],
      seo: {
        metaTitle: "Fresh Berry Bliss Smoothie Delivery | Foodie",
        metaDescription:
          "Order our best-selling Berry Bliss Smoothie on Foodie. Fresh berries mixed with pure Greek yogurt and rich honey.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T16:55:00.000Z",
    },
    {
      id: "food_142",
      slug: "chicken-wrap-22",
      name: "Garden Chicken Salad Wrap",
      shortDescription:
        "Light toasted tortilla loaded with shredded chicken and crunchy greens.",
      description:
        "Our Garden Chicken Salad Wrap blends light, tender shredded seasoned chicken breast with sliced cucumbers, garden tomatoes, sweet corn, and a splash of low-fat herb dressing, securely rolled into a toasted wheat flatbread wrap.",
      category: {
        id: "cat_wrap",
        name: "Wrap",
      },
      pricing: {
        currency: "NGN",
        basePrice: 5500,
        finalPrice: 5500,
      },
      images: ["/images/chicken-salad-wrap.jpg", "/images/wrap-22-2.jpg"],
      badges: ["New", "Recommended"],
      availability: {
        id: "avail_122",
        inStock: true,
        quantityAvailable: 94,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_csw_regular",
          name: "Standard (No hot-dog)",
          priceModifier: 5500,
        },
        {
          id: "var_csw_medium",
          name: "Plus One Hot-Dog",
          priceModifier: 6700,
        },
        {
          id: "var_csw_large",
          name: "Plus Two Hot-Dogs",
          priceModifier: 7900,
        },
      ],
      extras: [
        {
          id: "ext_csw_cheese",
          name: "Extra Cheddar Cheese Slice",
          price: 1000,
        },
        {
          id: "ext_csw_egg",
          name: "Boiled Egg Slices",
          price: 800,
        },
      ],
      customizations: {
        spiceLevel: ["Mild / Zero Spice", "Medium Warmth", "Hot Flakes"],
        removeIngredients: ["Remove Sweet Corn", "Remove Cucumbers"],
      },
      ingredients: [
        "Shredded Chicken Breast",
        "Whole Wheat Tortilla",
        "Garden Cucumbers",
        "Sweet Corn",
        "Light Herb Dressing",
        "Plum Tomatoes",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 510,
        protein: 42,
        carbs: 48,
        fat: 14,
        sugar: 6,
        fiber: 7,
        sodium: 680,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Gluten", "Mustard"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.6,
        totalReviews: 43,
      },
      reviews: [
        {
          id: "rev_38_0",
          user: "Hassan T.",
          rating: 4,
          comment:
            "My go-to healthy order now. Consistent freshness every single time I order from here.",
          date: "2026-04-17",
        },
        {
          id: "rev_38_1",
          user: "Obinna D.",
          rating: 5,
          comment:
            "One of the best meals I've had delivered this month. Packaging was neat and the taste was on point.",
          date: "2026-02-02",
        },
        {
          id: "rev_38_2",
          user: "Bola D.",
          rating: 5,
          comment:
            "Fast delivery and the food was still warm when it got to me. Genuinely tasty, would recommend to friends.",
          date: "2026-04-27",
        },
        {
          id: "rev_38_3",
          user: "Ifeoma S.",
          rating: 4,
          comment:
            "Really impressed with the presentation and fresh taste. Worth every naira.",
          date: "2026-06-08",
        },
        {
          id: "rev_38_4",
          user: "Uche L.",
          rating: 5,
          comment:
            "This was absolutely delicious, arrived super fresh and the portion size was generous. Will definitely order again.",
          date: "2026-05-08",
        },
      ],
      metrics: {
        soldCount: 2105,
        wishlistCount: 1023,
        views: 41060,
        cartAdds: 1693,
        trendingScore: 82,
      },
      recommendation: {
        score: 86,
        reason: "Highly rated fitness item this month",
      },
      frequentlyBoughtTogether: ["Drinks", "Sides", "Dessert"],
      relatedimages: [],
      seo: {
        metaTitle: "Healthy Garden Chicken Salad Wrap | Foodie",
        metaDescription:
          "Order our high-protein Garden Chicken Salad Wrap on Foodie. Packed with grilled chicken breast and crisp healthy vegetables.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T16:55:00.000Z",
    },
    {
      id: "food_143",
      slug: "ice-cream-23",
      name: "Artisan Ice Cream Tub (1L)",
      shortDescription:
        "Premium, slow-churned double chocolate and vanilla bean ice cream tub.",
      description:
        "Our Artisan Ice Cream Tub is slow-churned daily using local dairy cream, organic vanilla pods, and premium West African cocoa. Perfectly rich, smooth, and delivered in insulated packaging to prevent melting on your way.",
      category: {
        id: "cat_dessert",
        name: "Dessert",
      },
      pricing: {
        currency: "NGN",
        basePrice: 8500,
        finalPrice: 8500,
      },
      images: ["/images/ice-cream.jpg", "/images/dessert-23-2.jpg"],
      badges: ["Popular", "Featured"],
      availability: {
        id: "avail_123",
        inStock: true,
        quantityAvailable: 93,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_ic_vanilla",
          name: "Classic Vanilla Bean",
          priceModifier: 8500,
        },
        {
          id: "var_ic_chocolate",
          name: "Belgian Double Chocolate",
          priceModifier: 8500,
        },
        {
          id: "var_ic_caramel",
          name: "Salted Caramel Swirl",
          priceModifier: 9000,
        },
      ],
      extras: [
        {
          id: "ext_oreo",
          name: "Crushed Oreo Crumbs",
          price: 800,
        },
        {
          id: "ext_fudge",
          name: "Warm Chocolate Fudge Drizzle",
          price: 1000,
        },
        {
          id: "ext_waffle",
          name: "Two Waffle Cones (Side)",
          price: 1200,
        },
      ],
      customizations: {
        spiceLevel: [],
        removeIngredients: [],
      },
      ingredients: [
        "Fresh Whole Milk",
        "Heavy Dairy Cream",
        "Refined Sugar",
        "West African Cocoa Powder",
        "Madagascar Vanilla Extract",
        "Natural Stabilizers",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 820,
        protein: 14,
        carbs: 96,
        fat: 42,
        sugar: 84,
        fiber: 2,
        sodium: 320,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: true,
      },
      allergens: ["Milk"],
      prepTime: "15-30 mins",
      reviewStats: {
        averageRating: 4.0,
        totalReviews: 147,
      },
      reviews: [
        {
          id: "rev_25_0",
          user: "Uche Z.",
          rating: 4,
          comment:
            "It was good but arrived slightly later than the estimated time. Thankfully the cold-packaging kept it frozen. Taste made up for it though.",
          date: "2026-02-12",
        },
        {
          id: "rev_25_1",
          user: "Femi Y.",
          rating: 5,
          comment:
            "Exceeded my expectations. The chocolate flavor was incredibly rich and it didn't feel artificial at all.",
          date: "2026-06-24",
        },
        {
          id: "rev_25_2",
          user: "Zainab U.",
          rating: 3,
          comment:
            "Decent dessert overall, though it could use a bit more of a prominent vanilla bean punch for my taste.",
          date: "2026-03-02",
        },
        {
          id: "rev_25_3",
          user: "Hassan E.",
          rating: 3,
          comment:
            "Solid sweet option if you want dessert fast. Nothing spectacular but definitely hit the spot.",
          date: "2026-03-03",
        },
        {
          id: "rev_25_4",
          user: "Kemi E.",
          rating: 5,
          comment:
            "One of the best sweet treats I've had delivered this month. Packaging was neat and the texture was so creamy.",
          date: "2026-05-26",
        },
        {
          id: "rev_25_5",
          user: "Ibrahim I.",
          rating: 4,
          comment:
            "Good value for a one litre tub. Arrived solid and cold, perfectly packaged for delivery.",
          date: "2026-04-27",
        },
      ],
      metrics: {
        soldCount: 1094,
        wishlistCount: 984,
        views: 9738,
        cartAdds: 8112,
        trendingScore: 92,
      },
      recommendation: {
        score: 93,
        reason: "Top trending dessert option of the week",
      },
      frequentlyBoughtTogether: ["Burgers", "Sides", "Snacks"],
      relatedimages: [],
      seo: {
        metaTitle: "Artisan Chocolate & Vanilla Ice Cream Tub | Foodie",
        metaDescription:
          "Order rich, creamy, 1-litre slow-churned Artisan Ice Cream on the Foodie app. Secure insulated fast delivery across town.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T17:15:00.000Z",
    },
    {
      id: "food_144",
      slug: "milkshake-24",
      name: "Gourmet Oreo Milkshake",
      shortDescription:
        "Thick, creamy vanilla soft-serve blended with crushed Oreo cookies.",
      description:
        "Our Gourmet Oreo Milkshake is mixed to creamy perfection using premium whole-milk dairy soft serve, a generous helping of real crushed Oreo cookies, and vanilla bean extract. Topped with a mountain of fresh whipped cream and an extra Oreo crumble layer.",
      category: {
        id: "cat_Milkshakes",
        name: "Milkshakes",
      },
      pricing: {
        currency: "NGN",
        basePrice: 6000,
        finalPrice: 6000,
      },
      images: ["/images/oreo-milkshake.jpg", "/images/drinks-24-2.jpg"],
      badges: ["Recommended", "New"],
      availability: {
        id: "avail_124",
        inStock: true,
        quantityAvailable: 67,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_ms_oreo",
          name: "Classic Oreo Double Blend",
          priceModifier: 6000,
        },
        {
          id: "var_ms_strawberry",
          name: "Strawberry Shortcake Blend",
          priceModifier: 6000,
        },
        {
          id: "var_ms_caramel",
          name: "Salted Caramel Crunch Blend",
          priceModifier: 6400,
        },
      ],
      extras: [
        {
          id: "ext_whipped_cream",
          name: "Extra Whipped Cream Swirl",
          price: 600,
        },
        {
          id: "ext_choc_syrup",
          name: "Hershey's Chocolate Syrup Drizzle",
          price: 500,
        },
        {
          id: "ext_malt",
          name: "Milo Malt Powder Scoop",
          price: 800,
        },
      ],
      customizations: {
        spiceLevel: [],
        removeIngredients: ["No Whipped Cream"],
      },
      ingredients: [
        "Premium Dairy Ice Cream Base",
        "Full Cream Milk",
        "Genuine Oreo Cookies",
        "Vanilla Bean Pod Extract",
        "Sugar",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 720,
        protein: 12,
        carbs: 86,
        fat: 36,
        sugar: 74,
        fiber: 2,
        sodium: 380,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      prepTime: "15-30 mins",
      reviewStats: {
        averageRating: 4.5,
        totalReviews: 286,
      },
      reviews: [
        {
          id: "rev_25_0",
          user: "Uche Z.",
          rating: 4,
          comment:
            "It was good but arrived slightly later than the estimated time. Taste made up for it though, still completely thick and cold.",
          date: "2026-02-12",
        },
        {
          id: "rev_25_1",
          user: "Femi Y.",
          rating: 5,
          comment:
            "Exceeded my expectations. The cookie flavour was rich and it didn't taste like typical diluted delivery shakes at all.",
          date: "2026-06-24",
        },
        {
          id: "rev_25_2",
          user: "Zainab U.",
          rating: 4,
          comment:
            "Decent shake overall, though it could use a tiny bit more crushed biscuit inside for that crunch.",
          date: "2026-03-02",
        },
        {
          id: "rev_25_3",
          user: "Hassan E.",
          rating: 4,
          comment:
            "Solid option if you need a sweet fix. Nothing spectacular but definitely hit the spot.",
          date: "2026-03-03",
        },
        {
          id: "rev_25_4",
          user: "Kemi E.",
          rating: 5,
          comment:
            "One of the best desserts I've had delivered this month. Packaging was neat and the taste was on point.",
          date: "2026-05-26",
        },
        {
          id: "rev_25_5",
          user: "Ibrahim I.",
          rating: 5,
          comment:
            "Perfect level of thickness! Didn't arrive melted at all, will certainly order again.",
          date: "2026-04-27",
        },
      ],
      metrics: {
        soldCount: 4069,
        wishlistCount: 1333,
        views: 16679,
        cartAdds: 4999,
        trendingScore: 88,
      },
      recommendation: {
        score: 85,
        reason: "Popularly paired with burger and combo meals",
      },
      frequentlyBoughtTogether: ["Sides", "Burgers", "Snacks", "Dessert"],
      relatedimages: ["food_121"],
      seo: {
        metaTitle: "Thick Gourmet Oreo Milkshake Delivery | Foodie",
        metaDescription:
          "Order our creamy, thick Gourmet Oreo Milkshake on the Foodie app. Real crushed cookies blended with rich premium dairy ice cream.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T17:34:00.000Z",
    },
    {
      id: "food_145",
      slug: "waffle-sundae-25",
      name: "Premium Waffle Ice Cream Sundae",
      shortDescription:
        "Two premium ice cream scoops served over a freshly baked bubble waffle.",
      description:
        "Our Premium Waffle Ice Cream Sundae features a warm, freshly baked golden waffle topped with two large scoops of artisanal ice cream, drizzled generously with warm caramel sauce and finished with fresh whipped cream.",
      category: {
        id: "cat_dessert",
        name: "Dessert",
      },
      pricing: {
        currency: "NGN",
        basePrice: 6500,
        finalPrice: 6500,
      },
      images: ["/images/waffle-ice-cream.jpg", "/images/dessert-25-2.jpg"],
      badges: ["Featured", "Recommended"],
      availability: {
        id: "avail_125",
        inStock: true,
        quantityAvailable: 29,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_sun_van_choc",
          name: "Vanilla & Chocolate Mix",
          priceModifier: 6500,
        },
        {
          id: "var_sun_double_straw",
          name: "Double Strawberry Bliss",
          priceModifier: 6500,
        },
        {
          id: "var_sun_caramel_crunch",
          name: "Salted Caramel Special",
          priceModifier: 7000,
        },
      ],
      extras: [
        {
          id: "ext_sprinkles",
          name: "Rainbow Sprinkles",
          price: 400,
        },
        {
          id: "ext_peanuts",
          name: "Crushed Roasted Peanuts",
          price: 500,
        },
        {
          id: "ext_extra_scoop",
          name: "Extra Vanilla Scoop",
          price: 1500,
        },
      ],
      customizations: {
        spiceLevel: [],
        removeIngredients: ["No Caramel Drizzle", "No Whipped Cream"],
      },
      ingredients: [
        "Wheat Flour Waffle Batter",
        "Fresh Dairy Cream",
        "Whole Milk",
        "Refined Sugar",
        "Caramel Sauce Drizzle",
        "Vanilla Extract",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 780,
        protein: 12,
        carbs: 104,
        fat: 32,
        sugar: 68,
        fiber: 3,
        sodium: 490,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.5,
        totalReviews: 232,
      },
      reviews: [
        {
          id: "rev_25_0",
          user: "Uche Z.",
          rating: 4,
          comment:
            "It was good but arrived slightly later than the estimated time. Taste made up for it though, waffle was still soft.",
          date: "2026-02-12",
        },
        {
          id: "rev_25_1",
          user: "Femi Y.",
          rating: 5,
          comment:
            "Exceeded my expectations. The presentation was gorgeous and the hot waffle combined with cold ice cream is amazing.",
          date: "2026-06-24",
        },
        {
          id: "rev_25_2",
          user: "Zainab U.",
          rating: 4,
          comment:
            "Decent sweet treat overall, though it could use a bit more caramel drizzle for my taste.",
          date: "2026-03-02",
        },
        {
          id: "rev_25_3",
          user: "Hassan E.",
          rating: 4,
          comment:
            "Solid option if you need an afternoon sugar rush. Nothing spectacular but definitely satisfying.",
          date: "2026-03-03",
        },
        {
          id: "rev_25_4",
          user: "Kemi E.",
          rating: 5,
          comment:
            "One of the best desserts I've had delivered this month. Packaging kept everything perfectly separated and neat.",
          date: "2026-05-26",
        },
        {
          id: "rev_25_5",
          user: "Ibrahim I.",
          rating: 4,
          comment:
            "Very delicious and heavy! The bubble waffle portion size is large enough to share between two people.",
          date: "2026-04-27",
        },
      ],
      metrics: {
        soldCount: 610,
        wishlistCount: 473,
        views: 28534,
        cartAdds: 6881,
        trendingScore: 99,
      },
      recommendation: {
        score: 97,
        reason: "Top trending dessert order in your area",
      },
      frequentlyBoughtTogether: ["Drinks", "Dessert", "Chicken"],
      relatedimages: [],
      seo: {
        metaTitle: "Premium Waffle Ice Cream Sundae Delivery | Foodie",
        metaDescription:
          "Order our decadent Waffle Ice Cream Sundae bowl on Foodie. Fresh golden waffles served with sweet artisan ice cream scoops and rich syrup.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T17:55:00.000Z",
    },
    {
      id: "food_146",
      slug: "grilled-chicken-27",
      name: "Flame-Grilled Peri-Peri Chicken",
      shortDescription:
        "Tender, smoky grilled chicken marinated in authentic peri-peri spices.",
      description:
        "Our Flame-Grilled Peri-Peri Chicken is slow-marinated for 24 hours in a rich blend of African bird's eye chili, garlic, fresh lemons, and local herbs. Flame-grilled to order over open coals to lock in juices and deliver a perfect smoky char finish.",
      category: {
        id: "cat_chicken",
        name: "BBQ_&_Grills",
      },
      pricing: {
        currency: "NGN",
        basePrice: 12500,
        finalPrice: 12500,
      },
      images: ["/images/grilled_chicken.jpg", "/images/chicken-27-2.jpg"],
      badges: ["Featured", "Recommended"],
      availability: {
        id: "avail_127",
        inStock: true,
        quantityAvailable: 92,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_gc_half",
          name: "Half Chicken Platters",
          priceModifier: 12500,
        },
        {
          id: "var_gc_full",
          name: "Full Chicken Platter",
          priceModifier: 16000,
        },
      ],
      extras: [
        {
          id: "ext_yam_fries",
          name: "Crispy Yam Fries Side",
          price: 1500,
        },
        {
          id: "ext_peri_sauce",
          name: "Extra Peri-Peri Dip Bottle",
          price: 600,
        },
      ],
      customizations: {
        spiceLevel: [
          "Lemon & Herb (Mild)",
          "Medium Heat",
          "Hot Peri-Peri",
          "Volcanic Naija Heat",
        ],
        removeIngredients: [],
      },
      ingredients: [
        "Premium Whole Chicken Cuts",
        "African Bird's Eye Chili",
        "Fresh Lemon Juice",
        "Garlic Crushed",
        "Vegetable Oil",
        "Smoked Paprika",
        "Oregano",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 580,
        protein: 64,
        carbs: 2,
        fat: 32,
        sugar: 0,
        fiber: 1,
        sodium: 640,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "25-45 mins",
      reviewStats: {
        averageRating: 4.5,
        totalReviews: 187,
      },
      reviews: [
        {
          id: "rev_32_0",
          user: "Musa M.",
          rating: 5,
          comment:
            "This was absolutely delicious, arrived hot and the portion size was generous. Will definitely order again.",
          date: "2026-01-20",
        },
        {
          id: "rev_32_1",
          user: "Joy E.",
          rating: 5,
          comment:
            "One of the best meals I've had delivered this month. Packaging was neat and the taste was on point.",
          date: "2026-03-25",
        },
        {
          id: "rev_32_2",
          user: "Bayo X.",
          rating: 4,
          comment:
            "Really nice smoky flavor from the grill. It arrived hot, but I wish it came with a bit more extra dipping sauce on the side.",
          date: "2026-02-14",
        },
        {
          id: "rev_32_3",
          user: "Musa Q.",
          rating: 5,
          comment:
            "Really impressed with the presentation and taste. A bit pricey but worth every naira.",
          date: "2026-06-18",
        },
        {
          id: "rev_32_4",
          user: "Hassan B.",
          rating: 3,
          comment:
            "Portion was a little smaller than I expected for the standard option, but the flame-grilled flavor was nice.",
          date: "2026-01-14",
        },
        {
          id: "rev_32_5",
          user: "Nneka N.",
          rating: 4,
          comment:
            "Exceeded my expectations. The flavor was rich and it didn't feel like typical delivery food at all.",
          date: "2026-04-19",
        },
      ],
      metrics: {
        soldCount: 2864,
        wishlistCount: 1608,
        views: 25846,
        cartAdds: 5058,
        trendingScore: 98,
      },
      recommendation: {
        score: 86,
        reason: "Top trending chicken platter this month",
      },
      frequentlyBoughtTogether: ["Sides", "Drinks"],
      relatedimages: [],
      seo: {
        metaTitle: "Flame-Grilled Peri-Peri Chicken Platter | Foodie",
        metaDescription:
          "Order spicy, flame-grilled peri-peri chicken on the Foodie app. Premium whole chicken marinated for 24 hours and grilled fresh over open coals.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T17:38:00.000Z",
    },
    {
      id: "food_147",
      slug: "bbq-croaker-fish-29",
      name: "Spicy BBQ Croaker Fish Platter",
      shortDescription:
        "Whole grilled croaker fish glazed in spicy local pepper sauce.",
      description:
        "Our signature Spicy BBQ Croaker Fish is caught fresh, thoroughly cleaned, and marinated in a fiery blend of scotch bonnet peppers (atarodo), ginger, garlic, and local spices. Slow-grilled over open flames to achieve a smoky char while keeping the fish flaky, tender, and intensely flavorful.",
      category: {
        id: "cat_seafood",
        name: "SeaFoods",
      },
      pricing: {
        currency: "NGN",
        basePrice: 14500,
        finalPrice: 14500,
      },
      images: ["/images/bbq-croaker.jpg", "/images/seafood-29-2.jpg"],
      badges: ["Popular", "Recommended"],
      availability: {
        id: "avail_129",
        inStock: true,
        quantityAvailable: 23,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_cf_medium",
          name: "Medium Whole Fish",
          priceModifier: 14500,
        },
        {
          id: "var_cf_large",
          name: "Jumbo Whole Fish",
          priceModifier: 18000,
        },
      ],
      extras: [
        {
          id: "ext_boli",
          name: "Grilled Sweet Plantain (Boli)",
          price: 1200,
        },
        {
          id: "ext_chips",
          name: "Large French Fries Side",
          price: 1800,
        },
        {
          id: "ext_pepper_sauce",
          name: "Extra Fiery Pepper Glaze",
          price: 600,
        },
      ],
      customizations: {
        spiceLevel: ["Mild Glaze", "Medium Spicy", "Naija Hot (Recommended)"],
        removeIngredients: ["No Onions Topping"],
      },
      ingredients: [
        "Fresh Whole Croaker Fish",
        "Scotch Bonnet Peppers",
        "Onions",
        "Vegetable Oil",
        "Garlic Paste",
        "Ginger Extract",
        "Local Bouillon Seasoning",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 430,
        protein: 58,
        carbs: 0,
        fat: 22,
        sugar: 0,
        fiber: 0,
        sodium: 740,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
      },
      allergens: ["Fish"],
      prepTime: "30-50 mins",
      reviewStats: {
        averageRating: 4.6,
        totalReviews: 445,
      },
      reviews: [
        {
          id: "rev_32_0",
          user: "Musa M.",
          rating: 5,
          comment:
            "This was absolutely delicious, arrived hot and the fish was properly cooked inside. Will definitely order again.",
          date: "2026-01-20",
        },
        {
          id: "rev_32_1",
          user: "Joy E.",
          rating: 5,
          comment:
            "One of the best seafood deliveries I've had this month. Packaging kept the moisture in and the heat was on point.",
          date: "2026-03-25",
        },
        {
          id: "rev_32_2",
          user: "Bayo X.",
          rating: 4,
          comment:
            "The spice blend is exceptional and the smoky coal flavor really stands out. Paired beautifully with the side of boli.",
          date: "2026-02-14",
        },
        {
          id: "rev_32_3",
          user: "Musa Q.",
          rating: 5,
          comment:
            "Really impressed with the neat presentation and fresh taste. A premium platter well worth every single naira.",
          date: "2026-06-18",
        },
        {
          id: "rev_32_4",
          user: "Hassan B.",
          rating: 4,
          comment:
            "The fish itself tasted incredible, though I recommend upgrading to the Jumbo size if you have a massive appetite.",
          date: "2026-01-14",
        },
        {
          id: "rev_32_5",
          user: "Nneka N.",
          rating: 4,
          comment:
            "Exceeded my expectations. Flaky texture, perfectly spiced skin, and it didn't feel dry like typical delivery fish.",
          date: "2026-04-19",
        },
      ],
      metrics: {
        soldCount: 2089,
        wishlistCount: 258,
        views: 46691,
        cartAdds: 5441,
        trendingScore: 93,
      },
      recommendation: {
        score: 98,
        reason: "Top trending seafood platter this weekend",
      },
      frequentlyBoughtTogether: ["Sides", "Soda", "Drinks"],
      relatedimages: [],
      seo: {
        metaTitle: "Spicy Whole BBQ Croaker Fish Delivery | Foodie",
        metaDescription:
          "Order our authentic flame-grilled Spicy BBQ Croaker Fish on the Foodie app. Fresh whole fish slow-grilled with fiery local pepper seasonings.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T17:42:00.000Z",
    },
    {
      id: "food_148",
      slug: "spicy-suya-chicken-30",
      name: "Crispy Suya Chicken",
      shortDescription:
        "Crispy fried double-winged chicken tossed in fiery Yaji Suya spice.",
      description:
        "Our Crispy Suya Chicken Wings are seasoned, lightly breaded, fried to a pristine golden crunch, and immediately tossed in fresh northern Yaji (Suya spice mix). Served piping hot with sliced red onions and fresh cabbage strips.",
      category: {
        id: "cat_chicken",
        name: "Chicken",
      },
      pricing: {
        currency: "NGN",
        basePrice: 12500,
        finalPrice: 12500,
      },
      images: ["/images/suya-chicken.jpg", "/images/chicken-30-2.jpg"],
      badges: ["Recommended", "New"],
      availability: {
        id: "avail_130",
        inStock: true,
        quantityAvailable: 57,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_cw_12p",
          name: "Standard Pack (12 Wings)",
          priceModifier: 12500,
        },
        {
          id: "var_cw_18p",
          name: "Jumbo Party Pack (18 Wings)",
          priceModifier: 17000,
        },
      ],
      extras: [
        {
          id: "ext_sweet_pot",
          name: "Crispy Sweet Potato Fries",
          price: 1600,
        },
        {
          id: "ext_gizzard",
          name: "Side of Peppered Gizzard Pieces",
          price: 2200,
        },
        {
          id: "ext_honey_dip",
          name: "Creamy Honey Mustard Sauce",
          price: 600,
        },
      ],
      customizations: {
        spiceLevel: [
          "Mild Suya dusting",
          "Medium Pepper",
          "Traditional Kankara (Very Hot)",
        ],
        removeIngredients: ["No Side Onions", "No Cabbage Garb"],
      },
      ingredients: [
        "Premium Chicken Wings",
        "Northern Yaji Spice Mix",
        "Ground Peanut Cake (Kulikuli)",
        "Wheat Flour Batter",
        "Vegetable Oil",
        "Ginger Powder",
        "Garlic Salt",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 650,
        protein: 48,
        carbs: 38,
        fat: 34,
        sugar: 2,
        fiber: 3,
        sodium: 895,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Gluten", "Peanuts"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.3,
        totalReviews: 345,
      },
      reviews: [
        {
          id: "rev_21_0",
          user: "Segun B.",
          rating: 3,
          comment:
            "The flavor profile was incredible, but the wing portion size was a bit smaller than I expected for a standard sharing platter.",
          date: "2026-05-07",
        },
        {
          id: "rev_21_1",
          user: "Amaka Y.",
          rating: 5,
          comment:
            "Really impressed with the beautiful box presentation and crispy skin. A bit pricey but worth every single naira.",
          date: "2026-02-02",
        },
        {
          id: "rev_21_2",
          user: "Amaka W.",
          rating: 4,
          comment:
            "Exceeded my expectations. The authentic suya kick was rich and it didn't feel like greasy fast food at all.",
          date: "2026-01-16",
        },
        {
          id: "rev_21_3",
          user: "Musa W.",
          rating: 5,
          comment:
            "My go-to late night order now. Consistent spice quality every single time I order wings from here.",
          date: "2026-03-06",
        },
        {
          id: "rev_21_4",
          user: "Bola H.",
          rating: 5,
          comment:
            "Fast delivery and the chicken wings were still warm and crunchy when they got to me. Genuinely tasty!",
          date: "2026-01-27",
        },
        {
          id: "rev_21_5",
          user: "Funke P.",
          rating: 4,
          comment:
            "The combination of the crunchy outer coating with the traditional pepper mix is great. Neat packaging.",
          date: "2026-03-23",
        },
      ],
      metrics: {
        soldCount: 3866,
        wishlistCount: 1498,
        views: 11026,
        cartAdds: 7635,
        trendingScore: 84,
      },
      recommendation: {
        score: 93,
        reason: "Highest trending chicken platter options on weekends",
      },
      frequentlyBoughtTogether: ["Sides", "Drinks", "Sides"],
      relatedimages: ["food_118", "food_127"],
      seo: {
        metaTitle: "Crispy Spicy Suya Chicken Wings Platter | Foodie",
        metaDescription:
          "Order our crunchiest Crispy Suya Chicken Wings platter on the Foodie app. Golden deep-fried wings tossed in legendary hot Yaji pepper spices.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T17:45:00.000Z",
    },
    {
      id: "food_149",
      slug: "iced-coffee-36",
      name: "Artisan Vanilla Iced Latte",
      shortDescription:
        "Chilled espresso blended with fresh whole milk and gourmet vanilla syrup.",
      description:
        "Our Artisan Vanilla Iced Latte features two shots of freshly pulled premium Arabica espresso, poured over filtered ice cubes, blended smoothly with cold full-cream milk, and sweetened with our signature house-made vanilla bean syrup.",
      category: {
        id: "cat_drink",
        name: "Drinks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 4500,
        finalPrice: 4500,
      },
      images: ["/images/iced-coffee.jpg", "/images/drinks-36-2.jpg"],
      badges: ["Recommended", "Popular"],
      availability: {
        id: "avail_136",
        inStock: true,
        quantityAvailable: 66,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_ic_medium",
          name: "Medium Cup (450ml)",
          priceModifier: 4500,
        },
        {
          id: "var_ic_large",
          name: "Large Cup (600ml)",
          priceModifier: 5500,
        },
      ],
      extras: [
        {
          id: "ext_shot",
          name: "Extra Espresso Shot",
          price: 900,
        },
        {
          id: "ext_caramel",
          name: "Caramel Drizzle Swirl",
          price: 500,
        },
        {
          id: "ext_whip",
          name: "Whipped Cream Topping",
          price: 600,
        },
      ],
      customizations: {
        milkType: [
          "Standard Full Cream Milk",
          "Oat Milk Alternative",
          "Almond Milk Alternative",
        ],
        removeIngredients: ["No Vanilla Syrup (Unsweetened)"],
      },
      ingredients: [
        "Arabica Espresso Beans",
        "Full Cream Milk",
        "Vanilla Bean Syrup",
        "Filtered Ice",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 198,
        protein: 8,
        carbs: 28,
        fat: 6,
        sugar: 24,
        fiber: 0,
        sodium: 115,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: true,
      },
      allergens: ["Milk"],
      prepTime: "15-30 mins",
      reviewStats: {
        averageRating: 3.8,
        totalReviews: 126,
      },
      reviews: [
        {
          id: "rev_22_0",
          user: "Ada J.",
          rating: 5,
          comment:
            "Exceeded my expectations. The vanilla flavor was deep and rich, not artificial at all, and it gave me the perfect caffeine kick.",
          date: "2026-03-24",
        },
        {
          id: "rev_22_1",
          user: "Amaka R.",
          rating: 4,
          comment:
            "It was really refreshing, but arrived slightly later than the estimated delivery window. The ice hadn't melted entirely though.",
          date: "2026-03-16",
        },
        {
          id: "rev_22_2",
          user: "Amaka K.",
          rating: 5,
          comment:
            "Fast delivery and the drink was still perfectly frosty when it got to me. Genuinely tasty premium coffee.",
          date: "2026-02-28",
        },
        {
          id: "rev_22_3",
          user: "Chioma H.",
          rating: 2,
          comment:
            "Delivery took longer than expected and the drink leaked through the lid cup holder, soaking the bag.",
          date: "2026-04-28",
        },
        {
          id: "rev_22_4",
          user: "Grace Z.",
          rating: 5,
          comment:
            "Super creamy and smooth latte texture. Great balance between the bitterness of the espresso shots and sweetness of the vanilla.",
          date: "2026-04-13",
        },
        {
          id: "rev_22_5",
          user: "Chidi E.",
          rating: 2,
          comment:
            "Way too watery for my preference today. Felt like the ice had already diluted the coffee strength before arrival.",
          date: "2026-05-17",
        },
      ],
      metrics: {
        soldCount: 1828,
        wishlistCount: 591,
        views: 44281,
        cartAdds: 1830,
        trendingScore: 72,
      },
      recommendation: {
        score: 85,
        reason: "Top trending chilled morning beverage pick",
      },
      frequentlyBoughtTogether: ["Burgers", "Sides"],
      relatedimages: [],
      seo: {
        metaTitle: "Artisan Vanilla Iced Latte Delivery | Foodie",
        metaDescription:
          "Order our creamy, refreshing Artisan Vanilla Iced Latte on the Foodie app. Fresh double espresso shots blended with cold dairy milk and rich syrup.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T17:48:00.000Z",
    },
    {
      id: "food_150",
      slug: "pepperoni-pizza-37",
      name: "Classic Pepperoni Pizza",
      shortDescription:
        "Stone-baked crust topped with rich marinara sauce, mozzarella, and spicy beef pepperoni slices.",
      description:
        "Our Classic Pepperoni Pizza is built on hand-tossed artisan dough, slow-proofed for 48 hours. Layered with our signature herb-infused Italian tomato sauce, loaded with melted mozzarella cheese, and blanketed under crispy, oil-glistening premium beef pepperoni slices.",
      category: {
        id: "cat_pizza",
        name: "Pizza",
      },
      pricing: {
        currency: "NGN",
        basePrice: 11500,
        finalPrice: 11500,
      },
      images: ["/images/pepperoni-pizza.jpg", "/images/pizza-37-2.jpg"],
      badges: ["Recommended", "Popular"],
      availability: {
        id: "avail_137",
        inStock: true,
        quantityAvailable: 14,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_pz_medium",
          name: "Medium (10 inch)",
          priceModifier: 11500,
        },
        {
          id: "var_pz_large",
          name: "Large (14 inch)",
          priceModifier: 15500,
        },
      ],
      extras: [
        {
          id: "ext_extra_cheese",
          name: "Extra Shredded Mozzarella",
          price: 1200,
        },
        {
          id: "ext_pep_slices",
          name: "Double Pepperoni Slices",
          price: 1800,
        },
        {
          id: "ext_garlic_dip",
          name: "Creamy Garlic Crust Dip",
          price: 500,
        },
      ],
      customizations: {
        crustType: [
          "Classic Hand-Tossed",
          "Thin and Crispy Crust",
          "Cheesy Stuffed Crust",
        ],
        removeIngredients: ["No Pepperoni (Cheese Only)"],
      },
      ingredients: [
        "Hand-Tossed Wheat Dough",
        "Signature Marinara Tomato Sauce",
        "Shredded Mozzarella Cheese",
        "Premium Beef Pepperoni Slices",
        "Dried Oregano & Basil Dusting",
        "Extra Virgin Olive Oil",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 980,
        protein: 42,
        carbs: 110,
        fat: 38,
        sugar: 6,
        fiber: 5,
        sodium: 1240,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      prepTime: "30-45 mins",
      reviewStats: {
        averageRating: 4.25,
        totalReviews: 298,
      },
      reviews: [
        {
          id: "rev_10_1",
          user: "David O.",
          rating: 4,
          comment:
            "Fresh ingredients, great tomato base sauce, and generous pepperoni portion size.",
          date: "2026-02-01",
        },
        {
          id: "rev_10_2",
          user: "Fatima A.",
          rating: 5,
          comment:
            "Absolutely perfect cheese stretch and crust crunchiness! Would definitely order again.",
          date: "2026-05-01",
        },
        {
          id: "rev_10_3",
          user: "John D.",
          rating: 4,
          comment:
            "Arrived steaming hot. The crust edge was perfectly charred and doughy, highly recommend.",
          date: "2026-05-20",
        },
        {
          id: "rev_10_4",
          user: "Aisha M.",
          rating: 4,
          comment:
            "One of the best items I've ordered this month. Packaging kept the pizza base firm and hot.",
          date: "2026-03-17",
        },
      ],
      metrics: {
        soldCount: 1941,
        wishlistCount: 1376,
        views: 10764,
        cartAdds: 4852,
        trendingScore: 79,
      },
      recommendation: {
        score: 88,
        reason: "Top trending comfort food item this weekend",
      },
      frequentlyBoughtTogether: ["Snacks", "Dessert", "Drinks", "Burger"],
      relatedimages: ["food_118", "food_130"],
      seo: {
        metaTitle: "Classic Pepperoni Pizza Delivery | Foodie",
        metaDescription:
          "Order our hot, fresh Classic Pepperoni Pizza on the Foodie app. Hand-tossed artisan dough topped with rich marinara, mozzarella, and spicy beef pepperoni.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T17:48:00.000Z",
    },
    {
      id: "food_151",
      slug: "suya-burger-38",
      name: "Gourmet Suya Burger Platter",
      shortDescription:
        "Flame-grilled beef patty infused with authentic Yaji Suya spice on a brioche bun.",
      description:
        "Our Gourmet Suya Burger Platter features a thick, hand-pressed beef patty seasoned with traditional northern Yaji spice, flame-grilled to juicy perfection. Topped with sharp cheddar cheese, sliced red onions, tomatoes, and cabbage ribbons, all served inside a toasted artisanal brioche bun.",
      category: {
        id: "cat_burger",
        name: "Burger",
      },
      pricing: {
        currency: "NGN",
        basePrice: 11500,
        finalPrice: 11500,
      },
      images: ["/images/suya-burger.jpg", "/images/burger-38-2.jpg"],
      badges: ["Recommended", "New"],
      availability: {
        id: "avail_138",
        inStock: true,
        quantityAvailable: 48,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_sb_single",
          name: "Single Suya Patty (Standard)",
          priceModifier: 11500,
        },
        {
          id: "var_sb_double",
          name: "Double Suya Patty Stack",
          priceModifier: 15000,
        },
      ],
      extras: [
        {
          id: "ext_wedges",
          name: "Spiced Potato Wedges Side",
          price: 1800,
        },
        {
          id: "ext_rings",
          name: "Crispy Beer-Battered Onion Rings",
          price: 1500,
        },
        {
          id: "ext_bacon",
          name: "Extra Grilled Beef Bacon Strips",
          price: 2000,
        },
      ],
      customizations: {
        spiceLevel: [
          "Mild Spice Dusting",
          "Medium Yaji Kick",
          "Fiery Northern Heat",
        ],
        removeIngredients: [
          "No Cabbage Ribbons",
          "No Sliced Onions",
          "No Tomatoes",
        ],
      },
      ingredients: [
        "Hand-Pressed Beef Patty",
        "Brioche Burger Bun",
        "Northern Yaji Spice Mix",
        "Ground Peanut Cake (Kulikuli)",
        "Cheddar Cheese Slice",
        "Fresh Cabbage & Onions",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 758,
        protein: 42,
        carbs: 48,
        fat: 42,
        sugar: 6,
        fiber: 4,
        sodium: 840,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten", "Peanuts"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 3.8,
        totalReviews: 475,
      },
      reviews: [
        {
          id: "rev_22_0",
          user: "Ada J.",
          rating: 5,
          comment:
            "Exceeded my expectations. The suya seasoning inside the beef patty was rich, smoky, and incredibly juicy.",
          date: "2026-03-24",
        },
        {
          id: "rev_22_1",
          user: "Amaka R.",
          rating: 4,
          comment:
            "The burger tasted amazing but arrived a little later than expected. The brioche bun was still soft and warm though.",
          date: "2026-03-16",
        },
        {
          id: "rev_22_2",
          user: "Amaka K.",
          rating: 5,
          comment:
            "Fast delivery and neat packaging. The fusion of traditional suya spice with a gourmet burger structure is pure genius.",
          date: "2026-02-28",
        },
        {
          id: "rev_22_3",
          user: "Chioma H.",
          rating: 2,
          comment:
            "Delivery was quite delayed and the cheese melted into the wrapper, making a huge mess inside the box.",
          date: "2026-04-28",
        },
        {
          id: "rev_22_4",
          user: "Grace Z.",
          rating: 5,
          comment:
            "Hands down the best burger I've had delivered this month. Patty was cooked perfectly and the Yaji flavor hits the spot.",
          date: "2026-04-13",
        },
        {
          id: "rev_22_5",
          user: "Chidi E.",
          rating: 2,
          comment:
            "The patty felt a bit dry today and the cabbage combo felt more like a basic shawarma filling than a premium burger topping.",
          date: "2026-05-17",
        },
      ],
      metrics: {
        soldCount: 3639,
        wishlistCount: 1554,
        views: 22123,
        cartAdds: 4602,
        trendingScore: 82,
      },
      recommendation: {
        score: 91,
        reason: "Top rated fusion item on the menu this month",
      },
      frequentlyBoughtTogether: ["Dessert", "Wrap", "Drinks"],
      relatedimages: [],
      seo: {
        metaTitle: "Gourmet Suya Burger Platter Online | Foodie",
        metaDescription:
          "Order our flame-grilled Gourmet Suya Burger on the Foodie app. Premium spiced beef patty served with fresh onions and cheddar on brioche.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T17:54:00.000Z",
    },
    {
      id: "food_152",
      slug: "margherita-pizza-39",
      name: "Classic Margherita Pizza",
      shortDescription:
        "Authentic Neapolitan-style pizza topped with fresh mozzarella, marinara, and sweet basil.",
      description:
        "Our Classic Margherita Pizza celebrates beautiful simplicity. Hand-stretched artisan dough layered with rich San Marzano tomato sauce, topped with premium melted mozzarella cheese clots, fresh garden basil leaves, and finished with a drizzle of extra virgin olive oil.",
      category: {
        id: "cat_pizza",
        name: "Pizza",
      },
      pricing: {
        currency: "NGN",
        basePrice: 9500,
        finalPrice: 9500,
      },
      images: ["/images/magharita-pizza.jpg", "/images/pizza-39-2.jpg"],
      badges: ["Popular", "Recommended"],
      availability: {
        id: "avail_139",
        inStock: true,
        quantityAvailable: 76,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_mp_medium",
          name: "Medium (10 inch)",
          priceModifier: 9500,
        },
        {
          id: "var_mp_large",
          name: "Large (14 inch)",
          priceModifier: 13000,
        },
      ],
      extras: [
        {
          id: "ext_extra_mozz",
          name: "Extra Fresh Mozzarella Clots",
          price: 1200,
        },
        {
          id: "ext_mushrooms",
          name: "Sliced Button Mushrooms",
          price: 1000,
        },
        {
          id: "ext_garlic_oil",
          name: "Infused Roasted Garlic Oil Dip",
          price: 500,
        },
      ],
      customizations: {
        crustType: [
          "Traditional Neapolitan (Soft Edge)",
          "Thin and Crispy Pan Crust",
        ],
        removeIngredients: ["No Fresh Basil Leaves"],
      },
      ingredients: [
        "Hand-Stretched Wheat Crust",
        "San Marzano Tomato Marinara",
        "Fresh Mozzarella Cheese",
        "Sweet Basil Leaves",
        "Extra Virgin Olive Oil",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 680,
        protein: 24,
        carbs: 92,
        fat: 18,
        sugar: 4,
        fiber: 4,
        sodium: 810,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      prepTime: "25-45 mins",
      reviewStats: {
        averageRating: 4.4,
        totalReviews: 260,
      },
      reviews: [
        {
          id: "rev_9_1",
          user: "Blessing O.",
          rating: 5,
          comment:
            "One of the best classic pizzas I've ordered. The tomato sauce has a perfect sweet and tangy balance.",
          date: "2026-01-01",
        },
        {
          id: "rev_9_2",
          user: "Fatima A.",
          rating: 4,
          comment:
            "The fresh mozzarella clumps taste amazing and melt perfectly. Crust edge is nice and doughy.",
          date: "2026-05-24",
        },
        {
          id: "rev_9_3",
          user: "Blessing E.",
          rating: 4,
          comment:
            "Fresh premium ingredients and generous cheese portion size. Simple but very rich flavor.",
          date: "2026-01-12",
        },
        {
          id: "rev_9_4",
          user: "David K.",
          rating: 4,
          comment:
            "Good authentic value for the price. Arrived flat and completely intact without getting messy.",
          date: "2026-03-03",
        },
        {
          id: "rev_9_5",
          user: "Tunde S.",
          rating: 5,
          comment:
            "Absolutely delicious and arrived piping hot! The fresh basil aroma was incredible upon opening.",
          date: "2026-01-15",
        },
      ],
      metrics: {
        soldCount: 2950,
        wishlistCount: 886,
        views: 22843,
        cartAdds: 5760,
        trendingScore: 92,
      },
      recommendation: {
        score: 88,
        reason: "Top trending classic vegetarian choice this month",
      },
      frequentlyBoughtTogether: ["Burger", "Drinks", "Dessert"],
      relatedimages: ["food_137"],
      seo: {
        metaTitle: "Authentic Neapolitan Margherita Pizza Delivery | Foodie",
        metaDescription:
          "Order our fresh Classic Margherita Pizza on the Foodie app. Hand-tossed dough topped with pure tomato marinara, premium mozzarella, and fresh basil.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T17:56:00.000Z",
    },
    {
      id: "food_153",
      slug: "sticky-bbq-wings-40",
      name: "Sticky BBQ Chicken Wings",
      shortDescription:
        "Tender chicken wings tossed in a sweet, smoky hickory BBQ glaze.",
      description:
        "Our Sticky BBQ Chicken Wings are marinated in a mild spice rub, baked to tender perfection, and flash-fried for a crisp bite before being drenched in our signature sweet and smoky hickory BBQ reduction sauce.",
      category: {
        id: "cat_chicken",
        name: "Grills",
      },
      pricing: {
        currency: "NGN",
        basePrice: 8700,
        finalPrice: 8700,
      },
      images: ["/images/bbq-chicken.jpg", "/images/chicken-40-2.jpg"],
      badges: ["Recommended", "New"],
      availability: {
        id: "avail_140",
        inStock: true,
        quantityAvailable: 14,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_wings_6p",
          name: "Standard Pack (6 Pieces)",
          priceModifier: 8700,
        },
        {
          id: "var_wings_10p",
          name: "Large Pack (10 Pieces)",
          priceModifier: 3000,
        },
      ],
      extras: [
        {
          id: "ext_fries_regular",
          name: "Regular French Fries Side",
          price: 1200,
        },
        {
          id: "ext_bbq_dip",
          name: "Extra BBQ Glaze Dipping Cup",
          price: 500,
        },
        {
          id: "ext_celery",
          name: "Crunchy Celery Sticks with Ranch",
          price: 900,
        },
      ],
      customizations: {
        glazeStyle: ["Classic Sweet BBQ", "Honey BBQ Blend", "Spicy BBQ Twist"],
        removeIngredients: [],
      },
      ingredients: [
        "Premium Chicken Wings",
        "Hickory BBQ Glaze Base",
        "Brown Sugar",
        "Garlic Powder",
        "Onion Salt",
        "Vegetable Oil",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 492,
        protein: 46,
        carbs: 14,
        fat: 28,
        sugar: 12,
        fiber: 1,
        sodium: 780,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 3.8,
        totalReviews: 20,
      },
      reviews: [
        {
          id: "rev_22_0",
          user: "Ada J.",
          rating: 5,
          comment:
            "Exceeded my expectations. The smoky BBQ glaze flavor was incredibly rich, thick, and clingy on the wings.",
          date: "2026-03-24",
        },
        {
          id: "rev_22_1",
          user: "Amaka R.",
          rating: 4,
          comment:
            "It was very good but arrived slightly later than the estimated time tracker. The sauce made up for the wait though.",
          date: "2026-03-16",
        },
        {
          id: "rev_22_2",
          user: "Amaka K.",
          rating: 5,
          comment:
            "Fast delivery and the wings box was still completely warm when it got to me. Genuinely tasty glaze.",
          date: "2026-02-28",
        },
        {
          id: "rev_22_3",
          user: "Chioma H.",
          rating: 2,
          comment:
            "The transit took way too long and the sticky sauce had leaked slightly through the cardboard partition box.",
          date: "2026-04-28",
        },
        {
          id: "rev_22_4",
          user: "Grace Z.",
          rating: 5,
          comment:
            "Perfect balance of sweetness and smoke. Finding wings that aren't dry underneath the sauce is rare, so this is excellent.",
          date: "2026-04-13",
        },
        {
          id: "rev_22_5",
          user: "Chidi E.",
          rating: 2,
          comment:
            "The skin felt soggy rather than crisp, and the BBQ glaze tasted way too sweet, almost like corn syrup.",
          date: "2026-05-17",
        },
      ],
      metrics: {
        soldCount: 4544,
        wishlistCount: 996,
        views: 28082,
        cartAdds: 1388,
        trendingScore: 75,
      },
      recommendation: {
        score: 93,
        reason: "Highly rated game-night snack bundle",
      },
      frequentlyBoughtTogether: ["Sides", "Snacks", "Desserts"],
      relatedimages: ["food_118", "food_130"],
      seo: {
        metaTitle: "Sticky Hickory BBQ Chicken Wings | Foodie",
        metaDescription:
          "Order our glazed Sticky BBQ Chicken Wings from Chicken Republic Grill on the Foodie app. Tender, juicy wings smothered in deep sweet hickory sauce.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T17:56:00.000Z",
    },
    {
      id: "food_155",
      slug: "bbq-beef-pizza-48",
      name: "Smoky BBQ Beef Pizza",
      shortDescription:
        "Artisan pizza topped with smoky sweet BBQ sauce, spiced ground beef, and onions.",
      description:
        "Our Smoky BBQ Beef Pizza features a hand-stretched crust spread with a rich, tangy hickory BBQ sauce base. It is layered with premium melted mozzarella cheese, loaded with seasoned ground beef chunks, and finished with crisp sliced red onions and fresh cilantro.",
      category: {
        id: "cat_pizza",
        name: "Pizza",
      },
      pricing: {
        currency: "NGN",
        basePrice: 12600,
        finalPrice: 12600,
      },
      images: ["/images/bbq-beef-pizza.jpg", "/images/pizza-48-2.jpg"],
      badges: ["New", "Recommended"],
      availability: {
        id: "avail_148",
        inStock: true,
        quantityAvailable: 47,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_bbqp_medium",
          name: "Medium (10 inch)",
          priceModifier: 0,
        },
        {
          id: "var_bbqp_large",
          name: "Large (14 inch)",
          priceModifier: 4500,
        },
      ],
      extras: [
        {
          id: "ext_extra_cheese_48",
          name: "Extra Shredded Mozzarella",
          price: 1200,
        },
        {
          id: "ext_extra_beef",
          name: "Extra Seasoned Ground Beef",
          price: 1800,
        },
        {
          id: "ext_bbq_drizzle",
          name: "Extra Sweet Hickory BBQ Dip",
          price: 500,
        },
      ],
      customizations: {
        crustType: [
          "Classic Hand-Tossed",
          "Thin and Crispy Crust",
          "Cheesy Stuffed Crust",
        ],
        removeIngredients: ["No Sliced Onions"],
      },
      ingredients: [
        "Hand-Stretched Wheat Dough",
        "Hickory BBQ Sauce Base",
        "Seasoned Ground Beef",
        "Shredded Mozzarella Cheese",
        "Red Onions",
        "Fresh Cilantro",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 920,
        protein: 44,
        carbs: 114,
        fat: 32,
        sugar: 14,
        fiber: 4,
        sodium: 980,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      prepTime: "25-45 mins",
      reviewStats: {
        averageRating: 4.3,
        totalReviews: 401,
      },
      reviews: [
        {
          id: "rev_24_0",
          user: "Femi R.",
          rating: 3,
          comment:
            "The ground beef was seasoned well, but the BBQ base sauce was a bit too sugary sweet for my liking compared to standard versions nearby.",
          date: "2026-01-06",
        },
        {
          id: "rev_24_1",
          user: "Obinna U.",
          rating: 5,
          comment:
            "My go-to order now. Consistent crust quality and rich smoky flavor every single time I order from here.",
          date: "2026-06-14",
        },
        {
          id: "rev_24_2",
          user: "Chioma P.",
          rating: 5,
          comment:
            "One of the best meals I've had delivered this month. Packaging was neat, cheese stretch was awesome, and the taste was on point.",
          date: "2026-02-04",
        },
      ],
      metrics: {
        soldCount: 4169,
        wishlistCount: 1755,
        views: 19756,
        cartAdds: 4270,
        trendingScore: 88,
      },
      recommendation: {
        score: 82,
        reason: "Top trending gourmet meat sharing option this week",
      },
      frequentlyBoughtTogether: ["Sides", "Snacks", "Drinks"],
      relatedimages: [],
      seo: {
        metaTitle: "Smoky BBQ Beef Pizza Online Delivery | Foodie",
        metaDescription:
          "Order our hot Smoky BBQ Beef Pizza on the Foodie app. Hand-tossed dough topped with sweet hickory BBQ sauce, melted cheese, and seasoned ground beef.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T17:59:00.000Z",
    },
    {
      id: "food_156",
      slug: "shawarma-pizza-449",
      name: "Chicken Shawarma Fusion Pizza",
      shortDescription:
        "Artisan pizza topped with spiced shawarma chicken, cabbage, and a garlic-creamy drizzle.",
      description:
        "Our Chicken Shawarma Fusion Pizza brings together the best of Nigerian street food and Italian comfort. Built on an artisan crust layered with mozzarella, loaded with thinly sliced grilled shawarma chicken breast, shredded cabbage, sliced onions, and finished with a rich cross-drizzle of creamy sweet garlic mayo.",
      category: {
        id: "cat_pizza",
        name: "Pizza",
      },
      pricing: {
        currency: "NGN",
        basePrice: 12500,
        finalPrice: 12500,
      },
      images: ["/images/chicken-shawarma-pizza.jpg", "/images/pizza-49-2.jpg"],
      badges: ["Featured", "Popular"],
      availability: {
        id: "avail_149",
        inStock: true,
        quantityAvailable: 66,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_shp_medium",
          name: "Medium (10 inch)",
          priceModifier: 12500,
        },
        {
          id: "var_shp_large",
          name: "Large (14 inch)",
          priceModifier: 17000,
        },
      ],
      extras: [
        {
          id: "ext_extra_cheese_49",
          name: "Extra Mozzarella Layer",
          price: 1200,
        },
        {
          id: "ext_shawarma_chicken",
          name: "Extra Grilled Shawarma Chicken",
          price: 2200,
        },
        {
          id: "ext_sausage_bits",
          name: "Sliced Chicken Hot Dog Links",
          price: 1000,
        },
      ],
      customizations: {
        crustType: ["Classic Hand-Tossed", "Thin and Crispy Crust"],
        removeIngredients: [
          "No Shredded Cabbage",
          "No Creamy Garlic Mayo Drizzle",
        ],
      },
      ingredients: [
        "Hand-Tossed Wheat Dough",
        "Spiced Grilled Chicken Breast Strips",
        "Shredded Cabbage",
        "Shredded Mozzarella Cheese",
        "Sliced White Onions",
        "Gourmet Garlic Mayonnaise",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 938,
        protein: 48,
        carbs: 110,
        fat: 34,
        sugar: 8,
        fiber: 4,
        sodium: 920,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      prepTime: "25-45 mins",
      reviewStats: {
        averageRating: 4.3,
        totalReviews: 87,
      },
      reviews: [
        {
          id: "rev_24_0",
          user: "Femi R.",
          rating: 3,
          comment:
            "The grilled chicken flavor was spot on, but the sweet garlic mayo drizzle was a bit too heavy and made the pizza crust soggy toward the center.",
          date: "2026-01-06",
        },
        {
          id: "rev_24_1",
          user: "Obinna U.",
          rating: 5,
          comment:
            "My new absolute favorite order. Combining street shawarma toppings onto a soft pizza crust is sheer genius.",
          date: "2026-06-14",
        },
        {
          id: "rev_24_2",
          user: "Chioma P.",
          rating: 5,
          comment:
            "One of the best meals I've had delivered this month. Packaging kept the pizza crisp, toppings were packed high, and the garlic sauce was delicious.",
          date: "2026-02-04",
        },
      ],
      metrics: {
        soldCount: 4518,
        wishlistCount: 1844,
        views: 24976,
        cartAdds: 9197,
        trendingScore: 82,
      },
      recommendation: {
        score: 88,
        reason: "Top trending street fusion platter this week",
      },
      frequentlyBoughtTogether: ["Sides", "Drinks"],
      relatedimages: ["food_120", "food_138"],
      seo: {
        metaTitle: "Chicken Shawarma Fusion Pizza Delivery | Foodie",
        metaDescription:
          "Order our original Chicken Shawarma Pizza on the Foodie app. Hand-tossed artisan crust loaded with spiced shawarma chicken, cabbage, and sweet garlic sauce.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T18:00:00.000Z",
    },
    {
      id: "food_157",
      slug: "double-beef-burger-55",
      name: "Classic Double Beef Burger Platter",
      shortDescription:
        "Two juicy flame-grilled beef patties with melted cheddar cheese on a toasted brioche bun.",
      description:
        "Our Classic Double Beef Burger Platter features two hand-pressed, 100% premium beef patties grilled over open flames, layered with double cheddar slices, crisp lettuce, juicy vine tomatoes, pickles, and our signature tangy house sauce on a butter-toasted brioche bun.",
      category: {
        id: "cat_burger",
        name: "Burger",
      },
      pricing: {
        currency: "NGN",
        basePrice: 11000,
        finalPrice: 11000,
      },
      images: ["/images/double-beef-burger.jpg", "/images/burger-55-2.jpg"],
      badges: ["Recommended", "Popular"],
      availability: {
        id: "avail_155",
        inStock: true,
        quantityAvailable: 56,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_db_standard",
          name: "Standard Platter",
          priceModifier: 11000,
        },
        {
          id: "var_db_xl",
          name: "Large Platter (With Extra Large Fries)",
          priceModifier: 14500,
        },
      ],
      extras: [
        {
          id: "ext_cheddar_55",
          name: "Extra Cheddar Cheese Slice",
          price: 1000,
        },
        {
          id: "ext_beef_bacon_55",
          name: "Crispy Grilled Beef Bacon Strips",
          price: 2000,
        },
        {
          id: "ext_caramel_onions",
          name: "Sweet Caramelized Onions",
          price: 800,
        },
      ],
      customizations: {
        spiceLevel: [
          "Classic Mild Sauce",
          "Medium Warmth",
          "Spicy Pepper Glaze",
        ],
        removeIngredients: ["No Sliced Onions", "No Pickles", "No Tomatoes"],
      },
      ingredients: [
        "100% Premium Beef Patties",
        "Artisanal Brioche Bun",
        "Sharp Cheddar Cheese Slices",
        "Fresh Vine Tomatoes",
        "Crisp Lettuce",
        "Dill Pickle Slices",
        "Signature House Burger Sauce",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 814,
        protein: 58,
        carbs: 42,
        fat: 46,
        sugar: 8,
        fiber: 3,
        sodium: 920,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.7,
        totalReviews: 485,
      },
      reviews: [
        {
          id: "rev_26_0",
          user: "Femi I.",
          rating: 5,
          comment:
            "Really impressed with the premium presentation and juicy beef patties. A bit pricey compared to street stalls but worth every single naira.",
          date: "2026-04-19",
        },
        {
          id: "rev_26_1",
          user: "Femi H.",
          rating: 4,
          comment:
            "Decent burger platter overall, filling portion size, though the patties could use a tiny bit more seasoning for my personal taste.",
          date: "2026-01-16",
        },
        {
          id: "rev_26_2",
          user: "Uche H.",
          rating: 5,
          comment:
            "Exceeded my expectations entirely! The meat flavor was exceptionally rich and it didn't feel like typical greasy delivery food at all.",
          date: "2026-01-21",
        },
      ],
      metrics: {
        soldCount: 4371,
        wishlistCount: 667,
        views: 31018,
        cartAdds: 1010,
        trendingScore: 84,
      },
      recommendation: {
        score: 90,
        reason: "Top trending double-patty menu choice this week",
      },
      frequentlyBoughtTogether: ["Drinks", "Sides", "Snacks"],
      relatedimages: ["food_120", "food_138"],
      seo: {
        metaTitle: "Gourmet Double Beef Burger Platter Delivery | Foodie",
        metaDescription:
          "Order our flame-grilled Gourmet Double Beef Burger on the Foodie app. Two premium beef patties with melted cheese, fresh veggies, and house sauce on brioche.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T18:00:00.000Z",
    },
    {
      id: "food_158",
      slug: "coke-57",
      name: "Coca-Cola Original Taste",
      shortDescription: "Your choice of ice-cold carbonated soft drink.",
      description:
        "Nothing refreshes like an original, ice-cold Coca-Cola. Perfectly carbonated and delivered thoroughly chilled in insulated packaging, it provides that timeless crisp taste that pairs flawlessly with any of our savory meals or sides.",
      category: {
        id: "cat_drink",
        name: "Drinks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 600,
        finalPrice: 600,
      },
      images: ["/images/coke.jpg", "/images/drinks-57-2.jpg"],
      badges: ["Popular"],
      availability: {
        id: "avail_157",
        inStock: true,
        quantityAvailable: 67,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_coke_pet",
          name: "Standard PET Bottle (50cl)",
          priceModifier: 600,
        },
        {
          id: "var_coke_can",
          name: "Sleek Aluminum Can (33cl)",
          priceModifier: 800,
        },
      ],
      extras: [],
      customizations: {
        temperature: [
          "Extra Chilled with Ice Cup",
          "Chilled Only (No Ice Cup)",
          "Room Temperature",
        ],
        removeIngredients: [],
      },
      ingredients: [
        "Carbonated Water",
        "Sugar",
        "Caramel Color",
        "Phosphoric Acid",
        "Natural Flavors",
        "Caffeine",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 168,
        protein: 0,
        carbs: 42,
        fat: 0,
        sugar: 42,
        fiber: 0,
        sodium: 35,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "10-15 mins",
      reviewStats: {
        averageRating: 4.4,
        totalReviews: 180,
      },
      reviews: [
        {
          id: "rev_8_0",
          user: "Hassan O.",
          rating: 4,
          comment:
            "It was good but arrived slightly later than the estimated time tracker. Still cold enough to drink immediately though.",
          date: "2026-06-18",
        },
        {
          id: "rev_8_1",
          user: "Bola W.",
          rating: 4,
          comment:
            "Super refreshing and crisp. Arrived cold in a neat cup-holder bag, which prevented any messy spills.",
          date: "2026-05-05",
        },
        {
          id: "rev_8_2",
          user: "Kunle E.",
          rating: 5,
          comment:
            "My go-to order alongside the burger platter. Consistent quality and perfectly carbonated every time.",
          date: "2026-02-14",
        },
        {
          id: "rev_8_3",
          user: "Yemi G.",
          rating: 5,
          comment:
            "Arrived ice-cold, which is exactly what I wanted on a hot afternoon! Great value and tightly sealed.",
          date: "2026-02-22",
        },
        {
          id: "rev_8_4",
          user: "Uche X.",
          rating: 4,
          comment:
            "Can was completely frost-chilled upon delivery. Simple, perfect beverage companion for heavy food items.",
          date: "2026-02-05",
        },
      ],
      metrics: {
        soldCount: 2188,
        wishlistCount: 816,
        views: 11003,
        cartAdds: 8270,
        trendingScore: 74,
      },
      recommendation: {
        score: 88,
        reason: "Most frequently paired drink combo item",
      },
      frequentlyBoughtTogether: ["Burger", "Pizza", "Wrap", "Dessert"],
      relatedimages: ["food_124", "food_136"],
      seo: {
        metaTitle: "Ice-Cold Coca-Cola Original Delivery | Foodie",
        metaDescription:
          "Order chilled Coca-Cola Original Taste on the Foodie app. Get your favorite refreshing carbonated soft drink delivered ice-cold to your doorstep.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T18:02:00.000Z",
    },
    {
      id: "food_159",
      slug: "pepsi-59",
      name: "Pespi Original Taste",
      shortDescription: "Your choice of ice-cold carbonated soft drink.",
      description:
        "Nothing refreshes like an original, ice-cold Pepsi. Perfectly carbonated and delivered thoroughly chilled in insulated packaging, it provides that timeless crisp taste that pairs flawlessly with any of our savory meals or sides.",
      category: {
        id: "cat_drink",
        name: "Drinks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 600,
        finalPrice: 600,
      },
      images: ["/images/pepsi.jpg", "/images/drinks-57-2.jpg"],
      badges: ["Popular"],
      availability: {
        id: "avail_157",
        inStock: true,
        quantityAvailable: 67,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [],
      extras: [],
      customizations: {
        temperature: [
          "Extra Chilled with Ice Cup",
          "Chilled Only (No Ice Cup)",
          "Room Temperature",
        ],
        removeIngredients: [],
      },
      ingredients: [
        "Carbonated Water",
        "Sugar",
        "Caramel Color",
        "Phosphoric Acid",
        "Natural Flavors",
        "Caffeine",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 168,
        protein: 0,
        carbs: 42,
        fat: 0,
        sugar: 42,
        fiber: 0,
        sodium: 35,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "10-15 mins",
      reviewStats: {
        averageRating: 4.4,
        totalReviews: 180,
      },
      reviews: [
        {
          id: "rev_8_0",
          user: "Hassan O.",
          rating: 4,
          comment:
            "It was good but arrived slightly later than the estimated time tracker. Still cold enough to drink immediately though.",
          date: "2026-06-18",
        },
        {
          id: "rev_8_1",
          user: "Bola W.",
          rating: 4,
          comment:
            "Super refreshing and crisp. Arrived cold in a neat cup-holder bag, which prevented any messy spills.",
          date: "2026-05-05",
        },
        {
          id: "rev_8_2",
          user: "Kunle E.",
          rating: 5,
          comment:
            "My go-to order alongside the burger platter. Consistent quality and perfectly carbonated every time.",
          date: "2026-02-14",
        },
        {
          id: "rev_8_3",
          user: "Yemi G.",
          rating: 5,
          comment:
            "Arrived ice-cold, which is exactly what I wanted on a hot afternoon! Great value and tightly sealed.",
          date: "2026-02-22",
        },
        {
          id: "rev_8_4",
          user: "Uche X.",
          rating: 4,
          comment:
            "Can was completely frost-chilled upon delivery. Simple, perfect beverage companion for heavy food items.",
          date: "2026-02-05",
        },
      ],
      metrics: {
        soldCount: 2188,
        wishlistCount: 816,
        views: 11003,
        cartAdds: 8270,
        trendingScore: 74,
      },
      recommendation: {
        score: 88,
        reason: "Most frequently paired drink combo item",
      },
      frequentlyBoughtTogether: ["Burger", "Pizza", "Wrap", "Dessert"],
      relatedimages: ["food_124", "food_136"],
      seo: {
        metaTitle: "Ice-Cold Coca-Cola Original Delivery | Foodie",
        metaDescription:
          "Order chilled Coca-Cola Original Taste on the Foodie app. Get your favorite refreshing carbonated soft drink delivered ice-cold to your doorstep.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T18:02:00.000Z",
    },
    {
      id: "food_160",
      slug: "fanta-60",
      name: "Fanta Original Taste",
      shortDescription: "Your choice of ice-cold carbonated soft drink.",
      description:
        "Nothing refreshes like an original, ice-cold Fanta. Perfectly carbonated and delivered thoroughly chilled in insulated packaging, it provides that timeless crisp taste that pairs flawlessly with any of our savory meals or sides.",
      category: {
        id: "cat_drink",
        name: "Drinks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 600,
        finalPrice: 600,
      },
      images: ["/images/fanta.jpg", "/images/drinks-57-2.jpg"],
      badges: ["Popular"],
      availability: {
        id: "avail_157",
        inStock: true,
        quantityAvailable: 67,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [],
      extras: [],
      customizations: {
        temperature: [
          "Extra Chilled with Ice Cup",
          "Chilled Only (No Ice Cup)",
          "Room Temperature",
        ],
        removeIngredients: [],
      },
      ingredients: [
        "Carbonated Water",
        "Sugar",
        "Caramel Color",
        "Phosphoric Acid",
        "Natural Flavors",
        "Caffeine",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 168,
        protein: 0,
        carbs: 42,
        fat: 0,
        sugar: 42,
        fiber: 0,
        sodium: 35,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "10-15 mins",
      reviewStats: {
        averageRating: 4.4,
        totalReviews: 180,
      },
      reviews: [
        {
          id: "rev_8_0",
          user: "Hassan O.",
          rating: 4,
          comment:
            "It was good but arrived slightly later than the estimated time tracker. Still cold enough to drink immediately though.",
          date: "2026-06-18",
        },
        {
          id: "rev_8_1",
          user: "Bola W.",
          rating: 4,
          comment:
            "Super refreshing and crisp. Arrived cold in a neat cup-holder bag, which prevented any messy spills.",
          date: "2026-05-05",
        },
        {
          id: "rev_8_2",
          user: "Kunle E.",
          rating: 5,
          comment:
            "My go-to order alongside the burger platter. Consistent quality and perfectly carbonated every time.",
          date: "2026-02-14",
        },
        {
          id: "rev_8_3",
          user: "Yemi G.",
          rating: 5,
          comment:
            "Arrived ice-cold, which is exactly what I wanted on a hot afternoon! Great value and tightly sealed.",
          date: "2026-02-22",
        },
        {
          id: "rev_8_4",
          user: "Uche X.",
          rating: 4,
          comment:
            "Can was completely frost-chilled upon delivery. Simple, perfect beverage companion for heavy food items.",
          date: "2026-02-05",
        },
      ],
      metrics: {
        soldCount: 2188,
        wishlistCount: 816,
        views: 11003,
        cartAdds: 8270,
        trendingScore: 74,
      },
      recommendation: {
        score: 88,
        reason: "Most frequently paired drink combo item",
      },
      frequentlyBoughtTogether: ["Burger", "Pizza", "Wrap", "Dessert"],
      relatedimages: ["food_124", "food_136"],
      seo: {
        metaTitle: "Ice-Cold Coca-Cola Original Delivery | Foodie",
        metaDescription:
          "Order chilled Coca-Cola Original Taste on the Foodie app. Get your favorite refreshing carbonated soft drink delivered ice-cold to your doorstep.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T18:02:00.000Z",
    },
    {
      id: "food_161",
      slug: "sprite-61",
      name: "Sprite Original Taste",
      shortDescription: "Your choice of ice-cold carbonated soft drink.",
      description:
        "Nothing refreshes like an original, ice-cold Sprite. Perfectly carbonated and delivered thoroughly chilled in insulated packaging, it provides that timeless crisp taste that pairs flawlessly with any of our savory meals or sides.",
      category: {
        id: "cat_drink",
        name: "Drinks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 600,
        finalPrice: 600,
      },
      images: ["/images/sprite.jpg", "/images/drinks-57-2.jpg"],
      badges: ["Popular"],
      availability: {
        id: "avail_157",
        inStock: true,
        quantityAvailable: 67,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [],
      extras: [],
      customizations: {
        temperature: [
          "Extra Chilled with Ice Cup",
          "Chilled Only (No Ice Cup)",
          "Room Temperature",
        ],
        removeIngredients: [],
      },
      ingredients: [
        "Carbonated Water",
        "Sugar",
        "Caramel Color",
        "Phosphoric Acid",
        "Natural Flavors",
        "Caffeine",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 168,
        protein: 0,
        carbs: 42,
        fat: 0,
        sugar: 42,
        fiber: 0,
        sodium: 35,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "10-15 mins",
      reviewStats: {
        averageRating: 4.4,
        totalReviews: 180,
      },
      reviews: [
        {
          id: "rev_8_0",
          user: "Hassan O.",
          rating: 4,
          comment:
            "It was good but arrived slightly later than the estimated time tracker. Still cold enough to drink immediately though.",
          date: "2026-06-18",
        },
        {
          id: "rev_8_1",
          user: "Bola W.",
          rating: 4,
          comment:
            "Super refreshing and crisp. Arrived cold in a neat cup-holder bag, which prevented any messy spills.",
          date: "2026-05-05",
        },
        {
          id: "rev_8_2",
          user: "Kunle E.",
          rating: 5,
          comment:
            "My go-to order alongside the burger platter. Consistent quality and perfectly carbonated every time.",
          date: "2026-02-14",
        },
        {
          id: "rev_8_3",
          user: "Yemi G.",
          rating: 5,
          comment:
            "Arrived ice-cold, which is exactly what I wanted on a hot afternoon! Great value and tightly sealed.",
          date: "2026-02-22",
        },
        {
          id: "rev_8_4",
          user: "Uche X.",
          rating: 4,
          comment:
            "Can was completely frost-chilled upon delivery. Simple, perfect beverage companion for heavy food items.",
          date: "2026-02-05",
        },
      ],
      metrics: {
        soldCount: 2188,
        wishlistCount: 816,
        views: 11003,
        cartAdds: 8270,
        trendingScore: 74,
      },
      recommendation: {
        score: 88,
        reason: "Most frequently paired drink combo item",
      },
      frequentlyBoughtTogether: ["Burger", "Pizza", "Wrap", "Dessert"],
      relatedimages: ["food_124", "food_136"],
      seo: {
        metaTitle: "Ice-Cold Coca-Cola Original Delivery | Foodie",
        metaDescription:
          "Order chilled Coca-Cola Original Taste on the Foodie app. Get your favorite refreshing carbonated soft drink delivered ice-cold to your doorstep.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T18:02:00.000Z",
    },
    {
      id: "food_162",
      slug: "coke-62",
      name: "Coca-Cola Original Taste",
      shortDescription: "Your choice of ice-cold carbonated soft drink.",
      description:
        "Nothing refreshes like an original, ice-cold Coca-Cola. Perfectly carbonated and delivered thoroughly chilled in insulated packaging, it provides that timeless crisp taste that pairs flawlessly with any of our savory meals or sides.",
      category: {
        id: "cat_drink",
        name: "Drinks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 600,
        finalPrice: 600,
      },
      images: ["/images/coke.jpg", "/images/drinks-57-2.jpg"],
      badges: ["Popular"],
      availability: {
        id: "avail_157",
        inStock: true,
        quantityAvailable: 67,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_coke_pet",
          name: "Standard PET Bottle (50cl)",
          priceModifier: 600,
        },
        {
          id: "var_coke_can",
          name: "Sleek Aluminum Can (33cl)",
          priceModifier: 800,
        },
      ],
      extras: [],
      customizations: {
        temperature: [
          "Extra Chilled with Ice Cup",
          "Chilled Only (No Ice Cup)",
          "Room Temperature",
        ],
        removeIngredients: [],
      },
      ingredients: [
        "Carbonated Water",
        "Sugar",
        "Caramel Color",
        "Phosphoric Acid",
        "Natural Flavors",
        "Caffeine",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 168,
        protein: 0,
        carbs: 42,
        fat: 0,
        sugar: 42,
        fiber: 0,
        sodium: 35,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "10-15 mins",
      reviewStats: {
        averageRating: 4.4,
        totalReviews: 180,
      },
      reviews: [
        {
          id: "rev_8_0",
          user: "Hassan O.",
          rating: 4,
          comment:
            "It was good but arrived slightly later than the estimated time tracker. Still cold enough to drink immediately though.",
          date: "2026-06-18",
        },
        {
          id: "rev_8_1",
          user: "Bola W.",
          rating: 4,
          comment:
            "Super refreshing and crisp. Arrived cold in a neat cup-holder bag, which prevented any messy spills.",
          date: "2026-05-05",
        },
        {
          id: "rev_8_2",
          user: "Kunle E.",
          rating: 5,
          comment:
            "My go-to order alongside the burger platter. Consistent quality and perfectly carbonated every time.",
          date: "2026-02-14",
        },
        {
          id: "rev_8_3",
          user: "Yemi G.",
          rating: 5,
          comment:
            "Arrived ice-cold, which is exactly what I wanted on a hot afternoon! Great value and tightly sealed.",
          date: "2026-02-22",
        },
        {
          id: "rev_8_4",
          user: "Uche X.",
          rating: 4,
          comment:
            "Can was completely frost-chilled upon delivery. Simple, perfect beverage companion for heavy food items.",
          date: "2026-02-05",
        },
      ],
      metrics: {
        soldCount: 2188,
        wishlistCount: 816,
        views: 11003,
        cartAdds: 8270,
        trendingScore: 74,
      },
      recommendation: {
        score: 88,
        reason: "Most frequently paired drink combo item",
      },
      frequentlyBoughtTogether: ["Burger", "Pizza", "Wrap", "Dessert"],
      relatedimages: ["food_124", "food_136"],
      seo: {
        metaTitle: "Ice-Cold Coca-Cola Original Delivery | Foodie",
        metaDescription:
          "Order chilled Coca-Cola Original Taste on the Foodie app. Get your favorite refreshing carbonated soft drink delivered ice-cold to your doorstep.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T18:02:00.000Z",
    },
    {
      id: "food_62",
      slug: "onion-rings-12",
      name: "Crispy Beer-Battered Onion Rings",
      shortDescription:
        "Thick-cut onion rings dipped in a light batter and fried until golden crisp.",
      description:
        "Our Crispy Beer-Battered Onion Rings are made from premium, sweet white onions cut into thick slices. Hand-dipped in our signature seasoned savory flour batter and flash-fried to order for a perfectly crunchy exterior and tender, juicy bite. Served hot with a side dip.",
      category: {
        id: "cat_sides",
        name: "Sides",
      },
      pricing: {
        currency: "NGN",
        basePrice: 2500,
        finalPrice: 2500,
      },
      images: ["/images/onion-rings.jpg", "/images/onion-rings-12-2.jpg"],
      badges: ["Combo Deal", "Featured"],
      availability: {
        id: "avail_12",
        inStock: true,
        quantityAvailable: 4,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_or_standard",
          name: "Standard Sharing Box",
          priceModifier: 2500,
        },
        {
          id: "var_or_jumbo",
          name: "Jumbo Party Box",
          priceModifier: 4500,
        },
      ],
      extras: [
        {
          id: "ext_bbq_sauce_12",
          name: "Smoky BBQ Dipping Cup",
          price: 500,
        },
        {
          id: "ext_garlic_mayo_12",
          name: "Creamy Garlic Mayo Dip",
          price: 600,
        },
      ],
      customizations: {
        seasoning: ["Classic Sea Salt", "Spicy Suya Seasoning Dustinging"],
        removeIngredients: [],
      },
      ingredients: [
        "Sweet White Onions",
        "Wheat Flour Blend",
        "Baking Powder",
        "Vegetable Frying Oil",
        "Garlic Salt",
        "Smoked Paprika",
      ],
      nutrition: {
        servingSize: "200g",
        calories: 380,
        protein: 5,
        carbs: 44,
        fat: 20,
        sugar: 6,
        fiber: 3,
        sodium: 520,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: false,
      },
      allergens: ["Gluten"],
      prepTime: "30-45 mins",
      reviewStats: {
        averageRating: 4.0,
        totalReviews: 129,
      },
      reviews: [
        {
          id: "rev_12_0",
          user: "Amaka B.",
          rating: 5,
          comment:
            "My go-to side order now. Consistent crispiness and quality every single time I order from here.",
          date: "2026-02-18",
        },
        {
          id: "rev_12_1",
          user: "Funke Z.",
          rating: 2,
          comment:
            "Not bad, but they arrived a bit soggy due to the steam in the box. I've had better versions nearby.",
          date: "2026-06-15",
        },
        {
          id: "rev_12_2",
          user: "Tolu Y.",
          rating: 5,
          comment:
            "Absolutely brilliant crunch! They don't taste overly oily and the batter is nicely spiced.",
          date: "2026-05-15",
        },
        {
          id: "rev_12_3",
          user: "Ibrahim X.",
          rating: 4,
          comment:
            "The box portion was a little smaller than I expected for a sharing meal, but the flavor profile was nice.",
          date: "2026-04-28",
        },
      ],
      metrics: {
        soldCount: 2203,
        wishlistCount: 516,
        views: 22030,
        cartAdds: 3604,
        trendingScore: 72,
      },
      recommendation: {
        score: 85,
        reason: "Top trending side dish addition this week",
      },
      frequentlyBoughtTogether: ["Burgers", "Pizza", "Drinks"],
      relatedimages: ["food_140"],
      seo: {
        metaTitle: "Crispy Beer-Battered Onion Rings Delivery | Foodie",
        metaDescription:
          "Order our gold-standard Crispy Beer-Battered Onion Rings from Pizza Palace on the Foodie app. Golden fried sweet onion slices served hot with signature dip.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T18:04:00.000Z",
    },
    {
      id: "food_164",
      slug: "chicken-pie-9",
      name: "Classic Nigerian Chicken Pie",
      shortDescription:
        "Flaky, buttery shortcrust pastry overfilled with spiced chicken, potatoes, and carrots.",
      description:
        "Our Classic Nigerian Chicken Pie features a golden, buttery, and exceptionally flaky shortcrust pastry wrapper. Generously packed with a savory, perfectly seasoned filling of premium minced lean chicken, diced Irish potatoes, and tender carrots slow-cooked in rich seasoned broth.",
      category: {
        id: "cat_snacks",
        name: "Snacks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 2500,
        finalPrice: 2500,
      },
      images: ["/images/chicken-pie.jpg", "/images/meat-pie-9-2.jpg"],
      badges: ["Featured"],
      availability: {
        id: "avail_9",
        inStock: true,
        quantityAvailable: 16,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_mp_single",
          name: "Single Large Meat Pie",
          priceModifier: 2500,
        },
        {
          id: "var_mp_pair",
          name: "Twin Pack (2 Meat Pies)",
          priceModifier: 4800,
        },
      ],
      extras: [
        {
          id: "ext_chilli_sauce",
          name: "Side of Peppered Dipping Gravy",
          price: 500,
        },
      ],
      customizations: {
        preparationType: [
          "Standard Warm Serving",
          "Piping Hot (Reheated)",
          "Room Temperature",
        ],
        removeIngredients: [],
      },
      ingredients: [
        "Wheat Flour Crust",
        "Minced Lean Beef",
        "Diced Irish Potatoes",
        "Diced Carrots",
        "Creamy Margarine Butter",
        "Egg Wash Glaze",
        "Local Seasoning Spices",
      ],
      nutrition: {
        servingSize: "200g",
        calories: 480,
        protein: 16,
        carbs: 44,
        fat: 26,
        sugar: 3,
        fiber: 4,
        sodium: 590,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Gluten", "Egg", "Milk"],
      prepTime: "5 mins",
      reviewStats: {
        averageRating: 4.0,
        totalReviews: 186,
      },
      reviews: [
        {
          id: "rev_9_0",
          user: "Musa G.",
          rating: 4,
          comment:
            "Fast delivery and the pastry crust was still completely warm and intact when it got to me. Genuinely tasty snack.",
          date: "2026-04-27",
        },
        {
          id: "rev_9_1",
          user: "Ada V.",
          rating: 4,
          comment:
            "One of the best traditional meat pies I've had delivered this month. Packaging was incredibly neat, and the filling inside wasn't dry.",
          date: "2026-04-07",
        },
        {
          id: "rev_9_2",
          user: "Yemi U.",
          rating: 4,
          comment:
            "Exceeded my expectations! The shortcrust is perfectly buttery and flaky, with a generous meat-to-potato distribution ratio.",
          date: "2026-04-17",
        },
      ],
      metrics: {
        soldCount: 2792,
        wishlistCount: 66,
        views: 19544,
        cartAdds: 4785,
        trendingScore: 76,
      },
      recommendation: {
        score: 84,
        reason: "Top trending fast-casual snack option this week",
      },
      frequentlyBoughtTogether: ["Drinks"],
      relatedimages: [],
      seo: {
        metaTitle: "Classic Nigerian Meat Pie Delivery | Foodie",
        metaDescription:
          "Order our golden, flaky Classic Nigerian Meat Pie on the Foodie app. Baked fresh daily and stuffed with seasoned minced beef, potatoes, and carrots.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T18:06:00.000Z",
    },
    {
      id: "food_165",
      slug: "garden-salad-10",
      name: "Garden Salad",
      shortDescription:
        "Crisp romaine lettuce, crunchy cucumbers, cherry tomatoes, and shredded carrots served with a light zesty vinaigrette.",
      description:
        "Our signature Garden Salad features a crisp bed of fresh romaine lettuce tossed with premium cucumbers, vine-ripened cherry tomatoes, and shredded carrots. Prepared fresh daily at Rice Village using high-quality local ingredients, it's a refreshing customer favorite that pairs perfectly with any main dish or drink. Made fresh to order and securely packaged to retain peak crispness during delivery.",
      category: {
        id: "cat_sides",
        name: "Sides",
      },
      pricing: {
        currency: "NGN",
        basePrice: 6000,
        finalPrice: 6000,
      },
      images: ["/images/garden-salad.jpg", "/images/garden-salad-10-2.jpg"],
      badges: ["Freshly Made", "Healthy Choice"],
      availability: {
        inStock: true,
        quantityAvailable: 35,
      },
      ingredients: [
        "Romaine lettuce",
        "Cucumber slices",
        "Cherry tomatoes",
        "Shredded carrots",
        "Olive oil",
        "Lemon juice",
        "Herbs and spices",
      ],
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      variants: [
        {
          id: "var_size_regular",
          name: "Regular Size",
          priceModifier: 6000,
        },
        {
          id: "var_size_large",
          name: "Large Sharing Size",
          priceModifier: 8500,
        },
      ],
      extras: [
        {
          id: "ext_chicken",
          name: "Add Grilled Chicken Breast",
          price: 2000,
        },
        {
          id: "ext_egg",
          name: "Add Hard-Boiled Egg",
          price: 500,
        },
        {
          id: "ext_avocado",
          name: "Add Sliced Avocado",
          price: 1200,
        },
        {
          id: "ext_dressing_creamy",
          name: "Substitute with Creamy Garlic Dressing (Contains Milk & Eggs)",
          price: 300,
        },
      ],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.8,
        totalReviews: 182,
      },
      reviews: [
        {
          id: "rev_10_0",
          user: "Ngozi B.",
          rating: 5,
          comment:
            "One of the freshest salads I've had delivered this month. Packaging was neat and the vinaigrette was on point.",
          date: "2026-04-23",
        },
        {
          id: "rev_10_1",
          user: "Hassan X.",
          rating: 4,
          comment:
            "Really impressed with the freshness and clean presentation. Highly recommend adding the grilled chicken.",
          date: "2026-06-24",
        },
        {
          id: "rev_10_2",
          user: "Femi K.",
          rating: 5,
          comment:
            "Absolutely crisp and delicious. Arrived cold and fresh, portion size was perfect.",
          date: "2026-03-20",
        },
      ],
      frequentlyBoughtTogether: ["Drinks", "Chicken"],
      relatedimages: [],
      metrics: {
        soldCount: 1100,
        wishlistCount: 317,
        views: 15400,
        cartAdds: 1448,
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T19:04:00Z",
    },
    {
      id: "food_66",
      slug: "grilled-full-chicken-61",
      name: "Flame-Grilled Full Chicken",
      shortDescription:
        "Whole tender chicken marinated in house spices and flame-grilled to smoky perfection.",
      description:
        "Our signature Flame-Grilled Full Chicken is perfect for sharing. A whole premium chicken is slow-marinated for 24 hours in our house blend of citrus, garlic, and local herbs, then open-flame grilled until smoky and beautifully charred. Perfectly juicy on the inside, it is served fresh with your choice of basting sauce at Sweet Tooth.",
      category: {
        id: "cat_chicken",
        name: "BBQ_&_Grills",
      },
      pricing: {
        currency: "NGN",
        basePrice: 16500,
        finalPrice: 16500,
      },
      images: ["/images/full-grilled-chicken.jpg", "/images/chicken-61-2.jpg"],
      badges: ["Family Sharing", "Flame Grilled"],
      availability: {
        inStock: true,
        quantityAvailable: 20,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_chicken_full_standard",
          name: "Standard Full Chicken",
          price: 16500,
        },
        {
          id: "var_chicken_full_jumbo",
          name: "Jumbo Full Chicken",
          price: 21500,
        },
      ],
      extras: [
        {
          id: "ext_jollof_side",
          name: "Add Side of frnech fries",
          price: 1000,
        },
        {
          id: "ext_dodo_side",
          name: "Add Side of yam fries",
          price: 1000,
        },
        {
          id: "ext_periperi_sauce",
          name: "Extra Peri-Peri Dipping Sauce",
          price: 600,
        },
      ],
      customizations: {
        spiceLevel: [
          "Garlic Herb (Mild)",
          "Peri-Peri Medium",
          "Hot & Fiery BBQ",
        ],
        removeIngredients: [],
      },
      ingredients: [
        "Whole chicken",
        "Garlic and herb rub",
        "Lemon juice",
        "Olive oil",
        "Smoky paprika flavoring",
      ],
      nutrition: {
        servingSize: "1000g",
        calories: 1450,
        protein: 165,
        carbs: 0,
        fat: 88,
        sugar: 0,
        fiber: 0,
        sodium: 1420,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.2,
        totalReviews: 282,
      },
      reviews: [
        {
          id: "rev_61_0",
          user: "Emeka N.",
          rating: 5,
          comment:
            "Proper family size meal. The smokiness from the grill is amazing and the chicken remains super juicy.",
          date: "2026-04-14",
        },
        {
          id: "rev_61_1",
          user: "Hadiza Y.",
          rating: 4,
          comment:
            "Very flavorful chicken. Paired it with their jollof side and it fed three of us perfectly.",
          date: "2026-06-21",
        },
      ],
      metrics: {
        soldCount: 1032,
        wishlistCount: 756,
        views: 29174,
        cartAdds: 2316,
        trendingScore: 68,
      },
      recommendation: {
        score: 97,
        reason: "Top choice for group and family dinner options",
      },
      frequentlyBoughtTogether: ["Sides", "Drinks"],
      relatedimages: [],
      seo: {
        metaTitle: "Smoky Flame-Grilled Full Chicken | Sweet Tooth",
        metaDescription:
          "Order juicy, perfectly seasoned flame-grilled full chicken from Sweet Tooth. Great for group dinners and sharing. Fast delivery across Lagos.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T19:13:00Z",
    },
    {
      id: "food_167",
      slug: "milkshake-63",
      name: "Classic Thick Milkshake",
      shortDescription:
        "Rich, creamy, and velvety smooth milkshake blended with premium ice cream.",
      description:
        "Our signature Classic Thick Milkshake is the ultimate sweet treat. Made by blending premium dairy ice cream with fresh whole milk and your choice of flavor profiles. Prepared fresh to order at Sweet Tooth, it is served thick, chilled, and perfectly balanced for the ultimate dessert experience.",
      category: {
        id: "cat_drink",
        name: "Drinks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 5500,
        finalPrice: 5500,
      },
      images: ["/images/velvetty-milkshake.jpg", "/images/drinks-63-2.jpg"],
      badges: ["Featured", "Indulgent Choice"],
      availability: {
        inStock: true,
        quantityAvailable: 12,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_shake_vanilla",
          name: "Creamy Vanilla",
          price: 5500,
        },
        {
          id: "var_shake_chocolate",
          name: "Rich Chocolate",
          price: 5500,
        },
        {
          id: "var_shake_strawberry",
          name: "Fresh Strawberry",
          price: 5500,
        },
        {
          id: "var_shake_large_upgrade",
          name: "Go Jumbo Size (All Flavors)",
          price: 7000,
        },
      ],
      extras: [
        {
          id: "ext_whipped_cream",
          name: "Add Whipped Cream Swirl",
          price: 500,
        },
        {
          id: "ext_oreo_crumbs",
          name: "Add Crushed Oreo Cookies",
          price: 800,
        },
        {
          id: "ext_chocolate_drizzle",
          name: "Extra Chocolate Syrup Drizzle",
          price: 400,
        },
      ],
      customizations: {
        sweetnessLevel: ["Standard Sweetness", "Less Sweet"],
        removeIngredients: [],
      },
      ingredients: [
        "Premium dairy ice cream",
        "Whole milk",
        "Natural flavor extracts",
        "Sugar",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 520,
        protein: 10,
        carbs: 62,
        fat: 24,
        sugar: 48,
        fiber: 0,
        sodium: 210,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: true,
      },
      allergens: ["Milk", "Soy"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.8,
        totalReviews: 227,
      },
      reviews: [
        {
          id: "rev_63_0",
          user: "Tosin A.",
          rating: 5,
          comment:
            "Incredibly thick and creamy! It didn't even melt before arriving. The chocolate flavor is excellent.",
          date: "2026-06-19",
        },
        {
          id: "rev_63_1",
          user: "Nneka O.",
          rating: 5,
          comment:
            "Best milkshake in town. Adding oreos makes it a full meal honestly, so filling!",
          date: "2026-07-04",
        },
      ],
      metrics: {
        soldCount: 270,
        wishlistCount: 715,
        views: 12263,
        cartAdds: 8038,
        trendingScore: 94,
      },
      recommendation: {
        score: 95,
        reason: "Top rated dessert beverage",
      },
      frequentlyBoughtTogether: ["Burgers", "Sides", "Snacks", "Pizza", "Wrap"],
      relatedimages: [],
      seo: {
        metaTitle: "Creamy Thick Milkshakes | Sweet Tooth",
        metaDescription:
          "Indulge in rich, creamy, and velvety smooth milkshakes from Sweet Tooth. Available in chocolate, vanilla, and strawberry flavors. Fast delivery across Lagos.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T19:14:00Z",
    },
    {
      id: "food_168",
      slug: "chicken-burger-64",
      name: "Crispy Chicken Burger",
      shortDescription:
        "Crispy golden chicken breast fillet topped with fresh lettuce, tomatoes, and house sauce.",
      description:
        "Our signature Crispy Chicken Burger is a customer favorite. It features a premium chicken breast fillet, seasoned and fried to golden perfection, layered with melting cheese, fresh lettuce, and ripe vine tomatoes inside a toasted brioche bun. Prepared fresh daily at Pizza Palace using top-tier local ingredients.",
      category: {
        id: "cat_burger",
        name: "Burger",
      },
      pricing: {
        currency: "NGN",
        basePrice: 7000,
        finalPrice: 7000,
      },
      images: ["/images/chicken_burger.jpg", "/images/burger-64-2.jpg"],
      badges: ["Featured", "Top Rated"],
      availability: {
        inStock: true,
        quantityAvailable: 49,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_burger_regular",
          name: "Regular Burger",
          price: 7000,
        },
        {
          id: "var_burger_large",
          name: "Double Patty Burger",
          price: 9000,
        },
      ],
      extras: [
        {
          id: "ext_cheese",
          name: "Extra Cheddar Cheese Slice",
          price: 1000,
        },
        {
          id: "ext_patty",
          name: "Add Extra Chicken Patty",
          price: 2500,
        },
        {
          id: "ext_egg",
          name: "Add Fried Egg",
          price: 600,
        },
      ],
      customizations: {
        spiceLevel: ["Mild", "Medium Spicy", "Hot & Fiery"],
        removeIngredients: ["Onions", "Tomatoes"],
      },
      ingredients: [
        "Chicken breast fillet",
        "Brioche bun",
        "Cheddar cheese",
        "Lettuce",
        "Tomatoes",
        "Signature house sauce",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 680,
        protein: 38,
        carbs: 44,
        fat: 28,
        sugar: 4,
        fiber: 2,
        sodium: 710,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.5,
        totalReviews: 119,
      },
      reviews: [
        {
          id: "rev_64_0",
          user: "Femi O.",
          rating: 5,
          comment:
            "The bun was perfectly soft and the chicken was very crispy. Tastes great with the extra cheese!",
          date: "2026-05-18",
        },
        {
          id: "rev_64_1",
          user: "Aisha M.",
          rating: 4,
          comment:
            "Really delicious option when you want a break from their pizzas. Arrived fresh and still warm.",
          date: "2026-06-25",
        },
      ],
      metrics: {
        soldCount: 2962,
        wishlistCount: 769,
        views: 48669,
        cartAdds: 2919,
        trendingScore: 65,
      },
      recommendation: {
        score: 82,
        reason: "Popular alternative lunchtime favorite",
      },
      frequentlyBoughtTogether: ["Sides", "Drinks"],
      relatedimages: [],
      seo: {
        metaTitle: "Crispy Chicken Burger | Pizza Palace",
        metaDescription:
          "Bite into our delicious, freshly made Crispy Chicken Burger from Pizza Palace. Made with premium ingredients and delivered straight to your door across Lagos.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T19:15:00Z",
    },
    {
      id: "food_169",
      slug: "chicken-pizza-65",
      name: "BBQ Chicken Pizza",
      shortDescription:
        "Sweet and smoky BBQ shredded chicken topped with mozzarella cheese and red onions.",
      description:
        "Our signature BBQ Chicken Pizza features a hand-tossed artisan crust topped with a rich, smoky barbecue sauce base. Layered with tender grilled chicken breast pieces, melting mozzarella cheese, sweet corn, and crisp red onions. Baked to golden perfection at Wrap House using premium local and imported ingredients.",
      category: {
        id: "cat_pizza",
        name: "Pizza",
      },
      pricing: {
        currency: "NGN",
        basePrice: 10000,
        finalPrice: 10000,
      },
      images: ["/images/chicken-pizza.jpg", "/images/pizza-65-2.jpg"],
      badges: ["Featured", "Recommended"],
      availability: {
        inStock: true,
        quantityAvailable: 90,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_pizza_regular",
          name: "Medium (10 inch)",
          price: 10000,
        },
        {
          id: "var_pizza_large",
          name: "Large (12 inch)",
          price: 14500,
        },
      ],
      extras: [
        {
          id: "ext_extra_cheese",
          name: "Extra Mozzarella Cheese",
          price: 1500,
        },
        {
          id: "ext_chicken_topping",
          name: "Extra BBQ Chicken Chunks",
          price: 2000,
        },
        {
          id: "ext_garlic_dip",
          name: "Signature Garlic Crust Dip",
          price: 500,
        },
      ],
      customizations: {
        spiceLevel: ["Classic Sweet BBQ", "Spicy BBQ Kick"],
        removeIngredients: ["Onions", "Sweet Corn"],
      },
      ingredients: [
        "Artisan pizza dough",
        "Smoky BBQ base sauce",
        "Shredded mozzarella cheese",
        "Grilled chicken breast cuts",
        "Red onion rings",
        "Sweet corn",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 840,
        protein: 42,
        carbs: 98,
        fat: 32,
        sugar: 12,
        fiber: 4,
        sodium: 920,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      delivery: {
        estimatedTime: "20-40 mins",
        deliveryFee: 1500,
        freeDelivery: false,
      },
      reviewStats: {
        averageRating: 4.8,
        totalReviews: 341,
      },
      reviews: [
        {
          id: "rev_65_1",
          user: "John D.",
          rating: 5,
          comment:
            "Good value for the price. The crust is soft and the smoky flavor is strong.",
          date: "2026-01-09",
        },
        {
          id: "rev_65_2",
          user: "Fatima A.",
          rating: 4,
          comment:
            "Fresh ingredients and generous portion size. One of Wrap House's best secrets.",
          date: "2026-01-06",
        },
        {
          id: "rev_65_3",
          user: "Blessing E.",
          rating: 5,
          comment:
            "Absolutely delicious and arrived hot. The chicken chunks were plenty.",
          date: "2026-01-01",
        },
      ],
      metrics: {
        soldCount: 2689,
        wishlistCount: 359,
        views: 29820,
        cartAdds: 1618,
        trendingScore: 80,
      },
      recommendation: {
        score: 88,
        reason: "Frequently ordered weekend treat",
      },
      frequentlyBoughtTogether: ["Drinks", "Sides"],
      relatedimages: ["food_159", "food_160"],
      seo: {
        metaTitle: "Smoky BBQ Chicken Pizza | Wrap House",
        metaDescription:
          "Order our top-rated smoky BBQ Chicken Pizza fresh from Wrap House. Cheesy, savory goodness delivered piping hot straight to your doorstep across Lagos.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T19:16:00Z",
    },
    {
      id: "food_170",
      slug: "cupcake-66",
      name: "Gourmet Frosted Cupcake",
      shortDescription:
        "Moist, fluffy gourmet cupcake topped with our signature swirl buttercream frosting.",
      description:
        "Our signature Gourmet Frosted Cupcake is the perfect sweet ending to your meal. Baked fresh daily at Wrap House using premium ingredients, each cupcake features a moist, airy sponge base crowned with a rich, silky buttercream swirl. Beautifully presented and handles delivery flawlessly.",
      category: {
        id: "cat_dessert",
        name: "Dessert",
      },
      pricing: {
        currency: "NGN",
        basePrice: 2500,
        finalPrice: 2500,
      },
      images: ["/images/cup-cake.jpg", "/images/dessert-66-2.jpg"],
      badges: ["Featured", "Freshly Baked"],
      availability: {
        inStock: true,
        quantityAvailable: 69,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_cupcake_red_velvet",
          name: "Classic Red Velvet",
          price: 2500,
        },
        {
          id: "var_cupcake_chocolate",
          name: "Double Chocolate",
          price: 2500,
        },
        {
          id: "var_cupcake_vanilla",
          name: "Vanilla Bean",
          price: 2500,
        },
        {
          id: "var_cupcake_box_six",
          name: "Assorted Box of 6",
          price: 13500,
        },
      ],
      extras: [
        {
          id: "ext_extra_frosting",
          name: "Extra Buttercream Frosting Swirl",
          price: 400,
        },
        {
          id: "ext_sprinkles",
          name: "Add Rainbow Sprinkles",
          price: 200,
        },
        {
          id: "ext_fudge_drizzle",
          name: "Add Warm Chocolate Fudge Drizzle",
          price: 300,
        },
      ],
      customizations: {
        frostingStyle: ["Standard Frosting", "Light Frosting"],
        removeIngredients: [],
      },
      ingredients: [
        "Premium cake flour",
        "Unsalted butter",
        "Sugar",
        "Fresh whole milk",
        "Organic eggs",
        "Vanilla bean extract",
      ],
      nutrition: {
        servingSize: "120g",
        calories: 340,
        protein: 4,
        carbs: 46,
        fat: 16,
        sugar: 32,
        fiber: 1,
        sodium: 210,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten", "Eggs"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.6,
        totalReviews: 279,
      },
      reviews: [
        {
          id: "rev_66_0",
          user: "Tunde W.",
          rating: 5,
          comment:
            "The red velvet is so moist! Frosting is perfectly sweet without being overwhelming.",
          date: "2026-05-24",
        },
        {
          id: "rev_66_1",
          user: "Ifeoma N.",
          rating: 4,
          comment:
            "Got the box of 6 for a small office treat. Everyone loved them. Arrived in perfect condition.",
          date: "2026-06-12",
        },
      ],
      metrics: {
        soldCount: 3249,
        wishlistCount: 997,
        views: 39032,
        cartAdds: 9581,
        trendingScore: 100,
      },
      recommendation: {
        score: 92,
        reason: "Top trending dessert option this week",
      },
      frequentlyBoughtTogether: ["Sides", "Pizza", "Wraps"],
      relatedimages: ["food_163", "food_brownie_slice_09"],
      seo: {
        metaTitle: "Gourmet Buttercream Cupcakes | Wrap House",
        metaDescription:
          "Indulge in delicious, freshly baked gourmet cupcakes from Wrap House. Available in Red Velvet, Chocolate, and Vanilla. Order online for swift delivery across Lagos.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T19:17:00Z",
    },
    {
      id: "food_171",
      slug: "beef-wrap-67",
      name: "Grilled Beef Shawarma Wrap",
      shortDescription:
        "Tender grilled beef strips, veggies, and cream sauce rolled in a toasted tortilla.",
      description:
        "Our signature Grilled Beef Wrap features juicy, thinly sliced beef strips marinated in local aromatic spices. Grilled to perfection and wrapped tightly in a soft, warm flour tortilla with fresh onions, crunchy cabbage, sweet bell peppers, and a rich garlic cream sauce. Prepared fresh daily at Sweet Tooth.",
      category: {
        id: "cat_wrap",
        name: "Wrap",
      },
      pricing: {
        currency: "NGN",
        basePrice: 5500,
        finalPrice: 5500,
      },
      images: ["/images/beef-wrap.jpg", "/images/wrap-67-2.jpg"],
      badges: ["Featured", "Popular Choice"],
      availability: {
        inStock: true,
        quantityAvailable: 23,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_wrap_regular",
          name: "Regular Wrap",
          price: 5500,
        },
        {
          id: "var_wrap_large",
          name: "Jumbo Double Beef Wrap",
          price: 7000,
        },
      ],
      extras: [
        {
          id: "ext_cheese",
          name: "Add Melted Cheddar Cheese",
          price: 1000,
        },
        {
          id: "ext_beef",
          name: "Extra Grilled Beef Strips",
          price: 2500,
        },
        {
          id: "ext_fries",
          name: "Add Side of French Fries",
          price: 1500,
        },
      ],
      customizations: {
        spiceLevel: ["Mild Sauce", "Medium Spice", "Hot Chili Splash"],
        removeIngredients: ["Onions", "Cabbage"],
      },
      ingredients: [
        "Flour tortilla wrap",
        "Marinated beef strips",
        "Cabbage shreds",
        "Onions",
        "Sweet bell peppers",
        "Garlic mayo cream sauce",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 680,
        protein: 34,
        carbs: 42,
        fat: 26,
        sugar: 4,
        fiber: 3,
        sodium: 680,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.6,
        totalReviews: 244,
      },
      reviews: [
        {
          id: "rev_167_1",
          user: "Chioma",
          rating: 5,
          comment:
            "One of the best items I've ordered. The beef was so tender!",
          date: "2026-01-03",
        },
        {
          id: "rev_167_2",
          user: "David",
          rating: 4,
          comment: "Would definitely order again. Very filling portion size.",
          date: "2026-03-01",
        },
        {
          id: "rev_167_3",
          user: "Tunde",
          rating: 5,
          comment:
            "Fresh ingredients and generous portion size. Still hot when it arrived.",
          date: "2026-05-23",
        },
      ],
      metrics: {
        soldCount: 4393,
        wishlistCount: 1120,
        views: 40964,
        cartAdds: 3100,
        trendingScore: 73,
      },
      recommendation: {
        score: 83,
        reason: "Frequently ordered fast-lunch item",
      },
      frequentlyBoughtTogether: ["Wrap", "Drinks", "Sides"],
      relatedimages: [],
      seo: {
        metaTitle: "Spicy Grilled Beef Wrap | Sweet Tooth",
        metaDescription:
          "Order our mouth-watering Grilled Beef Shawarma Wrap from Sweet Tooth. Stuffed with spicy beef strips and fresh veggies. Fast delivery across Lagos.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T19:17:00Z",
    },
    {
      id: "food_172",
      slug: "chicken-suya-pizza-70",
      name: "Chicken Suya Pizza",
      shortDescription:
        "Spicy, smoky chicken suya strips topped with mozzarella cheese, red onions, and a dash of yaji spice.",
      description:
        "Our signature Chicken Suya Pizza is the ultimate flavor fusion. It features a fresh, hand-tossed artisan crust topped with tender chicken strips marinated in authentic Northern Nigerian suya spices, open-flame grilled, and layered with rich mozzarella cheese, sliced red onions, and fresh tomatoes. Finished with a dust of premium yaji pepper.",
      category: {
        id: "cat_pizza",
        name: "Pizza",
      },
      pricing: {
        currency: "NGN",
        basePrice: 10000,
        finalPrice: 10000,
      },
      images: ["/images/chicken-suya-pizza.jpg", "/images/pizza-70-2.jpg"],
      badges: ["Local Favorite", "Spicy Delight"],
      availability: {
        inStock: true,
        quantityAvailable: 79,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_suya_pizza_medium",
          name: "Medium (10 inch)",
          price: 10000,
        },
        {
          id: "var_suya_pizza_large",
          name: "Large (12 inch)",
          price: 14500,
        },
      ],
      extras: [
        {
          id: "ext_extra_cheese",
          name: "Extra Mozzarella Layer",
          price: 1500,
        },
        {
          id: "ext_suya_chicken",
          name: "Extra Chicken Suya Strips",
          price: 2500,
        },
        {
          id: "ext_yaji_spice",
          name: "Extra Side of Yaji Pepper Spice",
          price: 300,
        },
      ],
      customizations: {
        spiceLevel: [
          "Mild Yaji Spark",
          "Medium Suya Kick",
          "Fiery Inferno Heat",
        ],
        removeIngredients: ["Onions", "Tomatoes"],
      },
      ingredients: [
        "Artisan pizza crust",
        "House tomato base sauce",
        "Shredded mozzarella cheese",
        "Flame-grilled chicken suya",
        "Yaji pepper blend",
        "Red onion rings",
        "Fresh tomato slices",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 790,
        protein: 46,
        carbs: 88,
        fat: 28,
        sugar: 4,
        fiber: 3,
        sodium: 840,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten", "Peanuts"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.3,
        totalReviews: 112,
      },
      reviews: [
        {
          id: "rev_70_0",
          user: "Obinna I.",
          rating: 5,
          comment:
            "The yaji flavor on this pizza is elite! Arrived hot and cheese was perfectly melted.",
          date: "2026-05-14",
        },
        {
          id: "rev_70_1",
          user: "Funmi O.",
          rating: 4,
          comment:
            "Very nice local twist on standard pizza. Make sure you can handle a bit of heat!",
          date: "2026-06-22",
        },
      ],
      metrics: {
        soldCount: 1456,
        wishlistCount: 1526,
        views: 29683,
        cartAdds: 1215,
        trendingScore: 76,
      },
      recommendation: {
        score: 87,
        reason: "Top trending fusion dish in your area",
      },
      frequentlyBoughtTogether: ["Drinks", "Sides"],
      relatedimages: ["food_beef_suya_pizza_71", "food_165"],
      seo: {
        metaTitle: "Spicy Chicken Suya Pizza | Chicken Republic Grill",
        metaDescription:
          "Savor the best local fusion flavor with our Spicy Chicken Suya Pizza from Chicken Republic Grill. Baked hot with real yaji spice and delivered fast across Lagos.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T19:18:00Z",
    },
    {
      id: "food_174",
      slug: "ice-cream-77",
      name: "Premium Ice Cream Scoop",
      shortDescription:
        "Rich, creamy, and velvety smooth ice cream made with real dairy cream.",
      description:
        "Our Premium Ice Cream is the perfect sweet treat to cool down. Crafted with high-quality dairy cream, wholesome milk, and natural flavorings. Served perfectly chilled and creamy at Chicken Republic Grill, it makes an amazing standalone dessert or pairs beautifully with our warm pastries.",
      category: {
        id: "cat_dessert",
        name: "Dessert",
      },
      pricing: {
        currency: "NGN",
        basePrice: 2000,
        finalPrice: 2000,
      },
      images: ["/images/ice-cream-3.jpg", "/images/dessert-77-2.jpg"],
      badges: ["Popular Choice", "Sweet Treat"],
      availability: {
        inStock: true,
        quantityAvailable: 35,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_icecream_vanilla",
          name: "Classic Vanilla (1 Scoop)",
          price: 2000,
        },
        {
          id: "var_icecream_chocolate",
          name: "Rich Chocolate (1 Scoop)",
          price: 2000,
        },
        {
          id: "var_icecream_strawberry",
          name: "Sweet Strawberry (1 Scoop)",
          price: 2000,
        },
        {
          id: "var_icecream_double",
          name: "Upgrade to Double Scoop (Any Flavors)",
          price: 3500,
        },
      ],
      extras: [
        {
          id: "ext_waffle_cone",
          name: "Serve in Crunchy Waffle Cone (Contains Gluten)",
          price: 500,
        },
        {
          id: "ext_chocolate_drizzle",
          name: "Add Chocolate Fudge Drizzle",
          price: 300,
        },
        {
          id: "ext_sprinkles",
          name: "Add Rainbow Sprinkles",
          price: 200,
        },
      ],
      customizations: {
        servingStyle: ["Serve in a Cup", "Serve in a Cone"],
        removeIngredients: [],
      },
      ingredients: [
        "Fresh dairy cream",
        "Whole milk",
        "Sugar",
        "Natural flavor extracts",
      ],
      nutrition: {
        servingSize: "150g",
        calories: 280,
        protein: 4,
        carbs: 32,
        fat: 14,
        sugar: 24,
        fiber: 0,
        sodium: 85,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: true,
      },
      allergens: ["Milk"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.2,
        totalReviews: 405,
      },
      reviews: [
        {
          id: "rev_177_0",
          user: "Amadi K.",
          rating: 5,
          comment:
            "Super creamy and delicious! It arrived surprisingly cold without melting too much.",
          date: "2026-05-19",
        },
        {
          id: "rev_177_1",
          user: "Yinka F.",
          rating: 4,
          comment:
            "Classic vanilla flavor hits the spot after eating their spicy chicken options.",
          date: "2026-06-28",
        },
      ],
      metrics: {
        soldCount: 1665,
        wishlistCount: 635,
        views: 24394,
        cartAdds: 1283,
        trendingScore: 91,
      },
      recommendation: {
        score: 81,
        reason: "Top trending dessert item at this store",
      },
      frequentlyBoughtTogether: ["Wrap", "Pizza", "Sides"],
      relatedimages: ["food_163", "food_166"],
      seo: {
        metaTitle: "Creamy Premium Ice Cream Scoops | Chicken Republic Grill",
        metaDescription:
          "Cool off with our smooth, rich premium dairy ice cream from Chicken Republic Grill. Choose Vanilla, Chocolate, or Strawberry for quick delivery across Lagos.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T19:21:00Z",
    },
    {
      id: "food_175",
      slug: "red-velvet-cake-82",
      name: "Gourmet Red Velvet Cake Slice",
      shortDescription:
        "Rich, velvety crimson cake slice layered with luxurious cream cheese frosting.",
      description:
        "Our signature Gourmet Red Velvet Cake is a decadent treat. It features a moist, tender crumb with a subtle hint of cocoa, beautifully stacked and layered with a rich, tangy vanilla cream cheese frosting. Baked fresh daily at Wrap House using premium ingredients, it delivers the ultimate dessert experience.",
      category: {
        id: "cat_dessert",
        name: "Dessert",
      },
      pricing: {
        currency: "NGN",
        basePrice: 5000,
        finalPrice: 5000,
      },
      images: ["/images/red_velvet.jpg", "/images/dessert-82-2.jpg"],
      badges: ["Popular Choice", "Freshly Baked"],
      availability: {
        inStock: true,
        quantityAvailable: 100,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_cake_slice",
          name: "Single Premium Slice",
          price: 5000,
        },
        {
          id: "var_cake_full",
          name: "Whole Celebration Cake (6-inch)",
          price: 28000,
        },
      ],
      extras: [
        {
          id: "ext_cream_cheese",
          name: "Extra Cream Cheese Frosting Layer",
          price: 600,
        },
        {
          id: "ext_ice_cream_scoop",
          name: "Add Scoop of Vanilla Ice Cream",
          price: 1500,
        },
      ],
      customizations: {
        servingStyle: ["Serve Chilled", "Room Temperature"],
        removeIngredients: [],
      },
      ingredients: [
        "Premium cake flour",
        "Real buttermilk",
        "Unsalted butter",
        "Cocoa powder",
        "Cream cheese frosting",
        "Organic eggs",
      ],
      nutrition: {
        servingSize: "180g",
        calories: 490,
        protein: 6,
        carbs: 58,
        fat: 24,
        sugar: 38,
        fiber: 1,
        sodium: 290,
      },
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten", "Eggs"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.7,
        totalReviews: 141,
      },
      reviews: [
        {
          id: "rev_182_0",
          user: "Tobi A.",
          rating: 5,
          comment:
            "Absolutely elite red velvet. The cream cheese icing isn't too heavy and the cake is very moist.",
          date: "2026-05-12",
        },
        {
          id: "rev_182_1",
          user: "Nneka U.",
          rating: 4,
          comment:
            "Perfect sweet treat after having their spicy rice bowls. Highly recommend adding the vanilla ice cream.",
          date: "2026-06-20",
        },
      ],
      metrics: {
        soldCount: 4147,
        wishlistCount: 103,
        views: 24651,
        cartAdds: 9577,
        trendingScore: 86,
      },
      recommendation: {
        score: 93,
        reason: "Top rated sweet treats companion for savory mains",
      },
      frequentlyBoughtTogether: ["Drinks", "Sides"],
      relatedimages: [],
      seo: {
        metaTitle: "Premium Red Velvet Cake Slice | Wrap House",
        metaDescription:
          "Indulge in our moist, rich Gourmet Red Velvet Cake layered with cream cheese frosting from Wrap House. Order online for swift delivery across Lagos.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T19:22:00Z",
    },
    {
      id: "food_176",
      slug: "beef-wrap-83",
      name: "Classic Beef Burrito",
      shortDescription:
        "Spiced shredded beef, Mexican rice, black beans, and cheese wrapped in a toasted tortilla.",
      description:
        "Our signature Classic Beef Burritos are prepared with tender, slow-cooked shredded beef flank seasoned with authentic Mexican spices. Rolled tightly in a large flour tortilla with seasoned rice, savory black beans, melted cheddar cheese, and fresh pico de gallo. Grilled fresh to order at Sweet Tooth for the ultimate hearty meal experience.",
      category: {
        id: "cat_wrap",
        name: "Wrap",
      },
      pricing: {
        currency: "NGN",
        basePrice: 9500,
        finalPrice: 9500,
      },
      images: ["/images/beef-burritos.jpg", "/images/wrap-83-2.jpg"],
      badges: ["Recommended", "New"],
      availability: {
        inStock: true,
        quantityAvailable: 71,
        availableFrom: "08:00",
        availableTo: "23:00",
      },
      variants: [
        {
          id: "var_burrito_regular",
          name: "Regular Burrito",
          price: 9500,
        },
        {
          id: "var_burrito_large",
          name: "Jumbo Double Beef Burrito",
          price: 13000,
        },
      ],
      extras: [
        {
          id: "ext_guacamole",
          name: "Add Fresh Guacamole Dip",
          price: 1200,
        },
        {
          id: "ext_sour_cream",
          name: "Add Zesty Sour Cream",
          price: 600,
        },
        {
          id: "ext_cheese_layer",
          name: "Extra Shredded Cheddar Inside",
          price: 1000,
        },
      ],
      customizations: {
        spiceLevel: ["Mild Salsa", "Medium Tangy", "Fiery Habanero Hot"],
        removeIngredients: ["Black Beans", "Pico de Gallo"],
      },
      ingredients: [
        "Flour tortilla wrap",
        "Spiced shredded beef",
        "Mexican seasoned rice",
        "Black beans",
        "Cheddar cheese",
        "Pico de gallo",
      ],
      nutrition: {
        servingSize: "400g",
        calories: 669,
        protein: 36,
        carbs: 72,
        fat: 24,
        sugar: 2,
        fiber: 6,
        sodium: 740,
      },
      dietary: {
        halal: true,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
      allergens: ["Milk", "Gluten"],
      prepTime: "20-40 mins",
      reviewStats: {
        averageRating: 4.4,
        totalReviews: 368,
      },
      reviews: [
        {
          id: "rev_183_0",
          user: "Kunle T.",
          rating: 5,
          comment:
            "Properly stuffed burrito! The shredded beef was juicy and the spice level was amazing.",
          date: "2026-05-14",
        },
      ],
      metrics: {
        soldCount: 4338,
        wishlistCount: 755,
        views: 9410,
        cartAdds: 9532,
        trendingScore: 90,
      },
      recommendation: {
        score: 97,
        reason: "Frequently ordered item",
      },
      frequentlyBoughtTogether: ["Sides", "Drinks"],
      relatedimages: [],
      seo: {
        metaTitle: "Classic Mexican Beef Burrito | Sweet Tooth",
        metaDescription:
          "Order our filling, tightly rolled Classic Mexican Beef Burrito online from Sweet Tooth. Stuffed with seasoned beef, rice, and cheese. Delivered fast across Lagos.",
      },
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-10T19:24:00Z",
    },
    {
      id: "food_1260",
      slug: "premium-bottled-water-52",
      name: "Nestle Bottled Water",
      shortDescription: "Chilled and sealed pure bottled water.",
      description:
        "Stay hydrated with our premium selection of pure, refreshing bottled water. Sourced from trusted local brands including Eva, Mr. V, and Nestlé Pure Life, each bottle is thoroughly filtered, securely factory-sealed, and kept chilled in our refrigerators. It serves as the essential refreshing companion to balance out any spicy or savory meal from Snack Corner.",
      category: {
        id: "cat_drinks",
        name: "Drinks",
      },
      pricing: {
        currency: "NGN",
        basePrice: 400,
        finalPrice: 400,
      },
      images: ["/images/nestle-water.jpg", "/images/bottled-water-52-2.jpg"],
      badges: ["Essential"],
      availability: {
        inStock: true,
        quantityAvailable: 52,
      },
      variants: [
        {
          id: "var_nestle",
          name: "Eva Water (60cl)",
          priceModifier: 500,
        },
        {
          id: "var_nestle-2",
          name: "Nestlé Pure Life (1.5L)",
          priceModifier: 1000,
        },
      ],
      extras: [],
      customizations: {
        temperature: ["Chilled", "Room Temperature"],
      },
      ingredients: [],
      dietary: {
        halal: true,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      allergens: [],
      prepTime: "5 mins",
      reviewStats: {
        averageRating: 4.5,
        totalReviews: 135,
      },
      reviews: [
        {
          id: "rev_52_0",
          user: "Musa B.",
          rating: 5,
          comment:
            "Arrived ice-cold, which was exactly what I needed with my spicy suya.",
          date: "2026-01-22",
        },
        {
          id: "rev_52_1",
          user: "Femi Q.",
          rating: 5,
          comment:
            "Fast delivery and the bottle was clean, chilled, and perfectly factory-sealed.",
          date: "2026-03-23",
        },
        {
          id: "rev_52_2",
          user: "Uche H.",
          rating: 4,
          comment: "Good old reliable water. Neatly packaged.",
          date: "2026-02-08",
        },
      ],
      metrics: {
        soldCount: 1334,
        wishlistCount: 475,
        views: 14674,
        cartAdds: 1855,
      },
      frequentlyBoughtTogether: [" Sides", "Snacks"],
      relatedimages: [],
      createdAt: "2026-01-10T12:00:00Z",
      updatedAt: "2026-07-09T21:20:00Z",
    },
  ],
};

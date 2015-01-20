angular
    .module('groceryList')
    .factory('recipes', [recipes]);

function recipes() {
    var obj = {
        items: [
            {
                name: "Grilled Wild Salmon with Smoked Paprika",
                description: "This wild salmon recipe has become one of my weeknight faves. Wild salmon is an ingredient that doesn’t need a lot of “help.” It has rich texture and full flavor, so your best bet is to keep it simple. This super-easy rub calls on smoked paprika to complement the richness of the fish. We love it on tortillas, topped with our Fiery-Sweet Peach Salsa, Quick-Pickled Red Onions and sliced avocado.",
                ingredients: [
                    {
                        name: "sea salt",
                        unit: "teaspoon",
                        quantity: 0.5
                    },
                    {
                        name: "smoked Spanish paprika",
                        unit: "teaspoon",
                        quantity: 0.5
                    },
                    {
                        name: "ground cumin",
                        unit: "teaspoon",
                        quantity: 0.5
                    },
                    {
                        name: "cayenne pepper",
                        quantity: "Dash"
                    },
                    {
                        name: "Freshly ground black pepper"
                    },
                    {
                        name: "wild Alaskan salmon fillet",
                        unit: "lbs",
                        quantity: 1,
                        other_info: "skin on"
                    },
                    {
                        name: "Olive oil"
                    }
                ],
                instructions: "Preheat grill or a grill pan to medium-high heat. Combine the first 5 ingredients in a small bowl. Rub over skinless side of salmon. Brush both sides of salmon with oil. Grill 5 minutes on each side, or until desired degree of doneness.",
                prep_time: "5 minutes",
                cook_time: "10 minutes",
                yield: 3,
                link: "http://nourishnetwork.com/2011/08/01/grilled-wild-salmon-with-smoked-paprika/",
                notes: ""
            },
            {
                name: "Roasted Tomato Caprese Grilled Cheese with Balsamic Glaze",
                ingredients: [
                    {
                        name: "tomatoes (vine or roma)",
                        quantity: 6,
                        other_info: "sliced about 1/2 inch thick"
                    },
                    {
                        name: "olive oil",
                        unit: "tablespoons",
                        quantity: 2
                    },
                    {
                        name: "salt",
                        unit: "teaspoon",
                        quantity: 2
                    },
                    {
                        name: "pepper",
                        unit: "teaspoon",
                        quantity: 2
                    },
                    {
                        name: "balsamic vinegar",
                        unit: "cup",
                        quantity: 2
                    },
                    {
                        name: "fresh mozzarella",
                        unit: "ounces",
                        quantity: 4
                    },
                    {
                        name: "basil leaves",
                        quantity: 15
                    },
                    {
                        name: "seedy bread",
                        unit: "slices",
                        quantity: 4
                    }
                ],
                yield: 2,
                instructions: "<p>Preheat oven to 325 degrees. Place tomatoes on a nonstick baking sheet and drizzle with olive oil, salt and pepper. Roast for 45-50 minutes. While tomatoes are roasting, add vinegar to a small saucepan and bring to a boil. Reduce to a very low simmer and cook for 10-15 minutes, until liquid reduces by about half and is slightly syrupy. Remove from heat, pour vinegar in a bowl or glass to pour, and let sit.</p><p>Once tomatoes are finished, heat a large griddle or skillet over medium heat. Brush the outsides of each slice of bread with olive oil, then place mozzarella on one slide, followed by tomatoes, basil (feel free to shred it if you’d like), more tomatoes and more mozzarella. Cook until cheese is melty and each side is golden, about 5 minutes per side. Serve immediately drizzle with balsamic.</p>",
                link: "http://www.howsweeteats.com/2012/05/roasted-tomato-caprese-grilled-cheese/",
                notes: ""
            }
        ]
    };

    return obj;
}
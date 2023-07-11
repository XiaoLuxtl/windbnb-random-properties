const types = ["apartment", "private room", "entire house"];
const descriptions = {
  apartment: [
    "Stylish apartment in the center of the city",
    "Cozy apartment with a view",
    "Modern apartment with all amenities",
    "Spacious apartment near the park",
    "Charming loft with exposed brick walls",
    "Contemporary apartment with rooftop access",
    "Bright and airy apartment in a bustling neighborhood",
    "Elegant apartment with a fully equipped kitchen",
    "Sleek and minimalistic apartment in a trendy area",
    "Luxury penthouse with panoramic city views",
  ],
  "private room": [
    "Comfortable private room in a quiet neighborhood",
    "Cozy room with a comfortable bed",
    "Private room with a work desk",
    "Peaceful room with a garden view",
    "Quaint room in a historic building",
    "Spacious private room with ensuite bathroom",
    "Bright and welcoming room with a cozy atmosphere",
    "Charming room in a beautifully decorated house",
    "Tranquil room with access to a backyard garden",
    "Rustic-style private room with wooden accents",
  ],
  "entire house": [
    "Beautiful house with a garden and swimming pool",
    "Charming house in a scenic location",
    "Spacious house perfect for families",
    "Luxurious house with all amenities",
    "Cozy cottage nestled in the countryside",
    "Modern house with a spacious open-concept layout",
    "Traditional house with a fireplace and vintage charm",
    "Stunning beachfront house with breathtaking views",
    "Elegant house with a private terrace and BBQ area",
    "Peaceful retreat surrounded by nature's beauty",
  ],
};

export function genDescription() {
  const randomType = types[Math.floor(Math.random() * types.length)];
  const randomDescription =
    descriptions[randomType][
      Math.floor(Math.random() * descriptions[randomType].length)
    ];
  return {
    type: randomType.charAt(0).toUpperCase() + randomType.slice(1),
    description: randomDescription,
  };
}

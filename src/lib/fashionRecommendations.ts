import { UserPreferences, OutfitRecommendation } from "@/types/fashion";

const getColorsBySkintone = (skinTone: string | null): string[] => {
  const colorMap: Record<string, string[]> = {
    fair: ["Navy Blue", "Soft Pink", "Lavender", "Forest Green", "Burgundy"],
    light: ["Coral", "Teal", "Blush Pink", "Olive Green", "Mauve"],
    medium: ["Royal Blue", "Emerald Green", "Rust Orange", "Plum", "Cream"],
    olive: ["Mustard Yellow", "Terracotta", "Deep Red", "Gold", "Turquoise"],
    tan: ["Coral", "Bright Yellow", "Cobalt Blue", "Fuchsia", "White"],
    dark: ["Jewel Tones", "Bright Orange", "Electric Blue", "Magenta", "Gold"],
  };
  return colorMap[skinTone || "medium"] || colorMap.medium;
};

const getRecommendationsByOccasion = (
  preferences: UserPreferences
): OutfitRecommendation => {
  const { occasion, gender, bodyType, skinTone, budget } = preferences;
  const colors = getColorsBySkintone(skinTone);
  const isFemale = gender === "female";
  const isMale = gender === "male";

  const recommendations: Record<string, OutfitRecommendation> = {
    interview: {
      dress: {
        name: isFemale ? "Tailored Blazer with Pencil Skirt" : "Classic Suit",
        description: isFemale
          ? "A well-fitted blazer paired with a knee-length pencil skirt creates a powerful yet approachable look. Opt for neutral tones like navy, charcoal, or beige."
          : "A well-tailored two-piece suit in navy or charcoal grey. Consider a slim-fit for athletic builds or regular fit for comfort.",
        colors: ["Navy Blue", "Charcoal Grey", "Black", "Beige"],
        fabric: budget === "premium" ? "Wool Blend or Crepe" : "Polyester Blend",
      },
      footwear: {
        name: isFemale ? "Block Heel Pumps" : "Oxford Shoes",
        description: isFemale
          ? "3-inch block heels in black or nude offer comfort and professionalism"
          : "Classic leather oxfords in black or brown. Ensure they're polished.",
      },
      accessories: [
        {
          name: "Minimalist Watch",
          description: "A sleek analog watch adds sophistication",
        },
        {
          name: isFemale ? "Structured Handbag" : "Leather Belt",
          description: isFemale
            ? "A medium-sized structured bag in neutral color"
            : "A quality leather belt that matches your shoes",
        },
        {
          name: "Pearl or Stud Earrings",
          description: "Keep jewelry minimal and elegant",
        },
      ],
      colorTips: [
        `Based on your ${skinTone} skin tone, these colors will complement you: ${colors.slice(0, 3).join(", ")}`,
        "Stick to neutral tones for the main outfit, add subtle color in accessories",
        "Avoid overly bright colors that might distract",
      ],
      fabricTips: [
        "Choose wrinkle-resistant fabrics for a polished look",
        "Natural fibers like cotton or wool breathe better",
        "Avoid shiny or overly casual fabrics like denim",
      ],
      avoidList: [
        "Loud patterns or busy prints",
        "Casual footwear like sneakers or sandals",
        "Heavy perfume or cologne",
        "Excessive jewelry or accessories",
        "Wrinkled or ill-fitting clothes",
      ],
      stylingTips: [
        "Ensure your outfit is pressed and wrinkle-free",
        "Try everything on the night before to check for issues",
        "Keep a lint roller handy for last-minute touch-ups",
        "Arrive 10 minutes early to compose yourself",
      ],
    },
    exam: {
      dress: {
        name: isFemale ? "Smart Casual Blouse with Chinos" : "Polo Shirt with Khakis",
        description: isFemale
          ? "A comfortable yet put-together look with a cotton blouse and well-fitted chinos. Perfect for long exam days."
          : "A breathable polo shirt paired with comfortable khaki pants. Smart enough for campus, comfortable for hours of testing.",
        colors: ["Light Blue", "White", "Soft Grey", "Beige"],
        fabric: "Cotton or Cotton Blend",
      },
      footwear: {
        name: "Comfortable Flats or Loafers",
        description: "Opt for shoes you've broken in - comfort is key during exams",
      },
      accessories: [
        {
          name: "Minimal Watch",
          description: "A simple watch to keep track of time (if allowed)",
        },
        {
          name: "Light Cardigan or Sweater",
          description: "For temperature-controlled rooms that might be cold",
        },
      ],
      colorTips: [
        "Soft, calming colors can help reduce stress",
        `Try ${colors[0]} or ${colors[2]} - they complement your skin tone`,
        "Avoid overly bright colors that might distract you",
      ],
      fabricTips: [
        "Choose breathable fabrics like cotton",
        "Avoid synthetic materials that might make you uncomfortable",
        "Layers are smart for unpredictable room temperatures",
      ],
      avoidList: [
        "Tight or restrictive clothing",
        "New shoes that might cause discomfort",
        "Heavy jewelry that might be distracting",
        "Strong fragrances",
        "Clothes with lots of text or logos",
      ],
      stylingTips: [
        "Dress in layers to adapt to room temperature",
        "Wear something you feel confident in",
        "Choose clothes you've worn before for familiarity",
        "Keep it simple so you can focus on the exam",
      ],
    },
    wedding: {
      dress: {
        name: isFemale ? "Elegant Saree or Anarkali Suit" : "Traditional Sherwani or Suit",
        description: isFemale
          ? "A beautiful silk saree or flowing anarkali in rich colors. Choose based on the wedding style - traditional or modern."
          : "A regal sherwani for traditional weddings or a well-tailored suit for modern celebrations. Consider the dress code.",
        colors: ["Royal Blue", "Emerald Green", "Maroon", "Gold", "Rose Pink"],
        fabric: budget === "premium" ? "Pure Silk or Velvet" : "Art Silk or Brocade",
      },
      footwear: {
        name: isFemale ? "Embellished Heels or Juttis" : "Mojaris or Dress Shoes",
        description: isFemale
          ? "Traditional juttis for comfort or embellished heels for elegance"
          : "Traditional mojaris complement ethnic wear; leather dress shoes for suits",
      },
      accessories: [
        {
          name: isFemale ? "Statement Jewelry Set" : "Pocket Square & Brooch",
          description: isFemale
            ? "Kundan or polki jewelry adds traditional elegance"
            : "A coordinating pocket square and subtle brooch elevate the look",
        },
        {
          name: isFemale ? "Embellished Clutch" : "Classic Watch",
          description: isFemale
            ? "A compact clutch in gold or matching color"
            : "A sophisticated timepiece as the focal accessory",
        },
        {
          name: "Elegant Wrap or Stole",
          description: "For evening functions or air-conditioned venues",
        },
      ],
      colorTips: [
        `Your ${skinTone} skin tone looks stunning in: ${colors.slice(0, 3).join(", ")}`,
        "Avoid wearing white or off-white (reserved for the bride)",
        "Jewel tones are always wedding-appropriate",
        "Consider the wedding theme and venue when choosing colors",
      ],
      fabricTips: [
        "Silk and velvet add richness and elegance",
        "Chiffon drapes beautifully for sarees",
        "Brocade adds traditional texture",
        "Avoid stiff fabrics that restrict movement during celebrations",
      ],
      avoidList: [
        "Wearing white, cream, or anything bridal",
        "Overly casual outfits like jeans",
        "All-black outfits (unless specified as dress code)",
        "Outfits that outshine the bride/groom",
        "Uncomfortable shoes - you'll be on your feet!",
      ],
      stylingTips: [
        "Match your outfit to the wedding formality",
        "Break in your shoes before the big day",
        "Carry a small emergency kit (safety pins, tissue, etc.)",
        "Consider comfort for dancing and celebration",
      ],
    },
    temple: {
      dress: {
        name: isFemale ? "Traditional Saree or Salwar Kameez" : "Dhoti-Kurta or Traditional Kurta",
        description: isFemale
          ? "A modest, elegant saree or comfortable salwar kameez in subtle colors. Cover shoulders and avoid short lengths."
          : "A clean white or cream kurta with dhoti for traditional look, or a simple kurta-pyjama set.",
        colors: ["White", "Cream", "Soft Yellow", "Light Pink", "Pale Orange"],
        fabric: "Pure Cotton or Linen",
      },
      footwear: {
        name: "Comfortable Sandals or Slip-ons",
        description: "Easy to remove footwear as you'll likely go barefoot inside",
      },
      accessories: [
        {
          name: "Minimal Jewelry",
          description: "Simple traditional jewelry - avoid flashy pieces",
        },
        {
          name: "Comfortable Dupatta",
          description: "For covering head if required",
        },
      ],
      colorTips: [
        "Soft, sattvic colors like white, cream, and pastels are ideal",
        "Avoid dark colors like black or grey",
        "Light colors reflect purity and devotion",
        `Soft ${colors[1]} would look beautiful on you`,
      ],
      fabricTips: [
        "Natural fabrics like cotton are most appropriate",
        "Avoid synthetic materials in warm temples",
        "Choose breathable fabrics for comfort",
        "Handloom fabrics add traditional authenticity",
      ],
      avoidList: [
        "Sleeveless or revealing outfits",
        "Shorts, mini skirts, or short dresses",
        "Leather items in some temples",
        "Dark or black clothing",
        "Tight or figure-hugging clothes",
      ],
      stylingTips: [
        "Dress modestly - cover shoulders and knees",
        "Carry a small bag for offerings and essentials",
        "Wear clothes you can comfortably sit in",
        "Simple and elegant is the key",
      ],
    },
    casual: {
      dress: {
        name: isFemale ? "Flowy Midi Dress or Jeans with Top" : "Casual Shirt with Chinos",
        description: isFemale
          ? "A comfortable midi dress for effortless style, or well-fitted jeans with a cute top for a classic casual look."
          : "A relaxed-fit button-down or polo with comfortable chinos or well-fitted jeans.",
        colors: colors.slice(0, 4),
        fabric: "Cotton, Denim, or Jersey",
      },
      footwear: {
        name: isFemale ? "White Sneakers or Strappy Sandals" : "Clean Sneakers or Loafers",
        description: "Comfortable yet stylish footwear for all-day wear",
      },
      accessories: [
        {
          name: isFemale ? "Crossbody Bag" : "Casual Watch",
          description: isFemale
            ? "A practical yet stylish crossbody for hands-free convenience"
            : "A sporty or minimalist watch adds personality",
        },
        {
          name: "Sunglasses",
          description: "A classic pair that suits your face shape",
        },
        {
          name: isFemale ? "Dainty Layered Necklace" : "Simple Bracelet",
          description: "Subtle jewelry adds a personal touch",
        },
      ],
      colorTips: [
        `These colors flatter your ${skinTone} skin: ${colors.slice(0, 3).join(", ")}`,
        "Mix neutrals with one pop of color",
        "Denim pairs well with almost everything",
        "Don't be afraid to experiment with patterns",
      ],
      fabricTips: [
        "Cotton and jersey are perfect for casual comfort",
        "Linen is great for warm weather",
        "Quality denim lasts longer and looks better",
        "Avoid overly formal fabrics",
      ],
      avoidList: [
        "Overly dressed up looks for casual settings",
        "Wrinkled or stained clothing",
        "Clothing that doesn't fit well",
        "Too many logos or busy patterns",
        "Uncomfortable shoes",
      ],
      stylingTips: [
        "Casual doesn't mean sloppy - keep it neat",
        "One statement piece can elevate a simple outfit",
        "Comfort is key but stay presentable",
        "Accessorize to add personality",
      ],
    },
    party: {
      dress: {
        name: isFemale ? "Cocktail Dress or Stylish Co-ord Set" : "Smart Casual Blazer Look",
        description: isFemale
          ? "A stunning cocktail dress that shows personality, or a trendy co-ord set for a modern vibe."
          : "A fitted blazer over a crisp shirt with dark jeans or tailored pants. Lose the tie for a relaxed feel.",
        colors: ["Black", "Metallics", "Bold Red", "Electric Blue", "Emerald"],
        fabric: budget === "premium" ? "Silk or Sequined" : "Polyester Blend or Satin",
      },
      footwear: {
        name: isFemale ? "Statement Heels" : "Chelsea Boots or Dress Shoes",
        description: isFemale
          ? "Strappy heels or ankle boots that make a statement"
          : "Sleek boots or polished dress shoes in black or brown",
      },
      accessories: [
        {
          name: isFemale ? "Statement Earrings" : "Stylish Watch",
          description: isFemale
            ? "Bold earrings that catch the light and attention"
            : "A standout timepiece that starts conversations",
        },
        {
          name: "Evening Clutch or Wallet",
          description: "Keep essentials minimal and classy",
        },
        {
          name: isFemale ? "Sparkly Bracelet" : "Pocket Square",
          description: isFemale
            ? "Add some sparkle to your wrist"
            : "A pop of color or pattern in your pocket",
        },
      ],
      colorTips: [
        "Parties are the time to be bold with color",
        `On your ${skinTone} skin, ${colors[0]} would be stunning`,
        "Metallics always work for evening events",
        "Black is timeless and always party-appropriate",
      ],
      fabricTips: [
        "Sequins and metallic fabrics catch party lights",
        "Silk and satin have elegant drape",
        "Velvet adds luxury for winter parties",
        "Avoid fabrics that wrinkle easily",
      ],
      avoidList: [
        "Overly casual looks like basic jeans and tee",
        "Uncomfortable heels you can't dance in",
        "Outfits you need to constantly adjust",
        "Too much skin for conservative venues",
        "Forgetting to consider the venue dress code",
      ],
      stylingTips: [
        "Check if there's a dress code or theme",
        "Wear something you feel confident dancing in",
        "Break in your shoes before party night",
        "Keep makeup touchups handy",
      ],
    },
    date: {
      dress: {
        name: isFemale ? "Romantic Wrap Dress or Elegant Top with Skirt" : "Smart Button-Down with Fitted Pants",
        description: isFemale
          ? "A flattering wrap dress or a beautiful top paired with a flowing skirt. Romantic and approachable."
          : "A well-fitted button-down (sleeves rolled for casual vibes) with tailored pants. Polished but not stuffy.",
        colors: ["Soft Pink", "Wine Red", "Navy", "Sage Green", "Cream"],
        fabric: "Flowy fabrics like Chiffon, Crepe, or Quality Cotton",
      },
      footwear: {
        name: isFemale ? "Elegant Heels or Stylish Flats" : "Clean Leather Shoes",
        description: isFemale
          ? "Choose based on venue - heels for dinner, cute flats for walking dates"
          : "Polished loafers or clean sneakers depending on the date style",
      },
      accessories: [
        {
          name: isFemale ? "Delicate Pendant Necklace" : "Quality Watch",
          description: isFemale
            ? "A subtle piece that draws attention to your smile"
            : "An understated timepiece shows attention to detail",
        },
        {
          name: "Light Fragrance",
          description: "Something subtle and inviting - not overpowering",
        },
        {
          name: isFemale ? "Small Handbag" : "Leather Belt",
          description: isFemale
            ? "Elegant and practical for the evening"
            : "Quality leather belt that complements your shoes",
        },
      ],
      colorTips: [
        `${colors[0]} and ${colors[3]} would be romantic on your ${skinTone} skin`,
        "Soft, warm colors create approachable vibes",
        "Red is classic for dates but choose the right shade",
        "Avoid neon or overly aggressive colors",
      ],
      fabricTips: [
        "Choose fabrics with beautiful movement",
        "Soft textures invite closeness",
        "Avoid fabrics that wrinkle during dinner",
        "Quality fabrics show you made an effort",
      ],
      avoidList: [
        "Brand new untested outfits",
        "Clothes you need to constantly adjust",
        "Strong perfume or cologne",
        "Overly revealing unless that's your style",
        "Messy or unkempt appearance",
      ],
      stylingTips: [
        "Wear something you feel genuinely confident in",
        "Dress appropriately for the date activity",
        "Leave something to the imagination",
        "Make sure you're comfortable - nervousness is enough!",
        "A genuine smile is your best accessory",
      ],
    },
  };

  return recommendations[occasion || "casual"] || recommendations.casual;
};

export const generateRecommendation = (
  preferences: UserPreferences
): OutfitRecommendation => {
  const baseRecommendation = getRecommendationsByOccasion(preferences);

  // Adjust based on body type
  if (preferences.bodyType === "curvy" || preferences.bodyType === "plus-size") {
    baseRecommendation.stylingTips.push(
      "Choose A-line silhouettes that skim the body",
      "V-necks and wrap styles are universally flattering",
      "Dark colors create a slimming effect if desired"
    );
  } else if (preferences.bodyType === "slim") {
    baseRecommendation.stylingTips.push(
      "Layering adds dimension to your silhouette",
      "Horizontal stripes can add visual width",
      "Textured fabrics add interest"
    );
  } else if (preferences.bodyType === "athletic") {
    baseRecommendation.stylingTips.push(
      "Structured pieces complement your physique",
      "Fitted clothes showcase your shape well",
      "Balance proportions with appropriate cuts"
    );
  }

  // Adjust based on budget
  if (preferences.budget === "budget") {
    baseRecommendation.stylingTips.push(
      "Check thrift stores for unique finds",
      "Invest in basics that you can mix and match",
      "Look for sales at quality stores"
    );
  } else if (preferences.budget === "premium") {
    baseRecommendation.stylingTips.push(
      "Invest in timeless pieces over trendy items",
      "Quality fabrics last longer and look better",
      "Consider a tailor for perfect fit"
    );
  }

  return baseRecommendation;
};

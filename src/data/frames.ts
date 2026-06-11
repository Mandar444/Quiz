import type { Frame, QuizQuestion } from '../types';

export const FRAMES: Frame[] = [
  {
    "id": "coastline",
    "name": "Coastline",
    "type": "Both",
    "shape": "Wayfarer",
    "material": "Acetate",
    "bestFor": [
      "Round",
      "Oval"
    ],
    "colors": [
      {
        "name": "Black Core",
        "value": "#1e293b",
        "imageOpt": "1coastline_blackcore_o.png",
        "imageSun": "1Coastline_BlackCore_S.png",
        "lensColor": "Purple"
      },
      {
        "name": "Black Shell",
        "value": "#222222",
        "imageOpt": "1coastline_blackshell_o.png",
        "imageSun": "1Coastline_BlackShell_Sun.png",
        "lensColor": "Black"
      },
      {
        "name": "Champagne",
        "value": "#E8DCC4",
        "imageOpt": "1coastline_champagne_o.png",
        "imageSun": "1Coastline_Champagne_S.png",
        "lensColor": "Orange"
      },
      {
        "name": "Havana",
        "value": "#A0522D",
        "imageOpt": "1coastline_havana_o.png",
        "imageSun": "1Coastline_Havana_S.png",
        "isTortoise": true,
        "lensColor": "SkyBlue"
      },
      {
        "name": "Matte Black",
        "value": "#2D2D2D",
        "imageOpt": "1coastline_matteblack_o.png",
        "imageSun": "1Coastline_MatteBlack_S.png",
        "lensColor": "Yellow"
      }
    ],
    "character": "Clean wayfarer energy. Versatile enough for anything.",
    "shopUrl": "https://unscenenow.com/products/coastline?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 7600,
    "priceRx": 7200
  },
  {
    "id": "vondel",
    "name": "Vondel",
    "type": "Both",
    "shape": "Round",
    "material": "Acetate",
    "bestFor": [
      "Square",
      "Heart"
    ],
    "colors": [
      {
        "name": "Black",
        "value": "#111111",
        "imageOpt": "1vondel_black_o.png",
        "imageSun": "1vondel_black_s.png",
        "lensColor": "Black"
      },
      {
        "name": "Black Shell",
        "value": "#222222",
        "imageOpt": "1vondel_blackshell_o.png",
        "imageSun": "1vondel_blackshell_s.png",
        "lensColor": "Rose"
      },
      {
        "name": "Champagne",
        "value": "#E8DCC4",
        "imageOpt": "1vondel_champagne_o.png",
        "imageSun": "1vondel_champagne_s.png",
        "lensColor": "Brown"
      },
      {
        "name": "Havana",
        "value": "#A0522D",
        "imageOpt": "1vondel_havana_o.png",
        "imageSun": "1vondel_havana_s.png",
        "isTortoise": true,
        "lensColor": "Green"
      },
      {
        "name": "Teal",
        "value": "#005f73",
        "imageOpt": "1vondel_teal_o.png",
        "imageSun": "1vondel_teal_s.png",
        "lensColor": "SkyBlue"
      }
    ],
    "character": "Soft panto-shaped frame with relaxed proportions, inspired by Amsterdam's Vondelpark.",
    "shopUrl": "https://unscenenow.com/products/vondel?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 7300,
    "priceRx": 6900
  },
  {
    "id": "strand",
    "name": "Strand",
    "type": "Both",
    "shape": "Oval",
    "material": "Acetate",
    "bestFor": [
      "Square",
      "Heart"
    ],
    "colors": [
      {
        "name": "Black",
        "value": "#111111",
        "imageOpt": "1strand_black_o.png",
        "imageSun": "1strand_black_s.png",
        "lensColor": "Black"
      },
      {
        "name": "Blackx",
        "value": "#555555",
        "imageOpt": "1strand_blackG_o.png",
        "imageSun": "1strand_blackG_s.png",
        "lensColor": "Green"
      },
      {
        "name": "Havana",
        "value": "#A0522D",
        "imageOpt": "1strand_havana_o.png",
        "imageSun": "1strand_havana_s.png",
        "isTortoise": true,
        "lensColor": "Peach"
      },
      {
        "name": "Olive",
        "value": "#556B2F",
        "imageOpt": "1strand_olive_o.png",
        "imageSun": "1strand_olive_s.png",
        "lensColor": "Brown"
      },
      {
        "name": "Wine",
        "value": "#555555",
        "imageOpt": "1strand_wine_o.png",
        "imageSun": "1strand_wine_s.png",
        "lensColor": "Black"
      }
    ],
    "character": "Balancing softness and structure, inspired by New York's Strand Bookstore.",
    "shopUrl": "https://unscenenow.com/products/strand?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 7600,
    "priceRx": 7200
  },
  {
    "id": "vapour",
    "name": "Vapour",
    "type": "Both",
    "shape": "Rectangle",
    "material": "Acetate",
    "bestFor": [
      "Round",
      "Oval"
    ],
    "colors": [
      {
        "name": "Black Shell",
        "value": "#222222",
        "imageOpt": "1Vapour_blackshell_o.png",
        "imageSun": "1Vapour_blackshell_s.png",
        "lensColor": "Blue"
      },
      {
        "name": "Blackshellx",
        "value": "#555555",
        "imageOpt": "1Vapour_blackshellG_o.png",
        "imageSun": "1Vapour_blackshellg_s.png",
        "lensColor": "Black"
      },
      {
        "name": "Emerald",
        "value": "#0f766e",
        "imageOpt": "1Vapour_emerald_o.png",
        "imageSun": "1Vapour_emerald_s.png",
        "lensColor": "Olive"
      },
      {
        "name": "Glass",
        "value": "#7b958c",
        "imageOpt": "1Vapour_glass_o.png",
        "imageSun": "1Vapour_glass_s.png",
        "lensColor": "GreenFade"
      },
      {
        "name": "Rust",
        "value": "#a16207",
        "imageOpt": "1Vapour_RUST_o.png",
        "imageSun": "1Vapour_rust_s.png",
        "lensColor": "BrownFade"
      }
    ],
    "character": "A versatile frame designed to be full across the top and subtly flattened at the sides.",
    "shopUrl": "https://unscenenow.com/products/vapour?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 7600,
    "priceRx": 7200
  },
  {
    "id": "split",
    "name": "Split",
    "type": "Both",
    "shape": "Aviator",
    "material": "Titanium",
    "bestFor": [
      "Square",
      "Oval"
    ],
    "colors": [
      {
        "name": "Gold",
        "value": "#D4AF37",
        "imageOpt": "1split_gold_o.png",
        "imageSun": "1split_gold_s.png",
        "lensColor": "Rose"
      },
      {
        "name": "Matte Black",
        "value": "#2D2D2D",
        "imageOpt": "1split_matteblack_o.png",
        "imageSun": "1split_matteblack_s.png",
        "lensColor": "Yellow"
      },
      {
        "name": "Matte Silver",
        "value": "#B2BEB5",
        "imageOpt": "1split_mattesilver_o.png",
        "imageSun": "1split_mattesilver_s.png",
        "lensColor": "Blue"
      }
    ],
    "character": "A ultra-lightweight Japanese titanium aviator frame featuring a striking split-bridge design.",
    "shopUrl": "https://unscenenow.com/products/split?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 8600,
    "priceRx": 8200
  },
  {
    "id": "fulton",
    "name": "Fulton",
    "type": "Both",
    "shape": "Rectangle",
    "material": "Acetate",
    "bestFor": [
      "Round",
      "Oval"
    ],
    "colors": [
      {
        "name": "Black",
        "value": "#111111",
        "imageOpt": "1fulton_black_o.png",
        "imageSun": "1fulton_black_s.png",
        "lensColor": "Orange"
      },
      {
        "name": "Black Shell",
        "value": "#222222",
        "imageOpt": "1fulton_blackshell_o.png",
        "imageSun": "1fulton_blackshell_s.png",
        "lensColor": "Black"
      },
      {
        "name": "Emerald",
        "value": "#0f766e",
        "imageOpt": "1fulton_emerald_o.png",
        "imageSun": "1fulton_emerald_s.png",
        "lensColor": "SkyBlue"
      },
      {
        "name": "Rust",
        "value": "#a16207",
        "imageOpt": "1fulton_rust_o.png",
        "imageSun": "1fulton_rust_s.png",
        "lensColor": "Brown"
      },
      {
        "name": "Smoke",
        "value": "#6b7280",
        "imageOpt": "1fulton_smoke_o.png",
        "imageSun": "1fulton_smoke_s.png",
        "lensColor": "Olive"
      }
    ],
    "character": "Unapologetic, solid, and authoritative chunky acetate frame.",
    "shopUrl": "https://unscenenow.com/products/fulton?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 8000,
    "priceRx": 7600
  },
  {
    "id": "overture",
    "name": "Overture",
    "type": "Both",
    "shape": "Wayfarer",
    "material": "Acetate",
    "bestFor": [
      "Oval",
      "Round"
    ],
    "colors": [
      {
        "name": "Black",
        "value": "#111111",
        "imageOpt": "1Overture_Black_O.png",
        "imageSun": "1Overture_Black_Sun.png",
        "lensColor": "Black"
      },
      {
        "name": "Black Core",
        "value": "#1e293b",
        "imageOpt": "1overture_blackcore_o.png",
        "imageSun": "1Overture_BlackCore_Sun.png",
        "lensColor": "Green"
      },
      {
        "name": "Champagne",
        "value": "#E8DCC4",
        "imageOpt": "1overture_champagne_o.png",
        "imageSun": "1Overture_Champagne_S.png",
        "lensColor": "Brown"
      },
      {
        "name": "Navy",
        "value": "#1E3A8A",
        "imageOpt": "1overture_navy_o.png",
        "imageSun": "1Overture_Navy_S.png",
        "lensColor": "Black"
      },
      {
        "name": "Sage",
        "value": "#4D7C0F",
        "imageOpt": "1overture_sage_o.png",
        "imageSun": "1Overture_Sage_S.png",
        "lensColor": "BrownFade"
      }
    ],
    "character": "A bold, grounded, and sturdy frame designed to provide a minimalist aesthetic with depth.",
    "shopUrl": "https://unscenenow.com/products/overture?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 8000,
    "priceRx": 7600
  },
  {
    "id": "downtime",
    "name": "Downtime",
    "type": "Both",
    "shape": "Round",
    "material": "Acetate",
    "bestFor": [
      "Square",
      "Oval"
    ],
    "colors": [
      {
        "name": "Black",
        "value": "#111111",
        "imageOpt": "1downtime_black_o.png",
        "imageSun": "1downtime_black_s.png",
        "lensColor": "Black"
      },
      {
        "name": "Black Shell",
        "value": "#222222",
        "imageOpt": "1downtime_blackshell_o.png",
        "imageSun": "1downtime_blackshell_s.png",
        "lensColor": "BlackFade"
      },
      {
        "name": "Havana",
        "value": "#A0522D",
        "imageOpt": "1downtime_havana_o.png",
        "imageSun": "1downtime_havana_s(1).png",
        "isTortoise": true,
        "lensColor": "GreenFade"
      },
      {
        "name": "Navy",
        "value": "#1E3A8A",
        "imageOpt": "1downtime_navy_o.png",
        "imageSun": "1downtime_navy_s.png",
        "lensColor": "Brown"
      },
      {
        "name": "Smoke",
        "value": "#6b7280",
        "imageOpt": "1downtime_smoke_o.png",
        "imageSun": "1downtime_smoke_s.png",
        "lensColor": "Rose"
      }
    ],
    "character": "A fuller-shaped frame designed for a quiet presence and relaxed afternoon vibes.",
    "shopUrl": "https://unscenenow.com/products/downtime?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 8000,
    "priceRx": 7600
  },
  {
    "id": "portola",
    "name": "Portola",
    "type": "Both",
    "shape": "Oval",
    "material": "Acetate",
    "bestFor": [
      "Oval",
      "Heart"
    ],
    "colors": [
      {
        "name": "Black",
        "value": "#111111",
        "imageOpt": "1Portola_black_o.png",
        "imageSun": "1Portola_black_s.png",
        "lensColor": "Purple"
      },
      {
        "name": "Black Core",
        "value": "#1e293b",
        "imageOpt": "1Portola_blackcore_o.png",
        "imageSun": "1Portola_blackcore_s.png",
        "lensColor": "Black"
      },
      {
        "name": "Concrete",
        "value": "#71717A",
        "imageOpt": "1Portola_concrete_o.png",
        "imageSun": "1Portola_concrete_s.png",
        "lensColor": "Peach"
      },
      {
        "name": "Havana",
        "value": "#A0522D",
        "imageOpt": "1Portola_havana_o.png",
        "imageSun": "1Portola_havana_s.png",
        "isTortoise": true,
        "lensColor": "Brown"
      },
      {
        "name": "Olive",
        "value": "#556B2F",
        "imageOpt": "1Portola_olive_o.png",
        "imageSun": "1Portola_olive_s.png",
        "lensColor": "Olive"
      }
    ],
    "character": "An oval-shaped frame made from premium Italian Mazzucchelli acetate, exuding effortless coastal style.",
    "shopUrl": "https://unscenenow.com/products/portola?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 7600,
    "priceRx": 7200
  },
  {
    "id": "undertone",
    "name": "Undertone",
    "type": "Both",
    "shape": "Round",
    "material": "Both",
    "bestFor": [
      "Square",
      "Hexagon"
    ],
    "colors": [
      {
        "name": "Anthracite",
        "value": "#3F3F46",
        "imageOpt": "1undertone_anthracite_o.png",
        "imageSun": "1undertone_anthracite_s.png",
        "lensColor": "Rose"
      },
      {
        "name": "Gold",
        "value": "#D4AF37",
        "imageOpt": "1undertone_gold_o.png",
        "imageSun": "1undertone_gold_s.png",
        "lensColor": "Black"
      },
      {
        "name": "Silver",
        "value": "#C0C0C0",
        "imageOpt": "1undertone_silver_o.png",
        "imageSun": "1undertone_silver_s.png",
        "lensColor": "Green"
      }
    ],
    "character": "A seamless blend of acetate and metal featuring a balanced hexagonal-round shape.",
    "shopUrl": "https://unscenenow.com/products/undertone?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 9200,
    "priceRx": 8800
  },
  {
    "id": "prysm",
    "name": "Prysm",
    "type": "Both",
    "shape": "Hexagon",
    "material": "Acetate",
    "bestFor": [
      "Round",
      "Oval"
    ],
    "colors": [
      {
        "name": "Black Core",
        "value": "#1e293b",
        "imageOpt": "1prysm_blackcore_o.png",
        "imageSun": "1prysm_blackcore_s.png",
        "lensColor": "Black"
      },
      {
        "name": "Emerald",
        "value": "#0f766e",
        "imageOpt": "1prysm_emerald_o.png",
        "imageSun": "1prysm_emerald_s.png",
        "lensColor": "Black"
      },
      {
        "name": "Matte Black",
        "value": "#2D2D2D",
        "imageOpt": "1prysm_matteblack_o.png",
        "imageSun": "1prysm_matteblack_s.png",
        "lensColor": "Orange"
      },
      {
        "name": "Ether",
        "value": "#555555",
        "imageOpt": "1prysm_mattesmoke_o.png",
        "imageSun": "1prysm_mattesmoke_s.png",
        "lensColor": "Purple"
      },
      {
        "name": "Rust",
        "value": "#a16207",
        "imageOpt": "1prysm_rust_o.png",
        "imageSun": "1prysm_rust_s.png",
        "lensColor": "Brown"
      }
    ],
    "character": "A sharp, rectangular frame crafted from Italian Mazzucchelli acetate with strong geometric edges.",
    "shopUrl": "https://unscenenow.com/products/prysm?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 7600,
    "priceRx": 7200
  },
  {
    "id": "highline",
    "name": "Highline",
    "type": "Both",
    "shape": "Aviator",
    "material": "Titanium",
    "bestFor": [
      "Oval",
      "Rectangle"
    ],
    "colors": [
      {
        "name": "Anthracite",
        "value": "#3F3F46",
        "imageOpt": "3highline_anthracite_o.png",
        "imageSun": "3highline_anthracite_s.png",
        "lensColor": "Olive"
      },
      {
        "name": "Gold",
        "value": "#D4AF37",
        "imageOpt": "1highline_gold_o.png",
        "imageSun": "1highline_gold_s.png",
        "lensColor": "BrownFade"
      },
      {
        "name": "Silver",
        "value": "#C0C0C0",
        "imageOpt": "1highline_silver_o.png",
        "imageSun": "1highline_silver_s.png",
        "lensColor": "Purple"
      }
    ],
    "character": "Lightweight, oval-shaped Japanese titanium frame built for ultimate strength and comfort.",
    "shopUrl": "https://unscenenow.com/products/highline?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 8200,
    "priceRx": 7800
  },
  {
    "id": "borderline",
    "name": "Borderline",
    "type": "Both",
    "shape": "Rectangle",
    "material": "Titanium",
    "bestFor": [
      "Oval",
      "Heart"
    ],
    "colors": [
      {
        "name": "Gold",
        "value": "#D4AF37",
        "imageOpt": "1borderline_gold_o.png",
        "imageSun": "1borderline_gold_s.png",
        "lensColor": "Green"
      },
      {
        "name": "Gunmetal",
        "value": "#555555",
        "imageOpt": "1borderline_gunmetal_o.png",
        "imageSun": "1borderline_gunmetal_s.png",
        "lensColor": "Blue"
      },
      {
        "name": "Matte Black",
        "value": "#2D2D2D",
        "imageOpt": "1borderline_matteblack_o.png",
        "imageSun": "1borderline_matteblack_s.png",
        "lensColor": "BlackFade"
      }
    ],
    "character": "Minimalist rectangular metallic-rimmed titanium frame defining structural simplicity.",
    "shopUrl": "https://unscenenow.com/products/borderline?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 8200,
    "priceRx": 7800
  },
  {
    "id": "crossfire",
    "name": "Crossfire",
    "type": "Both",
    "shape": "Aviator",
    "material": "Titanium",
    "bestFor": [
      "Round",
      "Square"
    ],
    "colors": [
      {
        "name": "Anthracite",
        "value": "#3F3F46",
        "imageOpt": "1crossfire_anthracite_o.png",
        "imageSun": "1Crossfire_Anthracite_S.png",
        "lensColor": "BlackFade"
      },
      {
        "name": "Bronze",
        "value": "#CD7F32",
        "imageOpt": "1crossfire_bronze_o.png",
        "imageSun": "1Crossfire_Bronze_S.png",
        "lensColor": "GreenFade"
      },
      {
        "name": "Gold",
        "value": "#D4AF37",
        "imageOpt": "1crossfire_gold_o.png",
        "imageSun": "1Crossfire_Gold_S.png",
        "lensColor": "Brown"
      }
    ],
    "character": "Bold double-bridge metal aviator featuring structural reinforcement and lightweight comfort.",
    "shopUrl": "https://unscenenow.com/products/crossfire?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 8900,
    "priceRx": 8200
  },
  {
    "id": "strangelove",
    "name": "Strangelove",
    "type": "Both",
    "shape": "Oval",
    "material": "Titanium",
    "bestFor": [
      "Square",
      "Heart"
    ],
    "colors": [
      {
        "name": "Anthracite",
        "value": "#3F3F46",
        "imageOpt": "1strangelove_anthracite_o.png",
        "imageSun": "1Strangelove_Anthracite_S.png",
        "lensColor": "Orange"
      },
      {
        "name": "Gold",
        "value": "#D4AF37",
        "imageOpt": "1strangelove_gold_o.png",
        "imageSun": "1Strangelove_Gold_S.png",
        "lensColor": "Black"
      },
      {
        "name": "Silver",
        "value": "#C0C0C0",
        "imageOpt": "1strangelove_silver_o.png",
        "imageSun": "1Strangelove_Silver_S.png",
        "lensColor": "Olive"
      }
    ],
    "character": "Delicate oval frame suspended in Japanese titanium, projecting structural lightness.",
    "shopUrl": "https://unscenenow.com/products/strangelove?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 8900,
    "priceRx": 8200
  },
  {
    "id": "wireframe",
    "name": "Wireframe",
    "type": "Both",
    "shape": "Hexagon",
    "material": "Titanium",
    "bestFor": [
      "Oval",
      "Round"
    ],
    "colors": [
      {
        "name": "Bronze",
        "value": "#CD7F32",
        "imageSun": "1Wireframe_Bronze_S.png",
        "lensColor": "Blue"
      },
      {
        "name": "Gold",
        "value": "#D4AF37",
        "imageSun": "1Wireframe_Gold_S.png",
        "lensColor": "Orange"
      },
      {
        "name": "Matte Black",
        "value": "#2D2D2D",
        "imageSun": "1Wireframe_Black _S.png",
        "lensColor": "BlackFade"
      },
      {
        "name": "Silver",
        "value": "#C0C0C0",
        "imageSun": "1Wireframe_Silver_S.png",
        "lensColor": "Purple"
      }
    ],
    "character": "Uncompromised geometric expression. Minimalist hexagonal rim detailing.",
    "shopUrl": "https://unscenenow.com/products/wireframe?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 8600
  },
  {
    "id": "paradox",
    "name": "Paradox",
    "type": "Both",
    "shape": "Hexagon",
    "material": "Both",
    "bestFor": [
      "Oval",
      "Round"
    ],
    "colors": [
      {
        "name": "Gold",
        "value": "#D4AF37",
        "imageOpt": "1paradox_gold_o.png",
        "imageSun": "1paradox_gold_s.png",
        "lensColor": "Green"
      },
      {
        "name": "Matte Anthracite",
        "value": "#4b5563",
        "imageOpt": "1paradox_matteanthracite_o.png",
        "imageSun": "1paradox_matteanthracite_s.png",
        "lensColor": "Purple"
      },
      {
        "name": "Matte Olive",
        "value": "#6b705c",
        "imageOpt": "1paradox_matteolive_o.png",
        "imageSun": "1paradox_matteolive_s.png",
        "lensColor": "Brown"
      }
    ],
    "character": "A balanced contradiction. Subtle geometric lines merging with flat acetate borders.",
    "shopUrl": "https://unscenenow.com/products/paradox?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 8900,
    "priceRx": 8500
  },
  {
    "id": "runway",
    "name": "Runway",
    "type": "Both",
    "shape": "Aviator",
    "material": "Titanium",
    "bestFor": [
      "Round",
      "Square"
    ],
    "colors": [
      {
        "name": "Gold",
        "value": "#D4AF37",
        "imageOpt": "1runway_gold_o.png",
        "imageSun": "1runway_gold_s.png",
        "lensColor": "Black"
      },
      {
        "name": "Matte Gunmetal",
        "value": "#4b5563",
        "imageOpt": "1runway_mattegunmetal_o.png",
        "imageSun": "1runway_mattegunmetal_s.png",
        "lensColor": "SkyBlue"
      },
      {
        "name": "Olive",
        "value": "#556B2F",
        "imageOpt": "3runway_matteolive_o.png",
        "imageSun": "3runway_matteolive_s.png",
        "lensColor": "Green"
      }
    ],
    "character": "Speedway heritage. A thin titanium frame styled with athletic curves.",
    "shopUrl": "https://unscenenow.com/products/runway?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 8600,
    "priceRx": 8200
  },
  {
    "id": "sheer",
    "name": "Sheer",
    "type": "Both",
    "shape": "Round",
    "material": "Titanium",
    "bestFor": [
      "Square",
      "Rectangle"
    ],
    "colors": [
      {
        "name": "Gold",
        "value": "#D4AF37",
        "imageOpt": "1sheer_gold_o.png",
        "imageSun": "1sheer_gold_s.png",
        "lensColor": "Olive"
      },
      {
        "name": "Matte Black",
        "value": "#2D2D2D",
        "imageOpt": "1sheer_matteblack_o.png",
        "imageSun": "1sheer_matteblack_s.png",
        "lensColor": "Rose"
      },
      {
        "name": "Matte Silver",
        "value": "#B2BEB5",
        "imageOpt": "1sheer_silver_o.png",
        "imageSun": "1sheer_silver_s.png",
        "lensColor": "Black"
      }
    ],
    "character": "A gossamer-light presence. Round wire detailing that feels completely weightless.",
    "shopUrl": "https://unscenenow.com/products/sheer?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 8600,
    "priceRx": 7700
  },
  {
    "id": "slowburn",
    "name": "Slowburn",
    "type": "Both",
    "shape": "Rectangle",
    "material": "Both",
    "bestFor": [
      "Oval",
      "Heart"
    ],
    "colors": [
      {
        "name": "Gold",
        "value": "#D4AF37",
        "imageOpt": "1slowburn_gold_o.png",
        "imageSun": "1slowburn_gold_s.png",
        "lensColor": "BrownFade"
      },
      {
        "name": "Gunmetal",
        "value": "#555555",
        "imageOpt": "1slowburn_gunmetal_o.png",
        "imageSun": "1slowburn_gunmetal_s.png",
        "lensColor": "GreenFade"
      },
      {
        "name": "Olive",
        "value": "#556B2F",
        "imageOpt": "3slowburn_olive_o.png",
        "imageSun": "3slowburn_olive_s.png",
        "lensColor": "BlackFade"
      }
    ],
    "character": "A slow-releasing design assertion. Thin metallic rims with polished acetate details.",
    "shopUrl": "https://unscenenow.com/products/slowburn?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 8900,
    "priceRx": 8200
  }
];

export const FRAME_QUESTIONS: Record<string, QuizQuestion[]> = {
  "coastline": [
    {
      "id": "coastline_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Overture",
        "Undertone",
        "Coastline",
        "Paradox"
      ],
      "correctAnswer": "Coastline",
      "frameId": "coastline",
      "colorName": "Black Core",
      "silhouetteOnly": false
    },
    {
      "id": "coastline_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Coastline frame?",
      "options": [
        "Wayfarer",
        "Oval",
        "Aviator",
        "Round"
      ],
      "correctAnswer": "Wayfarer",
      "frameId": "coastline",
      "silhouetteOnly": true
    },
    {
      "id": "coastline_material",
      "type": "material_match",
      "questionText": "What material is the Coastline frame primarily crafted from?",
      "options": [
        "Both",
        "Stainless Steel",
        "Titanium",
        "Acetate"
      ],
      "correctAnswer": "Acetate",
      "frameId": "coastline",
      "silhouetteOnly": false
    },
    {
      "id": "coastline_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"Clean wayfarer energy. Versatile enough for anything.\"?",
      "options": [
        "Vondel",
        "Portola",
        "Coastline",
        "Crossfire"
      ],
      "correctAnswer": "Coastline",
      "frameId": "coastline",
      "silhouetteOnly": false
    },
    {
      "id": "coastline_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Coastline Sunglasses (SUN)?",
      "options": [
        "₹7,600",
        "₹8,500",
        "₹8,600",
        "₹9,200"
      ],
      "correctAnswer": "₹7,600",
      "frameId": "coastline",
      "silhouetteOnly": false
    },
    {
      "id": "coastline_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Coastline Optical (RX)?",
      "options": [
        "₹8,800",
        "₹7,200",
        "₹7,800",
        "₹9,200"
      ],
      "correctAnswer": "₹7,200",
      "frameId": "coastline",
      "silhouetteOnly": false
    },
    {
      "id": "coastline_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Coastline is shown here?",
      "options": [
        "Black Core",
        "Champagne",
        "Havana",
        "Black Shell"
      ],
      "correctAnswer": "Black Core",
      "frameId": "coastline",
      "colorName": "Black Core",
      "silhouetteOnly": false
    },
    {
      "id": "coastline_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Coastline in Black Core feature?",
      "options": [
        "Purple",
        "Rose",
        "Green",
        "Brown"
      ],
      "correctAnswer": "Purple",
      "frameId": "coastline",
      "colorName": "Black Core",
      "silhouetteOnly": false
    },
    {
      "id": "coastline_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Coastline is shown here?",
      "options": [
        "Black Shell",
        "Havana",
        "Black Core",
        "Champagne"
      ],
      "correctAnswer": "Black Shell",
      "frameId": "coastline",
      "colorName": "Black Shell",
      "silhouetteOnly": false
    },
    {
      "id": "coastline_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Coastline in Black Shell feature?",
      "options": [
        "Green Fade",
        "Blue",
        "Purple",
        "Black"
      ],
      "correctAnswer": "Black",
      "frameId": "coastline",
      "colorName": "Black Shell",
      "silhouetteOnly": false
    },
    {
      "id": "coastline_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Coastline is shown here?",
      "options": [
        "Havana",
        "Champagne",
        "Black Shell",
        "Black Core"
      ],
      "correctAnswer": "Champagne",
      "frameId": "coastline",
      "colorName": "Champagne",
      "silhouetteOnly": false
    },
    {
      "id": "coastline_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Coastline in Champagne feature?",
      "options": [
        "Olive",
        "Orange",
        "GreenFade",
        "Brown"
      ],
      "correctAnswer": "Orange",
      "frameId": "coastline",
      "colorName": "Champagne",
      "silhouetteOnly": false
    },
    {
      "id": "coastline_color_3",
      "type": "colour_recognition",
      "questionText": "What colorway of the Coastline is shown here?",
      "options": [
        "Black Shell",
        "Champagne",
        "Black Core",
        "Havana"
      ],
      "correctAnswer": "Havana",
      "frameId": "coastline",
      "colorName": "Havana",
      "silhouetteOnly": false
    },
    {
      "id": "coastline_lens_3",
      "type": "lens_color_match",
      "questionText": "What lens color does the Coastline in Havana feature?",
      "options": [
        "Rose",
        "SkyBlue",
        "Peach",
        "Green"
      ],
      "correctAnswer": "SkyBlue",
      "frameId": "coastline",
      "colorName": "Havana",
      "silhouetteOnly": false
    },
    {
      "id": "coastline_color_4",
      "type": "colour_recognition",
      "questionText": "What colorway of the Coastline is shown here?",
      "options": [
        "Matte Black",
        "Black Core",
        "Champagne",
        "Black Shell"
      ],
      "correctAnswer": "Matte Black",
      "frameId": "coastline",
      "colorName": "Matte Black",
      "silhouetteOnly": false
    },
    {
      "id": "coastline_lens_4",
      "type": "lens_color_match",
      "questionText": "What lens color does the Coastline in Matte Black feature?",
      "options": [
        "Yellow",
        "Green",
        "Black",
        "Brown"
      ],
      "correctAnswer": "Yellow",
      "frameId": "coastline",
      "colorName": "Matte Black",
      "silhouetteOnly": false
    }
  ],
  "vondel": [
    {
      "id": "vondel_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Undertone",
        "Vondel",
        "Sheer",
        "Downtime"
      ],
      "correctAnswer": "Vondel",
      "frameId": "vondel",
      "colorName": "Black",
      "silhouetteOnly": false
    },
    {
      "id": "vondel_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Vondel frame?",
      "options": [
        "Oval",
        "Hexagon",
        "Round",
        "Aviator"
      ],
      "correctAnswer": "Round",
      "frameId": "vondel",
      "silhouetteOnly": true
    },
    {
      "id": "vondel_material",
      "type": "material_match",
      "questionText": "What material is the Vondel frame primarily crafted from?",
      "options": [
        "Stainless Steel",
        "Acetate",
        "Titanium",
        "Carbon Fiber"
      ],
      "correctAnswer": "Acetate",
      "frameId": "vondel",
      "silhouetteOnly": false
    },
    {
      "id": "vondel_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"Soft panto-shaped frame with relaxed proportions, inspired by Amsterdam's Vondelpark.\"?",
      "options": [
        "Coastline",
        "Downtime",
        "Vondel",
        "Portola"
      ],
      "correctAnswer": "Vondel",
      "frameId": "vondel",
      "silhouetteOnly": false
    },
    {
      "id": "vondel_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Vondel Sunglasses (SUN)?",
      "options": [
        "₹7,600",
        "₹8,600",
        "₹7,200",
        "₹7,300"
      ],
      "correctAnswer": "₹7,300",
      "frameId": "vondel",
      "silhouetteOnly": false
    },
    {
      "id": "vondel_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Vondel Optical (RX)?",
      "options": [
        "₹9,200",
        "₹6,900",
        "₹8,200",
        "₹7,800"
      ],
      "correctAnswer": "₹6,900",
      "frameId": "vondel",
      "silhouetteOnly": false
    },
    {
      "id": "vondel_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Vondel is shown here?",
      "options": [
        "Havana",
        "Black Shell",
        "Black",
        "Champagne"
      ],
      "correctAnswer": "Black",
      "frameId": "vondel",
      "colorName": "Black",
      "silhouetteOnly": false
    },
    {
      "id": "vondel_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Vondel in Black feature?",
      "options": [
        "Green",
        "Black",
        "Purple",
        "Brown"
      ],
      "correctAnswer": "Black",
      "frameId": "vondel",
      "colorName": "Black",
      "silhouetteOnly": false
    },
    {
      "id": "vondel_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Vondel is shown here?",
      "options": [
        "Champagne",
        "Havana",
        "Black Shell",
        "Black"
      ],
      "correctAnswer": "Black Shell",
      "frameId": "vondel",
      "colorName": "Black Shell",
      "silhouetteOnly": false
    },
    {
      "id": "vondel_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Vondel in Black Shell feature?",
      "options": [
        "Green",
        "Brown",
        "Blue",
        "Rose"
      ],
      "correctAnswer": "Rose",
      "frameId": "vondel",
      "colorName": "Black Shell",
      "silhouetteOnly": false
    },
    {
      "id": "vondel_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Vondel is shown here?",
      "options": [
        "Black",
        "Black Shell",
        "Havana",
        "Champagne"
      ],
      "correctAnswer": "Champagne",
      "frameId": "vondel",
      "colorName": "Champagne",
      "silhouetteOnly": false
    },
    {
      "id": "vondel_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Vondel in Champagne feature?",
      "options": [
        "Brown",
        "Green",
        "BlackFade",
        "Green Fade"
      ],
      "correctAnswer": "Brown",
      "frameId": "vondel",
      "colorName": "Champagne",
      "silhouetteOnly": false
    },
    {
      "id": "vondel_color_3",
      "type": "colour_recognition",
      "questionText": "What colorway of the Vondel is shown here?",
      "options": [
        "Black Shell",
        "Black",
        "Champagne",
        "Havana"
      ],
      "correctAnswer": "Havana",
      "frameId": "vondel",
      "colorName": "Havana",
      "silhouetteOnly": false
    },
    {
      "id": "vondel_lens_3",
      "type": "lens_color_match",
      "questionText": "What lens color does the Vondel in Havana feature?",
      "options": [
        "Green",
        "Black",
        "Purple",
        "Orange"
      ],
      "correctAnswer": "Green",
      "frameId": "vondel",
      "colorName": "Havana",
      "silhouetteOnly": false
    },
    {
      "id": "vondel_color_4",
      "type": "colour_recognition",
      "questionText": "What colorway of the Vondel is shown here?",
      "options": [
        "Champagne",
        "Black",
        "Teal",
        "Black Shell"
      ],
      "correctAnswer": "Teal",
      "frameId": "vondel",
      "colorName": "Teal",
      "silhouetteOnly": false
    },
    {
      "id": "vondel_lens_4",
      "type": "lens_color_match",
      "questionText": "What lens color does the Vondel in Teal feature?",
      "options": [
        "Brown",
        "GreenFade",
        "Olive",
        "SkyBlue"
      ],
      "correctAnswer": "SkyBlue",
      "frameId": "vondel",
      "colorName": "Teal",
      "silhouetteOnly": false
    }
  ],
  "strand": [
    {
      "id": "strand_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Vondel",
        "Strangelove",
        "Strand",
        "Portola"
      ],
      "correctAnswer": "Strand",
      "frameId": "strand",
      "colorName": "Black",
      "silhouetteOnly": false
    },
    {
      "id": "strand_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Strand frame?",
      "options": [
        "Wayfarer",
        "Aviator",
        "Oval",
        "Round"
      ],
      "correctAnswer": "Oval",
      "frameId": "strand",
      "silhouetteOnly": true
    },
    {
      "id": "strand_material",
      "type": "material_match",
      "questionText": "What material is the Strand frame primarily crafted from?",
      "options": [
        "Acetate",
        "Stainless Steel",
        "Carbon Fiber",
        "Titanium"
      ],
      "correctAnswer": "Acetate",
      "frameId": "strand",
      "silhouetteOnly": false
    },
    {
      "id": "strand_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"Balancing softness and structure, inspired by New York's Strand Bookstore.\"?",
      "options": [
        "Borderline",
        "Vondel",
        "Downtime",
        "Strand"
      ],
      "correctAnswer": "Strand",
      "frameId": "strand",
      "silhouetteOnly": false
    },
    {
      "id": "strand_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Strand Sunglasses (SUN)?",
      "options": [
        "₹7,700",
        "₹7,600",
        "₹8,500",
        "₹9,200"
      ],
      "correctAnswer": "₹7,600",
      "frameId": "strand",
      "silhouetteOnly": false
    },
    {
      "id": "strand_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Strand Optical (RX)?",
      "options": [
        "₹8,600",
        "₹7,200",
        "₹8,800",
        "₹7,600"
      ],
      "correctAnswer": "₹7,200",
      "frameId": "strand",
      "silhouetteOnly": false
    },
    {
      "id": "strand_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Strand is shown here?",
      "options": [
        "Olive",
        "Havana",
        "Black",
        "Blackx"
      ],
      "correctAnswer": "Black",
      "frameId": "strand",
      "colorName": "Black",
      "silhouetteOnly": false
    },
    {
      "id": "strand_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Strand in Black feature?",
      "options": [
        "Black",
        "BlackFade",
        "Blue",
        "Orange"
      ],
      "correctAnswer": "Black",
      "frameId": "strand",
      "colorName": "Black",
      "silhouetteOnly": false
    },
    {
      "id": "strand_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Strand is shown here?",
      "options": [
        "Black",
        "Olive",
        "Havana",
        "Blackx"
      ],
      "correctAnswer": "Blackx",
      "frameId": "strand",
      "colorName": "Blackx",
      "silhouetteOnly": false
    },
    {
      "id": "strand_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Strand in Blackx feature?",
      "options": [
        "Green",
        "Black",
        "Blue",
        "Green Fade"
      ],
      "correctAnswer": "Green",
      "frameId": "strand",
      "colorName": "Blackx",
      "silhouetteOnly": false
    },
    {
      "id": "strand_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Strand is shown here?",
      "options": [
        "Blackx",
        "Black",
        "Olive",
        "Havana"
      ],
      "correctAnswer": "Havana",
      "frameId": "strand",
      "colorName": "Havana",
      "silhouetteOnly": false
    },
    {
      "id": "strand_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Strand in Havana feature?",
      "options": [
        "Peach",
        "Yellow",
        "Green",
        "Blue"
      ],
      "correctAnswer": "Peach",
      "frameId": "strand",
      "colorName": "Havana",
      "silhouetteOnly": false
    },
    {
      "id": "strand_color_3",
      "type": "colour_recognition",
      "questionText": "What colorway of the Strand is shown here?",
      "options": [
        "Blackx",
        "Olive",
        "Black",
        "Havana"
      ],
      "correctAnswer": "Olive",
      "frameId": "strand",
      "colorName": "Olive",
      "silhouetteOnly": false
    },
    {
      "id": "strand_lens_3",
      "type": "lens_color_match",
      "questionText": "What lens color does the Strand in Olive feature?",
      "options": [
        "Brown",
        "SkyBlue",
        "Peach",
        "Green Fade"
      ],
      "correctAnswer": "Brown",
      "frameId": "strand",
      "colorName": "Olive",
      "silhouetteOnly": false
    },
    {
      "id": "strand_color_4",
      "type": "colour_recognition",
      "questionText": "What colorway of the Strand is shown here?",
      "options": [
        "Black",
        "Wine",
        "Blackx",
        "Havana"
      ],
      "correctAnswer": "Wine",
      "frameId": "strand",
      "colorName": "Wine",
      "silhouetteOnly": false
    },
    {
      "id": "strand_lens_4",
      "type": "lens_color_match",
      "questionText": "What lens color does the Strand in Wine feature?",
      "options": [
        "Rose",
        "Black",
        "SkyBlue",
        "GreenFade"
      ],
      "correctAnswer": "Black",
      "frameId": "strand",
      "colorName": "Wine",
      "silhouetteOnly": false
    }
  ],
  "vapour": [
    {
      "id": "vapour_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Vapour",
        "Borderline",
        "Vondel",
        "Fulton"
      ],
      "correctAnswer": "Vapour",
      "frameId": "vapour",
      "colorName": "Black Shell",
      "silhouetteOnly": false
    },
    {
      "id": "vapour_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Vapour frame?",
      "options": [
        "Oval",
        "Wayfarer",
        "Rectangle",
        "Aviator"
      ],
      "correctAnswer": "Rectangle",
      "frameId": "vapour",
      "silhouetteOnly": true
    },
    {
      "id": "vapour_material",
      "type": "material_match",
      "questionText": "What material is the Vapour frame primarily crafted from?",
      "options": [
        "Titanium",
        "Acetate",
        "Stainless Steel",
        "Carbon Fiber"
      ],
      "correctAnswer": "Acetate",
      "frameId": "vapour",
      "silhouetteOnly": false
    },
    {
      "id": "vapour_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"A versatile frame designed to be full across the top and subtly flattened at the sides.\"?",
      "options": [
        "Fulton",
        "Vapour",
        "Undertone",
        "Portola"
      ],
      "correctAnswer": "Vapour",
      "frameId": "vapour",
      "silhouetteOnly": false
    },
    {
      "id": "vapour_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Vapour Sunglasses (SUN)?",
      "options": [
        "₹7,600",
        "₹8,600",
        "₹8,200",
        "₹7,800"
      ],
      "correctAnswer": "₹7,600",
      "frameId": "vapour",
      "silhouetteOnly": false
    },
    {
      "id": "vapour_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Vapour Optical (RX)?",
      "options": [
        "₹8,900",
        "₹8,000",
        "₹7,200",
        "₹8,800"
      ],
      "correctAnswer": "₹7,200",
      "frameId": "vapour",
      "silhouetteOnly": false
    },
    {
      "id": "vapour_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Vapour is shown here?",
      "options": [
        "Glass",
        "Blackshellx",
        "Emerald",
        "Black Shell"
      ],
      "correctAnswer": "Black Shell",
      "frameId": "vapour",
      "colorName": "Black Shell",
      "silhouetteOnly": false
    },
    {
      "id": "vapour_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Vapour in Black Shell feature?",
      "options": [
        "Green Fade",
        "Rose",
        "SkyBlue",
        "Blue"
      ],
      "correctAnswer": "Blue",
      "frameId": "vapour",
      "colorName": "Black Shell",
      "silhouetteOnly": false
    },
    {
      "id": "vapour_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Vapour is shown here?",
      "options": [
        "Blackshellx",
        "Glass",
        "Black Shell",
        "Emerald"
      ],
      "correctAnswer": "Blackshellx",
      "frameId": "vapour",
      "colorName": "Blackshellx",
      "silhouetteOnly": false
    },
    {
      "id": "vapour_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Vapour in Blackshellx feature?",
      "options": [
        "Rose",
        "Black",
        "Orange",
        "Peach"
      ],
      "correctAnswer": "Black",
      "frameId": "vapour",
      "colorName": "Blackshellx",
      "silhouetteOnly": false
    },
    {
      "id": "vapour_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Vapour is shown here?",
      "options": [
        "Emerald",
        "Black Shell",
        "Glass",
        "Blackshellx"
      ],
      "correctAnswer": "Emerald",
      "frameId": "vapour",
      "colorName": "Emerald",
      "silhouetteOnly": false
    },
    {
      "id": "vapour_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Vapour in Emerald feature?",
      "options": [
        "Green Fade",
        "SkyBlue",
        "Green",
        "Olive"
      ],
      "correctAnswer": "Olive",
      "frameId": "vapour",
      "colorName": "Emerald",
      "silhouetteOnly": false
    },
    {
      "id": "vapour_color_3",
      "type": "colour_recognition",
      "questionText": "What colorway of the Vapour is shown here?",
      "options": [
        "Black Shell",
        "Emerald",
        "Blackshellx",
        "Glass"
      ],
      "correctAnswer": "Glass",
      "frameId": "vapour",
      "colorName": "Glass",
      "silhouetteOnly": false
    },
    {
      "id": "vapour_lens_3",
      "type": "lens_color_match",
      "questionText": "What lens color does the Vapour in Glass feature?",
      "options": [
        "GreenFade",
        "Rose",
        "Orange",
        "Green"
      ],
      "correctAnswer": "GreenFade",
      "frameId": "vapour",
      "colorName": "Glass",
      "silhouetteOnly": false
    },
    {
      "id": "vapour_color_4",
      "type": "colour_recognition",
      "questionText": "What colorway of the Vapour is shown here?",
      "options": [
        "Blackshellx",
        "Black Shell",
        "Rust",
        "Emerald"
      ],
      "correctAnswer": "Rust",
      "frameId": "vapour",
      "colorName": "Rust",
      "silhouetteOnly": false
    },
    {
      "id": "vapour_lens_4",
      "type": "lens_color_match",
      "questionText": "What lens color does the Vapour in Rust feature?",
      "options": [
        "BrownFade",
        "BlackFade",
        "Purple",
        "GreenFade"
      ],
      "correctAnswer": "BrownFade",
      "frameId": "vapour",
      "colorName": "Rust",
      "silhouetteOnly": false
    }
  ],
  "split": [
    {
      "id": "split_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Crossfire",
        "Highline",
        "Runway",
        "Split"
      ],
      "correctAnswer": "Split",
      "frameId": "split",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "split_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Split frame?",
      "options": [
        "Round",
        "Oval",
        "Wayfarer",
        "Aviator"
      ],
      "correctAnswer": "Aviator",
      "frameId": "split",
      "silhouetteOnly": true
    },
    {
      "id": "split_material",
      "type": "material_match",
      "questionText": "What material is the Split frame primarily crafted from?",
      "options": [
        "Acetate",
        "Carbon Fiber",
        "Stainless Steel",
        "Titanium"
      ],
      "correctAnswer": "Titanium",
      "frameId": "split",
      "silhouetteOnly": false
    },
    {
      "id": "split_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"A ultra-lightweight Japanese titanium aviator frame featuring a striking split-bridge design.\"?",
      "options": [
        "Split",
        "Undertone",
        "Vapour",
        "Sheer"
      ],
      "correctAnswer": "Split",
      "frameId": "split",
      "silhouetteOnly": false
    },
    {
      "id": "split_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Split Sunglasses (SUN)?",
      "options": [
        "₹8,500",
        "₹8,600",
        "₹7,800",
        "₹8,000"
      ],
      "correctAnswer": "₹8,600",
      "frameId": "split",
      "silhouetteOnly": false
    },
    {
      "id": "split_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Split Optical (RX)?",
      "options": [
        "₹8,200",
        "₹8,600",
        "₹7,700",
        "₹8,000"
      ],
      "correctAnswer": "₹8,200",
      "frameId": "split",
      "silhouetteOnly": false
    },
    {
      "id": "split_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Split is shown here?",
      "options": [
        "Gold",
        "Matte Black",
        "Matte Silver",
        "Anthracite"
      ],
      "correctAnswer": "Gold",
      "frameId": "split",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "split_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Split in Gold feature?",
      "options": [
        "Brown",
        "Orange",
        "Rose",
        "GreenFade"
      ],
      "correctAnswer": "Rose",
      "frameId": "split",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "split_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Split is shown here?",
      "options": [
        "Matte Black",
        "Gold",
        "Matte Silver",
        "Emerald"
      ],
      "correctAnswer": "Matte Black",
      "frameId": "split",
      "colorName": "Matte Black",
      "silhouetteOnly": false
    },
    {
      "id": "split_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Split in Matte Black feature?",
      "options": [
        "Black",
        "Yellow",
        "Brown",
        "Purple"
      ],
      "correctAnswer": "Yellow",
      "frameId": "split",
      "colorName": "Matte Black",
      "silhouetteOnly": false
    },
    {
      "id": "split_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Split is shown here?",
      "options": [
        "Silver",
        "Matte Silver",
        "Matte Black",
        "Gold"
      ],
      "correctAnswer": "Matte Silver",
      "frameId": "split",
      "colorName": "Matte Silver",
      "silhouetteOnly": false
    },
    {
      "id": "split_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Split in Matte Silver feature?",
      "options": [
        "Blue",
        "Orange",
        "Black",
        "SkyBlue"
      ],
      "correctAnswer": "Blue",
      "frameId": "split",
      "colorName": "Matte Silver",
      "silhouetteOnly": false
    }
  ],
  "fulton": [
    {
      "id": "fulton_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Borderline",
        "Vondel",
        "Vapour",
        "Fulton"
      ],
      "correctAnswer": "Fulton",
      "frameId": "fulton",
      "colorName": "Black",
      "silhouetteOnly": false
    },
    {
      "id": "fulton_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Fulton frame?",
      "options": [
        "Rectangle",
        "Hexagon",
        "Round",
        "Aviator"
      ],
      "correctAnswer": "Rectangle",
      "frameId": "fulton",
      "silhouetteOnly": true
    },
    {
      "id": "fulton_material",
      "type": "material_match",
      "questionText": "What material is the Fulton frame primarily crafted from?",
      "options": [
        "Stainless Steel",
        "Titanium",
        "Acetate",
        "Carbon Fiber"
      ],
      "correctAnswer": "Acetate",
      "frameId": "fulton",
      "silhouetteOnly": false
    },
    {
      "id": "fulton_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"Unapologetic, solid, and authoritative chunky acetate frame.\"?",
      "options": [
        "Crossfire",
        "Wireframe",
        "Vapour",
        "Fulton"
      ],
      "correctAnswer": "Fulton",
      "frameId": "fulton",
      "silhouetteOnly": false
    },
    {
      "id": "fulton_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Fulton Sunglasses (SUN)?",
      "options": [
        "₹7,800",
        "₹8,000",
        "₹6,900",
        "₹7,700"
      ],
      "correctAnswer": "₹8,000",
      "frameId": "fulton",
      "silhouetteOnly": false
    },
    {
      "id": "fulton_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Fulton Optical (RX)?",
      "options": [
        "₹8,200",
        "₹8,900",
        "₹7,300",
        "₹7,600"
      ],
      "correctAnswer": "₹7,600",
      "frameId": "fulton",
      "silhouetteOnly": false
    },
    {
      "id": "fulton_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Fulton is shown here?",
      "options": [
        "Emerald",
        "Black Shell",
        "Black",
        "Rust"
      ],
      "correctAnswer": "Black",
      "frameId": "fulton",
      "colorName": "Black",
      "silhouetteOnly": false
    },
    {
      "id": "fulton_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Fulton in Black feature?",
      "options": [
        "BrownFade",
        "Black",
        "Green",
        "Orange"
      ],
      "correctAnswer": "Orange",
      "frameId": "fulton",
      "colorName": "Black",
      "silhouetteOnly": false
    },
    {
      "id": "fulton_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Fulton is shown here?",
      "options": [
        "Rust",
        "Black",
        "Black Shell",
        "Emerald"
      ],
      "correctAnswer": "Black Shell",
      "frameId": "fulton",
      "colorName": "Black Shell",
      "silhouetteOnly": false
    },
    {
      "id": "fulton_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Fulton in Black Shell feature?",
      "options": [
        "Black",
        "Orange",
        "Blue",
        "Green Fade"
      ],
      "correctAnswer": "Black",
      "frameId": "fulton",
      "colorName": "Black Shell",
      "silhouetteOnly": false
    },
    {
      "id": "fulton_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Fulton is shown here?",
      "options": [
        "Black Shell",
        "Black",
        "Emerald",
        "Rust"
      ],
      "correctAnswer": "Emerald",
      "frameId": "fulton",
      "colorName": "Emerald",
      "silhouetteOnly": false
    },
    {
      "id": "fulton_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Fulton in Emerald feature?",
      "options": [
        "Brown",
        "Purple",
        "SkyBlue",
        "Rose"
      ],
      "correctAnswer": "SkyBlue",
      "frameId": "fulton",
      "colorName": "Emerald",
      "silhouetteOnly": false
    },
    {
      "id": "fulton_color_3",
      "type": "colour_recognition",
      "questionText": "What colorway of the Fulton is shown here?",
      "options": [
        "Black Shell",
        "Rust",
        "Black",
        "Emerald"
      ],
      "correctAnswer": "Rust",
      "frameId": "fulton",
      "colorName": "Rust",
      "silhouetteOnly": false
    },
    {
      "id": "fulton_lens_3",
      "type": "lens_color_match",
      "questionText": "What lens color does the Fulton in Rust feature?",
      "options": [
        "Brown",
        "Green",
        "Rose",
        "BrownFade"
      ],
      "correctAnswer": "Brown",
      "frameId": "fulton",
      "colorName": "Rust",
      "silhouetteOnly": false
    },
    {
      "id": "fulton_color_4",
      "type": "colour_recognition",
      "questionText": "What colorway of the Fulton is shown here?",
      "options": [
        "Black",
        "Emerald",
        "Black Shell",
        "Smoke"
      ],
      "correctAnswer": "Smoke",
      "frameId": "fulton",
      "colorName": "Smoke",
      "silhouetteOnly": false
    },
    {
      "id": "fulton_lens_4",
      "type": "lens_color_match",
      "questionText": "What lens color does the Fulton in Smoke feature?",
      "options": [
        "GreenFade",
        "Peach",
        "Orange",
        "Olive"
      ],
      "correctAnswer": "Olive",
      "frameId": "fulton",
      "colorName": "Smoke",
      "silhouetteOnly": false
    }
  ],
  "overture": [
    {
      "id": "overture_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Coastline",
        "Strand",
        "Vondel",
        "Overture"
      ],
      "correctAnswer": "Overture",
      "frameId": "overture",
      "colorName": "Black",
      "silhouetteOnly": false
    },
    {
      "id": "overture_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Overture frame?",
      "options": [
        "Hexagon",
        "Round",
        "Rectangle",
        "Wayfarer"
      ],
      "correctAnswer": "Wayfarer",
      "frameId": "overture",
      "silhouetteOnly": true
    },
    {
      "id": "overture_material",
      "type": "material_match",
      "questionText": "What material is the Overture frame primarily crafted from?",
      "options": [
        "Titanium",
        "Carbon Fiber",
        "Acetate",
        "Stainless Steel"
      ],
      "correctAnswer": "Acetate",
      "frameId": "overture",
      "silhouetteOnly": false
    },
    {
      "id": "overture_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"A bold, grounded, and sturdy frame designed to provide a minimalist aesthetic with depth.\"?",
      "options": [
        "Sheer",
        "Strand",
        "Downtime",
        "Overture"
      ],
      "correctAnswer": "Overture",
      "frameId": "overture",
      "silhouetteOnly": false
    },
    {
      "id": "overture_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Overture Sunglasses (SUN)?",
      "options": [
        "₹7,600",
        "₹8,500",
        "₹8,000",
        "₹9,200"
      ],
      "correctAnswer": "₹8,000",
      "frameId": "overture",
      "silhouetteOnly": false
    },
    {
      "id": "overture_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Overture Optical (RX)?",
      "options": [
        "₹7,800",
        "₹7,600",
        "₹8,900",
        "₹7,700"
      ],
      "correctAnswer": "₹7,600",
      "frameId": "overture",
      "silhouetteOnly": false
    },
    {
      "id": "overture_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Overture is shown here?",
      "options": [
        "Champagne",
        "Navy",
        "Black",
        "Black Core"
      ],
      "correctAnswer": "Black",
      "frameId": "overture",
      "colorName": "Black",
      "silhouetteOnly": false
    },
    {
      "id": "overture_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Overture in Black feature?",
      "options": [
        "Green Fade",
        "Rose",
        "Black",
        "Purple"
      ],
      "correctAnswer": "Black",
      "frameId": "overture",
      "colorName": "Black",
      "silhouetteOnly": false
    },
    {
      "id": "overture_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Overture is shown here?",
      "options": [
        "Black",
        "Champagne",
        "Navy",
        "Black Core"
      ],
      "correctAnswer": "Black Core",
      "frameId": "overture",
      "colorName": "Black Core",
      "silhouetteOnly": false
    },
    {
      "id": "overture_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Overture in Black Core feature?",
      "options": [
        "Olive",
        "Brown",
        "Rose",
        "Green"
      ],
      "correctAnswer": "Green",
      "frameId": "overture",
      "colorName": "Black Core",
      "silhouetteOnly": false
    },
    {
      "id": "overture_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Overture is shown here?",
      "options": [
        "Navy",
        "Champagne",
        "Black",
        "Black Core"
      ],
      "correctAnswer": "Champagne",
      "frameId": "overture",
      "colorName": "Champagne",
      "silhouetteOnly": false
    },
    {
      "id": "overture_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Overture in Champagne feature?",
      "options": [
        "SkyBlue",
        "Rose",
        "Brown",
        "BrownFade"
      ],
      "correctAnswer": "Brown",
      "frameId": "overture",
      "colorName": "Champagne",
      "silhouetteOnly": false
    },
    {
      "id": "overture_color_3",
      "type": "colour_recognition",
      "questionText": "What colorway of the Overture is shown here?",
      "options": [
        "Black Core",
        "Black",
        "Champagne",
        "Navy"
      ],
      "correctAnswer": "Navy",
      "frameId": "overture",
      "colorName": "Navy",
      "silhouetteOnly": false
    },
    {
      "id": "overture_lens_3",
      "type": "lens_color_match",
      "questionText": "What lens color does the Overture in Navy feature?",
      "options": [
        "Black",
        "Brown",
        "Orange",
        "Olive"
      ],
      "correctAnswer": "Black",
      "frameId": "overture",
      "colorName": "Navy",
      "silhouetteOnly": false
    },
    {
      "id": "overture_color_4",
      "type": "colour_recognition",
      "questionText": "What colorway of the Overture is shown here?",
      "options": [
        "Sage",
        "Black",
        "Black Core",
        "Champagne"
      ],
      "correctAnswer": "Sage",
      "frameId": "overture",
      "colorName": "Sage",
      "silhouetteOnly": false
    },
    {
      "id": "overture_lens_4",
      "type": "lens_color_match",
      "questionText": "What lens color does the Overture in Sage feature?",
      "options": [
        "BrownFade",
        "Black",
        "Yellow",
        "GreenFade"
      ],
      "correctAnswer": "BrownFade",
      "frameId": "overture",
      "colorName": "Sage",
      "silhouetteOnly": false
    }
  ],
  "downtime": [
    {
      "id": "downtime_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Sheer",
        "Vondel",
        "Downtime",
        "Undertone"
      ],
      "correctAnswer": "Downtime",
      "frameId": "downtime",
      "colorName": "Black",
      "silhouetteOnly": false
    },
    {
      "id": "downtime_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Downtime frame?",
      "options": [
        "Rectangle",
        "Aviator",
        "Oval",
        "Round"
      ],
      "correctAnswer": "Round",
      "frameId": "downtime",
      "silhouetteOnly": true
    },
    {
      "id": "downtime_material",
      "type": "material_match",
      "questionText": "What material is the Downtime frame primarily crafted from?",
      "options": [
        "Carbon Fiber",
        "Stainless Steel",
        "Titanium",
        "Acetate"
      ],
      "correctAnswer": "Acetate",
      "frameId": "downtime",
      "silhouetteOnly": false
    },
    {
      "id": "downtime_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"A fuller-shaped frame designed for a quiet presence and relaxed afternoon vibes.\"?",
      "options": [
        "Runway",
        "Downtime",
        "Borderline",
        "Prysm"
      ],
      "correctAnswer": "Downtime",
      "frameId": "downtime",
      "silhouetteOnly": false
    },
    {
      "id": "downtime_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Downtime Sunglasses (SUN)?",
      "options": [
        "₹7,200",
        "₹8,000",
        "₹9,200",
        "₹7,600"
      ],
      "correctAnswer": "₹8,000",
      "frameId": "downtime",
      "silhouetteOnly": false
    },
    {
      "id": "downtime_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Downtime Optical (RX)?",
      "options": [
        "₹7,600",
        "₹8,000",
        "₹9,200",
        "₹7,700"
      ],
      "correctAnswer": "₹7,600",
      "frameId": "downtime",
      "silhouetteOnly": false
    },
    {
      "id": "downtime_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Downtime is shown here?",
      "options": [
        "Havana",
        "Navy",
        "Black Shell",
        "Black"
      ],
      "correctAnswer": "Black",
      "frameId": "downtime",
      "colorName": "Black",
      "silhouetteOnly": false
    },
    {
      "id": "downtime_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Downtime in Black feature?",
      "options": [
        "Black",
        "Peach",
        "Brown",
        "SkyBlue"
      ],
      "correctAnswer": "Black",
      "frameId": "downtime",
      "colorName": "Black",
      "silhouetteOnly": false
    },
    {
      "id": "downtime_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Downtime is shown here?",
      "options": [
        "Black",
        "Black Shell",
        "Havana",
        "Navy"
      ],
      "correctAnswer": "Black Shell",
      "frameId": "downtime",
      "colorName": "Black Shell",
      "silhouetteOnly": false
    },
    {
      "id": "downtime_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Downtime in Black Shell feature?",
      "options": [
        "Purple",
        "Orange",
        "SkyBlue",
        "BlackFade"
      ],
      "correctAnswer": "BlackFade",
      "frameId": "downtime",
      "colorName": "Black Shell",
      "silhouetteOnly": false
    },
    {
      "id": "downtime_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Downtime is shown here?",
      "options": [
        "Havana",
        "Navy",
        "Black",
        "Black Shell"
      ],
      "correctAnswer": "Havana",
      "frameId": "downtime",
      "colorName": "Havana",
      "silhouetteOnly": false
    },
    {
      "id": "downtime_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Downtime in Havana feature?",
      "options": [
        "GreenFade",
        "Rose",
        "Blue",
        "BrownFade"
      ],
      "correctAnswer": "GreenFade",
      "frameId": "downtime",
      "colorName": "Havana",
      "silhouetteOnly": false
    },
    {
      "id": "downtime_color_3",
      "type": "colour_recognition",
      "questionText": "What colorway of the Downtime is shown here?",
      "options": [
        "Black",
        "Black Shell",
        "Navy",
        "Havana"
      ],
      "correctAnswer": "Navy",
      "frameId": "downtime",
      "colorName": "Navy",
      "silhouetteOnly": false
    },
    {
      "id": "downtime_lens_3",
      "type": "lens_color_match",
      "questionText": "What lens color does the Downtime in Navy feature?",
      "options": [
        "Green",
        "BlackFade",
        "Brown",
        "Purple"
      ],
      "correctAnswer": "Brown",
      "frameId": "downtime",
      "colorName": "Navy",
      "silhouetteOnly": false
    },
    {
      "id": "downtime_color_4",
      "type": "colour_recognition",
      "questionText": "What colorway of the Downtime is shown here?",
      "options": [
        "Black",
        "Black Shell",
        "Havana",
        "Smoke"
      ],
      "correctAnswer": "Smoke",
      "frameId": "downtime",
      "colorName": "Smoke",
      "silhouetteOnly": false
    },
    {
      "id": "downtime_lens_4",
      "type": "lens_color_match",
      "questionText": "What lens color does the Downtime in Smoke feature?",
      "options": [
        "Rose",
        "Green",
        "Blue",
        "Black"
      ],
      "correctAnswer": "Rose",
      "frameId": "downtime",
      "colorName": "Smoke",
      "silhouetteOnly": false
    }
  ],
  "portola": [
    {
      "id": "portola_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Vondel",
        "Portola",
        "Strangelove",
        "Strand"
      ],
      "correctAnswer": "Portola",
      "frameId": "portola",
      "colorName": "Black",
      "silhouetteOnly": false
    },
    {
      "id": "portola_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Portola frame?",
      "options": [
        "Oval",
        "Rectangle",
        "Hexagon",
        "Round"
      ],
      "correctAnswer": "Oval",
      "frameId": "portola",
      "silhouetteOnly": true
    },
    {
      "id": "portola_material",
      "type": "material_match",
      "questionText": "What material is the Portola frame primarily crafted from?",
      "options": [
        "Stainless Steel",
        "Acetate",
        "Carbon Fiber",
        "Titanium"
      ],
      "correctAnswer": "Acetate",
      "frameId": "portola",
      "silhouetteOnly": false
    },
    {
      "id": "portola_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"An oval-shaped frame made from premium Italian Mazzucchelli acetate, exuding effortless coastal style.\"?",
      "options": [
        "Fulton",
        "Crossfire",
        "Portola",
        "Wireframe"
      ],
      "correctAnswer": "Portola",
      "frameId": "portola",
      "silhouetteOnly": false
    },
    {
      "id": "portola_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Portola Sunglasses (SUN)?",
      "options": [
        "₹7,600",
        "₹8,500",
        "₹8,600",
        "₹7,800"
      ],
      "correctAnswer": "₹7,600",
      "frameId": "portola",
      "silhouetteOnly": false
    },
    {
      "id": "portola_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Portola Optical (RX)?",
      "options": [
        "₹7,200",
        "₹7,800",
        "₹8,000",
        "₹7,600"
      ],
      "correctAnswer": "₹7,200",
      "frameId": "portola",
      "silhouetteOnly": false
    },
    {
      "id": "portola_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Portola is shown here?",
      "options": [
        "Havana",
        "Concrete",
        "Black",
        "Black Core"
      ],
      "correctAnswer": "Black",
      "frameId": "portola",
      "colorName": "Black",
      "silhouetteOnly": false
    },
    {
      "id": "portola_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Portola in Black feature?",
      "options": [
        "Black",
        "Olive",
        "Brown",
        "Purple"
      ],
      "correctAnswer": "Purple",
      "frameId": "portola",
      "colorName": "Black",
      "silhouetteOnly": false
    },
    {
      "id": "portola_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Portola is shown here?",
      "options": [
        "Concrete",
        "Black",
        "Havana",
        "Black Core"
      ],
      "correctAnswer": "Black Core",
      "frameId": "portola",
      "colorName": "Black Core",
      "silhouetteOnly": false
    },
    {
      "id": "portola_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Portola in Black Core feature?",
      "options": [
        "Rose",
        "Black",
        "SkyBlue",
        "Orange"
      ],
      "correctAnswer": "Black",
      "frameId": "portola",
      "colorName": "Black Core",
      "silhouetteOnly": false
    },
    {
      "id": "portola_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Portola is shown here?",
      "options": [
        "Concrete",
        "Black",
        "Havana",
        "Black Core"
      ],
      "correctAnswer": "Concrete",
      "frameId": "portola",
      "colorName": "Concrete",
      "silhouetteOnly": false
    },
    {
      "id": "portola_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Portola in Concrete feature?",
      "options": [
        "Peach",
        "Green Fade",
        "Brown",
        "SkyBlue"
      ],
      "correctAnswer": "Peach",
      "frameId": "portola",
      "colorName": "Concrete",
      "silhouetteOnly": false
    },
    {
      "id": "portola_color_3",
      "type": "colour_recognition",
      "questionText": "What colorway of the Portola is shown here?",
      "options": [
        "Black",
        "Black Core",
        "Havana",
        "Concrete"
      ],
      "correctAnswer": "Havana",
      "frameId": "portola",
      "colorName": "Havana",
      "silhouetteOnly": false
    },
    {
      "id": "portola_lens_3",
      "type": "lens_color_match",
      "questionText": "What lens color does the Portola in Havana feature?",
      "options": [
        "Brown",
        "Black",
        "Orange",
        "BrownFade"
      ],
      "correctAnswer": "Brown",
      "frameId": "portola",
      "colorName": "Havana",
      "silhouetteOnly": false
    },
    {
      "id": "portola_color_4",
      "type": "colour_recognition",
      "questionText": "What colorway of the Portola is shown here?",
      "options": [
        "Black Core",
        "Concrete",
        "Olive",
        "Black"
      ],
      "correctAnswer": "Olive",
      "frameId": "portola",
      "colorName": "Olive",
      "silhouetteOnly": false
    },
    {
      "id": "portola_lens_4",
      "type": "lens_color_match",
      "questionText": "What lens color does the Portola in Olive feature?",
      "options": [
        "Black",
        "SkyBlue",
        "GreenFade",
        "Olive"
      ],
      "correctAnswer": "Olive",
      "frameId": "portola",
      "colorName": "Olive",
      "silhouetteOnly": false
    }
  ],
  "undertone": [
    {
      "id": "undertone_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Vondel",
        "Undertone",
        "Sheer",
        "Downtime"
      ],
      "correctAnswer": "Undertone",
      "frameId": "undertone",
      "colorName": "Anthracite",
      "silhouetteOnly": false
    },
    {
      "id": "undertone_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Undertone frame?",
      "options": [
        "Round",
        "Hexagon",
        "Oval",
        "Wayfarer"
      ],
      "correctAnswer": "Round",
      "frameId": "undertone",
      "silhouetteOnly": true
    },
    {
      "id": "undertone_material",
      "type": "material_match",
      "questionText": "What material is the Undertone frame primarily crafted from?",
      "options": [
        "Acetate",
        "Stainless Steel",
        "Titanium",
        "Both"
      ],
      "correctAnswer": "Both",
      "frameId": "undertone",
      "silhouetteOnly": false
    },
    {
      "id": "undertone_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"A seamless blend of acetate and metal featuring a balanced hexagonal-round shape.\"?",
      "options": [
        "Undertone",
        "Vondel",
        "Strand",
        "Prysm"
      ],
      "correctAnswer": "Undertone",
      "frameId": "undertone",
      "silhouetteOnly": false
    },
    {
      "id": "undertone_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Undertone Sunglasses (SUN)?",
      "options": [
        "₹8,500",
        "₹8,200",
        "₹7,600",
        "₹9,200"
      ],
      "correctAnswer": "₹9,200",
      "frameId": "undertone",
      "silhouetteOnly": false
    },
    {
      "id": "undertone_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Undertone Optical (RX)?",
      "options": [
        "₹8,900",
        "₹8,500",
        "₹7,700",
        "₹8,800"
      ],
      "correctAnswer": "₹8,800",
      "frameId": "undertone",
      "silhouetteOnly": false
    },
    {
      "id": "undertone_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Undertone is shown here?",
      "options": [
        "Silver",
        "Matte Silver",
        "Anthracite",
        "Gold"
      ],
      "correctAnswer": "Anthracite",
      "frameId": "undertone",
      "colorName": "Anthracite",
      "silhouetteOnly": false
    },
    {
      "id": "undertone_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Undertone in Anthracite feature?",
      "options": [
        "GreenFade",
        "Brown",
        "Rose",
        "Olive"
      ],
      "correctAnswer": "Rose",
      "frameId": "undertone",
      "colorName": "Anthracite",
      "silhouetteOnly": false
    },
    {
      "id": "undertone_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Undertone is shown here?",
      "options": [
        "Silver",
        "Matte Gunmetal",
        "Anthracite",
        "Gold"
      ],
      "correctAnswer": "Gold",
      "frameId": "undertone",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "undertone_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Undertone in Gold feature?",
      "options": [
        "Black",
        "Green",
        "Peach",
        "BlackFade"
      ],
      "correctAnswer": "Black",
      "frameId": "undertone",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "undertone_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Undertone is shown here?",
      "options": [
        "Anthracite",
        "Matte Silver",
        "Silver",
        "Gold"
      ],
      "correctAnswer": "Silver",
      "frameId": "undertone",
      "colorName": "Silver",
      "silhouetteOnly": false
    },
    {
      "id": "undertone_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Undertone in Silver feature?",
      "options": [
        "Green",
        "BrownFade",
        "Brown",
        "Purple"
      ],
      "correctAnswer": "Green",
      "frameId": "undertone",
      "colorName": "Silver",
      "silhouetteOnly": false
    }
  ],
  "prysm": [
    {
      "id": "prysm_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Prysm",
        "Paradox",
        "Wireframe",
        "Vondel"
      ],
      "correctAnswer": "Prysm",
      "frameId": "prysm",
      "colorName": "Black Core",
      "silhouetteOnly": false
    },
    {
      "id": "prysm_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Prysm frame?",
      "options": [
        "Round",
        "Oval",
        "Hexagon",
        "Rectangle"
      ],
      "correctAnswer": "Hexagon",
      "frameId": "prysm",
      "silhouetteOnly": true
    },
    {
      "id": "prysm_material",
      "type": "material_match",
      "questionText": "What material is the Prysm frame primarily crafted from?",
      "options": [
        "Carbon Fiber",
        "Titanium",
        "Acetate",
        "Stainless Steel"
      ],
      "correctAnswer": "Acetate",
      "frameId": "prysm",
      "silhouetteOnly": false
    },
    {
      "id": "prysm_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"A sharp, rectangular frame crafted from Italian Mazzucchelli acetate with strong geometric edges.\"?",
      "options": [
        "Wireframe",
        "Borderline",
        "Prysm",
        "Downtime"
      ],
      "correctAnswer": "Prysm",
      "frameId": "prysm",
      "silhouetteOnly": false
    },
    {
      "id": "prysm_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Prysm Sunglasses (SUN)?",
      "options": [
        "₹8,200",
        "₹7,600",
        "₹8,600",
        "₹9,200"
      ],
      "correctAnswer": "₹7,600",
      "frameId": "prysm",
      "silhouetteOnly": false
    },
    {
      "id": "prysm_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Prysm Optical (RX)?",
      "options": [
        "₹8,800",
        "₹7,200",
        "₹7,600",
        "₹8,500"
      ],
      "correctAnswer": "₹7,200",
      "frameId": "prysm",
      "silhouetteOnly": false
    },
    {
      "id": "prysm_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Prysm is shown here?",
      "options": [
        "Emerald",
        "Ether",
        "Black Core",
        "Matte Black"
      ],
      "correctAnswer": "Black Core",
      "frameId": "prysm",
      "colorName": "Black Core",
      "silhouetteOnly": false
    },
    {
      "id": "prysm_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Prysm in Black Core feature?",
      "options": [
        "Peach",
        "BlackFade",
        "Blue",
        "Black"
      ],
      "correctAnswer": "Black",
      "frameId": "prysm",
      "colorName": "Black Core",
      "silhouetteOnly": false
    },
    {
      "id": "prysm_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Prysm is shown here?",
      "options": [
        "Emerald",
        "Matte Black",
        "Ether",
        "Black Core"
      ],
      "correctAnswer": "Emerald",
      "frameId": "prysm",
      "colorName": "Emerald",
      "silhouetteOnly": false
    },
    {
      "id": "prysm_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Prysm in Emerald feature?",
      "options": [
        "Black",
        "Purple",
        "Green",
        "Rose"
      ],
      "correctAnswer": "Black",
      "frameId": "prysm",
      "colorName": "Emerald",
      "silhouetteOnly": false
    },
    {
      "id": "prysm_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Prysm is shown here?",
      "options": [
        "Ether",
        "Emerald",
        "Black Core",
        "Matte Black"
      ],
      "correctAnswer": "Matte Black",
      "frameId": "prysm",
      "colorName": "Matte Black",
      "silhouetteOnly": false
    },
    {
      "id": "prysm_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Prysm in Matte Black feature?",
      "options": [
        "Orange",
        "Brown",
        "Green",
        "BrownFade"
      ],
      "correctAnswer": "Orange",
      "frameId": "prysm",
      "colorName": "Matte Black",
      "silhouetteOnly": false
    },
    {
      "id": "prysm_color_3",
      "type": "colour_recognition",
      "questionText": "What colorway of the Prysm is shown here?",
      "options": [
        "Black Core",
        "Matte Black",
        "Emerald",
        "Ether"
      ],
      "correctAnswer": "Ether",
      "frameId": "prysm",
      "colorName": "Ether",
      "silhouetteOnly": false
    },
    {
      "id": "prysm_lens_3",
      "type": "lens_color_match",
      "questionText": "What lens color does the Prysm in Ether feature?",
      "options": [
        "Purple",
        "GreenFade",
        "Blue",
        "Green Fade"
      ],
      "correctAnswer": "Purple",
      "frameId": "prysm",
      "colorName": "Ether",
      "silhouetteOnly": false
    },
    {
      "id": "prysm_color_4",
      "type": "colour_recognition",
      "questionText": "What colorway of the Prysm is shown here?",
      "options": [
        "Black Core",
        "Matte Black",
        "Rust",
        "Emerald"
      ],
      "correctAnswer": "Rust",
      "frameId": "prysm",
      "colorName": "Rust",
      "silhouetteOnly": false
    },
    {
      "id": "prysm_lens_4",
      "type": "lens_color_match",
      "questionText": "What lens color does the Prysm in Rust feature?",
      "options": [
        "Brown",
        "Green",
        "Black",
        "SkyBlue"
      ],
      "correctAnswer": "Brown",
      "frameId": "prysm",
      "colorName": "Rust",
      "silhouetteOnly": false
    }
  ],
  "highline": [
    {
      "id": "highline_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Runway",
        "Highline",
        "Split",
        "Crossfire"
      ],
      "correctAnswer": "Highline",
      "frameId": "highline",
      "colorName": "Anthracite",
      "silhouetteOnly": false
    },
    {
      "id": "highline_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Highline frame?",
      "options": [
        "Hexagon",
        "Oval",
        "Aviator",
        "Rectangle"
      ],
      "correctAnswer": "Aviator",
      "frameId": "highline",
      "silhouetteOnly": true
    },
    {
      "id": "highline_material",
      "type": "material_match",
      "questionText": "What material is the Highline frame primarily crafted from?",
      "options": [
        "Carbon Fiber",
        "Stainless Steel",
        "Titanium",
        "Acetate"
      ],
      "correctAnswer": "Titanium",
      "frameId": "highline",
      "silhouetteOnly": false
    },
    {
      "id": "highline_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"Lightweight, oval-shaped Japanese titanium frame built for ultimate strength and comfort.\"?",
      "options": [
        "Highline",
        "Sheer",
        "Paradox",
        "Strangelove"
      ],
      "correctAnswer": "Highline",
      "frameId": "highline",
      "silhouetteOnly": false
    },
    {
      "id": "highline_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Highline Sunglasses (SUN)?",
      "options": [
        "₹8,200",
        "₹7,600",
        "₹8,000",
        "₹8,800"
      ],
      "correctAnswer": "₹8,200",
      "frameId": "highline",
      "silhouetteOnly": false
    },
    {
      "id": "highline_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Highline Optical (RX)?",
      "options": [
        "₹7,800",
        "₹7,200",
        "₹7,300",
        "₹8,200"
      ],
      "correctAnswer": "₹7,800",
      "frameId": "highline",
      "silhouetteOnly": false
    },
    {
      "id": "highline_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Highline is shown here?",
      "options": [
        "Anthracite",
        "Silver",
        "Gold",
        "Gunmetal"
      ],
      "correctAnswer": "Anthracite",
      "frameId": "highline",
      "colorName": "Anthracite",
      "silhouetteOnly": false
    },
    {
      "id": "highline_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Highline in Anthracite feature?",
      "options": [
        "Purple",
        "Brown",
        "Olive",
        "Blue"
      ],
      "correctAnswer": "Olive",
      "frameId": "highline",
      "colorName": "Anthracite",
      "silhouetteOnly": false
    },
    {
      "id": "highline_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Highline is shown here?",
      "options": [
        "Anthracite",
        "Silver",
        "Gold",
        "Gunmetal"
      ],
      "correctAnswer": "Gold",
      "frameId": "highline",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "highline_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Highline in Gold feature?",
      "options": [
        "BrownFade",
        "Black",
        "Orange",
        "Purple"
      ],
      "correctAnswer": "BrownFade",
      "frameId": "highline",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "highline_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Highline is shown here?",
      "options": [
        "Anthracite",
        "Bronze",
        "Gold",
        "Silver"
      ],
      "correctAnswer": "Silver",
      "frameId": "highline",
      "colorName": "Silver",
      "silhouetteOnly": false
    },
    {
      "id": "highline_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Highline in Silver feature?",
      "options": [
        "Purple",
        "SkyBlue",
        "Green",
        "Rose"
      ],
      "correctAnswer": "Purple",
      "frameId": "highline",
      "colorName": "Silver",
      "silhouetteOnly": false
    }
  ],
  "borderline": [
    {
      "id": "borderline_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Slowburn",
        "Fulton",
        "Vapour",
        "Borderline"
      ],
      "correctAnswer": "Borderline",
      "frameId": "borderline",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "borderline_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Borderline frame?",
      "options": [
        "Rectangle",
        "Round",
        "Oval",
        "Aviator"
      ],
      "correctAnswer": "Rectangle",
      "frameId": "borderline",
      "silhouetteOnly": true
    },
    {
      "id": "borderline_material",
      "type": "material_match",
      "questionText": "What material is the Borderline frame primarily crafted from?",
      "options": [
        "Acetate",
        "Carbon Fiber",
        "Titanium",
        "Stainless Steel"
      ],
      "correctAnswer": "Titanium",
      "frameId": "borderline",
      "silhouetteOnly": false
    },
    {
      "id": "borderline_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"Minimalist rectangular metallic-rimmed titanium frame defining structural simplicity.\"?",
      "options": [
        "Downtime",
        "Borderline",
        "Strand",
        "Strangelove"
      ],
      "correctAnswer": "Borderline",
      "frameId": "borderline",
      "silhouetteOnly": false
    },
    {
      "id": "borderline_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Borderline Sunglasses (SUN)?",
      "options": [
        "₹6,900",
        "₹8,600",
        "₹7,300",
        "₹8,200"
      ],
      "correctAnswer": "₹8,200",
      "frameId": "borderline",
      "silhouetteOnly": false
    },
    {
      "id": "borderline_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Borderline Optical (RX)?",
      "options": [
        "₹9,200",
        "₹7,700",
        "₹7,600",
        "₹7,800"
      ],
      "correctAnswer": "₹7,800",
      "frameId": "borderline",
      "silhouetteOnly": false
    },
    {
      "id": "borderline_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Borderline is shown here?",
      "options": [
        "Bronze",
        "Gunmetal",
        "Gold",
        "Matte Black"
      ],
      "correctAnswer": "Gold",
      "frameId": "borderline",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "borderline_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Borderline in Gold feature?",
      "options": [
        "Brown",
        "Orange",
        "Green Fade",
        "Green"
      ],
      "correctAnswer": "Green",
      "frameId": "borderline",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "borderline_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Borderline is shown here?",
      "options": [
        "Matte Gunmetal",
        "Matte Black",
        "Gold",
        "Gunmetal"
      ],
      "correctAnswer": "Gunmetal",
      "frameId": "borderline",
      "colorName": "Gunmetal",
      "silhouetteOnly": false
    },
    {
      "id": "borderline_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Borderline in Gunmetal feature?",
      "options": [
        "Peach",
        "SkyBlue",
        "Blue",
        "Green"
      ],
      "correctAnswer": "Blue",
      "frameId": "borderline",
      "colorName": "Gunmetal",
      "silhouetteOnly": false
    },
    {
      "id": "borderline_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Borderline is shown here?",
      "options": [
        "Matte Black",
        "Black B",
        "Gold",
        "Gunmetal"
      ],
      "correctAnswer": "Matte Black",
      "frameId": "borderline",
      "colorName": "Matte Black",
      "silhouetteOnly": false
    },
    {
      "id": "borderline_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Borderline in Matte Black feature?",
      "options": [
        "GreenFade",
        "Yellow",
        "Black",
        "BlackFade"
      ],
      "correctAnswer": "BlackFade",
      "frameId": "borderline",
      "colorName": "Matte Black",
      "silhouetteOnly": false
    }
  ],
  "crossfire": [
    {
      "id": "crossfire_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Highline",
        "Crossfire",
        "Split",
        "Runway"
      ],
      "correctAnswer": "Crossfire",
      "frameId": "crossfire",
      "colorName": "Anthracite",
      "silhouetteOnly": false
    },
    {
      "id": "crossfire_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Crossfire frame?",
      "options": [
        "Rectangle",
        "Round",
        "Aviator",
        "Wayfarer"
      ],
      "correctAnswer": "Aviator",
      "frameId": "crossfire",
      "silhouetteOnly": true
    },
    {
      "id": "crossfire_material",
      "type": "material_match",
      "questionText": "What material is the Crossfire frame primarily crafted from?",
      "options": [
        "Acetate",
        "Stainless Steel",
        "Carbon Fiber",
        "Titanium"
      ],
      "correctAnswer": "Titanium",
      "frameId": "crossfire",
      "silhouetteOnly": false
    },
    {
      "id": "crossfire_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"Bold double-bridge metal aviator featuring structural reinforcement and lightweight comfort.\"?",
      "options": [
        "Slowburn",
        "Crossfire",
        "Runway",
        "Sheer"
      ],
      "correctAnswer": "Crossfire",
      "frameId": "crossfire",
      "silhouetteOnly": false
    },
    {
      "id": "crossfire_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Crossfire Sunglasses (SUN)?",
      "options": [
        "₹7,800",
        "₹8,200",
        "₹8,900",
        "₹8,600"
      ],
      "correctAnswer": "₹8,900",
      "frameId": "crossfire",
      "silhouetteOnly": false
    },
    {
      "id": "crossfire_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Crossfire Optical (RX)?",
      "options": [
        "₹8,200",
        "₹7,300",
        "₹7,600",
        "₹8,900"
      ],
      "correctAnswer": "₹8,200",
      "frameId": "crossfire",
      "silhouetteOnly": false
    },
    {
      "id": "crossfire_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Crossfire is shown here?",
      "options": [
        "Gold",
        "Anthracite",
        "Gunmetal",
        "Bronze"
      ],
      "correctAnswer": "Anthracite",
      "frameId": "crossfire",
      "colorName": "Anthracite",
      "silhouetteOnly": false
    },
    {
      "id": "crossfire_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Crossfire in Anthracite feature?",
      "options": [
        "BlackFade",
        "SkyBlue",
        "GreenFade",
        "Rose"
      ],
      "correctAnswer": "BlackFade",
      "frameId": "crossfire",
      "colorName": "Anthracite",
      "silhouetteOnly": false
    },
    {
      "id": "crossfire_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Crossfire is shown here?",
      "options": [
        "Anthracite",
        "Bronze",
        "Gold",
        "Matte Gunmetal"
      ],
      "correctAnswer": "Bronze",
      "frameId": "crossfire",
      "colorName": "Bronze",
      "silhouetteOnly": false
    },
    {
      "id": "crossfire_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Crossfire in Bronze feature?",
      "options": [
        "Orange",
        "Brown",
        "Olive",
        "GreenFade"
      ],
      "correctAnswer": "GreenFade",
      "frameId": "crossfire",
      "colorName": "Bronze",
      "silhouetteOnly": false
    },
    {
      "id": "crossfire_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Crossfire is shown here?",
      "options": [
        "Gold",
        "Anthracite",
        "Gunmetal",
        "Bronze"
      ],
      "correctAnswer": "Gold",
      "frameId": "crossfire",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "crossfire_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Crossfire in Gold feature?",
      "options": [
        "Brown",
        "Black",
        "Orange",
        "Blue"
      ],
      "correctAnswer": "Brown",
      "frameId": "crossfire",
      "colorName": "Gold",
      "silhouetteOnly": false
    }
  ],
  "strangelove": [
    {
      "id": "strangelove_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Strand",
        "Split",
        "Strangelove",
        "Portola"
      ],
      "correctAnswer": "Strangelove",
      "frameId": "strangelove",
      "colorName": "Anthracite",
      "silhouetteOnly": false
    },
    {
      "id": "strangelove_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Strangelove frame?",
      "options": [
        "Wayfarer",
        "Aviator",
        "Rectangle",
        "Oval"
      ],
      "correctAnswer": "Oval",
      "frameId": "strangelove",
      "silhouetteOnly": true
    },
    {
      "id": "strangelove_material",
      "type": "material_match",
      "questionText": "What material is the Strangelove frame primarily crafted from?",
      "options": [
        "Acetate",
        "Carbon Fiber",
        "Stainless Steel",
        "Titanium"
      ],
      "correctAnswer": "Titanium",
      "frameId": "strangelove",
      "silhouetteOnly": false
    },
    {
      "id": "strangelove_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"Delicate oval frame suspended in Japanese titanium, projecting structural lightness.\"?",
      "options": [
        "Vapour",
        "Strangelove",
        "Highline",
        "Downtime"
      ],
      "correctAnswer": "Strangelove",
      "frameId": "strangelove",
      "silhouetteOnly": false
    },
    {
      "id": "strangelove_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Strangelove Sunglasses (SUN)?",
      "options": [
        "₹7,800",
        "₹7,700",
        "₹8,900",
        "₹7,200"
      ],
      "correctAnswer": "₹8,900",
      "frameId": "strangelove",
      "silhouetteOnly": false
    },
    {
      "id": "strangelove_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Strangelove Optical (RX)?",
      "options": [
        "₹8,200",
        "₹6,900",
        "₹7,800",
        "₹8,000"
      ],
      "correctAnswer": "₹8,200",
      "frameId": "strangelove",
      "silhouetteOnly": false
    },
    {
      "id": "strangelove_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Strangelove is shown here?",
      "options": [
        "Anthracite",
        "Bronze",
        "Gold",
        "Silver"
      ],
      "correctAnswer": "Anthracite",
      "frameId": "strangelove",
      "colorName": "Anthracite",
      "silhouetteOnly": false
    },
    {
      "id": "strangelove_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Strangelove in Anthracite feature?",
      "options": [
        "Rose",
        "SkyBlue",
        "Blue",
        "Orange"
      ],
      "correctAnswer": "Orange",
      "frameId": "strangelove",
      "colorName": "Anthracite",
      "silhouetteOnly": false
    },
    {
      "id": "strangelove_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Strangelove is shown here?",
      "options": [
        "Silver",
        "Anthracite",
        "Gold",
        "Bronze"
      ],
      "correctAnswer": "Gold",
      "frameId": "strangelove",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "strangelove_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Strangelove in Gold feature?",
      "options": [
        "Rose",
        "Green",
        "Peach",
        "Black"
      ],
      "correctAnswer": "Black",
      "frameId": "strangelove",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "strangelove_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Strangelove is shown here?",
      "options": [
        "Gold",
        "Bronze",
        "Silver",
        "Anthracite"
      ],
      "correctAnswer": "Silver",
      "frameId": "strangelove",
      "colorName": "Silver",
      "silhouetteOnly": false
    },
    {
      "id": "strangelove_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Strangelove in Silver feature?",
      "options": [
        "Yellow",
        "SkyBlue",
        "Olive",
        "Purple"
      ],
      "correctAnswer": "Olive",
      "frameId": "strangelove",
      "colorName": "Silver",
      "silhouetteOnly": false
    }
  ],
  "wireframe": [
    {
      "id": "wireframe_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Prysm",
        "Wireframe",
        "Paradox",
        "Split"
      ],
      "correctAnswer": "Wireframe",
      "frameId": "wireframe",
      "colorName": "Bronze",
      "silhouetteOnly": false
    },
    {
      "id": "wireframe_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Wireframe frame?",
      "options": [
        "Rectangle",
        "Oval",
        "Hexagon",
        "Round"
      ],
      "correctAnswer": "Hexagon",
      "frameId": "wireframe",
      "silhouetteOnly": true
    },
    {
      "id": "wireframe_material",
      "type": "material_match",
      "questionText": "What material is the Wireframe frame primarily crafted from?",
      "options": [
        "Titanium",
        "Acetate",
        "Carbon Fiber",
        "Stainless Steel"
      ],
      "correctAnswer": "Titanium",
      "frameId": "wireframe",
      "silhouetteOnly": false
    },
    {
      "id": "wireframe_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"Uncompromised geometric expression. Minimalist hexagonal rim detailing.\"?",
      "options": [
        "Crossfire",
        "Undertone",
        "Wireframe",
        "Strangelove"
      ],
      "correctAnswer": "Wireframe",
      "frameId": "wireframe",
      "silhouetteOnly": false
    },
    {
      "id": "wireframe_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Wireframe Sunglasses (SUN)?",
      "options": [
        "₹8,200",
        "₹9,200",
        "₹8,000",
        "₹8,600"
      ],
      "correctAnswer": "₹8,600",
      "frameId": "wireframe",
      "silhouetteOnly": false
    },
    {
      "id": "wireframe_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Wireframe is shown here?",
      "options": [
        "Gold",
        "Matte Black",
        "Silver",
        "Bronze"
      ],
      "correctAnswer": "Bronze",
      "frameId": "wireframe",
      "colorName": "Bronze",
      "silhouetteOnly": false
    },
    {
      "id": "wireframe_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Wireframe in Bronze feature?",
      "options": [
        "SkyBlue",
        "Black",
        "Rose",
        "Blue"
      ],
      "correctAnswer": "Blue",
      "frameId": "wireframe",
      "colorName": "Bronze",
      "silhouetteOnly": false
    },
    {
      "id": "wireframe_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Wireframe is shown here?",
      "options": [
        "Matte Black",
        "Gold",
        "Silver",
        "Bronze"
      ],
      "correctAnswer": "Gold",
      "frameId": "wireframe",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "wireframe_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Wireframe in Gold feature?",
      "options": [
        "Olive",
        "Purple",
        "Green",
        "Orange"
      ],
      "correctAnswer": "Orange",
      "frameId": "wireframe",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "wireframe_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Wireframe is shown here?",
      "options": [
        "Bronze",
        "Matte Black",
        "Gold",
        "Silver"
      ],
      "correctAnswer": "Matte Black",
      "frameId": "wireframe",
      "colorName": "Matte Black",
      "silhouetteOnly": false
    },
    {
      "id": "wireframe_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Wireframe in Matte Black feature?",
      "options": [
        "Olive",
        "BrownFade",
        "Blue",
        "BlackFade"
      ],
      "correctAnswer": "BlackFade",
      "frameId": "wireframe",
      "colorName": "Matte Black",
      "silhouetteOnly": false
    },
    {
      "id": "wireframe_color_3",
      "type": "colour_recognition",
      "questionText": "What colorway of the Wireframe is shown here?",
      "options": [
        "Gold",
        "Bronze",
        "Silver",
        "Matte Black"
      ],
      "correctAnswer": "Silver",
      "frameId": "wireframe",
      "colorName": "Silver",
      "silhouetteOnly": false
    },
    {
      "id": "wireframe_lens_3",
      "type": "lens_color_match",
      "questionText": "What lens color does the Wireframe in Silver feature?",
      "options": [
        "SkyBlue",
        "GreenFade",
        "Green",
        "Purple"
      ],
      "correctAnswer": "Purple",
      "frameId": "wireframe",
      "colorName": "Silver",
      "silhouetteOnly": false
    }
  ],
  "paradox": [
    {
      "id": "paradox_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Prysm",
        "Coastline",
        "Paradox",
        "Wireframe"
      ],
      "correctAnswer": "Paradox",
      "frameId": "paradox",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "paradox_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Paradox frame?",
      "options": [
        "Wayfarer",
        "Hexagon",
        "Aviator",
        "Oval"
      ],
      "correctAnswer": "Hexagon",
      "frameId": "paradox",
      "silhouetteOnly": true
    },
    {
      "id": "paradox_material",
      "type": "material_match",
      "questionText": "What material is the Paradox frame primarily crafted from?",
      "options": [
        "Stainless Steel",
        "Both",
        "Acetate",
        "Titanium"
      ],
      "correctAnswer": "Both",
      "frameId": "paradox",
      "silhouetteOnly": false
    },
    {
      "id": "paradox_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"A balanced contradiction. Subtle geometric lines merging with flat acetate borders.\"?",
      "options": [
        "Overture",
        "Vondel",
        "Runway",
        "Paradox"
      ],
      "correctAnswer": "Paradox",
      "frameId": "paradox",
      "silhouetteOnly": false
    },
    {
      "id": "paradox_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Paradox Sunglasses (SUN)?",
      "options": [
        "₹8,600",
        "₹8,800",
        "₹8,900",
        "₹8,200"
      ],
      "correctAnswer": "₹8,900",
      "frameId": "paradox",
      "silhouetteOnly": false
    },
    {
      "id": "paradox_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Paradox Optical (RX)?",
      "options": [
        "₹7,300",
        "₹8,500",
        "₹8,000",
        "₹8,900"
      ],
      "correctAnswer": "₹8,500",
      "frameId": "paradox",
      "silhouetteOnly": false
    },
    {
      "id": "paradox_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Paradox is shown here?",
      "options": [
        "Gold",
        "Anthracite",
        "Matte Anthracite",
        "Matte Olive"
      ],
      "correctAnswer": "Gold",
      "frameId": "paradox",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "paradox_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Paradox in Gold feature?",
      "options": [
        "Brown",
        "Orange",
        "Rose",
        "Green"
      ],
      "correctAnswer": "Green",
      "frameId": "paradox",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "paradox_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Paradox is shown here?",
      "options": [
        "Matte Olive",
        "Silver",
        "Matte Anthracite",
        "Gold"
      ],
      "correctAnswer": "Matte Anthracite",
      "frameId": "paradox",
      "colorName": "Matte Anthracite",
      "silhouetteOnly": false
    },
    {
      "id": "paradox_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Paradox in Matte Anthracite feature?",
      "options": [
        "BrownFade",
        "Purple",
        "Blue",
        "SkyBlue"
      ],
      "correctAnswer": "Purple",
      "frameId": "paradox",
      "colorName": "Matte Anthracite",
      "silhouetteOnly": false
    },
    {
      "id": "paradox_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Paradox is shown here?",
      "options": [
        "Matte Anthracite",
        "Gold",
        "Matte Olive",
        "Matte Black"
      ],
      "correctAnswer": "Matte Olive",
      "frameId": "paradox",
      "colorName": "Matte Olive",
      "silhouetteOnly": false
    },
    {
      "id": "paradox_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Paradox in Matte Olive feature?",
      "options": [
        "Peach",
        "BlackFade",
        "Purple",
        "Brown"
      ],
      "correctAnswer": "Brown",
      "frameId": "paradox",
      "colorName": "Matte Olive",
      "silhouetteOnly": false
    }
  ],
  "runway": [
    {
      "id": "runway_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Split",
        "Runway",
        "Highline",
        "Crossfire"
      ],
      "correctAnswer": "Runway",
      "frameId": "runway",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "runway_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Runway frame?",
      "options": [
        "Aviator",
        "Oval",
        "Rectangle",
        "Wayfarer"
      ],
      "correctAnswer": "Aviator",
      "frameId": "runway",
      "silhouetteOnly": true
    },
    {
      "id": "runway_material",
      "type": "material_match",
      "questionText": "What material is the Runway frame primarily crafted from?",
      "options": [
        "Titanium",
        "Carbon Fiber",
        "Acetate",
        "Stainless Steel"
      ],
      "correctAnswer": "Titanium",
      "frameId": "runway",
      "silhouetteOnly": false
    },
    {
      "id": "runway_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"Speedway heritage. A thin titanium frame styled with athletic curves.\"?",
      "options": [
        "Strand",
        "Vondel",
        "Portola",
        "Runway"
      ],
      "correctAnswer": "Runway",
      "frameId": "runway",
      "silhouetteOnly": false
    },
    {
      "id": "runway_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Runway Sunglasses (SUN)?",
      "options": [
        "₹7,600",
        "₹7,700",
        "₹8,600",
        "₹8,800"
      ],
      "correctAnswer": "₹8,600",
      "frameId": "runway",
      "silhouetteOnly": false
    },
    {
      "id": "runway_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Runway Optical (RX)?",
      "options": [
        "₹8,200",
        "₹8,000",
        "₹9,200",
        "₹8,600"
      ],
      "correctAnswer": "₹8,200",
      "frameId": "runway",
      "silhouetteOnly": false
    },
    {
      "id": "runway_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Runway is shown here?",
      "options": [
        "Gold",
        "Olive",
        "Matte Gunmetal",
        "Matte Anthracite"
      ],
      "correctAnswer": "Gold",
      "frameId": "runway",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "runway_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Runway in Gold feature?",
      "options": [
        "Rose",
        "Brown",
        "Black",
        "Green"
      ],
      "correctAnswer": "Black",
      "frameId": "runway",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "runway_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Runway is shown here?",
      "options": [
        "Matte Silver",
        "Olive",
        "Matte Gunmetal",
        "Gold"
      ],
      "correctAnswer": "Matte Gunmetal",
      "frameId": "runway",
      "colorName": "Matte Gunmetal",
      "silhouetteOnly": false
    },
    {
      "id": "runway_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Runway in Matte Gunmetal feature?",
      "options": [
        "Rose",
        "Green",
        "SkyBlue",
        "Blue"
      ],
      "correctAnswer": "SkyBlue",
      "frameId": "runway",
      "colorName": "Matte Gunmetal",
      "silhouetteOnly": false
    },
    {
      "id": "runway_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Runway is shown here?",
      "options": [
        "Matte Gunmetal",
        "Ether",
        "Gold",
        "Olive"
      ],
      "correctAnswer": "Olive",
      "frameId": "runway",
      "colorName": "Olive",
      "silhouetteOnly": false
    },
    {
      "id": "runway_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Runway in Olive feature?",
      "options": [
        "Green Fade",
        "Yellow",
        "Green",
        "BlackFade"
      ],
      "correctAnswer": "Green",
      "frameId": "runway",
      "colorName": "Olive",
      "silhouetteOnly": false
    }
  ],
  "sheer": [
    {
      "id": "sheer_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Sheer",
        "Downtime",
        "Vondel",
        "Undertone"
      ],
      "correctAnswer": "Sheer",
      "frameId": "sheer",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "sheer_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Sheer frame?",
      "options": [
        "Rectangle",
        "Round",
        "Oval",
        "Aviator"
      ],
      "correctAnswer": "Round",
      "frameId": "sheer",
      "silhouetteOnly": true
    },
    {
      "id": "sheer_material",
      "type": "material_match",
      "questionText": "What material is the Sheer frame primarily crafted from?",
      "options": [
        "Acetate",
        "Carbon Fiber",
        "Stainless Steel",
        "Titanium"
      ],
      "correctAnswer": "Titanium",
      "frameId": "sheer",
      "silhouetteOnly": false
    },
    {
      "id": "sheer_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"A gossamer-light presence. Round wire detailing that feels completely weightless.\"?",
      "options": [
        "Sheer",
        "Downtime",
        "Split",
        "Slowburn"
      ],
      "correctAnswer": "Sheer",
      "frameId": "sheer",
      "silhouetteOnly": false
    },
    {
      "id": "sheer_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Sheer Sunglasses (SUN)?",
      "options": [
        "₹7,700",
        "₹7,600",
        "₹8,600",
        "₹7,300"
      ],
      "correctAnswer": "₹8,600",
      "frameId": "sheer",
      "silhouetteOnly": false
    },
    {
      "id": "sheer_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Sheer Optical (RX)?",
      "options": [
        "₹6,900",
        "₹7,700",
        "₹7,300",
        "₹8,000"
      ],
      "correctAnswer": "₹7,700",
      "frameId": "sheer",
      "silhouetteOnly": false
    },
    {
      "id": "sheer_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Sheer is shown here?",
      "options": [
        "Matte Black",
        "Gold",
        "Gunmetal",
        "Matte Silver"
      ],
      "correctAnswer": "Gold",
      "frameId": "sheer",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "sheer_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Sheer in Gold feature?",
      "options": [
        "Olive",
        "BrownFade",
        "SkyBlue",
        "Blue"
      ],
      "correctAnswer": "Olive",
      "frameId": "sheer",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "sheer_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Sheer is shown here?",
      "options": [
        "Gold",
        "Matte Silver",
        "Matte Black",
        "Black Core"
      ],
      "correctAnswer": "Matte Black",
      "frameId": "sheer",
      "colorName": "Matte Black",
      "silhouetteOnly": false
    },
    {
      "id": "sheer_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Sheer in Matte Black feature?",
      "options": [
        "Peach",
        "BlackFade",
        "Yellow",
        "Rose"
      ],
      "correctAnswer": "Rose",
      "frameId": "sheer",
      "colorName": "Matte Black",
      "silhouetteOnly": false
    },
    {
      "id": "sheer_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Sheer is shown here?",
      "options": [
        "Gold",
        "Matte Silver",
        "Silver",
        "Matte Black"
      ],
      "correctAnswer": "Matte Silver",
      "frameId": "sheer",
      "colorName": "Matte Silver",
      "silhouetteOnly": false
    },
    {
      "id": "sheer_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Sheer in Matte Silver feature?",
      "options": [
        "Rose",
        "SkyBlue",
        "Blue",
        "Black"
      ],
      "correctAnswer": "Black",
      "frameId": "sheer",
      "colorName": "Matte Silver",
      "silhouetteOnly": false
    }
  ],
  "slowburn": [
    {
      "id": "slowburn_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Fulton",
        "Slowburn",
        "Borderline",
        "Vapour"
      ],
      "correctAnswer": "Slowburn",
      "frameId": "slowburn",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "slowburn_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Slowburn frame?",
      "options": [
        "Rectangle",
        "Hexagon",
        "Round",
        "Wayfarer"
      ],
      "correctAnswer": "Rectangle",
      "frameId": "slowburn",
      "silhouetteOnly": true
    },
    {
      "id": "slowburn_material",
      "type": "material_match",
      "questionText": "What material is the Slowburn frame primarily crafted from?",
      "options": [
        "Acetate",
        "Stainless Steel",
        "Both",
        "Titanium"
      ],
      "correctAnswer": "Both",
      "frameId": "slowburn",
      "silhouetteOnly": false
    },
    {
      "id": "slowburn_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"A slow-releasing design assertion. Thin metallic rims with polished acetate details.\"?",
      "options": [
        "Sheer",
        "Overture",
        "Vondel",
        "Slowburn"
      ],
      "correctAnswer": "Slowburn",
      "frameId": "slowburn",
      "silhouetteOnly": false
    },
    {
      "id": "slowburn_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Slowburn Sunglasses (SUN)?",
      "options": [
        "₹6,900",
        "₹8,000",
        "₹8,900",
        "₹7,200"
      ],
      "correctAnswer": "₹8,900",
      "frameId": "slowburn",
      "silhouetteOnly": false
    },
    {
      "id": "slowburn_price_rx",
      "type": "price_match",
      "questionText": "What is the price of the Slowburn Optical (RX)?",
      "options": [
        "₹8,600",
        "₹7,300",
        "₹8,200",
        "₹7,700"
      ],
      "correctAnswer": "₹8,200",
      "frameId": "slowburn",
      "silhouetteOnly": false
    },
    {
      "id": "slowburn_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Slowburn is shown here?",
      "options": [
        "Gold",
        "Bronze",
        "Olive",
        "Gunmetal"
      ],
      "correctAnswer": "Gold",
      "frameId": "slowburn",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "slowburn_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Slowburn in Gold feature?",
      "options": [
        "BrownFade",
        "Green Fade",
        "Rose",
        "GreenFade"
      ],
      "correctAnswer": "BrownFade",
      "frameId": "slowburn",
      "colorName": "Gold",
      "silhouetteOnly": false
    },
    {
      "id": "slowburn_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Slowburn is shown here?",
      "options": [
        "Gunmetal",
        "Gold",
        "Olive",
        "Anthracite"
      ],
      "correctAnswer": "Gunmetal",
      "frameId": "slowburn",
      "colorName": "Gunmetal",
      "silhouetteOnly": false
    },
    {
      "id": "slowburn_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Slowburn in Gunmetal feature?",
      "options": [
        "Orange",
        "Peach",
        "Purple",
        "GreenFade"
      ],
      "correctAnswer": "GreenFade",
      "frameId": "slowburn",
      "colorName": "Gunmetal",
      "silhouetteOnly": false
    },
    {
      "id": "slowburn_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Slowburn is shown here?",
      "options": [
        "Olive",
        "Gunmetal",
        "Gold",
        "Teal"
      ],
      "correctAnswer": "Olive",
      "frameId": "slowburn",
      "colorName": "Olive",
      "silhouetteOnly": false
    },
    {
      "id": "slowburn_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Slowburn in Olive feature?",
      "options": [
        "BlackFade",
        "Blue",
        "Green Fade",
        "BrownFade"
      ],
      "correctAnswer": "BlackFade",
      "frameId": "slowburn",
      "colorName": "Olive",
      "silhouetteOnly": false
    }
  ]
};

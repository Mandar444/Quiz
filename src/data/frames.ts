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
        "lensColor": "Blue / purple tint"
      },
      {
        "name": "Black Shell",
        "value": "#222222",
        "imageOpt": "1coastline_blackshell_o.png",
        "imageSun": "1Coastline_BlackShell_Sun.png",
        "lensColor": "Black / dark smoke"
      },
      {
        "name": "Champagne",
        "value": "#E8DCC4",
        "imageOpt": "1coastline_champagne_o.png",
        "imageSun": "1Coastline_Champagne_S.png",
        "lensColor": "Orange / peach lens"
      },
      {
        "name": "Havana",
        "value": "#A0522D",
        "imageOpt": "1coastline_havana_o.png",
        "imageSun": "1Coastline_Havana_S.png",
        "isTortoise": true,
        "lensColor": "Blue gradient"
      },
      {
        "name": "Matte Black",
        "value": "#2D2D2D",
        "imageOpt": "1coastline_matteblack_o.png",
        "imageSun": "1Coastline_MatteBlack_S.png",
        "lensColor": "Yellow lens"
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
        "lensColor": "Black / smoke lens"
      },
      {
        "name": "Black Shell",
        "value": "#222222",
        "imageOpt": "1vondel_blackshell_o.png",
        "imageSun": "1vondel_blackshell_s.png",
        "lensColor": "Orange / coral lens"
      },
      {
        "name": "Champagne",
        "value": "#E8DCC4",
        "imageOpt": "1vondel_champagne_o.png",
        "imageSun": "1vondel_champagne_s.png",
        "lensColor": "Brown gradient"
      },
      {
        "name": "Havana",
        "value": "#A0522D",
        "imageOpt": "1vondel_havana_o.png",
        "imageSun": "1vondel_havana_s.png",
        "isTortoise": true,
        "lensColor": "Green lens"
      },
      {
        "name": "Teal",
        "value": "#005f73",
        "imageOpt": "1vondel_teal_o.png",
        "imageSun": "1vondel_teal_s.png",
        "lensColor": "Blue lens"
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
        "lensColor": "Black / dark smoke lens"
      },
      {
        "name": "Blackx",
        "value": "#555555",
        "imageOpt": "1strand_blackG_o.png",
        "imageSun": "1strand_blackG_s.png",
        "lensColor": "Green lens"
      },
      {
        "name": "Havana",
        "value": "#A0522D",
        "imageOpt": "1strand_havana_o.png",
        "imageSun": "1strand_havana_s.png",
        "isTortoise": true,
        "lensColor": "Rose / pink gradient"
      },
      {
        "name": "Olive",
        "value": "#556B2F",
        "imageOpt": "1strand_olive_o.png",
        "imageSun": "1strand_olive_s.png",
        "lensColor": "Brown gradient"
      },
      {
        "name": "Wine",
        "value": "#555555",
        "imageOpt": "1strand_wine_o.png",
        "imageSun": "1strand_wine_s.png",
        "lensColor": "Black / dark smoke lens"
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
        "lensColor": "Blue lens"
      },
      {
        "name": "Blackshellx",
        "value": "#555555",
        "imageOpt": "1Vapour_blackshellG_o.png",
        "imageSun": "1Vapour_blackshellg_s.png",
        "lensColor": "Black / smoke lens"
      },
      {
        "name": "Emerald",
        "value": "#0f766e",
        "imageOpt": "1Vapour_emerald_o.png",
        "imageSun": "1Vapour_emerald_s.png",
        "lensColor": "Yellow-green lens"
      },
      {
        "name": "Glass",
        "value": "#7b958c",
        "imageOpt": "1Vapour_glass_o.png",
        "imageSun": "1Vapour_glass_s.png",
        "lensColor": "Green / grey lens"
      },
      {
        "name": "Rust",
        "value": "#a16207",
        "imageOpt": "1Vapour_RUST_o.png",
        "imageSun": "1Vapour_rust_s.png",
        "lensColor": "Brown gradient"
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
        "lensColor": "Coral / orange lens"
      },
      {
        "name": "Matte Black",
        "value": "#2D2D2D",
        "imageOpt": "1split_matteblack_o.png",
        "imageSun": "1split_matteblack_s.png",
        "lensColor": "Yellow lens"
      },
      {
        "name": "Matte Silver",
        "value": "#B2BEB5",
        "imageOpt": "1split_mattesilver_o.png",
        "imageSun": "1split_mattesilver_s.png",
        "lensColor": "Blue lens"
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
        "lensColor": "Orange / brown gradient"
      },
      {
        "name": "Black Shell",
        "value": "#222222",
        "imageOpt": "1fulton_blackshell_o.png",
        "imageSun": "1fulton_blackshell_s.png",
        "lensColor": "Black / dark smoke"
      },
      {
        "name": "Emerald",
        "value": "#0f766e",
        "imageOpt": "1fulton_emerald_o.png",
        "imageSun": "1fulton_emerald_s.png",
        "lensColor": "Light blue lens"
      },
      {
        "name": "Rust",
        "value": "#a16207",
        "imageOpt": "1fulton_rust_o.png",
        "imageSun": "1fulton_rust_s.png",
        "lensColor": "Brown gradient"
      },
      {
        "name": "Smoke",
        "value": "#6b7280",
        "imageOpt": "1fulton_smoke_o.png",
        "imageSun": "1fulton_smoke_s.png",
        "lensColor": "Yellow / green tint"
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
        "lensColor": "Black / smoke lens"
      },
      {
        "name": "Black Core",
        "value": "#1e293b",
        "imageOpt": "1overture_blackcore_o.png",
        "imageSun": "1Overture_BlackCore_Sun.png",
        "lensColor": "Green lens"
      },
      {
        "name": "Champagne",
        "value": "#E8DCC4",
        "imageOpt": "1overture_champagne_o.png",
        "imageSun": "1Overture_Champagne_S.png",
        "lensColor": "Brown gradient"
      },
      {
        "name": "Navy",
        "value": "#1E3A8A",
        "imageOpt": "1overture_navy_o.png",
        "imageSun": "1Overture_Navy_S.png",
        "lensColor": "Black / smoke lens"
      },
      {
        "name": "Sage",
        "value": "#4D7C0F",
        "imageOpt": "1overture_sage_o.png",
        "imageSun": "1Overture_Sage_S.png",
        "lensColor": "Brown / rose gradient"
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
        "lensColor": "Blue / grey lens"
      },
      {
        "name": "Black Shell",
        "value": "#222222",
        "imageOpt": "1downtime_blackshell_o.png",
        "imageSun": "1downtime_blackshell_s.png",
        "lensColor": "Black / dark smoke"
      },
      {
        "name": "Havana",
        "value": "#A0522D",
        "imageOpt": "1downtime_havana_o.png",
        "imageSun": "1downtime_havana_s(1).png",
        "isTortoise": true,
        "lensColor": "Green / grey gradient"
      },
      {
        "name": "Navy",
        "value": "#1E3A8A",
        "imageOpt": "1downtime_navy_o.png",
        "imageSun": "1downtime_navy_s.png",
        "lensColor": "Brown / orange gradient"
      },
      {
        "name": "Smoke",
        "value": "#6b7280",
        "imageOpt": "1downtime_smoke_o.png",
        "imageSun": "1downtime_smoke_s.png",
        "lensColor": "Orange / red gradient"
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
        "lensColor": "Blue / purple lens"
      },
      {
        "name": "Black Core",
        "value": "#1e293b",
        "imageOpt": "1Portola_blackcore_o.png",
        "imageSun": "1Portola_blackcore_s.png",
        "lensColor": "Black / smoke lens"
      },
      {
        "name": "Concrete",
        "value": "#71717A",
        "imageOpt": "1Portola_concrete_o.png",
        "imageSun": "1Portola_concrete_s.png",
        "lensColor": "Rose / pink gradient"
      },
      {
        "name": "Havana",
        "value": "#A0522D",
        "imageOpt": "1Portola_havana_o.png",
        "imageSun": "1Portola_havana_s.png",
        "isTortoise": true,
        "lensColor": "Brown / orange gradient"
      },
      {
        "name": "Olive",
        "value": "#556B2F",
        "imageOpt": "1Portola_olive_o.png",
        "imageSun": "1Portola_olive_s.png",
        "lensColor": "Olive / yellow-green lens"
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
        "lensColor": "Coral / orange lens"
      },
      {
        "name": "Gold",
        "value": "#D4AF37",
        "imageOpt": "1undertone_gold_o.png",
        "imageSun": "1undertone_gold_s.png",
        "lensColor": "Purple / smoke lens"
      },
      {
        "name": "Silver",
        "value": "#C0C0C0",
        "imageOpt": "1undertone_silver_o.png",
        "imageSun": "1undertone_silver_s.png",
        "lensColor": "Green / smoke lens"
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
        "lensColor": "Black / smoke lens"
      },
      {
        "name": "Emerald",
        "value": "#0f766e",
        "imageOpt": "1prysm_emerald_o.png",
        "imageSun": "1prysm_emerald_s.png",
        "lensColor": "Green lens"
      },
      {
        "name": "Matte Black",
        "value": "#2D2D2D",
        "imageOpt": "1prysm_matteblack_o.png",
        "imageSun": "1prysm_matteblack_s.png",
        "lensColor": "Orange lens"
      },
      {
        "name": "Ether",
        "value": "#555555",
        "imageOpt": "1prysm_mattesmoke_o.png",
        "imageSun": "1prysm_mattesmoke_s.png",
        "lensColor": "Blue / purple gradient"
      },
      {
        "name": "Rust",
        "value": "#a16207",
        "imageOpt": "1prysm_rust_o.png",
        "imageSun": "1prysm_rust_s.png",
        "lensColor": "Brown / orange gradient"
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
        "lensColor": "Yellow lens"
      },
      {
        "name": "Gold",
        "value": "#D4AF37",
        "imageOpt": "1highline_gold_o.png",
        "imageSun": "1highline_gold_s.png",
        "lensColor": "Brown / rose gradient lens"
      },
      {
        "name": "Silver",
        "value": "#C0C0C0",
        "imageOpt": "1highline_silver_o.png",
        "imageSun": "1highline_silver_s.png",
        "lensColor": "Light blue / lavender lens"
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
        "lensColor": "Green / olive gradient lens"
      },
      {
        "name": "Gunmetal",
        "value": "#555555",
        "imageOpt": "1borderline_gunmetal_o.png",
        "imageSun": "1borderline_gunmetal_s.png",
        "lensColor": "Blue lens"
      },
      {
        "name": "Matte Black",
        "value": "#2D2D2D",
        "imageOpt": "1borderline_matteblack_o.png",
        "imageSun": "1borderline_matteblack_s.png",
        "lensColor": "Purple / smoke lens"
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
        "lensColor": "Purple / smoke lens"
      },
      {
        "name": "Bronze",
        "value": "#CD7F32",
        "imageOpt": "1crossfire_bronze_o.png",
        "imageSun": "1Crossfire_Bronze_S.png",
        "lensColor": "Green gradient lens"
      },
      {
        "name": "Gold",
        "value": "#D4AF37",
        "imageOpt": "1crossfire_gold_o.png",
        "imageSun": "1Crossfire_Gold_S.png",
        "lensColor": "Brown gradient lens"
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
        "lensColor": "Orange lens"
      },
      {
        "name": "Gold",
        "value": "#D4AF37",
        "imageOpt": "1strangelove_gold_o.png",
        "imageSun": "1Strangelove_Gold_S.png",
        "lensColor": "Brown / smoke lens"
      },
      {
        "name": "Silver",
        "value": "#C0C0C0",
        "imageOpt": "1strangelove_silver_o.png",
        "imageSun": "1Strangelove_Silver_S.png",
        "lensColor": "Yellow lens"
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
        "lensColor": "Blue lens"
      },
      {
        "name": "Gold",
        "value": "#D4AF37",
        "imageSun": "1Wireframe_Gold_S.png",
        "lensColor": "Orange lens"
      },
      {
        "name": "Matte Black",
        "value": "#2D2D2D",
        "imageSun": "1Wireframe_Black _S.png",
        "lensColor": "Black / smoke lens"
      },
      {
        "name": "Silver",
        "value": "#C0C0C0",
        "imageSun": "1Wireframe_Silver_S.png",
        "lensColor": "Blue / lavender lens"
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
        "lensColor": "Green / olive gradient lens"
      },
      {
        "name": "Matte Anthracite",
        "value": "#4b5563",
        "imageOpt": "1paradox_matteanthracite_o.png",
        "imageSun": "1paradox_matteanthracite_s.png",
        "lensColor": "Blue / lavender lens"
      },
      {
        "name": "Matte Olive",
        "value": "#6b705c",
        "imageOpt": "1paradox_matteolive_o.png",
        "imageSun": "1paradox_matteolive_s.png",
        "lensColor": "Brown / orange gradient lens"
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
        "lensColor": "Brown / smoke gradient lens"
      },
      {
        "name": "Matte Gunmetal",
        "value": "#4b5563",
        "imageOpt": "1runway_mattegunmetal_o.png",
        "imageSun": "1runway_mattegunmetal_s.png",
        "lensColor": "Blue lens"
      },
      {
        "name": "Olive",
        "value": "#556B2F",
        "imageOpt": "3runway_matteolive_o.png",
        "imageSun": "3runway_matteolive_s.png",
        "lensColor": "Green / smoke lens"
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
        "lensColor": "Yellow lens"
      },
      {
        "name": "Matte Black",
        "value": "#2D2D2D",
        "imageOpt": "1sheer_matteblack_o.png",
        "imageSun": "1sheer_matteblack_s.png",
        "lensColor": "Pink / coral lens"
      },
      {
        "name": "Matte Silver",
        "value": "#B2BEB5",
        "imageOpt": "1sheer_silver_o.png",
        "imageSun": "1sheer_silver_s.png",
        "lensColor": "Purple / smoke lens"
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
        "lensColor": "Brown gradient lens"
      },
      {
        "name": "Gunmetal",
        "value": "#555555",
        "imageOpt": "1slowburn_gunmetal_o.png",
        "imageSun": "1slowburn_gunmetal_s.png",
        "lensColor": "Green gradient lens"
      },
      {
        "name": "Olive",
        "value": "#556B2F",
        "imageOpt": "3slowburn_olive_o.png",
        "imageSun": "3slowburn_olive_s.png",
        "lensColor": "Purple / smoke gradient lens"
      }
    ],
    "character": "A slow-releasing design assertion. Thin metallic rims with polished acetate details.",
    "shopUrl": "https://unscenenow.com/products/slowburn?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 8900,
    "priceRx": 8200
  },
  {
    "id": "velo",
    "name": "Velo",
    "type": "Sun",
    "shape": "Rectangle",
    "material": "Acetate",
    "bestFor": [
      "Round",
      "Oval"
    ],
    "colors": [
      {
        "name": "Black B",
        "value": "#111111",
        "imageSun": "1velo_blackB.png",
        "lensColor": "Blue lens"
      },
      {
        "name": "Black P",
        "value": "#1C1C1C",
        "imageSun": "1velo_blackP.png",
        "lensColor": "Purple / smoke lens"
      },
      {
        "name": "Black Shell",
        "value": "#222222",
        "imageSun": "1velo_blackshell.png",
        "lensColor": "Black / dark smoke lens"
      },
      {
        "name": "Cobalt",
        "value": "#0f4c81",
        "imageSun": "1velo_cobalt.png",
        "lensColor": "Blue / grey lens"
      },
      {
        "name": "Ember",
        "value": "#b33939",
        "imageSun": "1velo_ember.png",
        "lensColor": "Orange / red gradient"
      },
      {
        "name": "Matte Black",
        "value": "#2D2D2D",
        "imageSun": "1velo_matteblack.png",
        "lensColor": "Black / smoke lens"
      }
    ],
    "character": "Narrow, wrapping rectangle sunglasses built for sleek athletic style.",
    "shopUrl": "https://unscenenow.com/products/velo?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card",
    "priceSun": 7300
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
        "Black / dark smoke",
        "Black / smoke lens",
        "Blue / purple gradient",
        "Blue / purple tint"
      ],
      "correctAnswer": "Blue / purple tint",
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
        "Green / smoke lens",
        "Black / dark smoke",
        "Green lens",
        "Blue / purple lens"
      ],
      "correctAnswer": "Black / dark smoke",
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
        "Rose / pink gradient",
        "Orange / peach lens",
        "Yellow lens",
        "Blue / purple gradient"
      ],
      "correctAnswer": "Orange / peach lens",
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
        "Yellow lens",
        "Brown gradient",
        "Brown / orange gradient lens",
        "Blue gradient"
      ],
      "correctAnswer": "Blue gradient",
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
        "Yellow lens",
        "Yellow / green tint",
        "Black / smoke lens",
        "Coral / orange lens"
      ],
      "correctAnswer": "Yellow lens",
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
        "Yellow / green tint",
        "Black / smoke lens",
        "Blue lens",
        "Black / dark smoke lens"
      ],
      "correctAnswer": "Black / smoke lens",
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
        "Orange / coral lens",
        "Black / dark smoke lens",
        "Purple / smoke gradient lens",
        "Orange lens"
      ],
      "correctAnswer": "Orange / coral lens",
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
        "Orange / red gradient",
        "Brown / smoke lens",
        "Black / dark smoke",
        "Brown gradient"
      ],
      "correctAnswer": "Brown gradient",
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
        "Black / dark smoke lens",
        "Purple / smoke lens",
        "Green gradient lens",
        "Green lens"
      ],
      "correctAnswer": "Green lens",
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
        "Green / olive gradient lens",
        "Blue lens",
        "Brown / orange gradient",
        "Orange lens"
      ],
      "correctAnswer": "Blue lens",
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
        "Black / dark smoke lens",
        "Brown gradient",
        "Rose / pink gradient",
        "Brown / orange gradient"
      ],
      "correctAnswer": "Black / dark smoke lens",
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
        "Black / smoke lens",
        "Yellow lens",
        "Green lens",
        "Brown / orange gradient lens"
      ],
      "correctAnswer": "Green lens",
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
        "Rose / pink gradient",
        "Blue / lavender lens",
        "Black / dark smoke lens",
        "Yellow lens"
      ],
      "correctAnswer": "Rose / pink gradient",
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
        "Black / dark smoke",
        "Blue / grey lens",
        "Brown gradient",
        "Pink / coral lens"
      ],
      "correctAnswer": "Brown gradient",
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
        "Brown / rose gradient",
        "Blue / purple gradient",
        "Black / dark smoke lens",
        "Black / smoke lens"
      ],
      "correctAnswer": "Black / dark smoke lens",
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
        "Velo",
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
        "Blue lens",
        "Black / dark smoke",
        "Black / dark smoke lens",
        "Green / olive gradient lens"
      ],
      "correctAnswer": "Blue lens",
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
        "Blue lens",
        "Blue / lavender lens",
        "Green lens",
        "Black / smoke lens"
      ],
      "correctAnswer": "Black / smoke lens",
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
        "Green lens",
        "Brown / orange gradient lens",
        "Blue lens",
        "Yellow-green lens"
      ],
      "correctAnswer": "Yellow-green lens",
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
        "Green / smoke lens",
        "Yellow lens",
        "Rose / pink gradient",
        "Green / grey lens"
      ],
      "correctAnswer": "Green / grey lens",
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
        "Green lens",
        "Rose / pink gradient",
        "Light blue / lavender lens",
        "Brown gradient"
      ],
      "correctAnswer": "Brown gradient",
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
        "Purple / smoke lens",
        "Brown gradient",
        "Brown / smoke gradient lens",
        "Coral / orange lens"
      ],
      "correctAnswer": "Coral / orange lens",
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
        "Orange / peach lens",
        "Rose / pink gradient",
        "Black / smoke lens",
        "Yellow lens"
      ],
      "correctAnswer": "Yellow lens",
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
        "Green / grey gradient",
        "Blue lens",
        "Brown / rose gradient lens",
        "Light blue / lavender lens"
      ],
      "correctAnswer": "Blue lens",
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
        "Velo",
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
        "Brown / orange gradient lens",
        "Blue / lavender lens",
        "Orange / brown gradient",
        "Blue lens"
      ],
      "correctAnswer": "Orange / brown gradient",
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
        "Black / dark smoke",
        "Black / smoke lens",
        "Purple / smoke lens",
        "Brown / orange gradient lens"
      ],
      "correctAnswer": "Black / dark smoke",
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
        "Green gradient lens",
        "Light blue lens",
        "Brown gradient",
        "Blue / purple tint"
      ],
      "correctAnswer": "Light blue lens",
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
        "Brown gradient",
        "Brown / smoke gradient lens",
        "Black / smoke lens",
        "Blue lens"
      ],
      "correctAnswer": "Brown gradient",
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
        "Yellow / green tint",
        "Purple / smoke lens",
        "Green / olive gradient lens",
        "Orange lens"
      ],
      "correctAnswer": "Yellow / green tint",
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
        "Black / smoke lens",
        "Brown / rose gradient",
        "Orange / coral lens",
        "Green / smoke lens"
      ],
      "correctAnswer": "Black / smoke lens",
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
        "Green lens",
        "Blue lens",
        "Black / dark smoke",
        "Orange / red gradient"
      ],
      "correctAnswer": "Green lens",
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
        "Blue / purple tint",
        "Green / grey lens",
        "Blue lens",
        "Brown gradient"
      ],
      "correctAnswer": "Brown gradient",
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
        "Black / smoke lens",
        "Orange / coral lens",
        "Brown gradient",
        "Brown / orange gradient"
      ],
      "correctAnswer": "Black / smoke lens",
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
        "Brown / rose gradient",
        "Green gradient lens",
        "Black / dark smoke lens",
        "Blue lens"
      ],
      "correctAnswer": "Brown / rose gradient",
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
        "Black / smoke lens",
        "Blue / grey lens",
        "Orange lens",
        "Blue lens"
      ],
      "correctAnswer": "Blue / grey lens",
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
        "Green lens",
        "Black / dark smoke",
        "Purple / smoke lens",
        "Black / dark smoke lens"
      ],
      "correctAnswer": "Black / dark smoke",
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
        "Green / grey gradient",
        "Coral / orange lens",
        "Black / smoke lens",
        "Black / dark smoke"
      ],
      "correctAnswer": "Green / grey gradient",
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
        "Black / dark smoke lens",
        "Blue / lavender lens",
        "Black / smoke lens",
        "Brown / orange gradient"
      ],
      "correctAnswer": "Brown / orange gradient",
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
        "Green lens",
        "Blue lens",
        "Orange / red gradient",
        "Blue / grey lens"
      ],
      "correctAnswer": "Orange / red gradient",
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
        "Blue / purple lens",
        "Brown / smoke lens",
        "Brown / orange gradient lens",
        "Yellow / green tint"
      ],
      "correctAnswer": "Blue / purple lens",
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
        "Black / smoke lens",
        "Yellow lens",
        "Blue lens",
        "Brown / orange gradient"
      ],
      "correctAnswer": "Black / smoke lens",
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
        "Pink / coral lens",
        "Green lens",
        "Rose / pink gradient",
        "Green / smoke lens"
      ],
      "correctAnswer": "Rose / pink gradient",
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
        "Blue lens",
        "Brown / orange gradient",
        "Black / smoke lens",
        "Green / smoke lens"
      ],
      "correctAnswer": "Brown / orange gradient",
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
        "Blue lens",
        "Yellow lens",
        "Green / grey lens",
        "Olive / yellow-green lens"
      ],
      "correctAnswer": "Olive / yellow-green lens",
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
        "Velo",
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
        "Purple / smoke lens",
        "Coral / orange lens",
        "Blue lens",
        "Brown gradient lens"
      ],
      "correctAnswer": "Coral / orange lens",
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
        "Brown gradient",
        "Brown / rose gradient",
        "Green / smoke lens",
        "Purple / smoke lens"
      ],
      "correctAnswer": "Purple / smoke lens",
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
        "Purple / smoke lens",
        "Black / smoke lens",
        "Green / smoke lens",
        "Green lens"
      ],
      "correctAnswer": "Green / smoke lens",
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
        "Black / smoke lens",
        "Yellow lens",
        "Blue / purple gradient",
        "Brown gradient lens"
      ],
      "correctAnswer": "Black / smoke lens",
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
        "Blue / purple tint",
        "Green lens",
        "Yellow lens",
        "Brown / rose gradient"
      ],
      "correctAnswer": "Green lens",
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
        "Brown gradient",
        "Orange lens",
        "Yellow lens",
        "Purple / smoke lens"
      ],
      "correctAnswer": "Orange lens",
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
        "Black / smoke lens",
        "Yellow lens",
        "Blue / purple tint",
        "Blue / purple gradient"
      ],
      "correctAnswer": "Blue / purple gradient",
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
        "Yellow lens",
        "Brown / orange gradient",
        "Black / smoke lens",
        "Brown gradient lens"
      ],
      "correctAnswer": "Brown / orange gradient",
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
        "Black / dark smoke",
        "Purple / smoke lens",
        "Yellow lens",
        "Green lens"
      ],
      "correctAnswer": "Yellow lens",
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
        "Brown / rose gradient lens",
        "Black / smoke lens",
        "Green lens",
        "Blue / purple lens"
      ],
      "correctAnswer": "Brown / rose gradient lens",
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
        "Light blue / lavender lens",
        "Blue lens",
        "Brown / orange gradient",
        "Black / dark smoke lens"
      ],
      "correctAnswer": "Light blue / lavender lens",
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
        "Black / smoke lens",
        "Brown / orange gradient lens",
        "Green / olive gradient lens",
        "Green lens"
      ],
      "correctAnswer": "Green / olive gradient lens",
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
        "Black / smoke lens",
        "Blue lens",
        "Brown gradient lens",
        "Blue / grey lens"
      ],
      "correctAnswer": "Blue lens",
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
        "Purple / smoke lens",
        "Yellow-green lens",
        "Green lens",
        "Yellow lens"
      ],
      "correctAnswer": "Purple / smoke lens",
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
        "Blue / purple tint",
        "Black / dark smoke",
        "Brown gradient",
        "Purple / smoke lens"
      ],
      "correctAnswer": "Purple / smoke lens",
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
        "Green gradient lens",
        "Green lens",
        "Orange / red gradient",
        "Blue / grey lens"
      ],
      "correctAnswer": "Green gradient lens",
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
        "Brown gradient lens",
        "Black / dark smoke",
        "Orange lens",
        "Brown / rose gradient lens"
      ],
      "correctAnswer": "Brown gradient lens",
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
        "Yellow-green lens",
        "Green / smoke lens",
        "Brown / rose gradient lens",
        "Orange lens"
      ],
      "correctAnswer": "Orange lens",
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
        "Green lens",
        "Brown / smoke lens",
        "Green gradient lens",
        "Blue / purple lens"
      ],
      "correctAnswer": "Brown / smoke lens",
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
        "Blue gradient",
        "Black / dark smoke lens",
        "Green lens",
        "Yellow lens"
      ],
      "correctAnswer": "Yellow lens",
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
        "Brown / orange gradient",
        "Blue lens",
        "Blue / purple lens",
        "Orange lens"
      ],
      "correctAnswer": "Blue lens",
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
        "Green gradient lens",
        "Brown / rose gradient lens",
        "Orange lens",
        "Black / smoke lens"
      ],
      "correctAnswer": "Orange lens",
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
        "Green lens",
        "Black / smoke lens",
        "Coral / orange lens",
        "Purple / smoke lens"
      ],
      "correctAnswer": "Black / smoke lens",
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
        "Orange lens",
        "Black / smoke lens",
        "Blue / lavender lens",
        "Brown / rose gradient lens"
      ],
      "correctAnswer": "Blue / lavender lens",
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
        "Green / olive gradient lens",
        "Blue gradient",
        "Blue lens",
        "Brown / orange gradient"
      ],
      "correctAnswer": "Green / olive gradient lens",
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
        "Rose / pink gradient",
        "Black / dark smoke lens",
        "Blue / lavender lens",
        "Green / smoke lens"
      ],
      "correctAnswer": "Blue / lavender lens",
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
        "Blue / lavender lens",
        "Brown / orange gradient lens",
        "Green lens",
        "Orange lens"
      ],
      "correctAnswer": "Brown / orange gradient lens",
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
        "Blue / purple tint",
        "Green gradient lens",
        "Green lens",
        "Brown / smoke gradient lens"
      ],
      "correctAnswer": "Brown / smoke gradient lens",
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
        "Blue / purple lens",
        "Black / smoke lens",
        "Blue lens",
        "Blue / purple tint"
      ],
      "correctAnswer": "Blue lens",
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
        "Yellow / green tint",
        "Green / smoke lens",
        "Black / smoke lens",
        "Rose / pink gradient"
      ],
      "correctAnswer": "Green / smoke lens",
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
        "Yellow lens",
        "Green / smoke lens",
        "Black / dark smoke",
        "Blue lens"
      ],
      "correctAnswer": "Yellow lens",
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
        "Black / dark smoke lens",
        "Pink / coral lens",
        "Black / dark smoke",
        "Brown / rose gradient"
      ],
      "correctAnswer": "Pink / coral lens",
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
        "Black / smoke lens",
        "Brown gradient lens",
        "Purple / smoke lens",
        "Light blue / lavender lens"
      ],
      "correctAnswer": "Purple / smoke lens",
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
        "Velo",
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
        "Purple / smoke gradient lens",
        "Brown gradient",
        "Green lens",
        "Brown gradient lens"
      ],
      "correctAnswer": "Brown gradient lens",
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
        "Brown gradient lens",
        "Brown gradient",
        "Blue lens",
        "Green gradient lens"
      ],
      "correctAnswer": "Green gradient lens",
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
        "Orange lens",
        "Purple / smoke gradient lens",
        "Blue / purple lens",
        "Pink / coral lens"
      ],
      "correctAnswer": "Purple / smoke gradient lens",
      "frameId": "slowburn",
      "colorName": "Olive",
      "silhouetteOnly": false
    }
  ],
  "velo": [
    {
      "id": "velo_name",
      "type": "name_the_frame",
      "questionText": "Identify this Unscene frame model from its unique styling.",
      "options": [
        "Vapour",
        "Borderline",
        "Velo",
        "Fulton"
      ],
      "correctAnswer": "Velo",
      "frameId": "velo",
      "colorName": "Black B",
      "silhouetteOnly": false
    },
    {
      "id": "velo_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Velo frame?",
      "options": [
        "Oval",
        "Rectangle",
        "Hexagon",
        "Aviator"
      ],
      "correctAnswer": "Rectangle",
      "frameId": "velo",
      "silhouetteOnly": true
    },
    {
      "id": "velo_material",
      "type": "material_match",
      "questionText": "What material is the Velo frame primarily crafted from?",
      "options": [
        "Carbon Fiber",
        "Stainless Steel",
        "Acetate",
        "Titanium"
      ],
      "correctAnswer": "Acetate",
      "frameId": "velo",
      "silhouetteOnly": false
    },
    {
      "id": "velo_description",
      "type": "collection_recall",
      "questionText": "Which frame matches this description: \"Narrow, wrapping rectangle sunglasses built for sleek athletic style.\"?",
      "options": [
        "Velo",
        "Sheer",
        "Highline",
        "Paradox"
      ],
      "correctAnswer": "Velo",
      "frameId": "velo",
      "silhouetteOnly": false
    },
    {
      "id": "velo_price_sun",
      "type": "price_match",
      "questionText": "What is the price of the Velo Sunglasses (SUN)?",
      "options": [
        "₹8,800",
        "₹8,500",
        "₹7,700",
        "₹7,300"
      ],
      "correctAnswer": "₹7,300",
      "frameId": "velo",
      "silhouetteOnly": false
    },
    {
      "id": "velo_color_0",
      "type": "colour_recognition",
      "questionText": "What colorway of the Velo is shown here?",
      "options": [
        "Cobalt",
        "Black B",
        "Black P",
        "Black Shell"
      ],
      "correctAnswer": "Black B",
      "frameId": "velo",
      "colorName": "Black B",
      "silhouetteOnly": false
    },
    {
      "id": "velo_lens_0",
      "type": "lens_color_match",
      "questionText": "What lens color does the Velo in Black B feature?",
      "options": [
        "Green lens",
        "Blue lens",
        "Brown / orange gradient",
        "Purple / smoke lens"
      ],
      "correctAnswer": "Blue lens",
      "frameId": "velo",
      "colorName": "Black B",
      "silhouetteOnly": false
    },
    {
      "id": "velo_color_1",
      "type": "colour_recognition",
      "questionText": "What colorway of the Velo is shown here?",
      "options": [
        "Black Shell",
        "Black B",
        "Black P",
        "Cobalt"
      ],
      "correctAnswer": "Black P",
      "frameId": "velo",
      "colorName": "Black P",
      "silhouetteOnly": false
    },
    {
      "id": "velo_lens_1",
      "type": "lens_color_match",
      "questionText": "What lens color does the Velo in Black P feature?",
      "options": [
        "Black / smoke lens",
        "Blue lens",
        "Purple / smoke lens",
        "Green / olive gradient lens"
      ],
      "correctAnswer": "Purple / smoke lens",
      "frameId": "velo",
      "colorName": "Black P",
      "silhouetteOnly": false
    },
    {
      "id": "velo_color_2",
      "type": "colour_recognition",
      "questionText": "What colorway of the Velo is shown here?",
      "options": [
        "Black Shell",
        "Black B",
        "Black P",
        "Cobalt"
      ],
      "correctAnswer": "Black Shell",
      "frameId": "velo",
      "colorName": "Black Shell",
      "silhouetteOnly": false
    },
    {
      "id": "velo_lens_2",
      "type": "lens_color_match",
      "questionText": "What lens color does the Velo in Black Shell feature?",
      "options": [
        "Black / dark smoke lens",
        "Brown / orange gradient",
        "Olive / yellow-green lens",
        "Black / smoke lens"
      ],
      "correctAnswer": "Black / dark smoke lens",
      "frameId": "velo",
      "colorName": "Black Shell",
      "silhouetteOnly": false
    },
    {
      "id": "velo_color_3",
      "type": "colour_recognition",
      "questionText": "What colorway of the Velo is shown here?",
      "options": [
        "Black Shell",
        "Cobalt",
        "Black P",
        "Black B"
      ],
      "correctAnswer": "Cobalt",
      "frameId": "velo",
      "colorName": "Cobalt",
      "silhouetteOnly": false
    },
    {
      "id": "velo_lens_3",
      "type": "lens_color_match",
      "questionText": "What lens color does the Velo in Cobalt feature?",
      "options": [
        "Green / grey lens",
        "Blue / grey lens",
        "Brown gradient",
        "Green / grey gradient"
      ],
      "correctAnswer": "Blue / grey lens",
      "frameId": "velo",
      "colorName": "Cobalt",
      "silhouetteOnly": false
    },
    {
      "id": "velo_color_4",
      "type": "colour_recognition",
      "questionText": "What colorway of the Velo is shown here?",
      "options": [
        "Black P",
        "Black Shell",
        "Ember",
        "Black B"
      ],
      "correctAnswer": "Ember",
      "frameId": "velo",
      "colorName": "Ember",
      "silhouetteOnly": false
    },
    {
      "id": "velo_lens_4",
      "type": "lens_color_match",
      "questionText": "What lens color does the Velo in Ember feature?",
      "options": [
        "Blue lens",
        "Blue / grey lens",
        "Orange / red gradient",
        "Yellow lens"
      ],
      "correctAnswer": "Orange / red gradient",
      "frameId": "velo",
      "colorName": "Ember",
      "silhouetteOnly": false
    },
    {
      "id": "velo_color_5",
      "type": "colour_recognition",
      "questionText": "What colorway of the Velo is shown here?",
      "options": [
        "Black Shell",
        "Black B",
        "Black P",
        "Matte Black"
      ],
      "correctAnswer": "Matte Black",
      "frameId": "velo",
      "colorName": "Matte Black",
      "silhouetteOnly": false
    },
    {
      "id": "velo_lens_5",
      "type": "lens_color_match",
      "questionText": "What lens color does the Velo in Matte Black feature?",
      "options": [
        "Brown gradient lens",
        "Olive / yellow-green lens",
        "Black / smoke lens",
        "Brown gradient"
      ],
      "correctAnswer": "Black / smoke lens",
      "frameId": "velo",
      "colorName": "Matte Black",
      "silhouetteOnly": false
    }
  ]
};

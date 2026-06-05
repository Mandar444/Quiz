import type { Frame, QuizQuestion } from '../types';

export const FRAMES: Frame[] = [
  {
    "id": "coastline",
    "name": "Coastline",
    "type": "Both",
    "shape": "Wayfarer",
    "material": "Both",
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
    "shopUrl": "https://unscenenow.com/products/coastline?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
    "shopUrl": "https://unscenenow.com/products/vondel?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
    "shopUrl": "https://unscenenow.com/products/strand?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
    "shopUrl": "https://unscenenow.com/products/vapour?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
    "shopUrl": "https://unscenenow.com/products/split?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
        "lensColor": "Green lens"
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
    "shopUrl": "https://unscenenow.com/products/fulton?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
    "shopUrl": "https://unscenenow.com/products/overture?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
    "shopUrl": "https://unscenenow.com/products/downtime?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
    "shopUrl": "https://unscenenow.com/products/portola?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
    "shopUrl": "https://unscenenow.com/products/undertone?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
        "name": "Mattesmoke",
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
    "shopUrl": "https://unscenenow.com/products/prysm?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
    "shopUrl": "https://unscenenow.com/products/highline?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
    "shopUrl": "https://unscenenow.com/products/borderline?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
    "shopUrl": "https://unscenenow.com/products/crossfire?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
    "shopUrl": "https://unscenenow.com/products/strangelove?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
    "shopUrl": "https://unscenenow.com/products/wireframe?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
    "shopUrl": "https://unscenenow.com/products/paradox?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
    "shopUrl": "https://unscenenow.com/products/runway?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
    "shopUrl": "https://unscenenow.com/products/sheer?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
    "shopUrl": "https://unscenenow.com/products/slowburn?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
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
    "shopUrl": "https://unscenenow.com/products/velo?utm_source=unscene-academy&utm_medium=referral&utm_campaign=lesson-card"
  }
];

export const FRAME_QUESTIONS: Record<string, QuizQuestion[]> = {
  "coastline": [
    {
      "id": "coastline_name",
      "type": "name_the_frame",
      "questionText": "Identify this frame from its balanced, classic wayfarer lines.",
      "options": [
        "Coastline",
        "Fulton",
        "Strand",
        "Overture"
      ],
      "correctAnswer": "Coastline",
      "frameId": "coastline"
    },
    {
      "id": "coastline_shape",
      "type": "shape_identification",
      "questionText": "What is the signature shape profile of the Coastline frame?",
      "options": [
        "Wayfarer",
        "Round",
        "Aviator",
        "Hexagon"
      ],
      "correctAnswer": "Wayfarer",
      "frameId": "coastline",
      "silhouetteOnly": true
    },
    {
      "id": "coastline_color",
      "type": "colour_recognition",
      "questionText": "What colorway of the Coastline is shown here?",
      "options": [
        "Havana",
        "Black Shell",
        "Champagne",
        "Matte Black"
      ],
      "correctAnswer": "Havana",
      "frameId": "coastline",
      "colorName": "Havana"
    }
  ],
  "vondel": [
    {
      "id": "vondel_name",
      "type": "name_the_frame",
      "questionText": "Which Unscene model is a soft panto-shaped frame inspired by a park in Amsterdam?",
      "options": [
        "Vondel",
        "Strand",
        "Overture",
        "Undertone"
      ],
      "correctAnswer": "Vondel",
      "frameId": "vondel"
    },
    {
      "id": "vondel_shape",
      "type": "shape_identification",
      "questionText": "What shape profile does the Vondel present?",
      "options": [
        "Round",
        "Rectangle",
        "Hexagon",
        "Aviator"
      ],
      "correctAnswer": "Round",
      "frameId": "vondel",
      "silhouetteOnly": true
    },
    {
      "id": "vondel_color",
      "type": "colour_recognition",
      "questionText": "Which beautiful colorway of Vondel is displayed?",
      "options": [
        "Teal",
        "Havana",
        "Champagne",
        "Black"
      ],
      "correctAnswer": "Teal",
      "frameId": "vondel",
      "colorName": "Teal"
    }
  ],
  "strand": [
    {
      "id": "strand_name",
      "type": "name_the_frame",
      "questionText": "Which frame is inspired by New York's famous Strand Bookstore?",
      "options": [
        "Strand",
        "Fulton",
        "Portola",
        "Overture"
      ],
      "correctAnswer": "Strand",
      "frameId": "strand"
    },
    {
      "id": "strand_shape",
      "type": "shape_identification",
      "questionText": "What shape is the Strand frame?",
      "options": [
        "Oval",
        "Wayfarer",
        "Rectangle",
        "Hexagon"
      ],
      "correctAnswer": "Oval",
      "frameId": "strand",
      "silhouetteOnly": true
    },
    {
      "id": "strand_color",
      "type": "colour_recognition",
      "questionText": "Identify this rich colorway of the Strand frame.",
      "options": [
        "Wine",
        "Olive",
        "Havana",
        "Black G"
      ],
      "correctAnswer": "Wine",
      "frameId": "strand",
      "colorName": "Wine"
    }
  ],
  "vapour": [
    {
      "id": "vapour_name",
      "type": "name_the_frame",
      "questionText": "Which frame is full across the top but flattened on the sides for a modern rectangle shape?",
      "options": [
        "Vapour",
        "Fulton",
        "Borderline",
        "Flatline"
      ],
      "correctAnswer": "Vapour",
      "frameId": "vapour"
    },
    {
      "id": "vapour_shape",
      "type": "shape_identification",
      "questionText": "What shape profile does the Vapour frame have?",
      "options": [
        "Rectangle",
        "Round",
        "Oval",
        "Hexagon"
      ],
      "correctAnswer": "Rectangle",
      "frameId": "vapour",
      "silhouetteOnly": true
    },
    {
      "id": "vapour_color",
      "type": "colour_recognition",
      "questionText": "Identify this translucent color option of Vapour.",
      "options": [
        "Glass",
        "Emerald",
        "Rust",
        "Black Shell"
      ],
      "correctAnswer": "Glass",
      "frameId": "vapour",
      "colorName": "Glass"
    }
  ],
  "split": [
    {
      "id": "split_name",
      "type": "name_the_frame",
      "questionText": "Which titanium frame has a double split-bridge design?",
      "options": [
        "Split",
        "Highline",
        "Crossfire",
        "Runway"
      ],
      "correctAnswer": "Split",
      "frameId": "split"
    },
    {
      "id": "split_shape",
      "type": "shape_identification",
      "questionText": "What silhouette type is Split?",
      "options": [
        "Aviator",
        "Round",
        "Rectangle",
        "Oval"
      ],
      "correctAnswer": "Aviator",
      "frameId": "split",
      "silhouetteOnly": true
    },
    {
      "id": "split_color",
      "type": "colour_recognition",
      "questionText": "What premium finish is shown on this Split titanium frame?",
      "options": [
        "Matte Silver",
        "Gold",
        "Matte Black",
        "Gunmetal"
      ],
      "correctAnswer": "Matte Silver",
      "frameId": "split",
      "colorName": "Matte Silver"
    }
  ],
  "fulton": [
    {
      "id": "fulton_name",
      "type": "name_the_frame",
      "questionText": "Which chunky, authoritative frame has a solid rectangular presence?",
      "options": [
        "Fulton",
        "Vondel",
        "Split",
        "Slowburn"
      ],
      "correctAnswer": "Fulton",
      "frameId": "fulton"
    },
    {
      "id": "fulton_shape",
      "type": "shape_identification",
      "questionText": "What silhouette does the Fulton frame project?",
      "options": [
        "Rectangle",
        "Wayfarer",
        "Round",
        "Aviator"
      ],
      "correctAnswer": "Rectangle",
      "frameId": "fulton",
      "silhouetteOnly": true
    },
    {
      "id": "fulton_color",
      "type": "colour_recognition",
      "questionText": "Identify this translucent green color option on Fulton.",
      "options": [
        "Emerald",
        "Rust",
        "Smoke",
        "Black Shell"
      ],
      "correctAnswer": "Emerald",
      "frameId": "fulton",
      "colorName": "Emerald"
    }
  ],
  "overture": [
    {
      "id": "overture_name",
      "type": "name_the_frame",
      "questionText": "Identify this bold, grounded frame that provides minimalist depth.",
      "options": [
        "Overture",
        "Coastline",
        "Portola",
        "Downtime"
      ],
      "correctAnswer": "Overture",
      "frameId": "overture"
    },
    {
      "id": "overture_shape",
      "type": "shape_identification",
      "questionText": "The Overture frame is designed with which primary shape?",
      "options": [
        "Wayfarer",
        "Round",
        "Oval",
        "Hexagon"
      ],
      "correctAnswer": "Wayfarer",
      "frameId": "overture",
      "silhouetteOnly": true
    },
    {
      "id": "overture_color",
      "type": "colour_recognition",
      "questionText": "Which custom colorway of Overture is displayed?",
      "options": [
        "Sage",
        "Navy",
        "Champagne",
        "Black Core"
      ],
      "correctAnswer": "Sage",
      "frameId": "overture",
      "colorName": "Sage"
    }
  ],
  "downtime": [
    {
      "id": "downtime_name",
      "type": "name_the_frame",
      "questionText": "Identify the fuller-shaped, relaxed round frame styled for quiet presence.",
      "options": [
        "Downtime",
        "Strand",
        "Vondel",
        "Portola"
      ],
      "correctAnswer": "Downtime",
      "frameId": "downtime"
    },
    {
      "id": "downtime_shape",
      "type": "shape_identification",
      "questionText": "What is the shape of the Downtime frame?",
      "options": [
        "Round",
        "Oval",
        "Wayfarer",
        "Rectangle"
      ],
      "correctAnswer": "Round",
      "frameId": "downtime",
      "silhouetteOnly": true
    },
    {
      "id": "downtime_color",
      "type": "colour_recognition",
      "questionText": "Identify this smokey grey color of Downtime.",
      "options": [
        "Smoke",
        "Navy",
        "Havana",
        "Black Shell"
      ],
      "correctAnswer": "Smoke",
      "frameId": "downtime",
      "colorName": "Smoke"
    }
  ],
  "portola": [
    {
      "id": "portola_name",
      "type": "name_the_frame",
      "questionText": "Which frame features a smooth, medium-oval silhouette in Mazzucchelli acetate?",
      "options": [
        "Portola",
        "Undertone",
        "Prysm",
        "Downtime"
      ],
      "correctAnswer": "Portola",
      "frameId": "portola"
    },
    {
      "id": "portola_shape",
      "type": "shape_identification",
      "questionText": "What shape is the Portola frame?",
      "options": [
        "Oval",
        "Round",
        "Aviator",
        "Hexagon"
      ],
      "correctAnswer": "Oval",
      "frameId": "portola",
      "silhouetteOnly": true
    },
    {
      "id": "portola_color",
      "type": "colour_recognition",
      "questionText": "Which earthy finish is shown on this Portola frame?",
      "options": [
        "Olive",
        "Concrete",
        "Havana",
        "Black Core"
      ],
      "correctAnswer": "Olive",
      "frameId": "portola",
      "colorName": "Olive"
    }
  ],
  "undertone": [
    {
      "id": "undertone_name",
      "type": "name_the_frame",
      "questionText": "Which frame is a seamless blend of acetate and metal, presenting a hybrid hexagonal-round shape?",
      "options": [
        "Undertone",
        "Prysm",
        "Vondel",
        "Split"
      ],
      "correctAnswer": "Undertone",
      "frameId": "undertone"
    },
    {
      "id": "undertone_shape",
      "type": "shape_identification",
      "questionText": "What is the unique shape profile of the Undertone frame?",
      "options": [
        "Round",
        "Rectangle",
        "Wayfarer",
        "Aviator"
      ],
      "correctAnswer": "Round",
      "frameId": "undertone",
      "silhouetteOnly": true
    },
    {
      "id": "undertone_color",
      "type": "colour_recognition",
      "questionText": "What metallic rim finish is shown on this Undertone frame?",
      "options": [
        "Gold",
        "Silver",
        "Anthracite",
        "Bronze"
      ],
      "correctAnswer": "Gold",
      "frameId": "undertone",
      "colorName": "Gold"
    }
  ],
  "prysm": [
    {
      "id": "prysm_name",
      "type": "name_the_frame",
      "questionText": "Which frame uses sharp geometric facets to form a bold hexagonal shape?",
      "options": [
        "Prysm",
        "Undertone",
        "Borderline",
        "Paradox"
      ],
      "correctAnswer": "Prysm",
      "frameId": "prysm"
    },
    {
      "id": "prysm_shape",
      "type": "shape_identification",
      "questionText": "Select the geometric shape of the Prysm frame.",
      "options": [
        "Hexagon",
        "Rectangle",
        "Round",
        "Oval"
      ],
      "correctAnswer": "Hexagon",
      "frameId": "prysm",
      "silhouetteOnly": true
    },
    {
      "id": "prysm_color",
      "type": "colour_recognition",
      "questionText": "Identify this dark blue/grey colorway of Prysm.",
      "options": [
        "Black Core",
        "Emerald",
        "Matte Smoke",
        "Rust"
      ],
      "correctAnswer": "Black Core",
      "frameId": "prysm",
      "colorName": "Black Core"
    }
  ],
  "highline": [
    {
      "id": "highline_name",
      "type": "name_the_frame",
      "questionText": "Identify this lightweight, oval-shaped Japanese titanium aviator frame.",
      "options": [
        "Highline",
        "Split",
        "Borderline",
        "Crossfire"
      ],
      "correctAnswer": "Highline",
      "frameId": "highline"
    },
    {
      "id": "highline_shape",
      "type": "shape_identification",
      "questionText": "What shape is the Highline frame?",
      "options": [
        "Aviator",
        "Wayfarer",
        "Hexagon",
        "Rectangle"
      ],
      "correctAnswer": "Aviator",
      "frameId": "highline",
      "silhouetteOnly": true
    },
    {
      "id": "highline_color",
      "type": "colour_recognition",
      "questionText": "What metallic plating is shown on this Highline frame?",
      "options": [
        "Silver",
        "Gold",
        "Anthracite",
        "Bronze"
      ],
      "correctAnswer": "Silver",
      "frameId": "highline",
      "colorName": "Silver"
    }
  ],
  "borderline": [
    {
      "id": "borderline_name",
      "type": "name_the_frame",
      "questionText": "Identify the minimalist rectangular metal-rimmed titanium frame.",
      "options": [
        "Borderline",
        "Split",
        "Paradox",
        "Slowburn"
      ],
      "correctAnswer": "Borderline",
      "frameId": "borderline"
    },
    {
      "id": "borderline_shape",
      "type": "shape_identification",
      "questionText": "What shape is the Borderline frame silhouette?",
      "options": [
        "Rectangle",
        "Round",
        "Oval",
        "Wayfarer"
      ],
      "correctAnswer": "Rectangle",
      "frameId": "borderline",
      "silhouetteOnly": true
    },
    {
      "id": "borderline_color",
      "type": "colour_recognition",
      "questionText": "Identify this metallic finish of Borderline.",
      "options": [
        "Gunmetal",
        "Gold",
        "Matte Black",
        "Silver"
      ],
      "correctAnswer": "Gunmetal",
      "frameId": "borderline",
      "colorName": "Gunmetal"
    }
  ],
  "crossfire": [
    {
      "id": "crossfire_name",
      "type": "name_the_frame",
      "questionText": "Identify this bold double-bridge titanium aviator frame.",
      "options": [
        "Crossfire",
        "Split",
        "Highline",
        "Runway"
      ],
      "correctAnswer": "Crossfire",
      "frameId": "crossfire"
    },
    {
      "id": "crossfire_shape",
      "type": "shape_identification",
      "questionText": "What signature silhouette does Crossfire feature?",
      "options": [
        "Aviator",
        "Hexagon",
        "Round",
        "Rectangle"
      ],
      "correctAnswer": "Aviator",
      "frameId": "crossfire",
      "silhouetteOnly": true
    },
    {
      "id": "crossfire_color",
      "type": "colour_recognition",
      "questionText": "Identify this warm metallic color option of Crossfire.",
      "options": [
        "Bronze",
        "Gold",
        "Anthracite",
        "Silver"
      ],
      "correctAnswer": "Bronze",
      "frameId": "crossfire",
      "colorName": "Bronze"
    }
  ],
  "strangelove": [
    {
      "id": "strangelove_name",
      "type": "name_the_frame",
      "questionText": "Which delicate oval titanium frame projects weightless structural lightness?",
      "options": [
        "Strangelove",
        "Highline",
        "Strand",
        "Sheer"
      ],
      "correctAnswer": "Strangelove",
      "frameId": "strangelove"
    },
    {
      "id": "strangelove_shape",
      "type": "shape_identification",
      "questionText": "What shape are the lenses of the Strangelove frame?",
      "options": [
        "Oval",
        "Round",
        "Hexagon",
        "Rectangle"
      ],
      "correctAnswer": "Oval",
      "frameId": "strangelove",
      "silhouetteOnly": true
    },
    {
      "id": "strangelove_color",
      "type": "colour_recognition",
      "questionText": "What metallic colorway is shown on this Strangelove frame?",
      "options": [
        "Anthracite",
        "Gold",
        "Silver",
        "Bronze"
      ],
      "correctAnswer": "Anthracite",
      "frameId": "strangelove",
      "colorName": "Anthracite"
    }
  ],
  "wireframe": [
    {
      "id": "wireframe_name",
      "type": "name_the_frame",
      "questionText": "Identify this uncompromised hexagonal wireframe in Japanese titanium.",
      "options": [
        "Wireframe",
        "Outlines",
        "Prysm",
        "Paradox"
      ],
      "correctAnswer": "Wireframe",
      "frameId": "wireframe"
    },
    {
      "id": "wireframe_shape",
      "type": "shape_identification",
      "questionText": "What is the geometric shape profile of the Wireframe model?",
      "options": [
        "Hexagon",
        "Round",
        "Rectangle",
        "Wayfarer"
      ],
      "correctAnswer": "Hexagon",
      "frameId": "wireframe",
      "silhouetteOnly": true
    },
    {
      "id": "wireframe_color",
      "type": "colour_recognition",
      "questionText": "Identify this wireframe colorway.",
      "options": [
        "Gold",
        "Silver",
        "Bronze",
        "Black"
      ],
      "correctAnswer": "Gold",
      "frameId": "wireframe",
      "colorName": "Gold"
    }
  ],
  "paradox": [
    {
      "id": "paradox_name",
      "type": "name_the_frame",
      "questionText": "Identify this frame merging flat acetate borders with a hexagonal metal shape.",
      "options": [
        "Paradox",
        "Prysm",
        "Undertone",
        "Wireframe"
      ],
      "correctAnswer": "Paradox",
      "frameId": "paradox"
    },
    {
      "id": "paradox_shape",
      "type": "shape_identification",
      "questionText": "What primary shape profile does Paradox exhibit?",
      "options": [
        "Hexagon",
        "Round",
        "Oval",
        "Rectangle"
      ],
      "correctAnswer": "Hexagon",
      "frameId": "paradox",
      "silhouetteOnly": true
    },
    {
      "id": "paradox_color",
      "type": "colour_recognition",
      "questionText": "Identify this matte earthy green color option of Paradox.",
      "options": [
        "Matte Olive",
        "Matte Gold",
        "Matte Anthracite",
        "Matte Black"
      ],
      "correctAnswer": "Matte Olive",
      "frameId": "paradox",
      "colorName": "Matte Olive"
    }
  ],
  "runway": [
    {
      "id": "runway_name",
      "type": "name_the_frame",
      "questionText": "Identify this speedway-inspired titanium aviator with athletic curves.",
      "options": [
        "Runway",
        "Split",
        "Crossfire",
        "Highline"
      ],
      "correctAnswer": "Runway",
      "frameId": "runway"
    },
    {
      "id": "runway_shape",
      "type": "shape_identification",
      "questionText": "What shape are the Runway frames?",
      "options": [
        "Aviator",
        "Wayfarer",
        "Round",
        "Oval"
      ],
      "correctAnswer": "Aviator",
      "frameId": "runway",
      "silhouetteOnly": true
    },
    {
      "id": "runway_color",
      "type": "colour_recognition",
      "questionText": "What dark metallic shade is shown on this Runway frame?",
      "options": [
        "Matte Gunmetal",
        "Black",
        "Gold",
        "Silver"
      ],
      "correctAnswer": "Matte Gunmetal",
      "frameId": "runway",
      "colorName": "Matte Gunmetal"
    }
  ],
  "sheer": [
    {
      "id": "sheer_name",
      "type": "name_the_frame",
      "questionText": "Identify this gossamer-light round wire frame in titanium.",
      "options": [
        "Sheer",
        "Baseline",
        "Vondel",
        "Downtime"
      ],
      "correctAnswer": "Sheer",
      "frameId": "sheer"
    },
    {
      "id": "sheer_shape",
      "type": "shape_identification",
      "questionText": "What is the shape profile of Sheer wire frames?",
      "options": [
        "Round",
        "Oval",
        "Rectangle",
        "Hexagon"
      ],
      "correctAnswer": "Round",
      "frameId": "sheer",
      "silhouetteOnly": true
    },
    {
      "id": "sheer_color",
      "type": "colour_recognition",
      "questionText": "Identify this lightweight color option on Sheer.",
      "options": [
        "Silver",
        "Gold",
        "Matte Black",
        "Silver 2"
      ],
      "correctAnswer": "Silver",
      "frameId": "sheer",
      "colorName": "Silver"
    }
  ],
  "slowburn": [
    {
      "id": "slowburn_name",
      "type": "name_the_frame",
      "questionText": "Identify this rectangular frame blending metallic rims and polished acetate details.",
      "options": [
        "Slowburn",
        "Borderline",
        "Vapour",
        "Fulton"
      ],
      "correctAnswer": "Slowburn",
      "frameId": "slowburn"
    },
    {
      "id": "slowburn_shape",
      "type": "shape_identification",
      "questionText": "What is the shape profile of Slowburn?",
      "options": [
        "Rectangle",
        "Round",
        "Oval",
        "Hexagon"
      ],
      "correctAnswer": "Rectangle",
      "frameId": "slowburn",
      "silhouetteOnly": true
    },
    {
      "id": "slowburn_color",
      "type": "colour_recognition",
      "questionText": "What frame color option of Slowburn is shown here?",
      "options": [
        "Olive",
        "Gold",
        "Gunmetal",
        "Bronze"
      ],
      "correctAnswer": "Olive",
      "frameId": "slowburn",
      "colorName": "Olive"
    }
  ],
  "velo": [
    {
      "id": "velo_name",
      "type": "name_the_frame",
      "questionText": "Identify this low-profile, wrapping acetate frame with athletic energy.",
      "options": [
        "Velo",
        "Strand",
        "Slowburn",
        "Downtime"
      ],
      "correctAnswer": "Velo",
      "frameId": "velo"
    },
    {
      "id": "velo_shape",
      "type": "shape_identification",
      "questionText": "What geometric shape profile does Velo exhibit?",
      "options": [
        "Rectangle",
        "Round",
        "Oval",
        "Aviator"
      ],
      "correctAnswer": "Rectangle",
      "frameId": "velo",
      "silhouetteOnly": true
    },
    {
      "id": "velo_color",
      "type": "colour_recognition",
      "questionText": "Identify this striking blue acetate shade of the Velo frame.",
      "options": [
        "Cobalt",
        "Ember",
        "Black Shell",
        "Matte Black"
      ],
      "correctAnswer": "Cobalt",
      "frameId": "velo",
      "colorName": "Cobalt"
    }
  ]
};

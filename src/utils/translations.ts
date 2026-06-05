import type { QuizQuestion } from '../types';
import { FRAMES } from '../data/frames';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी (Hindi)' },
  { code: 'mr', label: 'मराठी (Marathi)' }
] as const;

export type LanguageCode = 'en' | 'hi' | 'mr';

const SHAPE_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'Wayfarer': {
    en: 'Wayfarer',
    hi: 'वेफ़रर (Wayfarer)',
    mr: 'वेफेरर (Wayfarer)'
  },
  'Round': {
    en: 'Round',
    hi: 'गोल (Round)',
    mr: 'गोलाकार (Round)'
  },
  'Oval': {
    en: 'Oval',
    hi: 'अंडाकार (Oval)',
    mr: 'लंबगोळ (Oval)'
  },
  'Rectangle': {
    en: 'Rectangle',
    hi: 'आयत (Rectangle)',
    mr: 'आयताकृती (Rectangle)'
  },
  'Aviator': {
    en: 'Aviator',
    hi: 'एविएटर (Aviator)',
    mr: 'एव्हिएटर (Aviator)'
  },
  'Hexagon': {
    en: 'Hexagon',
    hi: 'षटकोण (Hexagon)',
    mr: 'षटकोनी (Hexagon)'
  }
};

const MATERIAL_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'Both': {
    en: 'Both',
    hi: 'दोनों (एसीटेट और मेटल)',
    mr: 'दोन्ही (एसीटेट आणि मेटल)'
  },
  'Acetate': {
    en: 'Acetate',
    hi: 'एसीटेट (Acetate)',
    mr: 'एसीटेट (Acetate)'
  },
  'Titanium': {
    en: 'Titanium',
    hi: 'टाइटेनियम (Titanium)',
    mr: 'टायटॅनियम (Titanium)'
  }
};

const COLOR_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'Black Core': { en: 'Black Core', hi: 'ब्लैक कोर (Black Core)', mr: 'ब्लॅक कोर (Black Core)' },
  'Black Shell': { en: 'Black Shell', hi: 'ब्लैक शेल (Black Shell)', mr: 'ब्लॅक शेल (Black Shell)' },
  'Champagne': { en: 'Champagne', hi: 'शैंपेन (Champagne)', mr: 'शॅम्पेन (Champagne)' },
  'Havana': { en: 'Havana', hi: 'हवाना (Havana)', mr: 'हव्हाना (Havana)' },
  'Matte Black': { en: 'Matte Black', hi: 'मैट ब्लैक (Matte Black)', mr: 'मॅट ब्लॅक (Matte Black)' },
  'Black': { en: 'Black', hi: 'ब्लैक (Black)', mr: 'ब्लॅक (Black)' },
  'Teal': { en: 'Teal', hi: 'टील (Teal)', mr: 'टील (Teal)' },
  'Blackx': { en: 'Black (Blackx)', hi: 'ब्लैक (Blackx)', mr: 'ब्लॅक (Blackx)' },
  'Olive': { en: 'Olive', hi: 'ऑलिव (Olive)', mr: 'ऑलिव्ह (Olive)' },
  'Wine': { en: 'Wine', hi: 'वाइन (Wine)', mr: 'वाइन (Wine)' },
  'Blackshellx': { en: 'Black Shell (Blackshellx)', hi: 'ब्लैक शेल (Blackshellx)', mr: 'ब्लॅक शेल (Blackshellx)' },
  'Emerald': { en: 'Emerald', hi: 'एमराल्ड (Emerald)', mr: 'एमराल्ड (Emerald)' },
  'Glass': { en: 'Glass', hi: 'ग्लास (Glass)', mr: 'ग्लास (Glass)' },
  'Rust': { en: 'Rust', hi: 'रस्ट (Rust)', mr: 'रस्ट (Rust)' },
  'Gold': { en: 'Gold', hi: 'गोल्ड (Gold)', mr: 'गोल्ड (Gold)' },
  'Matte Silver': { en: 'Matte Silver', hi: 'मैट सिल्वर (Matte Silver)', mr: 'मॅट सिल्व्हर (Matte Silver)' },
  'Smoke': { en: 'Smoke', hi: 'स्मोक (Smoke)', mr: 'स्मोक (Smoke)' },
  'Navy': { en: 'Navy', hi: 'नेवी (Navy)', mr: 'नेव्ही (Navy)' },
  'Sage': { en: 'Sage', hi: 'सेज (Sage)', mr: 'सेज (Sage)' },
  'Concrete': { en: 'Concrete', hi: 'कंक्रीट (Concrete)', mr: 'काँक्रीट (Concrete)' },
  'Anthracite': { en: 'Anthracite', hi: 'एंथ्रेसाइट (Anthracite)', mr: 'अँथ्रेसाईट (Anthracite)' },
  'Silver': { en: 'Silver', hi: 'सिल्वर (Silver)', mr: 'सिल्व्हर (Silver)' },
  'Mattesmoke': { en: 'Matte Smoke (Mattesmoke)', hi: 'मैट स्मोक (Mattesmoke)', mr: 'मॅट स्मोक (Mattesmoke)' },
  'Gunmetal': { en: 'Gunmetal', hi: 'गनमेटल (Gunmetal)', mr: 'गनमेटल (Gunmetal)' },
  'Bronze': { en: 'Bronze', hi: 'ब्रॉन्ज (Bronze)', mr: 'ब्रॉन्झ (Bronze)' },
  'Matte Anthracite': { en: 'Matte Anthracite', hi: 'मैट एंथ्रेसाइट (Matte Anthracite)', mr: 'मॅट अँथ्रेसाईट (Matte Anthracite)' },
  'Matte Olive': { en: 'Matte Olive', hi: 'मैट ऑलिव (Matte Olive)', mr: 'मॅट ऑलिव्ह (Matte Olive)' },
  'Matte Gunmetal': { en: 'Matte Gunmetal', hi: 'मैट गनमेटल (Matte Gunmetal)', mr: 'मॅट गनमेटल (Matte Gunmetal)' },
  'Black B': { en: 'Black B', hi: 'ब्लैक बी (Black B)', mr: 'ब्लॅक बी (Black B)' },
  'Black P': { en: 'Black P', hi: 'ब्लैक पी (Black P)', mr: 'ब्लॅक पी (Black P)' },
  'Cobalt': { en: 'Cobalt', hi: 'कोबाल्ट (Cobalt)', mr: 'कोबाल्ट (Cobalt)' },
  'Ember': { en: 'Ember', hi: 'एम्बर (Ember)', mr: 'एम्बर (Ember)' }
};

const LENS_COLOR_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'Blue / purple tint': { en: 'Blue / purple tint', hi: 'नीला / बैंगनी टिंट', mr: 'निळा / जांभळा टिंट' },
  'Black / dark smoke': { en: 'Black / dark smoke', hi: 'काला / गहरा स्मोक', mr: 'काळा / गडद स्मोक' },
  'Orange / peach lens': { en: 'Orange / peach lens', hi: 'नारंगी / पीच लेंस', mr: 'नारिंगी / पीच लेन्स' },
  'Blue gradient': { en: 'Blue gradient', hi: 'नीला ग्रेडिएंट', mr: 'निळा ग्रेडियंट' },
  'Yellow lens': { en: 'Yellow lens', hi: 'पीला लेंस', mr: 'पिवळी लेन्स' },
  'Black / smoke lens': { en: 'Black / smoke lens', hi: 'काला / स्मोक लेंस', mr: 'काळा / स्मोक लेन्स' },
  'Orange / coral lens': { en: 'Orange / coral lens', hi: 'नारंगी / कोरल लेंस', mr: 'नारिंगी / कोरल लेन्स' },
  'Brown gradient': { en: 'Brown gradient', hi: 'भूरा ग्रेडिएंट', mr: 'तपकिरी ग्रेडियंट' },
  'Green lens': { en: 'Green lens', hi: 'हरा लेंस', mr: 'हिरवी लेन्स' },
  'Blue lens': { en: 'Blue lens', hi: 'नीला लेंस', mr: 'निळी लेन्स' },
  'Black / dark smoke lens': { en: 'Black / dark smoke lens', hi: 'काला / गहरा स्मोक लेंस', mr: 'काळा / गडद स्मोक लेन्स' },
  'Rose / pink gradient': { en: 'Rose / pink gradient', hi: 'रोज / गुलाबी ग्रेडिएंट', mr: 'रोज / गुलाबी ग्रेडियंट' },
  'Yellow-green lens': { en: 'Yellow-green lens', hi: 'पीला-हरा लेंस', mr: 'पिवळसर-हिरवी लेन्स' },
  'Green / grey lens': { en: 'Green / grey lens', hi: 'हरा / ग्रे लेंस', mr: 'हिरवी / राखाडी लेन्स' },
  'Coral / orange lens': { en: 'Coral / orange lens', hi: 'कोरल / नारंगी लेंस', mr: 'कोरल / नारिंगी लेन्स' },
  'Orange / brown gradient': { en: 'Orange / brown gradient', hi: 'नारंगी / भूरा ग्रेडिएंट', mr: 'नारिंगी / तपकिरी ग्रेडियंट' },
  'Yellow / green tint': { en: 'Yellow / green tint', hi: 'पीला / हरा टिंट', mr: 'पिवळा / हिरवा टिंट' },
  'Brown / rose gradient': { en: 'Brown / rose gradient', hi: 'भूरा / रोज ग्रेडिएंट', mr: 'तपकिरी / रोज ग्रेडियंट' },
  'Blue / grey lens': { en: 'Blue / grey lens', hi: 'नीला / ग्रे लेंस', mr: 'निळी / राखाडी लेन्स' },
  'Green / grey gradient': { en: 'Green / grey gradient', hi: 'हरा / ग्रे ग्रेडिएंट', mr: 'हिरवी / राखाडी ग्रेडियंट' },
  'Brown / orange gradient': { en: 'Brown / orange gradient', hi: 'भूरा / नारंगी ग्रेडिएंट', mr: 'तपकिरी / नारिंगी ग्रेडियंट' },
  'Orange / red gradient': { en: 'Orange / red gradient', hi: 'नारंगी / लाल ग्रेडिएंट', mr: 'नारिंगी / लाल ग्रेडियंट' },
  'Blue / purple lens': { en: 'Blue / purple lens', hi: 'नीला / बैंगनी लेंस', mr: 'निळी / जांभळी लेन्स' },
  'Olive / yellow-green lens': { en: 'Olive / yellow-green lens', hi: 'ऑलिव / पीला-हरा लेंस', mr: 'ऑलिव्ह / पिवळसर-हिरवी लेन्स' },
  'Purple / smoke lens': { en: 'Purple / smoke lens', hi: 'बैंगनी / स्मोक लेंस', mr: 'जांभळी / स्मोक लेन्स' },
  'Green / smoke lens': { en: 'Green / smoke lens', hi: 'हरा / स्मोक लेंस', mr: 'हिरवी / स्मोक लेन्स' },
  'Orange lens': { en: 'Orange lens', hi: 'नारंगी लेंस', mr: 'नारिंगी लेन्स' },
  'Blue / purple gradient': { en: 'Blue / purple gradient', hi: 'नीला / बैंगनी ग्रेडिएंट', mr: 'निळा / जांभळा ग्रेडियंट' },
  'Brown / rose gradient lens': { en: 'Brown / rose gradient lens', hi: 'भूरा / रोज ग्रेडिएंट लेंस', mr: 'तपकिरी / rose ग्रेडियंट लेन्स' },
  'Light blue / lavender lens': { en: 'Light blue / lavender lens', hi: 'हल्का नीला / लैवेंडर लेंस', mr: 'फिकट निळी / लॅव्हेंडर लेन्स' },
  'Green / olive gradient lens': { en: 'Green / olive gradient lens', hi: 'हरा / ऑलिव ग्रेडिएंट लेंस', mr: 'हिरवी / ऑलिव्ह ग्रेडियंट लेन्स' },
  'Green gradient lens': { en: 'Green gradient lens', hi: 'हरा ग्रेडिएंट लेंस', mr: 'हिरवी ग्रेडियंट लेन्स' },
  'Brown gradient lens': { en: 'Brown gradient lens', hi: 'भूरा ग्रेडिएंट लेंस', mr: 'तपकिरी ग्रेडियंट लेन्स' },
  'Brown / smoke lens': { en: 'Brown / smoke lens', hi: 'भूरा / स्मोक लेंस', mr: 'तपकिरी / स्मोक लेन्स' },
  'Blue / lavender lens': { en: 'Blue / lavender lens', hi: 'नीला / लैवेंडर लेंस', mr: 'निळी / लॅव्हेंडर लेन्स' },
  'Brown / orange gradient lens': { en: 'Brown / orange gradient lens', hi: 'भूरा / नारंगी ग्रेडिएंट लेंस', mr: 'तपकिरी / नारिंगी ग्रेडियंट लेन्स' },
  'Brown / smoke gradient lens': { en: 'Brown / smoke gradient lens', hi: 'भूरा / स्मोक ग्रेडिएंट लेंस', mr: 'तपकिरी / स्मोक ग्रेडियंट लेन्स' },
  'Pink / coral lens': { en: 'Pink / coral lens', hi: 'गुलाबी / कोरल लेंस', mr: 'गुलाबी / कोरल लेन्स' },
  'Purple / smoke gradient lens': { en: 'Purple / smoke gradient lens', hi: 'बैंगनी / स्मोक ग्रेडिएंट लेंस', mr: 'जांभळी / स्मोक ग्रेडियंट लेन्स' }
};

const CHARACTER_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'coastline': {
    en: 'Clean wayfarer energy. Versatile enough for anything.',
    hi: 'साफ वेफ़रर ऊर्जा। किसी भी चीज़ के लिए बहुमुखी।',
    mr: 'स्वच्छ वेफेरर ऊर्जा. कशासाठीही पुरेशी अष्टपैलू.'
  },
  'vondel': {
    en: "Soft panto-shaped frame with relaxed proportions, inspired by Amsterdam's Vondelpark.",
    hi: 'एम्सटर्डम के वोंडेलपार्क से प्रेरित, आरामदायक अनुपात के साथ नरम पेंटो-आकार का फ्रेम।',
    mr: 'अ‍ॅमस्टरडॅमच्या वोंडेलपार्कपासून प्रेरित, आरामशीर प्रमाणांसह मऊ पँटो-आकाराचा फ्रेम.'
  },
  'strand': {
    en: "Balancing softness and structure, inspired by New York's Strand Bookstore.",
    hi: 'न्यूयॉर्क के स्ट्रैंड बुकस्टोर से प्रेरित, कोमलता और संरचना को संतुलित करना।',
    mr: 'न्यूयॉर्कच्या स्ट्रँड बुकस्टोरपासून प्रेरित, कोमलता आणि संरचनेचे संतुलन राखणारा फ्रेम.'
  },
  'borderline': {
    en: 'A versatile frame designed to be full across the top and subtly flattened at the sides.',
    hi: 'एक बहुमुखी फ्रेम जिसे ऊपर की तरफ से भरा हुआ और किनारों पर थोड़ा चपटा डिज़ाइन किया गया है।',
    mr: 'एक अष्टपैलू फ्रेम जो वरून पूर्ण आणि बाजूंनी किंचित चपटा डिझाइन केला आहे.'
  },
  'split': {
    en: 'A ultra-lightweight Japanese titanium aviator frame featuring a striking split-bridge design.',
    hi: 'एक बेहद हल्का जापानी टाइटेनियम एविएटर फ्रेम जिसमें एक आकर्षक स्प्लिट-ब्रिज डिज़ाइन है।',
    mr: 'एक अत्यंत हलका जपानी टायटॅनियम एव्हिएटर फ्रेम ज्यामध्ये आकर्षक स्प्लिट-ब्रिज डिझाइन आहे.'
  },
  'runway': {
    en: 'Unapologetic, solid, and authoritative chunky acetate frame.',
    hi: 'दृढ़, ठोस और आधिकारिक चंकी एसीटेट फ्रेम।',
    mr: 'खंबीर, मजबूत आणि अधिकृत चंकी एसीटेट फ्रेम.'
  },
  'undertone': {
    en: 'A bold, grounded, and sturdy frame designed to provide a minimalist aesthetic with depth.',
    hi: 'एक बोल्ड, स्थिर और मजबूत फ्रेम जिसे गहराई के साथ एक न्यूनतम सौंदर्य प्रदान करने के लिए डिज़ाइन किया गया है।',
    mr: 'एक धाडसी, स्थिर आणि मजबूत फ्रेम जो खोलीसह किमान सौंदर्य प्रदान करण्यासाठी डिझाइन केला आहे.'
  },
  'downtime': {
    en: 'A fuller-shaped frame designed for a quiet presence and relaxed afternoon vibes.',
    hi: 'शांत उपस्थिति और दोपहर के आरामदायक पलों के लिए डिज़ाइन किया गया एक भरा-पूरा फ्रेम।',
    mr: 'शांत उपस्थिती आणि दुपारच्या आरामशीर क्षणांसाठी डिझाइन केलेला एक मोठा आकाराचा फ्रेम.'
  },
  'portola': {
    en: 'An oval-shaped frame made from premium Italian Mazzucchelli acetate, exuding effortless coastal style.',
    hi: 'प्रीमियम इतालवी माज़ुचेली एसीटेट से बना एक अंडाकार फ्रेम, जो सहज तटीय शैली को दर्शाता है।',
    mr: 'प्रीमियम इटालियन माझुचेली एसीटेटपासून बनवलेला अंडाकृती फ्रेम, जो सहज किनारी शैली दर्शवतो.'
  },
  'prysm': {
    en: 'A seamless blend of acetate and metal featuring a balanced hexagonal-round shape.',
    hi: 'एसीटेट और धातु का एक सहज मिश्रण जिसमें एक संतुलित षटकोणीय-गोल आकार है।',
    mr: 'एसीटेट आणि धातूचे एक अखंड मिश्रण ज्यामध्ये संतुलित षटकोनी-गोलाकार आकार आहे.'
  },
  'overture': {
    en: 'A sharp, rectangular frame crafted from Italian Mazzucchelli acetate with strong geometric edges.',
    hi: 'मजबूत ज्यामितीय किनारों के साथ इतालवी माज़ुचेली एसीटेट से तैयार किया गया एक तीखा, आयताकार फ्रेम।',
    mr: 'मजबूत भौमितिक कडांसह इटालियन माझुचेली एसीटेटपासून बनवलेला एक तीक्ष्ण, आयताकृती फ्रेम.'
  },
  'highline': {
    en: 'Lightweight, oval-shaped Japanese titanium frame built for ultimate strength and comfort.',
    hi: 'अंतिम ताकत और आराम के लिए बनाया गया हल्का, अंडाकार जापानी टाइटेनियम फ्रेम।',
    mr: 'उत्कृष्ट ताकद और आरामासाठी बनवलेला हलका, अंडाकृती जपानी टायटॅनियम फ्रेम.'
  },
  'wireframe': {
    en: 'Minimalist rectangular metallic-rimmed titanium frame defining structural simplicity.',
    hi: 'संरचनात्मक सादगी को परिभाषित करने वाला न्यूनतम आयताकार धातु-किनारे वाला टाइटेनियम फ्रेम।',
    mr: 'रचनात्मक साधेपणा परिभाषित करणारा किमान आयताकृती धातू-किनाऱ्याचा टायटॅनियम फ्रेम.'
  },
  'crossfire': {
    en: 'Bold double-bridge metal aviator featuring structural reinforcement and lightweight comfort.',
    hi: 'संरचनात्मक सुदृढ़ीकरण और हल्के आराम की विशेषता वाला बोल्ड डबल-ब्रिज मेटल एविएटर।',
    mr: 'रचनात्मक मजबुतीकरण आणि हलक्या वजनाचा आराम देणारा बोल्ड डबल-ब्रिज मेटल एव्हिएटर.'
  },
  'strangelove': {
    en: 'Delicate oval frame suspended in Japanese titanium, projecting structural lightness.',
    hi: 'जापानी टाइटेनियम में निलंबित नाजुक अंडाकार फ्रेम, जो संरचनात्मक हल्केपन को दर्शाता है।',
    mr: 'जपानी टायटॅनियममध्ये लटकलेला नाजूक अंडाकृती फ्रेम, जो रचनात्मक हलकेपणा दर्शवतो.'
  },
  'paradox': {
    en: 'Uncompromised geometric expression. Minimalist hexagonal rim detailing.',
    hi: 'बिना किसी समझौते के ज्यामितीय अभिव्यक्ति। न्यूनतम षटकोणीय रिम विवरण।',
    mr: 'बिनतारी भौमितिक अभिव्यक्ती. किमान षटकोनी रिम तपशील.'
  },
  'fulton': {
    en: 'A balanced contradiction. Subtle geometric lines merging with flat acetate borders.',
    hi: 'एक संतुलित विरोधाभास। सपाट एसीटेट सीमाओं के साथ विलीन होने वाली सूक्ष्म ज्यामितीय रेखाएं।',
    mr: 'एक संतुलित विरोधाभास. सपाट एसीटेट सीमांसह विलीन होणाऱ्या सूक्ष्म भौमितिक रेषा.'
  },
  'sheer': {
    en: 'Speedway heritage. A thin titanium frame styled with athletic curves.',
    hi: 'स्पीडवे विरासत। एथलेटिक कर्व्स के साथ डिज़ाइन किया गया एक पतला टाइटेनियम फ्रेम।',
    mr: 'स्पीडवे वारसा. अ‍ॅथलेटिक कर्व्हसह डिझाइन केलेला एक पातळ टायटॅनियम फ्रेम.'
  },
  'vapour': {
    en: 'A gossamer-light presence. Round wire detailing that feels completely weightless.',
    hi: 'एकदम हल्का एहसास। गोल तार का विवरण जो पूरी तरह से भारहीन महसूस होता है।',
    mr: 'अत्यंत हलकी उपस्थिती. गोल वायरचे तपशील जे पूर्णपणे वजनहीन वाटते.'
  },
  'slowburn': {
    en: 'A slow-releasing design assertion. Thin metallic rims with polished acetate details.',
    hi: 'एक धीमा-रिलीज़ डिज़ाइन दावा। पॉलिश किए गए एसीटेट विवरण के साथ पतली धातु की रिम्स।',
    mr: 'एक हळूहळू समोर येणारी डिझाइन. पॉलिश केलेल्या एसीटेट तपशीलांसह पातळ धातूच्या रिम्स.'
  },
  'velo': {
    en: 'Narrow, wrapping rectangle sunglasses built for sleek athletic style.',
    hi: 'सलीक एथलेटिक शैली के लिए बनाए गए संकीर्ण, रैपिंग आयताकार सनग्लासेस।',
    mr: 'स्लीक अ‍ॅथलेटिक शैलीसाठी बनवलेले अरुंद, रॅपिंग आयताकृती सनग्लासेस.'
  }
};

export const UI_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  quizRegistration: {
    en: 'Quiz Registration',
    hi: 'क्विज़ पंजीकरण',
    mr: 'क्विझ नोंदणी'
  },
  fullName: {
    en: 'Your Full Name',
    hi: 'आपका पूरा नाम',
    mr: 'तुमचे पूर्ण नाव'
  },
  selectLanguage: {
    en: 'Your Language Preference',
    hi: 'आपकी भाषा प्राथमिकता',
    mr: 'तुमची भाषा निवड'
  },
  startQuiz: {
    en: 'Start Quiz',
    hi: 'क्विज़ शुरू करें',
    mr: 'क्विझ सुरू करा'
  },
  cancel: {
    en: 'Cancel',
    hi: 'रद्द करें',
    mr: 'रद्द करा'
  },
  questionProgress: {
    en: 'Question',
    hi: 'प्रश्न',
    mr: 'प्रश्न'
  },
  of: {
    en: 'of',
    hi: 'में से',
    mr: 'पैकी'
  },
  score: {
    en: 'Score',
    hi: 'स्कोर',
    mr: 'गुण'
  },
  timesUp: {
    en: "Time's Up!",
    hi: 'समय समाप्त!',
    mr: 'वेळ संपली!'
  },
  timesUpSub: {
    en: 'You ran out of time for this question.',
    hi: 'इस प्रश्न के लिए आपका समय समाप्त हो गया है।',
    mr: 'या प्रश्नासाठी तुमची वेळ संपली आहे.'
  },
  correct: {
    en: 'Correct! Well done.',
    hi: 'सही! बहुत बढ़िया।',
    mr: 'बरोबर! खूप छान.'
  },
  incorrect: {
    en: 'Incorrect. Try another option!',
    hi: 'गलत। दूसरा विकल्प आजमाएं!',
    mr: 'चुकीचे. दुसरा पर्याय निवडा!'
  },
  continue: {
    en: 'Continue',
    hi: 'आगे बढ़ें',
    mr: 'पुढे जा'
  },
  tryAgain: {
    en: 'Try Again',
    hi: 'फिर प्रयास करें',
    mr: 'पुन्हा प्रयत्न करा'
  },
  showResults: {
    en: 'Show Results',
    hi: 'परिणाम देखें',
    mr: 'निकाल पहा'
  },
  quizCompleted: {
    en: 'Quiz Completed!',
    hi: 'क्विज़ पूरा हुआ!',
    mr: 'क्विझ पूर्ण झाली!'
  },
  congratulations: {
    en: 'Congratulations',
    hi: 'बधाई हो',
    mr: 'अभिनंदन'
  },
  niceTry: {
    en: 'Nice Try',
    hi: 'अच्छा प्रयास',
    mr: 'चांगला प्रयत्न'
  },
  youScored: {
    en: 'You scored',
    hi: 'आपने स्कोर किया',
    mr: 'तुम्हाला मिळाले'
  },
  accuracy: {
    en: 'Accuracy',
    hi: 'सटीकता',
    mr: 'अचूकता'
  },
  practiceAgain: {
    en: 'Practice Again',
    hi: 'फिर से अभ्यास करें',
    mr: 'पुन्हा सराव करा'
  },
  exitToGallery: {
    en: 'Exit to Gallery',
    hi: 'गैलरी पर वापस जाएं',
    mr: 'गॅलरीमध्ये जा'
  },
  tryMixedQuiz: {
    en: 'Try Mixed Quiz',
    hi: 'मिश्रित क्विज़ खेलें',
    mr: 'मिश्रित क्विझ खेळा'
  },
  enterNamePrompt: {
    en: 'Enter your name to begin the quiz.',
    hi: 'क्विज़ शुरू करने के लिए अपना नाम दर्ज करें।',
    mr: 'क्विझ सुरू करण्यासाठी तुमचे नाव प्रविष्ट करा.'
  },
  enterNameMixedPrompt: {
    en: 'Enter your name to begin the General Mixed Quiz.',
    hi: 'सामान्य मिश्रित क्विज़ शुरू करने के लिए अपना नाम दर्ज करें।',
    mr: 'सामान्य मिश्रित क्विझ सुरू करण्यासाठी तुमचे नाव प्रविष्ट करा.'
  },
  enterNamePracticePrompt: {
    en: 'Enter your name to begin the practice quiz for this frame.',
    hi: 'इस फ्रेम के लिए अभ्यास क्विज़ शुरू करने के लिए अपना नाम दर्ज करें।',
    mr: 'या फ्रेमसाठी सराव क्विझ सुरू करण्यासाठी तुमचे नाव प्रविष्ट करा.'
  },
  resultsMixedSubtitle: {
    en: 'You finished the General Mixed Quiz. You successfully recognized and recalled the properties of Unscene Eyewear frames.',
    hi: 'आपने सामान्य मिश्रित क्विज़ पूरा कर लिया है। आपने अनसीन आईवियर फ्रेम के गुणों को सफलतापूर्वक पहचाना और याद किया।',
    mr: 'तुम्ही सामान्य मिश्रित क्विझ पूर्ण केली आहे. तुम्ही अनसीन आयवेअर फ्रेमचे गुणधर्म यशस्वीरित्या ओळखले आणि आठवले।'
  },
  resultsPracticeSubtitle: {
    en: 'Nice work! You practiced identifying details for the frame model.',
    hi: 'अच्छा काम! आपने फ्रेम मॉडल के विवरणों की पहचान करने का अभ्यास किया।',
    mr: 'छान काम! तुम्ही फ्रेम मॉडेलचे तपशील ओळखण्याचा सराव केला.'
  }
};

// Main helper to translate question structures on the fly
export function translateQuestion(question: QuizQuestion, lang: LanguageCode): QuizQuestion {
  if (lang === 'en') {
    return question;
  }

  const frameObj = FRAMES.find(f => f.id === question.frameId);
  const frameName = frameObj?.name || 'Frame';

  let questionText = question.questionText;
  let options = [...question.options];
  let correctAnswer = question.correctAnswer;

  // Translate Question Text & Options based on Type
  switch (question.type) {
    case 'name_the_frame':
      if (lang === 'hi') questionText = 'इसके अनूठे डिज़ाइन से इस अनसीन (Unscene) फ्रेम मॉडल की पहचान करें।';
      else if (lang === 'mr') questionText = 'याच्या वेगळ्या डिझाइनवरून हा अनसीन (Unscene) फ्रेम मॉडेल ओळखा.';
      break;

    case 'shape_identification':
      if (lang === 'hi') questionText = `${frameName} फ्रेम का सिग्नेचर शेप प्रोफाइल क्या है?`;
      else if (lang === 'mr') questionText = `${frameName} फ्रेमचे सिग्नेचर शेप प्रोफाइल काय है?`;

      // Translate choices
      options = options.map(opt => SHAPE_TRANSLATIONS[opt]?.[lang] || opt);
      correctAnswer = SHAPE_TRANSLATIONS[correctAnswer]?.[lang] || correctAnswer;
      break;

    case 'material_match':
      if (lang === 'hi') questionText = `${frameName} फ्रेम मुख्य रूप से किस सामग्री से बनाई गई है?`;
      else if (lang === 'mr') questionText = `${frameName} फ्रेम मुख्यत्वे कोणत्या साहित्यापासून बनवली आहे?`;

      // Translate choices
      options = options.map(opt => MATERIAL_TRANSLATIONS[opt]?.[lang] || opt);
      correctAnswer = MATERIAL_TRANSLATIONS[correctAnswer]?.[lang] || correctAnswer;
      break;

    case 'collection_recall':
      // Extract original description if matches standard format
      const descMatch = question.questionText.match(/"([^"]+)"/);
      const originalDesc = descMatch ? descMatch[1] : '';
      const translatedDesc = question.frameId ? (CHARACTER_TRANSLATIONS[question.frameId]?.[lang] || originalDesc) : originalDesc;

      if (lang === 'hi') questionText = `कौन सा फ्रेम इस विवरण से मेल खाता है: "${translatedDesc}"?`;
      else if (lang === 'mr') questionText = `कोणता फ्रेम या वर्णनाशी जुळतो: "${translatedDesc}"?`;
      break;

    case 'price_match':
      const isSun = question.questionText.toLowerCase().includes('sunglasses') || question.questionText.toLowerCase().includes('(sun)');
      if (isSun) {
        if (lang === 'hi') questionText = `${frameName} सनग्लासेस (SUN) की कीमत क्या है?`;
        else if (lang === 'mr') questionText = `${frameName} सनग्लासेस (SUN) ची किंमत काय आहे?`;
      } else {
        if (lang === 'hi') questionText = `${frameName} ऑप्टिकल (RX) की कीमत क्या है?`;
        else if (lang === 'mr') questionText = `${frameName} ऑप्टिकल (RX) ची किंमत काय आहे?`;
      }
      break;

    case 'colour_recognition':
      if (lang === 'hi') questionText = `यहाँ दिखाया गया ${frameName} का रंग कौन सा है?`;
      else if (lang === 'mr') questionText = `येथे दाखवलेला ${frameName} का रंग कोणता आहे?`;

      // Translate choices
      options = options.map(opt => COLOR_TRANSLATIONS[opt]?.[lang] || opt);
      correctAnswer = COLOR_TRANSLATIONS[correctAnswer]?.[lang] || correctAnswer;
      break;

    case 'lens_color_match':
      const originalColor = question.colorName || 'Black Core';
      const translatedColor = COLOR_TRANSLATIONS[originalColor]?.[lang] || originalColor;

      if (lang === 'hi') questionText = `${translatedColor} रंग के ${frameName} में किस रंग का लेंस है?`;
      else if (lang === 'mr') questionText = `${translatedColor} रंगाच्या ${frameName} मध्ये कोणत्या रंगाची लेन्स आहे?`;

      // Translate choices
      options = options.map(opt => LENS_COLOR_TRANSLATIONS[opt]?.[lang] || opt);
      correctAnswer = LENS_COLOR_TRANSLATIONS[correctAnswer]?.[lang] || correctAnswer;
      break;

    case 'visual_choice':
      if (lang === 'hi') questionText = `इनमें से कौन सा फ्रेम ${frameName} है?`;
      else if (lang === 'mr') questionText = `यापैकी कोणता फ्रेम ${frameName} आहे?`;
      break;

    default:
      break;
  }

  return {
    ...question,
    questionText,
    options,
    correctAnswer
  };
}

export function translateUI(key: keyof typeof UI_TRANSLATIONS, lang: LanguageCode): string {
  return UI_TRANSLATIONS[key]?.[lang] || UI_TRANSLATIONS[key]?.['en'] || key;
}

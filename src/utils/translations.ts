import type { QuizQuestion } from '../types';
import { FRAMES } from '../data/frames';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी (Hindi)' }
] as const;

export type LanguageCode = 'en' | 'hi';

const SHAPE_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'Wayfarer': {
    en: 'Wayfarer',
    hi: 'वेफ़रर (Wayfarer)'
  },
  'Round': {
    en: 'Round',
    hi: 'गोल (Round)'
  },
  'Oval': {
    en: 'Oval',
    hi: 'अंडाकार (Oval)'
  },
  'Rectangle': {
    en: 'Rectangle',
    hi: 'आयत (Rectangle)'
  },
  'Aviator': {
    en: 'Aviator',
    hi: 'एविएटर (Aviator)'
  },
  'Hexagon': {
    en: 'Hexagon',
    hi: 'षटकोण (Hexagon)'
  }
};

const MATERIAL_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'Both': {
    en: 'Both',
    hi: 'दोनों (एसीटेट और मेटल)'
  },
  'Acetate': {
    en: 'Acetate',
    hi: 'एसीटेट (Acetate)'
  },
  'Titanium': {
    en: 'Titanium',
    hi: 'टाइटेनियम (Titanium)'
  }
};

const COLOR_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'Black Core': { en: 'Black Core', hi: 'ब्लैक कोर (Black Core)' },
  'Black Shell': { en: 'Black Shell', hi: 'ब्लैक शेल (Black Shell)' },
  'Champagne': { en: 'Champagne', hi: 'शैंपेन (Champagne)' },
  'Havana': { en: 'Havana', hi: 'हवाना (Havana)' },
  'Matte Black': { en: 'Matte Black', hi: 'मैट ब्लैक (Matte Black)' },
  'Black': { en: 'Black', hi: 'ब्लैक (Black)' },
  'Teal': { en: 'Teal', hi: 'टील (Teal)' },
  'Blackx': { en: 'Black (Blackx)', hi: 'ब्लैक (Blackx)' },
  'Olive': { en: 'Olive', hi: 'ऑलिव (Olive)' },
  'Wine': { en: 'Wine', hi: 'वाइन (Wine)' },
  'Blackshellx': { en: 'Black Shell (Blackshellx)', hi: 'ब्लैक शेल (Blackshellx)' },
  'Emerald': { en: 'Emerald', hi: 'एमराल्ड (Emerald)' },
  'Glass': { en: 'Glass', hi: 'ग्लास (Glass)' },
  'Rust': { en: 'Rust', hi: 'रस्ट (Rust)' },
  'Gold': { en: 'Gold', hi: 'गोल्ड (Gold)' },
  'Matte Silver': { en: 'Matte Silver', hi: 'मैट सिल्वर (Matte Silver)' },
  'Smoke': { en: 'Smoke', hi: 'स्मोक (Smoke)' },
  'Navy': { en: 'Navy', hi: 'नेवी (Navy)' },
  'Sage': { en: 'Sage', hi: 'सेज (Sage)' },
  'Concrete': { en: 'Concrete', hi: 'कंक्रीट (Concrete)' },
  'Anthracite': { en: 'Anthracite', hi: 'एंथ्रेसाइट (Anthracite)' },
  'Silver': { en: 'Silver', hi: 'सिल्वर (Silver)' },
  'Mattesmoke': { en: 'Matte Smoke (Mattesmoke)', hi: 'मैट स्मोक (Mattesmoke)' },
  'Ether': { en: 'Ether', hi: 'ईथर (Ether)' },
  'Gunmetal': { en: 'Gunmetal', hi: 'गनमेटल (Gunmetal)' },
  'Bronze': { en: 'Bronze', hi: 'ब्रॉन्ज (Bronze)' },
  'Matte Anthracite': { en: 'Matte Anthracite', hi: 'मैट एंथ्रेसाइट (Matte Anthracite)' },
  'Matte Olive': { en: 'Matte Olive', hi: 'मैट ऑलिव (Matte Olive)' },
  'Matte Gunmetal': { en: 'Matte Gunmetal', hi: 'मैट गनमेटल (Matte Gunmetal)' },
  'Black B': { en: 'Black B', hi: 'ब्लैक बी (Black B)' },
  'Black P': { en: 'Black P', hi: 'ब्लैक पी (Black P)' },
  'Cobalt': { en: 'Cobalt', hi: 'कोबाल्ट (Cobalt)' },
  'Ember': { en: 'Ember', hi: 'एम्बर (Ember)' }
};

const LENS_COLOR_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'Blue / purple tint': { en: 'Blue / purple tint', hi: 'नीला / बैंगनी टिंट' },
  'Black / dark smoke': { en: 'Black / dark smoke', hi: 'काला / गहरा स्मोक' },
  'Orange / peach lens': { en: 'Orange / peach lens', hi: 'नारंगी / पीच लेंस' },
  'Blue gradient': { en: 'Blue gradient', hi: 'नीला ग्रेडिएंट' },
  'Yellow lens': { en: 'Yellow lens', hi: 'पीला लेंस' },
  'Black / smoke lens': { en: 'Black / smoke lens', hi: 'काला / स्मोक लेंस' },
  'Orange / coral lens': { en: 'Orange / coral lens', hi: 'नारंगी / कोरल लेंस' },
  'Brown gradient': { en: 'Brown gradient', hi: 'भूरा ग्रेडिएंट' },
  'Green lens': { en: 'Green lens', hi: 'हरा लेंस' },
  'Blue lens': { en: 'Blue lens', hi: 'नीला लेंस' },
  'Light blue lens': { en: 'Light blue lens', hi: 'हल्का नीला लेंस' },
  'Black / dark smoke lens': { en: 'Black / dark smoke lens', hi: 'काला / गहरा स्मोक लेंस' },
  'Rose / pink gradient': { en: 'Rose / pink gradient', hi: 'रोज / गुलाबी ग्रेडिएंट' },
  'Yellow-green lens': { en: 'Yellow-green lens', hi: 'पीला-हरा लेंस' },
  'Green / grey lens': { en: 'Green / grey lens', hi: 'हरा / ग्रे लेंस' },
  'Coral / orange lens': { en: 'Coral / orange lens', hi: 'कोरल / नारंगी लेंस' },
  'Orange / brown gradient': { en: 'Orange / brown gradient', hi: 'नारंगी / भूरा ग्रेडिएंट' },
  'Yellow / green tint': { en: 'Yellow / green tint', hi: 'पीला / हरा टिंट' },
  'Brown / rose gradient': { en: 'Brown / rose gradient', hi: 'भूरा / रोज ग्रेडिएंट' },
  'Blue / grey lens': { en: 'Blue / grey lens', hi: 'नीला / ग्रे लेंस' },
  'Green / grey gradient': { en: 'Green / grey gradient', hi: 'हरा / ग्रे ग्रेडिएंट' },
  'Brown / orange gradient': { en: 'Brown / orange gradient', hi: 'भूरा / नारंगी ग्रेडिएंट' },
  'Orange / red gradient': { en: 'Orange / red gradient', hi: 'नारंगी / लाल ग्रेडिएंट' },
  'Blue / purple lens': { en: 'Blue / purple lens', hi: 'नीला / बैंगनी लेंस' },
  'Olive / yellow-green lens': { en: 'Olive / yellow-green lens', hi: 'ऑलिव / पीला-हरा लेंस' },
  'Purple / smoke lens': { en: 'Purple / smoke lens', hi: 'बैंगनी / स्मोक लेंस' },
  'Green / smoke lens': { en: 'Green / smoke lens', hi: 'हरा / स्मोक लेंस' },
  'Orange lens': { en: 'Orange lens', hi: 'नारंगी लेंस' },
  'Blue / purple gradient': { en: 'Blue / purple gradient', hi: 'नीला / बैंगनी ग्रेडिएंट' },
  'Brown / rose gradient lens': { en: 'Brown / rose gradient lens', hi: 'भूरा / रोज ग्रेडिएंट लेंस' },
  'Light blue / lavender lens': { en: 'Light blue / lavender lens', hi: 'हल्का नीला / लैवेंडर लेंस' },
  'Green / olive gradient lens': { en: 'Green / olive gradient lens', hi: 'हरा / ऑलिव ग्रेडिएंट लेंस' },
  'Green gradient lens': { en: 'Green gradient lens', hi: 'हरा ग्रेडिएंट लेंस' },
  'Brown gradient lens': { en: 'Brown gradient lens', hi: 'भूरा ग्रेडिएंट लेंस' },
  'Brown / smoke lens': { en: 'Brown / smoke lens', hi: 'भूरा / स्मोक लेंस' },
  'Blue / lavender lens': { en: 'Blue / lavender lens', hi: 'नीला / लैवेंडर लेंस' },
  'Brown / orange gradient lens': { en: 'Brown / orange gradient lens', hi: 'भूरा / नारंगी ग्रेडिएंट लेंस' },
  'Brown / smoke gradient lens': { en: 'Brown / smoke gradient lens', hi: 'भूरा / स्मोक ग्रेडिएंट लेंस' },
  'Pink / coral lens': { en: 'Pink / coral lens', hi: 'गुलाबी / कोरल लेंस' },
  'Purple / smoke gradient lens': { en: 'Purple / smoke gradient lens', hi: 'बैंगनी / स्मोक ग्रेडिएंट लेंस' }
};

const CHARACTER_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'coastline': {
    en: 'Clean wayfarer energy. Versatile enough for anything.',
    hi: 'साफ वेफ़रर ऊर्जा। किसी भी चीज़ के लिए बहुमुखी।'
  },
  'vondel': {
    en: "Soft panto-shaped frame with relaxed proportions, inspired by Amsterdam's Vondelpark.",
    hi: 'एम्सटर्डम के वोंडेलपार्क से प्रेरित, आरामदायक अनुपात के साथ नरम पेंटो-आकार का फ्रेम।'
  },
  'strand': {
    en: "Balancing softness and structure, inspired by New York's Strand Bookstore.",
    hi: 'न्यूयॉर्क के स्ट्रैंड बुकस्टोर से प्रेरित, कोमलता और संरचना को संतुलित करना।'
  },
  'borderline': {
    en: 'A versatile frame designed to be full across the top and subtly flattened at the sides.',
    hi: 'एक बहुमुखी फ्रेम जिसे ऊपर की तरफ से भरा हुआ और किनारों पर थोड़ा चपटा डिज़ाइन किया गया है।'
  },
  'split': {
    en: 'A ultra-lightweight Japanese titanium aviator frame featuring a striking split-bridge design.',
    hi: 'एक बेहद हल्का जापानी टाइटेनियम एविएटर फ्रेम जिसमें एक आकर्षक स्प्लिट-ब्रिज डिज़ाइन है।'
  },
  'runway': {
    en: 'Unapologetic, solid, and authoritative chunky acetate frame.',
    hi: 'दृढ़, ठोस और आधिकारिक चंकी एसीटेट फ्रेम।'
  },
  'undertone': {
    en: 'A bold, grounded, and sturdy frame designed to provide a minimalist aesthetic with depth.',
    hi: 'एक बोल्ड, स्थिर और मजबूत फ्रेम जिसे गहराई के साथ एक न्यूनतम सौंदर्य प्रदान करने के लिए डिज़ाइन किया गया है।'
  },
  'downtime': {
    en: 'A fuller-shaped frame designed for a quiet presence and relaxed afternoon vibes.',
    hi: 'शांत उपस्थिति और दोपहर के आरामदायक पलों के लिए डिज़ाइन किया गया एक भरा-पूरा फ्रेम।'
  },
  'portola': {
    en: 'An oval-shaped frame made from premium Italian Mazzucchelli acetate, exuding effortless coastal style.',
    hi: 'प्रीमियम इतालवी माज़ुचेली एसीटेट से बना एक अंडाकार फ्रेम, जो सहज तटीय शैली को दर्शाता है।'
  },
  'prysm': {
    en: 'A seamless blend of acetate and metal featuring a balanced hexagonal-round shape.',
    hi: 'एसीटेट और धातु का एक सहज मिश्रण जिसमें एक संतुलित षटकोणीय-गोल आकार है।'
  },
  'overture': {
    en: 'A sharp, rectangular frame crafted from Italian Mazzucchelli acetate with strong geometric edges.',
    hi: 'मजबूत ज्यामितीय किनारों के साथ इतालवी माज़ुचेली एसीटेट से तैयार किया गया एक तीखा, आयताकार फ्रेम।'
  },
  'highline': {
    en: 'Lightweight, oval-shaped Japanese titanium frame built for ultimate strength and comfort.',
    hi: 'अंतिम ताकत और आराम के लिए बनाया गया हल्का, अंडाकार जापानी टाइटेनियम फ्रेम।'
  },
  'wireframe': {
    en: 'Minimalist rectangular metallic-rimmed titanium frame defining structural simplicity.',
    hi: 'संरचनात्मक सादगी को परिभाषित करने वाला न्यूनतम आयताकार धातु-किनारे वाला टाइटेनियम फ्रेम।'
  },
  'crossfire': {
    en: 'Bold double-bridge metal aviator featuring structural reinforcement and lightweight comfort.',
    hi: 'संरचनात्मक सुदृढ़ीकरण और हल्के आराम की विशेषता वाला बोल्ड डबल-ब्रिज मेटल एविएटर।'
  },
  'strangelove': {
    en: 'Delicate oval frame suspended in Japanese titanium, projecting structural lightness.',
    hi: 'जापानी टाइटेनियम में निलंबित नाजुक अंडाकार फ्रेम, जो संरचनात्मक हल्केपन को दर्शाता है।'
  },
  'paradox': {
    en: 'Uncompromised geometric expression. Minimalist hexagonal rim detailing.',
    hi: 'बिना किसी समझौते के ज्यामितीय अभिव्यक्ति। न्यूनतम षटकोणीय रिम विवरण।'
  },
  'fulton': {
    en: 'A balanced contradiction. Subtle geometric lines merging with flat acetate borders.',
    hi: 'एक संतुलित विरोधाभास। सपाट एसीटेट सीमाओं के साथ विलीन होने वाली सूक्ष्म ज्यामितीय रेखाएं।'
  },
  'sheer': {
    en: 'Speedway heritage. A thin titanium frame styled with athletic curves.',
    hi: 'स्पीडवे विरासत। एथलेटिक कर्व्स के साथ डिज़ाइन किया गया एक पतला टाइटेनियम फ्रेम।'
  },
  'vapour': {
    en: 'A gossamer-light presence. Round wire detailing that feels completely weightless.',
    hi: 'एकदम हल्का एहसास। गोल तार का विवरण जो पूरी तरह से भारहीन महसूस होता है।'
  },
  'slowburn': {
    en: 'A slow-releasing design assertion. Thin metallic rims with polished acetate details.',
    hi: 'एक धीमा-रिलीज़ डिज़ाइन दावा। पॉलिश किए गए एसीटेट विवरण के साथ पतली धातु की रिम्स।'
  },
  'velo': {
    en: 'Narrow, wrapping rectangle sunglasses built for sleek athletic style.',
    hi: 'सलीक एथलेटिक शैली के लिए बनाए गए संकीर्ण, रैपिंग आयताकार सनग्लासेस।'
  }
};

export const UI_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  quizRegistration: {
    en: 'Quiz Registration',
    hi: 'क्विज़ पंजीकरण'
  },
  fullName: {
    en: 'Your Full Name',
    hi: 'आपका पूरा नाम'
  },
  selectLanguage: {
    en: 'Your Language Preference',
    hi: 'आपकी भाषा प्राथमिकता'
  },
  startQuiz: {
    en: 'Start Quiz',
    hi: 'क्विज़ शुरू करें'
  },
  cancel: {
    en: 'Cancel',
    hi: 'रद्द करें'
  },
  questionProgress: {
    en: 'Question',
    hi: 'प्रश्न'
  },
  of: {
    en: 'of',
    hi: 'में से'
  },
  score: {
    en: 'Score',
    hi: 'स्कोर'
  },
  timesUp: {
    en: "Time's Up!",
    hi: 'समय समाप्त!'
  },
  timesUpSub: {
    en: 'You ran out of time for this question.',
    hi: 'इस प्रश्न के लिए आपका समय समाप्त हो गया है।'
  },
  correct: {
    en: 'Correct! Well done.',
    hi: 'सही! बहुत बढ़िया।'
  },
  incorrect: {
    en: 'Incorrect. Try another option!',
    hi: 'गलत। दूसरा विकल्प आजमाएं!'
  },
  continue: {
    en: 'Continue',
    hi: 'आगे बढ़ें'
  },
  tryAgain: {
    en: 'Try Again',
    hi: 'फिर प्रयास करें'
  },
  showResults: {
    en: 'Show Results',
    hi: 'परिणाम देखें'
  },
  quizCompleted: {
    en: 'Quiz Completed!',
    hi: 'क्विज़ पूरा हुआ!'
  },
  congratulations: {
    en: 'Congratulations',
    hi: 'बधाई हो'
  },
  niceTry: {
    en: 'Nice Try',
    hi: 'अच्छा प्रयास'
  },
  youScored: {
    en: 'You scored',
    hi: 'आपने स्कोर किया'
  },
  accuracy: {
    en: 'Accuracy',
    hi: 'सटीकता'
  },
  practiceAgain: {
    en: 'Practice Again',
    hi: 'फिर से अभ्यास करें'
  },
  exitToGallery: {
    en: 'Exit to Gallery',
    hi: 'गैलरी पर वापस जाएं'
  },
  tryMixedQuiz: {
    en: 'Try Mixed Quiz',
    hi: 'मिश्रित क्विज़ खेलें'
  },
  enterNamePrompt: {
    en: 'Enter your name to begin the quiz.',
    hi: 'क्विज़ शुरू करने के लिए अपना नाम दर्ज करें।'
  },
  enterNameMixedPrompt: {
    en: 'Enter your name to begin the General Mixed Quiz.',
    hi: 'सामान्य मिश्रित क्विज़ शुरू करने के लिए अपना नाम दर्ज करें।'
  },
  enterNamePricePrompt: {
    en: 'Enter your name to begin the Pricing Quiz.',
    hi: 'मूल्य निर्धारण क्विज़ शुरू करने के लिए अपना नाम दर्ज करें।'
  },
  enterNamePracticePrompt: {
    en: 'Enter your name to begin the practice quiz for this frame.',
    hi: 'इस फ्रेम के लिए अभ्यास क्विज़ शुरू करने के लिए अपना नाम दर्ज करें।'
  },
  resultsMixedSubtitle: {
    en: 'You finished the General Mixed Quiz. You successfully recognized and recalled the properties of Unscene Eyewear frames.',
    hi: 'आपने सामान्य मिश्रित क्विज़ पूरा कर लिया है। आपने अनसीन आईवियर फ्रेम के गुणों को सफलतापूर्वक पहचाना और याद किया।'
  },
  resultsPriceSubtitle: {
    en: 'You finished the Pricing Quiz. You successfully matched the pricing of Unscene Eyewear frames.',
    hi: 'आपने मूल्य निर्धारण क्विज़ पूरा कर लिया है। आपने अनसीन आईवियर फ्रेम की कीमतों का सफलतापूर्वक मिलान किया।'
  },
  resultsPracticeSubtitle: {
    en: 'Nice work! You practiced identifying details for the frame model.',
    hi: 'अच्छा काम! आपने फ्रेम मॉडल के विवरणों की पहचान करने का अभ्यास किया।'
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
      break;

    case 'shape_identification':
      if (lang === 'hi') questionText = `${frameName} फ्रेम का सिग्नेचर शेप प्रोफाइल क्या है?`;

      // Translate choices
      options = options.map(opt => SHAPE_TRANSLATIONS[opt]?.[lang] || opt);
      correctAnswer = SHAPE_TRANSLATIONS[correctAnswer]?.[lang] || correctAnswer;
      break;

    case 'material_match':
      if (lang === 'hi') questionText = `${frameName} फ्रेम मुख्य रूप से किस सामग्री से बनाई गई है?`;

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
      break;

    case 'price_match':
      const isSun = question.questionText.toLowerCase().includes('sunglasses') || question.questionText.toLowerCase().includes('(sun)');
      if (isSun) {
        if (lang === 'hi') questionText = `${frameName} सनग्लासेस (SUN) की कीमत क्या है?`;
      } else {
        if (lang === 'hi') questionText = `${frameName} ऑप्टिकल (RX) की कीमत क्या है?`;
      }
      break;

    case 'colour_recognition':
      if (lang === 'hi') questionText = `यहाँ दिखाया गया ${frameName} का रंग कौन सा है?`;

      // Translate choices
      options = options.map(opt => COLOR_TRANSLATIONS[opt]?.[lang] || opt);
      correctAnswer = COLOR_TRANSLATIONS[correctAnswer]?.[lang] || correctAnswer;
      break;

    case 'lens_color_match':
      const originalColor = question.colorName || 'Black Core';
      const translatedColor = COLOR_TRANSLATIONS[originalColor]?.[lang] || originalColor;

      if (lang === 'hi') questionText = `${translatedColor} रंग के ${frameName} में किस रंग का लेंस है?`;

      // Translate choices
      options = options.map(opt => LENS_COLOR_TRANSLATIONS[opt]?.[lang] || opt);
      correctAnswer = LENS_COLOR_TRANSLATIONS[correctAnswer]?.[lang] || correctAnswer;
      break;

    case 'visual_choice':
      if (lang === 'hi') questionText = `इनमें से कौन सा फ्रेम ${frameName} है?`;
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

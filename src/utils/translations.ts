import type { QuizQuestion } from '../types';
import { FRAMES } from '../data/frames';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी (Hindi)' },
  { code: 'mr', label: 'मराठी (Marathi)' },
  { code: 'gu', label: 'ગુજરાતી (Gujarati)' }
] as const;

export type LanguageCode = 'en' | 'hi' | 'mr' | 'gu';

const SHAPE_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'Wayfarer': {
    en: 'Wayfarer',
    hi: 'वेफ़रर (Wayfarer)',
    mr: 'वेफेरर (Wayfarer)',
    gu: 'વેફેરર (Wayfarer)'
  },
  'Round': {
    en: 'Round',
    hi: 'गोल (Round)',
    mr: 'गोलाकार (Round)',
    gu: 'ગોળ (Round)'
  },
  'Oval': {
    en: 'Oval',
    hi: 'अंडाकार (Oval)',
    mr: 'लंबगोळ (Oval)',
    gu: 'લંબગોળ (Oval)'
  },
  'Rectangle': {
    en: 'Rectangle',
    hi: 'आयत (Rectangle)',
    mr: 'आयताकृती (Rectangle)',
    gu: 'લંબચોરસ (Rectangle)'
  },
  'Aviator': {
    en: 'Aviator',
    hi: 'एविएटर (Aviator)',
    mr: 'एव्हिएटर (Aviator)',
    gu: 'એવિએટર (Aviator)'
  },
  'Hexagon': {
    en: 'Hexagon',
    hi: 'षटकोण (Hexagon)',
    mr: 'षटकोनी (Hexagon)',
    gu: 'ષટકોણ (Hexagon)'
  }
};

const MATERIAL_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'Both': {
    en: 'Both',
    hi: 'दोनों (एसीटेट और मेटल)',
    mr: 'दोन्ही (एसीटेट आणि मेटल)',
    gu: 'બંને (એસીટેટ અને મેટલ)'
  },
  'Acetate': {
    en: 'Acetate',
    hi: 'एसीटेट (Acetate)',
    mr: 'एसीटेट (Acetate)',
    gu: 'એસીટેટ (Acetate)'
  },
  'Titanium': {
    en: 'Titanium',
    hi: 'टाइटेनियम (Titanium)',
    mr: 'टायटॅनियम (Titanium)',
    gu: 'ટાઈટેનિયમ (Titanium)'
  }
};

const COLOR_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'Black Core': { en: 'Black Core', hi: 'ब्लैक कोर (Black Core)', mr: 'ब्लॅक कोर (Black Core)', gu: 'બ્લેક કોર (Black Core)' },
  'Black Shell': { en: 'Black Shell', hi: 'ब्लैक शेल (Black Shell)', mr: 'ब्लॅक शेल (Black Shell)', gu: 'બ્લેક શેલ (Black Shell)' },
  'Champagne': { en: 'Champagne', hi: 'शैंपेन (Champagne)', mr: 'शॅम्पेन (Champagne)', gu: 'શેમ્પેન (Champagne)' },
  'Havana': { en: 'Havana', hi: 'हवाना (Havana)', mr: 'हव्हाना (Havana)', gu: 'હવાના (Havana)' },
  'Matte Black': { en: 'Matte Black', hi: 'मैट ब्लैक (Matte Black)', mr: 'मॅट ब्लॅक (Matte Black)', gu: 'મેટ બ્લેક (Matte Black)' },
  'Black': { en: 'Black', hi: 'ब्लैक (Black)', mr: 'ब्लॅक (Black)', gu: 'બ્લેક (Black)' },
  'Teal': { en: 'Teal', hi: 'टील (Teal)', mr: 'टील (Teal)', gu: 'ટીલ (Teal)' },
  'Blackx': { en: 'Black (Blackx)', hi: 'ब्लैक (Blackx)', mr: 'ब्लॅक (Blackx)', gu: 'બ્લેક (Blackx)' },
  'Olive': { en: 'Olive', hi: 'ऑलिव (Olive)', mr: 'ऑलिव्ह (Olive)', gu: 'ઓલિવ (Olive)' },
  'Wine': { en: 'Wine', hi: 'वाइन (Wine)', mr: 'वाइन (Wine)', gu: 'વાઇન (Wine)' },
  'Blackshellx': { en: 'Black Shell (Blackshellx)', hi: 'ब्लैक शेल (Blackshellx)', mr: 'ब्लॅक शेल (Blackshellx)', gu: 'બ્લેક શેલ (Blackshellx)' },
  'Emerald': { en: 'Emerald', hi: 'एमराल्ड (Emerald)', mr: 'एमराल्ड (Emerald)', gu: 'એમરાલ્ડ (Emerald)' },
  'Glass': { en: 'Glass', hi: 'ग्लास (Glass)', mr: 'ग्लास (Glass)', gu: 'ગ્લાસ (Glass)' },
  'Rust': { en: 'Rust', hi: 'रस्ट (Rust)', mr: 'रस्ट (Rust)', gu: 'રસ્ટ (Rust)' },
  'Gold': { en: 'Gold', hi: 'गोल्ड (Gold)', mr: 'गोल्ड (Gold)', gu: 'ગોલ્ડ (Gold)' },
  'Matte Silver': { en: 'Matte Silver', hi: 'मैट सिल्वर (Matte Silver)', mr: 'मॅट सिल्व्हर (Matte Silver)', gu: 'મેટ સિલ્વર (Matte Silver)' },
  'Smoke': { en: 'Smoke', hi: 'स्मोक (Smoke)', mr: 'स्मोक (Smoke)', gu: 'સ્મોક (Smoke)' },
  'Navy': { en: 'Navy', hi: 'नेवी (Navy)', mr: 'नेव्ही (Navy)', gu: 'નેવી (Navy)' },
  'Sage': { en: 'Sage', hi: 'सेज (Sage)', mr: 'सेज (Sage)', gu: 'સેજ (Sage)' },
  'Concrete': { en: 'Concrete', hi: 'कंक्रीट (Concrete)', mr: 'काँक्रीट (Concrete)', gu: 'કોંક્રિટ (Concrete)' },
  'Anthracite': { en: 'Anthracite', hi: 'एंथ्रेसाइट (Anthracite)', mr: 'अँथ्रेसाईट (Anthracite)', gu: 'એન્થ્રેસાઇટ (Anthracite)' },
  'Silver': { en: 'Silver', hi: 'सिल्वर (Silver)', mr: 'सिल्व्हर (Silver)', gu: 'સિલ્વર (Silver)' },
  'Mattesmoke': { en: 'Matte Smoke (Mattesmoke)', hi: 'मैट स्मोक (Mattesmoke)', mr: 'मॅट स्मोक (Mattesmoke)', gu: 'મેટ સ્મોક (Mattesmoke)' },
  'Gunmetal': { en: 'Gunmetal', hi: 'गनमेटल (Gunmetal)', mr: 'गनमेटल (Gunmetal)', gu: 'ગનમેટેલ (Gunmetal)' },
  'Bronze': { en: 'Bronze', hi: 'ब्रॉन्ज (Bronze)', mr: 'ब्रॉन्झ (Bronze)', gu: 'બ્રોન્ઝ (Bronze)' },
  'Matte Anthracite': { en: 'Matte Anthracite', hi: 'मैट एंथ्रेसाइट (Matte Anthracite)', mr: 'मॅट अँथ्रेसाईट (Matte Anthracite)', gu: 'મેટ એન્થ્રેસાઇટ (Matte Anthracite)' },
  'Matte Olive': { en: 'Matte Olive', hi: 'मैट ऑलिव (Matte Olive)', mr: 'मॅट ऑलिव्ह (Matte Olive)', gu: 'મેટ ઓલિવ (Matte Olive)' },
  'Matte Gunmetal': { en: 'Matte Gunmetal', hi: 'मैट गनमेटल (Matte Gunmetal)', mr: 'मॅट गनमेटल (Matte Gunmetal)', gu: 'મેટ ગનમેટલ (Matte Gunmetal)' },
  'Black B': { en: 'Black B', hi: 'ब्लैक बी (Black B)', mr: 'ब्लॅक बी (Black B)', gu: 'બ્લેક બી (Black B)' },
  'Black P': { en: 'Black P', hi: 'ब्लैक पी (Black P)', mr: 'ब्लॅक पी (Black P)', gu: 'બ્લેક પી (Black P)' },
  'Cobalt': { en: 'Cobalt', hi: 'कोबाल्ट (Cobalt)', mr: 'कोबाल्ट (Cobalt)', gu: 'કોબાલ્ટ (Cobalt)' },
  'Ember': { en: 'Ember', hi: 'एम्बर (Ember)', mr: 'एम्बर (Ember)', gu: 'એમ્બર (Ember)' }
};

const LENS_COLOR_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'Blue / purple tint': { en: 'Blue / purple tint', hi: 'नीला / बैंगनी टिंट', mr: 'निळा / जांभळा टिंट', gu: 'વાદળી / જાંબલી ટિન્ટ' },
  'Black / dark smoke': { en: 'Black / dark smoke', hi: 'काला / गहरा स्मोक', mr: 'काळा / गडद स्मोक', gu: 'બ્લેક / ડાર્ક સ્મોક' },
  'Orange / peach lens': { en: 'Orange / peach lens', hi: 'नारंगी / पीच लेंस', mr: 'नारिंगी / पीच लेन्स', gu: 'ઓરેન્જ / પીચ લેન્સ' },
  'Blue gradient': { en: 'Blue gradient', hi: 'नीला ग्रेडिएंट', mr: 'निळा ग्रेडियंट', gu: 'વાદળી ગ્રેડિયન્ટ' },
  'Yellow lens': { en: 'Yellow lens', hi: 'पीला लेंस', mr: 'पिवळी लेन्स', gu: 'પીળો લેન્સ' },
  'Black / smoke lens': { en: 'Black / smoke lens', hi: 'काला / स्मोक लेंस', mr: 'काळा / स्मोक लेन्स', gu: 'બ્લેક / સ્મોક લેન્સ' },
  'Orange / coral lens': { en: 'Orange / coral lens', hi: 'नारंगी / कोरल लेंस', mr: 'नारिंगी / कोरल लेन्स', gu: 'ઓરેન્જ / કોરલ લેન્સ' },
  'Brown gradient': { en: 'Brown gradient', hi: 'भूरा ग्रेडिएंट', mr: 'तपकिरी ग्रेडियंट', gu: 'બ્રાઉન ગ્રેડિયન્ટ' },
  'Green lens': { en: 'Green lens', hi: 'हरा लेंस', mr: 'हिरवी लेन्स', gu: 'લીલો લેન્સ' },
  'Blue lens': { en: 'Blue lens', hi: 'नीला लेंस', mr: 'निळी लेन्स', gu: 'વાદળી લેન્સ' },
  'Black / dark smoke lens': { en: 'Black / dark smoke lens', hi: 'काला / गहरा स्मोक लेंस', mr: 'काळा / गडद स्मोक लेन्स', gu: 'બ્લેક / ડાર્ક સ્મોક લેન્સ' },
  'Rose / pink gradient': { en: 'Rose / pink gradient', hi: 'रोज / गुलाबी ग्रेडिएंट', mr: 'रोज / गुलाबी ग्रेडियंट', gu: 'રોઝ / ગુલાબી ગ્રેડિયન્ટ' },
  'Yellow-green lens': { en: 'Yellow-green lens', hi: 'पीला-हरा लेंस', mr: 'पिवळसर-हिरवी लेन्स', gu: 'પીળો-લીલો લેન્સ' },
  'Green / grey lens': { en: 'Green / grey lens', hi: 'हरा / ग्रे लेंस', mr: 'हिरवी / राखाडी लेन्स', gu: 'લીલો / ગ્રે લેન્સ' },
  'Coral / orange lens': { en: 'Coral / orange lens', hi: 'कोरल / नारंगी लेंस', mr: 'कोरल / नारिंगी लेन्स', gu: 'કોરલ / ઓરેન્જ લેન્સ' },
  'Orange / brown gradient': { en: 'Orange / brown gradient', hi: 'नारंगी / भूरा ग्रेडिएंट', mr: 'नारिंगी / तपकिरी ग्रेडियंट', gu: 'ઓરેન્જ / બ્રાઉન ગ્રેડિયન્ટ' },
  'Yellow / green tint': { en: 'Yellow / green tint', hi: 'पीला / हरा टिंट', mr: 'पिवळा / हिरवा टिंट', gu: 'પીળો / લીલો ટિન્ટ' },
  'Brown / rose gradient': { en: 'Brown / rose gradient', hi: 'भूरा / रोज ग्रेडिएंट', mr: 'तपकिरी / रोज ग्रेडियंट', gu: 'બ્રાઉન / રોઝ ગ્રેડિયન્ટ' },
  'Blue / grey lens': { en: 'Blue / grey lens', hi: 'नीला / ग्रे लेंस', mr: 'निळी / राखाडी लेन्स', gu: 'વાદળી / ... ગ્રે લેન્સ' },
  'Green / grey gradient': { en: 'Green / grey gradient', hi: 'हरा / ग्रे ग्रेडिएंट', mr: 'हिरवी / राखाडी ग्रेडियंट', gu: 'લીલો / ગ્રે ગ્રેડિયન્ટ' },
  'Brown / orange gradient': { en: 'Brown / orange gradient', hi: 'भूरा / नारंगी ग्रेडिएंट', mr: 'तपकिरी / नारिंगी ग्रेडियंट', gu: 'બ્રાઉન / ઓરેન્જ ગ્રેડિયન્ટ' },
  'Orange / red gradient': { en: 'Orange / red gradient', hi: 'नारंगी / लाल ग्रेडिएंट', mr: 'नारिंगी / लाल ग्रेडियंट', gu: 'ઓરેન્જ / લાલ ગ્રેડિયન્ટ' },
  'Blue / purple lens': { en: 'Blue / purple lens', hi: 'नीला / बैंगनी लेंस', mr: 'निळी / जांभळी लेन्स', gu: 'વાદળી / જાંબલી લેન્સ' },
  'Olive / yellow-green lens': { en: 'Olive / yellow-green lens', hi: 'ऑलिव / पीला-हरा लेंस', mr: 'ऑलिव्ह / पिवळसर-हिरवी लेन्स', gu: 'ઓલિવ / પીળો-લીલો લેન્સ' },
  'Purple / smoke lens': { en: 'Purple / smoke lens', hi: 'बैंगनी / स्मोक लेंस', mr: 'जांभळी / स्मोक लेन्स', gu: 'જાંબલી / સ્મોક લેન્સ' },
  'Green / smoke lens': { en: 'Green / smoke lens', hi: 'हरा / स्मोक लेंस', mr: 'हिरवी / स्मोक लेन्स', gu: 'લીલો / સ્मोक લેન્સ' },
  'Orange lens': { en: 'Orange lens', hi: 'नारंगी लेंस', mr: 'नारिंगी लेन्स', gu: 'ઓરેન્જ લેન્સ' },
  'Blue / purple gradient': { en: 'Blue / purple gradient', hi: 'नीला / बैंगनी ग्रेडिएंट', mr: 'निळा / जांभळा ग्रेडियंट', gu: 'વાદળી / જાંબલી ગ્રેડિયન્ટ' },
  'Brown / rose gradient lens': { en: 'Brown / rose gradient lens', hi: 'भूरा / रोज ग्रेडिएंट लेंस', mr: 'तपकिरी / rose ग्रेडियंट लेन्स', gu: 'બ્રાઉન / રોઝ ગ્રેડિયન્ટ લેન્સ' },
  'Light blue / lavender lens': { en: 'Light blue / lavender lens', hi: 'हल्का नीला / लैवेंडर लेंस', mr: 'फिकट निळी / लॅव्हेंडर लेन्स', gu: 'લાઇટ બ્લુ / લેવેન્ડર લેન્સ' },
  'Green / olive gradient lens': { en: 'Green / olive gradient lens', hi: 'हरा / ऑलिव ग्रेडिएंट लेंस', mr: 'हिरवी / ऑलिव्ह ग्रेडियंट लेन्स', gu: 'લીલો / ઓલિવ ગ્રેડિયન્ટ લેન્સ' },
  'Green gradient lens': { en: 'Green gradient lens', hi: 'हरा ग्रेडिएंट लेंस', mr: 'हिरवी ग्रेडियंट लेन्स', gu: 'લીલો ગ્રેડિયન્ટ લેન્સ' },
  'Brown gradient lens': { en: 'Brown gradient lens', hi: 'भूरा ग्रेडिएंट लेंस', mr: 'तपकिरी ग्रेडियंट लेन्स', gu: 'બ્રાઉન ગ્રેડિયન્ટ લેન્સ' },
  'Brown / smoke lens': { en: 'Brown / smoke lens', hi: 'भूरा / स्मोक लेंस', mr: 'तपकिरी / स्मोक लेन्स', gu: 'બ્રાઉન / સ્મોક લેન્સ' },
  'Blue / lavender lens': { en: 'Blue / lavender lens', hi: 'नीला / लैवेंडर लेंस', mr: 'निळी / लॅव्हेंडर लेन्स', gu: 'વાદળી / લેવેન્ડર લેન્સ' },
  'Brown / orange gradient lens': { en: 'Brown / orange gradient lens', hi: 'भूरा / नारंगी ग्रेडिएंट लेंस', mr: 'तपकिरी / नारिंगी ग्रेडियंट लेन्स', gu: 'બ્રાઉન / ઓરેન્જ ગ્રેડિયન્ટ લેન્સ' },
  'Brown / smoke gradient lens': { en: 'Brown / smoke gradient lens', hi: 'भूरा / स्मोक ग्रेडिएंट लेंस', mr: 'तपकिरी / स्मोक ग्रेडियंट लेन्स', gu: 'બ્રાઉન / સ્મોક ગ્રેડિયન્ટ લેન્સ' },
  'Pink / coral lens': { en: 'Pink / coral lens', hi: 'गुलाबी / कोरल लेंस', mr: 'गुलाबी / कोरल लेन्स', gu: 'ગુલાબી / કોરલ લેન્સ' },
  'Purple / smoke gradient lens': { en: 'Purple / smoke gradient lens', hi: 'बैंगनी / स्मोक ग्रेडिएंट लेंस', mr: 'जांभळी / स्मोक ग्रेडियंट लेन्स', gu: 'જાંબલી / સ્મોક ગ્રેડિયન્ટ લેન્સ' }
};

const CHARACTER_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'coastline': {
    en: 'Clean wayfarer energy. Versatile enough for anything.',
    hi: 'साफ वेफ़रर ऊर्जा। किसी भी चीज़ के लिए बहुमुखी।',
    mr: 'स्वच्छ वेफेरर ऊर्जा. कशासाठीही पुरेशी अष्टपैलू.',
    gu: 'ચોખ્ખી વેફેરર ઊર્જા. કોઈપણ વસ્તુ માટે બહુમુખી.'
  },
  'vondel': {
    en: "Soft panto-shaped frame with relaxed proportions, inspired by Amsterdam's Vondelpark.",
    hi: 'एम्सटर्डम के वोंडेलपार्क से प्रेरित, आरामदायक अनुपात के साथ नरम पेंटो-आकार का फ्रेम।',
    mr: 'अ‍ॅमस्टरडॅमच्या वोंडेलपार्कपासून प्रेरित, आरामशीर प्रमाणांसह मऊ पँटो-आकाराचा फ्रेम.',
    gu: 'એમ્સ્ટરડેમના વોન્ડેલપાર્કથી પ્રેરિત, હળવા પ્રમાણ સાથે નરમ પેન્ટો-આકારની ફ્રેમ.'
  },
  'strand': {
    en: "Balancing softness and structure, inspired by New York's Strand Bookstore.",
    hi: 'न्यूयॉर्क के स्ट्रैंड बुकस्टोर से प्रेरित, कोमलता और संरचना को संतुलित करना।',
    mr: 'न्यूयॉर्कच्या स्ट्रँड बुकस्टोरपासून प्रेरित, कोमलता आणि संरचनेचे संतुलन राखणारा फ्रेम.',
    gu: 'ન્યૂ યોર્કના સ્ટ્રેન્ડ બુકસ્ટોરથી પ્રેરિત, નરમાશ અને રચનાનું સંતુલન.'
  },
  'borderline': {
    en: 'A versatile frame designed to be full across the top and subtly flattened at the sides.',
    hi: 'एक बहुमुखी फ्रेम जिसे ऊपर की तरफ से भरा हुआ और किनारों पर थोड़ा चपटा डिज़ाइन किया गया है।',
    mr: 'एक अष्टपैलू फ्रेम जो वरून पूर्ण आणि बाजूंनी किंचित चपटा डिझाइन केला आहे.',
    gu: 'એક બહુમુખી ફ્રેમ જેને ઉપરની તરફ ભરેલી અને બાજુઓ પર સહેજ ચપટી ડિઝાઇન કરવામાં આવી છે.'
  },
  'split': {
    en: 'A ultra-lightweight Japanese titanium aviator frame featuring a striking split-bridge design.',
    hi: 'एक बेहद हल्का जापानी टाइटेनियम एविएटर फ्रेम जिसमें एक आकर्षक स्प्लिट-ब्रिज डिज़ाइन है।',
    mr: 'एक अत्यंत हलका जपानी टायटॅनियम एव्हिएटर फ्रेम ज्यामध्ये आकर्षक स्प्लिट-ब्रिज डिझाइन आहे.',
    gu: 'એક અલ્ટ્રા-લાઇટવેઇટ જાપાનીઝ ટાઇટેનિયમ એવિએટર ફ્રેમ જેમાં આકર્ષક સ્પ્લિટ-બ્રિજ ડિઝાઇન છે.'
  },
  'runway': {
    en: 'Unapologetic, solid, and authoritative chunky acetate frame.',
    hi: 'दृढ़, ठोस और आधिकारिक चंकी एसीटेट फ्रेम।',
    mr: 'खंबीर, मजबूत आणि अधिकृत चंकी एसीटेट फ्रेम.',
    gu: 'દ્રઢ, મજબૂત અને અધિકૃત ચંકી એસીટેટ ફ્રેમ.'
  },
  'undertone': {
    en: 'A bold, grounded, and sturdy frame designed to provide a minimalist aesthetic with depth.',
    hi: 'एक बोल्ड, स्थिर और मजबूत फ्रेम जिसे गहराई के साथ एक न्यूनतम सौंदर्य प्रदान करने के लिए डिज़ाइन किया गया है।',
    mr: 'एक धाडसी, स्थिर आणि मजबूत फ्रेम जो खोलीसह किमान सौंदर्य प्रदान करण्यासाठी डिझाइन केला आहे.',
    gu: 'એક બોલ્ડ, સ્થિર आणि મજબૂત ફ્રેમ જેને ઊંડાણ સાથે લઘુત્તમ સૌંદર્ય પ્રદાન કરવા માટે ડિઝાઇન કરવામાં આવી છે.'
  },
  'downtime': {
    en: 'A fuller-shaped frame designed for a quiet presence and relaxed afternoon vibes.',
    hi: 'शांत उपस्थिति और दोपहर के आरामदायक पलों के लिए डिज़ाइन किया गया एक भरा-पूरा फ्रेम।',
    mr: 'शांत उपस्थिती आणि दुपारच्या आरामशीर क्षणांसाठी डिझाइन केलेला एक मोठा आकाराचा फ्रेम.',
    gu: 'શાંત હાજરી અને બપોરની હળવાશ માટે ડિઝાઇન કરવામાં આવેલી ભરેલા આકારની ફ્રેમ.'
  },
  'portola': {
    en: 'An oval-shaped frame made from premium Italian Mazzucchelli acetate, exuding effortless coastal style.',
    hi: 'प्रीमियम इतालवी माज़ुचेली एसीटेट से बना एक अंडाकार फ्रेम, जो सहज तटीय शैली को दर्शाता है।',
    mr: 'प्रीमियम इटालियन माझुचेली एसीटेटपासून बनवलेला अंडाकृती फ्रेम, जो सहज किनारी शैली दर्शवतो.',
    gu: 'પ્રીમિયમ ઇટાલિયન માઝુચેલી એસીટેટમાંથી બનેલી અંડાકાર ફ્રેમ, જે સહજ દરિયાકાંઠાની શૈલી દર્શાવે છે.'
  },
  'prysm': {
    en: 'A seamless blend of acetate and metal featuring a balanced hexagonal-round shape.',
    hi: 'एसीटेट और धातु का एक सहज मिश्रण जिसमें एक संतुलित षटकोणीय-गोल आकार है।',
    mr: 'एसीटेट आणि धातूचे एक अखंड मिश्रण ज्यामध्ये संतुलित षटकोनी-गोलाकार आकार आहे.',
    gu: 'એસીટેટ અને ધાતુનું એક અનોખું મિશ્રણ જેમાં સંતુલિત ષટ્કોણ-ગોળ આકાર છે.'
  },
  'overture': {
    en: 'A sharp, rectangular frame crafted from Italian Mazzucchelli acetate with strong geometric edges.',
    hi: 'मजबूत ज्यामितीय किनारों के साथ इतालवी माज़ुचेली एसीटेट से तैयार किया गया एक तीखा, आयताकार फ्रेम।',
    mr: 'मजकूत भौमितिक कडांसह इटालियन माझुचेली एसीटेटपासून बनवलेला एक तीक्ष्ण, आयताकृती फ्रेम.',
    gu: 'મજબૂત ભૌમિતિક કિનારીઓ સાથે ઇટાલિયન માઝુચેલી એસીટેટમાંથી બનાવેલ તીક્ષ્ણ, લંબચોરસ ફ્રેમ.'
  },
  'highline': {
    en: 'Lightweight, oval-shaped Japanese titanium frame built for ultimate strength and comfort.',
    hi: 'अंतिम ताकत और आराम के लिए बनाया गया हल्का, अंडाकार जापानी टाइटेनियम फ्रेम।',
    mr: 'उत्कृष्ट ताकद आणि आरामासाठी बनवलेला हलका, अंडाकृती जपानी टायटॅनियम फ्रेम.',
    gu: 'અત્યંત તાકાત અને આરામ માટે બનેલી હલકી, અંડાકાર જાપાનીઝ ટાઇટેનિયમ ફ્રેમ.'
  },
  'wireframe': {
    en: 'Minimalist rectangular metallic-rimmed titanium frame defining structural simplicity.',
    hi: 'संरचनात्मक सादगी को परिभाषित करने वाला न्यूनतम आयताकार धातु-किनारे वाला टाइटेनियम फ्रेम।',
    mr: 'रचनात्मक साधेपणा परिभाषित करणारा किमान आयताकृती धातू-किनाऱ्याचा टायटॅनियम फ्रेम.',
    gu: 'રચનાત્મક સરળતા વ્યાખ્યાયિત કરતી લઘુત્તમ લંબચોરસ ધાતુ-કિનારીવાળી ટાઇટેનિયમ ફ્રેમ.'
  },
  'crossfire': {
    en: 'Bold double-bridge metal aviator featuring structural reinforcement and lightweight comfort.',
    hi: 'संरचनात्मक सुदृढ़ीकरण और हल्के आराम की विशेषता वाला बोल्ड डबल-ब्रिज मेटल एविएटर।',
    mr: 'रचनात्मक मजबुतीकरण आणि हलक्या वजनाचा आराम देणारा बोल्ड डबल-ब्रिज मेटल एव्हिएटर.',
    gu: 'રચનાત્મક મજબૂતી અને હળવા વજનના આરામવાળી બોલ્ડ ડબલ-બ્રિજ મેટલ એવિએટર.'
  },
  'strangelove': {
    en: 'Delicate oval frame suspended in Japanese titanium, projecting structural lightness.',
    hi: 'जापानी टाइटेनियम में निलंबित नाजुक अंडाकार फ्रेम, जो संरचनात्मक हल्केपन को दर्शाता है।',
    mr: 'जपानी टायटॅनियममध्ये लटकलेला नाजूक अंडाकृती फ्रेम, जो रचनात्मक हलकेपणा दर्शवतो.',
    gu: 'જાપાનીઝ ટાઇટેનિયમમાં લટકાવેલી નાજુક અંડાકાર ફ્રેમ, જે રચનાત્મક હળવાશ દર્શાવે છે.'
  },
  'paradox': {
    en: 'Uncompromised geometric expression. Minimalist hexagonal rim detailing.',
    hi: 'बिना किसी समझौते के ज्यामितीय अभिव्यक्ति। न्यूनतम षटकोणीय रिम विवरण।',
    mr: 'बिनतारी भौमितिक अभिव्यक्ती. किमान षटकोनी रिम तपशील.',
    gu: 'કોઈપણ તડજોડ વિનાની ભૌમિતિક અભિવ્યક્તિ. લઘુત્તમ ષટ્કોણ રિમ વિગતો.'
  },
  'fulton': {
    en: 'A balanced contradiction. Subtle geometric lines merging with flat acetate borders.',
    hi: 'एक संतुलित विरोधाभास। सपाट एसीटेट सीमाओं के साथ विलीन होने वाली सूक्ष्म ज्यामितीय रेखाएं।',
    mr: 'एक संतुलित विरोधाभास. सपाट एसीटेट सीमांसह विलीन होणाऱ्या सूक्ष्म भौमितिक रेषा.',
    gu: 'એક સંતુલિત વિરોધાભાસ. સપાટ એસીટેટ બોર્ડર સાથે ભળતી ભૌમિતિક રેખાઓ.'
  },
  'sheer': {
    en: 'Speedway heritage. A thin titanium frame styled with athletic curves.',
    hi: 'स्पीडवे विरासत। एथलेटिक कर्व्स के साथ डिज़ाइन किया गया एक पतला टाइटेनियम फ्रेम।',
    mr: 'स्पीडवे वारसा. अ‍ॅथलेटिक कर्व्हसह डिझाइन केलेला एक पातळ टायटॅनियम फ्रेम.',
    gu: 'સ્પીડવે વારસો. એથ્લેટિક કર્વ્સ સાથે ડિઝાઇન કરવામાં આવેલી પાતળી ટાઇટેનિયમ ફ્રેમ.'
  },
  'vapour': {
    en: 'A gossamer-light presence. Round wire detailing that feels completely weightless.',
    hi: 'एकदम हल्का एहसास। गोल तार का विवरण जो पूरी तरह से भारहीन महसूस होता है।',
    mr: 'अत्यंत हलकी उपस्थिती. गोल वायरचे तपशील जे पूर्णपणे वजनहीन वाटते.',
    gu: 'અત્યંત હળવી હાજરી. ગોળ વાયરની વિગતો જે સંપૂર્ણપણે વજન વિનાની લાગે છે.'
  },
  'slowburn': {
    en: 'A slow-releasing design assertion. Thin metallic rims with polished acetate details.',
    hi: 'एक धीमा-रिलीज़ डिज़ाइन दावा। पॉलिश किए गए एसीटेट विवरण के साथ पतली धातु की रिम्स।',
    mr: 'एक हळूहळू समोर येणारी डिझाइन. पॉलिश केलेल्या एसीटेट तपशीलांसह पातळ धातूच्या रिम्स.',
    gu: 'એક ધીમેથી રજૂ થતી ડિઝાઇન. પોલિશ કરેલી એસીટેટ વિગતો સાથે પાતળી ધાતુની રિમ્સ.'
  },
  'velo': {
    en: 'Narrow, wrapping rectangle sunglasses built for sleek athletic style.',
    hi: 'सलीक एथलेटिक शैली के लिए बनाए गए संकीर्ण, रैपिंग आयताकार सनग्लासेस।',
    mr: 'स्लीक अ‍ॅथलेटिक शैलीसाठी बनवलेले अरुंद, रॅपिंग आयताकृती सनग्लासेस.',
    gu: 'સ્લીક એથ્લેટિક શૈલી માટે બનેલા સાંકડા, રેપિંગ લંબચોરસ સનગ્લાસિસ.'
  }
};

export const UI_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  quizRegistration: {
    en: 'Quiz Registration',
    hi: 'क्विज़ पंजीकरण',
    mr: 'क्विझ नोंदणी',
    gu: 'ક્વિઝ રજીસ્ટ્રેશન'
  },
  fullName: {
    en: 'Your Full Name',
    hi: 'आपका पूरा नाम',
    mr: 'तुमचे पूर्ण नाव',
    gu: 'તમારું આખું નામ'
  },
  selectLanguage: {
    en: 'Your Language Preference',
    hi: 'आपकी भाषा प्राथमिकता',
    mr: 'तुमची भाषा निवड',
    gu: 'તમારી ભાષા પસંદગી'
  },
  startQuiz: {
    en: 'Start Quiz',
    hi: 'क्विज़ शुरू करें',
    mr: 'क्विझ सुरू करा',
    gu: 'ક્વિઝ શરૂ કરો'
  },
  cancel: {
    en: 'Cancel',
    hi: 'रद्द करें',
    mr: 'रद्द करा',
    gu: 'રદ કરો'
  },
  questionProgress: {
    en: 'Question',
    hi: 'प्रश्न',
    mr: 'प्रश्न',
    gu: 'પ્રશ્ન'
  },
  of: {
    en: 'of',
    hi: 'में से',
    mr: 'पैकी',
    gu: 'માંથી'
  },
  score: {
    en: 'Score',
    hi: 'स्कोर',
    mr: 'गुण',
    gu: 'સ્કોર'
  },
  timesUp: {
    en: "Time's Up!",
    hi: 'समय समाप्त!',
    mr: 'वेळ संपली!',
    gu: 'સમય પૂરો!'
  },
  timesUpSub: {
    en: 'You ran out of time for this question.',
    hi: 'इस प्रश्न के लिए आपका समय समाप्त हो गया है।',
    mr: 'या प्रश्नासाठी तुमची वेळ संपली आहे.',
    gu: 'આ પ્રશ્ન માટે તમારો સમય પૂરો થઈ ગયો છે.'
  },
  correct: {
    en: 'Correct! Well done.',
    hi: 'सही! बहुत बढ़िया।',
    mr: 'बरोबर! खूप छान.',
    gu: 'સાચું! ખૂબ સરસ.'
  },
  incorrect: {
    en: 'Incorrect. Try another option!',
    hi: 'गलत। दूसरा विकल्प आजमाएं!',
    mr: 'चुकीचे. दुसरा पर्याय निवडा!',
    gu: 'ખોટું. બીજો વિકલ્પ અજમાવો!'
  },
  continue: {
    en: 'Continue',
    hi: 'आगे बढ़ें',
    mr: 'पुढे जा',
    gu: 'આગળ વધો'
  },
  tryAgain: {
    en: 'Try Again',
    hi: 'फिर प्रयास करें',
    mr: 'पुन्हा प्रयत्न करा',
    gu: 'ફરી પ્રયાસ કરો'
  },
  showResults: {
    en: 'Show Results',
    hi: 'परिणाम देखें',
    mr: 'निकाल पहा',
    gu: 'પરિણામ જુઓ'
  },
  quizCompleted: {
    en: 'Quiz Completed!',
    hi: 'क्विज़ पूरा हुआ!',
    mr: 'क्विझ पूर्ण झाली!',
    gu: 'ક્વિઝ પૂર્ણ થઈ!'
  },
  congratulations: {
    en: 'Congratulations',
    hi: 'बधाई हो',
    mr: 'अभिनंदन',
    gu: 'અભિનંદન'
  },
  niceTry: {
    en: 'Nice Try',
    hi: 'अच्छा प्रयास',
    mr: 'चांगला प्रयत्न',
    gu: 'સારો પ્રયાસ'
  },
  youScored: {
    en: 'You scored',
    hi: 'आपने स्कोर किया',
    mr: 'तुम्हाला मिळाले',
    gu: 'તમે સ્કોર કર્યો'
  },
  accuracy: {
    en: 'Accuracy',
    hi: 'सटीकता',
    mr: 'अचूकता',
    gu: 'ચોકસાઈ'
  },
  practiceAgain: {
    en: 'Practice Again',
    hi: 'फिर से अभ्यास करें',
    mr: 'पुन्हा सराव करा',
    gu: 'ફરીથી અભ્યાસ કરો'
  },
  exitToGallery: {
    en: 'Exit to Gallery',
    hi: 'गैलरी पर वापस जाएं',
    mr: 'गॅलरीमध्ये जा',
    gu: 'ગેલેરી પર પાછા જાઓ'
  },
  tryMixedQuiz: {
    en: 'Try Mixed Quiz',
    hi: 'मिश्रित क्विज़ खेलें',
    mr: 'मिश्रित क्विझ खेळा',
    gu: 'મિશ્રિત ક્વિઝ રમો'
  },
  enterNamePrompt: {
    en: 'Enter your name to begin the quiz.',
    hi: 'क्विज़ शुरू करने के लिए अपना नाम दर्ज करें।',
    mr: 'क्विझ सुरू करण्यासाठी तुमचे नाव प्रविष्ट करा.',
    gu: 'ક્વિઝ શરૂ કરવા માટે તમારું નામ દાખલ કરો.'
  },
  enterNameMixedPrompt: {
    en: 'Enter your name to begin the General Mixed Quiz.',
    hi: 'सामान्य मिश्रित क्विज़ शुरू करने के लिए अपना नाम दर्ज करें।',
    mr: 'सामान्य मिश्रित क्विझ सुरू करण्यासाठी तुमचे नाव प्रविष्ट करा.',
    gu: 'સામાન્ય મિશ્રિત ક્વિઝ શરૂ કરવા માટે તમારું નામ દાખલ કરો.'
  },
  enterNamePracticePrompt: {
    en: 'Enter your name to begin the practice quiz for this frame.',
    hi: 'इस फ्रेम के लिए अभ्यास क्विज़ शुरू करने के लिए अपना नाम दर्ज करें।',
    mr: 'या फ्रेमसाठी सराव क्विझ सुरू करण्यासाठी तुमचे नाव प्रविष्ट करा.',
    gu: 'આ ફ્રેમ માટે અભ્યાસ ક્વિઝ શરૂ કરવા માટે તમારું નામ દાખલ કરો.'
  },
  resultsMixedSubtitle: {
    en: 'You finished the General Mixed Quiz. You successfully recognized and recalled the properties of Unscene Eyewear frames.',
    hi: 'आपने सामान्य मिश्रित क्विज़ पूरा कर लिया है। आपने अनसीन आईवियर फ्रेम के गुणों को सफलतापूर्वक पहचाना और याद किया।',
    mr: 'तुम्ही सामान्य मिश्रित क्विझ पूर्ण केली आहे. तुम्ही अनसीन आयवेअर फ्रेमचे गुणधर्म यशस्वीरित्या ओळखले आणि आठवले.',
    gu: 'તમે સામાન્ય મિશ્રિત ક્વિઝ પૂર્ણ કરી છે. તમે અનસીન આઈવેર ફ્રેમ્સના ગુણધર્મોને સફળતાપૂર્વક ઓળખ્યા અને યાદ કર્યા.'
  },
  resultsPracticeSubtitle: {
    en: 'Nice work! You practiced identifying details for the frame model.',
    hi: 'अच्छा काम! आपने फ्रेम मॉडल के विवरणों की पहचान करने का अभ्यास किया।',
    mr: 'छान काम! तुम्ही फ्रेम मॉडेलचे तपशील ओळखण्याचा सराव केला.',
    gu: 'સરસ કામ! તમે ફ્રેમ મોડેલની વિગતો ઓળખવાની પ્રેક્ટિસ કરી.'
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
      else if (lang === 'gu') questionText = 'આની અનોખી ડિઝાઇન પરથી આ અનસીન (Unscene) ફ્રેમ મોડેલ ઓળખો.';
      break;

    case 'shape_identification':
      if (lang === 'hi') questionText = `${frameName} फ्रेम का सिग्नेचर शेप प्रोफाइल क्या है?`;
      else if (lang === 'mr') questionText = `${frameName} फ्रेमचे सिग्नेचर शेप प्रोफाइल काय आहे?`;
      else if (lang === 'gu') questionText = `${frameName} ફ્રેમની સિગ્નેચર શેપ પ્રોફાઇલ શું છે?`;

      // Translate choices
      options = options.map(opt => SHAPE_TRANSLATIONS[opt]?.[lang] || opt);
      correctAnswer = SHAPE_TRANSLATIONS[correctAnswer]?.[lang] || correctAnswer;
      break;

    case 'material_match':
      if (lang === 'hi') questionText = `${frameName} फ्रेम मुख्य रूप से किस सामग्री से बनाई गई है?`;
      else if (lang === 'mr') questionText = `${frameName} फ्रेम मुख्यत्वे कोणत्या साहित्यापासून बनवली आहे?`;
      else if (lang === 'gu') questionText = `${frameName} ફ્રેમ મુખ્યત્વે કઈ સામગ્રીમાંથી બનાવવામાં આવી છે?`;

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
      else if (lang === 'gu') questionText = `કઈ ફ્રેમ આ વર્ણન સાથે મેળ ખાય છે: "${translatedDesc}"?`;
      break;

    case 'price_match':
      const isSun = question.questionText.toLowerCase().includes('sunglasses') || question.questionText.toLowerCase().includes('(sun)');
      if (isSun) {
        if (lang === 'hi') questionText = `${frameName} सनग्लासेस (SUN) की कीमत क्या है?`;
        else if (lang === 'mr') questionText = `${frameName} सनग्लासेस (SUN) ची किंमत काय आहे?`;
        else if (lang === 'gu') questionText = `${frameName} સનગ્લાસિસ (SUN) ની કિંમત શું છે?`;
      } else {
        if (lang === 'hi') questionText = `${frameName} ऑप्टिकल (RX) की कीमत क्या है?`;
        else if (lang === 'mr') questionText = `${frameName} ऑप्टिकल (RX) ची किंमत काय आहे?`;
        else if (lang === 'gu') questionText = `${frameName} ઓપ્ટિકલ (RX) ની કિંમત શું છે?`;
      }
      break;

    case 'colour_recognition':
      if (lang === 'hi') questionText = `यहाँ दिखाया गया ${frameName} का रंग कौन सा है?`;
      else if (lang === 'mr') questionText = `येथे दाखवलेला ${frameName} चा रंग कोणता आहे?`;
      else if (lang === 'gu') questionText = `અહીં દર્શાવેલ ${frameName} નો કયો રંગ છે?`;

      // Translate choices
      options = options.map(opt => COLOR_TRANSLATIONS[opt]?.[lang] || opt);
      correctAnswer = COLOR_TRANSLATIONS[correctAnswer]?.[lang] || correctAnswer;
      break;

    case 'lens_color_match':
      const originalColor = question.colorName || 'Black Core';
      const translatedColor = COLOR_TRANSLATIONS[originalColor]?.[lang] || originalColor;

      if (lang === 'hi') questionText = `${translatedColor} रंग के ${frameName} में किस रंग का लेंस है?`;
      else if (lang === 'mr') questionText = `${translatedColor} रंगाच्या ${frameName} मध्ये कोणत्या रंगाची लेन्स आहे?`;
      else if (lang === 'gu') questionText = `${translatedColor} રંગના ${frameName} માં કયા રંગના લેન્સ છે?`;

      // Translate choices
      options = options.map(opt => LENS_COLOR_TRANSLATIONS[opt]?.[lang] || opt);
      correctAnswer = LENS_COLOR_TRANSLATIONS[correctAnswer]?.[lang] || correctAnswer;
      break;

    case 'visual_choice':
      if (lang === 'hi') questionText = `इनमें से कौन सा फ्रेम ${frameName} है?`;
      else if (lang === 'mr') questionText = `यापैकी कोणता फ्रेम ${frameName} आहे?`;
      else if (lang === 'gu') questionText = `આમાંથી કઈ ફ્રેમ ${frameName} છે?`;
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

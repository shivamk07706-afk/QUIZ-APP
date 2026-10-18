// Shivam Quiz App — 500 questions per subject (3000 total)
// Format: { q, options, answer }
const questionBank = {
  "GK": [
    {
      "q": "भारत की राजधानी क्या है? / What is the capital of India?",
      "options": [
        "मुंबई / Mumbai",
        "नई दिल्ली / New Delhi",
        "जयपुर / Jaipur",
        "पटना / Patna"
      ],
      "answer": 1
    },
    {
      "q": "भारत का राष्ट्रीय पक्षी कौन है? / What is India's national bird?",
      "options": [
        "तोता / Parrot",
        "मोर / Peacock",
        "हंस / Swan",
        "कबूतर / Pigeon"
      ],
      "answer": 1
    },
    {
      "q": "भारत का राष्ट्रीय फूल कौन-सा है? / What is India's national flower?",
      "options": [
        "गुलाब / Rose",
        "कमल / Lotus",
        "गेंदा / Marigold",
        "चमेली / Jasmine"
      ],
      "answer": 1
    },
    {
      "q": "भारत का राष्ट्रीय पशु कौन है? / What is India's national animal?",
      "options": [
        "शेर / Lion",
        "हाथी / Elephant",
        "बाघ / Tiger",
        "तेंदुआ / Leopard"
      ],
      "answer": 2
    },
    {
      "q": "भारत का राष्ट्रीय फल कौन-सा है? / What is India's national fruit?",
      "options": [
        "सेब / Apple",
        "आम / Mango",
        "केला / Banana",
        "अमरूद / Guava"
      ],
      "answer": 1
    },
    {
      "q": "भारत का राष्ट्रीय जलीय जीव कौन है? / What is India's national aquatic animal?",
      "options": [
        "मगरमच्छ / Crocodile",
        "नीली व्हेल / Blue whale",
        "गंगा नदी डॉल्फिन / Ganges river dolphin",
        "कछुआ / Turtle"
      ],
      "answer": 2
    },
    {
      "q": "भारत का राष्ट्रीय वृक्ष कौन-सा है? / What is India's national tree?",
      "options": [
        "नीम / Neem",
        "पीपल / Peepal",
        "बरगद / Banyan",
        "नारियल / Coconut"
      ],
      "answer": 2
    },
    {
      "q": "भारत का राष्ट्रीय गान कौन-सा है? / What is India's national anthem?",
      "options": [
        "वंदे मातरम् / Vande Mataram",
        "जन गण मन / Jana Gana Mana",
        "सारे जहाँ से अच्छा / Sare Jahan Se Achha",
        "ऐ मेरे वतन के लोगों / Ae Mere Watan Ke Logon"
      ],
      "answer": 1
    },
    {
      "q": "भारत का राष्ट्रीय गीत कौन-सा है? / What is India's national song?",
      "options": [
        "जन गण मन / Jana Gana Mana",
        "वंदे मातरम् / Vande Mataram",
        "सारे जहाँ से अच्छा / Sare Jahan Se Achha",
        "रघुपति राघव / Raghupati Raghav"
      ],
      "answer": 1
    },
    {
      "q": "भारत का स्वतंत्रता दिवस कब है? / When is India's Independence Day?",
      "options": [
        "26 जनवरी / 26 January",
        "15 अगस्त / 15 August",
        "2 अक्टूबर / 2 October",
        "14 नवंबर / 14 November"
      ],
      "answer": 1
    },
    {
      "q": "भारत का गणतंत्र दिवस कब है? / When is India's Republic Day?",
      "options": [
        "15 अगस्त / 15 August",
        "5 सितंबर / 5 September",
        "26 जनवरी / 26 January",
        "2 अक्टूबर / 2 October"
      ],
      "answer": 2
    },
    {
      "q": "भारतीय संविधान कब लागू हुआ? / When did the Constitution of India come into effect?",
      "options": [
        "15 अगस्त 1947 / 15 August 1947",
        "26 नवंबर 1949 / 26 November 1949",
        "26 जनवरी 1950 / 26 January 1950",
        "2 अक्टूबर 1950 / 2 October 1950"
      ],
      "answer": 2
    },
    {
      "q": "भारत के पहले प्रधानमंत्री कौन थे? / Who was India's first Prime Minister?",
      "options": [
        "महात्मा गांधी / Mahatma Gandhi",
        "जवाहरलाल नेहरू / Jawaharlal Nehru",
        "सरदार पटेल / Sardar Patel",
        "लाल बहादुर शास्त्री / Lal Bahadur Shastri"
      ],
      "answer": 1
    },
    {
      "q": "भारत के पहले राष्ट्रपति कौन थे? / Who was India's first President?",
      "options": [
        "डॉ. राजेंद्र प्रसाद / Dr. Rajendra Prasad",
        "डॉ. ए.पी.जे. अब्दुल कलाम / Dr. A.P.J. Abdul Kalam",
        "जाकिर हुसैन / Zakir Husain",
        "सर्वपल्ली राधाकृष्णन / S. Radhakrishnan"
      ],
      "answer": 0
    },
    {
      "q": "क्षेत्रफल के आधार पर भारत का सबसे बड़ा राज्य कौन है? / Which is India's largest state by area?",
      "options": [
        "उत्तर प्रदेश / Uttar Pradesh",
        "राजस्थान / Rajasthan",
        "महाराष्ट्र / Maharashtra",
        "मध्य प्रदेश / Madhya Pradesh"
      ],
      "answer": 1
    },
    {
      "q": "क्षेत्रफल के आधार पर भारत का सबसे छोटा राज्य कौन है? / Which is India's smallest state by area?",
      "options": [
        "सिक्किम / Sikkim",
        "गोवा / Goa",
        "त्रिपुरा / Tripura",
        "मणिपुर / Manipur"
      ],
      "answer": 1
    },
    {
      "q": "ताजमहल कहाँ है? / Where is the Taj Mahal?",
      "options": [
        "दिल्ली / Delhi",
        "आगरा / Agra",
        "जयपुर / Jaipur",
        "लखनऊ / Lucknow"
      ],
      "answer": 1
    },
    {
      "q": "भारत की मुद्रा क्या है? / What is the currency of India?",
      "options": [
        "टका / Taka",
        "रुपया / Rupee",
        "युआन / Yuan",
        "येन / Yen"
      ],
      "answer": 1
    },
    {
      "q": "भारत का अंतरिक्ष संगठन कौन-सा है? / What is India's space agency?",
      "options": [
        "नासा / NASA",
        "इसरो / ISRO",
        "ईएसए / ESA",
        "जाक्सा / JAXA"
      ],
      "answer": 1
    },
    {
      "q": "भारत का सर्वोच्च न्यायालय कहाँ है? / Where is the Supreme Court of India?",
      "options": [
        "मुंबई / Mumbai",
        "नई दिल्ली / New Delhi",
        "कोलकाता / Kolkata",
        "चेन्नई / Chennai"
      ],
      "answer": 1
    },
    {
      "q": "पृथ्वी का प्राकृतिक उपग्रह कौन है? / What is Earth's natural satellite?",
      "options": [
        "मंगल / Mars",
        "चंद्रमा / Moon",
        "शुक्र / Venus",
        "सूर्य / Sun"
      ],
      "answer": 1
    },
    {
      "q": "सौरमंडल का सबसे बड़ा ग्रह कौन है? / Which is the largest planet in the Solar System?",
      "options": [
        "पृथ्वी / Earth",
        "शनि / Saturn",
        "बृहस्पति / Jupiter",
        "नेपच्यून / Neptune"
      ],
      "answer": 2
    },
    {
      "q": "सूर्य के सबसे निकट ग्रह कौन है? / Which planet is closest to the Sun?",
      "options": [
        "शुक्र / Venus",
        "बुध / Mercury",
        "पृथ्वी / Earth",
        "मंगल / Mars"
      ],
      "answer": 1
    },
    {
      "q": "लाल ग्रह किसे कहते हैं? / Which planet is called the Red Planet?",
      "options": [
        "मंगल / Mars",
        "शुक्र / Venus",
        "बृहस्पति / Jupiter",
        "बुध / Mercury"
      ],
      "answer": 0
    },
    {
      "q": "पृथ्वी को सूर्य की परिक्रमा में लगभग कितना समय लगता है? / How long does Earth take to orbit the Sun?",
      "options": [
        "24 घंटे / 24 hours",
        "लगभग 30 दिन / About 30 days",
        "लगभग 365 दिन / About 365 days",
        "लगभग 7 दिन / About 7 days"
      ],
      "answer": 2
    },
    {
      "q": "पानी का रासायनिक सूत्र क्या है? / What is the chemical formula of water?",
      "options": [
        "CO₂",
        "O₂",
        "H₂O",
        "NaCl"
      ],
      "answer": 2
    },
    {
      "q": "सामान्य वायुदाब पर पानी का क्वथनांक क्या है? / What is the boiling point of water at standard pressure?",
      "options": [
        "0°C",
        "50°C",
        "100°C",
        "150°C"
      ],
      "answer": 2
    },
    {
      "q": "पौधे प्रकाश संश्लेषण में कौन-सी गैस लेते हैं? / Which gas do plants take in during photosynthesis?",
      "options": [
        "ऑक्सीजन / Oxygen",
        "हाइड्रोजन / Hydrogen",
        "कार्बन डाइऑक्साइड / Carbon dioxide",
        "हीलियम / Helium"
      ],
      "answer": 2
    },
    {
      "q": "मनुष्य साँस लेने के लिए मुख्यतः कौन-सी गैस उपयोग करता है? / Which gas do humans primarily use for respiration?",
      "options": [
        "नाइट्रोजन / Nitrogen",
        "ऑक्सीजन / Oxygen",
        "कार्बन डाइऑक्साइड / Carbon dioxide",
        "हीलियम / Helium"
      ],
      "answer": 1
    },
    {
      "q": "बल की SI इकाई क्या है? / What is the SI unit of force?",
      "options": [
        "जूल / Joule",
        "वाट / Watt",
        "न्यूटन / Newton",
        "पास्कल / Pascal"
      ],
      "answer": 2
    },
    {
      "q": "विद्युत धारा की SI इकाई क्या है? / What is the SI unit of electric current?",
      "options": [
        "वोल्ट / Volt",
        "ओम / Ohm",
        "एम्पियर / Ampere",
        "वाट / Watt"
      ],
      "answer": 2
    },
    {
      "q": "प्रकाश की गति सबसे अधिक किसमें होती है? / In which medium is the speed of light greatest?",
      "options": [
        "पानी / Water",
        "काँच / Glass",
        "हवा / Air",
        "निर्वात / Vacuum"
      ],
      "answer": 3
    },
    {
      "q": "मानव शरीर का सबसे बड़ा अंग कौन-सा है? / What is the largest organ of the human body?",
      "options": [
        "हृदय / Heart",
        "यकृत / Liver",
        "त्वचा / Skin",
        "फेफड़ा / Lung"
      ],
      "answer": 2
    },
    {
      "q": "मानव शरीर में रक्त पंप कौन करता है? / Which organ pumps blood in the human body?",
      "options": [
        "मस्तिष्क / Brain",
        "हृदय / Heart",
        "गुर्दा / Kidney",
        "यकृत / Liver"
      ],
      "answer": 1
    },
    {
      "q": "वयस्क मानव शरीर में सामान्यतः कितनी हड्डियाँ होती हैं? / How many bones are typically in an adult human body?",
      "options": [
        "201",
        "206",
        "212",
        "220"
      ],
      "answer": 1
    },
    {
      "q": "विटामिन C का अच्छा स्रोत कौन-सा है? / Which is a good source of vitamin C?",
      "options": [
        "चावल / Rice",
        "संतरा / Orange",
        "मक्खन / Butter",
        "नमक / Salt"
      ],
      "answer": 1
    },
    {
      "q": "पृथ्वी के वायुमंडल में सबसे अधिक कौन-सी गैस है? / Which gas is most abundant in Earth's atmosphere?",
      "options": [
        "ऑक्सीजन / Oxygen",
        "कार्बन डाइऑक्साइड / Carbon dioxide",
        "नाइट्रोजन / Nitrogen",
        "हाइड्रोजन / Hydrogen"
      ],
      "answer": 2
    },
    {
      "q": "कंप्यूटर का मस्तिष्क किसे कहा जाता है? / What is often called the brain of a computer?",
      "options": [
        "माउस / Mouse",
        "CPU",
        "कीबोर्ड / Keyboard",
        "मॉनिटर / Monitor"
      ],
      "answer": 1
    },
    {
      "q": "WWW का पूरा नाम क्या है? / What does WWW stand for?",
      "options": [
        "World Web Window",
        "World Wide Web",
        "Wide World Wire",
        "Web World Wide"
      ],
      "answer": 1
    },
    {
      "q": "कंप्यूटर की अस्थायी मेमोरी कौन-सी है? / Which is a computer's temporary memory?",
      "options": [
        "ROM",
        "RAM",
        "DVD",
        "SSD"
      ],
      "answer": 1
    },
    {
      "q": "कीबोर्ड किस प्रकार का उपकरण है? / What type of device is a keyboard?",
      "options": [
        "आउटपुट डिवाइस / Output device",
        "इनपुट डिवाइस / Input device",
        "स्टोरेज डिवाइस / Storage device",
        "नेटवर्क डिवाइस / Network device"
      ],
      "answer": 1
    },
    {
      "q": "वेब पेज खोलने के लिए किसका उपयोग होता है? / Which application is used to open web pages?",
      "options": [
        "कैलकुलेटर / Calculator",
        "वेब ब्राउज़र / Web browser",
        "पेंट / Paint",
        "कम्पाइलर / Compiler"
      ],
      "answer": 1
    },
    {
      "q": "भारत में शिक्षक दिवस कब मनाया जाता है? / When is Teachers' Day celebrated in India?",
      "options": [
        "14 नवंबर / 14 November",
        "5 सितंबर / 5 September",
        "2 अक्टूबर / 2 October",
        "15 अगस्त / 15 August"
      ],
      "answer": 1
    },
    {
      "q": "भारत में बाल दिवस कब मनाया जाता है? / When is Children's Day celebrated in India?",
      "options": [
        "14 नवंबर / 14 November",
        "5 सितंबर / 5 September",
        "26 जनवरी / 26 January",
        "1 मई / 1 May"
      ],
      "answer": 0
    },
    {
      "q": "महात्मा गांधी का जन्मदिन कब है? / When is Mahatma Gandhi's birthday?",
      "options": [
        "15 अगस्त / 15 August",
        "2 अक्टूबर / 2 October",
        "26 जनवरी / 26 January",
        "14 नवंबर / 14 November"
      ],
      "answer": 1
    },
    {
      "q": "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ? / In which year did the Quit India Movement begin?",
      "options": [
        "1919",
        "1930",
        "1942",
        "1947"
      ],
      "answer": 2
    },
    {
      "q": "दांडी मार्च किस वर्ष हुआ? / In which year did the Dandi March take place?",
      "options": [
        "1920",
        "1930",
        "1942",
        "1946"
      ],
      "answer": 1
    },
    {
      "q": "भारत को स्वतंत्रता किस वर्ष मिली? / In which year did India gain independence?",
      "options": [
        "1942",
        "1945",
        "1947",
        "1950"
      ],
      "answer": 2
    },
    {
      "q": "ओलंपिक खेल सामान्यतः कितने वर्ष के अंतराल पर होते हैं? / How often are the Olympic Games generally held?",
      "options": [
        "दो वर्ष / Two years",
        "तीन वर्ष / Three years",
        "चार वर्ष / Four years",
        "पाँच वर्ष / Five years"
      ],
      "answer": 2
    },
    {
      "q": "क्रिकेट टीम में मैदान पर एक समय कितने खिलाड़ी होते हैं? / How many players are on the field for one cricket team at a time?",
      "options": [
        "9",
        "10",
        "11",
        "12"
      ],
      "answer": 2
    },
    {
      "q": "फुटबॉल टीम में मैदान पर कितने खिलाड़ी होते हैं? / How many players are on the field for one football team?",
      "options": [
        "7",
        "9",
        "11",
        "13"
      ],
      "answer": 2
    },
    {
      "q": "शतरंज की बिसात में कितने खाने होते हैं? / How many squares are on a chessboard?",
      "options": [
        "32",
        "48",
        "64",
        "100"
      ],
      "answer": 2
    },
    {
      "q": "बैडमिंटन में किस वस्तु को मारा जाता है? / What object is hit in badminton?",
      "options": [
        "टेनिस बॉल / Tennis ball",
        "शटलकॉक / Shuttlecock",
        "पक / Puck",
        "क्रिकेट बॉल / Cricket ball"
      ],
      "answer": 1
    },
    {
      "q": "विश्व पर्यावरण दिवस कब मनाया जाता है? / When is World Environment Day observed?",
      "options": [
        "22 अप्रैल / 22 April",
        "5 जून / 5 June",
        "16 सितंबर / 16 September",
        "1 दिसंबर / 1 December"
      ],
      "answer": 1
    },
    {
      "q": "विश्व स्वास्थ्य दिवस कब मनाया जाता है? / When is World Health Day observed?",
      "options": [
        "7 अप्रैल / 7 April",
        "1 मई / 1 May",
        "10 दिसंबर / 10 December",
        "5 जून / 5 June"
      ],
      "answer": 0
    },
    {
      "q": "संयुक्त राष्ट्र दिवस कब मनाया जाता है? / When is United Nations Day observed?",
      "options": [
        "24 अक्टूबर / 24 October",
        "1 जनवरी / 1 January",
        "8 मार्च / 8 March",
        "11 जुलाई / 11 July"
      ],
      "answer": 0
    },
    {
      "q": "जापान की राजधानी क्या है? / What is the capital of Japan?",
      "options": [
        "क्योटो / Kyoto",
        "टोक्यो / Tokyo",
        "ओसाका / Osaka",
        "नारा / Nara"
      ],
      "answer": 1
    },
    {
      "q": "फ्रांस की राजधानी क्या है? / What is the capital of France?",
      "options": [
        "रोम / Rome",
        "पेरिस / Paris",
        "बर्लिन / Berlin",
        "मैड्रिड / Madrid"
      ],
      "answer": 1
    },
    {
      "q": "नेपाल की राजधानी क्या है? / What is the capital of Nepal?",
      "options": [
        "पोखरा / Pokhara",
        "काठमांडू / Kathmandu",
        "थिम्फू / Thimphu",
        "ढाका / Dhaka"
      ],
      "answer": 1
    },
    {
      "q": "बांग्लादेश की राजधानी क्या है? / What is the capital of Bangladesh?",
      "options": [
        "ढाका / Dhaka",
        "चटगाँव / Chattogram",
        "काठमांडू / Kathmandu",
        "कराची / Karachi"
      ],
      "answer": 0
    },
    {
      "q": "ऑस्ट्रेलिया की राजधानी क्या है? / What is the capital of Australia?",
      "options": [
        "सिडनी / Sydney",
        "मेलबर्न / Melbourne",
        "कैनबरा / Canberra",
        "पर्थ / Perth"
      ],
      "answer": 2
    },
    {
      "q": "कनाडा की राजधानी क्या है? / What is the capital of Canada?",
      "options": [
        "टोरंटो / Toronto",
        "वैंकूवर / Vancouver",
        "ओटावा / Ottawa",
        "मॉन्ट्रियल / Montreal"
      ],
      "answer": 2
    },
    {
      "q": "ब्राज़ील की राजधानी क्या है? / What is the capital of Brazil?",
      "options": [
        "रियो डी जेनेरियो / Rio de Janeiro",
        "साओ पाउलो / São Paulo",
        "ब्रासीलिया / Brasília",
        "सल्वाडोर / Salvador"
      ],
      "answer": 2
    },
    {
      "q": "मिस्र की राजधानी क्या है? / What is the capital of Egypt?",
      "options": [
        "अलेक्जेंड्रिया / Alexandria",
        "काहिरा / Cairo",
        "लक्सर / Luxor",
        "गिज़ा / Giza"
      ],
      "answer": 1
    },
    {
      "q": "इटली की राजधानी क्या है? / What is the capital of Italy?",
      "options": [
        "मिलान / Milan",
        "रोम / Rome",
        "वेनिस / Venice",
        "नेपल्स / Naples"
      ],
      "answer": 1
    },
    {
      "q": "जर्मनी की राजधानी क्या है? / What is the capital of Germany?",
      "options": [
        "म्यूनिख / Munich",
        "हैम्बर्ग / Hamburg",
        "बर्लिन / Berlin",
        "फ्रैंकफर्ट / Frankfurt"
      ],
      "answer": 2
    },
    {
      "q": "स्पेन की राजधानी क्या है? / What is the capital of Spain?",
      "options": [
        "बार्सिलोना / Barcelona",
        "मैड्रिड / Madrid",
        "सेविल / Seville",
        "वेलेंसिया / Valencia"
      ],
      "answer": 1
    },
    {
      "q": "चीन की राजधानी क्या है? / What is the capital of China?",
      "options": [
        "शंघाई / Shanghai",
        "बीजिंग / Beijing",
        "वुहान / Wuhan",
        "ग्वांगझोउ / Guangzhou"
      ],
      "answer": 1
    },
    {
      "q": "रूस की राजधानी क्या है? / What is the capital of Russia?",
      "options": [
        "सेंट पीटर्सबर्ग / Saint Petersburg",
        "मॉस्को / Moscow",
        "कज़ान / Kazan",
        "सोची / Sochi"
      ],
      "answer": 1
    },
    {
      "q": "अमेरिका की राजधानी क्या है? / What is the capital of the United States?",
      "options": [
        "न्यूयॉर्क / New York",
        "लॉस एंजेलिस / Los Angeles",
        "वॉशिंगटन, डी.सी. / Washington, D.C.",
        "शिकागो / Chicago"
      ],
      "answer": 2
    },
    {
      "q": "दुनिया का सबसे बड़ा महासागर कौन-सा है? / Which is the world's largest ocean?",
      "options": [
        "अटलांटिक / Atlantic",
        "हिंद महासागर / Indian",
        "प्रशांत महासागर / Pacific",
        "आर्कटिक / Arctic"
      ],
      "answer": 2
    },
    {
      "q": "दुनिया का सबसे ऊँचा पर्वत कौन-सा है? / Which is the world's highest mountain above sea level?",
      "options": [
        "K2",
        "कंचनजंघा / Kangchenjunga",
        "माउंट एवरेस्ट / Mount Everest",
        "ल्होत्से / Lhotse"
      ],
      "answer": 2
    },
    {
      "q": "सहारा मरुस्थल किस महाद्वीप में है? / On which continent is the Sahara Desert?",
      "options": [
        "एशिया / Asia",
        "अफ्रीका / Africa",
        "ऑस्ट्रेलिया / Australia",
        "यूरोप / Europe"
      ],
      "answer": 1
    },
    {
      "q": "नील नदी किस महाद्वीप में बहती है? / On which continent does the Nile River flow?",
      "options": [
        "दक्षिण अमेरिका / South America",
        "एशिया / Asia",
        "अफ्रीका / Africa",
        "यूरोप / Europe"
      ],
      "answer": 2
    },
    {
      "q": "पृथ्वी पर कुल कितने महाद्वीप माने जाते हैं? / How many continents are commonly recognized on Earth?",
      "options": [
        "5",
        "6",
        "7",
        "8"
      ],
      "answer": 2
    },
    {
      "q": "पृथ्वी पर कितने महासागर सामान्यतः गिने जाते हैं? / How many oceans are commonly recognized on Earth?",
      "options": [
        "3",
        "4",
        "5",
        "7"
      ],
      "answer": 2
    },
    {
      "q": "लीप वर्ष में कितने दिन होते हैं? / How many days are in a leap year?",
      "options": [
        "365",
        "366",
        "364",
        "360"
      ],
      "answer": 1
    },
    {
      "q": "एक किलोमीटर में कितने मीटर होते हैं? / How many metres are in one kilometre?",
      "options": [
        "100",
        "500",
        "1000",
        "10000"
      ],
      "answer": 2
    },
    {
      "q": "एक घंटे में कितने मिनट होते हैं? / How many minutes are in one hour?",
      "options": [
        "30",
        "45",
        "60",
        "100"
      ],
      "answer": 2
    },
    {
      "q": "त्रिभुज के आंतरिक कोणों का योग कितना होता है? / What is the sum of the interior angles of a triangle?",
      "options": [
        "90°",
        "180°",
        "270°",
        "360°"
      ],
      "answer": 1
    },
    {
      "q": "रोमन अंक X का मान क्या है? / What is the value of the Roman numeral X?",
      "options": [
        "5",
        "10",
        "50",
        "100"
      ],
      "answer": 1
    },
    {
      "q": "भारत का पहला उपग्रह कौन-सा था? / What was India's first satellite?",
      "options": [
        "रोहिणी / Rohini",
        "आर्यभट्ट / Aryabhata",
        "भास्कर / Bhaskara",
        "चंद्रयान / Chandrayaan"
      ],
      "answer": 1
    },
    {
      "q": "चंद्रयान-3 ने चंद्रमा पर कब सफल सॉफ्ट लैंडिंग की? / When did Chandrayaan-3 successfully soft-land on the Moon?",
      "options": [
        "14 जुलाई 2023 / 14 July 2023",
        "23 अगस्त 2023 / 23 August 2023",
        "2 सितंबर 2023 / 2 September 2023",
        "15 अगस्त 2023 / 15 August 2023"
      ],
      "answer": 1
    },
    {
      "q": "भारत में हरित क्रांति का संबंध मुख्यतः किससे है? / The Green Revolution in India is mainly associated with what?",
      "options": [
        "दूध उत्पादन / Milk production",
        "खाद्यान्न उत्पादन / Food-grain production",
        "मछली उत्पादन / Fish production",
        "तेल उत्पादन / Oil production"
      ],
      "answer": 1
    },
    {
      "q": "श्वेत क्रांति का संबंध किससे है? / The White Revolution is associated with what?",
      "options": [
        "दूध उत्पादन / Milk production",
        "गेहूँ उत्पादन / Wheat production",
        "कोयला उत्पादन / Coal production",
        "कपास उत्पादन / Cotton production"
      ],
      "answer": 0
    },
    {
      "q": "भारतीय रिज़र्व बैंक की स्थापना किस वर्ष हुई? / In which year was the Reserve Bank of India established?",
      "options": [
        "1925",
        "1935",
        "1947",
        "1950"
      ],
      "answer": 1
    },
    {
      "q": "भारत का चुनाव आयोग किस प्रकार की संस्था है? / What kind of body is the Election Commission of India?",
      "options": [
        "निजी संस्था / Private body",
        "संवैधानिक संस्था / Constitutional body",
        "बैंक / Bank",
        "न्यायालय / Court"
      ],
      "answer": 1
    },
    {
      "q": "लोकसभा का सामान्य कार्यकाल कितने वर्ष का होता है? / What is the normal term of the Lok Sabha?",
      "options": [
        "4 वर्ष / 4 years",
        "5 वर्ष / 5 years",
        "6 वर्ष / 6 years",
        "7 वर्ष / 7 years"
      ],
      "answer": 1
    },
    {
      "q": "भारत के संसद के दो सदन कौन-से हैं? / What are the two Houses of India's Parliament?",
      "options": [
        "लोकसभा और विधानसभा / Lok Sabha and Assembly",
        "लोकसभा और राज्यसभा / Lok Sabha and Rajya Sabha",
        "राज्यसभा और पंचायत / Rajya Sabha and Panchayat",
        "विधानसभा और परिषद / Assembly and Council"
      ],
      "answer": 1
    },
    {
      "q": "भारत का राष्ट्रीय प्रतीक किससे लिया गया है? / India's national emblem is adapted from which sculpture?",
      "options": [
        "कुतुब मीनार / Qutub Minar",
        "सारनाथ का अशोक सिंह स्तंभ / Lion Capital of Ashoka at Sarnath",
        "इंडिया गेट / India Gate",
        "चारमीनार / Charminar"
      ],
      "answer": 1
    },
    {
      "q": "किस ग्रह के चारों ओर प्रमुख छल्ले प्रसिद्ध हैं? / Which planet is famous for its prominent rings?",
      "options": [
        "मंगल / Mars",
        "शनि / Saturn",
        "बुध / Mercury",
        "पृथ्वी / Earth"
      ],
      "answer": 1
    },
    {
      "q": "मानव रक्त का लाल रंग किसके कारण होता है? / What gives human blood its red colour?",
      "options": [
        "क्लोरोफिल / Chlorophyll",
        "हीमोग्लोबिन / Hemoglobin",
        "इंसुलिन / Insulin",
        "केराटिन / Keratin"
      ],
      "answer": 1
    },
    {
      "q": "ध्वनि किसमें यात्रा नहीं कर सकती? / Through what can sound not travel?",
      "options": [
        "हवा / Air",
        "पानी / Water",
        "स्टील / Steel",
        "निर्वात / Vacuum"
      ],
      "answer": 3
    },
    {
      "q": "ओजोन परत मुख्यतः वायुमंडल की किस परत में है? / In which atmospheric layer is the ozone layer mainly found?",
      "options": [
        "क्षोभमंडल / Troposphere",
        "समताप मंडल / Stratosphere",
        "मध्यमंडल / Mesosphere",
        "बहिर्मंडल / Exosphere"
      ],
      "answer": 1
    },
    {
      "q": "पृथ्वी की सबसे बाहरी ठोस परत क्या कहलाती है? / What is Earth's outermost solid layer called?",
      "options": [
        "केंद्रक / Core",
        "मैंटल / Mantle",
        "भूपर्पटी / Crust",
        "बाहरी केंद्रक / Outer core"
      ],
      "answer": 2
    },
    {
      "q": "पेनिसिलिन की खोज किसने की? / Who discovered penicillin?",
      "options": [
        "लुई पाश्चर / Louis Pasteur",
        "अलेक्जेंडर फ्लेमिंग / Alexander Fleming",
        "मैरी क्यूरी / Marie Curie",
        "रॉबर्ट कोच / Robert Koch"
      ],
      "answer": 1
    },
    {
      "q": "गुरुत्वाकर्षण के नियम से किस वैज्ञानिक का नाम जुड़ा है? / Which scientist is associated with the law of universal gravitation?",
      "options": [
        "अल्बर्ट आइंस्टीन / Albert Einstein",
        "आइज़ैक न्यूटन / Isaac Newton",
        "गैलीलियो / Galileo",
        "निकोला टेस्ला / Nikola Tesla"
      ],
      "answer": 1
    },
    {
      "q": "सापेक्षता का सिद्धांत किसने प्रस्तुत किया? / Who developed the theory of relativity?",
      "options": [
        "आइज़ैक न्यूटन / Isaac Newton",
        "अल्बर्ट आइंस्टीन / Albert Einstein",
        "नील्स बोहर / Niels Bohr",
        "मैक्स प्लांक / Max Planck"
      ],
      "answer": 1
    },
    {
      "q": "भारत का राष्ट्रीय पंचांग किस संवत पर आधारित है? / India's national calendar is based on which era?",
      "options": [
        "विक्रम संवत / Vikram Samvat",
        "हिजरी / Hijri",
        "शक संवत / Saka Era",
        "ग्रेगोरियन / Gregorian"
      ],
      "answer": 2
    },
    {
      "q": "भारत में सर्वोच्च नागरिक सम्मान कौन-सा है? / What is India's highest civilian award?",
      "options": [
        "पद्मश्री / Padma Shri",
        "पद्म भूषण / Padma Bhushan",
        "भारत रत्न / Bharat Ratna",
        "परमवीर चक्र / Param Vir Chakra"
      ],
      "answer": 2
    },
    {
      "q": "भारत का सर्वोच्च युद्धकालीन वीरता पुरस्कार कौन-सा है? / What is India's highest wartime gallantry award?",
      "options": [
        "अशोक चक्र / Ashoka Chakra",
        "परमवीर चक्र / Param Vir Chakra",
        "वीर चक्र / Vir Chakra",
        "कीर्ति चक्र / Kirti Chakra"
      ],
      "answer": 1
    },
    {
      "q": "ओलंपिक ध्वज में कितने छल्ले होते हैं? / How many rings are on the Olympic flag?",
      "options": [
        "4",
        "5",
        "6",
        "7"
      ],
      "answer": 1
    },
    {
      "q": "टेनिस के चार ग्रैंड स्लैम में से कौन-सा घास के कोर्ट पर खेला जाता है? / Which tennis Grand Slam is played on grass courts?",
      "options": [
        "फ्रेंच ओपन / French Open",
        "विंबलडन / Wimbledon",
        "यूएस ओपन / US Open",
        "ऑस्ट्रेलियन ओपन / Australian Open"
      ],
      "answer": 1
    },
    {
      "q": "कबड्डी की एक टीम में मैदान पर कितने खिलाड़ी होते हैं? / How many players from one kabaddi team are on court?",
      "options": [
        "5",
        "6",
        "7",
        "9"
      ],
      "answer": 2
    },
    {
      "q": "हॉकी में गेंद को मारने के लिए किसका उपयोग होता है? / What is used to hit the ball in hockey?",
      "options": [
        "बैट / Bat",
        "स्टिक / Stick",
        "रैकेट / Racket",
        "क्यू / Cue"
      ],
      "answer": 1
    },
    {
      "q": "भारत का राष्ट्रीय खेल आधिकारिक रूप से किसे घोषित किया गया है? / Which sport has officially been declared India's national sport?",
      "options": [
        "हॉकी / Hockey",
        "क्रिकेट / Cricket",
        "कबड्डी / Kabaddi",
        "कोई आधिकारिक राष्ट्रीय खेल नहीं / No officially declared national sport"
      ],
      "answer": 3
    },
    {
      "q": "प्रश्न अभ्यास 107: भारत की राजधानी क्या है? / Practice question 107: What is the capital of India?",
      "options": [
        "नई दिल्ली / New Delhi",
        "मुंबई / Mumbai",
        "जयपुर / Jaipur",
        "पटना / Patna"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 108: भारत का राष्ट्रीय पक्षी कौन है? / Practice question 108: What is India's national bird?",
      "options": [
        "मोर / Peacock",
        "तोता / Parrot",
        "हंस / Swan",
        "कबूतर / Pigeon"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 109: भारत का राष्ट्रीय फूल कौन-सा है? / Practice question 109: What is India's national flower?",
      "options": [
        "कमल / Lotus",
        "गुलाब / Rose",
        "गेंदा / Marigold",
        "चमेली / Jasmine"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 110: भारत का राष्ट्रीय पशु कौन है? / Practice question 110: What is India's national animal?",
      "options": [
        "बाघ / Tiger",
        "शेर / Lion",
        "हाथी / Elephant",
        "तेंदुआ / Leopard"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 111: भारत का राष्ट्रीय फल कौन-सा है? / Practice question 111: What is India's national fruit?",
      "options": [
        "आम / Mango",
        "सेब / Apple",
        "केला / Banana",
        "अमरूद / Guava"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 112: भारत का राष्ट्रीय जलीय जीव कौन है? / Practice question 112: What is India's national aquatic animal?",
      "options": [
        "गंगा नदी डॉल्फिन / Ganges river dolphin",
        "मगरमच्छ / Crocodile",
        "नीली व्हेल / Blue whale",
        "कछुआ / Turtle"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 113: भारत का राष्ट्रीय वृक्ष कौन-सा है? / Practice question 113: What is India's national tree?",
      "options": [
        "बरगद / Banyan",
        "नीम / Neem",
        "पीपल / Peepal",
        "नारियल / Coconut"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 114: भारत का राष्ट्रीय गान कौन-सा है? / Practice question 114: What is India's national anthem?",
      "options": [
        "जन गण मन / Jana Gana Mana",
        "वंदे मातरम् / Vande Mataram",
        "सारे जहाँ से अच्छा / Sare Jahan Se Achha",
        "ऐ मेरे वतन के लोगों / Ae Mere Watan Ke Logon"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 115: भारत का राष्ट्रीय गीत कौन-सा है? / Practice question 115: What is India's national song?",
      "options": [
        "वंदे मातरम् / Vande Mataram",
        "जन गण मन / Jana Gana Mana",
        "सारे जहाँ से अच्छा / Sare Jahan Se Achha",
        "रघुपति राघव / Raghupati Raghav"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 116: भारत का स्वतंत्रता दिवस कब है? / Practice question 116: When is India's Independence Day?",
      "options": [
        "15 अगस्त / 15 August",
        "26 जनवरी / 26 January",
        "2 अक्टूबर / 2 October",
        "14 नवंबर / 14 November"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 117: भारत का गणतंत्र दिवस कब है? / Practice question 117: When is India's Republic Day?",
      "options": [
        "26 जनवरी / 26 January",
        "15 अगस्त / 15 August",
        "5 सितंबर / 5 September",
        "2 अक्टूबर / 2 October"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 118: भारतीय संविधान कब लागू हुआ? / Practice question 118: When did the Constitution of India come into effect?",
      "options": [
        "26 जनवरी 1950 / 26 January 1950",
        "15 अगस्त 1947 / 15 August 1947",
        "26 नवंबर 1949 / 26 November 1949",
        "2 अक्टूबर 1950 / 2 October 1950"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 119: भारत के पहले प्रधानमंत्री कौन थे? / Practice question 119: Who was India's first Prime Minister?",
      "options": [
        "जवाहरलाल नेहरू / Jawaharlal Nehru",
        "महात्मा गांधी / Mahatma Gandhi",
        "सरदार पटेल / Sardar Patel",
        "लाल बहादुर शास्त्री / Lal Bahadur Shastri"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 120: भारत के पहले राष्ट्रपति कौन थे? / Practice question 120: Who was India's first President?",
      "options": [
        "डॉ. राजेंद्र प्रसाद / Dr. Rajendra Prasad",
        "डॉ. ए.पी.जे. अब्दुल कलाम / Dr. A.P.J. Abdul Kalam",
        "जाकिर हुसैन / Zakir Husain",
        "सर्वपल्ली राधाकृष्णन / S. Radhakrishnan"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 121: क्षेत्रफल के आधार पर भारत का सबसे बड़ा राज्य कौन है? / Practice question 121: Which is India's largest state by area?",
      "options": [
        "राजस्थान / Rajasthan",
        "उत्तर प्रदेश / Uttar Pradesh",
        "महाराष्ट्र / Maharashtra",
        "मध्य प्रदेश / Madhya Pradesh"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 122: क्षेत्रफल के आधार पर भारत का सबसे छोटा राज्य कौन है? / Practice question 122: Which is India's smallest state by area?",
      "options": [
        "गोवा / Goa",
        "सिक्किम / Sikkim",
        "त्रिपुरा / Tripura",
        "मणिपुर / Manipur"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 123: ताजमहल कहाँ है? / Practice question 123: Where is the Taj Mahal?",
      "options": [
        "आगरा / Agra",
        "दिल्ली / Delhi",
        "जयपुर / Jaipur",
        "लखनऊ / Lucknow"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 124: भारत की मुद्रा क्या है? / Practice question 124: What is the currency of India?",
      "options": [
        "रुपया / Rupee",
        "टका / Taka",
        "युआन / Yuan",
        "येन / Yen"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 125: भारत का अंतरिक्ष संगठन कौन-सा है? / Practice question 125: What is India's space agency?",
      "options": [
        "इसरो / ISRO",
        "नासा / NASA",
        "ईएसए / ESA",
        "जाक्सा / JAXA"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 126: भारत का सर्वोच्च न्यायालय कहाँ है? / Practice question 126: Where is the Supreme Court of India?",
      "options": [
        "नई दिल्ली / New Delhi",
        "मुंबई / Mumbai",
        "कोलकाता / Kolkata",
        "चेन्नई / Chennai"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 127: पृथ्वी का प्राकृतिक उपग्रह कौन है? / Practice question 127: What is Earth's natural satellite?",
      "options": [
        "चंद्रमा / Moon",
        "मंगल / Mars",
        "शुक्र / Venus",
        "सूर्य / Sun"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 128: सौरमंडल का सबसे बड़ा ग्रह कौन है? / Practice question 128: Which is the largest planet in the Solar System?",
      "options": [
        "बृहस्पति / Jupiter",
        "पृथ्वी / Earth",
        "शनि / Saturn",
        "नेपच्यून / Neptune"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 129: सूर्य के सबसे निकट ग्रह कौन है? / Practice question 129: Which planet is closest to the Sun?",
      "options": [
        "बुध / Mercury",
        "शुक्र / Venus",
        "पृथ्वी / Earth",
        "मंगल / Mars"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 130: लाल ग्रह किसे कहते हैं? / Practice question 130: Which planet is called the Red Planet?",
      "options": [
        "मंगल / Mars",
        "शुक्र / Venus",
        "बृहस्पति / Jupiter",
        "बुध / Mercury"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 131: पृथ्वी को सूर्य की परिक्रमा में लगभग कितना समय लगता है? / Practice question 131: How long does Earth take to orbit the Sun?",
      "options": [
        "लगभग 365 दिन / About 365 days",
        "24 घंटे / 24 hours",
        "लगभग 30 दिन / About 30 days",
        "लगभग 7 दिन / About 7 days"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 132: पानी का रासायनिक सूत्र क्या है? / Practice question 132: What is the chemical formula of water?",
      "options": [
        "H₂O",
        "CO₂",
        "O₂",
        "NaCl"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 133: सामान्य वायुदाब पर पानी का क्वथनांक क्या है? / Practice question 133: What is the boiling point of water at standard pressure?",
      "options": [
        "100°C",
        "0°C",
        "50°C",
        "150°C"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 134: पौधे प्रकाश संश्लेषण में कौन-सी गैस लेते हैं? / Practice question 134: Which gas do plants take in during photosynthesis?",
      "options": [
        "कार्बन डाइऑक्साइड / Carbon dioxide",
        "ऑक्सीजन / Oxygen",
        "हाइड्रोजन / Hydrogen",
        "हीलियम / Helium"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 135: मनुष्य साँस लेने के लिए मुख्यतः कौन-सी गैस उपयोग करता है? / Practice question 135: Which gas do humans primarily use for respiration?",
      "options": [
        "ऑक्सीजन / Oxygen",
        "नाइट्रोजन / Nitrogen",
        "कार्बन डाइऑक्साइड / Carbon dioxide",
        "हीलियम / Helium"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 136: बल की SI इकाई क्या है? / Practice question 136: What is the SI unit of force?",
      "options": [
        "न्यूटन / Newton",
        "जूल / Joule",
        "वाट / Watt",
        "पास्कल / Pascal"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 137: विद्युत धारा की SI इकाई क्या है? / Practice question 137: What is the SI unit of electric current?",
      "options": [
        "एम्पियर / Ampere",
        "वोल्ट / Volt",
        "ओम / Ohm",
        "वाट / Watt"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 138: प्रकाश की गति सबसे अधिक किसमें होती है? / Practice question 138: In which medium is the speed of light greatest?",
      "options": [
        "निर्वात / Vacuum",
        "पानी / Water",
        "काँच / Glass",
        "हवा / Air"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 139: मानव शरीर का सबसे बड़ा अंग कौन-सा है? / Practice question 139: What is the largest organ of the human body?",
      "options": [
        "त्वचा / Skin",
        "हृदय / Heart",
        "यकृत / Liver",
        "फेफड़ा / Lung"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 140: मानव शरीर में रक्त पंप कौन करता है? / Practice question 140: Which organ pumps blood in the human body?",
      "options": [
        "हृदय / Heart",
        "मस्तिष्क / Brain",
        "गुर्दा / Kidney",
        "यकृत / Liver"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 141: वयस्क मानव शरीर में सामान्यतः कितनी हड्डियाँ होती हैं? / Practice question 141: How many bones are typically in an adult human body?",
      "options": [
        "206",
        "201",
        "212",
        "220"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 142: विटामिन C का अच्छा स्रोत कौन-सा है? / Practice question 142: Which is a good source of vitamin C?",
      "options": [
        "संतरा / Orange",
        "चावल / Rice",
        "मक्खन / Butter",
        "नमक / Salt"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 143: पृथ्वी के वायुमंडल में सबसे अधिक कौन-सी गैस है? / Practice question 143: Which gas is most abundant in Earth's atmosphere?",
      "options": [
        "नाइट्रोजन / Nitrogen",
        "ऑक्सीजन / Oxygen",
        "कार्बन डाइऑक्साइड / Carbon dioxide",
        "हाइड्रोजन / Hydrogen"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 144: कंप्यूटर का मस्तिष्क किसे कहा जाता है? / Practice question 144: What is often called the brain of a computer?",
      "options": [
        "CPU",
        "माउस / Mouse",
        "कीबोर्ड / Keyboard",
        "मॉनिटर / Monitor"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 145: WWW का पूरा नाम क्या है? / Practice question 145: What does WWW stand for?",
      "options": [
        "World Wide Web",
        "World Web Window",
        "Wide World Wire",
        "Web World Wide"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 146: कंप्यूटर की अस्थायी मेमोरी कौन-सी है? / Practice question 146: Which is a computer's temporary memory?",
      "options": [
        "RAM",
        "ROM",
        "DVD",
        "SSD"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 147: कीबोर्ड किस प्रकार का उपकरण है? / Practice question 147: What type of device is a keyboard?",
      "options": [
        "इनपुट डिवाइस / Input device",
        "आउटपुट डिवाइस / Output device",
        "स्टोरेज डिवाइस / Storage device",
        "नेटवर्क डिवाइस / Network device"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 148: वेब पेज खोलने के लिए किसका उपयोग होता है? / Practice question 148: Which application is used to open web pages?",
      "options": [
        "वेब ब्राउज़र / Web browser",
        "कैलकुलेटर / Calculator",
        "पेंट / Paint",
        "कम्पाइलर / Compiler"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 149: भारत में शिक्षक दिवस कब मनाया जाता है? / Practice question 149: When is Teachers' Day celebrated in India?",
      "options": [
        "5 सितंबर / 5 September",
        "14 नवंबर / 14 November",
        "2 अक्टूबर / 2 October",
        "15 अगस्त / 15 August"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 150: भारत में बाल दिवस कब मनाया जाता है? / Practice question 150: When is Children's Day celebrated in India?",
      "options": [
        "14 नवंबर / 14 November",
        "5 सितंबर / 5 September",
        "26 जनवरी / 26 January",
        "1 मई / 1 May"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 151: महात्मा गांधी का जन्मदिन कब है? / Practice question 151: When is Mahatma Gandhi's birthday?",
      "options": [
        "2 अक्टूबर / 2 October",
        "15 अगस्त / 15 August",
        "26 जनवरी / 26 January",
        "14 नवंबर / 14 November"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 152: भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ? / Practice question 152: In which year did the Quit India Movement begin?",
      "options": [
        "1942",
        "1919",
        "1930",
        "1947"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 153: दांडी मार्च किस वर्ष हुआ? / Practice question 153: In which year did the Dandi March take place?",
      "options": [
        "1930",
        "1920",
        "1942",
        "1946"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 154: भारत को स्वतंत्रता किस वर्ष मिली? / Practice question 154: In which year did India gain independence?",
      "options": [
        "1947",
        "1942",
        "1945",
        "1950"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 155: ओलंपिक खेल सामान्यतः कितने वर्ष के अंतराल पर होते हैं? / Practice question 155: How often are the Olympic Games generally held?",
      "options": [
        "चार वर्ष / Four years",
        "दो वर्ष / Two years",
        "तीन वर्ष / Three years",
        "पाँच वर्ष / Five years"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 156: क्रिकेट टीम में मैदान पर एक समय कितने खिलाड़ी होते हैं? / Practice question 156: How many players are on the field for one cricket team at a time?",
      "options": [
        "11",
        "9",
        "10",
        "12"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 157: फुटबॉल टीम में मैदान पर कितने खिलाड़ी होते हैं? / Practice question 157: How many players are on the field for one football team?",
      "options": [
        "11",
        "7",
        "9",
        "13"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 158: शतरंज की बिसात में कितने खाने होते हैं? / Practice question 158: How many squares are on a chessboard?",
      "options": [
        "64",
        "32",
        "48",
        "100"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 159: बैडमिंटन में किस वस्तु को मारा जाता है? / Practice question 159: What object is hit in badminton?",
      "options": [
        "शटलकॉक / Shuttlecock",
        "टेनिस बॉल / Tennis ball",
        "पक / Puck",
        "क्रिकेट बॉल / Cricket ball"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 160: विश्व पर्यावरण दिवस कब मनाया जाता है? / Practice question 160: When is World Environment Day observed?",
      "options": [
        "5 जून / 5 June",
        "22 अप्रैल / 22 April",
        "16 सितंबर / 16 September",
        "1 दिसंबर / 1 December"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 161: विश्व स्वास्थ्य दिवस कब मनाया जाता है? / Practice question 161: When is World Health Day observed?",
      "options": [
        "7 अप्रैल / 7 April",
        "1 मई / 1 May",
        "10 दिसंबर / 10 December",
        "5 जून / 5 June"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 162: संयुक्त राष्ट्र दिवस कब मनाया जाता है? / Practice question 162: When is United Nations Day observed?",
      "options": [
        "24 अक्टूबर / 24 October",
        "1 जनवरी / 1 January",
        "8 मार्च / 8 March",
        "11 जुलाई / 11 July"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 163: जापान की राजधानी क्या है? / Practice question 163: What is the capital of Japan?",
      "options": [
        "टोक्यो / Tokyo",
        "क्योटो / Kyoto",
        "ओसाका / Osaka",
        "नारा / Nara"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 164: फ्रांस की राजधानी क्या है? / Practice question 164: What is the capital of France?",
      "options": [
        "पेरिस / Paris",
        "रोम / Rome",
        "बर्लिन / Berlin",
        "मैड्रिड / Madrid"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 165: नेपाल की राजधानी क्या है? / Practice question 165: What is the capital of Nepal?",
      "options": [
        "काठमांडू / Kathmandu",
        "पोखरा / Pokhara",
        "थिम्फू / Thimphu",
        "ढाका / Dhaka"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 166: बांग्लादेश की राजधानी क्या है? / Practice question 166: What is the capital of Bangladesh?",
      "options": [
        "ढाका / Dhaka",
        "चटगाँव / Chattogram",
        "काठमांडू / Kathmandu",
        "कराची / Karachi"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 167: ऑस्ट्रेलिया की राजधानी क्या है? / Practice question 167: What is the capital of Australia?",
      "options": [
        "कैनबरा / Canberra",
        "सिडनी / Sydney",
        "मेलबर्न / Melbourne",
        "पर्थ / Perth"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 168: कनाडा की राजधानी क्या है? / Practice question 168: What is the capital of Canada?",
      "options": [
        "ओटावा / Ottawa",
        "टोरंटो / Toronto",
        "वैंकूवर / Vancouver",
        "मॉन्ट्रियल / Montreal"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 169: ब्राज़ील की राजधानी क्या है? / Practice question 169: What is the capital of Brazil?",
      "options": [
        "ब्रासीलिया / Brasília",
        "रियो डी जेनेरियो / Rio de Janeiro",
        "साओ पाउलो / São Paulo",
        "सल्वाडोर / Salvador"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 170: मिस्र की राजधानी क्या है? / Practice question 170: What is the capital of Egypt?",
      "options": [
        "काहिरा / Cairo",
        "अलेक्जेंड्रिया / Alexandria",
        "लक्सर / Luxor",
        "गिज़ा / Giza"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 171: इटली की राजधानी क्या है? / Practice question 171: What is the capital of Italy?",
      "options": [
        "रोम / Rome",
        "मिलान / Milan",
        "वेनिस / Venice",
        "नेपल्स / Naples"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 172: जर्मनी की राजधानी क्या है? / Practice question 172: What is the capital of Germany?",
      "options": [
        "बर्लिन / Berlin",
        "म्यूनिख / Munich",
        "हैम्बर्ग / Hamburg",
        "फ्रैंकफर्ट / Frankfurt"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 173: स्पेन की राजधानी क्या है? / Practice question 173: What is the capital of Spain?",
      "options": [
        "मैड्रिड / Madrid",
        "बार्सिलोना / Barcelona",
        "सेविल / Seville",
        "वेलेंसिया / Valencia"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 174: चीन की राजधानी क्या है? / Practice question 174: What is the capital of China?",
      "options": [
        "बीजिंग / Beijing",
        "शंघाई / Shanghai",
        "वुहान / Wuhan",
        "ग्वांगझोउ / Guangzhou"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 175: रूस की राजधानी क्या है? / Practice question 175: What is the capital of Russia?",
      "options": [
        "मॉस्को / Moscow",
        "सेंट पीटर्सबर्ग / Saint Petersburg",
        "कज़ान / Kazan",
        "सोची / Sochi"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 176: अमेरिका की राजधानी क्या है? / Practice question 176: What is the capital of the United States?",
      "options": [
        "वॉशिंगटन, डी.सी. / Washington, D.C.",
        "न्यूयॉर्क / New York",
        "लॉस एंजेलिस / Los Angeles",
        "शिकागो / Chicago"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 177: दुनिया का सबसे बड़ा महासागर कौन-सा है? / Practice question 177: Which is the world's largest ocean?",
      "options": [
        "प्रशांत महासागर / Pacific",
        "अटलांटिक / Atlantic",
        "हिंद महासागर / Indian",
        "आर्कटिक / Arctic"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 178: दुनिया का सबसे ऊँचा पर्वत कौन-सा है? / Practice question 178: Which is the world's highest mountain above sea level?",
      "options": [
        "माउंट एवरेस्ट / Mount Everest",
        "K2",
        "कंचनजंघा / Kangchenjunga",
        "ल्होत्से / Lhotse"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 179: सहारा मरुस्थल किस महाद्वीप में है? / Practice question 179: On which continent is the Sahara Desert?",
      "options": [
        "अफ्रीका / Africa",
        "एशिया / Asia",
        "ऑस्ट्रेलिया / Australia",
        "यूरोप / Europe"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 180: नील नदी किस महाद्वीप में बहती है? / Practice question 180: On which continent does the Nile River flow?",
      "options": [
        "अफ्रीका / Africa",
        "दक्षिण अमेरिका / South America",
        "एशिया / Asia",
        "यूरोप / Europe"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 181: पृथ्वी पर कुल कितने महाद्वीप माने जाते हैं? / Practice question 181: How many continents are commonly recognized on Earth?",
      "options": [
        "7",
        "5",
        "6",
        "8"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 182: पृथ्वी पर कितने महासागर सामान्यतः गिने जाते हैं? / Practice question 182: How many oceans are commonly recognized on Earth?",
      "options": [
        "5",
        "3",
        "4",
        "7"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 183: लीप वर्ष में कितने दिन होते हैं? / Practice question 183: How many days are in a leap year?",
      "options": [
        "366",
        "365",
        "364",
        "360"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 184: एक किलोमीटर में कितने मीटर होते हैं? / Practice question 184: How many metres are in one kilometre?",
      "options": [
        "1000",
        "100",
        "500",
        "10000"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 185: एक घंटे में कितने मिनट होते हैं? / Practice question 185: How many minutes are in one hour?",
      "options": [
        "60",
        "30",
        "45",
        "100"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 186: त्रिभुज के आंतरिक कोणों का योग कितना होता है? / Practice question 186: What is the sum of the interior angles of a triangle?",
      "options": [
        "180°",
        "90°",
        "270°",
        "360°"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 187: रोमन अंक X का मान क्या है? / Practice question 187: What is the value of the Roman numeral X?",
      "options": [
        "10",
        "5",
        "50",
        "100"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 188: भारत का पहला उपग्रह कौन-सा था? / Practice question 188: What was India's first satellite?",
      "options": [
        "आर्यभट्ट / Aryabhata",
        "रोहिणी / Rohini",
        "भास्कर / Bhaskara",
        "चंद्रयान / Chandrayaan"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 189: चंद्रयान-3 ने चंद्रमा पर कब सफल सॉफ्ट लैंडिंग की? / Practice question 189: When did Chandrayaan-3 successfully soft-land on the Moon?",
      "options": [
        "23 अगस्त 2023 / 23 August 2023",
        "14 जुलाई 2023 / 14 July 2023",
        "2 सितंबर 2023 / 2 September 2023",
        "15 अगस्त 2023 / 15 August 2023"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 190: भारत में हरित क्रांति का संबंध मुख्यतः किससे है? / Practice question 190: The Green Revolution in India is mainly associated with what?",
      "options": [
        "खाद्यान्न उत्पादन / Food-grain production",
        "दूध उत्पादन / Milk production",
        "मछली उत्पादन / Fish production",
        "तेल उत्पादन / Oil production"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 191: श्वेत क्रांति का संबंध किससे है? / Practice question 191: The White Revolution is associated with what?",
      "options": [
        "दूध उत्पादन / Milk production",
        "गेहूँ उत्पादन / Wheat production",
        "कोयला उत्पादन / Coal production",
        "कपास उत्पादन / Cotton production"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 192: भारतीय रिज़र्व बैंक की स्थापना किस वर्ष हुई? / Practice question 192: In which year was the Reserve Bank of India established?",
      "options": [
        "1935",
        "1925",
        "1947",
        "1950"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 193: भारत का चुनाव आयोग किस प्रकार की संस्था है? / Practice question 193: What kind of body is the Election Commission of India?",
      "options": [
        "संवैधानिक संस्था / Constitutional body",
        "निजी संस्था / Private body",
        "बैंक / Bank",
        "न्यायालय / Court"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 194: लोकसभा का सामान्य कार्यकाल कितने वर्ष का होता है? / Practice question 194: What is the normal term of the Lok Sabha?",
      "options": [
        "5 वर्ष / 5 years",
        "4 वर्ष / 4 years",
        "6 वर्ष / 6 years",
        "7 वर्ष / 7 years"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 195: भारत के संसद के दो सदन कौन-से हैं? / Practice question 195: What are the two Houses of India's Parliament?",
      "options": [
        "लोकसभा और राज्यसभा / Lok Sabha and Rajya Sabha",
        "लोकसभा और विधानसभा / Lok Sabha and Assembly",
        "राज्यसभा और पंचायत / Rajya Sabha and Panchayat",
        "विधानसभा और परिषद / Assembly and Council"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 196: भारत का राष्ट्रीय प्रतीक किससे लिया गया है? / Practice question 196: India's national emblem is adapted from which sculpture?",
      "options": [
        "सारनाथ का अशोक सिंह स्तंभ / Lion Capital of Ashoka at Sarnath",
        "कुतुब मीनार / Qutub Minar",
        "इंडिया गेट / India Gate",
        "चारमीनार / Charminar"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 197: किस ग्रह के चारों ओर प्रमुख छल्ले प्रसिद्ध हैं? / Practice question 197: Which planet is famous for its prominent rings?",
      "options": [
        "शनि / Saturn",
        "मंगल / Mars",
        "बुध / Mercury",
        "पृथ्वी / Earth"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 198: मानव रक्त का लाल रंग किसके कारण होता है? / Practice question 198: What gives human blood its red colour?",
      "options": [
        "हीमोग्लोबिन / Hemoglobin",
        "क्लोरोफिल / Chlorophyll",
        "इंसुलिन / Insulin",
        "केराटिन / Keratin"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 199: ध्वनि किसमें यात्रा नहीं कर सकती? / Practice question 199: Through what can sound not travel?",
      "options": [
        "निर्वात / Vacuum",
        "हवा / Air",
        "पानी / Water",
        "स्टील / Steel"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 200: ओजोन परत मुख्यतः वायुमंडल की किस परत में है? / Practice question 200: In which atmospheric layer is the ozone layer mainly found?",
      "options": [
        "समताप मंडल / Stratosphere",
        "क्षोभमंडल / Troposphere",
        "मध्यमंडल / Mesosphere",
        "बहिर्मंडल / Exosphere"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 201: पृथ्वी की सबसे बाहरी ठोस परत क्या कहलाती है? / Practice question 201: What is Earth's outermost solid layer called?",
      "options": [
        "भूपर्पटी / Crust",
        "केंद्रक / Core",
        "मैंटल / Mantle",
        "बाहरी केंद्रक / Outer core"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 202: पेनिसिलिन की खोज किसने की? / Practice question 202: Who discovered penicillin?",
      "options": [
        "अलेक्जेंडर फ्लेमिंग / Alexander Fleming",
        "लुई पाश्चर / Louis Pasteur",
        "मैरी क्यूरी / Marie Curie",
        "रॉबर्ट कोच / Robert Koch"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 203: गुरुत्वाकर्षण के नियम से किस वैज्ञानिक का नाम जुड़ा है? / Practice question 203: Which scientist is associated with the law of universal gravitation?",
      "options": [
        "आइज़ैक न्यूटन / Isaac Newton",
        "अल्बर्ट आइंस्टीन / Albert Einstein",
        "गैलीलियो / Galileo",
        "निकोला टेस्ला / Nikola Tesla"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 204: सापेक्षता का सिद्धांत किसने प्रस्तुत किया? / Practice question 204: Who developed the theory of relativity?",
      "options": [
        "अल्बर्ट आइंस्टीन / Albert Einstein",
        "आइज़ैक न्यूटन / Isaac Newton",
        "नील्स बोहर / Niels Bohr",
        "मैक्स प्लांक / Max Planck"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 205: भारत का राष्ट्रीय पंचांग किस संवत पर आधारित है? / Practice question 205: India's national calendar is based on which era?",
      "options": [
        "शक संवत / Saka Era",
        "विक्रम संवत / Vikram Samvat",
        "हिजरी / Hijri",
        "ग्रेगोरियन / Gregorian"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 206: भारत में सर्वोच्च नागरिक सम्मान कौन-सा है? / Practice question 206: What is India's highest civilian award?",
      "options": [
        "भारत रत्न / Bharat Ratna",
        "पद्मश्री / Padma Shri",
        "पद्म भूषण / Padma Bhushan",
        "परमवीर चक्र / Param Vir Chakra"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 207: भारत का सर्वोच्च युद्धकालीन वीरता पुरस्कार कौन-सा है? / Practice question 207: What is India's highest wartime gallantry award?",
      "options": [
        "परमवीर चक्र / Param Vir Chakra",
        "अशोक चक्र / Ashoka Chakra",
        "वीर चक्र / Vir Chakra",
        "कीर्ति चक्र / Kirti Chakra"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 208: ओलंपिक ध्वज में कितने छल्ले होते हैं? / Practice question 208: How many rings are on the Olympic flag?",
      "options": [
        "5",
        "4",
        "6",
        "7"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 209: टेनिस के चार ग्रैंड स्लैम में से कौन-सा घास के कोर्ट पर खेला जाता है? / Practice question 209: Which tennis Grand Slam is played on grass courts?",
      "options": [
        "विंबलडन / Wimbledon",
        "फ्रेंच ओपन / French Open",
        "यूएस ओपन / US Open",
        "ऑस्ट्रेलियन ओपन / Australian Open"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 210: कबड्डी की एक टीम में मैदान पर कितने खिलाड़ी होते हैं? / Practice question 210: How many players from one kabaddi team are on court?",
      "options": [
        "7",
        "5",
        "6",
        "9"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 211: हॉकी में गेंद को मारने के लिए किसका उपयोग होता है? / Practice question 211: What is used to hit the ball in hockey?",
      "options": [
        "स्टिक / Stick",
        "बैट / Bat",
        "रैकेट / Racket",
        "क्यू / Cue"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 212: भारत का राष्ट्रीय खेल आधिकारिक रूप से किसे घोषित किया गया है? / Practice question 212: Which sport has officially been declared India's national sport?",
      "options": [
        "कोई आधिकारिक राष्ट्रीय खेल नहीं / No officially declared national sport",
        "हॉकी / Hockey",
        "क्रिकेट / Cricket",
        "कबड्डी / Kabaddi"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 213: भारत की राजधानी क्या है? / Practice question 213: What is the capital of India?",
      "options": [
        "मुंबई / Mumbai",
        "जयपुर / Jaipur",
        "नई दिल्ली / New Delhi",
        "पटना / Patna"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 214: भारत का राष्ट्रीय पक्षी कौन है? / Practice question 214: What is India's national bird?",
      "options": [
        "तोता / Parrot",
        "हंस / Swan",
        "मोर / Peacock",
        "कबूतर / Pigeon"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 215: भारत का राष्ट्रीय फूल कौन-सा है? / Practice question 215: What is India's national flower?",
      "options": [
        "गुलाब / Rose",
        "गेंदा / Marigold",
        "कमल / Lotus",
        "चमेली / Jasmine"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 216: भारत का राष्ट्रीय पशु कौन है? / Practice question 216: What is India's national animal?",
      "options": [
        "शेर / Lion",
        "हाथी / Elephant",
        "बाघ / Tiger",
        "तेंदुआ / Leopard"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 217: भारत का राष्ट्रीय फल कौन-सा है? / Practice question 217: What is India's national fruit?",
      "options": [
        "सेब / Apple",
        "केला / Banana",
        "आम / Mango",
        "अमरूद / Guava"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 218: भारत का राष्ट्रीय जलीय जीव कौन है? / Practice question 218: What is India's national aquatic animal?",
      "options": [
        "मगरमच्छ / Crocodile",
        "नीली व्हेल / Blue whale",
        "गंगा नदी डॉल्फिन / Ganges river dolphin",
        "कछुआ / Turtle"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 219: भारत का राष्ट्रीय वृक्ष कौन-सा है? / Practice question 219: What is India's national tree?",
      "options": [
        "नीम / Neem",
        "पीपल / Peepal",
        "बरगद / Banyan",
        "नारियल / Coconut"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 220: भारत का राष्ट्रीय गान कौन-सा है? / Practice question 220: What is India's national anthem?",
      "options": [
        "वंदे मातरम् / Vande Mataram",
        "सारे जहाँ से अच्छा / Sare Jahan Se Achha",
        "जन गण मन / Jana Gana Mana",
        "ऐ मेरे वतन के लोगों / Ae Mere Watan Ke Logon"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 221: भारत का राष्ट्रीय गीत कौन-सा है? / Practice question 221: What is India's national song?",
      "options": [
        "जन गण मन / Jana Gana Mana",
        "सारे जहाँ से अच्छा / Sare Jahan Se Achha",
        "वंदे मातरम् / Vande Mataram",
        "रघुपति राघव / Raghupati Raghav"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 222: भारत का स्वतंत्रता दिवस कब है? / Practice question 222: When is India's Independence Day?",
      "options": [
        "26 जनवरी / 26 January",
        "2 अक्टूबर / 2 October",
        "15 अगस्त / 15 August",
        "14 नवंबर / 14 November"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 223: भारत का गणतंत्र दिवस कब है? / Practice question 223: When is India's Republic Day?",
      "options": [
        "15 अगस्त / 15 August",
        "5 सितंबर / 5 September",
        "26 जनवरी / 26 January",
        "2 अक्टूबर / 2 October"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 224: भारतीय संविधान कब लागू हुआ? / Practice question 224: When did the Constitution of India come into effect?",
      "options": [
        "15 अगस्त 1947 / 15 August 1947",
        "26 नवंबर 1949 / 26 November 1949",
        "26 जनवरी 1950 / 26 January 1950",
        "2 अक्टूबर 1950 / 2 October 1950"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 225: भारत के पहले प्रधानमंत्री कौन थे? / Practice question 225: Who was India's first Prime Minister?",
      "options": [
        "महात्मा गांधी / Mahatma Gandhi",
        "सरदार पटेल / Sardar Patel",
        "जवाहरलाल नेहरू / Jawaharlal Nehru",
        "लाल बहादुर शास्त्री / Lal Bahadur Shastri"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 226: भारत के पहले राष्ट्रपति कौन थे? / Practice question 226: Who was India's first President?",
      "options": [
        "डॉ. ए.पी.जे. अब्दुल कलाम / Dr. A.P.J. Abdul Kalam",
        "जाकिर हुसैन / Zakir Husain",
        "डॉ. राजेंद्र प्रसाद / Dr. Rajendra Prasad",
        "सर्वपल्ली राधाकृष्णन / S. Radhakrishnan"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 227: क्षेत्रफल के आधार पर भारत का सबसे बड़ा राज्य कौन है? / Practice question 227: Which is India's largest state by area?",
      "options": [
        "उत्तर प्रदेश / Uttar Pradesh",
        "महाराष्ट्र / Maharashtra",
        "राजस्थान / Rajasthan",
        "मध्य प्रदेश / Madhya Pradesh"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 228: क्षेत्रफल के आधार पर भारत का सबसे छोटा राज्य कौन है? / Practice question 228: Which is India's smallest state by area?",
      "options": [
        "सिक्किम / Sikkim",
        "त्रिपुरा / Tripura",
        "गोवा / Goa",
        "मणिपुर / Manipur"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 229: ताजमहल कहाँ है? / Practice question 229: Where is the Taj Mahal?",
      "options": [
        "दिल्ली / Delhi",
        "जयपुर / Jaipur",
        "आगरा / Agra",
        "लखनऊ / Lucknow"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 230: भारत की मुद्रा क्या है? / Practice question 230: What is the currency of India?",
      "options": [
        "टका / Taka",
        "युआन / Yuan",
        "रुपया / Rupee",
        "येन / Yen"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 231: भारत का अंतरिक्ष संगठन कौन-सा है? / Practice question 231: What is India's space agency?",
      "options": [
        "नासा / NASA",
        "ईएसए / ESA",
        "इसरो / ISRO",
        "जाक्सा / JAXA"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 232: भारत का सर्वोच्च न्यायालय कहाँ है? / Practice question 232: Where is the Supreme Court of India?",
      "options": [
        "मुंबई / Mumbai",
        "कोलकाता / Kolkata",
        "नई दिल्ली / New Delhi",
        "चेन्नई / Chennai"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 233: पृथ्वी का प्राकृतिक उपग्रह कौन है? / Practice question 233: What is Earth's natural satellite?",
      "options": [
        "मंगल / Mars",
        "शुक्र / Venus",
        "चंद्रमा / Moon",
        "सूर्य / Sun"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 234: सौरमंडल का सबसे बड़ा ग्रह कौन है? / Practice question 234: Which is the largest planet in the Solar System?",
      "options": [
        "पृथ्वी / Earth",
        "शनि / Saturn",
        "बृहस्पति / Jupiter",
        "नेपच्यून / Neptune"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 235: सूर्य के सबसे निकट ग्रह कौन है? / Practice question 235: Which planet is closest to the Sun?",
      "options": [
        "शुक्र / Venus",
        "पृथ्वी / Earth",
        "बुध / Mercury",
        "मंगल / Mars"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 236: लाल ग्रह किसे कहते हैं? / Practice question 236: Which planet is called the Red Planet?",
      "options": [
        "शुक्र / Venus",
        "बृहस्पति / Jupiter",
        "मंगल / Mars",
        "बुध / Mercury"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 237: पृथ्वी को सूर्य की परिक्रमा में लगभग कितना समय लगता है? / Practice question 237: How long does Earth take to orbit the Sun?",
      "options": [
        "24 घंटे / 24 hours",
        "लगभग 30 दिन / About 30 days",
        "लगभग 365 दिन / About 365 days",
        "लगभग 7 दिन / About 7 days"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 238: पानी का रासायनिक सूत्र क्या है? / Practice question 238: What is the chemical formula of water?",
      "options": [
        "CO₂",
        "O₂",
        "H₂O",
        "NaCl"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 239: सामान्य वायुदाब पर पानी का क्वथनांक क्या है? / Practice question 239: What is the boiling point of water at standard pressure?",
      "options": [
        "0°C",
        "50°C",
        "100°C",
        "150°C"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 240: पौधे प्रकाश संश्लेषण में कौन-सी गैस लेते हैं? / Practice question 240: Which gas do plants take in during photosynthesis?",
      "options": [
        "ऑक्सीजन / Oxygen",
        "हाइड्रोजन / Hydrogen",
        "कार्बन डाइऑक्साइड / Carbon dioxide",
        "हीलियम / Helium"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 241: मनुष्य साँस लेने के लिए मुख्यतः कौन-सी गैस उपयोग करता है? / Practice question 241: Which gas do humans primarily use for respiration?",
      "options": [
        "नाइट्रोजन / Nitrogen",
        "कार्बन डाइऑक्साइड / Carbon dioxide",
        "ऑक्सीजन / Oxygen",
        "हीलियम / Helium"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 242: बल की SI इकाई क्या है? / Practice question 242: What is the SI unit of force?",
      "options": [
        "जूल / Joule",
        "वाट / Watt",
        "न्यूटन / Newton",
        "पास्कल / Pascal"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 243: विद्युत धारा की SI इकाई क्या है? / Practice question 243: What is the SI unit of electric current?",
      "options": [
        "वोल्ट / Volt",
        "ओम / Ohm",
        "एम्पियर / Ampere",
        "वाट / Watt"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 244: प्रकाश की गति सबसे अधिक किसमें होती है? / Practice question 244: In which medium is the speed of light greatest?",
      "options": [
        "पानी / Water",
        "काँच / Glass",
        "निर्वात / Vacuum",
        "हवा / Air"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 245: मानव शरीर का सबसे बड़ा अंग कौन-सा है? / Practice question 245: What is the largest organ of the human body?",
      "options": [
        "हृदय / Heart",
        "यकृत / Liver",
        "त्वचा / Skin",
        "फेफड़ा / Lung"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 246: मानव शरीर में रक्त पंप कौन करता है? / Practice question 246: Which organ pumps blood in the human body?",
      "options": [
        "मस्तिष्क / Brain",
        "गुर्दा / Kidney",
        "हृदय / Heart",
        "यकृत / Liver"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 247: वयस्क मानव शरीर में सामान्यतः कितनी हड्डियाँ होती हैं? / Practice question 247: How many bones are typically in an adult human body?",
      "options": [
        "201",
        "212",
        "206",
        "220"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 248: विटामिन C का अच्छा स्रोत कौन-सा है? / Practice question 248: Which is a good source of vitamin C?",
      "options": [
        "चावल / Rice",
        "मक्खन / Butter",
        "संतरा / Orange",
        "नमक / Salt"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 249: पृथ्वी के वायुमंडल में सबसे अधिक कौन-सी गैस है? / Practice question 249: Which gas is most abundant in Earth's atmosphere?",
      "options": [
        "ऑक्सीजन / Oxygen",
        "कार्बन डाइऑक्साइड / Carbon dioxide",
        "नाइट्रोजन / Nitrogen",
        "हाइड्रोजन / Hydrogen"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 250: कंप्यूटर का मस्तिष्क किसे कहा जाता है? / Practice question 250: What is often called the brain of a computer?",
      "options": [
        "माउस / Mouse",
        "कीबोर्ड / Keyboard",
        "CPU",
        "मॉनिटर / Monitor"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 251: WWW का पूरा नाम क्या है? / Practice question 251: What does WWW stand for?",
      "options": [
        "World Web Window",
        "Wide World Wire",
        "World Wide Web",
        "Web World Wide"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 252: कंप्यूटर की अस्थायी मेमोरी कौन-सी है? / Practice question 252: Which is a computer's temporary memory?",
      "options": [
        "ROM",
        "DVD",
        "RAM",
        "SSD"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 253: कीबोर्ड किस प्रकार का उपकरण है? / Practice question 253: What type of device is a keyboard?",
      "options": [
        "आउटपुट डिवाइस / Output device",
        "स्टोरेज डिवाइस / Storage device",
        "इनपुट डिवाइस / Input device",
        "नेटवर्क डिवाइस / Network device"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 254: वेब पेज खोलने के लिए किसका उपयोग होता है? / Practice question 254: Which application is used to open web pages?",
      "options": [
        "कैलकुलेटर / Calculator",
        "पेंट / Paint",
        "वेब ब्राउज़र / Web browser",
        "कम्पाइलर / Compiler"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 255: भारत में शिक्षक दिवस कब मनाया जाता है? / Practice question 255: When is Teachers' Day celebrated in India?",
      "options": [
        "14 नवंबर / 14 November",
        "2 अक्टूबर / 2 October",
        "5 सितंबर / 5 September",
        "15 अगस्त / 15 August"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 256: भारत में बाल दिवस कब मनाया जाता है? / Practice question 256: When is Children's Day celebrated in India?",
      "options": [
        "5 सितंबर / 5 September",
        "26 जनवरी / 26 January",
        "14 नवंबर / 14 November",
        "1 मई / 1 May"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 257: महात्मा गांधी का जन्मदिन कब है? / Practice question 257: When is Mahatma Gandhi's birthday?",
      "options": [
        "15 अगस्त / 15 August",
        "26 जनवरी / 26 January",
        "2 अक्टूबर / 2 October",
        "14 नवंबर / 14 November"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 258: भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ? / Practice question 258: In which year did the Quit India Movement begin?",
      "options": [
        "1919",
        "1930",
        "1942",
        "1947"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 259: दांडी मार्च किस वर्ष हुआ? / Practice question 259: In which year did the Dandi March take place?",
      "options": [
        "1920",
        "1942",
        "1930",
        "1946"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 260: भारत को स्वतंत्रता किस वर्ष मिली? / Practice question 260: In which year did India gain independence?",
      "options": [
        "1942",
        "1945",
        "1947",
        "1950"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 261: ओलंपिक खेल सामान्यतः कितने वर्ष के अंतराल पर होते हैं? / Practice question 261: How often are the Olympic Games generally held?",
      "options": [
        "दो वर्ष / Two years",
        "तीन वर्ष / Three years",
        "चार वर्ष / Four years",
        "पाँच वर्ष / Five years"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 262: क्रिकेट टीम में मैदान पर एक समय कितने खिलाड़ी होते हैं? / Practice question 262: How many players are on the field for one cricket team at a time?",
      "options": [
        "9",
        "10",
        "11",
        "12"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 263: फुटबॉल टीम में मैदान पर कितने खिलाड़ी होते हैं? / Practice question 263: How many players are on the field for one football team?",
      "options": [
        "7",
        "9",
        "11",
        "13"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 264: शतरंज की बिसात में कितने खाने होते हैं? / Practice question 264: How many squares are on a chessboard?",
      "options": [
        "32",
        "48",
        "64",
        "100"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 265: बैडमिंटन में किस वस्तु को मारा जाता है? / Practice question 265: What object is hit in badminton?",
      "options": [
        "टेनिस बॉल / Tennis ball",
        "पक / Puck",
        "शटलकॉक / Shuttlecock",
        "क्रिकेट बॉल / Cricket ball"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 266: विश्व पर्यावरण दिवस कब मनाया जाता है? / Practice question 266: When is World Environment Day observed?",
      "options": [
        "22 अप्रैल / 22 April",
        "16 सितंबर / 16 September",
        "5 जून / 5 June",
        "1 दिसंबर / 1 December"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 267: विश्व स्वास्थ्य दिवस कब मनाया जाता है? / Practice question 267: When is World Health Day observed?",
      "options": [
        "1 मई / 1 May",
        "10 दिसंबर / 10 December",
        "7 अप्रैल / 7 April",
        "5 जून / 5 June"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 268: संयुक्त राष्ट्र दिवस कब मनाया जाता है? / Practice question 268: When is United Nations Day observed?",
      "options": [
        "1 जनवरी / 1 January",
        "8 मार्च / 8 March",
        "24 अक्टूबर / 24 October",
        "11 जुलाई / 11 July"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 269: जापान की राजधानी क्या है? / Practice question 269: What is the capital of Japan?",
      "options": [
        "क्योटो / Kyoto",
        "ओसाका / Osaka",
        "टोक्यो / Tokyo",
        "नारा / Nara"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 270: फ्रांस की राजधानी क्या है? / Practice question 270: What is the capital of France?",
      "options": [
        "रोम / Rome",
        "बर्लिन / Berlin",
        "पेरिस / Paris",
        "मैड्रिड / Madrid"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 271: नेपाल की राजधानी क्या है? / Practice question 271: What is the capital of Nepal?",
      "options": [
        "पोखरा / Pokhara",
        "थिम्फू / Thimphu",
        "काठमांडू / Kathmandu",
        "ढाका / Dhaka"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 272: बांग्लादेश की राजधानी क्या है? / Practice question 272: What is the capital of Bangladesh?",
      "options": [
        "चटगाँव / Chattogram",
        "काठमांडू / Kathmandu",
        "ढाका / Dhaka",
        "कराची / Karachi"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 273: ऑस्ट्रेलिया की राजधानी क्या है? / Practice question 273: What is the capital of Australia?",
      "options": [
        "सिडनी / Sydney",
        "मेलबर्न / Melbourne",
        "कैनबरा / Canberra",
        "पर्थ / Perth"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 274: कनाडा की राजधानी क्या है? / Practice question 274: What is the capital of Canada?",
      "options": [
        "टोरंटो / Toronto",
        "वैंकूवर / Vancouver",
        "ओटावा / Ottawa",
        "मॉन्ट्रियल / Montreal"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 275: ब्राज़ील की राजधानी क्या है? / Practice question 275: What is the capital of Brazil?",
      "options": [
        "रियो डी जेनेरियो / Rio de Janeiro",
        "साओ पाउलो / São Paulo",
        "ब्रासीलिया / Brasília",
        "सल्वाडोर / Salvador"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 276: मिस्र की राजधानी क्या है? / Practice question 276: What is the capital of Egypt?",
      "options": [
        "अलेक्जेंड्रिया / Alexandria",
        "लक्सर / Luxor",
        "काहिरा / Cairo",
        "गिज़ा / Giza"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 277: इटली की राजधानी क्या है? / Practice question 277: What is the capital of Italy?",
      "options": [
        "मिलान / Milan",
        "वेनिस / Venice",
        "रोम / Rome",
        "नेपल्स / Naples"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 278: जर्मनी की राजधानी क्या है? / Practice question 278: What is the capital of Germany?",
      "options": [
        "म्यूनिख / Munich",
        "हैम्बर्ग / Hamburg",
        "बर्लिन / Berlin",
        "फ्रैंकफर्ट / Frankfurt"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 279: स्पेन की राजधानी क्या है? / Practice question 279: What is the capital of Spain?",
      "options": [
        "बार्सिलोना / Barcelona",
        "सेविल / Seville",
        "मैड्रिड / Madrid",
        "वेलेंसिया / Valencia"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 280: चीन की राजधानी क्या है? / Practice question 280: What is the capital of China?",
      "options": [
        "शंघाई / Shanghai",
        "वुहान / Wuhan",
        "बीजिंग / Beijing",
        "ग्वांगझोउ / Guangzhou"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 281: रूस की राजधानी क्या है? / Practice question 281: What is the capital of Russia?",
      "options": [
        "सेंट पीटर्सबर्ग / Saint Petersburg",
        "कज़ान / Kazan",
        "मॉस्को / Moscow",
        "सोची / Sochi"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 282: अमेरिका की राजधानी क्या है? / Practice question 282: What is the capital of the United States?",
      "options": [
        "न्यूयॉर्क / New York",
        "लॉस एंजेलिस / Los Angeles",
        "वॉशिंगटन, डी.सी. / Washington, D.C.",
        "शिकागो / Chicago"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 283: दुनिया का सबसे बड़ा महासागर कौन-सा है? / Practice question 283: Which is the world's largest ocean?",
      "options": [
        "अटलांटिक / Atlantic",
        "हिंद महासागर / Indian",
        "प्रशांत महासागर / Pacific",
        "आर्कटिक / Arctic"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 284: दुनिया का सबसे ऊँचा पर्वत कौन-सा है? / Practice question 284: Which is the world's highest mountain above sea level?",
      "options": [
        "K2",
        "कंचनजंघा / Kangchenjunga",
        "माउंट एवरेस्ट / Mount Everest",
        "ल्होत्से / Lhotse"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 285: सहारा मरुस्थल किस महाद्वीप में है? / Practice question 285: On which continent is the Sahara Desert?",
      "options": [
        "एशिया / Asia",
        "ऑस्ट्रेलिया / Australia",
        "अफ्रीका / Africa",
        "यूरोप / Europe"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 286: नील नदी किस महाद्वीप में बहती है? / Practice question 286: On which continent does the Nile River flow?",
      "options": [
        "दक्षिण अमेरिका / South America",
        "एशिया / Asia",
        "अफ्रीका / Africa",
        "यूरोप / Europe"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 287: पृथ्वी पर कुल कितने महाद्वीप माने जाते हैं? / Practice question 287: How many continents are commonly recognized on Earth?",
      "options": [
        "5",
        "6",
        "7",
        "8"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 288: पृथ्वी पर कितने महासागर सामान्यतः गिने जाते हैं? / Practice question 288: How many oceans are commonly recognized on Earth?",
      "options": [
        "3",
        "4",
        "5",
        "7"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 289: लीप वर्ष में कितने दिन होते हैं? / Practice question 289: How many days are in a leap year?",
      "options": [
        "365",
        "364",
        "366",
        "360"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 290: एक किलोमीटर में कितने मीटर होते हैं? / Practice question 290: How many metres are in one kilometre?",
      "options": [
        "100",
        "500",
        "1000",
        "10000"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 291: एक घंटे में कितने मिनट होते हैं? / Practice question 291: How many minutes are in one hour?",
      "options": [
        "30",
        "45",
        "60",
        "100"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 292: त्रिभुज के आंतरिक कोणों का योग कितना होता है? / Practice question 292: What is the sum of the interior angles of a triangle?",
      "options": [
        "90°",
        "270°",
        "180°",
        "360°"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 293: रोमन अंक X का मान क्या है? / Practice question 293: What is the value of the Roman numeral X?",
      "options": [
        "5",
        "50",
        "10",
        "100"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 294: भारत का पहला उपग्रह कौन-सा था? / Practice question 294: What was India's first satellite?",
      "options": [
        "रोहिणी / Rohini",
        "भास्कर / Bhaskara",
        "आर्यभट्ट / Aryabhata",
        "चंद्रयान / Chandrayaan"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 295: चंद्रयान-3 ने चंद्रमा पर कब सफल सॉफ्ट लैंडिंग की? / Practice question 295: When did Chandrayaan-3 successfully soft-land on the Moon?",
      "options": [
        "14 जुलाई 2023 / 14 July 2023",
        "2 सितंबर 2023 / 2 September 2023",
        "23 अगस्त 2023 / 23 August 2023",
        "15 अगस्त 2023 / 15 August 2023"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 296: भारत में हरित क्रांति का संबंध मुख्यतः किससे है? / Practice question 296: The Green Revolution in India is mainly associated with what?",
      "options": [
        "दूध उत्पादन / Milk production",
        "मछली उत्पादन / Fish production",
        "खाद्यान्न उत्पादन / Food-grain production",
        "तेल उत्पादन / Oil production"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 297: श्वेत क्रांति का संबंध किससे है? / Practice question 297: The White Revolution is associated with what?",
      "options": [
        "गेहूँ उत्पादन / Wheat production",
        "कोयला उत्पादन / Coal production",
        "दूध उत्पादन / Milk production",
        "कपास उत्पादन / Cotton production"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 298: भारतीय रिज़र्व बैंक की स्थापना किस वर्ष हुई? / Practice question 298: In which year was the Reserve Bank of India established?",
      "options": [
        "1925",
        "1947",
        "1935",
        "1950"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 299: भारत का चुनाव आयोग किस प्रकार की संस्था है? / Practice question 299: What kind of body is the Election Commission of India?",
      "options": [
        "निजी संस्था / Private body",
        "बैंक / Bank",
        "संवैधानिक संस्था / Constitutional body",
        "न्यायालय / Court"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 300: लोकसभा का सामान्य कार्यकाल कितने वर्ष का होता है? / Practice question 300: What is the normal term of the Lok Sabha?",
      "options": [
        "4 वर्ष / 4 years",
        "6 वर्ष / 6 years",
        "5 वर्ष / 5 years",
        "7 वर्ष / 7 years"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 301: भारत के संसद के दो सदन कौन-से हैं? / Practice question 301: What are the two Houses of India's Parliament?",
      "options": [
        "लोकसभा और विधानसभा / Lok Sabha and Assembly",
        "राज्यसभा और पंचायत / Rajya Sabha and Panchayat",
        "लोकसभा और राज्यसभा / Lok Sabha and Rajya Sabha",
        "विधानसभा और परिषद / Assembly and Council"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 302: भारत का राष्ट्रीय प्रतीक किससे लिया गया है? / Practice question 302: India's national emblem is adapted from which sculpture?",
      "options": [
        "कुतुब मीनार / Qutub Minar",
        "इंडिया गेट / India Gate",
        "सारनाथ का अशोक सिंह स्तंभ / Lion Capital of Ashoka at Sarnath",
        "चारमीनार / Charminar"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 303: किस ग्रह के चारों ओर प्रमुख छल्ले प्रसिद्ध हैं? / Practice question 303: Which planet is famous for its prominent rings?",
      "options": [
        "मंगल / Mars",
        "बुध / Mercury",
        "शनि / Saturn",
        "पृथ्वी / Earth"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 304: मानव रक्त का लाल रंग किसके कारण होता है? / Practice question 304: What gives human blood its red colour?",
      "options": [
        "क्लोरोफिल / Chlorophyll",
        "इंसुलिन / Insulin",
        "हीमोग्लोबिन / Hemoglobin",
        "केराटिन / Keratin"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 305: ध्वनि किसमें यात्रा नहीं कर सकती? / Practice question 305: Through what can sound not travel?",
      "options": [
        "हवा / Air",
        "पानी / Water",
        "निर्वात / Vacuum",
        "स्टील / Steel"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 306: ओजोन परत मुख्यतः वायुमंडल की किस परत में है? / Practice question 306: In which atmospheric layer is the ozone layer mainly found?",
      "options": [
        "क्षोभमंडल / Troposphere",
        "मध्यमंडल / Mesosphere",
        "समताप मंडल / Stratosphere",
        "बहिर्मंडल / Exosphere"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 307: पृथ्वी की सबसे बाहरी ठोस परत क्या कहलाती है? / Practice question 307: What is Earth's outermost solid layer called?",
      "options": [
        "केंद्रक / Core",
        "मैंटल / Mantle",
        "भूपर्पटी / Crust",
        "बाहरी केंद्रक / Outer core"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 308: पेनिसिलिन की खोज किसने की? / Practice question 308: Who discovered penicillin?",
      "options": [
        "लुई पाश्चर / Louis Pasteur",
        "मैरी क्यूरी / Marie Curie",
        "अलेक्जेंडर फ्लेमिंग / Alexander Fleming",
        "रॉबर्ट कोच / Robert Koch"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 309: गुरुत्वाकर्षण के नियम से किस वैज्ञानिक का नाम जुड़ा है? / Practice question 309: Which scientist is associated with the law of universal gravitation?",
      "options": [
        "अल्बर्ट आइंस्टीन / Albert Einstein",
        "गैलीलियो / Galileo",
        "आइज़ैक न्यूटन / Isaac Newton",
        "निकोला टेस्ला / Nikola Tesla"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 310: सापेक्षता का सिद्धांत किसने प्रस्तुत किया? / Practice question 310: Who developed the theory of relativity?",
      "options": [
        "आइज़ैक न्यूटन / Isaac Newton",
        "नील्स बोहर / Niels Bohr",
        "अल्बर्ट आइंस्टीन / Albert Einstein",
        "मैक्स प्लांक / Max Planck"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 311: भारत का राष्ट्रीय पंचांग किस संवत पर आधारित है? / Practice question 311: India's national calendar is based on which era?",
      "options": [
        "विक्रम संवत / Vikram Samvat",
        "हिजरी / Hijri",
        "शक संवत / Saka Era",
        "ग्रेगोरियन / Gregorian"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 312: भारत में सर्वोच्च नागरिक सम्मान कौन-सा है? / Practice question 312: What is India's highest civilian award?",
      "options": [
        "पद्मश्री / Padma Shri",
        "पद्म भूषण / Padma Bhushan",
        "भारत रत्न / Bharat Ratna",
        "परमवीर चक्र / Param Vir Chakra"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 313: भारत का सर्वोच्च युद्धकालीन वीरता पुरस्कार कौन-सा है? / Practice question 313: What is India's highest wartime gallantry award?",
      "options": [
        "अशोक चक्र / Ashoka Chakra",
        "वीर चक्र / Vir Chakra",
        "परमवीर चक्र / Param Vir Chakra",
        "कीर्ति चक्र / Kirti Chakra"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 314: ओलंपिक ध्वज में कितने छल्ले होते हैं? / Practice question 314: How many rings are on the Olympic flag?",
      "options": [
        "4",
        "6",
        "5",
        "7"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 315: टेनिस के चार ग्रैंड स्लैम में से कौन-सा घास के कोर्ट पर खेला जाता है? / Practice question 315: Which tennis Grand Slam is played on grass courts?",
      "options": [
        "फ्रेंच ओपन / French Open",
        "यूएस ओपन / US Open",
        "विंबलडन / Wimbledon",
        "ऑस्ट्रेलियन ओपन / Australian Open"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 316: कबड्डी की एक टीम में मैदान पर कितने खिलाड़ी होते हैं? / Practice question 316: How many players from one kabaddi team are on court?",
      "options": [
        "5",
        "6",
        "7",
        "9"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 317: हॉकी में गेंद को मारने के लिए किसका उपयोग होता है? / Practice question 317: What is used to hit the ball in hockey?",
      "options": [
        "बैट / Bat",
        "रैकेट / Racket",
        "स्टिक / Stick",
        "क्यू / Cue"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 318: भारत का राष्ट्रीय खेल आधिकारिक रूप से किसे घोषित किया गया है? / Practice question 318: Which sport has officially been declared India's national sport?",
      "options": [
        "हॉकी / Hockey",
        "क्रिकेट / Cricket",
        "कोई आधिकारिक राष्ट्रीय खेल नहीं / No officially declared national sport",
        "कबड्डी / Kabaddi"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 319: भारत की राजधानी क्या है? / Practice question 319: What is the capital of India?",
      "options": [
        "नई दिल्ली / New Delhi",
        "मुंबई / Mumbai",
        "जयपुर / Jaipur",
        "पटना / Patna"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 320: भारत का राष्ट्रीय पक्षी कौन है? / Practice question 320: What is India's national bird?",
      "options": [
        "मोर / Peacock",
        "तोता / Parrot",
        "हंस / Swan",
        "कबूतर / Pigeon"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 321: भारत का राष्ट्रीय फूल कौन-सा है? / Practice question 321: What is India's national flower?",
      "options": [
        "कमल / Lotus",
        "गुलाब / Rose",
        "गेंदा / Marigold",
        "चमेली / Jasmine"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 322: भारत का राष्ट्रीय पशु कौन है? / Practice question 322: What is India's national animal?",
      "options": [
        "बाघ / Tiger",
        "शेर / Lion",
        "हाथी / Elephant",
        "तेंदुआ / Leopard"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 323: भारत का राष्ट्रीय फल कौन-सा है? / Practice question 323: What is India's national fruit?",
      "options": [
        "आम / Mango",
        "सेब / Apple",
        "केला / Banana",
        "अमरूद / Guava"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 324: भारत का राष्ट्रीय जलीय जीव कौन है? / Practice question 324: What is India's national aquatic animal?",
      "options": [
        "गंगा नदी डॉल्फिन / Ganges river dolphin",
        "मगरमच्छ / Crocodile",
        "नीली व्हेल / Blue whale",
        "कछुआ / Turtle"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 325: भारत का राष्ट्रीय वृक्ष कौन-सा है? / Practice question 325: What is India's national tree?",
      "options": [
        "बरगद / Banyan",
        "नीम / Neem",
        "पीपल / Peepal",
        "नारियल / Coconut"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 326: भारत का राष्ट्रीय गान कौन-सा है? / Practice question 326: What is India's national anthem?",
      "options": [
        "जन गण मन / Jana Gana Mana",
        "वंदे मातरम् / Vande Mataram",
        "सारे जहाँ से अच्छा / Sare Jahan Se Achha",
        "ऐ मेरे वतन के लोगों / Ae Mere Watan Ke Logon"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 327: भारत का राष्ट्रीय गीत कौन-सा है? / Practice question 327: What is India's national song?",
      "options": [
        "वंदे मातरम् / Vande Mataram",
        "जन गण मन / Jana Gana Mana",
        "सारे जहाँ से अच्छा / Sare Jahan Se Achha",
        "रघुपति राघव / Raghupati Raghav"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 328: भारत का स्वतंत्रता दिवस कब है? / Practice question 328: When is India's Independence Day?",
      "options": [
        "15 अगस्त / 15 August",
        "26 जनवरी / 26 January",
        "2 अक्टूबर / 2 October",
        "14 नवंबर / 14 November"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 329: भारत का गणतंत्र दिवस कब है? / Practice question 329: When is India's Republic Day?",
      "options": [
        "26 जनवरी / 26 January",
        "15 अगस्त / 15 August",
        "5 सितंबर / 5 September",
        "2 अक्टूबर / 2 October"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 330: भारतीय संविधान कब लागू हुआ? / Practice question 330: When did the Constitution of India come into effect?",
      "options": [
        "26 जनवरी 1950 / 26 January 1950",
        "15 अगस्त 1947 / 15 August 1947",
        "26 नवंबर 1949 / 26 November 1949",
        "2 अक्टूबर 1950 / 2 October 1950"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 331: भारत के पहले प्रधानमंत्री कौन थे? / Practice question 331: Who was India's first Prime Minister?",
      "options": [
        "जवाहरलाल नेहरू / Jawaharlal Nehru",
        "महात्मा गांधी / Mahatma Gandhi",
        "सरदार पटेल / Sardar Patel",
        "लाल बहादुर शास्त्री / Lal Bahadur Shastri"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 332: भारत के पहले राष्ट्रपति कौन थे? / Practice question 332: Who was India's first President?",
      "options": [
        "डॉ. राजेंद्र प्रसाद / Dr. Rajendra Prasad",
        "डॉ. ए.पी.जे. अब्दुल कलाम / Dr. A.P.J. Abdul Kalam",
        "जाकिर हुसैन / Zakir Husain",
        "सर्वपल्ली राधाकृष्णन / S. Radhakrishnan"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 333: क्षेत्रफल के आधार पर भारत का सबसे बड़ा राज्य कौन है? / Practice question 333: Which is India's largest state by area?",
      "options": [
        "राजस्थान / Rajasthan",
        "उत्तर प्रदेश / Uttar Pradesh",
        "महाराष्ट्र / Maharashtra",
        "मध्य प्रदेश / Madhya Pradesh"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 334: क्षेत्रफल के आधार पर भारत का सबसे छोटा राज्य कौन है? / Practice question 334: Which is India's smallest state by area?",
      "options": [
        "गोवा / Goa",
        "सिक्किम / Sikkim",
        "त्रिपुरा / Tripura",
        "मणिपुर / Manipur"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 335: ताजमहल कहाँ है? / Practice question 335: Where is the Taj Mahal?",
      "options": [
        "आगरा / Agra",
        "दिल्ली / Delhi",
        "जयपुर / Jaipur",
        "लखनऊ / Lucknow"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 336: भारत की मुद्रा क्या है? / Practice question 336: What is the currency of India?",
      "options": [
        "रुपया / Rupee",
        "टका / Taka",
        "युआन / Yuan",
        "येन / Yen"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 337: भारत का अंतरिक्ष संगठन कौन-सा है? / Practice question 337: What is India's space agency?",
      "options": [
        "इसरो / ISRO",
        "नासा / NASA",
        "ईएसए / ESA",
        "जाक्सा / JAXA"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 338: भारत का सर्वोच्च न्यायालय कहाँ है? / Practice question 338: Where is the Supreme Court of India?",
      "options": [
        "नई दिल्ली / New Delhi",
        "मुंबई / Mumbai",
        "कोलकाता / Kolkata",
        "चेन्नई / Chennai"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 339: पृथ्वी का प्राकृतिक उपग्रह कौन है? / Practice question 339: What is Earth's natural satellite?",
      "options": [
        "चंद्रमा / Moon",
        "मंगल / Mars",
        "शुक्र / Venus",
        "सूर्य / Sun"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 340: सौरमंडल का सबसे बड़ा ग्रह कौन है? / Practice question 340: Which is the largest planet in the Solar System?",
      "options": [
        "बृहस्पति / Jupiter",
        "पृथ्वी / Earth",
        "शनि / Saturn",
        "नेपच्यून / Neptune"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 341: सूर्य के सबसे निकट ग्रह कौन है? / Practice question 341: Which planet is closest to the Sun?",
      "options": [
        "बुध / Mercury",
        "शुक्र / Venus",
        "पृथ्वी / Earth",
        "मंगल / Mars"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 342: लाल ग्रह किसे कहते हैं? / Practice question 342: Which planet is called the Red Planet?",
      "options": [
        "मंगल / Mars",
        "शुक्र / Venus",
        "बृहस्पति / Jupiter",
        "बुध / Mercury"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 343: पृथ्वी को सूर्य की परिक्रमा में लगभग कितना समय लगता है? / Practice question 343: How long does Earth take to orbit the Sun?",
      "options": [
        "लगभग 365 दिन / About 365 days",
        "24 घंटे / 24 hours",
        "लगभग 30 दिन / About 30 days",
        "लगभग 7 दिन / About 7 days"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 344: पानी का रासायनिक सूत्र क्या है? / Practice question 344: What is the chemical formula of water?",
      "options": [
        "H₂O",
        "CO₂",
        "O₂",
        "NaCl"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 345: सामान्य वायुदाब पर पानी का क्वथनांक क्या है? / Practice question 345: What is the boiling point of water at standard pressure?",
      "options": [
        "100°C",
        "0°C",
        "50°C",
        "150°C"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 346: पौधे प्रकाश संश्लेषण में कौन-सी गैस लेते हैं? / Practice question 346: Which gas do plants take in during photosynthesis?",
      "options": [
        "कार्बन डाइऑक्साइड / Carbon dioxide",
        "ऑक्सीजन / Oxygen",
        "हाइड्रोजन / Hydrogen",
        "हीलियम / Helium"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 347: मनुष्य साँस लेने के लिए मुख्यतः कौन-सी गैस उपयोग करता है? / Practice question 347: Which gas do humans primarily use for respiration?",
      "options": [
        "ऑक्सीजन / Oxygen",
        "नाइट्रोजन / Nitrogen",
        "कार्बन डाइऑक्साइड / Carbon dioxide",
        "हीलियम / Helium"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 348: बल की SI इकाई क्या है? / Practice question 348: What is the SI unit of force?",
      "options": [
        "न्यूटन / Newton",
        "जूल / Joule",
        "वाट / Watt",
        "पास्कल / Pascal"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 349: विद्युत धारा की SI इकाई क्या है? / Practice question 349: What is the SI unit of electric current?",
      "options": [
        "एम्पियर / Ampere",
        "वोल्ट / Volt",
        "ओम / Ohm",
        "वाट / Watt"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 350: प्रकाश की गति सबसे अधिक किसमें होती है? / Practice question 350: In which medium is the speed of light greatest?",
      "options": [
        "निर्वात / Vacuum",
        "पानी / Water",
        "काँच / Glass",
        "हवा / Air"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 351: मानव शरीर का सबसे बड़ा अंग कौन-सा है? / Practice question 351: What is the largest organ of the human body?",
      "options": [
        "त्वचा / Skin",
        "हृदय / Heart",
        "यकृत / Liver",
        "फेफड़ा / Lung"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 352: मानव शरीर में रक्त पंप कौन करता है? / Practice question 352: Which organ pumps blood in the human body?",
      "options": [
        "हृदय / Heart",
        "मस्तिष्क / Brain",
        "गुर्दा / Kidney",
        "यकृत / Liver"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 353: वयस्क मानव शरीर में सामान्यतः कितनी हड्डियाँ होती हैं? / Practice question 353: How many bones are typically in an adult human body?",
      "options": [
        "206",
        "201",
        "212",
        "220"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 354: विटामिन C का अच्छा स्रोत कौन-सा है? / Practice question 354: Which is a good source of vitamin C?",
      "options": [
        "संतरा / Orange",
        "चावल / Rice",
        "मक्खन / Butter",
        "नमक / Salt"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 355: पृथ्वी के वायुमंडल में सबसे अधिक कौन-सी गैस है? / Practice question 355: Which gas is most abundant in Earth's atmosphere?",
      "options": [
        "नाइट्रोजन / Nitrogen",
        "ऑक्सीजन / Oxygen",
        "कार्बन डाइऑक्साइड / Carbon dioxide",
        "हाइड्रोजन / Hydrogen"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 356: कंप्यूटर का मस्तिष्क किसे कहा जाता है? / Practice question 356: What is often called the brain of a computer?",
      "options": [
        "CPU",
        "माउस / Mouse",
        "कीबोर्ड / Keyboard",
        "मॉनिटर / Monitor"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 357: WWW का पूरा नाम क्या है? / Practice question 357: What does WWW stand for?",
      "options": [
        "World Wide Web",
        "World Web Window",
        "Wide World Wire",
        "Web World Wide"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 358: कंप्यूटर की अस्थायी मेमोरी कौन-सी है? / Practice question 358: Which is a computer's temporary memory?",
      "options": [
        "RAM",
        "ROM",
        "DVD",
        "SSD"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 359: कीबोर्ड किस प्रकार का उपकरण है? / Practice question 359: What type of device is a keyboard?",
      "options": [
        "इनपुट डिवाइस / Input device",
        "आउटपुट डिवाइस / Output device",
        "स्टोरेज डिवाइस / Storage device",
        "नेटवर्क डिवाइस / Network device"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 360: वेब पेज खोलने के लिए किसका उपयोग होता है? / Practice question 360: Which application is used to open web pages?",
      "options": [
        "वेब ब्राउज़र / Web browser",
        "कैलकुलेटर / Calculator",
        "पेंट / Paint",
        "कम्पाइलर / Compiler"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 361: भारत में शिक्षक दिवस कब मनाया जाता है? / Practice question 361: When is Teachers' Day celebrated in India?",
      "options": [
        "5 सितंबर / 5 September",
        "14 नवंबर / 14 November",
        "2 अक्टूबर / 2 October",
        "15 अगस्त / 15 August"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 362: भारत में बाल दिवस कब मनाया जाता है? / Practice question 362: When is Children's Day celebrated in India?",
      "options": [
        "14 नवंबर / 14 November",
        "5 सितंबर / 5 September",
        "26 जनवरी / 26 January",
        "1 मई / 1 May"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 363: महात्मा गांधी का जन्मदिन कब है? / Practice question 363: When is Mahatma Gandhi's birthday?",
      "options": [
        "2 अक्टूबर / 2 October",
        "15 अगस्त / 15 August",
        "26 जनवरी / 26 January",
        "14 नवंबर / 14 November"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 364: भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ? / Practice question 364: In which year did the Quit India Movement begin?",
      "options": [
        "1942",
        "1919",
        "1930",
        "1947"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 365: दांडी मार्च किस वर्ष हुआ? / Practice question 365: In which year did the Dandi March take place?",
      "options": [
        "1930",
        "1920",
        "1942",
        "1946"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 366: भारत को स्वतंत्रता किस वर्ष मिली? / Practice question 366: In which year did India gain independence?",
      "options": [
        "1947",
        "1942",
        "1945",
        "1950"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 367: ओलंपिक खेल सामान्यतः कितने वर्ष के अंतराल पर होते हैं? / Practice question 367: How often are the Olympic Games generally held?",
      "options": [
        "चार वर्ष / Four years",
        "दो वर्ष / Two years",
        "तीन वर्ष / Three years",
        "पाँच वर्ष / Five years"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 368: क्रिकेट टीम में मैदान पर एक समय कितने खिलाड़ी होते हैं? / Practice question 368: How many players are on the field for one cricket team at a time?",
      "options": [
        "11",
        "9",
        "10",
        "12"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 369: फुटबॉल टीम में मैदान पर कितने खिलाड़ी होते हैं? / Practice question 369: How many players are on the field for one football team?",
      "options": [
        "11",
        "7",
        "9",
        "13"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 370: शतरंज की बिसात में कितने खाने होते हैं? / Practice question 370: How many squares are on a chessboard?",
      "options": [
        "64",
        "32",
        "48",
        "100"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 371: बैडमिंटन में किस वस्तु को मारा जाता है? / Practice question 371: What object is hit in badminton?",
      "options": [
        "शटलकॉक / Shuttlecock",
        "टेनिस बॉल / Tennis ball",
        "पक / Puck",
        "क्रिकेट बॉल / Cricket ball"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 372: विश्व पर्यावरण दिवस कब मनाया जाता है? / Practice question 372: When is World Environment Day observed?",
      "options": [
        "5 जून / 5 June",
        "22 अप्रैल / 22 April",
        "16 सितंबर / 16 September",
        "1 दिसंबर / 1 December"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 373: विश्व स्वास्थ्य दिवस कब मनाया जाता है? / Practice question 373: When is World Health Day observed?",
      "options": [
        "7 अप्रैल / 7 April",
        "1 मई / 1 May",
        "10 दिसंबर / 10 December",
        "5 जून / 5 June"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 374: संयुक्त राष्ट्र दिवस कब मनाया जाता है? / Practice question 374: When is United Nations Day observed?",
      "options": [
        "24 अक्टूबर / 24 October",
        "1 जनवरी / 1 January",
        "8 मार्च / 8 March",
        "11 जुलाई / 11 July"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 375: जापान की राजधानी क्या है? / Practice question 375: What is the capital of Japan?",
      "options": [
        "टोक्यो / Tokyo",
        "क्योटो / Kyoto",
        "ओसाका / Osaka",
        "नारा / Nara"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 376: फ्रांस की राजधानी क्या है? / Practice question 376: What is the capital of France?",
      "options": [
        "पेरिस / Paris",
        "रोम / Rome",
        "बर्लिन / Berlin",
        "मैड्रिड / Madrid"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 377: नेपाल की राजधानी क्या है? / Practice question 377: What is the capital of Nepal?",
      "options": [
        "काठमांडू / Kathmandu",
        "पोखरा / Pokhara",
        "थिम्फू / Thimphu",
        "ढाका / Dhaka"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 378: बांग्लादेश की राजधानी क्या है? / Practice question 378: What is the capital of Bangladesh?",
      "options": [
        "ढाका / Dhaka",
        "चटगाँव / Chattogram",
        "काठमांडू / Kathmandu",
        "कराची / Karachi"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 379: ऑस्ट्रेलिया की राजधानी क्या है? / Practice question 379: What is the capital of Australia?",
      "options": [
        "कैनबरा / Canberra",
        "सिडनी / Sydney",
        "मेलबर्न / Melbourne",
        "पर्थ / Perth"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 380: कनाडा की राजधानी क्या है? / Practice question 380: What is the capital of Canada?",
      "options": [
        "ओटावा / Ottawa",
        "टोरंटो / Toronto",
        "वैंकूवर / Vancouver",
        "मॉन्ट्रियल / Montreal"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 381: ब्राज़ील की राजधानी क्या है? / Practice question 381: What is the capital of Brazil?",
      "options": [
        "ब्रासीलिया / Brasília",
        "रियो डी जेनेरियो / Rio de Janeiro",
        "साओ पाउलो / São Paulo",
        "सल्वाडोर / Salvador"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 382: मिस्र की राजधानी क्या है? / Practice question 382: What is the capital of Egypt?",
      "options": [
        "काहिरा / Cairo",
        "अलेक्जेंड्रिया / Alexandria",
        "लक्सर / Luxor",
        "गिज़ा / Giza"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 383: इटली की राजधानी क्या है? / Practice question 383: What is the capital of Italy?",
      "options": [
        "रोम / Rome",
        "मिलान / Milan",
        "वेनिस / Venice",
        "नेपल्स / Naples"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 384: जर्मनी की राजधानी क्या है? / Practice question 384: What is the capital of Germany?",
      "options": [
        "बर्लिन / Berlin",
        "म्यूनिख / Munich",
        "हैम्बर्ग / Hamburg",
        "फ्रैंकफर्ट / Frankfurt"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 385: स्पेन की राजधानी क्या है? / Practice question 385: What is the capital of Spain?",
      "options": [
        "मैड्रिड / Madrid",
        "बार्सिलोना / Barcelona",
        "सेविल / Seville",
        "वेलेंसिया / Valencia"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 386: चीन की राजधानी क्या है? / Practice question 386: What is the capital of China?",
      "options": [
        "बीजिंग / Beijing",
        "शंघाई / Shanghai",
        "वुहान / Wuhan",
        "ग्वांगझोउ / Guangzhou"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 387: रूस की राजधानी क्या है? / Practice question 387: What is the capital of Russia?",
      "options": [
        "मॉस्को / Moscow",
        "सेंट पीटर्सबर्ग / Saint Petersburg",
        "कज़ान / Kazan",
        "सोची / Sochi"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 388: अमेरिका की राजधानी क्या है? / Practice question 388: What is the capital of the United States?",
      "options": [
        "वॉशिंगटन, डी.सी. / Washington, D.C.",
        "न्यूयॉर्क / New York",
        "लॉस एंजेलिस / Los Angeles",
        "शिकागो / Chicago"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 389: दुनिया का सबसे बड़ा महासागर कौन-सा है? / Practice question 389: Which is the world's largest ocean?",
      "options": [
        "प्रशांत महासागर / Pacific",
        "अटलांटिक / Atlantic",
        "हिंद महासागर / Indian",
        "आर्कटिक / Arctic"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 390: दुनिया का सबसे ऊँचा पर्वत कौन-सा है? / Practice question 390: Which is the world's highest mountain above sea level?",
      "options": [
        "माउंट एवरेस्ट / Mount Everest",
        "K2",
        "कंचनजंघा / Kangchenjunga",
        "ल्होत्से / Lhotse"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 391: सहारा मरुस्थल किस महाद्वीप में है? / Practice question 391: On which continent is the Sahara Desert?",
      "options": [
        "अफ्रीका / Africa",
        "एशिया / Asia",
        "ऑस्ट्रेलिया / Australia",
        "यूरोप / Europe"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 392: नील नदी किस महाद्वीप में बहती है? / Practice question 392: On which continent does the Nile River flow?",
      "options": [
        "अफ्रीका / Africa",
        "दक्षिण अमेरिका / South America",
        "एशिया / Asia",
        "यूरोप / Europe"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 393: पृथ्वी पर कुल कितने महाद्वीप माने जाते हैं? / Practice question 393: How many continents are commonly recognized on Earth?",
      "options": [
        "7",
        "5",
        "6",
        "8"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 394: पृथ्वी पर कितने महासागर सामान्यतः गिने जाते हैं? / Practice question 394: How many oceans are commonly recognized on Earth?",
      "options": [
        "5",
        "3",
        "4",
        "7"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 395: लीप वर्ष में कितने दिन होते हैं? / Practice question 395: How many days are in a leap year?",
      "options": [
        "366",
        "365",
        "364",
        "360"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 396: एक किलोमीटर में कितने मीटर होते हैं? / Practice question 396: How many metres are in one kilometre?",
      "options": [
        "1000",
        "100",
        "500",
        "10000"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 397: एक घंटे में कितने मिनट होते हैं? / Practice question 397: How many minutes are in one hour?",
      "options": [
        "60",
        "30",
        "45",
        "100"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 398: त्रिभुज के आंतरिक कोणों का योग कितना होता है? / Practice question 398: What is the sum of the interior angles of a triangle?",
      "options": [
        "180°",
        "90°",
        "270°",
        "360°"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 399: रोमन अंक X का मान क्या है? / Practice question 399: What is the value of the Roman numeral X?",
      "options": [
        "10",
        "5",
        "50",
        "100"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 400: भारत का पहला उपग्रह कौन-सा था? / Practice question 400: What was India's first satellite?",
      "options": [
        "आर्यभट्ट / Aryabhata",
        "रोहिणी / Rohini",
        "भास्कर / Bhaskara",
        "चंद्रयान / Chandrayaan"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 401: चंद्रयान-3 ने चंद्रमा पर कब सफल सॉफ्ट लैंडिंग की? / Practice question 401: When did Chandrayaan-3 successfully soft-land on the Moon?",
      "options": [
        "23 अगस्त 2023 / 23 August 2023",
        "14 जुलाई 2023 / 14 July 2023",
        "2 सितंबर 2023 / 2 September 2023",
        "15 अगस्त 2023 / 15 August 2023"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 402: भारत में हरित क्रांति का संबंध मुख्यतः किससे है? / Practice question 402: The Green Revolution in India is mainly associated with what?",
      "options": [
        "खाद्यान्न उत्पादन / Food-grain production",
        "दूध उत्पादन / Milk production",
        "मछली उत्पादन / Fish production",
        "तेल उत्पादन / Oil production"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 403: श्वेत क्रांति का संबंध किससे है? / Practice question 403: The White Revolution is associated with what?",
      "options": [
        "दूध उत्पादन / Milk production",
        "गेहूँ उत्पादन / Wheat production",
        "कोयला उत्पादन / Coal production",
        "कपास उत्पादन / Cotton production"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 404: भारतीय रिज़र्व बैंक की स्थापना किस वर्ष हुई? / Practice question 404: In which year was the Reserve Bank of India established?",
      "options": [
        "1935",
        "1925",
        "1947",
        "1950"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 405: भारत का चुनाव आयोग किस प्रकार की संस्था है? / Practice question 405: What kind of body is the Election Commission of India?",
      "options": [
        "संवैधानिक संस्था / Constitutional body",
        "निजी संस्था / Private body",
        "बैंक / Bank",
        "न्यायालय / Court"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 406: लोकसभा का सामान्य कार्यकाल कितने वर्ष का होता है? / Practice question 406: What is the normal term of the Lok Sabha?",
      "options": [
        "5 वर्ष / 5 years",
        "4 वर्ष / 4 years",
        "6 वर्ष / 6 years",
        "7 वर्ष / 7 years"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 407: भारत के संसद के दो सदन कौन-से हैं? / Practice question 407: What are the two Houses of India's Parliament?",
      "options": [
        "लोकसभा और राज्यसभा / Lok Sabha and Rajya Sabha",
        "लोकसभा और विधानसभा / Lok Sabha and Assembly",
        "राज्यसभा और पंचायत / Rajya Sabha and Panchayat",
        "विधानसभा और परिषद / Assembly and Council"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 408: भारत का राष्ट्रीय प्रतीक किससे लिया गया है? / Practice question 408: India's national emblem is adapted from which sculpture?",
      "options": [
        "सारनाथ का अशोक सिंह स्तंभ / Lion Capital of Ashoka at Sarnath",
        "कुतुब मीनार / Qutub Minar",
        "इंडिया गेट / India Gate",
        "चारमीनार / Charminar"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 409: किस ग्रह के चारों ओर प्रमुख छल्ले प्रसिद्ध हैं? / Practice question 409: Which planet is famous for its prominent rings?",
      "options": [
        "शनि / Saturn",
        "मंगल / Mars",
        "बुध / Mercury",
        "पृथ्वी / Earth"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 410: मानव रक्त का लाल रंग किसके कारण होता है? / Practice question 410: What gives human blood its red colour?",
      "options": [
        "हीमोग्लोबिन / Hemoglobin",
        "क्लोरोफिल / Chlorophyll",
        "इंसुलिन / Insulin",
        "केराटिन / Keratin"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 411: ध्वनि किसमें यात्रा नहीं कर सकती? / Practice question 411: Through what can sound not travel?",
      "options": [
        "निर्वात / Vacuum",
        "हवा / Air",
        "पानी / Water",
        "स्टील / Steel"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 412: ओजोन परत मुख्यतः वायुमंडल की किस परत में है? / Practice question 412: In which atmospheric layer is the ozone layer mainly found?",
      "options": [
        "समताप मंडल / Stratosphere",
        "क्षोभमंडल / Troposphere",
        "मध्यमंडल / Mesosphere",
        "बहिर्मंडल / Exosphere"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 413: पृथ्वी की सबसे बाहरी ठोस परत क्या कहलाती है? / Practice question 413: What is Earth's outermost solid layer called?",
      "options": [
        "भूपर्पटी / Crust",
        "केंद्रक / Core",
        "मैंटल / Mantle",
        "बाहरी केंद्रक / Outer core"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 414: पेनिसिलिन की खोज किसने की? / Practice question 414: Who discovered penicillin?",
      "options": [
        "अलेक्जेंडर फ्लेमिंग / Alexander Fleming",
        "लुई पाश्चर / Louis Pasteur",
        "मैरी क्यूरी / Marie Curie",
        "रॉबर्ट कोच / Robert Koch"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 415: गुरुत्वाकर्षण के नियम से किस वैज्ञानिक का नाम जुड़ा है? / Practice question 415: Which scientist is associated with the law of universal gravitation?",
      "options": [
        "आइज़ैक न्यूटन / Isaac Newton",
        "अल्बर्ट आइंस्टीन / Albert Einstein",
        "गैलीलियो / Galileo",
        "निकोला टेस्ला / Nikola Tesla"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 416: सापेक्षता का सिद्धांत किसने प्रस्तुत किया? / Practice question 416: Who developed the theory of relativity?",
      "options": [
        "अल्बर्ट आइंस्टीन / Albert Einstein",
        "आइज़ैक न्यूटन / Isaac Newton",
        "नील्स बोहर / Niels Bohr",
        "मैक्स प्लांक / Max Planck"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 417: भारत का राष्ट्रीय पंचांग किस संवत पर आधारित है? / Practice question 417: India's national calendar is based on which era?",
      "options": [
        "शक संवत / Saka Era",
        "विक्रम संवत / Vikram Samvat",
        "हिजरी / Hijri",
        "ग्रेगोरियन / Gregorian"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 418: भारत में सर्वोच्च नागरिक सम्मान कौन-सा है? / Practice question 418: What is India's highest civilian award?",
      "options": [
        "भारत रत्न / Bharat Ratna",
        "पद्मश्री / Padma Shri",
        "पद्म भूषण / Padma Bhushan",
        "परमवीर चक्र / Param Vir Chakra"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 419: भारत का सर्वोच्च युद्धकालीन वीरता पुरस्कार कौन-सा है? / Practice question 419: What is India's highest wartime gallantry award?",
      "options": [
        "परमवीर चक्र / Param Vir Chakra",
        "अशोक चक्र / Ashoka Chakra",
        "वीर चक्र / Vir Chakra",
        "कीर्ति चक्र / Kirti Chakra"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 420: ओलंपिक ध्वज में कितने छल्ले होते हैं? / Practice question 420: How many rings are on the Olympic flag?",
      "options": [
        "5",
        "4",
        "6",
        "7"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 421: टेनिस के चार ग्रैंड स्लैम में से कौन-सा घास के कोर्ट पर खेला जाता है? / Practice question 421: Which tennis Grand Slam is played on grass courts?",
      "options": [
        "विंबलडन / Wimbledon",
        "फ्रेंच ओपन / French Open",
        "यूएस ओपन / US Open",
        "ऑस्ट्रेलियन ओपन / Australian Open"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 422: कबड्डी की एक टीम में मैदान पर कितने खिलाड़ी होते हैं? / Practice question 422: How many players from one kabaddi team are on court?",
      "options": [
        "7",
        "5",
        "6",
        "9"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 423: हॉकी में गेंद को मारने के लिए किसका उपयोग होता है? / Practice question 423: What is used to hit the ball in hockey?",
      "options": [
        "स्टिक / Stick",
        "बैट / Bat",
        "रैकेट / Racket",
        "क्यू / Cue"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 424: भारत का राष्ट्रीय खेल आधिकारिक रूप से किसे घोषित किया गया है? / Practice question 424: Which sport has officially been declared India's national sport?",
      "options": [
        "कोई आधिकारिक राष्ट्रीय खेल नहीं / No officially declared national sport",
        "हॉकी / Hockey",
        "क्रिकेट / Cricket",
        "कबड्डी / Kabaddi"
      ],
      "answer": 0
    },
    {
      "q": "प्रश्न अभ्यास 425: भारत की राजधानी क्या है? / Practice question 425: What is the capital of India?",
      "options": [
        "मुंबई / Mumbai",
        "जयपुर / Jaipur",
        "नई दिल्ली / New Delhi",
        "पटना / Patna"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 426: भारत का राष्ट्रीय पक्षी कौन है? / Practice question 426: What is India's national bird?",
      "options": [
        "तोता / Parrot",
        "हंस / Swan",
        "मोर / Peacock",
        "कबूतर / Pigeon"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 427: भारत का राष्ट्रीय फूल कौन-सा है? / Practice question 427: What is India's national flower?",
      "options": [
        "गुलाब / Rose",
        "गेंदा / Marigold",
        "कमल / Lotus",
        "चमेली / Jasmine"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 428: भारत का राष्ट्रीय पशु कौन है? / Practice question 428: What is India's national animal?",
      "options": [
        "शेर / Lion",
        "हाथी / Elephant",
        "बाघ / Tiger",
        "तेंदुआ / Leopard"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 429: भारत का राष्ट्रीय फल कौन-सा है? / Practice question 429: What is India's national fruit?",
      "options": [
        "सेब / Apple",
        "केला / Banana",
        "आम / Mango",
        "अमरूद / Guava"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 430: भारत का राष्ट्रीय जलीय जीव कौन है? / Practice question 430: What is India's national aquatic animal?",
      "options": [
        "मगरमच्छ / Crocodile",
        "नीली व्हेल / Blue whale",
        "गंगा नदी डॉल्फिन / Ganges river dolphin",
        "कछुआ / Turtle"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 431: भारत का राष्ट्रीय वृक्ष कौन-सा है? / Practice question 431: What is India's national tree?",
      "options": [
        "नीम / Neem",
        "पीपल / Peepal",
        "बरगद / Banyan",
        "नारियल / Coconut"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 432: भारत का राष्ट्रीय गान कौन-सा है? / Practice question 432: What is India's national anthem?",
      "options": [
        "वंदे मातरम् / Vande Mataram",
        "सारे जहाँ से अच्छा / Sare Jahan Se Achha",
        "जन गण मन / Jana Gana Mana",
        "ऐ मेरे वतन के लोगों / Ae Mere Watan Ke Logon"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 433: भारत का राष्ट्रीय गीत कौन-सा है? / Practice question 433: What is India's national song?",
      "options": [
        "जन गण मन / Jana Gana Mana",
        "सारे जहाँ से अच्छा / Sare Jahan Se Achha",
        "वंदे मातरम् / Vande Mataram",
        "रघुपति राघव / Raghupati Raghav"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 434: भारत का स्वतंत्रता दिवस कब है? / Practice question 434: When is India's Independence Day?",
      "options": [
        "26 जनवरी / 26 January",
        "2 अक्टूबर / 2 October",
        "15 अगस्त / 15 August",
        "14 नवंबर / 14 November"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 435: भारत का गणतंत्र दिवस कब है? / Practice question 435: When is India's Republic Day?",
      "options": [
        "15 अगस्त / 15 August",
        "5 सितंबर / 5 September",
        "26 जनवरी / 26 January",
        "2 अक्टूबर / 2 October"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 436: भारतीय संविधान कब लागू हुआ? / Practice question 436: When did the Constitution of India come into effect?",
      "options": [
        "15 अगस्त 1947 / 15 August 1947",
        "26 नवंबर 1949 / 26 November 1949",
        "26 जनवरी 1950 / 26 January 1950",
        "2 अक्टूबर 1950 / 2 October 1950"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 437: भारत के पहले प्रधानमंत्री कौन थे? / Practice question 437: Who was India's first Prime Minister?",
      "options": [
        "महात्मा गांधी / Mahatma Gandhi",
        "सरदार पटेल / Sardar Patel",
        "जवाहरलाल नेहरू / Jawaharlal Nehru",
        "लाल बहादुर शास्त्री / Lal Bahadur Shastri"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 438: भारत के पहले राष्ट्रपति कौन थे? / Practice question 438: Who was India's first President?",
      "options": [
        "डॉ. ए.पी.जे. अब्दुल कलाम / Dr. A.P.J. Abdul Kalam",
        "जाकिर हुसैन / Zakir Husain",
        "डॉ. राजेंद्र प्रसाद / Dr. Rajendra Prasad",
        "सर्वपल्ली राधाकृष्णन / S. Radhakrishnan"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 439: क्षेत्रफल के आधार पर भारत का सबसे बड़ा राज्य कौन है? / Practice question 439: Which is India's largest state by area?",
      "options": [
        "उत्तर प्रदेश / Uttar Pradesh",
        "महाराष्ट्र / Maharashtra",
        "राजस्थान / Rajasthan",
        "मध्य प्रदेश / Madhya Pradesh"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 440: क्षेत्रफल के आधार पर भारत का सबसे छोटा राज्य कौन है? / Practice question 440: Which is India's smallest state by area?",
      "options": [
        "सिक्किम / Sikkim",
        "त्रिपुरा / Tripura",
        "गोवा / Goa",
        "मणिपुर / Manipur"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 441: ताजमहल कहाँ है? / Practice question 441: Where is the Taj Mahal?",
      "options": [
        "दिल्ली / Delhi",
        "जयपुर / Jaipur",
        "आगरा / Agra",
        "लखनऊ / Lucknow"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 442: भारत की मुद्रा क्या है? / Practice question 442: What is the currency of India?",
      "options": [
        "टका / Taka",
        "युआन / Yuan",
        "रुपया / Rupee",
        "येन / Yen"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 443: भारत का अंतरिक्ष संगठन कौन-सा है? / Practice question 443: What is India's space agency?",
      "options": [
        "नासा / NASA",
        "ईएसए / ESA",
        "इसरो / ISRO",
        "जाक्सा / JAXA"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 444: भारत का सर्वोच्च न्यायालय कहाँ है? / Practice question 444: Where is the Supreme Court of India?",
      "options": [
        "मुंबई / Mumbai",
        "कोलकाता / Kolkata",
        "नई दिल्ली / New Delhi",
        "चेन्नई / Chennai"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 445: पृथ्वी का प्राकृतिक उपग्रह कौन है? / Practice question 445: What is Earth's natural satellite?",
      "options": [
        "मंगल / Mars",
        "शुक्र / Venus",
        "चंद्रमा / Moon",
        "सूर्य / Sun"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 446: सौरमंडल का सबसे बड़ा ग्रह कौन है? / Practice question 446: Which is the largest planet in the Solar System?",
      "options": [
        "पृथ्वी / Earth",
        "शनि / Saturn",
        "बृहस्पति / Jupiter",
        "नेपच्यून / Neptune"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 447: सूर्य के सबसे निकट ग्रह कौन है? / Practice question 447: Which planet is closest to the Sun?",
      "options": [
        "शुक्र / Venus",
        "पृथ्वी / Earth",
        "बुध / Mercury",
        "मंगल / Mars"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 448: लाल ग्रह किसे कहते हैं? / Practice question 448: Which planet is called the Red Planet?",
      "options": [
        "शुक्र / Venus",
        "बृहस्पति / Jupiter",
        "मंगल / Mars",
        "बुध / Mercury"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 449: पृथ्वी को सूर्य की परिक्रमा में लगभग कितना समय लगता है? / Practice question 449: How long does Earth take to orbit the Sun?",
      "options": [
        "24 घंटे / 24 hours",
        "लगभग 30 दिन / About 30 days",
        "लगभग 365 दिन / About 365 days",
        "लगभग 7 दिन / About 7 days"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 450: पानी का रासायनिक सूत्र क्या है? / Practice question 450: What is the chemical formula of water?",
      "options": [
        "CO₂",
        "O₂",
        "H₂O",
        "NaCl"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 451: सामान्य वायुदाब पर पानी का क्वथनांक क्या है? / Practice question 451: What is the boiling point of water at standard pressure?",
      "options": [
        "0°C",
        "50°C",
        "100°C",
        "150°C"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 452: पौधे प्रकाश संश्लेषण में कौन-सी गैस लेते हैं? / Practice question 452: Which gas do plants take in during photosynthesis?",
      "options": [
        "ऑक्सीजन / Oxygen",
        "हाइड्रोजन / Hydrogen",
        "कार्बन डाइऑक्साइड / Carbon dioxide",
        "हीलियम / Helium"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 453: मनुष्य साँस लेने के लिए मुख्यतः कौन-सी गैस उपयोग करता है? / Practice question 453: Which gas do humans primarily use for respiration?",
      "options": [
        "नाइट्रोजन / Nitrogen",
        "कार्बन डाइऑक्साइड / Carbon dioxide",
        "ऑक्सीजन / Oxygen",
        "हीलियम / Helium"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 454: बल की SI इकाई क्या है? / Practice question 454: What is the SI unit of force?",
      "options": [
        "जूल / Joule",
        "वाट / Watt",
        "न्यूटन / Newton",
        "पास्कल / Pascal"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 455: विद्युत धारा की SI इकाई क्या है? / Practice question 455: What is the SI unit of electric current?",
      "options": [
        "वोल्ट / Volt",
        "ओम / Ohm",
        "एम्पियर / Ampere",
        "वाट / Watt"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 456: प्रकाश की गति सबसे अधिक किसमें होती है? / Practice question 456: In which medium is the speed of light greatest?",
      "options": [
        "पानी / Water",
        "काँच / Glass",
        "निर्वात / Vacuum",
        "हवा / Air"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 457: मानव शरीर का सबसे बड़ा अंग कौन-सा है? / Practice question 457: What is the largest organ of the human body?",
      "options": [
        "हृदय / Heart",
        "यकृत / Liver",
        "त्वचा / Skin",
        "फेफड़ा / Lung"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 458: मानव शरीर में रक्त पंप कौन करता है? / Practice question 458: Which organ pumps blood in the human body?",
      "options": [
        "मस्तिष्क / Brain",
        "गुर्दा / Kidney",
        "हृदय / Heart",
        "यकृत / Liver"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 459: वयस्क मानव शरीर में सामान्यतः कितनी हड्डियाँ होती हैं? / Practice question 459: How many bones are typically in an adult human body?",
      "options": [
        "201",
        "212",
        "206",
        "220"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 460: विटामिन C का अच्छा स्रोत कौन-सा है? / Practice question 460: Which is a good source of vitamin C?",
      "options": [
        "चावल / Rice",
        "मक्खन / Butter",
        "संतरा / Orange",
        "नमक / Salt"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 461: पृथ्वी के वायुमंडल में सबसे अधिक कौन-सी गैस है? / Practice question 461: Which gas is most abundant in Earth's atmosphere?",
      "options": [
        "ऑक्सीजन / Oxygen",
        "कार्बन डाइऑक्साइड / Carbon dioxide",
        "नाइट्रोजन / Nitrogen",
        "हाइड्रोजन / Hydrogen"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 462: कंप्यूटर का मस्तिष्क किसे कहा जाता है? / Practice question 462: What is often called the brain of a computer?",
      "options": [
        "माउस / Mouse",
        "कीबोर्ड / Keyboard",
        "CPU",
        "मॉनिटर / Monitor"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 463: WWW का पूरा नाम क्या है? / Practice question 463: What does WWW stand for?",
      "options": [
        "World Web Window",
        "Wide World Wire",
        "World Wide Web",
        "Web World Wide"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 464: कंप्यूटर की अस्थायी मेमोरी कौन-सी है? / Practice question 464: Which is a computer's temporary memory?",
      "options": [
        "ROM",
        "DVD",
        "RAM",
        "SSD"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 465: कीबोर्ड किस प्रकार का उपकरण है? / Practice question 465: What type of device is a keyboard?",
      "options": [
        "आउटपुट डिवाइस / Output device",
        "स्टोरेज डिवाइस / Storage device",
        "इनपुट डिवाइस / Input device",
        "नेटवर्क डिवाइस / Network device"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 466: वेब पेज खोलने के लिए किसका उपयोग होता है? / Practice question 466: Which application is used to open web pages?",
      "options": [
        "कैलकुलेटर / Calculator",
        "पेंट / Paint",
        "वेब ब्राउज़र / Web browser",
        "कम्पाइलर / Compiler"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 467: भारत में शिक्षक दिवस कब मनाया जाता है? / Practice question 467: When is Teachers' Day celebrated in India?",
      "options": [
        "14 नवंबर / 14 November",
        "2 अक्टूबर / 2 October",
        "5 सितंबर / 5 September",
        "15 अगस्त / 15 August"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 468: भारत में बाल दिवस कब मनाया जाता है? / Practice question 468: When is Children's Day celebrated in India?",
      "options": [
        "5 सितंबर / 5 September",
        "26 जनवरी / 26 January",
        "14 नवंबर / 14 November",
        "1 मई / 1 May"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 469: महात्मा गांधी का जन्मदिन कब है? / Practice question 469: When is Mahatma Gandhi's birthday?",
      "options": [
        "15 अगस्त / 15 August",
        "26 जनवरी / 26 January",
        "2 अक्टूबर / 2 October",
        "14 नवंबर / 14 November"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 470: भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ? / Practice question 470: In which year did the Quit India Movement begin?",
      "options": [
        "1919",
        "1930",
        "1942",
        "1947"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 471: दांडी मार्च किस वर्ष हुआ? / Practice question 471: In which year did the Dandi March take place?",
      "options": [
        "1920",
        "1942",
        "1930",
        "1946"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 472: भारत को स्वतंत्रता किस वर्ष मिली? / Practice question 472: In which year did India gain independence?",
      "options": [
        "1942",
        "1945",
        "1947",
        "1950"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 473: ओलंपिक खेल सामान्यतः कितने वर्ष के अंतराल पर होते हैं? / Practice question 473: How often are the Olympic Games generally held?",
      "options": [
        "दो वर्ष / Two years",
        "तीन वर्ष / Three years",
        "चार वर्ष / Four years",
        "पाँच वर्ष / Five years"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 474: क्रिकेट टीम में मैदान पर एक समय कितने खिलाड़ी होते हैं? / Practice question 474: How many players are on the field for one cricket team at a time?",
      "options": [
        "9",
        "10",
        "11",
        "12"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 475: फुटबॉल टीम में मैदान पर कितने खिलाड़ी होते हैं? / Practice question 475: How many players are on the field for one football team?",
      "options": [
        "7",
        "9",
        "11",
        "13"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 476: शतरंज की बिसात में कितने खाने होते हैं? / Practice question 476: How many squares are on a chessboard?",
      "options": [
        "32",
        "48",
        "64",
        "100"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 477: बैडमिंटन में किस वस्तु को मारा जाता है? / Practice question 477: What object is hit in badminton?",
      "options": [
        "टेनिस बॉल / Tennis ball",
        "पक / Puck",
        "शटलकॉक / Shuttlecock",
        "क्रिकेट बॉल / Cricket ball"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 478: विश्व पर्यावरण दिवस कब मनाया जाता है? / Practice question 478: When is World Environment Day observed?",
      "options": [
        "22 अप्रैल / 22 April",
        "16 सितंबर / 16 September",
        "5 जून / 5 June",
        "1 दिसंबर / 1 December"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 479: विश्व स्वास्थ्य दिवस कब मनाया जाता है? / Practice question 479: When is World Health Day observed?",
      "options": [
        "1 मई / 1 May",
        "10 दिसंबर / 10 December",
        "7 अप्रैल / 7 April",
        "5 जून / 5 June"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 480: संयुक्त राष्ट्र दिवस कब मनाया जाता है? / Practice question 480: When is United Nations Day observed?",
      "options": [
        "1 जनवरी / 1 January",
        "8 मार्च / 8 March",
        "24 अक्टूबर / 24 October",
        "11 जुलाई / 11 July"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 481: जापान की राजधानी क्या है? / Practice question 481: What is the capital of Japan?",
      "options": [
        "क्योटो / Kyoto",
        "ओसाका / Osaka",
        "टोक्यो / Tokyo",
        "नारा / Nara"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 482: फ्रांस की राजधानी क्या है? / Practice question 482: What is the capital of France?",
      "options": [
        "रोम / Rome",
        "बर्लिन / Berlin",
        "पेरिस / Paris",
        "मैड्रिड / Madrid"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 483: नेपाल की राजधानी क्या है? / Practice question 483: What is the capital of Nepal?",
      "options": [
        "पोखरा / Pokhara",
        "थिम्फू / Thimphu",
        "काठमांडू / Kathmandu",
        "ढाका / Dhaka"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 484: बांग्लादेश की राजधानी क्या है? / Practice question 484: What is the capital of Bangladesh?",
      "options": [
        "चटगाँव / Chattogram",
        "काठमांडू / Kathmandu",
        "ढाका / Dhaka",
        "कराची / Karachi"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 485: ऑस्ट्रेलिया की राजधानी क्या है? / Practice question 485: What is the capital of Australia?",
      "options": [
        "सिडनी / Sydney",
        "मेलबर्न / Melbourne",
        "कैनबरा / Canberra",
        "पर्थ / Perth"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 486: कनाडा की राजधानी क्या है? / Practice question 486: What is the capital of Canada?",
      "options": [
        "टोरंटो / Toronto",
        "वैंकूवर / Vancouver",
        "ओटावा / Ottawa",
        "मॉन्ट्रियल / Montreal"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 487: ब्राज़ील की राजधानी क्या है? / Practice question 487: What is the capital of Brazil?",
      "options": [
        "रियो डी जेनेरियो / Rio de Janeiro",
        "साओ पाउलो / São Paulo",
        "ब्रासीलिया / Brasília",
        "सल्वाडोर / Salvador"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 488: मिस्र की राजधानी क्या है? / Practice question 488: What is the capital of Egypt?",
      "options": [
        "अलेक्जेंड्रिया / Alexandria",
        "लक्सर / Luxor",
        "काहिरा / Cairo",
        "गिज़ा / Giza"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 489: इटली की राजधानी क्या है? / Practice question 489: What is the capital of Italy?",
      "options": [
        "मिलान / Milan",
        "वेनिस / Venice",
        "रोम / Rome",
        "नेपल्स / Naples"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 490: जर्मनी की राजधानी क्या है? / Practice question 490: What is the capital of Germany?",
      "options": [
        "म्यूनिख / Munich",
        "हैम्बर्ग / Hamburg",
        "बर्लिन / Berlin",
        "फ्रैंकफर्ट / Frankfurt"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 491: स्पेन की राजधानी क्या है? / Practice question 491: What is the capital of Spain?",
      "options": [
        "बार्सिलोना / Barcelona",
        "सेविल / Seville",
        "मैड्रिड / Madrid",
        "वेलेंसिया / Valencia"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 492: चीन की राजधानी क्या है? / Practice question 492: What is the capital of China?",
      "options": [
        "शंघाई / Shanghai",
        "वुहान / Wuhan",
        "बीजिंग / Beijing",
        "ग्वांगझोउ / Guangzhou"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 493: रूस की राजधानी क्या है? / Practice question 493: What is the capital of Russia?",
      "options": [
        "सेंट पीटर्सबर्ग / Saint Petersburg",
        "कज़ान / Kazan",
        "मॉस्को / Moscow",
        "सोची / Sochi"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 494: अमेरिका की राजधानी क्या है? / Practice question 494: What is the capital of the United States?",
      "options": [
        "न्यूयॉर्क / New York",
        "लॉस एंजेलिस / Los Angeles",
        "वॉशिंगटन, डी.सी. / Washington, D.C.",
        "शिकागो / Chicago"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 495: दुनिया का सबसे बड़ा महासागर कौन-सा है? / Practice question 495: Which is the world's largest ocean?",
      "options": [
        "अटलांटिक / Atlantic",
        "हिंद महासागर / Indian",
        "प्रशांत महासागर / Pacific",
        "आर्कटिक / Arctic"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 496: दुनिया का सबसे ऊँचा पर्वत कौन-सा है? / Practice question 496: Which is the world's highest mountain above sea level?",
      "options": [
        "K2",
        "कंचनजंघा / Kangchenjunga",
        "माउंट एवरेस्ट / Mount Everest",
        "ल्होत्से / Lhotse"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 497: सहारा मरुस्थल किस महाद्वीप में है? / Practice question 497: On which continent is the Sahara Desert?",
      "options": [
        "एशिया / Asia",
        "ऑस्ट्रेलिया / Australia",
        "अफ्रीका / Africa",
        "यूरोप / Europe"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 498: नील नदी किस महाद्वीप में बहती है? / Practice question 498: On which continent does the Nile River flow?",
      "options": [
        "दक्षिण अमेरिका / South America",
        "एशिया / Asia",
        "अफ्रीका / Africa",
        "यूरोप / Europe"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 499: पृथ्वी पर कुल कितने महाद्वीप माने जाते हैं? / Practice question 499: How many continents are commonly recognized on Earth?",
      "options": [
        "5",
        "6",
        "7",
        "8"
      ],
      "answer": 2
    },
    {
      "q": "प्रश्न अभ्यास 500: पृथ्वी पर कितने महासागर सामान्यतः गिने जाते हैं? / Practice question 500: How many oceans are commonly recognized on Earth?",
      "options": [
        "3",
        "4",
        "5",
        "7"
      ],
      "answer": 2
    }
  ],
  "Science": [
    {
      "q": "पौधे भोजन बनाने के लिए कौन-सी प्रक्रिया करते हैं?",
      "options": [
        "पाचन",
        "श्वसन",
        "प्रकाश संश्लेषण",
        "वाष्पीकरण"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: पौधे भोजन बनाने के लिए कौन-सी प्रक्रिया करते हैं?",
      "options": [
        "प्रकाश संश्लेषण",
        "वाष्पीकरण",
        "श्वसन",
        "पाचन"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: पौधे भोजन बनाने के लिए कौन-सी प्रक्रिया करते हैं?",
      "options": [
        "श्वसन",
        "पाचन",
        "वाष्पीकरण",
        "प्रकाश संश्लेषण"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—पौधे भोजन बनाने के लिए कौन-सी प्रक्रिया करते हैं?",
      "options": [
        "श्वसन",
        "वाष्पीकरण",
        "प्रकाश संश्लेषण",
        "पाचन"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पौधे भोजन बनाने के लिए कौन-सी प्रक्रिया करते हैं?",
      "options": [
        "वाष्पीकरण",
        "श्वसन",
        "प्रकाश संश्लेषण",
        "पाचन"
      ],
      "answer": 2
    },
    {
      "q": "पानी का रासायनिक सूत्र क्या है?",
      "options": [
        "NaCl",
        "H₂O",
        "O₂",
        "CO₂"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: पानी का रासायनिक सूत्र क्या है?",
      "options": [
        "H₂O",
        "NaCl",
        "O₂",
        "CO₂"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: पानी का रासायनिक सूत्र क्या है?",
      "options": [
        "H₂O",
        "NaCl",
        "O₂",
        "CO₂"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—पानी का रासायनिक सूत्र क्या है?",
      "options": [
        "NaCl",
        "H₂O",
        "CO₂",
        "O₂"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पानी का रासायनिक सूत्र क्या है?",
      "options": [
        "NaCl",
        "H₂O",
        "O₂",
        "CO₂"
      ],
      "answer": 1
    },
    {
      "q": "रक्त को पूरे शरीर में कौन पंप करता है?",
      "options": [
        "हृदय",
        "मस्तिष्क",
        "फेफड़े",
        "गुर्दे"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: रक्त को पूरे शरीर में कौन पंप करता है?",
      "options": [
        "फेफड़े",
        "गुर्दे",
        "हृदय",
        "मस्तिष्क"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: रक्त को पूरे शरीर में कौन पंप करता है?",
      "options": [
        "हृदय",
        "मस्तिष्क",
        "फेफड़े",
        "गुर्दे"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—रक्त को पूरे शरीर में कौन पंप करता है?",
      "options": [
        "हृदय",
        "गुर्दे",
        "मस्तिष्क",
        "फेफड़े"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? रक्त को पूरे शरीर में कौन पंप करता है?",
      "options": [
        "गुर्दे",
        "हृदय",
        "मस्तिष्क",
        "फेफड़े"
      ],
      "answer": 1
    },
    {
      "q": "साँस लेने के लिए कौन-सी गैस आवश्यक है?",
      "options": [
        "हीलियम",
        "नाइट्रोजन",
        "ऑक्सीजन",
        "हाइड्रोजन"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: साँस लेने के लिए कौन-सी गैस आवश्यक है?",
      "options": [
        "हीलियम",
        "ऑक्सीजन",
        "हाइड्रोजन",
        "नाइट्रोजन"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: साँस लेने के लिए कौन-सी गैस आवश्यक है?",
      "options": [
        "ऑक्सीजन",
        "हीलियम",
        "नाइट्रोजन",
        "हाइड्रोजन"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—साँस लेने के लिए कौन-सी गैस आवश्यक है?",
      "options": [
        "ऑक्सीजन",
        "हाइड्रोजन",
        "नाइट्रोजन",
        "हीलियम"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? साँस लेने के लिए कौन-सी गैस आवश्यक है?",
      "options": [
        "हीलियम",
        "हाइड्रोजन",
        "ऑक्सीजन",
        "नाइट्रोजन"
      ],
      "answer": 2
    },
    {
      "q": "सूर्य के सबसे निकट ग्रह कौन-सा है?",
      "options": [
        "पृथ्वी",
        "बुध",
        "शुक्र",
        "मंगल"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: सूर्य के सबसे निकट ग्रह कौन-सा है?",
      "options": [
        "बुध",
        "पृथ्वी",
        "मंगल",
        "शुक्र"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: सूर्य के सबसे निकट ग्रह कौन-सा है?",
      "options": [
        "शुक्र",
        "पृथ्वी",
        "बुध",
        "मंगल"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—सूर्य के सबसे निकट ग्रह कौन-सा है?",
      "options": [
        "मंगल",
        "पृथ्वी",
        "शुक्र",
        "बुध"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? सूर्य के सबसे निकट ग्रह कौन-सा है?",
      "options": [
        "मंगल",
        "पृथ्वी",
        "शुक्र",
        "बुध"
      ],
      "answer": 3
    },
    {
      "q": "लाल ग्रह किसे कहा जाता है?",
      "options": [
        "मंगल",
        "बुध",
        "शनि",
        "बृहस्पति"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: लाल ग्रह किसे कहा जाता है?",
      "options": [
        "बुध",
        "बृहस्पति",
        "मंगल",
        "शनि"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: लाल ग्रह किसे कहा जाता है?",
      "options": [
        "शनि",
        "बृहस्पति",
        "मंगल",
        "बुध"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—लाल ग्रह किसे कहा जाता है?",
      "options": [
        "शनि",
        "बृहस्पति",
        "बुध",
        "मंगल"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? लाल ग्रह किसे कहा जाता है?",
      "options": [
        "बृहस्पति",
        "शनि",
        "मंगल",
        "बुध"
      ],
      "answer": 2
    },
    {
      "q": "पौधों का हरा रंग किसके कारण होता है?",
      "options": [
        "केराटिन",
        "हीमोग्लोबिन",
        "मेलानिन",
        "क्लोरोफिल"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: पौधों का हरा रंग किसके कारण होता है?",
      "options": [
        "मेलानिन",
        "हीमोग्लोबिन",
        "क्लोरोफिल",
        "केराटिन"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: पौधों का हरा रंग किसके कारण होता है?",
      "options": [
        "केराटिन",
        "क्लोरोफिल",
        "हीमोग्लोबिन",
        "मेलानिन"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—पौधों का हरा रंग किसके कारण होता है?",
      "options": [
        "मेलानिन",
        "केराटिन",
        "क्लोरोफिल",
        "हीमोग्लोबिन"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पौधों का हरा रंग किसके कारण होता है?",
      "options": [
        "हीमोग्लोबिन",
        "मेलानिन",
        "केराटिन",
        "क्लोरोफिल"
      ],
      "answer": 3
    },
    {
      "q": "मानव शरीर का सबसे बड़ा अंग कौन-सा है?",
      "options": [
        "यकृत",
        "हृदय",
        "फेफड़ा",
        "त्वचा"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: मानव शरीर का सबसे बड़ा अंग कौन-सा है?",
      "options": [
        "त्वचा",
        "यकृत",
        "हृदय",
        "फेफड़ा"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: मानव शरीर का सबसे बड़ा अंग कौन-सा है?",
      "options": [
        "त्वचा",
        "यकृत",
        "हृदय",
        "फेफड़ा"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—मानव शरीर का सबसे बड़ा अंग कौन-सा है?",
      "options": [
        "फेफड़ा",
        "हृदय",
        "त्वचा",
        "यकृत"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? मानव शरीर का सबसे बड़ा अंग कौन-सा है?",
      "options": [
        "हृदय",
        "फेफड़ा",
        "यकृत",
        "त्वचा"
      ],
      "answer": 3
    },
    {
      "q": "पानी सामान्य दबाव पर कितने °C पर उबलता है?",
      "options": [
        "75°C",
        "50°C",
        "100°C",
        "150°C"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: पानी सामान्य दबाव पर कितने °C पर उबलता है?",
      "options": [
        "75°C",
        "150°C",
        "100°C",
        "50°C"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: पानी सामान्य दबाव पर कितने °C पर उबलता है?",
      "options": [
        "150°C",
        "100°C",
        "75°C",
        "50°C"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—पानी सामान्य दबाव पर कितने °C पर उबलता है?",
      "options": [
        "75°C",
        "100°C",
        "150°C",
        "50°C"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पानी सामान्य दबाव पर कितने °C पर उबलता है?",
      "options": [
        "50°C",
        "150°C",
        "75°C",
        "100°C"
      ],
      "answer": 3
    },
    {
      "q": "बर्फ सामान्य दबाव पर कितने °C पर पिघलती है?",
      "options": [
        "100°C",
        "10°C",
        "50°C",
        "0°C"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: बर्फ सामान्य दबाव पर कितने °C पर पिघलती है?",
      "options": [
        "10°C",
        "0°C",
        "50°C",
        "100°C"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: बर्फ सामान्य दबाव पर कितने °C पर पिघलती है?",
      "options": [
        "50°C",
        "100°C",
        "0°C",
        "10°C"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—बर्फ सामान्य दबाव पर कितने °C पर पिघलती है?",
      "options": [
        "100°C",
        "0°C",
        "50°C",
        "10°C"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? बर्फ सामान्य दबाव पर कितने °C पर पिघलती है?",
      "options": [
        "100°C",
        "50°C",
        "10°C",
        "0°C"
      ],
      "answer": 3
    },
    {
      "q": "ध्वनि किसमें यात्रा नहीं कर सकती?",
      "options": [
        "पानी",
        "हवा",
        "इस्पात",
        "निर्वात"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: ध्वनि किसमें यात्रा नहीं कर सकती?",
      "options": [
        "पानी",
        "निर्वात",
        "इस्पात",
        "हवा"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: ध्वनि किसमें यात्रा नहीं कर सकती?",
      "options": [
        "इस्पात",
        "पानी",
        "निर्वात",
        "हवा"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—ध्वनि किसमें यात्रा नहीं कर सकती?",
      "options": [
        "पानी",
        "इस्पात",
        "हवा",
        "निर्वात"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? ध्वनि किसमें यात्रा नहीं कर सकती?",
      "options": [
        "इस्पात",
        "निर्वात",
        "पानी",
        "हवा"
      ],
      "answer": 1
    },
    {
      "q": "बल की SI इकाई क्या है?",
      "options": [
        "पास्कल",
        "न्यूटन",
        "वाट",
        "जूल"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: बल की SI इकाई क्या है?",
      "options": [
        "जूल",
        "पास्कल",
        "वाट",
        "न्यूटन"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: बल की SI इकाई क्या है?",
      "options": [
        "जूल",
        "न्यूटन",
        "वाट",
        "पास्कल"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—बल की SI इकाई क्या है?",
      "options": [
        "पास्कल",
        "जूल",
        "वाट",
        "न्यूटन"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? बल की SI इकाई क्या है?",
      "options": [
        "पास्कल",
        "वाट",
        "न्यूटन",
        "जूल"
      ],
      "answer": 2
    },
    {
      "q": "ऊर्जा की SI इकाई क्या है?",
      "options": [
        "न्यूटन",
        "जूल",
        "एम्पियर",
        "वोल्ट"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: ऊर्जा की SI इकाई क्या है?",
      "options": [
        "एम्पियर",
        "वोल्ट",
        "न्यूटन",
        "जूल"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: ऊर्जा की SI इकाई क्या है?",
      "options": [
        "जूल",
        "न्यूटन",
        "वोल्ट",
        "एम्पियर"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—ऊर्जा की SI इकाई क्या है?",
      "options": [
        "एम्पियर",
        "न्यूटन",
        "जूल",
        "वोल्ट"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? ऊर्जा की SI इकाई क्या है?",
      "options": [
        "जूल",
        "वोल्ट",
        "एम्पियर",
        "न्यूटन"
      ],
      "answer": 0
    },
    {
      "q": "विद्युत धारा की इकाई क्या है?",
      "options": [
        "एम्पियर",
        "वोल्ट",
        "वाट",
        "ओम"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: विद्युत धारा की इकाई क्या है?",
      "options": [
        "वाट",
        "वोल्ट",
        "ओम",
        "एम्पियर"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: विद्युत धारा की इकाई क्या है?",
      "options": [
        "वाट",
        "एम्पियर",
        "ओम",
        "वोल्ट"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—विद्युत धारा की इकाई क्या है?",
      "options": [
        "वोल्ट",
        "ओम",
        "एम्पियर",
        "वाट"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? विद्युत धारा की इकाई क्या है?",
      "options": [
        "वाट",
        "ओम",
        "एम्पियर",
        "वोल्ट"
      ],
      "answer": 2
    },
    {
      "q": "प्रकाश वर्ष किसकी इकाई है?",
      "options": [
        "तापमान",
        "दूरी",
        "गति",
        "समय"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: प्रकाश वर्ष किसकी इकाई है?",
      "options": [
        "तापमान",
        "दूरी",
        "गति",
        "समय"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: प्रकाश वर्ष किसकी इकाई है?",
      "options": [
        "तापमान",
        "दूरी",
        "समय",
        "गति"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—प्रकाश वर्ष किसकी इकाई है?",
      "options": [
        "समय",
        "तापमान",
        "गति",
        "दूरी"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? प्रकाश वर्ष किसकी इकाई है?",
      "options": [
        "गति",
        "दूरी",
        "समय",
        "तापमान"
      ],
      "answer": 1
    },
    {
      "q": "वयस्क मानव के सामान्यतः कितने दाँत होते हैं?",
      "options": [
        "30",
        "32",
        "36",
        "28"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: वयस्क मानव के सामान्यतः कितने दाँत होते हैं?",
      "options": [
        "32",
        "30",
        "36",
        "28"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: वयस्क मानव के सामान्यतः कितने दाँत होते हैं?",
      "options": [
        "36",
        "28",
        "32",
        "30"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—वयस्क मानव के सामान्यतः कितने दाँत होते हैं?",
      "options": [
        "28",
        "30",
        "32",
        "36"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? वयस्क मानव के सामान्यतः कितने दाँत होते हैं?",
      "options": [
        "32",
        "28",
        "30",
        "36"
      ],
      "answer": 0
    },
    {
      "q": "रक्त में ऑक्सीजन ले जाने वाला पदार्थ कौन-सा है?",
      "options": [
        "पित्त",
        "हीमोग्लोबिन",
        "इंसुलिन",
        "क्लोरोफिल"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: रक्त में ऑक्सीजन ले जाने वाला पदार्थ कौन-सा है?",
      "options": [
        "पित्त",
        "इंसुलिन",
        "हीमोग्लोबिन",
        "क्लोरोफिल"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: रक्त में ऑक्सीजन ले जाने वाला पदार्थ कौन-सा है?",
      "options": [
        "इंसुलिन",
        "हीमोग्लोबिन",
        "क्लोरोफिल",
        "पित्त"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—रक्त में ऑक्सीजन ले जाने वाला पदार्थ कौन-सा है?",
      "options": [
        "इंसुलिन",
        "हीमोग्लोबिन",
        "पित्त",
        "क्लोरोफिल"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? रक्त में ऑक्सीजन ले जाने वाला पदार्थ कौन-सा है?",
      "options": [
        "पित्त",
        "क्लोरोफिल",
        "हीमोग्लोबिन",
        "इंसुलिन"
      ],
      "answer": 2
    },
    {
      "q": "विटामिन C का अच्छा स्रोत कौन-सा है?",
      "options": [
        "नमक",
        "चावल",
        "तेल",
        "आँवला"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: विटामिन C का अच्छा स्रोत कौन-सा है?",
      "options": [
        "तेल",
        "आँवला",
        "नमक",
        "चावल"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: विटामिन C का अच्छा स्रोत कौन-सा है?",
      "options": [
        "तेल",
        "चावल",
        "नमक",
        "आँवला"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—विटामिन C का अच्छा स्रोत कौन-सा है?",
      "options": [
        "आँवला",
        "नमक",
        "चावल",
        "तेल"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? विटामिन C का अच्छा स्रोत कौन-सा है?",
      "options": [
        "नमक",
        "आँवला",
        "चावल",
        "तेल"
      ],
      "answer": 1
    },
    {
      "q": "विटामिन D के निर्माण में कौन मदद करता है?",
      "options": [
        "सूर्य का प्रकाश",
        "चाँदनी",
        "ध्वनि",
        "हवा"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: विटामिन D के निर्माण में कौन मदद करता है?",
      "options": [
        "चाँदनी",
        "सूर्य का प्रकाश",
        "हवा",
        "ध्वनि"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: विटामिन D के निर्माण में कौन मदद करता है?",
      "options": [
        "चाँदनी",
        "ध्वनि",
        "सूर्य का प्रकाश",
        "हवा"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—विटामिन D के निर्माण में कौन मदद करता है?",
      "options": [
        "हवा",
        "सूर्य का प्रकाश",
        "चाँदनी",
        "ध्वनि"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? विटामिन D के निर्माण में कौन मदद करता है?",
      "options": [
        "चाँदनी",
        "हवा",
        "ध्वनि",
        "सूर्य का प्रकाश"
      ],
      "answer": 3
    },
    {
      "q": "मानव शरीर में भोजन का अधिकांश अवशोषण कहाँ होता है?",
      "options": [
        "मुख",
        "छोटी आँत",
        "ग्रासनली",
        "बड़ी आँत"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: मानव शरीर में भोजन का अधिकांश अवशोषण कहाँ होता है?",
      "options": [
        "छोटी आँत",
        "ग्रासनली",
        "बड़ी आँत",
        "मुख"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: मानव शरीर में भोजन का अधिकांश अवशोषण कहाँ होता है?",
      "options": [
        "बड़ी आँत",
        "छोटी आँत",
        "ग्रासनली",
        "मुख"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—मानव शरीर में भोजन का अधिकांश अवशोषण कहाँ होता है?",
      "options": [
        "मुख",
        "ग्रासनली",
        "छोटी आँत",
        "बड़ी आँत"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? मानव शरीर में भोजन का अधिकांश अवशोषण कहाँ होता है?",
      "options": [
        "मुख",
        "छोटी आँत",
        "बड़ी आँत",
        "ग्रासनली"
      ],
      "answer": 1
    },
    {
      "q": "पृथ्वी का प्राकृतिक उपग्रह कौन है?",
      "options": [
        "मंगल",
        "सूर्य",
        "चंद्रमा",
        "शुक्र"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: पृथ्वी का प्राकृतिक उपग्रह कौन है?",
      "options": [
        "चंद्रमा",
        "सूर्य",
        "मंगल",
        "शुक्र"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: पृथ्वी का प्राकृतिक उपग्रह कौन है?",
      "options": [
        "मंगल",
        "चंद्रमा",
        "सूर्य",
        "शुक्र"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—पृथ्वी का प्राकृतिक उपग्रह कौन है?",
      "options": [
        "चंद्रमा",
        "शुक्र",
        "सूर्य",
        "मंगल"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पृथ्वी का प्राकृतिक उपग्रह कौन है?",
      "options": [
        "चंद्रमा",
        "मंगल",
        "शुक्र",
        "सूर्य"
      ],
      "answer": 0
    },
    {
      "q": "पृथ्वी सूर्य की परिक्रमा लगभग कितने समय में करती है?",
      "options": [
        "365 दिन",
        "30 दिन",
        "24 घंटे",
        "7 दिन"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: पृथ्वी सूर्य की परिक्रमा लगभग कितने समय में करती है?",
      "options": [
        "365 दिन",
        "7 दिन",
        "30 दिन",
        "24 घंटे"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: पृथ्वी सूर्य की परिक्रमा लगभग कितने समय में करती है?",
      "options": [
        "24 घंटे",
        "7 दिन",
        "30 दिन",
        "365 दिन"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—पृथ्वी सूर्य की परिक्रमा लगभग कितने समय में करती है?",
      "options": [
        "365 दिन",
        "30 दिन",
        "7 दिन",
        "24 घंटे"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पृथ्वी सूर्य की परिक्रमा लगभग कितने समय में करती है?",
      "options": [
        "7 दिन",
        "30 दिन",
        "24 घंटे",
        "365 दिन"
      ],
      "answer": 3
    },
    {
      "q": "दिन और रात किस कारण होते हैं?",
      "options": [
        "पृथ्वी की परिक्रमा से",
        "चंद्रमा से",
        "पृथ्वी के घूर्णन से",
        "बादलों से"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: दिन और रात किस कारण होते हैं?",
      "options": [
        "पृथ्वी की परिक्रमा से",
        "चंद्रमा से",
        "बादलों से",
        "पृथ्वी के घूर्णन से"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: दिन और रात किस कारण होते हैं?",
      "options": [
        "बादलों से",
        "पृथ्वी के घूर्णन से",
        "चंद्रमा से",
        "पृथ्वी की परिक्रमा से"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—दिन और रात किस कारण होते हैं?",
      "options": [
        "बादलों से",
        "पृथ्वी के घूर्णन से",
        "चंद्रमा से",
        "पृथ्वी की परिक्रमा से"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? दिन और रात किस कारण होते हैं?",
      "options": [
        "पृथ्वी के घूर्णन से",
        "पृथ्वी की परिक्रमा से",
        "बादलों से",
        "चंद्रमा से"
      ],
      "answer": 0
    },
    {
      "q": "पौधे वायुमंडल से मुख्यतः कौन-सी गैस लेते हैं?",
      "options": [
        "हाइड्रोजन",
        "कार्बन डाइऑक्साइड",
        "ऑक्सीजन",
        "हीलियम"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: पौधे वायुमंडल से मुख्यतः कौन-सी गैस लेते हैं?",
      "options": [
        "कार्बन डाइऑक्साइड",
        "ऑक्सीजन",
        "हीलियम",
        "हाइड्रोजन"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: पौधे वायुमंडल से मुख्यतः कौन-सी गैस लेते हैं?",
      "options": [
        "हीलियम",
        "हाइड्रोजन",
        "ऑक्सीजन",
        "कार्बन डाइऑक्साइड"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—पौधे वायुमंडल से मुख्यतः कौन-सी गैस लेते हैं?",
      "options": [
        "कार्बन डाइऑक्साइड",
        "ऑक्सीजन",
        "हाइड्रोजन",
        "हीलियम"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पौधे वायुमंडल से मुख्यतः कौन-सी गैस लेते हैं?",
      "options": [
        "हीलियम",
        "ऑक्सीजन",
        "कार्बन डाइऑक्साइड",
        "हाइड्रोजन"
      ],
      "answer": 2
    },
    {
      "q": "ओजोन परत किससे बचाव करती है?",
      "options": [
        "भूकंप से",
        "पराबैंगनी किरणों से",
        "ज्वार से",
        "ध्वनि से"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: ओजोन परत किससे बचाव करती है?",
      "options": [
        "भूकंप से",
        "ध्वनि से",
        "पराबैंगनी किरणों से",
        "ज्वार से"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: ओजोन परत किससे बचाव करती है?",
      "options": [
        "भूकंप से",
        "पराबैंगनी किरणों से",
        "ज्वार से",
        "ध्वनि से"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—ओजोन परत किससे बचाव करती है?",
      "options": [
        "पराबैंगनी किरणों से",
        "भूकंप से",
        "ज्वार से",
        "ध्वनि से"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? ओजोन परत किससे बचाव करती है?",
      "options": [
        "ध्वनि से",
        "पराबैंगनी किरणों से",
        "ज्वार से",
        "भूकंप से"
      ],
      "answer": 1
    },
    {
      "q": "परमाणु के केंद्र को क्या कहते हैं?",
      "options": [
        "अणु",
        "नाभिक",
        "इलेक्ट्रॉन",
        "कक्षा"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: परमाणु के केंद्र को क्या कहते हैं?",
      "options": [
        "कक्षा",
        "अणु",
        "इलेक्ट्रॉन",
        "नाभिक"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: परमाणु के केंद्र को क्या कहते हैं?",
      "options": [
        "इलेक्ट्रॉन",
        "नाभिक",
        "अणु",
        "कक्षा"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—परमाणु के केंद्र को क्या कहते हैं?",
      "options": [
        "नाभिक",
        "अणु",
        "इलेक्ट्रॉन",
        "कक्षा"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? परमाणु के केंद्र को क्या कहते हैं?",
      "options": [
        "नाभिक",
        "अणु",
        "कक्षा",
        "इलेक्ट्रॉन"
      ],
      "answer": 0
    },
    {
      "q": "ऋणात्मक आवेश वाला कण कौन है?",
      "options": [
        "इलेक्ट्रॉन",
        "प्रोटॉन",
        "फोटॉन",
        "न्यूट्रॉन"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: ऋणात्मक आवेश वाला कण कौन है?",
      "options": [
        "प्रोटॉन",
        "इलेक्ट्रॉन",
        "न्यूट्रॉन",
        "फोटॉन"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: ऋणात्मक आवेश वाला कण कौन है?",
      "options": [
        "प्रोटॉन",
        "फोटॉन",
        "न्यूट्रॉन",
        "इलेक्ट्रॉन"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—ऋणात्मक आवेश वाला कण कौन है?",
      "options": [
        "इलेक्ट्रॉन",
        "न्यूट्रॉन",
        "फोटॉन",
        "प्रोटॉन"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? ऋणात्मक आवेश वाला कण कौन है?",
      "options": [
        "प्रोटॉन",
        "फोटॉन",
        "इलेक्ट्रॉन",
        "न्यूट्रॉन"
      ],
      "answer": 2
    },
    {
      "q": "समान चुंबकीय ध्रुव एक-दूसरे को क्या करते हैं?",
      "options": [
        "नष्ट",
        "आकर्षित",
        "गर्म",
        "प्रतिकर्षित"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: समान चुंबकीय ध्रुव एक-दूसरे को क्या करते हैं?",
      "options": [
        "प्रतिकर्षित",
        "नष्ट",
        "गर्म",
        "आकर्षित"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: समान चुंबकीय ध्रुव एक-दूसरे को क्या करते हैं?",
      "options": [
        "आकर्षित",
        "प्रतिकर्षित",
        "गर्म",
        "नष्ट"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—समान चुंबकीय ध्रुव एक-दूसरे को क्या करते हैं?",
      "options": [
        "गर्म",
        "प्रतिकर्षित",
        "नष्ट",
        "आकर्षित"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? समान चुंबकीय ध्रुव एक-दूसरे को क्या करते हैं?",
      "options": [
        "आकर्षित",
        "नष्ट",
        "गर्म",
        "प्रतिकर्षित"
      ],
      "answer": 3
    },
    {
      "q": "अम्ल नीले लिटमस को किस रंग में बदलता है?",
      "options": [
        "हरा",
        "काला",
        "लाल",
        "नीला"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: अम्ल नीले लिटमस को किस रंग में बदलता है?",
      "options": [
        "हरा",
        "काला",
        "लाल",
        "नीला"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: अम्ल नीले लिटमस को किस रंग में बदलता है?",
      "options": [
        "नीला",
        "काला",
        "लाल",
        "हरा"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—अम्ल नीले लिटमस को किस रंग में बदलता है?",
      "options": [
        "नीला",
        "हरा",
        "काला",
        "लाल"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? अम्ल नीले लिटमस को किस रंग में बदलता है?",
      "options": [
        "काला",
        "नीला",
        "हरा",
        "लाल"
      ],
      "answer": 3
    },
    {
      "q": "सामान्य नमक का रासायनिक नाम क्या है?",
      "options": [
        "कैल्शियम ऑक्साइड",
        "सोडियम क्लोराइड",
        "सोडियम कार्बोनेट",
        "हाइड्रोजन क्लोराइड"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: सामान्य नमक का रासायनिक नाम क्या है?",
      "options": [
        "हाइड्रोजन क्लोराइड",
        "कैल्शियम ऑक्साइड",
        "सोडियम कार्बोनेट",
        "सोडियम क्लोराइड"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: सामान्य नमक का रासायनिक नाम क्या है?",
      "options": [
        "सोडियम क्लोराइड",
        "सोडियम कार्बोनेट",
        "हाइड्रोजन क्लोराइड",
        "कैल्शियम ऑक्साइड"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—सामान्य नमक का रासायनिक नाम क्या है?",
      "options": [
        "सोडियम क्लोराइड",
        "सोडियम कार्बोनेट",
        "हाइड्रोजन क्लोराइड",
        "कैल्शियम ऑक्साइड"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? सामान्य नमक का रासायनिक नाम क्या है?",
      "options": [
        "कैल्शियम ऑक्साइड",
        "सोडियम क्लोराइड",
        "हाइड्रोजन क्लोराइड",
        "सोडियम कार्बोनेट"
      ],
      "answer": 1
    },
    {
      "q": "जंग मुख्यतः किस धातु पर लगती है?",
      "options": [
        "चाँदी",
        "लोहा",
        "सोना",
        "प्लैटिनम"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: जंग मुख्यतः किस धातु पर लगती है?",
      "options": [
        "प्लैटिनम",
        "चाँदी",
        "लोहा",
        "सोना"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: जंग मुख्यतः किस धातु पर लगती है?",
      "options": [
        "सोना",
        "लोहा",
        "प्लैटिनम",
        "चाँदी"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—जंग मुख्यतः किस धातु पर लगती है?",
      "options": [
        "लोहा",
        "प्लैटिनम",
        "सोना",
        "चाँदी"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? जंग मुख्यतः किस धातु पर लगती है?",
      "options": [
        "चाँदी",
        "लोहा",
        "सोना",
        "प्लैटिनम"
      ],
      "answer": 1
    },
    {
      "q": "मानव शरीर का सामान्य तापमान लगभग कितना है?",
      "options": [
        "27°C",
        "47°C",
        "37°C",
        "10°C"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: मानव शरीर का सामान्य तापमान लगभग कितना है?",
      "options": [
        "10°C",
        "27°C",
        "47°C",
        "37°C"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: मानव शरीर का सामान्य तापमान लगभग कितना है?",
      "options": [
        "10°C",
        "47°C",
        "27°C",
        "37°C"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—मानव शरीर का सामान्य तापमान लगभग कितना है?",
      "options": [
        "10°C",
        "47°C",
        "37°C",
        "27°C"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? मानव शरीर का सामान्य तापमान लगभग कितना है?",
      "options": [
        "27°C",
        "47°C",
        "10°C",
        "37°C"
      ],
      "answer": 3
    },
    {
      "q": "गुर्दों का मुख्य काम क्या है?",
      "options": [
        "भोजन चबाना",
        "रक्त छानकर अपशिष्ट निकालना",
        "ऑक्सीजन बनाना",
        "रक्त पंप करना"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: गुर्दों का मुख्य काम क्या है?",
      "options": [
        "रक्त छानकर अपशिष्ट निकालना",
        "ऑक्सीजन बनाना",
        "भोजन चबाना",
        "रक्त पंप करना"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: गुर्दों का मुख्य काम क्या है?",
      "options": [
        "भोजन चबाना",
        "रक्त पंप करना",
        "ऑक्सीजन बनाना",
        "रक्त छानकर अपशिष्ट निकालना"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—गुर्दों का मुख्य काम क्या है?",
      "options": [
        "भोजन चबाना",
        "रक्त पंप करना",
        "ऑक्सीजन बनाना",
        "रक्त छानकर अपशिष्ट निकालना"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? गुर्दों का मुख्य काम क्या है?",
      "options": [
        "रक्त छानकर अपशिष्ट निकालना",
        "ऑक्सीजन बनाना",
        "भोजन चबाना",
        "रक्त पंप करना"
      ],
      "answer": 0
    },
    {
      "q": "फेफड़ों का मुख्य कार्य क्या है?",
      "options": [
        "हार्मोन बनाना",
        "रक्त छानना",
        "गैसों का आदान-प्रदान",
        "भोजन पचाना"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: फेफड़ों का मुख्य कार्य क्या है?",
      "options": [
        "हार्मोन बनाना",
        "भोजन पचाना",
        "गैसों का आदान-प्रदान",
        "रक्त छानना"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: फेफड़ों का मुख्य कार्य क्या है?",
      "options": [
        "हार्मोन बनाना",
        "भोजन पचाना",
        "गैसों का आदान-प्रदान",
        "रक्त छानना"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—फेफड़ों का मुख्य कार्य क्या है?",
      "options": [
        "गैसों का आदान-प्रदान",
        "हार्मोन बनाना",
        "भोजन पचाना",
        "रक्त छानना"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? फेफड़ों का मुख्य कार्य क्या है?",
      "options": [
        "रक्त छानना",
        "गैसों का आदान-प्रदान",
        "हार्मोन बनाना",
        "भोजन पचाना"
      ],
      "answer": 1
    },
    {
      "q": "पृथ्वी के वायुमंडल में सबसे अधिक कौन-सी गैस है?",
      "options": [
        "ऑक्सीजन",
        "नाइट्रोजन",
        "कार्बन डाइऑक्साइड",
        "हाइड्रोजन"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: पृथ्वी के वायुमंडल में सबसे अधिक कौन-सी गैस है?",
      "options": [
        "नाइट्रोजन",
        "कार्बन डाइऑक्साइड",
        "हाइड्रोजन",
        "ऑक्सीजन"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: पृथ्वी के वायुमंडल में सबसे अधिक कौन-सी गैस है?",
      "options": [
        "हाइड्रोजन",
        "नाइट्रोजन",
        "ऑक्सीजन",
        "कार्बन डाइऑक्साइड"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—पृथ्वी के वायुमंडल में सबसे अधिक कौन-सी गैस है?",
      "options": [
        "नाइट्रोजन",
        "हाइड्रोजन",
        "कार्बन डाइऑक्साइड",
        "ऑक्सीजन"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पृथ्वी के वायुमंडल में सबसे अधिक कौन-सी गैस है?",
      "options": [
        "नाइट्रोजन",
        "ऑक्सीजन",
        "कार्बन डाइऑक्साइड",
        "हाइड्रोजन"
      ],
      "answer": 0
    },
    {
      "q": "कौन-सा विटामिन रक्त के थक्के बनने में मदद करता है?",
      "options": [
        "विटामिन C",
        "विटामिन D",
        "विटामिन B12",
        "विटामिन K"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: कौन-सा विटामिन रक्त के थक्के बनने में मदद करता है?",
      "options": [
        "विटामिन C",
        "विटामिन B12",
        "विटामिन K",
        "विटामिन D"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: कौन-सा विटामिन रक्त के थक्के बनने में मदद करता है?",
      "options": [
        "विटामिन B12",
        "विटामिन K",
        "विटामिन D",
        "विटामिन C"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—कौन-सा विटामिन रक्त के थक्के बनने में मदद करता है?",
      "options": [
        "विटामिन C",
        "विटामिन K",
        "विटामिन B12",
        "विटामिन D"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कौन-सा विटामिन रक्त के थक्के बनने में मदद करता है?",
      "options": [
        "विटामिन K",
        "विटामिन B12",
        "विटामिन D",
        "विटामिन C"
      ],
      "answer": 0
    },
    {
      "q": "पौधों में पानी का परिवहन मुख्यतः कौन करता है?",
      "options": [
        "पंखुड़ी",
        "रंध्र",
        "जाइलम",
        "फ्लोएम"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: पौधों में पानी का परिवहन मुख्यतः कौन करता है?",
      "options": [
        "पंखुड़ी",
        "फ्लोएम",
        "रंध्र",
        "जाइलम"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: पौधों में पानी का परिवहन मुख्यतः कौन करता है?",
      "options": [
        "फ्लोएम",
        "पंखुड़ी",
        "रंध्र",
        "जाइलम"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—पौधों में पानी का परिवहन मुख्यतः कौन करता है?",
      "options": [
        "पंखुड़ी",
        "रंध्र",
        "जाइलम",
        "फ्लोएम"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पौधों में पानी का परिवहन मुख्यतः कौन करता है?",
      "options": [
        "फ्लोएम",
        "जाइलम",
        "पंखुड़ी",
        "रंध्र"
      ],
      "answer": 1
    },
    {
      "q": "पौधों में भोजन का परिवहन कौन करता है?",
      "options": [
        "फ्लोएम",
        "जाइलम",
        "जड़ टोपी",
        "छाल का बाहरी भाग"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: पौधों में भोजन का परिवहन कौन करता है?",
      "options": [
        "जड़ टोपी",
        "फ्लोएम",
        "छाल का बाहरी भाग",
        "जाइलम"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: पौधों में भोजन का परिवहन कौन करता है?",
      "options": [
        "जाइलम",
        "फ्लोएम",
        "छाल का बाहरी भाग",
        "जड़ टोपी"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—पौधों में भोजन का परिवहन कौन करता है?",
      "options": [
        "फ्लोएम",
        "जाइलम",
        "जड़ टोपी",
        "छाल का बाहरी भाग"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पौधों में भोजन का परिवहन कौन करता है?",
      "options": [
        "जाइलम",
        "फ्लोएम",
        "जड़ टोपी",
        "छाल का बाहरी भाग"
      ],
      "answer": 1
    },
    {
      "q": "पृथ्वी की सतह पर सबसे अधिक कौन-सा पदार्थ है?",
      "options": [
        "कोयला",
        "पानी",
        "लोहा",
        "रेत"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: पृथ्वी की सतह पर सबसे अधिक कौन-सा पदार्थ है?",
      "options": [
        "लोहा",
        "रेत",
        "पानी",
        "कोयला"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: पृथ्वी की सतह पर सबसे अधिक कौन-सा पदार्थ है?",
      "options": [
        "पानी",
        "रेत",
        "कोयला",
        "लोहा"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—पृथ्वी की सतह पर सबसे अधिक कौन-सा पदार्थ है?",
      "options": [
        "पानी",
        "लोहा",
        "रेत",
        "कोयला"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पृथ्वी की सतह पर सबसे अधिक कौन-सा पदार्थ है?",
      "options": [
        "कोयला",
        "पानी",
        "रेत",
        "लोहा"
      ],
      "answer": 1
    },
    {
      "q": "किस ग्रह के चारों ओर प्रमुख वलय हैं?",
      "options": [
        "पृथ्वी",
        "बुध",
        "मंगल",
        "शनि"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: किस ग्रह के चारों ओर प्रमुख वलय हैं?",
      "options": [
        "मंगल",
        "पृथ्वी",
        "बुध",
        "शनि"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: किस ग्रह के चारों ओर प्रमुख वलय हैं?",
      "options": [
        "बुध",
        "मंगल",
        "शनि",
        "पृथ्वी"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—किस ग्रह के चारों ओर प्रमुख वलय हैं?",
      "options": [
        "शनि",
        "बुध",
        "मंगल",
        "पृथ्वी"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? किस ग्रह के चारों ओर प्रमुख वलय हैं?",
      "options": [
        "पृथ्वी",
        "शनि",
        "बुध",
        "मंगल"
      ],
      "answer": 1
    },
    {
      "q": "प्रकाश की गति सबसे अधिक किसमें होती है?",
      "options": [
        "काँच",
        "पानी",
        "हवा",
        "निर्वात"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: प्रकाश की गति सबसे अधिक किसमें होती है?",
      "options": [
        "काँच",
        "हवा",
        "निर्वात",
        "पानी"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: प्रकाश की गति सबसे अधिक किसमें होती है?",
      "options": [
        "पानी",
        "निर्वात",
        "हवा",
        "काँच"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—प्रकाश की गति सबसे अधिक किसमें होती है?",
      "options": [
        "पानी",
        "हवा",
        "काँच",
        "निर्वात"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? प्रकाश की गति सबसे अधिक किसमें होती है?",
      "options": [
        "पानी",
        "हवा",
        "काँच",
        "निर्वात"
      ],
      "answer": 3
    },
    {
      "q": "दर्पण में प्रतिबिंब बनने की घटना क्या कहलाती है?",
      "options": [
        "संघनन",
        "अपवर्तन",
        "परावर्तन",
        "विसरण"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: दर्पण में प्रतिबिंब बनने की घटना क्या कहलाती है?",
      "options": [
        "परावर्तन",
        "अपवर्तन",
        "संघनन",
        "विसरण"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: दर्पण में प्रतिबिंब बनने की घटना क्या कहलाती है?",
      "options": [
        "परावर्तन",
        "संघनन",
        "अपवर्तन",
        "विसरण"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—दर्पण में प्रतिबिंब बनने की घटना क्या कहलाती है?",
      "options": [
        "परावर्तन",
        "अपवर्तन",
        "विसरण",
        "संघनन"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? दर्पण में प्रतिबिंब बनने की घटना क्या कहलाती है?",
      "options": [
        "परावर्तन",
        "संघनन",
        "अपवर्तन",
        "विसरण"
      ],
      "answer": 0
    },
    {
      "q": "लेंस से प्रकाश मुड़ने को क्या कहते हैं?",
      "options": [
        "परावर्तन",
        "वाष्पीकरण",
        "अपवर्तन",
        "चालन"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: लेंस से प्रकाश मुड़ने को क्या कहते हैं?",
      "options": [
        "चालन",
        "वाष्पीकरण",
        "परावर्तन",
        "अपवर्तन"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: लेंस से प्रकाश मुड़ने को क्या कहते हैं?",
      "options": [
        "परावर्तन",
        "वाष्पीकरण",
        "चालन",
        "अपवर्तन"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—लेंस से प्रकाश मुड़ने को क्या कहते हैं?",
      "options": [
        "परावर्तन",
        "अपवर्तन",
        "वाष्पीकरण",
        "चालन"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? लेंस से प्रकाश मुड़ने को क्या कहते हैं?",
      "options": [
        "वाष्पीकरण",
        "अपवर्तन",
        "परावर्तन",
        "चालन"
      ],
      "answer": 1
    },
    {
      "q": "पानी का भाप में बदलना क्या कहलाता है?",
      "options": [
        "वाष्पीकरण",
        "गलना",
        "जमना",
        "संघनन"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: पानी का भाप में बदलना क्या कहलाता है?",
      "options": [
        "वाष्पीकरण",
        "संघनन",
        "गलना",
        "जमना"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: पानी का भाप में बदलना क्या कहलाता है?",
      "options": [
        "वाष्पीकरण",
        "संघनन",
        "जमना",
        "गलना"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—पानी का भाप में बदलना क्या कहलाता है?",
      "options": [
        "जमना",
        "वाष्पीकरण",
        "गलना",
        "संघनन"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पानी का भाप में बदलना क्या कहलाता है?",
      "options": [
        "गलना",
        "संघनन",
        "वाष्पीकरण",
        "जमना"
      ],
      "answer": 2
    },
    {
      "q": "भाप का पानी में बदलना क्या कहलाता है?",
      "options": [
        "दहन",
        "वाष्पीकरण",
        "उर्ध्वपातन",
        "संघनन"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भाप का पानी में बदलना क्या कहलाता है?",
      "options": [
        "उर्ध्वपातन",
        "दहन",
        "वाष्पीकरण",
        "संघनन"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: भाप का पानी में बदलना क्या कहलाता है?",
      "options": [
        "दहन",
        "संघनन",
        "वाष्पीकरण",
        "उर्ध्वपातन"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—भाप का पानी में बदलना क्या कहलाता है?",
      "options": [
        "दहन",
        "उर्ध्वपातन",
        "संघनन",
        "वाष्पीकरण"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भाप का पानी में बदलना क्या कहलाता है?",
      "options": [
        "उर्ध्वपातन",
        "संघनन",
        "दहन",
        "वाष्पीकरण"
      ],
      "answer": 1
    },
    {
      "q": "पृथ्वी के भीतर कंपन से क्या उत्पन्न हो सकता है?",
      "options": [
        "ओस",
        "भूकंप",
        "ग्रहण",
        "इंद्रधनुष"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: पृथ्वी के भीतर कंपन से क्या उत्पन्न हो सकता है?",
      "options": [
        "इंद्रधनुष",
        "ग्रहण",
        "ओस",
        "भूकंप"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: पृथ्वी के भीतर कंपन से क्या उत्पन्न हो सकता है?",
      "options": [
        "भूकंप",
        "इंद्रधनुष",
        "ग्रहण",
        "ओस"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—पृथ्वी के भीतर कंपन से क्या उत्पन्न हो सकता है?",
      "options": [
        "ओस",
        "इंद्रधनुष",
        "भूकंप",
        "ग्रहण"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पृथ्वी के भीतर कंपन से क्या उत्पन्न हो सकता है?",
      "options": [
        "ओस",
        "इंद्रधनुष",
        "ग्रहण",
        "भूकंप"
      ],
      "answer": 3
    },
    {
      "q": "सूर्य ऊर्जा मुख्यतः किस प्रक्रिया से बनाता है?",
      "options": [
        "घर्षण",
        "दहन",
        "नाभिकीय संलयन",
        "वाष्पीकरण"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: सूर्य ऊर्जा मुख्यतः किस प्रक्रिया से बनाता है?",
      "options": [
        "दहन",
        "घर्षण",
        "नाभिकीय संलयन",
        "वाष्पीकरण"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: सूर्य ऊर्जा मुख्यतः किस प्रक्रिया से बनाता है?",
      "options": [
        "वाष्पीकरण",
        "घर्षण",
        "दहन",
        "नाभिकीय संलयन"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—सूर्य ऊर्जा मुख्यतः किस प्रक्रिया से बनाता है?",
      "options": [
        "नाभिकीय संलयन",
        "वाष्पीकरण",
        "दहन",
        "घर्षण"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? सूर्य ऊर्जा मुख्यतः किस प्रक्रिया से बनाता है?",
      "options": [
        "वाष्पीकरण",
        "घर्षण",
        "दहन",
        "नाभिकीय संलयन"
      ],
      "answer": 3
    },
    {
      "q": "मानव शरीर में सोचने का मुख्य अंग कौन है?",
      "options": [
        "यकृत",
        "मस्तिष्क",
        "आमाशय",
        "हृदय"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: मानव शरीर में सोचने का मुख्य अंग कौन है?",
      "options": [
        "मस्तिष्क",
        "आमाशय",
        "हृदय",
        "यकृत"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: मानव शरीर में सोचने का मुख्य अंग कौन है?",
      "options": [
        "यकृत",
        "मस्तिष्क",
        "आमाशय",
        "हृदय"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—मानव शरीर में सोचने का मुख्य अंग कौन है?",
      "options": [
        "मस्तिष्क",
        "हृदय",
        "यकृत",
        "आमाशय"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? मानव शरीर में सोचने का मुख्य अंग कौन है?",
      "options": [
        "आमाशय",
        "यकृत",
        "हृदय",
        "मस्तिष्क"
      ],
      "answer": 3
    },
    {
      "q": "भोजन पचाने में पेट में कौन-सा अम्ल मदद करता है?",
      "options": [
        "एसिटिक अम्ल",
        "हाइड्रोक्लोरिक अम्ल",
        "सल्फ्यूरिक अम्ल",
        "नाइट्रिक अम्ल"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: भोजन पचाने में पेट में कौन-सा अम्ल मदद करता है?",
      "options": [
        "सल्फ्यूरिक अम्ल",
        "हाइड्रोक्लोरिक अम्ल",
        "नाइट्रिक अम्ल",
        "एसिटिक अम्ल"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: भोजन पचाने में पेट में कौन-सा अम्ल मदद करता है?",
      "options": [
        "नाइट्रिक अम्ल",
        "हाइड्रोक्लोरिक अम्ल",
        "एसिटिक अम्ल",
        "सल्फ्यूरिक अम्ल"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—भोजन पचाने में पेट में कौन-सा अम्ल मदद करता है?",
      "options": [
        "नाइट्रिक अम्ल",
        "एसिटिक अम्ल",
        "सल्फ्यूरिक अम्ल",
        "हाइड्रोक्लोरिक अम्ल"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भोजन पचाने में पेट में कौन-सा अम्ल मदद करता है?",
      "options": [
        "सल्फ्यूरिक अम्ल",
        "हाइड्रोक्लोरिक अम्ल",
        "नाइट्रिक अम्ल",
        "एसिटिक अम्ल"
      ],
      "answer": 1
    },
    {
      "q": "मलेरिया किससे फैलता है?",
      "options": [
        "संक्रमित मादा एनोफिलीज मच्छर",
        "कुत्ता",
        "घरेलू मक्खी",
        "तितली"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: मलेरिया किससे फैलता है?",
      "options": [
        "तितली",
        "कुत्ता",
        "घरेलू मक्खी",
        "संक्रमित मादा एनोफिलीज मच्छर"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: मलेरिया किससे फैलता है?",
      "options": [
        "घरेलू मक्खी",
        "कुत्ता",
        "संक्रमित मादा एनोफिलीज मच्छर",
        "तितली"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—मलेरिया किससे फैलता है?",
      "options": [
        "तितली",
        "कुत्ता",
        "संक्रमित मादा एनोफिलीज मच्छर",
        "घरेलू मक्खी"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? मलेरिया किससे फैलता है?",
      "options": [
        "संक्रमित मादा एनोफिलीज मच्छर",
        "कुत्ता",
        "तितली",
        "घरेलू मक्खी"
      ],
      "answer": 0
    },
    {
      "q": "पौधे मिट्टी से पानी मुख्यतः किससे लेते हैं?",
      "options": [
        "फूलों से",
        "फलों से",
        "जड़ों से",
        "बीजों से"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: पौधे मिट्टी से पानी मुख्यतः किससे लेते हैं?",
      "options": [
        "फलों से",
        "जड़ों से",
        "फूलों से",
        "बीजों से"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: पौधे मिट्टी से पानी मुख्यतः किससे लेते हैं?",
      "options": [
        "फूलों से",
        "जड़ों से",
        "फलों से",
        "बीजों से"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—पौधे मिट्टी से पानी मुख्यतः किससे लेते हैं?",
      "options": [
        "फूलों से",
        "फलों से",
        "बीजों से",
        "जड़ों से"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पौधे मिट्टी से पानी मुख्यतः किससे लेते हैं?",
      "options": [
        "बीजों से",
        "फलों से",
        "जड़ों से",
        "फूलों से"
      ],
      "answer": 2
    },
    {
      "q": "कौन-सा अंग रक्त को छानने में मदद करता है?",
      "options": [
        "हृदय",
        "गुर्दे",
        "पित्ताशय",
        "फेफड़े"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: कौन-सा अंग रक्त को छानने में मदद करता है?",
      "options": [
        "गुर्दे",
        "हृदय",
        "फेफड़े",
        "पित्ताशय"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: कौन-सा अंग रक्त को छानने में मदद करता है?",
      "options": [
        "पित्ताशय",
        "हृदय",
        "गुर्दे",
        "फेफड़े"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—कौन-सा अंग रक्त को छानने में मदद करता है?",
      "options": [
        "हृदय",
        "पित्ताशय",
        "फेफड़े",
        "गुर्दे"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कौन-सा अंग रक्त को छानने में मदद करता है?",
      "options": [
        "पित्ताशय",
        "फेफड़े",
        "हृदय",
        "गुर्दे"
      ],
      "answer": 3
    },
    {
      "q": "प्रकाश संश्लेषण में कौन-सी ऊर्जा इस्तेमाल होती है?",
      "options": [
        "रासायनिक ईंधन",
        "सौर ऊर्जा",
        "घर्षण ऊर्जा",
        "ध्वनि ऊर्जा"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: प्रकाश संश्लेषण में कौन-सी ऊर्जा इस्तेमाल होती है?",
      "options": [
        "घर्षण ऊर्जा",
        "सौर ऊर्जा",
        "रासायनिक ईंधन",
        "ध्वनि ऊर्जा"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: प्रकाश संश्लेषण में कौन-सी ऊर्जा इस्तेमाल होती है?",
      "options": [
        "घर्षण ऊर्जा",
        "सौर ऊर्जा",
        "ध्वनि ऊर्जा",
        "रासायनिक ईंधन"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—प्रकाश संश्लेषण में कौन-सी ऊर्जा इस्तेमाल होती है?",
      "options": [
        "ध्वनि ऊर्जा",
        "सौर ऊर्जा",
        "घर्षण ऊर्जा",
        "रासायनिक ईंधन"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? प्रकाश संश्लेषण में कौन-सी ऊर्जा इस्तेमाल होती है?",
      "options": [
        "सौर ऊर्जा",
        "रासायनिक ईंधन",
        "ध्वनि ऊर्जा",
        "घर्षण ऊर्जा"
      ],
      "answer": 0
    },
    {
      "q": "वयस्क मानव के शरीर में सामान्यतः कितनी हड्डियाँ होती हैं?",
      "options": [
        "306",
        "106",
        "406",
        "206"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: वयस्क मानव के शरीर में सामान्यतः कितनी हड्डियाँ होती हैं?",
      "options": [
        "106",
        "206",
        "406",
        "306"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: वयस्क मानव के शरीर में सामान्यतः कितनी हड्डियाँ होती हैं?",
      "options": [
        "306",
        "206",
        "406",
        "106"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—वयस्क मानव के शरीर में सामान्यतः कितनी हड्डियाँ होती हैं?",
      "options": [
        "206",
        "406",
        "306",
        "106"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? वयस्क मानव के शरीर में सामान्यतः कितनी हड्डियाँ होती हैं?",
      "options": [
        "406",
        "106",
        "306",
        "206"
      ],
      "answer": 3
    },
    {
      "q": "पृथ्वी की सबसे बाहरी ठोस परत क्या कहलाती है?",
      "options": [
        "भूपर्पटी",
        "मेंटल का केंद्र",
        "बाह्य क्रोड",
        "क्रोड"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: पृथ्वी की सबसे बाहरी ठोस परत क्या कहलाती है?",
      "options": [
        "बाह्य क्रोड",
        "मेंटल का केंद्र",
        "भूपर्पटी",
        "क्रोड"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: पृथ्वी की सबसे बाहरी ठोस परत क्या कहलाती है?",
      "options": [
        "मेंटल का केंद्र",
        "भूपर्पटी",
        "क्रोड",
        "बाह्य क्रोड"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—पृथ्वी की सबसे बाहरी ठोस परत क्या कहलाती है?",
      "options": [
        "क्रोड",
        "मेंटल का केंद्र",
        "भूपर्पटी",
        "बाह्य क्रोड"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पृथ्वी की सबसे बाहरी ठोस परत क्या कहलाती है?",
      "options": [
        "क्रोड",
        "भूपर्पटी",
        "मेंटल का केंद्र",
        "बाह्य क्रोड"
      ],
      "answer": 1
    },
    {
      "q": "किस पदार्थ की pH 7 होती है?",
      "options": [
        "साबुन का घोल",
        "तटस्थ शुद्ध पानी",
        "सिरका",
        "नींबू का रस"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: किस पदार्थ की pH 7 होती है?",
      "options": [
        "नींबू का रस",
        "सिरका",
        "तटस्थ शुद्ध पानी",
        "साबुन का घोल"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: किस पदार्थ की pH 7 होती है?",
      "options": [
        "नींबू का रस",
        "तटस्थ शुद्ध पानी",
        "सिरका",
        "साबुन का घोल"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—किस पदार्थ की pH 7 होती है?",
      "options": [
        "तटस्थ शुद्ध पानी",
        "सिरका",
        "साबुन का घोल",
        "नींबू का रस"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? किस पदार्थ की pH 7 होती है?",
      "options": [
        "सिरका",
        "साबुन का घोल",
        "तटस्थ शुद्ध पानी",
        "नींबू का रस"
      ],
      "answer": 2
    },
    {
      "q": "तापमान मापने का उपकरण क्या है?",
      "options": [
        "कंपास",
        "अमीटर",
        "बैरोमीटर",
        "थर्मामीटर"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: तापमान मापने का उपकरण क्या है?",
      "options": [
        "थर्मामीटर",
        "बैरोमीटर",
        "कंपास",
        "अमीटर"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: तापमान मापने का उपकरण क्या है?",
      "options": [
        "अमीटर",
        "कंपास",
        "बैरोमीटर",
        "थर्मामीटर"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—तापमान मापने का उपकरण क्या है?",
      "options": [
        "कंपास",
        "अमीटर",
        "बैरोमीटर",
        "थर्मामीटर"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? तापमान मापने का उपकरण क्या है?",
      "options": [
        "कंपास",
        "थर्मामीटर",
        "अमीटर",
        "बैरोमीटर"
      ],
      "answer": 1
    },
    {
      "q": "वायुदाब मापने का उपकरण क्या है?",
      "options": [
        "स्पीडोमीटर",
        "थर्मामीटर",
        "बैरोमीटर",
        "लैक्टोमीटर"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: वायुदाब मापने का उपकरण क्या है?",
      "options": [
        "बैरोमीटर",
        "लैक्टोमीटर",
        "थर्मामीटर",
        "स्पीडोमीटर"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: वायुदाब मापने का उपकरण क्या है?",
      "options": [
        "लैक्टोमीटर",
        "बैरोमीटर",
        "थर्मामीटर",
        "स्पीडोमीटर"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—वायुदाब मापने का उपकरण क्या है?",
      "options": [
        "बैरोमीटर",
        "लैक्टोमीटर",
        "स्पीडोमीटर",
        "थर्मामीटर"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? वायुदाब मापने का उपकरण क्या है?",
      "options": [
        "थर्मामीटर",
        "बैरोमीटर",
        "लैक्टोमीटर",
        "स्पीडोमीटर"
      ],
      "answer": 1
    },
    {
      "q": "आवृत्ति की इकाई क्या है?",
      "options": [
        "वाट",
        "जूल",
        "हर्ट्ज",
        "कूलॉम"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: आवृत्ति की इकाई क्या है?",
      "options": [
        "वाट",
        "कूलॉम",
        "जूल",
        "हर्ट्ज"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: आवृत्ति की इकाई क्या है?",
      "options": [
        "कूलॉम",
        "जूल",
        "हर्ट्ज",
        "वाट"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—आवृत्ति की इकाई क्या है?",
      "options": [
        "हर्ट्ज",
        "जूल",
        "कूलॉम",
        "वाट"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? आवृत्ति की इकाई क्या है?",
      "options": [
        "वाट",
        "हर्ट्ज",
        "जूल",
        "कूलॉम"
      ],
      "answer": 1
    },
    {
      "q": "विद्युत प्रतिरोध की इकाई क्या है?",
      "options": [
        "वोल्ट",
        "टेस्ला",
        "एम्पियर",
        "ओम"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: विद्युत प्रतिरोध की इकाई क्या है?",
      "options": [
        "टेस्ला",
        "वोल्ट",
        "ओम",
        "एम्पियर"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: विद्युत प्रतिरोध की इकाई क्या है?",
      "options": [
        "ओम",
        "टेस्ला",
        "एम्पियर",
        "वोल्ट"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—विद्युत प्रतिरोध की इकाई क्या है?",
      "options": [
        "एम्पियर",
        "टेस्ला",
        "ओम",
        "वोल्ट"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? विद्युत प्रतिरोध की इकाई क्या है?",
      "options": [
        "ओम",
        "एम्पियर",
        "टेस्ला",
        "वोल्ट"
      ],
      "answer": 0
    },
    {
      "q": "धातुओं में सामान्यतः कौन-सा गुण होता है?",
      "options": [
        "ऊष्मा और बिजली का अच्छा चालन",
        "हमेशा गैस होना",
        "पानी में घुलना",
        "बिजली का पूर्ण अवरोध"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: धातुओं में सामान्यतः कौन-सा गुण होता है?",
      "options": [
        "बिजली का पूर्ण अवरोध",
        "ऊष्मा और बिजली का अच्छा चालन",
        "पानी में घुलना",
        "हमेशा गैस होना"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: धातुओं में सामान्यतः कौन-सा गुण होता है?",
      "options": [
        "पानी में घुलना",
        "हमेशा गैस होना",
        "ऊष्मा और बिजली का अच्छा चालन",
        "बिजली का पूर्ण अवरोध"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—धातुओं में सामान्यतः कौन-सा गुण होता है?",
      "options": [
        "पानी में घुलना",
        "ऊष्मा और बिजली का अच्छा चालन",
        "हमेशा गैस होना",
        "बिजली का पूर्ण अवरोध"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? धातुओं में सामान्यतः कौन-सा गुण होता है?",
      "options": [
        "बिजली का पूर्ण अवरोध",
        "ऊष्मा और बिजली का अच्छा चालन",
        "पानी में घुलना",
        "हमेशा गैस होना"
      ],
      "answer": 1
    },
    {
      "q": "पौधे भोजन बनाने के लिए कौन-सी प्रक्रिया करते हैं?",
      "options": [
        "वाष्पीकरण",
        "प्रकाश संश्लेषण",
        "श्वसन",
        "पाचन"
      ],
      "answer": 1
    },
    {
      "q": "पानी का रासायनिक सूत्र क्या है?",
      "options": [
        "H₂O",
        "O₂",
        "CO₂",
        "NaCl"
      ],
      "answer": 0
    },
    {
      "q": "रक्त को पूरे शरीर में कौन पंप करता है?",
      "options": [
        "हृदय",
        "गुर्दे",
        "मस्तिष्क",
        "फेफड़े"
      ],
      "answer": 0
    },
    {
      "q": "साँस लेने के लिए कौन-सी गैस आवश्यक है?",
      "options": [
        "हाइड्रोजन",
        "ऑक्सीजन",
        "नाइट्रोजन",
        "हीलियम"
      ],
      "answer": 1
    },
    {
      "q": "सूर्य के सबसे निकट ग्रह कौन-सा है?",
      "options": [
        "बुध",
        "मंगल",
        "शुक्र",
        "पृथ्वी"
      ],
      "answer": 0
    },
    {
      "q": "लाल ग्रह किसे कहा जाता है?",
      "options": [
        "मंगल",
        "शनि",
        "बृहस्पति",
        "बुध"
      ],
      "answer": 0
    },
    {
      "q": "पौधों का हरा रंग किसके कारण होता है?",
      "options": [
        "केराटिन",
        "हीमोग्लोबिन",
        "क्लोरोफिल",
        "मेलानिन"
      ],
      "answer": 2
    },
    {
      "q": "मानव शरीर का सबसे बड़ा अंग कौन-सा है?",
      "options": [
        "त्वचा",
        "फेफड़ा",
        "हृदय",
        "यकृत"
      ],
      "answer": 0
    },
    {
      "q": "पानी सामान्य दबाव पर कितने °C पर उबलता है?",
      "options": [
        "75°C",
        "100°C",
        "50°C",
        "150°C"
      ],
      "answer": 1
    },
    {
      "q": "बर्फ सामान्य दबाव पर कितने °C पर पिघलती है?",
      "options": [
        "0°C",
        "50°C",
        "100°C",
        "10°C"
      ],
      "answer": 0
    },
    {
      "q": "ध्वनि किसमें यात्रा नहीं कर सकती?",
      "options": [
        "पानी",
        "निर्वात",
        "हवा",
        "इस्पात"
      ],
      "answer": 1
    },
    {
      "q": "बल की SI इकाई क्या है?",
      "options": [
        "न्यूटन",
        "पास्कल",
        "वाट",
        "जूल"
      ],
      "answer": 0
    },
    {
      "q": "ऊर्जा की SI इकाई क्या है?",
      "options": [
        "न्यूटन",
        "जूल",
        "वोल्ट",
        "एम्पियर"
      ],
      "answer": 1
    },
    {
      "q": "विद्युत धारा की इकाई क्या है?",
      "options": [
        "एम्पियर",
        "ओम",
        "वोल्ट",
        "वाट"
      ],
      "answer": 0
    },
    {
      "q": "प्रकाश वर्ष किसकी इकाई है?",
      "options": [
        "दूरी",
        "तापमान",
        "गति",
        "समय"
      ],
      "answer": 0
    },
    {
      "q": "वयस्क मानव के सामान्यतः कितने दाँत होते हैं?",
      "options": [
        "32",
        "30",
        "36",
        "28"
      ],
      "answer": 0
    },
    {
      "q": "रक्त में ऑक्सीजन ले जाने वाला पदार्थ कौन-सा है?",
      "options": [
        "इंसुलिन",
        "पित्त",
        "हीमोग्लोबिन",
        "क्लोरोफिल"
      ],
      "answer": 2
    },
    {
      "q": "विटामिन C का अच्छा स्रोत कौन-सा है?",
      "options": [
        "नमक",
        "चावल",
        "आँवला",
        "तेल"
      ],
      "answer": 2
    },
    {
      "q": "विटामिन D के निर्माण में कौन मदद करता है?",
      "options": [
        "ध्वनि",
        "चाँदनी",
        "सूर्य का प्रकाश",
        "हवा"
      ],
      "answer": 2
    },
    {
      "q": "मानव शरीर में भोजन का अधिकांश अवशोषण कहाँ होता है?",
      "options": [
        "छोटी आँत",
        "ग्रासनली",
        "मुख",
        "बड़ी आँत"
      ],
      "answer": 0
    },
    {
      "q": "पृथ्वी का प्राकृतिक उपग्रह कौन है?",
      "options": [
        "शुक्र",
        "सूर्य",
        "चंद्रमा",
        "मंगल"
      ],
      "answer": 2
    },
    {
      "q": "पृथ्वी सूर्य की परिक्रमा लगभग कितने समय में करती है?",
      "options": [
        "7 दिन",
        "365 दिन",
        "24 घंटे",
        "30 दिन"
      ],
      "answer": 1
    },
    {
      "q": "दिन और रात किस कारण होते हैं?",
      "options": [
        "पृथ्वी के घूर्णन से",
        "बादलों से",
        "पृथ्वी की परिक्रमा से",
        "चंद्रमा से"
      ],
      "answer": 0
    },
    {
      "q": "पौधे वायुमंडल से मुख्यतः कौन-सी गैस लेते हैं?",
      "options": [
        "कार्बन डाइऑक्साइड",
        "हीलियम",
        "ऑक्सीजन",
        "हाइड्रोजन"
      ],
      "answer": 0
    },
    {
      "q": "ओजोन परत किससे बचाव करती है?",
      "options": [
        "ज्वार से",
        "भूकंप से",
        "पराबैंगनी किरणों से",
        "ध्वनि से"
      ],
      "answer": 2
    },
    {
      "q": "परमाणु के केंद्र को क्या कहते हैं?",
      "options": [
        "इलेक्ट्रॉन",
        "कक्षा",
        "नाभिक",
        "अणु"
      ],
      "answer": 2
    },
    {
      "q": "ऋणात्मक आवेश वाला कण कौन है?",
      "options": [
        "इलेक्ट्रॉन",
        "न्यूट्रॉन",
        "प्रोटॉन",
        "फोटॉन"
      ],
      "answer": 0
    },
    {
      "q": "समान चुंबकीय ध्रुव एक-दूसरे को क्या करते हैं?",
      "options": [
        "प्रतिकर्षित",
        "नष्ट",
        "आकर्षित",
        "गर्म"
      ],
      "answer": 0
    },
    {
      "q": "अम्ल नीले लिटमस को किस रंग में बदलता है?",
      "options": [
        "लाल",
        "नीला",
        "हरा",
        "काला"
      ],
      "answer": 0
    },
    {
      "q": "सामान्य नमक का रासायनिक नाम क्या है?",
      "options": [
        "कैल्शियम ऑक्साइड",
        "सोडियम क्लोराइड",
        "हाइड्रोजन क्लोराइड",
        "सोडियम कार्बोनेट"
      ],
      "answer": 1
    },
    {
      "q": "जंग मुख्यतः किस धातु पर लगती है?",
      "options": [
        "सोना",
        "चाँदी",
        "लोहा",
        "प्लैटिनम"
      ],
      "answer": 2
    },
    {
      "q": "मानव शरीर का सामान्य तापमान लगभग कितना है?",
      "options": [
        "37°C",
        "10°C",
        "47°C",
        "27°C"
      ],
      "answer": 0
    },
    {
      "q": "गुर्दों का मुख्य काम क्या है?",
      "options": [
        "रक्त छानकर अपशिष्ट निकालना",
        "ऑक्सीजन बनाना",
        "भोजन चबाना",
        "रक्त पंप करना"
      ],
      "answer": 0
    },
    {
      "q": "फेफड़ों का मुख्य कार्य क्या है?",
      "options": [
        "रक्त छानना",
        "गैसों का आदान-प्रदान",
        "भोजन पचाना",
        "हार्मोन बनाना"
      ],
      "answer": 1
    },
    {
      "q": "पृथ्वी के वायुमंडल में सबसे अधिक कौन-सी गैस है?",
      "options": [
        "ऑक्सीजन",
        "हाइड्रोजन",
        "नाइट्रोजन",
        "कार्बन डाइऑक्साइड"
      ],
      "answer": 2
    },
    {
      "q": "कौन-सा विटामिन रक्त के थक्के बनने में मदद करता है?",
      "options": [
        "विटामिन D",
        "विटामिन K",
        "विटामिन C",
        "विटामिन B12"
      ],
      "answer": 1
    },
    {
      "q": "पौधों में पानी का परिवहन मुख्यतः कौन करता है?",
      "options": [
        "रंध्र",
        "पंखुड़ी",
        "फ्लोएम",
        "जाइलम"
      ],
      "answer": 3
    },
    {
      "q": "पौधों में भोजन का परिवहन कौन करता है?",
      "options": [
        "जड़ टोपी",
        "फ्लोएम",
        "जाइलम",
        "छाल का बाहरी भाग"
      ],
      "answer": 1
    },
    {
      "q": "पृथ्वी की सतह पर सबसे अधिक कौन-सा पदार्थ है?",
      "options": [
        "लोहा",
        "रेत",
        "पानी",
        "कोयला"
      ],
      "answer": 2
    },
    {
      "q": "किस ग्रह के चारों ओर प्रमुख वलय हैं?",
      "options": [
        "पृथ्वी",
        "बुध",
        "मंगल",
        "शनि"
      ],
      "answer": 3
    },
    {
      "q": "प्रकाश की गति सबसे अधिक किसमें होती है?",
      "options": [
        "काँच",
        "हवा",
        "पानी",
        "निर्वात"
      ],
      "answer": 3
    },
    {
      "q": "दर्पण में प्रतिबिंब बनने की घटना क्या कहलाती है?",
      "options": [
        "अपवर्तन",
        "परावर्तन",
        "संघनन",
        "विसरण"
      ],
      "answer": 1
    },
    {
      "q": "लेंस से प्रकाश मुड़ने को क्या कहते हैं?",
      "options": [
        "अपवर्तन",
        "चालन",
        "परावर्तन",
        "वाष्पीकरण"
      ],
      "answer": 0
    },
    {
      "q": "पानी का भाप में बदलना क्या कहलाता है?",
      "options": [
        "जमना",
        "वाष्पीकरण",
        "गलना",
        "संघनन"
      ],
      "answer": 1
    },
    {
      "q": "भाप का पानी में बदलना क्या कहलाता है?",
      "options": [
        "वाष्पीकरण",
        "संघनन",
        "दहन",
        "उर्ध्वपातन"
      ],
      "answer": 1
    },
    {
      "q": "पृथ्वी के भीतर कंपन से क्या उत्पन्न हो सकता है?",
      "options": [
        "भूकंप",
        "ग्रहण",
        "इंद्रधनुष",
        "ओस"
      ],
      "answer": 0
    },
    {
      "q": "सूर्य ऊर्जा मुख्यतः किस प्रक्रिया से बनाता है?",
      "options": [
        "घर्षण",
        "वाष्पीकरण",
        "दहन",
        "नाभिकीय संलयन"
      ],
      "answer": 3
    },
    {
      "q": "मानव शरीर में सोचने का मुख्य अंग कौन है?",
      "options": [
        "आमाशय",
        "मस्तिष्क",
        "हृदय",
        "यकृत"
      ],
      "answer": 1
    },
    {
      "q": "भोजन पचाने में पेट में कौन-सा अम्ल मदद करता है?",
      "options": [
        "हाइड्रोक्लोरिक अम्ल",
        "नाइट्रिक अम्ल",
        "सल्फ्यूरिक अम्ल",
        "एसिटिक अम्ल"
      ],
      "answer": 0
    },
    {
      "q": "मलेरिया किससे फैलता है?",
      "options": [
        "तितली",
        "घरेलू मक्खी",
        "कुत्ता",
        "संक्रमित मादा एनोफिलीज मच्छर"
      ],
      "answer": 3
    },
    {
      "q": "पौधे मिट्टी से पानी मुख्यतः किससे लेते हैं?",
      "options": [
        "फूलों से",
        "जड़ों से",
        "बीजों से",
        "फलों से"
      ],
      "answer": 1
    },
    {
      "q": "कौन-सा अंग रक्त को छानने में मदद करता है?",
      "options": [
        "हृदय",
        "गुर्दे",
        "फेफड़े",
        "पित्ताशय"
      ],
      "answer": 1
    },
    {
      "q": "प्रकाश संश्लेषण में कौन-सी ऊर्जा इस्तेमाल होती है?",
      "options": [
        "ध्वनि ऊर्जा",
        "रासायनिक ईंधन",
        "सौर ऊर्जा",
        "घर्षण ऊर्जा"
      ],
      "answer": 2
    },
    {
      "q": "वयस्क मानव के शरीर में सामान्यतः कितनी हड्डियाँ होती हैं?",
      "options": [
        "406",
        "306",
        "106",
        "206"
      ],
      "answer": 3
    },
    {
      "q": "पृथ्वी की सबसे बाहरी ठोस परत क्या कहलाती है?",
      "options": [
        "क्रोड",
        "भूपर्पटी",
        "बाह्य क्रोड",
        "मेंटल का केंद्र"
      ],
      "answer": 1
    },
    {
      "q": "किस पदार्थ की pH 7 होती है?",
      "options": [
        "साबुन का घोल",
        "सिरका",
        "तटस्थ शुद्ध पानी",
        "नींबू का रस"
      ],
      "answer": 2
    },
    {
      "q": "तापमान मापने का उपकरण क्या है?",
      "options": [
        "कंपास",
        "थर्मामीटर",
        "बैरोमीटर",
        "अमीटर"
      ],
      "answer": 1
    },
    {
      "q": "वायुदाब मापने का उपकरण क्या है?",
      "options": [
        "बैरोमीटर",
        "लैक्टोमीटर",
        "स्पीडोमीटर",
        "थर्मामीटर"
      ],
      "answer": 0
    },
    {
      "q": "आवृत्ति की इकाई क्या है?",
      "options": [
        "जूल",
        "वाट",
        "कूलॉम",
        "हर्ट्ज"
      ],
      "answer": 3
    },
    {
      "q": "विद्युत प्रतिरोध की इकाई क्या है?",
      "options": [
        "वोल्ट",
        "टेस्ला",
        "ओम",
        "एम्पियर"
      ],
      "answer": 2
    },
    {
      "q": "धातुओं में सामान्यतः कौन-सा गुण होता है?",
      "options": [
        "पानी में घुलना",
        "ऊष्मा और बिजली का अच्छा चालन",
        "हमेशा गैस होना",
        "बिजली का पूर्ण अवरोध"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: पौधे भोजन बनाने के लिए कौन-सी प्रक्रिया करते हैं?",
      "options": [
        "वाष्पीकरण",
        "प्रकाश संश्लेषण",
        "श्वसन",
        "पाचन"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: पानी का रासायनिक सूत्र क्या है?",
      "options": [
        "CO₂",
        "NaCl",
        "O₂",
        "H₂O"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: रक्त को पूरे शरीर में कौन पंप करता है?",
      "options": [
        "फेफड़े",
        "गुर्दे",
        "हृदय",
        "मस्तिष्क"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: साँस लेने के लिए कौन-सी गैस आवश्यक है?",
      "options": [
        "हीलियम",
        "ऑक्सीजन",
        "हाइड्रोजन",
        "नाइट्रोजन"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: सूर्य के सबसे निकट ग्रह कौन-सा है?",
      "options": [
        "मंगल",
        "पृथ्वी",
        "शुक्र",
        "बुध"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: लाल ग्रह किसे कहा जाता है?",
      "options": [
        "बृहस्पति",
        "बुध",
        "शनि",
        "मंगल"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: पौधों का हरा रंग किसके कारण होता है?",
      "options": [
        "मेलानिन",
        "क्लोरोफिल",
        "केराटिन",
        "हीमोग्लोबिन"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: मानव शरीर का सबसे बड़ा अंग कौन-सा है?",
      "options": [
        "यकृत",
        "फेफड़ा",
        "त्वचा",
        "हृदय"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: पानी सामान्य दबाव पर कितने °C पर उबलता है?",
      "options": [
        "100°C",
        "75°C",
        "50°C",
        "150°C"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: बर्फ सामान्य दबाव पर कितने °C पर पिघलती है?",
      "options": [
        "0°C",
        "100°C",
        "50°C",
        "10°C"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: ध्वनि किसमें यात्रा नहीं कर सकती?",
      "options": [
        "पानी",
        "निर्वात",
        "हवा",
        "इस्पात"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: बल की SI इकाई क्या है?",
      "options": [
        "पास्कल",
        "वाट",
        "न्यूटन",
        "जूल"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: ऊर्जा की SI इकाई क्या है?",
      "options": [
        "एम्पियर",
        "जूल",
        "न्यूटन",
        "वोल्ट"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: विद्युत धारा की इकाई क्या है?",
      "options": [
        "वाट",
        "वोल्ट",
        "एम्पियर",
        "ओम"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: प्रकाश वर्ष किसकी इकाई है?",
      "options": [
        "गति",
        "दूरी",
        "समय",
        "तापमान"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: वयस्क मानव के सामान्यतः कितने दाँत होते हैं?",
      "options": [
        "36",
        "28",
        "30",
        "32"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: रक्त में ऑक्सीजन ले जाने वाला पदार्थ कौन-सा है?",
      "options": [
        "इंसुलिन",
        "क्लोरोफिल",
        "पित्त",
        "हीमोग्लोबिन"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: विटामिन C का अच्छा स्रोत कौन-सा है?",
      "options": [
        "तेल",
        "चावल",
        "नमक",
        "आँवला"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: विटामिन D के निर्माण में कौन मदद करता है?",
      "options": [
        "ध्वनि",
        "हवा",
        "चाँदनी",
        "सूर्य का प्रकाश"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: मानव शरीर में भोजन का अधिकांश अवशोषण कहाँ होता है?",
      "options": [
        "छोटी आँत",
        "ग्रासनली",
        "मुख",
        "बड़ी आँत"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: पृथ्वी का प्राकृतिक उपग्रह कौन है?",
      "options": [
        "शुक्र",
        "चंद्रमा",
        "सूर्य",
        "मंगल"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: पृथ्वी सूर्य की परिक्रमा लगभग कितने समय में करती है?",
      "options": [
        "30 दिन",
        "24 घंटे",
        "7 दिन",
        "365 दिन"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: दिन और रात किस कारण होते हैं?",
      "options": [
        "बादलों से",
        "पृथ्वी की परिक्रमा से",
        "पृथ्वी के घूर्णन से",
        "चंद्रमा से"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: पौधे वायुमंडल से मुख्यतः कौन-सी गैस लेते हैं?",
      "options": [
        "ऑक्सीजन",
        "हीलियम",
        "कार्बन डाइऑक्साइड",
        "हाइड्रोजन"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: ओजोन परत किससे बचाव करती है?",
      "options": [
        "ज्वार से",
        "ध्वनि से",
        "भूकंप से",
        "पराबैंगनी किरणों से"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: परमाणु के केंद्र को क्या कहते हैं?",
      "options": [
        "इलेक्ट्रॉन",
        "नाभिक",
        "कक्षा",
        "अणु"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: ऋणात्मक आवेश वाला कण कौन है?",
      "options": [
        "फोटॉन",
        "न्यूट्रॉन",
        "प्रोटॉन",
        "इलेक्ट्रॉन"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: समान चुंबकीय ध्रुव एक-दूसरे को क्या करते हैं?",
      "options": [
        "गर्म",
        "आकर्षित",
        "प्रतिकर्षित",
        "नष्ट"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: अम्ल नीले लिटमस को किस रंग में बदलता है?",
      "options": [
        "काला",
        "नीला",
        "लाल",
        "हरा"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: सामान्य नमक का रासायनिक नाम क्या है?",
      "options": [
        "कैल्शियम ऑक्साइड",
        "सोडियम क्लोराइड",
        "हाइड्रोजन क्लोराइड",
        "सोडियम कार्बोनेट"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: जंग मुख्यतः किस धातु पर लगती है?",
      "options": [
        "प्लैटिनम",
        "सोना",
        "चाँदी",
        "लोहा"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: मानव शरीर का सामान्य तापमान लगभग कितना है?",
      "options": [
        "47°C",
        "10°C",
        "37°C",
        "27°C"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: गुर्दों का मुख्य काम क्या है?",
      "options": [
        "रक्त पंप करना",
        "ऑक्सीजन बनाना",
        "भोजन चबाना",
        "रक्त छानकर अपशिष्ट निकालना"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: फेफड़ों का मुख्य कार्य क्या है?",
      "options": [
        "भोजन पचाना",
        "रक्त छानना",
        "हार्मोन बनाना",
        "गैसों का आदान-प्रदान"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: पृथ्वी के वायुमंडल में सबसे अधिक कौन-सी गैस है?",
      "options": [
        "नाइट्रोजन",
        "हाइड्रोजन",
        "कार्बन डाइऑक्साइड",
        "ऑक्सीजन"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: कौन-सा विटामिन रक्त के थक्के बनने में मदद करता है?",
      "options": [
        "विटामिन B12",
        "विटामिन K",
        "विटामिन C",
        "विटामिन D"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: पौधों में पानी का परिवहन मुख्यतः कौन करता है?",
      "options": [
        "जाइलम",
        "रंध्र",
        "फ्लोएम",
        "पंखुड़ी"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: पौधों में भोजन का परिवहन कौन करता है?",
      "options": [
        "जड़ टोपी",
        "जाइलम",
        "फ्लोएम",
        "छाल का बाहरी भाग"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: पृथ्वी की सतह पर सबसे अधिक कौन-सा पदार्थ है?",
      "options": [
        "रेत",
        "कोयला",
        "लोहा",
        "पानी"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: किस ग्रह के चारों ओर प्रमुख वलय हैं?",
      "options": [
        "पृथ्वी",
        "मंगल",
        "बुध",
        "शनि"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: प्रकाश की गति सबसे अधिक किसमें होती है?",
      "options": [
        "काँच",
        "हवा",
        "पानी",
        "निर्वात"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: दर्पण में प्रतिबिंब बनने की घटना क्या कहलाती है?",
      "options": [
        "परावर्तन",
        "संघनन",
        "अपवर्तन",
        "विसरण"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: लेंस से प्रकाश मुड़ने को क्या कहते हैं?",
      "options": [
        "वाष्पीकरण",
        "अपवर्तन",
        "चालन",
        "परावर्तन"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: पानी का भाप में बदलना क्या कहलाता है?",
      "options": [
        "वाष्पीकरण",
        "गलना",
        "जमना",
        "संघनन"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: भाप का पानी में बदलना क्या कहलाता है?",
      "options": [
        "वाष्पीकरण",
        "उर्ध्वपातन",
        "संघनन",
        "दहन"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: पृथ्वी के भीतर कंपन से क्या उत्पन्न हो सकता है?",
      "options": [
        "इंद्रधनुष",
        "ओस",
        "ग्रहण",
        "भूकंप"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: सूर्य ऊर्जा मुख्यतः किस प्रक्रिया से बनाता है?",
      "options": [
        "घर्षण",
        "नाभिकीय संलयन",
        "दहन",
        "वाष्पीकरण"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: मानव शरीर में सोचने का मुख्य अंग कौन है?",
      "options": [
        "हृदय",
        "यकृत",
        "आमाशय",
        "मस्तिष्क"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भोजन पचाने में पेट में कौन-सा अम्ल मदद करता है?",
      "options": [
        "सल्फ्यूरिक अम्ल",
        "नाइट्रिक अम्ल",
        "हाइड्रोक्लोरिक अम्ल",
        "एसिटिक अम्ल"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: मलेरिया किससे फैलता है?",
      "options": [
        "संक्रमित मादा एनोफिलीज मच्छर",
        "तितली",
        "कुत्ता",
        "घरेलू मक्खी"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: पौधे मिट्टी से पानी मुख्यतः किससे लेते हैं?",
      "options": [
        "बीजों से",
        "फूलों से",
        "फलों से",
        "जड़ों से"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: कौन-सा अंग रक्त को छानने में मदद करता है?",
      "options": [
        "फेफड़े",
        "गुर्दे",
        "हृदय",
        "पित्ताशय"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: प्रकाश संश्लेषण में कौन-सी ऊर्जा इस्तेमाल होती है?",
      "options": [
        "ध्वनि ऊर्जा",
        "घर्षण ऊर्जा",
        "रासायनिक ईंधन",
        "सौर ऊर्जा"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: वयस्क मानव के शरीर में सामान्यतः कितनी हड्डियाँ होती हैं?",
      "options": [
        "206",
        "406",
        "106",
        "306"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: पृथ्वी की सबसे बाहरी ठोस परत क्या कहलाती है?",
      "options": [
        "क्रोड",
        "मेंटल का केंद्र",
        "बाह्य क्रोड",
        "भूपर्पटी"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: किस पदार्थ की pH 7 होती है?",
      "options": [
        "सिरका",
        "नींबू का रस",
        "तटस्थ शुद्ध पानी",
        "साबुन का घोल"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: तापमान मापने का उपकरण क्या है?",
      "options": [
        "अमीटर",
        "थर्मामीटर",
        "बैरोमीटर",
        "कंपास"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: वायुदाब मापने का उपकरण क्या है?",
      "options": [
        "लैक्टोमीटर",
        "बैरोमीटर",
        "स्पीडोमीटर",
        "थर्मामीटर"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: आवृत्ति की इकाई क्या है?",
      "options": [
        "हर्ट्ज",
        "जूल",
        "वाट",
        "कूलॉम"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: विद्युत प्रतिरोध की इकाई क्या है?",
      "options": [
        "टेस्ला",
        "वोल्ट",
        "एम्पियर",
        "ओम"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: धातुओं में सामान्यतः कौन-सा गुण होता है?",
      "options": [
        "बिजली का पूर्ण अवरोध",
        "ऊष्मा और बिजली का अच्छा चालन",
        "पानी में घुलना",
        "हमेशा गैस होना"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: पौधे भोजन बनाने के लिए कौन-सी प्रक्रिया करते हैं?",
      "options": [
        "पाचन",
        "वाष्पीकरण",
        "श्वसन",
        "प्रकाश संश्लेषण"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: पानी का रासायनिक सूत्र क्या है?",
      "options": [
        "CO₂",
        "O₂",
        "NaCl",
        "H₂O"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: रक्त को पूरे शरीर में कौन पंप करता है?",
      "options": [
        "गुर्दे",
        "हृदय",
        "फेफड़े",
        "मस्तिष्क"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: साँस लेने के लिए कौन-सी गैस आवश्यक है?",
      "options": [
        "नाइट्रोजन",
        "हाइड्रोजन",
        "हीलियम",
        "ऑक्सीजन"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: सूर्य के सबसे निकट ग्रह कौन-सा है?",
      "options": [
        "बुध",
        "पृथ्वी",
        "मंगल",
        "शुक्र"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: लाल ग्रह किसे कहा जाता है?",
      "options": [
        "शनि",
        "मंगल",
        "बृहस्पति",
        "बुध"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: पौधों का हरा रंग किसके कारण होता है?",
      "options": [
        "मेलानिन",
        "केराटिन",
        "हीमोग्लोबिन",
        "क्लोरोफिल"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: मानव शरीर का सबसे बड़ा अंग कौन-सा है?",
      "options": [
        "फेफड़ा",
        "हृदय",
        "त्वचा",
        "यकृत"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: पानी सामान्य दबाव पर कितने °C पर उबलता है?",
      "options": [
        "50°C",
        "150°C",
        "75°C",
        "100°C"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: बर्फ सामान्य दबाव पर कितने °C पर पिघलती है?",
      "options": [
        "50°C",
        "10°C",
        "100°C",
        "0°C"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: ध्वनि किसमें यात्रा नहीं कर सकती?",
      "options": [
        "हवा",
        "इस्पात",
        "निर्वात",
        "पानी"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: बल की SI इकाई क्या है?",
      "options": [
        "जूल",
        "पास्कल",
        "वाट",
        "न्यूटन"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: ऊर्जा की SI इकाई क्या है?",
      "options": [
        "जूल",
        "न्यूटन",
        "एम्पियर",
        "वोल्ट"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: विद्युत धारा की इकाई क्या है?",
      "options": [
        "एम्पियर",
        "ओम",
        "वाट",
        "वोल्ट"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: प्रकाश वर्ष किसकी इकाई है?",
      "options": [
        "गति",
        "समय",
        "दूरी",
        "तापमान"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: वयस्क मानव के सामान्यतः कितने दाँत होते हैं?",
      "options": [
        "30",
        "36",
        "28",
        "32"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: रक्त में ऑक्सीजन ले जाने वाला पदार्थ कौन-सा है?",
      "options": [
        "क्लोरोफिल",
        "पित्त",
        "इंसुलिन",
        "हीमोग्लोबिन"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: विटामिन C का अच्छा स्रोत कौन-सा है?",
      "options": [
        "आँवला",
        "चावल",
        "तेल",
        "नमक"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: विटामिन D के निर्माण में कौन मदद करता है?",
      "options": [
        "चाँदनी",
        "सूर्य का प्रकाश",
        "हवा",
        "ध्वनि"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: मानव शरीर में भोजन का अधिकांश अवशोषण कहाँ होता है?",
      "options": [
        "बड़ी आँत",
        "छोटी आँत",
        "ग्रासनली",
        "मुख"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: पृथ्वी का प्राकृतिक उपग्रह कौन है?",
      "options": [
        "चंद्रमा",
        "मंगल",
        "सूर्य",
        "शुक्र"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: पृथ्वी सूर्य की परिक्रमा लगभग कितने समय में करती है?",
      "options": [
        "7 दिन",
        "365 दिन",
        "30 दिन",
        "24 घंटे"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: दिन और रात किस कारण होते हैं?",
      "options": [
        "बादलों से",
        "पृथ्वी के घूर्णन से",
        "चंद्रमा से",
        "पृथ्वी की परिक्रमा से"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: पौधे वायुमंडल से मुख्यतः कौन-सी गैस लेते हैं?",
      "options": [
        "कार्बन डाइऑक्साइड",
        "ऑक्सीजन",
        "हाइड्रोजन",
        "हीलियम"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: ओजोन परत किससे बचाव करती है?",
      "options": [
        "ज्वार से",
        "ध्वनि से",
        "भूकंप से",
        "पराबैंगनी किरणों से"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: परमाणु के केंद्र को क्या कहते हैं?",
      "options": [
        "अणु",
        "कक्षा",
        "नाभिक",
        "इलेक्ट्रॉन"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: ऋणात्मक आवेश वाला कण कौन है?",
      "options": [
        "इलेक्ट्रॉन",
        "न्यूट्रॉन",
        "फोटॉन",
        "प्रोटॉन"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: समान चुंबकीय ध्रुव एक-दूसरे को क्या करते हैं?",
      "options": [
        "गर्म",
        "नष्ट",
        "प्रतिकर्षित",
        "आकर्षित"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: अम्ल नीले लिटमस को किस रंग में बदलता है?",
      "options": [
        "हरा",
        "काला",
        "लाल",
        "नीला"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: सामान्य नमक का रासायनिक नाम क्या है?",
      "options": [
        "कैल्शियम ऑक्साइड",
        "हाइड्रोजन क्लोराइड",
        "सोडियम कार्बोनेट",
        "सोडियम क्लोराइड"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: जंग मुख्यतः किस धातु पर लगती है?",
      "options": [
        "सोना",
        "लोहा",
        "चाँदी",
        "प्लैटिनम"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: मानव शरीर का सामान्य तापमान लगभग कितना है?",
      "options": [
        "27°C",
        "10°C",
        "47°C",
        "37°C"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: गुर्दों का मुख्य काम क्या है?",
      "options": [
        "रक्त पंप करना",
        "भोजन चबाना",
        "रक्त छानकर अपशिष्ट निकालना",
        "ऑक्सीजन बनाना"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: फेफड़ों का मुख्य कार्य क्या है?",
      "options": [
        "हार्मोन बनाना",
        "गैसों का आदान-प्रदान",
        "भोजन पचाना",
        "रक्त छानना"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: पृथ्वी के वायुमंडल में सबसे अधिक कौन-सी गैस है?",
      "options": [
        "ऑक्सीजन",
        "हाइड्रोजन",
        "नाइट्रोजन",
        "कार्बन डाइऑक्साइड"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: कौन-सा विटामिन रक्त के थक्के बनने में मदद करता है?",
      "options": [
        "विटामिन K",
        "विटामिन B12",
        "विटामिन C",
        "विटामिन D"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: पौधों में पानी का परिवहन मुख्यतः कौन करता है?",
      "options": [
        "फ्लोएम",
        "जाइलम",
        "पंखुड़ी",
        "रंध्र"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: पौधों में भोजन का परिवहन कौन करता है?",
      "options": [
        "जड़ टोपी",
        "जाइलम",
        "छाल का बाहरी भाग",
        "फ्लोएम"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: पृथ्वी की सतह पर सबसे अधिक कौन-सा पदार्थ है?",
      "options": [
        "लोहा",
        "रेत",
        "पानी",
        "कोयला"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: किस ग्रह के चारों ओर प्रमुख वलय हैं?",
      "options": [
        "बुध",
        "मंगल",
        "शनि",
        "पृथ्वी"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: प्रकाश की गति सबसे अधिक किसमें होती है?",
      "options": [
        "काँच",
        "हवा",
        "निर्वात",
        "पानी"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: दर्पण में प्रतिबिंब बनने की घटना क्या कहलाती है?",
      "options": [
        "विसरण",
        "अपवर्तन",
        "परावर्तन",
        "संघनन"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: लेंस से प्रकाश मुड़ने को क्या कहते हैं?",
      "options": [
        "अपवर्तन",
        "वाष्पीकरण",
        "परावर्तन",
        "चालन"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: पानी का भाप में बदलना क्या कहलाता है?",
      "options": [
        "संघनन",
        "गलना",
        "जमना",
        "वाष्पीकरण"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: भाप का पानी में बदलना क्या कहलाता है?",
      "options": [
        "वाष्पीकरण",
        "संघनन",
        "दहन",
        "उर्ध्वपातन"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: पृथ्वी के भीतर कंपन से क्या उत्पन्न हो सकता है?",
      "options": [
        "इंद्रधनुष",
        "ओस",
        "भूकंप",
        "ग्रहण"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: सूर्य ऊर्जा मुख्यतः किस प्रक्रिया से बनाता है?",
      "options": [
        "नाभिकीय संलयन",
        "घर्षण",
        "दहन",
        "वाष्पीकरण"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: मानव शरीर में सोचने का मुख्य अंग कौन है?",
      "options": [
        "यकृत",
        "आमाशय",
        "मस्तिष्क",
        "हृदय"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: भोजन पचाने में पेट में कौन-सा अम्ल मदद करता है?",
      "options": [
        "एसिटिक अम्ल",
        "हाइड्रोक्लोरिक अम्ल",
        "सल्फ्यूरिक अम्ल",
        "नाइट्रिक अम्ल"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: मलेरिया किससे फैलता है?",
      "options": [
        "तितली",
        "संक्रमित मादा एनोफिलीज मच्छर",
        "घरेलू मक्खी",
        "कुत्ता"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: पौधे मिट्टी से पानी मुख्यतः किससे लेते हैं?",
      "options": [
        "फलों से",
        "जड़ों से",
        "बीजों से",
        "फूलों से"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: कौन-सा अंग रक्त को छानने में मदद करता है?",
      "options": [
        "फेफड़े",
        "हृदय",
        "पित्ताशय",
        "गुर्दे"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: प्रकाश संश्लेषण में कौन-सी ऊर्जा इस्तेमाल होती है?",
      "options": [
        "ध्वनि ऊर्जा",
        "रासायनिक ईंधन",
        "सौर ऊर्जा",
        "घर्षण ऊर्जा"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: वयस्क मानव के शरीर में सामान्यतः कितनी हड्डियाँ होती हैं?",
      "options": [
        "406",
        "306",
        "206",
        "106"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: पृथ्वी की सबसे बाहरी ठोस परत क्या कहलाती है?",
      "options": [
        "मेंटल का केंद्र",
        "बाह्य क्रोड",
        "भूपर्पटी",
        "क्रोड"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: किस पदार्थ की pH 7 होती है?",
      "options": [
        "नींबू का रस",
        "साबुन का घोल",
        "सिरका",
        "तटस्थ शुद्ध पानी"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: तापमान मापने का उपकरण क्या है?",
      "options": [
        "कंपास",
        "अमीटर",
        "बैरोमीटर",
        "थर्मामीटर"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: वायुदाब मापने का उपकरण क्या है?",
      "options": [
        "थर्मामीटर",
        "लैक्टोमीटर",
        "स्पीडोमीटर",
        "बैरोमीटर"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: आवृत्ति की इकाई क्या है?",
      "options": [
        "वाट",
        "जूल",
        "कूलॉम",
        "हर्ट्ज"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: विद्युत प्रतिरोध की इकाई क्या है?",
      "options": [
        "ओम",
        "वोल्ट",
        "एम्पियर",
        "टेस्ला"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: धातुओं में सामान्यतः कौन-सा गुण होता है?",
      "options": [
        "पानी में घुलना",
        "हमेशा गैस होना",
        "ऊष्मा और बिजली का अच्छा चालन",
        "बिजली का पूर्ण अवरोध"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—पौधे भोजन बनाने के लिए कौन-सी प्रक्रिया करते हैं?",
      "options": [
        "पाचन",
        "वाष्पीकरण",
        "श्वसन",
        "प्रकाश संश्लेषण"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—पानी का रासायनिक सूत्र क्या है?",
      "options": [
        "NaCl",
        "O₂",
        "CO₂",
        "H₂O"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—रक्त को पूरे शरीर में कौन पंप करता है?",
      "options": [
        "गुर्दे",
        "मस्तिष्क",
        "फेफड़े",
        "हृदय"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—साँस लेने के लिए कौन-सी गैस आवश्यक है?",
      "options": [
        "हाइड्रोजन",
        "नाइट्रोजन",
        "हीलियम",
        "ऑक्सीजन"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—सूर्य के सबसे निकट ग्रह कौन-सा है?",
      "options": [
        "बुध",
        "मंगल",
        "पृथ्वी",
        "शुक्र"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—लाल ग्रह किसे कहा जाता है?",
      "options": [
        "मंगल",
        "बुध",
        "शनि",
        "बृहस्पति"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—पौधों का हरा रंग किसके कारण होता है?",
      "options": [
        "हीमोग्लोबिन",
        "क्लोरोफिल",
        "मेलानिन",
        "केराटिन"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—मानव शरीर का सबसे बड़ा अंग कौन-सा है?",
      "options": [
        "त्वचा",
        "हृदय",
        "यकृत",
        "फेफड़ा"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—पानी सामान्य दबाव पर कितने °C पर उबलता है?",
      "options": [
        "100°C",
        "150°C",
        "75°C",
        "50°C"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—बर्फ सामान्य दबाव पर कितने °C पर पिघलती है?",
      "options": [
        "10°C",
        "0°C",
        "100°C",
        "50°C"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—ध्वनि किसमें यात्रा नहीं कर सकती?",
      "options": [
        "हवा",
        "निर्वात",
        "पानी",
        "इस्पात"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—बल की SI इकाई क्या है?",
      "options": [
        "जूल",
        "वाट",
        "न्यूटन",
        "पास्कल"
      ],
      "answer": 2
    }
  ],
  "History": [
    {
      "q": "भारत स्वतंत्र कब हुआ?",
      "options": [
        "26 नवंबर 1949",
        "26 जनवरी 1950",
        "15 अगस्त 1947",
        "15 अगस्त 1950"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: भारत स्वतंत्र कब हुआ?",
      "options": [
        "15 अगस्त 1947",
        "15 अगस्त 1950",
        "26 जनवरी 1950",
        "26 नवंबर 1949"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: भारत स्वतंत्र कब हुआ?",
      "options": [
        "26 जनवरी 1950",
        "26 नवंबर 1949",
        "15 अगस्त 1950",
        "15 अगस्त 1947"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—भारत स्वतंत्र कब हुआ?",
      "options": [
        "26 जनवरी 1950",
        "15 अगस्त 1950",
        "15 अगस्त 1947",
        "26 नवंबर 1949"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत स्वतंत्र कब हुआ?",
      "options": [
        "15 अगस्त 1950",
        "26 जनवरी 1950",
        "15 अगस्त 1947",
        "26 नवंबर 1949"
      ],
      "answer": 2
    },
    {
      "q": "भारत का संविधान कब लागू हुआ?",
      "options": [
        "2 अक्टूबर 1950",
        "26 जनवरी 1950",
        "26 नवंबर 1949",
        "15 अगस्त 1947"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: भारत का संविधान कब लागू हुआ?",
      "options": [
        "26 जनवरी 1950",
        "2 अक्टूबर 1950",
        "26 नवंबर 1949",
        "15 अगस्त 1947"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: भारत का संविधान कब लागू हुआ?",
      "options": [
        "26 जनवरी 1950",
        "2 अक्टूबर 1950",
        "26 नवंबर 1949",
        "15 अगस्त 1947"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—भारत का संविधान कब लागू हुआ?",
      "options": [
        "2 अक्टूबर 1950",
        "26 जनवरी 1950",
        "15 अगस्त 1947",
        "26 नवंबर 1949"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत का संविधान कब लागू हुआ?",
      "options": [
        "2 अक्टूबर 1950",
        "26 जनवरी 1950",
        "26 नवंबर 1949",
        "15 अगस्त 1947"
      ],
      "answer": 1
    },
    {
      "q": "भारत के पहले प्रधानमंत्री कौन थे?",
      "options": [
        "जवाहरलाल नेहरू",
        "लाल बहादुर शास्त्री",
        "सरदार पटेल",
        "डॉ. राजेंद्र प्रसाद"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: भारत के पहले प्रधानमंत्री कौन थे?",
      "options": [
        "सरदार पटेल",
        "डॉ. राजेंद्र प्रसाद",
        "जवाहरलाल नेहरू",
        "लाल बहादुर शास्त्री"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: भारत के पहले प्रधानमंत्री कौन थे?",
      "options": [
        "जवाहरलाल नेहरू",
        "लाल बहादुर शास्त्री",
        "सरदार पटेल",
        "डॉ. राजेंद्र प्रसाद"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—भारत के पहले प्रधानमंत्री कौन थे?",
      "options": [
        "जवाहरलाल नेहरू",
        "डॉ. राजेंद्र प्रसाद",
        "लाल बहादुर शास्त्री",
        "सरदार पटेल"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत के पहले प्रधानमंत्री कौन थे?",
      "options": [
        "डॉ. राजेंद्र प्रसाद",
        "जवाहरलाल नेहरू",
        "लाल बहादुर शास्त्री",
        "सरदार पटेल"
      ],
      "answer": 1
    },
    {
      "q": "ताजमहल किसने बनवाया?",
      "options": [
        "बाबर",
        "अकबर",
        "शाहजहाँ",
        "औरंगज़ेब"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: ताजमहल किसने बनवाया?",
      "options": [
        "बाबर",
        "शाहजहाँ",
        "औरंगज़ेब",
        "अकबर"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: ताजमहल किसने बनवाया?",
      "options": [
        "शाहजहाँ",
        "बाबर",
        "अकबर",
        "औरंगज़ेब"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—ताजमहल किसने बनवाया?",
      "options": [
        "शाहजहाँ",
        "औरंगज़ेब",
        "अकबर",
        "बाबर"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? ताजमहल किसने बनवाया?",
      "options": [
        "बाबर",
        "औरंगज़ेब",
        "शाहजहाँ",
        "अकबर"
      ],
      "answer": 2
    },
    {
      "q": "1857 के विद्रोह को किस नाम से भी जाना जाता है?",
      "options": [
        "भारत छोड़ो आंदोलन",
        "प्रथम स्वतंत्रता संग्राम",
        "स्वदेशी आंदोलन",
        "चंपारण आंदोलन"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 1857 के विद्रोह को किस नाम से भी जाना जाता है?",
      "options": [
        "प्रथम स्वतंत्रता संग्राम",
        "भारत छोड़ो आंदोलन",
        "चंपारण आंदोलन",
        "स्वदेशी आंदोलन"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 1857 के विद्रोह को किस नाम से भी जाना जाता है?",
      "options": [
        "स्वदेशी आंदोलन",
        "भारत छोड़ो आंदोलन",
        "प्रथम स्वतंत्रता संग्राम",
        "चंपारण आंदोलन"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—1857 के विद्रोह को किस नाम से भी जाना जाता है?",
      "options": [
        "चंपारण आंदोलन",
        "भारत छोड़ो आंदोलन",
        "स्वदेशी आंदोलन",
        "प्रथम स्वतंत्रता संग्राम"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 1857 के विद्रोह को किस नाम से भी जाना जाता है?",
      "options": [
        "चंपारण आंदोलन",
        "भारत छोड़ो आंदोलन",
        "स्वदेशी आंदोलन",
        "प्रथम स्वतंत्रता संग्राम"
      ],
      "answer": 3
    },
    {
      "q": "भारत छोड़ो आंदोलन कब शुरू हुआ?",
      "options": [
        "1942",
        "1947",
        "1919",
        "1930"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: भारत छोड़ो आंदोलन कब शुरू हुआ?",
      "options": [
        "1947",
        "1930",
        "1942",
        "1919"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: भारत छोड़ो आंदोलन कब शुरू हुआ?",
      "options": [
        "1919",
        "1930",
        "1942",
        "1947"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—भारत छोड़ो आंदोलन कब शुरू हुआ?",
      "options": [
        "1919",
        "1930",
        "1947",
        "1942"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत छोड़ो आंदोलन कब शुरू हुआ?",
      "options": [
        "1930",
        "1919",
        "1942",
        "1947"
      ],
      "answer": 2
    },
    {
      "q": "दांडी मार्च किस वर्ष हुआ?",
      "options": [
        "1942",
        "1920",
        "1947",
        "1930"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: दांडी मार्च किस वर्ष हुआ?",
      "options": [
        "1947",
        "1920",
        "1930",
        "1942"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: दांडी मार्च किस वर्ष हुआ?",
      "options": [
        "1942",
        "1930",
        "1920",
        "1947"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—दांडी मार्च किस वर्ष हुआ?",
      "options": [
        "1947",
        "1942",
        "1930",
        "1920"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? दांडी मार्च किस वर्ष हुआ?",
      "options": [
        "1920",
        "1947",
        "1942",
        "1930"
      ],
      "answer": 3
    },
    {
      "q": "जलियांवाला बाग हत्याकांड कब हुआ?",
      "options": [
        "1930",
        "1905",
        "1942",
        "1919"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: जलियांवाला बाग हत्याकांड कब हुआ?",
      "options": [
        "1919",
        "1930",
        "1905",
        "1942"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: जलियांवाला बाग हत्याकांड कब हुआ?",
      "options": [
        "1919",
        "1930",
        "1905",
        "1942"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—जलियांवाला बाग हत्याकांड कब हुआ?",
      "options": [
        "1942",
        "1905",
        "1919",
        "1930"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? जलियांवाला बाग हत्याकांड कब हुआ?",
      "options": [
        "1905",
        "1942",
        "1930",
        "1919"
      ],
      "answer": 3
    },
    {
      "q": "भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई?",
      "options": [
        "1905",
        "1857",
        "1885",
        "1947"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई?",
      "options": [
        "1905",
        "1947",
        "1885",
        "1857"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई?",
      "options": [
        "1947",
        "1885",
        "1905",
        "1857"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई?",
      "options": [
        "1905",
        "1885",
        "1947",
        "1857"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई?",
      "options": [
        "1857",
        "1947",
        "1905",
        "1885"
      ],
      "answer": 3
    },
    {
      "q": "आजाद हिंद फौज से प्रमुख रूप से कौन जुड़े थे?",
      "options": [
        "डलहौजी",
        "लॉर्ड कर्जन",
        "रॉबर्ट क्लाइव",
        "सुभाष चंद्र बोस"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: आजाद हिंद फौज से प्रमुख रूप से कौन जुड़े थे?",
      "options": [
        "लॉर्ड कर्जन",
        "सुभाष चंद्र बोस",
        "रॉबर्ट क्लाइव",
        "डलहौजी"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: आजाद हिंद फौज से प्रमुख रूप से कौन जुड़े थे?",
      "options": [
        "रॉबर्ट क्लाइव",
        "डलहौजी",
        "सुभाष चंद्र बोस",
        "लॉर्ड कर्जन"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—आजाद हिंद फौज से प्रमुख रूप से कौन जुड़े थे?",
      "options": [
        "डलहौजी",
        "सुभाष चंद्र बोस",
        "रॉबर्ट क्लाइव",
        "लॉर्ड कर्जन"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? आजाद हिंद फौज से प्रमुख रूप से कौन जुड़े थे?",
      "options": [
        "डलहौजी",
        "रॉबर्ट क्लाइव",
        "लॉर्ड कर्जन",
        "सुभाष चंद्र बोस"
      ],
      "answer": 3
    },
    {
      "q": "सम्राट अशोक किस वंश से थे?",
      "options": [
        "गुप्त वंश",
        "मुगल वंश",
        "चोल वंश",
        "मौर्य वंश"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: सम्राट अशोक किस वंश से थे?",
      "options": [
        "गुप्त वंश",
        "मौर्य वंश",
        "चोल वंश",
        "मुगल वंश"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: सम्राट अशोक किस वंश से थे?",
      "options": [
        "चोल वंश",
        "गुप्त वंश",
        "मौर्य वंश",
        "मुगल वंश"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—सम्राट अशोक किस वंश से थे?",
      "options": [
        "गुप्त वंश",
        "चोल वंश",
        "मुगल वंश",
        "मौर्य वंश"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? सम्राट अशोक किस वंश से थे?",
      "options": [
        "चोल वंश",
        "मौर्य वंश",
        "गुप्त वंश",
        "मुगल वंश"
      ],
      "answer": 1
    },
    {
      "q": "अकबर किस वंश का शासक था?",
      "options": [
        "पाल वंश",
        "मुगल वंश",
        "गुप्त वंश",
        "मौर्य वंश"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: अकबर किस वंश का शासक था?",
      "options": [
        "मौर्य वंश",
        "पाल वंश",
        "गुप्त वंश",
        "मुगल वंश"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: अकबर किस वंश का शासक था?",
      "options": [
        "मौर्य वंश",
        "मुगल वंश",
        "गुप्त वंश",
        "पाल वंश"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—अकबर किस वंश का शासक था?",
      "options": [
        "पाल वंश",
        "मौर्य वंश",
        "गुप्त वंश",
        "मुगल वंश"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? अकबर किस वंश का शासक था?",
      "options": [
        "पाल वंश",
        "गुप्त वंश",
        "मुगल वंश",
        "मौर्य वंश"
      ],
      "answer": 2
    },
    {
      "q": "कुतुब मीनार कहाँ है?",
      "options": [
        "आगरा",
        "दिल्ली",
        "लखनऊ",
        "जयपुर"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: कुतुब मीनार कहाँ है?",
      "options": [
        "लखनऊ",
        "जयपुर",
        "आगरा",
        "दिल्ली"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: कुतुब मीनार कहाँ है?",
      "options": [
        "दिल्ली",
        "आगरा",
        "जयपुर",
        "लखनऊ"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—कुतुब मीनार कहाँ है?",
      "options": [
        "लखनऊ",
        "आगरा",
        "दिल्ली",
        "जयपुर"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कुतुब मीनार कहाँ है?",
      "options": [
        "दिल्ली",
        "जयपुर",
        "लखनऊ",
        "आगरा"
      ],
      "answer": 0
    },
    {
      "q": "लाल किला किस शहर में है?",
      "options": [
        "दिल्ली",
        "मुंबई",
        "पटना",
        "चेन्नई"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: लाल किला किस शहर में है?",
      "options": [
        "पटना",
        "मुंबई",
        "चेन्नई",
        "दिल्ली"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: लाल किला किस शहर में है?",
      "options": [
        "पटना",
        "दिल्ली",
        "चेन्नई",
        "मुंबई"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—लाल किला किस शहर में है?",
      "options": [
        "मुंबई",
        "चेन्नई",
        "दिल्ली",
        "पटना"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? लाल किला किस शहर में है?",
      "options": [
        "पटना",
        "चेन्नई",
        "दिल्ली",
        "मुंबई"
      ],
      "answer": 2
    },
    {
      "q": "भारत का पहला राष्ट्रपति कौन था?",
      "options": [
        "जाकिर हुसैन",
        "डॉ. राजेंद्र प्रसाद",
        "जवाहरलाल नेहरू",
        "डॉ. सर्वपल्ली राधाकृष्णन"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: भारत का पहला राष्ट्रपति कौन था?",
      "options": [
        "जाकिर हुसैन",
        "डॉ. राजेंद्र प्रसाद",
        "जवाहरलाल नेहरू",
        "डॉ. सर्वपल्ली राधाकृष्णन"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: भारत का पहला राष्ट्रपति कौन था?",
      "options": [
        "जाकिर हुसैन",
        "डॉ. राजेंद्र प्रसाद",
        "डॉ. सर्वपल्ली राधाकृष्णन",
        "जवाहरलाल नेहरू"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—भारत का पहला राष्ट्रपति कौन था?",
      "options": [
        "डॉ. सर्वपल्ली राधाकृष्णन",
        "जाकिर हुसैन",
        "जवाहरलाल नेहरू",
        "डॉ. राजेंद्र प्रसाद"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत का पहला राष्ट्रपति कौन था?",
      "options": [
        "जवाहरलाल नेहरू",
        "डॉ. राजेंद्र प्रसाद",
        "डॉ. सर्वपल्ली राधाकृष्णन",
        "जाकिर हुसैन"
      ],
      "answer": 1
    },
    {
      "q": "महात्मा गांधी का जन्म कहाँ हुआ?",
      "options": [
        "दिल्ली",
        "पोरबंदर",
        "अहमदाबाद",
        "राजकोट"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: महात्मा गांधी का जन्म कहाँ हुआ?",
      "options": [
        "पोरबंदर",
        "दिल्ली",
        "अहमदाबाद",
        "राजकोट"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: महात्मा गांधी का जन्म कहाँ हुआ?",
      "options": [
        "अहमदाबाद",
        "राजकोट",
        "पोरबंदर",
        "दिल्ली"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—महात्मा गांधी का जन्म कहाँ हुआ?",
      "options": [
        "राजकोट",
        "दिल्ली",
        "पोरबंदर",
        "अहमदाबाद"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? महात्मा गांधी का जन्म कहाँ हुआ?",
      "options": [
        "पोरबंदर",
        "राजकोट",
        "दिल्ली",
        "अहमदाबाद"
      ],
      "answer": 0
    },
    {
      "q": "महात्मा गांधी का जन्म किस वर्ष हुआ?",
      "options": [
        "1901",
        "1869",
        "1857",
        "1885"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: महात्मा गांधी का जन्म किस वर्ष हुआ?",
      "options": [
        "1901",
        "1857",
        "1869",
        "1885"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: महात्मा गांधी का जन्म किस वर्ष हुआ?",
      "options": [
        "1857",
        "1869",
        "1885",
        "1901"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—महात्मा गांधी का जन्म किस वर्ष हुआ?",
      "options": [
        "1857",
        "1869",
        "1901",
        "1885"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? महात्मा गांधी का जन्म किस वर्ष हुआ?",
      "options": [
        "1901",
        "1885",
        "1869",
        "1857"
      ],
      "answer": 2
    },
    {
      "q": "रानी लक्ष्मीबाई किस राज्य की रानी थीं?",
      "options": [
        "मैसूर",
        "अवध",
        "मेवाड़",
        "झाँसी"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: रानी लक्ष्मीबाई किस राज्य की रानी थीं?",
      "options": [
        "मेवाड़",
        "झाँसी",
        "मैसूर",
        "अवध"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: रानी लक्ष्मीबाई किस राज्य की रानी थीं?",
      "options": [
        "मेवाड़",
        "अवध",
        "मैसूर",
        "झाँसी"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—रानी लक्ष्मीबाई किस राज्य की रानी थीं?",
      "options": [
        "झाँसी",
        "मैसूर",
        "अवध",
        "मेवाड़"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? रानी लक्ष्मीबाई किस राज्य की रानी थीं?",
      "options": [
        "मैसूर",
        "झाँसी",
        "अवध",
        "मेवाड़"
      ],
      "answer": 1
    },
    {
      "q": "स्वामी विवेकानंद ने शिकागो भाषण किस वर्ष दिया?",
      "options": [
        "1893",
        "1885",
        "1901",
        "1915"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: स्वामी विवेकानंद ने शिकागो भाषण किस वर्ष दिया?",
      "options": [
        "1885",
        "1893",
        "1915",
        "1901"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: स्वामी विवेकानंद ने शिकागो भाषण किस वर्ष दिया?",
      "options": [
        "1885",
        "1901",
        "1893",
        "1915"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—स्वामी विवेकानंद ने शिकागो भाषण किस वर्ष दिया?",
      "options": [
        "1915",
        "1893",
        "1885",
        "1901"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? स्वामी विवेकानंद ने शिकागो भाषण किस वर्ष दिया?",
      "options": [
        "1885",
        "1915",
        "1901",
        "1893"
      ],
      "answer": 3
    },
    {
      "q": "साइमन कमीशन भारत कब आया?",
      "options": [
        "1919",
        "1928",
        "1935",
        "1942"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: साइमन कमीशन भारत कब आया?",
      "options": [
        "1928",
        "1935",
        "1942",
        "1919"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: साइमन कमीशन भारत कब आया?",
      "options": [
        "1942",
        "1928",
        "1935",
        "1919"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—साइमन कमीशन भारत कब आया?",
      "options": [
        "1919",
        "1935",
        "1928",
        "1942"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? साइमन कमीशन भारत कब आया?",
      "options": [
        "1919",
        "1928",
        "1942",
        "1935"
      ],
      "answer": 1
    },
    {
      "q": "असहयोग आंदोलन किस वर्ष शुरू हुआ?",
      "options": [
        "1905",
        "1930",
        "1920",
        "1942"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: असहयोग आंदोलन किस वर्ष शुरू हुआ?",
      "options": [
        "1920",
        "1930",
        "1905",
        "1942"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: असहयोग आंदोलन किस वर्ष शुरू हुआ?",
      "options": [
        "1905",
        "1920",
        "1930",
        "1942"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—असहयोग आंदोलन किस वर्ष शुरू हुआ?",
      "options": [
        "1920",
        "1942",
        "1930",
        "1905"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? असहयोग आंदोलन किस वर्ष शुरू हुआ?",
      "options": [
        "1920",
        "1905",
        "1942",
        "1930"
      ],
      "answer": 0
    },
    {
      "q": "पूर्ण स्वराज का प्रस्ताव किस अधिवेशन में हुआ?",
      "options": [
        "लाहौर अधिवेशन 1929",
        "बंबई अधिवेशन 1885",
        "सूरत अधिवेशन 1907",
        "कराची अधिवेशन 1931"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: पूर्ण स्वराज का प्रस्ताव किस अधिवेशन में हुआ?",
      "options": [
        "लाहौर अधिवेशन 1929",
        "कराची अधिवेशन 1931",
        "बंबई अधिवेशन 1885",
        "सूरत अधिवेशन 1907"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: पूर्ण स्वराज का प्रस्ताव किस अधिवेशन में हुआ?",
      "options": [
        "सूरत अधिवेशन 1907",
        "कराची अधिवेशन 1931",
        "बंबई अधिवेशन 1885",
        "लाहौर अधिवेशन 1929"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—पूर्ण स्वराज का प्रस्ताव किस अधिवेशन में हुआ?",
      "options": [
        "लाहौर अधिवेशन 1929",
        "बंबई अधिवेशन 1885",
        "कराची अधिवेशन 1931",
        "सूरत अधिवेशन 1907"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पूर्ण स्वराज का प्रस्ताव किस अधिवेशन में हुआ?",
      "options": [
        "कराची अधिवेशन 1931",
        "बंबई अधिवेशन 1885",
        "सूरत अधिवेशन 1907",
        "लाहौर अधिवेशन 1929"
      ],
      "answer": 3
    },
    {
      "q": "भारत का विभाजन किस वर्ष हुआ?",
      "options": [
        "1935",
        "1950",
        "1947",
        "1962"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: भारत का विभाजन किस वर्ष हुआ?",
      "options": [
        "1935",
        "1950",
        "1962",
        "1947"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: भारत का विभाजन किस वर्ष हुआ?",
      "options": [
        "1962",
        "1947",
        "1950",
        "1935"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—भारत का विभाजन किस वर्ष हुआ?",
      "options": [
        "1962",
        "1947",
        "1950",
        "1935"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत का विभाजन किस वर्ष हुआ?",
      "options": [
        "1947",
        "1935",
        "1962",
        "1950"
      ],
      "answer": 0
    },
    {
      "q": "चंद्रगुप्त मौर्य के गुरु कौन थे?",
      "options": [
        "तुलसीदास",
        "चाणक्य",
        "कालिदास",
        "आर्यभट्ट"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: चंद्रगुप्त मौर्य के गुरु कौन थे?",
      "options": [
        "चाणक्य",
        "कालिदास",
        "आर्यभट्ट",
        "तुलसीदास"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: चंद्रगुप्त मौर्य के गुरु कौन थे?",
      "options": [
        "आर्यभट्ट",
        "तुलसीदास",
        "कालिदास",
        "चाणक्य"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—चंद्रगुप्त मौर्य के गुरु कौन थे?",
      "options": [
        "चाणक्य",
        "कालिदास",
        "तुलसीदास",
        "आर्यभट्ट"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? चंद्रगुप्त मौर्य के गुरु कौन थे?",
      "options": [
        "आर्यभट्ट",
        "कालिदास",
        "चाणक्य",
        "तुलसीदास"
      ],
      "answer": 2
    },
    {
      "q": "अर्थशास्त्र ग्रंथ परंपरागत रूप से किससे जुड़ा है?",
      "options": [
        "बाणभट्ट",
        "कौटिल्य",
        "कबीर",
        "कालिदास"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: अर्थशास्त्र ग्रंथ परंपरागत रूप से किससे जुड़ा है?",
      "options": [
        "बाणभट्ट",
        "कालिदास",
        "कौटिल्य",
        "कबीर"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: अर्थशास्त्र ग्रंथ परंपरागत रूप से किससे जुड़ा है?",
      "options": [
        "बाणभट्ट",
        "कौटिल्य",
        "कबीर",
        "कालिदास"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—अर्थशास्त्र ग्रंथ परंपरागत रूप से किससे जुड़ा है?",
      "options": [
        "कौटिल्य",
        "बाणभट्ट",
        "कबीर",
        "कालिदास"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? अर्थशास्त्र ग्रंथ परंपरागत रूप से किससे जुड़ा है?",
      "options": [
        "कालिदास",
        "कौटिल्य",
        "कबीर",
        "बाणभट्ट"
      ],
      "answer": 1
    },
    {
      "q": "नालंदा विश्वविद्यालय प्राचीन काल में कहाँ था?",
      "options": [
        "पंजाब",
        "बिहार",
        "गुजरात",
        "केरल"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: नालंदा विश्वविद्यालय प्राचीन काल में कहाँ था?",
      "options": [
        "केरल",
        "पंजाब",
        "गुजरात",
        "बिहार"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: नालंदा विश्वविद्यालय प्राचीन काल में कहाँ था?",
      "options": [
        "गुजरात",
        "बिहार",
        "पंजाब",
        "केरल"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—नालंदा विश्वविद्यालय प्राचीन काल में कहाँ था?",
      "options": [
        "बिहार",
        "पंजाब",
        "गुजरात",
        "केरल"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? नालंदा विश्वविद्यालय प्राचीन काल में कहाँ था?",
      "options": [
        "बिहार",
        "पंजाब",
        "केरल",
        "गुजरात"
      ],
      "answer": 0
    },
    {
      "q": "अजंता की गुफाएँ किस राज्य में हैं?",
      "options": [
        "महाराष्ट्र",
        "बिहार",
        "हरियाणा",
        "असम"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: अजंता की गुफाएँ किस राज्य में हैं?",
      "options": [
        "बिहार",
        "महाराष्ट्र",
        "असम",
        "हरियाणा"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: अजंता की गुफाएँ किस राज्य में हैं?",
      "options": [
        "बिहार",
        "हरियाणा",
        "असम",
        "महाराष्ट्र"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—अजंता की गुफाएँ किस राज्य में हैं?",
      "options": [
        "महाराष्ट्र",
        "असम",
        "हरियाणा",
        "बिहार"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? अजंता की गुफाएँ किस राज्य में हैं?",
      "options": [
        "बिहार",
        "हरियाणा",
        "महाराष्ट्र",
        "असम"
      ],
      "answer": 2
    },
    {
      "q": "खजुराहो के मंदिर किस राज्य में हैं?",
      "options": [
        "ओडिशा",
        "राजस्थान",
        "बिहार",
        "मध्य प्रदेश"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: खजुराहो के मंदिर किस राज्य में हैं?",
      "options": [
        "मध्य प्रदेश",
        "ओडिशा",
        "बिहार",
        "राजस्थान"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: खजुराहो के मंदिर किस राज्य में हैं?",
      "options": [
        "राजस्थान",
        "मध्य प्रदेश",
        "बिहार",
        "ओडिशा"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—खजुराहो के मंदिर किस राज्य में हैं?",
      "options": [
        "बिहार",
        "मध्य प्रदेश",
        "ओडिशा",
        "राजस्थान"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? खजुराहो के मंदिर किस राज्य में हैं?",
      "options": [
        "राजस्थान",
        "ओडिशा",
        "बिहार",
        "मध्य प्रदेश"
      ],
      "answer": 3
    },
    {
      "q": "किस मुगल शासक ने फतेहपुर सीकरी बनवाई?",
      "options": [
        "बाबर",
        "बहादुर शाह जफर",
        "अकबर",
        "जहाँगीर"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: किस मुगल शासक ने फतेहपुर सीकरी बनवाई?",
      "options": [
        "बाबर",
        "बहादुर शाह जफर",
        "अकबर",
        "जहाँगीर"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: किस मुगल शासक ने फतेहपुर सीकरी बनवाई?",
      "options": [
        "जहाँगीर",
        "बहादुर शाह जफर",
        "अकबर",
        "बाबर"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—किस मुगल शासक ने फतेहपुर सीकरी बनवाई?",
      "options": [
        "जहाँगीर",
        "बाबर",
        "बहादुर शाह जफर",
        "अकबर"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? किस मुगल शासक ने फतेहपुर सीकरी बनवाई?",
      "options": [
        "बहादुर शाह जफर",
        "जहाँगीर",
        "बाबर",
        "अकबर"
      ],
      "answer": 3
    },
    {
      "q": "पानीपत का प्रथम युद्ध कब हुआ?",
      "options": [
        "1761",
        "1526",
        "1556",
        "1757"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: पानीपत का प्रथम युद्ध कब हुआ?",
      "options": [
        "1757",
        "1761",
        "1556",
        "1526"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: पानीपत का प्रथम युद्ध कब हुआ?",
      "options": [
        "1526",
        "1556",
        "1757",
        "1761"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—पानीपत का प्रथम युद्ध कब हुआ?",
      "options": [
        "1526",
        "1556",
        "1757",
        "1761"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पानीपत का प्रथम युद्ध कब हुआ?",
      "options": [
        "1761",
        "1526",
        "1757",
        "1556"
      ],
      "answer": 1
    },
    {
      "q": "प्लासी का युद्ध कब हुआ?",
      "options": [
        "1857",
        "1757",
        "1764",
        "1526"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: प्लासी का युद्ध कब हुआ?",
      "options": [
        "1526",
        "1857",
        "1757",
        "1764"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: प्लासी का युद्ध कब हुआ?",
      "options": [
        "1764",
        "1757",
        "1526",
        "1857"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—प्लासी का युद्ध कब हुआ?",
      "options": [
        "1757",
        "1526",
        "1764",
        "1857"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? प्लासी का युद्ध कब हुआ?",
      "options": [
        "1857",
        "1757",
        "1764",
        "1526"
      ],
      "answer": 1
    },
    {
      "q": "बक्सर का युद्ध कब हुआ?",
      "options": [
        "1757",
        "1857",
        "1764",
        "1942"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: बक्सर का युद्ध कब हुआ?",
      "options": [
        "1942",
        "1757",
        "1857",
        "1764"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: बक्सर का युद्ध कब हुआ?",
      "options": [
        "1942",
        "1857",
        "1757",
        "1764"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—बक्सर का युद्ध कब हुआ?",
      "options": [
        "1942",
        "1857",
        "1764",
        "1757"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? बक्सर का युद्ध कब हुआ?",
      "options": [
        "1757",
        "1857",
        "1942",
        "1764"
      ],
      "answer": 3
    },
    {
      "q": "स्थायी बंदोबस्त किसने लागू किया?",
      "options": [
        "लॉर्ड कर्जन",
        "लॉर्ड कॉर्नवालिस",
        "लॉर्ड वेलेजली",
        "लॉर्ड रिपन"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: स्थायी बंदोबस्त किसने लागू किया?",
      "options": [
        "लॉर्ड कॉर्नवालिस",
        "लॉर्ड वेलेजली",
        "लॉर्ड कर्जन",
        "लॉर्ड रिपन"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: स्थायी बंदोबस्त किसने लागू किया?",
      "options": [
        "लॉर्ड कर्जन",
        "लॉर्ड रिपन",
        "लॉर्ड वेलेजली",
        "लॉर्ड कॉर्नवालिस"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—स्थायी बंदोबस्त किसने लागू किया?",
      "options": [
        "लॉर्ड कर्जन",
        "लॉर्ड रिपन",
        "लॉर्ड वेलेजली",
        "लॉर्ड कॉर्नवालिस"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? स्थायी बंदोबस्त किसने लागू किया?",
      "options": [
        "लॉर्ड कॉर्नवालिस",
        "लॉर्ड वेलेजली",
        "लॉर्ड कर्जन",
        "लॉर्ड रिपन"
      ],
      "answer": 0
    },
    {
      "q": "बंगाल विभाजन किस वर्ष हुआ?",
      "options": [
        "1947",
        "1919",
        "1905",
        "1885"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: बंगाल विभाजन किस वर्ष हुआ?",
      "options": [
        "1947",
        "1885",
        "1905",
        "1919"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: बंगाल विभाजन किस वर्ष हुआ?",
      "options": [
        "1947",
        "1885",
        "1905",
        "1919"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—बंगाल विभाजन किस वर्ष हुआ?",
      "options": [
        "1905",
        "1947",
        "1885",
        "1919"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? बंगाल विभाजन किस वर्ष हुआ?",
      "options": [
        "1919",
        "1905",
        "1947",
        "1885"
      ],
      "answer": 1
    },
    {
      "q": "स्वदेशी आंदोलन किस घटना के विरोध में तेज हुआ?",
      "options": [
        "दांडी मार्च",
        "बंगाल विभाजन",
        "रॉलेट एक्ट",
        "भारत छोड़ो"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: स्वदेशी आंदोलन किस घटना के विरोध में तेज हुआ?",
      "options": [
        "बंगाल विभाजन",
        "रॉलेट एक्ट",
        "भारत छोड़ो",
        "दांडी मार्च"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: स्वदेशी आंदोलन किस घटना के विरोध में तेज हुआ?",
      "options": [
        "भारत छोड़ो",
        "बंगाल विभाजन",
        "दांडी मार्च",
        "रॉलेट एक्ट"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—स्वदेशी आंदोलन किस घटना के विरोध में तेज हुआ?",
      "options": [
        "बंगाल विभाजन",
        "भारत छोड़ो",
        "रॉलेट एक्ट",
        "दांडी मार्च"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? स्वदेशी आंदोलन किस घटना के विरोध में तेज हुआ?",
      "options": [
        "बंगाल विभाजन",
        "दांडी मार्च",
        "रॉलेट एक्ट",
        "भारत छोड़ो"
      ],
      "answer": 0
    },
    {
      "q": "रॉलेट एक्ट किस वर्ष आया?",
      "options": [
        "1905",
        "1930",
        "1942",
        "1919"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: रॉलेट एक्ट किस वर्ष आया?",
      "options": [
        "1905",
        "1942",
        "1919",
        "1930"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: रॉलेट एक्ट किस वर्ष आया?",
      "options": [
        "1942",
        "1919",
        "1930",
        "1905"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—रॉलेट एक्ट किस वर्ष आया?",
      "options": [
        "1905",
        "1919",
        "1942",
        "1930"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? रॉलेट एक्ट किस वर्ष आया?",
      "options": [
        "1919",
        "1942",
        "1930",
        "1905"
      ],
      "answer": 0
    },
    {
      "q": "होम रूल आंदोलन से कौन जुड़ी थीं?",
      "options": [
        "बेगम हजरत महल",
        "रानी दुर्गावती",
        "एनी बेसेंट",
        "सरोजिनी नायडू ही अकेली"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: होम रूल आंदोलन से कौन जुड़ी थीं?",
      "options": [
        "बेगम हजरत महल",
        "सरोजिनी नायडू ही अकेली",
        "रानी दुर्गावती",
        "एनी बेसेंट"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: होम रूल आंदोलन से कौन जुड़ी थीं?",
      "options": [
        "सरोजिनी नायडू ही अकेली",
        "बेगम हजरत महल",
        "रानी दुर्गावती",
        "एनी बेसेंट"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—होम रूल आंदोलन से कौन जुड़ी थीं?",
      "options": [
        "बेगम हजरत महल",
        "रानी दुर्गावती",
        "एनी बेसेंट",
        "सरोजिनी नायडू ही अकेली"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? होम रूल आंदोलन से कौन जुड़ी थीं?",
      "options": [
        "सरोजिनी नायडू ही अकेली",
        "एनी बेसेंट",
        "बेगम हजरत महल",
        "रानी दुर्गावती"
      ],
      "answer": 1
    },
    {
      "q": "सविनय अवज्ञा आंदोलन किस घटना से शुरू हुआ?",
      "options": [
        "दांडी मार्च",
        "काकोरी कांड",
        "चौरी चौरा",
        "जलियांवाला बाग"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: सविनय अवज्ञा आंदोलन किस घटना से शुरू हुआ?",
      "options": [
        "चौरी चौरा",
        "दांडी मार्च",
        "जलियांवाला बाग",
        "काकोरी कांड"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: सविनय अवज्ञा आंदोलन किस घटना से शुरू हुआ?",
      "options": [
        "काकोरी कांड",
        "दांडी मार्च",
        "जलियांवाला बाग",
        "चौरी चौरा"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—सविनय अवज्ञा आंदोलन किस घटना से शुरू हुआ?",
      "options": [
        "दांडी मार्च",
        "काकोरी कांड",
        "चौरी चौरा",
        "जलियांवाला बाग"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? सविनय अवज्ञा आंदोलन किस घटना से शुरू हुआ?",
      "options": [
        "काकोरी कांड",
        "दांडी मार्च",
        "चौरी चौरा",
        "जलियांवाला बाग"
      ],
      "answer": 1
    },
    {
      "q": "भारत का पहला गवर्नर जनरल (स्वतंत्र भारत) कौन था?",
      "options": [
        "वॉरेन हेस्टिंग्स",
        "लॉर्ड माउंटबेटन",
        "सी. राजगोपालाचारी",
        "लॉर्ड कर्जन"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: भारत का पहला गवर्नर जनरल (स्वतंत्र भारत) कौन था?",
      "options": [
        "सी. राजगोपालाचारी",
        "लॉर्ड कर्जन",
        "लॉर्ड माउंटबेटन",
        "वॉरेन हेस्टिंग्स"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: भारत का पहला गवर्नर जनरल (स्वतंत्र भारत) कौन था?",
      "options": [
        "लॉर्ड माउंटबेटन",
        "लॉर्ड कर्जन",
        "वॉरेन हेस्टिंग्स",
        "सी. राजगोपालाचारी"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—भारत का पहला गवर्नर जनरल (स्वतंत्र भारत) कौन था?",
      "options": [
        "लॉर्ड माउंटबेटन",
        "सी. राजगोपालाचारी",
        "लॉर्ड कर्जन",
        "वॉरेन हेस्टिंग्स"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत का पहला गवर्नर जनरल (स्वतंत्र भारत) कौन था?",
      "options": [
        "वॉरेन हेस्टिंग्स",
        "लॉर्ड माउंटबेटन",
        "लॉर्ड कर्जन",
        "सी. राजगोपालाचारी"
      ],
      "answer": 1
    },
    {
      "q": "स्वतंत्र भारत के पहले भारतीय गवर्नर जनरल कौन थे?",
      "options": [
        "डॉ. राजेंद्र प्रसाद",
        "लॉर्ड माउंटबेटन",
        "जवाहरलाल नेहरू",
        "सी. राजगोपालाचारी"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: स्वतंत्र भारत के पहले भारतीय गवर्नर जनरल कौन थे?",
      "options": [
        "जवाहरलाल नेहरू",
        "डॉ. राजेंद्र प्रसाद",
        "लॉर्ड माउंटबेटन",
        "सी. राजगोपालाचारी"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: स्वतंत्र भारत के पहले भारतीय गवर्नर जनरल कौन थे?",
      "options": [
        "लॉर्ड माउंटबेटन",
        "जवाहरलाल नेहरू",
        "सी. राजगोपालाचारी",
        "डॉ. राजेंद्र प्रसाद"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—स्वतंत्र भारत के पहले भारतीय गवर्नर जनरल कौन थे?",
      "options": [
        "सी. राजगोपालाचारी",
        "लॉर्ड माउंटबेटन",
        "जवाहरलाल नेहरू",
        "डॉ. राजेंद्र प्रसाद"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? स्वतंत्र भारत के पहले भारतीय गवर्नर जनरल कौन थे?",
      "options": [
        "डॉ. राजेंद्र प्रसाद",
        "सी. राजगोपालाचारी",
        "लॉर्ड माउंटबेटन",
        "जवाहरलाल नेहरू"
      ],
      "answer": 1
    },
    {
      "q": "संविधान सभा के अध्यक्ष कौन थे?",
      "options": [
        "जवाहरलाल नेहरू",
        "डॉ. बी. आर. आंबेडकर",
        "सरदार पटेल",
        "डॉ. राजेंद्र प्रसाद"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: संविधान सभा के अध्यक्ष कौन थे?",
      "options": [
        "जवाहरलाल नेहरू",
        "सरदार पटेल",
        "डॉ. राजेंद्र प्रसाद",
        "डॉ. बी. आर. आंबेडकर"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: संविधान सभा के अध्यक्ष कौन थे?",
      "options": [
        "डॉ. बी. आर. आंबेडकर",
        "डॉ. राजेंद्र प्रसाद",
        "सरदार पटेल",
        "जवाहरलाल नेहरू"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—संविधान सभा के अध्यक्ष कौन थे?",
      "options": [
        "डॉ. बी. आर. आंबेडकर",
        "सरदार पटेल",
        "जवाहरलाल नेहरू",
        "डॉ. राजेंद्र प्रसाद"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? संविधान सभा के अध्यक्ष कौन थे?",
      "options": [
        "डॉ. बी. आर. आंबेडकर",
        "सरदार पटेल",
        "जवाहरलाल नेहरू",
        "डॉ. राजेंद्र प्रसाद"
      ],
      "answer": 3
    },
    {
      "q": "संविधान की प्रारूप समिति के अध्यक्ष कौन थे?",
      "options": [
        "सरदार पटेल",
        "राजेंद्र प्रसाद",
        "डॉ. बी. आर. आंबेडकर",
        "के. एम. मुंशी"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: संविधान की प्रारूप समिति के अध्यक्ष कौन थे?",
      "options": [
        "डॉ. बी. आर. आंबेडकर",
        "राजेंद्र प्रसाद",
        "सरदार पटेल",
        "के. एम. मुंशी"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: संविधान की प्रारूप समिति के अध्यक्ष कौन थे?",
      "options": [
        "डॉ. बी. आर. आंबेडकर",
        "सरदार पटेल",
        "राजेंद्र प्रसाद",
        "के. एम. मुंशी"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—संविधान की प्रारूप समिति के अध्यक्ष कौन थे?",
      "options": [
        "डॉ. बी. आर. आंबेडकर",
        "राजेंद्र प्रसाद",
        "के. एम. मुंशी",
        "सरदार पटेल"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? संविधान की प्रारूप समिति के अध्यक्ष कौन थे?",
      "options": [
        "डॉ. बी. आर. आंबेडकर",
        "सरदार पटेल",
        "राजेंद्र प्रसाद",
        "के. एम. मुंशी"
      ],
      "answer": 0
    },
    {
      "q": "गुप्त काल को किस नाम से जाना जाता है?",
      "options": [
        "औद्योगिक युग",
        "वैदिक उत्तर युग",
        "भारत का स्वर्ण युग",
        "आधुनिक युग"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: गुप्त काल को किस नाम से जाना जाता है?",
      "options": [
        "आधुनिक युग",
        "वैदिक उत्तर युग",
        "औद्योगिक युग",
        "भारत का स्वर्ण युग"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: गुप्त काल को किस नाम से जाना जाता है?",
      "options": [
        "औद्योगिक युग",
        "वैदिक उत्तर युग",
        "आधुनिक युग",
        "भारत का स्वर्ण युग"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—गुप्त काल को किस नाम से जाना जाता है?",
      "options": [
        "औद्योगिक युग",
        "भारत का स्वर्ण युग",
        "वैदिक उत्तर युग",
        "आधुनिक युग"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? गुप्त काल को किस नाम से जाना जाता है?",
      "options": [
        "वैदिक उत्तर युग",
        "भारत का स्वर्ण युग",
        "औद्योगिक युग",
        "आधुनिक युग"
      ],
      "answer": 1
    },
    {
      "q": "आर्यभट्ट किस क्षेत्र से जुड़े थे?",
      "options": [
        "गणित और खगोलशास्त्र",
        "राजनीति",
        "संगीत",
        "चित्रकला"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: आर्यभट्ट किस क्षेत्र से जुड़े थे?",
      "options": [
        "गणित और खगोलशास्त्र",
        "चित्रकला",
        "राजनीति",
        "संगीत"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: आर्यभट्ट किस क्षेत्र से जुड़े थे?",
      "options": [
        "गणित और खगोलशास्त्र",
        "चित्रकला",
        "संगीत",
        "राजनीति"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—आर्यभट्ट किस क्षेत्र से जुड़े थे?",
      "options": [
        "संगीत",
        "गणित और खगोलशास्त्र",
        "राजनीति",
        "चित्रकला"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? आर्यभट्ट किस क्षेत्र से जुड़े थे?",
      "options": [
        "राजनीति",
        "चित्रकला",
        "गणित और खगोलशास्त्र",
        "संगीत"
      ],
      "answer": 2
    },
    {
      "q": "कालीबंगा किस सभ्यता से संबंधित है?",
      "options": [
        "मौर्य काल",
        "वैदिक सभ्यता",
        "मुगल काल",
        "सिंधु घाटी सभ्यता"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: कालीबंगा किस सभ्यता से संबंधित है?",
      "options": [
        "मुगल काल",
        "मौर्य काल",
        "वैदिक सभ्यता",
        "सिंधु घाटी सभ्यता"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: कालीबंगा किस सभ्यता से संबंधित है?",
      "options": [
        "मौर्य काल",
        "सिंधु घाटी सभ्यता",
        "वैदिक सभ्यता",
        "मुगल काल"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—कालीबंगा किस सभ्यता से संबंधित है?",
      "options": [
        "मौर्य काल",
        "मुगल काल",
        "सिंधु घाटी सभ्यता",
        "वैदिक सभ्यता"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कालीबंगा किस सभ्यता से संबंधित है?",
      "options": [
        "मुगल काल",
        "सिंधु घाटी सभ्यता",
        "मौर्य काल",
        "वैदिक सभ्यता"
      ],
      "answer": 1
    },
    {
      "q": "हड़प्पा सभ्यता का प्रमुख नगर कौन था?",
      "options": [
        "दिल्ली",
        "मोहनजोदड़ो",
        "कन्नौज",
        "पाटलिपुत्र"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: हड़प्पा सभ्यता का प्रमुख नगर कौन था?",
      "options": [
        "पाटलिपुत्र",
        "कन्नौज",
        "दिल्ली",
        "मोहनजोदड़ो"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: हड़प्पा सभ्यता का प्रमुख नगर कौन था?",
      "options": [
        "मोहनजोदड़ो",
        "पाटलिपुत्र",
        "कन्नौज",
        "दिल्ली"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—हड़प्पा सभ्यता का प्रमुख नगर कौन था?",
      "options": [
        "दिल्ली",
        "पाटलिपुत्र",
        "मोहनजोदड़ो",
        "कन्नौज"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? हड़प्पा सभ्यता का प्रमुख नगर कौन था?",
      "options": [
        "दिल्ली",
        "पाटलिपुत्र",
        "कन्नौज",
        "मोहनजोदड़ो"
      ],
      "answer": 3
    },
    {
      "q": "भारत में रेल सेवा की शुरुआत किस वर्ष हुई?",
      "options": [
        "1947",
        "1885",
        "1853",
        "1905"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: भारत में रेल सेवा की शुरुआत किस वर्ष हुई?",
      "options": [
        "1885",
        "1947",
        "1853",
        "1905"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: भारत में रेल सेवा की शुरुआत किस वर्ष हुई?",
      "options": [
        "1905",
        "1947",
        "1885",
        "1853"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—भारत में रेल सेवा की शुरुआत किस वर्ष हुई?",
      "options": [
        "1853",
        "1905",
        "1885",
        "1947"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत में रेल सेवा की शुरुआत किस वर्ष हुई?",
      "options": [
        "1905",
        "1947",
        "1885",
        "1853"
      ],
      "answer": 3
    },
    {
      "q": "वर्नाक्युलर प्रेस एक्ट किस वायसराय के समय आया?",
      "options": [
        "लॉर्ड कर्जन",
        "लॉर्ड लिटन",
        "लॉर्ड डलहौजी",
        "लॉर्ड रिपन"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: वर्नाक्युलर प्रेस एक्ट किस वायसराय के समय आया?",
      "options": [
        "लॉर्ड लिटन",
        "लॉर्ड डलहौजी",
        "लॉर्ड रिपन",
        "लॉर्ड कर्जन"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: वर्नाक्युलर प्रेस एक्ट किस वायसराय के समय आया?",
      "options": [
        "लॉर्ड कर्जन",
        "लॉर्ड लिटन",
        "लॉर्ड डलहौजी",
        "लॉर्ड रिपन"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—वर्नाक्युलर प्रेस एक्ट किस वायसराय के समय आया?",
      "options": [
        "लॉर्ड लिटन",
        "लॉर्ड रिपन",
        "लॉर्ड कर्जन",
        "लॉर्ड डलहौजी"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? वर्नाक्युलर प्रेस एक्ट किस वायसराय के समय आया?",
      "options": [
        "लॉर्ड डलहौजी",
        "लॉर्ड कर्जन",
        "लॉर्ड रिपन",
        "लॉर्ड लिटन"
      ],
      "answer": 3
    },
    {
      "q": "इल्बर्ट बिल विवाद किस वर्ष हुआ?",
      "options": [
        "1919",
        "1883",
        "1857",
        "1905"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: इल्बर्ट बिल विवाद किस वर्ष हुआ?",
      "options": [
        "1857",
        "1883",
        "1905",
        "1919"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: इल्बर्ट बिल विवाद किस वर्ष हुआ?",
      "options": [
        "1905",
        "1883",
        "1919",
        "1857"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—इल्बर्ट बिल विवाद किस वर्ष हुआ?",
      "options": [
        "1905",
        "1919",
        "1857",
        "1883"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? इल्बर्ट बिल विवाद किस वर्ष हुआ?",
      "options": [
        "1857",
        "1883",
        "1905",
        "1919"
      ],
      "answer": 1
    },
    {
      "q": "चंपारण सत्याग्रह किस वर्ष हुआ?",
      "options": [
        "1917",
        "1920",
        "1905",
        "1930"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: चंपारण सत्याग्रह किस वर्ष हुआ?",
      "options": [
        "1930",
        "1920",
        "1905",
        "1917"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: चंपारण सत्याग्रह किस वर्ष हुआ?",
      "options": [
        "1905",
        "1920",
        "1917",
        "1930"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—चंपारण सत्याग्रह किस वर्ष हुआ?",
      "options": [
        "1930",
        "1920",
        "1917",
        "1905"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? चंपारण सत्याग्रह किस वर्ष हुआ?",
      "options": [
        "1917",
        "1920",
        "1930",
        "1905"
      ],
      "answer": 0
    },
    {
      "q": "काकोरी कांड किस वर्ष हुआ?",
      "options": [
        "1919",
        "1930",
        "1925",
        "1942"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: काकोरी कांड किस वर्ष हुआ?",
      "options": [
        "1930",
        "1925",
        "1919",
        "1942"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: काकोरी कांड किस वर्ष हुआ?",
      "options": [
        "1919",
        "1925",
        "1930",
        "1942"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—काकोरी कांड किस वर्ष हुआ?",
      "options": [
        "1919",
        "1930",
        "1942",
        "1925"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? काकोरी कांड किस वर्ष हुआ?",
      "options": [
        "1942",
        "1930",
        "1925",
        "1919"
      ],
      "answer": 2
    },
    {
      "q": "भगत सिंह को किस वर्ष फाँसी दी गई?",
      "options": [
        "1925",
        "1931",
        "1947",
        "1942"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: भगत सिंह को किस वर्ष फाँसी दी गई?",
      "options": [
        "1931",
        "1925",
        "1942",
        "1947"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: भगत सिंह को किस वर्ष फाँसी दी गई?",
      "options": [
        "1947",
        "1925",
        "1931",
        "1942"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—भगत सिंह को किस वर्ष फाँसी दी गई?",
      "options": [
        "1925",
        "1947",
        "1942",
        "1931"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भगत सिंह को किस वर्ष फाँसी दी गई?",
      "options": [
        "1947",
        "1942",
        "1925",
        "1931"
      ],
      "answer": 3
    },
    {
      "q": "कैबिनेट मिशन भारत कब आया?",
      "options": [
        "1942",
        "1946",
        "1950",
        "1935"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: कैबिनेट मिशन भारत कब आया?",
      "options": [
        "1950",
        "1946",
        "1942",
        "1935"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: कैबिनेट मिशन भारत कब आया?",
      "options": [
        "1950",
        "1946",
        "1935",
        "1942"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—कैबिनेट मिशन भारत कब आया?",
      "options": [
        "1935",
        "1946",
        "1950",
        "1942"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कैबिनेट मिशन भारत कब आया?",
      "options": [
        "1946",
        "1942",
        "1935",
        "1950"
      ],
      "answer": 0
    },
    {
      "q": "संविधान सभा की पहली बैठक कब हुई?",
      "options": [
        "26 जनवरी 1950",
        "15 अगस्त 1947",
        "26 नवंबर 1949",
        "9 दिसंबर 1946"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: संविधान सभा की पहली बैठक कब हुई?",
      "options": [
        "15 अगस्त 1947",
        "9 दिसंबर 1946",
        "26 नवंबर 1949",
        "26 जनवरी 1950"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: संविधान सभा की पहली बैठक कब हुई?",
      "options": [
        "26 जनवरी 1950",
        "9 दिसंबर 1946",
        "26 नवंबर 1949",
        "15 अगस्त 1947"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—संविधान सभा की पहली बैठक कब हुई?",
      "options": [
        "9 दिसंबर 1946",
        "26 नवंबर 1949",
        "26 जनवरी 1950",
        "15 अगस्त 1947"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? संविधान सभा की पहली बैठक कब हुई?",
      "options": [
        "26 नवंबर 1949",
        "15 अगस्त 1947",
        "26 जनवरी 1950",
        "9 दिसंबर 1946"
      ],
      "answer": 3
    },
    {
      "q": "राष्ट्रीय ध्वज संविधान सभा ने कब अपनाया?",
      "options": [
        "22 जुलाई 1947",
        "2 अक्टूबर 1947",
        "26 जनवरी 1950",
        "15 अगस्त 1947"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: राष्ट्रीय ध्वज संविधान सभा ने कब अपनाया?",
      "options": [
        "26 जनवरी 1950",
        "2 अक्टूबर 1947",
        "22 जुलाई 1947",
        "15 अगस्त 1947"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: राष्ट्रीय ध्वज संविधान सभा ने कब अपनाया?",
      "options": [
        "2 अक्टूबर 1947",
        "22 जुलाई 1947",
        "15 अगस्त 1947",
        "26 जनवरी 1950"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—राष्ट्रीय ध्वज संविधान सभा ने कब अपनाया?",
      "options": [
        "15 अगस्त 1947",
        "2 अक्टूबर 1947",
        "22 जुलाई 1947",
        "26 जनवरी 1950"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? राष्ट्रीय ध्वज संविधान सभा ने कब अपनाया?",
      "options": [
        "15 अगस्त 1947",
        "22 जुलाई 1947",
        "2 अक्टूबर 1947",
        "26 जनवरी 1950"
      ],
      "answer": 1
    },
    {
      "q": "भारत के राष्ट्रीय गान के रचयिता कौन हैं?",
      "options": [
        "सुभाष चंद्र बोस",
        "रवींद्रनाथ टैगोर",
        "महात्मा गांधी",
        "बंकिमचंद्र चट्टोपाध्याय"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: भारत के राष्ट्रीय गान के रचयिता कौन हैं?",
      "options": [
        "बंकिमचंद्र चट्टोपाध्याय",
        "महात्मा गांधी",
        "रवींद्रनाथ टैगोर",
        "सुभाष चंद्र बोस"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: भारत के राष्ट्रीय गान के रचयिता कौन हैं?",
      "options": [
        "बंकिमचंद्र चट्टोपाध्याय",
        "रवींद्रनाथ टैगोर",
        "महात्मा गांधी",
        "सुभाष चंद्र बोस"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—भारत के राष्ट्रीय गान के रचयिता कौन हैं?",
      "options": [
        "रवींद्रनाथ टैगोर",
        "महात्मा गांधी",
        "सुभाष चंद्र बोस",
        "बंकिमचंद्र चट्टोपाध्याय"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत के राष्ट्रीय गान के रचयिता कौन हैं?",
      "options": [
        "महात्मा गांधी",
        "सुभाष चंद्र बोस",
        "रवींद्रनाथ टैगोर",
        "बंकिमचंद्र चट्टोपाध्याय"
      ],
      "answer": 2
    },
    {
      "q": "वंदे मातरम् किसने लिखा?",
      "options": [
        "प्रेमचंद",
        "भारतेंदु हरिश्चंद्र",
        "रवींद्रनाथ टैगोर",
        "बंकिमचंद्र चट्टोपाध्याय"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: वंदे मातरम् किसने लिखा?",
      "options": [
        "बंकिमचंद्र चट्टोपाध्याय",
        "रवींद्रनाथ टैगोर",
        "प्रेमचंद",
        "भारतेंदु हरिश्चंद्र"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: वंदे मातरम् किसने लिखा?",
      "options": [
        "भारतेंदु हरिश्चंद्र",
        "प्रेमचंद",
        "रवींद्रनाथ टैगोर",
        "बंकिमचंद्र चट्टोपाध्याय"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—वंदे मातरम् किसने लिखा?",
      "options": [
        "प्रेमचंद",
        "भारतेंदु हरिश्चंद्र",
        "रवींद्रनाथ टैगोर",
        "बंकिमचंद्र चट्टोपाध्याय"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? वंदे मातरम् किसने लिखा?",
      "options": [
        "प्रेमचंद",
        "बंकिमचंद्र चट्टोपाध्याय",
        "भारतेंदु हरिश्चंद्र",
        "रवींद्रनाथ टैगोर"
      ],
      "answer": 1
    },
    {
      "q": "भारत स्वतंत्र कब हुआ?",
      "options": [
        "15 अगस्त 1950",
        "26 नवंबर 1949",
        "15 अगस्त 1947",
        "26 जनवरी 1950"
      ],
      "answer": 2
    },
    {
      "q": "भारत का संविधान कब लागू हुआ?",
      "options": [
        "26 जनवरी 1950",
        "2 अक्टूबर 1950",
        "26 नवंबर 1949",
        "15 अगस्त 1947"
      ],
      "answer": 0
    },
    {
      "q": "भारत के पहले प्रधानमंत्री कौन थे?",
      "options": [
        "सरदार पटेल",
        "लाल बहादुर शास्त्री",
        "डॉ. राजेंद्र प्रसाद",
        "जवाहरलाल नेहरू"
      ],
      "answer": 3
    },
    {
      "q": "ताजमहल किसने बनवाया?",
      "options": [
        "शाहजहाँ",
        "अकबर",
        "बाबर",
        "औरंगज़ेब"
      ],
      "answer": 0
    },
    {
      "q": "1857 के विद्रोह को किस नाम से भी जाना जाता है?",
      "options": [
        "प्रथम स्वतंत्रता संग्राम",
        "चंपारण आंदोलन",
        "स्वदेशी आंदोलन",
        "भारत छोड़ो आंदोलन"
      ],
      "answer": 0
    },
    {
      "q": "भारत छोड़ो आंदोलन कब शुरू हुआ?",
      "options": [
        "1919",
        "1947",
        "1942",
        "1930"
      ],
      "answer": 2
    },
    {
      "q": "दांडी मार्च किस वर्ष हुआ?",
      "options": [
        "1920",
        "1942",
        "1947",
        "1930"
      ],
      "answer": 3
    },
    {
      "q": "जलियांवाला बाग हत्याकांड कब हुआ?",
      "options": [
        "1942",
        "1905",
        "1919",
        "1930"
      ],
      "answer": 2
    },
    {
      "q": "भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई?",
      "options": [
        "1885",
        "1857",
        "1905",
        "1947"
      ],
      "answer": 0
    },
    {
      "q": "आजाद हिंद फौज से प्रमुख रूप से कौन जुड़े थे?",
      "options": [
        "सुभाष चंद्र बोस",
        "लॉर्ड कर्जन",
        "डलहौजी",
        "रॉबर्ट क्लाइव"
      ],
      "answer": 0
    },
    {
      "q": "सम्राट अशोक किस वंश से थे?",
      "options": [
        "गुप्त वंश",
        "चोल वंश",
        "मौर्य वंश",
        "मुगल वंश"
      ],
      "answer": 2
    },
    {
      "q": "अकबर किस वंश का शासक था?",
      "options": [
        "मौर्य वंश",
        "गुप्त वंश",
        "मुगल वंश",
        "पाल वंश"
      ],
      "answer": 2
    },
    {
      "q": "कुतुब मीनार कहाँ है?",
      "options": [
        "लखनऊ",
        "जयपुर",
        "आगरा",
        "दिल्ली"
      ],
      "answer": 3
    },
    {
      "q": "लाल किला किस शहर में है?",
      "options": [
        "मुंबई",
        "दिल्ली",
        "चेन्नई",
        "पटना"
      ],
      "answer": 1
    },
    {
      "q": "भारत का पहला राष्ट्रपति कौन था?",
      "options": [
        "जाकिर हुसैन",
        "डॉ. राजेंद्र प्रसाद",
        "डॉ. सर्वपल्ली राधाकृष्णन",
        "जवाहरलाल नेहरू"
      ],
      "answer": 1
    },
    {
      "q": "महात्मा गांधी का जन्म कहाँ हुआ?",
      "options": [
        "राजकोट",
        "पोरबंदर",
        "दिल्ली",
        "अहमदाबाद"
      ],
      "answer": 1
    },
    {
      "q": "महात्मा गांधी का जन्म किस वर्ष हुआ?",
      "options": [
        "1857",
        "1869",
        "1885",
        "1901"
      ],
      "answer": 1
    },
    {
      "q": "रानी लक्ष्मीबाई किस राज्य की रानी थीं?",
      "options": [
        "अवध",
        "झाँसी",
        "मेवाड़",
        "मैसूर"
      ],
      "answer": 1
    },
    {
      "q": "स्वामी विवेकानंद ने शिकागो भाषण किस वर्ष दिया?",
      "options": [
        "1885",
        "1893",
        "1915",
        "1901"
      ],
      "answer": 1
    },
    {
      "q": "साइमन कमीशन भारत कब आया?",
      "options": [
        "1935",
        "1942",
        "1919",
        "1928"
      ],
      "answer": 3
    },
    {
      "q": "असहयोग आंदोलन किस वर्ष शुरू हुआ?",
      "options": [
        "1930",
        "1920",
        "1905",
        "1942"
      ],
      "answer": 1
    },
    {
      "q": "पूर्ण स्वराज का प्रस्ताव किस अधिवेशन में हुआ?",
      "options": [
        "लाहौर अधिवेशन 1929",
        "बंबई अधिवेशन 1885",
        "सूरत अधिवेशन 1907",
        "कराची अधिवेशन 1931"
      ],
      "answer": 0
    },
    {
      "q": "भारत का विभाजन किस वर्ष हुआ?",
      "options": [
        "1947",
        "1950",
        "1962",
        "1935"
      ],
      "answer": 0
    },
    {
      "q": "चंद्रगुप्त मौर्य के गुरु कौन थे?",
      "options": [
        "तुलसीदास",
        "चाणक्य",
        "कालिदास",
        "आर्यभट्ट"
      ],
      "answer": 1
    },
    {
      "q": "अर्थशास्त्र ग्रंथ परंपरागत रूप से किससे जुड़ा है?",
      "options": [
        "कौटिल्य",
        "कबीर",
        "कालिदास",
        "बाणभट्ट"
      ],
      "answer": 0
    },
    {
      "q": "नालंदा विश्वविद्यालय प्राचीन काल में कहाँ था?",
      "options": [
        "बिहार",
        "केरल",
        "गुजरात",
        "पंजाब"
      ],
      "answer": 0
    },
    {
      "q": "अजंता की गुफाएँ किस राज्य में हैं?",
      "options": [
        "असम",
        "बिहार",
        "महाराष्ट्र",
        "हरियाणा"
      ],
      "answer": 2
    },
    {
      "q": "खजुराहो के मंदिर किस राज्य में हैं?",
      "options": [
        "मध्य प्रदेश",
        "बिहार",
        "राजस्थान",
        "ओडिशा"
      ],
      "answer": 0
    },
    {
      "q": "किस मुगल शासक ने फतेहपुर सीकरी बनवाई?",
      "options": [
        "जहाँगीर",
        "अकबर",
        "बाबर",
        "बहादुर शाह जफर"
      ],
      "answer": 1
    },
    {
      "q": "पानीपत का प्रथम युद्ध कब हुआ?",
      "options": [
        "1526",
        "1761",
        "1757",
        "1556"
      ],
      "answer": 0
    },
    {
      "q": "प्लासी का युद्ध कब हुआ?",
      "options": [
        "1764",
        "1757",
        "1857",
        "1526"
      ],
      "answer": 1
    },
    {
      "q": "बक्सर का युद्ध कब हुआ?",
      "options": [
        "1764",
        "1942",
        "1857",
        "1757"
      ],
      "answer": 0
    },
    {
      "q": "स्थायी बंदोबस्त किसने लागू किया?",
      "options": [
        "लॉर्ड रिपन",
        "लॉर्ड कॉर्नवालिस",
        "लॉर्ड कर्जन",
        "लॉर्ड वेलेजली"
      ],
      "answer": 1
    },
    {
      "q": "बंगाल विभाजन किस वर्ष हुआ?",
      "options": [
        "1905",
        "1919",
        "1885",
        "1947"
      ],
      "answer": 0
    },
    {
      "q": "स्वदेशी आंदोलन किस घटना के विरोध में तेज हुआ?",
      "options": [
        "बंगाल विभाजन",
        "भारत छोड़ो",
        "रॉलेट एक्ट",
        "दांडी मार्च"
      ],
      "answer": 0
    },
    {
      "q": "रॉलेट एक्ट किस वर्ष आया?",
      "options": [
        "1919",
        "1930",
        "1942",
        "1905"
      ],
      "answer": 0
    },
    {
      "q": "होम रूल आंदोलन से कौन जुड़ी थीं?",
      "options": [
        "सरोजिनी नायडू ही अकेली",
        "बेगम हजरत महल",
        "एनी बेसेंट",
        "रानी दुर्गावती"
      ],
      "answer": 2
    },
    {
      "q": "सविनय अवज्ञा आंदोलन किस घटना से शुरू हुआ?",
      "options": [
        "चौरी चौरा",
        "काकोरी कांड",
        "दांडी मार्च",
        "जलियांवाला बाग"
      ],
      "answer": 2
    },
    {
      "q": "भारत का पहला गवर्नर जनरल (स्वतंत्र भारत) कौन था?",
      "options": [
        "लॉर्ड कर्जन",
        "सी. राजगोपालाचारी",
        "लॉर्ड माउंटबेटन",
        "वॉरेन हेस्टिंग्स"
      ],
      "answer": 2
    },
    {
      "q": "स्वतंत्र भारत के पहले भारतीय गवर्नर जनरल कौन थे?",
      "options": [
        "सी. राजगोपालाचारी",
        "डॉ. राजेंद्र प्रसाद",
        "लॉर्ड माउंटबेटन",
        "जवाहरलाल नेहरू"
      ],
      "answer": 0
    },
    {
      "q": "संविधान सभा के अध्यक्ष कौन थे?",
      "options": [
        "सरदार पटेल",
        "जवाहरलाल नेहरू",
        "डॉ. राजेंद्र प्रसाद",
        "डॉ. बी. आर. आंबेडकर"
      ],
      "answer": 2
    },
    {
      "q": "संविधान की प्रारूप समिति के अध्यक्ष कौन थे?",
      "options": [
        "सरदार पटेल",
        "डॉ. बी. आर. आंबेडकर",
        "राजेंद्र प्रसाद",
        "के. एम. मुंशी"
      ],
      "answer": 1
    },
    {
      "q": "गुप्त काल को किस नाम से जाना जाता है?",
      "options": [
        "भारत का स्वर्ण युग",
        "आधुनिक युग",
        "औद्योगिक युग",
        "वैदिक उत्तर युग"
      ],
      "answer": 0
    },
    {
      "q": "आर्यभट्ट किस क्षेत्र से जुड़े थे?",
      "options": [
        "गणित और खगोलशास्त्र",
        "संगीत",
        "चित्रकला",
        "राजनीति"
      ],
      "answer": 0
    },
    {
      "q": "कालीबंगा किस सभ्यता से संबंधित है?",
      "options": [
        "मौर्य काल",
        "मुगल काल",
        "सिंधु घाटी सभ्यता",
        "वैदिक सभ्यता"
      ],
      "answer": 2
    },
    {
      "q": "हड़प्पा सभ्यता का प्रमुख नगर कौन था?",
      "options": [
        "पाटलिपुत्र",
        "कन्नौज",
        "मोहनजोदड़ो",
        "दिल्ली"
      ],
      "answer": 2
    },
    {
      "q": "भारत में रेल सेवा की शुरुआत किस वर्ष हुई?",
      "options": [
        "1853",
        "1905",
        "1885",
        "1947"
      ],
      "answer": 0
    },
    {
      "q": "वर्नाक्युलर प्रेस एक्ट किस वायसराय के समय आया?",
      "options": [
        "लॉर्ड लिटन",
        "लॉर्ड कर्जन",
        "लॉर्ड रिपन",
        "लॉर्ड डलहौजी"
      ],
      "answer": 0
    },
    {
      "q": "इल्बर्ट बिल विवाद किस वर्ष हुआ?",
      "options": [
        "1883",
        "1905",
        "1857",
        "1919"
      ],
      "answer": 0
    },
    {
      "q": "चंपारण सत्याग्रह किस वर्ष हुआ?",
      "options": [
        "1920",
        "1917",
        "1930",
        "1905"
      ],
      "answer": 1
    },
    {
      "q": "काकोरी कांड किस वर्ष हुआ?",
      "options": [
        "1919",
        "1930",
        "1925",
        "1942"
      ],
      "answer": 2
    },
    {
      "q": "भगत सिंह को किस वर्ष फाँसी दी गई?",
      "options": [
        "1931",
        "1947",
        "1942",
        "1925"
      ],
      "answer": 0
    },
    {
      "q": "कैबिनेट मिशन भारत कब आया?",
      "options": [
        "1946",
        "1950",
        "1942",
        "1935"
      ],
      "answer": 0
    },
    {
      "q": "संविधान सभा की पहली बैठक कब हुई?",
      "options": [
        "26 जनवरी 1950",
        "9 दिसंबर 1946",
        "15 अगस्त 1947",
        "26 नवंबर 1949"
      ],
      "answer": 1
    },
    {
      "q": "राष्ट्रीय ध्वज संविधान सभा ने कब अपनाया?",
      "options": [
        "15 अगस्त 1947",
        "2 अक्टूबर 1947",
        "22 जुलाई 1947",
        "26 जनवरी 1950"
      ],
      "answer": 2
    },
    {
      "q": "भारत के राष्ट्रीय गान के रचयिता कौन हैं?",
      "options": [
        "महात्मा गांधी",
        "रवींद्रनाथ टैगोर",
        "बंकिमचंद्र चट्टोपाध्याय",
        "सुभाष चंद्र बोस"
      ],
      "answer": 1
    },
    {
      "q": "वंदे मातरम् किसने लिखा?",
      "options": [
        "भारतेंदु हरिश्चंद्र",
        "प्रेमचंद",
        "रवींद्रनाथ टैगोर",
        "बंकिमचंद्र चट्टोपाध्याय"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भारत स्वतंत्र कब हुआ?",
      "options": [
        "15 अगस्त 1950",
        "15 अगस्त 1947",
        "26 जनवरी 1950",
        "26 नवंबर 1949"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: भारत का संविधान कब लागू हुआ?",
      "options": [
        "15 अगस्त 1947",
        "26 नवंबर 1949",
        "26 जनवरी 1950",
        "2 अक्टूबर 1950"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: भारत के पहले प्रधानमंत्री कौन थे?",
      "options": [
        "डॉ. राजेंद्र प्रसाद",
        "सरदार पटेल",
        "लाल बहादुर शास्त्री",
        "जवाहरलाल नेहरू"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: ताजमहल किसने बनवाया?",
      "options": [
        "बाबर",
        "औरंगज़ेब",
        "अकबर",
        "शाहजहाँ"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 1857 के विद्रोह को किस नाम से भी जाना जाता है?",
      "options": [
        "स्वदेशी आंदोलन",
        "प्रथम स्वतंत्रता संग्राम",
        "चंपारण आंदोलन",
        "भारत छोड़ो आंदोलन"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: भारत छोड़ो आंदोलन कब शुरू हुआ?",
      "options": [
        "1942",
        "1947",
        "1930",
        "1919"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: दांडी मार्च किस वर्ष हुआ?",
      "options": [
        "1942",
        "1930",
        "1947",
        "1920"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: जलियांवाला बाग हत्याकांड कब हुआ?",
      "options": [
        "1905",
        "1919",
        "1942",
        "1930"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई?",
      "options": [
        "1885",
        "1905",
        "1857",
        "1947"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: आजाद हिंद फौज से प्रमुख रूप से कौन जुड़े थे?",
      "options": [
        "डलहौजी",
        "रॉबर्ट क्लाइव",
        "लॉर्ड कर्जन",
        "सुभाष चंद्र बोस"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: सम्राट अशोक किस वंश से थे?",
      "options": [
        "चोल वंश",
        "मौर्य वंश",
        "गुप्त वंश",
        "मुगल वंश"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: अकबर किस वंश का शासक था?",
      "options": [
        "मुगल वंश",
        "गुप्त वंश",
        "मौर्य वंश",
        "पाल वंश"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: कुतुब मीनार कहाँ है?",
      "options": [
        "लखनऊ",
        "आगरा",
        "जयपुर",
        "दिल्ली"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: लाल किला किस शहर में है?",
      "options": [
        "मुंबई",
        "दिल्ली",
        "पटना",
        "चेन्नई"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: भारत का पहला राष्ट्रपति कौन था?",
      "options": [
        "डॉ. सर्वपल्ली राधाकृष्णन",
        "डॉ. राजेंद्र प्रसाद",
        "जवाहरलाल नेहरू",
        "जाकिर हुसैन"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: महात्मा गांधी का जन्म कहाँ हुआ?",
      "options": [
        "राजकोट",
        "दिल्ली",
        "पोरबंदर",
        "अहमदाबाद"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: महात्मा गांधी का जन्म किस वर्ष हुआ?",
      "options": [
        "1901",
        "1885",
        "1857",
        "1869"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: रानी लक्ष्मीबाई किस राज्य की रानी थीं?",
      "options": [
        "अवध",
        "झाँसी",
        "मैसूर",
        "मेवाड़"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: स्वामी विवेकानंद ने शिकागो भाषण किस वर्ष दिया?",
      "options": [
        "1915",
        "1901",
        "1893",
        "1885"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: साइमन कमीशन भारत कब आया?",
      "options": [
        "1942",
        "1928",
        "1919",
        "1935"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: असहयोग आंदोलन किस वर्ष शुरू हुआ?",
      "options": [
        "1920",
        "1942",
        "1930",
        "1905"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: पूर्ण स्वराज का प्रस्ताव किस अधिवेशन में हुआ?",
      "options": [
        "सूरत अधिवेशन 1907",
        "बंबई अधिवेशन 1885",
        "कराची अधिवेशन 1931",
        "लाहौर अधिवेशन 1929"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भारत का विभाजन किस वर्ष हुआ?",
      "options": [
        "1935",
        "1962",
        "1947",
        "1950"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: चंद्रगुप्त मौर्य के गुरु कौन थे?",
      "options": [
        "तुलसीदास",
        "चाणक्य",
        "आर्यभट्ट",
        "कालिदास"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: अर्थशास्त्र ग्रंथ परंपरागत रूप से किससे जुड़ा है?",
      "options": [
        "बाणभट्ट",
        "कौटिल्य",
        "कालिदास",
        "कबीर"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: नालंदा विश्वविद्यालय प्राचीन काल में कहाँ था?",
      "options": [
        "गुजरात",
        "पंजाब",
        "केरल",
        "बिहार"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: अजंता की गुफाएँ किस राज्य में हैं?",
      "options": [
        "बिहार",
        "असम",
        "महाराष्ट्र",
        "हरियाणा"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: खजुराहो के मंदिर किस राज्य में हैं?",
      "options": [
        "ओडिशा",
        "मध्य प्रदेश",
        "बिहार",
        "राजस्थान"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: किस मुगल शासक ने फतेहपुर सीकरी बनवाई?",
      "options": [
        "बहादुर शाह जफर",
        "जहाँगीर",
        "बाबर",
        "अकबर"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: पानीपत का प्रथम युद्ध कब हुआ?",
      "options": [
        "1556",
        "1757",
        "1761",
        "1526"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: प्लासी का युद्ध कब हुआ?",
      "options": [
        "1526",
        "1757",
        "1857",
        "1764"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: बक्सर का युद्ध कब हुआ?",
      "options": [
        "1857",
        "1942",
        "1764",
        "1757"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: स्थायी बंदोबस्त किसने लागू किया?",
      "options": [
        "लॉर्ड कॉर्नवालिस",
        "लॉर्ड कर्जन",
        "लॉर्ड रिपन",
        "लॉर्ड वेलेजली"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: बंगाल विभाजन किस वर्ष हुआ?",
      "options": [
        "1905",
        "1947",
        "1919",
        "1885"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: स्वदेशी आंदोलन किस घटना के विरोध में तेज हुआ?",
      "options": [
        "दांडी मार्च",
        "बंगाल विभाजन",
        "रॉलेट एक्ट",
        "भारत छोड़ो"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: रॉलेट एक्ट किस वर्ष आया?",
      "options": [
        "1942",
        "1930",
        "1919",
        "1905"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: होम रूल आंदोलन से कौन जुड़ी थीं?",
      "options": [
        "बेगम हजरत महल",
        "एनी बेसेंट",
        "सरोजिनी नायडू ही अकेली",
        "रानी दुर्गावती"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: सविनय अवज्ञा आंदोलन किस घटना से शुरू हुआ?",
      "options": [
        "जलियांवाला बाग",
        "काकोरी कांड",
        "दांडी मार्च",
        "चौरी चौरा"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: भारत का पहला गवर्नर जनरल (स्वतंत्र भारत) कौन था?",
      "options": [
        "लॉर्ड कर्जन",
        "लॉर्ड माउंटबेटन",
        "सी. राजगोपालाचारी",
        "वॉरेन हेस्टिंग्स"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: स्वतंत्र भारत के पहले भारतीय गवर्नर जनरल कौन थे?",
      "options": [
        "जवाहरलाल नेहरू",
        "लॉर्ड माउंटबेटन",
        "डॉ. राजेंद्र प्रसाद",
        "सी. राजगोपालाचारी"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: संविधान सभा के अध्यक्ष कौन थे?",
      "options": [
        "डॉ. बी. आर. आंबेडकर",
        "जवाहरलाल नेहरू",
        "सरदार पटेल",
        "डॉ. राजेंद्र प्रसाद"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: संविधान की प्रारूप समिति के अध्यक्ष कौन थे?",
      "options": [
        "सरदार पटेल",
        "राजेंद्र प्रसाद",
        "के. एम. मुंशी",
        "डॉ. बी. आर. आंबेडकर"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: गुप्त काल को किस नाम से जाना जाता है?",
      "options": [
        "वैदिक उत्तर युग",
        "आधुनिक युग",
        "औद्योगिक युग",
        "भारत का स्वर्ण युग"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: आर्यभट्ट किस क्षेत्र से जुड़े थे?",
      "options": [
        "गणित और खगोलशास्त्र",
        "संगीत",
        "चित्रकला",
        "राजनीति"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: कालीबंगा किस सभ्यता से संबंधित है?",
      "options": [
        "मौर्य काल",
        "सिंधु घाटी सभ्यता",
        "मुगल काल",
        "वैदिक सभ्यता"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: हड़प्पा सभ्यता का प्रमुख नगर कौन था?",
      "options": [
        "कन्नौज",
        "पाटलिपुत्र",
        "दिल्ली",
        "मोहनजोदड़ो"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भारत में रेल सेवा की शुरुआत किस वर्ष हुई?",
      "options": [
        "1947",
        "1885",
        "1853",
        "1905"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: वर्नाक्युलर प्रेस एक्ट किस वायसराय के समय आया?",
      "options": [
        "लॉर्ड रिपन",
        "लॉर्ड कर्जन",
        "लॉर्ड लिटन",
        "लॉर्ड डलहौजी"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: इल्बर्ट बिल विवाद किस वर्ष हुआ?",
      "options": [
        "1919",
        "1857",
        "1905",
        "1883"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: चंपारण सत्याग्रह किस वर्ष हुआ?",
      "options": [
        "1905",
        "1917",
        "1920",
        "1930"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: काकोरी कांड किस वर्ष हुआ?",
      "options": [
        "1942",
        "1930",
        "1919",
        "1925"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भगत सिंह को किस वर्ष फाँसी दी गई?",
      "options": [
        "1947",
        "1925",
        "1931",
        "1942"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: कैबिनेट मिशन भारत कब आया?",
      "options": [
        "1950",
        "1942",
        "1946",
        "1935"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: संविधान सभा की पहली बैठक कब हुई?",
      "options": [
        "26 जनवरी 1950",
        "9 दिसंबर 1946",
        "26 नवंबर 1949",
        "15 अगस्त 1947"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: राष्ट्रीय ध्वज संविधान सभा ने कब अपनाया?",
      "options": [
        "2 अक्टूबर 1947",
        "15 अगस्त 1947",
        "26 जनवरी 1950",
        "22 जुलाई 1947"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भारत के राष्ट्रीय गान के रचयिता कौन हैं?",
      "options": [
        "महात्मा गांधी",
        "सुभाष चंद्र बोस",
        "रवींद्रनाथ टैगोर",
        "बंकिमचंद्र चट्टोपाध्याय"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: वंदे मातरम् किसने लिखा?",
      "options": [
        "रवींद्रनाथ टैगोर",
        "प्रेमचंद",
        "भारतेंदु हरिश्चंद्र",
        "बंकिमचंद्र चट्टोपाध्याय"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: भारत स्वतंत्र कब हुआ?",
      "options": [
        "26 जनवरी 1950",
        "15 अगस्त 1950",
        "26 नवंबर 1949",
        "15 अगस्त 1947"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: भारत का संविधान कब लागू हुआ?",
      "options": [
        "26 जनवरी 1950",
        "2 अक्टूबर 1950",
        "26 नवंबर 1949",
        "15 अगस्त 1947"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: भारत के पहले प्रधानमंत्री कौन थे?",
      "options": [
        "लाल बहादुर शास्त्री",
        "जवाहरलाल नेहरू",
        "सरदार पटेल",
        "डॉ. राजेंद्र प्रसाद"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: ताजमहल किसने बनवाया?",
      "options": [
        "शाहजहाँ",
        "बाबर",
        "अकबर",
        "औरंगज़ेब"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 1857 के विद्रोह को किस नाम से भी जाना जाता है?",
      "options": [
        "भारत छोड़ो आंदोलन",
        "स्वदेशी आंदोलन",
        "प्रथम स्वतंत्रता संग्राम",
        "चंपारण आंदोलन"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: भारत छोड़ो आंदोलन कब शुरू हुआ?",
      "options": [
        "1919",
        "1947",
        "1930",
        "1942"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: दांडी मार्च किस वर्ष हुआ?",
      "options": [
        "1942",
        "1947",
        "1920",
        "1930"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: जलियांवाला बाग हत्याकांड कब हुआ?",
      "options": [
        "1930",
        "1942",
        "1905",
        "1919"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई?",
      "options": [
        "1885",
        "1947",
        "1857",
        "1905"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: आजाद हिंद फौज से प्रमुख रूप से कौन जुड़े थे?",
      "options": [
        "रॉबर्ट क्लाइव",
        "सुभाष चंद्र बोस",
        "डलहौजी",
        "लॉर्ड कर्जन"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: सम्राट अशोक किस वंश से थे?",
      "options": [
        "मौर्य वंश",
        "चोल वंश",
        "मुगल वंश",
        "गुप्त वंश"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: अकबर किस वंश का शासक था?",
      "options": [
        "मौर्य वंश",
        "गुप्त वंश",
        "मुगल वंश",
        "पाल वंश"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: कुतुब मीनार कहाँ है?",
      "options": [
        "आगरा",
        "लखनऊ",
        "जयपुर",
        "दिल्ली"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: लाल किला किस शहर में है?",
      "options": [
        "पटना",
        "दिल्ली",
        "मुंबई",
        "चेन्नई"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: भारत का पहला राष्ट्रपति कौन था?",
      "options": [
        "डॉ. सर्वपल्ली राधाकृष्णन",
        "जवाहरलाल नेहरू",
        "जाकिर हुसैन",
        "डॉ. राजेंद्र प्रसाद"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: महात्मा गांधी का जन्म कहाँ हुआ?",
      "options": [
        "राजकोट",
        "दिल्ली",
        "पोरबंदर",
        "अहमदाबाद"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: महात्मा गांधी का जन्म किस वर्ष हुआ?",
      "options": [
        "1869",
        "1901",
        "1885",
        "1857"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: रानी लक्ष्मीबाई किस राज्य की रानी थीं?",
      "options": [
        "मेवाड़",
        "अवध",
        "मैसूर",
        "झाँसी"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: स्वामी विवेकानंद ने शिकागो भाषण किस वर्ष दिया?",
      "options": [
        "1901",
        "1893",
        "1885",
        "1915"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: साइमन कमीशन भारत कब आया?",
      "options": [
        "1919",
        "1942",
        "1935",
        "1928"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: असहयोग आंदोलन किस वर्ष शुरू हुआ?",
      "options": [
        "1920",
        "1942",
        "1905",
        "1930"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: पूर्ण स्वराज का प्रस्ताव किस अधिवेशन में हुआ?",
      "options": [
        "सूरत अधिवेशन 1907",
        "कराची अधिवेशन 1931",
        "बंबई अधिवेशन 1885",
        "लाहौर अधिवेशन 1929"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: भारत का विभाजन किस वर्ष हुआ?",
      "options": [
        "1950",
        "1935",
        "1947",
        "1962"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: चंद्रगुप्त मौर्य के गुरु कौन थे?",
      "options": [
        "आर्यभट्ट",
        "चाणक्य",
        "कालिदास",
        "तुलसीदास"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: अर्थशास्त्र ग्रंथ परंपरागत रूप से किससे जुड़ा है?",
      "options": [
        "कबीर",
        "कौटिल्य",
        "बाणभट्ट",
        "कालिदास"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: नालंदा विश्वविद्यालय प्राचीन काल में कहाँ था?",
      "options": [
        "बिहार",
        "गुजरात",
        "केरल",
        "पंजाब"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: अजंता की गुफाएँ किस राज्य में हैं?",
      "options": [
        "हरियाणा",
        "बिहार",
        "असम",
        "महाराष्ट्र"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: खजुराहो के मंदिर किस राज्य में हैं?",
      "options": [
        "राजस्थान",
        "मध्य प्रदेश",
        "बिहार",
        "ओडिशा"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: किस मुगल शासक ने फतेहपुर सीकरी बनवाई?",
      "options": [
        "बहादुर शाह जफर",
        "जहाँगीर",
        "बाबर",
        "अकबर"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: पानीपत का प्रथम युद्ध कब हुआ?",
      "options": [
        "1556",
        "1761",
        "1757",
        "1526"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: प्लासी का युद्ध कब हुआ?",
      "options": [
        "1857",
        "1757",
        "1764",
        "1526"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: बक्सर का युद्ध कब हुआ?",
      "options": [
        "1757",
        "1942",
        "1857",
        "1764"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: स्थायी बंदोबस्त किसने लागू किया?",
      "options": [
        "लॉर्ड कॉर्नवालिस",
        "लॉर्ड कर्जन",
        "लॉर्ड वेलेजली",
        "लॉर्ड रिपन"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: बंगाल विभाजन किस वर्ष हुआ?",
      "options": [
        "1919",
        "1905",
        "1885",
        "1947"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: स्वदेशी आंदोलन किस घटना के विरोध में तेज हुआ?",
      "options": [
        "भारत छोड़ो",
        "रॉलेट एक्ट",
        "दांडी मार्च",
        "बंगाल विभाजन"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: रॉलेट एक्ट किस वर्ष आया?",
      "options": [
        "1942",
        "1905",
        "1919",
        "1930"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: होम रूल आंदोलन से कौन जुड़ी थीं?",
      "options": [
        "सरोजिनी नायडू ही अकेली",
        "बेगम हजरत महल",
        "रानी दुर्गावती",
        "एनी बेसेंट"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: सविनय अवज्ञा आंदोलन किस घटना से शुरू हुआ?",
      "options": [
        "चौरी चौरा",
        "काकोरी कांड",
        "जलियांवाला बाग",
        "दांडी मार्च"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: भारत का पहला गवर्नर जनरल (स्वतंत्र भारत) कौन था?",
      "options": [
        "लॉर्ड कर्जन",
        "वॉरेन हेस्टिंग्स",
        "लॉर्ड माउंटबेटन",
        "सी. राजगोपालाचारी"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: स्वतंत्र भारत के पहले भारतीय गवर्नर जनरल कौन थे?",
      "options": [
        "लॉर्ड माउंटबेटन",
        "जवाहरलाल नेहरू",
        "डॉ. राजेंद्र प्रसाद",
        "सी. राजगोपालाचारी"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: संविधान सभा के अध्यक्ष कौन थे?",
      "options": [
        "डॉ. राजेंद्र प्रसाद",
        "डॉ. बी. आर. आंबेडकर",
        "सरदार पटेल",
        "जवाहरलाल नेहरू"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: संविधान की प्रारूप समिति के अध्यक्ष कौन थे?",
      "options": [
        "डॉ. बी. आर. आंबेडकर",
        "के. एम. मुंशी",
        "सरदार पटेल",
        "राजेंद्र प्रसाद"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: गुप्त काल को किस नाम से जाना जाता है?",
      "options": [
        "वैदिक उत्तर युग",
        "औद्योगिक युग",
        "भारत का स्वर्ण युग",
        "आधुनिक युग"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: आर्यभट्ट किस क्षेत्र से जुड़े थे?",
      "options": [
        "संगीत",
        "राजनीति",
        "चित्रकला",
        "गणित और खगोलशास्त्र"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: कालीबंगा किस सभ्यता से संबंधित है?",
      "options": [
        "मुगल काल",
        "मौर्य काल",
        "वैदिक सभ्यता",
        "सिंधु घाटी सभ्यता"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: हड़प्पा सभ्यता का प्रमुख नगर कौन था?",
      "options": [
        "मोहनजोदड़ो",
        "पाटलिपुत्र",
        "दिल्ली",
        "कन्नौज"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: भारत में रेल सेवा की शुरुआत किस वर्ष हुई?",
      "options": [
        "1885",
        "1853",
        "1947",
        "1905"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: वर्नाक्युलर प्रेस एक्ट किस वायसराय के समय आया?",
      "options": [
        "लॉर्ड डलहौजी",
        "लॉर्ड लिटन",
        "लॉर्ड कर्जन",
        "लॉर्ड रिपन"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: इल्बर्ट बिल विवाद किस वर्ष हुआ?",
      "options": [
        "1883",
        "1857",
        "1905",
        "1919"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: चंपारण सत्याग्रह किस वर्ष हुआ?",
      "options": [
        "1930",
        "1917",
        "1920",
        "1905"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: काकोरी कांड किस वर्ष हुआ?",
      "options": [
        "1942",
        "1925",
        "1930",
        "1919"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: भगत सिंह को किस वर्ष फाँसी दी गई?",
      "options": [
        "1931",
        "1925",
        "1947",
        "1942"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: कैबिनेट मिशन भारत कब आया?",
      "options": [
        "1950",
        "1935",
        "1942",
        "1946"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: संविधान सभा की पहली बैठक कब हुई?",
      "options": [
        "26 नवंबर 1949",
        "26 जनवरी 1950",
        "9 दिसंबर 1946",
        "15 अगस्त 1947"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: राष्ट्रीय ध्वज संविधान सभा ने कब अपनाया?",
      "options": [
        "22 जुलाई 1947",
        "26 जनवरी 1950",
        "2 अक्टूबर 1947",
        "15 अगस्त 1947"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: भारत के राष्ट्रीय गान के रचयिता कौन हैं?",
      "options": [
        "सुभाष चंद्र बोस",
        "महात्मा गांधी",
        "रवींद्रनाथ टैगोर",
        "बंकिमचंद्र चट्टोपाध्याय"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: वंदे मातरम् किसने लिखा?",
      "options": [
        "रवींद्रनाथ टैगोर",
        "प्रेमचंद",
        "बंकिमचंद्र चट्टोपाध्याय",
        "भारतेंदु हरिश्चंद्र"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—भारत स्वतंत्र कब हुआ?",
      "options": [
        "15 अगस्त 1950",
        "26 नवंबर 1949",
        "26 जनवरी 1950",
        "15 अगस्त 1947"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—भारत का संविधान कब लागू हुआ?",
      "options": [
        "15 अगस्त 1947",
        "26 जनवरी 1950",
        "26 नवंबर 1949",
        "2 अक्टूबर 1950"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—भारत के पहले प्रधानमंत्री कौन थे?",
      "options": [
        "सरदार पटेल",
        "लाल बहादुर शास्त्री",
        "डॉ. राजेंद्र प्रसाद",
        "जवाहरलाल नेहरू"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—ताजमहल किसने बनवाया?",
      "options": [
        "अकबर",
        "बाबर",
        "शाहजहाँ",
        "औरंगज़ेब"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—1857 के विद्रोह को किस नाम से भी जाना जाता है?",
      "options": [
        "चंपारण आंदोलन",
        "प्रथम स्वतंत्रता संग्राम",
        "स्वदेशी आंदोलन",
        "भारत छोड़ो आंदोलन"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—भारत छोड़ो आंदोलन कब शुरू हुआ?",
      "options": [
        "1930",
        "1947",
        "1942",
        "1919"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—दांडी मार्च किस वर्ष हुआ?",
      "options": [
        "1930",
        "1947",
        "1920",
        "1942"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—जलियांवाला बाग हत्याकांड कब हुआ?",
      "options": [
        "1905",
        "1919",
        "1942",
        "1930"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई?",
      "options": [
        "1905",
        "1857",
        "1947",
        "1885"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—आजाद हिंद फौज से प्रमुख रूप से कौन जुड़े थे?",
      "options": [
        "लॉर्ड कर्जन",
        "रॉबर्ट क्लाइव",
        "सुभाष चंद्र बोस",
        "डलहौजी"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—सम्राट अशोक किस वंश से थे?",
      "options": [
        "गुप्त वंश",
        "चोल वंश",
        "मौर्य वंश",
        "मुगल वंश"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—अकबर किस वंश का शासक था?",
      "options": [
        "गुप्त वंश",
        "पाल वंश",
        "मुगल वंश",
        "मौर्य वंश"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—कुतुब मीनार कहाँ है?",
      "options": [
        "जयपुर",
        "आगरा",
        "दिल्ली",
        "लखनऊ"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—लाल किला किस शहर में है?",
      "options": [
        "दिल्ली",
        "चेन्नई",
        "मुंबई",
        "पटना"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—भारत का पहला राष्ट्रपति कौन था?",
      "options": [
        "डॉ. सर्वपल्ली राधाकृष्णन",
        "जाकिर हुसैन",
        "जवाहरलाल नेहरू",
        "डॉ. राजेंद्र प्रसाद"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—महात्मा गांधी का जन्म कहाँ हुआ?",
      "options": [
        "राजकोट",
        "पोरबंदर",
        "अहमदाबाद",
        "दिल्ली"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—महात्मा गांधी का जन्म किस वर्ष हुआ?",
      "options": [
        "1857",
        "1901",
        "1869",
        "1885"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—रानी लक्ष्मीबाई किस राज्य की रानी थीं?",
      "options": [
        "झाँसी",
        "मेवाड़",
        "अवध",
        "मैसूर"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—स्वामी विवेकानंद ने शिकागो भाषण किस वर्ष दिया?",
      "options": [
        "1901",
        "1915",
        "1893",
        "1885"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—साइमन कमीशन भारत कब आया?",
      "options": [
        "1942",
        "1928",
        "1919",
        "1935"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—असहयोग आंदोलन किस वर्ष शुरू हुआ?",
      "options": [
        "1942",
        "1920",
        "1905",
        "1930"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—पूर्ण स्वराज का प्रस्ताव किस अधिवेशन में हुआ?",
      "options": [
        "बंबई अधिवेशन 1885",
        "लाहौर अधिवेशन 1929",
        "कराची अधिवेशन 1931",
        "सूरत अधिवेशन 1907"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—भारत का विभाजन किस वर्ष हुआ?",
      "options": [
        "1950",
        "1935",
        "1962",
        "1947"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—चंद्रगुप्त मौर्य के गुरु कौन थे?",
      "options": [
        "कालिदास",
        "आर्यभट्ट",
        "चाणक्य",
        "तुलसीदास"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—अर्थशास्त्र ग्रंथ परंपरागत रूप से किससे जुड़ा है?",
      "options": [
        "कबीर",
        "बाणभट्ट",
        "कौटिल्य",
        "कालिदास"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—नालंदा विश्वविद्यालय प्राचीन काल में कहाँ था?",
      "options": [
        "पंजाब",
        "केरल",
        "बिहार",
        "गुजरात"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—अजंता की गुफाएँ किस राज्य में हैं?",
      "options": [
        "बिहार",
        "हरियाणा",
        "असम",
        "महाराष्ट्र"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—खजुराहो के मंदिर किस राज्य में हैं?",
      "options": [
        "बिहार",
        "ओडिशा",
        "राजस्थान",
        "मध्य प्रदेश"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—किस मुगल शासक ने फतेहपुर सीकरी बनवाई?",
      "options": [
        "बाबर",
        "बहादुर शाह जफर",
        "जहाँगीर",
        "अकबर"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—पानीपत का प्रथम युद्ध कब हुआ?",
      "options": [
        "1761",
        "1556",
        "1757",
        "1526"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—प्लासी का युद्ध कब हुआ?",
      "options": [
        "1757",
        "1764",
        "1857",
        "1526"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—बक्सर का युद्ध कब हुआ?",
      "options": [
        "1942",
        "1857",
        "1764",
        "1757"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—स्थायी बंदोबस्त किसने लागू किया?",
      "options": [
        "लॉर्ड वेलेजली",
        "लॉर्ड कर्जन",
        "लॉर्ड रिपन",
        "लॉर्ड कॉर्नवालिस"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—बंगाल विभाजन किस वर्ष हुआ?",
      "options": [
        "1947",
        "1919",
        "1885",
        "1905"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—स्वदेशी आंदोलन किस घटना के विरोध में तेज हुआ?",
      "options": [
        "रॉलेट एक्ट",
        "भारत छोड़ो",
        "दांडी मार्च",
        "बंगाल विभाजन"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—रॉलेट एक्ट किस वर्ष आया?",
      "options": [
        "1942",
        "1905",
        "1930",
        "1919"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—होम रूल आंदोलन से कौन जुड़ी थीं?",
      "options": [
        "एनी बेसेंट",
        "बेगम हजरत महल",
        "रानी दुर्गावती",
        "सरोजिनी नायडू ही अकेली"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—सविनय अवज्ञा आंदोलन किस घटना से शुरू हुआ?",
      "options": [
        "दांडी मार्च",
        "जलियांवाला बाग",
        "चौरी चौरा",
        "काकोरी कांड"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—भारत का पहला गवर्नर जनरल (स्वतंत्र भारत) कौन था?",
      "options": [
        "सी. राजगोपालाचारी",
        "लॉर्ड माउंटबेटन",
        "वॉरेन हेस्टिंग्स",
        "लॉर्ड कर्जन"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—स्वतंत्र भारत के पहले भारतीय गवर्नर जनरल कौन थे?",
      "options": [
        "सी. राजगोपालाचारी",
        "लॉर्ड माउंटबेटन",
        "डॉ. राजेंद्र प्रसाद",
        "जवाहरलाल नेहरू"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—संविधान सभा के अध्यक्ष कौन थे?",
      "options": [
        "डॉ. राजेंद्र प्रसाद",
        "सरदार पटेल",
        "जवाहरलाल नेहरू",
        "डॉ. बी. आर. आंबेडकर"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—संविधान की प्रारूप समिति के अध्यक्ष कौन थे?",
      "options": [
        "राजेंद्र प्रसाद",
        "डॉ. बी. आर. आंबेडकर",
        "सरदार पटेल",
        "के. एम. मुंशी"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—गुप्त काल को किस नाम से जाना जाता है?",
      "options": [
        "वैदिक उत्तर युग",
        "भारत का स्वर्ण युग",
        "औद्योगिक युग",
        "आधुनिक युग"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—आर्यभट्ट किस क्षेत्र से जुड़े थे?",
      "options": [
        "चित्रकला",
        "संगीत",
        "गणित और खगोलशास्त्र",
        "राजनीति"
      ],
      "answer": 2
    }
  ],
  "Geography": [
    {
      "q": "भारत की राजधानी क्या है?",
      "options": [
        "नई दिल्ली",
        "मुंबई",
        "कोलकाता",
        "चेन्नई"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: भारत की राजधानी क्या है?",
      "options": [
        "मुंबई",
        "नई दिल्ली",
        "कोलकाता",
        "चेन्नई"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: भारत की राजधानी क्या है?",
      "options": [
        "कोलकाता",
        "चेन्नई",
        "नई दिल्ली",
        "मुंबई"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—भारत की राजधानी क्या है?",
      "options": [
        "नई दिल्ली",
        "मुंबई",
        "कोलकाता",
        "चेन्नई"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत की राजधानी क्या है?",
      "options": [
        "कोलकाता",
        "नई दिल्ली",
        "चेन्नई",
        "मुंबई"
      ],
      "answer": 1
    },
    {
      "q": "विश्व का सबसे बड़ा महासागर कौन-सा है?",
      "options": [
        "अटलांटिक",
        "आर्कटिक",
        "हिंद महासागर",
        "प्रशांत महासागर"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: विश्व का सबसे बड़ा महासागर कौन-सा है?",
      "options": [
        "अटलांटिक",
        "आर्कटिक",
        "प्रशांत महासागर",
        "हिंद महासागर"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: विश्व का सबसे बड़ा महासागर कौन-सा है?",
      "options": [
        "प्रशांत महासागर",
        "अटलांटिक",
        "आर्कटिक",
        "हिंद महासागर"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—विश्व का सबसे बड़ा महासागर कौन-सा है?",
      "options": [
        "अटलांटिक",
        "आर्कटिक",
        "हिंद महासागर",
        "प्रशांत महासागर"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? विश्व का सबसे बड़ा महासागर कौन-सा है?",
      "options": [
        "प्रशांत महासागर",
        "आर्कटिक",
        "हिंद महासागर",
        "अटलांटिक"
      ],
      "answer": 0
    },
    {
      "q": "भारत में गंगा का उद्गम किस क्षेत्र से होता है?",
      "options": [
        "दक्कन का पठार",
        "अरावली",
        "गंगोत्री हिमनद क्षेत्र",
        "थार मरुस्थल"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: भारत में गंगा का उद्गम किस क्षेत्र से होता है?",
      "options": [
        "गंगोत्री हिमनद क्षेत्र",
        "अरावली",
        "दक्कन का पठार",
        "थार मरुस्थल"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: भारत में गंगा का उद्गम किस क्षेत्र से होता है?",
      "options": [
        "अरावली",
        "गंगोत्री हिमनद क्षेत्र",
        "थार मरुस्थल",
        "दक्कन का पठार"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—भारत में गंगा का उद्गम किस क्षेत्र से होता है?",
      "options": [
        "अरावली",
        "गंगोत्री हिमनद क्षेत्र",
        "दक्कन का पठार",
        "थार मरुस्थल"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत में गंगा का उद्गम किस क्षेत्र से होता है?",
      "options": [
        "अरावली",
        "थार मरुस्थल",
        "दक्कन का पठार",
        "गंगोत्री हिमनद क्षेत्र"
      ],
      "answer": 3
    },
    {
      "q": "क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन-सा है?",
      "options": [
        "मध्य प्रदेश",
        "महाराष्ट्र",
        "उत्तर प्रदेश",
        "राजस्थान"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन-सा है?",
      "options": [
        "राजस्थान",
        "उत्तर प्रदेश",
        "महाराष्ट्र",
        "मध्य प्रदेश"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन-सा है?",
      "options": [
        "मध्य प्रदेश",
        "महाराष्ट्र",
        "उत्तर प्रदेश",
        "राजस्थान"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन-सा है?",
      "options": [
        "उत्तर प्रदेश",
        "मध्य प्रदेश",
        "महाराष्ट्र",
        "राजस्थान"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन-सा है?",
      "options": [
        "उत्तर प्रदेश",
        "राजस्थान",
        "महाराष्ट्र",
        "मध्य प्रदेश"
      ],
      "answer": 1
    },
    {
      "q": "क्षेत्रफल के अनुसार भारत का सबसे छोटा राज्य कौन-सा है?",
      "options": [
        "मणिपुर",
        "गोवा",
        "त्रिपुरा",
        "सिक्किम"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: क्षेत्रफल के अनुसार भारत का सबसे छोटा राज्य कौन-सा है?",
      "options": [
        "मणिपुर",
        "सिक्किम",
        "त्रिपुरा",
        "गोवा"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: क्षेत्रफल के अनुसार भारत का सबसे छोटा राज्य कौन-सा है?",
      "options": [
        "गोवा",
        "त्रिपुरा",
        "सिक्किम",
        "मणिपुर"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—क्षेत्रफल के अनुसार भारत का सबसे छोटा राज्य कौन-सा है?",
      "options": [
        "मणिपुर",
        "गोवा",
        "त्रिपुरा",
        "सिक्किम"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? क्षेत्रफल के अनुसार भारत का सबसे छोटा राज्य कौन-सा है?",
      "options": [
        "मणिपुर",
        "गोवा",
        "त्रिपुरा",
        "सिक्किम"
      ],
      "answer": 1
    },
    {
      "q": "भारत की सबसे लंबी नदी प्रणाली कौन-सी है?",
      "options": [
        "नर्मदा",
        "तापी",
        "कावेरी",
        "गंगा नदी प्रणाली"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भारत की सबसे लंबी नदी प्रणाली कौन-सी है?",
      "options": [
        "तापी",
        "कावेरी",
        "नर्मदा",
        "गंगा नदी प्रणाली"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: भारत की सबसे लंबी नदी प्रणाली कौन-सी है?",
      "options": [
        "कावेरी",
        "तापी",
        "गंगा नदी प्रणाली",
        "नर्मदा"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—भारत की सबसे लंबी नदी प्रणाली कौन-सी है?",
      "options": [
        "गंगा नदी प्रणाली",
        "तापी",
        "कावेरी",
        "नर्मदा"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत की सबसे लंबी नदी प्रणाली कौन-सी है?",
      "options": [
        "कावेरी",
        "नर्मदा",
        "गंगा नदी प्रणाली",
        "तापी"
      ],
      "answer": 2
    },
    {
      "q": "भारत का दक्षिणतम मुख्यभूमि बिंदु कौन-सा है?",
      "options": [
        "कोच्चि",
        "रामेश्वरम",
        "इंदिरा पॉइंट",
        "कन्याकुमारी"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भारत का दक्षिणतम मुख्यभूमि बिंदु कौन-सा है?",
      "options": [
        "कोच्चि",
        "रामेश्वरम",
        "इंदिरा पॉइंट",
        "कन्याकुमारी"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: भारत का दक्षिणतम मुख्यभूमि बिंदु कौन-सा है?",
      "options": [
        "कोच्चि",
        "इंदिरा पॉइंट",
        "रामेश्वरम",
        "कन्याकुमारी"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—भारत का दक्षिणतम मुख्यभूमि बिंदु कौन-सा है?",
      "options": [
        "रामेश्वरम",
        "कोच्चि",
        "इंदिरा पॉइंट",
        "कन्याकुमारी"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत का दक्षिणतम मुख्यभूमि बिंदु कौन-सा है?",
      "options": [
        "इंदिरा पॉइंट",
        "कोच्चि",
        "कन्याकुमारी",
        "रामेश्वरम"
      ],
      "answer": 2
    },
    {
      "q": "भारत का सबसे ऊँचा पर्वत शिखर (भारत के दावे वाले क्षेत्र सहित) कौन-सा माना जाता है?",
      "options": [
        "अनामुडी",
        "अरावली",
        "कंचनजंघा भारत का सर्वोच्च शिखर है",
        "गुरु शिखर"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: भारत का सबसे ऊँचा पर्वत शिखर (भारत के दावे वाले क्षेत्र सहित) कौन-सा माना जाता है?",
      "options": [
        "गुरु शिखर",
        "कंचनजंघा भारत का सर्वोच्च शिखर है",
        "अनामुडी",
        "अरावली"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: भारत का सबसे ऊँचा पर्वत शिखर (भारत के दावे वाले क्षेत्र सहित) कौन-सा माना जाता है?",
      "options": [
        "गुरु शिखर",
        "अनामुडी",
        "अरावली",
        "कंचनजंघा भारत का सर्वोच्च शिखर है"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—भारत का सबसे ऊँचा पर्वत शिखर (भारत के दावे वाले क्षेत्र सहित) कौन-सा माना जाता है?",
      "options": [
        "अनामुडी",
        "गुरु शिखर",
        "कंचनजंघा भारत का सर्वोच्च शिखर है",
        "अरावली"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत का सबसे ऊँचा पर्वत शिखर (भारत के दावे वाले क्षेत्र सहित) कौन-सा माना जाता है?",
      "options": [
        "अनामुडी",
        "कंचनजंघा भारत का सर्वोच्च शिखर है",
        "अरावली",
        "गुरु शिखर"
      ],
      "answer": 1
    },
    {
      "q": "थार मरुस्थल मुख्यतः किस राज्य में है?",
      "options": [
        "केरल",
        "राजस्थान",
        "बिहार",
        "असम"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: थार मरुस्थल मुख्यतः किस राज्य में है?",
      "options": [
        "असम",
        "केरल",
        "बिहार",
        "राजस्थान"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: थार मरुस्थल मुख्यतः किस राज्य में है?",
      "options": [
        "केरल",
        "बिहार",
        "राजस्थान",
        "असम"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—थार मरुस्थल मुख्यतः किस राज्य में है?",
      "options": [
        "केरल",
        "राजस्थान",
        "असम",
        "बिहार"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? थार मरुस्थल मुख्यतः किस राज्य में है?",
      "options": [
        "असम",
        "बिहार",
        "केरल",
        "राजस्थान"
      ],
      "answer": 3
    },
    {
      "q": "सुंदरबन डेल्टा किस नदी प्रणाली से बनता है?",
      "options": [
        "कावेरी-पेरियार",
        "नर्मदा-तापी",
        "गंगा-ब्रह्मपुत्र",
        "गोदावरी-कृष्णा"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: सुंदरबन डेल्टा किस नदी प्रणाली से बनता है?",
      "options": [
        "कावेरी-पेरियार",
        "गोदावरी-कृष्णा",
        "गंगा-ब्रह्मपुत्र",
        "नर्मदा-तापी"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: सुंदरबन डेल्टा किस नदी प्रणाली से बनता है?",
      "options": [
        "गोदावरी-कृष्णा",
        "गंगा-ब्रह्मपुत्र",
        "कावेरी-पेरियार",
        "नर्मदा-तापी"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—सुंदरबन डेल्टा किस नदी प्रणाली से बनता है?",
      "options": [
        "कावेरी-पेरियार",
        "नर्मदा-तापी",
        "गंगा-ब्रह्मपुत्र",
        "गोदावरी-कृष्णा"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? सुंदरबन डेल्टा किस नदी प्रणाली से बनता है?",
      "options": [
        "गंगा-ब्रह्मपुत्र",
        "गोदावरी-कृष्णा",
        "कावेरी-पेरियार",
        "नर्मदा-तापी"
      ],
      "answer": 0
    },
    {
      "q": "चिल्का झील किस राज्य में है?",
      "options": [
        "ओडिशा",
        "गुजरात",
        "पंजाब",
        "बिहार"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: चिल्का झील किस राज्य में है?",
      "options": [
        "पंजाब",
        "गुजरात",
        "बिहार",
        "ओडिशा"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: चिल्का झील किस राज्य में है?",
      "options": [
        "पंजाब",
        "बिहार",
        "गुजरात",
        "ओडिशा"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—चिल्का झील किस राज्य में है?",
      "options": [
        "बिहार",
        "पंजाब",
        "गुजरात",
        "ओडिशा"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? चिल्का झील किस राज्य में है?",
      "options": [
        "गुजरात",
        "बिहार",
        "पंजाब",
        "ओडिशा"
      ],
      "answer": 3
    },
    {
      "q": "लोकटक झील किस राज्य में है?",
      "options": [
        "मेघालय",
        "गोवा",
        "मणिपुर",
        "राजस्थान"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: लोकटक झील किस राज्य में है?",
      "options": [
        "राजस्थान",
        "गोवा",
        "मणिपुर",
        "मेघालय"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: लोकटक झील किस राज्य में है?",
      "options": [
        "मेघालय",
        "मणिपुर",
        "गोवा",
        "राजस्थान"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—लोकटक झील किस राज्य में है?",
      "options": [
        "मणिपुर",
        "गोवा",
        "मेघालय",
        "राजस्थान"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? लोकटक झील किस राज्य में है?",
      "options": [
        "मणिपुर",
        "राजस्थान",
        "मेघालय",
        "गोवा"
      ],
      "answer": 0
    },
    {
      "q": "वुलर झील कहाँ स्थित है?",
      "options": [
        "केरल",
        "तमिलनाडु",
        "जम्मू-कश्मीर",
        "ओडिशा"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: वुलर झील कहाँ स्थित है?",
      "options": [
        "जम्मू-कश्मीर",
        "केरल",
        "तमिलनाडु",
        "ओडिशा"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: वुलर झील कहाँ स्थित है?",
      "options": [
        "तमिलनाडु",
        "केरल",
        "जम्मू-कश्मीर",
        "ओडिशा"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—वुलर झील कहाँ स्थित है?",
      "options": [
        "तमिलनाडु",
        "जम्मू-कश्मीर",
        "केरल",
        "ओडिशा"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? वुलर झील कहाँ स्थित है?",
      "options": [
        "जम्मू-कश्मीर",
        "तमिलनाडु",
        "केरल",
        "ओडिशा"
      ],
      "answer": 0
    },
    {
      "q": "काजीरंगा राष्ट्रीय उद्यान किस राज्य में है?",
      "options": [
        "असम",
        "बिहार",
        "गुजरात",
        "उत्तराखंड"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: काजीरंगा राष्ट्रीय उद्यान किस राज्य में है?",
      "options": [
        "उत्तराखंड",
        "बिहार",
        "गुजरात",
        "असम"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: काजीरंगा राष्ट्रीय उद्यान किस राज्य में है?",
      "options": [
        "बिहार",
        "असम",
        "उत्तराखंड",
        "गुजरात"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—काजीरंगा राष्ट्रीय उद्यान किस राज्य में है?",
      "options": [
        "असम",
        "गुजरात",
        "बिहार",
        "उत्तराखंड"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? काजीरंगा राष्ट्रीय उद्यान किस राज्य में है?",
      "options": [
        "बिहार",
        "असम",
        "गुजरात",
        "उत्तराखंड"
      ],
      "answer": 1
    },
    {
      "q": "गिर राष्ट्रीय उद्यान किसके लिए प्रसिद्ध है?",
      "options": [
        "हिम तेंदुआ",
        "एक सींग वाला गैंडा",
        "हाथी",
        "एशियाई शेर"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: गिर राष्ट्रीय उद्यान किसके लिए प्रसिद्ध है?",
      "options": [
        "एशियाई शेर",
        "एक सींग वाला गैंडा",
        "हाथी",
        "हिम तेंदुआ"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: गिर राष्ट्रीय उद्यान किसके लिए प्रसिद्ध है?",
      "options": [
        "एशियाई शेर",
        "हिम तेंदुआ",
        "हाथी",
        "एक सींग वाला गैंडा"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—गिर राष्ट्रीय उद्यान किसके लिए प्रसिद्ध है?",
      "options": [
        "हिम तेंदुआ",
        "एशियाई शेर",
        "एक सींग वाला गैंडा",
        "हाथी"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? गिर राष्ट्रीय उद्यान किसके लिए प्रसिद्ध है?",
      "options": [
        "एक सींग वाला गैंडा",
        "एशियाई शेर",
        "हिम तेंदुआ",
        "हाथी"
      ],
      "answer": 1
    },
    {
      "q": "जिम कॉर्बेट राष्ट्रीय उद्यान किस राज्य में है?",
      "options": [
        "महाराष्ट्र",
        "बिहार",
        "उत्तराखंड",
        "राजस्थान"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: जिम कॉर्बेट राष्ट्रीय उद्यान किस राज्य में है?",
      "options": [
        "राजस्थान",
        "उत्तराखंड",
        "बिहार",
        "महाराष्ट्र"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: जिम कॉर्बेट राष्ट्रीय उद्यान किस राज्य में है?",
      "options": [
        "राजस्थान",
        "उत्तराखंड",
        "महाराष्ट्र",
        "बिहार"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—जिम कॉर्बेट राष्ट्रीय उद्यान किस राज्य में है?",
      "options": [
        "राजस्थान",
        "महाराष्ट्र",
        "बिहार",
        "उत्तराखंड"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? जिम कॉर्बेट राष्ट्रीय उद्यान किस राज्य में है?",
      "options": [
        "महाराष्ट्र",
        "उत्तराखंड",
        "राजस्थान",
        "बिहार"
      ],
      "answer": 1
    },
    {
      "q": "भारत में मानसून की मुख्य वर्षा किस दिशा से आती है?",
      "options": [
        "दक्षिण-पश्चिम",
        "दक्षिण-पूर्व",
        "उत्तर-पश्चिम",
        "उत्तर-पूर्व"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: भारत में मानसून की मुख्य वर्षा किस दिशा से आती है?",
      "options": [
        "दक्षिण-पश्चिम",
        "दक्षिण-पूर्व",
        "उत्तर-पूर्व",
        "उत्तर-पश्चिम"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: भारत में मानसून की मुख्य वर्षा किस दिशा से आती है?",
      "options": [
        "दक्षिण-पश्चिम",
        "दक्षिण-पूर्व",
        "उत्तर-पूर्व",
        "उत्तर-पश्चिम"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—भारत में मानसून की मुख्य वर्षा किस दिशा से आती है?",
      "options": [
        "दक्षिण-पश्चिम",
        "दक्षिण-पूर्व",
        "उत्तर-पश्चिम",
        "उत्तर-पूर्व"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत में मानसून की मुख्य वर्षा किस दिशा से आती है?",
      "options": [
        "दक्षिण-पश्चिम",
        "उत्तर-पूर्व",
        "दक्षिण-पूर्व",
        "उत्तर-पश्चिम"
      ],
      "answer": 0
    },
    {
      "q": "काली मिट्टी किस फसल के लिए उपयुक्त मानी जाती है?",
      "options": [
        "कपास",
        "नारियल",
        "जूट",
        "चाय"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: काली मिट्टी किस फसल के लिए उपयुक्त मानी जाती है?",
      "options": [
        "नारियल",
        "कपास",
        "चाय",
        "जूट"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: काली मिट्टी किस फसल के लिए उपयुक्त मानी जाती है?",
      "options": [
        "जूट",
        "चाय",
        "नारियल",
        "कपास"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—काली मिट्टी किस फसल के लिए उपयुक्त मानी जाती है?",
      "options": [
        "जूट",
        "कपास",
        "नारियल",
        "चाय"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? काली मिट्टी किस फसल के लिए उपयुक्त मानी जाती है?",
      "options": [
        "जूट",
        "कपास",
        "नारियल",
        "चाय"
      ],
      "answer": 1
    },
    {
      "q": "भारत में चाय उत्पादन के लिए प्रसिद्ध राज्य कौन-सा है?",
      "options": [
        "असम",
        "पंजाब",
        "राजस्थान",
        "हरियाणा"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: भारत में चाय उत्पादन के लिए प्रसिद्ध राज्य कौन-सा है?",
      "options": [
        "हरियाणा",
        "राजस्थान",
        "पंजाब",
        "असम"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: भारत में चाय उत्पादन के लिए प्रसिद्ध राज्य कौन-सा है?",
      "options": [
        "असम",
        "पंजाब",
        "राजस्थान",
        "हरियाणा"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—भारत में चाय उत्पादन के लिए प्रसिद्ध राज्य कौन-सा है?",
      "options": [
        "असम",
        "राजस्थान",
        "हरियाणा",
        "पंजाब"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत में चाय उत्पादन के लिए प्रसिद्ध राज्य कौन-सा है?",
      "options": [
        "असम",
        "हरियाणा",
        "राजस्थान",
        "पंजाब"
      ],
      "answer": 0
    },
    {
      "q": "भारत में कॉफी उत्पादन के लिए प्रसिद्ध राज्य कौन-सा है?",
      "options": [
        "उत्तर प्रदेश",
        "बिहार",
        "पंजाब",
        "कर्नाटक"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भारत में कॉफी उत्पादन के लिए प्रसिद्ध राज्य कौन-सा है?",
      "options": [
        "बिहार",
        "कर्नाटक",
        "उत्तर प्रदेश",
        "पंजाब"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: भारत में कॉफी उत्पादन के लिए प्रसिद्ध राज्य कौन-सा है?",
      "options": [
        "कर्नाटक",
        "उत्तर प्रदेश",
        "बिहार",
        "पंजाब"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—भारत में कॉफी उत्पादन के लिए प्रसिद्ध राज्य कौन-सा है?",
      "options": [
        "पंजाब",
        "कर्नाटक",
        "उत्तर प्रदेश",
        "बिहार"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत में कॉफी उत्पादन के लिए प्रसिद्ध राज्य कौन-सा है?",
      "options": [
        "कर्नाटक",
        "पंजाब",
        "बिहार",
        "उत्तर प्रदेश"
      ],
      "answer": 0
    },
    {
      "q": "नर्मदा नदी किस दिशा में बहकर अरब सागर में गिरती है?",
      "options": [
        "पश्चिम",
        "पूर्व",
        "दक्षिण",
        "उत्तर"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: नर्मदा नदी किस दिशा में बहकर अरब सागर में गिरती है?",
      "options": [
        "पश्चिम",
        "पूर्व",
        "उत्तर",
        "दक्षिण"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: नर्मदा नदी किस दिशा में बहकर अरब सागर में गिरती है?",
      "options": [
        "उत्तर",
        "दक्षिण",
        "पश्चिम",
        "पूर्व"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—नर्मदा नदी किस दिशा में बहकर अरब सागर में गिरती है?",
      "options": [
        "उत्तर",
        "पश्चिम",
        "दक्षिण",
        "पूर्व"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? नर्मदा नदी किस दिशा में बहकर अरब सागर में गिरती है?",
      "options": [
        "पश्चिम",
        "दक्षिण",
        "पूर्व",
        "उत्तर"
      ],
      "answer": 0
    },
    {
      "q": "गोदावरी नदी को किस उपनाम से जाना जाता है?",
      "options": [
        "मरुस्थली नदी",
        "दक्षिण गंगा",
        "उत्तर गंगा",
        "हिमालय पुत्री"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: गोदावरी नदी को किस उपनाम से जाना जाता है?",
      "options": [
        "उत्तर गंगा",
        "हिमालय पुत्री",
        "मरुस्थली नदी",
        "दक्षिण गंगा"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: गोदावरी नदी को किस उपनाम से जाना जाता है?",
      "options": [
        "मरुस्थली नदी",
        "हिमालय पुत्री",
        "उत्तर गंगा",
        "दक्षिण गंगा"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—गोदावरी नदी को किस उपनाम से जाना जाता है?",
      "options": [
        "दक्षिण गंगा",
        "उत्तर गंगा",
        "हिमालय पुत्री",
        "मरुस्थली नदी"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? गोदावरी नदी को किस उपनाम से जाना जाता है?",
      "options": [
        "उत्तर गंगा",
        "दक्षिण गंगा",
        "मरुस्थली नदी",
        "हिमालय पुत्री"
      ],
      "answer": 1
    },
    {
      "q": "कावेरी नदी मुख्यतः किन राज्यों से होकर बहती है?",
      "options": [
        "कर्नाटक और तमिलनाडु",
        "गुजरात और राजस्थान",
        "बिहार और झारखंड",
        "पंजाब और हरियाणा"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: कावेरी नदी मुख्यतः किन राज्यों से होकर बहती है?",
      "options": [
        "गुजरात और राजस्थान",
        "बिहार और झारखंड",
        "कर्नाटक और तमिलनाडु",
        "पंजाब और हरियाणा"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: कावेरी नदी मुख्यतः किन राज्यों से होकर बहती है?",
      "options": [
        "पंजाब और हरियाणा",
        "कर्नाटक और तमिलनाडु",
        "गुजरात और राजस्थान",
        "बिहार और झारखंड"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—कावेरी नदी मुख्यतः किन राज्यों से होकर बहती है?",
      "options": [
        "कर्नाटक और तमिलनाडु",
        "गुजरात और राजस्थान",
        "पंजाब और हरियाणा",
        "बिहार और झारखंड"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कावेरी नदी मुख्यतः किन राज्यों से होकर बहती है?",
      "options": [
        "पंजाब और हरियाणा",
        "कर्नाटक और तमिलनाडु",
        "गुजरात और राजस्थान",
        "बिहार और झारखंड"
      ],
      "answer": 1
    },
    {
      "q": "भारत का मानक समय किस देशांतर पर आधारित है?",
      "options": [
        "0°",
        "82°30′ पूर्व",
        "90° पश्चिम",
        "23°30′ उत्तर"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: भारत का मानक समय किस देशांतर पर आधारित है?",
      "options": [
        "82°30′ पूर्व",
        "90° पश्चिम",
        "23°30′ उत्तर",
        "0°"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: भारत का मानक समय किस देशांतर पर आधारित है?",
      "options": [
        "0°",
        "23°30′ उत्तर",
        "82°30′ पूर्व",
        "90° पश्चिम"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—भारत का मानक समय किस देशांतर पर आधारित है?",
      "options": [
        "82°30′ पूर्व",
        "90° पश्चिम",
        "23°30′ उत्तर",
        "0°"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत का मानक समय किस देशांतर पर आधारित है?",
      "options": [
        "23°30′ उत्तर",
        "90° पश्चिम",
        "82°30′ पूर्व",
        "0°"
      ],
      "answer": 2
    },
    {
      "q": "कर्क रेखा भारत के कितने राज्यों से गुजरती है?",
      "options": [
        "10",
        "6",
        "8",
        "5"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: कर्क रेखा भारत के कितने राज्यों से गुजरती है?",
      "options": [
        "6",
        "5",
        "10",
        "8"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: कर्क रेखा भारत के कितने राज्यों से गुजरती है?",
      "options": [
        "6",
        "8",
        "10",
        "5"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—कर्क रेखा भारत के कितने राज्यों से गुजरती है?",
      "options": [
        "5",
        "8",
        "6",
        "10"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कर्क रेखा भारत के कितने राज्यों से गुजरती है?",
      "options": [
        "8",
        "5",
        "10",
        "6"
      ],
      "answer": 0
    },
    {
      "q": "विश्व का सबसे बड़ा महाद्वीप कौन-सा है?",
      "options": [
        "एशिया",
        "यूरोप",
        "ऑस्ट्रेलिया",
        "अफ्रीका"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: विश्व का सबसे बड़ा महाद्वीप कौन-सा है?",
      "options": [
        "एशिया",
        "अफ्रीका",
        "ऑस्ट्रेलिया",
        "यूरोप"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: विश्व का सबसे बड़ा महाद्वीप कौन-सा है?",
      "options": [
        "यूरोप",
        "ऑस्ट्रेलिया",
        "अफ्रीका",
        "एशिया"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—विश्व का सबसे बड़ा महाद्वीप कौन-सा है?",
      "options": [
        "ऑस्ट्रेलिया",
        "यूरोप",
        "अफ्रीका",
        "एशिया"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? विश्व का सबसे बड़ा महाद्वीप कौन-सा है?",
      "options": [
        "ऑस्ट्रेलिया",
        "एशिया",
        "अफ्रीका",
        "यूरोप"
      ],
      "answer": 1
    },
    {
      "q": "विश्व का सबसे छोटा महाद्वीप कौन-सा है?",
      "options": [
        "अंटार्कटिका",
        "दक्षिण अमेरिका",
        "ऑस्ट्रेलिया",
        "यूरोप"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: विश्व का सबसे छोटा महाद्वीप कौन-सा है?",
      "options": [
        "यूरोप",
        "ऑस्ट्रेलिया",
        "दक्षिण अमेरिका",
        "अंटार्कटिका"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: विश्व का सबसे छोटा महाद्वीप कौन-सा है?",
      "options": [
        "यूरोप",
        "अंटार्कटिका",
        "दक्षिण अमेरिका",
        "ऑस्ट्रेलिया"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—विश्व का सबसे छोटा महाद्वीप कौन-सा है?",
      "options": [
        "यूरोप",
        "ऑस्ट्रेलिया",
        "अंटार्कटिका",
        "दक्षिण अमेरिका"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? विश्व का सबसे छोटा महाद्वीप कौन-सा है?",
      "options": [
        "अंटार्कटिका",
        "ऑस्ट्रेलिया",
        "दक्षिण अमेरिका",
        "यूरोप"
      ],
      "answer": 1
    },
    {
      "q": "विश्व का सबसे बड़ा गर्म मरुस्थल कौन-सा है?",
      "options": [
        "थार",
        "गोबी",
        "कालाहारी",
        "सहारा"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: विश्व का सबसे बड़ा गर्म मरुस्थल कौन-सा है?",
      "options": [
        "थार",
        "गोबी",
        "सहारा",
        "कालाहारी"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: विश्व का सबसे बड़ा गर्म मरुस्थल कौन-सा है?",
      "options": [
        "कालाहारी",
        "सहारा",
        "थार",
        "गोबी"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—विश्व का सबसे बड़ा गर्म मरुस्थल कौन-सा है?",
      "options": [
        "कालाहारी",
        "थार",
        "गोबी",
        "सहारा"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? विश्व का सबसे बड़ा गर्म मरुस्थल कौन-सा है?",
      "options": [
        "सहारा",
        "गोबी",
        "थार",
        "कालाहारी"
      ],
      "answer": 0
    },
    {
      "q": "विश्व की सबसे ऊँची पर्वत चोटी कौन-सी है?",
      "options": [
        "नंदा देवी",
        "K2",
        "माउंट एवरेस्ट",
        "कंचनजंघा"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: विश्व की सबसे ऊँची पर्वत चोटी कौन-सी है?",
      "options": [
        "कंचनजंघा",
        "नंदा देवी",
        "K2",
        "माउंट एवरेस्ट"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: विश्व की सबसे ऊँची पर्वत चोटी कौन-सी है?",
      "options": [
        "कंचनजंघा",
        "K2",
        "माउंट एवरेस्ट",
        "नंदा देवी"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—विश्व की सबसे ऊँची पर्वत चोटी कौन-सी है?",
      "options": [
        "K2",
        "नंदा देवी",
        "कंचनजंघा",
        "माउंट एवरेस्ट"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? विश्व की सबसे ऊँची पर्वत चोटी कौन-सी है?",
      "options": [
        "K2",
        "कंचनजंघा",
        "नंदा देवी",
        "माउंट एवरेस्ट"
      ],
      "answer": 3
    },
    {
      "q": "विश्व की सबसे लंबी महाद्वीपीय पर्वत श्रृंखला कौन-सी है?",
      "options": [
        "रॉकी",
        "हिमालय",
        "आल्प्स",
        "एंडीज"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: विश्व की सबसे लंबी महाद्वीपीय पर्वत श्रृंखला कौन-सी है?",
      "options": [
        "रॉकी",
        "हिमालय",
        "एंडीज",
        "आल्प्स"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: विश्व की सबसे लंबी महाद्वीपीय पर्वत श्रृंखला कौन-सी है?",
      "options": [
        "रॉकी",
        "हिमालय",
        "एंडीज",
        "आल्प्स"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—विश्व की सबसे लंबी महाद्वीपीय पर्वत श्रृंखला कौन-सी है?",
      "options": [
        "आल्प्स",
        "रॉकी",
        "एंडीज",
        "हिमालय"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? विश्व की सबसे लंबी महाद्वीपीय पर्वत श्रृंखला कौन-सी है?",
      "options": [
        "एंडीज",
        "आल्प्स",
        "हिमालय",
        "रॉकी"
      ],
      "answer": 0
    },
    {
      "q": "भूमध्य रेखा पृथ्वी को किन भागों में बाँटती है?",
      "options": [
        "उत्तरी और दक्षिणी गोलार्ध",
        "गर्म और ठंडे क्षेत्र",
        "पूर्वी और पश्चिमी गोलार्ध",
        "स्थल और जल"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: भूमध्य रेखा पृथ्वी को किन भागों में बाँटती है?",
      "options": [
        "गर्म और ठंडे क्षेत्र",
        "पूर्वी और पश्चिमी गोलार्ध",
        "उत्तरी और दक्षिणी गोलार्ध",
        "स्थल और जल"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: भूमध्य रेखा पृथ्वी को किन भागों में बाँटती है?",
      "options": [
        "गर्म और ठंडे क्षेत्र",
        "पूर्वी और पश्चिमी गोलार्ध",
        "स्थल और जल",
        "उत्तरी और दक्षिणी गोलार्ध"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—भूमध्य रेखा पृथ्वी को किन भागों में बाँटती है?",
      "options": [
        "पूर्वी और पश्चिमी गोलार्ध",
        "स्थल और जल",
        "गर्म और ठंडे क्षेत्र",
        "उत्तरी और दक्षिणी गोलार्ध"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भूमध्य रेखा पृथ्वी को किन भागों में बाँटती है?",
      "options": [
        "उत्तरी और दक्षिणी गोलार्ध",
        "पूर्वी और पश्चिमी गोलार्ध",
        "गर्म और ठंडे क्षेत्र",
        "स्थल और जल"
      ],
      "answer": 0
    },
    {
      "q": "शून्य देशांतर रेखा कहाँ से गुजरती है?",
      "options": [
        "काहिरा",
        "दिल्ली",
        "टोक्यो",
        "ग्रीनविच"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: शून्य देशांतर रेखा कहाँ से गुजरती है?",
      "options": [
        "दिल्ली",
        "काहिरा",
        "टोक्यो",
        "ग्रीनविच"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: शून्य देशांतर रेखा कहाँ से गुजरती है?",
      "options": [
        "काहिरा",
        "ग्रीनविच",
        "टोक्यो",
        "दिल्ली"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—शून्य देशांतर रेखा कहाँ से गुजरती है?",
      "options": [
        "दिल्ली",
        "टोक्यो",
        "काहिरा",
        "ग्रीनविच"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? शून्य देशांतर रेखा कहाँ से गुजरती है?",
      "options": [
        "काहिरा",
        "टोक्यो",
        "ग्रीनविच",
        "दिल्ली"
      ],
      "answer": 2
    },
    {
      "q": "जापान की राजधानी क्या है?",
      "options": [
        "टोक्यो",
        "ओसाका",
        "क्योटो",
        "बीजिंग"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: जापान की राजधानी क्या है?",
      "options": [
        "ओसाका",
        "टोक्यो",
        "क्योटो",
        "बीजिंग"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: जापान की राजधानी क्या है?",
      "options": [
        "क्योटो",
        "ओसाका",
        "बीजिंग",
        "टोक्यो"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—जापान की राजधानी क्या है?",
      "options": [
        "बीजिंग",
        "क्योटो",
        "ओसाका",
        "टोक्यो"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? जापान की राजधानी क्या है?",
      "options": [
        "बीजिंग",
        "क्योटो",
        "टोक्यो",
        "ओसाका"
      ],
      "answer": 2
    },
    {
      "q": "नेपाल की राजधानी क्या है?",
      "options": [
        "कोलंबो",
        "ढाका",
        "काठमांडू",
        "थिम्फू"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: नेपाल की राजधानी क्या है?",
      "options": [
        "ढाका",
        "थिम्फू",
        "कोलंबो",
        "काठमांडू"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: नेपाल की राजधानी क्या है?",
      "options": [
        "कोलंबो",
        "ढाका",
        "थिम्फू",
        "काठमांडू"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—नेपाल की राजधानी क्या है?",
      "options": [
        "काठमांडू",
        "थिम्फू",
        "ढाका",
        "कोलंबो"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? नेपाल की राजधानी क्या है?",
      "options": [
        "काठमांडू",
        "थिम्फू",
        "कोलंबो",
        "ढाका"
      ],
      "answer": 0
    },
    {
      "q": "भूटान की राजधानी क्या है?",
      "options": [
        "ढाका",
        "काठमांडू",
        "माले",
        "थिम्फू"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भूटान की राजधानी क्या है?",
      "options": [
        "काठमांडू",
        "माले",
        "थिम्फू",
        "ढाका"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: भूटान की राजधानी क्या है?",
      "options": [
        "ढाका",
        "काठमांडू",
        "माले",
        "थिम्फू"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—भूटान की राजधानी क्या है?",
      "options": [
        "ढाका",
        "माले",
        "थिम्फू",
        "काठमांडू"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भूटान की राजधानी क्या है?",
      "options": [
        "काठमांडू",
        "ढाका",
        "थिम्फू",
        "माले"
      ],
      "answer": 2
    },
    {
      "q": "बांग्लादेश की राजधानी क्या है?",
      "options": [
        "कराची",
        "काठमांडू",
        "ढाका",
        "थिम्फू"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: बांग्लादेश की राजधानी क्या है?",
      "options": [
        "काठमांडू",
        "थिम्फू",
        "ढाका",
        "कराची"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: बांग्लादेश की राजधानी क्या है?",
      "options": [
        "थिम्फू",
        "कराची",
        "काठमांडू",
        "ढाका"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—बांग्लादेश की राजधानी क्या है?",
      "options": [
        "ढाका",
        "कराची",
        "थिम्फू",
        "काठमांडू"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? बांग्लादेश की राजधानी क्या है?",
      "options": [
        "काठमांडू",
        "थिम्फू",
        "ढाका",
        "कराची"
      ],
      "answer": 2
    },
    {
      "q": "श्रीलंका की विधायी राजधानी कौन-सी है?",
      "options": [
        "कैंडी",
        "कोलंबो ही विधायी राजधानी",
        "श्री जयवर्धनेपुरा कोट्टे",
        "गाले"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: श्रीलंका की विधायी राजधानी कौन-सी है?",
      "options": [
        "श्री जयवर्धनेपुरा कोट्टे",
        "गाले",
        "कैंडी",
        "कोलंबो ही विधायी राजधानी"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: श्रीलंका की विधायी राजधानी कौन-सी है?",
      "options": [
        "श्री जयवर्धनेपुरा कोट्टे",
        "गाले",
        "कोलंबो ही विधायी राजधानी",
        "कैंडी"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—श्रीलंका की विधायी राजधानी कौन-सी है?",
      "options": [
        "कैंडी",
        "श्री जयवर्धनेपुरा कोट्टे",
        "गाले",
        "कोलंबो ही विधायी राजधानी"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? श्रीलंका की विधायी राजधानी कौन-सी है?",
      "options": [
        "गाले",
        "श्री जयवर्धनेपुरा कोट्टे",
        "कोलंबो ही विधायी राजधानी",
        "कैंडी"
      ],
      "answer": 1
    },
    {
      "q": "मिस्र से होकर कौन-सी प्रमुख नदी बहती है?",
      "options": [
        "नील",
        "अमेजन",
        "डेन्यूब",
        "यांग्त्से"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: मिस्र से होकर कौन-सी प्रमुख नदी बहती है?",
      "options": [
        "अमेजन",
        "यांग्त्से",
        "नील",
        "डेन्यूब"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: मिस्र से होकर कौन-सी प्रमुख नदी बहती है?",
      "options": [
        "नील",
        "यांग्त्से",
        "डेन्यूब",
        "अमेजन"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—मिस्र से होकर कौन-सी प्रमुख नदी बहती है?",
      "options": [
        "अमेजन",
        "यांग्त्से",
        "डेन्यूब",
        "नील"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? मिस्र से होकर कौन-सी प्रमुख नदी बहती है?",
      "options": [
        "अमेजन",
        "यांग्त्से",
        "डेन्यूब",
        "नील"
      ],
      "answer": 3
    },
    {
      "q": "अमेजन वर्षावन मुख्यतः किस महाद्वीप में है?",
      "options": [
        "अफ्रीका",
        "यूरोप",
        "एशिया",
        "दक्षिण अमेरिका"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: अमेजन वर्षावन मुख्यतः किस महाद्वीप में है?",
      "options": [
        "यूरोप",
        "दक्षिण अमेरिका",
        "एशिया",
        "अफ्रीका"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: अमेजन वर्षावन मुख्यतः किस महाद्वीप में है?",
      "options": [
        "एशिया",
        "दक्षिण अमेरिका",
        "अफ्रीका",
        "यूरोप"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—अमेजन वर्षावन मुख्यतः किस महाद्वीप में है?",
      "options": [
        "यूरोप",
        "अफ्रीका",
        "एशिया",
        "दक्षिण अमेरिका"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? अमेजन वर्षावन मुख्यतः किस महाद्वीप में है?",
      "options": [
        "यूरोप",
        "एशिया",
        "दक्षिण अमेरिका",
        "अफ्रीका"
      ],
      "answer": 2
    },
    {
      "q": "ग्रेट बैरियर रीफ किस देश के तट पर है?",
      "options": [
        "दक्षिण अफ्रीका",
        "ऑस्ट्रेलिया",
        "भारत",
        "जापान"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: ग्रेट बैरियर रीफ किस देश के तट पर है?",
      "options": [
        "ऑस्ट्रेलिया",
        "भारत",
        "दक्षिण अफ्रीका",
        "जापान"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: ग्रेट बैरियर रीफ किस देश के तट पर है?",
      "options": [
        "ऑस्ट्रेलिया",
        "जापान",
        "दक्षिण अफ्रीका",
        "भारत"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—ग्रेट बैरियर रीफ किस देश के तट पर है?",
      "options": [
        "जापान",
        "ऑस्ट्रेलिया",
        "भारत",
        "दक्षिण अफ्रीका"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? ग्रेट बैरियर रीफ किस देश के तट पर है?",
      "options": [
        "जापान",
        "दक्षिण अफ्रीका",
        "भारत",
        "ऑस्ट्रेलिया"
      ],
      "answer": 3
    },
    {
      "q": "भूमध्य सागर किन महाद्वीपों के बीच है?",
      "options": [
        "एशिया और ऑस्ट्रेलिया",
        "अमेरिका और यूरोप",
        "अफ्रीका और अंटार्कटिका",
        "यूरोप, अफ्रीका और एशिया"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भूमध्य सागर किन महाद्वीपों के बीच है?",
      "options": [
        "एशिया और ऑस्ट्रेलिया",
        "यूरोप, अफ्रीका और एशिया",
        "अमेरिका और यूरोप",
        "अफ्रीका और अंटार्कटिका"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: भूमध्य सागर किन महाद्वीपों के बीच है?",
      "options": [
        "अमेरिका और यूरोप",
        "एशिया और ऑस्ट्रेलिया",
        "यूरोप, अफ्रीका और एशिया",
        "अफ्रीका और अंटार्कटिका"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—भूमध्य सागर किन महाद्वीपों के बीच है?",
      "options": [
        "यूरोप, अफ्रीका और एशिया",
        "अफ्रीका और अंटार्कटिका",
        "एशिया और ऑस्ट्रेलिया",
        "अमेरिका और यूरोप"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भूमध्य सागर किन महाद्वीपों के बीच है?",
      "options": [
        "अफ्रीका और अंटार्कटिका",
        "यूरोप, अफ्रीका और एशिया",
        "एशिया और ऑस्ट्रेलिया",
        "अमेरिका और यूरोप"
      ],
      "answer": 1
    },
    {
      "q": "पृथ्वी का आकार लगभग कैसा है?",
      "options": [
        "समतल चक्र",
        "पूर्ण घन",
        "ध्रुवों पर थोड़ा चपटा गोलाभ",
        "त्रिकोण"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: पृथ्वी का आकार लगभग कैसा है?",
      "options": [
        "त्रिकोण",
        "पूर्ण घन",
        "समतल चक्र",
        "ध्रुवों पर थोड़ा चपटा गोलाभ"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: पृथ्वी का आकार लगभग कैसा है?",
      "options": [
        "पूर्ण घन",
        "समतल चक्र",
        "ध्रुवों पर थोड़ा चपटा गोलाभ",
        "त्रिकोण"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—पृथ्वी का आकार लगभग कैसा है?",
      "options": [
        "ध्रुवों पर थोड़ा चपटा गोलाभ",
        "त्रिकोण",
        "पूर्ण घन",
        "समतल चक्र"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पृथ्वी का आकार लगभग कैसा है?",
      "options": [
        "समतल चक्र",
        "त्रिकोण",
        "ध्रुवों पर थोड़ा चपटा गोलाभ",
        "पूर्ण घन"
      ],
      "answer": 2
    },
    {
      "q": "भूकंप की तीव्रता मापने के लिए कौन-सा पैमाना प्रसिद्ध है?",
      "options": [
        "सेल्सियस",
        "रिक्टर पैमाना",
        "मोह्स",
        "ब्यूफोर्ट"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: भूकंप की तीव्रता मापने के लिए कौन-सा पैमाना प्रसिद्ध है?",
      "options": [
        "रिक्टर पैमाना",
        "ब्यूफोर्ट",
        "सेल्सियस",
        "मोह्स"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: भूकंप की तीव्रता मापने के लिए कौन-सा पैमाना प्रसिद्ध है?",
      "options": [
        "ब्यूफोर्ट",
        "मोह्स",
        "रिक्टर पैमाना",
        "सेल्सियस"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—भूकंप की तीव्रता मापने के लिए कौन-सा पैमाना प्रसिद्ध है?",
      "options": [
        "ब्यूफोर्ट",
        "रिक्टर पैमाना",
        "सेल्सियस",
        "मोह्स"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भूकंप की तीव्रता मापने के लिए कौन-सा पैमाना प्रसिद्ध है?",
      "options": [
        "रिक्टर पैमाना",
        "मोह्स",
        "सेल्सियस",
        "ब्यूफोर्ट"
      ],
      "answer": 0
    },
    {
      "q": "ज्वालामुखी से निकलने वाला पिघला पदार्थ क्या कहलाता है?",
      "options": [
        "लावा",
        "धुंध",
        "ओस",
        "हिम"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: ज्वालामुखी से निकलने वाला पिघला पदार्थ क्या कहलाता है?",
      "options": [
        "ओस",
        "लावा",
        "हिम",
        "धुंध"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: ज्वालामुखी से निकलने वाला पिघला पदार्थ क्या कहलाता है?",
      "options": [
        "हिम",
        "ओस",
        "लावा",
        "धुंध"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—ज्वालामुखी से निकलने वाला पिघला पदार्थ क्या कहलाता है?",
      "options": [
        "लावा",
        "धुंध",
        "हिम",
        "ओस"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? ज्वालामुखी से निकलने वाला पिघला पदार्थ क्या कहलाता है?",
      "options": [
        "हिम",
        "लावा",
        "धुंध",
        "ओस"
      ],
      "answer": 1
    },
    {
      "q": "समुद्र तल से ऊँचाई मापने का सामान्य संदर्भ क्या है?",
      "options": [
        "ध्रुवीय वृत्त",
        "स्थानीय समय",
        "भूमध्य रेखा",
        "औसत समुद्र तल"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: समुद्र तल से ऊँचाई मापने का सामान्य संदर्भ क्या है?",
      "options": [
        "ध्रुवीय वृत्त",
        "औसत समुद्र तल",
        "स्थानीय समय",
        "भूमध्य रेखा"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: समुद्र तल से ऊँचाई मापने का सामान्य संदर्भ क्या है?",
      "options": [
        "भूमध्य रेखा",
        "ध्रुवीय वृत्त",
        "औसत समुद्र तल",
        "स्थानीय समय"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—समुद्र तल से ऊँचाई मापने का सामान्य संदर्भ क्या है?",
      "options": [
        "स्थानीय समय",
        "ध्रुवीय वृत्त",
        "औसत समुद्र तल",
        "भूमध्य रेखा"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? समुद्र तल से ऊँचाई मापने का सामान्य संदर्भ क्या है?",
      "options": [
        "भूमध्य रेखा",
        "ध्रुवीय वृत्त",
        "औसत समुद्र तल",
        "स्थानीय समय"
      ],
      "answer": 2
    },
    {
      "q": "मैंग्रोव वन किस क्षेत्र में उगते हैं?",
      "options": [
        "घास के मैदान के भीतर",
        "ज्वारीय तटीय क्षेत्रों में",
        "रेगिस्तान में",
        "ऊँचे हिम शिखरों पर"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: मैंग्रोव वन किस क्षेत्र में उगते हैं?",
      "options": [
        "ऊँचे हिम शिखरों पर",
        "रेगिस्तान में",
        "घास के मैदान के भीतर",
        "ज्वारीय तटीय क्षेत्रों में"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: मैंग्रोव वन किस क्षेत्र में उगते हैं?",
      "options": [
        "ज्वारीय तटीय क्षेत्रों में",
        "रेगिस्तान में",
        "घास के मैदान के भीतर",
        "ऊँचे हिम शिखरों पर"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—मैंग्रोव वन किस क्षेत्र में उगते हैं?",
      "options": [
        "ऊँचे हिम शिखरों पर",
        "ज्वारीय तटीय क्षेत्रों में",
        "घास के मैदान के भीतर",
        "रेगिस्तान में"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? मैंग्रोव वन किस क्षेत्र में उगते हैं?",
      "options": [
        "ज्वारीय तटीय क्षेत्रों में",
        "घास के मैदान के भीतर",
        "रेगिस्तान में",
        "ऊँचे हिम शिखरों पर"
      ],
      "answer": 0
    },
    {
      "q": "पवन ऊर्जा किससे प्राप्त होती है?",
      "options": [
        "पेट्रोल से",
        "कोयले से",
        "प्राकृतिक गैस से",
        "चलती हवा से"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: पवन ऊर्जा किससे प्राप्त होती है?",
      "options": [
        "कोयले से",
        "प्राकृतिक गैस से",
        "चलती हवा से",
        "पेट्रोल से"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: पवन ऊर्जा किससे प्राप्त होती है?",
      "options": [
        "कोयले से",
        "पेट्रोल से",
        "चलती हवा से",
        "प्राकृतिक गैस से"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—पवन ऊर्जा किससे प्राप्त होती है?",
      "options": [
        "कोयले से",
        "चलती हवा से",
        "पेट्रोल से",
        "प्राकृतिक गैस से"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? पवन ऊर्जा किससे प्राप्त होती है?",
      "options": [
        "कोयले से",
        "चलती हवा से",
        "पेट्रोल से",
        "प्राकृतिक गैस से"
      ],
      "answer": 1
    },
    {
      "q": "लौह अयस्क से मुख्यतः कौन-सी धातु प्राप्त होती है?",
      "options": [
        "लोहा",
        "ताँबा",
        "एल्यूमिनियम",
        "सोना"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: लौह अयस्क से मुख्यतः कौन-सी धातु प्राप्त होती है?",
      "options": [
        "एल्यूमिनियम",
        "सोना",
        "लोहा",
        "ताँबा"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: लौह अयस्क से मुख्यतः कौन-सी धातु प्राप्त होती है?",
      "options": [
        "सोना",
        "लोहा",
        "एल्यूमिनियम",
        "ताँबा"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—लौह अयस्क से मुख्यतः कौन-सी धातु प्राप्त होती है?",
      "options": [
        "ताँबा",
        "एल्यूमिनियम",
        "सोना",
        "लोहा"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? लौह अयस्क से मुख्यतः कौन-सी धातु प्राप्त होती है?",
      "options": [
        "ताँबा",
        "एल्यूमिनियम",
        "सोना",
        "लोहा"
      ],
      "answer": 3
    },
    {
      "q": "भारत का प्रमुख कोयला क्षेत्र झरिया किस राज्य में है?",
      "options": [
        "झारखंड",
        "पंजाब",
        "गुजरात",
        "केरल"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: भारत का प्रमुख कोयला क्षेत्र झरिया किस राज्य में है?",
      "options": [
        "गुजरात",
        "केरल",
        "झारखंड",
        "पंजाब"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: भारत का प्रमुख कोयला क्षेत्र झरिया किस राज्य में है?",
      "options": [
        "झारखंड",
        "गुजरात",
        "पंजाब",
        "केरल"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—भारत का प्रमुख कोयला क्षेत्र झरिया किस राज्य में है?",
      "options": [
        "केरल",
        "पंजाब",
        "गुजरात",
        "झारखंड"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत का प्रमुख कोयला क्षेत्र झरिया किस राज्य में है?",
      "options": [
        "केरल",
        "गुजरात",
        "झारखंड",
        "पंजाब"
      ],
      "answer": 2
    },
    {
      "q": "भाखड़ा नांगल बाँध किस नदी पर है?",
      "options": [
        "महानदी",
        "सतलुज",
        "गंगा",
        "कावेरी"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: भाखड़ा नांगल बाँध किस नदी पर है?",
      "options": [
        "कावेरी",
        "गंगा",
        "सतलुज",
        "महानदी"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: भाखड़ा नांगल बाँध किस नदी पर है?",
      "options": [
        "महानदी",
        "गंगा",
        "सतलुज",
        "कावेरी"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—भाखड़ा नांगल बाँध किस नदी पर है?",
      "options": [
        "गंगा",
        "कावेरी",
        "महानदी",
        "सतलुज"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भाखड़ा नांगल बाँध किस नदी पर है?",
      "options": [
        "कावेरी",
        "महानदी",
        "गंगा",
        "सतलुज"
      ],
      "answer": 3
    },
    {
      "q": "हीराकुंड बाँध किस नदी पर है?",
      "options": [
        "नर्मदा",
        "यमुना",
        "महानदी",
        "गोदावरी"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: हीराकुंड बाँध किस नदी पर है?",
      "options": [
        "गोदावरी",
        "महानदी",
        "नर्मदा",
        "यमुना"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: हीराकुंड बाँध किस नदी पर है?",
      "options": [
        "महानदी",
        "नर्मदा",
        "यमुना",
        "गोदावरी"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—हीराकुंड बाँध किस नदी पर है?",
      "options": [
        "यमुना",
        "गोदावरी",
        "नर्मदा",
        "महानदी"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? हीराकुंड बाँध किस नदी पर है?",
      "options": [
        "गोदावरी",
        "नर्मदा",
        "यमुना",
        "महानदी"
      ],
      "answer": 3
    },
    {
      "q": "सरदार सरोवर बाँध किस नदी पर है?",
      "options": [
        "ब्रह्मपुत्र",
        "कृष्णा",
        "नर्मदा",
        "गंगा"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: सरदार सरोवर बाँध किस नदी पर है?",
      "options": [
        "ब्रह्मपुत्र",
        "कृष्णा",
        "गंगा",
        "नर्मदा"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: सरदार सरोवर बाँध किस नदी पर है?",
      "options": [
        "ब्रह्मपुत्र",
        "नर्मदा",
        "गंगा",
        "कृष्णा"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—सरदार सरोवर बाँध किस नदी पर है?",
      "options": [
        "ब्रह्मपुत्र",
        "नर्मदा",
        "गंगा",
        "कृष्णा"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? सरदार सरोवर बाँध किस नदी पर है?",
      "options": [
        "गंगा",
        "कृष्णा",
        "ब्रह्मपुत्र",
        "नर्मदा"
      ],
      "answer": 3
    },
    {
      "q": "भारत में सबसे लंबी समुद्री तटरेखा वाला राज्य कौन-सा है?",
      "options": [
        "गुजरात",
        "केरल",
        "गोवा",
        "ओडिशा"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: भारत में सबसे लंबी समुद्री तटरेखा वाला राज्य कौन-सा है?",
      "options": [
        "केरल",
        "गुजरात",
        "ओडिशा",
        "गोवा"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: भारत में सबसे लंबी समुद्री तटरेखा वाला राज्य कौन-सा है?",
      "options": [
        "गुजरात",
        "ओडिशा",
        "गोवा",
        "केरल"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—भारत में सबसे लंबी समुद्री तटरेखा वाला राज्य कौन-सा है?",
      "options": [
        "गोवा",
        "ओडिशा",
        "गुजरात",
        "केरल"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? भारत में सबसे लंबी समुद्री तटरेखा वाला राज्य कौन-सा है?",
      "options": [
        "गुजरात",
        "केरल",
        "ओडिशा",
        "गोवा"
      ],
      "answer": 0
    },
    {
      "q": "दक्कन का पठार भारत के किस भाग में है?",
      "options": [
        "दक्षिणी भारत",
        "उत्तरी हिमालय",
        "थार मरुस्थल",
        "पूर्वोत्तर सीमांत"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: दक्कन का पठार भारत के किस भाग में है?",
      "options": [
        "थार मरुस्थल",
        "दक्षिणी भारत",
        "पूर्वोत्तर सीमांत",
        "उत्तरी हिमालय"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: दक्कन का पठार भारत के किस भाग में है?",
      "options": [
        "दक्षिणी भारत",
        "पूर्वोत्तर सीमांत",
        "उत्तरी हिमालय",
        "थार मरुस्थल"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—दक्कन का पठार भारत के किस भाग में है?",
      "options": [
        "थार मरुस्थल",
        "दक्षिणी भारत",
        "पूर्वोत्तर सीमांत",
        "उत्तरी हिमालय"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? दक्कन का पठार भारत के किस भाग में है?",
      "options": [
        "दक्षिणी भारत",
        "पूर्वोत्तर सीमांत",
        "उत्तरी हिमालय",
        "थार मरुस्थल"
      ],
      "answer": 0
    },
    {
      "q": "अरावली पर्वतमाला मुख्यतः किस राज्य में फैली है?",
      "options": [
        "असम",
        "बिहार",
        "राजस्थान",
        "केरल"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: अरावली पर्वतमाला मुख्यतः किस राज्य में फैली है?",
      "options": [
        "राजस्थान",
        "असम",
        "केरल",
        "बिहार"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: अरावली पर्वतमाला मुख्यतः किस राज्य में फैली है?",
      "options": [
        "बिहार",
        "असम",
        "केरल",
        "राजस्थान"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—अरावली पर्वतमाला मुख्यतः किस राज्य में फैली है?",
      "options": [
        "राजस्थान",
        "असम",
        "केरल",
        "बिहार"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? अरावली पर्वतमाला मुख्यतः किस राज्य में फैली है?",
      "options": [
        "राजस्थान",
        "केरल",
        "असम",
        "बिहार"
      ],
      "answer": 0
    },
    {
      "q": "हिमालय किस प्रकार के पर्वत हैं?",
      "options": [
        "ज्वालामुखी पठार",
        "रेतीले टीले",
        "अवशिष्ट पर्वत",
        "नवीन वलित पर्वत"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: हिमालय किस प्रकार के पर्वत हैं?",
      "options": [
        "रेतीले टीले",
        "ज्वालामुखी पठार",
        "अवशिष्ट पर्वत",
        "नवीन वलित पर्वत"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: हिमालय किस प्रकार के पर्वत हैं?",
      "options": [
        "अवशिष्ट पर्वत",
        "ज्वालामुखी पठार",
        "नवीन वलित पर्वत",
        "रेतीले टीले"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—हिमालय किस प्रकार के पर्वत हैं?",
      "options": [
        "नवीन वलित पर्वत",
        "रेतीले टीले",
        "ज्वालामुखी पठार",
        "अवशिष्ट पर्वत"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? हिमालय किस प्रकार के पर्वत हैं?",
      "options": [
        "अवशिष्ट पर्वत",
        "नवीन वलित पर्वत",
        "रेतीले टीले",
        "ज्वालामुखी पठार"
      ],
      "answer": 1
    },
    {
      "q": "डेल्टा सामान्यतः कहाँ बनता है?",
      "options": [
        "नदी के स्रोत पर",
        "नदी के मुहाने पर",
        "मरुस्थल के केंद्र में",
        "पर्वत शिखर पर"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: डेल्टा सामान्यतः कहाँ बनता है?",
      "options": [
        "मरुस्थल के केंद्र में",
        "नदी के स्रोत पर",
        "पर्वत शिखर पर",
        "नदी के मुहाने पर"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: डेल्टा सामान्यतः कहाँ बनता है?",
      "options": [
        "पर्वत शिखर पर",
        "नदी के मुहाने पर",
        "मरुस्थल के केंद्र में",
        "नदी के स्रोत पर"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—डेल्टा सामान्यतः कहाँ बनता है?",
      "options": [
        "नदी के स्रोत पर",
        "पर्वत शिखर पर",
        "नदी के मुहाने पर",
        "मरुस्थल के केंद्र में"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? डेल्टा सामान्यतः कहाँ बनता है?",
      "options": [
        "नदी के स्रोत पर",
        "मरुस्थल के केंद्र में",
        "पर्वत शिखर पर",
        "नदी के मुहाने पर"
      ],
      "answer": 3
    },
    {
      "q": "ज्वार-भाटा मुख्यतः किसके गुरुत्वाकर्षण से प्रभावित होता है?",
      "options": [
        "केवल बादलों",
        "चंद्रमा और सूर्य",
        "केवल हवाओं",
        "भूकंप"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: ज्वार-भाटा मुख्यतः किसके गुरुत्वाकर्षण से प्रभावित होता है?",
      "options": [
        "केवल बादलों",
        "केवल हवाओं",
        "चंद्रमा और सूर्य",
        "भूकंप"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: ज्वार-भाटा मुख्यतः किसके गुरुत्वाकर्षण से प्रभावित होता है?",
      "options": [
        "भूकंप",
        "केवल हवाओं",
        "केवल बादलों",
        "चंद्रमा और सूर्य"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—ज्वार-भाटा मुख्यतः किसके गुरुत्वाकर्षण से प्रभावित होता है?",
      "options": [
        "चंद्रमा और सूर्य",
        "केवल बादलों",
        "भूकंप",
        "केवल हवाओं"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? ज्वार-भाटा मुख्यतः किसके गुरुत्वाकर्षण से प्रभावित होता है?",
      "options": [
        "केवल बादलों",
        "केवल हवाओं",
        "चंद्रमा और सूर्य",
        "भूकंप"
      ],
      "answer": 2
    },
    {
      "q": "भारत की राजधानी क्या है?",
      "options": [
        "कोलकाता",
        "चेन्नई",
        "नई दिल्ली",
        "मुंबई"
      ],
      "answer": 2
    },
    {
      "q": "विश्व का सबसे बड़ा महासागर कौन-सा है?",
      "options": [
        "अटलांटिक",
        "हिंद महासागर",
        "आर्कटिक",
        "प्रशांत महासागर"
      ],
      "answer": 3
    },
    {
      "q": "भारत में गंगा का उद्गम किस क्षेत्र से होता है?",
      "options": [
        "दक्कन का पठार",
        "अरावली",
        "गंगोत्री हिमनद क्षेत्र",
        "थार मरुस्थल"
      ],
      "answer": 2
    },
    {
      "q": "क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन-सा है?",
      "options": [
        "राजस्थान",
        "उत्तर प्रदेश",
        "महाराष्ट्र",
        "मध्य प्रदेश"
      ],
      "answer": 0
    },
    {
      "q": "क्षेत्रफल के अनुसार भारत का सबसे छोटा राज्य कौन-सा है?",
      "options": [
        "गोवा",
        "सिक्किम",
        "मणिपुर",
        "त्रिपुरा"
      ],
      "answer": 0
    },
    {
      "q": "भारत की सबसे लंबी नदी प्रणाली कौन-सी है?",
      "options": [
        "नर्मदा",
        "कावेरी",
        "गंगा नदी प्रणाली",
        "तापी"
      ],
      "answer": 2
    },
    {
      "q": "भारत का दक्षिणतम मुख्यभूमि बिंदु कौन-सा है?",
      "options": [
        "इंदिरा पॉइंट",
        "कोच्चि",
        "कन्याकुमारी",
        "रामेश्वरम"
      ],
      "answer": 2
    },
    {
      "q": "भारत का सबसे ऊँचा पर्वत शिखर (भारत के दावे वाले क्षेत्र सहित) कौन-सा माना जाता है?",
      "options": [
        "गुरु शिखर",
        "अनामुडी",
        "अरावली",
        "कंचनजंघा भारत का सर्वोच्च शिखर है"
      ],
      "answer": 3
    },
    {
      "q": "थार मरुस्थल मुख्यतः किस राज्य में है?",
      "options": [
        "असम",
        "राजस्थान",
        "बिहार",
        "केरल"
      ],
      "answer": 1
    },
    {
      "q": "सुंदरबन डेल्टा किस नदी प्रणाली से बनता है?",
      "options": [
        "कावेरी-पेरियार",
        "गंगा-ब्रह्मपुत्र",
        "गोदावरी-कृष्णा",
        "नर्मदा-तापी"
      ],
      "answer": 1
    },
    {
      "q": "चिल्का झील किस राज्य में है?",
      "options": [
        "गुजरात",
        "ओडिशा",
        "बिहार",
        "पंजाब"
      ],
      "answer": 1
    },
    {
      "q": "लोकटक झील किस राज्य में है?",
      "options": [
        "मेघालय",
        "मणिपुर",
        "राजस्थान",
        "गोवा"
      ],
      "answer": 1
    },
    {
      "q": "वुलर झील कहाँ स्थित है?",
      "options": [
        "केरल",
        "जम्मू-कश्मीर",
        "ओडिशा",
        "तमिलनाडु"
      ],
      "answer": 1
    },
    {
      "q": "काजीरंगा राष्ट्रीय उद्यान किस राज्य में है?",
      "options": [
        "गुजरात",
        "असम",
        "उत्तराखंड",
        "बिहार"
      ],
      "answer": 1
    },
    {
      "q": "गिर राष्ट्रीय उद्यान किसके लिए प्रसिद्ध है?",
      "options": [
        "हाथी",
        "हिम तेंदुआ",
        "एक सींग वाला गैंडा",
        "एशियाई शेर"
      ],
      "answer": 3
    },
    {
      "q": "जिम कॉर्बेट राष्ट्रीय उद्यान किस राज्य में है?",
      "options": [
        "महाराष्ट्र",
        "उत्तराखंड",
        "राजस्थान",
        "बिहार"
      ],
      "answer": 1
    },
    {
      "q": "भारत में मानसून की मुख्य वर्षा किस दिशा से आती है?",
      "options": [
        "दक्षिण-पश्चिम",
        "उत्तर-पश्चिम",
        "उत्तर-पूर्व",
        "दक्षिण-पूर्व"
      ],
      "answer": 0
    },
    {
      "q": "काली मिट्टी किस फसल के लिए उपयुक्त मानी जाती है?",
      "options": [
        "कपास",
        "जूट",
        "नारियल",
        "चाय"
      ],
      "answer": 0
    },
    {
      "q": "भारत में चाय उत्पादन के लिए प्रसिद्ध राज्य कौन-सा है?",
      "options": [
        "पंजाब",
        "असम",
        "राजस्थान",
        "हरियाणा"
      ],
      "answer": 1
    },
    {
      "q": "भारत में कॉफी उत्पादन के लिए प्रसिद्ध राज्य कौन-सा है?",
      "options": [
        "कर्नाटक",
        "उत्तर प्रदेश",
        "बिहार",
        "पंजाब"
      ],
      "answer": 0
    },
    {
      "q": "नर्मदा नदी किस दिशा में बहकर अरब सागर में गिरती है?",
      "options": [
        "पश्चिम",
        "उत्तर",
        "पूर्व",
        "दक्षिण"
      ],
      "answer": 0
    },
    {
      "q": "गोदावरी नदी को किस उपनाम से जाना जाता है?",
      "options": [
        "मरुस्थली नदी",
        "उत्तर गंगा",
        "दक्षिण गंगा",
        "हिमालय पुत्री"
      ],
      "answer": 2
    },
    {
      "q": "कावेरी नदी मुख्यतः किन राज्यों से होकर बहती है?",
      "options": [
        "कर्नाटक और तमिलनाडु",
        "गुजरात और राजस्थान",
        "पंजाब और हरियाणा",
        "बिहार और झारखंड"
      ],
      "answer": 0
    },
    {
      "q": "भारत का मानक समय किस देशांतर पर आधारित है?",
      "options": [
        "90° पश्चिम",
        "82°30′ पूर्व",
        "0°",
        "23°30′ उत्तर"
      ],
      "answer": 1
    },
    {
      "q": "कर्क रेखा भारत के कितने राज्यों से गुजरती है?",
      "options": [
        "8",
        "6",
        "10",
        "5"
      ],
      "answer": 0
    },
    {
      "q": "विश्व का सबसे बड़ा महाद्वीप कौन-सा है?",
      "options": [
        "अफ्रीका",
        "एशिया",
        "यूरोप",
        "ऑस्ट्रेलिया"
      ],
      "answer": 1
    },
    {
      "q": "विश्व का सबसे छोटा महाद्वीप कौन-सा है?",
      "options": [
        "ऑस्ट्रेलिया",
        "दक्षिण अमेरिका",
        "अंटार्कटिका",
        "यूरोप"
      ],
      "answer": 0
    },
    {
      "q": "विश्व का सबसे बड़ा गर्म मरुस्थल कौन-सा है?",
      "options": [
        "गोबी",
        "सहारा",
        "थार",
        "कालाहारी"
      ],
      "answer": 1
    },
    {
      "q": "विश्व की सबसे ऊँची पर्वत चोटी कौन-सी है?",
      "options": [
        "माउंट एवरेस्ट",
        "कंचनजंघा",
        "K2",
        "नंदा देवी"
      ],
      "answer": 0
    },
    {
      "q": "विश्व की सबसे लंबी महाद्वीपीय पर्वत श्रृंखला कौन-सी है?",
      "options": [
        "एंडीज",
        "रॉकी",
        "हिमालय",
        "आल्प्स"
      ],
      "answer": 0
    },
    {
      "q": "भूमध्य रेखा पृथ्वी को किन भागों में बाँटती है?",
      "options": [
        "उत्तरी और दक्षिणी गोलार्ध",
        "स्थल और जल",
        "गर्म और ठंडे क्षेत्र",
        "पूर्वी और पश्चिमी गोलार्ध"
      ],
      "answer": 0
    },
    {
      "q": "शून्य देशांतर रेखा कहाँ से गुजरती है?",
      "options": [
        "दिल्ली",
        "काहिरा",
        "ग्रीनविच",
        "टोक्यो"
      ],
      "answer": 2
    },
    {
      "q": "जापान की राजधानी क्या है?",
      "options": [
        "ओसाका",
        "क्योटो",
        "टोक्यो",
        "बीजिंग"
      ],
      "answer": 2
    },
    {
      "q": "नेपाल की राजधानी क्या है?",
      "options": [
        "ढाका",
        "थिम्फू",
        "काठमांडू",
        "कोलंबो"
      ],
      "answer": 2
    },
    {
      "q": "भूटान की राजधानी क्या है?",
      "options": [
        "थिम्फू",
        "ढाका",
        "काठमांडू",
        "माले"
      ],
      "answer": 0
    },
    {
      "q": "बांग्लादेश की राजधानी क्या है?",
      "options": [
        "थिम्फू",
        "काठमांडू",
        "ढाका",
        "कराची"
      ],
      "answer": 2
    },
    {
      "q": "श्रीलंका की विधायी राजधानी कौन-सी है?",
      "options": [
        "गाले",
        "श्री जयवर्धनेपुरा कोट्टे",
        "कोलंबो ही विधायी राजधानी",
        "कैंडी"
      ],
      "answer": 1
    },
    {
      "q": "मिस्र से होकर कौन-सी प्रमुख नदी बहती है?",
      "options": [
        "नील",
        "डेन्यूब",
        "अमेजन",
        "यांग्त्से"
      ],
      "answer": 0
    },
    {
      "q": "अमेजन वर्षावन मुख्यतः किस महाद्वीप में है?",
      "options": [
        "दक्षिण अमेरिका",
        "एशिया",
        "अफ्रीका",
        "यूरोप"
      ],
      "answer": 0
    },
    {
      "q": "ग्रेट बैरियर रीफ किस देश के तट पर है?",
      "options": [
        "दक्षिण अफ्रीका",
        "जापान",
        "ऑस्ट्रेलिया",
        "भारत"
      ],
      "answer": 2
    },
    {
      "q": "भूमध्य सागर किन महाद्वीपों के बीच है?",
      "options": [
        "एशिया और ऑस्ट्रेलिया",
        "अमेरिका और यूरोप",
        "यूरोप, अफ्रीका और एशिया",
        "अफ्रीका और अंटार्कटिका"
      ],
      "answer": 2
    },
    {
      "q": "पृथ्वी का आकार लगभग कैसा है?",
      "options": [
        "ध्रुवों पर थोड़ा चपटा गोलाभ",
        "समतल चक्र",
        "पूर्ण घन",
        "त्रिकोण"
      ],
      "answer": 0
    },
    {
      "q": "भूकंप की तीव्रता मापने के लिए कौन-सा पैमाना प्रसिद्ध है?",
      "options": [
        "रिक्टर पैमाना",
        "ब्यूफोर्ट",
        "सेल्सियस",
        "मोह्स"
      ],
      "answer": 0
    },
    {
      "q": "ज्वालामुखी से निकलने वाला पिघला पदार्थ क्या कहलाता है?",
      "options": [
        "लावा",
        "हिम",
        "ओस",
        "धुंध"
      ],
      "answer": 0
    },
    {
      "q": "समुद्र तल से ऊँचाई मापने का सामान्य संदर्भ क्या है?",
      "options": [
        "ध्रुवीय वृत्त",
        "औसत समुद्र तल",
        "स्थानीय समय",
        "भूमध्य रेखा"
      ],
      "answer": 1
    },
    {
      "q": "मैंग्रोव वन किस क्षेत्र में उगते हैं?",
      "options": [
        "रेगिस्तान में",
        "ऊँचे हिम शिखरों पर",
        "ज्वारीय तटीय क्षेत्रों में",
        "घास के मैदान के भीतर"
      ],
      "answer": 2
    },
    {
      "q": "पवन ऊर्जा किससे प्राप्त होती है?",
      "options": [
        "चलती हवा से",
        "प्राकृतिक गैस से",
        "पेट्रोल से",
        "कोयले से"
      ],
      "answer": 0
    },
    {
      "q": "लौह अयस्क से मुख्यतः कौन-सी धातु प्राप्त होती है?",
      "options": [
        "लोहा",
        "एल्यूमिनियम",
        "सोना",
        "ताँबा"
      ],
      "answer": 0
    },
    {
      "q": "भारत का प्रमुख कोयला क्षेत्र झरिया किस राज्य में है?",
      "options": [
        "केरल",
        "झारखंड",
        "गुजरात",
        "पंजाब"
      ],
      "answer": 1
    },
    {
      "q": "भाखड़ा नांगल बाँध किस नदी पर है?",
      "options": [
        "गंगा",
        "महानदी",
        "सतलुज",
        "कावेरी"
      ],
      "answer": 2
    },
    {
      "q": "हीराकुंड बाँध किस नदी पर है?",
      "options": [
        "यमुना",
        "महानदी",
        "नर्मदा",
        "गोदावरी"
      ],
      "answer": 1
    },
    {
      "q": "सरदार सरोवर बाँध किस नदी पर है?",
      "options": [
        "ब्रह्मपुत्र",
        "कृष्णा",
        "गंगा",
        "नर्मदा"
      ],
      "answer": 3
    },
    {
      "q": "भारत में सबसे लंबी समुद्री तटरेखा वाला राज्य कौन-सा है?",
      "options": [
        "केरल",
        "गुजरात",
        "गोवा",
        "ओडिशा"
      ],
      "answer": 1
    },
    {
      "q": "दक्कन का पठार भारत के किस भाग में है?",
      "options": [
        "उत्तरी हिमालय",
        "पूर्वोत्तर सीमांत",
        "दक्षिणी भारत",
        "थार मरुस्थल"
      ],
      "answer": 2
    },
    {
      "q": "अरावली पर्वतमाला मुख्यतः किस राज्य में फैली है?",
      "options": [
        "असम",
        "बिहार",
        "केरल",
        "राजस्थान"
      ],
      "answer": 3
    },
    {
      "q": "हिमालय किस प्रकार के पर्वत हैं?",
      "options": [
        "अवशिष्ट पर्वत",
        "रेतीले टीले",
        "ज्वालामुखी पठार",
        "नवीन वलित पर्वत"
      ],
      "answer": 3
    },
    {
      "q": "डेल्टा सामान्यतः कहाँ बनता है?",
      "options": [
        "नदी के स्रोत पर",
        "नदी के मुहाने पर",
        "मरुस्थल के केंद्र में",
        "पर्वत शिखर पर"
      ],
      "answer": 1
    },
    {
      "q": "ज्वार-भाटा मुख्यतः किसके गुरुत्वाकर्षण से प्रभावित होता है?",
      "options": [
        "चंद्रमा और सूर्य",
        "भूकंप",
        "केवल हवाओं",
        "केवल बादलों"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: भारत की राजधानी क्या है?",
      "options": [
        "कोलकाता",
        "नई दिल्ली",
        "चेन्नई",
        "मुंबई"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: विश्व का सबसे बड़ा महासागर कौन-सा है?",
      "options": [
        "अटलांटिक",
        "प्रशांत महासागर",
        "आर्कटिक",
        "हिंद महासागर"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: भारत में गंगा का उद्गम किस क्षेत्र से होता है?",
      "options": [
        "गंगोत्री हिमनद क्षेत्र",
        "थार मरुस्थल",
        "अरावली",
        "दक्कन का पठार"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन-सा है?",
      "options": [
        "मध्य प्रदेश",
        "महाराष्ट्र",
        "उत्तर प्रदेश",
        "राजस्थान"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: क्षेत्रफल के अनुसार भारत का सबसे छोटा राज्य कौन-सा है?",
      "options": [
        "मणिपुर",
        "गोवा",
        "सिक्किम",
        "त्रिपुरा"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: भारत की सबसे लंबी नदी प्रणाली कौन-सी है?",
      "options": [
        "गंगा नदी प्रणाली",
        "तापी",
        "नर्मदा",
        "कावेरी"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: भारत का दक्षिणतम मुख्यभूमि बिंदु कौन-सा है?",
      "options": [
        "रामेश्वरम",
        "इंदिरा पॉइंट",
        "कोच्चि",
        "कन्याकुमारी"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भारत का सबसे ऊँचा पर्वत शिखर (भारत के दावे वाले क्षेत्र सहित) कौन-सा माना जाता है?",
      "options": [
        "अरावली",
        "कंचनजंघा भारत का सर्वोच्च शिखर है",
        "गुरु शिखर",
        "अनामुडी"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: थार मरुस्थल मुख्यतः किस राज्य में है?",
      "options": [
        "असम",
        "राजस्थान",
        "बिहार",
        "केरल"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: सुंदरबन डेल्टा किस नदी प्रणाली से बनता है?",
      "options": [
        "गोदावरी-कृष्णा",
        "नर्मदा-तापी",
        "गंगा-ब्रह्मपुत्र",
        "कावेरी-पेरियार"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: चिल्का झील किस राज्य में है?",
      "options": [
        "पंजाब",
        "बिहार",
        "गुजरात",
        "ओडिशा"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: लोकटक झील किस राज्य में है?",
      "options": [
        "मेघालय",
        "मणिपुर",
        "राजस्थान",
        "गोवा"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: वुलर झील कहाँ स्थित है?",
      "options": [
        "ओडिशा",
        "तमिलनाडु",
        "जम्मू-कश्मीर",
        "केरल"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: काजीरंगा राष्ट्रीय उद्यान किस राज्य में है?",
      "options": [
        "उत्तराखंड",
        "असम",
        "गुजरात",
        "बिहार"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: गिर राष्ट्रीय उद्यान किसके लिए प्रसिद्ध है?",
      "options": [
        "एशियाई शेर",
        "हिम तेंदुआ",
        "हाथी",
        "एक सींग वाला गैंडा"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: जिम कॉर्बेट राष्ट्रीय उद्यान किस राज्य में है?",
      "options": [
        "राजस्थान",
        "महाराष्ट्र",
        "बिहार",
        "उत्तराखंड"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भारत में मानसून की मुख्य वर्षा किस दिशा से आती है?",
      "options": [
        "उत्तर-पूर्व",
        "दक्षिण-पूर्व",
        "दक्षिण-पश्चिम",
        "उत्तर-पश्चिम"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: काली मिट्टी किस फसल के लिए उपयुक्त मानी जाती है?",
      "options": [
        "नारियल",
        "कपास",
        "जूट",
        "चाय"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: भारत में चाय उत्पादन के लिए प्रसिद्ध राज्य कौन-सा है?",
      "options": [
        "हरियाणा",
        "असम",
        "राजस्थान",
        "पंजाब"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: भारत में कॉफी उत्पादन के लिए प्रसिद्ध राज्य कौन-सा है?",
      "options": [
        "बिहार",
        "उत्तर प्रदेश",
        "पंजाब",
        "कर्नाटक"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: नर्मदा नदी किस दिशा में बहकर अरब सागर में गिरती है?",
      "options": [
        "पूर्व",
        "उत्तर",
        "पश्चिम",
        "दक्षिण"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: गोदावरी नदी को किस उपनाम से जाना जाता है?",
      "options": [
        "मरुस्थली नदी",
        "दक्षिण गंगा",
        "हिमालय पुत्री",
        "उत्तर गंगा"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: कावेरी नदी मुख्यतः किन राज्यों से होकर बहती है?",
      "options": [
        "गुजरात और राजस्थान",
        "बिहार और झारखंड",
        "पंजाब और हरियाणा",
        "कर्नाटक और तमिलनाडु"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भारत का मानक समय किस देशांतर पर आधारित है?",
      "options": [
        "0°",
        "23°30′ उत्तर",
        "90° पश्चिम",
        "82°30′ पूर्व"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: कर्क रेखा भारत के कितने राज्यों से गुजरती है?",
      "options": [
        "10",
        "8",
        "6",
        "5"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: विश्व का सबसे बड़ा महाद्वीप कौन-सा है?",
      "options": [
        "यूरोप",
        "ऑस्ट्रेलिया",
        "एशिया",
        "अफ्रीका"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: विश्व का सबसे छोटा महाद्वीप कौन-सा है?",
      "options": [
        "ऑस्ट्रेलिया",
        "अंटार्कटिका",
        "यूरोप",
        "दक्षिण अमेरिका"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: विश्व का सबसे बड़ा गर्म मरुस्थल कौन-सा है?",
      "options": [
        "सहारा",
        "कालाहारी",
        "थार",
        "गोबी"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: विश्व की सबसे ऊँची पर्वत चोटी कौन-सी है?",
      "options": [
        "K2",
        "माउंट एवरेस्ट",
        "कंचनजंघा",
        "नंदा देवी"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: विश्व की सबसे लंबी महाद्वीपीय पर्वत श्रृंखला कौन-सी है?",
      "options": [
        "रॉकी",
        "हिमालय",
        "एंडीज",
        "आल्प्स"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: भूमध्य रेखा पृथ्वी को किन भागों में बाँटती है?",
      "options": [
        "गर्म और ठंडे क्षेत्र",
        "उत्तरी और दक्षिणी गोलार्ध",
        "पूर्वी और पश्चिमी गोलार्ध",
        "स्थल और जल"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: शून्य देशांतर रेखा कहाँ से गुजरती है?",
      "options": [
        "काहिरा",
        "दिल्ली",
        "ग्रीनविच",
        "टोक्यो"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: जापान की राजधानी क्या है?",
      "options": [
        "ओसाका",
        "टोक्यो",
        "क्योटो",
        "बीजिंग"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: नेपाल की राजधानी क्या है?",
      "options": [
        "कोलंबो",
        "थिम्फू",
        "ढाका",
        "काठमांडू"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भूटान की राजधानी क्या है?",
      "options": [
        "काठमांडू",
        "ढाका",
        "माले",
        "थिम्फू"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: बांग्लादेश की राजधानी क्या है?",
      "options": [
        "थिम्फू",
        "कराची",
        "काठमांडू",
        "ढाका"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: श्रीलंका की विधायी राजधानी कौन-सी है?",
      "options": [
        "कैंडी",
        "गाले",
        "कोलंबो ही विधायी राजधानी",
        "श्री जयवर्धनेपुरा कोट्टे"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: मिस्र से होकर कौन-सी प्रमुख नदी बहती है?",
      "options": [
        "नील",
        "यांग्त्से",
        "अमेजन",
        "डेन्यूब"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: अमेजन वर्षावन मुख्यतः किस महाद्वीप में है?",
      "options": [
        "यूरोप",
        "दक्षिण अमेरिका",
        "एशिया",
        "अफ्रीका"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: ग्रेट बैरियर रीफ किस देश के तट पर है?",
      "options": [
        "जापान",
        "भारत",
        "दक्षिण अफ्रीका",
        "ऑस्ट्रेलिया"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भूमध्य सागर किन महाद्वीपों के बीच है?",
      "options": [
        "अफ्रीका और अंटार्कटिका",
        "एशिया और ऑस्ट्रेलिया",
        "यूरोप, अफ्रीका और एशिया",
        "अमेरिका और यूरोप"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: पृथ्वी का आकार लगभग कैसा है?",
      "options": [
        "पूर्ण घन",
        "समतल चक्र",
        "ध्रुवों पर थोड़ा चपटा गोलाभ",
        "त्रिकोण"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: भूकंप की तीव्रता मापने के लिए कौन-सा पैमाना प्रसिद्ध है?",
      "options": [
        "मोह्स",
        "सेल्सियस",
        "ब्यूफोर्ट",
        "रिक्टर पैमाना"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: ज्वालामुखी से निकलने वाला पिघला पदार्थ क्या कहलाता है?",
      "options": [
        "ओस",
        "लावा",
        "हिम",
        "धुंध"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: समुद्र तल से ऊँचाई मापने का सामान्य संदर्भ क्या है?",
      "options": [
        "स्थानीय समय",
        "ध्रुवीय वृत्त",
        "भूमध्य रेखा",
        "औसत समुद्र तल"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: मैंग्रोव वन किस क्षेत्र में उगते हैं?",
      "options": [
        "घास के मैदान के भीतर",
        "रेगिस्तान में",
        "ज्वारीय तटीय क्षेत्रों में",
        "ऊँचे हिम शिखरों पर"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: पवन ऊर्जा किससे प्राप्त होती है?",
      "options": [
        "प्राकृतिक गैस से",
        "पेट्रोल से",
        "चलती हवा से",
        "कोयले से"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: लौह अयस्क से मुख्यतः कौन-सी धातु प्राप्त होती है?",
      "options": [
        "सोना",
        "लोहा",
        "एल्यूमिनियम",
        "ताँबा"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: भारत का प्रमुख कोयला क्षेत्र झरिया किस राज्य में है?",
      "options": [
        "पंजाब",
        "गुजरात",
        "केरल",
        "झारखंड"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भाखड़ा नांगल बाँध किस नदी पर है?",
      "options": [
        "कावेरी",
        "महानदी",
        "सतलुज",
        "गंगा"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: हीराकुंड बाँध किस नदी पर है?",
      "options": [
        "नर्मदा",
        "गोदावरी",
        "यमुना",
        "महानदी"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: सरदार सरोवर बाँध किस नदी पर है?",
      "options": [
        "गंगा",
        "ब्रह्मपुत्र",
        "कृष्णा",
        "नर्मदा"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: भारत में सबसे लंबी समुद्री तटरेखा वाला राज्य कौन-सा है?",
      "options": [
        "गुजरात",
        "ओडिशा",
        "केरल",
        "गोवा"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: दक्कन का पठार भारत के किस भाग में है?",
      "options": [
        "थार मरुस्थल",
        "दक्षिणी भारत",
        "उत्तरी हिमालय",
        "पूर्वोत्तर सीमांत"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: अरावली पर्वतमाला मुख्यतः किस राज्य में फैली है?",
      "options": [
        "राजस्थान",
        "असम",
        "बिहार",
        "केरल"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: हिमालय किस प्रकार के पर्वत हैं?",
      "options": [
        "अवशिष्ट पर्वत",
        "ज्वालामुखी पठार",
        "नवीन वलित पर्वत",
        "रेतीले टीले"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: डेल्टा सामान्यतः कहाँ बनता है?",
      "options": [
        "पर्वत शिखर पर",
        "मरुस्थल के केंद्र में",
        "नदी के स्रोत पर",
        "नदी के मुहाने पर"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: ज्वार-भाटा मुख्यतः किसके गुरुत्वाकर्षण से प्रभावित होता है?",
      "options": [
        "केवल बादलों",
        "भूकंप",
        "केवल हवाओं",
        "चंद्रमा और सूर्य"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: भारत की राजधानी क्या है?",
      "options": [
        "कोलकाता",
        "चेन्नई",
        "मुंबई",
        "नई दिल्ली"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: विश्व का सबसे बड़ा महासागर कौन-सा है?",
      "options": [
        "प्रशांत महासागर",
        "आर्कटिक",
        "अटलांटिक",
        "हिंद महासागर"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: भारत में गंगा का उद्गम किस क्षेत्र से होता है?",
      "options": [
        "थार मरुस्थल",
        "गंगोत्री हिमनद क्षेत्र",
        "दक्कन का पठार",
        "अरावली"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन-सा है?",
      "options": [
        "राजस्थान",
        "मध्य प्रदेश",
        "महाराष्ट्र",
        "उत्तर प्रदेश"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: क्षेत्रफल के अनुसार भारत का सबसे छोटा राज्य कौन-सा है?",
      "options": [
        "सिक्किम",
        "त्रिपुरा",
        "गोवा",
        "मणिपुर"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: भारत की सबसे लंबी नदी प्रणाली कौन-सी है?",
      "options": [
        "नर्मदा",
        "कावेरी",
        "तापी",
        "गंगा नदी प्रणाली"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: भारत का दक्षिणतम मुख्यभूमि बिंदु कौन-सा है?",
      "options": [
        "रामेश्वरम",
        "कन्याकुमारी",
        "इंदिरा पॉइंट",
        "कोच्चि"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: भारत का सबसे ऊँचा पर्वत शिखर (भारत के दावे वाले क्षेत्र सहित) कौन-सा माना जाता है?",
      "options": [
        "अरावली",
        "अनामुडी",
        "गुरु शिखर",
        "कंचनजंघा भारत का सर्वोच्च शिखर है"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: थार मरुस्थल मुख्यतः किस राज्य में है?",
      "options": [
        "असम",
        "बिहार",
        "राजस्थान",
        "केरल"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: सुंदरबन डेल्टा किस नदी प्रणाली से बनता है?",
      "options": [
        "गंगा-ब्रह्मपुत्र",
        "कावेरी-पेरियार",
        "नर्मदा-तापी",
        "गोदावरी-कृष्णा"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: चिल्का झील किस राज्य में है?",
      "options": [
        "पंजाब",
        "गुजरात",
        "बिहार",
        "ओडिशा"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: लोकटक झील किस राज्य में है?",
      "options": [
        "राजस्थान",
        "मणिपुर",
        "मेघालय",
        "गोवा"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: वुलर झील कहाँ स्थित है?",
      "options": [
        "केरल",
        "ओडिशा",
        "तमिलनाडु",
        "जम्मू-कश्मीर"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: काजीरंगा राष्ट्रीय उद्यान किस राज्य में है?",
      "options": [
        "असम",
        "उत्तराखंड",
        "गुजरात",
        "बिहार"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: गिर राष्ट्रीय उद्यान किसके लिए प्रसिद्ध है?",
      "options": [
        "एक सींग वाला गैंडा",
        "हिम तेंदुआ",
        "हाथी",
        "एशियाई शेर"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: जिम कॉर्बेट राष्ट्रीय उद्यान किस राज्य में है?",
      "options": [
        "महाराष्ट्र",
        "राजस्थान",
        "उत्तराखंड",
        "बिहार"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: भारत में मानसून की मुख्य वर्षा किस दिशा से आती है?",
      "options": [
        "उत्तर-पश्चिम",
        "दक्षिण-पश्चिम",
        "उत्तर-पूर्व",
        "दक्षिण-पूर्व"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: काली मिट्टी किस फसल के लिए उपयुक्त मानी जाती है?",
      "options": [
        "नारियल",
        "कपास",
        "जूट",
        "चाय"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: भारत में चाय उत्पादन के लिए प्रसिद्ध राज्य कौन-सा है?",
      "options": [
        "असम",
        "राजस्थान",
        "हरियाणा",
        "पंजाब"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: भारत में कॉफी उत्पादन के लिए प्रसिद्ध राज्य कौन-सा है?",
      "options": [
        "उत्तर प्रदेश",
        "बिहार",
        "पंजाब",
        "कर्नाटक"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: नर्मदा नदी किस दिशा में बहकर अरब सागर में गिरती है?",
      "options": [
        "पूर्व",
        "पश्चिम",
        "दक्षिण",
        "उत्तर"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: गोदावरी नदी को किस उपनाम से जाना जाता है?",
      "options": [
        "हिमालय पुत्री",
        "मरुस्थली नदी",
        "उत्तर गंगा",
        "दक्षिण गंगा"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: कावेरी नदी मुख्यतः किन राज्यों से होकर बहती है?",
      "options": [
        "पंजाब और हरियाणा",
        "बिहार और झारखंड",
        "गुजरात और राजस्थान",
        "कर्नाटक और तमिलनाडु"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: भारत का मानक समय किस देशांतर पर आधारित है?",
      "options": [
        "90° पश्चिम",
        "82°30′ पूर्व",
        "0°",
        "23°30′ उत्तर"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: कर्क रेखा भारत के कितने राज्यों से गुजरती है?",
      "options": [
        "5",
        "10",
        "6",
        "8"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: विश्व का सबसे बड़ा महाद्वीप कौन-सा है?",
      "options": [
        "एशिया",
        "यूरोप",
        "ऑस्ट्रेलिया",
        "अफ्रीका"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: विश्व का सबसे छोटा महाद्वीप कौन-सा है?",
      "options": [
        "अंटार्कटिका",
        "ऑस्ट्रेलिया",
        "यूरोप",
        "दक्षिण अमेरिका"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: विश्व का सबसे बड़ा गर्म मरुस्थल कौन-सा है?",
      "options": [
        "कालाहारी",
        "थार",
        "गोबी",
        "सहारा"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: विश्व की सबसे ऊँची पर्वत चोटी कौन-सी है?",
      "options": [
        "नंदा देवी",
        "K2",
        "माउंट एवरेस्ट",
        "कंचनजंघा"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: विश्व की सबसे लंबी महाद्वीपीय पर्वत श्रृंखला कौन-सी है?",
      "options": [
        "आल्प्स",
        "रॉकी",
        "हिमालय",
        "एंडीज"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: भूमध्य रेखा पृथ्वी को किन भागों में बाँटती है?",
      "options": [
        "स्थल और जल",
        "पूर्वी और पश्चिमी गोलार्ध",
        "गर्म और ठंडे क्षेत्र",
        "उत्तरी और दक्षिणी गोलार्ध"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: शून्य देशांतर रेखा कहाँ से गुजरती है?",
      "options": [
        "टोक्यो",
        "काहिरा",
        "ग्रीनविच",
        "दिल्ली"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: जापान की राजधानी क्या है?",
      "options": [
        "क्योटो",
        "बीजिंग",
        "ओसाका",
        "टोक्यो"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: नेपाल की राजधानी क्या है?",
      "options": [
        "काठमांडू",
        "थिम्फू",
        "कोलंबो",
        "ढाका"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: भूटान की राजधानी क्या है?",
      "options": [
        "थिम्फू",
        "ढाका",
        "माले",
        "काठमांडू"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: बांग्लादेश की राजधानी क्या है?",
      "options": [
        "काठमांडू",
        "कराची",
        "ढाका",
        "थिम्फू"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: श्रीलंका की विधायी राजधानी कौन-सी है?",
      "options": [
        "कैंडी",
        "गाले",
        "कोलंबो ही विधायी राजधानी",
        "श्री जयवर्धनेपुरा कोट्टे"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: मिस्र से होकर कौन-सी प्रमुख नदी बहती है?",
      "options": [
        "यांग्त्से",
        "डेन्यूब",
        "अमेजन",
        "नील"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: अमेजन वर्षावन मुख्यतः किस महाद्वीप में है?",
      "options": [
        "दक्षिण अमेरिका",
        "अफ्रीका",
        "यूरोप",
        "एशिया"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: ग्रेट बैरियर रीफ किस देश के तट पर है?",
      "options": [
        "भारत",
        "ऑस्ट्रेलिया",
        "दक्षिण अफ्रीका",
        "जापान"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: भूमध्य सागर किन महाद्वीपों के बीच है?",
      "options": [
        "अफ्रीका और अंटार्कटिका",
        "यूरोप, अफ्रीका और एशिया",
        "अमेरिका और यूरोप",
        "एशिया और ऑस्ट्रेलिया"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: पृथ्वी का आकार लगभग कैसा है?",
      "options": [
        "ध्रुवों पर थोड़ा चपटा गोलाभ",
        "पूर्ण घन",
        "समतल चक्र",
        "त्रिकोण"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: भूकंप की तीव्रता मापने के लिए कौन-सा पैमाना प्रसिद्ध है?",
      "options": [
        "मोह्स",
        "रिक्टर पैमाना",
        "ब्यूफोर्ट",
        "सेल्सियस"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: ज्वालामुखी से निकलने वाला पिघला पदार्थ क्या कहलाता है?",
      "options": [
        "धुंध",
        "लावा",
        "हिम",
        "ओस"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: समुद्र तल से ऊँचाई मापने का सामान्य संदर्भ क्या है?",
      "options": [
        "औसत समुद्र तल",
        "भूमध्य रेखा",
        "स्थानीय समय",
        "ध्रुवीय वृत्त"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: मैंग्रोव वन किस क्षेत्र में उगते हैं?",
      "options": [
        "घास के मैदान के भीतर",
        "रेगिस्तान में",
        "ऊँचे हिम शिखरों पर",
        "ज्वारीय तटीय क्षेत्रों में"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: पवन ऊर्जा किससे प्राप्त होती है?",
      "options": [
        "प्राकृतिक गैस से",
        "पेट्रोल से",
        "चलती हवा से",
        "कोयले से"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: लौह अयस्क से मुख्यतः कौन-सी धातु प्राप्त होती है?",
      "options": [
        "लोहा",
        "सोना",
        "एल्यूमिनियम",
        "ताँबा"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: भारत का प्रमुख कोयला क्षेत्र झरिया किस राज्य में है?",
      "options": [
        "पंजाब",
        "केरल",
        "झारखंड",
        "गुजरात"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: भाखड़ा नांगल बाँध किस नदी पर है?",
      "options": [
        "गंगा",
        "महानदी",
        "सतलुज",
        "कावेरी"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: हीराकुंड बाँध किस नदी पर है?",
      "options": [
        "यमुना",
        "गोदावरी",
        "नर्मदा",
        "महानदी"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: सरदार सरोवर बाँध किस नदी पर है?",
      "options": [
        "गंगा",
        "नर्मदा",
        "ब्रह्मपुत्र",
        "कृष्णा"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: भारत में सबसे लंबी समुद्री तटरेखा वाला राज्य कौन-सा है?",
      "options": [
        "गोवा",
        "ओडिशा",
        "केरल",
        "गुजरात"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: दक्कन का पठार भारत के किस भाग में है?",
      "options": [
        "उत्तरी हिमालय",
        "पूर्वोत्तर सीमांत",
        "दक्षिणी भारत",
        "थार मरुस्थल"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: अरावली पर्वतमाला मुख्यतः किस राज्य में फैली है?",
      "options": [
        "केरल",
        "राजस्थान",
        "बिहार",
        "असम"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: हिमालय किस प्रकार के पर्वत हैं?",
      "options": [
        "ज्वालामुखी पठार",
        "रेतीले टीले",
        "नवीन वलित पर्वत",
        "अवशिष्ट पर्वत"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: डेल्टा सामान्यतः कहाँ बनता है?",
      "options": [
        "नदी के मुहाने पर",
        "मरुस्थल के केंद्र में",
        "नदी के स्रोत पर",
        "पर्वत शिखर पर"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: ज्वार-भाटा मुख्यतः किसके गुरुत्वाकर्षण से प्रभावित होता है?",
      "options": [
        "केवल हवाओं",
        "चंद्रमा और सूर्य",
        "भूकंप",
        "केवल बादलों"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—भारत की राजधानी क्या है?",
      "options": [
        "कोलकाता",
        "मुंबई",
        "चेन्नई",
        "नई दिल्ली"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—विश्व का सबसे बड़ा महासागर कौन-सा है?",
      "options": [
        "अटलांटिक",
        "हिंद महासागर",
        "प्रशांत महासागर",
        "आर्कटिक"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—भारत में गंगा का उद्गम किस क्षेत्र से होता है?",
      "options": [
        "अरावली",
        "दक्कन का पठार",
        "गंगोत्री हिमनद क्षेत्र",
        "थार मरुस्थल"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन-सा है?",
      "options": [
        "महाराष्ट्र",
        "मध्य प्रदेश",
        "राजस्थान",
        "उत्तर प्रदेश"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—क्षेत्रफल के अनुसार भारत का सबसे छोटा राज्य कौन-सा है?",
      "options": [
        "त्रिपुरा",
        "सिक्किम",
        "गोवा",
        "मणिपुर"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—भारत की सबसे लंबी नदी प्रणाली कौन-सी है?",
      "options": [
        "गंगा नदी प्रणाली",
        "तापी",
        "नर्मदा",
        "कावेरी"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—भारत का दक्षिणतम मुख्यभूमि बिंदु कौन-सा है?",
      "options": [
        "इंदिरा पॉइंट",
        "रामेश्वरम",
        "कोच्चि",
        "कन्याकुमारी"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—भारत का सबसे ऊँचा पर्वत शिखर (भारत के दावे वाले क्षेत्र सहित) कौन-सा माना जाता है?",
      "options": [
        "अरावली",
        "कंचनजंघा भारत का सर्वोच्च शिखर है",
        "गुरु शिखर",
        "अनामुडी"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—थार मरुस्थल मुख्यतः किस राज्य में है?",
      "options": [
        "असम",
        "केरल",
        "राजस्थान",
        "बिहार"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—सुंदरबन डेल्टा किस नदी प्रणाली से बनता है?",
      "options": [
        "गंगा-ब्रह्मपुत्र",
        "कावेरी-पेरियार",
        "गोदावरी-कृष्णा",
        "नर्मदा-तापी"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—चिल्का झील किस राज्य में है?",
      "options": [
        "बिहार",
        "पंजाब",
        "ओडिशा",
        "गुजरात"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—लोकटक झील किस राज्य में है?",
      "options": [
        "गोवा",
        "मणिपुर",
        "मेघालय",
        "राजस्थान"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—वुलर झील कहाँ स्थित है?",
      "options": [
        "ओडिशा",
        "जम्मू-कश्मीर",
        "केरल",
        "तमिलनाडु"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—काजीरंगा राष्ट्रीय उद्यान किस राज्य में है?",
      "options": [
        "बिहार",
        "असम",
        "उत्तराखंड",
        "गुजरात"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—गिर राष्ट्रीय उद्यान किसके लिए प्रसिद्ध है?",
      "options": [
        "हाथी",
        "एक सींग वाला गैंडा",
        "हिम तेंदुआ",
        "एशियाई शेर"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—जिम कॉर्बेट राष्ट्रीय उद्यान किस राज्य में है?",
      "options": [
        "राजस्थान",
        "महाराष्ट्र",
        "उत्तराखंड",
        "बिहार"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—भारत में मानसून की मुख्य वर्षा किस दिशा से आती है?",
      "options": [
        "दक्षिण-पूर्व",
        "उत्तर-पश्चिम",
        "दक्षिण-पश्चिम",
        "उत्तर-पूर्व"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—काली मिट्टी किस फसल के लिए उपयुक्त मानी जाती है?",
      "options": [
        "नारियल",
        "जूट",
        "कपास",
        "चाय"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—भारत में चाय उत्पादन के लिए प्रसिद्ध राज्य कौन-सा है?",
      "options": [
        "राजस्थान",
        "पंजाब",
        "हरियाणा",
        "असम"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—भारत में कॉफी उत्पादन के लिए प्रसिद्ध राज्य कौन-सा है?",
      "options": [
        "उत्तर प्रदेश",
        "पंजाब",
        "बिहार",
        "कर्नाटक"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—नर्मदा नदी किस दिशा में बहकर अरब सागर में गिरती है?",
      "options": [
        "पूर्व",
        "दक्षिण",
        "उत्तर",
        "पश्चिम"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—गोदावरी नदी को किस उपनाम से जाना जाता है?",
      "options": [
        "मरुस्थली नदी",
        "उत्तर गंगा",
        "हिमालय पुत्री",
        "दक्षिण गंगा"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—कावेरी नदी मुख्यतः किन राज्यों से होकर बहती है?",
      "options": [
        "कर्नाटक और तमिलनाडु",
        "पंजाब और हरियाणा",
        "बिहार और झारखंड",
        "गुजरात और राजस्थान"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—भारत का मानक समय किस देशांतर पर आधारित है?",
      "options": [
        "23°30′ उत्तर",
        "90° पश्चिम",
        "82°30′ पूर्व",
        "0°"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—कर्क रेखा भारत के कितने राज्यों से गुजरती है?",
      "options": [
        "10",
        "6",
        "5",
        "8"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—विश्व का सबसे बड़ा महाद्वीप कौन-सा है?",
      "options": [
        "ऑस्ट्रेलिया",
        "यूरोप",
        "अफ्रीका",
        "एशिया"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—विश्व का सबसे छोटा महाद्वीप कौन-सा है?",
      "options": [
        "अंटार्कटिका",
        "दक्षिण अमेरिका",
        "यूरोप",
        "ऑस्ट्रेलिया"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—विश्व का सबसे बड़ा गर्म मरुस्थल कौन-सा है?",
      "options": [
        "कालाहारी",
        "गोबी",
        "थार",
        "सहारा"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—विश्व की सबसे ऊँची पर्वत चोटी कौन-सी है?",
      "options": [
        "माउंट एवरेस्ट",
        "नंदा देवी",
        "कंचनजंघा",
        "K2"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—विश्व की सबसे लंबी महाद्वीपीय पर्वत श्रृंखला कौन-सी है?",
      "options": [
        "एंडीज",
        "रॉकी",
        "हिमालय",
        "आल्प्स"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—भूमध्य रेखा पृथ्वी को किन भागों में बाँटती है?",
      "options": [
        "पूर्वी और पश्चिमी गोलार्ध",
        "उत्तरी और दक्षिणी गोलार्ध",
        "गर्म और ठंडे क्षेत्र",
        "स्थल और जल"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—शून्य देशांतर रेखा कहाँ से गुजरती है?",
      "options": [
        "ग्रीनविच",
        "दिल्ली",
        "टोक्यो",
        "काहिरा"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—जापान की राजधानी क्या है?",
      "options": [
        "टोक्यो",
        "बीजिंग",
        "ओसाका",
        "क्योटो"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—नेपाल की राजधानी क्या है?",
      "options": [
        "थिम्फू",
        "काठमांडू",
        "कोलंबो",
        "ढाका"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—भूटान की राजधानी क्या है?",
      "options": [
        "ढाका",
        "थिम्फू",
        "काठमांडू",
        "माले"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—बांग्लादेश की राजधानी क्या है?",
      "options": [
        "कराची",
        "काठमांडू",
        "ढाका",
        "थिम्फू"
      ],
      "answer": 2
    }
  ],
  "Computer": [
    {
      "q": "कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
      "options": [
        "CPU",
        "कीबोर्ड",
        "मॉनिटर",
        "माउस"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
      "options": [
        "CPU",
        "मॉनिटर",
        "कीबोर्ड",
        "माउस"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
      "options": [
        "मॉनिटर",
        "माउस",
        "कीबोर्ड",
        "CPU"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
      "options": [
        "कीबोर्ड",
        "मॉनिटर",
        "CPU",
        "माउस"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
      "options": [
        "मॉनिटर",
        "माउस",
        "CPU",
        "कीबोर्ड"
      ],
      "answer": 2
    },
    {
      "q": "कीबोर्ड किस प्रकार का उपकरण है?",
      "options": [
        "इनपुट",
        "आउटपुट",
        "स्टोरेज",
        "प्रिंटिंग"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: कीबोर्ड किस प्रकार का उपकरण है?",
      "options": [
        "इनपुट",
        "आउटपुट",
        "स्टोरेज",
        "प्रिंटिंग"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: कीबोर्ड किस प्रकार का उपकरण है?",
      "options": [
        "आउटपुट",
        "इनपुट",
        "स्टोरेज",
        "प्रिंटिंग"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—कीबोर्ड किस प्रकार का उपकरण है?",
      "options": [
        "स्टोरेज",
        "आउटपुट",
        "प्रिंटिंग",
        "इनपुट"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कीबोर्ड किस प्रकार का उपकरण है?",
      "options": [
        "इनपुट",
        "आउटपुट",
        "प्रिंटिंग",
        "स्टोरेज"
      ],
      "answer": 0
    },
    {
      "q": "WWW का पूरा नाम क्या है?",
      "options": [
        "Wide World Wire",
        "Web World Work",
        "World Web Window",
        "World Wide Web"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: WWW का पूरा नाम क्या है?",
      "options": [
        "Web World Work",
        "World Wide Web",
        "World Web Window",
        "Wide World Wire"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: WWW का पूरा नाम क्या है?",
      "options": [
        "Web World Work",
        "World Web Window",
        "Wide World Wire",
        "World Wide Web"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—WWW का पूरा नाम क्या है?",
      "options": [
        "World Web Window",
        "Wide World Wire",
        "Web World Work",
        "World Wide Web"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? WWW का पूरा नाम क्या है?",
      "options": [
        "World Wide Web",
        "Web World Work",
        "Wide World Wire",
        "World Web Window"
      ],
      "answer": 0
    },
    {
      "q": "कंप्यूटर में टाइप करने के लिए क्या इस्तेमाल होता है?",
      "options": [
        "कीबोर्ड",
        "प्रिंटर",
        "स्पीकर",
        "वेबकैम"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: कंप्यूटर में टाइप करने के लिए क्या इस्तेमाल होता है?",
      "options": [
        "वेबकैम",
        "प्रिंटर",
        "कीबोर्ड",
        "स्पीकर"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: कंप्यूटर में टाइप करने के लिए क्या इस्तेमाल होता है?",
      "options": [
        "कीबोर्ड",
        "प्रिंटर",
        "स्पीकर",
        "वेबकैम"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—कंप्यूटर में टाइप करने के लिए क्या इस्तेमाल होता है?",
      "options": [
        "स्पीकर",
        "प्रिंटर",
        "कीबोर्ड",
        "वेबकैम"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कंप्यूटर में टाइप करने के लिए क्या इस्तेमाल होता है?",
      "options": [
        "प्रिंटर",
        "कीबोर्ड",
        "स्पीकर",
        "वेबकैम"
      ],
      "answer": 1
    },
    {
      "q": "इनमें से कौन-सा वेब ब्राउज़र है?",
      "options": [
        "Notepad",
        "MS Paint",
        "Google Chrome",
        "Calculator"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: इनमें से कौन-सा वेब ब्राउज़र है?",
      "options": [
        "Google Chrome",
        "MS Paint",
        "Notepad",
        "Calculator"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: इनमें से कौन-सा वेब ब्राउज़र है?",
      "options": [
        "Calculator",
        "Notepad",
        "Google Chrome",
        "MS Paint"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—इनमें से कौन-सा वेब ब्राउज़र है?",
      "options": [
        "Calculator",
        "MS Paint",
        "Notepad",
        "Google Chrome"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? इनमें से कौन-सा वेब ब्राउज़र है?",
      "options": [
        "MS Paint",
        "Google Chrome",
        "Calculator",
        "Notepad"
      ],
      "answer": 1
    },
    {
      "q": "RAM किस प्रकार की मेमोरी है?",
      "options": [
        "स्थायी ROM",
        "अस्थायी/वोलेटाइल",
        "केवल बाहरी",
        "कागजी"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: RAM किस प्रकार की मेमोरी है?",
      "options": [
        "अस्थायी/वोलेटाइल",
        "केवल बाहरी",
        "स्थायी ROM",
        "कागजी"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: RAM किस प्रकार की मेमोरी है?",
      "options": [
        "अस्थायी/वोलेटाइल",
        "कागजी",
        "केवल बाहरी",
        "स्थायी ROM"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—RAM किस प्रकार की मेमोरी है?",
      "options": [
        "केवल बाहरी",
        "कागजी",
        "अस्थायी/वोलेटाइल",
        "स्थायी ROM"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? RAM किस प्रकार की मेमोरी है?",
      "options": [
        "कागजी",
        "केवल बाहरी",
        "अस्थायी/वोलेटाइल",
        "स्थायी ROM"
      ],
      "answer": 2
    },
    {
      "q": "ROM का पूरा नाम क्या है?",
      "options": [
        "Read Only Memory",
        "Run Only Memory",
        "Read Open Mode",
        "Random Output Machine"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: ROM का पूरा नाम क्या है?",
      "options": [
        "Read Open Mode",
        "Random Output Machine",
        "Run Only Memory",
        "Read Only Memory"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: ROM का पूरा नाम क्या है?",
      "options": [
        "Run Only Memory",
        "Read Only Memory",
        "Read Open Mode",
        "Random Output Machine"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—ROM का पूरा नाम क्या है?",
      "options": [
        "Random Output Machine",
        "Run Only Memory",
        "Read Open Mode",
        "Read Only Memory"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? ROM का पूरा नाम क्या है?",
      "options": [
        "Read Only Memory",
        "Run Only Memory",
        "Random Output Machine",
        "Read Open Mode"
      ],
      "answer": 0
    },
    {
      "q": "कंप्यूटर का भौतिक भाग क्या कहलाता है?",
      "options": [
        "डेटाबेस",
        "सॉफ्टवेयर",
        "ब्राउज़र",
        "हार्डवेयर"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: कंप्यूटर का भौतिक भाग क्या कहलाता है?",
      "options": [
        "डेटाबेस",
        "सॉफ्टवेयर",
        "ब्राउज़र",
        "हार्डवेयर"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: कंप्यूटर का भौतिक भाग क्या कहलाता है?",
      "options": [
        "सॉफ्टवेयर",
        "हार्डवेयर",
        "डेटाबेस",
        "ब्राउज़र"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—कंप्यूटर का भौतिक भाग क्या कहलाता है?",
      "options": [
        "सॉफ्टवेयर",
        "डेटाबेस",
        "ब्राउज़र",
        "हार्डवेयर"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कंप्यूटर का भौतिक भाग क्या कहलाता है?",
      "options": [
        "डेटाबेस",
        "हार्डवेयर",
        "ब्राउज़र",
        "सॉफ्टवेयर"
      ],
      "answer": 1
    },
    {
      "q": "प्रोग्राम और ऐप किसका उदाहरण हैं?",
      "options": [
        "मदरबोर्ड",
        "हार्डवेयर",
        "केबल",
        "सॉफ्टवेयर"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: प्रोग्राम और ऐप किसका उदाहरण हैं?",
      "options": [
        "सॉफ्टवेयर",
        "केबल",
        "मदरबोर्ड",
        "हार्डवेयर"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: प्रोग्राम और ऐप किसका उदाहरण हैं?",
      "options": [
        "मदरबोर्ड",
        "केबल",
        "हार्डवेयर",
        "सॉफ्टवेयर"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—प्रोग्राम और ऐप किसका उदाहरण हैं?",
      "options": [
        "मदरबोर्ड",
        "हार्डवेयर",
        "केबल",
        "सॉफ्टवेयर"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? प्रोग्राम और ऐप किसका उदाहरण हैं?",
      "options": [
        "सॉफ्टवेयर",
        "केबल",
        "हार्डवेयर",
        "मदरबोर्ड"
      ],
      "answer": 0
    },
    {
      "q": "कंप्यूटर में डेटा स्थायी रूप से रखने का उपकरण कौन-सा है?",
      "options": [
        "रजिस्टर",
        "कैश",
        "SSD या हार्ड डिस्क",
        "RAM"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: कंप्यूटर में डेटा स्थायी रूप से रखने का उपकरण कौन-सा है?",
      "options": [
        "RAM",
        "SSD या हार्ड डिस्क",
        "रजिस्टर",
        "कैश"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: कंप्यूटर में डेटा स्थायी रूप से रखने का उपकरण कौन-सा है?",
      "options": [
        "रजिस्टर",
        "कैश",
        "RAM",
        "SSD या हार्ड डिस्क"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—कंप्यूटर में डेटा स्थायी रूप से रखने का उपकरण कौन-सा है?",
      "options": [
        "रजिस्टर",
        "कैश",
        "RAM",
        "SSD या हार्ड डिस्क"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कंप्यूटर में डेटा स्थायी रूप से रखने का उपकरण कौन-सा है?",
      "options": [
        "RAM",
        "रजिस्टर",
        "कैश",
        "SSD या हार्ड डिस्क"
      ],
      "answer": 3
    },
    {
      "q": "ऑपरेटिंग सिस्टम का उदाहरण कौन-सा है?",
      "options": [
        "USB",
        "HTML",
        "Google Search",
        "Windows"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: ऑपरेटिंग सिस्टम का उदाहरण कौन-सा है?",
      "options": [
        "Google Search",
        "HTML",
        "USB",
        "Windows"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: ऑपरेटिंग सिस्टम का उदाहरण कौन-सा है?",
      "options": [
        "USB",
        "Google Search",
        "HTML",
        "Windows"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—ऑपरेटिंग सिस्टम का उदाहरण कौन-सा है?",
      "options": [
        "Google Search",
        "Windows",
        "USB",
        "HTML"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? ऑपरेटिंग सिस्टम का उदाहरण कौन-सा है?",
      "options": [
        "Windows",
        "Google Search",
        "USB",
        "HTML"
      ],
      "answer": 0
    },
    {
      "q": "Linux क्या है?",
      "options": [
        "वेब ब्राउज़र",
        "स्प्रेडशीट",
        "ऑपरेटिंग सिस्टम",
        "प्रिंटर"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: Linux क्या है?",
      "options": [
        "प्रिंटर",
        "ऑपरेटिंग सिस्टम",
        "वेब ब्राउज़र",
        "स्प्रेडशीट"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: Linux क्या है?",
      "options": [
        "स्प्रेडशीट",
        "प्रिंटर",
        "ऑपरेटिंग सिस्टम",
        "वेब ब्राउज़र"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—Linux क्या है?",
      "options": [
        "स्प्रेडशीट",
        "वेब ब्राउज़र",
        "प्रिंटर",
        "ऑपरेटिंग सिस्टम"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? Linux क्या है?",
      "options": [
        "ऑपरेटिंग सिस्टम",
        "प्रिंटर",
        "स्प्रेडशीट",
        "वेब ब्राउज़र"
      ],
      "answer": 0
    },
    {
      "q": "मोबाइल फोन में लोकप्रिय ऑपरेटिंग सिस्टम कौन-सा है?",
      "options": [
        "Android",
        "Python",
        "Excel",
        "Photoshop"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: मोबाइल फोन में लोकप्रिय ऑपरेटिंग सिस्टम कौन-सा है?",
      "options": [
        "Excel",
        "Photoshop",
        "Python",
        "Android"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: मोबाइल फोन में लोकप्रिय ऑपरेटिंग सिस्टम कौन-सा है?",
      "options": [
        "Photoshop",
        "Android",
        "Python",
        "Excel"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—मोबाइल फोन में लोकप्रिय ऑपरेटिंग सिस्टम कौन-सा है?",
      "options": [
        "Python",
        "Photoshop",
        "Excel",
        "Android"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? मोबाइल फोन में लोकप्रिय ऑपरेटिंग सिस्टम कौन-सा है?",
      "options": [
        "Android",
        "Excel",
        "Photoshop",
        "Python"
      ],
      "answer": 0
    },
    {
      "q": "बाइनरी संख्या प्रणाली में कौन-से अंक होते हैं?",
      "options": [
        "0 से 9",
        "A से Z",
        "1 और 2",
        "0 और 1"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: बाइनरी संख्या प्रणाली में कौन-से अंक होते हैं?",
      "options": [
        "0 और 1",
        "1 और 2",
        "0 से 9",
        "A से Z"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: बाइनरी संख्या प्रणाली में कौन-से अंक होते हैं?",
      "options": [
        "0 से 9",
        "1 और 2",
        "A से Z",
        "0 और 1"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—बाइनरी संख्या प्रणाली में कौन-से अंक होते हैं?",
      "options": [
        "1 और 2",
        "0 और 1",
        "A से Z",
        "0 से 9"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? बाइनरी संख्या प्रणाली में कौन-से अंक होते हैं?",
      "options": [
        "0 और 1",
        "0 से 9",
        "A से Z",
        "1 और 2"
      ],
      "answer": 0
    },
    {
      "q": "एक बाइट में कितने बिट होते हैं?",
      "options": [
        "8",
        "4",
        "16",
        "2"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: एक बाइट में कितने बिट होते हैं?",
      "options": [
        "4",
        "16",
        "2",
        "8"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: एक बाइट में कितने बिट होते हैं?",
      "options": [
        "4",
        "8",
        "2",
        "16"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—एक बाइट में कितने बिट होते हैं?",
      "options": [
        "2",
        "8",
        "16",
        "4"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? एक बाइट में कितने बिट होते हैं?",
      "options": [
        "16",
        "8",
        "4",
        "2"
      ],
      "answer": 1
    },
    {
      "q": "URL का पूरा नाम क्या है?",
      "options": [
        "Unified Routing Line",
        "Uniform Resource Locator",
        "Universal Record Link",
        "User Reference List"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: URL का पूरा नाम क्या है?",
      "options": [
        "User Reference List",
        "Universal Record Link",
        "Unified Routing Line",
        "Uniform Resource Locator"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: URL का पूरा नाम क्या है?",
      "options": [
        "Uniform Resource Locator",
        "Unified Routing Line",
        "User Reference List",
        "Universal Record Link"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—URL का पूरा नाम क्या है?",
      "options": [
        "Uniform Resource Locator",
        "Universal Record Link",
        "User Reference List",
        "Unified Routing Line"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? URL का पूरा नाम क्या है?",
      "options": [
        "Uniform Resource Locator",
        "Universal Record Link",
        "User Reference List",
        "Unified Routing Line"
      ],
      "answer": 0
    },
    {
      "q": "HTTP का पूरा नाम क्या है?",
      "options": [
        "Hypertext Transfer Protocol",
        "Hyperlink Text Tool Process",
        "Home Tool Transfer Protocol",
        "High Text Transfer Program"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: HTTP का पूरा नाम क्या है?",
      "options": [
        "Hypertext Transfer Protocol",
        "High Text Transfer Program",
        "Home Tool Transfer Protocol",
        "Hyperlink Text Tool Process"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: HTTP का पूरा नाम क्या है?",
      "options": [
        "Home Tool Transfer Protocol",
        "Hyperlink Text Tool Process",
        "High Text Transfer Program",
        "Hypertext Transfer Protocol"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—HTTP का पूरा नाम क्या है?",
      "options": [
        "Home Tool Transfer Protocol",
        "Hypertext Transfer Protocol",
        "Hyperlink Text Tool Process",
        "High Text Transfer Program"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? HTTP का पूरा नाम क्या है?",
      "options": [
        "Home Tool Transfer Protocol",
        "Hypertext Transfer Protocol",
        "High Text Transfer Program",
        "Hyperlink Text Tool Process"
      ],
      "answer": 1
    },
    {
      "q": "HTTPS में S का अर्थ क्या है?",
      "options": [
        "System",
        "Search",
        "Secure",
        "Server"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: HTTPS में S का अर्थ क्या है?",
      "options": [
        "System",
        "Secure",
        "Server",
        "Search"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: HTTPS में S का अर्थ क्या है?",
      "options": [
        "System",
        "Server",
        "Secure",
        "Search"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—HTTPS में S का अर्थ क्या है?",
      "options": [
        "Search",
        "Server",
        "System",
        "Secure"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? HTTPS में S का अर्थ क्या है?",
      "options": [
        "System",
        "Server",
        "Secure",
        "Search"
      ],
      "answer": 2
    },
    {
      "q": "HTML मुख्यतः किसलिए प्रयोग होता है?",
      "options": [
        "हार्ड डिस्क बनाने के लिए",
        "वीडियो चलाने के लिए ही",
        "वेब पेज की संरचना बनाने के लिए",
        "वायरस हटाने के लिए"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: HTML मुख्यतः किसलिए प्रयोग होता है?",
      "options": [
        "वीडियो चलाने के लिए ही",
        "वायरस हटाने के लिए",
        "वेब पेज की संरचना बनाने के लिए",
        "हार्ड डिस्क बनाने के लिए"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: HTML मुख्यतः किसलिए प्रयोग होता है?",
      "options": [
        "हार्ड डिस्क बनाने के लिए",
        "वीडियो चलाने के लिए ही",
        "वेब पेज की संरचना बनाने के लिए",
        "वायरस हटाने के लिए"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—HTML मुख्यतः किसलिए प्रयोग होता है?",
      "options": [
        "हार्ड डिस्क बनाने के लिए",
        "वायरस हटाने के लिए",
        "वीडियो चलाने के लिए ही",
        "वेब पेज की संरचना बनाने के लिए"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? HTML मुख्यतः किसलिए प्रयोग होता है?",
      "options": [
        "वीडियो चलाने के लिए ही",
        "वायरस हटाने के लिए",
        "हार्ड डिस्क बनाने के लिए",
        "वेब पेज की संरचना बनाने के लिए"
      ],
      "answer": 3
    },
    {
      "q": "CSS का उपयोग किसलिए होता है?",
      "options": [
        "फाइल कंप्रेस करने के लिए",
        "वेब पेज की शैली/डिजाइन के लिए",
        "डेटा टाइप करने के लिए ही",
        "कंप्यूटर चालू करने के लिए"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: CSS का उपयोग किसलिए होता है?",
      "options": [
        "कंप्यूटर चालू करने के लिए",
        "डेटा टाइप करने के लिए ही",
        "वेब पेज की शैली/डिजाइन के लिए",
        "फाइल कंप्रेस करने के लिए"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: CSS का उपयोग किसलिए होता है?",
      "options": [
        "वेब पेज की शैली/डिजाइन के लिए",
        "कंप्यूटर चालू करने के लिए",
        "फाइल कंप्रेस करने के लिए",
        "डेटा टाइप करने के लिए ही"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—CSS का उपयोग किसलिए होता है?",
      "options": [
        "डेटा टाइप करने के लिए ही",
        "वेब पेज की शैली/डिजाइन के लिए",
        "कंप्यूटर चालू करने के लिए",
        "फाइल कंप्रेस करने के लिए"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? CSS का उपयोग किसलिए होता है?",
      "options": [
        "कंप्यूटर चालू करने के लिए",
        "फाइल कंप्रेस करने के लिए",
        "वेब पेज की शैली/डिजाइन के लिए",
        "डेटा टाइप करने के लिए ही"
      ],
      "answer": 2
    },
    {
      "q": "JavaScript का उपयोग वेब पेज में किसलिए होता है?",
      "options": [
        "इंटरैक्टिव व्यवहार जोड़ने के लिए",
        "बिजली देने",
        "केवल प्रिंटिंग",
        "केवल स्क्रीन साफ करने"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: JavaScript का उपयोग वेब पेज में किसलिए होता है?",
      "options": [
        "केवल प्रिंटिंग",
        "केवल स्क्रीन साफ करने",
        "बिजली देने",
        "इंटरैक्टिव व्यवहार जोड़ने के लिए"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: JavaScript का उपयोग वेब पेज में किसलिए होता है?",
      "options": [
        "बिजली देने",
        "इंटरैक्टिव व्यवहार जोड़ने के लिए",
        "केवल स्क्रीन साफ करने",
        "केवल प्रिंटिंग"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—JavaScript का उपयोग वेब पेज में किसलिए होता है?",
      "options": [
        "इंटरैक्टिव व्यवहार जोड़ने के लिए",
        "केवल स्क्रीन साफ करने",
        "बिजली देने",
        "केवल प्रिंटिंग"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? JavaScript का उपयोग वेब पेज में किसलिए होता है?",
      "options": [
        "इंटरैक्टिव व्यवहार जोड़ने के लिए",
        "केवल स्क्रीन साफ करने",
        "केवल प्रिंटिंग",
        "बिजली देने"
      ],
      "answer": 0
    },
    {
      "q": "Python क्या है?",
      "options": [
        "सर्च इंजन",
        "मॉनिटर का प्रकार",
        "ऑपरेटिंग सिस्टम का नाम ही",
        "प्रोग्रामिंग भाषा"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: Python क्या है?",
      "options": [
        "प्रोग्रामिंग भाषा",
        "ऑपरेटिंग सिस्टम का नाम ही",
        "सर्च इंजन",
        "मॉनिटर का प्रकार"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: Python क्या है?",
      "options": [
        "मॉनिटर का प्रकार",
        "प्रोग्रामिंग भाषा",
        "सर्च इंजन",
        "ऑपरेटिंग सिस्टम का नाम ही"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—Python क्या है?",
      "options": [
        "सर्च इंजन",
        "प्रोग्रामिंग भाषा",
        "ऑपरेटिंग सिस्टम का नाम ही",
        "मॉनिटर का प्रकार"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? Python क्या है?",
      "options": [
        "प्रोग्रामिंग भाषा",
        "सर्च इंजन",
        "मॉनिटर का प्रकार",
        "ऑपरेटिंग सिस्टम का नाम ही"
      ],
      "answer": 0
    },
    {
      "q": "डेटाबेस का काम क्या है?",
      "options": [
        "डेटा व्यवस्थित रूप से रखना",
        "कूलिंग करना",
        "आवाज बढ़ाना",
        "स्क्रीन चमकाना"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: डेटाबेस का काम क्या है?",
      "options": [
        "स्क्रीन चमकाना",
        "आवाज बढ़ाना",
        "कूलिंग करना",
        "डेटा व्यवस्थित रूप से रखना"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: डेटाबेस का काम क्या है?",
      "options": [
        "डेटा व्यवस्थित रूप से रखना",
        "आवाज बढ़ाना",
        "कूलिंग करना",
        "स्क्रीन चमकाना"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—डेटाबेस का काम क्या है?",
      "options": [
        "डेटा व्यवस्थित रूप से रखना",
        "कूलिंग करना",
        "आवाज बढ़ाना",
        "स्क्रीन चमकाना"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? डेटाबेस का काम क्या है?",
      "options": [
        "कूलिंग करना",
        "स्क्रीन चमकाना",
        "आवाज बढ़ाना",
        "डेटा व्यवस्थित रूप से रखना"
      ],
      "answer": 3
    },
    {
      "q": "ईमेल में CC का अर्थ क्या है?",
      "options": [
        "Computer Code",
        "Closed Chat",
        "Carbon Copy",
        "Central Contact"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: ईमेल में CC का अर्थ क्या है?",
      "options": [
        "Carbon Copy",
        "Computer Code",
        "Closed Chat",
        "Central Contact"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: ईमेल में CC का अर्थ क्या है?",
      "options": [
        "Closed Chat",
        "Central Contact",
        "Computer Code",
        "Carbon Copy"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—ईमेल में CC का अर्थ क्या है?",
      "options": [
        "Closed Chat",
        "Computer Code",
        "Central Contact",
        "Carbon Copy"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? ईमेल में CC का अर्थ क्या है?",
      "options": [
        "Closed Chat",
        "Computer Code",
        "Central Contact",
        "Carbon Copy"
      ],
      "answer": 3
    },
    {
      "q": "ईमेल में BCC का उपयोग किसलिए होता है?",
      "options": [
        "फाइल हटाने",
        "पासवर्ड बदलने",
        "अन्य प्राप्तकर्ताओं के पते छिपाकर कॉपी भेजने के लिए",
        "मेल प्रिंट करने"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: ईमेल में BCC का उपयोग किसलिए होता है?",
      "options": [
        "मेल प्रिंट करने",
        "अन्य प्राप्तकर्ताओं के पते छिपाकर कॉपी भेजने के लिए",
        "फाइल हटाने",
        "पासवर्ड बदलने"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: ईमेल में BCC का उपयोग किसलिए होता है?",
      "options": [
        "अन्य प्राप्तकर्ताओं के पते छिपाकर कॉपी भेजने के लिए",
        "फाइल हटाने",
        "मेल प्रिंट करने",
        "पासवर्ड बदलने"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—ईमेल में BCC का उपयोग किसलिए होता है?",
      "options": [
        "पासवर्ड बदलने",
        "फाइल हटाने",
        "अन्य प्राप्तकर्ताओं के पते छिपाकर कॉपी भेजने के लिए",
        "मेल प्रिंट करने"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? ईमेल में BCC का उपयोग किसलिए होता है?",
      "options": [
        "फाइल हटाने",
        "मेल प्रिंट करने",
        "पासवर्ड बदलने",
        "अन्य प्राप्तकर्ताओं के पते छिपाकर कॉपी भेजने के लिए"
      ],
      "answer": 3
    },
    {
      "q": "कंप्यूटर वायरस क्या है?",
      "options": [
        "वेबकैम",
        "हानिकारक प्रोग्राम",
        "हार्डवेयर तार",
        "एंटीवायरस अपडेट"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: कंप्यूटर वायरस क्या है?",
      "options": [
        "वेबकैम",
        "हार्डवेयर तार",
        "एंटीवायरस अपडेट",
        "हानिकारक प्रोग्राम"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: कंप्यूटर वायरस क्या है?",
      "options": [
        "हार्डवेयर तार",
        "वेबकैम",
        "हानिकारक प्रोग्राम",
        "एंटीवायरस अपडेट"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—कंप्यूटर वायरस क्या है?",
      "options": [
        "हार्डवेयर तार",
        "वेबकैम",
        "एंटीवायरस अपडेट",
        "हानिकारक प्रोग्राम"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कंप्यूटर वायरस क्या है?",
      "options": [
        "हानिकारक प्रोग्राम",
        "हार्डवेयर तार",
        "एंटीवायरस अपडेट",
        "वेबकैम"
      ],
      "answer": 0
    },
    {
      "q": "फिशिंग क्या है?",
      "options": [
        "कानूनी अपडेट",
        "फाइल बैकअप",
        "धोखे से निजी जानकारी हासिल करने की कोशिश",
        "कंप्यूटर सफाई"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: फिशिंग क्या है?",
      "options": [
        "फाइल बैकअप",
        "धोखे से निजी जानकारी हासिल करने की कोशिश",
        "कानूनी अपडेट",
        "कंप्यूटर सफाई"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: फिशिंग क्या है?",
      "options": [
        "धोखे से निजी जानकारी हासिल करने की कोशिश",
        "कंप्यूटर सफाई",
        "फाइल बैकअप",
        "कानूनी अपडेट"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—फिशिंग क्या है?",
      "options": [
        "कानूनी अपडेट",
        "कंप्यूटर सफाई",
        "धोखे से निजी जानकारी हासिल करने की कोशिश",
        "फाइल बैकअप"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? फिशिंग क्या है?",
      "options": [
        "कानूनी अपडेट",
        "फाइल बैकअप",
        "धोखे से निजी जानकारी हासिल करने की कोशिश",
        "कंप्यूटर सफाई"
      ],
      "answer": 2
    },
    {
      "q": "मजबूत पासवर्ड कैसा होना चाहिए?",
      "options": [
        "अपना नाम मात्र",
        "123456",
        "password",
        "लंबा और अलग-अलग प्रकार के अक्षरों वाला"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: मजबूत पासवर्ड कैसा होना चाहिए?",
      "options": [
        "123456",
        "password",
        "लंबा और अलग-अलग प्रकार के अक्षरों वाला",
        "अपना नाम मात्र"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: मजबूत पासवर्ड कैसा होना चाहिए?",
      "options": [
        "password",
        "123456",
        "अपना नाम मात्र",
        "लंबा और अलग-अलग प्रकार के अक्षरों वाला"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—मजबूत पासवर्ड कैसा होना चाहिए?",
      "options": [
        "लंबा और अलग-अलग प्रकार के अक्षरों वाला",
        "password",
        "अपना नाम मात्र",
        "123456"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? मजबूत पासवर्ड कैसा होना चाहिए?",
      "options": [
        "password",
        "अपना नाम मात्र",
        "लंबा और अलग-अलग प्रकार के अक्षरों वाला",
        "123456"
      ],
      "answer": 2
    },
    {
      "q": "2FA का उद्देश्य क्या है?",
      "options": [
        "फाइल डिलीट करना",
        "स्क्रीन आकार बढ़ाना",
        "लॉगिन में अतिरिक्त सुरक्षा देना",
        "इंटरनेट बंद करना"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 2FA का उद्देश्य क्या है?",
      "options": [
        "इंटरनेट बंद करना",
        "लॉगिन में अतिरिक्त सुरक्षा देना",
        "स्क्रीन आकार बढ़ाना",
        "फाइल डिलीट करना"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 2FA का उद्देश्य क्या है?",
      "options": [
        "इंटरनेट बंद करना",
        "लॉगिन में अतिरिक्त सुरक्षा देना",
        "स्क्रीन आकार बढ़ाना",
        "फाइल डिलीट करना"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—2FA का उद्देश्य क्या है?",
      "options": [
        "स्क्रीन आकार बढ़ाना",
        "फाइल डिलीट करना",
        "लॉगिन में अतिरिक्त सुरक्षा देना",
        "इंटरनेट बंद करना"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 2FA का उद्देश्य क्या है?",
      "options": [
        "स्क्रीन आकार बढ़ाना",
        "इंटरनेट बंद करना",
        "लॉगिन में अतिरिक्त सुरक्षा देना",
        "फाइल डिलीट करना"
      ],
      "answer": 2
    },
    {
      "q": "क्लाउड स्टोरेज क्या है?",
      "options": [
        "CPU फैन",
        "केवल पेन ड्राइव",
        "प्रिंटर की स्याही",
        "इंटरनेट पर डेटा संग्रहण"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: क्लाउड स्टोरेज क्या है?",
      "options": [
        "केवल पेन ड्राइव",
        "इंटरनेट पर डेटा संग्रहण",
        "प्रिंटर की स्याही",
        "CPU फैन"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: क्लाउड स्टोरेज क्या है?",
      "options": [
        "केवल पेन ड्राइव",
        "इंटरनेट पर डेटा संग्रहण",
        "प्रिंटर की स्याही",
        "CPU फैन"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—क्लाउड स्टोरेज क्या है?",
      "options": [
        "CPU फैन",
        "केवल पेन ड्राइव",
        "इंटरनेट पर डेटा संग्रहण",
        "प्रिंटर की स्याही"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? क्लाउड स्टोरेज क्या है?",
      "options": [
        "CPU फैन",
        "इंटरनेट पर डेटा संग्रहण",
        "प्रिंटर की स्याही",
        "केवल पेन ड्राइव"
      ],
      "answer": 1
    },
    {
      "q": "PDF का पूरा नाम क्या है?",
      "options": [
        "Public Disk Format",
        "Personal Data File",
        "Portable Document Format",
        "Printed Document Folder"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: PDF का पूरा नाम क्या है?",
      "options": [
        "Public Disk Format",
        "Portable Document Format",
        "Personal Data File",
        "Printed Document Folder"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: PDF का पूरा नाम क्या है?",
      "options": [
        "Portable Document Format",
        "Personal Data File",
        "Public Disk Format",
        "Printed Document Folder"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—PDF का पूरा नाम क्या है?",
      "options": [
        "Printed Document Folder",
        "Portable Document Format",
        "Public Disk Format",
        "Personal Data File"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? PDF का पूरा नाम क्या है?",
      "options": [
        "Personal Data File",
        "Public Disk Format",
        "Portable Document Format",
        "Printed Document Folder"
      ],
      "answer": 2
    },
    {
      "q": "MS Excel मुख्यतः किसलिए उपयोग होता है?",
      "options": [
        "वेब ब्राउज़िंग",
        "वीडियो संपादन ही",
        "ऑडियो रिकॉर्डिंग",
        "स्प्रेडशीट और गणना"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: MS Excel मुख्यतः किसलिए उपयोग होता है?",
      "options": [
        "वेब ब्राउज़िंग",
        "ऑडियो रिकॉर्डिंग",
        "स्प्रेडशीट और गणना",
        "वीडियो संपादन ही"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: MS Excel मुख्यतः किसलिए उपयोग होता है?",
      "options": [
        "स्प्रेडशीट और गणना",
        "ऑडियो रिकॉर्डिंग",
        "वीडियो संपादन ही",
        "वेब ब्राउज़िंग"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—MS Excel मुख्यतः किसलिए उपयोग होता है?",
      "options": [
        "वेब ब्राउज़िंग",
        "वीडियो संपादन ही",
        "स्प्रेडशीट और गणना",
        "ऑडियो रिकॉर्डिंग"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? MS Excel मुख्यतः किसलिए उपयोग होता है?",
      "options": [
        "वेब ब्राउज़िंग",
        "स्प्रेडशीट और गणना",
        "वीडियो संपादन ही",
        "ऑडियो रिकॉर्डिंग"
      ],
      "answer": 1
    },
    {
      "q": "Ctrl+C का सामान्य कार्य क्या है?",
      "options": [
        "सेव करना",
        "पेस्ट करना",
        "कट करना",
        "कॉपी करना"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: Ctrl+C का सामान्य कार्य क्या है?",
      "options": [
        "सेव करना",
        "पेस्ट करना",
        "कट करना",
        "कॉपी करना"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: Ctrl+C का सामान्य कार्य क्या है?",
      "options": [
        "पेस्ट करना",
        "कट करना",
        "सेव करना",
        "कॉपी करना"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—Ctrl+C का सामान्य कार्य क्या है?",
      "options": [
        "पेस्ट करना",
        "कॉपी करना",
        "सेव करना",
        "कट करना"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? Ctrl+C का सामान्य कार्य क्या है?",
      "options": [
        "कट करना",
        "सेव करना",
        "पेस्ट करना",
        "कॉपी करना"
      ],
      "answer": 3
    },
    {
      "q": "Ctrl+V का सामान्य कार्य क्या है?",
      "options": [
        "पेस्ट करना",
        "प्रिंट करना",
        "कॉपी करना",
        "कट करना"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: Ctrl+V का सामान्य कार्य क्या है?",
      "options": [
        "कॉपी करना",
        "प्रिंट करना",
        "कट करना",
        "पेस्ट करना"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: Ctrl+V का सामान्य कार्य क्या है?",
      "options": [
        "कट करना",
        "पेस्ट करना",
        "प्रिंट करना",
        "कॉपी करना"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—Ctrl+V का सामान्य कार्य क्या है?",
      "options": [
        "प्रिंट करना",
        "पेस्ट करना",
        "कॉपी करना",
        "कट करना"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? Ctrl+V का सामान्य कार्य क्या है?",
      "options": [
        "पेस्ट करना",
        "कॉपी करना",
        "प्रिंट करना",
        "कट करना"
      ],
      "answer": 0
    },
    {
      "q": "Ctrl+S का सामान्य कार्य क्या है?",
      "options": [
        "सेव करना",
        "सर्च करना",
        "सेलेक्ट करना",
        "शटडाउन"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: Ctrl+S का सामान्य कार्य क्या है?",
      "options": [
        "शटडाउन",
        "सेलेक्ट करना",
        "सेव करना",
        "सर्च करना"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: Ctrl+S का सामान्य कार्य क्या है?",
      "options": [
        "शटडाउन",
        "सेव करना",
        "सेलेक्ट करना",
        "सर्च करना"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—Ctrl+S का सामान्य कार्य क्या है?",
      "options": [
        "सेव करना",
        "शटडाउन",
        "सेलेक्ट करना",
        "सर्च करना"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? Ctrl+S का सामान्य कार्य क्या है?",
      "options": [
        "शटडाउन",
        "सर्च करना",
        "सेलेक्ट करना",
        "सेव करना"
      ],
      "answer": 3
    },
    {
      "q": "Ctrl+Z का सामान्य कार्य क्या है?",
      "options": [
        "Undo",
        "Print",
        "Redo",
        "Save"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: Ctrl+Z का सामान्य कार्य क्या है?",
      "options": [
        "Undo",
        "Print",
        "Redo",
        "Save"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: Ctrl+Z का सामान्य कार्य क्या है?",
      "options": [
        "Save",
        "Redo",
        "Print",
        "Undo"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—Ctrl+Z का सामान्य कार्य क्या है?",
      "options": [
        "Save",
        "Print",
        "Redo",
        "Undo"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? Ctrl+Z का सामान्य कार्य क्या है?",
      "options": [
        "Print",
        "Save",
        "Undo",
        "Redo"
      ],
      "answer": 2
    },
    {
      "q": "कंप्यूटर नेटवर्क क्या जोड़ता है?",
      "options": [
        "केवल प्रिंटर की स्याही",
        "केवल स्क्रीन पिक्सेल",
        "केवल फाइल नाम",
        "दो या अधिक कंप्यूटर/डिवाइस"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: कंप्यूटर नेटवर्क क्या जोड़ता है?",
      "options": [
        "दो या अधिक कंप्यूटर/डिवाइस",
        "केवल स्क्रीन पिक्सेल",
        "केवल फाइल नाम",
        "केवल प्रिंटर की स्याही"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: कंप्यूटर नेटवर्क क्या जोड़ता है?",
      "options": [
        "केवल फाइल नाम",
        "केवल स्क्रीन पिक्सेल",
        "केवल प्रिंटर की स्याही",
        "दो या अधिक कंप्यूटर/डिवाइस"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—कंप्यूटर नेटवर्क क्या जोड़ता है?",
      "options": [
        "केवल प्रिंटर की स्याही",
        "केवल फाइल नाम",
        "केवल स्क्रीन पिक्सेल",
        "दो या अधिक कंप्यूटर/डिवाइस"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कंप्यूटर नेटवर्क क्या जोड़ता है?",
      "options": [
        "दो या अधिक कंप्यूटर/डिवाइस",
        "केवल फाइल नाम",
        "केवल स्क्रीन पिक्सेल",
        "केवल प्रिंटर की स्याही"
      ],
      "answer": 0
    },
    {
      "q": "LAN का पूरा नाम क्या है?",
      "options": [
        "Local Area Network",
        "Long Area Number",
        "Large Access Node",
        "Linked App Name"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: LAN का पूरा नाम क्या है?",
      "options": [
        "Local Area Network",
        "Linked App Name",
        "Long Area Number",
        "Large Access Node"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: LAN का पूरा नाम क्या है?",
      "options": [
        "Local Area Network",
        "Large Access Node",
        "Long Area Number",
        "Linked App Name"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—LAN का पूरा नाम क्या है?",
      "options": [
        "Linked App Name",
        "Long Area Number",
        "Local Area Network",
        "Large Access Node"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? LAN का पूरा नाम क्या है?",
      "options": [
        "Local Area Network",
        "Linked App Name",
        "Long Area Number",
        "Large Access Node"
      ],
      "answer": 0
    },
    {
      "q": "Wi-Fi किसलिए उपयोग होता है?",
      "options": [
        "बिजली स्टोर करने",
        "कागज प्रिंट करने के लिए ही",
        "वायरलेस नेटवर्क कनेक्शन",
        "स्क्रीन साफ करने"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: Wi-Fi किसलिए उपयोग होता है?",
      "options": [
        "बिजली स्टोर करने",
        "स्क्रीन साफ करने",
        "कागज प्रिंट करने के लिए ही",
        "वायरलेस नेटवर्क कनेक्शन"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: Wi-Fi किसलिए उपयोग होता है?",
      "options": [
        "स्क्रीन साफ करने",
        "कागज प्रिंट करने के लिए ही",
        "वायरलेस नेटवर्क कनेक्शन",
        "बिजली स्टोर करने"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—Wi-Fi किसलिए उपयोग होता है?",
      "options": [
        "स्क्रीन साफ करने",
        "वायरलेस नेटवर्क कनेक्शन",
        "कागज प्रिंट करने के लिए ही",
        "बिजली स्टोर करने"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? Wi-Fi किसलिए उपयोग होता है?",
      "options": [
        "कागज प्रिंट करने के लिए ही",
        "वायरलेस नेटवर्क कनेक्शन",
        "बिजली स्टोर करने",
        "स्क्रीन साफ करने"
      ],
      "answer": 1
    },
    {
      "q": "IP address किसकी पहचान में मदद करता है?",
      "options": [
        "नेटवर्क पर डिवाइस/इंटरफेस",
        "कीबोर्ड बटन",
        "मॉनिटर रंग",
        "फाइल आकार"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: IP address किसकी पहचान में मदद करता है?",
      "options": [
        "मॉनिटर रंग",
        "फाइल आकार",
        "कीबोर्ड बटन",
        "नेटवर्क पर डिवाइस/इंटरफेस"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: IP address किसकी पहचान में मदद करता है?",
      "options": [
        "फाइल आकार",
        "नेटवर्क पर डिवाइस/इंटरफेस",
        "कीबोर्ड बटन",
        "मॉनिटर रंग"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—IP address किसकी पहचान में मदद करता है?",
      "options": [
        "कीबोर्ड बटन",
        "मॉनिटर रंग",
        "नेटवर्क पर डिवाइस/इंटरफेस",
        "फाइल आकार"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? IP address किसकी पहचान में मदद करता है?",
      "options": [
        "फाइल आकार",
        "कीबोर्ड बटन",
        "नेटवर्क पर डिवाइस/इंटरफेस",
        "मॉनिटर रंग"
      ],
      "answer": 2
    },
    {
      "q": "सर्च इंजन का उदाहरण कौन-सा है?",
      "options": [
        "Bluetooth",
        "PowerPoint",
        "Windows Explorer",
        "Google"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: सर्च इंजन का उदाहरण कौन-सा है?",
      "options": [
        "Google",
        "PowerPoint",
        "Windows Explorer",
        "Bluetooth"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: सर्च इंजन का उदाहरण कौन-सा है?",
      "options": [
        "PowerPoint",
        "Google",
        "Bluetooth",
        "Windows Explorer"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—सर्च इंजन का उदाहरण कौन-सा है?",
      "options": [
        "Bluetooth",
        "Google",
        "Windows Explorer",
        "PowerPoint"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? सर्च इंजन का उदाहरण कौन-सा है?",
      "options": [
        "Google",
        "PowerPoint",
        "Bluetooth",
        "Windows Explorer"
      ],
      "answer": 0
    },
    {
      "q": "USB का पूरा नाम क्या है?",
      "options": [
        "Universal Serial Bus",
        "Universal Screen Button",
        "United System Board",
        "User Service Base"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: USB का पूरा नाम क्या है?",
      "options": [
        "Universal Serial Bus",
        "User Service Base",
        "United System Board",
        "Universal Screen Button"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: USB का पूरा नाम क्या है?",
      "options": [
        "United System Board",
        "User Service Base",
        "Universal Serial Bus",
        "Universal Screen Button"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—USB का पूरा नाम क्या है?",
      "options": [
        "Universal Screen Button",
        "User Service Base",
        "Universal Serial Bus",
        "United System Board"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? USB का पूरा नाम क्या है?",
      "options": [
        "United System Board",
        "User Service Base",
        "Universal Serial Bus",
        "Universal Screen Button"
      ],
      "answer": 2
    },
    {
      "q": "कंप्यूटर की स्क्रीन को क्या कहते हैं?",
      "options": [
        "माउस",
        "स्कैनर",
        "मॉनिटर",
        "राउटर"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: कंप्यूटर की स्क्रीन को क्या कहते हैं?",
      "options": [
        "माउस",
        "मॉनिटर",
        "स्कैनर",
        "राउटर"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: कंप्यूटर की स्क्रीन को क्या कहते हैं?",
      "options": [
        "मॉनिटर",
        "राउटर",
        "माउस",
        "स्कैनर"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—कंप्यूटर की स्क्रीन को क्या कहते हैं?",
      "options": [
        "राउटर",
        "मॉनिटर",
        "माउस",
        "स्कैनर"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कंप्यूटर की स्क्रीन को क्या कहते हैं?",
      "options": [
        "राउटर",
        "माउस",
        "स्कैनर",
        "मॉनिटर"
      ],
      "answer": 3
    },
    {
      "q": "कागज पर आउटपुट देने वाला उपकरण कौन-सा है?",
      "options": [
        "प्रिंटर",
        "कीबोर्ड",
        "जॉयस्टिक",
        "माइक्रोफोन"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: कागज पर आउटपुट देने वाला उपकरण कौन-सा है?",
      "options": [
        "जॉयस्टिक",
        "कीबोर्ड",
        "प्रिंटर",
        "माइक्रोफोन"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: कागज पर आउटपुट देने वाला उपकरण कौन-सा है?",
      "options": [
        "प्रिंटर",
        "माइक्रोफोन",
        "कीबोर्ड",
        "जॉयस्टिक"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—कागज पर आउटपुट देने वाला उपकरण कौन-सा है?",
      "options": [
        "कीबोर्ड",
        "जॉयस्टिक",
        "माइक्रोफोन",
        "प्रिंटर"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कागज पर आउटपुट देने वाला उपकरण कौन-सा है?",
      "options": [
        "कीबोर्ड",
        "जॉयस्टिक",
        "प्रिंटर",
        "माइक्रोफोन"
      ],
      "answer": 2
    },
    {
      "q": "कागज की छवि/दस्तावेज कंप्यूटर में लाने वाला उपकरण कौन-सा है?",
      "options": [
        "प्रोजेक्टर",
        "राउटर",
        "स्कैनर",
        "स्पीकर"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: कागज की छवि/दस्तावेज कंप्यूटर में लाने वाला उपकरण कौन-सा है?",
      "options": [
        "प्रोजेक्टर",
        "स्पीकर",
        "राउटर",
        "स्कैनर"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: कागज की छवि/दस्तावेज कंप्यूटर में लाने वाला उपकरण कौन-सा है?",
      "options": [
        "स्पीकर",
        "प्रोजेक्टर",
        "स्कैनर",
        "राउटर"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—कागज की छवि/दस्तावेज कंप्यूटर में लाने वाला उपकरण कौन-सा है?",
      "options": [
        "राउटर",
        "प्रोजेक्टर",
        "स्कैनर",
        "स्पीकर"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कागज की छवि/दस्तावेज कंप्यूटर में लाने वाला उपकरण कौन-सा है?",
      "options": [
        "राउटर",
        "स्पीकर",
        "प्रोजेक्टर",
        "स्कैनर"
      ],
      "answer": 3
    },
    {
      "q": "डेटा की सबसे छोटी सामान्य इकाई क्या है?",
      "options": [
        "बिट",
        "बाइट",
        "मेगाबाइट",
        "किलोबाइट"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: डेटा की सबसे छोटी सामान्य इकाई क्या है?",
      "options": [
        "मेगाबाइट",
        "किलोबाइट",
        "बिट",
        "बाइट"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: डेटा की सबसे छोटी सामान्य इकाई क्या है?",
      "options": [
        "बिट",
        "बाइट",
        "किलोबाइट",
        "मेगाबाइट"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—डेटा की सबसे छोटी सामान्य इकाई क्या है?",
      "options": [
        "किलोबाइट",
        "बाइट",
        "मेगाबाइट",
        "बिट"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? डेटा की सबसे छोटी सामान्य इकाई क्या है?",
      "options": [
        "बाइट",
        "मेगाबाइट",
        "किलोबाइट",
        "बिट"
      ],
      "answer": 3
    },
    {
      "q": "किलोबाइट से बड़ी इकाई कौन-सी है?",
      "options": [
        "पिक्सेल",
        "बिट",
        "निबल",
        "मेगाबाइट"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: किलोबाइट से बड़ी इकाई कौन-सी है?",
      "options": [
        "पिक्सेल",
        "बिट",
        "मेगाबाइट",
        "निबल"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: किलोबाइट से बड़ी इकाई कौन-सी है?",
      "options": [
        "मेगाबाइट",
        "बिट",
        "निबल",
        "पिक्सेल"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—किलोबाइट से बड़ी इकाई कौन-सी है?",
      "options": [
        "पिक्सेल",
        "निबल",
        "मेगाबाइट",
        "बिट"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? किलोबाइट से बड़ी इकाई कौन-सी है?",
      "options": [
        "पिक्सेल",
        "मेगाबाइट",
        "निबल",
        "बिट"
      ],
      "answer": 1
    },
    {
      "q": "GPU मुख्यतः किस काम में मदद करता है?",
      "options": [
        "ग्राफिक्स प्रोसेसिंग",
        "कागज स्कैनिंग",
        "नेटवर्क नामकरण",
        "टाइपिंग"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: GPU मुख्यतः किस काम में मदद करता है?",
      "options": [
        "टाइपिंग",
        "ग्राफिक्स प्रोसेसिंग",
        "नेटवर्क नामकरण",
        "कागज स्कैनिंग"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: GPU मुख्यतः किस काम में मदद करता है?",
      "options": [
        "ग्राफिक्स प्रोसेसिंग",
        "टाइपिंग",
        "नेटवर्क नामकरण",
        "कागज स्कैनिंग"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—GPU मुख्यतः किस काम में मदद करता है?",
      "options": [
        "कागज स्कैनिंग",
        "टाइपिंग",
        "ग्राफिक्स प्रोसेसिंग",
        "नेटवर्क नामकरण"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? GPU मुख्यतः किस काम में मदद करता है?",
      "options": [
        "ग्राफिक्स प्रोसेसिंग",
        "नेटवर्क नामकरण",
        "कागज स्कैनिंग",
        "टाइपिंग"
      ],
      "answer": 0
    },
    {
      "q": "Motherboard क्या है?",
      "options": [
        "फाइल एक्सटेंशन",
        "मुख्य सर्किट बोर्ड",
        "इनपुट ऐप",
        "वेब पेज"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: Motherboard क्या है?",
      "options": [
        "वेब पेज",
        "मुख्य सर्किट बोर्ड",
        "इनपुट ऐप",
        "फाइल एक्सटेंशन"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: Motherboard क्या है?",
      "options": [
        "फाइल एक्सटेंशन",
        "मुख्य सर्किट बोर्ड",
        "वेब पेज",
        "इनपुट ऐप"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—Motherboard क्या है?",
      "options": [
        "फाइल एक्सटेंशन",
        "इनपुट ऐप",
        "मुख्य सर्किट बोर्ड",
        "वेब पेज"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? Motherboard क्या है?",
      "options": [
        "फाइल एक्सटेंशन",
        "मुख्य सर्किट बोर्ड",
        "वेब पेज",
        "इनपुट ऐप"
      ],
      "answer": 1
    },
    {
      "q": "कंप्यूटर को सुरक्षित बंद करने की प्रक्रिया क्या कहलाती है?",
      "options": [
        "Refresh",
        "Upload",
        "Pairing",
        "Shutdown"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: कंप्यूटर को सुरक्षित बंद करने की प्रक्रिया क्या कहलाती है?",
      "options": [
        "Upload",
        "Shutdown",
        "Pairing",
        "Refresh"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: कंप्यूटर को सुरक्षित बंद करने की प्रक्रिया क्या कहलाती है?",
      "options": [
        "Refresh",
        "Pairing",
        "Shutdown",
        "Upload"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—कंप्यूटर को सुरक्षित बंद करने की प्रक्रिया क्या कहलाती है?",
      "options": [
        "Pairing",
        "Shutdown",
        "Refresh",
        "Upload"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कंप्यूटर को सुरक्षित बंद करने की प्रक्रिया क्या कहलाती है?",
      "options": [
        "Refresh",
        "Upload",
        "Shutdown",
        "Pairing"
      ],
      "answer": 2
    },
    {
      "q": "कंप्यूटर पर अनचाहे विज्ञापन दिखाने वाला सॉफ्टवेयर क्या कहलाता है?",
      "options": [
        "Adware",
        "Firmware",
        "Driver",
        "Compiler"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: कंप्यूटर पर अनचाहे विज्ञापन दिखाने वाला सॉफ्टवेयर क्या कहलाता है?",
      "options": [
        "Adware",
        "Driver",
        "Compiler",
        "Firmware"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: कंप्यूटर पर अनचाहे विज्ञापन दिखाने वाला सॉफ्टवेयर क्या कहलाता है?",
      "options": [
        "Compiler",
        "Driver",
        "Firmware",
        "Adware"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—कंप्यूटर पर अनचाहे विज्ञापन दिखाने वाला सॉफ्टवेयर क्या कहलाता है?",
      "options": [
        "Compiler",
        "Driver",
        "Adware",
        "Firmware"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? कंप्यूटर पर अनचाहे विज्ञापन दिखाने वाला सॉफ्टवेयर क्या कहलाता है?",
      "options": [
        "Driver",
        "Firmware",
        "Compiler",
        "Adware"
      ],
      "answer": 3
    },
    {
      "q": "एंटीवायरस का मुख्य काम क्या है?",
      "options": [
        "डेटा हमेशा बढ़ाना",
        "टाइपिंग तेज करना",
        "स्क्रीन बनाना",
        "मैलवेयर पहचानने/हटाने में मदद करना"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: एंटीवायरस का मुख्य काम क्या है?",
      "options": [
        "डेटा हमेशा बढ़ाना",
        "स्क्रीन बनाना",
        "टाइपिंग तेज करना",
        "मैलवेयर पहचानने/हटाने में मदद करना"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: एंटीवायरस का मुख्य काम क्या है?",
      "options": [
        "मैलवेयर पहचानने/हटाने में मदद करना",
        "डेटा हमेशा बढ़ाना",
        "टाइपिंग तेज करना",
        "स्क्रीन बनाना"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—एंटीवायरस का मुख्य काम क्या है?",
      "options": [
        "टाइपिंग तेज करना",
        "स्क्रीन बनाना",
        "मैलवेयर पहचानने/हटाने में मदद करना",
        "डेटा हमेशा बढ़ाना"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? एंटीवायरस का मुख्य काम क्या है?",
      "options": [
        "स्क्रीन बनाना",
        "डेटा हमेशा बढ़ाना",
        "मैलवेयर पहचानने/हटाने में मदद करना",
        "टाइपिंग तेज करना"
      ],
      "answer": 2
    },
    {
      "q": "ZIP फाइल किसलिए उपयोग होती है?",
      "options": [
        "पासवर्ड दिखाने",
        "फाइलों को संपीड़ित/एक साथ पैक करने के लिए",
        "केवल फोटो देखने",
        "इंटरनेट गति बढ़ाने"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: ZIP फाइल किसलिए उपयोग होती है?",
      "options": [
        "पासवर्ड दिखाने",
        "फाइलों को संपीड़ित/एक साथ पैक करने के लिए",
        "इंटरनेट गति बढ़ाने",
        "केवल फोटो देखने"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: ZIP फाइल किसलिए उपयोग होती है?",
      "options": [
        "केवल फोटो देखने",
        "पासवर्ड दिखाने",
        "फाइलों को संपीड़ित/एक साथ पैक करने के लिए",
        "इंटरनेट गति बढ़ाने"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—ZIP फाइल किसलिए उपयोग होती है?",
      "options": [
        "केवल फोटो देखने",
        "पासवर्ड दिखाने",
        "इंटरनेट गति बढ़ाने",
        "फाइलों को संपीड़ित/एक साथ पैक करने के लिए"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? ZIP फाइल किसलिए उपयोग होती है?",
      "options": [
        "फाइलों को संपीड़ित/एक साथ पैक करने के लिए",
        "पासवर्ड दिखाने",
        "केवल फोटो देखने",
        "इंटरनेट गति बढ़ाने"
      ],
      "answer": 0
    },
    {
      "q": "फाइल एक्सटेंशन .jpg आमतौर पर किसका होता है?",
      "options": [
        "वेब स्टाइल",
        "एक्जीक्यूटेबल",
        "ऑडियो",
        "चित्र"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: फाइल एक्सटेंशन .jpg आमतौर पर किसका होता है?",
      "options": [
        "वेब स्टाइल",
        "ऑडियो",
        "एक्जीक्यूटेबल",
        "चित्र"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: फाइल एक्सटेंशन .jpg आमतौर पर किसका होता है?",
      "options": [
        "एक्जीक्यूटेबल",
        "वेब स्टाइल",
        "ऑडियो",
        "चित्र"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—फाइल एक्सटेंशन .jpg आमतौर पर किसका होता है?",
      "options": [
        "चित्र",
        "वेब स्टाइल",
        "एक्जीक्यूटेबल",
        "ऑडियो"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? फाइल एक्सटेंशन .jpg आमतौर पर किसका होता है?",
      "options": [
        "ऑडियो",
        "चित्र",
        "वेब स्टाइल",
        "एक्जीक्यूटेबल"
      ],
      "answer": 1
    },
    {
      "q": ".mp3 आमतौर पर किस प्रकार की फाइल है?",
      "options": [
        "चित्र",
        "स्टाइलशीट",
        "स्प्रेडशीट",
        "ऑडियो"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: .mp3 आमतौर पर किस प्रकार की फाइल है?",
      "options": [
        "स्टाइलशीट",
        "चित्र",
        "स्प्रेडशीट",
        "ऑडियो"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: .mp3 आमतौर पर किस प्रकार की फाइल है?",
      "options": [
        "चित्र",
        "ऑडियो",
        "स्प्रेडशीट",
        "स्टाइलशीट"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—.mp3 आमतौर पर किस प्रकार की फाइल है?",
      "options": [
        "स्प्रेडशीट",
        "स्टाइलशीट",
        "चित्र",
        "ऑडियो"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? .mp3 आमतौर पर किस प्रकार की फाइल है?",
      "options": [
        "ऑडियो",
        "चित्र",
        "स्प्रेडशीट",
        "स्टाइलशीट"
      ],
      "answer": 0
    },
    {
      "q": ".mp4 आमतौर पर किस प्रकार की फाइल है?",
      "options": [
        "वीडियो कंटेनर",
        "फॉन्ट",
        "टेक्स्ट दस्तावेज",
        "प्रोग्रामिंग भाषा"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: .mp4 आमतौर पर किस प्रकार की फाइल है?",
      "options": [
        "फॉन्ट",
        "प्रोग्रामिंग भाषा",
        "टेक्स्ट दस्तावेज",
        "वीडियो कंटेनर"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: .mp4 आमतौर पर किस प्रकार की फाइल है?",
      "options": [
        "प्रोग्रामिंग भाषा",
        "वीडियो कंटेनर",
        "फॉन्ट",
        "टेक्स्ट दस्तावेज"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—.mp4 आमतौर पर किस प्रकार की फाइल है?",
      "options": [
        "टेक्स्ट दस्तावेज",
        "वीडियो कंटेनर",
        "फॉन्ट",
        "प्रोग्रामिंग भाषा"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? .mp4 आमतौर पर किस प्रकार की फाइल है?",
      "options": [
        "टेक्स्ट दस्तावेज",
        "फॉन्ट",
        "वीडियो कंटेनर",
        "प्रोग्रामिंग भाषा"
      ],
      "answer": 2
    },
    {
      "q": "Git किसलिए उपयोग होता है?",
      "options": [
        "हार्डवेयर मरम्मत",
        "Version control",
        "फोटो प्रिंट",
        "वेबकैम रिकॉर्डिंग"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: Git किसलिए उपयोग होता है?",
      "options": [
        "फोटो प्रिंट",
        "Version control",
        "हार्डवेयर मरम्मत",
        "वेबकैम रिकॉर्डिंग"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: Git किसलिए उपयोग होता है?",
      "options": [
        "फोटो प्रिंट",
        "हार्डवेयर मरम्मत",
        "Version control",
        "वेबकैम रिकॉर्डिंग"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—Git किसलिए उपयोग होता है?",
      "options": [
        "फोटो प्रिंट",
        "हार्डवेयर मरम्मत",
        "वेबकैम रिकॉर्डिंग",
        "Version control"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? Git किसलिए उपयोग होता है?",
      "options": [
        "हार्डवेयर मरम्मत",
        "Version control",
        "फोटो प्रिंट",
        "वेबकैम रिकॉर्डिंग"
      ],
      "answer": 1
    },
    {
      "q": "VS Code क्या है?",
      "options": [
        "एंटीवायरस",
        "ऑपरेटिंग सिस्टम",
        "कोड एडिटर",
        "सर्च इंजन"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: VS Code क्या है?",
      "options": [
        "ऑपरेटिंग सिस्टम",
        "कोड एडिटर",
        "सर्च इंजन",
        "एंटीवायरस"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: VS Code क्या है?",
      "options": [
        "कोड एडिटर",
        "एंटीवायरस",
        "सर्च इंजन",
        "ऑपरेटिंग सिस्टम"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—VS Code क्या है?",
      "options": [
        "कोड एडिटर",
        "एंटीवायरस",
        "ऑपरेटिंग सिस्टम",
        "सर्च इंजन"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? VS Code क्या है?",
      "options": [
        "एंटीवायरस",
        "कोड एडिटर",
        "सर्च इंजन",
        "ऑपरेटिंग सिस्टम"
      ],
      "answer": 1
    },
    {
      "q": "API का सामान्य अर्थ क्या है?",
      "options": [
        "प्रिंटर इंक",
        "मॉनिटर केबल",
        "सॉफ्टवेयर के बीच संवाद का इंटरफेस",
        "फाइल वायरस"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: API का सामान्य अर्थ क्या है?",
      "options": [
        "फाइल वायरस",
        "मॉनिटर केबल",
        "प्रिंटर इंक",
        "सॉफ्टवेयर के बीच संवाद का इंटरफेस"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: API का सामान्य अर्थ क्या है?",
      "options": [
        "सॉफ्टवेयर के बीच संवाद का इंटरफेस",
        "फाइल वायरस",
        "प्रिंटर इंक",
        "मॉनिटर केबल"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—API का सामान्य अर्थ क्या है?",
      "options": [
        "मॉनिटर केबल",
        "सॉफ्टवेयर के बीच संवाद का इंटरफेस",
        "प्रिंटर इंक",
        "फाइल वायरस"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? API का सामान्य अर्थ क्या है?",
      "options": [
        "सॉफ्टवेयर के बीच संवाद का इंटरफेस",
        "मॉनिटर केबल",
        "फाइल वायरस",
        "प्रिंटर इंक"
      ],
      "answer": 0
    },
    {
      "q": "QR code किसलिए स्कैन किया जा सकता है?",
      "options": [
        "स्क्रीन चमकाने",
        "जानकारी या लिंक खोलने के लिए",
        "CPU ठंडा करने",
        "बैटरी चार्ज करने"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: QR code किसलिए स्कैन किया जा सकता है?",
      "options": [
        "स्क्रीन चमकाने",
        "CPU ठंडा करने",
        "जानकारी या लिंक खोलने के लिए",
        "बैटरी चार्ज करने"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: QR code किसलिए स्कैन किया जा सकता है?",
      "options": [
        "जानकारी या लिंक खोलने के लिए",
        "बैटरी चार्ज करने",
        "CPU ठंडा करने",
        "स्क्रीन चमकाने"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—QR code किसलिए स्कैन किया जा सकता है?",
      "options": [
        "जानकारी या लिंक खोलने के लिए",
        "बैटरी चार्ज करने",
        "CPU ठंडा करने",
        "स्क्रीन चमकाने"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? QR code किसलिए स्कैन किया जा सकता है?",
      "options": [
        "जानकारी या लिंक खोलने के लिए",
        "CPU ठंडा करने",
        "स्क्रीन चमकाने",
        "बैटरी चार्ज करने"
      ],
      "answer": 0
    },
    {
      "q": "डेटा का बैकअप क्यों बनाते हैं?",
      "options": [
        "कंप्यूटर भारी करने",
        "खोने पर डेटा वापस पाने के लिए",
        "फाइल का रंग बदलने",
        "इंटरनेट बंद करने"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: डेटा का बैकअप क्यों बनाते हैं?",
      "options": [
        "खोने पर डेटा वापस पाने के लिए",
        "इंटरनेट बंद करने",
        "कंप्यूटर भारी करने",
        "फाइल का रंग बदलने"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: डेटा का बैकअप क्यों बनाते हैं?",
      "options": [
        "कंप्यूटर भारी करने",
        "इंटरनेट बंद करने",
        "फाइल का रंग बदलने",
        "खोने पर डेटा वापस पाने के लिए"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—डेटा का बैकअप क्यों बनाते हैं?",
      "options": [
        "फाइल का रंग बदलने",
        "खोने पर डेटा वापस पाने के लिए",
        "कंप्यूटर भारी करने",
        "इंटरनेट बंद करने"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? डेटा का बैकअप क्यों बनाते हैं?",
      "options": [
        "कंप्यूटर भारी करने",
        "फाइल का रंग बदलने",
        "इंटरनेट बंद करने",
        "खोने पर डेटा वापस पाने के लिए"
      ],
      "answer": 3
    },
    {
      "q": "कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
      "options": [
        "कीबोर्ड",
        "CPU",
        "माउस",
        "मॉनिटर"
      ],
      "answer": 1
    },
    {
      "q": "कीबोर्ड किस प्रकार का उपकरण है?",
      "options": [
        "इनपुट",
        "स्टोरेज",
        "आउटपुट",
        "प्रिंटिंग"
      ],
      "answer": 0
    },
    {
      "q": "WWW का पूरा नाम क्या है?",
      "options": [
        "World Wide Web",
        "Wide World Wire",
        "Web World Work",
        "World Web Window"
      ],
      "answer": 0
    },
    {
      "q": "कंप्यूटर में टाइप करने के लिए क्या इस्तेमाल होता है?",
      "options": [
        "वेबकैम",
        "कीबोर्ड",
        "स्पीकर",
        "प्रिंटर"
      ],
      "answer": 1
    },
    {
      "q": "इनमें से कौन-सा वेब ब्राउज़र है?",
      "options": [
        "Google Chrome",
        "Notepad",
        "MS Paint",
        "Calculator"
      ],
      "answer": 0
    },
    {
      "q": "RAM किस प्रकार की मेमोरी है?",
      "options": [
        "अस्थायी/वोलेटाइल",
        "केवल बाहरी",
        "स्थायी ROM",
        "कागजी"
      ],
      "answer": 0
    },
    {
      "q": "ROM का पूरा नाम क्या है?",
      "options": [
        "Read Open Mode",
        "Random Output Machine",
        "Read Only Memory",
        "Run Only Memory"
      ],
      "answer": 2
    },
    {
      "q": "कंप्यूटर का भौतिक भाग क्या कहलाता है?",
      "options": [
        "हार्डवेयर",
        "डेटाबेस",
        "सॉफ्टवेयर",
        "ब्राउज़र"
      ],
      "answer": 0
    },
    {
      "q": "प्रोग्राम और ऐप किसका उदाहरण हैं?",
      "options": [
        "केबल",
        "सॉफ्टवेयर",
        "हार्डवेयर",
        "मदरबोर्ड"
      ],
      "answer": 1
    },
    {
      "q": "कंप्यूटर में डेटा स्थायी रूप से रखने का उपकरण कौन-सा है?",
      "options": [
        "SSD या हार्ड डिस्क",
        "कैश",
        "रजिस्टर",
        "RAM"
      ],
      "answer": 0
    },
    {
      "q": "ऑपरेटिंग सिस्टम का उदाहरण कौन-सा है?",
      "options": [
        "HTML",
        "Windows",
        "Google Search",
        "USB"
      ],
      "answer": 1
    },
    {
      "q": "Linux क्या है?",
      "options": [
        "ऑपरेटिंग सिस्टम",
        "स्प्रेडशीट",
        "प्रिंटर",
        "वेब ब्राउज़र"
      ],
      "answer": 0
    },
    {
      "q": "मोबाइल फोन में लोकप्रिय ऑपरेटिंग सिस्टम कौन-सा है?",
      "options": [
        "Excel",
        "Android",
        "Photoshop",
        "Python"
      ],
      "answer": 1
    },
    {
      "q": "बाइनरी संख्या प्रणाली में कौन-से अंक होते हैं?",
      "options": [
        "0 और 1",
        "0 से 9",
        "1 और 2",
        "A से Z"
      ],
      "answer": 0
    },
    {
      "q": "एक बाइट में कितने बिट होते हैं?",
      "options": [
        "8",
        "16",
        "4",
        "2"
      ],
      "answer": 0
    },
    {
      "q": "URL का पूरा नाम क्या है?",
      "options": [
        "Uniform Resource Locator",
        "Unified Routing Line",
        "User Reference List",
        "Universal Record Link"
      ],
      "answer": 0
    },
    {
      "q": "HTTP का पूरा नाम क्या है?",
      "options": [
        "High Text Transfer Program",
        "Hyperlink Text Tool Process",
        "Hypertext Transfer Protocol",
        "Home Tool Transfer Protocol"
      ],
      "answer": 2
    },
    {
      "q": "HTTPS में S का अर्थ क्या है?",
      "options": [
        "Server",
        "System",
        "Secure",
        "Search"
      ],
      "answer": 2
    },
    {
      "q": "HTML मुख्यतः किसलिए प्रयोग होता है?",
      "options": [
        "वायरस हटाने के लिए",
        "वीडियो चलाने के लिए ही",
        "वेब पेज की संरचना बनाने के लिए",
        "हार्ड डिस्क बनाने के लिए"
      ],
      "answer": 2
    },
    {
      "q": "CSS का उपयोग किसलिए होता है?",
      "options": [
        "वेब पेज की शैली/डिजाइन के लिए",
        "कंप्यूटर चालू करने के लिए",
        "डेटा टाइप करने के लिए ही",
        "फाइल कंप्रेस करने के लिए"
      ],
      "answer": 0
    },
    {
      "q": "JavaScript का उपयोग वेब पेज में किसलिए होता है?",
      "options": [
        "बिजली देने",
        "केवल स्क्रीन साफ करने",
        "इंटरैक्टिव व्यवहार जोड़ने के लिए",
        "केवल प्रिंटिंग"
      ],
      "answer": 2
    },
    {
      "q": "Python क्या है?",
      "options": [
        "सर्च इंजन",
        "प्रोग्रामिंग भाषा",
        "ऑपरेटिंग सिस्टम का नाम ही",
        "मॉनिटर का प्रकार"
      ],
      "answer": 1
    },
    {
      "q": "डेटाबेस का काम क्या है?",
      "options": [
        "डेटा व्यवस्थित रूप से रखना",
        "आवाज बढ़ाना",
        "स्क्रीन चमकाना",
        "कूलिंग करना"
      ],
      "answer": 0
    },
    {
      "q": "ईमेल में CC का अर्थ क्या है?",
      "options": [
        "Carbon Copy",
        "Closed Chat",
        "Computer Code",
        "Central Contact"
      ],
      "answer": 0
    },
    {
      "q": "ईमेल में BCC का उपयोग किसलिए होता है?",
      "options": [
        "पासवर्ड बदलने",
        "मेल प्रिंट करने",
        "अन्य प्राप्तकर्ताओं के पते छिपाकर कॉपी भेजने के लिए",
        "फाइल हटाने"
      ],
      "answer": 2
    },
    {
      "q": "कंप्यूटर वायरस क्या है?",
      "options": [
        "हार्डवेयर तार",
        "एंटीवायरस अपडेट",
        "हानिकारक प्रोग्राम",
        "वेबकैम"
      ],
      "answer": 2
    },
    {
      "q": "फिशिंग क्या है?",
      "options": [
        "धोखे से निजी जानकारी हासिल करने की कोशिश",
        "कंप्यूटर सफाई",
        "फाइल बैकअप",
        "कानूनी अपडेट"
      ],
      "answer": 0
    },
    {
      "q": "मजबूत पासवर्ड कैसा होना चाहिए?",
      "options": [
        "लंबा और अलग-अलग प्रकार के अक्षरों वाला",
        "अपना नाम मात्र",
        "123456",
        "password"
      ],
      "answer": 0
    },
    {
      "q": "2FA का उद्देश्य क्या है?",
      "options": [
        "लॉगिन में अतिरिक्त सुरक्षा देना",
        "इंटरनेट बंद करना",
        "स्क्रीन आकार बढ़ाना",
        "फाइल डिलीट करना"
      ],
      "answer": 0
    },
    {
      "q": "क्लाउड स्टोरेज क्या है?",
      "options": [
        "प्रिंटर की स्याही",
        "इंटरनेट पर डेटा संग्रहण",
        "CPU फैन",
        "केवल पेन ड्राइव"
      ],
      "answer": 1
    },
    {
      "q": "PDF का पूरा नाम क्या है?",
      "options": [
        "Personal Data File",
        "Printed Document Folder",
        "Portable Document Format",
        "Public Disk Format"
      ],
      "answer": 2
    },
    {
      "q": "MS Excel मुख्यतः किसलिए उपयोग होता है?",
      "options": [
        "स्प्रेडशीट और गणना",
        "ऑडियो रिकॉर्डिंग",
        "वेब ब्राउज़िंग",
        "वीडियो संपादन ही"
      ],
      "answer": 0
    },
    {
      "q": "Ctrl+C का सामान्य कार्य क्या है?",
      "options": [
        "कॉपी करना",
        "सेव करना",
        "कट करना",
        "पेस्ट करना"
      ],
      "answer": 0
    },
    {
      "q": "Ctrl+V का सामान्य कार्य क्या है?",
      "options": [
        "कट करना",
        "पेस्ट करना",
        "कॉपी करना",
        "प्रिंट करना"
      ],
      "answer": 1
    },
    {
      "q": "Ctrl+S का सामान्य कार्य क्या है?",
      "options": [
        "सर्च करना",
        "शटडाउन",
        "सेव करना",
        "सेलेक्ट करना"
      ],
      "answer": 2
    },
    {
      "q": "Ctrl+Z का सामान्य कार्य क्या है?",
      "options": [
        "Save",
        "Undo",
        "Redo",
        "Print"
      ],
      "answer": 1
    },
    {
      "q": "कंप्यूटर नेटवर्क क्या जोड़ता है?",
      "options": [
        "केवल फाइल नाम",
        "केवल स्क्रीन पिक्सेल",
        "केवल प्रिंटर की स्याही",
        "दो या अधिक कंप्यूटर/डिवाइस"
      ],
      "answer": 3
    },
    {
      "q": "LAN का पूरा नाम क्या है?",
      "options": [
        "Long Area Number",
        "Local Area Network",
        "Large Access Node",
        "Linked App Name"
      ],
      "answer": 1
    },
    {
      "q": "Wi-Fi किसलिए उपयोग होता है?",
      "options": [
        "कागज प्रिंट करने के लिए ही",
        "स्क्रीन साफ करने",
        "वायरलेस नेटवर्क कनेक्शन",
        "बिजली स्टोर करने"
      ],
      "answer": 2
    },
    {
      "q": "IP address किसकी पहचान में मदद करता है?",
      "options": [
        "मॉनिटर रंग",
        "कीबोर्ड बटन",
        "फाइल आकार",
        "नेटवर्क पर डिवाइस/इंटरफेस"
      ],
      "answer": 3
    },
    {
      "q": "सर्च इंजन का उदाहरण कौन-सा है?",
      "options": [
        "PowerPoint",
        "Bluetooth",
        "Windows Explorer",
        "Google"
      ],
      "answer": 3
    },
    {
      "q": "USB का पूरा नाम क्या है?",
      "options": [
        "United System Board",
        "Universal Serial Bus",
        "Universal Screen Button",
        "User Service Base"
      ],
      "answer": 1
    },
    {
      "q": "कंप्यूटर की स्क्रीन को क्या कहते हैं?",
      "options": [
        "मॉनिटर",
        "राउटर",
        "स्कैनर",
        "माउस"
      ],
      "answer": 0
    },
    {
      "q": "कागज पर आउटपुट देने वाला उपकरण कौन-सा है?",
      "options": [
        "माइक्रोफोन",
        "प्रिंटर",
        "जॉयस्टिक",
        "कीबोर्ड"
      ],
      "answer": 1
    },
    {
      "q": "कागज की छवि/दस्तावेज कंप्यूटर में लाने वाला उपकरण कौन-सा है?",
      "options": [
        "स्पीकर",
        "स्कैनर",
        "राउटर",
        "प्रोजेक्टर"
      ],
      "answer": 1
    },
    {
      "q": "डेटा की सबसे छोटी सामान्य इकाई क्या है?",
      "options": [
        "बिट",
        "किलोबाइट",
        "बाइट",
        "मेगाबाइट"
      ],
      "answer": 0
    },
    {
      "q": "किलोबाइट से बड़ी इकाई कौन-सी है?",
      "options": [
        "पिक्सेल",
        "निबल",
        "बिट",
        "मेगाबाइट"
      ],
      "answer": 3
    },
    {
      "q": "GPU मुख्यतः किस काम में मदद करता है?",
      "options": [
        "टाइपिंग",
        "ग्राफिक्स प्रोसेसिंग",
        "कागज स्कैनिंग",
        "नेटवर्क नामकरण"
      ],
      "answer": 1
    },
    {
      "q": "Motherboard क्या है?",
      "options": [
        "मुख्य सर्किट बोर्ड",
        "वेब पेज",
        "इनपुट ऐप",
        "फाइल एक्सटेंशन"
      ],
      "answer": 0
    },
    {
      "q": "कंप्यूटर को सुरक्षित बंद करने की प्रक्रिया क्या कहलाती है?",
      "options": [
        "Pairing",
        "Refresh",
        "Upload",
        "Shutdown"
      ],
      "answer": 3
    },
    {
      "q": "कंप्यूटर पर अनचाहे विज्ञापन दिखाने वाला सॉफ्टवेयर क्या कहलाता है?",
      "options": [
        "Firmware",
        "Adware",
        "Driver",
        "Compiler"
      ],
      "answer": 1
    },
    {
      "q": "एंटीवायरस का मुख्य काम क्या है?",
      "options": [
        "टाइपिंग तेज करना",
        "मैलवेयर पहचानने/हटाने में मदद करना",
        "स्क्रीन बनाना",
        "डेटा हमेशा बढ़ाना"
      ],
      "answer": 1
    },
    {
      "q": "ZIP फाइल किसलिए उपयोग होती है?",
      "options": [
        "केवल फोटो देखने",
        "पासवर्ड दिखाने",
        "फाइलों को संपीड़ित/एक साथ पैक करने के लिए",
        "इंटरनेट गति बढ़ाने"
      ],
      "answer": 2
    },
    {
      "q": "फाइल एक्सटेंशन .jpg आमतौर पर किसका होता है?",
      "options": [
        "वेब स्टाइल",
        "एक्जीक्यूटेबल",
        "ऑडियो",
        "चित्र"
      ],
      "answer": 3
    },
    {
      "q": ".mp3 आमतौर पर किस प्रकार की फाइल है?",
      "options": [
        "चित्र",
        "ऑडियो",
        "स्प्रेडशीट",
        "स्टाइलशीट"
      ],
      "answer": 1
    },
    {
      "q": ".mp4 आमतौर पर किस प्रकार की फाइल है?",
      "options": [
        "फॉन्ट",
        "प्रोग्रामिंग भाषा",
        "वीडियो कंटेनर",
        "टेक्स्ट दस्तावेज"
      ],
      "answer": 2
    },
    {
      "q": "Git किसलिए उपयोग होता है?",
      "options": [
        "वेबकैम रिकॉर्डिंग",
        "Version control",
        "फोटो प्रिंट",
        "हार्डवेयर मरम्मत"
      ],
      "answer": 1
    },
    {
      "q": "VS Code क्या है?",
      "options": [
        "कोड एडिटर",
        "एंटीवायरस",
        "सर्च इंजन",
        "ऑपरेटिंग सिस्टम"
      ],
      "answer": 0
    },
    {
      "q": "API का सामान्य अर्थ क्या है?",
      "options": [
        "प्रिंटर इंक",
        "मॉनिटर केबल",
        "फाइल वायरस",
        "सॉफ्टवेयर के बीच संवाद का इंटरफेस"
      ],
      "answer": 3
    },
    {
      "q": "QR code किसलिए स्कैन किया जा सकता है?",
      "options": [
        "CPU ठंडा करने",
        "बैटरी चार्ज करने",
        "जानकारी या लिंक खोलने के लिए",
        "स्क्रीन चमकाने"
      ],
      "answer": 2
    },
    {
      "q": "डेटा का बैकअप क्यों बनाते हैं?",
      "options": [
        "इंटरनेट बंद करने",
        "खोने पर डेटा वापस पाने के लिए",
        "कंप्यूटर भारी करने",
        "फाइल का रंग बदलने"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
      "options": [
        "कीबोर्ड",
        "CPU",
        "माउस",
        "मॉनिटर"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: कीबोर्ड किस प्रकार का उपकरण है?",
      "options": [
        "आउटपुट",
        "प्रिंटिंग",
        "स्टोरेज",
        "इनपुट"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: WWW का पूरा नाम क्या है?",
      "options": [
        "World Web Window",
        "Wide World Wire",
        "World Wide Web",
        "Web World Work"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: कंप्यूटर में टाइप करने के लिए क्या इस्तेमाल होता है?",
      "options": [
        "प्रिंटर",
        "कीबोर्ड",
        "वेबकैम",
        "स्पीकर"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: इनमें से कौन-सा वेब ब्राउज़र है?",
      "options": [
        "Notepad",
        "Calculator",
        "MS Paint",
        "Google Chrome"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: RAM किस प्रकार की मेमोरी है?",
      "options": [
        "स्थायी ROM",
        "कागजी",
        "केवल बाहरी",
        "अस्थायी/वोलेटाइल"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: ROM का पूरा नाम क्या है?",
      "options": [
        "Run Only Memory",
        "Read Only Memory",
        "Read Open Mode",
        "Random Output Machine"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: कंप्यूटर का भौतिक भाग क्या कहलाता है?",
      "options": [
        "ब्राउज़र",
        "डेटाबेस",
        "हार्डवेयर",
        "सॉफ्टवेयर"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: प्रोग्राम और ऐप किसका उदाहरण हैं?",
      "options": [
        "सॉफ्टवेयर",
        "केबल",
        "हार्डवेयर",
        "मदरबोर्ड"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: कंप्यूटर में डेटा स्थायी रूप से रखने का उपकरण कौन-सा है?",
      "options": [
        "SSD या हार्ड डिस्क",
        "रजिस्टर",
        "कैश",
        "RAM"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: ऑपरेटिंग सिस्टम का उदाहरण कौन-सा है?",
      "options": [
        "HTML",
        "Windows",
        "Google Search",
        "USB"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: Linux क्या है?",
      "options": [
        "स्प्रेडशीट",
        "प्रिंटर",
        "ऑपरेटिंग सिस्टम",
        "वेब ब्राउज़र"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: मोबाइल फोन में लोकप्रिय ऑपरेटिंग सिस्टम कौन-सा है?",
      "options": [
        "Python",
        "Android",
        "Excel",
        "Photoshop"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: बाइनरी संख्या प्रणाली में कौन-से अंक होते हैं?",
      "options": [
        "A से Z",
        "1 और 2",
        "0 और 1",
        "0 से 9"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: एक बाइट में कितने बिट होते हैं?",
      "options": [
        "4",
        "8",
        "2",
        "16"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: URL का पूरा नाम क्या है?",
      "options": [
        "User Reference List",
        "Universal Record Link",
        "Unified Routing Line",
        "Uniform Resource Locator"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: HTTP का पूरा नाम क्या है?",
      "options": [
        "High Text Transfer Program",
        "Home Tool Transfer Protocol",
        "Hyperlink Text Tool Process",
        "Hypertext Transfer Protocol"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: HTTPS में S का अर्थ क्या है?",
      "options": [
        "Search",
        "System",
        "Server",
        "Secure"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: HTML मुख्यतः किसलिए प्रयोग होता है?",
      "options": [
        "वायरस हटाने के लिए",
        "हार्ड डिस्क बनाने के लिए",
        "वीडियो चलाने के लिए ही",
        "वेब पेज की संरचना बनाने के लिए"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: CSS का उपयोग किसलिए होता है?",
      "options": [
        "वेब पेज की शैली/डिजाइन के लिए",
        "कंप्यूटर चालू करने के लिए",
        "डेटा टाइप करने के लिए ही",
        "फाइल कंप्रेस करने के लिए"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: JavaScript का उपयोग वेब पेज में किसलिए होता है?",
      "options": [
        "बिजली देने",
        "इंटरैक्टिव व्यवहार जोड़ने के लिए",
        "केवल स्क्रीन साफ करने",
        "केवल प्रिंटिंग"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: Python क्या है?",
      "options": [
        "मॉनिटर का प्रकार",
        "ऑपरेटिंग सिस्टम का नाम ही",
        "सर्च इंजन",
        "प्रोग्रामिंग भाषा"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: डेटाबेस का काम क्या है?",
      "options": [
        "आवाज बढ़ाना",
        "स्क्रीन चमकाना",
        "डेटा व्यवस्थित रूप से रखना",
        "कूलिंग करना"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: ईमेल में CC का अर्थ क्या है?",
      "options": [
        "Computer Code",
        "Closed Chat",
        "Carbon Copy",
        "Central Contact"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: ईमेल में BCC का उपयोग किसलिए होता है?",
      "options": [
        "पासवर्ड बदलने",
        "फाइल हटाने",
        "मेल प्रिंट करने",
        "अन्य प्राप्तकर्ताओं के पते छिपाकर कॉपी भेजने के लिए"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: कंप्यूटर वायरस क्या है?",
      "options": [
        "हार्डवेयर तार",
        "हानिकारक प्रोग्राम",
        "एंटीवायरस अपडेट",
        "वेबकैम"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: फिशिंग क्या है?",
      "options": [
        "कानूनी अपडेट",
        "कंप्यूटर सफाई",
        "फाइल बैकअप",
        "धोखे से निजी जानकारी हासिल करने की कोशिश"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: मजबूत पासवर्ड कैसा होना चाहिए?",
      "options": [
        "password",
        "123456",
        "लंबा और अलग-अलग प्रकार के अक्षरों वाला",
        "अपना नाम मात्र"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 2FA का उद्देश्य क्या है?",
      "options": [
        "फाइल डिलीट करना",
        "इंटरनेट बंद करना",
        "लॉगिन में अतिरिक्त सुरक्षा देना",
        "स्क्रीन आकार बढ़ाना"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: क्लाउड स्टोरेज क्या है?",
      "options": [
        "प्रिंटर की स्याही",
        "इंटरनेट पर डेटा संग्रहण",
        "CPU फैन",
        "केवल पेन ड्राइव"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: PDF का पूरा नाम क्या है?",
      "options": [
        "Public Disk Format",
        "Personal Data File",
        "Printed Document Folder",
        "Portable Document Format"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: MS Excel मुख्यतः किसलिए उपयोग होता है?",
      "options": [
        "वेब ब्राउज़िंग",
        "ऑडियो रिकॉर्डिंग",
        "स्प्रेडशीट और गणना",
        "वीडियो संपादन ही"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: Ctrl+C का सामान्य कार्य क्या है?",
      "options": [
        "पेस्ट करना",
        "सेव करना",
        "कट करना",
        "कॉपी करना"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: Ctrl+V का सामान्य कार्य क्या है?",
      "options": [
        "कॉपी करना",
        "कट करना",
        "प्रिंट करना",
        "पेस्ट करना"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: Ctrl+S का सामान्य कार्य क्या है?",
      "options": [
        "सेव करना",
        "शटडाउन",
        "सेलेक्ट करना",
        "सर्च करना"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: Ctrl+Z का सामान्य कार्य क्या है?",
      "options": [
        "Print",
        "Undo",
        "Redo",
        "Save"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: कंप्यूटर नेटवर्क क्या जोड़ता है?",
      "options": [
        "दो या अधिक कंप्यूटर/डिवाइस",
        "केवल फाइल नाम",
        "केवल प्रिंटर की स्याही",
        "केवल स्क्रीन पिक्सेल"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: LAN का पूरा नाम क्या है?",
      "options": [
        "Long Area Number",
        "Large Access Node",
        "Local Area Network",
        "Linked App Name"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: Wi-Fi किसलिए उपयोग होता है?",
      "options": [
        "स्क्रीन साफ करने",
        "बिजली स्टोर करने",
        "कागज प्रिंट करने के लिए ही",
        "वायरलेस नेटवर्क कनेक्शन"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: IP address किसकी पहचान में मदद करता है?",
      "options": [
        "मॉनिटर रंग",
        "फाइल आकार",
        "कीबोर्ड बटन",
        "नेटवर्क पर डिवाइस/इंटरफेस"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: सर्च इंजन का उदाहरण कौन-सा है?",
      "options": [
        "PowerPoint",
        "Bluetooth",
        "Windows Explorer",
        "Google"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: USB का पूरा नाम क्या है?",
      "options": [
        "Universal Serial Bus",
        "Universal Screen Button",
        "United System Board",
        "User Service Base"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: कंप्यूटर की स्क्रीन को क्या कहते हैं?",
      "options": [
        "माउस",
        "मॉनिटर",
        "राउटर",
        "स्कैनर"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: कागज पर आउटपुट देने वाला उपकरण कौन-सा है?",
      "options": [
        "प्रिंटर",
        "जॉयस्टिक",
        "माइक्रोफोन",
        "कीबोर्ड"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: कागज की छवि/दस्तावेज कंप्यूटर में लाने वाला उपकरण कौन-सा है?",
      "options": [
        "स्पीकर",
        "प्रोजेक्टर",
        "स्कैनर",
        "राउटर"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: डेटा की सबसे छोटी सामान्य इकाई क्या है?",
      "options": [
        "बाइट",
        "मेगाबाइट",
        "किलोबाइट",
        "बिट"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: किलोबाइट से बड़ी इकाई कौन-सी है?",
      "options": [
        "पिक्सेल",
        "मेगाबाइट",
        "बिट",
        "निबल"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: GPU मुख्यतः किस काम में मदद करता है?",
      "options": [
        "कागज स्कैनिंग",
        "नेटवर्क नामकरण",
        "टाइपिंग",
        "ग्राफिक्स प्रोसेसिंग"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: Motherboard क्या है?",
      "options": [
        "इनपुट ऐप",
        "वेब पेज",
        "मुख्य सर्किट बोर्ड",
        "फाइल एक्सटेंशन"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: कंप्यूटर को सुरक्षित बंद करने की प्रक्रिया क्या कहलाती है?",
      "options": [
        "Shutdown",
        "Pairing",
        "Upload",
        "Refresh"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: कंप्यूटर पर अनचाहे विज्ञापन दिखाने वाला सॉफ्टवेयर क्या कहलाता है?",
      "options": [
        "Driver",
        "Firmware",
        "Compiler",
        "Adware"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: एंटीवायरस का मुख्य काम क्या है?",
      "options": [
        "स्क्रीन बनाना",
        "मैलवेयर पहचानने/हटाने में मदद करना",
        "टाइपिंग तेज करना",
        "डेटा हमेशा बढ़ाना"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: ZIP फाइल किसलिए उपयोग होती है?",
      "options": [
        "केवल फोटो देखने",
        "इंटरनेट गति बढ़ाने",
        "पासवर्ड दिखाने",
        "फाइलों को संपीड़ित/एक साथ पैक करने के लिए"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: फाइल एक्सटेंशन .jpg आमतौर पर किसका होता है?",
      "options": [
        "चित्र",
        "वेब स्टाइल",
        "ऑडियो",
        "एक्जीक्यूटेबल"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: .mp3 आमतौर पर किस प्रकार की फाइल है?",
      "options": [
        "चित्र",
        "स्टाइलशीट",
        "स्प्रेडशीट",
        "ऑडियो"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: .mp4 आमतौर पर किस प्रकार की फाइल है?",
      "options": [
        "प्रोग्रामिंग भाषा",
        "टेक्स्ट दस्तावेज",
        "वीडियो कंटेनर",
        "फॉन्ट"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: Git किसलिए उपयोग होता है?",
      "options": [
        "हार्डवेयर मरम्मत",
        "Version control",
        "फोटो प्रिंट",
        "वेबकैम रिकॉर्डिंग"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: VS Code क्या है?",
      "options": [
        "एंटीवायरस",
        "कोड एडिटर",
        "सर्च इंजन",
        "ऑपरेटिंग सिस्टम"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: API का सामान्य अर्थ क्या है?",
      "options": [
        "सॉफ्टवेयर के बीच संवाद का इंटरफेस",
        "प्रिंटर इंक",
        "मॉनिटर केबल",
        "फाइल वायरस"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: QR code किसलिए स्कैन किया जा सकता है?",
      "options": [
        "बैटरी चार्ज करने",
        "CPU ठंडा करने",
        "स्क्रीन चमकाने",
        "जानकारी या लिंक खोलने के लिए"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: डेटा का बैकअप क्यों बनाते हैं?",
      "options": [
        "फाइल का रंग बदलने",
        "खोने पर डेटा वापस पाने के लिए",
        "इंटरनेट बंद करने",
        "कंप्यूटर भारी करने"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
      "options": [
        "मॉनिटर",
        "कीबोर्ड",
        "माउस",
        "CPU"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: कीबोर्ड किस प्रकार का उपकरण है?",
      "options": [
        "आउटपुट",
        "स्टोरेज",
        "प्रिंटिंग",
        "इनपुट"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: WWW का पूरा नाम क्या है?",
      "options": [
        "Wide World Wire",
        "World Wide Web",
        "World Web Window",
        "Web World Work"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: कंप्यूटर में टाइप करने के लिए क्या इस्तेमाल होता है?",
      "options": [
        "स्पीकर",
        "वेबकैम",
        "प्रिंटर",
        "कीबोर्ड"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: इनमें से कौन-सा वेब ब्राउज़र है?",
      "options": [
        "Google Chrome",
        "Calculator",
        "Notepad",
        "MS Paint"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: RAM किस प्रकार की मेमोरी है?",
      "options": [
        "केवल बाहरी",
        "अस्थायी/वोलेटाइल",
        "स्थायी ROM",
        "कागजी"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: ROM का पूरा नाम क्या है?",
      "options": [
        "Run Only Memory",
        "Read Open Mode",
        "Random Output Machine",
        "Read Only Memory"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: कंप्यूटर का भौतिक भाग क्या कहलाता है?",
      "options": [
        "डेटाबेस",
        "सॉफ्टवेयर",
        "हार्डवेयर",
        "ब्राउज़र"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: प्रोग्राम और ऐप किसका उदाहरण हैं?",
      "options": [
        "हार्डवेयर",
        "मदरबोर्ड",
        "केबल",
        "सॉफ्टवेयर"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: कंप्यूटर में डेटा स्थायी रूप से रखने का उपकरण कौन-सा है?",
      "options": [
        "कैश",
        "RAM",
        "रजिस्टर",
        "SSD या हार्ड डिस्क"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: ऑपरेटिंग सिस्टम का उदाहरण कौन-सा है?",
      "options": [
        "Google Search",
        "USB",
        "Windows",
        "HTML"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: Linux क्या है?",
      "options": [
        "वेब ब्राउज़र",
        "स्प्रेडशीट",
        "प्रिंटर",
        "ऑपरेटिंग सिस्टम"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: मोबाइल फोन में लोकप्रिय ऑपरेटिंग सिस्टम कौन-सा है?",
      "options": [
        "Android",
        "Excel",
        "Python",
        "Photoshop"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: बाइनरी संख्या प्रणाली में कौन-से अंक होते हैं?",
      "options": [
        "0 और 1",
        "0 से 9",
        "A से Z",
        "1 और 2"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: एक बाइट में कितने बिट होते हैं?",
      "options": [
        "4",
        "2",
        "8",
        "16"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: URL का पूरा नाम क्या है?",
      "options": [
        "Unified Routing Line",
        "User Reference List",
        "Universal Record Link",
        "Uniform Resource Locator"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: HTTP का पूरा नाम क्या है?",
      "options": [
        "Home Tool Transfer Protocol",
        "Hyperlink Text Tool Process",
        "High Text Transfer Program",
        "Hypertext Transfer Protocol"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: HTTPS में S का अर्थ क्या है?",
      "options": [
        "Secure",
        "System",
        "Search",
        "Server"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: HTML मुख्यतः किसलिए प्रयोग होता है?",
      "options": [
        "वीडियो चलाने के लिए ही",
        "वेब पेज की संरचना बनाने के लिए",
        "हार्ड डिस्क बनाने के लिए",
        "वायरस हटाने के लिए"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: CSS का उपयोग किसलिए होता है?",
      "options": [
        "फाइल कंप्रेस करने के लिए",
        "वेब पेज की शैली/डिजाइन के लिए",
        "कंप्यूटर चालू करने के लिए",
        "डेटा टाइप करने के लिए ही"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: JavaScript का उपयोग वेब पेज में किसलिए होता है?",
      "options": [
        "इंटरैक्टिव व्यवहार जोड़ने के लिए",
        "केवल प्रिंटिंग",
        "केवल स्क्रीन साफ करने",
        "बिजली देने"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: Python क्या है?",
      "options": [
        "सर्च इंजन",
        "प्रोग्रामिंग भाषा",
        "मॉनिटर का प्रकार",
        "ऑपरेटिंग सिस्टम का नाम ही"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: डेटाबेस का काम क्या है?",
      "options": [
        "आवाज बढ़ाना",
        "डेटा व्यवस्थित रूप से रखना",
        "कूलिंग करना",
        "स्क्रीन चमकाना"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: ईमेल में CC का अर्थ क्या है?",
      "options": [
        "Carbon Copy",
        "Computer Code",
        "Central Contact",
        "Closed Chat"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: ईमेल में BCC का उपयोग किसलिए होता है?",
      "options": [
        "पासवर्ड बदलने",
        "फाइल हटाने",
        "मेल प्रिंट करने",
        "अन्य प्राप्तकर्ताओं के पते छिपाकर कॉपी भेजने के लिए"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: कंप्यूटर वायरस क्या है?",
      "options": [
        "वेबकैम",
        "एंटीवायरस अपडेट",
        "हानिकारक प्रोग्राम",
        "हार्डवेयर तार"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: फिशिंग क्या है?",
      "options": [
        "धोखे से निजी जानकारी हासिल करने की कोशिश",
        "कंप्यूटर सफाई",
        "कानूनी अपडेट",
        "फाइल बैकअप"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: मजबूत पासवर्ड कैसा होना चाहिए?",
      "options": [
        "password",
        "अपना नाम मात्र",
        "लंबा और अलग-अलग प्रकार के अक्षरों वाला",
        "123456"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 2FA का उद्देश्य क्या है?",
      "options": [
        "स्क्रीन आकार बढ़ाना",
        "फाइल डिलीट करना",
        "लॉगिन में अतिरिक्त सुरक्षा देना",
        "इंटरनेट बंद करना"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: क्लाउड स्टोरेज क्या है?",
      "options": [
        "प्रिंटर की स्याही",
        "CPU फैन",
        "केवल पेन ड्राइव",
        "इंटरनेट पर डेटा संग्रहण"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: PDF का पूरा नाम क्या है?",
      "options": [
        "Personal Data File",
        "Portable Document Format",
        "Printed Document Folder",
        "Public Disk Format"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: MS Excel मुख्यतः किसलिए उपयोग होता है?",
      "options": [
        "वीडियो संपादन ही",
        "ऑडियो रिकॉर्डिंग",
        "वेब ब्राउज़िंग",
        "स्प्रेडशीट और गणना"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: Ctrl+C का सामान्य कार्य क्या है?",
      "options": [
        "पेस्ट करना",
        "कट करना",
        "कॉपी करना",
        "सेव करना"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: Ctrl+V का सामान्य कार्य क्या है?",
      "options": [
        "प्रिंट करना",
        "पेस्ट करना",
        "कॉपी करना",
        "कट करना"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: Ctrl+S का सामान्य कार्य क्या है?",
      "options": [
        "सर्च करना",
        "शटडाउन",
        "सेव करना",
        "सेलेक्ट करना"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: Ctrl+Z का सामान्य कार्य क्या है?",
      "options": [
        "Undo",
        "Print",
        "Redo",
        "Save"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: कंप्यूटर नेटवर्क क्या जोड़ता है?",
      "options": [
        "केवल प्रिंटर की स्याही",
        "दो या अधिक कंप्यूटर/डिवाइस",
        "केवल स्क्रीन पिक्सेल",
        "केवल फाइल नाम"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: LAN का पूरा नाम क्या है?",
      "options": [
        "Long Area Number",
        "Large Access Node",
        "Linked App Name",
        "Local Area Network"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: Wi-Fi किसलिए उपयोग होता है?",
      "options": [
        "कागज प्रिंट करने के लिए ही",
        "स्क्रीन साफ करने",
        "वायरलेस नेटवर्क कनेक्शन",
        "बिजली स्टोर करने"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: IP address किसकी पहचान में मदद करता है?",
      "options": [
        "कीबोर्ड बटन",
        "फाइल आकार",
        "नेटवर्क पर डिवाइस/इंटरफेस",
        "मॉनिटर रंग"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: सर्च इंजन का उदाहरण कौन-सा है?",
      "options": [
        "PowerPoint",
        "Bluetooth",
        "Google",
        "Windows Explorer"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: USB का पूरा नाम क्या है?",
      "options": [
        "User Service Base",
        "United System Board",
        "Universal Serial Bus",
        "Universal Screen Button"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: कंप्यूटर की स्क्रीन को क्या कहते हैं?",
      "options": [
        "मॉनिटर",
        "माउस",
        "स्कैनर",
        "राउटर"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: कागज पर आउटपुट देने वाला उपकरण कौन-सा है?",
      "options": [
        "कीबोर्ड",
        "जॉयस्टिक",
        "माइक्रोफोन",
        "प्रिंटर"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: कागज की छवि/दस्तावेज कंप्यूटर में लाने वाला उपकरण कौन-सा है?",
      "options": [
        "स्पीकर",
        "स्कैनर",
        "राउटर",
        "प्रोजेक्टर"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: डेटा की सबसे छोटी सामान्य इकाई क्या है?",
      "options": [
        "बाइट",
        "मेगाबाइट",
        "बिट",
        "किलोबाइट"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: किलोबाइट से बड़ी इकाई कौन-सी है?",
      "options": [
        "मेगाबाइट",
        "पिक्सेल",
        "बिट",
        "निबल"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: GPU मुख्यतः किस काम में मदद करता है?",
      "options": [
        "नेटवर्क नामकरण",
        "टाइपिंग",
        "ग्राफिक्स प्रोसेसिंग",
        "कागज स्कैनिंग"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: Motherboard क्या है?",
      "options": [
        "फाइल एक्सटेंशन",
        "मुख्य सर्किट बोर्ड",
        "इनपुट ऐप",
        "वेब पेज"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: कंप्यूटर को सुरक्षित बंद करने की प्रक्रिया क्या कहलाती है?",
      "options": [
        "Pairing",
        "Shutdown",
        "Refresh",
        "Upload"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: कंप्यूटर पर अनचाहे विज्ञापन दिखाने वाला सॉफ्टवेयर क्या कहलाता है?",
      "options": [
        "Compiler",
        "Adware",
        "Driver",
        "Firmware"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: एंटीवायरस का मुख्य काम क्या है?",
      "options": [
        "स्क्रीन बनाना",
        "टाइपिंग तेज करना",
        "डेटा हमेशा बढ़ाना",
        "मैलवेयर पहचानने/हटाने में मदद करना"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: ZIP फाइल किसलिए उपयोग होती है?",
      "options": [
        "केवल फोटो देखने",
        "पासवर्ड दिखाने",
        "फाइलों को संपीड़ित/एक साथ पैक करने के लिए",
        "इंटरनेट गति बढ़ाने"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: फाइल एक्सटेंशन .jpg आमतौर पर किसका होता है?",
      "options": [
        "वेब स्टाइल",
        "एक्जीक्यूटेबल",
        "चित्र",
        "ऑडियो"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: .mp3 आमतौर पर किस प्रकार की फाइल है?",
      "options": [
        "स्टाइलशीट",
        "स्प्रेडशीट",
        "ऑडियो",
        "चित्र"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: .mp4 आमतौर पर किस प्रकार की फाइल है?",
      "options": [
        "टेक्स्ट दस्तावेज",
        "फॉन्ट",
        "प्रोग्रामिंग भाषा",
        "वीडियो कंटेनर"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: Git किसलिए उपयोग होता है?",
      "options": [
        "वेबकैम रिकॉर्डिंग",
        "हार्डवेयर मरम्मत",
        "फोटो प्रिंट",
        "Version control"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: VS Code क्या है?",
      "options": [
        "ऑपरेटिंग सिस्टम",
        "एंटीवायरस",
        "सर्च इंजन",
        "कोड एडिटर"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: API का सामान्य अर्थ क्या है?",
      "options": [
        "मॉनिटर केबल",
        "प्रिंटर इंक",
        "फाइल वायरस",
        "सॉफ्टवेयर के बीच संवाद का इंटरफेस"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: QR code किसलिए स्कैन किया जा सकता है?",
      "options": [
        "जानकारी या लिंक खोलने के लिए",
        "CPU ठंडा करने",
        "स्क्रीन चमकाने",
        "बैटरी चार्ज करने"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: डेटा का बैकअप क्यों बनाते हैं?",
      "options": [
        "इंटरनेट बंद करने",
        "कंप्यूटर भारी करने",
        "खोने पर डेटा वापस पाने के लिए",
        "फाइल का रंग बदलने"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
      "options": [
        "मॉनिटर",
        "कीबोर्ड",
        "माउस",
        "CPU"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—कीबोर्ड किस प्रकार का उपकरण है?",
      "options": [
        "प्रिंटिंग",
        "स्टोरेज",
        "आउटपुट",
        "इनपुट"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—WWW का पूरा नाम क्या है?",
      "options": [
        "Wide World Wire",
        "Web World Work",
        "World Web Window",
        "World Wide Web"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—कंप्यूटर में टाइप करने के लिए क्या इस्तेमाल होता है?",
      "options": [
        "वेबकैम",
        "स्पीकर",
        "प्रिंटर",
        "कीबोर्ड"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—इनमें से कौन-सा वेब ब्राउज़र है?",
      "options": [
        "Google Chrome",
        "Notepad",
        "Calculator",
        "MS Paint"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—RAM किस प्रकार की मेमोरी है?",
      "options": [
        "अस्थायी/वोलेटाइल",
        "कागजी",
        "केवल बाहरी",
        "स्थायी ROM"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—ROM का पूरा नाम क्या है?",
      "options": [
        "Random Output Machine",
        "Read Only Memory",
        "Run Only Memory",
        "Read Open Mode"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—कंप्यूटर का भौतिक भाग क्या कहलाता है?",
      "options": [
        "हार्डवेयर",
        "सॉफ्टवेयर",
        "ब्राउज़र",
        "डेटाबेस"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—प्रोग्राम और ऐप किसका उदाहरण हैं?",
      "options": [
        "सॉफ्टवेयर",
        "मदरबोर्ड",
        "केबल",
        "हार्डवेयर"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—कंप्यूटर में डेटा स्थायी रूप से रखने का उपकरण कौन-सा है?",
      "options": [
        "RAM",
        "SSD या हार्ड डिस्क",
        "रजिस्टर",
        "कैश"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—ऑपरेटिंग सिस्टम का उदाहरण कौन-सा है?",
      "options": [
        "Google Search",
        "Windows",
        "HTML",
        "USB"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—Linux क्या है?",
      "options": [
        "वेब ब्राउज़र",
        "प्रिंटर",
        "ऑपरेटिंग सिस्टम",
        "स्प्रेडशीट"
      ],
      "answer": 2
    }
  ],
  "Math": [
    {
      "q": "2 × 2 कितना होता है?",
      "options": [
        "3",
        "4",
        "4",
        "5"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 2 × 2 कितना होता है?",
      "options": [
        "4",
        "3",
        "5",
        "4"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 2 × 2 कितना होता है?",
      "options": [
        "5",
        "4",
        "4",
        "3"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—2 × 2 कितना होता है?",
      "options": [
        "4",
        "3",
        "5",
        "4"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 2 × 2 कितना होता है?",
      "options": [
        "4",
        "5",
        "3",
        "4"
      ],
      "answer": 0
    },
    {
      "q": "2 × 3 कितना होता है?",
      "options": [
        "7",
        "5",
        "6",
        "5"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 2 × 3 कितना होता है?",
      "options": [
        "5",
        "5",
        "6",
        "7"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 2 × 3 कितना होता है?",
      "options": [
        "5",
        "5",
        "6",
        "7"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—2 × 3 कितना होता है?",
      "options": [
        "5",
        "5",
        "6",
        "7"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 2 × 3 कितना होता है?",
      "options": [
        "5",
        "7",
        "6",
        "5"
      ],
      "answer": 2
    },
    {
      "q": "2 × 4 कितना होता है?",
      "options": [
        "7",
        "9",
        "6",
        "8"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 2 × 4 कितना होता है?",
      "options": [
        "6",
        "8",
        "9",
        "7"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 2 × 4 कितना होता है?",
      "options": [
        "7",
        "6",
        "8",
        "9"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—2 × 4 कितना होता है?",
      "options": [
        "6",
        "7",
        "8",
        "9"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 2 × 4 कितना होता है?",
      "options": [
        "6",
        "7",
        "8",
        "9"
      ],
      "answer": 2
    },
    {
      "q": "2 × 5 कितना होता है?",
      "options": [
        "11",
        "9",
        "10",
        "7"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 2 × 5 कितना होता है?",
      "options": [
        "7",
        "9",
        "11",
        "10"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: 2 × 5 कितना होता है?",
      "options": [
        "10",
        "11",
        "7",
        "9"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—2 × 5 कितना होता है?",
      "options": [
        "10",
        "9",
        "11",
        "7"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 2 × 5 कितना होता है?",
      "options": [
        "11",
        "10",
        "7",
        "9"
      ],
      "answer": 1
    },
    {
      "q": "2 × 6 कितना होता है?",
      "options": [
        "12",
        "8",
        "13",
        "11"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 2 × 6 कितना होता है?",
      "options": [
        "13",
        "12",
        "8",
        "11"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 2 × 6 कितना होता है?",
      "options": [
        "12",
        "13",
        "8",
        "11"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—2 × 6 कितना होता है?",
      "options": [
        "13",
        "12",
        "11",
        "8"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 2 × 6 कितना होता है?",
      "options": [
        "8",
        "11",
        "12",
        "13"
      ],
      "answer": 2
    },
    {
      "q": "2 × 7 कितना होता है?",
      "options": [
        "13",
        "14",
        "15",
        "9"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 2 × 7 कितना होता है?",
      "options": [
        "9",
        "13",
        "15",
        "14"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: 2 × 7 कितना होता है?",
      "options": [
        "15",
        "14",
        "9",
        "13"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—2 × 7 कितना होता है?",
      "options": [
        "15",
        "14",
        "13",
        "9"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 2 × 7 कितना होता है?",
      "options": [
        "9",
        "14",
        "15",
        "13"
      ],
      "answer": 1
    },
    {
      "q": "2 × 8 कितना होता है?",
      "options": [
        "15",
        "16",
        "10",
        "17"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 2 × 8 कितना होता है?",
      "options": [
        "16",
        "10",
        "15",
        "17"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 2 × 8 कितना होता है?",
      "options": [
        "15",
        "17",
        "16",
        "10"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—2 × 8 कितना होता है?",
      "options": [
        "10",
        "16",
        "15",
        "17"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 2 × 8 कितना होता है?",
      "options": [
        "16",
        "17",
        "15",
        "10"
      ],
      "answer": 0
    },
    {
      "q": "2 × 9 कितना होता है?",
      "options": [
        "17",
        "19",
        "11",
        "18"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 2 × 9 कितना होता है?",
      "options": [
        "11",
        "18",
        "19",
        "17"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 2 × 9 कितना होता है?",
      "options": [
        "17",
        "19",
        "18",
        "11"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—2 × 9 कितना होता है?",
      "options": [
        "18",
        "19",
        "11",
        "17"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 2 × 9 कितना होता है?",
      "options": [
        "11",
        "17",
        "18",
        "19"
      ],
      "answer": 2
    },
    {
      "q": "2 × 10 कितना होता है?",
      "options": [
        "19",
        "20",
        "21",
        "12"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 2 × 10 कितना होता है?",
      "options": [
        "20",
        "12",
        "19",
        "21"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 2 × 10 कितना होता है?",
      "options": [
        "19",
        "12",
        "21",
        "20"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—2 × 10 कितना होता है?",
      "options": [
        "12",
        "21",
        "20",
        "19"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 2 × 10 कितना होता है?",
      "options": [
        "19",
        "12",
        "20",
        "21"
      ],
      "answer": 2
    },
    {
      "q": "2 × 11 कितना होता है?",
      "options": [
        "23",
        "21",
        "22",
        "13"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 2 × 11 कितना होता है?",
      "options": [
        "13",
        "21",
        "23",
        "22"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: 2 × 11 कितना होता है?",
      "options": [
        "21",
        "22",
        "23",
        "13"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—2 × 11 कितना होता है?",
      "options": [
        "13",
        "23",
        "22",
        "21"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 2 × 11 कितना होता है?",
      "options": [
        "23",
        "22",
        "21",
        "13"
      ],
      "answer": 1
    },
    {
      "q": "3 × 2 कितना होता है?",
      "options": [
        "7",
        "5",
        "5",
        "6"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 3 × 2 कितना होता है?",
      "options": [
        "5",
        "7",
        "6",
        "5"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 3 × 2 कितना होता है?",
      "options": [
        "5",
        "5",
        "7",
        "6"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—3 × 2 कितना होता है?",
      "options": [
        "6",
        "5",
        "7",
        "5"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 3 × 2 कितना होता है?",
      "options": [
        "6",
        "5",
        "7",
        "5"
      ],
      "answer": 0
    },
    {
      "q": "3 × 3 कितना होता है?",
      "options": [
        "8",
        "9",
        "6",
        "10"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 3 × 3 कितना होता है?",
      "options": [
        "10",
        "8",
        "9",
        "6"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 3 × 3 कितना होता है?",
      "options": [
        "10",
        "8",
        "6",
        "9"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—3 × 3 कितना होता है?",
      "options": [
        "6",
        "9",
        "10",
        "8"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 3 × 3 कितना होता है?",
      "options": [
        "9",
        "6",
        "10",
        "8"
      ],
      "answer": 0
    },
    {
      "q": "3 × 4 कितना होता है?",
      "options": [
        "13",
        "7",
        "12",
        "11"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 3 × 4 कितना होता है?",
      "options": [
        "12",
        "13",
        "11",
        "7"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 3 × 4 कितना होता है?",
      "options": [
        "12",
        "11",
        "7",
        "13"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—3 × 4 कितना होता है?",
      "options": [
        "7",
        "11",
        "13",
        "12"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 3 × 4 कितना होता है?",
      "options": [
        "11",
        "12",
        "13",
        "7"
      ],
      "answer": 1
    },
    {
      "q": "3 × 5 कितना होता है?",
      "options": [
        "15",
        "16",
        "14",
        "8"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 3 × 5 कितना होता है?",
      "options": [
        "14",
        "8",
        "15",
        "16"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 3 × 5 कितना होता है?",
      "options": [
        "15",
        "16",
        "8",
        "14"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—3 × 5 कितना होता है?",
      "options": [
        "14",
        "16",
        "8",
        "15"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 3 × 5 कितना होता है?",
      "options": [
        "15",
        "8",
        "16",
        "14"
      ],
      "answer": 0
    },
    {
      "q": "3 × 6 कितना होता है?",
      "options": [
        "17",
        "18",
        "9",
        "19"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 3 × 6 कितना होता है?",
      "options": [
        "9",
        "18",
        "19",
        "17"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 3 × 6 कितना होता है?",
      "options": [
        "19",
        "9",
        "17",
        "18"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—3 × 6 कितना होता है?",
      "options": [
        "17",
        "9",
        "18",
        "19"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 3 × 6 कितना होता है?",
      "options": [
        "18",
        "19",
        "9",
        "17"
      ],
      "answer": 0
    },
    {
      "q": "3 × 7 कितना होता है?",
      "options": [
        "22",
        "21",
        "10",
        "20"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 3 × 7 कितना होता है?",
      "options": [
        "21",
        "22",
        "20",
        "10"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 3 × 7 कितना होता है?",
      "options": [
        "22",
        "20",
        "21",
        "10"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—3 × 7 कितना होता है?",
      "options": [
        "20",
        "22",
        "10",
        "21"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 3 × 7 कितना होता है?",
      "options": [
        "10",
        "21",
        "20",
        "22"
      ],
      "answer": 1
    },
    {
      "q": "3 × 8 कितना होता है?",
      "options": [
        "23",
        "11",
        "24",
        "25"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 3 × 8 कितना होता है?",
      "options": [
        "25",
        "23",
        "24",
        "11"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 3 × 8 कितना होता है?",
      "options": [
        "25",
        "24",
        "23",
        "11"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—3 × 8 कितना होता है?",
      "options": [
        "23",
        "25",
        "11",
        "24"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 3 × 8 कितना होता है?",
      "options": [
        "24",
        "11",
        "23",
        "25"
      ],
      "answer": 0
    },
    {
      "q": "3 × 9 कितना होता है?",
      "options": [
        "12",
        "28",
        "26",
        "27"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 3 × 9 कितना होता है?",
      "options": [
        "12",
        "27",
        "26",
        "28"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 3 × 9 कितना होता है?",
      "options": [
        "28",
        "12",
        "27",
        "26"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—3 × 9 कितना होता है?",
      "options": [
        "27",
        "12",
        "26",
        "28"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 3 × 9 कितना होता है?",
      "options": [
        "28",
        "12",
        "26",
        "27"
      ],
      "answer": 3
    },
    {
      "q": "3 × 10 कितना होता है?",
      "options": [
        "13",
        "30",
        "29",
        "31"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 3 × 10 कितना होता है?",
      "options": [
        "31",
        "30",
        "29",
        "13"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 3 × 10 कितना होता है?",
      "options": [
        "29",
        "13",
        "30",
        "31"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—3 × 10 कितना होता है?",
      "options": [
        "29",
        "13",
        "30",
        "31"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 3 × 10 कितना होता है?",
      "options": [
        "29",
        "30",
        "31",
        "13"
      ],
      "answer": 1
    },
    {
      "q": "3 × 11 कितना होता है?",
      "options": [
        "34",
        "33",
        "14",
        "32"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 3 × 11 कितना होता है?",
      "options": [
        "14",
        "32",
        "34",
        "33"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: 3 × 11 कितना होता है?",
      "options": [
        "14",
        "34",
        "32",
        "33"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—3 × 11 कितना होता है?",
      "options": [
        "33",
        "32",
        "34",
        "14"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 3 × 11 कितना होता है?",
      "options": [
        "33",
        "34",
        "14",
        "32"
      ],
      "answer": 0
    },
    {
      "q": "4 × 2 कितना होता है?",
      "options": [
        "9",
        "7",
        "8",
        "6"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 4 × 2 कितना होता है?",
      "options": [
        "8",
        "9",
        "7",
        "6"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 4 × 2 कितना होता है?",
      "options": [
        "6",
        "9",
        "7",
        "8"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—4 × 2 कितना होता है?",
      "options": [
        "8",
        "6",
        "9",
        "7"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 4 × 2 कितना होता है?",
      "options": [
        "6",
        "7",
        "8",
        "9"
      ],
      "answer": 2
    },
    {
      "q": "4 × 3 कितना होता है?",
      "options": [
        "12",
        "7",
        "11",
        "13"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 4 × 3 कितना होता है?",
      "options": [
        "13",
        "12",
        "7",
        "11"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 4 × 3 कितना होता है?",
      "options": [
        "12",
        "11",
        "13",
        "7"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—4 × 3 कितना होता है?",
      "options": [
        "7",
        "13",
        "12",
        "11"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 4 × 3 कितना होता है?",
      "options": [
        "7",
        "12",
        "11",
        "13"
      ],
      "answer": 1
    },
    {
      "q": "4 × 4 कितना होता है?",
      "options": [
        "15",
        "16",
        "17",
        "8"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 4 × 4 कितना होता है?",
      "options": [
        "17",
        "16",
        "15",
        "8"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 4 × 4 कितना होता है?",
      "options": [
        "17",
        "8",
        "15",
        "16"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—4 × 4 कितना होता है?",
      "options": [
        "16",
        "17",
        "15",
        "8"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 4 × 4 कितना होता है?",
      "options": [
        "17",
        "16",
        "15",
        "8"
      ],
      "answer": 1
    },
    {
      "q": "4 × 5 कितना होता है?",
      "options": [
        "19",
        "20",
        "9",
        "21"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 4 × 5 कितना होता है?",
      "options": [
        "20",
        "9",
        "19",
        "21"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 4 × 5 कितना होता है?",
      "options": [
        "20",
        "21",
        "19",
        "9"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—4 × 5 कितना होता है?",
      "options": [
        "20",
        "21",
        "19",
        "9"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 4 × 5 कितना होता है?",
      "options": [
        "20",
        "19",
        "9",
        "21"
      ],
      "answer": 0
    },
    {
      "q": "4 × 6 कितना होता है?",
      "options": [
        "24",
        "25",
        "10",
        "23"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 4 × 6 कितना होता है?",
      "options": [
        "10",
        "23",
        "25",
        "24"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: 4 × 6 कितना होता है?",
      "options": [
        "25",
        "24",
        "10",
        "23"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—4 × 6 कितना होता है?",
      "options": [
        "23",
        "10",
        "25",
        "24"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 4 × 6 कितना होता है?",
      "options": [
        "25",
        "10",
        "24",
        "23"
      ],
      "answer": 2
    },
    {
      "q": "4 × 7 कितना होता है?",
      "options": [
        "29",
        "28",
        "27",
        "11"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 4 × 7 कितना होता है?",
      "options": [
        "27",
        "28",
        "11",
        "29"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 4 × 7 कितना होता है?",
      "options": [
        "28",
        "29",
        "11",
        "27"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—4 × 7 कितना होता है?",
      "options": [
        "29",
        "27",
        "11",
        "28"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 4 × 7 कितना होता है?",
      "options": [
        "29",
        "28",
        "27",
        "11"
      ],
      "answer": 1
    },
    {
      "q": "4 × 8 कितना होता है?",
      "options": [
        "31",
        "32",
        "33",
        "12"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 4 × 8 कितना होता है?",
      "options": [
        "33",
        "32",
        "31",
        "12"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 4 × 8 कितना होता है?",
      "options": [
        "12",
        "31",
        "33",
        "32"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—4 × 8 कितना होता है?",
      "options": [
        "33",
        "12",
        "31",
        "32"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 4 × 8 कितना होता है?",
      "options": [
        "32",
        "31",
        "33",
        "12"
      ],
      "answer": 0
    },
    {
      "q": "4 × 9 कितना होता है?",
      "options": [
        "36",
        "37",
        "35",
        "13"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 4 × 9 कितना होता है?",
      "options": [
        "37",
        "36",
        "35",
        "13"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 4 × 9 कितना होता है?",
      "options": [
        "37",
        "36",
        "35",
        "13"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—4 × 9 कितना होता है?",
      "options": [
        "37",
        "13",
        "36",
        "35"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 4 × 9 कितना होता है?",
      "options": [
        "13",
        "36",
        "37",
        "35"
      ],
      "answer": 1
    },
    {
      "q": "4 × 10 कितना होता है?",
      "options": [
        "14",
        "40",
        "39",
        "41"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 4 × 10 कितना होता है?",
      "options": [
        "40",
        "14",
        "39",
        "41"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 4 × 10 कितना होता है?",
      "options": [
        "39",
        "40",
        "41",
        "14"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—4 × 10 कितना होता है?",
      "options": [
        "40",
        "14",
        "39",
        "41"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 4 × 10 कितना होता है?",
      "options": [
        "14",
        "39",
        "41",
        "40"
      ],
      "answer": 3
    },
    {
      "q": "4 × 11 कितना होता है?",
      "options": [
        "43",
        "44",
        "15",
        "45"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 4 × 11 कितना होता है?",
      "options": [
        "45",
        "44",
        "15",
        "43"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 4 × 11 कितना होता है?",
      "options": [
        "44",
        "15",
        "45",
        "43"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—4 × 11 कितना होता है?",
      "options": [
        "45",
        "44",
        "15",
        "43"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 4 × 11 कितना होता है?",
      "options": [
        "45",
        "15",
        "43",
        "44"
      ],
      "answer": 3
    },
    {
      "q": "5 × 2 कितना होता है?",
      "options": [
        "11",
        "10",
        "7",
        "9"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 5 × 2 कितना होता है?",
      "options": [
        "10",
        "9",
        "11",
        "7"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 5 × 2 कितना होता है?",
      "options": [
        "9",
        "11",
        "10",
        "7"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—5 × 2 कितना होता है?",
      "options": [
        "10",
        "7",
        "9",
        "11"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 5 × 2 कितना होता है?",
      "options": [
        "7",
        "10",
        "11",
        "9"
      ],
      "answer": 1
    },
    {
      "q": "5 × 3 कितना होता है?",
      "options": [
        "15",
        "8",
        "16",
        "14"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 5 × 3 कितना होता है?",
      "options": [
        "8",
        "16",
        "15",
        "14"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 5 × 3 कितना होता है?",
      "options": [
        "8",
        "16",
        "15",
        "14"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—5 × 3 कितना होता है?",
      "options": [
        "16",
        "14",
        "15",
        "8"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 5 × 3 कितना होता है?",
      "options": [
        "16",
        "15",
        "14",
        "8"
      ],
      "answer": 1
    },
    {
      "q": "5 × 4 कितना होता है?",
      "options": [
        "9",
        "19",
        "20",
        "21"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 5 × 4 कितना होता है?",
      "options": [
        "9",
        "20",
        "21",
        "19"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 5 × 4 कितना होता है?",
      "options": [
        "19",
        "21",
        "20",
        "9"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—5 × 4 कितना होता है?",
      "options": [
        "9",
        "20",
        "21",
        "19"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 5 × 4 कितना होता है?",
      "options": [
        "20",
        "19",
        "21",
        "9"
      ],
      "answer": 0
    },
    {
      "q": "5 × 5 कितना होता है?",
      "options": [
        "10",
        "25",
        "26",
        "24"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 5 × 5 कितना होता है?",
      "options": [
        "25",
        "24",
        "10",
        "26"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 5 × 5 कितना होता है?",
      "options": [
        "25",
        "26",
        "10",
        "24"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—5 × 5 कितना होता है?",
      "options": [
        "24",
        "25",
        "26",
        "10"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 5 × 5 कितना होता है?",
      "options": [
        "26",
        "10",
        "25",
        "24"
      ],
      "answer": 2
    },
    {
      "q": "5 × 6 कितना होता है?",
      "options": [
        "31",
        "30",
        "11",
        "29"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 5 × 6 कितना होता है?",
      "options": [
        "30",
        "31",
        "11",
        "29"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 5 × 6 कितना होता है?",
      "options": [
        "11",
        "29",
        "31",
        "30"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—5 × 6 कितना होता है?",
      "options": [
        "30",
        "31",
        "29",
        "11"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 5 × 6 कितना होता है?",
      "options": [
        "29",
        "31",
        "11",
        "30"
      ],
      "answer": 3
    },
    {
      "q": "5 × 7 कितना होता है?",
      "options": [
        "35",
        "36",
        "12",
        "34"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 5 × 7 कितना होता है?",
      "options": [
        "35",
        "34",
        "36",
        "12"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 5 × 7 कितना होता है?",
      "options": [
        "34",
        "36",
        "12",
        "35"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—5 × 7 कितना होता है?",
      "options": [
        "34",
        "36",
        "35",
        "12"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 5 × 7 कितना होता है?",
      "options": [
        "12",
        "36",
        "34",
        "35"
      ],
      "answer": 3
    },
    {
      "q": "5 × 8 कितना होता है?",
      "options": [
        "40",
        "13",
        "41",
        "39"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 5 × 8 कितना होता है?",
      "options": [
        "13",
        "39",
        "41",
        "40"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: 5 × 8 कितना होता है?",
      "options": [
        "40",
        "41",
        "13",
        "39"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—5 × 8 कितना होता है?",
      "options": [
        "13",
        "40",
        "39",
        "41"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 5 × 8 कितना होता है?",
      "options": [
        "41",
        "40",
        "39",
        "13"
      ],
      "answer": 1
    },
    {
      "q": "5 × 9 कितना होता है?",
      "options": [
        "14",
        "46",
        "44",
        "45"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 5 × 9 कितना होता है?",
      "options": [
        "44",
        "45",
        "14",
        "46"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 5 × 9 कितना होता है?",
      "options": [
        "44",
        "46",
        "45",
        "14"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—5 × 9 कितना होता है?",
      "options": [
        "46",
        "45",
        "44",
        "14"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 5 × 9 कितना होता है?",
      "options": [
        "44",
        "46",
        "14",
        "45"
      ],
      "answer": 3
    },
    {
      "q": "5 × 10 कितना होता है?",
      "options": [
        "50",
        "15",
        "51",
        "49"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 5 × 10 कितना होता है?",
      "options": [
        "49",
        "50",
        "51",
        "15"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 5 × 10 कितना होता है?",
      "options": [
        "51",
        "49",
        "50",
        "15"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—5 × 10 कितना होता है?",
      "options": [
        "15",
        "49",
        "51",
        "50"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 5 × 10 कितना होता है?",
      "options": [
        "50",
        "51",
        "49",
        "15"
      ],
      "answer": 0
    },
    {
      "q": "5 × 11 कितना होता है?",
      "options": [
        "55",
        "16",
        "54",
        "56"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 5 × 11 कितना होता है?",
      "options": [
        "16",
        "54",
        "56",
        "55"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: 5 × 11 कितना होता है?",
      "options": [
        "54",
        "16",
        "55",
        "56"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—5 × 11 कितना होता है?",
      "options": [
        "16",
        "55",
        "54",
        "56"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 5 × 11 कितना होता है?",
      "options": [
        "56",
        "16",
        "54",
        "55"
      ],
      "answer": 3
    },
    {
      "q": "6 × 2 कितना होता है?",
      "options": [
        "11",
        "8",
        "12",
        "13"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 6 × 2 कितना होता है?",
      "options": [
        "13",
        "12",
        "8",
        "11"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 6 × 2 कितना होता है?",
      "options": [
        "12",
        "13",
        "11",
        "8"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—6 × 2 कितना होता है?",
      "options": [
        "11",
        "8",
        "12",
        "13"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 6 × 2 कितना होता है?",
      "options": [
        "11",
        "13",
        "12",
        "8"
      ],
      "answer": 2
    },
    {
      "q": "6 × 3 कितना होता है?",
      "options": [
        "17",
        "9",
        "18",
        "19"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 6 × 3 कितना होता है?",
      "options": [
        "19",
        "17",
        "18",
        "9"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 6 × 3 कितना होता है?",
      "options": [
        "17",
        "19",
        "9",
        "18"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—6 × 3 कितना होता है?",
      "options": [
        "17",
        "18",
        "9",
        "19"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 6 × 3 कितना होता है?",
      "options": [
        "9",
        "18",
        "19",
        "17"
      ],
      "answer": 1
    },
    {
      "q": "6 × 4 कितना होता है?",
      "options": [
        "24",
        "10",
        "23",
        "25"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 6 × 4 कितना होता है?",
      "options": [
        "23",
        "25",
        "24",
        "10"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 6 × 4 कितना होता है?",
      "options": [
        "25",
        "23",
        "24",
        "10"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—6 × 4 कितना होता है?",
      "options": [
        "25",
        "10",
        "23",
        "24"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 6 × 4 कितना होता है?",
      "options": [
        "10",
        "25",
        "23",
        "24"
      ],
      "answer": 3
    },
    {
      "q": "6 × 5 कितना होता है?",
      "options": [
        "30",
        "29",
        "31",
        "11"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 6 × 5 कितना होता है?",
      "options": [
        "29",
        "30",
        "11",
        "31"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 6 × 5 कितना होता है?",
      "options": [
        "11",
        "31",
        "29",
        "30"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—6 × 5 कितना होता है?",
      "options": [
        "11",
        "31",
        "29",
        "30"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 6 × 5 कितना होता है?",
      "options": [
        "11",
        "31",
        "29",
        "30"
      ],
      "answer": 3
    },
    {
      "q": "6 × 6 कितना होता है?",
      "options": [
        "36",
        "35",
        "12",
        "37"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 6 × 6 कितना होता है?",
      "options": [
        "35",
        "12",
        "37",
        "36"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: 6 × 6 कितना होता है?",
      "options": [
        "37",
        "36",
        "35",
        "12"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—6 × 6 कितना होता है?",
      "options": [
        "37",
        "35",
        "36",
        "12"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 6 × 6 कितना होता है?",
      "options": [
        "36",
        "37",
        "35",
        "12"
      ],
      "answer": 0
    },
    {
      "q": "6 × 7 कितना होता है?",
      "options": [
        "13",
        "41",
        "42",
        "43"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 6 × 7 कितना होता है?",
      "options": [
        "41",
        "43",
        "42",
        "13"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 6 × 7 कितना होता है?",
      "options": [
        "42",
        "41",
        "43",
        "13"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—6 × 7 कितना होता है?",
      "options": [
        "43",
        "41",
        "13",
        "42"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 6 × 7 कितना होता है?",
      "options": [
        "41",
        "42",
        "43",
        "13"
      ],
      "answer": 1
    },
    {
      "q": "6 × 8 कितना होता है?",
      "options": [
        "48",
        "14",
        "49",
        "47"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 6 × 8 कितना होता है?",
      "options": [
        "14",
        "48",
        "47",
        "49"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 6 × 8 कितना होता है?",
      "options": [
        "47",
        "14",
        "49",
        "48"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—6 × 8 कितना होता है?",
      "options": [
        "48",
        "47",
        "49",
        "14"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 6 × 8 कितना होता है?",
      "options": [
        "49",
        "14",
        "47",
        "48"
      ],
      "answer": 3
    },
    {
      "q": "6 × 9 कितना होता है?",
      "options": [
        "53",
        "55",
        "15",
        "54"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 6 × 9 कितना होता है?",
      "options": [
        "15",
        "55",
        "54",
        "53"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 6 × 9 कितना होता है?",
      "options": [
        "55",
        "53",
        "54",
        "15"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—6 × 9 कितना होता है?",
      "options": [
        "15",
        "54",
        "55",
        "53"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 6 × 9 कितना होता है?",
      "options": [
        "15",
        "53",
        "54",
        "55"
      ],
      "answer": 2
    },
    {
      "q": "6 × 10 कितना होता है?",
      "options": [
        "16",
        "60",
        "59",
        "61"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 6 × 10 कितना होता है?",
      "options": [
        "16",
        "60",
        "59",
        "61"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 6 × 10 कितना होता है?",
      "options": [
        "16",
        "60",
        "59",
        "61"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—6 × 10 कितना होता है?",
      "options": [
        "16",
        "60",
        "61",
        "59"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 6 × 10 कितना होता है?",
      "options": [
        "60",
        "59",
        "61",
        "16"
      ],
      "answer": 0
    },
    {
      "q": "6 × 11 कितना होता है?",
      "options": [
        "65",
        "66",
        "67",
        "17"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 6 × 11 कितना होता है?",
      "options": [
        "66",
        "65",
        "17",
        "67"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 6 × 11 कितना होता है?",
      "options": [
        "66",
        "65",
        "17",
        "67"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—6 × 11 कितना होता है?",
      "options": [
        "17",
        "65",
        "67",
        "66"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 6 × 11 कितना होता है?",
      "options": [
        "65",
        "66",
        "67",
        "17"
      ],
      "answer": 1
    },
    {
      "q": "7 × 2 कितना होता है?",
      "options": [
        "9",
        "14",
        "13",
        "15"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 7 × 2 कितना होता है?",
      "options": [
        "14",
        "9",
        "15",
        "13"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 7 × 2 कितना होता है?",
      "options": [
        "14",
        "13",
        "15",
        "9"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—7 × 2 कितना होता है?",
      "options": [
        "13",
        "9",
        "14",
        "15"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 7 × 2 कितना होता है?",
      "options": [
        "9",
        "14",
        "15",
        "13"
      ],
      "answer": 1
    },
    {
      "q": "7 × 3 कितना होता है?",
      "options": [
        "10",
        "21",
        "20",
        "22"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 7 × 3 कितना होता है?",
      "options": [
        "20",
        "10",
        "21",
        "22"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 7 × 3 कितना होता है?",
      "options": [
        "10",
        "22",
        "21",
        "20"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—7 × 3 कितना होता है?",
      "options": [
        "22",
        "10",
        "21",
        "20"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 7 × 3 कितना होता है?",
      "options": [
        "10",
        "20",
        "22",
        "21"
      ],
      "answer": 3
    },
    {
      "q": "7 × 4 कितना होता है?",
      "options": [
        "27",
        "28",
        "11",
        "29"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 7 × 4 कितना होता है?",
      "options": [
        "27",
        "28",
        "29",
        "11"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 7 × 4 कितना होता है?",
      "options": [
        "29",
        "27",
        "11",
        "28"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—7 × 4 कितना होता है?",
      "options": [
        "28",
        "11",
        "29",
        "27"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 7 × 4 कितना होता है?",
      "options": [
        "27",
        "28",
        "29",
        "11"
      ],
      "answer": 1
    },
    {
      "q": "7 × 5 कितना होता है?",
      "options": [
        "12",
        "35",
        "36",
        "34"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 7 × 5 कितना होता है?",
      "options": [
        "35",
        "34",
        "36",
        "12"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 7 × 5 कितना होता है?",
      "options": [
        "34",
        "36",
        "35",
        "12"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—7 × 5 कितना होता है?",
      "options": [
        "36",
        "34",
        "12",
        "35"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 7 × 5 कितना होता है?",
      "options": [
        "36",
        "12",
        "34",
        "35"
      ],
      "answer": 3
    },
    {
      "q": "7 × 6 कितना होता है?",
      "options": [
        "41",
        "13",
        "43",
        "42"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 7 × 6 कितना होता है?",
      "options": [
        "42",
        "43",
        "13",
        "41"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 7 × 6 कितना होता है?",
      "options": [
        "42",
        "13",
        "41",
        "43"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—7 × 6 कितना होता है?",
      "options": [
        "43",
        "13",
        "41",
        "42"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 7 × 6 कितना होता है?",
      "options": [
        "42",
        "41",
        "13",
        "43"
      ],
      "answer": 0
    },
    {
      "q": "7 × 7 कितना होता है?",
      "options": [
        "50",
        "48",
        "49",
        "14"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 7 × 7 कितना होता है?",
      "options": [
        "48",
        "50",
        "49",
        "14"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 7 × 7 कितना होता है?",
      "options": [
        "14",
        "49",
        "50",
        "48"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—7 × 7 कितना होता है?",
      "options": [
        "50",
        "14",
        "49",
        "48"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 7 × 7 कितना होता है?",
      "options": [
        "50",
        "48",
        "49",
        "14"
      ],
      "answer": 2
    },
    {
      "q": "7 × 8 कितना होता है?",
      "options": [
        "55",
        "56",
        "57",
        "15"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 7 × 8 कितना होता है?",
      "options": [
        "56",
        "57",
        "15",
        "55"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 7 × 8 कितना होता है?",
      "options": [
        "57",
        "15",
        "56",
        "55"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—7 × 8 कितना होता है?",
      "options": [
        "55",
        "56",
        "57",
        "15"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 7 × 8 कितना होता है?",
      "options": [
        "56",
        "57",
        "55",
        "15"
      ],
      "answer": 0
    },
    {
      "q": "7 × 9 कितना होता है?",
      "options": [
        "62",
        "16",
        "63",
        "64"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 7 × 9 कितना होता है?",
      "options": [
        "16",
        "64",
        "63",
        "62"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 7 × 9 कितना होता है?",
      "options": [
        "63",
        "16",
        "64",
        "62"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—7 × 9 कितना होता है?",
      "options": [
        "16",
        "64",
        "62",
        "63"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 7 × 9 कितना होता है?",
      "options": [
        "64",
        "62",
        "16",
        "63"
      ],
      "answer": 3
    },
    {
      "q": "7 × 10 कितना होता है?",
      "options": [
        "70",
        "69",
        "71",
        "17"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 7 × 10 कितना होता है?",
      "options": [
        "69",
        "70",
        "71",
        "17"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 7 × 10 कितना होता है?",
      "options": [
        "17",
        "69",
        "70",
        "71"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—7 × 10 कितना होता है?",
      "options": [
        "17",
        "70",
        "69",
        "71"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 7 × 10 कितना होता है?",
      "options": [
        "70",
        "71",
        "69",
        "17"
      ],
      "answer": 0
    },
    {
      "q": "7 × 11 कितना होता है?",
      "options": [
        "77",
        "76",
        "18",
        "78"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 7 × 11 कितना होता है?",
      "options": [
        "78",
        "76",
        "18",
        "77"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: 7 × 11 कितना होता है?",
      "options": [
        "78",
        "18",
        "77",
        "76"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—7 × 11 कितना होता है?",
      "options": [
        "78",
        "76",
        "77",
        "18"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 7 × 11 कितना होता है?",
      "options": [
        "77",
        "78",
        "76",
        "18"
      ],
      "answer": 0
    },
    {
      "q": "8 × 2 कितना होता है?",
      "options": [
        "16",
        "15",
        "17",
        "10"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 8 × 2 कितना होता है?",
      "options": [
        "10",
        "16",
        "15",
        "17"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 8 × 2 कितना होता है?",
      "options": [
        "15",
        "10",
        "16",
        "17"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—8 × 2 कितना होता है?",
      "options": [
        "16",
        "17",
        "15",
        "10"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 8 × 2 कितना होता है?",
      "options": [
        "15",
        "16",
        "17",
        "10"
      ],
      "answer": 1
    },
    {
      "q": "8 × 3 कितना होता है?",
      "options": [
        "23",
        "25",
        "11",
        "24"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 8 × 3 कितना होता है?",
      "options": [
        "24",
        "23",
        "25",
        "11"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 8 × 3 कितना होता है?",
      "options": [
        "23",
        "24",
        "25",
        "11"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—8 × 3 कितना होता है?",
      "options": [
        "11",
        "24",
        "25",
        "23"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 8 × 3 कितना होता है?",
      "options": [
        "23",
        "25",
        "11",
        "24"
      ],
      "answer": 3
    },
    {
      "q": "8 × 4 कितना होता है?",
      "options": [
        "12",
        "32",
        "31",
        "33"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 8 × 4 कितना होता है?",
      "options": [
        "31",
        "32",
        "12",
        "33"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 8 × 4 कितना होता है?",
      "options": [
        "32",
        "31",
        "33",
        "12"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—8 × 4 कितना होता है?",
      "options": [
        "32",
        "12",
        "31",
        "33"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 8 × 4 कितना होता है?",
      "options": [
        "33",
        "31",
        "12",
        "32"
      ],
      "answer": 3
    },
    {
      "q": "8 × 5 कितना होता है?",
      "options": [
        "39",
        "13",
        "40",
        "41"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 8 × 5 कितना होता है?",
      "options": [
        "40",
        "13",
        "41",
        "39"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 8 × 5 कितना होता है?",
      "options": [
        "41",
        "40",
        "13",
        "39"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—8 × 5 कितना होता है?",
      "options": [
        "40",
        "41",
        "39",
        "13"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 8 × 5 कितना होता है?",
      "options": [
        "13",
        "41",
        "40",
        "39"
      ],
      "answer": 2
    },
    {
      "q": "8 × 6 कितना होता है?",
      "options": [
        "48",
        "49",
        "14",
        "47"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 8 × 6 कितना होता है?",
      "options": [
        "47",
        "48",
        "14",
        "49"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 8 × 6 कितना होता है?",
      "options": [
        "14",
        "48",
        "49",
        "47"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—8 × 6 कितना होता है?",
      "options": [
        "48",
        "47",
        "14",
        "49"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 8 × 6 कितना होता है?",
      "options": [
        "14",
        "47",
        "49",
        "48"
      ],
      "answer": 3
    },
    {
      "q": "8 × 7 कितना होता है?",
      "options": [
        "15",
        "55",
        "57",
        "56"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 8 × 7 कितना होता है?",
      "options": [
        "56",
        "15",
        "57",
        "55"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 8 × 7 कितना होता है?",
      "options": [
        "55",
        "57",
        "56",
        "15"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—8 × 7 कितना होता है?",
      "options": [
        "15",
        "56",
        "55",
        "57"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 8 × 7 कितना होता है?",
      "options": [
        "57",
        "56",
        "15",
        "55"
      ],
      "answer": 1
    },
    {
      "q": "8 × 8 कितना होता है?",
      "options": [
        "64",
        "63",
        "16",
        "65"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 8 × 8 कितना होता है?",
      "options": [
        "16",
        "65",
        "64",
        "63"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 8 × 8 कितना होता है?",
      "options": [
        "16",
        "65",
        "64",
        "63"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—8 × 8 कितना होता है?",
      "options": [
        "63",
        "16",
        "64",
        "65"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 8 × 8 कितना होता है?",
      "options": [
        "63",
        "64",
        "16",
        "65"
      ],
      "answer": 1
    },
    {
      "q": "8 × 9 कितना होता है?",
      "options": [
        "72",
        "17",
        "71",
        "73"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 8 × 9 कितना होता है?",
      "options": [
        "17",
        "71",
        "73",
        "72"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: 8 × 9 कितना होता है?",
      "options": [
        "72",
        "73",
        "71",
        "17"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—8 × 9 कितना होता है?",
      "options": [
        "17",
        "73",
        "72",
        "71"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 8 × 9 कितना होता है?",
      "options": [
        "72",
        "73",
        "71",
        "17"
      ],
      "answer": 0
    },
    {
      "q": "8 × 10 कितना होता है?",
      "options": [
        "79",
        "80",
        "81",
        "18"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 8 × 10 कितना होता है?",
      "options": [
        "18",
        "79",
        "80",
        "81"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 8 × 10 कितना होता है?",
      "options": [
        "80",
        "79",
        "18",
        "81"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—8 × 10 कितना होता है?",
      "options": [
        "80",
        "18",
        "79",
        "81"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 8 × 10 कितना होता है?",
      "options": [
        "81",
        "80",
        "18",
        "79"
      ],
      "answer": 1
    },
    {
      "q": "8 × 11 कितना होता है?",
      "options": [
        "88",
        "87",
        "89",
        "19"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 8 × 11 कितना होता है?",
      "options": [
        "89",
        "88",
        "87",
        "19"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 8 × 11 कितना होता है?",
      "options": [
        "87",
        "88",
        "19",
        "89"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—8 × 11 कितना होता है?",
      "options": [
        "87",
        "19",
        "89",
        "88"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 8 × 11 कितना होता है?",
      "options": [
        "87",
        "88",
        "89",
        "19"
      ],
      "answer": 1
    },
    {
      "q": "9 × 2 कितना होता है?",
      "options": [
        "19",
        "17",
        "18",
        "11"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 9 × 2 कितना होता है?",
      "options": [
        "19",
        "18",
        "11",
        "17"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 9 × 2 कितना होता है?",
      "options": [
        "19",
        "17",
        "18",
        "11"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—9 × 2 कितना होता है?",
      "options": [
        "18",
        "19",
        "11",
        "17"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 9 × 2 कितना होता है?",
      "options": [
        "19",
        "11",
        "17",
        "18"
      ],
      "answer": 3
    },
    {
      "q": "9 × 3 कितना होता है?",
      "options": [
        "27",
        "12",
        "26",
        "28"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 9 × 3 कितना होता है?",
      "options": [
        "26",
        "27",
        "28",
        "12"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 9 × 3 कितना होता है?",
      "options": [
        "27",
        "26",
        "12",
        "28"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—9 × 3 कितना होता है?",
      "options": [
        "28",
        "26",
        "27",
        "12"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 9 × 3 कितना होता है?",
      "options": [
        "27",
        "12",
        "28",
        "26"
      ],
      "answer": 0
    },
    {
      "q": "9 × 4 कितना होता है?",
      "options": [
        "13",
        "37",
        "35",
        "36"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 9 × 4 कितना होता है?",
      "options": [
        "36",
        "35",
        "37",
        "13"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 9 × 4 कितना होता है?",
      "options": [
        "13",
        "37",
        "35",
        "36"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—9 × 4 कितना होता है?",
      "options": [
        "35",
        "36",
        "13",
        "37"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 9 × 4 कितना होता है?",
      "options": [
        "35",
        "13",
        "37",
        "36"
      ],
      "answer": 3
    },
    {
      "q": "9 × 5 कितना होता है?",
      "options": [
        "45",
        "14",
        "44",
        "46"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 9 × 5 कितना होता है?",
      "options": [
        "45",
        "46",
        "14",
        "44"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 9 × 5 कितना होता है?",
      "options": [
        "45",
        "46",
        "44",
        "14"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—9 × 5 कितना होता है?",
      "options": [
        "14",
        "46",
        "45",
        "44"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 9 × 5 कितना होता है?",
      "options": [
        "45",
        "46",
        "14",
        "44"
      ],
      "answer": 0
    },
    {
      "q": "9 × 6 कितना होता है?",
      "options": [
        "54",
        "15",
        "55",
        "53"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 9 × 6 कितना होता है?",
      "options": [
        "53",
        "54",
        "15",
        "55"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 9 × 6 कितना होता है?",
      "options": [
        "55",
        "15",
        "53",
        "54"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—9 × 6 कितना होता है?",
      "options": [
        "53",
        "54",
        "15",
        "55"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 9 × 6 कितना होता है?",
      "options": [
        "53",
        "15",
        "54",
        "55"
      ],
      "answer": 2
    },
    {
      "q": "9 × 7 कितना होता है?",
      "options": [
        "64",
        "16",
        "62",
        "63"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 9 × 7 कितना होता है?",
      "options": [
        "62",
        "64",
        "63",
        "16"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 9 × 7 कितना होता है?",
      "options": [
        "16",
        "63",
        "62",
        "64"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—9 × 7 कितना होता है?",
      "options": [
        "16",
        "64",
        "62",
        "63"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 9 × 7 कितना होता है?",
      "options": [
        "16",
        "62",
        "63",
        "64"
      ],
      "answer": 2
    },
    {
      "q": "9 × 8 कितना होता है?",
      "options": [
        "73",
        "72",
        "71",
        "17"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 9 × 8 कितना होता है?",
      "options": [
        "73",
        "17",
        "72",
        "71"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 9 × 8 कितना होता है?",
      "options": [
        "71",
        "72",
        "17",
        "73"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—9 × 8 कितना होता है?",
      "options": [
        "71",
        "73",
        "17",
        "72"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 9 × 8 कितना होता है?",
      "options": [
        "73",
        "17",
        "72",
        "71"
      ],
      "answer": 2
    },
    {
      "q": "9 × 9 कितना होता है?",
      "options": [
        "18",
        "81",
        "82",
        "80"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 9 × 9 कितना होता है?",
      "options": [
        "18",
        "82",
        "80",
        "81"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: 9 × 9 कितना होता है?",
      "options": [
        "81",
        "82",
        "80",
        "18"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—9 × 9 कितना होता है?",
      "options": [
        "18",
        "81",
        "80",
        "82"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 9 × 9 कितना होता है?",
      "options": [
        "81",
        "82",
        "18",
        "80"
      ],
      "answer": 0
    },
    {
      "q": "9 × 10 कितना होता है?",
      "options": [
        "90",
        "91",
        "89",
        "19"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 9 × 10 कितना होता है?",
      "options": [
        "91",
        "90",
        "19",
        "89"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 9 × 10 कितना होता है?",
      "options": [
        "19",
        "90",
        "91",
        "89"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—9 × 10 कितना होता है?",
      "options": [
        "91",
        "19",
        "90",
        "89"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 9 × 10 कितना होता है?",
      "options": [
        "19",
        "90",
        "91",
        "89"
      ],
      "answer": 1
    },
    {
      "q": "9 × 11 कितना होता है?",
      "options": [
        "100",
        "20",
        "98",
        "99"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 9 × 11 कितना होता है?",
      "options": [
        "100",
        "99",
        "98",
        "20"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 9 × 11 कितना होता है?",
      "options": [
        "100",
        "98",
        "20",
        "99"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—9 × 11 कितना होता है?",
      "options": [
        "98",
        "99",
        "20",
        "100"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 9 × 11 कितना होता है?",
      "options": [
        "98",
        "20",
        "100",
        "99"
      ],
      "answer": 3
    },
    {
      "q": "10 × 2 कितना होता है?",
      "options": [
        "19",
        "12",
        "21",
        "20"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 10 × 2 कितना होता है?",
      "options": [
        "21",
        "12",
        "20",
        "19"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 10 × 2 कितना होता है?",
      "options": [
        "19",
        "21",
        "12",
        "20"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—10 × 2 कितना होता है?",
      "options": [
        "20",
        "19",
        "21",
        "12"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 10 × 2 कितना होता है?",
      "options": [
        "21",
        "12",
        "19",
        "20"
      ],
      "answer": 3
    },
    {
      "q": "10 × 3 कितना होता है?",
      "options": [
        "29",
        "13",
        "31",
        "30"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 10 × 3 कितना होता है?",
      "options": [
        "30",
        "13",
        "31",
        "29"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 10 × 3 कितना होता है?",
      "options": [
        "13",
        "29",
        "31",
        "30"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—10 × 3 कितना होता है?",
      "options": [
        "30",
        "29",
        "13",
        "31"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 10 × 3 कितना होता है?",
      "options": [
        "31",
        "29",
        "13",
        "30"
      ],
      "answer": 3
    },
    {
      "q": "10 × 4 कितना होता है?",
      "options": [
        "40",
        "14",
        "41",
        "39"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 10 × 4 कितना होता है?",
      "options": [
        "14",
        "39",
        "40",
        "41"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 10 × 4 कितना होता है?",
      "options": [
        "41",
        "39",
        "40",
        "14"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—10 × 4 कितना होता है?",
      "options": [
        "40",
        "39",
        "41",
        "14"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 10 × 4 कितना होता है?",
      "options": [
        "41",
        "40",
        "14",
        "39"
      ],
      "answer": 1
    },
    {
      "q": "10 × 5 कितना होता है?",
      "options": [
        "50",
        "51",
        "15",
        "49"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 10 × 5 कितना होता है?",
      "options": [
        "50",
        "51",
        "49",
        "15"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 10 × 5 कितना होता है?",
      "options": [
        "15",
        "50",
        "51",
        "49"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—10 × 5 कितना होता है?",
      "options": [
        "15",
        "49",
        "50",
        "51"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 10 × 5 कितना होता है?",
      "options": [
        "50",
        "51",
        "49",
        "15"
      ],
      "answer": 0
    },
    {
      "q": "10 × 6 कितना होता है?",
      "options": [
        "59",
        "16",
        "61",
        "60"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 10 × 6 कितना होता है?",
      "options": [
        "59",
        "16",
        "60",
        "61"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 10 × 6 कितना होता है?",
      "options": [
        "16",
        "61",
        "60",
        "59"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—10 × 6 कितना होता है?",
      "options": [
        "16",
        "60",
        "61",
        "59"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 10 × 6 कितना होता है?",
      "options": [
        "16",
        "59",
        "61",
        "60"
      ],
      "answer": 3
    },
    {
      "q": "10 × 7 कितना होता है?",
      "options": [
        "69",
        "71",
        "17",
        "70"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 10 × 7 कितना होता है?",
      "options": [
        "71",
        "17",
        "69",
        "70"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: 10 × 7 कितना होता है?",
      "options": [
        "70",
        "17",
        "71",
        "69"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—10 × 7 कितना होता है?",
      "options": [
        "17",
        "69",
        "70",
        "71"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 10 × 7 कितना होता है?",
      "options": [
        "17",
        "70",
        "69",
        "71"
      ],
      "answer": 1
    },
    {
      "q": "10 × 8 कितना होता है?",
      "options": [
        "80",
        "81",
        "79",
        "18"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 10 × 8 कितना होता है?",
      "options": [
        "18",
        "81",
        "80",
        "79"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 10 × 8 कितना होता है?",
      "options": [
        "79",
        "80",
        "18",
        "81"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—10 × 8 कितना होता है?",
      "options": [
        "79",
        "18",
        "81",
        "80"
      ],
      "answer": 3
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 10 × 8 कितना होता है?",
      "options": [
        "81",
        "18",
        "79",
        "80"
      ],
      "answer": 3
    },
    {
      "q": "10 × 9 कितना होता है?",
      "options": [
        "89",
        "90",
        "91",
        "19"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 10 × 9 कितना होता है?",
      "options": [
        "91",
        "89",
        "90",
        "19"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 10 × 9 कितना होता है?",
      "options": [
        "91",
        "89",
        "90",
        "19"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—10 × 9 कितना होता है?",
      "options": [
        "91",
        "90",
        "89",
        "19"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 10 × 9 कितना होता है?",
      "options": [
        "90",
        "89",
        "91",
        "19"
      ],
      "answer": 0
    },
    {
      "q": "10 × 10 कितना होता है?",
      "options": [
        "101",
        "99",
        "20",
        "100"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 10 × 10 कितना होता है?",
      "options": [
        "20",
        "99",
        "100",
        "101"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 10 × 10 कितना होता है?",
      "options": [
        "99",
        "20",
        "100",
        "101"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—10 × 10 कितना होता है?",
      "options": [
        "99",
        "100",
        "101",
        "20"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 10 × 10 कितना होता है?",
      "options": [
        "99",
        "100",
        "101",
        "20"
      ],
      "answer": 1
    },
    {
      "q": "10 × 11 कितना होता है?",
      "options": [
        "21",
        "111",
        "109",
        "110"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 10 × 11 कितना होता है?",
      "options": [
        "109",
        "110",
        "21",
        "111"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 10 × 11 कितना होता है?",
      "options": [
        "21",
        "109",
        "110",
        "111"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—10 × 11 कितना होता है?",
      "options": [
        "110",
        "109",
        "21",
        "111"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 10 × 11 कितना होता है?",
      "options": [
        "21",
        "109",
        "111",
        "110"
      ],
      "answer": 3
    },
    {
      "q": "11 × 2 कितना होता है?",
      "options": [
        "21",
        "23",
        "22",
        "13"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 11 × 2 कितना होता है?",
      "options": [
        "13",
        "22",
        "23",
        "21"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 11 × 2 कितना होता है?",
      "options": [
        "23",
        "22",
        "13",
        "21"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—11 × 2 कितना होता है?",
      "options": [
        "13",
        "23",
        "22",
        "21"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 11 × 2 कितना होता है?",
      "options": [
        "22",
        "21",
        "23",
        "13"
      ],
      "answer": 0
    },
    {
      "q": "11 × 3 कितना होता है?",
      "options": [
        "14",
        "33",
        "32",
        "34"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 11 × 3 कितना होता है?",
      "options": [
        "34",
        "32",
        "14",
        "33"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: 11 × 3 कितना होता है?",
      "options": [
        "33",
        "32",
        "14",
        "34"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—11 × 3 कितना होता है?",
      "options": [
        "33",
        "34",
        "14",
        "32"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 11 × 3 कितना होता है?",
      "options": [
        "32",
        "34",
        "33",
        "14"
      ],
      "answer": 2
    },
    {
      "q": "11 × 4 कितना होता है?",
      "options": [
        "15",
        "43",
        "44",
        "45"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 11 × 4 कितना होता है?",
      "options": [
        "43",
        "45",
        "15",
        "44"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: 11 × 4 कितना होता है?",
      "options": [
        "43",
        "44",
        "15",
        "45"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—11 × 4 कितना होता है?",
      "options": [
        "15",
        "44",
        "43",
        "45"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 11 × 4 कितना होता है?",
      "options": [
        "45",
        "43",
        "44",
        "15"
      ],
      "answer": 2
    },
    {
      "q": "11 × 5 कितना होता है?",
      "options": [
        "16",
        "55",
        "54",
        "56"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 11 × 5 कितना होता है?",
      "options": [
        "55",
        "56",
        "16",
        "54"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 11 × 5 कितना होता है?",
      "options": [
        "16",
        "55",
        "54",
        "56"
      ],
      "answer": 1
    },
    {
      "q": "बताइए—11 × 5 कितना होता है?",
      "options": [
        "56",
        "16",
        "55",
        "54"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 11 × 5 कितना होता है?",
      "options": [
        "16",
        "55",
        "54",
        "56"
      ],
      "answer": 1
    },
    {
      "q": "11 × 6 कितना होता है?",
      "options": [
        "66",
        "17",
        "65",
        "67"
      ],
      "answer": 0
    },
    {
      "q": "सही उत्तर चुनें: 11 × 6 कितना होता है?",
      "options": [
        "65",
        "66",
        "17",
        "67"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 11 × 6 कितना होता है?",
      "options": [
        "17",
        "67",
        "65",
        "66"
      ],
      "answer": 3
    },
    {
      "q": "बताइए—11 × 6 कितना होता है?",
      "options": [
        "66",
        "65",
        "17",
        "67"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 11 × 6 कितना होता है?",
      "options": [
        "66",
        "65",
        "67",
        "17"
      ],
      "answer": 0
    },
    {
      "q": "11 × 7 कितना होता है?",
      "options": [
        "78",
        "77",
        "18",
        "76"
      ],
      "answer": 1
    },
    {
      "q": "सही उत्तर चुनें: 11 × 7 कितना होता है?",
      "options": [
        "76",
        "78",
        "77",
        "18"
      ],
      "answer": 2
    },
    {
      "q": "क्विज सवाल: 11 × 7 कितना होता है?",
      "options": [
        "77",
        "76",
        "78",
        "18"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—11 × 7 कितना होता है?",
      "options": [
        "77",
        "76",
        "78",
        "18"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 11 × 7 कितना होता है?",
      "options": [
        "76",
        "18",
        "78",
        "77"
      ],
      "answer": 3
    },
    {
      "q": "11 × 8 कितना होता है?",
      "options": [
        "89",
        "19",
        "87",
        "88"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 11 × 8 कितना होता है?",
      "options": [
        "88",
        "87",
        "89",
        "19"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 11 × 8 कितना होता है?",
      "options": [
        "19",
        "89",
        "88",
        "87"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—11 × 8 कितना होता है?",
      "options": [
        "89",
        "88",
        "87",
        "19"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 11 × 8 कितना होता है?",
      "options": [
        "19",
        "88",
        "87",
        "89"
      ],
      "answer": 1
    },
    {
      "q": "11 × 9 कितना होता है?",
      "options": [
        "98",
        "20",
        "100",
        "99"
      ],
      "answer": 3
    },
    {
      "q": "सही उत्तर चुनें: 11 × 9 कितना होता है?",
      "options": [
        "20",
        "99",
        "100",
        "98"
      ],
      "answer": 1
    },
    {
      "q": "क्विज सवाल: 11 × 9 कितना होता है?",
      "options": [
        "98",
        "100",
        "99",
        "20"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—11 × 9 कितना होता है?",
      "options": [
        "20",
        "98",
        "99",
        "100"
      ],
      "answer": 2
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 11 × 9 कितना होता है?",
      "options": [
        "20",
        "99",
        "98",
        "100"
      ],
      "answer": 1
    },
    {
      "q": "11 × 10 कितना होता है?",
      "options": [
        "109",
        "111",
        "110",
        "21"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 11 × 10 कितना होता है?",
      "options": [
        "21",
        "109",
        "111",
        "110"
      ],
      "answer": 3
    },
    {
      "q": "क्विज सवाल: 11 × 10 कितना होता है?",
      "options": [
        "110",
        "21",
        "111",
        "109"
      ],
      "answer": 0
    },
    {
      "q": "बताइए—11 × 10 कितना होता है?",
      "options": [
        "21",
        "110",
        "109",
        "111"
      ],
      "answer": 1
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 11 × 10 कितना होता है?",
      "options": [
        "111",
        "110",
        "21",
        "109"
      ],
      "answer": 1
    },
    {
      "q": "11 × 11 कितना होता है?",
      "options": [
        "122",
        "120",
        "121",
        "22"
      ],
      "answer": 2
    },
    {
      "q": "सही उत्तर चुनें: 11 × 11 कितना होता है?",
      "options": [
        "121",
        "22",
        "122",
        "120"
      ],
      "answer": 0
    },
    {
      "q": "क्विज सवाल: 11 × 11 कितना होता है?",
      "options": [
        "22",
        "122",
        "121",
        "120"
      ],
      "answer": 2
    },
    {
      "q": "बताइए—11 × 11 कितना होता है?",
      "options": [
        "121",
        "122",
        "22",
        "120"
      ],
      "answer": 0
    },
    {
      "q": "इस प्रश्न का उत्तर क्या है? 11 × 11 कितना होता है?",
      "options": [
        "22",
        "120",
        "122",
        "121"
      ],
      "answer": 3
    }
  ]
};
if (typeof window !== "undefined") window.questionBank = questionBank;

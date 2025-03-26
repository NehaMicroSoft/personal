// Array of Bhagavad Gita shlokas and their translations
const shlokas = [
    {
        verse: "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय || 1-1 ||",
        translation: "Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, what did my sons and the sons of Pandu do, desirous of battle?"
    },
    {
        verse: "सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसंगम्य राजा वचनमब्रवीत् || 1-2 ||",
        translation: "Sanjay said: O King, after observing the Pandava army arrayed in battle formation, King Duryodhana approached his teacher Drona and spoke the following words."
    },
    {
        verse: "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः | न चैनं क्लेदयन्त्यापो न शोषयति मारुतः || 2-23 ||",
        translation: "Weapons cannot cut the soul, nor can fire burn it. Water cannot wet it, nor can wind dry it."
    },
    {
        verse: "क्रोध से भ्रम पैदा होता है। भ्रम से बुद्धि व्यग्र होती है। जब बुद्धि व्यग्र होती है तब तर्क नष्ट हो जाता है। जब तर्क नष्ट होता है तब व्यक्ति का पतन हो जाता है।",
        translation: "Delusion arises from anger. The mind is bewildered by delusion. Reasoning is destroyed when the mind is bewildered. One falls down when reasoning is destroyed."
    },
    {
        verse: "किसी दूसरे के जीवन के साथ पूर्ण रूप से जीने से अच्छा हैं की हम अपने स्वंय के भाग्य के अनुसार अपूर्ण जियें।",
        translation: "It is better to live your own destiny imperfectly than to live an imitation of somebody else’s life with perfection."
    },
    {
        verse: "जो मन को नियंत्रित नहीं करते उनके लिए वह शत्रु के समान कार्य करता है।",
        translation: "The mind acts like an enemy for those who do not control it."
    },
    {
        verse: "वह जो इस ज्ञान में विश्वास नहीं रखते, मुझे प्राप्त किये बिना जन्म और मृत्यु के चक्र का अनुगमन करते हैं।",
        translation: "Those who have no faith in this knowledge follow the cycle of birth and death without attaining Me."
    },
    {
        verse: "मन की गतिविधियों, होश, श्वास, और भावनाओं के माध्यम से भगवान की शक्ति सदा तुम्हारे साथ है; और लगातार तुम्हे बस एक साधन की तरह प्रयोग कर के सभी कार्य कर रही है।",
        translation: "The power of God is with you at all times; through the activities of mind, senses, breathing, and emotions; and is constantly doing all the work using you as a mere instrument."
    },
    {
        verse: "एक उपहार तभी अच्छी और पवित्र लगता हैं जब वह दिल से किसी सही व्यक्ति को सही समय और सही जगह पर दिया जायें। और जब उपहार देने वाला व्यक्ति दिल उस उपहार के बदले कुच्छ पाने का उम्मीद ना रखता हो।",
        translation: "A gift is pure when it is given from the heart to the right person at the right time and at the right place, and when we expect nothing in return."
    },
    {
        verse: "आत्म-ज्ञान की तलवार से काटकर अपने ह्रदय से अज्ञान के संदेह को  अलग कर दो। अनुशाषित रहो। उठो।",
        translation: "Sever the ignorant doubt in your heart with the sword of self-knowledge. Observe your discipline. Arise."
    },
    {
        verse: "मनुष्य अपने विश्वास से निर्मित होता है।जैसा वो विश्वास करता है वैसा वो बन जाता है।",
        translation: "Man is made by his belief. As he believes, so he is."
    },
    {
        verse: "नर्क के तीन द्वार हैं: वासना, क्रोध और लालच।",
        translation: "Hell has three gates: lust, anger, and greed."
    },
    {
        verse: "ऐसा कोई नही, जिसने भी इस संसार मे अच्छा कर्म किया हो और उसका बुरा अंत हुआ हो, चाहे इस काल मे हो या आने वाला काल मे।",
        translation: "No one who does good work will ever come to a bad end, either here or in the world to come."
    },
    {
        verse: "लोग आपके अपमान के बारे में हमेशा बात करेंगे। सम्मानित व्यक्ति के लिए, अपमान मृत्यु से भी बदतर है।",
        translation: "People will talk about your disgrace forever. To the honored, dishonor is worse than death."
    },
    {
        verse: "मन अशांत है और उसे नियंत्रित करना कठिन है, लेकिन अभ्यास से इसे वश में किया जा सकता है।",
        translation: "The mind is restless and difficult to restrain, but it is subdued by practice."
    },
    {
        verse: "प्रबुद्ध व्यक्ति के लिए, गंदगी का ढेर, पत्थर, और सोना सभी समान हैं।",
        translation: "To the illumined man or woman, a clod of dirt, a stone, and gold are the same."
    },
    {
        verse: "निर्माण केवल पहले से मौजूद चीजों का प्रक्षेपण है।",
        translation: "Creation is only the projection into form of that which already exists."
    },
    {
        verse: "व्यक्ति जो चाहे बन सकता है यदी वह विश्वास के साथ इच्छित वस्तु  पर लगातार चिंतन करे।",
        translation: "One can become whatever one wants to be if one constantly contemplates on the object of desire with faith."
    },
    {
        verse: "जो भी मनुष्य अपने जीवन अध्यात्मिक ज्ञान के चरणो के लिए दृढ़ संकल्पो मे स्थिर हैं, वह समान्य रूप से संकटो के आक्रमण को सहन कर सकते हैं। और निश्चित रूप से यह व्यक्ति खुशियाँ और मुक्ति पाने के पात्र हैं।",
        translation: "Anyone who is steady in his determination for the advance stage of spiritual realization can equally tolerate the onslaughts of distress and happiness is certainly a person eligible for liberation."
    },
    {
        verse: "ज्ञानी व्यक्ति को कर्म के प्रतिफल की अपेक्षा कर रहे  अज्ञानी व्यक्ति के दीमाग को अस्थिर नहीं करना चाहिए।",
        translation: "The wise should not unsettle the mind of the ignorant who is attached to the fruits of work."
    },
    {
        verse: "हर व्यक्ति का विश्वास उसकी प्रकृति के अनुसार होता है।",
        translation: "The faith of each is in accordance with one’s own nature."
    },
    {
        verse: "जन्म लेने वाले के लिए मृत्यु उतनी ही निश्चित है जितना कि मृत होने वाले के लिए जन्म लेना। इसलिए जो अपरिहार्य है उस पर शोक मत करो।",
        translation: "Death is as sure for that which is born, as birth is for that which is dead. Therefore grieve not for what is inevitable."
    },
    {
        verse: "भगवान या परमात्मा की शांति उनके साथ होती हैं जिसके मन और आत्मा मे एकता हो, जो इच्छा और क्रोध से मुक्त हो, जो अपने खुद के आत्मा को सही मायने मे जनता हो।",
        translation: "The peace of God is with them whose mind and soul are in harmony, who are free from desire and wrath, who know their own soul."
    },
    {
        verse: "सभी अच्छे काम छोड़ कर बस भगवान में पूर्ण रूप से समर्पित हो जाओ। मैं तुम्हे सभी पापों से मुक्त कर दूंगा। शोक मत करो।",
        translation: "Setting aside all noble deeds, just surrender completely to the will of God. I shall liberate you from all sins. Do not grieve."
    },
    {
        verse: "किसी और का काम पूर्णता से करने से कहीं अच्छा है कि अपना काम करें, भले ही उसे अपूर्णता से करना पड़े।",
        translation: "Much better to do one’s own work even if you have to do it imperfectly than it is to do somebody else's work perfectly."
    },
    {
        verse: "नरक तीन चीज़ो से नफ़रत हैं: वासना क्रोध और लोभ।",
        translation: "Hell has three hates: lust, anger and greed."
    },
    {
        verse: "मैं सभी प्राणियों को सामान रूप से देखता हूँ, ना कोई मुझे कम प्रिय है ना अधिक। लेकिन जो मेरी प्रेमपूर्वक आराधना करते हैं वो मेरे भीतर रहते हैं और मैं उनके जीवन में आता हूँ।",
        translation: "I look upon all creatures equally; none are less dear to me and none more dear. But those who worship me with love live in me, and I come to life in them."
    },
    // Add all the other shlokas and their translations in a similar format
];


// Event listener for the "Generate Shloka" button
document.getElementById("generateBtn").addEventListener("click", function() {
    // Generate a random index to pick a random shloka
    const randomIndex = Math.floor(Math.random() * shlokas.length);

    // Get the random shloka and translation
    const randomShloka = shlokas[randomIndex];

    // Display the verse and translation in the respective elements
    document.getElementById("verse").innerText = randomShloka.verse;
    document.getElementById("translation").innerText = randomShloka.translation;
});

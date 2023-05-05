const data = [
{ English: "open", 
  Japanese: { base: "あく", masu: "", nai:"", nakatta: "", plainPast: "" }
},
{ English: "walk", 
  Japanese: {"あるく" }
},
{ English: "go", Japanese: {"いく" }},
{ English: "put", Japanese: {"おく" }},
{ English: "write", Japanese: {"かく" }},
{ English: "listen", Japanese: {"きく" }},
{ English: "bloom", Japanese: {"さく" }},
 { English: "arrive", Japanese: {"つく" }},
 { English: "sing", Japanese: {"うたう" }},
 { English: "putOn", Japanese: {"はく" }},
{ English: "work", Japanese: {"しごと（を）する" }},
{ English: "pull", Japanese: {"ひく" }},
{ English: "play an instrument", Japanese: {"ひく" }},
{ English: "breathe", Japanese: {"ふく" }},
{ English: "swim", Japanese: {"およぐ" }},
{ English: "undress", Japanese: {"ぬぐ" }},
{ English: "push", Japanese: {"おす" }},
{ English: "return", Japanese: {"かえる" }},
{ English: "lend", Japanese: {"かす" }},
{ English: "turnOff", Japanese: {"けす" }},
{ English: "put up an umbrella", Japanese: {"さす" }},
{ English: "post", Japanese: {"だす" }},

 { English: "lose", Japanese: {"なくす" }},

 { English: "speak", Japanese: {"はなす" }},

 { English: "handOver", Japanese: {"わたす" }},

 { English: "die", Japanese: {"しぬ" }},

 { English: "play", Japanese: {"あそぶ" }},

 { English: "invite", Japanese: {"よぶ" }},

 { English: "reside", Japanese: {"すむ" }},

 { English: "order", Japanese: {"たのむ" }},

 { English: "drink", Japanese: {"のむ" }},

 { English: "rest", Japanese: {"やすむ" }},

 { English: "read", Japanese: {"よむ" }},

 { English: "meet", Japanese: {"あう" }},

 { English: "wash", Japanese: {"あらう" }},

 { English: "say", Japanese: {"いう" }},

 { English: "buy", Japanese: {"かう" }},

 { English: "smoke", Japanese: {"すう" }},

 { English: "wrong", Japanese: {"ちがう" }},

 { English: "use", Japanese: {"つかう" }},

 { English: "learn", Japanese: {"ならう" }},

 { English: "stand up", Japanese: {"たつ" }},

 { English: "wait", Japanese: {"まつ" }},

 { English: "have, hold", Japanese: {"もつ" }},

 { English: "be", Japanese: {"ある" }},

 { English: "sell", Japanese: {"うる" }},

 { English: "finish", Japanese: {"おわる" }},

 { English: "take (time/money)", Japanese: {"かかる" }},

 { English: "put on (hat)", Japanese: {"かぶる" }},

 { English: "cut", Japanese: {"きる" }},

 { English: "be in trouble", Japanese: {"こまる" }},

 { English: "close (transitive)", Japanese: {"しまる" }},

 { English: "know", Japanese: {"しる" }},

 { English: "sit", Japanese: {"すわる" }},

 { English: "make/form/cook", Japanese: {"つくる" }},

 { English: "stop (int.)", Japanese: {"とまる" }},

 { English: "take", Japanese: {"とる" }},

 { English: "become", Japanese: {"なる" }},

 { English: "climb/ascend", Japanese: {"のぼる" }},

 { English: "get on", Japanese: {"のる" }},

 { English: "enter", Japanese: {"はいる" }},

 { English: "run", Japanese: {"はしる" }},

 { English: "start", Japanese: {"はじまる" }},

 { English: "put/stick", Japanese: {"はる" }},

 { English: "fall (rain/snow)", Japanese: {"ふる" }},

 { English: "turn", Japanese: {"まがる" }},

 { English: "do", Japanese: {"する" }},

 { English: "understand", Japanese: {"わかる" }},

 { English: "cross", Japanese: {"わたる" }},

 { English: "open (trans.)", Japanese: {"あける" }},

 { English: "give", Japanese: {"あげる" }},

 { English: "put in", Japanese: {"いれる" }},

 { English: "be born", Japanese: {"うまれる" }},

 { English: "teach", Japanese: {"おしえる" }},

 { English: "memorize/remember", Japanese: {"おぼえる" }},

 { English: "make a telephone call", Japanese: {"でんわ（を）する" }},

 { English: "put one's glasses on", Japanese: {"かける" }},

 { English: "go off/ go out", Japanese: {"きえる" }},

 { English: "answer/reply", Japanese: {"こたえる" }},

 { English: "close (trans.)", Japanese: {"しめる" }},

 { English: "tighten", Japanese: {"しめる" }},

 { English: "eat", Japanese: {"たべる" }},

 { English: "get tired", Japanese: {"つかれる" }},

 { English: "turn on", Japanese: {"つける" }},

 { English: "work for", Japanese: {"つとめる" }},

 { English: "leave/attend", Japanese: {"でる" }},

 { English: "line things up", Japanese: {"ならべる" }},

 { English: "clear up", Japanese: {"はれる" }},

 { English: "show", Japanese: {"みせる" }},

 { English: "forget", Japanese: {"わすれる" }},

 { English: "take a shower", Japanese: {"あびる" }},

 { English: "be (animate)", Japanese: {"いる" }},

 { English: "get up", Japanese: {"おきる" }},

 { English: "get off", Japanese: {"おりる" }},

 { English: "borrow/lend", Japanese: {"かりる" }},

 { English: "wear /put on", Japanese: {"きる" }},

 { English: "can do/possible", Japanese: {"できる" }},

 { English: "see", Japanese: {"みる" }},

 { English: "hold a meeting", Japanese: {"かいぎ（を）する" }},

 { English: "shop/shopping", Japanese: {"かいもの（を）する" }},

 { English: "marry", Japanese: {"けっこん（を）する" }},

 { English: "make a copy", Japanese: {"コピー（を）する" }},

 { English: "take a walk", Japanese: {"さんぽ（を）する" }},

 { English: "ask someone a question", Japanese: {"しつもん（を）する" }},

 { English: "wash (clotes, etc.)", Japanese: {"せんたく（を）する" }},

 { English: "clean", Japanese: {"そうじ（を）する" }},

 { English: "talk/have a talk", Japanese: {"はなしをする" }},

 { English: "throw a party", Japanese: {"パーティー（を）する" }},

 { English: "study", Japanese: {"べんきょう（を）する" }},

 { English: "cook", Japanese: {"りょうり（を）する" }},

 { English: "take a trip", Japanese: {"りょこう（を）する" }},

 { English: "practice", Japanese: {"れんしゅう（を）する" }},

 { English: "come", Japanese: {"くる" }},

]

export default data;
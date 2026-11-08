// 365 天開口說英文：課程資料（第 1–26 週）
// 每週：t 主題、p 8 個核心句 [英, 中]、d 情境對話（你扮演 B）、f 自由開口題
window.MONTHS = [
  { m: 1, t: "開口第一步", lv: "入門" },
  { m: 2, t: "生活基本功", lv: "入門" },
  { m: 3, t: "城市小日子", lv: "初級" },
  { m: 4, t: "出發去旅行", lv: "初級" },
  { m: 5, t: "旅途中的大小事", lv: "初級" },
  { m: 6, t: "交朋友與應變", lv: "初中級" },
  { m: 7, t: "聊聊過去與喜好", lv: "中級" },
  { m: 8, t: "表達想法", lv: "中級" },
  { m: 9, t: "社交場合", lv: "中級" },
  { m: 10, t: "說故事", lv: "中高級" },
  { m: 11, t: "文化與溝通", lv: "中高級" },
  { m: 12, t: "流利自在", lv: "中高級" }
];

window.WEEKS = [
// ===== 第 1 個月 =====
{ t: "打招呼與自我介紹",
  p: [
    ["Hi, nice to meet you.", "嗨，很高興認識你。"],
    ["My name is {name}.", "我的名字是 {name}。"],
    ["I'm from Taiwan.", "我來自台灣。"],
    ["I live in Taipei.", "我住在台北。"],
    ["How are you today?", "你今天好嗎？"],
    ["I'm good, thanks. And you?", "我很好，謝謝。你呢？"],
    ["What do you do?", "你是做什麼工作的？"],
    ["See you later.", "待會見。"]
  ],
  d: { s: "在咖啡店和新朋友打招呼", a: "Emma", l: [
    ["A", "Hi! Is this seat taken?", "嗨！這個位子有人坐嗎？"],
    ["B", "No, please sit down.", "沒有，請坐。"],
    ["A", "Thanks. I'm Emma. What's your name?", "謝謝。我是 Emma，你叫什麼名字？"],
    ["B", "My name is {name}. Nice to meet you.", "我叫 {name}，很高興認識你。"],
    ["A", "Nice to meet you too. Where are you from?", "我也很高興認識你。你從哪裡來？"],
    ["B", "I'm from Taiwan. I live in Taipei.", "我來自台灣，住在台北。"]
  ]},
  f: "用 30 秒自我介紹：名字、來自哪裡、住在哪裡。" },

{ t: "數字、時間與日期",
  p: [
    ["What time is it?", "現在幾點？"],
    ["It's seven thirty.", "現在七點半。"],
    ["What day is it today?", "今天星期幾？"],
    ["Today is Monday.", "今天是星期一。"],
    ["My birthday is in May.", "我的生日在五月。"],
    ["I get up at six every day.", "我每天六點起床。"],
    ["How much is this?", "這個多少錢？"],
    ["It's twenty dollars.", "二十塊錢。"]
  ],
  d: { s: "跟朋友約時間", a: "Jack", l: [
    ["A", "Are you free on Saturday?", "你星期六有空嗎？"],
    ["B", "Yes, I'm free in the afternoon.", "有，我下午有空。"],
    ["A", "Great. How about three o'clock?", "太好了。三點怎麼樣？"],
    ["B", "Three o'clock is fine.", "三點可以。"],
    ["A", "See you at the station then.", "那車站見。"],
    ["B", "Okay. See you on Saturday.", "好，星期六見。"]
  ]},
  f: "說說你平常一天的時間：幾點起床、幾點上班、幾點睡覺。" },

{ t: "家人與朋友",
  p: [
    ["I have one brother and one sister.", "我有一個哥哥和一個姊姊。"],
    ["My parents live in Taichung.", "我爸媽住在台中。"],
    ["This is my best friend.", "這是我最好的朋友。"],
    ["Are you married?", "你結婚了嗎？"],
    ["I have two kids.", "我有兩個小孩。"],
    ["My mom is a great cook.", "我媽媽很會煮菜。"],
    ["We often eat dinner together.", "我們常常一起吃晚餐。"],
    ["Do you have any brothers or sisters?", "你有兄弟姊妹嗎？"]
  ],
  d: { s: "聊家人", a: "Sophie", l: [
    ["A", "Do you have any brothers or sisters?", "你有兄弟姊妹嗎？"],
    ["B", "Yes, I have one younger sister.", "有，我有一個妹妹。"],
    ["A", "Nice. Does she live near you?", "不錯。她住你附近嗎？"],
    ["B", "No, she lives in Kaohsiung.", "沒有，她住在高雄。"],
    ["A", "Do you see her often?", "你常見到她嗎？"],
    ["B", "We meet about once a month.", "我們大概一個月見一次。"]
  ]},
  f: "介紹你的家人：有幾個人、他們住哪、做什麼。" },

{ t: "我的一天",
  p: [
    ["I usually wake up early.", "我通常很早起床。"],
    ["I take a shower in the morning.", "我早上洗澡。"],
    ["I have breakfast at home.", "我在家吃早餐。"],
    ["I go to work by MRT.", "我搭捷運上班。"],
    ["I have lunch at noon.", "我中午吃午餐。"],
    ["I get home around seven.", "我大約七點到家。"],
    ["After dinner, I watch TV.", "晚餐後我看電視。"],
    ["I go to bed at eleven.", "我十一點睡覺。"]
  ],
  d: { s: "聊作息", a: "Ryan", l: [
    ["A", "You look tired. What time did you get up?", "你看起來很累。你幾點起床？"],
    ["B", "I got up at five thirty.", "我五點半起床。"],
    ["A", "Wow, that's early! Why?", "哇，好早！為什麼？"],
    ["B", "I usually go jogging before work.", "我通常上班前去慢跑。"],
    ["A", "That's healthy. What time do you go to bed?", "很健康。那你幾點睡？"],
    ["B", "Around ten thirty. I need my sleep.", "大約十點半，我需要睡眠。"]
  ]},
  f: "從早到晚，描述你昨天做了什麼。" },

// ===== 第 2 個月 =====
{ t: "喜歡的食物",
  p: [
    ["I love spicy food.", "我很愛吃辣。"],
    ["I don't really like sweets.", "我不太喜歡甜食。"],
    ["What's your favorite food?", "你最喜歡什麼食物？"],
    ["My favorite food is beef noodles.", "我最喜歡牛肉麵。"],
    ["I can't eat seafood.", "我不能吃海鮮。"],
    ["Are you hungry?", "你餓了嗎？"],
    ["Let's grab something to eat.", "我們去吃點東西吧。"],
    ["This tastes really good.", "這個真的很好吃。"]
  ],
  d: { s: "決定午餐吃什麼", a: "Olivia", l: [
    ["A", "I'm starving. What do you want for lunch?", "我餓扁了。你午餐想吃什麼？"],
    ["B", "How about Japanese food?", "日本料理怎麼樣？"],
    ["A", "Sounds good. Do you like sushi?", "聽起來不錯。你喜歡壽司嗎？"],
    ["B", "I love it, but I can't eat raw fish today.", "我很愛，但我今天不能吃生魚。"],
    ["A", "No problem. They have ramen too.", "沒問題，他們也有拉麵。"],
    ["B", "Perfect. Let's go!", "太好了，走吧！"]
  ]},
  f: "說說你最喜歡和最不喜歡的食物，以及原因。" },

{ t: "點咖啡與飲料",
  p: [
    ["Can I get a latte, please?", "可以給我一杯拿鐵嗎？"],
    ["What size would you like?", "你要什麼尺寸？"],
    ["A medium, please.", "中杯，謝謝。"],
    ["Hot or iced?", "熱的還是冰的？"],
    ["Iced, with less sugar.", "冰的，少糖。"],
    ["For here or to go?", "內用還是外帶？"],
    ["To go, please.", "外帶，謝謝。"],
    ["Can I pay by card?", "可以刷卡嗎？"]
  ],
  d: { s: "在咖啡店點餐", a: "店員", l: [
    ["A", "Hi, what can I get for you?", "嗨，要點什麼？"],
    ["B", "Can I get an iced americano, please?", "可以給我一杯冰美式嗎？"],
    ["A", "Sure. What size?", "好的，什麼尺寸？"],
    ["B", "A large, please.", "大杯，謝謝。"],
    ["A", "For here or to go?", "內用還是外帶？"],
    ["B", "To go. Can I pay by card?", "外帶。可以刷卡嗎？"]
  ]},
  f: "假裝你在咖啡店，點一杯你最常喝的飲料和一個點心。" },

{ t: "購物基本句",
  p: [
    ["I'm just looking, thanks.", "我只是看看，謝謝。"],
    ["Do you have this in a smaller size?", "這個有小一點的尺寸嗎？"],
    ["Can I try this on?", "我可以試穿嗎？"],
    ["Where is the fitting room?", "試衣間在哪裡？"],
    ["It's a little too big.", "有點太大。"],
    ["Do you have it in black?", "這個有黑色的嗎？"],
    ["I'll take it.", "我要買這個。"],
    ["Is there a discount?", "有打折嗎？"]
  ],
  d: { s: "在服飾店", a: "店員", l: [
    ["A", "Hi, can I help you find something?", "嗨，需要幫你找什麼嗎？"],
    ["B", "Yes, do you have this shirt in medium?", "有，這件襯衫有中號嗎？"],
    ["A", "Let me check. Yes, here you go.", "我看一下。有，給你。"],
    ["B", "Thanks. Can I try it on?", "謝謝。我可以試穿嗎？"],
    ["A", "Of course. The fitting room is over there.", "當然，試衣間在那邊。"],
    ["B", "It fits well. I'll take it.", "很合身，我要買。"]
  ]},
  f: "描述你最近買的一樣東西：在哪買、多少錢、為什麼買。" },

{ t: "天氣與閒聊",
  p: [
    ["It's really hot today.", "今天真的好熱。"],
    ["It looks like it's going to rain.", "看起來快下雨了。"],
    ["Don't forget your umbrella.", "別忘了帶傘。"],
    ["I love this kind of weather.", "我很愛這種天氣。"],
    ["It's getting colder.", "天氣越來越冷了。"],
    ["How's the weather there?", "你那邊天氣怎麼樣？"],
    ["A typhoon is coming this weekend.", "這週末有颱風要來。"],
    ["What a beautiful day!", "天氣真好！"]
  ],
  d: { s: "電梯裡的閒聊", a: "鄰居 Tom", l: [
    ["A", "Morning! Crazy weather, huh?", "早！天氣好誇張，對吧？"],
    ["B", "Yeah, it's so humid today.", "對啊，今天好潮濕。"],
    ["A", "I heard a typhoon is coming.", "聽說颱風要來了。"],
    ["B", "Really? I hope we get a day off.", "真的嗎？希望能放颱風假。"],
    ["A", "Ha, me too. Stay dry!", "哈，我也是。別淋濕了！"],
    ["B", "You too. Have a nice day.", "你也是，祝你有美好的一天。"]
  ]},
  f: "描述今天的天氣，以及你最喜歡哪個季節。" },

// ===== 第 3 個月 =====
{ t: "問路",
  p: [
    ["Excuse me, where is the train station?", "不好意思，火車站在哪裡？"],
    ["Is it far from here?", "離這裡遠嗎？"],
    ["Go straight and turn left.", "直走然後左轉。"],
    ["It's on your right.", "在你的右手邊。"],
    ["It's about a five-minute walk.", "走路大約五分鐘。"],
    ["Can you show me on the map?", "可以在地圖上指給我看嗎？"],
    ["I think I'm lost.", "我好像迷路了。"],
    ["Thank you so much for your help.", "非常謝謝你的幫忙。"]
  ],
  d: { s: "在街上問路", a: "路人", l: [
    ["A", "Hi, you look lost. Can I help?", "嗨，你看起來迷路了。需要幫忙嗎？"],
    ["B", "Yes, please. Where is the nearest MRT station?", "好，麻煩了。最近的捷運站在哪？"],
    ["A", "Go straight two blocks and turn right.", "直走兩個路口再右轉。"],
    ["B", "Is it far from here?", "離這裡遠嗎？"],
    ["A", "Not at all. About five minutes on foot.", "一點也不，走路大約五分鐘。"],
    ["B", "Great. Thank you so much!", "太好了，非常謝謝你！"]
  ]},
  f: "說明從你家走到最近的便利商店怎麼走。" },

{ t: "搭乘交通工具",
  p: [
    ["Which bus goes to the airport?", "哪一班公車到機場？"],
    ["How often does the train come?", "火車多久來一班？"],
    ["I'd like a one-way ticket, please.", "我要一張單程票。"],
    ["Where do I change trains?", "我要在哪裡轉車？"],
    ["Is this seat free?", "這個位子有人嗎？"],
    ["Please take me to this address.", "請載我到這個地址。"],
    ["How long does it take?", "要花多久時間？"],
    ["Can you stop here, please?", "可以在這裡停嗎？"]
  ],
  d: { s: "搭計程車", a: "司機", l: [
    ["A", "Hi, where to?", "嗨，去哪裡？"],
    ["B", "Please take me to the Grand Hotel.", "請載我到圓山大飯店。"],
    ["A", "Sure. Are you in a hurry?", "好的。你趕時間嗎？"],
    ["B", "A little. How long does it take?", "有一點。要多久？"],
    ["A", "About twenty minutes if there's no traffic.", "不塞車的話大約二十分鐘。"],
    ["B", "Okay. Can I pay by credit card?", "好。可以刷信用卡嗎？"]
  ]},
  f: "說說你平常怎麼通勤，花多久時間，你喜歡嗎？" },

{ t: "在餐廳",
  p: [
    ["A table for two, please.", "兩位，謝謝。"],
    ["Can we see the menu?", "可以看一下菜單嗎？"],
    ["What do you recommend?", "你推薦什麼？"],
    ["I'll have the steak, medium rare.", "我要牛排，三分熟。"],
    ["Could we get some water?", "可以給我們一些水嗎？"],
    ["Excuse me, this isn't what I ordered.", "不好意思，這不是我點的。"],
    ["Can we have the check, please?", "可以買單嗎？"],
    ["Let's split the bill.", "我們分開付吧。"]
  ],
  d: { s: "在餐廳點餐", a: "服務生", l: [
    ["A", "Good evening. Are you ready to order?", "晚安，準備好點餐了嗎？"],
    ["B", "Almost. What do you recommend?", "差不多了。你推薦什麼？"],
    ["A", "Our salmon is very popular.", "我們的鮭魚很受歡迎。"],
    ["B", "Sounds great. I'll have the salmon.", "聽起來很棒，我要鮭魚。"],
    ["A", "Anything to drink?", "要喝點什麼嗎？"],
    ["B", "Just water, please.", "水就好，謝謝。"]
  ]},
  f: "描述你最近一次去餐廳吃飯：吃了什麼、好不好吃。" },

{ t: "興趣與嗜好",
  p: [
    ["What do you do in your free time?", "你空閒時做什麼？"],
    ["I like playing the guitar.", "我喜歡彈吉他。"],
    ["I'm really into photography.", "我很熱衷攝影。"],
    ["I go hiking on weekends.", "我週末去爬山。"],
    ["How long have you been doing that?", "你做這個多久了？"],
    ["I just started last year.", "我去年才開始。"],
    ["It helps me relax.", "這幫助我放鬆。"],
    ["You should try it sometime.", "你有空應該試試看。"]
  ],
  d: { s: "聊興趣", a: "Liam", l: [
    ["A", "So, what do you do for fun?", "那你平常做什麼娛樂？"],
    ["B", "I play bass in a small band.", "我在一個小樂團彈貝斯。"],
    ["A", "No way! That's so cool.", "不會吧！好酷。"],
    ["B", "Thanks. I just started last year.", "謝謝，我去年才開始。"],
    ["A", "Do you play shows?", "你們有表演嗎？"],
    ["B", "Not yet, but maybe someday.", "還沒有，但也許有一天。"]
  ]},
  f: "介紹你最大的興趣：是什麼、怎麼開始的、為什麼喜歡。" },

{ t: "週末計畫",
  p: [
    ["What are you doing this weekend?", "你這週末要做什麼？"],
    ["I'm going to visit my parents.", "我要去看我爸媽。"],
    ["I don't have any plans yet.", "我還沒有任何計畫。"],
    ["Do you want to go to the movies?", "你想去看電影嗎？"],
    ["That sounds fun.", "聽起來很好玩。"],
    ["Sorry, I'm busy on Sunday.", "抱歉，我星期天很忙。"],
    ["Maybe next time.", "也許下次吧。"],
    ["How was your weekend?", "你週末過得如何？"]
  ],
  d: { s: "約朋友週末出去", a: "Mia", l: [
    ["A", "Hey, any plans for this weekend?", "嘿，這週末有計畫嗎？"],
    ["B", "Not really. Why?", "沒有耶，怎麼了？"],
    ["A", "Do you want to go to the night market?", "你想去逛夜市嗎？"],
    ["B", "Sure! Which one?", "好啊！哪一個？"],
    ["A", "Let's try Raohe. I heard it's good.", "去饒河吧，聽說不錯。"],
    ["B", "Great. Let's meet at seven.", "太好了，七點見。"]
  ]},
  f: "說說你這個週末的計畫，或上個週末做了什麼。" },

// ===== 第 4 個月 =====
{ t: "機場報到",
  p: [
    ["I'd like to check in, please.", "我要辦理報到。"],
    ["Here is my passport.", "這是我的護照。"],
    ["Can I have a window seat?", "可以給我靠窗的位子嗎？"],
    ["I have one bag to check.", "我有一件行李要托運。"],
    ["Can I take this as a carry-on?", "這個可以當手提行李嗎？"],
    ["What time does boarding start?", "幾點開始登機？"],
    ["Which gate is it?", "是哪個登機門？"],
    ["Is the flight on time?", "班機準時嗎？"]
  ],
  d: { s: "航空公司櫃檯", a: "地勤", l: [
    ["A", "Good morning. Where are you flying today?", "早安，今天飛哪裡？"],
    ["B", "To Tokyo. Here is my passport.", "東京。這是我的護照。"],
    ["A", "Thank you. Any bags to check?", "謝謝。有行李要托運嗎？"],
    ["B", "Just one. Can I have a window seat?", "只有一件。可以給我靠窗嗎？"],
    ["A", "Sure. Boarding starts at nine at Gate 12.", "好的，九點在 12 號登機門登機。"],
    ["B", "Got it. Thank you!", "了解，謝謝！"]
  ]},
  f: "說說你最近一次搭飛機的經驗，或你最想飛去哪裡。" },

{ t: "入境與海關",
  p: [
    ["I'm here on vacation.", "我來度假。"],
    ["I'm staying for one week.", "我待一個禮拜。"],
    ["I'm staying at a hotel downtown.", "我住在市中心的飯店。"],
    ["This is my first time here.", "這是我第一次來。"],
    ["I have nothing to declare.", "我沒有東西要申報。"],
    ["Here is my return ticket.", "這是我的回程機票。"],
    ["Where is the baggage claim?", "行李提領處在哪裡？"],
    ["My luggage didn't arrive.", "我的行李沒有到。"]
  ],
  d: { s: "入境審查", a: "移民官", l: [
    ["A", "What's the purpose of your visit?", "你來訪的目的是什麼？"],
    ["B", "I'm here on vacation.", "我來度假。"],
    ["A", "How long will you stay?", "你會待多久？"],
    ["B", "Ten days.", "十天。"],
    ["A", "Where are you staying?", "你住哪裡？"],
    ["B", "At a hotel near Central Park.", "中央公園附近的飯店。"]
  ]},
  f: "練習回答移民官：目的、天數、住哪裡、做什麼工作。" },

{ t: "在飛機上",
  p: [
    ["Excuse me, I think you're in my seat.", "不好意思，你好像坐到我的位子了。"],
    ["Could you help me with my bag?", "可以幫我放行李嗎？"],
    ["Can I have a blanket, please?", "可以給我一條毯子嗎？"],
    ["Chicken or fish?", "雞肉還是魚？"],
    ["I'll have the chicken, please.", "我要雞肉，謝謝。"],
    ["Could I get some more water?", "可以再給我一些水嗎？"],
    ["May I get by?", "可以借過一下嗎？"],
    ["How long until we land?", "還要多久降落？"]
  ],
  d: { s: "和空服員對話", a: "空服員", l: [
    ["A", "Would you like something to drink?", "要喝點什麼嗎？"],
    ["B", "Apple juice, please.", "蘋果汁，謝謝。"],
    ["A", "And for dinner, chicken or beef?", "晚餐要雞肉還是牛肉？"],
    ["B", "Beef, please. Could I also have a blanket?", "牛肉，謝謝。可以也給我一條毯子嗎？"],
    ["A", "Of course. I'll bring one right away.", "當然，我馬上拿來。"],
    ["B", "Thank you very much.", "非常謝謝你。"]
  ]},
  f: "描述你理想中的長途飛行：吃什麼、看什麼、怎麼打發時間。" },

{ t: "飯店入住",
  p: [
    ["I have a reservation under {name}.", "我有用 {name} 的名字訂房。"],
    ["I'd like to check in.", "我要入住。"],
    ["Is breakfast included?", "有含早餐嗎？"],
    ["What time is checkout?", "幾點退房？"],
    ["What's the Wi-Fi password?", "Wi-Fi 密碼是什麼？"],
    ["Can I leave my bags here?", "我可以把行李寄放在這裡嗎？"],
    ["Could I have a late checkout?", "我可以晚一點退房嗎？"],
    ["Where is the elevator?", "電梯在哪裡？"]
  ],
  d: { s: "飯店櫃檯", a: "櫃檯人員", l: [
    ["A", "Welcome! How can I help you?", "歡迎！有什麼需要幫忙的？"],
    ["B", "Hi, I have a reservation under {name}.", "嗨，我有用 {name} 訂房。"],
    ["A", "Yes, three nights. Here's your key card.", "有的，三晚。這是你的房卡。"],
    ["B", "Thanks. Is breakfast included?", "謝謝。有含早餐嗎？"],
    ["A", "Yes, from seven to ten on the second floor.", "有，七點到十點在二樓。"],
    ["B", "Great. And what time is checkout?", "太好了。那幾點退房？"]
  ]},
  f: "假裝你在飯店櫃檯：報名字、詢問早餐、Wi-Fi 和退房時間。" },

// ===== 第 5 個月 =====
{ t: "飯店房間問題",
  p: [
    ["The air conditioner isn't working.", "冷氣壞了。"],
    ["There's no hot water.", "沒有熱水。"],
    ["Could you send someone to fix it?", "可以派人來修嗎？"],
    ["The room is too noisy.", "房間太吵了。"],
    ["Can I change rooms?", "我可以換房間嗎？"],
    ["I locked myself out.", "我把自己鎖在門外了。"],
    ["Could I get some extra towels?", "可以多給我幾條毛巾嗎？"],
    ["Thanks for fixing it so quickly.", "謝謝你這麼快修好。"]
  ],
  d: { s: "打電話給櫃檯", a: "櫃檯", l: [
    ["A", "Front desk. How may I help you?", "櫃檯您好，有什麼需要？"],
    ["B", "Hi, this is room 805. The air conditioner isn't working.", "嗨，這裡是 805 房，冷氣壞了。"],
    ["A", "I'm sorry about that. I'll send someone up.", "很抱歉，我會派人上去。"],
    ["B", "Thank you. How long will it take?", "謝謝。要多久？"],
    ["A", "About ten minutes.", "大約十分鐘。"],
    ["B", "Okay. Could I also get some extra towels?", "好。也可以多給我一些毛巾嗎？"]
  ]},
  f: "說說你住飯店遇過的問題，你怎麼處理的？" },

{ t: "觀光與買票",
  p: [
    ["Two adult tickets, please.", "兩張全票，謝謝。"],
    ["Is there a student discount?", "有學生優惠嗎？"],
    ["What time does the museum close?", "博物館幾點關門？"],
    ["Is there a guided tour?", "有導覽嗎？"],
    ["Can I take pictures inside?", "裡面可以拍照嗎？"],
    ["What's the best thing to see here?", "這裡最值得看的是什麼？"],
    ["Do you have a map in English?", "有英文地圖嗎？"],
    ["How long is the line?", "隊伍要排多久？"]
  ],
  d: { s: "博物館售票處", a: "售票員", l: [
    ["A", "Hello. How many tickets?", "您好，幾張票？"],
    ["B", "Two adults, please. Is there a guided tour?", "兩張全票，謝謝。有導覽嗎？"],
    ["A", "Yes, the next one starts at two.", "有，下一場兩點開始。"],
    ["B", "Great. Can we take pictures inside?", "太好了。裡面可以拍照嗎？"],
    ["A", "Yes, but no flash, please.", "可以，但請不要用閃光燈。"],
    ["B", "Got it. What time do you close?", "了解。你們幾點關門？"]
  ]},
  f: "介紹一個你去過最喜歡的景點，為什麼推薦？" },

{ t: "請人幫忙與拍照",
  p: [
    ["Could you take a picture of us?", "可以幫我們拍張照嗎？"],
    ["Just press this button.", "按這個按鈕就好。"],
    ["Could you take one more?", "可以再拍一張嗎？"],
    ["Can you get the tower in the background?", "可以把塔拍進背景嗎？"],
    ["Would you like me to take one of you?", "要我幫你拍一張嗎？"],
    ["Say cheese!", "笑一個！"],
    ["Sorry to bother you.", "抱歉打擾你。"],
    ["That's perfect, thank you!", "太完美了，謝謝！"]
  ],
  d: { s: "在景點請人拍照", a: "遊客", l: [
    ["A", "Excuse me, would you like me to take a photo?", "不好意思，要我幫你拍照嗎？"],
    ["B", "Oh, yes please! Just press this button.", "喔，好啊，麻煩你！按這個按鈕就好。"],
    ["A", "Okay, ready? Say cheese!", "好，準備好了嗎？笑一個！"],
    ["B", "Could you take one more with the bridge?", "可以再拍一張有橋的嗎？"],
    ["A", "Sure. Here you go.", "當然。好了。"],
    ["B", "That's perfect. Can I take one of you?", "太完美了。我也幫你拍一張？"]
  ]},
  f: "描述一張你很喜歡的旅行照片：在哪裡、照片裡有什麼。" },

{ t: "買紀念品與殺價",
  p: [
    ["How much is this one?", "這個多少錢？"],
    ["That's a bit expensive.", "有點貴。"],
    ["Can you give me a better price?", "可以算便宜一點嗎？"],
    ["What if I buy two?", "如果我買兩個呢？"],
    ["I'll think about it.", "我考慮一下。"],
    ["Can you wrap it as a gift?", "可以幫我包成禮物嗎？"],
    ["Is this handmade?", "這是手工做的嗎？"],
    ["Okay, it's a deal.", "好，成交。"]
  ],
  d: { s: "市集殺價", a: "老闆", l: [
    ["A", "These scarves are handmade. Very nice!", "這些圍巾是手工的，很棒喔！"],
    ["B", "They're beautiful. How much is this one?", "好漂亮。這條多少錢？"],
    ["A", "Thirty dollars.", "三十塊。"],
    ["B", "Hmm, that's a bit expensive. What if I buy two?", "嗯，有點貴。如果我買兩條呢？"],
    ["A", "Two for fifty.", "兩條五十。"],
    ["B", "Okay, it's a deal!", "好，成交！"]
  ]},
  f: "練習殺價：挑一樣東西，詢問價格並試著談到好價錢。" },

// ===== 第 6 個月 =====
{ t: "交朋友與邀約",
  p: [
    ["We should hang out sometime.", "我們找時間出去玩吧。"],
    ["Can I get your number?", "可以給我你的電話嗎？"],
    ["Are you on Instagram?", "你有用 Instagram 嗎？"],
    ["Do you want to grab a drink after work?", "下班後要不要去喝一杯？"],
    ["I'd love to.", "我很樂意。"],
    ["Let me check my schedule.", "我看一下我的行程。"],
    ["I'll text you later.", "我晚點傳訊息給你。"],
    ["It was great talking to you.", "跟你聊天很開心。"]
  ],
  d: { s: "在聚會後交換聯絡方式", a: "Chloe", l: [
    ["A", "It was great talking to you tonight.", "今晚跟你聊得很開心。"],
    ["B", "Same here. We should hang out sometime.", "我也是。我們找時間出去玩吧。"],
    ["A", "Definitely! Are you on Instagram?", "當然！你有用 Instagram 嗎？"],
    ["B", "Yes. Let me show you my account.", "有，我給你看我的帳號。"],
    ["A", "Cool, I followed you.", "好，我追蹤你了。"],
    ["B", "Great. I'll message you this week.", "太好了，我這週傳訊息給你。"]
  ]},
  f: "邀請一個朋友週末出去：說明去哪、做什麼、幾點。" },

{ t: "講電話",
  p: [
    ["Hello, this is {name} speaking.", "你好，我是 {name}。"],
    ["May I speak to Sarah, please?", "請問 Sarah 在嗎？"],
    ["Sorry, I can't hear you very well.", "抱歉，我聽不太清楚。"],
    ["Could you speak a little slower?", "你可以說慢一點嗎？"],
    ["Could you repeat that, please?", "可以請你再說一次嗎？"],
    ["Can I call you back later?", "我可以晚點回電給你嗎？"],
    ["I'd like to make a reservation.", "我想要預約。"],
    ["Thanks for calling.", "謝謝你打來。"]
  ],
  d: { s: "打電話訂位", a: "餐廳", l: [
    ["A", "Hello, Bella Italia. How can I help you?", "您好，Bella Italia，有什麼需要？"],
    ["B", "Hi, I'd like to make a reservation for Friday.", "嗨，我想訂星期五的位子。"],
    ["A", "Sure. For how many people?", "好的，幾位？"],
    ["B", "Four people, at seven p.m.", "四位，晚上七點。"],
    ["A", "Could I have your name, please?", "請問您的大名？"],
    ["B", "It's {name}. Could you repeat the time, please?", "{name}。可以再確認一次時間嗎？"]
  ]},
  f: "練習打電話預約剪頭髮：日期、時間、你的名字。" },

{ t: "看醫生與藥局",
  p: [
    ["I don't feel well.", "我覺得不舒服。"],
    ["I have a headache.", "我頭痛。"],
    ["I have a sore throat and a fever.", "我喉嚨痛又發燒。"],
    ["My stomach hurts.", "我肚子痛。"],
    ["Do you have something for a cold?", "你們有治感冒的藥嗎？"],
    ["How often should I take this?", "這個要多久吃一次？"],
    ["I'm allergic to penicillin.", "我對盤尼西林過敏。"],
    ["I need to see a doctor.", "我需要看醫生。"]
  ],
  d: { s: "在藥局", a: "藥師", l: [
    ["A", "Hi, what can I do for you?", "嗨，需要什麼嗎？"],
    ["B", "I have a sore throat and a runny nose.", "我喉嚨痛又流鼻水。"],
    ["A", "Do you have a fever?", "你有發燒嗎？"],
    ["B", "No, I don't think so.", "沒有，應該沒有。"],
    ["A", "Try these. Take one tablet three times a day.", "試試這個，一天三次，一次一顆。"],
    ["B", "Thanks. Should I take them after meals?", "謝謝。要飯後吃嗎？"]
  ]},
  f: "描述你上次生病的狀況：哪裡不舒服、怎麼處理的。" },

{ t: "緊急狀況",
  p: [
    ["Help! Please call the police.", "救命！請報警。"],
    ["I lost my passport.", "我的護照掉了。"],
    ["My wallet was stolen.", "我的錢包被偷了。"],
    ["Where is the nearest hospital?", "最近的醫院在哪裡？"],
    ["I need to contact my embassy.", "我需要聯絡我的大使館。"],
    ["I missed my flight.", "我錯過班機了。"],
    ["Is there someone who speaks Chinese?", "有會說中文的人嗎？"],
    ["Please hurry, it's an emergency.", "請快一點，這是緊急狀況。"]
  ],
  d: { s: "在警察局報案", a: "警察", l: [
    ["A", "What happened?", "發生什麼事？"],
    ["B", "My bag was stolen at the train station.", "我的包包在火車站被偷了。"],
    ["A", "I'm sorry. What was in it?", "很遺憾。裡面有什麼？"],
    ["B", "My wallet, my phone, and my passport.", "我的錢包、手機和護照。"],
    ["A", "Please fill out this form.", "請填這張表格。"],
    ["B", "Okay. Can I get a copy of the report?", "好。我可以拿一份報案證明嗎？"]
  ]},
  f: "假設你在國外弄丟手機，向工作人員說明發生什麼事並請求幫忙。" },

{ t: "半年總整理：自我介紹升級版",
  p: [
    ["Let me tell you a little about myself.", "讓我簡單介紹一下自己。"],
    ["I've been working in IT for ten years.", "我在 IT 業工作十年了。"],
    ["In my free time, I play music.", "我空閒時會玩音樂。"],
    ["I've been learning English for six months.", "我學英文已經六個月了。"],
    ["My goal is to travel without a guide.", "我的目標是不靠導遊去旅行。"],
    ["I'm getting more confident every day.", "我每天都更有自信了。"],
    ["Speaking is still a little hard for me.", "說英文對我來說還是有點難。"],
    ["Practice makes perfect.", "熟能生巧。"]
  ],
  d: { s: "語言交換第一次見面", a: "Daniel", l: [
    ["A", "So tell me a little about yourself.", "那跟我說說你自己吧。"],
    ["B", "Sure. I'm from Taipei, and I work in IT.", "好。我來自台北，在 IT 業工作。"],
    ["A", "Cool. Why are you learning English?", "酷。你為什麼學英文？"],
    ["B", "I want to travel and make friends abroad.", "我想去旅行，在國外交朋友。"],
    ["A", "Your English is pretty good already!", "你的英文已經很不錯了！"],
    ["B", "Thanks! I practice a little every day.", "謝謝！我每天都練一點。"]
  ]},
  f: "用一分鐘做升級版自我介紹：工作、興趣、為什麼學英文、目標。" }
];

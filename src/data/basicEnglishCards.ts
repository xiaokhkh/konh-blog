export type BasicEnglishCategory = 'Operations' | 'Things-General' | 'Things-Pictured' | 'Qualities-General' | 'Qualities-Opposite';

export type BasicEnglishCard = {
  id: string;
  word: string;
  variants: string[];
  variantSpelling?: string;
  category: BasicEnglishCategory;
  categoryLabel: string;
  dayGroup: number;
  meaningZh: string;
  exampleEn: string;
  exampleZh: string;
  ipa?: string;
  audioUrl?: string;
};

const WORD_GROUPS: Array<{ category: BasicEnglishCategory; label: string; words: string[] }> = [
  {
    category: "Operations",
    label: "Operations",
    words: [
      "come",
      "get",
      "give",
      "go",
      "keep",
      "let",
      "make",
      "put",
      "seem",
      "take",
      "be",
      "do",
      "have",
      "say",
      "see",
      "send",
      "may",
      "will",
      "about",
      "across",
      "after",
      "against",
      "among",
      "at",
      "before",
      "between",
      "by",
      "down",
      "from",
      "in",
      "off",
      "on",
      "over",
      "through",
      "to",
      "under",
      "up",
      "with",
      "as",
      "for",
      "of",
      "till",
      "than",
      "a",
      "the",
      "all",
      "any",
      "every",
      "little",
      "much",
      "no",
      "other",
      "some",
      "such",
      "that",
      "this",
      "I",
      "he",
      "you",
      "who",
      "and",
      "because",
      "but",
      "or",
      "if",
      "though",
      "while",
      "how",
      "when",
      "where",
      "why",
      "again",
      "ever",
      "far",
      "forward",
      "here",
      "near",
      "now",
      "out",
      "still",
      "then",
      "there",
      "together",
      "well",
      "almost",
      "enough",
      "even",
      "not",
      "only",
      "quite",
      "so",
      "very",
      "tomorrow",
      "yesterday",
      "north",
      "south",
      "east",
      "west",
      "please",
      "yes"
    ]
  },
  {
    category: "Things-General",
    label: "Things - General",
    words: [
      "account",
      "act",
      "addition",
      "adjustment",
      "advertisement",
      "agreement",
      "air",
      "amount",
      "amusement",
      "animal",
      "answer",
      "apparatus",
      "approval",
      "argument",
      "art",
      "attack",
      "attempt",
      "attention",
      "attraction",
      "authority",
      "back",
      "balance",
      "base",
      "behaviour",
      "belief",
      "birth",
      "bit",
      "bite",
      "blood",
      "blow",
      "body",
      "brass",
      "bread",
      "breath",
      "brother",
      "building",
      "burn",
      "burst",
      "business",
      "butter",
      "canvas",
      "care",
      "cause",
      "chalk",
      "chance",
      "change",
      "cloth",
      "coal",
      "colour",
      "comfort",
      "committee",
      "company",
      "comparison",
      "competition",
      "condition",
      "connection",
      "control",
      "cook",
      "copper",
      "copy",
      "cork",
      "cotton",
      "cough",
      "country",
      "cover",
      "crack",
      "credit",
      "crime",
      "crush",
      "cry",
      "current",
      "curve",
      "damage",
      "danger",
      "daughter",
      "day",
      "death",
      "debt",
      "decision",
      "degree",
      "design",
      "desire",
      "destruction",
      "detail",
      "development",
      "digestion",
      "direction",
      "discovery",
      "discussion",
      "disease",
      "disgust",
      "distance",
      "distribution",
      "division",
      "doubt",
      "drink",
      "driving",
      "dust",
      "earth",
      "edge",
      "education",
      "effect",
      "end",
      "error",
      "event",
      "example",
      "exchange",
      "existence",
      "expansion",
      "experience",
      "expert",
      "fact",
      "fall",
      "family",
      "father",
      "fear",
      "feeling",
      "fiction",
      "field",
      "fight",
      "fire",
      "flame",
      "flight",
      "flower",
      "fold",
      "food",
      "force",
      "form",
      "friend",
      "front",
      "fruit",
      "glass",
      "gold",
      "government",
      "grain",
      "grass",
      "grip",
      "group",
      "growth",
      "guide",
      "harbor",
      "harmony",
      "hate",
      "hearing",
      "heat",
      "help",
      "history",
      "hole",
      "hope",
      "hour",
      "humour",
      "ice",
      "idea",
      "impulse",
      "increase",
      "industry",
      "ink",
      "insect",
      "instrument",
      "insurance",
      "interest",
      "invention",
      "iron",
      "jelly",
      "join",
      "journey",
      "judge",
      "jump",
      "kick",
      "kiss",
      "knowledge",
      "land",
      "language",
      "laugh",
      "law",
      "lead",
      "learning",
      "leather",
      "letter",
      "level",
      "lift",
      "light",
      "limit",
      "linen",
      "liquid",
      "list",
      "look",
      "loss",
      "love",
      "machine",
      "man",
      "manager",
      "mark",
      "market",
      "mass",
      "meal",
      "measure",
      "meat",
      "meeting",
      "memory",
      "metal",
      "middle",
      "milk",
      "mind",
      "mine",
      "minute",
      "mist",
      "money",
      "month",
      "morning",
      "mother",
      "motion",
      "mountain",
      "move",
      "music",
      "name",
      "nation",
      "need",
      "news",
      "night",
      "noise",
      "note",
      "number",
      "observation",
      "offer",
      "oil",
      "operation",
      "opinion",
      "order",
      "organization",
      "ornament",
      "owner",
      "page",
      "pain",
      "paint",
      "paper",
      "part",
      "paste",
      "payment",
      "peace",
      "person",
      "place",
      "plant",
      "play",
      "pleasure",
      "point",
      "poison",
      "polish",
      "porter",
      "position",
      "powder",
      "power",
      "price",
      "print",
      "process",
      "produce",
      "profit",
      "property",
      "prose",
      "protest",
      "pull",
      "punishment",
      "purpose",
      "push",
      "quality",
      "question",
      "rain",
      "range",
      "rate",
      "ray",
      "reaction",
      "reading",
      "reason",
      "record",
      "regret",
      "relation",
      "religion",
      "representative",
      "request",
      "respect",
      "rest",
      "reward",
      "rhythm",
      "rice",
      "river",
      "road",
      "roll",
      "room",
      "rub",
      "rule",
      "run",
      "salt",
      "sand",
      "scale",
      "science",
      "sea",
      "seat",
      "secretary",
      "selection",
      "self",
      "sense",
      "servant",
      "sex",
      "shade",
      "shake",
      "shame",
      "shock",
      "side",
      "sign",
      "silk",
      "silver",
      "sister",
      "size",
      "sky",
      "sleep",
      "slip",
      "slope",
      "smash",
      "smell",
      "smile",
      "smoke",
      "sneeze",
      "snow",
      "soap",
      "society",
      "son",
      "song",
      "sort",
      "sound",
      "soup",
      "space",
      "stage",
      "start",
      "statement",
      "steam",
      "steel",
      "step",
      "stitch",
      "stone",
      "stop",
      "story",
      "stretch",
      "structure",
      "substance",
      "sugar",
      "suggestion",
      "summer",
      "support",
      "surprise",
      "swim",
      "system",
      "talk",
      "taste",
      "tax",
      "teaching",
      "tendency",
      "test",
      "theory",
      "thing",
      "thought",
      "thunder",
      "time",
      "tin",
      "top",
      "touch",
      "trade",
      "transport",
      "trick",
      "trouble",
      "turn",
      "twist",
      "unit",
      "use",
      "value",
      "verse",
      "vessel",
      "view",
      "voice",
      "walk",
      "war",
      "wash",
      "waste",
      "water",
      "wave",
      "wax",
      "way",
      "weather",
      "week",
      "weight",
      "wind",
      "wine",
      "winter",
      "woman",
      "wood",
      "wool",
      "word",
      "work",
      "wound",
      "writing",
      "year"
    ]
  },
  {
    category: "Things-Pictured",
    label: "Things - Pictured",
    words: [
      "angle",
      "ant",
      "apple",
      "arch",
      "arm",
      "army",
      "baby",
      "bag",
      "ball",
      "band",
      "basin",
      "basket",
      "bath",
      "bed",
      "bee",
      "bell",
      "berry",
      "bird",
      "blade",
      "board",
      "boat",
      "bone",
      "book",
      "boot",
      "bottle",
      "box",
      "boy",
      "brain",
      "brake",
      "branch",
      "brick",
      "bridge",
      "brush",
      "bucket",
      "bulb",
      "button",
      "cake",
      "camera",
      "card",
      "cart",
      "carriage",
      "cat",
      "chain",
      "cheese",
      "chest",
      "chin",
      "church",
      "circle",
      "clock",
      "cloud",
      "coat",
      "collar",
      "comb",
      "cord",
      "cow",
      "cup",
      "curtain",
      "cushion",
      "dog",
      "door",
      "drain",
      "drawer",
      "dress",
      "drop",
      "ear",
      "egg",
      "engine",
      "eye",
      "face",
      "farm",
      "feather",
      "finger",
      "fish",
      "flag",
      "floor",
      "fly",
      "foot",
      "fork",
      "fowl",
      "frame",
      "garden",
      "girl",
      "glove",
      "goat",
      "gun",
      "hair",
      "hammer",
      "hand",
      "hat",
      "head",
      "heart",
      "hook",
      "horn",
      "horse",
      "hospital",
      "house",
      "island",
      "jewel",
      "kettle",
      "key",
      "knee",
      "knife",
      "knot",
      "leaf",
      "leg",
      "library",
      "line",
      "lip",
      "lock",
      "map",
      "match",
      "monkey",
      "moon",
      "mouth",
      "muscle",
      "nail",
      "neck",
      "needle",
      "nerve",
      "net",
      "nose",
      "nut",
      "office",
      "orange",
      "oven",
      "parcel",
      "pen",
      "pencil",
      "picture",
      "pig",
      "pin",
      "pipe",
      "plane",
      "plate",
      "plough/plow",
      "pocket",
      "pot",
      "potato",
      "prison",
      "pump",
      "rail",
      "rat",
      "receipt",
      "ring",
      "rod",
      "roof",
      "root",
      "sail",
      "school",
      "scissors",
      "screw",
      "seed",
      "sheep",
      "shelf",
      "ship",
      "shirt",
      "shoe",
      "skin",
      "skirt",
      "snake",
      "sock",
      "spade",
      "sponge",
      "spoon",
      "spring",
      "square",
      "stamp",
      "star",
      "station",
      "stem",
      "stick",
      "stocking",
      "stomach",
      "store",
      "street",
      "sun",
      "table",
      "tail",
      "thread",
      "throat",
      "thumb",
      "ticket",
      "toe",
      "tongue",
      "tooth",
      "town",
      "train",
      "tray",
      "tree",
      "trousers",
      "umbrella",
      "wall",
      "watch",
      "wheel",
      "whip",
      "whistle",
      "window",
      "wing",
      "wire",
      "worm"
    ]
  },
  {
    category: "Qualities-General",
    label: "Qualities - General",
    words: [
      "able",
      "acid",
      "angry",
      "automatic",
      "beautiful",
      "black",
      "boiling",
      "bright",
      "broken",
      "brown",
      "cheap",
      "chemical",
      "chief",
      "clean",
      "clear",
      "common",
      "complex",
      "conscious",
      "cut",
      "deep",
      "dependent",
      "early",
      "elastic",
      "electric",
      "equal",
      "fat",
      "fertile",
      "first",
      "fixed",
      "flat",
      "free",
      "frequent",
      "full",
      "general",
      "good",
      "great",
      "grey/gray",
      "hanging",
      "happy",
      "hard",
      "healthy",
      "high",
      "hollow",
      "important",
      "kind",
      "like",
      "living",
      "long",
      "male",
      "married",
      "material",
      "medical",
      "military",
      "natural",
      "necessary",
      "new",
      "normal",
      "open",
      "parallel",
      "past",
      "physical",
      "political",
      "poor",
      "possible",
      "present",
      "private",
      "probable",
      "quick",
      "quiet",
      "ready",
      "red",
      "regular",
      "responsible",
      "right",
      "round",
      "same",
      "second",
      "separate",
      "serious",
      "sharp",
      "smooth",
      "sticky",
      "stiff",
      "straight",
      "strong",
      "sudden",
      "sweet",
      "tall",
      "thick",
      "tight",
      "tired",
      "true",
      "violent",
      "waiting",
      "warm",
      "wet",
      "wide",
      "wise",
      "yellow",
      "young"
    ]
  },
  {
    category: "Qualities-Opposite",
    label: "Qualities - Opposite",
    words: [
      "awake",
      "bad",
      "bent",
      "bitter",
      "blue",
      "certain",
      "cold",
      "complete",
      "cruel",
      "dark",
      "dead",
      "dear",
      "delicate",
      "different",
      "dirty",
      "dry",
      "false",
      "feeble",
      "female",
      "foolish",
      "future",
      "green",
      "ill",
      "last",
      "late",
      "left",
      "loose",
      "loud",
      "low",
      "mixed",
      "narrow",
      "old",
      "opposite",
      "public",
      "rough",
      "sad",
      "safe",
      "secret",
      "short",
      "shut",
      "simple",
      "slow",
      "small",
      "soft",
      "solid",
      "special",
      "strange",
      "thin",
      "white",
      "wrong"
    ]
  }
];

const ENTRY_HINTS: Record<string, { meaning: string; ipa?: string }> = {
  come: {
    meaning: "来"
  },
  get: {
    meaning: "得到；取得"
  },
  give: {
    meaning: "给"
  },
  go: {
    meaning: "去；走"
  },
  keep: {
    meaning: "保持；保留"
  },
  let: {
    meaning: "让",
    ipa: "/lɛt/"
  },
  make: {
    meaning: "做；制造"
  },
  put: {
    meaning: "放"
  },
  seem: {
    meaning: "似乎",
    ipa: "/sim/"
  },
  take: {
    meaning: "拿；带"
  },
  be: {
    meaning: "是；存在",
    ipa: "/bi/"
  },
  do: {
    meaning: "做"
  },
  have: {
    meaning: "有"
  },
  say: {
    meaning: "说",
    ipa: "/seɪ/"
  },
  see: {
    meaning: "看见"
  },
  send: {
    meaning: "发送；送出",
    ipa: "/sɛnd/"
  },
  may: {
    meaning: "可能；可以",
    ipa: "/meɪ/"
  },
  will: {
    meaning: "将要；愿意",
    ipa: "/wɪl/"
  },
  about: {
    meaning: "关于；大约",
    ipa: "/əˈbaʊt/"
  },
  across: {
    meaning: "穿过；在对面",
    ipa: "/əˈkrɔs, əˈkrɑs/"
  },
  after: {
    meaning: "在…之后",
    ipa: "/ˈæftər/"
  },
  against: {
    meaning: "反对；靠着"
  },
  among: {
    meaning: "在…之中",
    ipa: "/əˈməŋ/"
  },
  at: {
    meaning: "在；向"
  },
  before: {
    meaning: "在…之前",
    ipa: "/bəˈfɔr/"
  },
  between: {
    meaning: "在…之间",
    ipa: "/bəˈtwin/"
  },
  by: {
    meaning: "由；靠近",
    ipa: "/baɪ/"
  },
  down: {
    meaning: "向下",
    ipa: "/daʊn/"
  },
  from: {
    meaning: "从；来自"
  },
  in: {
    meaning: "在…里面",
    ipa: "/ɪn/"
  },
  off: {
    meaning: "离开；关闭",
    ipa: "/ɔf, ɑf/"
  },
  on: {
    meaning: "在…上"
  },
  over: {
    meaning: "在…上方；超过",
    ipa: "/ˈoʊvər/"
  },
  through: {
    meaning: "穿过；通过",
    ipa: "/θru/"
  },
  to: {
    meaning: "到；向",
    ipa: "/tu, tə/"
  },
  under: {
    meaning: "在…下面",
    ipa: "/ˈəndər/"
  },
  up: {
    meaning: "向上"
  },
  with: {
    meaning: "和；带有",
    ipa: "/wɪð, wɪθ/"
  },
  as: {
    meaning: "作为；像"
  },
  for: {
    meaning: "为了；给"
  },
  of: {
    meaning: "的；属于"
  },
  till: {
    meaning: "直到",
    ipa: "/tɪl/"
  },
  than: {
    meaning: "比"
  },
  a: {
    meaning: "一个"
  },
  the: {
    meaning: "这个；那个"
  },
  all: {
    meaning: "全部",
    ipa: "/ɔl/"
  },
  any: {
    meaning: "任何",
    ipa: "/ˈɛni/"
  },
  every: {
    meaning: "每个",
    ipa: "/ˈɛv(ə)ri/"
  },
  little: {
    meaning: "少量；小的",
    ipa: "/ˈlɪd(ə)l/"
  },
  much: {
    meaning: "许多；很",
    ipa: "/mətʃ/"
  },
  no: {
    meaning: "没有；不",
    ipa: "/noʊ/"
  },
  other: {
    meaning: "其他的",
    ipa: "/ˈəðər/"
  },
  some: {
    meaning: "一些"
  },
  such: {
    meaning: "这样的"
  },
  that: {
    meaning: "那个；那",
    ipa: "/ðæt/"
  },
  this: {
    meaning: "这个"
  },
  I: {
    meaning: "我",
    ipa: "/aɪ/"
  },
  he: {
    meaning: "他"
  },
  you: {
    meaning: "你；你们"
  },
  who: {
    meaning: "谁"
  },
  and: {
    meaning: "和；并且"
  },
  because: {
    meaning: "因为"
  },
  but: {
    meaning: "但是",
    ipa: "/bət/"
  },
  or: {
    meaning: "或者"
  },
  if: {
    meaning: "如果；是否",
    ipa: "/ɪf/"
  },
  though: {
    meaning: "虽然",
    ipa: "/ðoʊ/"
  },
  while: {
    meaning: "当…时；然而",
    ipa: "/(h)waɪl/"
  },
  how: {
    meaning: "如何；怎样",
    ipa: "/haʊ/"
  },
  when: {
    meaning: "何时；当…时",
    ipa: "/(h)wɛn/"
  },
  where: {
    meaning: "哪里",
    ipa: "/(h)wɛr/"
  },
  why: {
    meaning: "为什么",
    ipa: "/(h)waɪ/"
  },
  again: {
    meaning: "再次"
  },
  ever: {
    meaning: "曾经；永远",
    ipa: "/ˈɛvər/"
  },
  far: {
    meaning: "远",
    ipa: "/fɑr/"
  },
  forward: {
    meaning: "向前",
    ipa: "/ˈfɔrwərd/"
  },
  here: {
    meaning: "这里",
    ipa: "/hɪr/"
  },
  near: {
    meaning: "附近；接近",
    ipa: "/nɪr/"
  },
  now: {
    meaning: "现在",
    ipa: "/naʊ/"
  },
  out: {
    meaning: "在外；出去",
    ipa: "/aʊt/"
  },
  still: {
    meaning: "仍然；静止",
    ipa: "/stɪl/"
  },
  then: {
    meaning: "然后；那时",
    ipa: "/ðɛn/"
  },
  there: {
    meaning: "那里"
  },
  together: {
    meaning: "一起",
    ipa: "/təˈɡɛðər/"
  },
  well: {
    meaning: "好；很好地",
    ipa: "/wɛl/"
  },
  almost: {
    meaning: "几乎",
    ipa: "/ˈɔlmoʊst/"
  },
  enough: {
    meaning: "足够",
    ipa: "/ɪˈnəf/"
  },
  even: {
    meaning: "甚至；平坦",
    ipa: "/ˈivən/"
  },
  not: {
    meaning: "不",
    ipa: "/nɑt/"
  },
  only: {
    meaning: "只有；仅仅",
    ipa: "/ˈoʊnli/"
  },
  quite: {
    meaning: "相当；完全",
    ipa: "/kwaɪt/"
  },
  so: {
    meaning: "如此；所以",
    ipa: "/soʊ/"
  },
  very: {
    meaning: "非常",
    ipa: "/ˈvɛri/"
  },
  tomorrow: {
    meaning: "明天",
    ipa: "/təˈmɔroʊ/"
  },
  yesterday: {
    meaning: "昨天"
  },
  north: {
    meaning: "北方",
    ipa: "/nɔrθ/"
  },
  south: {
    meaning: "南方",
    ipa: "/saʊθ/"
  },
  east: {
    meaning: "东方",
    ipa: "/ist/"
  },
  west: {
    meaning: "西方",
    ipa: "/wɛst/"
  },
  please: {
    meaning: "请；使高兴",
    ipa: "/pliz/"
  },
  yes: {
    meaning: "是；好的",
    ipa: "/jɛs/"
  },
  account: {
    meaning: "账户",
    ipa: "/əˈkaʊnt/"
  },
  act: {
    meaning: "行为",
    ipa: "/æk(t)/"
  },
  addition: {
    meaning: "加法",
    ipa: "/əˈdɪʃən/"
  },
  adjustment: {
    meaning: "调整",
    ipa: "/əˈdʒəs(t)m(ə)nt/"
  },
  advertisement: {
    meaning: "广告",
    ipa: "/ˈædvərˌtaɪzmənt, ədˈvərdəzmənt/"
  },
  agreement: {
    meaning: "意见一致",
    ipa: "/əˈɡrim(ə)nt/"
  },
  air: {
    meaning: "空气",
    ipa: "/ɛr/"
  },
  amount: {
    meaning: "数量",
    ipa: "/əˈmaʊnt/"
  },
  amusement: {
    meaning: "欢乐",
    ipa: "/əˈmjuzmənt/"
  },
  animal: {
    meaning: "动物",
    ipa: "/ˈænəm(ə)l/"
  },
  answer: {
    meaning: "回答",
    ipa: "/ˈæn(t)sər/"
  },
  apparatus: {
    meaning: "成套设备",
    ipa: "/ˌæpəˈrædəs, ˌæpəˈreɪdəs/"
  },
  approval: {
    meaning: "赞同",
    ipa: "/əˈpruv(ə)l/"
  },
  argument: {
    meaning: "争吵",
    ipa: "/ˈɑrɡjəmənt/"
  },
  art: {
    meaning: "美术",
    ipa: "/ɑrt/"
  },
  attack: {
    meaning: "攻击",
    ipa: "/əˈtæk/"
  },
  attempt: {
    meaning: "企图",
    ipa: "/əˈtɛm(p)t/"
  },
  attention: {
    meaning: "注意",
    ipa: "/əˈtɛn(t)ʃən/"
  },
  attraction: {
    meaning: "吸引力",
    ipa: "/əˈtrækʃən/"
  },
  authority: {
    meaning: "权力",
    ipa: "/əˈθɔrədi/"
  },
  back: {
    meaning: "背部；后面"
  },
  balance: {
    meaning: "平衡",
    ipa: "/ˈbælən(t)s/"
  },
  base: {
    meaning: "底部",
    ipa: "/beɪs/"
  },
  behaviour: {
    meaning: "行为；举止",
    ipa: "/bəˈheɪvjər/"
  },
  belief: {
    meaning: "信念",
    ipa: "/bəˈlif/"
  },
  birth: {
    meaning: "出生",
    ipa: "/bərθ/"
  },
  bit: {
    meaning: "一小块",
    ipa: "/bɪt/"
  },
  bite: {
    meaning: "比特"
  },
  blood: {
    meaning: "血",
    ipa: "/bləd/"
  },
  blow: {
    meaning: "吹",
    ipa: "/bloʊ/"
  },
  body: {
    meaning: "身体",
    ipa: "/ˈbɑdi/"
  },
  brass: {
    meaning: "黄铜",
    ipa: "/bræs/"
  },
  bread: {
    meaning: "面包",
    ipa: "/brɛd/"
  },
  breath: {
    meaning: "气息",
    ipa: "/brɛθ/"
  },
  brother: {
    meaning: "弟弟",
    ipa: "/ˈbrəðər/"
  },
  building: {
    meaning: "建筑物",
    ipa: "/ˈbɪldɪŋ/"
  },
  burn: {
    meaning: "烧毁",
    ipa: "/bərn/"
  },
  burst: {
    meaning: "使破裂",
    ipa: "/bərst/"
  },
  business: {
    meaning: "商业",
    ipa: "/ˈbɪznəs/"
  },
  butter: {
    meaning: "黄油",
    ipa: "/ˈbədər/"
  },
  canvas: {
    meaning: "帆布",
    ipa: "/ˈkænvəs/"
  },
  care: {
    meaning: "小心",
    ipa: "/kɛr/"
  },
  cause: {
    meaning: "原因",
    ipa: "/kɔz/"
  },
  chalk: {
    meaning: "白垩",
    ipa: "/tʃɔk/"
  },
  chance: {
    meaning: "机会",
    ipa: "/tʃæn(t)s/"
  },
  change: {
    meaning: "嫦"
  },
  cloth: {
    meaning: "布料"
  },
  coal: {
    meaning: "煤",
    ipa: "/koʊl/"
  },
  colour: {
    meaning: "颜色",
    ipa: "/ˈkələr/"
  },
  comfort: {
    meaning: "舒适",
    ipa: "/ˈkəmfərt/"
  },
  committee: {
    meaning: "委员会",
    ipa: "/kəˈmɪdi/"
  },
  company: {
    meaning: "公司",
    ipa: "/ˈkəmp(ə)ni/"
  },
  comparison: {
    meaning: "比较",
    ipa: "/kəmˈpɛrəs(ə)n/"
  },
  competition: {
    meaning: "竞争",
    ipa: "/ˌkɑmpəˈtɪʃən/"
  },
  condition: {
    meaning: "状况",
    ipa: "/kənˈdɪʃən/"
  },
  connection: {
    meaning: "联系",
    ipa: "/kəˈnɛkʃən/"
  },
  control: {
    meaning: "控制",
    ipa: "/kənˈtroʊl/"
  },
  cook: {
    meaning: "做",
    ipa: "/kʊk/"
  },
  copper: {
    meaning: "铜",
    ipa: "/ˈkɑpər/"
  },
  copy: {
    meaning: "复制品",
    ipa: "/ˈkɑpi/"
  },
  cork: {
    meaning: "软木",
    ipa: "/kɔrk/"
  },
  cotton: {
    meaning: "棉花",
    ipa: "/ˈkɑtn/"
  },
  cough: {
    meaning: "咳嗽",
    ipa: "/kɔf, kɑf/"
  },
  country: {
    meaning: "国家",
    ipa: "/ˈkəntri/"
  },
  cover: {
    meaning: "覆盖物；封面"
  },
  crack: {
    meaning: "裂缝",
    ipa: "/kræk/"
  },
  credit: {
    meaning: "信贷",
    ipa: "/ˈkrɛdət/"
  },
  crime: {
    meaning: "罪",
    ipa: "/kraɪm/"
  },
  crush: {
    meaning: "压坏",
    ipa: "/krəʃ/"
  },
  cry: {
    meaning: "哭",
    ipa: "/kraɪ/"
  },
  current: {
    meaning: "当前的",
    ipa: "/ˈkərənt/"
  },
  curve: {
    meaning: "曲线",
    ipa: "/kərv/"
  },
  damage: {
    meaning: "损坏",
    ipa: "/ˈdæmɪdʒ/"
  },
  danger: {
    meaning: "单个儿"
  },
  daughter: {
    meaning: "女儿",
    ipa: "/ˈdɔdər, ˈdɑdər/"
  },
  day: {
    meaning: "一天",
    ipa: "/deɪ/"
  },
  death: {
    meaning: "死亡",
    ipa: "/dɛθ/"
  },
  debt: {
    meaning: "欠款",
    ipa: "/dɛt/"
  },
  decision: {
    meaning: "决定",
    ipa: "/dəˈsɪʒ(ə)n/"
  },
  degree: {
    meaning: "度",
    ipa: "/dəˈɡri/"
  },
  design: {
    meaning: "设计",
    ipa: "/dəˈzaɪn/"
  },
  desire: {
    meaning: "渴望",
    ipa: "/dəˈzaɪ(ə)r/"
  },
  destruction: {
    meaning: "破坏",
    ipa: "/dəˈstrəkʃən/"
  },
  detail: {
    meaning: "细节",
    ipa: "/dəˈteɪl, ˈdiˌteɪl/"
  },
  development: {
    meaning: "发展",
    ipa: "/dəˈvɛləpmənt/"
  },
  digestion: {
    meaning: "消化"
  },
  direction: {
    meaning: "方向"
  },
  discovery: {
    meaning: "发现",
    ipa: "/dəˈskəv(ə)ri/"
  },
  discussion: {
    meaning: "讨论",
    ipa: "/dəˈskəʃən/"
  },
  disease: {
    meaning: "病",
    ipa: "/dəˈziz/"
  },
  disgust: {
    meaning: "作呕",
    ipa: "/dəˈskəst, dɪsˈɡəst/"
  },
  distance: {
    meaning: "距离",
    ipa: "/ˈdɪst(ə)n(t)s/"
  },
  distribution: {
    meaning: "分发",
    ipa: "/ˌdɪstrəˈbjuʃən/"
  },
  division: {
    meaning: "分开",
    ipa: "/dəˈvɪʒən/"
  },
  doubt: {
    meaning: "怀疑",
    ipa: "/daʊt/"
  },
  drink: {
    meaning: "喝",
    ipa: "/drɪŋk/"
  },
  driving: {
    meaning: "驾驶",
    ipa: "/ˈdraɪvɪŋ/"
  },
  dust: {
    meaning: "灰尘",
    ipa: "/dəst/"
  },
  earth: {
    meaning: "地球",
    ipa: "/ərθ/"
  },
  edge: {
    meaning: "边缘",
    ipa: "/ɛdʒ/"
  },
  education: {
    meaning: "教育",
    ipa: "/ˌɛdʒəˈkeɪʃən/"
  },
  effect: {
    meaning: "结果",
    ipa: "/əˈfɛk(t)/"
  },
  end: {
    meaning: "末尾",
    ipa: "/ɛnd/"
  },
  error: {
    meaning: "错误",
    ipa: "/ˈɛrər/"
  },
  event: {
    meaning: "事件",
    ipa: "/əˈvɛnt/"
  },
  example: {
    meaning: "例子"
  },
  exchange: {
    meaning: "交换"
  },
  existence: {
    meaning: "存在"
  },
  expansion: {
    meaning: "膨胀"
  },
  experience: {
    meaning: "经验"
  },
  expert: {
    meaning: "专家",
    ipa: "/ˈɛkˌspərt/"
  },
  fact: {
    meaning: "事实",
    ipa: "/fæk(t)/"
  },
  fall: {
    meaning: "落下；秋天"
  },
  family: {
    meaning: "家庭",
    ipa: "/ˈfæm(ə)li/"
  },
  father: {
    meaning: "父亲",
    ipa: "/ˈfɑðər/"
  },
  fear: {
    meaning: "害怕",
    ipa: "/fɪr/"
  },
  feeling: {
    meaning: "触觉",
    ipa: "/ˈfilɪŋ/"
  },
  fiction: {
    meaning: "小说",
    ipa: "/ˈfɪkʃən/"
  },
  field: {
    meaning: "田地",
    ipa: "/fild/"
  },
  fight: {
    meaning: "打斗",
    ipa: "/faɪt/"
  },
  fire: {
    meaning: "火",
    ipa: "/ˈfaɪ(ə)r/"
  },
  flame: {
    meaning: "火焰",
    ipa: "/fleɪm/"
  },
  flight: {
    meaning: "飞",
    ipa: "/flaɪt/"
  },
  flower: {
    meaning: "花",
    ipa: "/ˈflaʊər/"
  },
  fold: {
    meaning: "褶",
    ipa: "/foʊld/"
  },
  food: {
    meaning: "食物",
    ipa: "/fud/"
  },
  force: {
    meaning: "力",
    ipa: "/fɔrs/"
  },
  form: {
    meaning: "形状",
    ipa: "/fɔrm/"
  },
  friend: {
    meaning: "朋友",
    ipa: "/frɛnd/"
  },
  front: {
    meaning: "前面",
    ipa: "/frənt/"
  },
  fruit: {
    meaning: "水果",
    ipa: "/frut/"
  },
  glass: {
    meaning: "玻璃",
    ipa: "/ɡlæs/"
  },
  gold: {
    meaning: "黄金",
    ipa: "/ɡoʊld/"
  },
  government: {
    meaning: "统治"
  },
  grain: {
    meaning: "谷物",
    ipa: "/ɡreɪn/"
  },
  grass: {
    meaning: "草",
    ipa: "/ɡræs/"
  },
  grip: {
    meaning: "抓牢",
    ipa: "/ɡrɪp/"
  },
  group: {
    meaning: "群",
    ipa: "/ɡrup/"
  },
  growth: {
    meaning: "成长",
    ipa: "/ɡroʊθ/"
  },
  guide: {
    meaning: "向导",
    ipa: "/ɡaɪd/"
  },
  harbor: {
    meaning: "港口；避难所",
    ipa: "/ˈhɑrbər/"
  },
  harmony: {
    meaning: "和声",
    ipa: "/ˈhɑrməni/"
  },
  hate: {
    meaning: "憎恶",
    ipa: "/heɪt/"
  },
  hearing: {
    meaning: "听觉",
    ipa: "/ˈhɪrɪŋ/"
  },
  heat: {
    meaning: "热",
    ipa: "/hit/"
  },
  help: {
    meaning: "帮助",
    ipa: "/hɛlp/"
  },
  history: {
    meaning: "历史学",
    ipa: "/ˈhɪst(ə)ri/"
  },
  hole: {
    meaning: "洞",
    ipa: "/hoʊl/"
  },
  hope: {
    meaning: "希望",
    ipa: "/hoʊp/"
  },
  hour: {
    meaning: "小时",
    ipa: "/ˈaʊ(ə)r/"
  },
  humour: {
    meaning: "幽默；心情",
    ipa: "/ˈ(h)jumər/"
  },
  ice: {
    meaning: "冰",
    ipa: "/aɪs/"
  },
  idea: {
    meaning: "主意",
    ipa: "/aɪˈdiə/"
  },
  impulse: {
    meaning: "冲动",
    ipa: "/ˈɪmˌpəls/"
  },
  increase: {
    meaning: "增加",
    ipa: "/ɪnˈkris/"
  },
  industry: {
    meaning: "工业",
    ipa: "/ˈɪndəstri/"
  },
  ink: {
    meaning: "墨水",
    ipa: "/ɪŋk/"
  },
  insect: {
    meaning: "昆虫",
    ipa: "/ˈɪnˌsɛk(t)/"
  },
  instrument: {
    meaning: "器械",
    ipa: "/ˈɪn(t)strəmənt/"
  },
  insurance: {
    meaning: "保险"
  },
  interest: {
    meaning: "兴趣",
    ipa: "/ˈɪnt(ə)rəst, ˈɪnˌtrɛst/"
  },
  invention: {
    meaning: "发明物",
    ipa: "/ɪnˈvɛnʃən/"
  },
  iron: {
    meaning: "铁",
    ipa: "/ˈaɪ(ə)rn/"
  },
  jelly: {
    meaning: "果冻",
    ipa: "/ˈdʒɛli/"
  },
  join: {
    meaning: "连接",
    ipa: "/dʒɔɪn/"
  },
  journey: {
    meaning: "旅行",
    ipa: "/ˈdʒərni/"
  },
  judge: {
    meaning: "法官",
    ipa: "/dʒədʒ/"
  },
  jump: {
    meaning: "跳",
    ipa: "/dʒəmp/"
  },
  kick: {
    meaning: "踢",
    ipa: "/kɪk/"
  },
  kiss: {
    meaning: "亲吻",
    ipa: "/kɪs/"
  },
  knowledge: {
    meaning: "知识",
    ipa: "/ˈnɑlədʒ/"
  },
  land: {
    meaning: "陆地",
    ipa: "/lænd/"
  },
  language: {
    meaning: "语言",
    ipa: "/ˈlæŋɡwɪdʒ/"
  },
  laugh: {
    meaning: "笑",
    ipa: "/læf/"
  },
  law: {
    meaning: "法律",
    ipa: "/lɔ/"
  },
  lead: {
    meaning: "牵领",
    ipa: "/lid/"
  },
  learning: {
    meaning: "学问",
    ipa: "/ˈlərnɪŋ/"
  },
  leather: {
    meaning: "皮革",
    ipa: "/ˈlɛðər/"
  },
  letter: {
    meaning: "信",
    ipa: "/ˈlɛdər/"
  },
  level: {
    meaning: "水平的",
    ipa: "/ˈlɛv(ə)l/"
  },
  lift: {
    meaning: "拿起",
    ipa: "/lɪft/"
  },
  light: {
    meaning: "光亮",
    ipa: "/laɪt/"
  },
  limit: {
    meaning: "极限",
    ipa: "/ˈlɪmət/"
  },
  linen: {
    meaning: "亚麻布",
    ipa: "/ˈlɪnən/"
  },
  liquid: {
    meaning: "液体",
    ipa: "/ˈlɪkwəd/"
  },
  list: {
    meaning: "名单",
    ipa: "/lɪst/"
  },
  look: {
    meaning: "看；样子"
  },
  loss: {
    meaning: "损失",
    ipa: "/lɔs, lɑs/"
  },
  love: {
    meaning: "爱",
    ipa: "/ləv/"
  },
  machine: {
    meaning: "机器",
    ipa: "/məˈʃin/"
  },
  man: {
    meaning: "嫚"
  },
  manager: {
    meaning: "经理",
    ipa: "/ˈmænɪdʒər/"
  },
  mark: {
    meaning: "斑点",
    ipa: "/mɑrk/"
  },
  market: {
    meaning: "市场",
    ipa: "/ˈmɑrkət/"
  },
  mass: {
    meaning: "堆",
    ipa: "/mæs/"
  },
  meal: {
    meaning: "一餐",
    ipa: "/mil/"
  },
  measure: {
    meaning: "计量制",
    ipa: "/ˈmɛʒər/"
  },
  meat: {
    meaning: "食用的",
    ipa: "/mit/"
  },
  meeting: {
    meaning: "会议",
    ipa: "/ˈmidɪŋ/"
  },
  memory: {
    meaning: "记忆力",
    ipa: "/ˈmɛm(ə)ri/"
  },
  metal: {
    meaning: "金属",
    ipa: "/ˈmɛd(ə)l/"
  },
  middle: {
    meaning: "中间",
    ipa: "/ˈmɪd(ə)l/"
  },
  milk: {
    meaning: "奶",
    ipa: "/mɪlk/"
  },
  mind: {
    meaning: "头脑",
    ipa: "/maɪnd/"
  },
  mine: {
    meaning: "我的",
    ipa: "/maɪn/"
  },
  minute: {
    meaning: "分",
    ipa: "/ˈmɪnət/"
  },
  mist: {
    meaning: "薄雾",
    ipa: "/mɪst/"
  },
  money: {
    meaning: "钱",
    ipa: "/ˈməni/"
  },
  month: {
    meaning: "月",
    ipa: "/mən(t)θ/"
  },
  morning: {
    meaning: "上午",
    ipa: "/ˈmɔrnɪŋ/"
  },
  mother: {
    meaning: "母亲",
    ipa: "/ˈməðər/"
  },
  motion: {
    meaning: "运动",
    ipa: "/ˈmoʊʃən/"
  },
  mountain: {
    meaning: "山",
    ipa: "/ˈmaʊnt(ə)n/"
  },
  move: {
    meaning: "移动；行动"
  },
  music: {
    meaning: "音乐",
    ipa: "/ˈmjuzɪk/"
  },
  name: {
    meaning: "代"
  },
  nation: {
    meaning: "国家",
    ipa: "/ˈneɪʃən/"
  },
  need: {
    meaning: "必须",
    ipa: "/nid/"
  },
  news: {
    meaning: "消息",
    ipa: "/nuz/"
  },
  night: {
    meaning: "夜晚",
    ipa: "/naɪt/"
  },
  noise: {
    meaning: "声音",
    ipa: "/nɔɪz/"
  },
  note: {
    meaning: "笔记",
    ipa: "/noʊt/"
  },
  number: {
    meaning: "数字",
    ipa: "/ˈnəmbər/"
  },
  observation: {
    meaning: "观测",
    ipa: "/ˌɑbzərˈveɪʃən/"
  },
  offer: {
    meaning: "提出",
    ipa: "/ˈɔfər, ˈɑfər/"
  },
  oil: {
    meaning: "石油",
    ipa: "/ɔɪl/"
  },
  operation: {
    meaning: "运行",
    ipa: "/ˌɑpəˈreɪʃən/"
  },
  opinion: {
    meaning: "看法",
    ipa: "/əˈpɪnj(ə)n/"
  },
  order: {
    meaning: "条理",
    ipa: "/ˈɔrdər/"
  },
  organization: {
    meaning: "机构",
    ipa: "/ˌɔrɡənəˈzeɪʃən, ˌɔrɡəˌnaɪˈzeɪʃən/"
  },
  ornament: {
    meaning: "装饰",
    ipa: "/ˈɔrnəm(ə)nt/"
  },
  owner: {
    meaning: "物主",
    ipa: "/ˈoʊnər/"
  },
  page: {
    meaning: "页",
    ipa: "/peɪdʒ/"
  },
  pain: {
    meaning: "痛苦",
    ipa: "/peɪn/"
  },
  paint: {
    meaning: "油漆",
    ipa: "/peɪnt/"
  },
  paper: {
    meaning: "纸",
    ipa: "/ˈpeɪpər/"
  },
  part: {
    meaning: "部分",
    ipa: "/pɑrt/"
  },
  paste: {
    meaning: "面团",
    ipa: "/peɪst/"
  },
  payment: {
    meaning: "付款",
    ipa: "/ˈpeɪm(ə)nt/"
  },
  peace: {
    meaning: "和平",
    ipa: "/pis/"
  },
  person: {
    meaning: "人",
    ipa: "/ˈpərs(ə)n/"
  },
  place: {
    meaning: "地方；放置"
  },
  plant: {
    meaning: "植物",
    ipa: "/plænt/"
  },
  play: {
    meaning: "玩；戏剧"
  },
  pleasure: {
    meaning: "快乐",
    ipa: "/ˈplɛʒər/"
  },
  point: {
    meaning: "尖",
    ipa: "/pɔɪnt/"
  },
  poison: {
    meaning: "毒物",
    ipa: "/ˈpɔɪzn/"
  },
  polish: {
    meaning: "上光剂",
    ipa: "/ˈpɑlɪʃ/"
  },
  porter: {
    meaning: "行李员",
    ipa: "/ˈpɔrdər/"
  },
  position: {
    meaning: "位置",
    ipa: "/pəˈzɪʃən/"
  },
  powder: {
    meaning: "粉末",
    ipa: "/ˈpaʊdər/"
  },
  power: {
    meaning: "控制力",
    ipa: "/ˈpaʊ(ə)r/"
  },
  price: {
    meaning: "价格",
    ipa: "/praɪs/"
  },
  print: {
    meaning: "字体",
    ipa: "/prɪnt/"
  },
  process: {
    meaning: "过程",
    ipa: "/ˈprɑˌsɛs/"
  },
  produce: {
    meaning: "生产",
    ipa: "/prəˈdus/"
  },
  profit: {
    meaning: "利润",
    ipa: "/ˈprɑfət/"
  },
  property: {
    meaning: "财产",
    ipa: "/ˈprɑpərdi/"
  },
  prose: {
    meaning: "散文",
    ipa: "/proʊz/"
  },
  protest: {
    meaning: "抗议",
    ipa: "/ˈproʊˌtɛst/"
  },
  pull: {
    meaning: "拉"
  },
  punishment: {
    meaning: "惩罚",
    ipa: "/ˈpənɪʃm(ə)nt/"
  },
  purpose: {
    meaning: "目的",
    ipa: "/ˈpərpəs/"
  },
  push: {
    meaning: "推"
  },
  quality: {
    meaning: "质量",
    ipa: "/ˈkwɑlədi/"
  },
  question: {
    meaning: "问题",
    ipa: "/ˈkwɛstʃ(ə)n/"
  },
  rain: {
    meaning: "雨",
    ipa: "/reɪn/"
  },
  range: {
    meaning: "种类",
    ipa: "/reɪndʒ/"
  },
  rate: {
    meaning: "速度",
    ipa: "/reɪt/"
  },
  ray: {
    meaning: "光线",
    ipa: "/reɪ/"
  },
  reaction: {
    meaning: "反应",
    ipa: "/riˈækʃən/"
  },
  reading: {
    meaning: "阅读",
    ipa: "/ˈridɪŋ/"
  },
  reason: {
    meaning: "原因",
    ipa: "/ˈriz(ə)n/"
  },
  record: {
    meaning: "记录",
    ipa: "/ˈrɛkərd/"
  },
  regret: {
    meaning: "说来很遗憾",
    ipa: "/rəˈɡrɛt/"
  },
  relation: {
    meaning: "关系",
    ipa: "/rəˈleɪʃən/"
  },
  religion: {
    meaning: "宗教信仰",
    ipa: "/rəˈlɪdʒ(ə)n/"
  },
  representative: {
    meaning: "典型的",
    ipa: "/ˌrɛprəˈzɛn(t)ədɪv/"
  },
  request: {
    meaning: "要求",
    ipa: "/rəˈkwɛst/"
  },
  respect: {
    meaning: "尊敬",
    ipa: "/rəˈspɛk(t)/"
  },
  rest: {
    meaning: "休息",
    ipa: "/rɛst/"
  },
  reward: {
    meaning: "报偿",
    ipa: "/rəˈwɔrd/"
  },
  rhythm: {
    meaning: "节奏",
    ipa: "/ˈrɪðəm/"
  },
  rice: {
    meaning: "水稻",
    ipa: "/raɪs/"
  },
  river: {
    meaning: "河流",
    ipa: "/ˈrɪvər/"
  },
  road: {
    meaning: "道路",
    ipa: "/roʊd/"
  },
  roll: {
    meaning: "滚动；卷"
  },
  room: {
    meaning: "房间"
  },
  rub: {
    meaning: "按摩",
    ipa: "/rəb/"
  },
  rule: {
    meaning: "规则",
    ipa: "/rul/"
  },
  run: {
    meaning: "瞤"
  },
  salt: {
    meaning: "食盐"
  },
  sand: {
    meaning: "沙",
    ipa: "/sænd/"
  },
  scale: {
    meaning: "等级",
    ipa: "/skeɪl/"
  },
  science: {
    meaning: "科学",
    ipa: "/ˈsaɪən(t)s/"
  },
  sea: {
    meaning: "海",
    ipa: "/si/"
  },
  seat: {
    meaning: "椅子",
    ipa: "/sit/"
  },
  secretary: {
    meaning: "秘书"
  },
  selection: {
    meaning: "挑选",
    ipa: "/səˈlɛkʃən/"
  },
  self: {
    meaning: "自我",
    ipa: "/sɛlf/"
  },
  sense: {
    meaning: "感官",
    ipa: "/sɛn(t)s/"
  },
  servant: {
    meaning: "用人",
    ipa: "/ˈsərvənt/"
  },
  sex: {
    meaning: "性别",
    ipa: "/sɛks/"
  },
  shade: {
    meaning: "阴影",
    ipa: "/ʃeɪd/"
  },
  shake: {
    meaning: "抖动",
    ipa: "/ʃeɪk/"
  },
  shame: {
    meaning: "羞愧感",
    ipa: "/ʃeɪm/"
  },
  shock: {
    meaning: "震惊",
    ipa: "/ʃɑk/"
  },
  side: {
    meaning: "私德"
  },
  sign: {
    meaning: "符号",
    ipa: "/saɪn/"
  },
  silk: {
    meaning: "丝",
    ipa: "/sɪlk/"
  },
  silver: {
    meaning: "银",
    ipa: "/ˈsɪlvər/"
  },
  sister: {
    meaning: "姐姐",
    ipa: "/ˈsɪstər/"
  },
  size: {
    meaning: "四则"
  },
  sky: {
    meaning: "天空",
    ipa: "/skaɪ/"
  },
  sleep: {
    meaning: "睡着",
    ipa: "/slip/"
  },
  slip: {
    meaning: "滑倒；纸条"
  },
  slope: {
    meaning: "倾斜",
    ipa: "/sloʊp/"
  },
  smash: {
    meaning: "击碎",
    ipa: "/smæʃ/"
  },
  smell: {
    meaning: "气味",
    ipa: "/smɛl/"
  },
  smile: {
    meaning: "微笑",
    ipa: "/smaɪl/"
  },
  smoke: {
    meaning: "烟",
    ipa: "/smoʊk/"
  },
  sneeze: {
    meaning: "打喷嚏",
    ipa: "/sniz/"
  },
  snow: {
    meaning: "雪",
    ipa: "/snoʊ/"
  },
  soap: {
    meaning: "肥皂",
    ipa: "/soʊp/"
  },
  society: {
    meaning: "社会",
    ipa: "/səˈsaɪədi/"
  },
  son: {
    meaning: "儿子",
    ipa: "/sən/"
  },
  song: {
    meaning: "忪"
  },
  sort: {
    meaning: "种类",
    ipa: "/sɔrt/"
  },
  sound: {
    meaning: "声响",
    ipa: "/saʊnd/"
  },
  soup: {
    meaning: "汤",
    ipa: "/sup/"
  },
  space: {
    meaning: "空间",
    ipa: "/speɪs/"
  },
  stage: {
    meaning: "舞台",
    ipa: "/steɪdʒ/"
  },
  start: {
    meaning: "开始"
  },
  statement: {
    meaning: "声明",
    ipa: "/ˈsteɪtmənt/"
  },
  steam: {
    meaning: "水蒸气",
    ipa: "/stim/"
  },
  steel: {
    meaning: "钢",
    ipa: "/stil/"
  },
  step: {
    meaning: "迈步",
    ipa: "/stɛp/"
  },
  stitch: {
    meaning: "一针",
    ipa: "/stɪtʃ/"
  },
  stone: {
    meaning: "石块",
    ipa: "/stoʊn/"
  },
  stop: {
    meaning: "停住",
    ipa: "/stɑp/"
  },
  story: {
    meaning: "故事",
    ipa: "/ˈstɔri/"
  },
  stretch: {
    meaning: "伸展；一段"
  },
  structure: {
    meaning: "结构",
    ipa: "/ˈstrək(t)ʃər/"
  },
  substance: {
    meaning: "东西",
    ipa: "/ˈsəbstən(t)s/"
  },
  sugar: {
    meaning: "糖",
    ipa: "/ˈʃʊɡər/"
  },
  suggestion: {
    meaning: "建议",
    ipa: "/səˈdʒɛstʃən, səɡˈdʒɛstʃən/"
  },
  summer: {
    meaning: "夏天",
    ipa: "/ˈsəmər/"
  },
  support: {
    meaning: "支持",
    ipa: "/səˈpɔrt/"
  },
  surprise: {
    meaning: "肯定会大吃一惊",
    ipa: "/sə(r)ˈpraɪz/"
  },
  swim: {
    meaning: "游泳",
    ipa: "/swɪm/"
  },
  system: {
    meaning: "制度",
    ipa: "/ˈsɪstəm/"
  },
  talk: {
    meaning: "谈话",
    ipa: "/tɔk/"
  },
  taste: {
    meaning: "味道",
    ipa: "/teɪst/"
  },
  tax: {
    meaning: "税",
    ipa: "/tæks/"
  },
  teaching: {
    meaning: "教学",
    ipa: "/ˈtitʃɪŋ/"
  },
  tendency: {
    meaning: "倾向",
    ipa: "/ˈtɛnd(ə)n(t)si/"
  },
  test: {
    meaning: "试验",
    ipa: "/tɛst/"
  },
  theory: {
    meaning: "学说",
    ipa: "/ˈθɪri/"
  },
  thing: {
    meaning: "东西",
    ipa: "/θɪŋ/"
  },
  thought: {
    meaning: "思考",
    ipa: "/θɔt/"
  },
  thunder: {
    meaning: "雷声",
    ipa: "/ˈθəndər/"
  },
  time: {
    meaning: "时间",
    ipa: "/taɪm/"
  },
  tin: {
    meaning: "锡",
    ipa: "/tɪn/"
  },
  top: {
    meaning: "顶",
    ipa: "/tɑp/"
  },
  touch: {
    meaning: "触碰",
    ipa: "/tətʃ/"
  },
  trade: {
    meaning: "贸易",
    ipa: "/treɪd/"
  },
  transport: {
    meaning: "运输",
    ipa: "/ˈtræn(t)sˌpɔrt/"
  },
  trick: {
    meaning: "诡计",
    ipa: "/trɪk/"
  },
  trouble: {
    meaning: "问题",
    ipa: "/ˈtrəb(ə)l/"
  },
  turn: {
    meaning: "转动；轮次"
  },
  twist: {
    meaning: "转动",
    ipa: "/twɪst/"
  },
  unit: {
    meaning: "单元",
    ipa: "/ˈjunət/"
  },
  use: {
    meaning: "使用",
    ipa: "/jus/"
  },
  value: {
    meaning: "价值",
    ipa: "/ˈvælju/"
  },
  verse: {
    meaning: "诗",
    ipa: "/vərs/"
  },
  vessel: {
    meaning: "船",
    ipa: "/ˈvɛs(ə)l/"
  },
  view: {
    meaning: "观点",
    ipa: "/vju/"
  },
  voice: {
    meaning: "说话声",
    ipa: "/vɔɪs/"
  },
  walk: {
    meaning: "走",
    ipa: "/wɔk/"
  },
  war: {
    meaning: "战争",
    ipa: "/wɔr/"
  },
  wash: {
    meaning: "给…洗澡",
    ipa: "/wɔʃ, wɑʃ/"
  },
  waste: {
    meaning: "浪费",
    ipa: "/weɪst/"
  },
  water: {
    meaning: "水",
    ipa: "/ˈwɔdər, ˈwɑdər/"
  },
  wave: {
    meaning: "波浪",
    ipa: "/weɪv/"
  },
  wax: {
    meaning: "蜂蜡",
    ipa: "/wæks/"
  },
  way: {
    meaning: "方式；道路"
  },
  weather: {
    meaning: "天气",
    ipa: "/ˈwɛðər/"
  },
  week: {
    meaning: "星期",
    ipa: "/wik/"
  },
  weight: {
    meaning: "体重",
    ipa: "/weɪt/"
  },
  wind: {
    meaning: "风",
    ipa: "/wɪnd/"
  },
  wine: {
    meaning: "葡萄酒",
    ipa: "/waɪn/"
  },
  winter: {
    meaning: "冬天",
    ipa: "/ˈwɪn(t)ər/"
  },
  woman: {
    meaning: "成年女子",
    ipa: "/ˈwʊmən/"
  },
  wood: {
    meaning: "木头",
    ipa: "/wʊd/"
  },
  wool: {
    meaning: "羊毛",
    ipa: "/wʊl/"
  },
  word: {
    meaning: "单词",
    ipa: "/wərd/"
  },
  work: {
    meaning: "工作；作品"
  },
  wound: {
    meaning: "伤",
    ipa: "/wund/"
  },
  writing: {
    meaning: "书写",
    ipa: "/ˈraɪdɪŋ/"
  },
  year: {
    meaning: "年"
  },
  angle: {
    meaning: "角",
    ipa: "/ˈæŋɡ(ə)l/"
  },
  ant: {
    meaning: "蚂蚁",
    ipa: "/ænt/"
  },
  apple: {
    meaning: "苹果",
    ipa: "/ˈæp(ə)l/"
  },
  arch: {
    meaning: "拱",
    ipa: "/ɑrtʃ/"
  },
  arm: {
    meaning: "臂",
    ipa: "/ɑrm/"
  },
  army: {
    meaning: "陆军",
    ipa: "/ˈɑrmi/"
  },
  baby: {
    meaning: "婴儿",
    ipa: "/ˈbeɪbi/"
  },
  bag: {
    meaning: "袋",
    ipa: "/bæɡ/"
  },
  ball: {
    meaning: "球",
    ipa: "/bɔl/"
  },
  band: {
    meaning: "乐队",
    ipa: "/bænd/"
  },
  basin: {
    meaning: "调菜盆",
    ipa: "/ˈbeɪsn/"
  },
  basket: {
    meaning: "篮",
    ipa: "/ˈbæskət/"
  },
  bath: {
    meaning: "洗澡",
    ipa: "/bæθ/"
  },
  bed: {
    meaning: "床",
    ipa: "/bɛd/"
  },
  bee: {
    meaning: "蜜蜂",
    ipa: "/bi/"
  },
  bell: {
    meaning: "铃",
    ipa: "/bɛl/"
  },
  berry: {
    meaning: "浆果",
    ipa: "/ˈbɛri/"
  },
  bird: {
    meaning: "鸟",
    ipa: "/bərd/"
  },
  blade: {
    meaning: "锋刃",
    ipa: "/bleɪd/"
  },
  board: {
    meaning: "木板",
    ipa: "/bɔrd/"
  },
  boat: {
    meaning: "小船",
    ipa: "/boʊt/"
  },
  bone: {
    meaning: "骨头",
    ipa: "/boʊn/"
  },
  book: {
    meaning: "书",
    ipa: "/bʊk/"
  },
  boot: {
    meaning: "靴子",
    ipa: "/but/"
  },
  bottle: {
    meaning: "瓶",
    ipa: "/ˈbɑd(ə)l/"
  },
  box: {
    meaning: "箱",
    ipa: "/bɑks/"
  },
  boy: {
    meaning: "男孩",
    ipa: "/bɔɪ/"
  },
  brain: {
    meaning: "脑",
    ipa: "/breɪn/"
  },
  brake: {
    meaning: "刹车",
    ipa: "/breɪk/"
  },
  branch: {
    meaning: "树枝",
    ipa: "/bræn(t)ʃ/"
  },
  brick: {
    meaning: "砖",
    ipa: "/brɪk/"
  },
  bridge: {
    meaning: "桥梁",
    ipa: "/brɪdʒ/"
  },
  brush: {
    meaning: "刷子",
    ipa: "/brəʃ/"
  },
  bucket: {
    meaning: "桶",
    ipa: "/ˈbəkət/"
  },
  bulb: {
    meaning: "电灯泡",
    ipa: "/bəlb/"
  },
  button: {
    meaning: "纽扣",
    ipa: "/ˈbətn/"
  },
  cake: {
    meaning: "蛋糕",
    ipa: "/keɪk/"
  },
  camera: {
    meaning: "照相机",
    ipa: "/ˈkæm(ə)rə/"
  },
  card: {
    meaning: "卡片纸",
    ipa: "/kɑrd/"
  },
  cart: {
    meaning: "大车",
    ipa: "/kɑrt/"
  },
  carriage: {
    meaning: "四轮马车",
    ipa: "/ˈkɛrɪdʒ/"
  },
  cat: {
    meaning: "猫",
    ipa: "/kæt/"
  },
  chain: {
    meaning: "链条",
    ipa: "/tʃeɪn/"
  },
  cheese: {
    meaning: "奶酪",
    ipa: "/tʃiz/"
  },
  chest: {
    meaning: "胸膛",
    ipa: "/tʃɛst/"
  },
  chin: {
    meaning: "下巴",
    ipa: "/tʃɪn/"
  },
  church: {
    meaning: "教堂",
    ipa: "/tʃərtʃ/"
  },
  circle: {
    meaning: "圆",
    ipa: "/ˈsərk(ə)l/"
  },
  clock: {
    meaning: "钟",
    ipa: "/klɑk/"
  },
  cloud: {
    meaning: "云",
    ipa: "/klaʊd/"
  },
  coat: {
    meaning: "外套",
    ipa: "/koʊt/"
  },
  collar: {
    meaning: "领子",
    ipa: "/ˈkɑlər/"
  },
  comb: {
    meaning: "梳子",
    ipa: "/koʊm/"
  },
  cord: {
    meaning: "线绳",
    ipa: "/kɔrd/"
  },
  cow: {
    meaning: "母牛",
    ipa: "/kaʊ/"
  },
  cup: {
    meaning: "杯子",
    ipa: "/kəp/"
  },
  curtain: {
    meaning: "窗帘",
    ipa: "/ˈkərtn/"
  },
  cushion: {
    meaning: "垫子",
    ipa: "/ˈkʊʃən/"
  },
  dog: {
    meaning: "狗",
    ipa: "/dɔɡ/"
  },
  door: {
    meaning: "门",
    ipa: "/dɔr/"
  },
  drain: {
    meaning: "下水道",
    ipa: "/dreɪn/"
  },
  drawer: {
    meaning: "抽屉",
    ipa: "/drɔr/"
  },
  dress: {
    meaning: "连衣裙",
    ipa: "/drɛs/"
  },
  drop: {
    meaning: "掉下",
    ipa: "/drɑp/"
  },
  ear: {
    meaning: "耳朵",
    ipa: "/ɪr/"
  },
  egg: {
    meaning: "蛋",
    ipa: "/ɛɡ/"
  },
  engine: {
    meaning: "发动机",
    ipa: "/ˈɛndʒən/"
  },
  eye: {
    meaning: "眼睛",
    ipa: "/aɪ/"
  },
  face: {
    meaning: "脸",
    ipa: "/feɪs/"
  },
  farm: {
    meaning: "农场",
    ipa: "/fɑrm/"
  },
  feather: {
    meaning: "羽毛",
    ipa: "/ˈfɛðər/"
  },
  finger: {
    meaning: "手指",
    ipa: "/ˈfɪŋɡər/"
  },
  fish: {
    meaning: "鱼",
    ipa: "/fɪʃ/"
  },
  flag: {
    meaning: "旗",
    ipa: "/flæɡ/"
  },
  floor: {
    meaning: "地面",
    ipa: "/flɔr/"
  },
  fly: {
    meaning: "飞",
    ipa: "/flaɪ/"
  },
  foot: {
    meaning: "脚",
    ipa: "/fʊt/"
  },
  fork: {
    meaning: "餐叉",
    ipa: "/fɔrk/"
  },
  fowl: {
    meaning: "家禽",
    ipa: "/faʊl/"
  },
  frame: {
    meaning: "构架",
    ipa: "/freɪm/"
  },
  garden: {
    meaning: "花园",
    ipa: "/ˈɡɑrdən/"
  },
  girl: {
    meaning: "女孩子",
    ipa: "/ɡərl/"
  },
  glove: {
    meaning: "手套",
    ipa: "/ɡləv/"
  },
  goat: {
    meaning: "山羊",
    ipa: "/ɡoʊt/"
  },
  gun: {
    meaning: "衮"
  },
  hair: {
    meaning: "头发",
    ipa: "/hɛr/"
  },
  hammer: {
    meaning: "锤子",
    ipa: "/ˈhæmər/"
  },
  hand: {
    meaning: "手"
  },
  hat: {
    meaning: "帽子",
    ipa: "/hæt/"
  },
  head: {
    meaning: "头",
    ipa: "/hɛd/"
  },
  heart: {
    meaning: "心脏",
    ipa: "/hɑrt/"
  },
  hook: {
    meaning: "挂钩",
    ipa: "/hʊk/"
  },
  horn: {
    meaning: "角",
    ipa: "/hɔrn/"
  },
  horse: {
    meaning: "马",
    ipa: "/hɔrs/"
  },
  hospital: {
    meaning: "医院",
    ipa: "/ˈhɑˌspɪd(ə)l/"
  },
  house: {
    meaning: "房子",
    ipa: "/haʊs/"
  },
  island: {
    meaning: "岛屿",
    ipa: "/ˈaɪlənd/"
  },
  jewel: {
    meaning: "宝石",
    ipa: "/ˈdʒu(ə)l/"
  },
  kettle: {
    meaning: "水壶",
    ipa: "/ˈkɛd(ə)l/"
  },
  key: {
    meaning: "钥匙",
    ipa: "/ki/"
  },
  knee: {
    meaning: "膝关节",
    ipa: "/ni/"
  },
  knife: {
    meaning: "刀",
    ipa: "/naɪf/"
  },
  knot: {
    meaning: "结",
    ipa: "/nɑt/"
  },
  leaf: {
    meaning: "叶子",
    ipa: "/lif/"
  },
  leg: {
    meaning: "腿",
    ipa: "/lɛɡ/"
  },
  library: {
    meaning: "图书馆",
    ipa: "/ˈlaɪˌbrɛri/"
  },
  line: {
    meaning: "线；行"
  },
  lip: {
    meaning: "嘴唇",
    ipa: "/lɪp/"
  },
  lock: {
    meaning: "锁",
    ipa: "/lɑk/"
  },
  map: {
    meaning: "地图",
    ipa: "/mæp/"
  },
  match: {
    meaning: "比赛",
    ipa: "/mætʃ/"
  },
  monkey: {
    meaning: "猴子",
    ipa: "/ˈməŋki/"
  },
  moon: {
    meaning: "月球",
    ipa: "/mun/"
  },
  mouth: {
    meaning: "嘴",
    ipa: "/maʊθ/"
  },
  muscle: {
    meaning: "肌肉",
    ipa: "/ˈməs(ə)l/"
  },
  nail: {
    meaning: "钉子",
    ipa: "/neɪl/"
  },
  neck: {
    meaning: "脖子",
    ipa: "/nɛk/"
  },
  needle: {
    meaning: "针",
    ipa: "/ˈnid(ə)l/"
  },
  nerve: {
    meaning: "神经",
    ipa: "/nərv/"
  },
  net: {
    meaning: "网",
    ipa: "/nɛt/"
  },
  nose: {
    meaning: "鼻子",
    ipa: "/noʊz/"
  },
  nut: {
    meaning: "坚果",
    ipa: "/nət/"
  },
  office: {
    meaning: "办公室",
    ipa: "/ˈɔfəs, ˈɑfəs/"
  },
  orange: {
    meaning: "橙子",
    ipa: "/ˈɔr(ə)ndʒ, ˈɑr(ə)ndʒ/"
  },
  oven: {
    meaning: "烤箱",
    ipa: "/ˈəv(ə)n/"
  },
  parcel: {
    meaning: "包裹",
    ipa: "/ˈpɑrs(ə)l/"
  },
  pen: {
    meaning: "喷泉"
  },
  pencil: {
    meaning: "铅笔",
    ipa: "/ˈpɛn(t)s(ə)l/"
  },
  picture: {
    meaning: "图画",
    ipa: "/ˈpɪk(t)ʃər/"
  },
  pig: {
    meaning: "猪",
    ipa: "/pɪɡ/"
  },
  pin: {
    meaning: "拚"
  },
  pipe: {
    meaning: "管子",
    ipa: "/paɪp/"
  },
  plane: {
    meaning: "飞机",
    ipa: "/pleɪn/"
  },
  plate: {
    meaning: "盘子",
    ipa: "/pleɪt/"
  },
  "plough/plow": {
    meaning: "犁；耕地",
    ipa: "/plaʊ/"
  },
  pocket: {
    meaning: "衣袋",
    ipa: "/ˈpɑkət/"
  },
  pot: {
    meaning: "锅",
    ipa: "/pɑt/"
  },
  potato: {
    meaning: "土豆",
    ipa: "/pəˈteɪdoʊ/"
  },
  prison: {
    meaning: "监狱",
    ipa: "/ˈprɪzn/"
  },
  pump: {
    meaning: "泵",
    ipa: "/pəmp/"
  },
  rail: {
    meaning: "栏杆",
    ipa: "/reɪl/"
  },
  rat: {
    meaning: "老鼠",
    ipa: "/ræt/"
  },
  receipt: {
    meaning: "收据",
    ipa: "/rəˈsit/"
  },
  ring: {
    meaning: "戒指",
    ipa: "/rɪŋ/"
  },
  rod: {
    meaning: "杆",
    ipa: "/rɑd/"
  },
  roof: {
    meaning: "屋顶",
    ipa: "/ruf, rʊf/"
  },
  root: {
    meaning: "根",
    ipa: "/rut/"
  },
  sail: {
    meaning: "帆",
    ipa: "/seɪl/"
  },
  school: {
    meaning: "学校",
    ipa: "/skul/"
  },
  scissors: {
    meaning: "剪刀",
    ipa: "/ˈsɪzərz/"
  },
  screw: {
    meaning: "螺丝",
    ipa: "/skru/"
  },
  seed: {
    meaning: "籽",
    ipa: "/sid/"
  },
  sheep: {
    meaning: "羊",
    ipa: "/ʃip/"
  },
  shelf: {
    meaning: "架子",
    ipa: "/ʃɛlf/"
  },
  ship: {
    meaning: "轮船",
    ipa: "/ʃɪp/"
  },
  shirt: {
    meaning: "衬衫",
    ipa: "/ʃərt/"
  },
  shoe: {
    meaning: "鞋",
    ipa: "/ʃu/"
  },
  skin: {
    meaning: "皮肤",
    ipa: "/skɪn/"
  },
  skirt: {
    meaning: "裙子",
    ipa: "/skərt/"
  },
  snake: {
    meaning: "蛇",
    ipa: "/sneɪk/"
  },
  sock: {
    meaning: "短袜",
    ipa: "/sɑk/"
  },
  spade: {
    meaning: "锹",
    ipa: "/speɪd/"
  },
  sponge: {
    meaning: "海绵块",
    ipa: "/spəndʒ/"
  },
  spoon: {
    meaning: "匙",
    ipa: "/spun/"
  },
  spring: {
    meaning: "春天",
    ipa: "/sprɪŋ/"
  },
  square: {
    meaning: "正方形",
    ipa: "/skwɛr/"
  },
  stamp: {
    meaning: "邮票",
    ipa: "/stæmp/"
  },
  star: {
    meaning: "星",
    ipa: "/stɑr/"
  },
  station: {
    meaning: "火车站",
    ipa: "/ˈsteɪʃən/"
  },
  stem: {
    meaning: "梗",
    ipa: "/stɛm/"
  },
  stick: {
    meaning: "枝条",
    ipa: "/stɪk/"
  },
  stocking: {
    meaning: "长筒女袜",
    ipa: "/ˈstɑkɪŋ/"
  },
  stomach: {
    meaning: "胃",
    ipa: "/ˈstəmək/"
  },
  store: {
    meaning: "大型百货商店",
    ipa: "/stɔr/"
  },
  street: {
    meaning: "街道",
    ipa: "/strit/"
  },
  sun: {
    meaning: "孙子"
  },
  table: {
    meaning: "桌子",
    ipa: "/ˈteɪb(ə)l/"
  },
  tail: {
    meaning: "尾",
    ipa: "/teɪl/"
  },
  thread: {
    meaning: "线",
    ipa: "/θrɛd/"
  },
  throat: {
    meaning: "咽喉",
    ipa: "/θroʊt/"
  },
  thumb: {
    meaning: "拇指",
    ipa: "/θəm/"
  },
  ticket: {
    meaning: "票",
    ipa: "/ˈtɪkət/"
  },
  toe: {
    meaning: "脚趾",
    ipa: "/toʊ/"
  },
  tongue: {
    meaning: "舌头",
    ipa: "/təŋ/"
  },
  tooth: {
    meaning: "牙齿",
    ipa: "/tuθ/"
  },
  town: {
    meaning: "城镇",
    ipa: "/taʊn/"
  },
  train: {
    meaning: "火车",
    ipa: "/treɪn/"
  },
  tray: {
    meaning: "托盘",
    ipa: "/treɪ/"
  },
  tree: {
    meaning: "树木",
    ipa: "/tri/"
  },
  trousers: {
    meaning: "裤子",
    ipa: "/ˈtraʊzərz/"
  },
  umbrella: {
    meaning: "伞",
    ipa: "/ˌəmˈbrɛlə/"
  },
  wall: {
    meaning: "墙壁",
    ipa: "/wɔl/"
  },
  watch: {
    meaning: "手表",
    ipa: "/wɑtʃ, wɔtʃ/"
  },
  wheel: {
    meaning: "车轮",
    ipa: "/(h)wil/"
  },
  whip: {
    meaning: "鞭子",
    ipa: "/(h)wɪp/"
  },
  whistle: {
    meaning: "哨声",
    ipa: "/ˈ(h)wɪs(ə)l/"
  },
  window: {
    meaning: "窗",
    ipa: "/ˈwɪndoʊ/"
  },
  wing: {
    meaning: "翅膀",
    ipa: "/wɪŋ/"
  },
  wire: {
    meaning: "金属丝",
    ipa: "/ˈwaɪ(ə)r/"
  },
  worm: {
    meaning: "蠕虫",
    ipa: "/wərm/"
  },
  able: {
    meaning: "能干的",
    ipa: "/ˈeɪb(ə)l/"
  },
  acid: {
    meaning: "酸",
    ipa: "/ˈæsəd/"
  },
  angry: {
    meaning: "发怒的",
    ipa: "/ˈæŋɡri/"
  },
  automatic: {
    meaning: "自动的",
    ipa: "/ˌɔdəˈmædɪk, ˌɑdəˈmædɪk/"
  },
  beautiful: {
    meaning: "美丽的",
    ipa: "/ˈbjudəfəl/"
  },
  black: {
    meaning: "黑色的",
    ipa: "/blæk/"
  },
  boiling: {
    meaning: "达到沸点的",
    ipa: "/ˈbɔɪlɪŋ/"
  },
  bright: {
    meaning: "鲜艳的",
    ipa: "/braɪt/"
  },
  broken: {
    meaning: "破碎的",
    ipa: "/ˈbroʊkən/"
  },
  brown: {
    meaning: "棕色的",
    ipa: "/braʊn/"
  },
  cheap: {
    meaning: "便宜的",
    ipa: "/tʃip/"
  },
  chemical: {
    meaning: "化学制品",
    ipa: "/ˈkɛmək(ə)l/"
  },
  chief: {
    meaning: "部落首领",
    ipa: "/tʃif/"
  },
  clean: {
    meaning: "干净的",
    ipa: "/klin/"
  },
  clear: {
    meaning: "清楚的；清除"
  },
  common: {
    meaning: "常见的",
    ipa: "/ˈkɑmən/"
  },
  complex: {
    meaning: "复杂的",
    ipa: "/ˌkɑmˈplɛks, kəmˈplɛks, ˈkɑmˌplɛks/"
  },
  conscious: {
    meaning: "神志清醒的",
    ipa: "/ˈkɑnʃəs/"
  },
  cut: {
    meaning: "切；割"
  },
  deep: {
    meaning: "深的",
    ipa: "/dip/"
  },
  dependent: {
    meaning: "依靠的",
    ipa: "/dəˈpɛnd(ə)nt/"
  },
  early: {
    meaning: "提早的",
    ipa: "/ˈərli/"
  },
  elastic: {
    meaning: "弹性材料",
    ipa: "/əˈlæstɪk/"
  },
  electric: {
    meaning: "用电的",
    ipa: "/əˈlɛktrɪk/"
  },
  equal: {
    meaning: "相同的",
    ipa: "/ˈikw(ə)l/"
  },
  fat: {
    meaning: "脂肪",
    ipa: "/fæt/"
  },
  fertile: {
    meaning: "肥沃的",
    ipa: "/ˈfərd(ə)l/"
  },
  first: {
    meaning: "第一的",
    ipa: "/fərst/"
  },
  fixed: {
    meaning: "固定的",
    ipa: "/fɪkst/"
  },
  flat: {
    meaning: "水平的",
    ipa: "/flæt/"
  },
  free: {
    meaning: "未受困的",
    ipa: "/fri/"
  },
  frequent: {
    meaning: "惯常的",
    ipa: "/ˈfrikwənt/"
  },
  full: {
    meaning: "装满的",
    ipa: "/fʊl/"
  },
  general: {
    meaning: "普遍的",
    ipa: "/ˈdʒɛn(ə)rəl/"
  },
  good: {
    meaning: "好的"
  },
  great: {
    meaning: "大的",
    ipa: "/ɡreɪt/"
  },
  "grey/gray": {
    meaning: "灰色的",
    ipa: "/ɡreɪ/"
  },
  hanging: {
    meaning: "绞死",
    ipa: "/ˈhæŋɪŋ/"
  },
  happy: {
    meaning: "快乐的",
    ipa: "/ˈhæpi/"
  },
  hard: {
    meaning: "困难的",
    ipa: "/hɑrd/"
  },
  healthy: {
    meaning: "健康的",
    ipa: "/ˈhɛlθi/"
  },
  high: {
    meaning: "高的",
    ipa: "/haɪ/"
  },
  hollow: {
    meaning: "中空的",
    ipa: "/ˈhɑloʊ/"
  },
  important: {
    meaning: "重要的",
    ipa: "/ɪmˈpɔrt(ə)nt/"
  },
  kind: {
    meaning: "种类",
    ipa: "/kaɪnd/"
  },
  like: {
    meaning: "理科"
  },
  living: {
    meaning: "活的",
    ipa: "/ˈlɪvɪŋ/"
  },
  long: {
    meaning: "隆"
  },
  male: {
    meaning: "雄性的",
    ipa: "/meɪl/"
  },
  married: {
    meaning: "已婚的",
    ipa: "/ˈmɛrid/"
  },
  material: {
    meaning: "材料",
    ipa: "/məˈtɪriəl/"
  },
  medical: {
    meaning: "医疗的",
    ipa: "/ˈmɛdək(ə)l/"
  },
  military: {
    meaning: "军事的",
    ipa: "/ˈmɪləˌtɛri/"
  },
  natural: {
    meaning: "正常的",
    ipa: "/ˈnætʃər(ə)l, ˈnætʃr(ə)l/"
  },
  necessary: {
    meaning: "必要的",
    ipa: "/ˈnɛsəˌsɛri/"
  },
  new: {
    meaning: "新的",
    ipa: "/nu/"
  },
  normal: {
    meaning: "通常的",
    ipa: "/ˈnɔrm(ə)l/"
  },
  open: {
    meaning: "打开；开放的"
  },
  parallel: {
    meaning: "平行的",
    ipa: "/ˈpɛrəˌlɛl/"
  },
  past: {
    meaning: "过",
    ipa: "/pæst/"
  },
  physical: {
    meaning: "身体的",
    ipa: "/ˈfɪzək(ə)l/"
  },
  political: {
    meaning: "政治的",
    ipa: "/pəˈlɪdək(ə)l/"
  },
  poor: {
    meaning: "贫穷的"
  },
  possible: {
    meaning: "能做到的",
    ipa: "/ˈpɑsəb(ə)l/"
  },
  present: {
    meaning: "在场的"
  },
  private: {
    meaning: "私人的",
    ipa: "/ˈpraɪvət/"
  },
  probable: {
    meaning: "很可能的",
    ipa: "/ˈprɑbəb(ə)l/"
  },
  quick: {
    meaning: "快的",
    ipa: "/kwɪk/"
  },
  quiet: {
    meaning: "安静的",
    ipa: "/ˈkwaɪət/"
  },
  ready: {
    meaning: "准备好的",
    ipa: "/ˈrɛdi/"
  },
  red: {
    meaning: "红色的",
    ipa: "/rɛd/"
  },
  regular: {
    meaning: "定期的",
    ipa: "/ˈrɛɡ(jə)lər/"
  },
  responsible: {
    meaning: "对主管部门或上级",
    ipa: "/rəˈspɑn(t)səb(ə)l/"
  },
  right: {
    meaning: "右边；正确的"
  },
  round: {
    meaning: "圆的；一轮"
  },
  same: {
    meaning: "同一的",
    ipa: "/seɪm/"
  },
  second: {
    meaning: "第二的",
    ipa: "/ˈsɛkənd/"
  },
  separate: {
    meaning: "分开的",
    ipa: "/ˈsɛp(ə)rət/"
  },
  serious: {
    meaning: "严肃的",
    ipa: "/ˈsɪriəs/"
  },
  sharp: {
    meaning: "尖的",
    ipa: "/ʃɑrp/"
  },
  smooth: {
    meaning: "光滑的",
    ipa: "/smuð/"
  },
  sticky: {
    meaning: "黏糊糊的",
    ipa: "/ˈstɪki/"
  },
  stiff: {
    meaning: "硬的",
    ipa: "/stɪf/"
  },
  straight: {
    meaning: "直的",
    ipa: "/streɪt/"
  },
  strong: {
    meaning: "强壮的",
    ipa: "/strɔŋ/"
  },
  sudden: {
    meaning: "突然的",
    ipa: "/ˈsəd(ə)n/"
  },
  sweet: {
    meaning: "含糖的",
    ipa: "/swit/"
  },
  tall: {
    meaning: "高的",
    ipa: "/tɔl/"
  },
  thick: {
    meaning: "厚的",
    ipa: "/θɪk/"
  },
  tight: {
    meaning: "紧的",
    ipa: "/taɪt/"
  },
  tired: {
    meaning: "疲劳的",
    ipa: "/ˈtaɪ(ə)rd/"
  },
  true: {
    meaning: "真实的",
    ipa: "/tru/"
  },
  violent: {
    meaning: "残暴的",
    ipa: "/ˈvaɪ(ə)lənt/"
  },
  waiting: {
    meaning: "等待",
    ipa: "/ˈweɪdɪŋ/"
  },
  warm: {
    meaning: "温暖的",
    ipa: "/wɔrm/"
  },
  wet: {
    meaning: "湿的",
    ipa: "/wɛt/"
  },
  wide: {
    meaning: "宽阔的",
    ipa: "/waɪd/"
  },
  wise: {
    meaning: "聪明的",
    ipa: "/waɪz/"
  },
  yellow: {
    meaning: "黄色的",
    ipa: "/ˈjɛloʊ/"
  },
  young: {
    meaning: "年轻的",
    ipa: "/jəŋ/"
  },
  awake: {
    meaning: "醒着的",
    ipa: "/əˈweɪk/"
  },
  bad: {
    meaning: "不愉快的",
    ipa: "/bæd/"
  },
  bent: {
    meaning: "弯曲的",
    ipa: "/bɛnt/"
  },
  bitter: {
    meaning: "味苦的",
    ipa: "/ˈbɪdər/"
  },
  blue: {
    meaning: "蓝色的",
    ipa: "/blu/"
  },
  certain: {
    meaning: "确定的",
    ipa: "/ˈsərtn/"
  },
  cold: {
    meaning: "寒冷的",
    ipa: "/koʊld/"
  },
  complete: {
    meaning: "全部的",
    ipa: "/kəmˈplit/"
  },
  cruel: {
    meaning: "残忍的"
  },
  dark: {
    meaning: "黑暗的",
    ipa: "/dɑrk/"
  },
  dead: {
    meaning: "死的",
    ipa: "/dɛd/"
  },
  dear: {
    meaning: "珍爱的",
    ipa: "/dɪr/"
  },
  delicate: {
    meaning: "精美的",
    ipa: "/ˈdɛləkət/"
  },
  different: {
    meaning: "不同的",
    ipa: "/ˈdɪf(ə)rənt/"
  },
  dirty: {
    meaning: "肮脏的",
    ipa: "/ˈdərdi/"
  },
  dry: {
    meaning: "干的",
    ipa: "/draɪ/"
  },
  false: {
    meaning: "错误的"
  },
  feeble: {
    meaning: "虚弱的",
    ipa: "/ˈfib(ə)l/"
  },
  female: {
    meaning: "女性的",
    ipa: "/ˈfiˌmeɪl/"
  },
  foolish: {
    meaning: "愚蠢的",
    ipa: "/ˈfulɪʃ/"
  },
  future: {
    meaning: "将来",
    ipa: "/ˈfjutʃər/"
  },
  green: {
    meaning: "绿色的",
    ipa: "/ɡrin/"
  },
  ill: {
    meaning: "有病的",
    ipa: "/ɪl/"
  },
  last: {
    meaning: "最后的",
    ipa: "/læst/"
  },
  late: {
    meaning: "晚的",
    ipa: "/leɪt/"
  },
  left: {
    meaning: "左边；剩下的",
    ipa: "/lɛft/"
  },
  loose: {
    meaning: "松动的",
    ipa: "/lus/"
  },
  loud: {
    meaning: "声音巨大的",
    ipa: "/laʊd/"
  },
  low: {
    meaning: "低的",
    ipa: "/loʊ/"
  },
  mixed: {
    meaning: "混杂的",
    ipa: "/mɪkst/"
  },
  narrow: {
    meaning: "狭窄的",
    ipa: "/ˈnɛroʊ/"
  },
  old: {
    meaning: "老的",
    ipa: "/oʊld/"
  },
  opposite: {
    meaning: "对立面",
    ipa: "/ˈɑpəzət/"
  },
  public: {
    meaning: "公众的",
    ipa: "/ˈpəblɪk/"
  },
  rough: {
    meaning: "粗糙的",
    ipa: "/rəf/"
  },
  sad: {
    meaning: "悲伤的",
    ipa: "/sæd/"
  },
  safe: {
    meaning: "平安的",
    ipa: "/seɪf/"
  },
  secret: {
    meaning: "秘密",
    ipa: "/ˈsikrət/"
  },
  short: {
    meaning: "短的",
    ipa: "/ʃɔrt/"
  },
  shut: {
    meaning: "关上",
    ipa: "/ʃət/"
  },
  simple: {
    meaning: "简单的",
    ipa: "/ˈsɪmpəl/"
  },
  slow: {
    meaning: "耗时的",
    ipa: "/sloʊ/"
  },
  small: {
    meaning: "小的",
    ipa: "/smɔl/"
  },
  soft: {
    meaning: "软的",
    ipa: "/sɔft/"
  },
  solid: {
    meaning: "固体的",
    ipa: "/ˈsɑləd/"
  },
  special: {
    meaning: "特别的",
    ipa: "/ˈspɛʃ(ə)l/"
  },
  strange: {
    meaning: "奇怪的",
    ipa: "/streɪndʒ/"
  },
  thin: {
    meaning: "瘦的",
    ipa: "/θɪn/"
  },
  white: {
    meaning: "白的",
    ipa: "/(h)waɪt/"
  },
  wrong: {
    meaning: "错的",
    ipa: "/rɔŋ/"
  }
};
const AUDIO_URLS: Record<string, string> = {
  come: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/C/I3IEAM4U2BUG.mp3",
  get: "https://www.oxforddictionaries.com/media/english/uk_pron/g/get/get__/get__gb_1.mp3",
  give: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/G/9A62CU7Y6X6H.mp3",
  go: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukg/ukglu/ukglutt024.mp3",
  keep: "https://dictionary.cambridge.org/us/media/english/us_pron/k/kee/keep_/keep.mp3",
  let: "https://static.sfdict.com/staticrep/dictaudio/L01/L0198100.mp3",
  make: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/M/18Q4XVC0CQE3J.mp3",
  put: "https://static.sfdict.com/staticrep/dictaudio/P09/P0951000.mp3",
  seem: "https://dictionary.cambridge.org/us/media/english/us_pron/s/sea/seam_/seam.mp3",
  take: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/T/3SKAW0QHEFVZ.mp3",
  be: "https://img2.tfd.com/pron/mp3/en/UK/df/dfdhdshf.mp3",
  do: "https://img2.tfd.com/pron/mp3/en/UK/dn/dndfskhf.mp3",
  have: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukh/ukhav/ukhave_001.mp3",
  say: "https://img2.tfd.com/pron/mp3/en/US/st/stsgdhs5hs.mp3",
  see: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/S/YM9EG3EGFDC6.mp3",
  send: "https://static.sfdict.com/staticrep/dictaudio/S03/S0331700.mp3",
  may: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/M/14K8WPIKNTFHH.mp3",
  will: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukw/ukwil/ukwildl007.mp3",
  about: "https://www.oxforddictionaries.com/media/english/uk_pron/a/abo/about/about__gb_1.mp3",
  across: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/A/1I9I68MXC4GON.mp3",
  after: "https://static.sfdict.com/staticrep/dictaudio/A01/A0194500.mp3",
  at: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uka/ukasu/ukasund007.mp3",
  before: "https://static.sfdict.com/staticrep/dictaudio/B02/B0205800.mp3",
  between: "https://www.oxforddictionaries.com/media/english/uk_pron/b/bet/betwe/between__gb_1.mp3",
  by: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/B/VKWQI0EDXY2E.mp3",
  down: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukd/ukdou/ukdoubl024.mp3",
  in: "https://static.sfdict.com/staticrep/dictaudio/I00/I0090800.mp3",
  off: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/O/H1O577H7F02B.mp3",
  on: "https://www.onelook.com/pronounce/macmillan/US/on-American-English-pronunciation_32524.mp3",
  over: "https://dictionary.cambridge.org/us/media/english/uk_pron/e/epd/epd32/epd32598.mp3",
  through: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukt/uktho/ukthoug016.mp3",
  under: "https://www.yourdictionary.com/audio/u/un/under.mp3",
  up: "https://dictionary.cambridge.org/us/media/english/us_pron/u/up_/up___/up.mp3",
  as: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uka/ukart/ukartic029.mp3",
  till: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukt/uktig/uktight008.mp3",
  a: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/A/1MTCI9SHYT4WQ.mp3",
  all: "https://static.sfdict.com/staticrep/dictaudio/A03/A0316000.mp3",
  any: "https://www.oxforddictionaries.com/media/english/uk_pron/a/any/any__/any__gb_1.mp3",
  every: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uke/ukeve/ukeve__018.mp3",
  little: "https://www.oxforddictionaries.com/media/english/uk_pron/l/lit/littl/little__gb_1.mp3",
  much: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/M/U4IWFJD60QM3.mp3",
  no: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukk/ukkno/ukknock008.mp3",
  other: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uko/ukosc/ukoscil021.mp3",
  some: "https://www.oxforddictionaries.com/media/english/uk_pron/s/som/some_/some__gb_1.mp3",
  such: "https://www.oxforddictionaries.com/media/english/uk_pron/s/suc/such_/such__gb_1.mp3",
  I: "https://www.yourdictionary.com/audio/i/i/i.mp3",
  he: "https://www.onelook.com/pronounce/macmillan/US/he-American-English-pronunciation.mp3",
  who: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukw/ukwhi/ukwhisk029.mp3",
  but: "https://www.yourdictionary.com/audio/b/bu/but.mp3",
  or: "https://dictionary.cambridge.org/us/media/english/us_pron/e/eus/eus75/eus75267.mp3",
  though: "https://static.sfdict.com/staticrep/dictaudio/T02/T0253200.mp3",
  while: "https://static.sfdict.com/staticrep/dictaudio/NEW/NEW16115.mp3",
  why: "https://www.oxforddictionaries.com/media/english/uk_pron/w/why/why__/why__gb_1.mp3",
  again: "https://www.yourdictionary.com/audio/a/ag/again.mp3",
  ever: "https://www.oxforddictionaries.com/media/english/uk_pron/e/eve/ever_/ever__gb_1.mp3",
  far: "https://static.sfdict.com/staticrep/dictaudio/F00/F0037700.mp3",
  forward: "https://www.yourdictionary.com/audio/f/fo/forward.mp3",
  here: "https://www.onelook.com/pronounce/macmillan/UK/here-British-English-pronunciation.mp3",
  near: "https://img2.tfd.com/pron/mp3/en/US/sj/sjdndsdgsdht.mp3",
  now: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukn/uknot/uknotif030.mp3",
  out: "https://static.sfdict.com/staticrep/dictaudio/O02/O0211500.mp3",
  still: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uks/uksti/ukstick020.mp3",
  then: "https://www.onelook.com/pronounce/macmillan/UK/then-British-English-pronunciation.mp3",
  there: "https://www.onelook.com/pronounce/macmillan/US/there-American-English-pronunciation_44979.mp3",
  together: "https://img2.tfd.com/pron/mp3/en/US/sj/sjsfskdodtstd3d5sogk.mp3",
  well: "https://www.yourdictionary.com/audio/w/we/well.mp3",
  almost: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/A/1LCTI3VECO1GI.mp3",
  enough: "https://www.onelook.com/pronounce/macmillan/UK/enough-British-English-pronunciation.mp3",
  even: "https://img2.tfd.com/pron/mp3/en/US/d3/d3ddsydysjht.mp3",
  not: "https://static.sfdict.com/staticrep/dictaudio/N02/N0232300.mp3",
  only: "https://www.oxforddictionaries.com/media/english/uk_pron/o/onl/only_/only__gb_1.mp3",
  quite: "https://www.onelook.com/pronounce/macmillan/US/quite-American-English-pronunciation.mp3",
  so: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/S/JZGA81E0FWYU.mp3",
  very: "https://static.sfdict.com/staticrep/dictaudio/V00/V0098600.mp3",
  tomorrow: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/T/MEO4N9V9IMAI.mp3",
  yesterday: "https://static.sfdict.com/staticrep/dictaudio/Y00/Y0028800.mp3",
  north: "https://www.yourdictionary.com/audio/n/no/north.mp3",
  south: "https://img2.tfd.com/pron/mp3/en/UK/dy/dysgsksysyd7hr.mp3",
  east: "https://dictionary.cambridge.org/us/media/english/us_pron/e/eas/east_/east.mp3",
  west: "https://www.oxforddictionaries.com/media/english/uk_pron/w/wes/west_/west__gb_1.mp3",
  please: "https://www.oxforddictionaries.com/media/english/uk_pron/p/ple/pleas/please__gb_1.mp3",
  yes: "https://www.onelook.com/pronounce/macmillan/US/yes-American-English-pronunciation.mp3",
  account: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/A/1AAN2OO81DFDA.mp3",
  act: "https://dictionary.cambridge.org/us/media/english/us_pron/a/act/act__/act.mp3",
  addition: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/A/1GAYC9S0Z6T9B.mp3",
  adjustment: "https://www.oxforddictionaries.com/media/english/uk_pron/a/adj/adjus/adjustment__gb_1.mp3",
  advertisement: "https://www.oxforddictionaries.com/media/english/uk_pron/a/adv/adver/advertisement__gb_1_8.mp3",
  agreement: "https://www.onelook.com/pronounce/macmillan/US/agreement-American-English-pronunciation.mp3",
  air: "https://img2.tfd.com/pron/mp3/en/US/sj/sjdjdrsfhs.mp3",
  amount: "https://www.onelook.com/pronounce/macmillan/US/amount-American-English-pronunciation_8235.mp3",
  amusement: "https://img2.tfd.com/pron/mp3/en/UK/sg/sgdjdnsyssdoshd5sds7gh.mp3",
  animal: "https://static.sfdict.com/staticrep/dictaudio/A04/A0489900.mp3",
  answer: "https://www.oxforddictionaries.com/media/english/uk_pron/a/ans/answe/answer__gb_1.mp3",
  apparatus: "https://www.oxforddictionaries.com/media/english/uk_pron/a/app/appar/apparatus__gb_1.mp3",
  approval: "https://www.onelook.com/pronounce/macmillan/UK/approval-British-English-pronunciation.mp3",
  argument: "https://static.sfdict.com/staticrep/dictaudio/A06/A0672400.mp3",
  art: "https://www.yourdictionary.com/audio/a/ar/art.mp3",
  attack: "https://www.oxforddictionaries.com/media/english/uk_pron/a/att/attac/attack__gb_1.mp3",
  attempt: "https://www.onelook.com/pronounce/macmillan/US/attempt-American-English-pronunciation.mp3",
  attention: "https://img2.tfd.com/pron/mp3/en/US/d3/d3djsdssdtshsoslssssgh.mp3",
  attraction: "https://www.onelook.com/pronounce/macmillan/US/attraction-American-English-pronunciation.mp3",
  authority: "https://www.onelook.com/pronounce/macmillan/UK/authority-British-English-pronunciation.mp3",
  back: "https://img2.tfd.com/pron/mp3/en/UK/dr/drdhdhdddnht.mp3",
  balance: "https://www.onelook.com/pronounce/macmillan/UK/balance-British-English-pronunciation.mp3",
  base: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/B/3JAQDYFTI07G.mp3",
  behaviour: "https://www.onelook.com/pronounce/macmillan/US/behaviour-American-English-pronunciation.mp3",
  belief: "https://www.yourdictionary.com/audio/b/be/belief.mp3",
  birth: "https://www.onelook.com/pronounce/macmillan/US/birth-American-English-pronunciation.mp3",
  bit: "https://dictionary.cambridge.org/us/media/english/us_pron/b/bit/bit__/bit.mp3",
  bite: "https://www.oxforddictionaries.com/media/english/uk_pron/b/bit/bite_/bite__gb_1.mp3",
  blood: "https://dictionary.cambridge.org/us/media/english/us_pron/b/blo/blood/blood.mp3",
  blow: "https://dictionary.cambridge.org/us/media/english/us_pron/b/blo/blow_/blow.mp3",
  body: "https://img2.tfd.com/pron/mp3/en/UK/st/stdhskdss7ht.mp3",
  brass: "https://www.oxforddictionaries.com/media/english/uk_pron/b/bra/brass/brass__gb_1.mp3",
  bread: "https://dictionary.cambridge.org/us/media/english/us_pron/b/bre/bread/bread.mp3",
  breath: "https://img2.tfd.com/pron/mp3/en/UK/dy/dydhsgdydfstd3h7.mp3",
  brother: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukb/ukbro/ukbroke027.mp3",
  building: "https://static.sfdict.com/staticrep/dictaudio/B06/B0680500.mp3",
  burn: "https://www.yourdictionary.com/audio/b/bu/burn.mp3",
  burst: "https://www.oxforddictionaries.com/media/english/uk_pron/b/bur/burst/burst__gb_1_8.mp3",
  business: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/B/1NX5RT0GRSQVK.mp3",
  butter: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/B/1NIKU9YHQXV5P.mp3",
  canvas: "https://www.onelook.com/pronounce/macmillan/US/canvas-American-English-pronunciation.mp3",
  care: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukc/ukcar/ukcardi010.mp3",
  cause: "https://static.sfdict.com/staticrep/dictaudio/C02/C0233300.mp3",
  chalk: "https://www.yourdictionary.com/audio/c/ch/chalk.mp3",
  chance: "https://www.onelook.com/pronounce/macmillan/US/chance-American-English-pronunciation.mp3",
  change: "https://img2.tfd.com/pron/mp3/en/UK/df/dfdgdodgsjd5drh7.mp3",
  cloth: "https://img2.tfd.com/pron/mp3/en/US/dy/dydgd3sjsyd7hr.mp3",
  coal: "https://img2.tfd.com/pron/mp3/en/US/d5/d5dgskdgslht.mp3",
  colour: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukc/ukcol/ukcolor007.mp3",
  comfort: "https://dictionary.cambridge.org/us/media/english/us_pron/c/com/comfo/comfort.mp3",
  committee: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/C/1UNRBPJM6UKD8.mp3",
  company: "https://www.onelook.com/pronounce/macmillan/UK/company-British-English-pronunciation.mp3",
  comparison: "https://www.oxforddictionaries.com/media/english/uk_pron/c/com/compa/comparison__gb_1.mp3",
  competition: "https://www.onelook.com/pronounce/macmillan/UK/competition-British-English-pronunciation.mp3",
  condition: "https://www.yourdictionary.com/audio/c/co/condition.mp3",
  connection: "https://www.onelook.com/pronounce/macmillan/UK/connection-British-English-pronunciation.mp3",
  control: "https://img2.tfd.com/pron/mp3/en/US/d5/d5dgsksksysssfshhn.mp3",
  cook: "https://www.oxforddictionaries.com/media/english/uk_pron/c/coo/cook_/cook__gb_1.mp3",
  copper: "https://static.sfdict.com/staticrep/dictaudio/C08/C0829700.mp3",
  copy: "https://www.yourdictionary.com/audio/c/co/copy.mp3",
  cork: "https://dictionary.cambridge.org/us/media/english/us_pron/c/cor/cork_/cork.mp3",
  cotton: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/C/1W45K4QJKQ7AM.mp3",
  cough: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/C/65OZE4EIFJ9J.mp3",
  country: "https://dictionary.cambridge.org/us/media/english/us_pron/c/cou/count/country.mp3",
  cover: "https://www.oxforddictionaries.com/media/english/uk_pron/c/cov/cover/cover__gb_1.mp3",
  crack: "https://www.oxforddictionaries.com/media/english/uk_pron/c/cra/crack/crack__gb_1.mp3",
  credit: "https://www.onelook.com/pronounce/macmillan/UK/credit-British-English-pronunciation.mp3",
  crime: "https://dictionary.cambridge.org/us/media/english/us_pron/c/cri/crime/crime.mp3",
  crush: "https://dictionary.cambridge.org/us/media/english/us_pron/c/cru/crush/crush.mp3",
  cry: "https://dictionary.cambridge.org/us/media/english/us_pron/c/cry/cry__/cry.mp3",
  current: "https://www.onelook.com/pronounce/macmillan/US/current-American-English-pronunciation.mp3",
  curve: "https://dictionary.cambridge.org/us/media/english/us_pron/c/cur/curve/curve.mp3",
  damage: "https://www.oxforddictionaries.com/media/english/uk_pron/d/dam/damag/damage__gb_1.mp3",
  danger: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/D/L50FVNZ3RWNZ.mp3",
  daughter: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/D/1SZEI5HBP03GP.mp3",
  day: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/D/1KRM252D29R3A.mp3",
  death: "https://static.sfdict.com/staticrep/dictaudio/D00/D0070300.mp3",
  debt: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/D/1QT3QZ9LC5H8E.mp3",
  decision: "https://www.onelook.com/pronounce/macmillan/US/decision-American-English-pronunciation.mp3",
  degree: "https://static.sfdict.com/staticrep/dictaudio/D01/D0128700.mp3",
  design: "https://www.oxforddictionaries.com/media/english/uk_pron/d/des/desig/design__gb_1.mp3",
  desire: "https://www.oxforddictionaries.com/media/english/uk_pron/d/des/desir/desire__gb_1.mp3",
  destruction: "https://img2.tfd.com/pron/mp3/en/US/d3/d3dfdssdsysssrdos5sjststh7h3.mp3",
  detail: "https://img2.tfd.com/pron/mp3/en/UK/d5/d5dfdsssdfd3sjh7.mp3",
  development: "https://www.oxforddictionaries.com/media/english/uk_pron/d/dev/devel/development__gb_1.mp3",
  digestion: "https://www.onelook.com/pronounce/macmillan/US/digestion-American-English-pronunciation.mp3",
  direction: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/D/1EJMH6RKFVRBB.mp3",
  discovery: "https://dictionary.cambridge.org/us/media/english/us_pron/d/dis/disco/discovery.mp3",
  discussion: "https://www.onelook.com/pronounce/macmillan/UK/discussion-British-English-pronunciation.mp3",
  disease: "https://www.yourdictionary.com/audio/d/di/disease.mp3",
  disgust: "https://static.sfdict.com/staticrep/dictaudio/D03/D0364200.mp3",
  distance: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/D/1ANXU8HUG96VB.mp3",
  distribution: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/D/WD9X8VA2K4F0.mp3",
  division: "https://static.sfdict.com/staticrep/dictaudio/D04/D0414300.mp3",
  doubt: "https://www.onelook.com/pronounce/macmillan/UK/doubt-British-English-pronunciation.mp3",
  drink: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/D/15V6G5ARMBK4Z.mp3",
  driving: "https://dictionary.cambridge.org/us/media/english/us_pron/d/dri/drivi/driving.mp3",
  dust: "https://static.sfdict.com/staticrep/dictaudio/D05/D0594600.mp3",
  earth: "https://www.oxforddictionaries.com/media/english/uk_pron/e/ear/earth/earth__gb_1_8.mp3",
  edge: "https://www.yourdictionary.com/audio/e/ed/edge.mp3",
  education: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/E/HPHIYUAMMDNZ.mp3",
  effect: "https://www.onelook.com/pronounce/macmillan/UK/effect-British-English-pronunciation.mp3",
  end: "https://www.onelook.com/pronounce/macmillan/US/end-American-English-pronunciation.mp3",
  error: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uke/ukero/ukeroge016.mp3",
  event: "https://www.oxforddictionaries.com/media/english/uk_pron/e/eve/event/event__gb_1.mp3",
  example: "https://dictionary.cambridge.org/us/media/english/us_pron/e/exa/examp/example.mp3",
  exchange: "https://www.oxforddictionaries.com/media/english/uk_pron/e/exc/excha/exchange__gb_1.mp3",
  existence: "https://www.yourdictionary.com/audio/e/ex/existence.mp3",
  expansion: "https://www.onelook.com/pronounce/macmillan/US/expansion-American-English-pronunciation.mp3",
  experience: "https://img2.tfd.com/pron/mp3/en/US/df/dfddsoshdtssdnd5sdd5dnh5h5.mp3",
  expert: "https://www.oxforddictionaries.com/media/english/uk_pron/e/exp/exper/expert__gb_1_8.mp3",
  fact: "https://dictionary.cambridge.org/us/media/english/us_pron/f/fac/fact_/fact.mp3",
  fall: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/F/139P79CZD4SL4.mp3",
  family: "https://www.onelook.com/pronounce/macmillan/UK/family-British-English-pronunciation.mp3",
  father: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/F/1OBK0SN8SKGGS.mp3",
  fear: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukf/ukfau/ukfault019.mp3",
  feeling: "https://www.yourdictionary.com/audio/f/fe/feeling.mp3",
  fiction: "https://static.sfdict.com/staticrep/dictaudio/F01/F0122100.mp3",
  field: "https://www.yourdictionary.com/audio/f/fi/field.mp3",
  fight: "https://www.onelook.com/pronounce/macmillan/UK/fight-British-English-pronunciation.mp3",
  fire: "https://static.sfdict.com/staticrep/dictaudio/F01/F0159400.mp3",
  flame: "https://www.onelook.com/pronounce/macmillan/UK/flame-British-English-pronunciation.mp3",
  flight: "https://static.sfdict.com/staticrep/dictaudio/F02/F0216100.mp3",
  flower: "https://www.oxforddictionaries.com/media/english/uk_pron/f/flo/flowe/flower__gb_1.mp3",
  fold: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukf/ukfob/ukfob__020.mp3",
  food: "https://www.yourdictionary.com/audio/f/fo/food.mp3",
  force: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukf/ukfor/ukforbe011.mp3",
  form: "https://img2.tfd.com/pron/mp3/en/US/d7/d7dssksfskht.mp3",
  friend: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukf/ukfri/ukfrica007.mp3",
  front: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/F/181QYQ8UKBHMO.mp3",
  fruit: "https://www.yourdictionary.com/audio/f/fr/fruit.mp3",
  glass: "https://img2.tfd.com/pron/mp3/en/US/sh/shdyd3dgsssyhr.mp3",
  gold: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukg/ukgod/ukgodpa017.mp3",
  government: "https://www.oxforddictionaries.com/media/english/uk_pron/g/gov/gover/government__gb_1_8.mp3",
  grain: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/G/1H9ERZ38LKZSP.mp3",
  grass: "https://img2.tfd.com/pron/mp3/en/UK/sh/shdysgdgsssyhr.mp3",
  grip: "https://dictionary.cambridge.org/us/media/english/us_pron/g/gri/grip_/grip.mp3",
  group: "https://dictionary.cambridge.org/us/media/english/us_pron/g/gro/group/group.mp3",
  growth: "https://www.yourdictionary.com/audio/g/gr/growth.mp3",
  guide: "https://dictionary.cambridge.org/us/media/english/us_pron/g/gui/guide/guide.mp3",
  harbor: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukh/ukhap/ukhapha017.mp3",
  harmony: "https://img2.tfd.com/pron/mp3/en/US/st/stdtdhsfsksgsgylhn.mp3",
  hate: "https://www.oxforddictionaries.com/media/english/uk_pron/h/hat/hate_/hate__gb_1.mp3",
  hearing: "https://img2.tfd.com/pron/mp3/en/US/ds/dsdtdsdgsdd3sgd3hn.mp3",
  heat: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/H/12QSEY46E9P0K.mp3",
  help: "https://dictionary.cambridge.org/us/media/english/us_pron/h/hel/help_/help.mp3",
  history: "https://img2.tfd.com/pron/mp3/en/US/st/stdtdrsdsysgsyylhn.mp3",
  hole: "https://img2.tfd.com/pron/mp3/en/UK/df/dfdtskdndtht.mp3",
  hope: "https://static.sfdict.com/staticrep/dictaudio/H03/H0373400.mp3",
  hour: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukh/ukhot/ukhotfo020.mp3",
  humour: "https://static.sfdict.com/staticrep/dictaudio/H04/H0436500.mp3",
  ice: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/I/MO79MQ4VIGDI.mp3",
  idea: "https://static.sfdict.com/staticrep/dictaudio/I00/I0017500.mp3",
  impulse: "https://static.sfdict.com/staticrep/dictaudio/I00/I0089500.mp3",
  increase: "https://img2.tfd.com/pron/mp3/en/US/df/dfdoslddsddodssod7gk.mp3",
  industry: "https://www.oxforddictionaries.com/media/english/uk_pron/i/ind/indus/industry__gb_1.mp3",
  ink: "https://www.oxforddictionaries.com/media/english/uk_pron/i/ink/ink__/ink__gb_1.mp3",
  insect: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uki/ukino/ukinorg027.mp3",
  instrument: "https://www.yourdictionary.com/audio/i/in/instrument.mp3",
  insurance: "https://www.onelook.com/pronounce/macmillan/US/insurance-American-English-pronunciation.mp3",
  interest: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uki/ukint/ukinter015.mp3",
  invention: "https://www.onelook.com/pronounce/macmillan/UK/invention-British-English-pronunciation.mp3",
  iron: "https://www.yourdictionary.com/audio/i/ir/iron.mp3",
  jelly: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukj/ukjeh/ukjehov006.mp3",
  join: "https://dictionary.cambridge.org/us/media/english/us_pron/j/joi/join_/join.mp3",
  journey: "https://www.onelook.com/pronounce/macmillan/UK/journey-British-English-pronunciation.mp3",
  judge: "https://www.oxforddictionaries.com/media/english/uk_pron/j/jud/judge/judge__gb_1.mp3",
  jump: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukj/ukjud/ukjudic027.mp3",
  kick: "https://www.onelook.com/pronounce/macmillan/UK/kick-British-English-pronunciation.mp3",
  kiss: "https://img2.tfd.com/pron/mp3/en/UK/sh/shd5drsdssht.mp3",
  knowledge: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukk/ukkno/ukknock012.mp3",
  land: "https://www.onelook.com/pronounce/macmillan/UK/land-British-English-pronunciation.mp3",
  language: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/L/1LHCC4R4A6DAF.mp3",
  laugh: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/L/15QXSIW1R4M2N.mp3",
  law: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukl/uklat/uklatvi026.mp3",
  lead: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukl/ukldr/ukldriv004.mp3",
  learning: "https://img2.tfd.com/pron/mp3/en/US/ds/dsd7dsdgsdshdnsfdngk.mp3",
  leather: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukl/uklea/uklearn009.mp3",
  letter: "https://www.oxforddictionaries.com/media/english/uk_pron/l/let/lette/letter__gb_1.mp3",
  level: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukl/ukles/ukles__029.mp3",
  lift: "https://dictionary.cambridge.org/us/media/english/us_pron/l/lif/lift_/lift.mp3",
  light: "https://dictionary.cambridge.org/us/media/english/us_pron/l/lig/light/light.mp3",
  limit: "https://www.onelook.com/pronounce/macmillan/US/limit-American-English-pronunciation.mp3",
  linen: "https://img2.tfd.com/pron/mp3/en/US/d3/d3d7drskdtshhr.mp3",
  liquid: "https://static.sfdict.com/staticrep/dictaudio/L02/L0290100.mp3",
  list: "https://static.sfdict.com/staticrep/dictaudio/L02/L0294000.mp3",
  look: "https://www.onelook.com/pronounce/macmillan/UK/look-British-English-pronunciation.mp3",
  loss: "https://www.onelook.com/pronounce/macmillan/US/loss-American-English-pronunciation.mp3",
  love: "https://img2.tfd.com/pron/mp3/en/UK/df/dfd7skstdtht.mp3",
  machine: "https://img2.tfd.com/pron/mp3/en/US/df/dfd3dhddd5d3sgd5hn.mp3",
  man: "https://dictionary.cambridge.org/us/media/english/us_pron/e/eus/eus72/eus72889.mp3",
  manager: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukm/ukmam/ukmammo009.mp3",
  mark: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/M/1W89R74U8KCIG.mp3",
  market: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/M/OPX1SFGO8JOU.mp3",
  mass: "https://www.onelook.com/pronounce/macmillan/UK/mass-British-English-pronunciation.mp3",
  meal: "https://img2.tfd.com/pron/mp3/en/US/d5/d5d3dsdgslht.mp3",
  measure: "https://static.sfdict.com/staticrep/dictaudio/M02/M0245800.mp3",
  meat: "https://www.onelook.com/pronounce/macmillan/UK/meat-British-English-pronunciation.mp3",
  meeting: "https://www.oxforddictionaries.com/media/english/uk_pron/m/mee/meeti/meeting__gb_1.mp3",
  memory: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/M/JWQLRJU26TIK.mp3",
  metal: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukm/ukmes/ukmesh_019.mp3",
  middle: "https://www.onelook.com/pronounce/macmillan/UK/middle-British-English-pronunciation.mp3",
  milk: "https://static.sfdict.com/staticrep/dictaudio/M04/M0432700.mp3",
  mind: "https://static.sfdict.com/staticrep/dictaudio/M04/M0451300.mp3",
  mine: "https://static.sfdict.com/staticrep/dictaudio/M04/M0453100.mp3",
  minute: "https://static.sfdict.com/staticrep/dictaudio/M04/M0468800.mp3",
  mist: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukm/ukmis/ukmispr026.mp3",
  money: "https://www.onelook.com/pronounce/macmillan/US/money-American-English-pronunciation.mp3",
  month: "https://www.yourdictionary.com/audio/m/mo/month.mp3",
  morning: "https://www.yourdictionary.com/audio/m/mo/morning.mp3",
  mother: "https://img2.tfd.com/pron/mp3/en/UK/sj/sjd3skssd5dosyh7.mp3",
  motion: "https://www.onelook.com/pronounce/macmillan/UK/motion-British-English-pronunciation.mp3",
  mountain: "https://www.onelook.com/pronounce/macmillan/UK/mountain-British-English-pronunciation.mp3",
  move: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukm/ukmou/ukmourn016.mp3",
  music: "https://dictionary.cambridge.org/us/media/english/us_pron/m/mus/music/music.mp3",
  name: "https://img2.tfd.com/pron/mp3/en/UK/df/dfdndhsldtht.mp3",
  nation: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukn/uknar/uknark_020.mp3",
  need: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukk/ukkit/ukkit__028.mp3",
  news: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukn/ukneu/ukneuro028.mp3",
  night: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukk/ukkne/ukkneel012.mp3",
  noise: "https://www.oxforddictionaries.com/media/english/uk_pron/n/noi/noise/noise__gb_1.mp3",
  note: "https://www.oxforddictionaries.com/media/english/uk_pron/n/not/note_/note__gb_1.mp3",
  number: "https://www.onelook.com/pronounce/macmillan/UK/number-British-English-pronunciation.mp3",
  observation: "https://www.yourdictionary.com/audio/o/ob/observation.mp3",
  offer: "https://static.sfdict.com/staticrep/dictaudio/O00/O0052800.mp3",
  oil: "https://dictionary.cambridge.org/us/media/english/us_pron/o/oil/oil__/oil.mp3",
  operation: "https://static.sfdict.com/staticrep/dictaudio/O01/O0124500.mp3",
  opinion: "https://www.yourdictionary.com/audio/o/op/opinion.mp3",
  order: "https://www.onelook.com/pronounce/macmillan/US/order-American-English-pronunciation.mp3",
  organization: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uko/ukord/ukordin009.mp3",
  ornament: "https://static.sfdict.com/staticrep/dictaudio/O01/O0163700.mp3",
  owner: "https://dictionary.cambridge.org/us/media/english/us_pron/u/usl/usl30/usl30273.mp3",
  page: "https://dictionary.cambridge.org/us/media/english/us_pron/e/eus/eus73/eus73394.mp3",
  pain: "https://www.yourdictionary.com/audio/p/pa/pain.mp3",
  paint: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/P/5OGT6Z4RC95M.mp3",
  paper: "https://static.sfdict.com/staticrep/dictaudio/P00/P0077600.mp3",
  part: "https://www.onelook.com/pronounce/macmillan/US/part-American-English-pronunciation.mp3",
  paste: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/P/1MJEMFJMB0TWI.mp3",
  payment: "https://static.sfdict.com/staticrep/dictaudio/P01/P0188600.mp3",
  peace: "https://img2.tfd.com/pron/mp3/en/UK/df/dfskdsdgdsdohr.mp3",
  person: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukp/ukper/ukperpe023.mp3",
  place: "https://www.oxforddictionaries.com/media/english/uk_pron/p/pla/place/place__gb_1.mp3",
  plant: "https://www.onelook.com/pronounce/macmillan/UK/plant-British-English-pronunciation.mp3",
  play: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukp/ukpla/ukplate018.mp3",
  pleasure: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukp/ukpla/ukplayg027.mp3",
  point: "https://img2.tfd.com/pron/mp3/en/US/sg/sgskskd5sjsthr.mp3",
  poison: "https://static.sfdict.com/staticrep/dictaudio/P05/P0583300.mp3",
  polish: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukp/ukpol/ukpolar018.mp3",
  porter: "https://static.sfdict.com/staticrep/dictaudio/P06/P0656700.mp3",
  position: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukp/ukpos/ukposer007.mp3",
  powder: "https://www.onelook.com/pronounce/macmillan/UK/powder-British-English-pronunciation.mp3",
  power: "https://www.oxforddictionaries.com/media/english/uk_pron/p/pow/power/power__gb_1.mp3",
  price: "https://static.sfdict.com/staticrep/dictaudio/P07/P0774400.mp3",
  print: "https://dictionary.cambridge.org/us/media/english/us_pron/p/pri/print/print.mp3",
  process: "https://www.yourdictionary.com/audio/p/pr/process.mp3",
  produce: "https://dictionary.cambridge.org/us/media/english/us_pron/p/pro/produ/produce_01_00.mp3",
  profit: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/P/1CM6UERU98MF0.mp3",
  property: "https://www.onelook.com/pronounce/macmillan/UK/property-British-English-pronunciation.mp3",
  prose: "https://www.onelook.com/pronounce/macmillan/US/prose-American-English-pronunciation.mp3",
  protest: "https://www.onelook.com/pronounce/macmillan/US/protest-American-English-pronunciation_36436.mp3",
  pull: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukp/ukpue/ukpueri015.mp3",
  punishment: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukp/ukpum/ukpumme026.mp3",
  purpose: "https://www.oxforddictionaries.com/media/english/uk_pron/p/pur/purpo/purpose__gb_1_8.mp3",
  push: "https://www.oxforddictionaries.com/media/english/uk_pron/p/pus/push_/push__gb_1.mp3",
  quality: "https://static.sfdict.com/staticrep/dictaudio/Q00/Q0017100.mp3",
  question: "https://static.sfdict.com/staticrep/dictaudio/Q00/Q0034500.mp3",
  rain: "https://img2.tfd.com/pron/mp3/en/US/d3/d3shdhd5sjht.mp3",
  range: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukr/ukram/ukramsh017.mp3",
  rate: "https://img2.tfd.com/pron/mp3/en/UK/df/dfshdhssdtht.mp3",
  ray: "https://img2.tfd.com/pron/mp3/en/US/st/stshdhs5hs.mp3",
  reaction: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/R/J9Z6JAVLP42V.mp3",
  reading: "https://www.onelook.com/pronounce/macmillan/US/reading-American-English-pronunciation.mp3",
  reason: "https://www.onelook.com/pronounce/macmillan/UK/reason-British-English-pronunciation.mp3",
  record: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukr/ukrec/ukrecor002.mp3",
  regret: "https://www.onelook.com/pronounce/macmillan/US/regret-American-English-pronunciation.mp3",
  relation: "https://img2.tfd.com/pron/mp3/en/US/d3/d3shdsdndfstdnsdsdgk.mp3",
  religion: "https://www.yourdictionary.com/audio/r/re/religion.mp3",
  representative: "https://img2.tfd.com/pron/mp3/en/US/df/dfshdsshsddostd5sds7drsnsfyhshglgg.mp3",
  request: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukr/ukrep/ukrepro020.mp3",
  respect: "https://dictionary.cambridge.org/us/media/english/us_pron/r/res/respe/respect.mp3",
  rest: "https://www.yourdictionary.com/audio/r/re/rest.mp3",
  reward: "https://www.yourdictionary.com/audio/r/re/reward.mp3",
  rhythm: "https://www.yourdictionary.com/audio/r/rh/rhythm.mp3",
  rice: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/R/1S2H6XBAD59AN.mp3",
  river: "https://www.onelook.com/pronounce/macmillan/US/river-American-English-pronunciation.mp3",
  road: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/R/BWO9Q3IS13CV.mp3",
  roll: "https://www.onelook.com/pronounce/macmillan/US/roll-American-English-pronunciation.mp3",
  room: "https://static.sfdict.com/staticrep/dictaudio/NEW/NEW14290.mp3",
  rub: "https://www.onelook.com/pronounce/macmillan/UK/rub-British-English-pronunciation.mp3",
  rule: "https://www.onelook.com/pronounce/macmillan/UK/rule-British-English-pronunciation.mp3",
  run: "https://www.yourdictionary.com/audio/r/ru/run.mp3",
  salt: "https://static.sfdict.com/staticrep/dictaudio/S00/S0047600.mp3",
  sand: "https://dictionary.cambridge.org/us/media/english/us_pron/s/san/sand_/sand.mp3",
  scale: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uks/uksax/uksax__019.mp3",
  science: "https://www.yourdictionary.com/audio/s/sc/science.mp3",
  sea: "https://img2.tfd.com/pron/mp3/en/US/dk/dksgdsdghs.mp3",
  seat: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uks/uksea/uksear_021.mp3",
  secretary: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uks/uksec/ukseces017.mp3",
  selection: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/S/XU1Z9X7P95NJ.mp3",
  self: "https://www.onelook.com/pronounce/macmillan/US/self-American-English-pronunciation.mp3",
  sense: "https://dictionary.cambridge.org/us/media/english/us_pron/s/sen/sense/sense.mp3",
  servant: "https://img2.tfd.com/pron/mp3/en/UK/sg/sgsgdssfsoddsgsrhn.mp3",
  sex: "https://img2.tfd.com/pron/mp3/en/US/sy/sysgdssrhs.mp3",
  shade: "https://img2.tfd.com/pron/mp3/en/US/df/dfsgdodgdydohr.mp3",
  shake: "https://www.oxforddictionaries.com/media/english/uk_pron/s/sha/shake/shake__gb_1.mp3",
  shame: "https://img2.tfd.com/pron/mp3/en/UK/df/dfsgdodgskdohr.mp3",
  shock: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uks/ukshi/ukshish023.mp3",
  side: "https://dictionary.cambridge.org/us/media/english/us_pron/s/sid/side_/side.mp3",
  sign: "https://www.yourdictionary.com/audio/s/si/sign.mp3",
  silk: "https://dictionary.cambridge.org/us/media/english/us_pron/s/sil/silk_/silk.mp3",
  silver: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uks/uksil/uksilen022.mp3",
  sister: "https://www.yourdictionary.com/audio/s/si/sister.mp3",
  size: "https://static.sfdict.com/staticrep/dictaudio/S05/S0577800.mp3",
  sky: "https://www.onelook.com/pronounce/macmillan/UK/sky-British-English-pronunciation.mp3",
  sleep: "https://static.sfdict.com/staticrep/dictaudio/S06/S0615100.mp3",
  slip: "https://www.onelook.com/pronounce/macmillan/US/slip-American-English-pronunciation.mp3",
  slope: "https://static.sfdict.com/staticrep/dictaudio/S06/S0629100.mp3",
  smash: "https://dictionary.cambridge.org/us/media/english/us_pron/s/sma/smash/smash.mp3",
  smell: "https://dictionary.cambridge.org/us/media/english/us_pron/s/sme/smell/smell.mp3",
  smile: "https://dictionary.cambridge.org/us/media/english/us_pron/s/smi/smile/smile.mp3",
  smoke: "https://img2.tfd.com/pron/mp3/en/UK/df/dfsgdnsjdndohr.mp3",
  sneeze: "https://dictionary.cambridge.org/us/media/english/us_pron/s/sne/sneez/sneeze.mp3",
  snow: "https://www.oxforddictionaries.com/media/english/uk_pron/s/sno/snow_/snow__gb_1.mp3",
  soap: "https://static.sfdict.com/staticrep/dictaudio/S06/S0674800.mp3",
  society: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uks/uksob/uksober015.mp3",
  son: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/S/T1DYYYQW65MS.mp3",
  song: "https://dictionary.cambridge.org/us/media/english/us_pron/s/son/song_/song.mp3",
  sort: "https://img2.tfd.com/pron/mp3/en/US/sg/sgsgsksfsyht.mp3",
  sound: "https://dictionary.cambridge.org/us/media/english/us_pron/s/sou/sound/sound.mp3",
  soup: "https://static.sfdict.com/staticrep/dictaudio/S07/S0744300.mp3",
  space: "https://dictionary.cambridge.org/us/media/english/us_pron/s/spa/space/space.mp3",
  stage: "https://www.oxforddictionaries.com/media/english/uk_pron/s/sta/stage/stage__gb_1.mp3",
  start: "https://www.yourdictionary.com/audio/s/st/start.mp3",
  statement: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uks/uksta/ukstate004.mp3",
  steam: "https://img2.tfd.com/pron/mp3/en/UK/d7/d7sgsddydfsjhr.mp3",
  steel: "https://static.sfdict.com/staticrep/dictaudio/S09/S0911400.mp3",
  step: "https://dictionary.cambridge.org/us/media/english/us_pron/s/ste/step_/step.mp3",
  stitch: "https://www.onelook.com/pronounce/macmillan/UK/stitch-British-English-pronunciation.mp3",
  stone: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/S/1S9NKDVAEH8UA.mp3",
  stop: "https://www.onelook.com/pronounce/macmillan/US/stop-American-English-pronunciation.mp3",
  story: "https://img2.tfd.com/pron/mp3/en/US/st/stsgsdsjsds3hr.mp3",
  stretch: "https://img2.tfd.com/pron/mp3/en/UK/dy/dysgsdsfdtstdtdnhn.mp3",
  structure: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/S/1C5XEKMI3OOPO.mp3",
  substance: "https://www.oxforddictionaries.com/media/english/uk_pron/s/sub/subst/substance__gb_1.mp3",
  sugar: "https://www.yourdictionary.com/audio/s/su/sugar.mp3",
  suggestion: "https://www.onelook.com/pronounce/macmillan/UK/suggestion-British-English-pronunciation.mp3",
  summer: "https://dictionary.cambridge.org/us/media/english/us_pron/s/sum/summe/summer.mp3",
  support: "https://www.onelook.com/pronounce/macmillan/US/support-American-English-pronunciation.mp3",
  surprise: "https://www.yourdictionary.com/audio/s/su/surprise.mp3",
  swim: "https://www.onelook.com/pronounce/macmillan/UK/swim-British-English-pronunciation.mp3",
  system: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uks/uksyn/uksynta015.mp3",
  talk: "https://dictionary.cambridge.org/us/media/english/us_pron/t/tal/talk_/talk.mp3",
  taste: "https://www.oxforddictionaries.com/media/english/uk_pron/t/tas/taste/taste__gb_1.mp3",
  tax: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/T/1O7R6BXNH5C48.mp3",
  teaching: "https://dictionary.cambridge.org/us/media/english/us_pron/t/tea/teach/teaching.mp3",
  tendency: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukt/uktem/uktempt013.mp3",
  test: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukt/ukter/ukterri013.mp3",
  theory: "https://www.onelook.com/pronounce/macmillan/US/theory-American-English-pronunciation.mp3",
  thing: "https://www.yourdictionary.com/audio/t/th/thing.mp3",
  thought: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukt/ukthi/ukthirt026.mp3",
  thunder: "https://www.onelook.com/pronounce/macmillan/UK/thunder-British-English-pronunciation.mp3",
  time: "https://www.yourdictionary.com/audio/t/ti/time.mp3",
  tin: "https://www.oxforddictionaries.com/media/english/uk_pron/t/tin/tin__/tin__gb_1.mp3",
  top: "https://img2.tfd.com/pron/mp3/en/US/sl/slsfskshhs.mp3",
  touch: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukt/uktor/uktortu022.mp3",
  trade: "https://www.onelook.com/pronounce/macmillan/UK/trade-British-English-pronunciation.mp3",
  transport: "https://dictionary.cambridge.org/us/media/english/us_pron/t/tra/trans/transport_01_01.mp3",
  trick: "https://www.yourdictionary.com/audio/t/tr/trick.mp3",
  trouble: "https://www.oxforddictionaries.com/media/english/uk_pron/t/tro/troub/trouble__gb_1.mp3",
  turn: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/T/93IDYLA3Q6GU.mp3",
  twist: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukt/uktwi/uktwine010.mp3",
  unit: "https://static.sfdict.com/staticrep/dictaudio/U00/U0095100.mp3",
  use: "https://www.oxforddictionaries.com/media/english/uk_pron/u/use/use__/use__gb_2.mp3",
  value: "https://img2.tfd.com/pron/mp3/en/UK/df/dfssdhdnstdohr.mp3",
  verse: "https://static.sfdict.com/staticrep/dictaudio/V00/V0093800.mp3",
  vessel: "https://img2.tfd.com/pron/mp3/en/UK/d5/d5ssdssdssdosjh7.mp3",
  view: "https://img2.tfd.com/pron/mp3/en/US/ss/ssssdrdysrht.mp3",
  voice: "https://www.oxforddictionaries.com/media/english/uk_pron/v/voi/voice/voice__gb_1.mp3",
  walk: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/W/5K1IM4VRLTW7.mp3",
  war: "https://www.onelook.com/pronounce/macmillan/US/war-American-English-pronunciation.mp3",
  wash: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/W/ZDTW7EQAQJOO.mp3",
  waste: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukv/ukvul/ukvulva029.mp3",
  water: "https://dictionary.cambridge.org/us/media/english/us_pron/w/wat/water/water.mp3",
  wave: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/W/UX4YGNHEV0FD.mp3",
  wax: "https://static.sfdict.com/staticrep/dictaudio/W00/W0067100.mp3",
  way: "https://www.yourdictionary.com/audio/w/wa/way.mp3",
  weather: "https://www.yourdictionary.com/audio/w/we/weather.mp3",
  week: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/W/FXVP565CY7S0.mp3",
  weight: "https://www.onelook.com/pronounce/macmillan/UK/weight-British-English-pronunciation.mp3",
  wind: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukw/ukwil/ukwildl026.mp3",
  wine: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukw/ukwin/ukwinde022.mp3",
  winter: "https://www.onelook.com/pronounce/macmillan/UK/winter-British-English-pronunciation.mp3",
  woman: "https://static.sfdict.com/staticrep/dictaudio/W02/W0218700.mp3",
  wood: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukw/ukwom/ukwoman020.mp3",
  wool: "https://www.onelook.com/pronounce/macmillan/US/wool-American-English-pronunciation.mp3",
  word: "https://www.oxforddictionaries.com/media/english/uk_pron/w/wor/word_/word__gb_1_8.mp3",
  work: "https://www.onelook.com/pronounce/macmillan/US/work-American-English-pronunciation.mp3",
  wound: "https://static.sfdict.com/staticrep/dictaudio/W02/W0246300.mp3",
  writing: "https://dictionary.cambridge.org/us/media/english/us_pron/e/eus/eus75/eus75037.mp3",
  year: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/Y/DEJEW46B6X2R.mp3",
  angle: "https://img2.tfd.com/pron/mp3/en/US/df/dfdjsldosldohr.mp3",
  ant: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/A/2ACHQG8KUAWK.mp3",
  apple: "https://www.yourdictionary.com/audio/a/ap/apple.mp3",
  arch: "https://static.sfdict.com/staticrep/dictaudio/A06/A0646900.mp3",
  arm: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uka/ukarg/ukargyb018.mp3",
  army: "https://www.onelook.com/pronounce/macmillan/US/army-American-English-pronunciation.mp3",
  baby: "https://dictionary.cambridge.org/us/media/english/us_pron/b/bab/baby_/baby.mp3",
  bag: "https://www.oxforddictionaries.com/media/english/uk_pron/b/bag/bag__/bag__gb_1.mp3",
  ball: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukb/ukbal/ukbalal014.mp3",
  band: "https://static.sfdict.com/staticrep/dictaudio/B00/B0071500.mp3",
  basin: "https://www.oxforddictionaries.com/media/english/uk_pron/b/bas/basin/basin__gb_1.mp3",
  basket: "https://dictionary.cambridge.org/us/media/english/us_pron/b/bas/baske/basket.mp3",
  bath: "https://dictionary.cambridge.org/us/media/english/us_pron/b/bat/bath_/bath.mp3",
  bed: "https://www.onelook.com/pronounce/macmillan/US/B-Ed-American-English-pronunciation.mp3",
  bee: "https://img2.tfd.com/pron/mp3/en/UK/df/dfdhdsdyhs.mp3",
  bell: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/B/Q11DMYF2SGEQ.mp3",
  berry: "https://www.yourdictionary.com/audio/b/be/berry.mp3",
  bird: "https://dictionary.cambridge.org/us/media/english/us_pron/b/bir/bird_/bird.mp3",
  blade: "https://img2.tfd.com/pron/mp3/en/UK/df/dfdhd3dgdydohr.mp3",
  board: "https://www.onelook.com/pronounce/macmillan/US/board-American-English-pronunciation.mp3",
  boat: "https://www.oxforddictionaries.com/media/english/uk_pron/b/boa/boat_/boat__gb_1.mp3",
  bone: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/B/1OFDRRDZZ2XRO.mp3",
  book: "https://img2.tfd.com/pron/mp3/en/UK/dr/drdhsksjdnht.mp3",
  boot: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukb/ukboo/ukboomi009.mp3",
  bottle: "https://static.sfdict.com/staticrep/dictaudio/B05/B0528800.mp3",
  box: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/B/1SW0USRK4FEJR.mp3",
  boy: "https://img2.tfd.com/pron/mp3/en/US/st/stdhsks5hs.mp3",
  brain: "https://www.onelook.com/pronounce/macmillan/US/brain-American-English-pronunciation.mp3",
  brake: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/B/SPEI9NATFYIE.mp3",
  branch: "https://www.onelook.com/pronounce/macmillan/UK/branch-British-English-pronunciation.mp3",
  brick: "https://static.sfdict.com/staticrep/dictaudio/B06/B0608800.mp3",
  bridge: "https://www.onelook.com/pronounce/macmillan/US/bridge-American-English-pronunciation.mp3",
  brush: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukb/ukbro/ukbroug025.mp3",
  bucket: "https://www.onelook.com/pronounce/macmillan/UK/bucket-British-English-pronunciation_72248.mp3",
  bulb: "https://img2.tfd.com/pron/mp3/en/UK/dj/djdhssdnddht.mp3",
  button: "https://www.oxforddictionaries.com/media/english/uk_pron/b/but/butto/button__gb_1.mp3",
  cake: "https://static.sfdict.com/staticrep/dictaudio/C00/C0031400.mp3",
  camera: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukc/ukcam/ukcambo010.mp3",
  card: "https://img2.tfd.com/pron/mp3/en/UK/dg/dgdgdhsfdyht.mp3",
  cart: "https://www.onelook.com/pronounce/macmillan/UK/cart-British-English-pronunciation.mp3",
  carriage: "https://dictionary.cambridge.org/us/media/english/us_pron/c/car/carri/carriage.mp3",
  cat: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/C/9JZLN1GNLJHU.mp3",
  chain: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukc/ukcey/ukceylo013.mp3",
  cheese: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/C/URDRWMQ8D86N.mp3",
  chest: "https://www.onelook.com/pronounce/macmillan/UK/chest-British-English-pronunciation.mp3",
  chin: "https://img2.tfd.com/pron/mp3/en/UK/d3/d3dgdod5sjht.mp3",
  church: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukc/ukchr/ukchron028.mp3",
  circle: "https://dictionary.cambridge.org/us/media/english/us_pron/c/cir/circl/circle.mp3",
  clock: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukc/ukcli/ukclipp014.mp3",
  cloud: "https://dictionary.cambridge.org/us/media/english/us_pron/c/clo/cloud/cloud.mp3",
  coat: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/C/3BG4VWZIWM50.mp3",
  collar: "https://dictionary.cambridge.org/us/media/english/us_pron/c/col/colla/collar.mp3",
  comb: "https://www.onelook.com/pronounce/macmillan/US/comb-American-English-pronunciation.mp3",
  cord: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukc/ukcho/ukchora002.mp3",
  cow: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/C/1DOYMH2J63BLI.mp3",
  cup: "https://static.sfdict.com/staticrep/dictaudio/C10/C1047800.mp3",
  curtain: "https://img2.tfd.com/pron/mp3/en/US/d3/d3dgsssfsydddnsfhn.mp3",
  cushion: "https://www.onelook.com/pronounce/macmillan/US/cushion-American-English-pronunciation.mp3",
  dog: "https://img2.tfd.com/pron/mp3/en/US/ds/dsdfskdohs.mp3",
  door: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukd/ukdon/ukdonke014.mp3",
  drain: "https://www.onelook.com/pronounce/macmillan/UK/drain-British-English-pronunciation.mp3",
  drawer: "https://www.yourdictionary.com/audio/d/dr/drawer.mp3",
  dress: "https://www.onelook.com/pronounce/macmillan/US/dress-American-English-pronunciation_17679.mp3",
  drop: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukd/ukdri/ukdrive016.mp3",
  ear: "https://www.onelook.com/pronounce/macmillan/UK/ear-British-English-pronunciation.mp3",
  egg: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uke/ukeff/ukeffor009.mp3",
  engine: "https://static.sfdict.com/staticrep/dictaudio/E01/E0190300.mp3",
  eye: "https://img2.tfd.com/pron/mp3/en/US/df/dfddsrdyhs.mp3",
  face: "https://www.yourdictionary.com/audio/f/fa/face.mp3",
  farm: "https://dictionary.cambridge.org/us/media/english/us_pron/f/far/farm_/farm.mp3",
  feather: "https://www.onelook.com/pronounce/macmillan/US/feather-American-English-pronunciation_19854.mp3",
  finger: "https://www.onelook.com/pronounce/macmillan/US/finger-American-English-pronunciation.mp3",
  fish: "https://img2.tfd.com/pron/mp3/en/US/dy/dydsdrsdd5ht.mp3",
  flag: "https://dictionary.cambridge.org/us/media/english/us_pron/f/fla/flag_/flag.mp3",
  floor: "https://img2.tfd.com/pron/mp3/en/UK/sj/sjdsd3sjshsshr.mp3",
  fly: "https://static.sfdict.com/staticrep/dictaudio/F02/F0246300.mp3",
  foot: "https://img2.tfd.com/pron/mp3/en/US/sg/sgdssksjsyht.mp3",
  fork: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/F/ISCSB6ZWTNOV.mp3",
  fowl: "https://dictionary.cambridge.org/us/media/english/us_pron/f/fou/foul_/foul.mp3",
  frame: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/F/1KH0BADS8TGK1.mp3",
  garden: "https://www.onelook.com/pronounce/macmillan/UK/garden-British-English-pronunciation.mp3",
  girl: "https://www.oxforddictionaries.com/media/english/uk_pron/g/gir/girl_/girl__gb_1_8.mp3",
  glove: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukg/ukglo/ukglori011.mp3",
  goat: "https://dictionary.cambridge.org/us/media/english/us_pron/g/goa/goat_/goat.mp3",
  gun: "https://www.yourdictionary.com/audio/g/gu/gun.mp3",
  hair: "https://www.onelook.com/pronounce/macmillan/US/hair-American-English-pronunciation.mp3",
  hammer: "https://img2.tfd.com/pron/mp3/en/UK/sj/sjdtdhslskdosyh7.mp3",
  hand: "https://www.onelook.com/pronounce/macmillan/US/hand-American-English-pronunciation.mp3",
  hat: "https://www.onelook.com/pronounce/macmillan/US/hat-American-English-pronunciation.mp3",
  head: "https://dictionary.cambridge.org/us/media/english/us_pron/h/hea/head_/head.mp3",
  heart: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukh/ukhea/ukheads027.mp3",
  hook: "https://www.oxforddictionaries.com/media/english/uk_pron/h/hoo/hook_/hook__gb_1.mp3",
  horn: "https://www.onelook.com/pronounce/macmillan/US/horn-American-English-pronunciation_24710.mp3",
  horse: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/H/17M07F58Y2LP2.mp3",
  hospital: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukh/ukhor/ukhorsi013.mp3",
  house: "https://www.onelook.com/pronounce/macmillan/UK/house-British-English-pronunciation.mp3",
  island: "https://www.onelook.com/pronounce/macmillan/UK/island-British-English-pronunciation.mp3",
  jewel: "https://static.sfdict.com/staticrep/dictaudio/J00/J0057200.mp3",
  kettle: "https://static.sfdict.com/staticrep/dictaudio/K00/K0079900.mp3",
  key: "https://www.onelook.com/pronounce/macmillan/UK/key-British-English-pronunciation.mp3",
  knee: "https://static.sfdict.com/staticrep/dictaudio/K01/K0144100.mp3",
  knife: "https://www.yourdictionary.com/audio/k/kn/knife.mp3",
  knot: "https://www.onelook.com/pronounce/macmillan/US/knot-American-English-pronunciation.mp3",
  leaf: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukl/ukldr/ukldriv012.mp3",
  leg: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukl/ukled/ukledge021.mp3",
  library: "https://dictionary.cambridge.org/us/media/english/us_pron/l/lib/libra/library.mp3",
  line: "https://img2.tfd.com/pron/mp3/en/US/df/dfd7drskdtht.mp3",
  lip: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/L/1TU0SO8EIM8X6.mp3",
  lock: "https://www.onelook.com/pronounce/macmillan/UK/lock-British-English-pronunciation.mp3",
  map: "https://static.sfdict.com/staticrep/dictaudio/M01/M0131100.mp3",
  match: "https://dictionary.cambridge.org/us/media/english/us_pron/m/mat/match/match.mp3",
  monkey: "https://static.sfdict.com/staticrep/dictaudio/M05/M0558200.mp3",
  moon: "https://www.yourdictionary.com/audio/m/mo/moon.mp3",
  mouth: "https://www.oxforddictionaries.com/media/english/uk_pron/m/mou/mouth/mouth__gb_1.mp3",
  muscle: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukm/ukmun/ukmunif015.mp3",
  nail: "https://static.sfdict.com/staticrep/dictaudio/N00/N0007200.mp3",
  neck: "https://www.onelook.com/pronounce/macmillan/US/neck-American-English-pronunciation.mp3",
  needle: "https://www.yourdictionary.com/audio/n/ne/needle.mp3",
  nerve: "https://img2.tfd.com/pron/mp3/en/US/df/dfdndssfsodohr.mp3",
  net: "https://www.yourdictionary.com/audio/n/ne/net.mp3",
  nose: "https://www.yourdictionary.com/audio/n/no/nose.mp3",
  nut: "https://www.onelook.com/pronounce/macmillan/UK/nut-British-English-pronunciation.mp3",
  office: "https://www.oxforddictionaries.com/media/english/uk_pron/o/off/offic/office__gb_1.mp3",
  orange: "https://img2.tfd.com/pron/mp3/en/US/df/dfslsgdgsjd5drh7.mp3",
  oven: "https://www.onelook.com/pronounce/macmillan/US/oven-American-English-pronunciation.mp3",
  parcel: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukp/ukpar/ukparas010.mp3",
  pen: "https://www.onelook.com/pronounce/macmillan/UK/pen-British-English-pronunciation.mp3",
  pencil: "https://img2.tfd.com/pron/mp3/en/US/d5/d5skdsskdsd3sjh7.mp3",
  picture: "https://dictionary.cambridge.org/us/media/english/us_pron/p/pic/pictu/picture.mp3",
  pig: "https://dictionary.cambridge.org/us/media/english/us_pron/p/pig/pig__/pig.mp3",
  pin: "https://www.onelook.com/pronounce/macmillan/UK/PIN-British-English-pronunciation.mp3",
  pipe: "https://dictionary.cambridge.org/us/media/english/us_pron/p/pip/pipe_/pipe.mp3",
  plane: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukp/ukpkk/ukpkk__023.mp3",
  plate: "https://www.oxforddictionaries.com/media/english/uk_pron/p/pla/plate/plate__gb_1.mp3",
  "plough/plow": "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukp/ukplo/ukplodd008.mp3",
  pocket: "https://dictionary.cambridge.org/us/media/english/us_pron/p/poc/pocke/pocket.mp3",
  pot: "https://www.onelook.com/pronounce/macmillan/US/pot-American-English-pronunciation.mp3",
  potato: "https://www.oxforddictionaries.com/media/english/uk_pron/p/pot/potat/potato__gb_1.mp3",
  prison: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/P/1CR0GEU1SHUMP.mp3",
  pump: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/P/1JLLE2JP7CLQV.mp3",
  rail: "https://www.yourdictionary.com/audio/r/ra/rail.mp3",
  rat: "https://static.sfdict.com/staticrep/dictaudio/R00/R0071700.mp3",
  receipt: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/R/1EP5EIK3KCCLA.mp3",
  ring: "https://www.onelook.com/pronounce/macmillan/US/ring-American-English-pronunciation.mp3",
  rod: "https://www.oxforddictionaries.com/media/english/uk_pron/r/rod/rod__/rod__gb_1.mp3",
  roof: "https://static.sfdict.com/staticrep/dictaudio/NEW/NEW14285.mp3",
  root: "https://www.onelook.com/pronounce/macmillan/UK/root-British-English-pronunciation.mp3",
  sail: "https://www.onelook.com/pronounce/macmillan/UK/sail-British-English-pronunciation_96148.mp3",
  school: "https://dictionary.cambridge.org/us/media/english/us_pron/s/sch/schoo/school.mp3",
  scissors: "https://www.yourdictionary.com/audio/s/sc/scissors.mp3",
  screw: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/S/1OZSV905KL11.mp3",
  seed: "https://www.onelook.com/pronounce/macmillan/UK/seed-British-English-pronunciation.mp3",
  sheep: "https://dictionary.cambridge.org/us/media/english/us_pron/s/she/sheep/sheep.mp3",
  shelf: "https://dictionary.cambridge.org/us/media/english/us_pron/s/she/shelf/shelf.mp3",
  ship: "https://www.onelook.com/pronounce/macmillan/UK/ship-British-English-pronunciation_96052.mp3",
  shirt: "https://static.sfdict.com/staticrep/dictaudio/S04/S0455000.mp3",
  shoe: "https://www.yourdictionary.com/audio/s/sh/shoe.mp3",
  skin: "https://static.sfdict.com/staticrep/dictaudio/S05/S0591300.mp3",
  skirt: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/S/X1J2UPSANGAP.mp3",
  snake: "https://dictionary.cambridge.org/us/media/english/us_pron/s/sna/snake/snake.mp3",
  sock: "https://www.onelook.com/pronounce/macmillan/US/sock-American-English-pronunciation.mp3",
  spade: "https://dictionary.cambridge.org/us/media/english/us_pron/s/spa/spade/spade.mp3",
  sponge: "https://dictionary.cambridge.org/us/media/english/us_pron/s/spo/spong/sponge.mp3",
  spoon: "https://dictionary.cambridge.org/us/media/english/us_pron/s/spo/spoon/spoon.mp3",
  spring: "https://www.yourdictionary.com/audio/s/sp/spring.mp3",
  square: "https://dictionary.cambridge.org/us/media/english/us_pron/s/squ/squar/square.mp3",
  stamp: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uks/uksta/ukstair025.mp3",
  star: "https://www.onelook.com/pronounce/macmillan/US/star-American-English-pronunciation.mp3",
  station: "https://www.oxforddictionaries.com/media/english/uk_pron/s/sta/stati/station__gb_1.mp3",
  stem: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/S/ZDWZW6NJ48GN.mp3",
  stick: "https://www.yourdictionary.com/audio/s/st/stick.mp3",
  stocking: "https://www.onelook.com/pronounce/macmillan/US/stocking-American-English-pronunciation.mp3",
  stomach: "https://dictionary.cambridge.org/us/media/english/us_pron/s/sto/stoma/stomach.mp3",
  store: "https://www.oxforddictionaries.com/media/english/uk_pron/s/sto/store/store__gb_1.mp3",
  street: "https://www.yourdictionary.com/audio/s/st/street.mp3",
  sun: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/S/1HZ24BZHKU3AQ.mp3",
  table: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/T/11BGOD7ISD7R7.mp3",
  tail: "https://dictionary.cambridge.org/us/media/english/us_pron/t/tai/tail_/tail.mp3",
  thread: "https://www.oxforddictionaries.com/media/english/uk_pron/t/thr/threa/thread__gb_1.mp3",
  throat: "https://img2.tfd.com/pron/mp3/en/UK/sg/sgsfdosfshddsoh7.mp3",
  thumb: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/T/1OEPJCGL42VY2.mp3",
  ticket: "https://www.onelook.com/pronounce/macmillan/US/ticket-American-English-pronunciation.mp3",
  toe: "https://www.yourdictionary.com/audio/t/to/toe.mp3",
  tongue: "https://img2.tfd.com/pron/mp3/en/US/df/dfsfskskdrsodrh7.mp3",
  tooth: "https://www.onelook.com/pronounce/macmillan/UK/tooth-British-English-pronunciation_102534.mp3",
  town: "https://dictionary.cambridge.org/us/media/english/us_pron/t/tow/town_/town.mp3",
  train: "https://static.sfdict.com/staticrep/dictaudio/T04/T0426600.mp3",
  tray: "https://dictionary.cambridge.org/us/media/english/us_pron/t/tra/tray_/tray.mp3",
  tree: "https://static.sfdict.com/staticrep/dictaudio/T04/T0461300.mp3",
  trousers: "https://static.sfdict.com/staticrep/dictaudio/T05/T0533500.mp3",
  umbrella: "https://www.yourdictionary.com/audio/u/um/umbrella.mp3",
  wall: "https://www.yourdictionary.com/audio/w/wa/wall.mp3",
  watch: "https://www.oxforddictionaries.com/media/english/uk_pron/w/wat/watch/watch__gb_1.mp3",
  wheel: "https://www.yourdictionary.com/audio/w/wh/wheel.mp3",
  whip: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukw/ukwhi/ukwhich018.mp3",
  whistle: "https://img2.tfd.com/pron/mp3/en/US/df/dfsydod5ssstsjd5hn.mp3",
  window: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukw/ukwin/ukwinde007.mp3",
  wing: "https://www.onelook.com/pronounce/macmillan/US/wing-American-English-pronunciation.mp3",
  wire: "https://www.oxforddictionaries.com/media/english/uk_pron/w/wir/wire_/wire__gb_1_8.mp3",
  worm: "https://www.onelook.com/pronounce/macmillan/UK/worm-British-English-pronunciation.mp3",
  able: "https://www.yourdictionary.com/audio/a/ab/able.mp3",
  acid: "https://static.sfdict.com/staticrep/dictaudio/A00/A0084700.mp3",
  angry: "https://www.yourdictionary.com/audio/a/an/angry.mp3",
  automatic: "https://static.sfdict.com/staticrep/dictaudio/A08/A0834800.mp3",
  beautiful: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/B/UGHOT8IUVYLC.mp3",
  black: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukb/ukbit/ukbitch026.mp3",
  boiling: "https://www.oxforddictionaries.com/media/english/uk_pron/b/boi/boili/boiling__gb_1.mp3",
  bright: "https://static.sfdict.com/staticrep/dictaudio/B06/B0615800.mp3",
  broken: "https://www.onelook.com/pronounce/macmillan/UK/broken-British-English-pronunciation.mp3",
  brown: "https://dictionary.cambridge.org/us/media/english/us_pron/b/bro/brown/brown.mp3",
  cheap: "https://www.onelook.com/pronounce/macmillan/US/cheap-American-English-pronunciation.mp3",
  chemical: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukc/ukche/ukcheer015.mp3",
  chief: "https://www.oxforddictionaries.com/media/english/uk_pron/c/chi/chief/chief__gb_1.mp3",
  clean: "https://www.oxforddictionaries.com/media/english/uk_pron/c/cle/clean/clean__gb_1.mp3",
  clear: "https://www.oxforddictionaries.com/media/english/uk_pron/c/cle/clear/clear__gb_1.mp3",
  common: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukc/ukcom/ukcommi018.mp3",
  complex: "https://dictionary.cambridge.org/us/media/english/us_pron/c/com/compl/complex_02_00.mp3",
  conscious: "https://dictionary.cambridge.org/us/media/english/us_pron/c/con/consc/conscious.mp3",
  cut: "https://www.oxforddictionaries.com/media/english/uk_pron/c/cut/cut__/cut__gb_1.mp3",
  deep: "https://dictionary.cambridge.org/us/media/english/us_pron/d/dee/deep_/deep.mp3",
  dependent: "https://www.onelook.com/pronounce/macmillan/US/dependent-American-English-pronunciation.mp3",
  early: "https://www.oxforddictionaries.com/media/english/uk_pron/e/ear/early/early__gb_1_8.mp3",
  elastic: "https://img2.tfd.com/pron/mp3/en/UK/dh/dhddd3dgssstdndohn.mp3",
  electric: "https://dictionary.cambridge.org/us/media/english/us_pron/e/eus/eus71/eus71469.mp3",
  equal: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/E/1THRQS1FKKEA3.mp3",
  fat: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukf/ukfar/ukfarth024.mp3",
  fertile: "https://www.onelook.com/pronounce/macmillan/US/fertile-American-English-pronunciation.mp3",
  first: "https://dictionary.cambridge.org/us/media/english/us_pron/f/fir/first/first.mp3",
  fixed: "https://dictionary.cambridge.org/us/media/english/us_pron/f/fix/fixed/fixed.mp3",
  flat: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/F/1661NTSQG1YO2.mp3",
  free: "https://www.oxforddictionaries.com/media/english/uk_pron/f/fre/free_/free__gb_1.mp3",
  frequent: "https://dictionary.cambridge.org/us/media/english/us_pron/u/usz/uszzz/uszzzzc068.mp3",
  full: "https://www.onelook.com/pronounce/macmillan/US/full-American-English-pronunciation.mp3",
  general: "https://www.oxforddictionaries.com/media/english/uk_pron/g/gen/gener/general__gb_1.mp3",
  good: "https://www.oxforddictionaries.com/media/english/uk_pron/g/goo/good_/good__gb_1.mp3",
  great: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukg/ukgra/ukgranu029.mp3",
  "grey/gray": "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/G/BH4N0ECSOC9H.mp3",
  hanging: "https://dictionary.cambridge.org/us/media/english/us_pron/h/han/hangi/hanging.mp3",
  happy: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukh/ukhap/ukhapha010.mp3",
  hard: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukh/ukhap/ukhapha018.mp3",
  healthy: "https://img2.tfd.com/pron/mp3/en/UK/st/stdtdsdgslstd3ylhn.mp3",
  high: "https://www.oxforddictionaries.com/media/english/uk_pron/h/hig/high_/high__gb_1.mp3",
  hollow: "https://www.oxforddictionaries.com/media/english/uk_pron/h/hol/hollo/hollow__gb_1.mp3",
  important: "https://static.sfdict.com/staticrep/dictaudio/I00/I0081100.mp3",
  kind: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/K/582IBF2Y0G2D.mp3",
  like: "https://www.onelook.com/pronounce/macmillan/US/like-American-English-pronunciation_27419.mp3",
  living: "https://www.oxforddictionaries.com/media/english/uk_pron/l/liv/livin/living__gb_1.mp3",
  long: "https://static.sfdict.com/staticrep/dictaudio/L03/L0352600.mp3",
  male: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/M/1IG0ZZFXZIFYY.mp3",
  married: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukm/ukmar/ukmarmo008.mp3",
  material: "https://www.onelook.com/pronounce/macmillan/UK/material-British-English-pronunciation.mp3",
  medical: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukm/ukmed/ukmeddl013.mp3",
  military: "https://www.onelook.com/pronounce/macmillan/US/military-American-English-pronunciation.mp3",
  natural: "https://img2.tfd.com/pron/mp3/en/UK/d5/d5dndhssstssdsshhn.mp3",
  necessary: "https://static.sfdict.com/staticrep/dictaudio/N00/N0053300.mp3",
  new: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/N/1KFD2UFA3K09Y.mp3",
  normal: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/N/KZHDAPDTZ60O.mp3",
  open: "https://img2.tfd.com/pron/mp3/en/US/d3/d3slsjdysjht.mp3",
  parallel: "https://static.sfdict.com/staticrep/dictaudio/P00/P0096700.mp3",
  past: "https://www.yourdictionary.com/audio/p/pa/past.mp3",
  physical: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/P/1ONOCAGWOFAO4.mp3",
  political: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/P/HDZGW6CF2NFJ.mp3",
  poor: "https://www.yourdictionary.com/audio/p/po/poor.mp3",
  possible: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/P/M6FMWPYIRVTO.mp3",
  present: "https://img2.tfd.com/pron/mp3/en/UK/sg/sgsksgdyssdosgsrhn.mp3",
  private: "https://www.yourdictionary.com/audio/p/pr/private.mp3",
  probable: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukp/ukpri/ukpriso023.mp3",
  quick: "https://www.oxforddictionaries.com/media/english/uk_pron/q/qui/quick/quick__gb_1.mp3",
  quiet: "https://dictionary.cambridge.org/us/media/english/us_pron/c/cal/cald4/cald4us1907.mp3",
  ready: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/R/1XOOUTSFGCFLE.mp3",
  red: "https://dictionary.cambridge.org/us/media/english/us_pron/r/rea/read_/read_read.mp3",
  regular: "https://www.onelook.com/pronounce/macmillan/US/regularity-American-English-pronunciation.mp3",
  responsible: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/R/MG59OWTU6CAE.mp3",
  right: "https://static.sfdict.com/staticrep/dictaudio/R03/R0314900.mp3",
  round: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukr/ukrou/ukrough006.mp3",
  same: "https://www.onelook.com/pronounce/macmillan/US/same-American-English-pronunciation.mp3",
  second: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uks/uksec/ukseces005.mp3",
  separate: "https://www.yourdictionary.com/audio/s/se/separate.mp3",
  serious: "https://dictionary.cambridge.org/us/media/english/us_pron/s/ser/serio/serious.mp3",
  sharp: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/S/14YPXNS9J5BG8.mp3",
  smooth: "https://www.onelook.com/pronounce/macmillan/US/smooth-American-English-pronunciation.mp3",
  sticky: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/S/EM3G2MQ60FAV.mp3",
  stiff: "https://www.onelook.com/pronounce/macmillan/UK/stiff-British-English-pronunciation.mp3",
  straight: "https://www.onelook.com/pronounce/macmillan/UK/straight-British-English-pronunciation.mp3",
  strong: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/S/178L7G0F7PSVL.mp3",
  sudden: "https://img2.tfd.com/pron/mp3/en/US/d3/d3sgssdsdydosgh7.mp3",
  sweet: "https://www.onelook.com/pronounce/macmillan/UK/sweet-British-English-pronunciation.mp3",
  tall: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/T/18YCH4FIPPDFA.mp3",
  thick: "https://dictionary.cambridge.org/us/media/english/us_pron/t/thi/thick/thick.mp3",
  tight: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/T/439L5RQLSR44.mp3",
  tired: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukt/uktip/uktippe012.mp3",
  true: "https://static.sfdict.com/staticrep/dictaudio/T05/T0538400.mp3",
  violent: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukv/ukvin/ukvineg013.mp3",
  waiting: "https://www.oxforddictionaries.com/media/english/uk_pron/w/wai/waiti/waiting__gb_1.mp3",
  warm: "https://www.oxforddictionaries.com/media/english/uk_pron/w/war/warm_/warm__gb_1.mp3",
  wet: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukw/ukwet/ukwet__001.mp3",
  wide: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/W/1LBW16MT77DJM.mp3",
  wise: "https://www.onelook.com/pronounce/macmillan/US/wise-American-English-pronunciation.mp3",
  yellow: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uky/ukyd_/ukyd___013.mp3",
  young: "https://www.yourdictionary.com/audio/y/yo/young.mp3",
  awake: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/A/PXVOKIH7GSEW.mp3",
  bad: "https://img2.tfd.com/pron/mp3/en/UK/dg/dgdhdhdshs.mp3",
  bent: "https://www.yourdictionary.com/audio/b/be/bent.mp3",
  bitter: "https://www.yourdictionary.com/audio/b/bi/bitter.mp3",
  blue: "https://dictionary.cambridge.org/us/media/english/us_pron/b/ble/blew_/blew.mp3",
  certain: "https://static.sfdict.com/staticrep/dictaudio/C02/C0281400.mp3",
  cold: "https://www.yourdictionary.com/audio/c/co/cold.mp3",
  complete: "https://www.oxforddictionaries.com/media/english/uk_pron/c/com/compl/complete__gb_1.mp3",
  cruel: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/C/1TCIB78AVVUI2.mp3",
  dark: "https://www.oxforddictionaries.com/media/english/uk_pron/d/dar/dark_/dark__gb_1.mp3",
  dead: "https://www.yourdictionary.com/audio/d/de/dead.mp3",
  dear: "https://dictionary.cambridge.org/us/media/english/us_pron/d/dea/dear_/dear.mp3",
  delicate: "https://www.oxforddictionaries.com/media/english/uk_pron/d/del/delic/delicate__gb_1.mp3",
  different: "https://www.onelook.com/pronounce/macmillan/US/different-American-English-pronunciation.mp3",
  dirty: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/D/2FSCW8Y3ADHG.mp3",
  dry: "https://www.oxforddictionaries.com/media/english/uk_pron/d/dry/dry__/dry__gb_1.mp3",
  false: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/F/ID1Y1QORNA5O.mp3",
  feeble: "https://img2.tfd.com/pron/mp3/en/US/df/dfdsdsdyddskdrh7.mp3",
  female: "https://dictionary.cambridge.org/us/media/english/us_pron/f/fem/femal/female.mp3",
  foolish: "https://www.onelook.com/pronounce/macmillan/US/foolish-American-English-pronunciation.mp3",
  future: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukf/ukfur/ukfurti021.mp3",
  green: "https://www.onelook.com/pronounce/macmillan/UK/green-British-English-pronunciation.mp3",
  ill: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uki/ukign/ukignor006.mp3",
  last: "https://www.onelook.com/pronounce/macmillan/US/last-American-English-pronunciation.mp3",
  late: "https://www.yourdictionary.com/audio/l/la/late.mp3",
  left: "https://static.sfdict.com/staticrep/dictaudio/L01/L0153500.mp3",
  loose: "https://dictionary.cambridge.org/us/media/english/us_pron/l/loo/loose/loose.mp3",
  loud: "https://img2.tfd.com/pron/mp3/en/US/dg/dgd7sksydyht.mp3",
  low: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukl/uklit/uklitig030.mp3",
  mixed: "https://dictionary.cambridge.org/us/media/english/us_pron/m/mix/mixed/mixed.mp3",
  narrow: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukn/uknar/uknark_007.mp3",
  old: "https://www.onelook.com/pronounce/macmillan/UK/old-British-English-pronunciation.mp3",
  opposite: "https://dictionary.cambridge.org/us/media/english/us_pron/o/opp/oppos/opposite.mp3",
  public: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/P/RR6J2TWOGKDB.mp3",
  rough: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/ukr/ukros/ukroset027.mp3",
  sad: "https://www.onelook.com/pronounce/macmillan/US/SAD-American-English-pronunciation.mp3",
  safe: "https://static.sfdict.com/staticrep/dictaudio/S00/S0019600.mp3",
  secret: "https://static.sfdict.com/staticrep/dictaudio/S02/S0256700.mp3",
  short: "https://dictionary.cambridge.org/us/media/english/us_pron/s/sho/short/short.mp3",
  shut: "https://dictionary.cambridge.org/us/media/english/us_pron/s/shu/shut_/shut.mp3",
  simple: "https://dictionary.cambridge.org/us/media/english/uk_pron/u/uks/uksim/uksimil006.mp3",
  slow: "https://dictionary.cambridge.org/us/media/english/us_pron/s/slo/slow_/slow.mp3",
  small: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/S/D5XS7IS8OXX1.mp3",
  soft: "https://www.onelook.com/pronounce/macmillan/US/soft-American-English-pronunciation.mp3",
  solid: "https://www.oxforddictionaries.com/media/english/uk_pron/s/sol/solid/solid__gb_1.mp3",
  special: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/S/1E50AFIPGRWWI.mp3",
  strange: "https://www.oxforddictionaries.com/media/english/uk_pron/s/str/stran/strange__gb_1.mp3",
  thin: "https://s3.amazonaws.com/audio.vocabulary.com/1.0/us/T/10WIO4OKNK9R4.mp3",
  white: "https://img2.tfd.com/pron/mp3/en/US/df/dfsydod5sydohr.mp3",
  wrong: "https://www.yourdictionary.com/audio/w/wr/wrong.mp3"
};

const TOTAL_DAYS = 15;
const TOTAL_WORDS = 850;

function makeExamples(category: BasicEnglishCategory, word: string, meaning: string) {
  if (category === 'Things-Pictured') {
    return {
      english: `I can point to the ${word} in the picture.`,
      chinese: `我能在图里指出这个“${meaning}”。`,
    };
  }

  if (category === 'Things-General') {
    return {
      english: `The word ${word} names something useful in daily life.`,
      chinese: `“${word}”说的是日常里有用的“${meaning}”。`,
    };
  }

  if (category.startsWith('Qualities')) {
    return {
      english: `The word ${word} describes a simple quality.`,
      chinese: `“${word}”描述一种简单性质：“${meaning}”。`,
    };
  }

  return {
    english: `We use ${word} to make a short Basic English sentence.`,
    chinese: `我们用“${word}”来组成一句短的基础英语。`,
  };
}

export const basicEnglishCards: BasicEnglishCard[] = WORD_GROUPS.flatMap((group) => group.words.map((sourceWord) => ({ group, sourceWord }))).map(
  ({ group, sourceWord }, index) => {
    const variants = sourceWord.split('/');
    const word = variants[0];
    const hint = ENTRY_HINTS[sourceWord] ?? ENTRY_HINTS[word] ?? { meaning: word };
    const example = makeExamples(group.category, word, hint.meaning);

    return {
      id: sourceWord.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      word,
      variants,
      variantSpelling: variants.length > 1 ? variants.slice(1).join(' / ') : undefined,
      category: group.category,
      categoryLabel: group.label,
      dayGroup: Math.floor((index * TOTAL_DAYS) / TOTAL_WORDS) + 1,
      meaningZh: hint.meaning,
      exampleEn: example.english,
      exampleZh: example.chinese,
      ipa: hint.ipa,
      audioUrl: AUDIO_URLS[sourceWord],
    } satisfies BasicEnglishCard;
  },
);

if (basicEnglishCards.length !== TOTAL_WORDS) {
  throw new Error(`Expected ${TOTAL_WORDS} Basic English cards, got ${basicEnglishCards.length}`);
}

export const basicEnglishCategories = WORD_GROUPS.map((group) => ({ value: group.category, label: group.label }));
export const basicEnglishDayCount = TOTAL_DAYS;

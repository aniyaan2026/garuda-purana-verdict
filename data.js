const GARUDA_VERDICTS = [

  {
    id: "false-witness",
    keywords: [
      "false witness", "false testimony", "false evidence",
      "lie in court", "lying in court", "give false evidence",
      "give false testimony"
    ],
    sin: "False Witness / False Testimony",
    naraka: "RAURAVA",
    punishment:
      "The sinner is subjected to the terrible torments of Raurava. The text associates Raurava with false witness and untruth.",
    source:
      "Garuda Purana, Preta Kalpa, Naraka description."
  },

  {
    id: "intoxicants",
    keywords: [
      "drink intoxicants", "drinks intoxicants",
      "intoxication", "drunkenness", "drunk",
      "drinks alcohol", "alcohol abuse"
    ],
    sin: "Intoxicant Use",
    naraka: "VAITARANI / NARAKA",
    punishment:
      "The sinner is sent along the path of Yama and is subject to the punishments assigned to sinful conduct.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "infanticide",
    keywords: [
      "kill a baby", "kills a baby", "kill infant",
      "kills infant", "infanticide", "murder infant",
      "murder baby"
    ],
    sin: "Infanticide",
    naraka: "VAITARANI",
    punishment:
      "The sinner goes along the dreadful path of Yama and falls into Vaitarani.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "embryo-destruction",
    keywords: [
      "destroy embryo", "destroys embryo",
      "destroying embryo", "kill unborn child",
      "kills unborn child", "destroy unborn",
      "destroy unborn child"
    ],
    sin: "Destruction of the Embryo",
    naraka: "RODHA / NARAKA",
    punishment:
      "The text associates the destroyer of the embryo with the hells of Yama; a later Naraka classification specifically places such a sinner among the punishments associated with Rodha.",
    source:
      "Garuda Purana, Preta Kalpa, Naraka classifications."
  },

  {
    id: "theft-teacher",
    keywords: [
      "steal teacher's property",
      "steal teachers property",
      "steal guru property",
      "steal guru's wealth",
      "steal teacher wealth"
    ],
    sin: "Theft of a Teacher's Property",
    naraka: "VAITARANI",
    punishment:
      "The sinner is sent along Yama's path and falls into the dreadful Vaitarani.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "temple-theft",
    keywords: [
      "steal temple property",
      "steals temple property",
      "stealing temple property",
      "steal temple wealth",
      "steal from temple"
    ],
    sin: "Theft of Temple Property",
    naraka: "VAITARANI",
    punishment:
      "The sinner goes along Yama's path and falls into Vaitarani.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "theft-womens-property",
    keywords: [
      "steal woman's property",
      "steal women's property",
      "steals woman's property",
      "steal a woman's possessions",
      "steal women's possessions"
    ],
    sin: "Theft of Women's Property",
    naraka: "VAITARANI",
    punishment:
      "The sinner is sent along the path of Yama and falls into Vaitarani.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "theft-child-property",
    keywords: [
      "steal child's property",
      "steal children's property",
      "steals child's possessions",
      "steal children possessions",
      "steal from child"
    ],
    sin: "Theft of a Child's Property",
    naraka: "VAITARANI",
    punishment:
      "The sinner goes along Yama's path toward Vaitarani.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "unpaid-debt",
    keywords: [
      "do not repay debt",
      "does not repay debt",
      "doesn't repay debt",
      "refuse to repay debt",
      "refuses to repay debt",
      "never repay debt",
      "not paying debt",
      "doesn't pay debt"
    ],
    sin: "Failure to Repay a Debt",
    naraka: "VAITARANI",
    punishment:
      "The sinner is sent along Yama's path and falls into the terrible Vaitarani.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "misappropriation-deposit",
    keywords: [
      "misappropriate deposit",
      "misappropriates deposit",
      "keep someone's deposit",
      "steal someone's deposit",
      "take deposited money",
      "refuse to return deposit"
    ],
    sin: "Misappropriation of a Deposit",
    naraka: "VAITARANI",
    punishment:
      "The sinner goes along the dreadful path of Yama and falls into Vaitarani.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "betray-confidence",
    keywords: [
      "betray confidence",
      "betrays confidence",
      "betrayed confidence",
      "betray someone's trust",
      "betrays someone's trust",
      "break confidence",
      "reveal someone's secret"
    ],
    sin: "Betrayal of Confidence",
    naraka: "VAITARANI",
    punishment:
      "The sinner is counted among those who fall into Vaitarani.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "poisoning",
    keywords: [
      "poison someone",
      "poisons someone",
      "poison a person",
      "poisoning",
      "kill with poison",
      "kills with poison",
      "poison someone's food",
      "poison food"
    ],
    sin: "Killing by Poisonous Food",
    naraka: "VAITARANI",
    punishment:
      "The person who kills with poisonous food is listed among those who fall into Vaitarani.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "malign-merit",
    keywords: [
      "malign someone's merit",
      "depreciate someone's merit",
      "belittle good people",
      "belittle someone's achievements",
      "put down good people",
      "deliberately discredit good person"
    ],
    sin: "Maliciously Depreciating Another's Merit",
    naraka: "VAITARANI",
    punishment:
      "The sinner is placed on the path of Yama and falls into Vaitarani.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "jealousy",
    keywords: [
      "jealous of virtuous people",
      "jealous of good people",
      "envy good people",
      "envies good people",
      "envy someone's merit",
      "jealousy of good people"
    ],
    sin: "Jealousy of Those Who Possess Merit",
    naraka: "VAITARANI",
    punishment:
      "The text includes those who are jealous of people possessing merit among the sinners who travel Yama's path.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "wicked-company",
    keywords: [
      "associate with wicked people",
      "associates with wicked people",
      "keep bad company",
      "bad company",
      "evil company",
      "associate with criminals"
    ],
    sin: "Attachment to Wicked Company",
    naraka: "VAITARANI",
    punishment:
      "The sinner is included among those who proceed along the miserable way of Yama.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "reject-good-company",
    keywords: [
      "avoid good people",
      "avoids good people",
      "reject good people",
      "rejects good company",
      "turn away from good people",
      "avoid virtuous people"
    ],
    sin: "Turning Away from the Company of the Good",
    naraka: "VAITARANI",
    punishment:
      "The text places such people among those who travel the road of Yama.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "disrespect-pilgrimage",
    keywords: [
      "despise pilgrimage",
      "despises pilgrimage",
      "mock pilgrimage",
      "insult pilgrimage",
      "disrespect pilgrimage"
    ],
    sin: "Disparaging Places of Pilgrimage",
    naraka: "VAITARANI",
    punishment:
      "Such conduct is included among the sins leading onto Yama's path.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "disrespect-teacher",
    keywords: [
      "despise teacher",
      "despises teacher",
      "insult teacher",
      "insults guru",
      "insult guru",
      "disrespect guru",
      "disrespect teacher"
    ],
    sin: "Disrespect toward a Teacher",
    naraka: "SHABALA",
    punishment:
      "The Naraka classification describes one who despises a guru and attacks him with words as going to Shabala.",
    source:
      "Garuda Purana, Preta Kalpa, Naraka classification."
  },

  {
    id: "evil-speech",
    keywords: [
      "evil words",
      "speaks evil words",
      "speak evil words",
      "cruel speech",
      "cruel words",
      "malicious speech",
      "malicious words",
      "hurt people with words"
    ],
    sin: "Evil / Malicious Speech",
    naraka: "VAITARANI",
    punishment:
      "The text lists those who speak evil words among sinners who travel the way of Yama.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "enjoy-misery",
    keywords: [
      "enjoy others misery",
      "enjoys others misery",
      "happy when others suffer",
      "enjoy seeing people suffer",
      "enjoy seeing others suffer",
      "takes pleasure in suffering"
    ],
    sin: "Taking Pleasure in Another's Misery",
    naraka: "VAITARANI",
    punishment:
      "The text specifically includes people who rejoice at seeing others miserable among those who travel the path of Yama.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "make-happy-miserable",
    keywords: [
      "make happy people miserable",
      "makes happy people miserable",
      "make someone miserable",
      "deliberately make someone unhappy",
      "destroy someone's happiness",
      "take away someone's happiness"
    ],
    sin: "Deliberately Making the Happy Miserable",
    naraka: "VAITARANI",
    punishment:
      "The text includes those who attempt to make happy people miserable among the sinners who travel Yama's path.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "reject-good-counsel",
    keywords: [
      "ignore good advice",
      "ignores good advice",
      "refuse good counsel",
      "refuses good counsel",
      "does not listen to good advice",
      "won't listen to good advice"
    ],
    sin: "Refusal to Hear Good Counsel",
    naraka: "VAITARANI",
    punishment:
      "The text includes those who refuse to listen to good counsel or the teaching of the Shastras among sinners who proceed on Yama's path.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "proud-ignorance",
    keywords: [
      "pretend to be learned",
      "pretends to be learned",
      "think they know everything",
      "thinks he knows everything",
      "arrogant about knowledge",
      "false scholar",
      "pretends to be knowledgeable"
    ],
    sin: "Arrogant Pretence of Knowledge",
    naraka: "VAITARANI",
    punishment:
      "The text includes the self-satisfied and those who consider themselves learned while rejecting proper counsel among sinners on Yama's path.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "wrongdoing-delight",
    keywords: [
      "delight in wrongdoing",
      "enjoy wrongdoing",
      "enjoys doing wrong",
      "takes pleasure in sin",
      "loves doing evil",
      "habitual wrongdoing"
    ],
    sin: "Delighting in Wrongdoing",
    naraka: "HELLS ACCORDING TO DEED",
    punishment:
      "The text says those who always delight in wrong deeds and turn away from good deeds go from hell to hell, from misery to misery and from fear to fear.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "animal-killing",
    keywords: [
      "kill animals",
      "kills animals",
      "killing animals",
      "kill birds",
      "kills birds",
      "kill animals for pleasure",
      "kill animals for sense gratification",
      "animal cruelty",
      "hunt animals",
      "hunting animals"
    ],
    sin: "Killing Animals for Sense Gratification",
    naraka: "VAITARANI",
    punishment:
      "The Garuda Purana source describes a person who kills animals for sense gratification among those who fall into Vaitarani.",
    source:
      "Garuda Purana, Preta Kalpa, Vaitarani account."
  },

  {
    id: "take-away-given-property",
    keywords: [
      "take back what he gave",
      "take back a gift",
      "takes back gift",
      "take back donated property",
      "withdraw a donation",
      "takes back what was given"
    ],
    sin: "Taking Back What Was Given",
    naraka: "VAITARANI",
    punishment:
      "The source describes the person who takes away what he has given as falling into Vaitarani.",
    source:
      "Garuda Purana, Preta Kalpa, Vaitarani account."
  },

  {
    id: "obstruct-yajna",
    keywords: [
      "obstruct sacrifice",
      "obstruct yajna",
      "obstruct yagna",
      "prevent yajna",
      "prevent sacrifice",
      "hinder religious ceremony",
      "stop religious ceremony"
    ],
    sin: "Obstructing a Sacrificial Rite",
    naraka: "VAITARANI",
    punishment:
      "The source includes those who create obstacles to the performance of Yajnas among those who fall into Vaitarani.",
    source:
      "Garuda Purana, Preta Kalpa, Vaitarani account."
  },

  {
    id: "occupy-others-land",
    keywords: [
      "occupy someone else's land",
      "occupy others land",
      "grab someone's land",
      "land grabbing",
      "illegally occupy land",
      "take another person's land"
    ],
    sin: "Wrongful Occupation of Another's Land",
    naraka: "VAITARANI",
    punishment:
      "The source describes one who occupies another person's land and ploughs up grazing grounds as falling into Vaitarani.",
    source:
      "Garuda Purana, Preta Kalpa, Vaitarani account."
  },

  {
    id: "destroy-grazing-land",
    keywords: [
      "destroy grazing land",
      "plough grazing pasture",
      "destroy pasture",
      "destroy grazing grounds",
      "damage grazing land"
    ],
    sin: "Destruction of Grazing Grounds",
    naraka: "VAITARANI",
    punishment:
      "The source includes those who plough up grazing pastures among those who fall into Vaitarani.",
    source:
      "Garuda Purana, Preta Kalpa, Vaitarani account."
  },

  {
    id: "make-poor-poorer",
    keywords: [
      "make poor people suffer",
      "exploit poor people",
      "exploit the poor",
      "take advantage of poor people",
      "take advantage of the poor"
    ],
    sin: "Exploitation Causing Misery",
    naraka: "VAITARANI / ACCORDING TO DEED",
    punishment:
      "The Garuda Purana's broader classification condemns conduct that deliberately causes misery and places such sinners on Yama's path.",
    source:
      "Garuda Purana, Preta Kalpa, Chapter IV."
  },

  {
    id: "break-vow",
    keywords: [
      "break vow",
      "breaks vow",
      "breaking a vow",
      "break religious vow",
      "break religious vows",
      "violate a vow"
    ],
    sin: "Breaking a Religious Vow",
    naraka: "SANDAMSHA",
    punishment:
      "The Naraka classification states that neglect of sacrifice and breaking one's vowed observances leads to Sandamsha.",
    source:
      "Garuda Purana, Preta Kalpa, Naraka classification."
  },

  {
    id: "neglect-sacrifice",
    keywords: [
      "neglect sacrifice",
      "neglect yajna",
      "neglect yagna",
      "abandon sacrifice",
      "fail to perform sacrifice"
    ],
    sin: "Neglect of Sacrificial Duty",
    naraka: "SANDAMSHA",
    punishment:
      "The text states that neglect of sacrificial worship leads to Sandamsha.",
    source:
      "Garuda Purana, Preta Kalpa, Naraka classification."
  },

  {
    id: "wrathful-impure",
    keywords: [
      "habitually wrathful",
      "always angry",
      "violent anger",
      "impure conduct",
      "habitually angry"
    ],
    sin: "Wrathful / Impure Conduct",
    naraka: "ASIPATRAVANA",
    punishment:
      "The Naraka classification states that the impure and the wrathful are punished in Asipatravana, the forest of sword-like leaves.",
    source:
      "Garuda Purana, Preta Kalpa, Naraka classification."
  }

];

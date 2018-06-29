export default class Logger {
  constructor() {

  }

  notify({event}) {
    const sentencesFromJarJar = [
      "Mesa called Jar Jar Binks, mesa your humble servant!",
      "Ex-squeeze me, but the mostest safest place would be Gunga City. 'Tis where I grew up. 'Tis a hidden city.",
      "Hmm... yousa point is well seen. Dis way, hurry!",
      "Yousa should follow me now, okeeday? My warning yous: Gungans no like outsiders. Don't 'spect a warm welcome.",
      "How wuude!",
      "Count me outta dis one. Better dead here than deader in the Core-- Ye Gods, whatta mesa sayin'?!",
      "You'd say, \"boom de gasa\"... den crashded da boss's heyblibber... den banished.",
      "Uh-oh! Biiiiiig Goober fish!",
      "Monsters out dere, leakin in here, all sinkin an no power? When are yousa tinkin' wesa in trouble?!",
      "Oh, maxi big da Force...",
      "Den BOOOM! Getin very scared and grabin dat Jedi, den pah... mesa here.",
      "Mesa hatin' crunchin'. Dat's the last thing mesa want.",
      "Dissen gonna be bery messy! Me no watchin!",
      "Gungans no dyin' withouta fight. Wesa warriors. Wesa got a grand army. That's why you no likin' us, mesa thinks.",
      "Icky, icky goo!",
      "Obi? Obi! Mesa So Smilen To Seein Yousa!",
      "Senator Padme. Mesa Palos Here! Lookie, Lookie, Senator. Desa Jedi Arriven.",
      "Mesa Busten Wit Happiness Seein Yousa Again, Ani. Shesa Happy. Happier Den Mesa Seein Her In A Longo Time. ",
      "It's-A Clear Desa Separatists Made A Pact Wesa Desa Federation Du Trade. Senators, \"Dellow Felagates.\" In Response To This Direct Threat To The Republic, Mesa Propose That The Senate Give Immediately Emergency Powers To The Supreme Chancellor."
    ]

    const randomNumber = Math.floor(Math.random() * (sentencesFromJarJar.length - 1))
    console.warn('JarJar Binks says:', sentencesFromJarJar[randomNumber])
  }
}
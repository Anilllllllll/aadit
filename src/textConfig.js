// NOTICE: Personal Use Only
// This content is licensed for unlimited personal use only. Resale, redistribution,
// modification for resale, or any form of commercial use is strictly prohibited.
//
// Enforcement: Any misuse or violation of these terms will result in account
// takedown and may lead to legal action.
//
// Original Creator: Pinak Kundu
// Date: 12th February 2026, 9:25 PM
import pic1 from "./imgs/pic1.jpg";
import pic2 from "./imgs/pic2.gif";
import pic3 from "./imgs/pic3.jpg";

import music1 from "./music/music1.mp3";
import music2 from "./music/music2.mp3";
import music3 from "./music/music3.mp3";

const textConfig = {
  landing: {
    welcome: "Hey, I made something for you... ✨",
    title: "See what I have made for you 💌",
    subtitle: "Just a few thoughts, and a little question at the end. 💫",
    lastLine: "Tap below when you’re ready 💖",
    button: "Open This 💞",
    footer: "Made with warmth, care, and a small spark ✨",
  },

  letter: {
    headerTitle: "A Little Note 💌",
    headerSubtitle: "Just because it felt right ✨",
    letterHeaderTitle: "Hey Amisha 💖",
    letterMessage: `I wanted to do something small today Amisha, simply because you matter to me.

You show up with a calm kind of kindness that’s easy to be around. The way you listen, notice the little things, and stay genuine means a lot. 🌙

I don’t know where this goes, and that’s okay. I just wanted you to know I appreciate you, and I’m glad we have this connection. 🤍
`,
    letterSignature: "Always 💫",
    envelopeClickHint: "Click to open ✨",
    specialDeliveryText: "A Note For You 💌",
    continueButton: "Keep Going ✨"
  },

  chillZone: {
    heading: "Songs That Feel Like Us 🎵",
    subheading: "Hope they make you smile ✨",
    chooseTrackHint: "Pick one & enjoy ✨",
    continueButton: "Next ✨",
    tracks: [
      { id: 1, title: "Tum Ho Toh", caption: "Some feelings feel calm and deep 💫", src: music1 },
      { id: 2, title: "Dooron Dooron", caption: "Because closeness matters 🤍", src: music2 },
      { id: 3, title: "Tum Mile", caption: "When emotions say more than words 💖", src: music3 }
    ]
  },

  memoryGame: {
    heading: "Memory Match 💞",
    subheading: "A little fun break 💫",
    instruction: "Match the pairs and test your memory 💖",
    continueButton: "Next ✨",
    pairs: ["💬", "🌿", "⭐", "💖", "💘", "🤍"]
  },

  cards: {
    heading: "Some random thoughts 💭",
    subheading: "the kind that matter ✨",
    instruction: "Simple thoughts, genuine feelings 💞",
    continueButton: "Next ✨",
    card1Front: "Us? 💫",
    card2Front: "A few flowers, just because 🌷",
    card3Front: "A small surprise ✨",
    images: [pic1, pic2, pic3],
  },

  whySpecial: {
    heading: "Why You Matter 💖",
    subheading: "for the little reasons ✨",
    continueButton: "Next ✨",
    reasons: [
      { title: "Genuine Heart", description: "You care in ways that feel real and unforced", emoji: "✨" },
      { title: "Calm Presence", description: "Being with you feels peaceful and grounding", emoji: "🌸" },
      { title: "Kind Nature", description: "Your kindness shows up naturally, without trying", emoji: "🤍" },
      { title: "You Listen", description: "You pay attention, remember things, and it shows", emoji: "✨" },
      { title: "Soft Strength", description: "Gentle, steady, and emotionally present", emoji: "🌙" },
      { title: "Just You", description: "Authentic, honest, and quietly special", emoji: "💫" }
    ]
  },

  finalLetter: {
    title: "One Last Thought 💌",
    sealingText: "Ending this softly...",
    sealButton: "Seal It",
    restartButton: "Restart",
    sealedTitle: "Sent With Care",
    sealedSubtitle: "Just for you",
    typedDefault: "Always 💫",
    experienceAgain: "See Again ✨",
    sendKissButton: "Send a Soft Hug 🫂",
    dateLocale: "en-US",
    letterGreeting: "Hey Amisha 💖",
    letterParagraphs: [
      "This wasn’t about perfection, just honesty. ✨",
      "I wanted you to feel appreciated, and a little bit chosen. 🤍",
      "So here’s my small proposal... 💫",
      "Will you be my Valentine? 💘"
    ],
    sealingNote: ""
  },

  common: {
    continue: "Next ✨",
    close: "Close",
    ok: "Okay 💖"
  },

  loading: {
    title: "Something Special ✨",
    subtitle: "is being prepared for you... 💫"
  },

  navigation: {
    heading: "Explore",
    footerText: "Made with care for you 💞",
    sections: [
      { id: 0, label: "Start", icon: "✨" },
      { id: 1, label: "Activities", icon: "🎭" },
      { id: 2, label: "Chill Zone", icon: "🎵" },
      { id: 3, label: "Memory Game", icon: "🧠" },
      { id: 4, label: "Moments", icon: "📸" },
      { id: 5, label: "Why Special", icon: "💕" },
      { id: 6, label: "Letter", icon: "💌" }
    ]
  },

  gameStats: {
    moves: "Moves",
    matched: "Matched"
  },

  cassetteLabel: {
    sideA: "Side A"
  }
};

export default textConfig;

import { useState } from 'react'
import './App.css'

interface Concept {
  id: string
  title: string
  chapter: number
  icon: string
  summary: string
  bookClaim: string
  analysis: {
    verdict: 'supported' | 'partial' | 'unsupported' | 'philosophical'
    truthScore: number
    explanation: string
    sources: string[]
  }
  keyPoints: string[]
  relatedConcepts: string[]
}

const concepts: Concept[] = [
  {
    id: 'light-universe',
    title: 'The Light Universe',
    chapter: 1,
    icon: '\u2600\uFE0F',
    summary: 'The book claims we live inside a lightwave universe where all things are created out of light.',
    bookClaim: 'Low-vibrating light turns into matter, high-vibrating matter turns back into light. God is thinking mind, the substance of God is light.',
    analysis: {
      verdict: 'partial',
      truthScore: 55,
      explanation: 'There is a kernel of truth here. Einstein\'s E=mc\u00B2 does show matter and energy are interconvertible. Quantum physics confirms that matter has wave-particle duality. However, the book oversimplifies this into a mystical framework, equating physical light with consciousness and divine thought \u2014 which is a philosophical claim, not a scientific one. Walter Russell, cited heavily, was an artist and philosopher, not a physicist.',
      sources: ['Einstein\'s Special Relativity (1905)', 'Quantum Field Theory', 'Walter Russell \u2014 The Universal One (1926)']
    },
    keyPoints: [
      'E=mc\u00B2 confirms matter-energy equivalence',
      'Quantum physics shows particles have wave properties',
      'Equating physical light with consciousness is metaphorical, not scientific',
      'Walter Russell was a sculptor/philosopher, not a peer-reviewed scientist'
    ],
    relatedConcepts: ['pineal-gland', 'vibration-law']
  },
  {
    id: 'human-hue-man',
    title: 'Human = Hue Man',
    chapter: 1,
    icon: '\uD83C\uDF08',
    summary: 'The book claims "human" literally means "a hue of man" \u2014 a being of color/light frequency.',
    bookClaim: 'As a HUE MAN, we are an attribute of a colour. Each individual is the mind, not the physical body. The mind is like a frequency tuner.',
    analysis: {
      verdict: 'unsupported',
      truthScore: 10,
      explanation: 'This is a false etymology. "Human" comes from Latin "humanus," related to "homo" (man) and "humus" (earth/ground). It has no connection to "hue." This is a common technique in esoteric texts: breaking words apart to create symbolic meaning that isn\'t historically accurate. The philosophical point about consciousness being primary is a legitimate philosophical position (idealism), but the etymological argument is fabricated.',
      sources: ['Oxford English Dictionary \u2014 "human"', 'Latin Etymology: humanus \u2192 homo \u2192 humus', 'Philosophy of Mind: Idealism vs Materialism']
    },
    keyPoints: [
      '"Human" derives from Latin humanus/homo/humus (earth)',
      'Folk etymology is not actual etymology',
      'The mind-body question is legitimate philosophy',
      'Idealism (mind is primary) is a real philosophical tradition'
    ],
    relatedConcepts: ['light-universe', 'pineal-gland']
  },
  {
    id: 'christ-oil',
    title: 'The Christ Oil',
    chapter: 2,
    icon: '\u2697\uFE0F',
    summary: 'A monthly sacred fluid released from the brain travels down the spine and, if preserved, rises back up to regenerate the body.',
    bookClaim: 'When the Moon enters your Sun sign, a psycho-physical oil is released from the claustrum in the brain, down the spine to the sacrum bone. If preserved through diet and sexual retention, kundalini energy raises it back up through the 33 vertebrae.',
    analysis: {
      verdict: 'unsupported',
      truthScore: 10,
      explanation: 'The claustrum is a real brain structure, but it does not "release oil" monthly based on zodiac positions. Cerebrospinal fluid (CSF) is real but circulates continuously \u2014 it doesn\'t travel down and back up the spine in a monthly cycle tied to astrology. The spine has 33 vertebrae (true), but connecting this to Jesus dying at 33 is numerological pattern-matching, not anatomy. This concept blends real anatomical terms with completely invented physiology.',
      sources: ['Neuroanatomy: The Claustrum (Crick & Koch, 2005)', 'CSF Circulation \u2014 standard physiology', 'Spinal anatomy \u2014 33 vertebrae is correct']
    },
    keyPoints: [
      'The claustrum is real but doesn\'t produce monthly "oil"',
      'CSF circulates continuously, not on a zodiac cycle',
      'The spine does have 33 vertebrae \u2014 that part is true',
      'Connecting 33 vertebrae to Jesus at 33 is numerology',
      'Sexual retention has no proven neurological super-benefits'
    ],
    relatedConcepts: ['kundalini', 'pineal-gland', 'three-wise-men']
  },
  {
    id: 'pineal-gland',
    title: 'The Pineal Gland / Third Eye',
    chapter: 7,
    icon: '\uD83D\uDC41\uFE0F',
    summary: 'The pineal gland is presented as the seat of consciousness, the literal third eye, and gateway to spiritual planes.',
    bookClaim: 'The pineal gland is the seat of the soul/throne of God. It contains microcrystals that receive and emit frequencies. Fluoride calcifies it. The Vatican suppressed this knowledge.',
    analysis: {
      verdict: 'partial',
      truthScore: 35,
      explanation: 'The pineal gland does produce melatonin and contains calcite microcrystals (true). Descartes did call it "the seat of the soul" (historical fact). However: it is NOT a literal eye or portal to other dimensions. Fluoride can accumulate in the pineal (some evidence), but "calcification" suppressing spiritual powers is unproven. The Vatican conspiracy claim is unfounded. The concept of the third eye comes from Hindu/yogic traditions where it represents inner wisdom \u2014 a metaphorical concept the book literalizes.',
      sources: ['Descartes \u2014 Treatise of Man (1664)', 'Luke et al. \u2014 Fluoride deposition in aged pineal gland (2001)', 'Arendt \u2014 Melatonin and the Pineal Gland (1995)', 'Hindu tradition: Ajna chakra']
    },
    keyPoints: [
      'Pineal gland does produce melatonin \u2014 true',
      'Contains calcite microcrystals \u2014 true',
      'Descartes called it "seat of the soul" \u2014 true (historical)',
      'Fluoride accumulation has some evidence; spiritual effects do not',
      '"Third eye" is metaphorical in Hindu tradition, not a literal organ',
      'No evidence Vatican suppressed pineal gland knowledge'
    ],
    relatedConcepts: ['christ-oil', 'kundalini', 'meditation']
  },
  {
    id: 'kundalini',
    title: 'Kundalini Energy',
    chapter: 6,
    icon: '\uD83D\uDC0D',
    summary: 'Serpent energy coiled at the base of the spine that, when awakened, rises through chakras to the crown.',
    bookClaim: 'Moses lifting the serpent = raising kundalini. The medical caduceus represents the two kundalini channels (ida and pingala) around the spine. Raising kundalini activates the pineal gland and grants out-of-body experiences.',
    analysis: {
      verdict: 'philosophical',
      truthScore: 40,
      explanation: 'Kundalini is a genuine concept in Hindu and yogic traditions dating back thousands of years. Many meditators report real physiological experiences (heat, tingling, altered states) during kundalini practices. However, equating it with Moses lifting the serpent is syncretism \u2014 connecting unrelated traditions. The medical symbol (Rod of Asclepius, not the caduceus) has Greek origins unrelated to kundalini. The ida/pingala/sushumna system is from yogic anatomy, which is an energetic model, not physical anatomy.',
      sources: ['Yoga Sutras of Patanjali', 'Sat-Cakra-Nirupana (16th century tantric text)', 'Rod of Asclepius vs Caduceus \u2014 separate symbols', 'Greyson (2000) \u2014 Near-death experiences and kundalini']
    },
    keyPoints: [
      'Kundalini is a real yogic/Hindu tradition, thousands of years old',
      'Subjective experiences during practice are widely reported',
      'The medical symbol (Rod of Asclepius) is Greek, not kundalini-related',
      'Connecting Moses to kundalini is cross-cultural interpretation, not fact',
      'Chakras are an energetic model, not found in physical anatomy'
    ],
    relatedConcepts: ['christ-oil', 'pineal-gland', 'meditation']
  },
  {
    id: 'three-wise-men',
    title: 'Three Wise Men = Brain Glands',
    chapter: 5,
    icon: '\uD83E\uDDE0',
    summary: 'The three wise men represent the pineal, pituitary, and thalamus glands in the brain.',
    bookClaim: 'The three wise men presenting gifts to Christ represent the three brain glands producing serotonin, melatonin, and dopamine. Santa Claus = Claustrum. Presents down the chimney = fluids down the spine.',
    analysis: {
      verdict: 'unsupported',
      truthScore: 10,
      explanation: 'This is allegorical reinterpretation presented as hidden truth. The three wise men (Magi) in Matthew\'s gospel are understood historically as Zoroastrian astrologer-priests. The pineal does produce melatonin, but serotonin is mainly from the gut (not the pituitary), and the thalamus is a relay station, not primarily a dopamine producer. "Claustrum" and "Claus" have different etymological roots. This is creative symbolic interpretation, not anatomy or history.',
      sources: ['Matthew 2:1-12 \u2014 historical context of the Magi', 'Neuroanatomy of serotonin production (90% is in the gut)', 'Etymology: claustrum (Latin: enclosure) vs Claus (Greek: Nikolaos)']
    },
    keyPoints: [
      'The Magi were likely Zoroastrian priest-astrologers',
      'Serotonin is primarily produced in the gut, not the pituitary',
      'The thalamus relays sensory info; not primarily about dopamine',
      '"Claustrum" and "Santa Claus" have different etymological origins',
      'This is creative allegory, not hidden neuroanatomy'
    ],
    relatedConcepts: ['christ-oil', 'pineal-gland']
  },
  {
    id: 'vibration-law',
    title: 'The Seven Universal Laws',
    chapter: 118,
    icon: '\u2696\uFE0F',
    summary: 'Seven Hermetic laws governing reality: Mentalism, Correspondence, Vibration, Polarity, Rhythm, Cause & Effect, Gender.',
    bookClaim: 'Everything in the universe is in constant vibration. As above, so below \u2014 patterns repeat across all levels of existence. These laws govern manifestation of thoughts and desires.',
    analysis: {
      verdict: 'philosophical',
      truthScore: 55,
      explanation: 'The Seven Hermetic Principles come from "The Kybalion" (1908), attributed to "Three Initiates." They are a legitimate philosophical framework from the Western esoteric tradition. Vibration has parallels in physics (all matter vibrates at atomic level). "As above, so below" has parallels in fractal geometry. However, these are philosophical principles, not scientific laws. They cannot be used to "manifest" desires in the way the book implies \u2014 that crosses into magical thinking.',
      sources: ['The Kybalion (1908) \u2014 Three Initiates', 'Hermetica \u2014 attributed to Hermes Trismegistus', 'String Theory \u2014 vibrating strings (theoretical physics)', 'Mandelbrot \u2014 Fractal Geometry of Nature (1982)']
    },
    keyPoints: [
      'The Hermetic Principles are a real esoteric tradition',
      'The Kybalion (1908) is the main modern source',
      'Physics confirms all matter vibrates at atomic/molecular level',
      'Fractal geometry shows self-similar patterns across scales',
      '"Manifesting" through vibration is not scientifically validated',
      'These are philosophical frameworks, not natural laws'
    ],
    relatedConcepts: ['light-universe', 'kabbalah']
  },
  {
    id: 'flat-earth',
    title: 'The Heliocentric "Scam"',
    chapter: 48,
    icon: '\uD83C\uDF0D',
    summary: 'The book implies heliocentrism is a deception, citing repeating 666 patterns in Earth measurements.',
    bookClaim: 'Earth\'s tilt is 66.6 degrees, circumference is 6x6x600 nautical miles, curvature is 0.666 ft/mi squared, we orbit at 66,600 mph. Coincidence?',
    analysis: {
      verdict: 'unsupported',
      truthScore: 5,
      explanation: 'This is numerological cherry-picking. Earth\'s axial tilt is 23.44 degrees (so 90 minus 23.44 = 66.56, rounded to 66.6). The orbital speed is approximately 66,600 mph. But these are coincidences in our arbitrary measurement systems (miles, degrees). In metric or other units, the "666" patterns disappear. The circumference in kilometers is approximately 40,075 \u2014 no 666. This is a classic case of confirmation bias: looking for a pattern and finding it by choosing specific units and roundings.',
      sources: ['NASA \u2014 Earth Fact Sheet', 'Geodesy \u2014 WGS84 reference ellipsoid', 'Confirmation bias \u2014 Nickerson (1998)']
    },
    keyPoints: [
      'The numbers only work in specific imperial units',
      'In metric, the 666 patterns disappear entirely',
      'This is textbook confirmation bias / numerology',
      'Earth\'s shape is confirmed by GPS, satellites, physics, and direct observation',
      'Flat earth claims contradict all of modern physics and navigation'
    ],
    relatedConcepts: ['astrotheology']
  },
  {
    id: 'astrotheology',
    title: 'Astrotheology \u2014 Jesus as the Sun',
    chapter: 98,
    icon: '\uD83C\uDF05',
    summary: 'Religious figures are personifications of the Sun\'s journey through the zodiac and seasons.',
    bookClaim: 'Egyptian sun gods (Horus, Set, Ra, Osiris) represent the four states of the sun. Jesus is a solar myth. Horus = Hours, Horizon = "Horus is rising," Set = Satan = Sunset.',
    analysis: {
      verdict: 'partial',
      truthScore: 35,
      explanation: 'Astrotheology is a real field of study. Some scholars argue solar symbolism influenced religious narratives. Solar imagery does appear in many religions. However: "Horus" doesn\'t etymologically mean "hours" (it comes from Egyptian "Heru"). "Horizon" comes from Greek "horiz\u014Dn" (limiting), not Horus. The Jesus-as-pure-solar-myth theory is rejected by mainstream historians \u2014 most scholars agree a historical Jesus existed. The etymological wordplay is creative but linguistically false.',
      sources: ['Ehrman \u2014 Did Jesus Exist? (2012)', 'Egyptian language: Heru/Hor', 'Greek etymology: horiz\u014Dn', 'Solar mythology comparative studies']
    },
    keyPoints: [
      'Solar symbolism exists in many religions \u2014 that part is real',
      'Astrotheology is a legitimate (if fringe) academic field',
      '"Horus" to "hours" is a false etymology',
      '"Horizon" is Greek, not related to Horus',
      'Most historians affirm a historical Jesus existed',
      'Religious narratives can have symbolic layers without being purely astronomical'
    ],
    relatedConcepts: ['christ-oil', 'flat-earth', 'kabbalah']
  },
  {
    id: 'kabbalah',
    title: 'Kabbalah Tree of Life',
    chapter: 68,
    icon: '\uD83C\uDF33',
    summary: 'The Kabbalistic Tree of Life maps spiritual centers to the human body and planetary correspondences.',
    bookClaim: 'The Tree of Life shows the path from Kingdom (physical) to Crown (divine consciousness). Each sephirah corresponds to a planet, body part, and state of consciousness.',
    analysis: {
      verdict: 'philosophical',
      truthScore: 60,
      explanation: 'Kabbalah is a genuine Jewish mystical tradition dating to the 12th-13th century (though with earlier roots). The Tree of Life with its 10 sephirot is a real framework used in Jewish mysticism, Hermetic Qabalah, and Western esotericism. The planetary and bodily correspondences the book shows are from the Western Hermetic tradition. This is one of the more accurately represented concepts in the book, though it\'s been syncretized with other traditions.',
      sources: ['Sefer Yetzirah (3rd-6th century)', 'Zohar (13th century)', 'Hermetic Qabalah \u2014 Golden Dawn tradition', 'Scholem \u2014 Major Trends in Jewish Mysticism (1941)']
    },
    keyPoints: [
      'Kabbalah is a genuine mystical tradition with centuries of scholarship',
      'The Tree of Life with 10 sephirot is authentic Kabbalistic teaching',
      'Planetary correspondences come from Hermetic tradition, not original Judaism',
      'The book blends Jewish and Hermetic Kabbalah (common in Western esotericism)',
      'Serious Kabbalistic study requires years of foundational learning'
    ],
    relatedConcepts: ['vibration-law', 'astrotheology', 'kundalini']
  },
  {
    id: 'veganism',
    title: 'Veganism & Spiritual Purity',
    chapter: 88,
    icon: '\uD83C\uDF31',
    summary: 'The book advocates veganism, claiming animal flesh transfers "occult virtues" and modern meat is contaminated.',
    bookClaim: 'Great thinkers (Plato, Pythagoras, Tesla, Newton) were vegan. Animal flesh is contaminated with vaccines. Cells regenerate every 90 days from what you eat. Dead flesh weakens the body.',
    analysis: {
      verdict: 'partial',
      truthScore: 25,
      explanation: 'Plant-based diets can be healthy \u2014 that much is supported by nutrition science. Pythagoras was likely vegetarian. But: Tesla and Newton were NOT vegan. Cells do regenerate, but not uniformly every 90 days (varies by tissue type). "Vaccines contaminating flesh" is anti-vax misinformation. "Occult virtues" transferring through meat is a medieval magical belief, not biology. The spiritual case for vegetarianism exists in many traditions (Hinduism, Jainism) but the book mixes legitimate dietary advice with conspiracy.',
      sources: ['Position of Academy of Nutrition and Dietetics on vegetarian diets (2016)', 'Cell turnover rates \u2014 Sender et al. (2016)', 'Historical vegetarianism \u2014 Spencer (1993)']
    },
    keyPoints: [
      'Plant-based diets can be nutritionally adequate \u2014 supported by science',
      'Pythagoras was vegetarian; Tesla and Newton were not vegan',
      'Cell regeneration varies by tissue (7 days to never), not uniformly 90 days',
      '"Vaccines in meat" is misinformation',
      'Spiritual vegetarianism is a real tradition in Hinduism/Jainism/Buddhism',
      '"Occult virtues" in animal flesh is medieval magical thinking'
    ],
    relatedConcepts: ['christ-oil', 'meditation']
  },
  {
    id: 'meditation',
    title: 'Meditation & Consciousness',
    chapter: 28,
    icon: '\uD83E\uDDD8',
    summary: 'Meditation activates the pineal gland and connects you to cosmic consciousness.',
    bookClaim: 'We are multidimensional infinite consciousness in a physical body. Meditation directs attention to the center of the mind, activating the pineal gland. This leads to mystical experiences, tingling, and out-of-body experiences.',
    analysis: {
      verdict: 'partial',
      truthScore: 50,
      explanation: 'Meditation has well-documented benefits: stress reduction, improved focus, emotional regulation, and measurable brain changes (increased gray matter, altered brainwave patterns). Experienced meditators do report altered states of consciousness. However, the specific claim about "activating the pineal gland" is not supported by neuroscience. The philosophical claim that we are "infinite consciousness" is a position in Eastern philosophy (Advaita Vedanta) \u2014 a metaphysical belief, not a scientific finding.',
      sources: ['Goyal et al. \u2014 Meditation for Stress (JAMA, 2014)', 'Lutz et al. \u2014 Long-term meditators and brain changes (PNAS, 2004)', 'H\u00F6lzel et al. \u2014 Mindfulness and gray matter (2011)', 'Advaita Vedanta philosophy']
    },
    keyPoints: [
      'Meditation has proven benefits \u2014 backed by extensive research',
      'Brain changes from regular meditation are measurable',
      'Altered states during meditation are widely reported',
      '"Activating the pineal gland" is not the mechanism \u2014 changes occur across brain networks',
      '"Infinite consciousness" is philosophical, not scientific',
      'You don\'t need esoteric frameworks to benefit from meditation'
    ],
    relatedConcepts: ['pineal-gland', 'kundalini', 'vibration-law']
  },
  {
    id: 'freemasonry',
    title: 'Freemasonry & Hidden Knowledge',
    chapter: 108,
    icon: '\uD83D\uDD3A',
    summary: 'Freemasons encode ancient wisdom in symbols, architecture, and currency.',
    bookClaim: 'The dollar bill pyramid spells MASON. "Annuit Coeptis Novus Ordo Seclorum" announces the New World Order. Adam Weishaupt founded the Illuminati in 1776.',
    analysis: {
      verdict: 'partial',
      truthScore: 30,
      explanation: 'Some facts are accurate: Adam Weishaupt did found the Bavarian Illuminati on May 1, 1776 (true). The Great Seal does feature a pyramid with Latin phrases (true). However: the MASON letter arrangement is coincidence/apophenia. "Novus Ordo Seclorum" means "New Order of the Ages" (referring to American independence), not "New World Order." The original Illuminati was disbanded by 1787. Freemasonry is a real fraternal organization with esoteric traditions, but the conspiracy theories about global control are unfounded.',
      sources: ['Bavarian Illuminati \u2014 historical records (1776-1787)', 'US Great Seal \u2014 Department of State history', 'Bullock \u2014 Revolutionary Brotherhood (1996)']
    },
    keyPoints: [
      'The Bavarian Illuminati was real (1776-1787) \u2014 then disbanded',
      'Freemasonry uses genuine esoteric symbolism \u2014 documented',
      'The dollar bill MASON pattern is coincidental/apophenia',
      '"Novus Ordo Seclorum" = "New Order of the Ages" (American independence)',
      'No credible evidence for ongoing Illuminati/NWO global control',
      'Conspiracy thinking often mistakes symbolism for evidence'
    ],
    relatedConcepts: ['kabbalah', 'astrotheology']
  },
  {
    id: 'emerald-tablets',
    title: 'The Emerald Tablets of Thoth',
    chapter: 58,
    icon: '\uD83D\uDCDC',
    summary: 'Ancient texts attributed to Thoth/Hermes describing ascension and cosmic wisdom.',
    bookClaim: 'Thoth, also known as Hermes Trismegistus, Moses, and Mercury, authored the Emerald Tablets. Newton translated them. They teach that man is changing to forms beyond this world.',
    analysis: {
      verdict: 'partial',
      truthScore: 35,
      explanation: 'The Emerald Tablet (singular) is a real historical text from the Arabic alchemical tradition (earliest version 6th-8th century CE). Newton did translate it (true). However, the "Emerald Tablets of Thoth" by "M. Doreal" (1930s) is a modern channeled text \u2014 not an ancient document. The book conflates the two. Thoth and Hermes Trismegistus are connected in Greco-Egyptian tradition, but equating them with Moses is a stretch.',
      sources: ['The Emerald Tablet \u2014 Arabic origins', 'Newton\'s translation (Keynes MS. 28)', 'Doreal \u2014 Emerald Tablets (1930s, modern text)', 'Copenhaver \u2014 Hermetica (1992)']
    },
    keyPoints: [
      'The Emerald Tablet (singular, Arabic) is a real historical text',
      'Newton did translate it \u2014 true',
      'Doreal\'s "Emerald Tablets" (plural, 1930s) is modern channeled text',
      'The book conflates the ancient and modern versions',
      'Thoth-Hermes connection is real in Greco-Egyptian tradition',
      'Thoth = Moses is not historically supported'
    ],
    relatedConcepts: ['vibration-law', 'kabbalah', 'astrotheology']
  },
  {
    id: 'electromagnetism',
    title: 'Sacred Geometry & The Torus',
    chapter: 78,
    icon: '\uD83C\uDF00',
    summary: 'The torus field is the fundamental shape of nature, from atoms to galaxies.',
    bookClaim: 'Seeds are always in the center of fruit \u2014 the center of the torus regenerates the field. By understanding the torus you understand all things. As above, so below.',
    analysis: {
      verdict: 'partial',
      truthScore: 45,
      explanation: 'Toroidal fields do appear in nature: Earth\'s magnetic field, plasma physics, some biological structures. Sacred geometry identifies real patterns (Fibonacci spirals, golden ratio, fractals). However, claiming the torus is THE fundamental shape of everything is an overstatement. Different phenomena have different geometries. The jump from "patterns exist in nature" to "one shape explains all reality" is a massive oversimplification.',
      sources: ['Toroidal magnetic fields in astrophysics', 'Fibonacci patterns in phyllotaxis (botany)', 'Mandelbrot \u2014 Fractal Geometry of Nature (1982)']
    },
    keyPoints: [
      'Toroidal fields are real in physics and nature',
      'Sacred geometry identifies real mathematical patterns',
      'Fibonacci sequences and golden ratio appear in nature \u2014 true',
      'No single shape "explains all things"',
      'Pattern recognition can become over-applied (apophenia)'
    ],
    relatedConcepts: ['vibration-law', 'light-universe']
  }
]

const verdictColors: Record<string, string> = {
  supported: '#22c55e',
  partial: '#f59e0b',
  unsupported: '#ef4444',
  philosophical: '#8b5cf6'
}

const verdictLabels: Record<string, string> = {
  supported: 'Scientifically Supported',
  partial: 'Partially True',
  unsupported: 'Not Supported by Evidence',
  philosophical: 'Philosophical / Tradition-Based'
}

function TruthMeter({ score, verdict }: { score: number; verdict: string }) {
  return (
    <div className="truth-meter">
      <div className="truth-meter-label">
        <span>Truth Score</span>
        <span style={{ color: verdictColors[verdict] }}>{score}%</span>
      </div>
      <div className="truth-meter-bar">
        <div
          className="truth-meter-fill"
          style={{
            width: `${score}%`,
            background: `linear-gradient(90deg, ${verdictColors[verdict]}88, ${verdictColors[verdict]})`
          }}
        />
      </div>
      <div className="truth-verdict" style={{ color: verdictColors[verdict] }}>
        {verdictLabels[verdict]}
      </div>
    </div>
  )
}

function ConceptCard({ concept, onClick }: { concept: Concept; onClick: () => void }) {
  return (
    <div className="concept-card" onClick={onClick}>
      <div className="concept-card-icon">{concept.icon}</div>
      <h3>{concept.title}</h3>
      <p>{concept.summary}</p>
      <div className="concept-card-footer">
        <span
          className="verdict-badge"
          style={{
            background: verdictColors[concept.analysis.verdict] + '22',
            color: verdictColors[concept.analysis.verdict],
            border: `1px solid ${verdictColors[concept.analysis.verdict]}44`
          }}
        >
          {verdictLabels[concept.analysis.verdict]}
        </span>
        <span className="chapter-badge">Ch. {concept.chapter}</span>
      </div>
    </div>
  )
}

function ConceptDetail({ concept, onBack, onNavigate }: {
  concept: Concept
  onBack: () => void
  onNavigate: (id: string) => void
}) {
  return (
    <div className="concept-detail">
      <button className="back-button" onClick={onBack}>
        &larr; Back to all concepts
      </button>

      <div className="detail-header">
        <span className="detail-icon">{concept.icon}</span>
        <div>
          <h1>{concept.title}</h1>
          <span className="chapter-badge large">Chapter {concept.chapter}</span>
        </div>
      </div>

      <TruthMeter score={concept.analysis.truthScore} verdict={concept.analysis.verdict} />

      <section className="detail-section">
        <h2>What the Book Claims</h2>
        <blockquote>{concept.bookClaim}</blockquote>
      </section>

      <section className="detail-section">
        <h2>Critical Analysis</h2>
        <p>{concept.analysis.explanation}</p>
      </section>

      <section className="detail-section">
        <h2>Key Points</h2>
        <ul>
          {concept.keyPoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="detail-section">
        <h2>Sources & Further Reading</h2>
        <ul className="sources-list">
          {concept.analysis.sources.map((source, i) => (
            <li key={i}>{source}</li>
          ))}
        </ul>
      </section>

      {concept.relatedConcepts.length > 0 && (
        <section className="detail-section">
          <h2>Related Concepts</h2>
          <div className="related-tags">
            {concept.relatedConcepts.map(id => {
              const related = concepts.find(c => c.id === id)
              if (!related) return null
              return (
                <button key={id} className="related-tag" onClick={() => onNavigate(id)}>
                  {related.icon} {related.title}
                </button>
              )
            })}
          </div>
        </section>
      )}
    </div>
  )
}

function StatsOverview() {
  const supported = concepts.filter(c => c.analysis.verdict === 'supported').length
  const partial = concepts.filter(c => c.analysis.verdict === 'partial').length
  const unsupported = concepts.filter(c => c.analysis.verdict === 'unsupported').length
  const philosophical = concepts.filter(c => c.analysis.verdict === 'philosophical').length
  const avgScore = Math.round(
    concepts.reduce((acc, c) => acc + c.analysis.truthScore, 0) / concepts.length
  )

  return (
    <div className="stats-overview">
      <div className="stat-card">
        <div className="stat-number">{concepts.length}</div>
        <div className="stat-label">Concepts Analyzed</div>
      </div>
      <div className="stat-card">
        <div className="stat-number" style={{ color: verdictColors.supported }}>{supported}</div>
        <div className="stat-label">Supported</div>
      </div>
      <div className="stat-card">
        <div className="stat-number" style={{ color: verdictColors.partial }}>{partial}</div>
        <div className="stat-label">Partially True</div>
      </div>
      <div className="stat-card">
        <div className="stat-number" style={{ color: verdictColors.unsupported }}>{unsupported}</div>
        <div className="stat-label">Unsupported</div>
      </div>
      <div className="stat-card">
        <div className="stat-number" style={{ color: verdictColors.philosophical }}>{philosophical}</div>
        <div className="stat-label">Philosophical</div>
      </div>
      <div className="stat-card avg">
        <div className="stat-number">{avgScore}%</div>
        <div className="stat-label">Avg Truth Score</div>
      </div>
    </div>
  )
}

type FilterType = 'all' | 'supported' | 'partial' | 'unsupported' | 'philosophical'

function App() {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null)
  const [filter, setFilter] = useState<FilterType>('all')

  const filtered = filter === 'all'
    ? concepts
    : concepts.filter(c => c.analysis.verdict === filter)
  const current = concepts.find(c => c.id === selectedConcept)

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="title-icon">&#128214;</span>
            The Book of Wisdom
            <span className="title-subtitle">Interactive Explorer</span>
          </h1>
          <p className="app-description">
            An analytical guide to the concepts in "The Book of Wisdom" by Revival of Wisdom.
            Each concept is examined for scientific accuracy, historical context, and philosophical merit.
          </p>
        </div>
      </header>

      <main className="app-main">
        {current ? (
          <ConceptDetail
            concept={current}
            onBack={() => setSelectedConcept(null)}
            onNavigate={(id) => {
              setSelectedConcept(id)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          />
        ) : (
          <>
            <StatsOverview />

            <div className="filter-bar">
              <span className="filter-label">Filter:</span>
              {(['all', 'supported', 'partial', 'unsupported', 'philosophical'] as FilterType[]).map(f => (
                <button
                  key={f}
                  className={`filter-btn ${filter === f ? 'active' : ''}`}
                  onClick={() => setFilter(f)}
                  style={
                    filter === f && f !== 'all'
                      ? {
                          background: verdictColors[f] + '22',
                          color: verdictColors[f],
                          borderColor: verdictColors[f] + '44'
                        }
                      : {}
                  }
                >
                  {f === 'all' ? 'All' : verdictLabels[f]}
                </button>
              ))}
            </div>

            <div className="legend">
              <h3>How to read the verdicts</h3>
              <div className="legend-items">
                <div className="legend-item">
                  <span className="legend-dot" style={{ background: verdictColors.supported }} />
                  <span><strong>Supported</strong> &mdash; Backed by scientific evidence</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot" style={{ background: verdictColors.partial }} />
                  <span><strong>Partially True</strong> &mdash; Contains real elements mixed with inaccuracies</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot" style={{ background: verdictColors.unsupported }} />
                  <span><strong>Unsupported</strong> &mdash; No credible evidence supports this claim</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot" style={{ background: verdictColors.philosophical }} />
                  <span><strong>Philosophical</strong> &mdash; A tradition/belief system, not testable as fact</span>
                </div>
              </div>
            </div>

            <div className="concepts-grid">
              {filtered.map(concept => (
                <ConceptCard
                  key={concept.id}
                  concept={concept}
                  onClick={() => {
                    setSelectedConcept(concept.id)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                />
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>
          This app provides critical analysis for educational purposes. Always verify claims independently.
        </p>
      </footer>
    </div>
  )
}

export default App

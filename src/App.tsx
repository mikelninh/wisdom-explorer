import { useState } from 'react'
import ConceptIcon from './ConceptIcons'
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
  believerPerspective: string
  openQuestions: string[]
  whatWeKnow: string[]
  whatWeDontKnow: string[]
  scoreJustification: string
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
      truthScore: 60,
      explanation: 'This is where the book is at its most interesting. Einstein\'s E=mc\u00B2 genuinely does show that matter and energy are two forms of the same thing. In quantum field theory, particles are excitations of underlying fields \u2014 you could poetically describe this as "vibrations." The universe really is, at its deepest level, made of fields and energy rather than solid "stuff." Where the book goes beyond established science is in equating physical light/energy with consciousness and divine mind. That\'s a philosophical leap \u2014 but it\'s not a crazy one. Panpsychism (the idea that consciousness is fundamental to reality) is taken seriously by some contemporary philosophers like David Chalmers and Philip Goff. Walter Russell, whom the book cites, was not a credentialed physicist, but some of his intuitions about the wave nature of reality were ahead of his time, even if his framework isn\'t scientifically rigorous.',
      sources: ['Einstein \u2014 Special Relativity (1905)', 'Quantum Field Theory fundamentals', 'Walter Russell \u2014 The Universal One (1926)', 'Chalmers \u2014 The Conscious Mind (1996)', 'Philip Goff \u2014 Galileo\'s Error (2019)']
    },
    believerPerspective: 'Believers would argue that modern physics is slowly catching up to what mystics have always known: that matter is condensed energy/light, and that consciousness is fundamental, not an accident of brain chemistry. They\'d point to the double-slit experiment (observation affects reality) and quantum entanglement as evidence that mind and matter are deeply connected. They might say that calling Walter Russell "just an artist" is dismissing someone who grasped truths that credentialed scientists missed.',
    openQuestions: [
      'Is consciousness fundamental to reality, or does it emerge from complex matter? This is genuinely one of the biggest unsolved questions in philosophy and science.',
      'Does the observer effect in quantum mechanics actually imply consciousness plays a role in physics? Physicists disagree on this.',
      'Could there be aspects of reality that science\'s materialist framework is structurally unable to detect?'
    ],
    whatWeKnow: [
      'E=mc\u00B2 confirms matter and energy are interconvertible \u2014 established physics',
      'Quantum fields underlie all particles \u2014 matter really is "vibration" in a loose sense',
      'The double-slit experiment shows measurement affects quantum outcomes',
      'Walter Russell was self-taught, not peer-reviewed, but was respected by Nikola Tesla'
    ],
    whatWeDontKnow: [
      'Whether consciousness is fundamental to reality or emergent from it \u2014 the "hard problem of consciousness" is unsolved',
      'Whether "observation" in quantum mechanics requires a conscious observer or just any physical interaction',
      'Whether there are aspects of reality beyond what the scientific method can access'
    ],
    scoreJustification: 'Score: 60%. The core claim that everything is energy/light has strong support from physics. The extension to "divine mind" is philosophical, not proven, but it\'s not pseudoscience either \u2014 it\'s a metaphysical position shared by serious thinkers. We docked points because the book presents this as established fact rather than philosophical interpretation, and because Walter Russell\'s framework lacks scientific rigor despite containing some genuine insights.',
    relatedConcepts: ['pineal-gland', 'vibration-law']
  },
  {
    id: 'human-hue-man',
    title: 'Human = Hue Man',
    chapter: 1,
    icon: '\uD83C\uDF08',
    summary: 'The book claims "human" literally means "a hue of man" \u2014 a being of color/light frequency.',
    bookClaim: 'As a HUE MAN, we are an attribute of a colour. Each individual is the mind, not the physical body. The mind is like a frequency tuner, tuning itself into different frequencies.',
    analysis: {
      verdict: 'partial',
      truthScore: 25,
      explanation: 'We need to separate two things here: the etymology and the philosophy. The etymology is definitively wrong \u2014 "human" comes from Latin "humanus," from "homo" (man) and ultimately "humus" (earth/ground). This isn\'t disputed by any linguist. However, the philosophical idea underneath \u2014 that we are primarily consciousness, not bodies, and that our mental state has a "frequency" or quality \u2014 is actually a respectable position in philosophy. Idealism (the view that mind/consciousness is primary) has been held by major philosophers from Plato to Berkeley to modern thinkers like Bernardo Kastrup. The "frequency tuner" metaphor, while not literally scientific, isn\'t a bad way to describe how attention and focus shape our experience. The book\'s error is using a false word-origin to "prove" a philosophical claim that actually has better arguments available to it.',
      sources: ['Oxford English Dictionary \u2014 etymology of "human"', 'Latin: humanus \u2192 homo \u2192 humus', 'Berkeley \u2014 A Treatise Concerning the Principles of Human Knowledge (1710)', 'Kastrup \u2014 The Idea of the World (2019)']
    },
    believerPerspective: 'Believers would say that etymologies aren\'t the point \u2014 the word-play is a teaching tool to awaken you to a deeper truth. In many esoteric traditions, words are seen as carrying vibrational meaning beyond their dictionary origins. They\'d argue that fixating on "correct etymology" is a left-brain, materialist way of missing the forest for the trees. The real question is: are you a body that has consciousness, or consciousness that has a body?',
    openQuestions: [
      'Is the "mind as frequency tuner" metaphor useful even if it\'s not literal? Many cognitive scientists use metaphors like "filtering" to describe attention.',
      'Do esoteric word-breakdowns serve a pedagogical purpose even when etymologically incorrect?',
      'Is there a meaningful sense in which different mental states have different "frequencies"? EEG research does show distinct brainwave patterns for different states.'
    ],
    whatWeKnow: [
      '"Human" definitively comes from Latin humanus/homo/humus \u2014 this is settled linguistics',
      'Idealism (consciousness as primary) is a legitimate philosophical tradition with serious modern advocates',
      'Different mental states do correspond to different brainwave frequencies (alpha, beta, theta, gamma)',
      'Attention and focus genuinely do shape our perception of reality'
    ],
    whatWeDontKnow: [
      'Whether consciousness is fundamental or derivative \u2014 still debated',
      'Whether brainwave frequencies are causes of mental states or merely correlates',
      'Whether the esoteric tradition of "sacred etymology" has any validity beyond metaphor'
    ],
    scoreJustification: 'Score: 25%. The etymology is verifiably false, and we can\'t award points for demonstrably wrong word origins. However, the underlying philosophy (consciousness as primary, mind shapes experience) has real intellectual weight, which is why this isn\'t scored lower. The score reflects that the specific claim made is wrong, even though the deeper intuition points toward legitimate questions.',
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
      verdict: 'partial',
      truthScore: 20,
      explanation: 'This is one of the book\'s most elaborate claims, and it weaves together real anatomy with speculative physiology. The claustrum IS a real and mysterious brain structure \u2014 Francis Crick (co-discoverer of DNA) spent his final years studying it and proposed it might be central to consciousness. Cerebrospinal fluid (CSF) IS real and does circulate through the brain and spinal cord. The sacrum bone IS named from Latin "sacred bone." The spine DOES have 33 vertebrae. Where the claim breaks down is in the specific mechanism: there\'s no evidence CSF operates on a monthly zodiac-linked cycle, no evidence the claustrum produces a special "oil," and no clinical evidence that sexual retention causes CSF to "rise" and regenerate the brain. However \u2014 it\'s worth noting that CSF research is still evolving, the glymphatic system (brain waste clearance via CSF during sleep) was only discovered in 2012, and the claustrum\'s function remains genuinely mysterious.',
      sources: ['Crick & Koch \u2014 What is the function of the claustrum? (2005)', 'Iliff et al. \u2014 Glymphatic system discovery (2012)', 'Spinal anatomy \u2014 33 vertebrae', 'Etymology of "sacrum" \u2014 Latin os sacrum (sacred bone)']
    },
    believerPerspective: 'Believers would say that Western science hasn\'t studied this because it doesn\'t know to look for it. They\'d point out that the claustrum\'s function is still unknown, that the sacrum was called "sacred" for a reason ancient people understood, and that practices like brahmacharya (sexual continence) have been central to yogic traditions for millennia \u2014 those practitioners report real experiences. They\'d argue that the allegorical reading of the Bible as describing internal bodily processes is a tradition going back centuries, not something invented by this book. The 33 vertebrae / 33 years of Christ parallel may be numerological, but it also may reflect genuine ancient knowledge encoded in story.',
    openQuestions: [
      'What IS the claustrum\'s function? Crick believed it might integrate consciousness \u2014 we still don\'t know.',
      'Why IS the sacrum called the "sacred bone"? The etymology predates modern anatomy, and the original reason is debated.',
      'Does sexual retention have measurable neurological effects? Some preliminary studies suggest hormonal changes, but rigorous research is scarce.',
      'Could the Bible contain encoded anatomical knowledge? This is unprovable but is a persistent interpretive tradition.',
      'What don\'t we yet understand about CSF and its role in brain function? The glymphatic system was unknown until 2012.'
    ],
    whatWeKnow: [
      'The claustrum is a real brain structure whose function remains largely unknown',
      'CSF circulates continuously through the brain and spine \u2014 not on a monthly cycle',
      'The glymphatic system (CSF-based brain cleansing during sleep) was only discovered in 2012',
      'The spine has 33 vertebrae and the sacrum literally means "sacred bone"',
      'No clinical evidence supports a zodiac-linked monthly "oil" release',
      'Brahmacharya (sexual continence) is a real practice in yogic traditions with millennia of anecdotal support'
    ],
    whatWeDontKnow: [
      'The full function of the claustrum \u2014 genuinely one of the brain\'s biggest mysteries',
      'Whether there are undiscovered cyclical processes in CSF production or composition',
      'Whether sexual retention has neurological effects beyond placebo \u2014 almost no rigorous research exists',
      'Whether ancient naming conventions (sacrum = sacred) reflect forgotten physiological knowledge'
    ],
    scoreJustification: 'Score: 20%. The specific mechanism described (monthly zodiac-linked oil release) has no scientific support, and the biblical allegory is interpretation, not fact. However, we acknowledge that the claustrum IS mysterious, CSF science IS still young, and the anatomical vocabulary used is surprisingly accurate. The score is low because the central claim is unsupported, but not rock-bottom because the individual building blocks are real and some genuinely open questions exist.',
    relatedConcepts: ['kundalini', 'pineal-gland', 'three-wise-men']
  },
  {
    id: 'pineal-gland',
    title: 'The Pineal Gland / Third Eye',
    chapter: 7,
    icon: '\uD83D\uDC41\uFE0F',
    summary: 'The pineal gland is presented as the seat of consciousness, the literal third eye, and gateway to spiritual planes.',
    bookClaim: 'The pineal gland is the seat of the soul/throne of God. It contains microcrystals that receive and emit frequencies. Fluoride calcifies it, weakening your connection to your true self. The Vatican suppressed this knowledge.',
    analysis: {
      verdict: 'partial',
      truthScore: 40,
      explanation: 'The pineal gland is genuinely one of the most fascinating structures in the brain, and the book is right that mainstream culture underappreciates it. It DOES produce melatonin (regulating sleep cycles). It DOES contain calcite microcrystals that are piezoelectric \u2014 meaning they can convert mechanical pressure into electrical signals (this is real science, published in peer-reviewed journals). Descartes DID call it "the seat of the soul." It IS light-sensitive even though it sits deep in the brain, and in many animals (reptiles, amphibians) it literally IS a third eye with a lens and retina. The endogenous production of DMT in the pineal gland has been confirmed in rats (Barker et al., 2013), though human studies are limited. Where the book overreaches: claiming it\'s a portal to other dimensions is metaphysical speculation; the fluoride/calcification link has some evidence (fluoride does accumulate there) but "suppressing spiritual powers" is unproven; and the Vatican conspiracy claim has no evidence.',
      sources: ['Baconnier et al. \u2014 Calcite microcrystals in the pineal gland (2002)', 'Barker et al. \u2014 DMT in the pineal gland of rats (2013)', 'Luke et al. \u2014 Fluoride deposition in the aged pineal gland (2001)', 'Descartes \u2014 Treatise of Man (1664)', 'Eakin \u2014 The Third Eye (1973) \u2014 on the parietal eye in reptiles']
    },
    believerPerspective: 'Believers would say: the pineal gland has piezoelectric crystals, produces DMT (a powerful psychedelic), was called the "seat of the soul" by a major philosopher, and is literally a third eye in other species. Science keeps discovering MORE about it, not less. They\'d argue that ancient civilizations (Egypt, India, Mesopotamia) all independently focused on this gland and depicted it in their art \u2014 is that really a coincidence? They\'d say that fluoride calcification, even if not "suppressing spiritual powers," is still destroying a gland whose full potential we haven\'t mapped. And they might argue that the Vatican doesn\'t need a specific "pineal gland conspiracy" \u2014 the systematic suppression of mystical/direct experience traditions (Gnostics, Cathars, mystics) in favor of institutional mediation IS historically documented.',
    openQuestions: [
      'What is the biological purpose of piezoelectric crystals in the pineal gland? This is genuinely not fully understood.',
      'Does the human pineal gland produce DMT in significant quantities? Confirmed in rats, but human evidence is limited.',
      'Why do so many unconnected ancient cultures depict pine-cone symbolism and third-eye imagery? Coincidence or shared knowledge?',
      'What are the long-term effects of pineal calcification on consciousness, mood, or perception?',
      'Is there a reason the pineal gland retains photoreceptor-like cells even in humans, deep inside the skull?'
    ],
    whatWeKnow: [
      'The pineal gland produces melatonin and regulates circadian rhythm',
      'It contains piezoelectric calcite microcrystals (Baconnier, 2002)',
      'It is a literal third eye (parietal eye) in many reptiles and amphibians',
      'DMT has been found in the pineal gland of rats (Barker, 2013)',
      'Fluoride does accumulate in the pineal gland more than almost any other soft tissue (Luke, 2001)',
      'Pineal calcification increases with age and correlates with lower melatonin production',
      'Multiple ancient civilizations independently depicted pineal/pine-cone symbolism'
    ],
    whatWeDontKnow: [
      'The full functional significance of piezoelectric crystals in the pineal',
      'Whether human pineal DMT production is significant enough to affect consciousness',
      'Whether pineal decalcification would have measurable effects on wellbeing or perception',
      'Why the pineal retains light-sensitive characteristics deep inside the human skull',
      'Whether ancient pineal symbolism represents actual physiological knowledge or coincidental cultural convergence'
    ],
    scoreJustification: 'Score: 40%. Many of the book\'s individual claims about the pineal gland are factually correct (microcrystals, melatonin, DMT in rats, ancient symbolism). The overreach is in the leaps: from "interesting gland" to "seat of God," from "fluoride accumulates" to "spiritual suppression," and from "ancient symbolism" to "Vatican conspiracy." The science is genuinely fascinating and more open-ended than skeptics usually admit, but the book goes well beyond what\'s established.',
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
      truthScore: 45,
      explanation: 'Kundalini is a genuine spiritual tradition with thousands of years of practice and documentation. It\'s not something the book invented. Thousands of practitioners across centuries report remarkably consistent experiences: heat rising up the spine, electric sensations, altered states of consciousness, spontaneous movements, and profound shifts in perception. These experiences are real \u2014 the question is what explains them. Western medicine has started to take notice: "kundalini syndrome" describes a recognizable set of symptoms. Psychiatrist Stanislav Grof included kundalini awakening in his framework of "spiritual emergencies." The cross-cultural syncretism (Moses = kundalini) is the book\'s interpretation, not established fact. The caduceus/Rod of Asclepius confusion is a genuine error \u2014 the medical symbol (single snake) has Greek origins, though the caduceus (double snake) has its own interesting parallels. Whether the medical symbol\'s serpent imagery has deeper roots than the Greek myth is debatable.',
      sources: ['Yoga Sutras of Patanjali', 'Sat-Cakra-Nirupana (16th century tantric text)', 'Grof \u2014 Spiritual Emergency (1989)', 'Sanella \u2014 The Kundalini Experience (1987)', 'Kason \u2014 Farther Shores (2000)']
    },
    believerPerspective: 'Believers would point out that kundalini experiences are reported across every culture: Hindu yoga, Christian mysticism (the Holy Spirit "fire"), Sufi whirling, Taoist chi cultivation, African Num energy, Indigenous shamanic practices. When thousands of people across unconnected cultures report the same internal experience (energy rising up the spine), dismissing it as "just tradition" or placebo becomes intellectually lazy. They\'d argue that the serpent is the most universal religious symbol on Earth \u2014 appearing in every major civilization \u2014 and this universality suggests it describes a real human experience. The Moses connection may be interpretive, but serpent symbolism in the Bible IS pervasive and unexplained by conventional theology.',
    openQuestions: [
      'Why do people across completely unconnected cultures report nearly identical kundalini-like experiences?',
      'What is the neurological basis of the "energy rising up the spine" sensation? Is there a physiological process being described metaphorically?',
      'Is serpent symbolism truly universal across cultures, and if so, why?',
      'Could the vagus nerve (which runs from brainstem to abdomen) be the physiological correlate of the "sushumna" central channel?',
      'Do kundalini practices produce measurable neurological changes beyond placebo?'
    ],
    whatWeKnow: [
      'Kundalini yoga is a genuine tradition with thousands of years of documented practice',
      'Cross-cultural reports of "energy rising up the spine" are remarkably consistent',
      '"Kundalini syndrome" is recognized in transpersonal psychology',
      'The vagus nerve is a real cranial nerve with profound effects on consciousness, running along the spine',
      'Serpent/snake symbolism appears in virtually every major world civilization',
      'The medical Rod of Asclepius (single snake) has Greek origins \u2014 the caduceus (double snake) is from Hermes'
    ],
    whatWeDontKnow: [
      'What neurological process produces kundalini experiences \u2014 vagal activation? Cerebrospinal fluid changes? Something else?',
      'Whether the cross-cultural convergence reflects a shared physiological reality or shared psychological tendency',
      'Whether kundalini practices produce lasting brain changes',
      'The actual historical relationship between serpent symbolism across civilizations \u2014 diffusion or independent origin?'
    ],
    scoreJustification: 'Score: 45%. Kundalini as an experiential tradition is well-established and cross-culturally validated \u2014 something is happening. The syncretism (Moses = kundalini) is interpretive rather than factual. The physiological mechanism remains unknown, but the consistency of reported experiences across cultures is genuinely remarkable and hard to dismiss. We score it higher than pure speculation because the phenomenon is real, even if the explanatory framework is debated.',
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
      truthScore: 15,
      explanation: 'This is one of the book\'s more creative interpretations, but the specific scientific claims have problems. Serotonin is primarily produced in the gut (about 90%), not the pituitary gland. The thalamus is a relay station for sensory information, not primarily a dopamine producer (that\'s mainly the substantia nigra and ventral tegmental area). "Claustrum" comes from Latin "claustrum" meaning "enclosure," while "Claus" in Santa Claus comes from "Nikolaos" (Greek) \u2014 completely different origins. That said, the allegorical reading of religious texts as describing internal states is a real and old hermeneutic tradition. Philo of Alexandria (1st century) was already reading the Hebrew Bible allegorically. And the broader idea \u2014 that religious stories encode psychological or physiological truths \u2014 is taken seriously by thinkers like Carl Jung (archetypes) and Jordan Peterson (biblical narratives as psychological maps).',
      sources: ['Neuroanatomy of serotonin \u2014 Gershon, The Second Brain (1998)', 'Philo of Alexandria \u2014 allegorical interpretation (1st century CE)', 'Jung \u2014 Psychology and Alchemy (1944)', 'Etymology: claustrum (Latin: enclosed space) vs Nikolaos (Greek: victory of people)']
    },
    believerPerspective: 'Believers would argue that you\'re missing the forest for the trees. They\'d say: yes, serotonin is also produced in the gut, but the pituitary DOES produce hormones crucial to wellbeing. The exact neurochemistry isn\'t the point \u2014 the point is that ancient stories describe real internal processes using metaphor. They\'d say the allegorical tradition is vast and well-established: Gnostic Christians, Kabbalists, Sufis, and Hindu commentators ALL read their scriptures as describing internal states. The specific Santa Claus/claustrum connection may be a stretch, but the chimney/spine parallel and the general framework of "gifts from the brain traveling down to the body" is their teaching device, not a peer-reviewed paper.',
    openQuestions: [
      'Do religious narratives encode physiological or psychological truths? Jung and others thought so.',
      'Is the allegorical/esoteric reading of the Bible valid alongside the historical reading?',
      'Why DO so many religious stories involve journeys up and down a vertical axis (Jacob\'s ladder, Babel, ascension)?',
      'Could there be a pre-scientific understanding of brain function encoded in myth, even if the details are wrong?'
    ],
    whatWeKnow: [
      'Serotonin is ~90% produced in the gut, not primarily the pituitary',
      'The thalamus is primarily a sensory relay station, not a dopamine producer',
      '"Claustrum" and "Claus" have completely different etymological roots',
      'Allegorical reading of religious texts is a legitimate and ancient hermeneutic tradition',
      'The pineal, pituitary, and thalamus ARE three important structures in the center of the brain'
    ],
    whatWeDontKnow: [
      'Whether ancient myths encode physiological knowledge in symbolic form',
      'Why vertical axis journeys (up/down spine, ladder, mountain) are so universal in religious imagery',
      'Whether the three "kings/wise men" motif across cultures could relate to a common internal experience'
    ],
    scoreJustification: 'Score: 15%. The specific neuroscience claims (serotonin from pituitary, dopamine from thalamus) are factually wrong, and the etymology is demonstrably incorrect. These are checkable facts that don\'t hold up. However, the broader tradition of allegorical interpretation IS real and respected, and the idea that myths encode internal truths has serious intellectual advocates. The low score reflects the factual errors, not the interpretive tradition itself.',
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
      truthScore: 60,
      explanation: 'The Hermetic Principles are one of the most intellectually robust parts of the book. They come from a genuine philosophical tradition (Hermeticism) with roots in Greco-Egyptian thought, and their modern formulation in The Kybalion (1908) has influenced Western esotericism for over a century. Several principles have striking parallels in modern science. The Law of Vibration: quantum mechanics confirms everything vibrates at the subatomic level. The Law of Correspondence ("as above, so below"): fractal geometry and self-similar patterns across scales are real. The Law of Polarity: wave-particle duality, matter-antimatter. The Law of Rhythm: circadian rhythms, seasonal cycles, wave patterns. These aren\'t "proofs" of the Hermetic principles, but the parallels are genuinely interesting. Where the book overreaches is in claiming these principles allow you to "manifest" desires through thought alone \u2014 that\'s the part that lacks evidence.',
      sources: ['The Kybalion (1908) \u2014 Three Initiates', 'Hermetica \u2014 Copenhaver translation (1992)', 'Mandelbrot \u2014 Fractal Geometry of Nature (1982)', 'Quantum field theory \u2014 zero-point energy and vibration']
    },
    believerPerspective: 'Believers would say these laws have been tested by practitioners for centuries and they work. Not in a lab, but in life. They\'d argue that the scientific parallels aren\'t coincidences \u2014 the Hermetic tradition described vibrational reality, self-similar patterns, and polarity thousands of years before quantum physics and fractal mathematics. They\'d say "manifesting" isn\'t magic but focused attention and aligned action, which cognitive science already validates through concepts like self-fulfilling prophecies, confirmation bias (used constructively), and the reticular activating system. They might say that science describes the "how" while these laws describe the "why."',
    openQuestions: [
      'Are the parallels between Hermetic principles and modern physics coincidental or indicative of genuine insight?',
      'Does focused intention/attention actually change outcomes beyond placebo and increased effort?',
      'Is there a meaningful sense in which consciousness interacts with physical reality? Quantum interpretations disagree.',
      'Can philosophical frameworks be "true" in a way that isn\'t testable by science?'
    ],
    whatWeKnow: [
      'The Hermetic tradition is a real, centuries-old philosophical framework with documented lineage',
      'All matter vibrates at the quantum level \u2014 established physics',
      'Self-similar patterns across scales (fractals) are mathematically real',
      'Focused attention does change behavior and outcomes (well-established in psychology)',
      'The Kybalion (1908) remains influential in Western esoteric thought'
    ],
    whatWeDontKnow: [
      'Whether these principles describe reality or merely provide a useful mental model',
      'Whether "manifestation" involves anything beyond psychology (focus, motivation, selective attention)',
      'Whether ancient Hermetic thinkers had genuine insight into physics or were using apt metaphors',
      'Whether consciousness has a causal role in physical reality beyond the brain'
    ],
    scoreJustification: 'Score: 60%. The Hermetic Principles are a legitimate philosophical tradition with fascinating parallels to modern science. The "vibration" and "correspondence" principles in particular hold up remarkably well as descriptions of reality. Points are deducted for the unsupported leap to "manifestation through thought" and for presenting philosophical principles as natural laws. But this is one of the strongest sections of the book.',
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
      explanation: 'This is the weakest section of the book, and it\'s worth being very direct about why. The "666" patterns are a textbook example of numerological cherry-picking. Earth\'s tilt is 23.44\u00B0, so the complement is 66.56\u00B0 (rounded to 66.6). Orbital speed is ~66,600 mph. But these numbers only produce "666" because we\'re using specific imperial/arbitrary units. In kilometers, the circumference is ~40,075 \u2014 no 666. In radians, the tilt is 0.409 \u2014 no 666. You can find any number pattern in any set of measurements if you\'re allowed to choose your units, your rounding, and which numbers to highlight. This is called the "Texas sharpshooter fallacy" \u2014 shooting at a barn wall and drawing the target around wherever the bullets hit. The Earth\'s shape has been confirmed by GPS, satellite imagery, ship navigation, airline routes, time zones, and direct observation from space.',
      sources: ['NASA \u2014 Earth Fact Sheet', 'WGS84 reference ellipsoid (geodesy)', 'Confirmation bias \u2014 Nickerson, Review of General Psychology (1998)', 'Texas sharpshooter fallacy']
    },
    believerPerspective: 'Believers would argue that the consistency of the 666 pattern across multiple measurements is too coincidental to ignore, and that the choice of measurement systems isn\'t arbitrary \u2014 imperial units, they might claim, derive from ancient systems of measurement that were designed to reflect sacred geometry. Some would also point to the United Nations flag showing a flat-earth-like projection. They\'d say that NASA and space agencies have reasons to maintain the heliocentric model and that most people accept it on authority rather than personal verification.',
    openQuestions: [
      'Are there any meaningful questions about cosmology that mainstream science is too dogmatic about? (Yes, but Earth\'s shape isn\'t one of them.)',
      'Is it healthy to question institutional authority? (Yes, but questioning must follow evidence, not numerology.)'
    ],
    whatWeKnow: [
      'Earth is an oblate spheroid \u2014 confirmed by GPS, satellite imagery, circumnavigation, physics, time zones, star positions, and direct observation',
      'The "666" pattern only appears in specific imperial units and with rounding \u2014 it disappears in metric',
      'You can find any number pattern if you choose units, rounding, and which numbers to highlight',
      'The Texas sharpshooter fallacy is a well-documented cognitive bias',
      'Flat earth claims require every space agency, airline, navy, and physicist on Earth to be coordinating a deception'
    ],
    whatWeDontKnow: [
      'Very little, in this case. The shape and motion of Earth are among the most well-established facts in all of science.',
      'The only genuine cosmological open questions (dark matter, dark energy, expansion rate) have nothing to do with Earth\'s shape.'
    ],
    scoreJustification: 'Score: 5%. We acknowledge that questioning authority is healthy and that the book asks questions rather than making flat-earth claims outright. But the "evidence" presented is pure numerology that collapses under the slightest scrutiny (change units and the pattern vanishes). This is the one area where we can be most confident the book is wrong. The 5% is for the general principle that questioning things is good.',
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
      truthScore: 40,
      explanation: 'Astrotheology \u2014 the study of how astronomical events influenced religious narratives \u2014 is a real field with legitimate scholars. Solar symbolism IS deeply woven into Christianity: Christmas falls near the winter solstice (the "rebirth" of the sun), Easter aligns with the spring equinox, Jesus is called the "light of the world," he has 12 disciples (zodiac signs?), and the sun appears to "die" for three days at the winter solstice before rising again. These parallels are genuinely striking and have been noted by scholars, not just conspiracy theorists. Where the book stumbles is the false etymologies: "Horus" comes from Egyptian "Heru," not "hours." "Horizon" comes from Greek "horiz\u014Dn" (boundary), not Horus. These word games are verifiably wrong. But the broader thesis \u2014 that solar mythology influenced the Christ narrative \u2014 is a legitimate academic debate. Most historians agree a historical Jesus existed, but that doesn\'t mean the story wasn\'t dressed in solar mythological clothing.',
      sources: ['Ehrman \u2014 Did Jesus Exist? (2012)', 'Murdock \u2014 The Christ Conspiracy (1999)', 'Frazer \u2014 The Golden Bough (1890)', 'Campion \u2014 Astrology and Cosmology in the World\'s Religions (2012)', 'Egyptian language: Heru/Hor \u2014 unrelated to "hours"']
    },
    believerPerspective: 'Believers would say: forget the etymologies for a moment. The patterns are there. The sun "dies" for three days at the winter solstice and is "reborn" \u2014 exactly like Christ. The 12 zodiac signs and 12 disciples. The halo in Christian art IS a sun disk. Christmas IS the birthday of Sol Invictus. Easter IS a spring fertility festival. These are historical facts, not speculation. Whether or not the word "horizon" comes from Horus, the SYMBOLIC parallels between solar mythology and the Christ story are overwhelming. They\'d argue mainstream historians acknowledge these parallels but refuse to follow them to their logical conclusion because it threatens institutional Christianity.',
    openQuestions: [
      'To what extent did solar mythology influence the development of the Christ narrative? This is a genuine scholarly debate.',
      'Why does the Christ story share so many structural elements with solar mythology (death and rebirth, 12 companions, light symbolism)?',
      'Can a historical person and a mythological archetype coexist in the same narrative?',
      'Why was December 25th chosen for Christmas, given that it coincides with Roman Sol Invictus celebrations?'
    ],
    whatWeKnow: [
      'Solar symbolism is deeply embedded in Christianity (winter solstice, light of the world, halo imagery)',
      'Christmas was placed near the winter solstice and Sol Invictus festival \u2014 historical fact',
      '"Horus" comes from Egyptian "Heru," not "hours" \u2014 the etymology is wrong',
      '"Horizon" comes from Greek "horiz\u014Dn" (boundary) \u2014 not Horus',
      'Most mainstream historians agree a historical Jesus likely existed',
      'Solar mythology influencing religious narratives is studied in comparative religion'
    ],
    whatWeDontKnow: [
      'The precise degree to which solar mythology shaped the Christ story vs. independent development',
      'Whether the 12 disciples were intentionally modeled on zodiac signs',
      'Whether the death-and-resurrection motif is purely solar, purely historical, or a blend'
    ],
    scoreJustification: 'Score: 40%. The solar parallels in Christianity are real and well-documented by scholars. The etymological claims (Horus=Hours, Horizon=Horus rising) are verifiably false, which drags the score down. The broader thesis deserves more credit than skeptics usually give it, but the false wordplay undermines credibility. A stronger version of this argument exists without the made-up etymologies.',
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
      truthScore: 65,
      explanation: 'This is one of the book\'s most accurately represented sections. Kabbalah IS a genuine Jewish mystical tradition with deep scholarly roots going back to the Sefer Yetzirah (3rd-6th century) and the Zohar (13th century). The Tree of Life with its 10 sephirot IS an authentic framework used by millions of practitioners. The planetary and bodily correspondences the book presents are from the Western Hermetic Qabalah tradition (Golden Dawn, Aleister Crowley, Dion Fortune), which adapted Jewish Kabbalah for a broader esoteric context. This syncretic version is what the book teaches. It\'s worth noting that traditional Jewish Kabbalists would object to this mixing of traditions, and many consider the Hermetic version a dilution. But within Western esotericism, this is a well-established and coherent system that practitioners find deeply meaningful and practically useful for meditation and self-development.',
      sources: ['Sefer Yetzirah (3rd-6th century)', 'Zohar (13th century, attributed to Moses de Le\u00F3n)', 'Scholem \u2014 Major Trends in Jewish Mysticism (1941)', 'Regardie \u2014 The Golden Dawn (1937)', 'Fortune \u2014 The Mystical Qabalah (1935)']
    },
    believerPerspective: 'Believers would say the Tree of Life is one of humanity\'s most sophisticated maps of consciousness and reality. It\'s been used by Jewish mystics, Christian Hermeticists, and Western occultists for centuries, and its correspondences (planets, body parts, psychological states) are internally consistent and practically useful. They\'d point out that practitioners who work with the Tree report genuine transformative experiences, and that the system\'s complexity and coherence suggest it encodes real knowledge about the structure of consciousness. They might add that the separation of "Jewish" and "Hermetic" Kabbalah is somewhat artificial \u2014 cross-pollination happened early and often.',
    openQuestions: [
      'Does the Tree of Life describe something objectively real about consciousness, or is it a useful psychological model?',
      'Why has this system persisted and been independently rediscovered across traditions?',
      'Can structured meditation systems (like pathworking on the Tree) produce consistent, replicable psychological effects?'
    ],
    whatWeKnow: [
      'Kabbalah is a genuine mystical tradition with centuries of serious scholarship',
      'The Tree of Life is an authentic Kabbalistic framework, not a modern invention',
      'The planetary/bodily correspondences in the book are from Western Hermetic Qabalah, not original Judaism',
      'The Hermetic version is a syncretic adaptation, which traditional Kabbalists may dispute',
      'Practitioners across traditions report meaningful experiences working with this system'
    ],
    whatWeDontKnow: [
      'Whether the Tree of Life describes an objective structure of reality or is a powerful psychological map',
      'Why similar "tree" or "ladder" structures appear across unconnected mystical traditions',
      'Whether the bodily correspondences reflect genuine energetic anatomy or are purely symbolic'
    ],
    scoreJustification: 'Score: 65%. The highest in our analysis. The Kabbalah content is largely accurate to its tradition, well-sourced, and presented with reasonable fidelity. The main deductions are for not distinguishing between Jewish and Hermetic Kabbalah, and for presenting a specific interpretive tradition as universal truth. But the core content is real, established, and respected even by mainstream scholars of religion.',
    relatedConcepts: ['vibration-law', 'astrotheology', 'kundalini']
  },
  {
    id: 'veganism',
    title: 'Veganism & Spiritual Purity',
    chapter: 88,
    icon: '\uD83C\uDF31',
    summary: 'The book advocates veganism, claiming animal flesh transfers "occult virtues" and modern meat is contaminated.',
    bookClaim: 'Great thinkers (Plato, Pythagoras, Tesla, Newton) were vegan. Animal flesh is contaminated with vaccines and chemicals. Cells regenerate every 90 days. Dead flesh weakens the body.',
    analysis: {
      verdict: 'partial',
      truthScore: 30,
      explanation: 'There are legitimate threads here tangled with misinformation. Plant-based diets CAN be healthy and are endorsed by major nutrition organizations. Pythagoras WAS vegetarian \u2014 the term "Pythagorean diet" was used for centuries before "vegetarian" was coined. Many spiritual traditions (Jainism, some Hindu traditions, Buddhist monasticism) do link diet to spiritual development, and this is a real, practiced tradition with millions of adherents. The "you are what you eat" principle has real science behind it (gut microbiome, inflammation from processed foods, epigenetic effects of diet). Where the book goes wrong: Tesla and Newton were NOT vegan (this is verifiable). The anti-vaccine claims about meat are misinformation. Cell regeneration varies wildly by tissue (gut lining: 3-5 days; skeleton: ~10 years; some neurons: never). "Occult virtues" transferring through meat is a pre-scientific belief. And the claim that all great thinkers were vegan is simply false.',
      sources: ['Academy of Nutrition and Dietetics position on vegetarian diets (2016)', 'Pythagoras and vegetarianism \u2014 Ovid, Metamorphoses XV', 'Sender et al. \u2014 Cell turnover rates in the human body (2016)', 'Gut microbiome and diet \u2014 David et al., Nature (2014)']
    },
    believerPerspective: 'Believers would emphasize the spiritual dimension that science can\'t measure. They\'d say that every major spiritual tradition on Earth has recommended plant-based eating for spiritual development \u2014 yogis, monks, mystics, shamans. They\'d point to the documented effects of diet on consciousness: fasting clarifies the mind, heavy meals dull it. They\'d argue that even if the specific claims about Tesla and Newton are wrong, the broader pattern holds \u2014 many great thinkers DID eat lightly or vegetarian. And they\'d say that the ethical dimension (killing sentient beings) has real spiritual consequences that materialist science can\'t detect.',
    openQuestions: [
      'Does diet affect consciousness and spiritual development in ways science hasn\'t measured?',
      'Why do so many unconnected spiritual traditions recommend reducing or eliminating meat?',
      'Does the gut microbiome composition (which diet shapes) affect mental states more than we currently understand?',
      'Are there subtle effects of killing and consuming animals that go beyond nutrition?'
    ],
    whatWeKnow: [
      'Plant-based diets can be nutritionally complete \u2014 mainstream nutrition science supports this',
      'Pythagoras was vegetarian \u2014 historically documented',
      'Tesla and Newton were NOT vegan \u2014 the book is wrong on this',
      'Cell regeneration varies enormously by tissue type (days to never), NOT uniformly 90 days',
      'Diet dramatically affects the gut microbiome, which influences mood, cognition, and inflammation',
      'Spiritual vegetarianism is practiced in Jainism, Hinduism, Buddhism, and some Christian traditions',
      'The anti-vaccine claim about meat is misinformation'
    ],
    whatWeDontKnow: [
      'Whether plant-based diets have specific benefits for meditation, cognition, or "spiritual" experiences',
      'The full extent of the gut-brain axis and how diet shapes consciousness',
      'Whether the ethical dimension of food choices has measurable effects on wellbeing beyond guilt/alignment'
    ],
    scoreJustification: 'Score: 30%. Contains real elements (plant-based diets are healthy, spiritual vegetarianism is legitimate, Pythagoras was vegetarian, gut-brain connection is real) mixed with verifiable falsehoods (Tesla/Newton being vegan, anti-vax claims, uniform 90-day cell regeneration). The score reflects the genuine dietary and spiritual traditions while penalizing the factual errors and misinformation.',
    relatedConcepts: ['christ-oil', 'meditation']
  },
  {
    id: 'meditation',
    title: 'Meditation & Consciousness',
    chapter: 28,
    icon: '\uD83E\uDDD8',
    summary: 'Meditation activates the pineal gland and connects you to cosmic consciousness.',
    bookClaim: 'We are multidimensional infinite consciousness in a physical body. Meditation directs attention to the center of the mind, activating the pineal gland. This leads to mystical experiences, tingling, lightness, and out-of-body experiences.',
    analysis: {
      verdict: 'partial',
      truthScore: 55,
      explanation: 'Meditation is where the book\'s claims come closest to mainstream scientific validation. The benefits of meditation are extensively documented: reduced cortisol, lowered blood pressure, increased gray matter density (H\u00F6lzel, 2011), enhanced attention networks, reduced default mode network activity (associated with ego dissolution), and altered gamma wave patterns in long-term practitioners (Lutz, 2004). Experienced meditators DO report tingling, lightness, dissolution of body boundaries, and experiences that feel like expanded consciousness. These aren\'t imaginary \u2014 they correlate with measurable brain changes. The claim that meditation "activates the pineal gland" specifically isn\'t proven, but meditation DOES affect brain regions involved in interoception, self-referential processing, and arousal. The philosophical claim about "infinite consciousness" is the position of Advaita Vedanta, one of the most sophisticated philosophical traditions in human history. It\'s not science, but it\'s not New Age fluff either.',
      sources: ['H\u00F6lzel et al. \u2014 Mindfulness and gray matter density (2011)', 'Lutz et al. \u2014 Gamma activity in long-term meditators (PNAS, 2004)', 'Brewer et al. \u2014 Meditation and the default mode network (2011)', 'Goyal et al. \u2014 Meditation for stress (JAMA, 2014)', 'Shankara \u2014 Vivekachudamani (8th century Advaita Vedanta)']
    },
    believerPerspective: 'Believers would say meditation is the ONE practice where you can verify these claims yourself, first-hand. They\'d say: don\'t take our word for it, sit down, meditate for 30 days, and see what happens. The experiences the book describes (tingling, lightness, expanded awareness, the feeling of being more than the body) are reported by meditators in EVERY tradition: Buddhist, Hindu, Christian contemplative, Sufi, Taoist. The consistency of reports across cultures and centuries is evidence. They\'d argue that science is only beginning to map what meditators have known for millennia, and that the "hard problem of consciousness" means science can\'t yet explain WHY meditation produces these experiences \u2014 only that it does.',
    openQuestions: [
      'What is the "hard problem of consciousness" and does meditation offer experiential access to its answer?',
      'Why do long-term meditators across all traditions report remarkably similar experiences of expanded awareness?',
      'Does meditation access something fundamental about consciousness, or does it just alter brain chemistry?',
      'Is the default mode network\'s reduction during meditation related to what mystics call "ego death"?',
      'Could the consistent cross-cultural reports of out-of-body experiences during deep meditation point to something real?'
    ],
    whatWeKnow: [
      'Meditation produces measurable brain changes (gray matter, gamma waves, default mode network)',
      'Stress reduction, improved focus, and emotional regulation are well-established benefits',
      'Experienced meditators report altered states of consciousness \u2014 these correlate with brain changes',
      'Tingling, lightness, and body dissolution are commonly reported and not imaginary',
      'Advaita Vedanta ("consciousness is infinite/fundamental") is one of humanity\'s oldest philosophical traditions',
      'The "hard problem of consciousness" is genuinely unsolved in science'
    ],
    whatWeDontKnow: [
      'Whether meditation accesses something fundamental about consciousness or "merely" changes brain activity',
      'Whether out-of-body experiences during meditation are phenomenologically real or brain-generated',
      'The upper limits of what long-term meditation practice can achieve',
      'Whether consciousness is produced by the brain or filtered/received by it \u2014 this is the core question'
    ],
    scoreJustification: 'Score: 55%. Meditation\'s benefits are strongly supported by science. The subjective experiences described are real and well-documented. The specific claim about the pineal gland lacks support, and "infinite consciousness" is philosophical rather than scientific. But the book\'s core message here \u2014 that meditation can profoundly transform your experience of reality \u2014 is essentially correct. This is the section where the book is most grounded.',
    relatedConcepts: ['pineal-gland', 'kundalini', 'vibration-law']
  },
  {
    id: 'freemasonry',
    title: 'Freemasonry & Hidden Knowledge',
    chapter: 108,
    icon: '\uD83D\uDD3A',
    summary: 'Freemasons encode ancient wisdom in symbols, architecture, and currency.',
    bookClaim: 'The dollar bill pyramid spells MASON. "Annuit Coeptis Novus Ordo Seclorum" announces the New World Order. Adam Weishaupt founded the Illuminati in 1776 from the brightest Freemason minds.',
    analysis: {
      verdict: 'partial',
      truthScore: 30,
      explanation: 'This section mixes documented history with conspiracy theory. What\'s TRUE: Adam Weishaupt founded the Bavarian Illuminati on May 1, 1776 (established fact). Freemasonry IS a real fraternal organization with genuine esoteric traditions, symbolic rituals, and philosophical teachings drawn from Hermeticism, Kabbalah, and Rosicrucianism. Many Founding Fathers WERE Freemasons (Washington, Franklin, Hancock). Masonic symbolism IS on the dollar bill \u2014 the all-seeing eye and pyramid. What\'s WRONG or MISLEADING: "Novus Ordo Seclorum" translates to "New Order of the Ages" (referring to American independence), not "New World Order." The MASON letter pattern on the pyramid is pareidolia (pattern-seeking). The original Illuminati was disbanded by 1787 and there\'s no credible evidence of continuity. The leap from "Freemasons use esoteric symbolism" to "Freemasons secretly control the world" is enormous and unsupported.',
      sources: ['Bavarian Illuminati \u2014 Engel, Geschichte des Illuminaten-Ordens (1906)', 'Bullock \u2014 Revolutionary Brotherhood: Freemasonry in America (1996)', 'US Great Seal \u2014 Department of State official history', 'Masonic symbolism \u2014 Mackey, Encyclopedia of Freemasonry (1874)']
    },
    believerPerspective: 'Believers would say: you\'re admitting Freemasons ARE in positions of power, DO use esoteric symbolism, and DID put their symbols on the currency of the most powerful nation on Earth. The question isn\'t whether they\'re "secretly controlling the world" \u2014 it\'s whether an organization with esoteric knowledge, centuries of institutional continuity, and members in the highest positions of power has influenced the direction of civilization. They\'d argue that doesn\'t require a "conspiracy" \u2014 it just requires understanding how power networks and shared worldviews work. They\'d point out that Freemasonry\'s own documents describe a project of enlightening humanity and shaping society.',
    openQuestions: [
      'To what extent did Masonic philosophy shape the founding principles of the United States? This is a legitimate historical question.',
      'Do fraternal networks with shared esoteric worldviews influence politics and culture? Probably, but is that "conspiracy" or just networking?',
      'What IS the relationship between esoteric knowledge and institutional power throughout history?',
      'Is there a meaningful distinction between "secret society controlling things" and "network of like-minded powerful people"?'
    ],
    whatWeKnow: [
      'The Bavarian Illuminati was founded May 1, 1776, and disbanded by 1787 \u2014 documented history',
      'Many Founding Fathers were Freemasons \u2014 documented history',
      'Masonic symbolism is present on the dollar bill \u2014 visible fact',
      '"Novus Ordo Seclorum" means "New Order of the Ages," NOT "New World Order"',
      'Freemasonry incorporates Hermetic, Kabbalistic, and Rosicrucian teachings \u2014 this is in their own literature',
      'The MASON letter pattern on the pyramid is pattern-seeking (pareidolia), not intentional encoding'
    ],
    whatWeDontKnow: [
      'The full extent of Masonic influence on American founding principles and institutions',
      'Whether higher-degree Masonic teachings contain knowledge not available to lower degrees or the public',
      'Whether fraternal networks functionally operate as soft power structures even without formal conspiracy'
    ],
    scoreJustification: 'Score: 30%. The historical facts (Illuminati founding, Masonic Founding Fathers, symbolism on currency) are accurate. The translations, etymology, and pattern claims are wrong. The conspiracy narrative extrapolates far beyond the evidence. The score reflects real historical content undermined by unfounded leaps. A more careful version of this argument \u2014 "esoteric fraternal networks influenced American founding" \u2014 would score much higher.',
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
      truthScore: 40,
      explanation: 'The Hermetic tradition is real and historically significant, but the book conflates two very different texts. The Emerald Tablet (singular) is a genuine historical text \u2014 the earliest known version appears in Arabic alchemical works from the 6th-8th century CE, attributed to Hermes Trismegistus. Newton DID translate it (his manuscript survives as Keynes MS. 28 in Cambridge). Its famous line, "as above, so below," has influenced Western philosophy and science for centuries. HOWEVER, the "Emerald Tablets of Thoth" (plural) by "M. Doreal" (published 1930s-1940s) is a completely different, modern text that claims to be channeled from ancient Atlantis. The book doesn\'t distinguish between these, which is misleading. The Thoth-Hermes connection is genuinely established in Greco-Egyptian tradition (Hermes Trismegistus = "Thrice-Great Hermes" = syncretic Thoth-Hermes figure). But equating Thoth with Moses is a minority esoteric claim, not mainstream scholarship.',
      sources: ['The Emerald Tablet \u2014 Kitab Sirr al-Khaliqa (Arabic, 6th-8th c.)', 'Newton\'s translation \u2014 Keynes MS. 28, King\'s College Cambridge', 'Doreal \u2014 Emerald Tablets of Thoth-the-Atlantean (1930s)', 'Copenhaver \u2014 Hermetica (1992)', 'Fowden \u2014 The Egyptian Hermes (1986)']
    },
    believerPerspective: 'Believers would say: Isaac Newton \u2014 one of the greatest scientific minds in history \u2014 spent MORE time studying alchemy and the Hermetic tradition than he spent on physics. That\'s a documented fact. He translated the Emerald Tablet because he believed it contained real knowledge. If Newton took this seriously, perhaps modern materialists are the ones missing something. As for Doreal\'s tablets \u2014 believers would argue that the content should be judged on its merits, not its provenance. And the Thoth-Hermes-Moses identification, while not mainstream, reflects an ancient tradition of seeing these figures as the same archetype of the "divine teacher" appearing in different cultures.',
    openQuestions: [
      'Why did Isaac Newton dedicate so much of his life to alchemy and Hermeticism? Was he just wrong, or did he find something of value?',
      'Does the Hermetic tradition contain genuine insights that modern science has overlooked?',
      'Is the "Thrice-Great Hermes" / Thoth syncretic figure a historical reality or a Hellenistic invention?',
      'Can modern channeled texts (like Doreal\'s) contain genuine insights even if their claimed origins are dubious?'
    ],
    whatWeKnow: [
      'The Emerald Tablet (singular) is a real historical text from the Arabic alchemical tradition',
      'Newton translated it \u2014 his manuscript survives in Cambridge (Keynes MS. 28)',
      'Doreal\'s "Emerald Tablets of Thoth" (plural) is a modern 1930s text, not an ancient document',
      'The Thoth-Hermes Trismegistus identification is genuine Greco-Egyptian syncretism',
      'Newton spent enormous time on alchemy and Hermeticism \u2014 more than on physics',
      'The Hermetica influenced the Renaissance, the Scientific Revolution, and Western esotericism profoundly'
    ],
    whatWeDontKnow: [
      'The true age and origin of the Emerald Tablet tradition \u2014 it may be older than the earliest surviving Arabic manuscripts',
      'Whether Newton found practical value in alchemical/Hermetic study or was pursuing a dead end',
      'Whether the Hermetic tradition preserves genuinely ancient knowledge or is a Hellenistic-era synthesis'
    ],
    scoreJustification: 'Score: 40%. The Hermetic tradition is historically real and significant. Newton\'s involvement is a powerful and true point. The conflation of the genuine Emerald Tablet with Doreal\'s modern text is a significant error. The Thoth-Moses equation is unsupported. Score reflects substantial historical truth mixed with conflation and unsupported claims.',
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
      truthScore: 50,
      explanation: 'Sacred geometry is one of those areas where the book is pointing at something genuinely real, even if it overstates the case. Toroidal (donut-shaped) structures ARE remarkably common in nature: Earth\'s magnetic field, the structure of tokamak plasma, blood flow in the heart, the topology of some atomic orbitals, and the large-scale structure of the universe may have toroidal properties. The Fibonacci sequence and golden ratio DO appear throughout nature (phyllotaxis in plants, spiral galaxies, nautilus shells). Fractal self-similarity IS real mathematics. The observation that similar patterns repeat at different scales IS scientifically valid. Where the book overreaches is in claiming one shape "explains all things." Nature uses many geometries \u2014 spheres, spirals, branching fractals, hexagonal tilings, Voronoi patterns. The torus is one important shape among many, not THE master key.',
      sources: ['Toroidal magnetic fields in astrophysics and fusion physics', 'Fibonacci in nature \u2014 Livio, The Golden Ratio (2002)', 'Mandelbrot \u2014 Fractal Geometry of Nature (1982)', 'Martineau \u2014 A Little Book of Coincidence in the Solar System (2001)']
    },
    believerPerspective: 'Believers would say: the torus is everywhere because it\'s the most fundamental energy dynamic in the universe \u2014 the pattern of flow itself. It\'s how energy moves: out from the center, around, and back. Your heart creates a toroidal electromagnetic field. The Earth creates one. Galaxies appear to. When you see the same pattern at every scale, from atoms to galaxies, that\'s not coincidence \u2014 that\'s a fundamental principle. They\'d argue that sacred geometry isn\'t mysticism, it\'s observation \u2014 the ancients mapped these patterns before we had mathematics to describe them.',
    openQuestions: [
      'Why DO toroidal structures appear so frequently across scales in nature?',
      'Is there a deeper physical principle that explains the recurrence of certain geometric forms?',
      'Does the prevalence of Fibonacci patterns in nature reflect an underlying mathematical reality or selective observation?',
      'Could ancient sacred geometry represent genuine mathematical insights encoded in artistic/religious forms?'
    ],
    whatWeKnow: [
      'Toroidal structures appear in magnetic fields, plasma physics, fluid dynamics, and biology',
      'Fibonacci patterns and the golden ratio genuinely appear in plant growth, shells, and other natural systems',
      'Fractal self-similarity (patterns repeating at different scales) is mathematically real',
      'Nature uses MANY geometric patterns, not just one \u2014 hexagons, spirals, branches, spheres, Voronoi cells',
      'Sacred geometry traditions (Islamic, Hindu, Greek) were mathematically sophisticated'
    ],
    whatWeDontKnow: [
      'Whether the prevalence of certain geometric forms reflects deep physics or observational bias',
      'Whether a unified geometric framework for nature exists or whether different scales use different geometries',
      'Whether ancient sacred geometers understood principles modern mathematics is still formalizing'
    ],
    scoreJustification: 'Score: 50%. The geometric patterns the book highlights are genuinely real and well-documented in mathematics and physics. The torus IS a recurring natural form. Fibonacci patterns ARE in nature. But claiming one shape is the "key to all things" is an overstatement. The score reflects real geometric insights presented with too much certainty and too little nuance.',
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
    <div className="concept-card" data-verdict={concept.analysis.verdict} onClick={onClick}>
      <div className="concept-card-icon"><ConceptIcon id={concept.id} size={56} /></div>
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
  const [activeTab, setActiveTab] = useState<'analysis' | 'believer' | 'unknown'>('analysis')

  return (
    <div className="concept-detail">
      <button className="back-button" onClick={onBack}>
        &larr; Back to all concepts
      </button>

      <div className="detail-header">
        <span className="detail-icon"><ConceptIcon id={concept.id} size={80} /></span>
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

      <div className="tab-bar">
        <button
          className={`tab-btn ${activeTab === 'analysis' ? 'active' : ''}`}
          onClick={() => setActiveTab('analysis')}
        >
          Our Analysis
        </button>
        <button
          className={`tab-btn ${activeTab === 'believer' ? 'active' : ''}`}
          onClick={() => setActiveTab('believer')}
        >
          The Believer&apos;s Case
        </button>
        <button
          className={`tab-btn ${activeTab === 'unknown' ? 'active' : ''}`}
          onClick={() => setActiveTab('unknown')}
        >
          What We Don&apos;t Know
        </button>
      </div>

      {activeTab === 'analysis' && (
        <>
          <section className="detail-section">
            <h2>Critical Analysis</h2>
            <p>{concept.analysis.explanation}</p>
          </section>

          <section className="detail-section">
            <h2>What We Know for Sure</h2>
            <ul>
              {concept.whatWeKnow.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section score-box">
            <h2>Why This Score?</h2>
            <p>{concept.scoreJustification}</p>
          </section>
        </>
      )}

      {activeTab === 'believer' && (
        <>
          <section className="detail-section believer-section">
            <h2>How a Believer Would Respond</h2>
            <p>{concept.believerPerspective}</p>
          </section>

          <section className="detail-section">
            <h2>Where They Have a Point</h2>
            <p className="fair-point-intro">
              Honest analysis means acknowledging when the other side raises legitimate questions, even if we disagree with their conclusions.
            </p>
            <ul className="open-questions">
              {concept.openQuestions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </section>
        </>
      )}

      {activeTab === 'unknown' && (
        <>
          <section className="detail-section">
            <h2>What Science Has Established</h2>
            <ul>
              {concept.whatWeKnow.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section unknown-section">
            <h2>What We Genuinely Don&apos;t Know</h2>
            <p className="unknown-intro">
              These are real open questions where honest scientists and thinkers admit uncertainty. The book may be wrong about the answers, but these questions are legitimate.
            </p>
            <ul>
              {concept.whatWeDontKnow.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section">
            <h2>Open Questions Worth Exploring</h2>
            <ul className="open-questions">
              {concept.openQuestions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </section>
        </>
      )}

      <section className="detail-section">
        <h2>Sources &amp; Further Reading</h2>
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
        <svg className="header-geometry" viewBox="0 0 500 500" fill="none">
          {[0,1,2,3,4,5].map(i => (
            <circle key={`outer-${i}`} cx={250+80*Math.cos(i*Math.PI/3)} cy={250+80*Math.sin(i*Math.PI/3)}
                    r="80" stroke="#d4a853" strokeWidth="0.8"/>
          ))}
          <circle cx="250" cy="250" r="80" stroke="#d4a853" strokeWidth="0.8"/>
          <circle cx="250" cy="250" r="160" stroke="#8b5cf6" strokeWidth="0.5"/>
          <circle cx="250" cy="250" r="240" stroke="#8b5cf6" strokeWidth="0.3"/>
          {[0,1,2,3,4,5].map(i => (
            <line key={`line-${i}`}
                  x1={250+160*Math.cos(i*Math.PI/3)} y1={250+160*Math.sin(i*Math.PI/3)}
                  x2={250+160*Math.cos((i+3)*Math.PI/3)} y2={250+160*Math.sin((i+3)*Math.PI/3)}
                  stroke="#8b5cf6" strokeWidth="0.3"/>
          ))}
        </svg>
        <div className="header-content">
          <h1 className="app-title">
            <span className="title-icon">&#128214;</span>
            The Book of Wisdom
            <span className="title-subtitle">Interactive Explorer</span>
          </h1>
          <p className="app-description">
            A deep, balanced analysis of "The Book of Wisdom" by Revival of Wisdom.
            We examine each concept honestly: what&apos;s true, what&apos;s not, what believers say, and what science genuinely doesn&apos;t know yet.
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
              <h3>Our Approach</h3>
              <p className="legend-intro">
                We try to be fair. For each concept we present three perspectives: our critical analysis, how a true believer would respond, and what science genuinely doesn&apos;t know. We admit our own uncertainty where it exists.
              </p>
              <div className="legend-items">
                <div className="legend-item">
                  <span className="legend-dot" style={{ background: verdictColors.supported }} />
                  <span><strong>Supported</strong> &mdash; Backed by mainstream scientific evidence</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot" style={{ background: verdictColors.partial }} />
                  <span><strong>Partially True</strong> &mdash; Real elements mixed with unsupported claims</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot" style={{ background: verdictColors.unsupported }} />
                  <span><strong>Unsupported</strong> &mdash; No credible evidence supports the central claim</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot" style={{ background: verdictColors.philosophical }} />
                  <span><strong>Philosophical</strong> &mdash; A genuine tradition, but not testable as scientific fact</span>
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
          This app provides critical analysis for educational purposes. We don&apos;t claim to have all the answers.
          The truth is often more nuanced than either believers or skeptics admit. Think for yourself.
        </p>
      </footer>
    </div>
  )
}

export default App

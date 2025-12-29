export interface GrammarTopic {
  id: string;
  title: string;
  titleUk: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  descriptionUk: string;
  explanation: string;
  explanationUk: string;
  examples: {
    correct: string;
    incorrect?: string;
    translation: string;
  }[];
  quizQuestions: QuizQuestion[];
  practiceExercises: PracticeExercise[];
  sentenceBuilding: SentenceBuilding[];
}

export interface QuizQuestion {
  question: string;
  questionUk: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  explanationUk: string;
}

export interface PracticeExercise {
  sentence: string;
  sentenceUk: string;
  blank: string;
  options: string[];
  correctAnswer: string;
}

export interface SentenceBuilding {
  prompt: string;
  promptUk: string;
  words: string[];
  correctOrder: number[];
}

export const grammarTopics: GrammarTopic[] = [
  {
    id: 'present-simple',
    title: 'Present Simple',
    titleUk: 'Простий теперішній час',
    level: 'beginner',
    description: 'Learn how to talk about habits, facts, and regular actions',
    descriptionUk: 'Навчіться говорити про звички, факти та регулярні дії',
    explanation: 'The Present Simple is used for:\n• Habits and routines (I wake up at 7am)\n• General truths (The sun rises in the east)\n• Permanent situations (She lives in Kyiv)\n\nForm: Subject + base verb (add -s/-es for he/she/it)',
    explanationUk: 'Present Simple використовується для:\n• Звичок та рутини (Я прокидаюсь о 7 ранку)\n• Загальних істин (Сонце сходить на сході)\n• Постійних ситуацій (Вона живе в Києві)\n\nФорма: Підмет + основна форма дієслова (додайте -s/-es для he/she/it)',
    examples: [
      { correct: 'I study English every day.', translation: 'Я вивчаю англійську кожен день.' },
      { correct: 'She works in a hospital.', translation: 'Вона працює в лікарні.' },
      { correct: 'They live in Ukraine.', translation: 'Вони живуть в Україні.' }
    ],
    quizQuestions: [
      {
        question: 'She ___ to work by bus.',
        questionUk: 'Вона ___ на роботу автобусом.',
        options: ['go', 'goes', 'going', 'is going'],
        correctAnswer: 1,
        explanation: 'Use "goes" with "she" in Present Simple',
        explanationUk: 'Використовуйте "goes" з "she" в Present Simple'
      }
    ],
    practiceExercises: [
      {
        sentence: 'My brother ___ football every weekend.',
        sentenceUk: 'Мій брат ___ у футбол кожні вихідні.',
        blank: '___',
        options: ['play', 'plays', 'playing'],
        correctAnswer: 'plays'
      }
    ],
    sentenceBuilding: [
      {
        prompt: 'Make a sentence: "I eat breakfast every day"',
        promptUk: 'Складіть речення: "Я снідаю кожен день"',
        words: ['I', 'breakfast', 'eat', 'every', 'day'],
        correctOrder: [0, 2, 1, 3, 4]
      }
    ]
  },
  {
    id: 'present-continuous',
    title: 'Present Continuous',
    titleUk: 'Теперішній тривалий час',
    level: 'beginner',
    description: 'Talk about actions happening right now',
    descriptionUk: 'Говоріть про дії, що відбуваються зараз',
    explanation: 'Present Continuous is used for:\n• Actions happening now (I am studying)\n• Temporary situations (He is living in Lviv this month)\n• Future plans (We are meeting tomorrow)\n\nForm: Subject + am/is/are + verb-ing',
    explanationUk: 'Present Continuous використовується для:\n• Дій зараз (Я вчуся)\n• Тимчасових ситуацій (Він живе у Львові цього місяця)\n• Майбутніх планів (Ми зустрічаємось завтра)\n\nФорма: Підмет + am/is/are + дієслово-ing',
    examples: [
      { correct: 'I am learning English now.', translation: 'Я вивчаю англійську зараз.' },
      { correct: 'She is reading a book.', translation: 'Вона читає книгу.' }
    ],
    quizQuestions: [
      {
        question: 'Look! It ___ outside.',
        questionUk: 'Дивись! ___ надворі.',
        options: ['rain', 'rains', 'is raining', 'raining'],
        correctAnswer: 2,
        explanation: 'Use Present Continuous for actions happening now',
        explanationUk: 'Використовуйте Present Continuous для дій зараз'
      }
    ],
    practiceExercises: [
      {
        sentence: 'He ___ TV right now.',
        sentenceUk: 'Він ___ телевізор зараз.',
        blank: '___',
        options: ['watch', 'watches', 'is watching'],
        correctAnswer: 'is watching'
      }
    ],
    sentenceBuilding: [
      {
        prompt: 'Make a sentence: "I am eating lunch"',
        promptUk: 'Складіть речення: "Я обідаю"',
        words: ['I', 'am', 'eating', 'lunch'],
        correctOrder: [0, 1, 2, 3]
      }
    ]
  },
  {
    id: 'past-simple',
    title: 'Past Simple',
    titleUk: 'Простий минулий час',
    level: 'beginner',
    description: 'Talk about completed actions in the past',
    descriptionUk: 'Говоріть про завершені дії в минулому',
    explanation: 'Past Simple is used for:\n• Completed past actions (I visited Kyiv)\n• Past habits (She walked to school)\n\nForm: Subject + verb-ed (regular) or special form (irregular)',
    explanationUk: 'Past Simple використовується для:\n• Завершених дій (Я відвідав Київ)\n• Минулих звичок (Вона ходила до школи)\n\nФорма: Підмет + дієслово-ed або спеціальна форма',
    examples: [
      { correct: 'I visited Odesa last summer.', translation: 'Я відвідав Одесу минулого літа.' },
      { correct: 'They went to the cinema.', translation: 'Вони ходили в кіно.' }
    ],
    quizQuestions: [
      {
        question: 'I ___ to London in 2019.',
        questionUk: 'Я ___ до Лондона в 2019.',
        options: ['go', 'goes', 'went', 'going'],
        correctAnswer: 2,
        explanation: '"Went" is the past form of "go"',
        explanationUk: '"Went" - минула форма "go"'
      }
    ],
    practiceExercises: [
      {
        sentence: 'We ___ a movie last night.',
        sentenceUk: 'Ми ___ фільм минулої ночі.',
        blank: '___',
        options: ['watch', 'watched', 'watching'],
        correctAnswer: 'watched'
      }
    ],
    sentenceBuilding: [
      {
        prompt: 'Make a sentence: "They played football yesterday"',
        promptUk: 'Складіть речення: "Вони грали у футбол вчора"',
        words: ['They', 'football', 'played', 'yesterday'],
        correctOrder: [0, 2, 1, 3]
      }
    ]
  },
  {
    id: 'present-perfect',
    title: 'Present Perfect',
    titleUk: 'Теперішній досконалий час',
    level: 'intermediate',
    description: 'Connect past actions to the present',
    descriptionUk: 'Зв\'яжіть минулі дії з теперішнім',
    explanation: 'Present Perfect is used for:\n• Past actions with present results (I have finished my homework)\n• Life experiences (She has visited Paris)\n• Actions that started in the past and continue (I have lived here for 5 years)\n\nForm: Subject + have/has + past participle',
    explanationUk: 'Present Perfect використовується для:\n• Минулих дій з результатом зараз (Я закінчив домашню роботу)\n• Життєвого досвіду (Вона відвідала Париж)\n• Дій, що почались в минулому і тривають (Я живу тут 5 років)\n\nФорма: Підмет + have/has + третя форма дієслова',
    examples: [
      { correct: 'I have studied English for 3 years.', translation: 'Я вивчаю англійську 3 роки.' },
      { correct: 'She has visited 10 countries.', translation: 'Вона відвідала 10 країн.' },
      { correct: 'They have just arrived.', translation: 'Вони щойно прибули.' }
    ],
    quizQuestions: [
      {
        question: 'I ___ this movie before.',
        questionUk: 'Я ___ цей фільм раніше.',
        options: ['see', 'saw', 'have seen', 'seeing'],
        correctAnswer: 2,
        explanation: 'Use Present Perfect for experiences',
        explanationUk: 'Використовуйте Present Perfect для досвіду'
      }
    ],
    practiceExercises: [
      {
        sentence: 'She ___ her keys.',
        sentenceUk: 'Вона ___ свої ключі.',
        blank: '___',
        options: ['lose', 'lost', 'has lost'],
        correctAnswer: 'has lost'
      }
    ],
    sentenceBuilding: [
      {
        prompt: 'Make a sentence: "I have finished my work"',
        promptUk: 'Складіть речення: "Я закінчив свою роботу"',
        words: ['I', 'have', 'finished', 'my', 'work'],
        correctOrder: [0, 1, 2, 3, 4]
      }
    ]
  },
  {
    id: 'past-continuous',
    title: 'Past Continuous',
    titleUk: 'Минулий тривалий час',
    level: 'intermediate',
    description: 'Describe actions in progress in the past',
    descriptionUk: 'Описуйте дії, що тривали в минулому',
    explanation: 'Past Continuous is used for:\n• Actions in progress at a specific time in the past (I was studying at 8pm)\n• Background actions (It was raining when I left)\n• Two simultaneous actions (While I was cooking, he was reading)\n\nForm: Subject + was/were + verb-ing',
    explanationUk: 'Past Continuous використовується для:\n• Дій, що тривали в певний момент минулого (Я вчився о 20:00)\n• Фонових дій (Йшов дощ, коли я виходив)\n• Двох одночасних дій (Поки я готував, він читав)\n\nФорма: Підмет + was/were + дієслово-ing',
    examples: [
      { correct: 'I was sleeping when you called.', translation: 'Я спав, коли ти подзвонив.' },
      { correct: 'They were playing tennis at 5pm.', translation: 'Вони грали в теніс о 17:00.' }
    ],
    quizQuestions: [
      {
        question: 'She ___ when I arrived.',
        questionUk: 'Вона ___, коли я прийшов.',
        options: ['study', 'studied', 'was studying', 'studies'],
        correctAnswer: 2,
        explanation: 'Use Past Continuous for action in progress in the past',
        explanationUk: 'Використовуйте Past Continuous для дії, що тривала в минулому'
      }
    ],
    practiceExercises: [
      {
        sentence: 'We ___ dinner at 7pm.',
        sentenceUk: 'Ми ___ вечеряли о 19:00.',
        blank: '___',
        options: ['have', 'had', 'were having'],
        correctAnswer: 'were having'
      }
    ],
    sentenceBuilding: [
      {
        prompt: 'Make a sentence: "I was watching TV"',
        promptUk: 'Складіть речення: "Я дивився телевізор"',
        words: ['I', 'was', 'watching', 'TV'],
        correctOrder: [0, 1, 2, 3]
      }
    ]
  },
  {
    id: 'future-simple',
    title: 'Future Simple (will)',
    titleUk: 'Простий майбутній час',
    level: 'beginner',
    description: 'Talk about future actions and predictions',
    descriptionUk: 'Говоріть про майбутні дії та прогнози',
    explanation: 'Future Simple (will) is used for:\n• Spontaneous decisions (I will help you)\n• Predictions (It will rain tomorrow)\n• Promises (I will call you later)\n\nForm: Subject + will + base verb',
    explanationUk: 'Future Simple (will) використовується для:\n• Спонтанних рішень (Я допоможу тобі)\n• Прогнозів (Завтра буде дощ)\n• Обіцянок (Я подзвоню тобі пізніше)\n\nФорма: Підмет + will + основна форма дієслова',
    examples: [
      { correct: 'I will visit you tomorrow.', translation: 'Я відвідаю тебе завтра.' },
      { correct: 'She will pass the exam.', translation: 'Вона здасть іспит.' }
    ],
    quizQuestions: [
      {
        question: 'I ___ you tomorrow.',
        questionUk: 'Я ___ тобі завтра.',
        options: ['call', 'called', 'will call', 'calling'],
        correctAnswer: 2,
        explanation: 'Use "will" for future promises',
        explanationUk: 'Використовуйте "will" для обіцянок'
      }
    ],
    practiceExercises: [
      {
        sentence: 'They ___ arrive at 6pm.',
        sentenceUk: 'Вони ___ о 18:00.',
        blank: '___',
        options: ['arrive', 'will arrive', 'arriving'],
        correctAnswer: 'will arrive'
      }
    ],
    sentenceBuilding: [
      {
        prompt: 'Make a sentence: "I will help you"',
        promptUk: 'Складіть речення: "Я допоможу тобі"',
        words: ['I', 'will', 'help', 'you'],
        correctOrder: [0, 1, 2, 3]
      }
    ]
  },
  {
    id: 'future-going-to',
    title: 'Future with "going to"',
    titleUk: 'Майбутній час з "going to"',
    level: 'beginner',
    description: 'Express plans and intentions',
    descriptionUk: 'Висловлюйте плани та наміри',
    explanation: '"Going to" is used for:\n• Plans and intentions (I am going to study medicine)\n• Predictions based on evidence (Look! It is going to rain)\n\nForm: Subject + am/is/are + going to + base verb',
    explanationUk: '"Going to" використовується для:\n• Планів та намірів (Я збираюся вивчати медицину)\n• Прогнозів на основі доказів (Дивись! Буде дощ)\n\nФорма: Підмет + am/is/are + going to + основна форма дієслова',
    examples: [
      { correct: 'I am going to study tonight.', translation: 'Я збираюся вчитися сьогодні ввечері.' },
      { correct: 'She is going to buy a car.', translation: 'Вона збирається купити машину.' }
    ],
    quizQuestions: [
      {
        question: 'We ___ visit Paris next year.',
        questionUk: 'Ми ___ відвідати Париж наступного року.',
        options: ['will', 'are going to', 'go to', 'going'],
        correctAnswer: 1,
        explanation: 'Use "going to" for planned future actions',
        explanationUk: 'Використовуйте "going to" для запланованих дій'
      }
    ],
    practiceExercises: [
      {
        sentence: 'He ___ learn Spanish.',
        sentenceUk: 'Він ___ вивчати іспанську.',
        blank: '___',
        options: ['will', 'is going to', 'going to'],
        correctAnswer: 'is going to'
      }
    ],
    sentenceBuilding: [
      {
        prompt: 'Make a sentence: "I am going to travel"',
        promptUk: 'Складіть речення: "Я збираюся подорожувати"',
        words: ['I', 'am', 'going', 'to', 'travel'],
        correctOrder: [0, 1, 2, 3, 4]
      }
    ]
  },
  {
    id: 'present-perfect-continuous',
    title: 'Present Perfect Continuous',
    titleUk: 'Теперішній досконалий тривалий',
    level: 'advanced',
    description: 'Express duration of ongoing actions',
    descriptionUk: 'Висловлюйте тривалість дій, що продовжуються',
    explanation: 'Present Perfect Continuous is used for:\n• Actions that started in the past and are still continuing (I have been studying for 2 hours)\n• Recent activities with visible results (You have been running - you look tired)\n\nForm: Subject + have/has + been + verb-ing',
    explanationUk: 'Present Perfect Continuous використовується для:\n• Дій, що почались в минулому і тривають (Я вчуся вже 2 години)\n• Недавніх активностей з видимим результатом (Ти бігав - ти виглядаєш втомленим)\n\nФорма: Підмет + have/has + been + дієслово-ing',
    examples: [
      { correct: 'I have been waiting for an hour.', translation: 'Я чекаю вже годину.' },
      { correct: 'She has been working here since 2020.', translation: 'Вона працює тут з 2020 року.' }
    ],
    quizQuestions: [
      {
        question: 'They ___ English for 5 years.',
        questionUk: 'Вони ___ англійську 5 років.',
        options: ['learn', 'have learned', 'have been learning', 'learning'],
        correctAnswer: 2,
        explanation: 'Use Present Perfect Continuous for duration',
        explanationUk: 'Використовуйте Present Perfect Continuous для тривалості'
      }
    ],
    practiceExercises: [
      {
        sentence: 'I ___ all day.',
        sentenceUk: 'Я ___ весь день.',
        blank: '___',
        options: ['work', 'worked', 'have been working'],
        correctAnswer: 'have been working'
      }
    ],
    sentenceBuilding: [
      {
        prompt: 'Make a sentence: "I have been reading for two hours"',
        promptUk: 'Складіть речення: "Я читаю вже дві години"',
        words: ['I', 'have', 'been', 'reading', 'for', 'two', 'hours'],
        correctOrder: [0, 1, 2, 3, 4, 5, 6]
      }
    ]
  },
  {
    id: 'past-perfect',
    title: 'Past Perfect',
    titleUk: 'Минулий досконалий час',
    level: 'advanced',
    description: 'Talk about actions before other past actions',
    descriptionUk: 'Говоріть про дії до інших минулих дій',
    explanation: 'Past Perfect is used for:\n• Actions completed before another past action (I had finished dinner when he arrived)\n• To show which action happened first in the past\n\nForm: Subject + had + past participle',
    explanationUk: 'Past Perfect використовується для:\n• Дій, завершених до іншої минулої дії (Я закінчив вечерю, коли він прийшов)\n• Щоб показати, яка дія відбулась першою в минулому\n\nФорма: Підмет + had + третя форма дієслова',
    examples: [
      { correct: 'I had studied before the test.', translation: 'Я вчився до тесту.' },
      { correct: 'She had left when I arrived.', translation: 'Вона пішла, коли я прийшов.' }
    ],
    quizQuestions: [
      {
        question: 'They ___ dinner before we arrived.',
        questionUk: 'Вони ___ вечерю до нашого приїзду.',
        options: ['finish', 'finished', 'had finished', 'have finished'],
        correctAnswer: 2,
        explanation: 'Use Past Perfect for action before another past action',
        explanationUk: 'Використовуйте Past Perfect для дії до іншої минулої дії'
      }
    ],
    practiceExercises: [
      {
        sentence: 'I ___ the book before watching the movie.',
        sentenceUk: 'Я ___ книгу до перегляду фільму.',
        blank: '___',
        options: ['read', 'readed', 'had read'],
        correctAnswer: 'had read'
      }
    ],
    sentenceBuilding: [
      {
        prompt: 'Make a sentence: "I had finished my homework"',
        promptUk: 'Складіть речення: "Я закінчив домашню роботу"',
        words: ['I', 'had', 'finished', 'my', 'homework'],
        correctOrder: [0, 1, 2, 3, 4]
      }
    ]
  },
  {
    id: 'modal-verbs',
    title: 'Modal Verbs (can, must, should)',
    titleUk: 'Модальні дієслова',
    level: 'intermediate',
    description: 'Express ability, permission, obligation',
    descriptionUk: 'Висловлюйте здатність, дозвіл, обов\'язок',
    explanation: 'Modal verbs express:\n• Ability: can, could (I can swim)\n• Permission: may, can (You can go)\n• Obligation: must, have to (You must study)\n• Advice: should (You should rest)\n\nForm: Subject + modal verb + base verb (no "to")',
    explanationUk: 'Модальні дієслова виражають:\n• Здатність: can, could (Я вмію плавати)\n• Дозвіл: may, can (Ти можеш йти)\n• Обов\'язок: must, have to (Ти повинен вчитися)\n• Пораду: should (Тобі слід відпочити)\n\nФорма: Підмет + модальне дієслово + основна форма (без "to")',
    examples: [
      { correct: 'I can speak English.', translation: 'Я вмію говорити англійською.' },
      { correct: 'You must wear a seatbelt.', translation: 'Ти повинен пристебнути ремінь.' },
      { correct: 'She should see a doctor.', translation: 'Їй слід звернутися до лікаря.' }
    ],
    quizQuestions: [
      {
        question: 'You ___ study for the exam.',
        questionUk: 'Тобі ___ вчитися до іспиту.',
        options: ['can', 'should', 'may', 'could'],
        correctAnswer: 1,
        explanation: 'Use "should" for advice',
        explanationUk: 'Використовуйте "should" для порад'
      }
    ],
    practiceExercises: [
      {
        sentence: 'I ___ swim very well.',
        sentenceUk: 'Я ___ дуже добре плавати.',
        blank: '___',
        options: ['can', 'must', 'should'],
        correctAnswer: 'can'
      }
    ],
    sentenceBuilding: [
      {
        prompt: 'Make a sentence: "You should eat healthy food"',
        promptUk: 'Складіть речення: "Тобі слід їсти здорову їжу"',
        words: ['You', 'should', 'eat', 'healthy', 'food'],
        correctOrder: [0, 1, 2, 3, 4]
      }
    ]
  },
  {
    id: 'passive-voice',
    title: 'Passive Voice',
    titleUk: 'Пасивний стан',
    level: 'advanced',
    description: 'Focus on the action, not the doer',
    descriptionUk: 'Зосередьтесь на дії, а не на виконавці',
    explanation: 'Passive Voice is used when:\n• The doer is unknown or unimportant (The car was stolen)\n• We want to emphasize the action (English is spoken worldwide)\n\nForm: Subject + be (conjugated) + past participle',
    explanationUk: 'Пасивний стан використовується, коли:\n• Виконавець невідомий або неважливий (Машину вкрали)\n• Хочемо наголосити на дії (Англійською говорять по всьому світу)\n\nФорма: Підмет + be (у потрібній формі) + третя форма дієслова',
    examples: [
      { correct: 'The book was written in 1950.', translation: 'Книгу було написано в 1950 році.' },
      { correct: 'English is spoken here.', translation: 'Тут говорять англійською.' },
      { correct: 'The house will be built next year.', translation: 'Будинок буде побудовано наступного року.' }
    ],
    quizQuestions: [
      {
        question: 'The letter ___ yesterday.',
        questionUk: 'Листа ___ вчора.',
        options: ['send', 'sent', 'was sent', 'is sent'],
        correctAnswer: 2,
        explanation: 'Use Past Simple Passive for completed past actions',
        explanationUk: 'Використовуйте Past Simple Passive для завершених минулих дій'
      }
    ],
    practiceExercises: [
      {
        sentence: 'The cake ___ by my mother.',
        sentenceUk: 'Торт ___ моєю мамою.',
        blank: '___',
        options: ['make', 'made', 'was made'],
        correctAnswer: 'was made'
      }
    ],
    sentenceBuilding: [
      {
        prompt: 'Make a sentence: "The house was built in 1990"',
        promptUk: 'Складіть речення: "Будинок було побудовано в 1990"',
        words: ['The', 'house', 'was', 'built', 'in', '1990'],
        correctOrder: [0, 1, 2, 3, 4, 5]
      }
    ]
  },
  {
    id: 'conditionals',
    title: 'Conditionals (If sentences)',
    titleUk: 'Умовні речення',
    level: 'intermediate',
    description: 'Express conditions and results',
    descriptionUk: 'Висловлюйте умови та результати',
    explanation: 'Types:\n• Zero: If + present, present (facts)\n• First: If + present, will (real possibility)\n• Second: If + past, would (unreal/unlikely)\n\nExamples:\n• If you heat water, it boils\n• If it rains, I will stay home\n• If I won, I would travel',
    explanationUk: 'Типи:\n• Нульовий: If + теперішній, теперішній (факти)\n• Перший: If + теперішній, will (реальна можливість)\n• Другий: If + минулий, would (нереальна ситуація)\n\nПриклади:\n• Якщо нагріти воду, вона кипить\n• Якщо піде дощ, я залишусь вдома\n• Якби я виграв, я б подорожував',
    examples: [
      { correct: 'If I study hard, I will pass.', translation: 'Якщо я старанно вчусь, я здам.' },
      { correct: 'If I were rich, I would buy a house.', translation: 'Якби я був багатим, я б купив будинок.' }
    ],
    quizQuestions: [
      {
        question: 'If it ___ tomorrow, we will cancel.',
        questionUk: 'Якщо завтра ___, ми скасуємо.',
        options: ['rain', 'rains', 'rained', 'will rain'],
        correctAnswer: 1,
        explanation: 'First conditional: If + present, will',
        explanationUk: 'Перший умовний: If + теперішній, will'
      }
    ],
    practiceExercises: [
      {
        sentence: 'If you ___ water, it evaporates.',
        sentenceUk: 'Якщо ___ воду, вона випаровується.',
        blank: '___',
        options: ['heat', 'heated', 'will heat'],
        correctAnswer: 'heat'
      }
    ],
    sentenceBuilding: [
      {
        prompt: 'Make a sentence: "If I study, I will succeed"',
        promptUk: 'Складіть речення: "Якщо я вчусь, я досягну успіху"',
        words: ['If', 'I', 'study', 'I', 'will', 'succeed'],
        correctOrder: [0, 1, 2, 3, 4, 5]
      }
    ]
  },
  {
    id: 'reported-speech',
    title: 'Reported Speech',
    titleUk: 'Непряма мова',
    level: 'advanced',
    description: 'Report what someone said',
    descriptionUk: 'Передайте, що хтось сказав',
    explanation: 'When reporting speech:\n• Verb tenses shift back (present → past)\n• Pronouns and time expressions change\n• Use "say" or "tell"\n\nDirect: "I am happy"\nReported: She said she was happy',
    explanationUk: 'При передачі мови:\n• Часи зміщуються назад (теперішній → минулий)\n• Займенники та часові вирази змінюються\n• Використовуйте "say" або "tell"\n\nПряма: "Я щаслива"\nНепряма: Вона сказала, що була щаслива',
    examples: [
      { correct: 'He said he was tired.', translation: 'Він сказав, що втомився.' },
      { correct: 'She told me she would come.', translation: 'Вона сказала мені, що прийде.' }
    ],
    quizQuestions: [
      {
        question: 'John said, "I am busy." → John said he ___ busy.',
        questionUk: 'Джон сказав: "Я зайнятий." → Джон сказав, що він ___ зайнятий.',
        options: ['is', 'was', 'am', 'been'],
        correctAnswer: 1,
        explanation: 'Present changes to past in reported speech',
        explanationUk: 'Теперішній час змінюється на минулий в непрямій мові'
      }
    ],
    practiceExercises: [
      {
        sentence: 'She said she ___ tired.',
        sentenceUk: 'Вона сказала, що ___ втомлена.',
        blank: '___',
        options: ['is', 'was', 'were'],
        correctAnswer: 'was'
      }
    ],
    sentenceBuilding: [
      {
        prompt: 'Report: "I like coffee" → She said...',
        promptUk: 'Передайте: "Мені подобається кава" → Вона сказала...',
        words: ['She', 'said', 'she', 'liked', 'coffee'],
        correctOrder: [0, 1, 2, 3, 4]
      }
    ]
  },
  {
    id: 'articles',
    title: 'Articles (a, an, the)',
    titleUk: 'Артиклі (a, an, the)',
    level: 'beginner',
    description: 'Master indefinite and definite articles',
    descriptionUk: 'Опануйте неозначені та означені артиклі',
    explanation: 'Articles:\n• "a" - before consonants (a book)\n• "an" - before vowels (an apple)\n• "the" - specific items (the book)\n• No article - general plural/uncountable',
    explanationUk: 'Артиклі:\n• "a" - перед приголосними (a book)\n• "an" - перед голосними (an apple)\n• "the" - конкретні предмети (the book)\n• Без артикля - загальна множина',
    examples: [
      { correct: 'I saw a cat in the garden.', translation: 'Я бачив кота в саду.' },
      { correct: 'She is an engineer.', translation: 'Вона інженер.' }
    ],
    quizQuestions: [
      {
        question: 'I need ___ umbrella.',
        questionUk: 'Мені потрібна ___ парасолька.',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 1,
        explanation: 'Use "an" before vowel sounds',
        explanationUk: 'Використовуйте "an" перед голосними'
      }
    ],
    practiceExercises: [
      {
        sentence: 'She is ___ teacher.',
        sentenceUk: 'Вона ___ вчитель.',
        blank: '___',
        options: ['a', 'an', 'the'],
        correctAnswer: 'a'
      }
    ],
    sentenceBuilding: [
      {
        prompt: 'Make a sentence: "I bought an apple"',
        promptUk: 'Складіть речення: "Я купив яблуко"',
        words: ['I', 'bought', 'an', 'apple'],
        correctOrder: [0, 1, 2, 3]
      }
    ]
  },
  {
    id: 'prepositions',
    title: 'Prepositions (in, on, at)',
    titleUk: 'Прийменники',
    level: 'intermediate',
    description: 'Learn prepositions of time and place',
    descriptionUk: 'Вивчіть прийменники часу та місця',
    explanation: 'Time: in (months/years), on (days), at (times)\nPlace: in (inside), on (surface), at (point)\n\nExamples:\n• in May, on Monday, at 5pm\n• in the room, on the table, at the door',
    explanationUk: 'Час: in (місяці/роки), on (дні), at (час)\nМісце: in (всередині), on (поверхня), at (точка)\n\nПриклади:\n• in May (у травні), on Monday (в понеділок), at 5pm (о 17:00)\n• in the room (в кімнаті), on the table (на столі), at the door (біля дверей)',
    examples: [
      { correct: 'I was born in 1995.', translation: 'Я народився в 1995.' },
      { correct: 'The book is on the table.', translation: 'Книга на столі.' }
    ],
    quizQuestions: [
      {
        question: 'I live ___ Kyiv.',
        questionUk: 'Я живу ___ Києві.',
        options: ['in', 'on', 'at', 'by'],
        correctAnswer: 0,
        explanation: 'Use "in" for cities',
        explanationUk: 'Використовуйте "in" для міст'
      }
    ],
    practiceExercises: [
      {
        sentence: 'I will meet you ___ 3 PM.',
        sentenceUk: 'Я зустріну вас ___ 15:00.',
        blank: '___',
        options: ['in', 'on', 'at'],
        correctAnswer: 'at'
      }
    ],
    sentenceBuilding: [
      {
        prompt: 'Make a sentence: "I study at night"',
        promptUk: 'Складіть речення: "Я вчуся вночі"',
        words: ['I', 'study', 'at', 'night'],
        correctOrder: [0, 1, 2, 3]
      }
    ]
  },
  {
    id: 'comparatives-superlatives',
    title: 'Comparatives & Superlatives',
    titleUk: 'Ступені порівняння',
    level: 'beginner',
    description: 'Compare things and express extremes',
    descriptionUk: 'Порівнюйте речі та висловлюйте крайності',
    explanation: 'Comparative (comparing two):\n• Short adjectives: add -er (bigger, faster)\n• Long adjectives: more + adjective (more beautiful)\n\nSuperlative (the most):\n• Short: add -est (biggest, fastest)\n• Long: most + adjective (most beautiful)',
    explanationUk: 'Вищий ступінь (порівняння двох):\n• Короткі прикметники: -er (bigger, faster)\n• Довгі: more + прикметник (more beautiful)\n\nНайвищий ступінь (найбільш):\n• Короткі: -est (biggest, fastest)\n• Довгі: most + прикметник (most beautiful)',
    examples: [
      { correct: 'She is taller than me.', translation: 'Вона вища за мене.' },
      { correct: 'This is the best book.', translation: 'Це найкраща книга.' },
      { correct: 'English is more difficult than Spanish.', translation: 'Англійська складніша за іспанську.' }
    ],
    quizQuestions: [
      {
        question: 'This is the ___ movie I have ever seen.',
        questionUk: 'Це ___ фільм, який я бачив.',
        options: ['good', 'better', 'best', 'more good'],
        correctAnswer: 2,
        explanation: 'Use superlative "best" for the highest degree',
        explanationUk: 'Використовуйте найвищий ступінь "best"'
      }
    ],
    practiceExercises: [
      {
        sentence: 'He is ___ than his brother.',
        sentenceUk: 'Він ___ за свого брата.',
        blank: '___',
        options: ['tall', 'taller', 'tallest'],
        correctAnswer: 'taller'
      }
    ],
    sentenceBuilding: [
      {
        prompt: 'Make a sentence: "She is the smartest student"',
        promptUk: 'Складіть речення: "Вона найрозумніша студентка"',
        words: ['She', 'is', 'the', 'smartest', 'student'],
        correctOrder: [0, 1, 2, 3, 4]
      }
    ]
  },
  {
    id: 'gerunds-infinitives',
    title: 'Gerunds and Infinitives',
    titleUk: 'Герундії та інфінітиви',
    level: 'advanced',
    description: 'Know when to use -ing or to + verb',
    descriptionUk: 'Дізнайтесь, коли використовувати -ing або to + дієслово',
    explanation: 'Gerunds (-ing):\n• After prepositions (good at swimming)\n• As subjects (Swimming is fun)\n• After certain verbs (enjoy, finish, mind)\n\nInfinitives (to + verb):\n• After certain verbs (want, decide, hope)\n• To express purpose (I study to learn)',
    explanationUk: 'Герундії (-ing):\n• Після прийменників (good at swimming)\n• Як підмет (Плавання - це весело)\n• Після певних дієслів (enjoy, finish, mind)\n\nІнфінітиви (to + дієслово):\n• Після певних дієслів (want, decide, hope)\n• Для вираження мети (Я вчусь, щоб навчитись)',
    examples: [
      { correct: 'I enjoy reading books.', translation: 'Мені подобається читати книги.' },
      { correct: 'I want to learn English.', translation: 'Я хочу вивчити англійську.' },
      { correct: 'She is good at cooking.', translation: 'Вона добре готує.' }
    ],
    quizQuestions: [
      {
        question: 'I enjoy ___ music.',
        questionUk: 'Мені подобається ___ музику.',
        options: ['listen', 'to listen', 'listening', 'listened'],
        correctAnswer: 2,
        explanation: 'Use gerund after "enjoy"',
        explanationUk: 'Використовуйте герундій після "enjoy"'
      }
    ],
    practiceExercises: [
      {
        sentence: 'She decided ___ to university.',
        sentenceUk: 'Вона вирішила ___ до університету.',
        blank: '___',
        options: ['go', 'to go', 'going'],
        correctAnswer: 'to go'
      }
    ],
    sentenceBuilding: [
      {
        prompt: 'Make a sentence: "I want to travel"',
        promptUk: 'Складіть речення: "Я хочу подорожувати"',
        words: ['I', 'want', 'to', 'travel'],
        correctOrder: [0, 1, 2, 3]
      }
    ]
  }
];

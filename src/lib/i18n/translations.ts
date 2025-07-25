export type Locale = "ru" | "en" | "kz";

export interface Translations {
  [key: string]: any;
}

export const translations: Record<Locale, Translations> = {
  ru: {
    header: {
      home: "Главная",
      services: "Сервисы",
      features: "Услуги",
      faq: "FAQ",
      catalog: "Каталог",
    },
    hero: {
      title: "Проходим KYC в финансовых сервисах за вас",
      description:
        "Наша сеть локальных партнеров гарантирует безопасную и законную верификацию в ведущих банковских и платежных системах через доверенных представителей в соответствующих странах",
      button: "Каталог",
    },
    bankServices: {
      title: "Мы поможем пройти KYC в популярных сервисах",
      description:
        "Полное сопровождение процесса верификации от начала до успешного завершения через наших доверенных представителей",
      buyButton: "Купить KYC от",
      customRequest: {
        title: "Индивидуальный запрос",
        description:
          "Нужен особый финансовый сервис или специальные условия? Мы подберем персональное решение под ваши требования.",
        button: "Обсудить в Telegram",
      },
      banks: [
        {
          id: 1,
          name: "ByBit Виртуальная карта",
          description:
            "Верифицированный аккаунт ByBit с готовой виртуальной картой",
          price: "2 999 ₽",
        },
        {
          id: 2,
          name: "Wise",
          description:
            "Верифицированный аккаунт Wise с готовой виртуальной картой",
          price: "5 999 ₽",
        },
        {
          id: 3,
          name: "RedotPay",
          description:
            "Верифицированный аккаунт RedotPay с готовой виртуальной картой",
          price: "2 999 ₽",
        },
        {
          id: 4,
          name: "Kraken",
          description:
            "Верифицированный аккаунт Kraken с готовой виртуальной картой",
          price: "8 000 ₽",
        },
        {
          id: 5,
          name: "Neteller",
          description:
            "Верифицированный аккаунт Neteller с готовой виртуальной картой",
          price: "8 000 ₽",
        },
        {
          id: 6,
          name: "ESIM",
          description:
            "Европейская симкарта для регистрации в зарубежных сервисах",
          price: "2 400 ₽",
          buttonText: "Купить 2400",
        },
        {
          id: 7,
          name: "Skrill",
          description:
            "Верифицированный аккаунт Skrill с готовой виртуальной картой",
          price: "8 000 ₽",
        },
        {
          id: 8,
          name: "Stripe",
          description:
            "Верифицированный аккаунт Stripe с готовой виртуальной картой",
          price: "8 000 ₽",
        },
      ],
    },
    features: {
      title: "Наши услуги",
      description:
        "Полный спектр консультационных услуг по прохождению KYC и верификации",
      approach: {
        title: "Наш подход к сопровождению",
        description:
          "Мы предлагаем полный комплекс услуг по консультированию и сопровождению прохождения KYC-процедур",
        individual: {
          title: "Индивидуальный подход",
          description:
            "Персональная консультация для каждого клиента с учетом его потребностей и конкретной ситуации.",
        },
        fullSupport: {
          title: "Полное сопровождение",
          description:
            "Мы проведем вас через все этапы KYC и поможем избежать распространенных ошибок и отказов.",
        },
        timeSaving: {
          title: "Экономия времени",
          description:
            "Наши клиенты проходят верификацию в разы быстрее, чем при самостоятельных попытках.",
        },
      },
      services: [
        {
          title: "Консультация по KYC",
          description:
            "Детальное объяснение процесса и требований KYC в выбранном вами сервисе.",
        },
        {
          title: "Подготовка документов",
          description:
            "Помощь в подготовке всех необходимых документов в соответствии с требованиями сервиса.",
        },
        {
          title: "Сопровождение процедуры",
          description:
            "Пошаговое руководство и поддержка на всех этапах прохождения верификации.",
        },
        {
          title: "Исправление ошибок",
          description:
            "Помощь в случае отказа и консультация по исправлению ошибок для успешного прохождения KYC.",
        },
        {
          title: "Корпоративная верификация",
          description:
            "Сопровождение прохождения KYC для юридических лиц и бизнес-аккаунтов.",
        },
        {
          title: "Консультация по выбору сервиса",
          description:
            "Помощь в выборе оптимального финансового сервиса под ваши потребности.",
        },
      ],
    },
    contact: {
      title: "Получите консультацию",
      description:
        "Наши специалисты помогут вам успешно пройти KYC верификацию",
      telegramTitle: "Напишите нам в Telegram",
      telegramDescription:
        "Быстрый и удобный способ получить консультацию по прохождению KYC",
      telegramButton: "Написать в Telegram",
      responseTime: "Обычно отвечаем в течение часа",
    },
    faq: {
      title: "Часто задаваемые вопросы",
      description: "Ответы на популярные вопросы о наших услугах",
      items: [
        {
          question: "Почему стоит обратиться к вам за помощью с KYC?",
          answer:
            "Процесс KYC-верификации может быть сложным и запутанным, особенно если вы сталкиваетесь с ним впервые. Мы имеем большой опыт в сопровождении клиентов и знаем все нюансы и требования популярных сервисов. Наша помощь существенно увеличивает шансы на быстрое и успешное прохождение верификации.",
        },
        {
          question:
            "Сколько времени занимает процесс верификации с вашей помощью?",
          answer:
            "С нашей помощью подготовка документов и прохождение всех этапов верификации обычно занимает от 1 до 3 дней, в зависимости от сервиса и его текущей загрузки. Самостоятельное прохождение может занять гораздо больше времени из-за возможных ошибок и отказов.",
        },
        {
          question: "Как происходит процесс консультации и сопровождения?",
          answer:
            "После обращения к нам мы проводим первичную консультацию, оцениваем вашу ситуацию, подбираем необходимые документы, помогаем правильно их подготовить, и затем сопровождаем через все этапы верификации. При необходимости мы помогаем исправить ошибки и пройти верификацию повторно.",
        },
        {
          question: "Можете ли вы гарантировать успешное прохождение KYC?",
          answer:
            "Мы не можем дать 100% гарантии, так как окончательное решение принимает сам сервис. Однако наш опыт и знание требований значительно повышают шансы на успех. В случае отказа мы всегда готовы помочь с анализом причин и повторным прохождением верификации.",
        },
      ],
    },
    footer: {
      slogan:
        "Профессиональное сопровождение верификации для финансовых сервисов",
      privacyPolicy: "Политика обработки персональных данных",
      termsOfService: "Условия использования",
      copyright: "© 2024-2025 HEY, KYC! Все права защищены.",
    },
    modals: {
      common: {
        closeButton: "Закрыть",
        orderButton: "Заказать за",
      },
      redotpay: {
        title: "Криптовалютная карта RedotPay",
        subtitle: "Криптовалютная карта с мгновенным пополнением",
        virtualCard: "Виртуальная карта",
        visa: "Visa",
        keyBenefits: "Ключевые преимущества",
        cryptoSupport: "Поддержка 20+ криптовалют",
        cryptoDesc: "Bitcoin, Ethereum, USDT, USDC и другие",
        globalUse: "Глобальное использование",
        globalDesc: "Принимается во всем мире где есть Visa",
        packageIncludes: "Что входит в пакет",
        packageItems: [
          "Готовый аккаунт RedotPay",
          "Виртуальная карта Visa",
          "Доступ к мобильному приложению",
          "Инструкции по использованию",
          "Техподдержка 24/7"
        ],
        features: [
          {
            icon: "Bitcoin",
            title: "Криптовалютная",
            desc: "Прямая конвертация крипты"
          },
          {
            icon: "Zap",
            title: "Мгновенное пополнение",
            desc: "Криптовалютой напрямую"
          },
          {
            icon: "Percent",
            title: "Низкие комиссии",
            desc: "Оптимальные тарифы"
          },
          {
            icon: "UserCheck",
            title: "Анонимность",
            desc: "Минимальная верификация"
          }
        ]
      },
      bybit: {
        title: "Bybit виртуальная карта",
        subtitle: "Криптовалютная биржа с виртуальными картами",
        virtualCard: "Виртуальная карта",
        whatYouGet: "Что вы получите",
        cryptoTrading: "Торговля криптовалютами",
        tradingFeatures: [
          "Споттовая торговля",
          "Фьючерсная торговля",
          "Маржинальная торговля",
          "Копи-трейдинг"
        ],
        cardServices: "Карточные услуги",
        cardFeatures: [
          "Виртуальная карта",
          "Пополнение криптой",
          "Покупки в интернете",
          "Низкие комиссии"
        ],
        features: [
          {
            icon: "Bitcoin",
            title: "Криптовалюты",
            desc: "Торговля 400+ криптовалютами"
          },
          {
            icon: "CreditCard",
            title: "Виртуальная карта",
            desc: "Для онлайн покупок"
          },
          {
            icon: "TrendingUp",
            title: "Фьючерсы",
            desc: "Торговля с плечом до 100x"
          },
          {
            icon: "Copy",
            title: "Копи-трейдинг",
            desc: "Копируйте прибыльных трейдеров"
          }
        ]
      }
    },
  },
  en: {
    header: {
      home: "Home",
      services: "Services",
      features: "Features",
      faq: "FAQ",
      catalog: "Catalog",
    },
    hero: {
      title: "Professional KYC Assistance for Your Financial Services",
      description:
        "Our network of local partners ensures safe and legal verification in leading banking and payment systems through trusted representatives in the respective countries",
      button: "Catalog",
    },
    bankServices: {
      title: "We Help Pass KYC in Popular Services",
      description:
        "Complete support for the verification process from start to successful completion through our trusted representatives",
      buyButton: "Buy KYC from",
      customRequest: {
        title: "Custom Request",
        description:
          "Need a special financial service or custom conditions? We'll create a personalized solution for your requirements.",
        button: "Discuss on Telegram",
      },
      banks: [
        {
          id: 1,
          name: "ByBit Virtual Card",
          description:
            "Assistance in passing all verification levels on the ByBit crypto exchange",
          price: "40 USD",
        },
        {
          id: 2,
          name: "Wise",
          description:
            "Assistance in passing verification and opening an account in Wise for international transfers",
          price: "100 USD",
        },
        {
          id: 3,
          name: "RedotPay",
          description:
            "Support for the KYC process to gain access to the RedotPay payment system",
          price: "40 USD",
        },
        {
          id: 4,
          name: "Kraken",
          description:
            "Assistance in passing verification on the Kraken cryptocurrency exchange for crypto trading",
          price: "100 USD",
        },
        {
          id: 5,
          name: "Neteller",
          description:
            "Verification in the Neteller electronic payment system for international transfers",
          price: "100 USD",
        },
        {
          id: 6,
          name: "ESIM",
          description: "European SIM card for registration in foreign services",
          price: "30 USD",
          buttonText: "Buy 2400",
        },
        {
          id: 7,
          name: "Skrill",
          description:
            "Verification in the international Skrill payment system for online payments and transfers",
          price: "100 USD",
        },
        {
          id: 8,
          name: "Stripe",
          description:
            "Verification in the international Stripe payment system for accepting online payments",
          price: "100 USD",
        },
      ],
    },
    features: {
      title: "Our Services",
      description:
        "A full range of consulting services for KYC and verification",
      approach: {
        title: "Our Approach to Support",
        description:
          "We offer a full range of consulting services to guide you through KYC procedures",
        individual: {
          title: "Individual Approach",
          description:
            "Personal consultation for each client considering their specific needs and situation.",
        },
        fullSupport: {
          title: "Full Support",
          description:
            "We'll guide you through all stages of KYC and help avoid common mistakes and rejections.",
        },
        timeSaving: {
          title: "Time Saving",
          description:
            "Our clients pass verification much faster than with independent attempts.",
        },
      },
      services: [
        {
          title: "KYC Consultation",
          description:
            "Detailed explanation of the process and KYC requirements in your chosen service.",
        },
        {
          title: "Document Preparation",
          description:
            "Assistance in preparing all necessary documents in accordance with service requirements.",
        },
        {
          title: "Procedure Support",
          description:
            "Step-by-step guidance and support at all stages of the verification process.",
        },
        {
          title: "Error Correction",
          description:
            "Assistance in case of rejection and consultation on correcting errors for successful KYC completion.",
        },
        {
          title: "Corporate Verification",
          description:
            "Support for completing KYC for legal entities and business accounts.",
        },
        {
          title: "Service Selection Consultation",
          description:
            "Help in choosing the optimal financial service for your needs.",
        },
      ],
    },
    contact: {
      title: "Get a Consultation",
      description:
        "Our specialists will help you successfully pass KYC verification",
      telegramTitle: "Write to us on Telegram",
      telegramDescription:
        "A quick and convenient way to get advice on passing KYC",
      telegramButton: "Write on Telegram",
      responseTime: "We usually respond within an hour",
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "Answers to popular questions about our services",
      items: [
        {
          question: "Why should I contact you for help with KYC?",
          answer:
            "The KYC verification process can be complex and confusing, especially if you are encountering it for the first time. We have extensive experience in supporting clients and know all the nuances and requirements of popular services. Our assistance significantly increases the chances of rapid and successful verification.",
        },
        {
          question: "What documents will be needed to pass KYC?",
          answer:
            "For basic verification, you usually need proof of identity (passport, ID card) and proof of address (utility bill, bank statement). Some services may require additional documents. We will provide an exact list of required documents for a specific service during the consultation.",
        },
        {
          question:
            "How long does the verification process take with your help?",
          answer:
            "With our help, preparing documents and completing all stages of verification usually takes from 1 to 3 days, depending on the service and its current workload. Self-completion can take much longer due to possible errors and rejections.",
        },
        {
          question: "How does the consultation and support process work?",
          answer:
            "After contacting us, we conduct an initial consultation, assess your situation, select the necessary documents, help prepare them correctly, and then accompany you through all stages of verification. If necessary, we help correct errors and pass verification again.",
        },
        {
          question: "Can you guarantee successful KYC completion?",
          answer:
            "We cannot give a 100% guarantee, as the final decision is made by the service itself. However, our experience and knowledge of requirements significantly increase the chances of success. In case of rejection, we are always ready to help with analyzing the reasons and re-passing verification.",
        },
      ],
    },
    footer: {
      slogan: "Professional verification support for financial services",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      copyright: "© 2024-2025 HEY, KYC! All rights reserved.",
    },
    modals: {
      common: {
        closeButton: "Close",
        orderButton: "Order for",
      },
      redotpay: {
        title: "RedotPay Cryptocurrency Card",
        subtitle: "Cryptocurrency card with instant top-up",
        virtualCard: "Virtual Card",
        visa: "Visa",
        keyBenefits: "Key Benefits",
        cryptoSupport: "Support for 20+ cryptocurrencies",
        cryptoDesc: "Bitcoin, Ethereum, USDT, USDC and others",
        globalUse: "Global usage",
        globalDesc: "Accepted worldwide where Visa is available",
        packageIncludes: "What's included in the package",
        packageItems: [
          "Ready RedotPay account",
          "Virtual Visa card",
          "Mobile app access",
          "Usage instructions",
          "24/7 tech support"
        ],
        features: [
          {
            icon: "Bitcoin",
            title: "Cryptocurrency",
            desc: "Direct crypto conversion"
          },
          {
            icon: "Zap",
            title: "Instant top-up",
            desc: "Directly with cryptocurrency"
          },
          {
            icon: "Percent",
            title: "Low fees",
            desc: "Optimal rates"
          },
          {
            icon: "UserCheck",
            title: "Anonymity",
            desc: "Minimal verification"
          }
        ]
      },
      bybit: {
        title: "Bybit Virtual Card",
        subtitle: "Cryptocurrency exchange with virtual cards",
        virtualCard: "Virtual Card",
        whatYouGet: "What you will get",
        cryptoTrading: "Cryptocurrency trading",
        tradingFeatures: [
          "Spot trading",
          "Futures trading",
          "Margin trading",
          "Copy trading"
        ],
        cardServices: "Card services",
        cardFeatures: [
          "Virtual card",
          "Crypto top-up",
          "Online purchases",
          "Low fees"
        ],
        features: [
          {
            icon: "Bitcoin",
            title: "Cryptocurrencies",
            desc: "Trade 400+ cryptocurrencies"
          },
          {
            icon: "CreditCard",
            title: "Virtual card",
            desc: "For online purchases"
          },
          {
            icon: "TrendingUp",
            title: "Futures",
            desc: "Trade with leverage up to 100x"
          },
          {
            icon: "Copy",
            title: "Copy trading",
            desc: "Copy profitable traders"
          }
        ]
      }
    },
  },
  kz: {
    header: {
      home: "Басты бет",
      services: "Қызметтер",
      features: "Мүмкіндіктер",
      faq: "Жиі қойылатын сұрақтар",
      catalog: "Каталог",
    },
    hero: {
      title: "Сіздің орныңызда қаржы қызметтерінде KYC өтеміз",
      description:
        "Біздің жергілікті серіктестер желісі сәйкес елдердегі сенімді өкілдер арқылы жетекші банк және төлем жүйелерінде қауіпсіз және заңды тексеруді кепілдендіреді",
      button: "Каталог",
    },
    bankServices: {
      title: "Біз танымал қызметтерде KYC өтуге көмектесеміз",
      description:
        "Біздің сенімді өкілдеріміз арқылы тексеру процесін басынан табысты аяқталғанға дейін толық сүйемелдеу",
      buyButton: "KYC сатып алу",
      customRequest: {
        title: "Жеке сұрау",
        description:
          "Арнайы қаржы қызметі немесе ерекше жағдайлар қажет пе? Біз сіздің талаптарыңызға сәйкес жеке шешім таңдаймыз.",
        button: "Telegram-да талқылау",
      },
      banks: [
        {
          id: 1,
          name: "ByBit Виртуалды карта",
          description:
            "ByBit криптобиржасында барлық деңгейлік тексеру өтуге көмек",
          price: "15 000 ₸",
        },
        {
          id: 2,
          name: "Wise",
          description:
            "Халықаралық аударымдар үшін Wise-да тексеру өту және шот ашуға көмек",
          price: "30 000 ₸",
        },
        {
          id: 3,
          name: "RedotPay",
          description:
            "RedotPay төлем жүйесіне қол жеткізу үшін KYC процесін сүйемелдеу",
          price: "15 000 ₸",
        },
        {
          id: 4,
          name: "Kraken",
          description:
            "Криптовалюталармен сауда жасау үшін Kraken криптобиржасында тексеру өтуге көмек",
          price: "40 000 ₸",
        },
        {
          id: 5,
          name: "Neteller",
          description:
            "Халықаралық аударымдар үшін Neteller электронды төлем жүйесінде тексеру",
          price: "40 000 ₸",
        },
        {
          id: 6,
          name: "ESIM",
          description: "шетелдік қызметтерде тіркелу үшін еуропалық сим-карта",
          price: "12 000 ₸",
          buttonText: "12000 сатып алу",
        },
        {
          id: 7,
          name: "Skrill",
          description:
            "Онлайн төлемдер мен аударымдар үшін халықаралық Skrill төлем жүйесінде тексеру",
          price: "40 000 ₸",
        },
        {
          id: 8,
          name: "Stripe",
          description:
            "Халықаралық Stripe төлем жүйесінде онлайн төлемдерді қабылдау үшін тексеру",
          price: "40 000 ₸",
        },
      ],
    },
    features: {
      title: "Біздің қызметтер",
      description:
        "KYC өту және тексеру бойынша кеңес беру қызметтерінің толық спектрі",
      approach: {
        title: "Сүйемелдеуге біздің көзқарас",
        description:
          "Біз KYC процедураларын өту бойынша кеңес беру және сүйемелдеудің толық кешенін ұсынамыз",
        individual: {
          title: "Жеке көзқарас",
          description:
            "Әр клиенттің қажеттіліктері мен нақты жағдайын ескере отырып жеке кеңес беру.",
        },
        fullSupport: {
          title: "Толық сүйемелдеу",
          description:
            "Біз сізді KYC-ның барлық кезеңдері арқылы өткіземіз және кең таралған қателер мен бас тартулардан аулақ болуға көмектесеміз.",
        },
        timeSaving: {
          title: "Уақытты үнемдеу",
          description:
            "Біздің клиенттер дербес талпыныстармен салыстырғанда тексеруден есе жылдам өтеді.",
        },
      },
      services: [
        {
          title: "KYC бойынша кеңес беру",
          description:
            "Сіз таңдаған қызметтегі KYC процесі мен талаптарын толық түсіндіру.",
        },
        {
          title: "Құжаттарды дайындау",
          description:
            "Қызмет талаптарына сәйкес барлық қажетті құжаттарды дайындауға көмек.",
        },
        {
          title: "Процедураны сүйемелдеу",
          description:
            "Тексеру өтудің барлық кезеңдерінде қадамдық нұсқаулық пен қолдау.",
        },
        {
          title: "Қателерді түзету",
          description:
            "Бас тарту жағдайында көмек және KYC табысты өту үшін қателерді түзету бойынша кеңес беру.",
        },
        {
          title: "Корпоративті тексеру",
          description:
            "Заңды тұлғалар мен бизнес-аккаунттар үшін KYC өтуді сүйемелдеу.",
        },
        {
          title: "Қызметті таңдау бойынша кеңес беру",
          description:
            "Сіздің қажеттіліктеріңіз үшін оңтайлы қаржы қызметін таңдауға көмек.",
        },
      ],
    },
    contact: {
      title: "Кеңес беру алу",
      description: "Біздің мамандар KYC тексеруден табысты өтуге көмектеседі",
      telegramTitle: "Telegram-да бізге жазыңыз",
      telegramDescription:
        "KYC өту бойынша кеңес алудың жылдам және ыңғайлы тәсілі",
      telegramButton: "Telegram-да жазу",
      responseTime: "Біз әдетте бір сағат ішінде жауап береміз",
    },
    faq: {
      title: "Жиі қойылатын сұрақтар",
      description: "Біздің қызметтер бойынша танымал сұрақтарға жауаптар",
      items: [
        {
          question:
            "KYC бойынша көмек алу үшін неліктен сіздерге жүгіну керек?",
          answer:
            "KYC тексеру процесі күрделі және түсініксіз болуы мүмкін, әсіресе егер сіз оны бірінші рет кездестірсеңіз. Бізде клиенттерді қолдау бойынша кең тәжірибе бар және танымал қызметтердің барлық нюанстары мен талаптарын білеміз. Біздің көмегіміз жылдам және табысты тексерудің мүмкіндіктерін айтарлықтай арттырады.",
        },
        {
          question: "KYC өту үшін қандай құжаттар қажет болады?",
          answer:
            "Негізгі тексеру үшін әдетте жеке басын куәландыратын құжат (паспорт, жеке куәлік) және мекенжайды растау (коммуналдық төлем, банк үзіндісі) қажет. Кейбір қызметтер қосымша құжаттарды талап етуі мүмкін. Біз кеңес беру кезінде нақты қызмет үшін қажетті құжаттардың дәл тізімін береміз.",
        },
        {
          question: "Сіздердің көмегімен тексеру процесі қанша уақыт алады?",
          answer:
            "Біздің көмегімізбен құжаттарды дайындау және тексерудің барлық кезеңдерін аяқтау әдетте 1-ден 3 күнге дейін алады, қызметке және оның ағымдағы жүктемесіне байланысты. Дербес орындау ықтимал қателер мен бас тартулар салдарынан әлдеқайда көп уақыт алуы мүмкін.",
        },
        {
          question: "Кеңес беру және қолдау процесі қалай жүреді?",
          answer:
            "Бізге жүгінгеннен кейін біз алдын ала кеңес береміз, жағдайыңызды бағалаймыз, қажетті құжаттарды таңдаймыз, оларды дұрыс дайындауға көмектесеміз, содан кейін тексерудің барлық кезеңдері арқылы сүйемелдейміз. Қажет болған жағдайда қателерді түзетуге және тексеруден қайта өтуге көмектесеміз.",
        },
        {
          question: "KYC табысты аяқталуына кепілдік бере аласыз ба?",
          answer:
            "Біз 100% кепілдік бере алмаймыз, өйткені түпкілікті шешімді қызметтің өзі қабылдайды. Алайда, біздің тәжірибеміз бен талаптарды білуіміз табыстылық мүмкіндіктерін айтарлықтай арттырады. Бас тарту жағдайында біз әрқашан себептерді талдауға және тексеруден қайта өтуге көмектесуге дайынбыз.",
        },
      ],
    },
    footer: {
      slogan: "Қаржы қызметтері үшін кәсіби тексеру қолдауы",
      privacyPolicy: "Құпиялылық саясаты",
      termsOfService: "Қызмет көрсету шарттары",
      copyright: "© 2024-2025 HEY, KYC! Барлық құқықтар қорғалған.",
    },
  },
};
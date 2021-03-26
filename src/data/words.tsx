export type TWordUnmapped = {
  word: string,
  pronouncing: string,
  translation: string,
  sex?: string,
}

export type TWord = TWordUnmapped & {
  id: number,
}

export const wordsClass5 = [
  // {
  //   word: 'נחמד',
  //   pronouncing: 'нэхмад',
  //   translation: 'отличный',
  // },
  // {
  //   word: 'כותב',
  //   pronouncing: 'котэв',
  //   translation: 'писать',
  // },
  // {
  //   word: 'קורא',
  //   pronouncing: 'корэ',
  //   translation: 'читать',
  // },
  // {
  //   word: 'הפסקה',
  //   pronouncing: 'хафсака',
  //   translation: 'перерыв',
  // },
  // {
  //   word: 'שפה',
  //   pronouncing: 'сафа',
  //   translation: 'язык',
  // },
  // {
  //   word: 'מקצוע',
  //   pronouncing: 'микцоа',
  //   translation: 'профессия',
  // },
  {
    word: 'מתכנת',
    pronouncing: 'мэтахнэт',
    translation: 'программист',
  },
  // {
  //   word: 'רווק',
  //   pronouncing: 'равак',
  //   translation: 'холостой / одинокий',
  // },
  // {
  //   word: 'מקום',
  //   pronouncing: 'маком',
  //   translation: 'место',
  // },
  // {
  //   word: 'לידה',
  //   pronouncing: 'лэйда',
  //   translation: 'рождение',
  // },
  // {
  //   word: 'תאריך',
  //   pronouncing: 'тарих',
  //   translation: 'дата',
  // },
  // {
  //   word: 'נשוי',
  //   pronouncing: 'нэсуй',
  //   translation: 'в браке',
  // },
  // {
  //   word: 'כתובת',
  //   pronouncing: 'ктовэт',
  //   translation: 'адрес',
  // },
  // {
  //   word: 'זכר',
  //   pronouncing: 'захар',
  //   translation: 'мужчина / мужской',
  // },
  // {
  //   word: 'נקבה',
  //   pronouncing: 'нэкэва',
  //   translation: 'женщина / женский',
  // },
  // {
  //   word: 'מצב',
  //   pronouncing: 'мацав',
  //   translation: 'положение / ситуация',
  // },
  // {
  //   word: 'מין',
  //   pronouncing: 'мин',
  //   translation: 'пол',
  // },
  {
    word: 'גרוש',
    pronouncing: 'гаруш',
    translation: 'в разводе',
  },
  // {
  //   word: 'נשיא',
  //   pronouncing: 'наси',
  //   translation: 'президент',
  // },
  // {
  //   word: 'השכלה',
  //   pronouncing: 'ашкала',
  //   translation: 'образование',
  // },
  // {
  //   word: 'גיל',
  //   pronouncing: 'гил',
  //   translation: 'возраст',
  // },
  // {
  //   word: 'אישי',
  //   pronouncing: 'иши',
  //   translation: 'личный',
  // },
  // {
  //   word: 'משפט',
  //   pronouncing: 'мишпат',
  //   translation: 'предложение',
  // },
  // {
  //   word: 'חוץ',
  //   pronouncing: 'хуц',
  //   translation: 'кроме',
  // },
  {
    word: 'עיתון',
    pronouncing: 'итон',
    translation: 'газета',
  },
  {
    word: 'ההפך',
    pronouncing: 'аэфэх',
    translation: 'наоборот',
  },
  // {
  //   word: 'עיפרון',
  //   pronouncing: 'ипарон',
  //   translation: 'карандаш',
  // },
  // {
  //   word: 'מחברת',
  //   pronouncing: 'махбэрэт',
  //   translation: 'тетрадь / блокнот',
  // },
  // {
  //   word: 'לוח',
  //   pronouncing: 'луах',
  //   translation: 'доска / расписание',
  // },
  // {
  //   word: 'אוויר',
  //   pronouncing: 'авир',
  //   translation: 'воздух',
  // },
  // {
  //   word: 'בניין',
  //   pronouncing: 'биньян',
  //   translation: 'здание',
  // },
  {
    word: 'שטיח',
    pronouncing: 'шатиах',
    translation: 'ковер',
  },
  // {
  //   word: 'וילון',
  //   pronouncing: 'вилон',
  //   translation: 'штора / занавес',
  // },
  // {
  //   word: 'שאלה',
  //   pronouncing: 'шээла',
  //   translation: 'вопрос',
  // },
  // {
  //   word: 'תשובה',
  //   pronouncing: 'тшува',
  //   translation: 'ответ',
  // },
  // {
  //   word: 'מקרר',
  //   pronouncing: 'мэкарэр',
  //   translation: 'холодильник',
  // },
  {
    word: 'אבטיח',
    pronouncing: 'автиах',
    translation: 'арбуз',
  },
  // {
  //   word: 'עוגה',
  //   pronouncing: 'уга',
  //   translation: 'торт',
  // },
  // {
  //   word: 'תפוז',
  //   pronouncing: 'тапуз',
  //   translation: 'апельсин',
  // },
  // {
  //   word: 'מתנה',
  //   pronouncing: 'матана',
  //   translation: 'подарок',
  // },
  {
    word: 'מכתב',
    pronouncing: 'михтав',
    translation: 'письмо',
  },
  // {
  //   word: 'דגל',
  //   pronouncing: 'дэгэль',
  //   translation: 'флаг',
  // },
  {
    word: 'עולם',
    pronouncing: 'олам',
    translation: 'мир',
  },
  {
    word: 'רבים',
    pronouncing: 'равим',
    translation: 'многие / множество',
  },
  // {
  //   word: 'יחיד',
  //   pronouncing: 'яхид',
  //   translation: 'единственный / один',
  // },
  // {
  //   word: 'חוף',
  //   pronouncing: 'хоф',
  //   translation: 'пляж',
  // },
  // {
  //   word: 'נהר',
  //   pronouncing: 'нахар',
  //   translation: 'река',
  // },
  // {
  //   word: 'מגדל',
  //   pronouncing: 'мигдаль',
  //   translation: 'башня',
  // },
  {
    word: 'שכן',
    pronouncing: 'шакэн',
    translation: 'сосед',
  },
  // {
  //   word: 'זוג',
  //   pronouncing: 'зуг',
  //   translation: 'пара',
  // },
  // {
  //   word: 'הולדת',
  //   pronouncing: 'улэдэт',
  //   translation: 'рождение',
  // },
  // {
  //   word: 'רישיון',
  //   pronouncing: 'ришайон',
  //   translation: 'права / лицензия',
  // },
  // {
  //   word: 'נהיגה',
  //   pronouncing: 'нэига',
  //   translation: 'вождение',
  // },
  // {
  //   word: 'כריך',
  //   pronouncing: 'карих',
  //   translation: 'сэндвич',
  // },
  // {
  //   word: 'רחב',
  //   pronouncing: 'рахав',
  //   translation: 'широкий',
  // },
  // {
  //   word: 'כבד',
  //   pronouncing: 'кавэд',
  //   translation: 'тяжелый',
  // },
  // {
  //   word: 'ארוך',
  //   pronouncing: 'арох',
  //   translation: 'длинный',
  // },
  {
    word: 'מרפסת',
    pronouncing: 'мирпэсэт',
    translation: 'балкон',
  },
  // {
  //   word: 'חד',
  //   pronouncing: 'хад',
  //   translation: 'острый',
  // },
  // {
  //   word: 'חזק',
  //   pronouncing: 'хазак',
  //   translation: 'сильный / крепкий',
  // },
  // {
  //   word: 'שמן',
  //   pronouncing: 'шэмин',
  //   translation: 'толстый / сытый',
  // },
  {
    word: 'עמוק',
    pronouncing: 'амок',
    translation: 'глубокий',
  },
  // {
  //   word: 'פנים',
  //   pronouncing: 'паним',
  //   translation: 'лицо',
  // },
  // {
  //   word: 'ארון',
  //   pronouncing: 'арон',
  //   translation: 'шкаф',
  // },
  {
    word: 'ציפור',
    pronouncing: 'ципор',
    translation: 'птица',
  },
  // {
  //   word: 'רוח',
  //   pronouncing: 'руах',
  //   translation: 'ветер / дух',
  // },
  // {
  //   word: 'כוס',
  //   pronouncing: 'кос',
  //   translation: 'стакан',
  // },
  // {
  //   word: 'ותיק',
  //   pronouncing: 'ватик',
  //   translation: 'давний / ветеран',
  // },
  // {
  //   word: 'זמר',
  //   pronouncing: 'замар',
  //   translation: 'певец',
  // },
  // {
  //   word: 'קיר',
  //   pronouncing: 'кир',
  //   translation: 'стена',
  // },
  // {
  //   word: 'עתיק',
  //   pronouncing: 'атик',
  //   translation: 'древний',
  // },
  // {
  //   word: 'גג',
  //   pronouncing: 'гаг',
  //   translation: 'крыша',
  // },
  {
    word: 'מפתח',
    pronouncing: 'мафтэах',
    translation: 'ключ',
  },
  // {
  //   word: 'מבחן',
  //   pronouncing: 'мивхан',
  //   translation: 'тест',
  // },
  // {
  //   word: 'שעון',
  //   pronouncing: 'шаон',
  //   translation: 'часы',
  // },
  {
    word: 'מצטער',
    pronouncing: 'мицтаэр',
    translation: 'сожалеть',
  },
  // {
  //   word: 'תחת',
  //   pronouncing: 'тахат',
  //   translation: 'под',
  // },
  // {
  //   word: 'עץ',
  //   pronouncing: 'эц',
  //   translation: 'дерево',
  // },
  // {
  //   word: 'אדוני',
  //   pronouncing: 'адони',
  //   translation: 'сэр / мистер',
  // },
  // {
  //   word: 'גברתי',
  //   pronouncing: 'гаварти',
  //   translation: 'мадам / мисс',
  // },
  {
    word: 'חמור',
    pronouncing: 'хамур',
    translation: 'осел',
  },
  // {
  //   word: 'תרנגול',
  //   pronouncing: 'тарнголь',
  //   translation: 'петух',
  // },
  // {
  //   word: 'חנות',
  //   pronouncing: 'ханут',
  //   translation: 'магазин',
  // },
  // {
  //   word: 'יפהפייה',
  //   pronouncing: 'яфэфия',
  //   translation: 'прекрасная',
  // },
  // {
  //   word: 'חמוד',
  //   pronouncing: 'хамуд',
  //   translation: 'милый',
  // },
  {
    word: 'תכנית',
    pronouncing: 'тхэнит',
    translation: 'передача',
  },
  {
    word: 'מעצבן',
    pronouncing: 'мэацвэн',
    translation: 'раздражающий / надоедливый',
  },
  // {
  //   word: 'תפוח',
  //   pronouncing: 'тапуах',
  //   translation: 'яблоко',
  // },
  // {
  //   word: 'חורף',
  //   pronouncing: 'хорэф',
  //   translation: 'зима',
  // },
  // {
  //   word: 'סתיו',
  //   pronouncing: 'став',
  //   translation: 'осень',
  // },
  // {
  //   word: 'קיץ',
  //   pronouncing: 'каиц',
  //   translation: 'лето',
  // },
  // {
  //   word: 'בגדים',
  //   pronouncing: 'бгадим',
  //   translation: 'одежда',
  // },
  // {
  //   word: 'כפר',
  //   pronouncing: 'кфар',
  //   translation: 'деревня',
  // },
  // {
  //   word: 'פקיד',
  //   pronouncing: 'пакид',
  //   translation: 'служащий',
  // },
  // {
  //   word: 'יושב',
  //   pronouncing: 'йошэв',
  //   translation: 'сидеть',
  // },
  // {
  //   word: 'שר',
  //   pronouncing: 'сар',
  //   translation: 'министр / петь',
  // },
  // {
  //   word: 'נשאר',
  //   pronouncing: 'нишар',
  //   translation: 'оставаться',
  // },
  // {
  //   word: 'חי',
  //   pronouncing: 'хаи',
  //   translation: 'жить',
  // },
  // {
  //   word: 'משחק',
  //   pronouncing: 'мэсахэк',
  //   translation: 'играть',
  // },
  // {
  //   word: 'מטפל',
  //   pronouncing: 'мэтапэль',
  //   translation: 'ухаживать, заботиться',
  // },
  // {
  //   word: 'טרי',
  //   pronouncing: 'тари',
  //   translation: 'свежий',
  // },
  // {
  //   word: 'קצר',
  //   pronouncing: 'кацар',
  //   translation: 'короткий',
  // },
  // {
  //   word: 'נר',
  //   pronouncing: 'нэр',
  //   translation: 'свечка',
  // },
  // {
  //   word: 'יקר',
  //   pronouncing: 'якар',
  //   translation: 'дорогой / ценный',
  // },
  // {
  //   word: 'אדום',
  //   pronouncing: 'адом',
  //   translation: 'красный',
  // },
  {
    word: 'אור',
    pronouncing: 'ор',
    translation: 'свет',
  },
  // {
  //   word: 'לפעמים',
  //   pronouncing: 'лифамим',
  //   translation: 'иногда',
  // },
  // {
  //   word: 'חוזר',
  //   pronouncing: 'хозэр',
  //   translation: 'возвращаться',
  // },
  // {
  //   word: 'גבוה',
  //   pronouncing: 'гавоха',
  //   translation: 'высокий',
  // },
  // {
  //   word: 'אחר',
  //   pronouncing: 'ахар',
  //   translation: 'другой',
  // },
  // {
  //   word: 'יקירתי',
  //   pronouncing: 'якирати',
  //   translation: 'дорогая',
  // },
  // {
  //   word: 'אמיתי',
  //   pronouncing: 'амити',
  //   translation: 'настоящий / реальный',
  // },
  // {
  //   word: 'נכד',
  //   pronouncing: 'нэхад',
  //   translation: 'внук',
  // },
  // {
  //   word: 'פרחים',
  //   pronouncing: 'прахим',
  //   translation: 'цветы',
  // },
  // {
  //   word: 'פרטי',
  //   pronouncing: 'прати',
  //   translation: 'личный',
  // },
  // {
  //   word: 'מבוגר',
  //   pronouncing: 'мэвугар',
  //   translation: 'старший / взрослый',
  // },
  // {
  //   word: 'עסוק',
  //   pronouncing: 'асук',
  //   translation: 'занят / занятой',
  // },
  // {
  //   word: 'יוצא',
  //   pronouncing: 'йоцэ',
  //   translation: 'выходить',
  // },
  {
    word: 'עוד מעט',
    pronouncing: 'од мэат',
    translation: 'скоро',
  },
  // {
  //   word: 'אל תדאג',
  //   pronouncing: 'аль тигад',
  //   translation: 'не беспокойся',
  // },
  {
    word: 'ציבור',
    pronouncing: 'цибур',
    translation: 'публичный',
  },
  // {
  //   word: 'משקפיים',
  //   pronouncing: 'мишкафаим',
  //   translation: 'очки',
  // },
  // {
  //   word: 'חסר',
  //   pronouncing: 'хасэр',
  //   translation: 'отсутствовать / не хватает',
  // },
  // {
  //   word: 'זקן',
  //   pronouncing: 'закэн',
  //   translation: 'старик',
  // },
  // {
  //   word: 'שוב',
  //   pronouncing: 'шув',
  //   translation: 'снова / опять',
  // },
  // {
  //   word: 'מפני',
  //   pronouncing: 'мифнэй',
  //   translation: 'потому / ведь',
  // },
  // {
  //   word: 'חברה',
  //   pronouncing: 'хавэра / хэвра',
  //   translation: 'подруга / компания',
  // },
  // {
  //   word: 'ממשלה',
  //   pronouncing: 'мэмшала',
  //   translation: 'правительство',
  // },
  // {
  //   word: 'רוב',
  //   pronouncing: 'ров',
  //   translation: 'большинство',
  // },
  // {
  //   word: 'שונה מ',
  //   pronouncing: 'шонэ мэ',
  //   translation: 'отличаться от',
  // },
  // {
  //   word: 'צבא',
  //   pronouncing: 'цава',
  //   translation: 'армия',
  // },
  {
    word: 'חולם',
    pronouncing: 'холэм',
    translation: 'мечтать',
  },
  // {
  //   word: 'עדיין',
  //   pronouncing: 'адаин',
  //   translation: 'все еще / до сих пор',
  // },
  // {
  //   word: 'מידע',
  //   pronouncing: 'мэйда',
  //   translation: 'информация / сведения',
  // },
  {
    word: 'אך',
    pronouncing: 'ах',
    translation: 'но',
  },
  // {
  //   word: 'אוצר',
  //   pronouncing: 'оцар',
  //   translation: 'сокровище / казначейство',
  // },
  {
    word: 'שכור',
    pronouncing: 'шкур',
    translation: 'арендованный / наемный',
  },
  // {
  //   word: 'נמצא',
  //   pronouncing: 'нимца',
  //   translation: 'находиться',
  // },
  // {
  //   word: 'מהנדס',
  //   pronouncing: 'мэхандэс',
  //   translation: 'инженер',
  // },
  // {
  //   word: 'לחכות ל',
  //   pronouncing: 'лэхакот лэ',
  //   translation: 'ждать',
  // },
  // {
  //   word: 'רחוק מ',
  //   pronouncing: 'рахок мэ',
  //   translation: 'далеко от',
  // },
  // {
  //   word: 'קרוב ל',
  //   pronouncing: 'каров лэ',
  //   translation: 'близко к',
  // },
  // {
  //   word: 'מהר',
  //   pronouncing: 'махэр',
  //   translation: 'быстро',
  // },
  {
    word: 'בריכה',
    pronouncing: 'бриха',
    translation: 'бассейн',
  },
  // {
  //   word: 'שדה תעופה',
  //   pronouncing: 'сдэ тэуфа',
  //   translation: 'аэропорт',
  // },
  // {
  //   word: 'תעופה',
  //   pronouncing: 'тэуфа',
  //   translation: 'полет',
  // },
  // {
  //   word: 'שדה',
  //   pronouncing: 'сдэ',
  //   translation: 'поле',
  // },
  // {
  //   word: 'פצצה',
  //   pronouncing: 'пцаца',
  //   translation: 'бомба',
  // },
  // {
  //   word: 'על מי',
  //   pronouncing: 'аль ми',
  //   translation: 'о ком',
  // },
  // {
  //   word: 'סופר',
  //   pronouncing: 'софэр',
  //   translation: 'писатель / считать',
  // },
  // {
  //   word: 'מעונות',
  //   pronouncing: 'мэонот',
  //   translation: 'общежитие',
  // },
  // {
  //   word: 'נפגש',
  //   pronouncing: 'нифгаш',
  //   translation: 'встречать',
  // },
  {
    word: 'נמוך',
    pronouncing: 'намух',
    translation: 'низкий / маленький',
  },
  // {
  //   word: 'לובש',
  //   pronouncing: 'ловэш',
  //   translation: 'носить / надевать',
  // },
  // {
  //   word: 'צודק',
  //   pronouncing: 'цодэк',
  //   translation: 'быть правым / правильно',
  // },
  // {
  //   word: 'תפקיד',
  //   pronouncing: 'тафкид',
  //   translation: 'роль / должность',
  // },
  // {
  //   word: 'שחקן',
  //   pronouncing: 'сахкан',
  //   translation: 'артист / актер',
  // },
  {
    word: 'מדען',
    pronouncing: 'мадэан',
    translation: 'ученый',
  },
  // {
  //   word: 'לפי',
  //   pronouncing: 'лэфи',
  //   translation: 'в соответствии с / согласно',
  // },
  // {
  //   word: 'שחור',
  //   pronouncing: 'шахор',
  //   translation: 'черный',
  // },
  // {
  //   word: 'צהוב',
  //   pronouncing: 'цахов',
  //   translation: 'желтый',
  // },
  // {
  //   word: 'כחול',
  //   pronouncing: 'кахоль',
  //   translation: 'синий / голубой',
  // },
  // {
  //   word: 'אמבטיה',
  //   pronouncing: 'амватия',
  //   translation: 'ванная',
  // },
  // {
  //   word: 'רהיטים',
  //   pronouncing: 'рахитим',
  //   translation: 'мебель',
  // },
  // {
  //   word: 'בחירות',
  //   pronouncing: 'бхирот',
  //   translation: 'выборы',
  // },
  {
    word: 'מפלגה',
    pronouncing: 'мифлага',
    translation: 'партия',
  },
  {
    word: 'אחוז',
    pronouncing: 'ахуз',
    translation: 'процент',
  },
  {
    word: 'לצייר',
    pronouncing: 'лэцайэр',
    translation: 'рисовать',
  },
  // {
  //   word: 'בריאות',
  //   pronouncing: 'бриут',
  //   translation: 'здоровье',
  // },
  // {
  //   word: 'מטרה',
  //   pronouncing: 'матара',
  //   translation: 'цель',
  // },
  // {
  //   word: 'צפון',
  //   pronouncing: 'цафон',
  //   translation: 'север',
  // },
  {
    word: 'לנגן',
    pronouncing: 'лэнагэн',
    translation: 'играть / выступать',
  },
  {
    word: 'לשחות',
    pronouncing: 'лисхот',
    translation: 'плавать',
  },
  {
    word: 'לגלוש',
    pronouncing: 'лиглош',
    translation: 'кататься / серфить',
  },
  // {
  //   word: 'לנהוג',
  //   pronouncing: 'линхог',
  //   translation: 'водить',
  // },
  // {
  //   word: 'חופש',
  //   pronouncing: 'хофэш',
  //   translation: 'свобода / отпуск / выходные',
  // },
  // {
  //   word: 'עגבניה',
  //   pronouncing: 'агвания',
  //   translation: 'помидор',
  // },
  // {
  //   word: 'בצל',
  //   pronouncing: 'бацаль',
  //   translation: 'лук',
  // },
  // {
  //   word: 'מלפפון',
  //   pronouncing: 'мелафэфон',
  //   translation: 'огурец',
  // },
  {
    word: 'שורה',
    pronouncing: 'шура',
    translation: 'строка / ряд',
  },
  {
    word: 'טור',
    pronouncing: 'тур',
    translation: 'колонка / столбец',
  },
  // {
  //   word: 'אלכסון',
  //   pronouncing: 'алахсон',
  //   translation: 'диагональ',
  // },
  // {
  //   word: 'אתר',
  //   pronouncing: 'атар',
  //   translation: 'сайт',
  // },
  // {
  //   word: 'נקודה',
  //   pronouncing: 'нэкуда',
  //   translation: 'точка',
  // },
  // {
  //   word: 'משתמש',
  //   pronouncing: 'миштамэшь',
  //   translation: 'использовать / пользоваться',
  // },
  // {
  //   word: 'עכבר',
  //   pronouncing: 'ахбар',
  //   translation: 'мышь',
  // },
  // {
  //   word: 'סיסמה',
  //   pronouncing: 'сисма',
  //   translation: 'пароль / слоган',
  // },
  // {
  //   word: 'סיכום',
  //   pronouncing: 'сикум',
  //   translation: 'итог / резюме',
  // },
  // {
  //   word: 'בדיקה',
  //   pronouncing: 'бдика',
  //   translation: 'проверка / осмотр',
  // },
  // {
  //   word: 'לעמוד',
  //   pronouncing: 'лаамод',
  //   translation: 'стоять / выстоять',
  // },
  // {
  //   word: 'שיחה',
  //   pronouncing: 'сиха',
  //   translation: 'разговор',
  // },
  // {
  //   word: 'המשך',
  //   pronouncing: 'хамшэх',
  //   translation: 'продолжение',
  // },
  // {
  //   word: 'כאן',
  //   pronouncing: 'кан',
  //   translation: 'здесь',
  // },
  // {
  //   word: 'עד',
  //   pronouncing: 'ад',
  //   translation: 'до',
  // },
  // {
  //   word: 'עוזר',
  //   pronouncing: 'озэр',
  //   translation: 'помогать',
  // },
  // {
  //   word: 'קל',
  //   pronouncing: 'каль',
  //   translation: 'легкий',
  // },
  // {
  //   word: 'בכלל',
  //   pronouncing: 'бихлаль',
  //   translation: 'вообще / совсем',
  // },
  // {
  //   word: 'מזרח',
  //   pronouncing: 'мизрах',
  //   translation: 'восток',
  // },
  // {
  //   word: 'מערב',
  //   pronouncing: 'маарэв',
  //   translation: 'запад',
  // },
  // {
  //   word: 'גבול',
  //   pronouncing: 'гвуль',
  //   translation: 'граница',
  // },
  // {
  //   word: 'מצרים',
  //   pronouncing: 'мицраим',
  //   translation: 'Египет',
  // },
  {
    word: 'אגם',
    pronouncing: 'агам',
    translation: 'озеро',
  },
  // {
  //   word: 'שלג',
  //   pronouncing: 'шэлэг',
  //   translation: 'снег',
  // },
  // {
  //   word: 'שכונה',
  //   pronouncing: 'шхуна',
  //   translation: 'район / квартал',
  // },
  // {
  //   word: 'קדוש',
  //   pronouncing: 'кадош',
  //   translation: 'святой',
  // },
  // {
  //   word: 'אזור',
  //   pronouncing: 'эзор',
  //   translation: 'зона / область',
  // },
  // {
  //   word: 'חיות',
  //   pronouncing: 'хайот',
  //   translation: 'животные',
  // },
  {
    word: 'לשתף',
    pronouncing: 'лэшатэф',
    translation: 'делиться',
  },
  // {
  //   word: 'תושבים',
  //   pronouncing: 'тошавим',
  //   translation: 'жители',
  // },
  // {
  //   word: 'כמעט',
  //   pronouncing: 'кимат',
  //   translation: 'почти',
  // },
  {
    word: 'רבוע',
    pronouncing: 'равуа',
    translation: 'площадь',
  },
  // {
  //   word: 'טבע',
  //   pronouncing: 'тэва',
  //   translation: 'природа',
  // },
  {
    word: 'עיניים',
    pronouncing: 'эйнаим',
    translation: 'глаза',
  },
  // {
  //   word: 'חוק',
  //   pronouncing: 'хок',
  //   translation: 'закон',
  // },
  // {
  //   word: 'אפילו',
  //   pronouncing: 'афилу',
  //   translation: 'даже',
  // },
  {
    word: 'נפלא',
    pronouncing: 'нифла',
    translation: 'прекрасный / замечательный',
  },
  // {
  //   word: 'תפילה',
  //   pronouncing: 'тфила',
  //   translation: 'молитва',
  // },
  // {
  //   word: 'למשל',
  //   pronouncing: 'лэмашаль',
  //   translation: 'например',
  // },
  // {
  //   word: 'חילוני',
  //   pronouncing: 'хилони',
  //   translation: 'светский',
  // },
  {
    word: 'אוזניים',
    pronouncing: 'ознаим',
    translation: 'уши',
  },
  // {
  //   word: 'יבשת',
  //   pronouncing: 'явэшэт',
  //   translation: 'континент',
  // },
  // {
  //   word: 'צבע',
  //   pronouncing: 'цэва',
  //   translation: 'цвет',
  // },
  // {
  //   word: 'שמיים',
  //   pronouncing: 'шамаим',
  //   translation: 'небо',
  // },
  // {
  //   word: 'תכלת',
  //   pronouncing: 'тхэлэт',
  //   translation: 'голубой',
  // },
  // {
  //   word: 'רפואה',
  //   pronouncing: 'рэфуа',
  //   translation: 'медицина',
  // },
  // {
  //   word: 'קבר',
  //   pronouncing: 'кэвэр',
  //   translation: 'могила',
  // },
  // {
  //   word: 'פרה',
  //   pronouncing: 'пора',
  //   translation: 'корова',
  // },
  {
    word: 'עמק',
    pronouncing: 'эмэк',
    translation: 'долина',
  },
  // {
  //   word: 'חקלאות',
  //   pronouncing: 'хаклаут',
  //   translation: 'сельское хозяйство',
  // },
  // {
  //   word: 'לבשר',
  //   pronouncing: 'лэвасэр',
  //   translation: 'сообщить',
  // },
  // {
  //   word: 'מכיר',
  //   pronouncing: 'макир',
  //   translation: 'знать / быть знакомым',
  // },
  // {
  //   word: 'לתקשורת',
  //   pronouncing: 'латикшорэт',
  //   translation: 'связи / коммуникации',
  // },
  {
    word: 'לקשר',
    pronouncing: 'лэкашэр',
    translation: 'связывать / ассоциировать / соединять',
  },
  // {
  //   word: 'רציני',
  //   pronouncing: 'рэцини',
  //   translation: 'серьезный',
  // },
  // {
  //   word: 'היכרויות',
  //   pronouncing: 'хэйкируйот',
  //   translation: 'находящиеся в отношениях / встречающиеся',
  // },
  // {
  //   word: 'רזה',
  //   pronouncing: 'раза',
  //   translation: 'худой',
  // },
  // {
  //   word: 'מטבח',
  //   pronouncing: 'митбах',
  //   translation: 'кухня',
  // },
  // {
  //   word: 'פחד',
  //   pronouncing: 'пахад',
  //   translation: 'страх',
  // },
  {
    word: 'כוונה',
    pronouncing: 'кавана',
    translation: 'намерение / желание',
  },
  // {
  //   word: 'מונית',
  //   pronouncing: 'монит',
  //   translation: 'такси',
  // },
  // {
  //   word: 'אחרון',
  //   pronouncing: 'ахарон',
  //   translation: 'последний',
  // },
  // {
  //   word: 'מזומן',
  //   pronouncing: 'мэзуман',
  //   translation: 'наличные',
  // },
  // {
  //   word: 'מטלפן ל',
  //   pronouncing: 'мэтальпэн лэ',
  //   translation: 'звонить',
  // },
  // {
  //   word: 'תרבות',
  //   pronouncing: 'тарвут',
  //   translation: 'культура / цивилизация',
  // },
  // {
  //   word: 'מקדש',
  //   pronouncing: 'микдашь',
  //   translation: 'храм',
  // },
  // {
  //   word: 'פיתרון',
  //   pronouncing: 'питарон',
  //   translation: 'решение',
  // },
  // {
  //   word: 'מוצא',
  //   pronouncing: 'моцэ',
  //   translation: 'находить',
  // },
  // {
  //   word: 'רעיון',
  //   pronouncing: 'район',
  //   translation: 'идея / предложение / вариант',
  // },
  {
    word: 'לתמוך',
    pronouncing: 'литмох',
    translation: 'поддержать',
  },
  // {
  //   word: 'רבע',
  //   pronouncing: 'рэва',
  //   translation: 'четверть',
  // },
  // {
  //   word: 'חצי',
  //   pronouncing: 'хэци',
  //   translation: 'половина',
  // },
  {
    word: 'בערך',
    pronouncing: 'бээрэх',
    translation: 'примерно',
  },
  // {
  //   word: 'צהריים',
  //   pronouncing: 'цохораим',
  //   translation: 'полдень',
  // },
  // {
  //   word: 'יממה',
  //   pronouncing: 'ямама',
  //   translation: 'сутки',
  // },
  // {
  //   word: 'חצות',
  //   pronouncing: 'хацот',
  //   translation: 'полночь',
  // },
  // {
  //   word: 'אף פעם לא',
  //   pronouncing: 'аф паам ло',
  //   translation: 'никогда',
  // },
  // {
  //   word: 'ישן',
  //   pronouncing: 'яшэн',
  //   translation: 'спать',
  // },
  // {
  //   word: 'מתרחץ',
  //   pronouncing: 'митрахэц',
  //   translation: 'мыться',
  // },
  // {
  //   word: 'מתלבש',
  //   pronouncing: 'митлабэшь',
  //   translation: 'одеваться',
  // },
  // {
  //   word: 'מסורת',
  //   pronouncing: 'масорэт',
  //   translation: 'традиция',
  // },
  // {
  //   word: 'שומר',
  //   pronouncing: 'шомэр',
  //   translation: 'хранить / охранять',
  // },
  // {
  //   word: 'חזיר',
  //   pronouncing: 'хазир',
  //   translation: 'свинья',
  // },
  // {
  //   word: 'עצוב',
  //   pronouncing: 'ацув',
  //   translation: 'грустить',
  // },
  // {
  //   word: 'שוכח',
  //   pronouncing: 'шохэах',
  //   translation: 'забывать',
  // },
  // {
  //   word: 'רעב',
  //   pronouncing: 'раав',
  //   translation: 'голодный',
  // },
  // {
  //   word: 'גיבור',
  //   pronouncing: 'гибор',
  //   translation: 'герой',
  // },
  // {
  //   word: 'פחדן',
  //   pronouncing: 'пахдан',
  //   translation: 'трус',
  // },
  // {
  //   word: 'באמצע',
  //   pronouncing: 'бэ эмца',
  //   translation: 'в середине / в центре',
  // },
  // {
  //   word: 'בצד',
  //   pronouncing: 'бацад',
  //   translation: 'в стороне / отдельно',
  // },
  {
    word: 'עצלן',
    pronouncing: 'ацлан',
    translation: 'ленивый',
  },
  {
    word: 'חרוץ',
    pronouncing: 'харуц',
    translation: 'трудолюбивый',
  },
  {
    word: 'חמוץ',
    pronouncing: 'хамуц',
    translation: 'кислый',
  },
  {
    word: 'חריף',
    pronouncing: 'хариф',
    translation: 'острый',
  },
  // {
  //   word: 'טיפשי',
  //   pronouncing: 'тифши',
  //   translation: 'глупый',
  // },
  // {
  //   word: 'תפוס',
  //   pronouncing: 'тафус',
  //   translation: 'занятый / занято',
  // },
  {
    word: 'ענק',
    pronouncing: 'анак',
    translation: 'огромный',
  },
  {
    word: 'פספוס',
    pronouncing: 'фисфус',
    translation: 'проигрыш / промах',
  },
  // {
  //   word: 'כדי',
  //   pronouncing: 'кэдэй',
  //   translation: 'чтобы',
  // },
  // {
  //   word: 'פותח',
  //   pronouncing: 'потэах',
  //   translation: 'открывать',
  // },
  // {
  //   word: 'מאחר',
  //   pronouncing: 'мэахар',
  //   translation: 'опаздывать',
  // },
  // {
  //   word: 'מקשיב',
  //   pronouncing: 'макшив',
  //   translation: 'слушать',
  // },
  // {
  //   word: 'לכן',
  //   pronouncing: 'лахэн',
  //   translation: 'поэтому',
  // },
  // {
  //   word: 'אורז',
  //   pronouncing: 'орэз',
  //   translation: 'рис',
  // },
  // {
  //   word: 'מכין',
  //   pronouncing: 'мэхин',
  //   translation: 'готовить / делать',
  // },
  // {
  //   word: 'תוכן',
  //   pronouncing: 'тохэн',
  //   translation: 'содержимое / контент',
  // },
  // {
  //   word: 'להחליף',
  //   pronouncing: 'лэхахлиф',
  //   translation: 'поменять',
  // },
  // {
  //   word: 'מסדר',
  //   pronouncing: 'мэсадэр',
  //   translation: 'убирать / приводить в порядок',
  // },
  // {
  //   word: 'מבשל',
  //   pronouncing: 'мэвашэль',
  //   translation: 'готовить',
  // },
  // {
  //   word: 'מקלחת',
  //   pronouncing: 'миклахат',
  //   translation: 'душ',
  // },
  // {
  //   word: 'מלצר',
  //   pronouncing: 'мэльцар',
  //   translation: 'официант',
  // },
  {
    word: 'מעורר',
    pronouncing: 'мэорэр',
    translation: 'пробуждать / стимулировать',
  },
  // {
  //   word: 'לספור',
  //   pronouncing: 'лиспор',
  //   translation: 'считать',
  // },
  // {
  //   word: 'ספירה',
  //   pronouncing: 'сфира',
  //   translation: 'подсчет',
  // },
  // {
  //   word: 'תואר',
  //   pronouncing: 'тоар',
  //   translation: 'степень / титул',
  // },
  {
    word: 'תוכנית',
    pronouncing: 'тохнит',
    translation: 'программа / план',
  },
  // {
  //   word: 'פחות',
  //   pronouncing: 'пахот',
  //   translation: 'меньше',
  // },
  {
    word: 'לוקח',
    pronouncing: 'локэах',
    translation: 'брать / принимать',
  },
  // {
  //   word: 'חיוך',
  //   pronouncing: 'хиюх',
  //   translation: 'улыбка',
  // },
  // {
  //   word: 'מזג',
  //   pronouncing: 'мэзэг',
  //   translation: 'характер',
  // },
  // {
  //   word: 'קופה',
  //   pronouncing: 'купа',
  //   translation: 'касса',
  // },
  // {
  //   word: 'מתחתן',
  //   pronouncing: 'митхатэн',
  //   translation: 'жениться / выходить замуж',
  // },
  // {
  //   word: 'מתקשר',
  //   pronouncing: 'миткашэр',
  //   translation: 'звонить',
  // },
  // {
  //   word: 'בחו"ל',
  //   pronouncing: 'бахуль',
  //   translation: 'заграницей',
  // },
  // {
  //   word: 'שוטף',
  //   pronouncing: 'шотэф',
  //   translation: 'мыть',
  // },
  // {
  //   word: 'כלים',
  //   pronouncing: 'калим',
  //   translation: 'посуда',
  // },
  // {
  //   word: 'נייד',
  //   pronouncing: 'наяд',
  //   translation: 'сотовый телефон',
  // },
  // {
  //   word: 'לימוד',
  //   pronouncing: 'лимод',
  //   translation: 'занятие',
  // },
  // {
  //   word: 'טבעת',
  //   pronouncing: 'тават',
  //   translation: 'кольцо',
  // },
  {
    word: 'מפסיק',
    pronouncing: 'мафсик',
    translation: 'останавливаться / переставать',
  },
  // {
  //   word: 'מבקש',
  //   pronouncing: 'мэвакэш',
  //   translation: 'просить',
  // },
  {
    word: 'בוכה',
    pronouncing: 'бохэ',
    translation: 'плакать',
  },
  {
    word: 'יבשה',
    pronouncing: 'явэша',
    translation: 'сухой',
  },
  // {
  //   word: 'סיבה',
  //   pronouncing: 'сиба',
  //   translation: 'причина',
  // },
  // {
  //   word: 'מעדיף',
  //   pronouncing: 'маадиф',
  //   translation: 'предпочитать',
  // },
  // {
  //   word: 'שולח',
  //   pronouncing: 'шолэах',
  //   translation: 'посылать / отправлять',
  // },
  // {
  //   word: 'וכולי',
  //   pronouncing: 'вэхулэй',
  //   translation: 'и так далее',
  // },
  // {
  //   word: 'יורד',
  //   pronouncing: 'йорэд',
  //   translation: 'падать / спускаться',
  // },
  {
    word: 'מאחל',
    pronouncing: 'мэахэль',
    translation: 'желать',
  },
  // {
  //   word: 'מתרגש',
  //   pronouncing: 'митрагэш',
  //   translation: 'волноваться',
  // },
  // {
  //   word: 'מברך',
  //   pronouncing: 'мэварэх',
  //   translation: 'поздравлять / приветствовать',
  // },
  // {
  //   word: 'מתקדם',
  //   pronouncing: 'миткадэм',
  //   translation: 'продвигаться',
  // },
  // {
  //   word: 'שוכב',
  //   pronouncing: 'шохэв',
  //   translation: 'лежать',
  // },
  {
    word: 'נותן',
    pronouncing: 'нотэн',
    translation: 'давать',
  },
  // {
  //   word: 'מלא',
  //   pronouncing: 'малэ',
  //   translation: 'полный',
  // },
  // {
  //   word: 'שינוי',
  //   pronouncing: 'шинуи',
  //   translation: 'изменение / перемены',
  // },
  // {
  //   word: 'משעמם',
  //   pronouncing: 'мэшамэм',
  //   translation: 'скучный',
  // },
  {
    word: 'משקה',
    pronouncing: 'машкэ',
    translation: 'напиток',
  },
  {
    word: 'שתייה',
    pronouncing: 'штийа',
    translation: 'выпивка',
  },
  {
    word: 'הרצאה',
    pronouncing: 'харцаа',
    translation: 'лекция',
  },
  // {
  //   word: 'מחלה',
  //   pronouncing: 'махала',
  //   translation: 'болезнь',
  // },
  // {
  //   word: 'זהות',
  //   pronouncing: 'зэхут',
  //   translation: 'личность / индивидуальность',
  // },
  // {
  //   word: 'נראה',
  //   pronouncing: 'нирэ',
  //   translation: 'выглядеть',
  // },
  // {
  //   word: 'רושם',
  //   pronouncing: 'рошэм',
  //   translation: 'записывать',
  // },
  {
    word: 'מתקלח',
    pronouncing: 'миткалэах',
    translation: 'принимать душ',
  },
  // {
  //   word: 'רוקד',
  //   pronouncing: 'рокэд',
  //   translation: 'танцевать',
  // },
  // {
  //   word: 'תוצאה',
  //   pronouncing: 'тоцаа',
  //   translation: 'результат',
  // },
  // {
  //   word: 'לבלות',
  //   pronouncing: 'лэвалот',
  //   translation: 'проводить время / тусоваться',
  // },
  {
    word: 'משאיר',
    pronouncing: 'машэир',
    translation: 'оставлять',
  },
  // {
  //   word: 'הודעה',
  //   pronouncing: 'ходаа',
  //   translation: 'сообщение',
  // },
  // {
  //   word: 'ניסיון',
  //   pronouncing: 'нисайон',
  //   translation: 'опыт',
  // },
  // {
  //   word: 'מצליח',
  //   pronouncing: 'мацлиах',
  //   translation: 'получаться / удаваться',
  // },
  // {
  //   word: 'עורך-דין',
  //   pronouncing: 'орэх – дин',
  //   translation: 'адвокат',
  // },
  // {
  //   word: 'רצון',
  //   pronouncing: 'рацон',
  //   translation: 'воля / желание',
  // },
  // {
  //   word: 'ממהר',
  //   pronouncing: 'мэмахэр',
  //   translation: 'спешить',
  // },
  // {
  //   word: 'רגוע',
  //   pronouncing: 'рагуа',
  //   translation: 'спокойный',
  // },
  {
    word: 'עצבני',
    pronouncing: 'ацбани',
    translation: 'нервный',
  },
  // {
  //   word: 'תעשייה',
  //   pronouncing: 'таасия',
  //   translation: 'промышленность / индустрия',
  // },
  // {
  //   word: 'ניתוח',
  //   pronouncing: 'нитуах',
  //   translation: 'операция',
  // },
  // {
  //   word: 'המלצה',
  //   pronouncing: 'хамлаца',
  //   translation: 'рекомендация',
  // },
  // {
  //   word: 'חינוך',
  //   pronouncing: 'хинух',
  //   translation: 'образование',
  // },
  {
    word: 'מכללה',
    pronouncing: 'михлала',
    translation: 'колледж',
  },
  // {
  //   word: 'מעט',
  //   pronouncing: 'мэат',
  //   translation: 'мало',
  // },
  {
    word: 'מסמך',
    pronouncing: 'мисмах',
    translation: 'документ',
  },
  // {
  //   word: 'סמל',
  //   pronouncing: 'сэмэль',
  //   translation: 'символ / герб',
  // },
  // {
  //   word: 'במשך',
  //   pronouncing: 'бэмэшэх',
  //   translation: 'в течение',
  // },
  // {
  //   word: 'מלון',
  //   pronouncing: 'малон',
  //   translation: 'отель',
  // },
  // {
  //   word: 'מלח',
  //   pronouncing: 'мэлах',
  //   translation: 'соль',
  // },
  // {
  //   word: 'פתאום',
  //   pronouncing: 'питом',
  //   translation: 'внезапно / вдруг',
  // },
  {
    word: 'עור',
    pronouncing: 'ор',
    translation: 'кожа',
  },
  // {
  //   word: 'כדאי',
  //   pronouncing: 'кэдай',
  //   translation: 'стоит / следует',
  // },
  // {
  //   word: 'מתאים',
  //   pronouncing: 'матим',
  //   translation: 'подходящий / соответствующий',
  // },
  // Урок 18
  // {
  //   word: 'פעם',
  //   pronouncing: 'паам',
  //   translation: 'однажды',
  // },
  // {
  //   word: 'שירות',
  //   pronouncing: 'ширут',
  //   translation: 'обслуживание',
  // },
  // {
  //   word: 'רגיל',
  //   pronouncing: 'рагиль',
  //   translation: 'обычный / нормальный',
  // },
  // {
  //   word: 'נהדר',
  //   pronouncing: 'нэхэдар',
  //   translation: 'отлично',
  // },
  {
    word: 'שיער',
    pronouncing: 'шэйар',
    translation: 'волосы / прическа',
  },
  {
    word: 'תבלינים',
    pronouncing: 'тавлиним',
    translation: 'приправы',
  },
  // {
  //   word: 'לחמנייה',
  //   pronouncing: 'лахамния',
  //   translation: 'булочка',
  // },
  // {
  //   word: 'עננים',
  //   pronouncing: 'ананим',
  //   translation: 'облака',
  // },
  // {
  //   word: 'שלשום',
  //   pronouncing: 'шэльшум',
  //   translation: 'позавчера',
  // },
  // {
  //   word: 'שעבר',
  //   pronouncing: 'шэавар',
  //   translation: 'прошлый',
  // },
  // {
  //   word: 'מבצע',
  //   pronouncing: 'мивца',
  //   translation: 'акция',
  // },
  // {
  //   word: 'מקולקל',
  //   pronouncing: 'мэкулькаль',
  //   translation: 'быть сломанным',
  // },
  //Урок 19
  // {
  //   word: 'ריח',
  //   pronouncing: 'рэйах',
  //   translation: 'запах',
  // },
  {
    word: 'מתגעגע',
    pronouncing: 'митгагэа',
    translation: 'скучать',
  },
  // {
  //   word: 'חתונה',
  //   pronouncing: 'хатуна',
  //   translation: 'свадьба',
  // },
  // {
  //   word: 'חתן',
  //   pronouncing: 'хатан',
  //   translation: 'жених',
  // },
  // {
  //   word: 'כלה',
  //   pronouncing: 'кала',
  //   translation: 'невеста',
  // },
  // {
  //   word: 'כמובן',
  //   pronouncing: 'кэмуван',
  //   translation: 'конечно / безусловно',
  // },
  // {
  //   word: 'להרוג',
  //   pronouncing: 'лэхарог',
  //   translation: 'убить',
  // },
  // {
  //   word: 'חלבון',
  //   pronouncing: 'хэльбон',
  //   translation: 'протеин',
  // },
  {
    word: 'צמחוני',
    pronouncing: 'цимхони',
    translation: 'вегетарианский',
  },
  // {
  //   word: 'מסביר',
  //   pronouncing: 'масбир',
  //   translation: 'объяснять',
  // },
  // {
  //   word: 'סוג',
  //   pronouncing: 'суг',
  //   translation: 'вид / тип',
  // },
  {
    word: 'מאכל',
    pronouncing: 'маэхаль',
    translation: 'блюдо',
  },
  // Урок 20
  // {
  //   word: 'אז',
  //   pronouncing: 'аз',
  //   translation: 'тогда',
  // },
  // {
  //   word: 'צמא',
  //   pronouncing: 'цамэ',
  //   translation: 'испытывать жажду',
  // },
  {
    word: 'שותף',
    pronouncing: 'шутаф',
    translation: 'партнер',
  },
  // {
  //   word: 'חדר כושר',
  //   pronouncing: 'хадар кошэр',
  //   translation: 'спортзал',
  // },
  {
    word: 'סדרות',
    pronouncing: 'сэдарот',
    translation: 'сериалы / шоу',
  },
  {
    word: 'מציע',
    pronouncing: 'мация',
    translation: 'предлагать',
  },
  // {
  //   word: 'טכנאי',
  //   pronouncing: 'тэхэнай',
  //   translation: 'техник',
  // },
  {
    word: 'קול',
    pronouncing: 'коль',
    translation: 'звук / голос',
  },
  // {
  //   word: 'בכלל',
  //   pronouncing: 'бихлаль',
  //   translation: 'вообще / совсем',
  // },
  // {
  //   word: 'אחריות',
  //   pronouncing: 'ахарают',
  //   translation: 'обязанности',
  // },
  // {
  //   word: 'נוח',
  //   pronouncing: 'ноах',
  //   translation: 'удобно',
  // },
  // {
  //   word: 'מקווה',
  //   pronouncing: 'мэкавэ',
  //   translation: 'надеяться',
  // },
  // Урок 21
  {
    word: 'מחליט',
    pronouncing: 'махлит',
    translation: 'решать',
  },
  // {
  //   word: 'זיהום',
  //   pronouncing: 'зихум',
  //   translation: 'инфекция / загрязнение',
  // },
  // {
  //   word: 'בונה',
  //   pronouncing: 'бонэ',
  //   translation: 'строить',
  // },
  {
    word: 'מפריע',
    pronouncing: 'мафриа',
    translation: 'мешать / беспокоить',
  },
  {
    word: 'בידור',
    pronouncing: 'бидур',
    translation: 'развлечение',
  },
  // {
  //   word: 'נפש',
  //   pronouncing: 'нэфэш',
  //   translation: 'душа',
  // },
  {
    word: 'מתעורר',
    pronouncing: 'митэорэр',
    translation: 'просыпаться',
  },
  // {
  //   word: 'נסה',
  //   pronouncing: 'насэ',
  //   translation: 'пробовать',
  // },
  {
    word: 'אופנה',
    pronouncing: 'аофэна',
    translation: 'мода',
  },
  {
    word: 'מתכונן',
    pronouncing: 'митконэн',
    translation: 'готовиться / собираться',
  },
  // Урок 22
  // {
  //   word: 'חוגג',
  //   pronouncing: 'хогэг',
  //   translation: 'праздновать',
  // },
  // {
  //   word: 'דן',
  //   pronouncing: 'дан',
  //   translation: 'обсуждать',
  // },
  // {
  //   word: 'רב',
  //   pronouncing: 'рав',
  //   translation: 'драться',
  // },
  {
    word: 'גופני',
    pronouncing: 'гуфани',
    translation: 'физический',
  },
  // {
  //   word: 'שם לב',
  //   pronouncing: 'сам лэв',
  //   translation: 'замечать / обращать внимание',
  // },
  // {
  //   word: 'מצחיק',
  //   pronouncing: 'мацхик',
  //   translation: 'смешной',
  // },
  {
    word: 'נופל',
    pronouncing: 'нофэль',
    translation: 'падать',
  },
  // {
  //   word: 'עובר',
  //   pronouncing: 'овэр',
  //   translation: 'проходить',
  // },
  // Урок 23
  // {
  //   word: 'כמות',
  //   pronouncing: 'камут',
  //   translation: 'количество',
  // },
  // {
  //   word: 'דווקא',
  //   pronouncing: 'давка',
  //   translation: 'именно',
  // },
  {
    word: 'עוזב',
    pronouncing: 'озэв',
    translation: 'уходить / оставлять',
  },
  // {
  //   word: 'מאמין',
  //   pronouncing: 'мамин',
  //   translation: 'верить',
  // },
  {
    word: 'נוחות',
    pronouncing: 'нохот',
    translation: 'комфорт',
  },
  // Урок 24
  // {
  //   word: 'בוחר',
  //   pronouncing: 'бохэр',
  //   translation: 'выбирать',
  // },
  // {
  //   word: 'מחבר',
  //   pronouncing: 'мэхавэр',
  //   translation: 'соединять',
  // },
  {
    word: 'תספורת',
    pronouncing: 'тиспорэт',
    translation: 'стрижка',
  },
  // {
  //   word: 'נהג',
  //   pronouncing: 'нахаг',
  //   translation: 'водитель',
  // },
  // {
  //   word: 'מרוצה',
  //   pronouncing: 'мэроцэ',
  //   translation: 'доволен',
  // },
  {
    word: 'מציאות',
    pronouncing: 'мэциут',
    translation: 'реальность',
  },
  {
    word: 'מחלקה',
    pronouncing: 'махлака',
    translation: 'отдел',
  },
  // {
  //   word: 'מאושר',
  //   pronouncing: 'мэушар',
  //   translation: 'счастливый',
  // },
  {
    word: 'היתרון',
    pronouncing: 'хитарон',
    translation: 'преимущество',
  },
  {
    word: 'חסרון',
    pronouncing: 'хисарон',
    translation: 'недостаток',
  },
  // {
  //   word: 'מס',
  //   pronouncing: 'мас',
  //   translation: 'налог',
  // },
  // Урок 25
  // {
  //   word: 'רוחצ',
  //   pronouncing: 'рохэц',
  //   translation: 'мыть',
  // },
  {
    word: 'טהור',
    pronouncing: 'тахур',
    translation: 'чистый',
  },
  // {
  //   word: 'משכורת',
  //   pronouncing: 'маскорэт',
  //   translation: 'зарплата',
  // },
  {
    word: 'הפגנה',
    pronouncing: 'хафгана',
    translation: 'демонстрация / протест',
  },
  // {
  //   word: 'חובה',
  //   pronouncing: 'хова',
  //   translation: 'долг',
  // },
  {
    word: 'משפיע',
    pronouncing: 'машпиа',
    translation: 'влиять / действовать',
  },
  // Урок 26
  // {
  //   word: 'נגמר',
  //   pronouncing: 'нигмар',
  //   translation: 'заканчиваться',
  // },
  // {
  //   word: 'מטוס',
  //   pronouncing: 'матос',
  //   translation: 'самолет',
  // },
  // {
  //   word: 'טעות',
  //   pronouncing: 'таут',
  //   translation: 'ошибка',
  // },
  {
    word: 'אנוש',
    pronouncing: 'ануш',
    translation: 'человеческий',
  },
  // {
  //   word: 'טיל',
  //   pronouncing: 'тиль',
  //   translation: 'ракета',
  // },
  {
    word: 'להתפטר',
    pronouncing: 'лэхитпатэр',
    translation: 'увольняться',
  },
  // {
  //   word: 'סערה',
  //   pronouncing: 'сэара',
  //   translation: 'шторм',
  // },
  {
    word: 'תיווך',
    pronouncing: 'тивух',
    translation: 'риэлтор',
  },
  // {
  //   word: 'פונה',
  //   pronouncing: 'понэ',
  //   translation: 'поворачивать / обращаться',
  // },
  {
    word: 'תנאי',
    pronouncing: 'тэнай',
    translation: 'условие',
  },
  {
    word: 'טועה',
    pronouncing: 'тоэ',
    translation: 'ошибаться',
  },
  // {
  //   word: 'בתוך',
  //   pronouncing: 'бэтох',
  //   translation: 'внутри',
  // },
  // {
  //   word: 'אורח',
  //   pronouncing: 'орэх',
  //   translation: 'гость',
  // },
  // {
  //   word: 'עני',
  //   pronouncing: 'ани',
  //   translation: 'бедный',
  // },
  {
    word: 'עשור',
    pronouncing: 'асур',
    translation: 'богатый',
  },
  // Урок 27
  {
    word: 'זוכה',
    pronouncing: 'зохэ',
    translation: 'выигрывать',
  },
  {
    word: 'מחסן',
    pronouncing: 'махсан',
    translation: 'склад / кладовая',
  },
  // {
  //   word: 'חנייה',
  //   pronouncing: 'ханая',
  //   translation: 'парковка',
  // },
  // {
  //   word: 'אשפה',
  //   pronouncing: 'ашпа',
  //   translation: 'мусор',
  // },
  // {
  //   word: 'תחבורה',
  //   pronouncing: 'тахбура',
  //   translation: 'транспорт',
  // },
  // {
  //   word: 'גודל',
  //   pronouncing: 'годэль',
  //   translation: 'размер',
  // },
  // {
  //   word: 'קרקע',
  //   pronouncing: 'карка',
  //   translation: 'земля',
  // },
  // {
  //   word: 'משותף',
  //   pronouncing: 'мэшутаф',
  //   translation: 'общий / совместный / общественный',
  // },
  {
    word: 'מקלט',
    pronouncing: 'миклат',
    translation: 'убежище',
  },
  // {
  //   word: 'חשמל',
  //   pronouncing: 'хашмаль',
  //   translation: 'электричество',
  // },
  // {
  //   word: 'בקשר',
  //   pronouncing: 'бакэшэр',
  //   translation: 'в связи',
  // },
  // {
  //   word: 'לברר',
  //   pronouncing: 'лэварэр',
  //   translation: 'выяснять',
  // },
  // {
  //   word: 'פרטים',
  //   pronouncing: 'пратим',
  //   translation: 'детали / подробности',
  // },
  // {
  //   word: 'מחיר',
  //   pronouncing: 'махир',
  //   translation: 'цена',
  // },
  // Урок 28
  // {
  //   word: 'קובע',
  //   pronouncing: 'ковэа',
  //   translation: 'назначать / определять',
  // },
  // {
  //   word: 'נשק',
  //   pronouncing: 'нэшэк',
  //   translation: 'оружие',
  // },
  // {
  //   word: 'ארנק',
  //   pronouncing: 'арнак',
  //   translation: 'кошелек',
  // },
  {
    word: 'מרווח',
    pronouncing: 'мэрувах',
    translation: 'просторный',
  },
  {
    word: 'מואר',
    pronouncing: 'муар',
    translation: 'светло',
  },
  {
    word: 'חשוך',
    pronouncing: 'хашух',
    translation: 'темный',
  },
  // {
  //   word: 'בזבוז',
  //   pronouncing: 'базбуз',
  //   translation: 'трата',
  // },
  // {
  //   word: 'האזעקה',
  //   pronouncing: 'хаазака',
  //   translation: 'сирена / тревога',
  // },
  // Урок 29
  // {
  //   word: 'מפרסם',
  //   pronouncing: 'мэфарсэм',
  //   translation: 'публиковать',
  // },
  // {
  //   word: 'תשלום',
  //   pronouncing: 'ташлум',
  //   translation: 'оплата',
  // },
  {
    word: 'סכום',
    pronouncing: 'сэхум',
    translation: 'сумма',
  },
  // {
  //   word: 'לעבור',
  //   pronouncing: 'лаавор',
  //   translation: 'переезжать',
  // },
  // {
  //   word: 'להמליץ',
  //   pronouncing: 'лэхамлиц',
  //   translation: 'рекомендовать',
  // },
  // {
  //   word: 'למכור',
  //   pronouncing: 'лимкор',
  //   translation: 'продавать',
  // },
  {
    word: 'לתלות',
    pronouncing: 'литлот',
    translation: 'повесить',
  },
  // {
  //   word: 'סביבה',
  //   pronouncing: 'свива',
  //   translation: 'окружение / обстановка',
  // },
  // Урок 30
  {
    word: 'מנשק',
    pronouncing: 'мэнашэк',
    translation: 'целовать',
  },
  {
    word: 'מחבק',
    pronouncing: 'мэхабэк',
    translation: 'обнимать',
  },
  {
    word: 'מצלם',
    pronouncing: 'мэцалэм',
    translation: 'снимать / фотографировать',
  },
  // {
  //   word: 'מבטל',
  //   pronouncing: 'мэватэль',
  //   translation: 'отменять',
  // },
  // {
  //   word: 'להמשך',
  //   pronouncing: 'лэхамшэх',
  //   translation: 'продолжаться',
  // },
  // {
  //   word: 'בלש',
  //   pronouncing: 'балаш',
  //   translation: 'детектив',
  // },
  // {
  //   word: 'לתקן',
  //   pronouncing: 'лэтакэн',
  //   translation: 'чинить',
  // },
  {
    word: 'לאבד',
    pronouncing: 'лэавэд',
    translation: 'терять',
  },
  // {
  //   word: 'דם',
  //   pronouncing: 'дам',
  //   translation: 'кровь',
  // },
  // {
  //   word: 'גרון',
  //   pronouncing: 'гарон',
  //   translation: 'горло',
  // },
  // {
  //   word: 'חזה',
  //   pronouncing: 'хаза',
  //   translation: 'грудь',
  // },
  // {
  //   word: 'גב',
  //   pronouncing: 'гав',
  //   translation: 'спина',
  // },
  // {
  //   word: 'ישבן',
  //   pronouncing: 'яшван',
  //   translation: 'зад',
  // },
  // {
  //   word: 'אף',
  //   pronouncing: 'аф',
  //   translation: 'нос',
  // },
  // {
  //   word: 'שן',
  //   pronouncing: 'шэн',
  //   translation: 'зуб',
  // },
  {
    word: 'לשון',
    pronouncing: 'лашон',
    translation: 'язык',
  },
  // {
  //   word: 'צוואר',
  //   pronouncing: 'цавар',
  //   translation: 'шея',
  // },
  // {
  //   word: 'שריר',
  //   pronouncing: 'шэрир',
  //   translation: 'мускул',
  // },
  // Урок 31
  // {
  //   word: 'קהילה',
  //   pronouncing: 'кэхила',
  //   translation: 'сообщество',
  // },
  // {
  //   word: 'מהי',
  //   pronouncing: 'махи',
  //   translation: 'в чем',
  // },
  // {
  //   word: 'מועדון',
  //   pronouncing: 'муадон',
  //   translation: 'клуб',
  // },
  // {
  //   word: 'כף',
  //   pronouncing: 'каф',
  //   translation: 'ложка / ладонь',
  // },
  {
    word: 'אצבעות',
    pronouncing: 'эцваот',
    translation: 'пальцы',
  },
  // {
  //   word: 'מנסה',
  //   pronouncing: 'мэнасэ',
  //   translation: 'пытаться',
  // },
  // {
  //   word: 'תרופה',
  //   pronouncing: 'труфа',
  //   translation: 'лекарство',
  // },
  // {
  //   word: 'בזכות',
  //   pronouncing: 'бизхут',
  //   translation: 'благодаря',
  // },
  {
    word: 'מטוגן',
    pronouncing: 'мэтуган',
    translation: 'жаренный',
  },
  // {
  //   word: 'חשיבה',
  //   pronouncing: 'хашива',
  //   translation: 'мышление',
  // },
  // {
  //   word: 'חיובי',
  //   pronouncing: 'хиуви',
  //   translation: 'положительный / позитивный',
  // },
  // {
  //   word: 'שלילי',
  //   pronouncing: 'шлили',
  //   translation: 'негативный / отрицательный',
  // },
  // {
  //   word: 'אמונה',
  //   pronouncing: 'эмуна',
  //   translation: 'вера / доверие',
  // },
  {
    word: 'תהליך',
    pronouncing: 'тахалих',
    translation: 'процесс / процедура',
  },
  // {
  //   word: 'ריק',
  //   pronouncing: 'рэйк',
  //   translation: 'пустой',
  // },
  {
    word: 'מסביב',
    pronouncing: 'мисавив',
    translation: 'вокруг',
  },
  // Урок 32
  // {
  //   word: 'אישור',
  //   pronouncing: 'ишур',
  //   translation: 'разрешение / справка',
  // },
  {
    word: 'תנור',
    pronouncing: 'танур',
    translation: 'печь / духовка',
  },
  // {
  //   word: 'אסיפה',
  //   pronouncing: 'асифа',
  //   translation: 'собрание',
  // },
  // {
  //   word: 'שביתה',
  //   pronouncing: 'швита',
  //   translation: 'забастовка',
  // },
  // {
  //   word: 'מחס',
  //   pronouncing: 'мэхэс',
  //   translation: 'таможня',
  // },
  // {
  //   word: 'פח אשפה',
  //   pronouncing: 'пах ашпа',
  //   translation: 'мусорный бак',
  // },
  // {
  //   word: 'כביסה',
  //   pronouncing: 'квиса',
  //   translation: 'стирка',
  // },
  //Урок 33
  // {
  //   word: 'גובה',
  //   pronouncing: 'гова',
  //   translation: 'высота',
  // },
  // {
  //   word: 'משקל',
  //   pronouncing: 'машкаль',
  //   translation: 'вес',
  // },
  // {
  //   word: 'בדידות',
  //   pronouncing: 'бдидут',
  //   translation: 'одиночество',
  // },
  // {
  //   word: 'אמת',
  //   pronouncing: 'эмэт',
  //   translation: 'правда',
  // },
  // {
  //   word: 'כוכב',
  //   pronouncing: 'кохав',
  //   translation: 'звезда',
  // },
  // {
  //   word: 'ממשיך',
  //   pronouncing: 'мамших',
  //   translation: 'продолжать',
  // },
  // {
  //   word: 'מבטיח',
  //   pronouncing: 'мавтиах',
  //   translation: 'обещать',
  // },
  // {
  //   word: 'חלש',
  //   pronouncing: 'халаш',
  //   translation: 'слабый',
  // },
  // {
  //   word: 'נשימה',
  //   pronouncing: 'нэшима',
  //   translation: 'дыхание',
  // },
  // Урок 34
  {
    word: 'להקים',
    pronouncing: 'лэхаким',
    translation: 'основать',
  },
  // {
  //   word: 'מזיז',
  //   pronouncing: 'мэзиз',
  //   translation: 'двигать',
  // },
  {
    word: 'מביא',
    pronouncing: 'мэви',
    translation: 'приносить',
  },
  {
    word: 'הווה',
    pronouncing: 'хава',
    translation: 'настоящее',
  },
  {
    word: 'מכניס',
    pronouncing: 'махнис',
    translation: 'ставить / засовывать',
  },
  {
    word: 'המחאה',
    pronouncing: 'хамхаа',
    translation: 'чек',
  },
  // {
  //   word: 'חומר',
  //   pronouncing: 'хомэр',
  //   translation: 'материал / вещество / товар',
  // },
  // {
  //   word: 'למעלה',
  //   pronouncing: 'лэмала',
  //   translation: 'вверх',
  // },
  // {
  //   word: 'למטה',
  //   pronouncing: 'лэмата',
  //   translation: 'вниз',
  // }, 
  // Урок 35
  // {
  //   word: 'חייב',
  //   pronouncing: 'хаяв',
  //   translation: 'обязан / должен',
  // }, 
  {
    word: 'מסיים',
    pronouncing: 'мэсайэм',
    translation: 'заканчивать',
  }, 
  // {
  //   word: 'למרות ש',
  //   pronouncing: 'ламрот шэ',
  //   translation: 'несмотря на',
  // }, 
  {
    word: 'עבור',
    pronouncing: 'авур',
    translation: 'ради',
  }, 
  // {
  //   word: 'בעד',
  //   pronouncing: 'бэад',
  //   translation: 'за',
  // }, 
  // {
  //   word: 'משתעל',
  //   pronouncing: 'миштааль',
  //   translation: 'кашлять',
  // }, 
  // {
  //   word: 'רמזור',
  //   pronouncing: 'рамзор',
  //   translation: 'светофор',
  // }, 
  // {
  //   word: 'להתקדם',
  //   pronouncing: 'лэхиткадэм',
  //   translation: 'продвигаться',
  // }, 
  // {
  //   word: 'להתרגל ל',
  //   pronouncing: 'лэхитрагэль лэ',
  //   translation: 'привыкать к',
  // }, 
  {
    word: 'להתנדב',
    pronouncing: 'лэхитнадэв',
    translation: 'вызываться добровольцем',
  }, 
  // {
  //   word: 'להתאהב',
  //   pronouncing: 'лэхитахэв',
  //   translation: 'влюбляться',
  // }, 
  // {
  //   word: 'משתתף',
  //   pronouncing: 'миштатэф',
  //   translation: 'участвовать',
  // }, 
  // {
  //   word: 'משתמש',
  //   pronouncing: 'миштамэш',
  //   translation: 'использовать',
  // }, 
  // {
  //   word: 'להתנצל',
  //   pronouncing: 'лэхитнацэль',
  //   translation: 'извиняться',
  // }, 
  // {
  //   word: 'להתנהג',
  //   pronouncing: 'лэхитнахэг',
  //   translation: 'вести себя',
  // }, 
  {
    word: 'להבריז',
    pronouncing: 'лэхавриз',
    translation: 'прогуливать / пропускать',
  },
  // Урок 36
  // {
  //   word: 'מסוכן',
  //   pronouncing: 'мэсукан',
  //   translation: 'опасный',
  // },
  // {
  //   word: 'נזלת',
  //   pronouncing: 'назэлэт',
  //   translation: 'насморк',
  // },
  {
    word: 'מחקר',
    pronouncing: 'мэхкар',
    translation: 'исследование',
  },
  // {
  //   word: 'להבריא',
  //   pronouncing: 'лэхаври',
  //   translation: 'выздоравливать',
  // },
  // {
  //   word: 'גורם',
  //   pronouncing: 'горэм',
  //   translation: 'вызывать / быть причиной',
  // },
  // {
  //   word: 'מנוחה',
  //   pronouncing: 'мэнуха',
  //   translation: 'отдых',
  // },
  // {
  //   word: 'מוצר',
  //   pronouncing: 'муцар',
  //   translation: 'продукт / товар',
  // },
  // {
  //   word: 'תחרות',
  //   pronouncing: 'тахарут',
  //   translation: 'соревнование / конкурс',
  // },
  {
    word: 'מסתדר',
    pronouncing: 'мистадэр',
    translation: 'уживаться / складываться',
  },
  {
    word: 'מתווכח',
    pronouncing: 'митвакэах',
    translation: 'спорить / обсуждать',
  },
  // {
  //   word: 'לפחות',
  //   pronouncing: 'лэфахот',
  //   translation: 'как минимум',
  // },
  {
    word: 'להטעין',
    pronouncing: 'лэхатаин',
    translation: 'заряжать / пополнять',
  },
  // {
  //   word: 'מודיעין',
  //   pronouncing: 'модэин',
  //   translation: 'информационный отдел',
  // },
  // {
  //   word: 'רציף',
  //   pronouncing: 'рациф',
  //   translation: 'платформа',
  // },
  // {
  //   word: 'הבא',
  //   pronouncing: 'хаба',
  //   translation: 'следующий',
  // },
  // {
  //   word: 'הנחה',
  //   pronouncing: 'ханаха',
  //   translation: 'скидка',
  // },
  // {
  //   word: 'כל כמה',
  //   pronouncing: 'коль кама',
  //   translation: 'как часто',
  // },
  {
    word: 'ישיר',
    pronouncing: 'яшир',
    translation: 'прямой',
  },
  {
    word: 'מאסף',
    pronouncing: 'мэасэф',
    translation: 'маршрутный',
  },
  // {
  //   word: 'עודף',
  //   pronouncing: 'одэф',
  //   translation: 'сдача',
  // },
  // Урок 37
  // {
  //   word: 'נפרד',
  //   pronouncing: 'нифрад',
  //   translation: 'порывать / расставаться',
  // },
  {
    word: 'נרטב',
    pronouncing: 'ниртав',
    translation: 'промокать',
  },
  // {
  //   word: 'נשלח',
  //   pronouncing: 'нишлах',
  //   translation: 'быть отправленным',
  // },
  // {
  //   word: 'חירש',
  //   pronouncing: 'хэйрэш',
  //   translation: 'глухой',
  // },
  // {
  //   word: 'אילם',
  //   pronouncing: 'илэм',
  //   translation: 'немой',
  // },
  // {
  //   word: 'ביקור',
  //   pronouncing: 'бикур',
  //   translation: 'визит',
  // },
  // {
  //   word: 'הזמנה',
  //   pronouncing: 'хазмана',
  //   translation: 'приглашение',
  // },
  // {
  //   word: 'שמיעה',
  //   pronouncing: 'шмия',
  //   translation: 'слух',
  // },
  {
    word: 'להתלונן',
    pronouncing: 'лэхитлонэн',
    translation: 'жаловаться',
  },
  // {
  //   word: 'לחסוך',
  //   pronouncing: 'лахсох',
  //   translation: 'сэкономить / сберечь',
  // },
  {
    word: 'להוציא',
    pronouncing: 'лэхоци',
    translation: 'снять / забрать',
  },
  {
    word: 'להתקיים',
    pronouncing: 'лэхиткайем',
    translation: 'существовать / состояться',
  },
  // {
  //   word: 'נוסף',
  //   pronouncing: 'носаф',
  //   translation: 'дополнительный',
  // },
  {
    word: 'להודיע',
    pronouncing: 'лэходиа',
    translation: 'сообщать / информировать',
  },
  {
    word: 'לשפר',
    pronouncing: 'лэшапэр',
    translation: 'улучшать / исправлять',
  },
  // {
  //   word: 'מסרון',
  //   pronouncing: 'мэсарон',
  //   translation: 'сообщение / смс',
  // },
  // {
  //   word: 'לקבוע',
  //   pronouncing: 'ликбоа',
  //   translation: 'назначать / определять',
  // },
  // {
  //   word: 'פנימה',
  //   pronouncing: 'пнима',
  //   translation: 'внутрь',
  // },
  {
    word: 'כיוון',
    pronouncing: 'киван',
    translation: 'направление / курс',
  },
  // {
  //   word: 'כתום',
  //   pronouncing: 'кэтом',
  //   translation: 'оранжевый',
  // },
  // {
  //   word: 'סגול',
  //   pronouncing: 'саголь',
  //   translation: 'фиолетовый',
  // },
  // {
  //   word: 'בוץ',
  //   pronouncing: 'боц',
  //   translation: 'грязь',
  // },
  // {
  //   word: 'אפור',
  //   pronouncing: 'афор',
  //   translation: 'серый',
  // },
  // {
  //   word: 'למדוד',
  //   pronouncing: 'лимдод',
  //   translation: 'мерять',
  // },
  // {
  //   word: 'מידי',
  //   pronouncing: 'мидай',
  //   translation: 'слишком',
  // },
  // {
  //   word: 'ריבית',
  //   pronouncing: 'рибит',
  //   translation: 'проценты / ставки',
  // },
  // {
  //   word: 'להחליף',
  //   pronouncing: 'лэхахлиф',
  //   translation: 'заменять',
  // },
  // {
  //   word: 'החלפה',
  //   pronouncing: 'хахлафа',
  //   translation: 'замена',
  // },
  {
    word: 'סיגנון',
    pronouncing: 'сигнон',
    translation: 'стиль',
  },
  {
    word: 'גל',
    pronouncing: 'галь',
    translation: 'волна',
  },
  {
    word: 'תחזית',
    pronouncing: 'тахзит',
    translation: 'прогноз',
  },
  {
    word: 'יער',
    pronouncing: 'яар',
    translation: 'лес',
  },
  // {
  //   word: 'שקר',
  //   pronouncing: 'шэкэр',
  //   translation: 'ложь',
  // },
  // {
  //   word: 'להחזיר',
  //   pronouncing: 'лэхахзир',
  //   translation: 'возвращать',
  // },
  // {
  //   word: 'בחינם',
  //   pronouncing: 'бэхинам',
  //   translation: 'бесплатно',
  // },
  // {
  //   word: 'תלוי ב',
  //   pronouncing: 'талуй бэ',
  //   translation: 'в зависимости от / зависит от',
  // },
  {
    word: 'לנגוע',
    pronouncing: 'лингоа',
    translation: 'трогать / касаться',
  },
  // {
  //   word: 'איכות',
  //   pronouncing: 'эйхут',
  //   translation: 'качество',
  // },
  // {
  //   word: 'חוות דעת',
  //   pronouncing: 'хават дат',
  //   translation: 'отзыв / рекомендация',
  // },
  // {
  //   word: 'להידבק',
  //   pronouncing: 'лэхидбак',
  //   translation: 'заражаться',
  // },
  {
    word: 'לשטוף',
    pronouncing: 'лиштоф',
    translation: 'помыть',
  },
  // {
  //   word: 'שיעול',
  //   pronouncing: 'шиуль',
  //   translation: 'кашель',
  // },
  // {
  //   word: 'קושי',
  //   pronouncing: 'коши',
  //   translation: 'трудности',
  // },
  {
    word: 'סימן',
    pronouncing: 'симан',
    translation: 'знак / признак / симптом',
  },
  // {
  //   word: 'להתחמם',
  //   pronouncing: 'лэхитхамэм',
  //   translation: 'нагреваться',
  // },
  // {
  //   word: 'להתקרר',
  //   pronouncing: 'лэхиткарэр',
  //   translation: 'охлаждаться / остывать',
  // },
  // {
  //   word: 'התחממות',
  //   pronouncing: 'хитхамэмут',
  //   translation: 'потепление',
  // },
  // {
  //   word: 'מקרה',
  //   pronouncing: 'микрэ',
  //   translation: 'случай / дело',
  // },
  {
    word: 'אולם',
    pronouncing: 'улам',
    translation: 'зал',
  },
  // {
  //   word: 'מחוץ ל',
  //   pronouncing: 'мэхуц лэ',
  //   translation: 'запределами / вне',
  // },
  {
    word: 'לזרום',
    pronouncing: 'лизром',
    translation: 'течь',
  },
  {
    word: 'צינור',
    pronouncing: 'цинор',
    translation: 'труба',
  },
  // {
  //   word: 'לחתום',
  //   pronouncing: 'лахтом',
  //   translation: 'подписывать',
  // },
  {
    word: 'להפקיד',
    pronouncing: 'лэхафкид',
    translation: 'внести / пополнить',
  },
  {
    word: 'למשוך',
    pronouncing: 'лимшох',
    translation: 'вытащить / снять',
  },
  {
    word: 'להעביר',
    pronouncing: 'лэхавир',
    translation: 'перевести / передать',
  },
  // {
  //   word: 'הגיוני',
  //   pronouncing: 'хигьони',
  //   translation: 'разумный / логичный',
  // },
  // {
  //   word: 'הלוואה',
  //   pronouncing: 'халваа',
  //   translation: 'ссуда / займ',
  // },
  // {
  //   word: 'להודות',
  //   pronouncing: 'лэходот',
  //   translation: 'благодарить',
  // },
  // {
  //   word: 'חיסכון',
  //   pronouncing: 'хисахон',
  //   translation: 'экономия / спасение / сбережение',
  // },
  {
    word: 'להמתין',
    pronouncing: 'лэхамтин',
    translation: 'ждать / дожидаться',
  },
  // {
  //   word: 'פעולה',
  //   pronouncing: 'пэула',
  //   translation: 'операция / действие',
  // },
  {
    word: 'עמלה',
    pronouncing: 'амла',
    translation: 'комиссия / комиссионные',
  },
  {
    word: 'לדחות',
    pronouncing: 'лидхот',
    translation: 'отложить / перенести',
  },
  {
    word: 'אזרח',
    pronouncing: 'эзрах',
    translation: 'гражданин',
  },
  {
    word: 'אמנם',
    pronouncing: 'амнам',
    translation: 'хотя',
  },
  // {
  //   word: 'מולדת',
  //   pronouncing: 'молэдэт',
  //   translation: 'родина',
  // },
  // {
  //   word: 'מהירות',
  //   pronouncing: 'мэхирут',
  //   translation: 'скорость',
  // },
  {
    word: 'זהירות',
    pronouncing: 'зхирут',
    translation: 'осторожность / осторожно',
  },
  {
    word: 'צער',
    pronouncing: 'цаар',
    translation: 'горе / печаль',
  },
  // {
  //   word: 'לצערי',
  //   pronouncing: 'лэцари',
  //   translation: 'к сожалению',
  // },
  // {
  //   word: 'מושג',
  //   pronouncing: 'мусаг',
  //   translation: 'представление / понятие',
  // },
  {
    word: 'להתייחס',
    pronouncing: 'лэхитъяхэс',
    translation: 'обращаться / относиться',
  },
  {
    word: 'בהלה',
    pronouncing: 'бэхала',
    translation: 'паника',
  },
  {
    word: 'המון',
    pronouncing: 'хамон',
    translation: 'куча / множество',
  },
  {
    word: 'להצתרף',
    pronouncing: 'лэхицтарэф',
    translation: 'вливаться / присоединяться',
  },
  // {
  //   word: 'לאסוף',
  //   pronouncing: 'лээсоф',
  //   translation: 'собирать / забирать',
  // },
  // {
  //   word: 'ארגון',
  //   pronouncing: 'иргун',
  //   translation: 'организация',
  // },
  {
    word: 'מעטפה',
    pronouncing: 'маатафа',
    translation: 'конверт',
  },
  {
    word: 'לשכנע',
    pronouncing: 'лэшахнэа',
    translation: 'убеждать',
  },
  // {
  //   word: 'בעיקר',
  //   pronouncing: 'бэикар',
  //   translation: 'в основном / главным образом',
  // },
  // {
  //   word: 'משופץ',
  //   pronouncing: 'мэшупац',
  //   translation: 'ремонтированный',
  // },
  // {
  //   word: 'נסיעה',
  //   pronouncing: 'нэсия',
  //   translation: 'поездка',
  // },
  // {
  //   word: 'בקשה',
  //   pronouncing: 'бакаша',
  //   translation: 'просьба',
  // },
  {
    word: 'הסכם',
    pronouncing: 'хэскэм',
    translation: 'соглашение',
  },
  {
    word: 'החלטה',
    pronouncing: 'хахлата',
    translation: 'решение',
  },
  // {
  //   word: 'ראיון',
  //   pronouncing: 'рэайон',
  //   translation: 'интервью',
  // },
  {
    word: 'הבטחה',
    pronouncing: 'хавтэха',
    translation: 'обещание',
  },
  {
    word: 'לצעוק',
    pronouncing: 'лицок',
    translation: 'кричать',
  },
  // {
  //   word: 'לשפץ',
  //   pronouncing: 'лешапэц',
  //   translation: 'переделать / отремонтировать',
  // },
  {
    word: 'לאשר',
    pronouncing: 'лэашэр',
    translation: 'подтвердить / одобрить',
  },
  // {
  //   word: 'מן',
  //   pronouncing: 'мин',
  //   translation: 'из',
  // },
  {
    word: 'לנצח',
    pronouncing: 'лэнацэах',
    translation: 'навсегда',
  },
  {
    word: 'נדמה',
    pronouncing: 'нидмэ',
    translation: 'кажется',
  },
  {
    word: 'נשבע',
    pronouncing: 'нишва',
    translation: 'клясться',
  },
  {
    word: 'תוספת',
    pronouncing: 'тосэфэт',
    translation: 'дополнение / прибавка',
  },
  // {
  //   word: 'לשכב',
  //   pronouncing: 'лишкав',
  //   translation: 'лежать / переспать',
  // },
  // {
  //   word: 'לנהל',
  //   pronouncing: 'лэнахэль',
  //   translation: 'управлять',
  // },
  {
    word: 'לרכל',
    pronouncing: 'лэрахэль',
    translation: 'сплетничать',
  },
  {
    word: 'ידוע',
    pronouncing: 'ядуа',
    translation: 'известный',
  },
  {
    word: 'אוסר',
    pronouncing: 'осэр',
    translation: 'запрещать',
  },
  // {
  //   word: 'בכל זאת',
  //   pronouncing: 'бэхоль зот',
  //   translation: 'несмотря на это',
  // },
  {
    word: 'סובל',
    pronouncing: 'совэль',
    translation: 'страдать',
  },
  {
    word: 'נכשל',
    pronouncing: 'нихшаль',
    translation: 'проваливаться / терпеть неудачу',
  },
  // {
  //   word: 'ממד',
  //   pronouncing: 'мамад',
  //   translation: 'комната безопасности',
  // },
  {
    word: 'מרוהט',
    pronouncing: 'мэрухат',
    translation: 'меблированный',
  },
  // {
  //   word: 'עניין',
  //   pronouncing: 'иньян',
  //   translation: 'интерес',
  // },
  // {
  //   word: 'מודעה',
  //   pronouncing: 'модаа',
  //   translation: 'объявление',
  // },
  // {
  //   word: 'מיקום',
  //   pronouncing: 'микум',
  //   translation: 'местонахождение / расположение',
  // },
  // {
  //   word: 'כניסה',
  //   pronouncing: 'книса',
  //   translation: 'вход',
  // },
  {
    word: 'מייד',
    pronouncing: 'мияд',
    translation: 'немедленно / сразу',
  },
  // {
  //   word: 'צביעה',
  //   pronouncing: 'цвия',
  //   translation: 'покраска',
  // },
  {
    word: 'להוריד',
    pronouncing: 'лэхорид',
    translation: 'убрать / опустить',
  },
  {
    word: 'גמיש',
    pronouncing: 'гамиш',
    translation: 'гибкий',
  },
  // {
  //   word: 'לשנות',
  //   pronouncing: 'лэшанот',
  //   translation: 'менять',
  // },
  {
    word: 'להרוויח',
    pronouncing: 'лэхарвиах',
    translation: 'зарабатывать',
  },
  {
    word: 'התמיכה',
    pronouncing: 'хатмиха',
    translation: 'поддержка',
  },
  {
    word: 'פעיל',
    pronouncing: 'пайиль',
    translation: 'активный / действующий',
  },
  {
    word: 'תשומת',
    pronouncing: 'тэссумэт',
    translation: 'внимание',
  },
  // {
  //   word: 'הבדל',
  //   pronouncing: 'хэвдэль',
  //   translation: 'разница / различие',
  // },
  {
    word: 'עצה',
    pronouncing: 'аца',
    translation: 'совет',
  },
  {
    word: 'עמוד',
    pronouncing: 'амуд',
    translation: 'страница',
  },
  // {
  //   word: 'טופס',
  //   pronouncing: 'тофэс',
  //   translation: 'форма / бланк',
  // },
  {
    word: 'תרמיל',
    pronouncing: 'тармиль',
    translation: 'рюкзак',
  },
  {
    word: 'מתבסס',
    pronouncing: 'митвасэс',
    translation: 'основываться',
  },
  // {
  //   word: 'כללי',
  //   pronouncing: 'клали',
  //   translation: 'правила',
  // },
  // {
  //   word: 'קבוע',
  //   pronouncing: 'квуа',
  //   translation: 'постоянный',
  // },
  {
    word: 'ירח',
    pronouncing: 'ярэах',
    translation: 'луна',
  },
  // {
  //   word: 'להוסיף',
  //   pronouncing: 'лэхосиф',
  //   translation: 'добавлять',
  // },
  {
    word: 'לפגוע',
    pronouncing: 'лифгоа',
    translation: 'причинять вред',
  },
  {
    word: 'לערוך',
    pronouncing: 'лаарох',
    translation: 'устраивать / проводить / накрывать',
  },
  // {
  //   word: 'קבלת קהל',
  //   pronouncing: 'кабалат кахаль',
  //   translation: 'рабочее время',
  // },
  // {
  //   word: 'מוכן',
  //   pronouncing: 'мухан',
  //   translation: 'быть готовым',
  // },
  {
    word: 'מסתובב',
    pronouncing: 'мистовэв',
    translation: 'тусоваться',
  },
  // {
  //   word: 'כיכר',
  //   pronouncing: 'кикар',
  //   translation: 'площадь',
  // },
  // {
  //   word: 'צומת',
  //   pronouncing: 'цомэт',
  //   translation: 'перекресток',
  // },
  // {
  //   word: 'ימינה',
  //   pronouncing: 'ямина',
  //   translation: 'направо',
  // },
  // {
  //   word: 'שמאלה',
  //   pronouncing: 'смола',
  //   translation: 'налево',
  // },
  // {
  //   word: 'קדימה',
  //   pronouncing: 'кадима',
  //   translation: 'вперед',
  // },
  // {
  //   word: 'אחורה',
  //   pronouncing: 'ахора',
  //   translation: 'назад',
  // },
  // {
  //   word: 'בינתיים',
  //   pronouncing: 'бэентаим',
  //   translation: 'тем временем / а пока',
  // },
  {
    word: 'שונא',
    pronouncing: 'сонэ',
    translation: 'ненавидеть',
  },
  {
    word: 'עבה',
    pronouncing: 'авэ',
    translation: 'толстый',
  },
  // {
  //   word: 'דק',
  //   pronouncing: 'дак',
  //   translation: 'тонкий',
  // },
  {
    word: 'מתרגם',
    pronouncing: 'метаргэм',
    translation: 'переводить',
  },
  {
    word: 'המתנה',
    pronouncing: 'хамтана',
    translation: 'ожидание',
  },
  {
    word: 'בחזרה',
    pronouncing: 'бэхазара',
    translation: 'обратно',
  },
  {
    word: 'לכבס',
    pronouncing: 'лэхабэс',
    translation: 'стирать',
  },
  {
    word: 'מבצע',
    pronouncing: 'мэвацэа',
    translation: 'выполнять / совершать',
  },
  {
    word: 'לוחש',
    pronouncing: 'лохэш',
    translation: 'шептать',
  },
  {
    word: 'לנשום',
    pronouncing: 'линшом',
    translation: 'передохнуть / подышать',
  },
  // {
  //   word: 'אכפת לי / לא אכפת לי',
  //   pronouncing: 'ихпат ли / ло ихпат ли',
  //   translation: 'мне важно / мне все равно',
  // },
  // {
  //   word: 'בקיצור',
  //   pronouncing: 'бэкицур',
  //   translation: 'короче говоря / в общем',
  // },
  {
    word: 'חידוש',
    pronouncing: 'хидуш',
    translation: 'обновление / новшество',
  },
  {
    word: 'בדור',
    pronouncing: 'бадор',
    translation: 'поколение',
  },
  {
    word: 'עיסוק',
    pronouncing: 'исок',
    translation: 'занятие / профессия',
  },
  {
    word: 'לשם מה',
    pronouncing: 'лашэм ма',
    translation: 'для чего',
  },
  // {
  //   word: 'משלוח',
  //   pronouncing: 'мишлоах',
  //   translation: 'доставка',
  // },
  {
    word: 'שליח',
    pronouncing: 'шалиах',
    translation: 'курьер',
  },
  {
    word: 'במסירות',
    pronouncing: 'бамэсирут',
    translation: 'самоотверженно',
  },
  {
    word: 'אופניים',
    pronouncing: 'офанаим',
    translation: 'велосипед',
  },
  // {
  //   word: 'שקית',
  //   pronouncing: 'сакит',
  //   translation: 'пакет',
  // },
  // {
  //   word: 'תירס',
  //   pronouncing: 'тирас',
  //   translation: 'кукуруза',
  // },
  {
    word: 'מרשם',
    pronouncing: 'миршам',
    translation: 'рецепт',
  },
  {
    word: 'נמאס',
    pronouncing: 'нимас',
    translation: 'надоело',
  },
  {
    word: 'נחשב',
    pronouncing: 'нэхшав',
    translation: 'считается',
  },
  {
    word: 'שפתיים',
    pronouncing: 'сфатаим',
    translation: 'губы',
  },
  // {
  //   word: 'מבט',
  //   pronouncing: 'мават',
  //   translation: 'взгляд',
  // },
  {
    word: 'תמים',
    pronouncing: 'тамим',
    translation: 'наивный',
  },
  // {
  //   word: 'כיצד',
  //   pronouncing: 'кэйцад',
  //   translation: 'как',
  // },
  // {
  //   word: 'במקום',
  //   pronouncing: 'бимком',
  //   translation: 'вместо',
  // },
  // {
  //   word: 'לדאוג',
  //   pronouncing: 'лидог',
  //   translation: 'беспокоиться',
  // },
  {
    word: 'תקופה',
    pronouncing: 'ткуфа',
    translation: 'период',
  },
  {
    word: 'בטאבים',
    pronouncing: 'батаавим',
    translation: 'вкладки',
  },
  {
    word: 'גישה',
    pronouncing: 'гиша',
    translation: 'подход, отношение',
  },
  {
    word: 'לעתים',
    pronouncing: 'лэитим',
    translation: 'иногда',
  },
  {
    word: 'מדמיין',
    pronouncing: 'мэдамиэн',
    translation: 'представлять',
  },
  {
    word: 'חווית',
    pronouncing: 'хавият',
    translation: 'опыт',
  },
  {
    word: 'אין טעם',
    pronouncing: 'эйн таам',
    translation: 'нет смысла',
  },
  {
    word: 'לשבור',
    pronouncing: 'лишбор',
    translation: 'ломать / разбивать',
  },
  // {
  //   word: 'גרוע',
  //   pronouncing: 'гаруа',
  //   translation: 'ужасный / отвратительный',
  // },
  {
    word: 'להישבר',
    pronouncing: 'лэхишавэр',
    translation: 'ломаться / разбиваться',
  },
  // {
  //   word: 'רסיסים',
  //   pronouncing: 'рэсисим',
  //   translation: 'осколки',
  // },
  {
    word: 'להתקל',
    pronouncing: 'лэхитакэль',
    translation: 'стокнуться / натолкнуться',
  },
  {
    word: 'בטירוף',
    pronouncing: 'батэруф',
    translation: 'безумие',
  },
  {
    word: 'הזדמנויות',
    pronouncing: 'хиздамнует',
    translation: 'возможности',
  },
  // {
  //   word: 'חשק',
  //   pronouncing: 'хэшэк',
  //   translation: 'желание',
  // },
  {
    word: 'מיומנות',
    pronouncing: 'миоманут',
    translation: 'талант / мастерство',
  },
  {
    word: 'מסלול',
    pronouncing: 'маслуль',
    translation: 'курс / маршрут',
  },
  {
    word: 'מבנה',
    pronouncing: 'мивнэ',
    translation: 'строение / структура',
  },
  {
    word: 'מסוים',
    pronouncing: 'мэсуям',
    translation: 'конкретный / определенный',
  },
  {
    word: 'מרצה',
    pronouncing: 'марцэ',
    translation: 'преподаватель',
  },
  {
    word: 'ידע',
    pronouncing: 'яда',
    translation: 'знания',
  },
  {
    word: 'הערות',
    pronouncing: 'хаарот',
    translation: 'заметки',
  },
  {
    word: 'משובים',
    pronouncing: 'мэшувим',
    translation: 'советы / отклик',
  },
  // {
  //   word: 'מפגש',
  //   pronouncing: 'мифгаш',
  //   translation: 'встреча',
  // },
  {
    word: 'קצב',
    pronouncing: 'кэцэв',
    translation: 'ритм',
  },
  {
    word: 'מפתיע',
    pronouncing: 'мафтиа',
    translation: 'удивлять',
  },
  {
    word: 'להפוך',
    pronouncing: 'лаафох',
    translation: 'стать / превратиться',
  },
  {
    word: 'להוביל',
    pronouncing: 'лэховиль',
    translation: 'проводить / управлять',
  },
  {
    word: 'השתתפות',
    pronouncing: 'хиштатфут',
    translation: 'участие',
  },
  // {
  //   word: 'דורש',
  //   pronouncing: 'дорэш',
  //   translation: 'требовать',
  // },
  {
    word: 'נושא',
    pronouncing: 'носэ',
    translation: 'тема / предмет',
  },
  {
    word: 'מעבר',
    pronouncing: 'маавар',
    translation: 'кроме / помимо / проход',
  },
  {
    word: 'לסילבוס',
    pronouncing: 'лэсильбус',
    translation: 'учебная программа',
  },
  {
    word: 'מועיל',
    pronouncing: 'моиль',
    translation: 'полезный',
  },
  {
    word: 'לפתור',
    pronouncing: 'лифтор',
    translation: 'решить / уладить',
  },
  {
    word: 'מסגרת',
    pronouncing: 'мисгэрэт',
    translation: 'рамка',
  },
  // {
  //   word: 'אחלה',
  //   pronouncing: 'ахла',
  //   translation: 'отлично',
  // },
  {
    word: 'מקליד',
    pronouncing: 'миклид',
    translation: 'печатать / набирать',
  },
  {
    word: 'חידה',
    pronouncing: 'хида',
    translation: 'загадка',
  },
  {
    word: 'תכנות',
    pronouncing: 'тихнут',
    translation: 'программирование',
  },
  {
    word: 'אקראי',
    pronouncing: 'акраи',
    translation: 'случайный',
  },
  // {
  //   word: 'הופך',
  //   pronouncing: 'хофэх',
  //   translation: 'превращать',
  // },
  {
    word: 'שווה',
    pronouncing: 'шав',
    translation: 'стоит / заслуживает',
  },
  {
    word: 'טווח',
    pronouncing: 'твах',
    translation: 'диапазон / спектр',
  },
  {
    word: 'מזמן',
    pronouncing: 'мизман',
    translation: 'давно',
  },
  {
    word: 'אתגר',
    pronouncing: 'этгар',
    translation: 'вызов / испытание',
  },
  {
    word: 'נתקע',
    pronouncing: 'нитка',
    translation: 'застревать',
  },
  {
    word: 'קישור',
    pronouncing: 'кишур',
    translation: 'ссылка',
  },
  {
    word: 'הקלטה',
    pronouncing: 'хаклата',
    translation: 'запись / пленка',
  },
  {
    word: 'כפתור',
    pronouncing: 'кафтор',
    translation: 'кнопка',
  },
  {
    word: 'מסך',
    pronouncing: 'масах',
    translation: 'экран',
  },
  {
    word: 'שקוף',
    pronouncing: 'шакуф',
    translation: 'прозрачный / очевидный',
  },
  // {
  //   word: 'צורה',
  //   pronouncing: 'цура',
  //   translation: 'форма / облик',
  // },
  {
    word: 'מוחק',
    pronouncing: 'мохэк',
    translation: 'удалять',
  },
  {
    word: 'פריט',
    pronouncing: 'парит',
    translation: 'пункт / элемент',
  },
  {
    word: 'שילוב',
    pronouncing: 'шилув',
    translation: 'комбинация / сочетание',
  },
  {
    word: 'אירוע',
    pronouncing: 'эйруа',
    translation: 'событие',
  },
  {
    word: 'טיפוס',
    pronouncing: 'типус',
    translation: 'тип',
  },
  {
    word: 'מחובר',
    pronouncing: 'мэхубар',
    translation: 'быть связанным / подключенным',
  },
  {
    word: 'רשת',
    pronouncing: 'рэшэт',
    translation: 'сеть',
  },
  {
    word: 'הגדרות',
    pronouncing: 'хагдарот',
    translation: 'настройки / конфигурации',
  },
  {
    word: 'סקר',
    pronouncing: 'сэкэр',
    translation: 'опрос',
  },
  {
    word: 'ערך',
    pronouncing: 'эрэх',
    translation: 'значение / ценность',
  },
  {
    word: 'ברירת מחדל',
    pronouncing: 'брират мэхдаль',
    translation: 'выбор по умолчанию',
  },
  {
    word: 'יישום',
    pronouncing: 'исум',
    translation: 'приложение',
  },
  // {
  //   word: 'אופן הבא',
  //   pronouncing: 'офэн хабаа',
  //   translation: 'следующим образом',
  // },
  {
    word: 'מחזיק',
    pronouncing: 'махзик',
    translation: 'держать',
  },
  // {
  //   word: 'הנה',
  //   pronouncing: 'хинэ',
  //   translation: 'вот',
  // },
  // {
  //   word: 'קובץ',
  //   pronouncing: 'ковэц',
  //   translation: 'файл',
  // },
  {
    word: 'שגיאה',
    pronouncing: 'шгиа',
    translation: 'ошибка',
  },
  {
    word: 'הערה',
    pronouncing: 'хараа',
    translation: 'комментарий',
  },
  {
    word: 'להגדיר',
    pronouncing: 'лэхагдир',
    translation: 'настроить / определить',
  },
  {
    word: 'קלט',
    pronouncing: 'кэлэт',
    translation: 'ввод / инпут',
  },
  {
    word: 'לכלול',
    pronouncing: 'лихлоль',
    translation: 'включать в себя',
  },
  {
    word: 'הדרגתית',
    pronouncing: 'хадрагатит',
    translation: 'постепенно',
  },
  // {
  //   word: 'לגרום',
  //   pronouncing: 'лигром',
  //   translation: 'заставлять',
  // },
  {
    word: 'לדלג',
    pronouncing: 'лэдалэг',
    translation: 'пропускать',
  },
  {
    word: 'לעקוב',
    pronouncing: 'лааков',
    translation: 'отследить',
  },
  {
    word: 'הדיון',
    pronouncing: 'хадиун',
    translation: 'дебаты / обсуждение',
  },
  {
    word: 'היכולת',
    pronouncing: 'хаехолэт',
    translation: 'способность',
  },
  {
    word: 'מחרוזת',
    pronouncing: 'махарозэт',
    translation: 'строка',
  },
  {
    word: 'מימוש',
    pronouncing: 'мимуш',
    translation: 'реализация / имплементация',
  },
  {
    word: 'לטעון',
    pronouncing: 'лэтаон',
    translation: 'утверждать / грузить',
  },
  {
    word: 'מופיע',
    pronouncing: 'мофиа',
    translation: 'появляться',
  },
  {
    word: 'מטעה',
    pronouncing: 'матээ',
    translation: 'быть обманчивым / подводить',
  },
  // {
  //   word: 'יוצר',
  //   pronouncing: 'йоцэр',
  //   translation: 'создавать',
  // },
  // {
  //   word: 'מערכת',
  //   pronouncing: 'марэхэт',
  //   translation: 'система',
  // },
  {
    word: 'מתריע',
    pronouncing: 'матриа',
    translation: 'сигнализировать',
  },
  {
    word: 'מגדיר',
    pronouncing: 'магдир',
    translation: 'определять',
  },
  // {
  //   word: 'ברור',
  //   pronouncing: 'барур',
  //   translation: 'ясно / очевидно',
  // },
  {
    word: 'מצפה',
    pronouncing: 'мэцапэ',
    translation: 'ждать',
  },
  {
    word: 'מעדכן',
    pronouncing: 'мэадкэн',
    translation: 'обновлять',
  },
  {
    word: 'יצירת',
    pronouncing: 'яцират',
    translation: 'создание',
  },
  {
    word: 'עשוי',
    pronouncing: 'асуй',
    translation: 'сделанный',
  },
  // {
  //   word: 'להיראות',
  //   pronouncing: 'лэхираот',
  //   translation: 'выглядеть / казаться',
  // },
  {
    word: 'בתור',
    pronouncing: 'бэтор',
    translation: 'в качестве',
  },
  {
    word: 'מציג',
    pronouncing: 'мациг',
    translation: 'представлять / показывать',
  },
  {
    word: 'תומך',
    pronouncing: 'томэх',
    translation: 'поддерживать',
  },
  {
    word: 'הגדרת',
    pronouncing: 'хагдэрэт',
    translation: 'настройка / установка',
  },
  {
    word: 'חיצוני',
    pronouncing: 'хицони',
    translation: 'внешний',
  },
  {
    word: 'לעדכן',
    pronouncing: 'лэадкэн',
    translation: 'обновить / проинформировать',
  },
  {
    word: 'רקע',
    pronouncing: 'рэка',
    translation: 'фон',
  },
  {
    word: 'ריבוע',
    pronouncing: 'рибуа',
    translation: 'квадрат',
  },
  {
    word: 'מקיף',
    pronouncing: 'макиф',
    translation: 'окружать',
  },
  {
    word: 'לאפשר',
    pronouncing: 'лэафшэр',
    translation: 'окружать',
  },
  {
    word: 'לחיצה',
    pronouncing: 'лэхица',
    translation: 'клик',
  },
  {
    word: 'מאפיין',
    pronouncing: 'мэафьен',
    translation: 'свойство',
  },
  {
    word: 'משתנה',
    pronouncing: 'мэштанэ',
    translation: 'переменная',
  },
  {
    word: 'יצירתי',
    pronouncing: 'ецирати',
    translation: 'креативный',
  },
  {
    word: 'מרחב',
    pronouncing: 'мэрхав',
    translation: 'пространство',
  },
  {
    word: 'מניח',
    pronouncing: 'мэниах',
    translation: 'считать / думать',
  },
  {
    word: 'להתבלבל',
    pronouncing: 'лэхитбальбэль',
    translation: 'запутаться',
  },
  // {
  //   word: 'כולל',
  //   pronouncing: 'колэль',
  //   translation: 'включать в себя',
  // },
  {
    word: 'התקנת',
    pronouncing: 'хитканэт',
    translation: 'установка',
  },
  {
    word: 'להתקין',
    pronouncing: 'лэхаткин',
    translation: 'устанавливать',
  },
  {
    word: 'בתמורה',
    pronouncing: 'битмура',
    translation: 'взамен',
  },
  {
    word: 'מספק',
    pronouncing: 'мэсапэк',
    translation: 'предоставлять',
  },
  {
    word: 'מכיל',
    pronouncing: 'мэхиль',
    translation: 'содержать / вмещать',
  },
  {
    word: 'מאגר',
    pronouncing: 'маагар',
    translation: 'запас / репозиторий',
  },
  {
    word: 'לשלב',
    pronouncing: 'лэшалэв',
    translation: 'совместить / интегрировать',
  },
  {
    word: 'לייצר',
    pronouncing: 'лэяцэр',
    translation: 'создавать / сгенерировать',
  },
  {
    word: 'תיקיה',
    pronouncing: 'тикэя',
    translation: 'папка',
  },
  // {
  //   word: 'יחס',
  //   pronouncing: 'яхас',
  //   translation: 'отношение',
  // },
  {
    word: 'כלומר',
    pronouncing: 'кэломар',
    translation: 'то есть',
  },
  // {
  //   word: 'מומלץ',
  //   pronouncing: 'мумлац',
  //   translation: 'рекомендуется',
  // },
  {
    word: 'עדיף',
    pronouncing: 'адиф',
    translation: 'предпочтительно',
  },
  {
    word: 'מוודא',
    pronouncing: 'мэвадэ',
    translation: 'проверить / убедиться',
  },
  // {
  //   word: 'גנרי',
  //   pronouncing: 'гэнэри',
  //   translation: 'универсальный',
  // },
  {
    word: 'צפוי',
    pronouncing: 'цафуй',
    translation: 'предсказуемый',
  },
  // {
  //   word: 'להישמר',
  //   pronouncing: 'лэхишамэр',
  //   translation: 'храниться / поддерживаться',
  // },
  {
    word: 'תיעוד',
    pronouncing: 'тиуд',
    translation: 'запись',
  },
  {
    word: 'ספרון',
    pronouncing: 'сифрон',
    translation: 'брошюра / пособие',
  },
  {
    word: 'תבנית',
    pronouncing: 'тавнит',
    translation: 'шаблон',
  },
  {
    word: 'חיבור',
    pronouncing: 'хибур',
    translation: 'связь / соединение',
  },
  // {
  //   word: 'אינספור',
  //   pronouncing: 'эйнспор',
  //   translation: 'бесчисленное множество',
  // },
  {
    word: 'להיתקל',
    pronouncing: 'лэхитакэль',
    translation: 'сталкиваться / встречаться',
  },
  // {
  //   word: 'הסבר',
  //   pronouncing: 'эсбэр',
  //   translation: 'объяснение',
  // },
  // {
  //   word: 'משאיר',
  //   pronouncing: 'машир',
  //   translation: 'оставлять',
  // },
  {
    word: 'מוריד',
    pronouncing: 'морид',
    translation: 'снимать',
  },
  {
    word: 'נוער',
    pronouncing: 'ноар',
    translation: 'молодежь',
  },
  // {
  //   word: 'מצטרף',
  //   pronouncing: 'мицтарэф',
  //   translation: 'присоединяться',
  // },
  // {
  //   word: 'נרשם',
  //   pronouncing: 'ниршам',
  //   translation: 'записаться / зарегистрироваться',
  // },
  {
    word: 'מוכרח',
    pronouncing: 'мухрэах',
    translation: 'быть вынужденным',
  },
  {
    word: 'מעריך',
    pronouncing: 'маарих',
    translation: 'ценить',
  },
  {
    word: 'שתף',
    pronouncing: 'шатэф',
    translation: 'делиться / шарить',
  },
  {
    word: 'מפקיר',
    pronouncing: 'мафкир',
    translation: 'кидать / бросать',
  },
  {
    word: 'שיטה',
    pronouncing: 'шита',
    translation: 'метод / система / тактика',
  },
  {
    word: 'פקודה',
    pronouncing: 'пкуда',
    translation: 'команда / приказ',
  },
  {
    word: 'גירסה',
    pronouncing: 'гирса',
    translation: 'версия',
  },
  {
    word: 'תומך',
    pronouncing: 'томэх',
    translation: 'поддерживать',
  },
  {
    word: 'בסקרים',
    pronouncing: 'бэскарим',
    translation: 'по опросам',
  },
  {
    word: 'גישה',
    pronouncing: 'гиша',
    translation: 'подход / отношение',
  },
  {
    word: 'מקור',
    pronouncing: 'макор',
    translation: 'источник',
  },
  {
    word: 'ביצועים',
    pronouncing: 'бицуим',
    translation: 'производительность',
  },
  {
    word: 'לדלג',
    pronouncing: 'лэдалэг',
    translation: 'пропустить / опустить',
  },
  {
    word: 'מורכב',
    pronouncing: 'муркав',
    translation: 'сложный / состоять (из)',
  },
  {
    word: 'מפיל',
    pronouncing: 'мафиль',
    translation: 'ронять',
  },
  {
    word: 'מנצח',
    pronouncing: 'мэнацэах',
    translation: 'победитель',
  },
  {
    word: 'צורך',
    pronouncing: 'цорэх',
    translation: 'необходимость',
  },
  // {
  //   word: 'באמצעות',
  //   pronouncing: 'бээмцаут',
  //   translation: 'с помощью / при помощи',
  // },
  {
    word: 'חלוקה',
    pronouncing: 'халука',
    translation: 'деление / дробление',
  },
  {
    word: 'להפעיל',
    pronouncing: 'лэхафиль',
    translation: 'активировать / включить',
  },
  {
    word: 'תיבת',
    pronouncing: 'тиват',
    translation: 'коробка / бокс',
  },
  {
    word: 'מושפע',
    pronouncing: 'мушпа',
    translation: 'зависеть / находиться под влиянием',
  },
  {
    word: 'לצמצם',
    pronouncing: 'лэцамцэм',
    translation: 'сократить / уменьшить',
  },
  {
    word: 'השוואה',
    pronouncing: 'ашваа',
    translation: 'сравнение',
  },
  {
    word: 'רכיב',
    pronouncing: 'рэхив',
    translation: 'элемент / компонент',
  },
  {
    word: 'מנגנון',
    pronouncing: 'манганон',
    translation: 'механизм',
  },
  {
    word: 'תחילה',
    pronouncing: 'тхила',
    translation: 'сначала / сперва',
  },
  {
    word: 'להסיק',
    pronouncing: 'лэхасик',
    translation: 'заключить / сделать вывод',
  },
  {
    word: 'לברוח',
    pronouncing: 'ливроах',
    translation: 'сбежать / скрыться',
  },
  {
    word: 'כפול',
    pronouncing: 'кафуль',
    translation: 'двойной',
  },
  {
    word: 'במידת האפשר',
    pronouncing: 'бэмидат аэфшар',
    translation: 'если возможно',
  },
  {
    word: 'מערך',
    pronouncing: 'маарах',
    translation: 'массив / набор',
  },
  {
    word: 'להעלם',
    pronouncing: 'лэхалам',
    translation: 'исчезать',
  },
  {
    word: 'ביצוע',
    pronouncing: 'бицуа',
    translation: 'исполнение / совершение',
  },
  {
    word: 'ביטוי',
    pronouncing: 'битуй',
    translation: 'выражение',
  },
  {
    word: 'רשימת',
    pronouncing: 'рэшимат',
    translation: 'список',
  },
  {
    word: 'ליישם',
    pronouncing: 'лэясэм',
    translation: 'применять / использовать',
  },
  {
    word: 'עוטף',
    pronouncing: 'отэф',
    translation: 'оборачивать',
  },
  {
    word: 'מקורי',
    pronouncing: 'мэкори',
    translation: 'оригинальный / подлинный',
  },
  {
    word: 'משלב',
    pronouncing: 'мэшалэв',
    translation: 'объединять',
  },
  {
    word: 'לציין',
    pronouncing: 'лэцаен',
    translation: 'упомянуть / заметить',
  },
  {
    word: 'פקד',
    pronouncing: 'пакад',
    translation: 'компонент',
  },
  {
    word: 'לצורך',
    pronouncing: 'лэцОрэх',
    translation: 'ради',
  },
  {
    word: 'ניהול',
    pronouncing: 'нихуль',
    translation: 'менеджмент / управление',
  },
  {
    word: 'נועד',
    pronouncing: 'ноад',
    translation: 'предназначено / должно было',
  },
  {
    word: 'מבחינת',
    pronouncing: 'мэбхинат',
    translation: 'с точки зрения',
  },
  {
    word: 'לאפשר',
    pronouncing: 'лэафшэр',
    translation: 'позволить / дать',
  },
  {
    word: 'כולו',
    pronouncing: 'куло',
    translation: 'полностью / целиком',
  },
  {
    word: 'מבעוד',
    pronouncing: 'мивод',
    translation: 'заранее',
  },
  {
    word: 'מתאר',
    pronouncing: 'мэтаэр',
    translation: 'описывать',
  },
  {
    word: 'תגובה',
    pronouncing: 'тгува',
    translation: 'реакция',
  },
  {
    word: 'עדכון',
    pronouncing: 'идкун',
    translation: 'новость / обновление',
  },
  {
    word: 'חלופה',
    pronouncing: 'халуфа',
    translation: 'альтернатива',
  },
  {
    word: 'יחסית',
    pronouncing: 'яхасит',
    translation: 'сравнительно / относительно',
  },
  {
    word: 'מוגבל',
    pronouncing: 'мугваль',
    translation: 'ограниченный',
  },
  {
    word: 'לחלק',
    pronouncing: 'лэхалэк',
    translation: 'разделять',
  },
  {
    word: 'שליטה',
    pronouncing: 'шлита',
    translation: 'контроль',
  },
  // {
  //   word: 'קריאה',
  //   pronouncing: 'криа',
  //   translation: 'вызов / чтение',
  // },
  {
    word: 'שיפור',
    pronouncing: 'шипур',
    translation: 'улучшение',
  },
  {
    word: 'טעינה',
    pronouncing: 'тэина',
    translation: 'загрузка / зарядка',
  },
  {
    word: 'ניצול',
    pronouncing: 'ницуль',
    translation: 'эксплуатация / использование',
  },
  {
    word: 'מנצל',
    pronouncing: 'мэнацэль',
    translation: 'использовать',
  },
  // {
  //   word: 'דפדפן',
  //   pronouncing: 'дафдэфан',
  //   translation: 'браузер',
  // },
  {
    word: 'שרת',
    pronouncing: 'шарат',
    translation: 'сервер',
  },
  {
    word: 'סביר',
    pronouncing: 'савир',
    translation: 'вероятно / вероятный',
  },
  {
    word: 'לוותר',
    pronouncing: 'лэватэр',
    translation: 'отказаться / уступить',
  },
  {
    word: 'ציון',
    pronouncing: 'циун',
    translation: 'оценка',
  },
  {
    word: 'איטי',
    pronouncing: 'ити',
    translation: 'медленный',
  },
  {
    word: 'מטמון',
    pronouncing: 'мэтамон',
    translation: 'кеш',
  },
  {
    word: 'בשיגרה',
    pronouncing: 'башигра',
    translation: 'в бытовухе',
  },
  {
    word: 'משבר',
    pronouncing: 'машбэр',
    translation: 'кризис',
  },
  {
    word: 'כרוך',
    pronouncing: 'карух',
    translation: 'подразумевать',
  },
  {
    word: 'צוות',
    pronouncing: 'цэвэт',
    translation: 'команда / коллектив',
  },
  {
    word: 'כורח',
    pronouncing: 'корэах',
    translation: 'нужда / необходимость',
  },
  {
    word: 'יעילות',
    pronouncing: 'эйлут',
    translation: 'эффективность',
  },
  {
    word: 'להפנות',
    pronouncing: 'лэхафнот',
    translation: 'направить',
  },
  {
    word: 'ראשית',
    pronouncing: 'рашит',
    translation: 'во-первых',
  },
  {
    word: 'זריז',
    pronouncing: 'зариз',
    translation: 'быстрый',
  },
  {
    word: 'משמעותי',
    pronouncing: 'машмаути',
    translation: 'значительный',
  },
  {
    word: 'מעיד',
    pronouncing: 'мэид',
    translation: 'указывает / свидетельствует',
  },
  {
    word: 'עצמאי',
    pronouncing: 'ацмаи',
    translation: 'независимый / самостоятельный',
  },
  {
    word: 'משימה',
    pronouncing: 'мэсима',
    translation: 'задача / поручение',
  },
  {
    word: 'מודע',
    pronouncing: 'модэ',
    translation: 'быть в курсе',
  },
  {
    word: 'להתגבר',
    pronouncing: 'лэхитгавэр',
    translation: 'преодолеть',
  },
  {
    word: 'היבט',
    pronouncing: 'хэйбэт',
    translation: 'аспект',
  },
  {
    word: 'להשתדל',
    pronouncing: 'лэхиштадэль',
    translation: 'стараться',
  },
  {
    word: 'חלל',
    pronouncing: 'халаль',
    translation: 'пространство / космос',
  },
  {
    word: 'מדובר',
    pronouncing: 'мэдубар',
    translation: 'речь идет о / мы говорим о',
  },
  {
    word: 'קרח',
    pronouncing: 'кэрэах',
    translation: 'лед',
  },
  {
    word: 'מסדרון',
    pronouncing: 'мисдэрон',
    translation: 'корридор',
  },
  {
    word: 'הליכה',
    pronouncing: 'алиха',
    translation: 'прогулка / ходьба',
  },
  {
    word: 'מבחין',
    pronouncing: 'мавхин',
    translation: 'замечать',
  },
  {
    word: 'לאורך',
    pronouncing: 'лэорэх',
    translation: 'на протяжении / в течении',
  },
  {
    word: 'זקוק ל',
    pronouncing: 'закук',
    translation: 'нуждаться в',
  },
  {
    word: 'לקדם',
    pronouncing: 'лэкадэм',
    translation: 'повысить / продвинуть',
  },
  // {
  //   word: 'החלפה',
  //   pronouncing: 'ахлафа',
  //   translation: 'обмен',
  // },
  {
    word: 'גורל',
    pronouncing: 'гораль',
    translation: 'судьба',
  },
  {
    word: 'מונע',
    pronouncing: 'монэа',
    translation: 'останавливать / удерживать',
  },
  {
    word: 'מגוון',
    pronouncing: 'мигэван',
    translation: 'многообразие',
  },
  {
    word: 'כלי',
    pronouncing: 'кэли',
    translation: 'инструмент',
  },
  {
    word: 'כגון',
    pronouncing: 'кэгон',
    translation: 'например',
  },
  {
    word: 'לצרף',
    pronouncing: 'лэцарэф',
    translation: 'привлечь / подключить',
  },
  {
    word: 'ממוקד',
    pronouncing: 'мэмукад',
    translation: 'быть сосредоточенным',
  },
  {
    word: 'חזותי',
    pronouncing: 'хазути',
    translation: 'визуальный',
  },
  {
    word: 'שקיפות',
    pronouncing: 'шкифут',
    translation: 'прозрачность / открытость',
  },
  {
    word: 'לפרגן',
    pronouncing: 'лэфаргэн',
    translation: 'порадоваться',
  },
  {
    word: 'מתחם',
    pronouncing: 'митхам',
    translation: 'участок / комплекс / периметр',
  },
  {
    word: 'מעסיק',
    pronouncing: 'маасик',
    translation: 'работодатель',
  },
  {
    word: 'לתאם',
    pronouncing: 'лэтаэм',
    translation: 'координировать / согласовывать',
  },
  {
    word: 'שאר',
    pronouncing: 'шэар',
    translation: 'остальной',
  },
  {
    word: 'ציפיות',
    pronouncing: 'цифиот',
    translation: 'ожидания',
  },
  {
    word: 'לרבות',
    pronouncing: 'лэработ',
    translation: 'включая / в том числе',
  },
  {
    word: 'מניסיוני',
    pronouncing: 'минэсиони',
    translation: 'по моему опыту',
  },
  {
    word: 'תיאור',
    pronouncing: 'тэур',
    translation: 'описание',
  },
  {
    word: 'מדויק',
    pronouncing: 'мэдуяк',
    translation: 'точный',
  },
  {
    word: 'ממשק',
    pronouncing: 'мимшак',
    translation: 'интерфейс',
  },
  {
    word: 'הנחיות',
    pronouncing: 'ханэхайот',
    translation: 'инструкции',
  },
  {
    word: 'הדרכה',
    pronouncing: 'хадраха',
    translation: 'руководство',
  },
  {
    word: 'תחושה',
    pronouncing: 'тхуша',
    translation: 'ощущение',
  },
  {
    word: 'שכיח',
    pronouncing: 'шахиах',
    translation: 'обычное дело / не редкость',
  },
  {
    word: 'נמנע',
    pronouncing: 'нимна',
    translation: 'избежать',
  },
  {
    word: 'הכשרת',
    pronouncing: 'ахшарат',
    translation: 'подготовка / обучение',
  },
  {
    word: 'להזניח',
    pronouncing: 'лэхазниах',
    translation: 'пренебрегать',
  },
  {
    word: 'מאמר',
    pronouncing: 'маамар',
    translation: 'статья',
  },
  {
    word: 'לעודד',
    pronouncing: 'лэодэд',
    translation: 'поощрять',
  },
  {
    word: 'ציפיה',
    pronouncing: 'ципия',
    translation: 'ожидания',
  },
  {
    word: 'זורח',
    pronouncing: 'зорэах',
    translation: 'сиять',
  },
  {
    word: 'מריץ',
    pronouncing: 'мэриц',
    translation: 'запускать',
  },
  {
    word: 'דגיש',
    pronouncing: 'дагиш',
    translation: 'подчеркнуть',
  },
  {
    word: 'במקור',
    pronouncing: 'бэмакор',
    translation: 'изначально',
  },
  {
    word: 'לגמרי',
    pronouncing: 'лэгамрэй',
    translation: 'полностью',
  },
  {
    word: 'ספק',
    pronouncing: 'сафэк',
    translation: 'сомнение',
  },
  // {
  //   word: 'בסיסי',
  //   pronouncing: 'бсиси',
  //   translation: 'базовый',
  // },
  {
    word: 'מקף',
    pronouncing: 'мэкаф',
    translation: 'дефис',
  },
  {
    word: 'משקיע',
    pronouncing: 'машкиа',
    translation: 'инвестировать',
  },
  {
    word: 'מצגת',
    pronouncing: 'мацэгэт',
    translation: 'презентация',
  },
  {
    word: 'כתיב',
    pronouncing: 'катив',
    translation: 'синтаксис',
  },
  {
    word: 'סוגריים',
    pronouncing: 'суграим',
    translation: 'скобки',
  },
  {
    word: 'מסולסל',
    pronouncing: 'мэсульсаль',
    translation: 'волнистый / вьющийся',
  },
  {
    word: 'מיותר',
    pronouncing: 'мэйотэр',
    translation: 'излишне',
  },
  {
    word: 'עסק',
    pronouncing: 'асак',
    translation: 'бизнес / занятие',
  },
  {
    word: 'תחביר',
    pronouncing: 'тахбир',
    translation: 'синтаксис',
  },
  {
    word: 'שירטוט',
    pronouncing: 'шэйртот',
    translation: 'набросок',
  },
  {
    word: 'תואם',
    pronouncing: 'тоэм',
    translation: 'совпадать / соответствовать',
  },
  {
    word: 'לחלוטין',
    pronouncing: 'лахалутин',
    translation: 'полностью / абсолютно',
  },
  {
    word: 'סיומות',
    pronouncing: 'сиомот',
    translation: 'расширения',
  },
  {
    word: 'תכף',
    pronouncing: 'тэхэф',
    translation: 'сейчас / немедленно',
  },
  {
    word: 'מובנית',
    pronouncing: 'мувнит',
    translation: 'встроенный',
  },
  {
    word: 'זהה',
    pronouncing: 'зээ',
    translation: 'такой же',
  },
  {
    word: 'ניצחונה',
    pronouncing: 'ницхона',
    translation: 'победа',
  },
  {
    word: 'מקונן',
    pronouncing: 'мэконэн',
    translation: 'вложенный',
  },
  {
    word: 'מסורבל',
    pronouncing: 'мэсурбаль',
    translation: 'неуклюжий',
  },
  {
    word: 'לוכסן',
    pronouncing: 'лохсан',
    translation: 'слэш',
  },
  {
    word: 'לעומק',
    pronouncing: 'лаомэк',
    translation: 'вглубь',
  },
  {
    word: 'עדין',
    pronouncing: 'адин',
    translation: 'нежный / деликатный',
  },
  {
    word: 'הפרדה',
    pronouncing: 'хафрада',
    translation: 'разделение',
  },
  {
    word: 'סידור',
    pronouncing: 'сидур',
    translation: 'соглашение / договоренность',
  },
  {
    word: 'חוויה',
    pronouncing: 'хавая',
    translation: 'опыт / переживание',
  },
  {
    word: 'לחשב',
    pronouncing: 'лэхашэв',
    translation: 'рассчитать / вычислить',
  },
  {
    word: 'נגזרים',
    pronouncing: 'нигзарим',
    translation: 'производные',
  },
  {
    word: 'מציין',
    pronouncing: 'мэцаен',
    translation: 'показывает / указывает',
  },
  {
    word: 'נע',
    pronouncing: 'на',
    translation: 'перемещаться',
  },
  {
    word: 'אגב',
    pronouncing: 'агав',
    translation: 'кстати',
  },
  {
    word: 'חישוב',
    pronouncing: 'хишув',
    translation: 'вычисление',
  },
  {
    word: 'גופן',
    pronouncing: 'гуфан',
    translation: 'шрифт',
  },
  {
    word: 'השוליים',
    pronouncing: 'хашулаим',
    translation: 'границы',
  },
  {
    word: 'תיעוד',
    pronouncing: 'тиуд',
    translation: 'документация',
  },
  {
    word: 'גוון',
    pronouncing: 'гавэн',
    translation: 'оттенок',
  },
  {
    word: 'אטום',
    pronouncing: 'атом',
    translation: 'непрозрачный',
  },
  {
    word: 'שקוף',
    pronouncing: 'шакуф',
    translation: 'прозрачный',
  },
  {
    word: 'לעגל',
    pronouncing: 'лэагэль',
    translation: 'округлять',
  },
  {
    word: 'שלם',
    pronouncing: 'шалэм',
    translation: 'целый / полный',
  },
  {
    word: 'מיכל',
    pronouncing: 'михаль',
    translation: 'контейнер',
  },
  {
    word: 'עיצוב',
    pronouncing: 'ицув',
    translation: 'дизайн',
  },
  {
    word: 'בקרה',
    pronouncing: 'бакара',
    translation: 'центр / диспетчер',
  },
  {
    word: 'לולאה',
    pronouncing: 'лулаа',
    translation: 'цикл',
  },
  {
    word: 'נניח',
    pronouncing: 'наниах',
    translation: 'предположим / допустим',
  },
  {
    word: 'להתאים',
    pronouncing: 'лэхатэим',
    translation: 'сопоставить / сравнить',
  },
  {
    word: 'כותרת',
    pronouncing: 'котэрэт',
    translation: 'заголовок',
  },
  {
    word: 'תוקף',
    pronouncing: 'токэф',
    translation: 'срок годности / срок действия',
  },
  {
    word: 'פינוק',
    pronouncing: 'пинук',
    translation: 'удовольствие',
  },
  {
    word: 'לשכפל',
    pronouncing: 'лэшахпэль',
    translation: 'копировать / воспроизводить',
  },
  {
    word: 'מקשקש',
    pronouncing: 'мэкашкэш',
    translation: 'болтать',
  },
  {
    word: 'מוזר',
    pronouncing: 'музар',
    translation: 'странный',
  },
  {
    word: 'עקשן',
    pronouncing: 'акшан',
    translation: 'упрямый',
  },
  {
    word: 'קליפה',
    pronouncing: 'клипа',
    translation: 'оболочка, кора',
  },
  {
    word: 'ניקוי',
    pronouncing: 'никуй',
    translation: 'чистка / очистка',
  },
  {
    word: 'אוסף',
    pronouncing: 'осэф',
    translation: 'коллекция / набор',
  },
  {
    word: 'מסוגל',
    pronouncing: 'месугаль',
    translation: 'способный',
  },
  {
    word: 'ירושה',
    pronouncing: 'еруша',
    translation: 'наследство',
  },
  {
    word: 'חיצון',
    pronouncing: 'хицон',
    translation: 'наружный / внешний',
  },
  {
    word: 'לעומת',
    pronouncing: 'лэумат',
    translation: 'по сравнению с',
  },
  {
    word: 'מגדיל',
    pronouncing: 'магдиль',
    translation: 'увеличивать / повышать',
  },
  {
    word: 'השלכה',
    pronouncing: 'хашлаха',
    translation: 'последствие',
  },
  {
    word: 'להתמודד',
    pronouncing: 'лэхитмодэд',
    translation: 'справиться / разобраться',
  },
  {
    word: 'מצטבר',
    pronouncing: 'мицтавэр',
    translation: 'накапливающийся / кумулятивный',
  },
  {
    word: 'סיבוך',
    pronouncing: 'сибух',
    translation: 'сложности',
  },
  {
    word: 'בניגוד',
    pronouncing: 'бэнигуд',
    translation: 'в отличие от',
  },
  {
    word: 'סכנה',
    pronouncing: 'сакана',
    translation: 'опасность',
  },
  {
    word: 'התנגשויות',
    pronouncing: 'хитнагшует',
    translation: 'столкновения / конфликты',
  },
  {
    word: 'תהום',
    pronouncing: 'тэхом',
    translation: 'бездна',
  },
  {
    word: 'תמריץ',
    pronouncing: 'тамриц',
    translation: 'стимул / мотивация',
  },
  {
    word: 'להנות',
    pronouncing: 'лэханот',
    translation: 'наслаждаться',
  },
  {
    word: 'במלואה',
    pronouncing: 'бэмэлуа',
    translation: 'полностью',
  },
  {
    word: 'מרחיב',
    pronouncing: 'мархив',
    translation: 'расширять',
  },
  {
    word: 'מוצפן',
    pronouncing: 'муцпан',
    translation: 'зашифрованный',
  },
  {
    word: 'לייבא',
    pronouncing: 'лэявэ',
    translation: 'импортировать',
  },
  {
    word: 'מראה',
    pronouncing: 'марэ',
    translation: 'зеркало / вид',
  },
  {
    word: 'סיכוי',
    pronouncing: 'сикуй',
    translation: 'шанс / вероятность',
  },
  {
    word: 'בילוי',
    pronouncing: 'билуй',
    translation: 'отдых',
  },
  {
    word: 'להינות',
    pronouncing: 'лэханот',
    translation: 'наслаждаться / получать удовольствие',
  },
  {
    word: 'תקציב',
    pronouncing: 'такцив',
    translation: 'смета / бюджет',
  },
  {
    word: 'לגבי',
    pronouncing: 'лэгабэй',
    translation: 'что касается / на счет того, что',
  },
  {
    word: 'הפרדה',
    pronouncing: 'афрада',
    translation: 'разделение / сегрегация',
  },
  {
    word: 'מטרייה',
    pronouncing: 'митрия',
    translation: 'зонтик',
  },
  {
    word: 'להצטיין',
    pronouncing: 'лэхицтаен',
    translation: 'преуспеть / отличиться',
  },
  {
    word: 'להזהיר',
    pronouncing: 'лэхазхир',
    translation: 'предостерегать',
  },
  {
    word: 'סוללה',
    pronouncing: 'солэла',
    translation: 'батарейка',
  },
  {
    word: 'זכוכית',
    pronouncing: 'зхухит',
    translation: 'стекло',
  },
  {
    word: 'במינה',
    pronouncing: 'бэмина',
    translation: 'в своем роде',
  },
  {
    word: 'ספסל',
    pronouncing: 'сафсаль',
    translation: 'скамейка',
  },
  {
    word: 'נזכר',
    pronouncing: 'низкар',
    translation: 'вспоминать',
  },
  {
    word: 'צנוע',
    pronouncing: 'цануа',
    translation: 'скромный',
  },
  {
    word: 'קופסאת',
    pronouncing: 'куфсат',
    translation: 'коробка',
  },
  {
    word: 'עקשן',
    pronouncing: 'акшан',
    translation: 'упрямый',
  },
  {
    word: 'ביישן',
    pronouncing: 'байшан',
    translation: 'застенчевый  / стеснительный',
  },
  {
    word: 'במאי',
    pronouncing: 'бамай',
    translation: 'режиссер',
  },
  {
    word: 'להגיש',
    pronouncing: 'лэхагиш',
    translation: 'подавать / выдвигать',
  },
  {
    word: 'להרים',
    pronouncing: 'лэхарим',
    translation: 'поднять / подобрать',
  },
  {
    word: 'להגיב',
    pronouncing: 'лэхагив',
    translation: 'ответить / прокомментировать',
  },
  {
    word: 'לכבות',
    pronouncing: 'лэхабот',
    translation: 'выключить / потушить',
  },
  {
    word: 'לגלות',
    pronouncing: 'лэгалот',
    translation: 'узнать / выяснить',
  },
  {
    word: 'להתרכז',
    pronouncing: 'лэхитракэз',
    translation: 'сосредоточиться',
  },
  {
    word: 'להרדם',
    pronouncing: 'лэхирадэм',
    translation: 'заснуть',
  },
  {
    word: 'נורא',
    pronouncing: 'нора',
    translation: 'ужасный / ужасно',
  },
  {
    word: 'בדיחה',
    pronouncing: 'бдиха',
    translation: 'шутка',
  },
  {
    word: 'נסבל',
    pronouncing: 'нисбаль',
    translation: 'терпимо',
  },
  {
    word: 'בלתי',
    pronouncing: 'билти',
    translation: 'не',
  },
  {
    word: 'פעמון',
    pronouncing: 'паамон',
    translation: 'звонок / колокольчик',
  },
  {
    word: 'תאונה',
    pronouncing: 'тэуна',
    translation: 'несчастный случай / авария',
  },
  {
    word: 'להתאושש',
    pronouncing: 'лэхитошэш',
    translation: 'восстановиться / прийтий в себя',
  },
  {
    word: 'אשם',
    pronouncing: 'ашэм',
    translation: 'виновен',
  },
  {
    word: 'להצטרך',
    pronouncing: 'лэхицтарэх',
    translation: 'нуждаться',
  },
  {
    word: 'נוטע',
    pronouncing: 'нотэа',
    translation: 'выращивать',
  },
  {
    word: 'להעניש',
    pronouncing: 'лэханиш',
    translation: 'наказать',
  },
  {
    word: 'שעמום',
    pronouncing: 'шиамум',
    translation: 'скука',
  },
  {
    word: 'מסור',
    pronouncing: 'масур',
    translation: 'преданный',
  },
  {
    word: 'תמורה',
    pronouncing: 'тмура',
    translation: 'вознаграждение',
  },
  {
    word: 'משוחח',
    pronouncing: 'мэшухах',
    translation: 'разговаривать / беседовать',
  },
  {
    word: 'מייעץ',
    pronouncing: 'мэяэц',
    translation: 'консультировать / советовать',
  },
  {
    word: 'היגיון',
    pronouncing: 'хигайон',
    translation: 'логика',
  },
  {
    word: 'כעבור',
    pronouncing: 'кавор',
    translation: 'спустя / через',
  },
  {
    word: 'ביקורת',
    pronouncing: 'бикорэт',
    translation: 'критика',
  },
  {
    word: 'מכשיר',
    pronouncing: 'махшир',
    translation: 'прибор / устройство',
  },
  {
    word: 'לחנך',
    pronouncing: 'лэханэх',
    translation: 'воспитывать',
  },
  {
    word: 'לדחוף',
    pronouncing: 'лидхоф',
    translation: 'толкать / отталкивать',
  },
  {
    word: 'להתנגד',
    pronouncing: 'лэхитнагэд',
    translation: 'сопротивляться / возражать',
  },
  {
    word: 'לחייב',
    pronouncing: 'лэхайэв',
    translation: 'обязывать / требовать',
  },
  {
    word: 'עבירה',
    pronouncing: 'авира',
    translation: 'преступление / нарушение',
  },
  {
    word: 'סקרן',
    pronouncing: 'сакрэн',
    translation: 'испытывать любопытство / интересоваться',
  },
  {
    word: 'למנוע',
    pronouncing: 'лимноа',
    translation: 'не допускать / препятствовать',
  },
  {
    word: 'תדריך',
    pronouncing: 'тадрих',
    translation: 'инструктаж / бриффинг',
  },
  {
    word: 'ליפול',
    pronouncing: 'липоль',
    translation: 'падать',
  },
  {
    word: 'דמיון',
    pronouncing: 'димийон',
    translation: 'воображение / фантазия',
  },
  {
    word: 'למסור',
    pronouncing: 'лимсор',
    translation: 'отдать / сдать',
  },
  {
    word: 'לקלוט',
    pronouncing: 'ликлот',
    translation: 'понять / осознать',
  },
  {
    word: 'להתבייש',
    pronouncing: 'лэхитбаеш',
    translation: 'стесняться / стыдиться',
  },
  {
    word: 'מקלדת',
    pronouncing: 'миклэдэт',
    translation: 'клавиатура',
  },
  {
    word: 'צג',
    pronouncing: 'цаг',
    translation: 'монитор / экран',
  },
  {
    word: 'שולט',
    pronouncing: 'шолэт',
    translation: 'контролировать / управлять',
  },
  {
    word: 'ביקורת',
    pronouncing: 'бикорэт',
    translation: 'критика / рецензия',
  },
  {
    word: 'לפרנס',
    pronouncing: 'лэфарнэс',
    translation: 'содержать / обеспечивать',
  },
  {
    word: 'פגם',
    pronouncing: 'пгам',
    translation: 'брак / дефект',
  },
  {
    word: 'סרטון',
    pronouncing: 'сиртон',
    translation: 'видеоролик',
  },
  {
    word: 'לאיים',
    pronouncing: 'лэайем',
    translation: 'угрожать',
  },
  {
    word: 'להרוס',
    pronouncing: 'лахарос',
    translation: 'разрушить / испортить',
  },
  {
    word: 'למחרת',
    pronouncing: 'лэмахорат',
    translation: 'на следующий день',
  },
  {
    word: 'הצבעה',
    pronouncing: 'хацваа',
    translation: 'голосование',
  },
  {
    word: 'קינא',
    pronouncing: 'кинэ',
    translation: 'завидовать',
  },
  {
    word: 'מועמד',
    pronouncing: 'маомад',
    translation: 'кандидат',
  },
  {
    word: 'משמעות',
    pronouncing: 'машмаут',
    translation: 'смысл / значение',
  },
  {
    word: 'מנוסה',
    pronouncing: 'мэнусэ',
    translation: 'опытный',
  },
  {
    word: 'הוצאה',
    pronouncing: 'хоцаа',
    translation: 'статья расходов',
  },
  {
    word: 'דיכאון',
    pronouncing: 'дикаон',
    translation: 'депрессия',
  },
  {
    word: 'להגזים',
    pronouncing: 'лэхагзим',
    translation: 'преувеличивать',
  },
  {
    word: 'קידום',
    pronouncing: 'кидум',
    translation: 'повышение',
  },
  {
    word: 'לצוות',
    pronouncing: 'лэцавот',
    translation: 'приказать',
  },
  {
    word: 'להשיב',
    pronouncing: 'лэхашив',
    translation: 'возвращать / отвечать',
  },
  {
    word: 'מטרייה',
    pronouncing: 'митриа',
    translation: 'зонтик',
  },
  {
    word: 'פיטריות',
    pronouncing: 'питриот',
    translation: 'грибы',
  },
  {
    word: 'להבחין ב',
    pronouncing: 'лэхавхин',
    translation: 'заметить / разглядеть',
  },
  {
    word: 'להתפנק',
    pronouncing: 'лэхитфанэк',
    translation: 'побаловать себя',
  },
  {
    word: 'לשרוד',
    pronouncing: 'лисрод',
    translation: 'выжить / уцелеть',
  },
]

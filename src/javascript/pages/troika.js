import '../../stylesheets/main_css/Page.css'
import React, { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Menu from '../particles/menu.jsx'
import {
  MaybeInterestingCards,
  MaybeInterestingCardsArticles
} from '../particles/card.jsx'

import Heading from './../../images/articles/news_pages/troikaHeading.png'
import IMG1 from './../../images/articles/news_pages/troika_img01.png'
import IMG2 from './../../images/articles/news_pages/troika_img02.png'
import IMG3 from './../../images/articles/news_pages/troika_img03.png'
import IMG4 from './../../images/articles/news_pages/troika_img04.png'
import { ArticleHeading } from '../particles/card.jsx'
import { ArticleChapter } from '../particles/text.jsx'
import { Q_Image } from '../particles/image.jsx'
import Footer from '../particles/footer.jsx'
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <Menu activeTag1={''} activeTag2={''} activeTag3={''} />
    <ArticleHeading
      BGUrl={Heading}
      station={'Тройка — просто пластиковая карта или что-то поинтереснее?  '}
      description={
        'Тройка и так очень удобный способ оплаты: можно записать, как и тарифный план, так и просто положить деньги. Положить ее можно под чехол телефона, в чехол, в картхолдер или хоть под шапку и ежедневно удивлять прохожих оплтой проезда поклоном перед турникетами. Однако, пластиковая карта — не единственный вариант тройки, который предлагает Мосметро. '
      }
    />
    <ArticleChapter
      heading={'Брелок'}
      text={
        'Если положить Тройку в картхолдер ко всем своим картам, то приложить кратхолдер — не прокатит, а то вдруг оплатит банковской картой. А вот повесить Тройку на ключи было бы очень удобно — ключи от дома же не откроют турникеты. '
      }
    />
    <Q_Image width={13} height={40} margin={5} url={IMG1} />
    <ArticleChapter
      text={
        'Официальный магазин Метро Москвы предлагает как и классический варинт с тройцей лошадей, так и изображения в коллаборации с центром поддержи краснокнижных животных России. '
      }
    />
    <ArticleChapter
      heading={'Попсокеты'}
      text={
        'Если место под карточку в чехле у вас уже занято, то есть и другой варинт нацепить всё на телефон — попсокет Тройка. Иет в белом и черном цвете и только с лошадками.'
      }
    />
    <Q_Image width={13} height={40} margin={5} url={IMG2} />
    <ArticleChapter
      heading={'Браслеты'}
      text={
        'Если вы вообще не хотите доставать ничего из карманов, то перед выходом из дома можно надеть силиконовый браслет Тройку в одном из четырех цветов веток метро: Замоскворецкой, Люблинско-Дмитровской, Некрасовской или Арбатско-Покровской'
      }
    />
    <Q_Image width={13} height={40} margin={5} url={IMG3} />
    <ArticleChapter
      heading={'Кольца'}
      text={
        'А как раз в придверии зимы, когда любой браслет окажется под толстым слоем одежды и куртки, МосМетро выпустили лимитирвоанную коллекцию Троек колец в трех разцветках: белой, розовой и черной. Под любой лук и настроение. Работает и через перчатки и через варежки, редакция проверила.'
      }
    />
    <Q_Image width={4} height={40} margin={5} url={IMG4} />
    <MaybeInterestingCardsArticles start_number={0} end_number={3} />
    <Footer />
  </StrictMode>
)

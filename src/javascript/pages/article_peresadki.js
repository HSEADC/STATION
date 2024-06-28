import '../../stylesheets/main_css/Page.css'
import React, { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Menu from '../particles/menu.jsx'
import {
  MaybeInterestingCards,
  MaybeInterestingCardsArticles
} from '../particles/card.jsx'

import Heading from './../../images/articles/articles_pages/peresadkiHeading.png'
import { ArticleHeading } from '../particles/card.jsx'
import { ArticleChapter } from '../particles/text.jsx'
import { Q_Image } from '../particles/image.jsx'
import IMG1 from './../../images/articles/articles_pages/peresadki_img01.png'
import IMG2 from './../../images/articles/articles_pages/peresadki_img02.png'
import IMG3 from './../../images/articles/articles_pages/peresadki_img03.png'
import Footer from '../particles/footer.jsx'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <Menu activeTag1={''} activeTag2={''} activeTag3={''} />
    <ArticleHeading
      BGUrl={Heading}
      station={'Лайфхаки при пересадках, сокращающие время перехода'}
      description={
        'В этой статье мы поделимся небольшими хитростями, которые помогут вам быстро и удобно добраться до центральных станций, избегая лишних хлопот.'
      }
    />
    <ArticleChapter
      heading={'Охотный ряд — Площадь революции'}
      text={
        'На этом транспортном узле нет прямого соединения красной и синей ветки, поэтому всё время придется тратить время на проход по Театральной. '
      }
    />
    <Q_Image width={9} height={40} margin={5} url={IMG1} />
    <ArticleChapter
      text={
        'Однако, можно заметно сократить себе путь пешком, если проехать чуть дальше до Библиотеки имени Ленина. Тут мы можем осуществить прямую пересадку. Поднимаемся по ступенькам, поворачиваем налево и идем прямо до эскалаторов. Главное осмотритесь, чтобы вас не сбили с ног люди, идущие от Александровского сада. Спускаемcя по эскалатору и садимся в поезд на синей ветке. Способ сильно проще, чем 4 раза переходить на эскалаторах в первом варианте. '
      }
    />
    <ArticleChapter
      heading={'Чистые пруды — Тургеневская'}
      text={
        'Подключаем к нашей задаче выход в город. На этом транспортном узле обеспечен прямой переход между Чистыми Прудами и Тургеневской, но он пеший и очень длинный.'
      }
    />
    <Q_Image width={9} height={40} margin={5} url={IMG2} />
    <h3 className="article">Экономия времени ~ 10 минут</h3>
    <div className="W_TextCount">
      <h3 className="article"> 1</h3>
      <p>Поднимаемся на Чистых прудах по эскалатору в сторону 2 выхода</p>
    </div>
    <div className="W_TextCount">
      <h3 className="article"> 2</h3>
      <p>
        Поворачиваем направо, проходим по вестибюлю и спускаемся по эскалатору к
        Тургеневской
      </p>
    </div>
    <ArticleChapter
      heading={
        'Как не путать платформы и переходы на «Китай-городе» и «Третьяковской»?'
      }
      text={
        'Кросс-платформенные пересадки всегда путают. Так как же запомнить, где нужно пересаживаться?'
      }
    />
    <h3 className="article">
      Никак. Забудь об этом. Тут даже магия бессильна.
    </h3>
    <ArticleChapter
      heading={'Павелецкая'}
      text={
        'Клаустрофобный, долгий привокзальный переход с зеленой на коричневую ветку на Павелецкой пользуется большим спросом ежедневно, но можно опять подключить к этому делу выход в город.'
      }
    />
    <Q_Image width={9} height={40} margin={5} url={IMG3} />
    <h3 className="article">Экономия времени ~ 5 минут</h3>
    <div className="W_TextCount">
      <h3 className="article"> 1</h3>
      <p>Поднимаемся на Чистых прудах по эскалатору в сторону 2 выхода</p>
    </div>
    <div className="W_TextCount">
      <h3 className="article"> 2</h3>
      <p>
        Не выходя из вестибюля, спускаемся на втором эскалаторе на зеленую ветку
      </p>
    </div>
    <ArticleChapter
      heading={'Обратный путь'}
      text={
        'При необходимости снова отправиться обратно на метро, пассажиру просто нужно будет следовать уже знакомому маршруту, только в обратном направлении. Это позволит сэкономить время и усилия, так как все шаги уже будут знакомы и пройдены ранее.'
      }
    />
    <MaybeInterestingCardsArticles start_number={0} end_number={3} />
    <Footer />
  </StrictMode>
)

import './index.css'
import React from 'react'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Button } from './javascript/particles/button.jsx'
import Menu from './javascript/particles/menu.jsx'
import {
  StationCard,
  ArticleCard,
  ChronoCard
} from './javascript/particles/card.jsx'

import { SectionHeading } from './javascript/particles/text.jsx'
import { Q_Image, W_ImagesRow } from './javascript/particles/image.jsx'
import Footer from './javascript/particles/footer.jsx'
//* Импорт картинок
import MainImage from './images/main_page/Main.jpg'
import Image_Station1 from './images/main_page/Station1.png'
import Image_Article1 from './images/main_page/Article1.png'
import Image_Article2 from './images/main_page/Article2.jpeg'
import Image_Article3 from './images/main_page/Article3.jpeg'
import Image_Article4 from './images/main_page/Article4.png'
import Image_Chrono1 from './images/main_page/Chrono1.png'
import Image_Chrono2 from './images/main_page/Chrono2.png'
import Image_BigArticle1 from './images/main_page/Article5.png'
import Video_RunningLine from './images/main_page/RunningLine.mp4'
import './stylesheets/adaptives/adaptive.scss'
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Menu activeTag1={''} activeTag2={''} activeTag3={''} />
    <div>
      <h1>ТУТ ВСЕ</h1>
      <SectionHeading heading={'Мосметро'} />
      <div
        className="Q_TitleImage"
        style={{ backgroundImage: `url(${MainImage})` }}
      ></div>
    </div>
    <div>
      <SectionHeading
        heading={'станции'}
        description={
          'Полный сборник истории всех станций Московского метро поможет изучить каждую линию по отдельности, чтобы собрать целую карту в едино'
        }
      />
      <div className="W_CardsArticleCollection">
        <StationCard
          station={'Маяковская'}
          color={'zamos'}
          tag_1_text={'Замоскворецкая'}
          Station_link={'/maykovskay.html'}
        />
        <StationCard
          station={'Римская'}
          color={'lubli'}
          tag_1_text={'Люблинско-Дмитровская'}
          Station_link={'/rimskay.html'}
        />
        <ArticleCard
          text={'Пыхтино – метро в аэропорт'}
          size={'medium'}
          bg_image={Image_Station1}
          text_color={'white'}
          linking={'./pychtino.html'}
        />
      </div>
    </div>
    <div class="O_FullArticleSection">
      <div class="W_ImageArticleBlock">
        <p class="button">добавлена станция</p>
        <div
          style={{ backgroundImage: `url(${Image_Article1})` }}
          class="Q_ImageArticleCover"
        ></div>
      </div>
      <div>
        <div class="W_AdditionalInfoArticle">
          <div class="W_AdditionalArticleTag">
            <div class="Q_Line"></div>
            <h3>1958</h3>
            <div class="Q_Line long"></div>
            <h3>47</h3>
          </div>
          <div class="W_AdditionalGallery">
            <img
              class="Q_ImageArticleAdditional two_col"
              src={Image_Article2}
              alt=""
            />
            <img
              class="Q_ImageArticleAdditional two_col"
              src={Image_Article3}
              alt=""
            />
            <img
              class="Q_ImageArticleAdditional six_col"
              src={Image_Article4}
              alt=""
            />
          </div>
        </div>
        <div class="W_InfoAfticleSection">
          <div class="W_TextArticleSection">
            <h1>Библиотека им.Ленина</h1>
            <div class="A_ArticleBody">
              <p>
                Cтанция первой очереди Московского метрополитена, открытая 15
                мая 1935 году.
              </p>
              <p>
                Оформление станции посвящено Библиотеке им.Ленина ( ныняшняя
                Российская государственная библиотека).
              </p>
            </div>
          </div>
          <Button
            text={'читать'}
            arrow={'up'}
            linking={'./biblioteka_lenina.html'}
          />
        </div>
      </div>
    </div>
    <div class="Q_RunningLine">
      <video autoPlay loop muted playsinline>
        <source src={Video_RunningLine} type="video/mp4" />
      </video>
    </div>
    <div>
      <SectionHeading
        heading={'прошлом и\u00a0настоящем'}
        description={
          'Подробная история метро год за годом, но\u00a0без нудностей и скучных дат'
        }
      />
      <div className="W_CardsChronoCollection">
        <Q_Image width={10} height={33} margin={0} url={Image_Chrono1} />
        <ChronoCard
          text={'Когда в метро заработали первые эскалаторы?'}
          year={'1932'}
          image_URL={Image_Chrono2}
          isWhite={'white'}
        />
      </div>
    </div>
    <div>
      <SectionHeading
        heading={'Статьи'}
        description={
          'У нас недавно вышли свежие статьи, и\u00a0с\u00a0уверенностью советуем вам их\u00a0изучить — возможно, вам удастся отыскать в них множество полезной информации!'
        }
      />
      <ArticleCard
        text={'Тройка — просто пластиковая карта или что-то поинтереснее? '}
        size={'large'}
        bg_image={Image_BigArticle1}
        text_color={'white'}
      />
    </div>
    <Footer />
  </StrictMode>
)

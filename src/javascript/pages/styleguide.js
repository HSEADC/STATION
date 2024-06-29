import '../../stylesheets/main_css/styleguide.css'
import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import IMG1 from './../../images/styleguide/bg_with_logo_main.svg'
import IMG2 from './../../images/styleguide/about_card.jpg'
import IMG3 from './../../images/styleguide/logotype_logo_02.png'
import IMG4 from './../../images/styleguide/logotype_logo_01.png'
import IMG5 from './../../images/styleguide/logotype_logo_03.png'
import IMG6 from './../../images/styleguide/logo_sem_img.png'
import IMG7 from './../../images/styleguide/logotype_usage.png'
import IMG8 from './../../images/styleguide/logotype_no_01.png'
import IMG9 from './../../images/styleguide/logotype_no_02.png'
import IMG10 from './../../images/styleguide/logotype_no_201.svg'
import IMG11 from './../../images/styleguide/logotype_no_202.svg'
import IMG12 from './../../images/styleguide/colors.svg'
import IMG13 from './../../images/styleguide/typo_card.svg'
import IMG14 from './../../images/styleguide/comp_1.jpg'
import IMG15 from './../../images/styleguide/comp_2.jpg'
import IMG16 from './../../images/styleguide/merch_img_01.jpg'
import IMG17 from './../../images/styleguide/merch_img_02.jpg'
import IMG18 from './../../images/styleguide/merch_img_03.jpg'
import IMG19 from './../../images/styleguide/merch_img_04.jpg'
import IMG20 from './../../images/styleguide/merch_img_05.jpg'
import IMG21 from './../../images/styleguide/merch_img_06.jpg'
import IMG22 from './../../images/styleguide/merch_img_07.jpg'
import IMG23 from './../../images/styleguide/merch_img_08.jpg'
import IMG24 from './../../images/styleguide/merch_img_09.jpg'
import IMG25 from './../../images/styleguide/merch_img_10.jpg'
import IMG26 from './../../images/styleguide/merch_img_11.jpg'
import IMG27 from './../../images/styleguide/merch_img_12.jpg'
import IMG28 from './../../images/styleguide/logo_full.svg'

const StyleGuide = () => {
  return (
    <div className="styleguide">
      <div className="menu">
        <p className="big">о бренде</p>
        <p className="big">логотип</p>
        <p className="big">цвета</p>
        <p className="big">типографика</p>
        <p className="big">композиция</p>
        <p className="big">фото</p>
        <p className="big">графика</p>
        <p className="big">мерч</p>
      </div>
      <div className="content">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
          }}
        >
          <img src={IMG1} alt="" />
          <h1 style={{ fontSize: '170px' }}>Стайлгайд</h1>
          <button style={{ backgroundColor: 'var(--black)' }}>читать</button>
        </div>
        <div className="about">
          <div className="div1">
            <h1>
              <span>о!</span> бренд
            </h1>
            <p>
              Мы используем линии метро в качестве визуального приема для
              раскрытия истории Московского метрополитена
            </p>
          </div>
          <img className="div2" src={IMG2} alt="" />
          <div className="div3">
            <h3>миссия</h3>
            <p>
              Показать, что метро не только средство передвижения, <br />
              но и сводка истории и архитектуры
            </p>
          </div>
          <div className="div4">
            <h3>ценности</h3>
            <p>
              Любовь к архитектуре и истории, ежедневные поездки — <br />
              это интересное путешествие
            </p>
          </div>
          <div className="div5">
            <h3>tone of voice</h3>
            <p>
              Мы дружелюбны и приветливы. Описание материалов ярко и интересно,
              но не навязчиво, что позволяет легко усваивать информацию.
            </p>
          </div>
        </div>
        <div className="line_sem"></div>
        <div className="logotype">
          <h1 className="div1">
            <span>о!</span> логотип
          </h1>
          <div className="div2">
            <p>Полный</p>
            <img src={IMG3} alt="" />
          </div>
          <div className="div3">
            <p>Сокращенный</p>
            <img src={IMG4} alt="" />
          </div>
          <div className="div4">
            <p>Графический</p>
            <img src={IMG5} alt="" />
          </div>
          <div className="div5">
            <h3>семантика</h3>
            <p>
              «о!» - восклицание, которое отражает положительные эмоции, которые
              возникают у пользователей при появление новой интересной
              информации:удивление от уникальной архитектуры станций, восторг от
              исторических сводок Московского метро.
            </p>
          </div>
          <img src={IMG6} alt="" className="div6" />
          <div className="div7">
            <h3>использование</h3>
            <p>
              Логотип используется в правом верхнем углу страницы или плаката.
            </p>
          </div>

          <img src={IMG7} className="div8" alt="" />
        </div>
        <div className="logotype_2">
          <div className="div1">
            <h3>ограничения</h3>
            <p>
              Цвет лого должен быть контрастен <br />
              на фоне и одного цвета.
            </p>
          </div>
          <div className="div2">
            <img src={IMG8} alt="" />
            <p className="small">так можно</p>
          </div>
          <div className="div3">
            <img src={IMG9} alt="" />
            <p className="small">так нельзя</p>
          </div>
          <p className="div4">Логотип должен быть одного начертания</p>
          <div className="div5">
            <img src={IMG10} alt="" />
            <p className="small">так можно</p>
          </div>
          <div className="div6">
            <img src={IMG11} alt="" />
            <p className="small">так нельзя</p>
          </div>
        </div>
        <div className="colors">
          <div>
            <h1>
              <span>о!</span> цвета
            </h1>
            <p>
              В основе цветового решения лежит монохром, разбавленный двумя
              цветами: оранжевым, олицетворяющим старые ветки и историю, и
              бирюзовым, отсылающим на БКЛ и все новое
            </p>
          </div>
        </div>
        <img src={IMG12} alt="" />
        <div className="typography">
          <div className="div1">
            <h1>
              <span>о!</span> типографика
            </h1>
            <p>
              Самое важное в нашем проекте - информация и удобство для чтения.
              Поэтому мы не используем акцентные шрифты, чтобы не отвлекать
              пользователя от визуального составляющего
            </p>
          </div>
          <img src={IMG13} alt="" className="div2" />
          <div className="div3">
            <h3>размеры</h3>
            <div>
              <h1>
                <span>COFO +</span>Pragmatica
              </h1>
              <p>header 4.4x</p>
            </div>
            <div>
              <h2>PRAGMATICA medium</h2>
              <p>header 2.2x</p>
            </div>
            <div>
              <h3>Pragmatica regular</h3>
              <p>header 2.2x</p>
            </div>
            <div>
              <p className="big">Pragmatica regular</p>
              <p>body 1.3x</p>
            </div>
            <div>
              <p>Pragmatica regular</p>
              <p>body 1x</p>
            </div>
            <div>
              <p>Pragmatica medium</p>
              <p>annotation 0.8x</p>
            </div>
          </div>
        </div>
        <div className="compo">
          <h1 className="div1">
            <span>о!</span> композиция
          </h1>
          <div className="div2">
            <img src={IMG14} alt="" />
            <p className="small">
              пример верстки 20 колонок <br />
              9/5/6
            </p>
          </div>
          <div className="div3">
            <img src={IMG15} alt="" />
            <p className="small">
              пример верстки 20 колонок <br />
              5/5/5/5
            </p>
          </div>
        </div>
        <div className="graphic">
          <div className="div1">
            <h1>
              <span>о!</span> графика
            </h1>
            <p>
              Основной графический прием - запутанные ветки метро. Они
              используются в 3D и 2D формате
            </p>
          </div>
          <div className="div2">
            <h3>2D формат</h3>
            <p>
              Для материалов, связанных с прошлым. Преимущественно в оранжевом
              цвете
            </p>
          </div>
          <div className="div3">
            <h3>3D формат</h3>
            <p>Для оформления материалов, связанных с настоящим и будущим.</p>
          </div>
          <div className="div4"></div>
          <div className="div5"></div>
        </div>
        <h1>
          <span>о!</span> мерч
        </h1>
        <div className="merch">
          <img src={IMG16} alt="" className="div" />
          <img src={IMG17} alt="" className="div" />
          <img src={IMG18} alt="" className="div" />
          <img src={IMG19} alt="" className="div" />
          <img src={IMG20} alt="" className="div" />
          <img src={IMG21} alt="" className="div" />
          <img src={IMG22} alt="" className="div" />
          <img src={IMG23} alt="" className="div" />
          <img src={IMG24} alt="" className="div" />
          <img src={IMG25} alt="" className="div" />
          <img src={IMG26} alt="" className="div" />
          <img src={IMG27} alt="" className="div" />
        </div>
        <div className="dno">
          <img src={IMG28} alt="" />
          <p className="big">
            Галиева Эльвира <br />
            Атласова Нана
          </p>
        </div>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <StyleGuide />
  </StrictMode>
)

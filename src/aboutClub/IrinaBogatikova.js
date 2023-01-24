import './style.css'
import img from "../assets/Irina.jpg";
import '../animation.css'


function IrinaBogatikova() {
    return (
        <div className={'Irina'}>
            <div className={'header'}>
                <img className={'animation'} src={img}/>
                <p className={'name animation'}><p>ИРИНА АЛЕКСАНДРОВНА</p><p>БОГАТИКОВА</p></p>
                <h3 className={'animation'}>ВЛАДЕЛЕЦ, РУКОВОДИТЕЛЬ ПРОЕКТОВ</h3>
            </div>
            <div className={'texts'}>
                <div className={'item'}>
                    <h3 className={'title animation'}>Ирина Богатикова:</h3>
                    <p className={'text animation'}>"После окончания работы над проектом жаль расставаться...." - так говорят клиенты Ирины, когда наступает счастливый момент переезда в свой новый дом. И возвращаются с новыми заказами - для своих детей, друзей, рекомендуют бизнес-партнерам.
                        17-летний опыт работы, репутация надежного и проницательного человека, великолепное чувство вкуса и стиля, техническая грамотность и комфорт в общении - за эти качества Ирину Богатикову ценят заказчики, коллеги и партнеры по работе.</p>
                </div>
                <div className={'item'}>
                    <h3 className={'title'}>Краткое резюме:</h3>
                    <p className={'text'}>Опыт работы: 17 лет.
                        Образование – МАИ, МАРХИ.
                        Почетный член Союза Дизайнеров и Архитекторов.
                        Регулярный спикер российских и международных выставок: «Загородный дом», «INDECOR», «Красивые дома. Российский архитектурный салон», «BoatShow», «InterlightMoscow», «HouseHoldExpo», «Международный мебельный салон MIFS», «StylishHome», «CristmasWorld» и других.
                        Участник информационных программ Салонов: «Роскошный дом», «Антикварный салон».
                        Награждена 23 дипломами за образовательную и просветительскую работу в сфере дизайна и архитектуры.
                        Автор 12 уникальных авторских лекций о смешении стилей, тенденциях, традициях и инновациях в архитектуре, дизайне и декорировании.
                        Основатель теории интегрального дизайна.</p>
                </div>
                <div className={'item'}>
                    <h3 className={'title'}>Обращение Ирины Богатиковой к посетителям сайта:</h3>
                    <p className={'text'}>Создавать благородные, полноценные интерьеры, волнующие душу заказчика и его семьи, дающие комфорт телу и наслаждение взгляду - огромное удовольствие для меня.
                        Имея хорошее образование и большой опыт работы, я могу объяснить заказчику все нюансы работ - как эстетические, так и технические, предложить целесообразные решения по финансовым вложениям в интерьер. Если вы информированы, решения приняты, концепция одобрена, остается спокойная работа над проектом и этап реализации. Надежная, проверенная годами совместной работы, команда сотрудников, поставщиков и исполнителей - это мой труд и моя опора. Для клиента это значит, что он может быть уверенным в том, что его проект реализуется качественно и в срок. Моё личное сопровождение на каждом этапе обязательно. Все вопросы можно задать мне, все консультации с исполнителями и поставщиками организовать у меня в Клубе или с выездом к вам.
                        Общественные интерьеры я выполняю концептуально, в рамках выделенного бюджета и времени, по заданию заказчика, но со своим авторским взглядом на реализацию.</p>
                </div>
                <div className={'item'}>
                    <h3 className={'title'}>Для того, чтобы предложить клиентам полный комплекс услуг по архитектуре, дизайну, декору и сопровождению объектов, в моей команде:</h3>
                    <p className={'text'}>Два профессиональных архитектора: Ольга Мельнейчук и Александр Толпинец,
                        дизайнер по интерьерам с отменным чувством стиля: Анна Нагаева,
                        волшебный декоратор и художник Мария Короткова,
                        опытный менеджер по отельному бизнесу Вера Котова,
                        профессионал по согласованию разрешительных документов Ирина Гусакова,
                        фантазийный флорист и декоратор Наталья Короткова,
                        а также мои партнеры: антиквары, столярные мастерские, резчики по камню, художники по гипсу и другие.</p>
                </div>
                <div className={'item'}>
                    <h3 className={'title'}>Как говорят мои заказчики: "У Ирины всегда найдутся нужные люди - от винодела до финансиста".</h3>
                    <p className={'text'}>Офис, в котором мы работаем, находится в красивейшем историческом месте Москвы – на территории Петровского парка, в усадьбе «Черный Лебедь».
                        Камерная обстановка территории и офиса, спокойная атмосфера среди суеты города.
                        В разделе «Контакты» вы найдете фотографии наших мест.</p>
                </div>
            </div>
        </div>
    );
}

export default IrinaBogatikova;
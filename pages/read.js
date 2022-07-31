/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import Link from 'next/link'
import Card from '../components/Card/Card'
import CardButton from '../components/Card/CardButton'
import CardSection from '../components/Card/CardSection'
import CardSubtitle from '../components/Card/CardSubtitle'
import CardText from '../components/Card/CardText'
import CardTitle from '../components/Card/CardTitle'
import PromoYearBackground from '../components/PromoYearBackground'
import PromoYearText from '../components/PromoYearText'
import Card_UN from '../components/Card/Texts/Card_Unshakeable'

export default function Home() {
  return (
    <div className="header">
      <header>
        <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
          <div className="px-6 w-full flex flex-wrap items-center justify-between">
            <div className="items-center">
                <Link href="/">
                    <a className='font-bold text-xl'>TextFolio</a>
                </Link>
            </div>
            <div className='items-center grid gap-5 grid-cols-2'>
              <Link href="/read">
                <a>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" strokeLineJoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    <div className="text-center bg-gray-300 text-gray-800 py-20 px-6">
        <h1 className="text-6xl font-bold mt-0 mb-6">Read</h1>
    </div>
        <PromoYearBackground>
            <PromoYearText>Perls of Fate - 2021/2022</PromoYearText>
        </PromoYearBackground>
        
        <CardSection>
            <Card>
                <Card_UN>
                <br></br>
                <CardTitle>
                  Unshakeable
                  <CardSubtitle>Mariam Bourma Ali</CardSubtitle>
                </CardTitle>
                <br></br>
                <CardText>
                    “No one is useless in this world who lightens the burdens of another.” Indeed, since her mother's death, she dedicated her life to this fight against unfairness and helping people to improve their living conditions. But will her body follow her ambitions? Or is everything impossible?
                </CardText>
                <br></br>
                <CardButton href="/"/>
                </Card_UN>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    Low-ranking souls
                    <CardSubtitle>Kadiatou Sylla</CardSubtitle>
                </CardTitle>
                <br></br>
                <br></br>
                <br></br>
                <CardText>
                    Sometimes I wonder if I was somehow cursed by a higher being for my sins in my past lives.
                </CardText>
                <br></br>
                <br></br>
                <br></br>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    IKEA mania
                    <CardSubtitle>Anaïs Couapel</CardSubtitle>
                </CardTitle>
                <br></br>
                <CardText>
                    A man, an addiction. To a girl or to a vacuum cleaner? This is the story of a man who can’t sleep if he hasn’t bought everything he can afford from IKEA, unless he falls in love. Is the love of his life  the solution to all his problems? Loving, burning and killing, that’s the way he handled things.
                </CardText>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    Seth of Santo Padre
                    <CardSubtitle>Jocelyn Arnold</CardSubtitle>
                </CardTitle>
                <br></br>
                <CardText>
                    This story depicts the life of an orphan that people called Seth "Enciado". He was born in the US, he had a typical life until the age of three and his life changed drastically. He was not raised to be a random guy, but his destiny seems to already be sealed. Will he ward off the curse?
                </CardText>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    The devil is in the details
                    <CardSubtitle>Corto Laidet</CardSubtitle>
                </CardTitle>
                <br></br>
                <CardText>
                    Michael has been living a peaceful and robotic routine, enjoying every moment. His life became eventful after the meeting of a mysterious girl… She seemed to be like an angel for him, but maybe she was the devil in disguise. What vices will the young man discover?
                </CardText>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    Madison
                    <CardSubtitle>Lou-Ann Onillon</CardSubtitle>
                </CardTitle>
                <br></br>
                <CardText>
                A not so perfect life. An unexpected solution. An unresolved case. Untold confessions. Repressed reality. Unwanted visions. Awakened trauma. All these words, tightly connected, will move Madison and lead her to the unnerving truth. Will she finally admit and accept it?
                </CardText>
                <br></br>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    The wood
                    <CardSubtitle>Eloïse Prince</CardSubtitle>
                </CardTitle>
                <br></br>
                <br></br>
                <CardText>
                    This is the story of a girl named Anastatia whose life will completely change in just one week. The discovery of family secrets following national events in Russia will put her in a messy situation. How will she manage this?
                </CardText>
                <br></br>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    Who I realy am
                    <CardSubtitle>Dylan Gandon</CardSubtitle>
                </CardTitle>
                <br></br>
                <CardText>
                    Jacob, this clever boy who has just moved to Cleveland, just got back to school after the summer holidays. His intention is to have a clear shift in his life, by making friends for instance. In this new life, a mysterious woman will take over Jacob’s life. What will happen between these two ?
                </CardText>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    Don't lower your arms
                    <CardSubtitle>Jade Lenain</CardSubtitle>
                </CardTitle>
                <br></br>
                <br></br>
                <CardText>
                    Guns are a major issue in the United States. Giving up is not part of their vocabulary. TV shows you the pretty part of this country. Here is the naked truth
                </CardText>
                <br></br>
                <br></br>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    Lucky day
                    <CardSubtitle>Killian Gaye</CardSubtitle>
                </CardTitle>
                <br></br>
                <CardText>
                    Everybody needs a bit of luck in their lives, but some are fighting that luck because luck can not always be on your side. In fact so far Mark Random has been living a clearly meaningless life but at some point, that bad luck is going to switch, but switch into what ?
                </CardText>
                <br></br>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    The story of how I overcame my worst fear
                    <CardSubtitle>Jeanne Marinoni</CardSubtitle>
                </CardTitle>
                <br></br>
                <CardText>
                Since her childhood, Tess Chatterbox has been afraid of talking in public, of people noticing her. But her life is about to change when she has to audition for the main character in a musical. Will she be able to challenge her greatest fear ?
                </CardText>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    Chase-ing
                    <CardSubtitle>Chase-ing</CardSubtitle>
                </CardTitle>
                <br></br>
                <CardText>
                Hazy Slumber, 16 years old, was living an average teenage life: still living at her parents’, going to school and hanging out. One day, she met a ghostly teenage boy around her age who reminded her of one who had appeared in a nightmare, and who would then keep showing up at unexpected times. Who is he? Why does he keep showing up?

                </CardText>
                <CardButton href="/"/>
            </Card>
            <Card>

                <br></br>
                <CardTitle>
                    That bird flying away
                    <CardSubtitle>Anna Meschin</CardSubtitle>
                </CardTitle>
                <br></br>
                <br></br>
                <CardText>
                    If your world had turned upside down and everyone close to you had suddenly disappeared, would you finally realize what life had given you? Let’s see about John… a teenager just like any other, living in Boston.
                </CardText>
                <br></br>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    Against herself
                    <CardSubtitle> Alys Vuranok</CardSubtitle>
                </CardTitle>
                <br></br>
                <br></br>
                <CardText>
                    Alia is a fearless young woman who likes to stand up for everyone. One day something is going to happen to her and is going to change her vision of life. But is her reality the common reality ? That’s what you’re about to figure out.
                </CardText>
                <br></br>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    The dew
                    <CardSubtitle>Gaëlle Monneron</CardSubtitle>
                </CardTitle>
                <br></br>
                <br></br>
                <CardText>
                I had great expectations about my father’s studio. I loved the fact that he had hidden a magic world in there. Now I’m here, in front of one of his paintings, one that represents a garden, with a little wooden bridge and a river.
                </CardText>
                <br></br>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    Muscles and a heart
                    <CardSubtitle>Simon Vayer</CardSubtitle>
                </CardTitle>
                <br></br>
                <CardText>
                    “Every good day starts with a protein shaker”. That's what Richard Luckman thought. He was the luckiest and most muscular man in the world (according to himself), but one day his daily life changed forever. Follow the crazy adventures of Richard and see him ask himself this defining question: “Was I really doing the right thing?”
                </CardText>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    Unsafe flight
                    <CardSubtitle>Margaux Roussel</CardSubtitle>
                </CardTitle>
                <br></br>
                <CardText>
                    He had always loved books. Getting lost in imaginary worlds was his favorite thing. But what if one day, while he was finally enjoying the trip of his dreams, he had to actually dive into the hazardous universe of his favorite book?
                </CardText>
                <br></br>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    Mike Device
                    <CardSubtitle>Zélie Thuault</CardSubtitle>
                </CardTitle>
                <br></br>
                <CardText>
                    Mike Device, an orphan, just got selected to attend the university of his dreams in Indianapolis. Such as Techpo, his new friend from the university. He didn’t know how to deal with him at first but they ended up becoming really close. Yet he acted weird as if he had something to achieve, as if their meeting had been planned from the start.
                </CardText>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    St Nicolas School
                    <CardSubtitle>Mariam Bourma Ali</CardSubtitle>
                </CardTitle>
                <br></br>
                <CardText>
                    Agatha Strange is a 15 year old teenager from Philadelphia. She is used to exploring new places with her two friends Lewis and William. One day, they will find themselves in an old abandoned Catholic School named “St Nicolas”. They will meet a mysterious character who will ask them to accomplish 3 missions.
                </CardText>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    The forgotten spirits
                    <CardSubtitle>Aurélie Simon</CardSubtitle>
                </CardTitle>
                <br></br>
                <CardText>
                    In a small town, Sierra, a young girl, was leading a meaningless life. She is going to see her life being turned upside down by many events. Sierra will see herself helping many needy people, but are they really here? With us? The appearance of a ghost, a secret mission. Will she manage to endure her new life? 
                </CardText>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    My brightness
                    <CardSubtitle>Loïs Lericolais </CardSubtitle>
                </CardTitle>
                <br></br>
                <br></br>
                <CardText>
                    The images came and went all the time, without a single moment of relief, she had the feeling that her brain couldn’t breathe, that she would have to deal with with those horrific flashbacks for the rest of her life
                </CardText>
                <br></br>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    ReLife
                    <CardSubtitle>Axel Paumard</CardSubtitle>
                </CardTitle>
                <br></br>
                <br></br>
                <br></br>
                <CardText>
                    “So, my name is Darene, I work for ReLife laboratory, I have been watching you for 1 year and I chose you. You are my subject.”
                </CardText>
                <br></br>
                <br></br>
                <CardButton href="/"/>
            </Card>
            <Card>
                <br></br>
                <CardTitle>
                    Manhattan nightmare
                    <CardSubtitle>Zoe Legros</CardSubtitle>
                </CardTitle>
                <br></br>
                <br></br>
                <br></br>
                <CardText>
                I'm Jonathan Skull, I work on Wall Street, I have a wonderful wife, a lot of money but … I just got assassinated ! Who killed me ?
                </CardText>
                <br></br>
                <br></br>
                <CardButton href="/"/>
            </Card>
        </CardSection>
    </div>
  )
}

/* eslint-disable react/no-unknown-property */
import Link from 'next/link'

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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </nav>
        <div className="text-center bg-unshakeable text-gray-800 py-20 px-6">
            <div className="box-border bg-white rounded-3xl shadow-2xl py-4 bg-opacity-60">
                <h1 className="text-6xl font-bold mb-1">Unshakeable</h1>
                <h2 className="text-4xl font-bold ">Mariam Bourma Ali</h2>
                <h2 className="text-2xl font-bold">Pearls of Fate : 2021/2022</h2>
            </div>
        </div>

        <div className="text-center text-lg lg:ml-96 lg:mr-96 md:ml-64 md:mr-64 sm:ml-32 sm:mr-32 mb-32 ">
            <div>
                <div className="mt-2 font-bold text-xl underline">
                    1. “Great expectations”
                </div>
                <br></br>
                <div>
                    I had great expectations about the elections of the representatives.
                    <br></br>
                    It could be difficult for me to achieve everything I had planned and dreamed of.
                </div>
                <br></br>
                <a className="font-bold">* * *</a>
                <br></br>
                <br></br>
                <div>
                    The dew is brightening. By looking at it, Rosalind felt more ambitious. The day after, Rosalind
                    had collected the signatures that would allow her to be the representative of
                    her university for the conventions. The purpose of this convention is for each student to
                    bring up a subject that they find important .
                    During the collection of the signatures, a man dressed with a navy blue jacket approached her. At
                    first she was reluctant to talk to him, due to his uncanny face expression. Although it was a bit
                    awkward at first, she found him really interesting : she learned that he had been raised by a black
                    woman. His mother wasn’t committed to his education and the woman had been taking care of
                    him for a long time. That is why he now feels an endless love for her. John wanted to be a part of
                    her project.
                    <br></br>
                    <br></br>
                    Days passed and Rosalind was eventually elected.
                </div>
                <br></br>
                <a className="font-bold">* * *</a>
                <br></br>
                <br></br>
                <div>
                    Today was the day when Rosalind had to deliver her speech to the crowd. A bit stressed, she
                    turned around. A man came to her to lead her to the stage. She glanced at the crowd.
                    Rosalind has an asset : she is eloquent.
                    <br></br>
                    <br></br>
                    She took a deep breath and began : « Noone has the right to oppress a minority ... 
                    This why I am here : to make it clear to you ».
                    <br></br>
                    <br></br>
                    There was a long silence. The whole crowd was staring at her. They were all fascinated.
                </div>
            </div>
            <br></br>
            <br></br>
            <div>
                <div className="mt-2 font-bold text-xl underline">
                    2. “Guilty”
                </div>
                <br></br>
                <div>
                    After my speech, I received a lot of compliments from the professors of my university, from
                    students. Later that day, I had not come to expect that special compliment from Azra Coleman.
                    <br></br>
                    <br></br>
                    Azra is one of those people who could make you feel her values through their work. She is a
                    strong and powerful woman who suffered for a long time. When she came to Harvard people
                    considered her as guilty : Why ? People don’t really know, but in one of her interviews, she said
                    that someone came to her and yelled that she did not belong there but to the street. I really love
                    that part of her personality because she did not reply but now she can tell that person « Look at me
                    now » . I’m one of her huge fans and has been following her work since the very beginning. She has
                    a charisma that inspired me to be what I wanted to be and achieve my dreams. She is one of these
                    people who would stand up for the victims. After talking to her, the way I was feeling was
                    ambiguous. The way she talks emphasizes the quiet part of her, which is weird because before that,
                    I always figured out she was fierce and cold. The media had given me that impression.
                    <br></br>
                    <br></br>
                    After our conversation, we went to the court as i&apos;m a law student. But something happened that
                    made my admiration for Azra even more daunting. A lawyer accused a young lady of corruption but
                    in that case it was clear that it was her boss who had used all his contacts to send her away to
                    prison. And at that moment Azra bravely stood up and as always she grasped everyone&apos;s attention
                    and said « Because of her skin colour, you want to send this lady to jail. Zealots! I’m pretty sure
                    there are witnesses who could make it clear she is completely innocent. »
                    <br></br>
                    <br></br>
                    Her plea was amazing. Everybody was impressed. She talked with so much fluency. Through her
                    speech we could feel she was strong albeit a little nervous and uncomfortable. Azra is like a turtle.
                    She is strong but on the inside she is fragile. After she told me about her trauma, I can relate to her
                    state of mind.
                    <br></br>
                    <br></br>
                    Even if she seems to be unshakeable at trials, back home she suffers a lot of crises. As I understand
                    it, her current house reminds her of the family house where she no longer lives. Her house is the
                    place where she suffered the most due to her abusive father. As we were leaving the courtroom,
                    Azra started to speak in a weird, confused way and then she just fell down on the ground, fainted
                    and would not recover her senses.
                </div>
            </div>
            <br></br>
            <br></br>
            <div>
                <div className="mt-2 font-bold text-xl underline">
                    3. “A poem”
                </div>
                <br></br>
                <div>
                    A few months went away since the day I fainted. Even if I have become more exhausted, I’m
                    feeling more confident; lots of people applauded me after my speech. Things are getting better,
                    indeed one of the most powerful and famous TV hosts, Harvey Steve, invited me on his show “Clash
                    with politicians”. I was indeed excited insofar as it will allow me to express my state of mind about
                    the state of our society.
                    <br></br>
                    <br></br>
                    The day of “Clash with politicians“ came. I knew everything I had to tell them but my ideas are
                    scattered. People were really nice to me and lead me to the studio. Mr Harvey began with a
                    delightful reference to Obama&apos;s Inauguration speech back in 2009. Now that was a really
                    interesting speech. I should have listened to it entirely.
                    <br></br>
                    <br></br>
                    Then Steve launched the debate with a racist quote from an anonymous person.
                    <br></br>
                    <br></br>
                    <div className="italic font-semibold">

                        <br></br>
                        “We shouldn’t let them come to our country, they are erasing our community”
                        <br></br>
                        <br></br>
                        “So Azra what’s your opinion about this?”
                        <br></br>
                        <br></br>
                        “I think the fear people feel about strangers is non-sense; to have such a mindset nowadays is
                        unfathomable”...
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                    The debate went on until the moonlight and it was great to have been able to acknowledge my
                    thoughts about such meaningful topical issues.
                    <br></br>
                    <br></br>
                    On my way back home under my car I saw a piece of paper which caught my attention, usually it
                    was unlikely for me to pick anything up from the dirty ground. I unfolded it and there was a poem
                    written on it:
                    <br></br>
                    <br></br>
                    <div className="font-bold italic">
                        “When people fake their real face,
                        <br></br>
                        it allows them to manipulate
                        <br></br>
                        people
                        <br></br>
                        such as a vampire.
                        <br></br>
                        Now darkness is getting closer
                        <br></br>
                        your will may fall into them.”
                    </div>
                </div>
                <br></br>
                <br></br>
                <div>
                    <div className="mt-2 font-bold text-xl underline">
                        4. “Let go”
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        Having found this note under my car made me think that I must have had quite a few enemies.
                        However, I would not let myself feel intimidated by these crooks.
                        <br></br>
                        <br></br>
                        The night is over.
                        <br></br>
                        <br></br>
                        And that motivated me to make more interviews. Indeed my goal was to show the world the
                        struggle I had to put up with.
                        <br></br>
                        <br></br>
                        In the afternoon I went back to the university, which allowed me to see Jack again. With Jack we
                        got together to prepare a new important event. Indeed I wanted to set up a pretty big eloquence
                        contest. I had always thought that people of my age didn’t have the opportunity to talk about what
                        they feel is significant or what messages they might want to convey. We only needed to get the
                        green light from the director of our Uni, which went like a breeze as he thought our project could
                        improve the reputation of the University.
                        <br></br>
                        <br></br>
                        Many people came to the event. Most of them delivered great speeches. In the evening, after the
                        eloquence contest, we had collected a ton of money which would help me to launch my foundation.
                        Indeed I had always wanted to build a foundation to help people in need.
                        <br></br>
                        <br></br>
                        But later that day, I got hit by strong migraines followed by atrocious chest pains. I was feeling
                        my body letting go until everything went black.
                        <br></br>
                        <br></br>
                        I woke up in a place that was totally unknown to me. I saw people that I didn&apos;t know. The doctor
                        told me that I had been in a coma for 5 months and that I was now tetraplegic so everything I had
                        dreamed about... had never happened.
                    </div>
                </div>
            </div>
        </div>
      </header>
    </div>
  )
}

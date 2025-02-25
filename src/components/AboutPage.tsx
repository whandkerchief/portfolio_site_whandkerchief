import React from "react";
import photo1 from "./../assets/about-photos/a-photo1.png";
import photo2 from "./../assets/about-photos/a-photo2.png";

interface AboutPageProps {
    currentLanguage: string;
}

export default function AboutPage({ currentLanguage }: AboutPageProps): JSX.Element {
    const languageClass = currentLanguage === 'en' ? 'en' : 'jp'; // Determine the language class

    return (
        <div className="container">
            <div className="page" style={{ opacity: 1, pointerEvents: "auto" }}>
                <div className="page-title">
                    {currentLanguage === 'en' ? 'About' : '自己紹介'}
                </div>

                <div className='page-body'>
                    {currentLanguage === 'en' ? (
                        <>
                            I can tell you about my academic achievements, or my past work experience, but I want to tell you about what really motivates me to work with creative computing. 
                        </>
                    ) : (
                        <>
                            これまでの学業での成果や職務経験についてお話しすることもできますが、本当にお伝えしたいのは、私がクリエイティブコンピューティングに取り組む際の原動力についてです。
                        </>
                    )}
                </div>

                <br/>

                <div className='page-body'>
                    {currentLanguage === 'en' ? (
                        <>
                            In the summer of 2023, I spent 4 months working on a sardine fishing boat on an island off the coast of Kagawa prefecture in Japan. The sardines we catch are boiled and dried before being sent to market, and become the soup base for udon which Kagawa prefecture is most well known for. The whole operation of catching and processing the sardines is a traditional craft that has been passed down for generations, and each step of the process has evolved and been refined meticulously to become what it is today.
                        </>
                    ) : (
                        <>
                            2023年の夏、香川県沖にある伊吹島で、4か月間イワシ漁船で働きました。私たちが捕ったイワシはイリコと呼ばれ、茹でて乾燥させた後、香川県が最も有名とする讃岐うどんのだしになります。イワシを捕り加工する一連の工程は、何世代にもわたり受け継がれてきた伝統的な技術であり、各工程が長い年月をかけて精密に進化し、今日の形になっています。
                        </>
                    )}
                </div>

                <div className='page-media-container'>
                    <img src={photo1} className='page-photo' />
                </div>

                <br /><br />

                <div className="page-body">
                    {currentLanguage === 'en' ? 'But what does any of this have to do with creative computing?' : 'しかし、この体験とクリエイティブコンピューティングがどう関係するのでしょう？'}
                </div>

                <br />

                <div className='page-body'>
                    {currentLanguage === 'en' ? (
                        <>
                            At the point of coming to the island, I was a second year computer science student and was taking time off from my part time job as a VR developer in the UK. The contrast between the traditional craft of the fishermen that had been passed down for generations and the modern volatile paradigm of VR development had got me thinking about how I wanted to approach my future as a developer. The taste and value of dried sardines has been recognized for generations, but a VR headset and anything developed on it becomes obsolete in a year or two.
                        </>
                    ) : (
                        <>
                            私が島に来た時点では、私はコンピュータサイエンスを勉強するの大学2年生であり、イギリスでVR開発者としてのアルバイトを一時休業しているところでした。世代を超えて受け継がれてきた漁師たちの伝統技術と、常に移り変わるVR開発の現代的で不安定なパラダイムとの対比が、私の将来の開発者としての方向性を考えさせました。何世代にもわたってその味と価値が認められている乾燥イワシとは対照的に、VRヘッドセットやその上で開発されたものは1～2年で廃れることがほとんどです。
                        </>
                    )}
                </div>

                <br />

                <div className='page-media-container'>
                    <img src={photo2} className='page-photo' />
                </div>

                <br />

                <div className='page-body'>
                    {currentLanguage === 'en' ? 'In a craft that is constantly evolving, how can what I develop have value that is recognized for generations?' : '絶えず進化する技術の中で、私が開発するものにどのような意味を持たせられるのでしょうか？'}
                </div>

                <br />

                <div className='page-body'>
                    {currentLanguage === 'en' ? (
                        <>
                            Through creative computing, I want to shine light on culture with the modern technology that is available today. If sardine fishing is a traditional craft, I think creative computing is a modern craft. I believe that the evolution of creative technology can continuously provide different stages for tradition to shine, and communicate the beauty to people. I like to use the fishing boats as a comparative metaphor, as the boats have evolved drastically in the past 100 years to catch more and more sardines to bring udon to people. I want to create work that supports timeless value in the same way.
                        </>
                    ) : (
                        <>
                            私クリエイティブコンピューティングを通じて、現代の技術を活用し、文化に光を当てたいと考えています。イワシ漁が伝統技術であるのならば、クリエイティブコンピューティングは現代技術だと思います。クリエイティブ技術の進化は、伝統が輝けるさまざまな舞台を提供し、その美しさを人々に伝える力を持っていると信じています。過去100年間で漁船は大きく進化し、より多くのイワシを捕れるようになり、人々にうどんを届ける助けとなりました。同じように、私は進化していくクリエイティブ技術を用いて世界の様々な場所に存在する伝統や文化を支えたいと思っています。
                        </>
                    )}
                </div>

                <br/><br/>

                <div className="page-title">
                    {currentLanguage === 'en' ? 'Education' : '学歴'}
                </div>

                <div className="page-body">
                {currentLanguage === 'en' ? (
                        <>
                            <strong>May 2020</strong> Graduated Yokohama International School
                            <br />
                            <strong>May 2024</strong> Graduated Lancaster University, BSc Computer Science (First Class Honours)
                        </>
                    ) : (
                        <>
                            <strong>２０２０年５月</strong>: 横浜インターナショナルスクール卒業
                            <br />
                            <strong>２０２４年５月</strong>: ランカスター大学 コンピュータサイエンス学士号取得(First Class Honours)
                        </>
                    )}
                </div>

                <br />

                <div className="page-title">
                    {currentLanguage === 'en' ? 'Work Experience' : '職歴'}
                </div>

                <div className="page-body">
                {currentLanguage === 'en' ? (
                        <>
                            <strong>May 2020</strong>: Search Engine Optimization Intern – CarterJMRN (Tokyo, Japan)
                            <br />
                            <strong>June–August 2021</strong>: Goat Farmer – Terre Di Chiena (Donini, Italy)
                            <br />
                            <strong>May–July 2022</strong>: Digital Admin Assistant – ISS(Information Systems Services) Lancaster University (Lancaster, UK)
                            <br />
                            <strong>November 2022–March 2023</strong>: Integrated Systems Developer Intern – School Synergy (Preston, UK)
                            <br />
                            <strong>March 2023–May 2024</strong>: VR Developer – ISS ITPI(IT Partnering & Innovation) (Lancaster, UK)
                            <br />
                            <strong>Summers 2023, 2024</strong>: Sardine Fisherman – 丸甚水産 (Kagawa, Japan)
                            <br />
                            <strong>October 2024–Present</strong>: Maintenance Worker – TeamLab Planets (Tokyo, Japan)
                        </>
                    ) : (
                        <>
                            <strong>２０２０年５月</strong>: ＳＥＯ最適化インターン – CarterJMRN (東京・日本)
                            <br />
                            <strong>２０２１年６月～８月</strong>: ヤギ使い – Terre Di Chiena (ドニーニ・イタリア)
                            <br />
                            <strong>２０２２年５月～７月</strong>: ウェブサイト管理アシスタント – ISS(Information Systems Services) Lancaster University (ランカスター・イギリス)
                            <br />
                            <strong>２０２２年１１月～２０２３年３月</strong>: システムデベロッパインターン – School Synergy (プレストン・イギリス)
                            <br />
                            <strong>２０２３年６月～８月</strong>: VR体験開発者 – ISS ITPI(IT Partnering & Innovation) (ランカスター・イギリス)
                            <br />
                            <strong>２０２３年、２０２４年　夏季</strong>: イワシ漁師 – 丸甚水産 (香川・日本)
                            <br />
                            <strong>２０２４年１０月～現在</strong>: 作品メンテナンスのアルバイト – TeamLab Planets (東京・日本)
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

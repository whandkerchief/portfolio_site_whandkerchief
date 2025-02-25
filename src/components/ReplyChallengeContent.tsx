import React from "react";
import replyImage1 from './../assets/reply-photos/Photo1.png';
import replyImage2 from './../assets/reply-photos/Photo2.png';

interface ReplyChallengeContentProps {
    currentLanguage: string;
}

export default function ReplyChallengeContent({ currentLanguage }: ReplyChallengeContentProps){
    const languageClass = currentLanguage === 'en' ? 'en' : 'jp'; 

    return (
        <div>
            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        The Reply Challenges are a series of online creative coding and marketing challenges. 8 international firms set creative briefs that are tackled by teams of 2-4 people in a 48 hour challenge. I participated in this challenge with 3 peers at university studying a marketing degree, where we were ultimately placed second in the competition.
                    </>
                ) : (
                    <>
                        Reply Challengesは、オンラインで行われるコーディング、およびマーケティングのチャレンジシリーズです。8つの企業が企画概要を設定し、それに対して2～4人のチームが48時間以内に取り組みます。私は、マーケティングを学ぶ大学の仲間3人とこのチャレンジに参加し、2位に入賞しました。
                    </>
                )}
            </div>

            <br />

            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        The creative brief we undertook was set by T-Mobile (one of the world's leading integrated telecommunications companies), entailing the gamification of an aspect of their business to provide a fresh client experience. We tackled this by integrating a simple 2D game to T-Mobile’s existing app, with gimmicks that parallel offered services. We proposed ideas to win rewards through the game to incentivise interaction, and a leaderboard feature to introduce inter-customer interaction.
                    </>
                ) : (
                    <>
                        私たちが取り組んだ企画は、世界有数の統合通信企業であるT-Mobileによって設定されました。その内容は、ビジネスのある側面をゲーム化（ゲーミフィケーション）し、新しいクライアント体験を提供するというものでした。私たちは、T-Mobileの既存のアプリにシンプルな2Dゲームを統合し、提供されているサービスを模した仕掛けを盛り込む提案を行いました。さらに、ゲームを通じて報酬を獲得できるアイデアを提案し、顧客間の交流を促進するためのリーダーボード機能を導入するなどの工夫を用いました。
                    </>
                )}
            </div>

            <br />

            <div className={`page-media-container`}>
                <img src={replyImage1} className='page-photo' />
            </div>

            <br /><br />

            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        For my role in this challenge, I developed a demo on Unity to showcase a visualization of the idea if it were to be implemented. Simplicity was the key factor in development, not only because of the short time frame for development, but also to facilitate customer engagement. Based on existing gamification examples, we hypothesized that customers will only want to spend short amounts of time on the game component, so the simple geometric game style was decided on. The demo project was submitted to judges along with a report of market research and proof of customer interaction based on existing examples.
                    </>
                ) : (
                    <>
                        このチャレンジにおける私の役割は、Unityを使用して、アイデアが実装された場合のビジュアル化をデモとして開発することでした。開発において重要だったのは「シンプルさ」です。これは、短期間で開発を行う必要があったためだけでなく、顧客のエンゲージメントを促進するためでもありました。既存のゲーミフィケーションの事例を参考に、顧客がゲームコンポーネントに費やしたいと思う時間は短時間であると仮定し、シンプルな的なゲームスタイルを選択しました。                    
                    </>
                )}
            </div>

            <br />

            <div className={`page-media-container`}>
                <img src={replyImage2} className='page-photo' />
            </div>

            <br />

            <a href="https://challenges.reply.com/tamtamy/brief/digital-event-2021" className={`page-body-link page-body-link-${languageClass}`}>
                {currentLanguage === 'en' ? 'Learn more about the Reply Challenges here' : 'Reply Challengeの詳細はこちら'}
            </a>

            <br /><br /><br />
        </div>
    );
}
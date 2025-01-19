import React, { useRef, useState, useEffect } from 'react';
import UnityComponent from './UnityComponent';
import PhotoGallery from './PhotoGallery';
import ButtonCarousel from './ButtonCarousel';
import image1 from './../assets/projects-gallery/Photo1.png';
import image2 from './../assets/projects-gallery/Photo2.png';
import image3 from './../assets/projects-gallery/Photo3.jpg';
import ruskinImage3 from './../assets/ruskin-photos/Photo3.png';
import ruskinImage4 from './../assets/ruskin-photos/Photo4.png';
import ruskinImage5 from './../assets/ruskin-photos/Photo5.png';
import ruskinVideo1 from './../assets/ruskin-photos/ISBRecording.mp4';
import replyImage1 from './../assets/reply-photos/Photo1.png';
import replyImage2 from './../assets/reply-photos/Photo2.png';
import experimentsImage1 from './../assets/Experiments-photos-and-videos/Photo1.png';
import experimentsImage2 from './../assets/Experiments-photos-and-videos/Photo2.png';
import experimentsVideo1 from './../assets/Experiments-photos-and-videos/Video1.mp4';
import experimentsVideo2 from './../assets/Experiments-photos-and-videos/Video2.mov';
import gameImage1 from './../assets/game-photos/Photo1.png';
import gameImage2 from './../assets/game-photos/Photo2.png';
import gameImage3 from './../assets/game-photos/Photo3.jpg';
import gameImage4 from './../assets/game-photos/Photo4.jpg';
import gameImage5 from './../assets/game-photos/Photo5.png';
import gameImage6 from './../assets/game-photos/Photo6.jpg';
import gameImage7 from './../assets/game-photos/Photo7.png'
import gameImage8 from './../assets/game-photos/Photo8.png';
import gameVideo1 from './../assets/game-photos/game-video.mp4';

const photos = [ruskinImage4, image1, image2, experimentsImage1, experimentsImage2, ruskinImage3, ruskinImage5, image3];
const ruskin_photos = [image1, image2, ruskinImage3, ruskinImage5, ruskinImage4];
const game_photos = [gameImage1, gameImage2, gameImage3, gameImage4, gameImage5, gameImage6, gameImage7];

interface RuskinVRContentProps {
    currentLanguage: string;
}

function RuskinVRContent({ currentLanguage }: RuskinVRContentProps): JSX.Element {
    const languageClass = currentLanguage === 'en' ? 'en' : 'jp'; // Determine the language class

    return (
        <div>
            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        The ITPI team at Lancaster University focuses on designing innovative ventures that leverage emerging technologies to enhance learning. Composed of senior and also many student developers, the team has developed products such as the iLancaster app, which facilitates assignment management and lecture attendance tracking via Bluetooth. In 2023, the ITPI team expanded into virtual reality (VR), and I joined two other student developers in a team to work on projects aimed at integrating VR into the university’s educational environment.
                    </>
                ) : (
                    <>
                        ランカスター大学のITPIチームは、新興技術を大学の教育に役立てるプロジェクトを開発することに焦点を当てています。このチームは経験豊富なデベロッパだけでなく、多くの学生開発者で構成されており、「iLancaster」アプリなどの製品を開発しました。このアプリは、Bluetoothを利用して課題管理や講義出席追跡を可能にしています。2023年に、ITPIチームはVRの分野に進出し、私は他の2人の学生開発者と共に、様々なVRを用いたプロジェクトに取り組みました。
                    </>
                )}
            </div>
            
            <br />

            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        One of the most notable projects was the VR Ruskin project, which delivered Lancaster University’s collection of John Ruskin’s artwork through a series of interactive VR experiences. The project client was the Ruskin group, who manage John Ruskin’s work, which stretches from paintings and sketches to early photographs known as daguerreotypes. The project was brought to us as part of an effort to secure funding for the renovation of the Ruskin Museum building on the campus of Lancaster University, which planned to house a collection of Ruskin’s work that the university owns.
                    </>
                ) : (
                    <>
                        その中でも特に注目すべきプロジェクトが「Ruskin VR プロジェクト」で、ランカスター大学が所有するジョン・ラスキンの芸術作品を一連のインタラクティブなVR体験として提供しました。このプロジェクトは、ジョン・ラスキンの作品を管理する「Ruskin Group」の依頼の下で作成され、ランカスター大学キャンパスにあるラスキン博物館の改修資金を確保するための取り組みの一環でした。この博物館には大学が所有するラスキンの作品が展示される予定です。
                    </>
                )}
            </div>

            <br />

            <PhotoGallery photos={ruskin_photos} />

            <br/>

            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        In order to secure funding, there were two main audiences to advocate for the importance of housing the Ruskin collection on campus. First were high-profile investors of the university, which included members of parliament, and the second were students of the university that we needed the support of. The project culminated in three distinct VR experiences developed for the Meta Quest 3 and HTC Vive XR Elite:
                    </>
                ) : (
                    <>
                        資金確保のためには、ラスキンコレクションをキャンパス内に保存することの重要性を大学の有力投資家（議会メンバーを含む）、そして大学の学生たちに伝えることが必須でした。Ruskin VR は、Meta Quest 3およびHTC Vive XR Elite向けに開発された3つのVR体験に結実しました：
                    </>
                )}
            </div>

            <br />

            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        <strong>The VR Ruskin Interactive Sketchbook:</strong> Users explored 3D renderings of objects Ruskin had sketched, brought to life through VR interaction.
                        <br />
                        <br />
                        <strong>Ruskin in Venice:</strong> A virtual map of Venice allowed users to interact with locations significant to Ruskin’s life and work.
                        <br />
                        <br />
                        <strong>The Ruskin VR Painting Experience:</strong> Users painted on a virtual canvas, with their creations processed by a DALL-E-powered backend to generate Ruskin-style imagery.
                        <br />
                        <br />
                    </>
                ) : (
                    <>
                        <strong>The VR Ruskin Interactive Sketchbook:</strong> ユーザーがラスキンの描いた物の3DレンダリングをVRでのインタラクションを楽しむVR体験。
                        <br />
                        <br />
                        <strong>Ruskin in Venice:</strong> ベネチアの仮想マップで、ラスキンの生涯や作品に関連する場所とインタラクションし学べるVR体験。
                        <br />
                        <br />
                        <strong>The Ruskin VR Painting Experience:</strong> ユーザーが仮想キャンバスに絵を描き、その作品がDALL-Eを用いたバックエンドで処理され、ラスキン風の画像を生成します。
                        <br />
                        <br />
                    </>
                )}
            </div>

            <br/>

            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        As a team of 3, each team member took responsibility for one experience, and I was tasked with the development of the Interactive Sketchbook.
                    </>
                ) : (
                    <>
                        私たち3人のチームでは、それぞれが1つの体験の開発を担当し、私は Interactive Sketchbookの開発を任されました。
                    </>
                )}
            </div>

            <br />

            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        The Interactive Sketchbook placed users in a VR environment with a sketchbook in front of them. Users were then able to flip through the sketchbook with a swiping motion using their hands, allowing them to view images of sketches produced by Ruskin. Then, by placing their hand on a sketch, users were transported into the sketch where they saw a 3D rendering of the object that they had sketched in their hands. By moving their hands around they were able to rotate and scale the 3D object. The two main features this project entailed was enabling user interaction through hand tracking, and a shader program that allowed users to feel like they were “inside the sketch”. 
                    </>
                ) : (
                    <>
                        「Interactive Sketchboo」では、ユーザーがVR環境内でスケッチブックを目の前に置かれた状態で体験します。ユーザーは手を使ったスワイプ操作でスケッチブックのページをめくり、ラスキンが描いたスケッチの画像を閲覧できます。その後、スケッチに手を置くと、そのスケッチ内に入り込み、ラスキンが描いたオブジェクトの3Dレンダリングを手の中で体験できます。ユーザーは手の動きでオブジェクトを回転させたり拡大することが可能です。このプロジェクトでの主な特徴は、ハンドトラッキングを通じたユーザーインタラクションの実現と、「スケッチの中にいる」感覚を生み出すシェーダープログラムの開発でした。
                    </>
                )}
            </div>

            <br/>

            <div className="page-media-container">
                <video
                    className="page-photo"
                    autoPlay
                    muted
                    loop
                    playsInline // Ensures mobile browsers handle video playback better
                >
                    <source src={ruskinVideo1} />
                    Your browser does not support the video tag.
                </video>
            </div>
            <br />
            <br />
            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        Since the project was developed for two different types of headsets, I utilized the XR Hands API on Unity that implemented the OpenXR framework to interface with hand tracking data from the headsets. In the OpenXR framework, hands are tracked using a collection of joint data with accessible position data. By leveraging this I developed two hand tracking mechanisms: First was a swipe motion recognizer that detected a swipe motion based on the user's wrist rotation and velocity. The second was an object interaction mechanism that placed objects in the appropriate position based on the user’s hand positions, and scaled the objects based on how far apart the hands are. These two mechanisms were developed after numerous trials on students to find out which hand motions users found most comfortable. This was one of the main challenges with VR, as many users had never used their hands to interact in VR environments, and we were tasked with finding intuitive controls.
                    </>
                ) : (
                    <>
                        このプロジェクトは2種類のVR器具に対応するため、UnityのXR Hands APIを活用し、OpenXRフレームワークを用いてヘッドセットからのハンドトラッキングデータを処理しました。OpenXRフレームワークでは、手は関節データの集合としてトラッキングされ、各関節の位置データにアクセスできます。この仕組みを利用して2つのハンドトラッキング機能を開発しました。1つ目は、手首の回転や速度を基にスワイプ動作を認識するスワイプモーション認識機能です。2つ目は、手の位置に基づいてオブジェクトを適切に配置し、両手の間隔に応じて物体の大きさをコントロールする機能です。これら2つの機能は、VR環境での手の操作に不慣れなユーザーにとって直感的で快適な操作方法を模索するため、学生への複数回の試行を経て開発されました。
                    </>
                )}
            </div>
            <br />
            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        The full-screen shader program in the object interaction environments was designed to give users the feeling of being inside Ruskin’s sketches. To emulate an ink sketch, the shader program used three passes. The first was an edge detection program that compared each pixel in the render buffer to its neighbors, and outputted 1(black) if there was a large difference in the image derivative in terms of color and normal data. If there was no significant difference to its neighbors, then it outputted 0(white). The resulting black and white image was then masked with a blue noise filter to produce randomness in the output. Then the last pass faded out the black pixels based on the distance from the camera to introduce depth in the scene. This shader program was inspired by a media encoding lecture at university, where we studied AI object recognition through image edge detection, and the use of matrix convolution to calculate image derivatives.
                    </>
                ) : (
                    <>
                        また、オブジェクトインタラクション環境で「スケッチの中にいる」感覚を与える全画面シェーダープログラムは、インクスケッチを再現するために3つのレンダーパスで構成されています。最初のパスでは、レンダーバッファ内の各ピクセルを隣接するピクセルと比較し、カラーや法線データにおける画像の勾配が大きい場合に1（黒）、そうでない場合に0（白）を出力するエッジ検出プログラムを実装しました。次に、この白黒画像にブルーノイズフィルターを適用し、ランダム性を加えました。最後のパスでは、カメラからの距離に応じて黒いピクセルをの透明度を上げ、シーンに奥行きを追加しました。このシェーダープログラムは、大学でのメディアコーディングの講義で学んだ、画像エッジ検出を用いたAIオブジェクト認識や、行列畳み込みによる画像勾配計算に着想を得て開発されました。
                    </>
                )}
            </div>
            <br />
            <iframe
                className="page-iframe"
                src="https://player.vimeo.com/video/923777715"
            ></iframe>
            <br />
            <br />
            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        The Interactive Sketchbook, along with the other two experiences, was presented at an investor event in London, which I attended as the representative developer. I presented the experiences, and spoke about the development process to high-stakes investors for the university to advocate for the importance of housing Ruskin’s collection on campus, and the required funding for renovating the museum building. The project ended in success with investment in the building being secured, and the museum is currently under construction.
                    </>
                ) : (
                    <>
                        「インタラクティブスケッチブック」を含む3つの体験は、ロンドンで開催された投資者向けイベントで発表されました。私は開発代表者としてイベントに参加し、体験のプレゼンテーションや開発プロセスについて発表しました。このイベントは成功を収め、博物館の改修資金を確保することができ、現在ラスキン博物館の建設が進行中です。
                    </>
                )}
            </div>
            <br />
            <a
                href="https://www.lancaster.ac.uk/iss/itpi/our-projects/the-ruskin-project/"
                className={`page-body-link page-body-link-${languageClass}`}
            >
                {currentLanguage === 'en' ? 'Read more about the project here.' : 'VRラスキンプロジェクトのさらなる詳細はこちらをご覧ください'}
            </a>
            <br />
            <br />
            <br />
        </div>
    );
}

interface ReplyChallengeContentProps {
    currentLanguage: string;
}

function ReplyChallengeContent({ currentLanguage }: ReplyChallengeContentProps): JSX.Element {
    const languageClass = currentLanguage === 'en' ? 'en' : 'jp'; // Determine the language class

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

interface ExperimentsContentProps {
    currentLanguage: string;
}

function ExperimentsContent({ currentLanguage }: ExperimentsContentProps): JSX.Element {
    const languageClass = currentLanguage === 'en' ? 'en' : 'jp'; // Determine the language class

    return (
        <div>
            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        When I first graduated highschool, I enrolled in a business administration degree at Erasmus University Rotterdam. I attended lectures for 3 months before it was apparent that my interest did not lie in business administration. I took some time to think about my future, and decided to explore my interests more deeply. Having always been interested in visual arts, I researched different career paths and related technical skills before learning about Unity.
                    </>
                ) : (
                    <>
                        高校卒業当初、私はエラスムス大学ロッテルダムで経営学を学び始めました。しかし、3か月間講義を受けた後、自分の興味が経営学にはないと感じ始め、自分の将来、そして興味をより深く探求することにしました。もともと芸術に興味があった私は、さまざまなキャリアや関連する技術スキルについて調査し、その過程でUnityについて知りました。
                    </>
                )}
            </div>

            <br />

            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        My first exploration project that I created while still in my business degree was a 2D horror story game about a sumo wrestler who finds himself in the wrestling arena at night time. I was deeply fascinated with how Unity allowed me to bring visual elements to life through programming, and how users could interact with the art I create. To further explore this medium I had encountered, I spent the rest of that year teaching myself C#, and then enrolled in a computer science degree at Lancaster University.
                    </>
                ) : (
                    <>
                        ロッテルダムにいる間に、最初の試みとして制作したのは、2Dホラーストーリーゲームでした。このゲームは、夜の国技館に迷い込んだ力士を描いたものでした。Unityがプログラミングを通じて２Dの作品を命あるものにし、自分が作成したアートにユーザーが干渉できることに深く感銘を受けました。この新たに出会ったメディアをさらに探求するため、その年の残りを使って独学でC#を学び、その後ランカスター大学でコンピュータサイエンスを学ぶことを決めました。
                    </>
                )}
            </div>

            <div className={`page-media-container`}>
                <video
                    className="page-photo"
                    autoPlay
                    muted
                    loop
                    playsInline // Ensures mobile browsers handle video playback better
                >
                    <source src={experimentsVideo1} />
                    Your browser does not support the video tag.
                </video>
            </div>
            <br />
            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        Since, I have created many Unity projects, and have found a passion for using 3D mediums. This fueled my interest in experimenting with other 3D creative software like Blender. I have experimented with character rigging to create interactive character models and animations, as well as post-processing effects to enhance scene composition and aesthetics. I found special interest in developing shaders, and have created shaders like cel shaders and sketch effects in HLSL and Unity shadergraph.
                    </>
                ) : (
                    <>
                        それ以来、私は多くのUnityプロジェクトを制作し、3Dメディアを使用することに情熱を見出しました。この情熱は、Blenderなど他の3Dクリエイティブソフトウェアを試してみたいという興味にもつながりました。キャラクターリギングを使用してインタラクティブなキャラクターモデルやアニメーションを作成したり、ポストプロセッシング効果を使用してシーンの構成や美観を向上させたりすることを試みました。また、特にシェーダー開発に関心を持ち、HLSLやUnity Shader Graphを使用して、セルシェーダーやスケッチエフェクトなどのシェーダーを作成しました。
                    </>
                )}
            </div>
            <br />
            <div className={`page-media-container`}>
                <video
                    className="page-photo"
                    autoPlay
                    muted
                    loop
                    playsInline // Ensures mobile browsers handle video playback better
                >
                    <source src={experimentsVideo2} />
                    Your browser does not support the video tag.
                </video>
            </div>
            <br /><br />
            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        Being introduced to VR development on Unity through my position at ITPI, I also experimented with more complex user interaction mechanisms like hand tracking. This also mandated cultivation of knowledge on programming practices and organization techniques to handle larger projects. Through my exploration, I have been able to implement more complex features in my more recent projects, like custom shaders and render features, as well as utilizing packaged APIs to interface with hardware other than the PC.
                    </>
                ) : (
                    <>
                        ITPIでの職務を通じてUnityでのVR開発に触れたことで、ハンドトラッキングのようなより複雑なユーザーインタラクション機構を試しました。これにより、大規模なプロジェクトを扱うためのプログラミングの実践や組織技術に関する知識の習得が必要になりました。この探求を通じて、最近のプロジェクトでは、カスタムシェーダーやレンダーフィーチャーのようなより複雑な機能を実装したり、PC以外のハードウェアとインターフェースするためにパッケージAPIを活用したりできるようになりました。
                    </>
                )}
            </div>
            <br />
            <div className={`page-media-container`}>
                <img src={experimentsImage1} className="page-photo" />
            </div>
            <br /><br /><br />
        </div>
    );
}

interface GameProjectContentProps {
    currentLanguage: string;
}

function GameProjectContent({ currentLanguage }: GameProjectContentProps): JSX.Element {
    const languageClass = currentLanguage === 'en' ? 'en' : 'jp'; // Determine the language class

    return (
        <div>
            <a href="https://github.com/whannah0809/IYWTDTLDIT" className='page-body-link'>
                {currentLanguage === 'en' ? 'Project GitHub' : 'プロジェクトGitHub'}
            </a>
            <br /><br />
            <div className={`page-body page-body-${languageClass}`} >
                <em>
                    <>
                        When someone stops running and they feel like they simply can't run anymore. They see all their friends ahead of them moving further away. 
                        <br />
                        They call out "I'm done! I need to exit the race!" 
                        <br /><br />
                        One friend yells back "What are you saying! No! Don't stop running! If you exit here you won't be able to run anymore!" 
                        <br /><br />
                        Another friend slows and stops with them, and they catch their breath together. They say 
                        <br /><br />
                        "It's okay to exit the race if you don't want to run anymore. If you're satisfied with how far you've come then I'll support you in ending your run. All I ask is that you be sure, that even for me you could not endure. For just one last dash I would implore, because I'd love to run with you some more."
                        <br /><br />
                    </>
                </em>
                {currentLanguage === 'en' ? (
                    <>
                        I am currently working on an original 3D game in collaboration with a friend from high school who is looking to become an animation producer. This project explores an original story about two friends fulfilling a “things to do before dying” list.
                    </>
                ) : (
                    <>
                        現在、高校時代の友人でアニメーションプロデューサーを目指している人と協力して、私はオリジナルの3Dゲームを制作中です。このプロジェクトは、「死ぬ前にやりたいことリスト」を達成していく二人の友人の自作ストーリーを描いています。
                    </>
                )}
            </div>
            <br />
            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        The story was originally created by my peer (the artist) as an animation project. However, we saw the potential for it to be created as a game, which I took on development for. The artist generated a revised storyboard and a collection of concept art, and I am taking on all game development aspects from character modeling, animations, shading, scene lighting, and interaction mechanisms. In developing the game, what I hold most important is the communication of the scene atmosphere and invoked feelings that my peer had intended in his concept drawings.
                    </>
                ) : (
                    <>
                        このストーリーは私の共同制作者（アーティスト）がアニメーションプロジェクトとして作成したものです。しかし、これをゲームとして制作する可能性を見出し、私がゲーム開発を担当することになりました。アーティストはストーリーボードとコンセプトアートを作成し、私はキャラクターモデリング、アニメーション、シェーディング、シーン構成、インタラクション機能など、すべてのゲーム開発の側面を担当しています。ゲームを開発するにあたり、私が最も重要視しているのは、アーティストがコンセプトアートで意図したシーンの雰囲気や感情を忠実に伝えることです。
                    </>
                )}
            </div>
            <br />
            <PhotoGallery photos={game_photos} />
            <br />
            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        Based on the concept art, I modeled the characters in Blender and utilized character rigging to create animations. In creating the characters, I had the artist generate character sheets with information about the characters’ personality, which I aimed to articulate in their designs and movements. The two main characters are juxtaposed in their character, with one being determined and the other being in despair. The determined character was therefore modeled with an exaggerated posture sticking out his chest, and walking with a swinging motion of his shoulders. The other was the opposite, with a slouching posture and a walking motion as if he were dragging his body along the floor.
                    </>
                ) : (
                    <>
                        コンセプトアートに基づいて、Blenderを使用してキャラクターをモデリングし、キャラクターリギングを活用してアニメーションを制作しました。キャラクター制作において、アーティストにはキャラクターの性格に関する情報が記載されたキャラクターシートを作成してもらい、それをデザインや動きに反映させることに努めました。メインキャラクターの二人は対照的な性格を持ち、一人は決意に満ちた人物で、もう一人は絶望的な人物です。そのため、決意に満ちたキャラクターは胸を張った誇張された姿勢で、肩を大きく揺らしながら歩くようにデザインしました。一方で、絶望的なキャラクターは猫背の姿勢で、体を床に引きずるような歩き方をするようにキャラクターモデルとアニメーションを作成しました。
                    </>
                )}
            </div>
            <br />
            <div className="page-media-container">
                <img src={gameImage8} className="page-photo" />
            </div>
            <br />
            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        The overall feeling of the concept art has a hopeless, dreadful feel to it, which I wanted to communicate through an overall low-lit scene composition with an ominous green bloom effect. This was achieved using the Universal Render Pipeline post-processing feature along with fog and custom lighting. I also used a custom shader that utilizes the fresnel effect on the characters to match the scene lighting and atmosphere.
                    </>
                ) : (
                    <>
                        コンセプトアート全体の雰囲気は絶望的で不吉な感覚を持っており、それを伝えるために、全体的に低照度で構成されたシーンと、不気味な緑色のブルーム効果を採用しました。これには、Universal Render Pipeline（URP）のポストプロセシング機能を活用し、霧やカスタムライティングを組み合わせました。また、キャラクターにフレネル効果を利用したカスタムシェーダーを使用し、シーンの照明や雰囲気にマッチさせました。
                    </>
                )}
            </div>
            <br />
            <div className="page-media-container">
                <video
                    className="page-photo"
                    autoPlay
                    muted
                    loop
                    playsInline // Ensures mobile browsers handle video playback better
                >
                    <source src={gameVideo1} />
                    Your browser does not support the video tag.
                </video>
            </div>
            <br /><br />
            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        We intend for the game to be a simple storytelling game with simple controls. The character movement has only horizontal input, and players can interact with certain objects using the spacebar. I also wanted to implement object-oriented code design for event code so that as discussion on the story progresses, we can seamlessly integrate new events in the game. You can learn more about the project code structure and&nbsp;
                        <a href="https://github.com/whannah0809/IYWTDTLDIT" className="page-body-link">
                            follow the project on GitHub here.
                        </a>
                    </>
                ) : (
                    <>
                        ゲームはシンプルなストーリーゲームで、操作もシンプルにする予定です。キャラクターの移動は横方向の入力のみで、プレイヤーは特定のオブジェクトにスペースバーでインタラクトできる仕組みです。また、ストーリーの進行に応じて新しいイベントをシームレスにゲームに統合できるように、イベントコードにはオブジェクト指向設計を取り入れたいと考えています。プロジェクトのコード構造や進行状況については、
                        <a href="https://github.com/whannah0809/IYWTDTLDIT" className="page-body-link">
                            こちらからGitHubで詳しく知ることができます。
                        </a>
                    </>
                )}
            </div>
            <br />
            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? 'Play the opening scene of the game (mobile not supported):' : 'ゲームの冒頭をプレイできます（モバイル非対応）：'}
            </div>
            <div className="page-media-container">
                <UnityComponent />
            </div>
            <br /><br /><br />
        </div>
    );
}

interface ProjectsPageProps {
  currentLanguage: string;
}

export default function ProjectsPage({ currentLanguage }: ProjectsPageProps): JSX.Element {
  const [hasFaded, setHasFaded] = useState(false); // Track fade animation
  const [pageTitle, setPageTitle] = useState(''); // Dynamic page title
  const [pageKey, setPageKey] = useState<string | null>(null); // Key to determine current content
  const carouselContainerRef = useRef<HTMLDivElement>(null); // Ref for carousel
  const pageContentRef = useRef<HTMLDivElement>(null); // Ref for content
  const [isPageContentInView, setIsPageContentInView] = useState(false); // Track content visibility

  const touchStartY = useRef<number | null>(null); // Track starting Y position of touch
  const touchEndY = useRef<number | null>(null); // Track ending Y position of touch

  // Map of button labels to dynamic content
  const contentMap: Record<string, { title: (lang: string) => string; content: (lang: string) => JSX.Element }> = {
    'Ruskin VR Project': {
      title: (lang) => (lang === 'en' ? 'VR Ruskin' : 'VR Ruskinプロジェクト'),
      content: (lang) => <RuskinVRContent currentLanguage={lang} />,
    },
    'Reply Challenge 2022': {
      title: (lang) => (lang === 'en' ? 'Reply Challenge 2022' : 'Reply Challenge 2022'),
      content: (lang) => <ReplyChallengeContent currentLanguage={lang} />,
    },
    'Experiments': {
      title: (lang) => (lang === 'en' ? 'Experiments' : '試作品'),
      content: (lang) => <ExperimentsContent currentLanguage={lang} />,
    },
    'Game Project': {
      title: (lang) => (lang === 'en' ? 'Game Project' : '自作ゲーム'),
      content: (lang) => <GameProjectContent currentLanguage={lang} />,
    },
  };

  const buttons = [
    { label: 'Ruskin VR Project', labelEn: 'Ruskin VR Project', labelJa: 'ラスキン VR' },
    { label: 'Reply Challenge 2022', labelEn: 'Reply Challenge 2022', labelJa: 'Reply Challenge 2022' },
    { label: 'Experiments', labelEn: 'Experiments', labelJa: '試作品' },
    { label: 'Game Project', labelEn: 'Game Project', labelJa: '自作ゲーム' },
  ];

  // Update page title dynamically when pageKey or currentLanguage changes
  useEffect(() => {
    if (pageKey) {
      const content = contentMap[pageKey];
      if (content) {
        setPageTitle(content.title(currentLanguage));
      }
    }
  }, [pageKey, currentLanguage]);

  // Handle button click to load new content
  const handleButtonClick = (buttonLabel: string) => {
    const content = contentMap[buttonLabel];
    if (content) {
      setPageKey(buttonLabel); // Set current button label as key
      setHasFaded(true);
      pageContentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>): void => {
    touchEndY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (): void => {
    if (touchStartY.current !== null && touchEndY.current !== null) {
      const deltaY = touchStartY.current - touchEndY.current;

      // Check if the content is at the top
      const scrollTop = pageContentRef.current?.scrollTop ?? 0;
      const isAtTop = scrollTop <= 0;

      if (deltaY < -30 && !isPageContentInView && hasFaded && isAtTop) {
        // Dragging down and content is not in view
        setHasFaded(false);
        carouselContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
      }

      if (deltaY > 30 && !hasFaded) {
        // Dragging up and content is not in view
        setHasFaded(true);
        pageContentRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Reset touch positions
    touchStartY.current = null;
    touchEndY.current = null;
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>): void => {
    const delta = event.deltaY;

    // Check if the content is at the top
    const scrollTop = pageContentRef.current?.scrollTop ?? 0;
    const isAtTop = scrollTop <= 0;

    if (delta < 0 && !isPageContentInView && hasFaded && isAtTop) {
      // Scrolling up and content is not in view
      setHasFaded(false);
      carouselContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    if (delta > 0 && !hasFaded) {
      // Scrolling down and content is not in view
      setHasFaded(true);
      pageContentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="container"
      onWheel={handleWheel} // Handle mouse wheel scroll
      onTouchStart={handleTouchStart} // Handle touch start
      onTouchMove={handleTouchMove} // Handle touch move
      onTouchEnd={handleTouchEnd} // Handle touch end
    >
      {/* Carousel Container */}
      <div ref={carouselContainerRef} className={`carousel-container ${hasFaded ? 'faded' : ''}`}>
        <ButtonCarousel buttons={buttons} onButtonClick={handleButtonClick} currentLanguage={currentLanguage}/>
      </div>

      {/* Page Content */}
      <div ref={pageContentRef} className={`page ${hasFaded ? 'faded' : ''}`}>
        {pageTitle && (
          <div className={`page-title ${currentLanguage === 'en' ? 'title-en' : 'title-ja'}`}>
            {pageTitle}
          </div>
        )}
        {pageKey && contentMap[pageKey]?.content(currentLanguage)}
        <div className={`page-title ${currentLanguage === 'en' ? 'text-en' : 'text-ja'}`}>
          {currentLanguage === 'en' ? 'Gallery' : 'ギャラリー'}
        </div>
        <div className={`page-body ${currentLanguage === 'en' ? 'text-en' : 'text-ja'}`}>
          {currentLanguage === 'en' ? 'See snapshots of past work:' : '過去に制作した作品の一部をご覧ください：'}
        </div>
        <br />
        <PhotoGallery photos={photos} />
      </div>
    </div>
  );
}

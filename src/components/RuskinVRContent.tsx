import React from 'react';
import PhotoGallery from './PhotoGallery';
import image1 from './../assets/projects-gallery/Photo1.png';
import image2 from './../assets/projects-gallery/Photo2.png';
import ruskinImage3 from './../assets/ruskin-photos/Photo3.png';
import ruskinImage4 from './../assets/ruskin-photos/Photo4.png';
import ruskinImage5 from './../assets/ruskin-photos/Photo5.png';
import ruskinVideo1 from './../assets/ruskin-photos/ISBRecording.mp4';

const ruskin_photos = [image1, image2, ruskinImage3, ruskinImage5, ruskinImage4];

interface RuskinVRContentProps {
    currentLanguage: string;
}

export default function RuskinVRContent({ currentLanguage }: RuskinVRContentProps) {
    const languageClass = currentLanguage === 'en' ? 'en' : 'jp'; // Determine the language class

    return (
        <div>
            <br/>
            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        The ITPI (IT Partnering and Innovation) team at Lancaster University focuses on designing innovative ventures that leverage emerging technologies to enhance learning. Composed of senior and also many student developers, the team has developed products such as the iLancaster app, which facilitates assignment management and lecture attendance tracking via Bluetooth. In 2023, the ITPI team expanded into virtual reality (VR), and I joined two other student developers in a team to work on projects aimed at integrating VR into the university’s educational environment.                    
                    </>
                ) : (
                    <>
                        ランカスター大学のITPIチームは、新興技術を大学の教育に役立てるプロジェクトを開発することに焦点を当てています。このチームは経験豊富なデベロッパだけでなく、多くの学生開発者で構成されており、「iLancaster」アプリなどの製品を開発しました。このアプリは、Bluetoothを利用して課題管理や講義出席追跡を可能にしています。2023年に、ITPIチームはVRの分野に進出し、私は他の2人の学生開発者と共に、様々なVRを用いたプロジェクトに取り組みました。
                    </>
                )}
            </div>
            
            <br />

            <PhotoGallery photos={ruskin_photos} />

            <br/>

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
            <br/>

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
                    </>
                )}
            </div>
            
            <br/>
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

            <br/>

            <div className="page-media-container">
                <video
                    className="page-photo"
                    autoPlay
                    muted
                    loop
                    playsInline
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
                        The Interactive Sketchbook placed users in a VR environment with a sketchbook in front of them. Users were then able to flip through the sketchbook with a swiping motion using their hands, allowing them to view images of sketches produced by Ruskin. Then, by placing their hand on a sketch, users were transported into the sketch where they saw a 3D rendering of the object that they had sketched in their hands. By moving their hands around they were able to rotate and scale the 3D object. The two main features this project entailed was enabling user interaction through hand tracking, and a shader program that allowed users to feel like they were “inside the sketch”. 
                    </>
                ) : (
                    <>
                        「Interactive Sketchboo」では、ユーザーがVR環境内でスケッチブックを目の前に置かれた状態で体験します。ユーザーは手を使ったスワイプ操作でスケッチブックのページをめくり、ラスキンが描いたスケッチの画像を閲覧できます。その後、スケッチに手を置くと、そのスケッチ内に入り込み、ラスキンが描いたオブジェクトの3Dレンダリングを手の中で体験できます。ユーザーは手の動きでオブジェクトを回転させたり拡大することが可能です。このプロジェクトでの主な特徴は、ハンドトラッキングを通じたユーザーインタラクションの実現と、「スケッチの中にいる」感覚を生み出すシェーダープログラムの開発でした。
                    </>
                )}
            </div>

            <br />

            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        Since the project was developed for two different types of headsets, I utilized the XR Hands API on Unity that implemented the OpenXR framework to interface with hand tracking data from the headsets. In the OpenXR framework, hands are tracked using a collection of joint data with accessible position information. By leveraging this I developed two hand tracking mechanisms: First was a swipe motion recognizer that detected a swipe motion based on the user's wrist rotation and velocity. The second was an object interaction mechanism that placed objects in the appropriate position based on the user’s hand positions, and scaled the objects based on how far apart the hands are. These two mechanisms were developed after numerous trials on students to find out which hand motions users found most comfortable. This was one of the main challenges with VR, as many users had never used their hands to interact in VR environments, and we were tasked with finding intuitive controls.                    
                    </>
                ) : (
                    <>
                        このプロジェクトは2種類のVR器具に対応するため、UnityのXR Hands APIを活用し、OpenXRフレームワークを用いてヘッドセットからのハンドトラッキングデータを処理しました。OpenXRフレームワークでは、手は関節データの集合としてトラッキングされ、各関節の位置データにアクセスできます。この仕組みを利用して2つのハンドトラッキング機能を開発しました。1つ目は、手首の回転や速度を基にスワイプ動作を認識するスワイプモーション認識機能です。2つ目は、手の位置に基づいてオブジェクトを適切に配置し、両手の間隔に応じて物体の大きさをコントロールする機能です。これら2つの機能は、VR環境での手の操作に不慣れなユーザーにとって直感的で快適な操作方法を模索するため、学生への複数回の試行を経て開発されました。
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
                        The full-screen shader program in the object interaction environments was designed to give users the feeling of being inside Ruskin’s sketches. To emulate an ink sketch, the shader program used three passes. The first was an edge detection program that compared each pixel in the render buffer to its neighbors, and outputted 1(black) if there was a large difference in the image derivative in terms of color and normal data. If there was no significant difference to its neighbors, then it outputted 0(white). The resulting black and white image was then masked with a blue noise filter to produce randomness in the output. Then the last pass faded out the black pixels based on the distance from the camera to introduce depth in the scene. This shader program was inspired by a media encoding lecture at university, where we studied AI object recognition through image edge detection, and the use of matrix convolution to calculate image derivatives.
                    </>
                ) : (
                    <>
                        また、オブジェクトインタラクション環境で「スケッチの中にいる」感覚を与える全画面シェーダープログラムは、インクスケッチを再現するために3つのレンダーパスで構成されています。最初のパスでは、レンダーバッファ内の各ピクセルを隣接するピクセルと比較し、カラーや法線データにおける画像の勾配が大きい場合に1（黒）、そうでない場合に0（白）を出力するエッジ検出プログラムを実装しました。次に、この白黒画像にブルーノイズフィルターを適用し、ランダム性を加えました。最後のパスでは、カメラからの距離に応じて黒いピクセルをの透明度を上げ、シーンに奥行きを追加しました。このシェーダープログラムは、大学でのメディアコーディングの講義で学んだ、画像エッジ検出を用いたAIオブジェクト認識や、行列畳み込みによる画像勾配計算に着想を得て開発されました。
                    </>
                )}
            </div>
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
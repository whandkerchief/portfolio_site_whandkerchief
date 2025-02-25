import React from "react";
import experimentsVideo1 from './../assets/Experiments-photos-and-videos/Video1.mp4';
import experimentsVideo2 from './../assets/Experiments-photos-and-videos/Video2.mp4';
import experimentsVideo3 from './../assets/Experiments-photos-and-videos/Inkshader_Showcase.mp4';

interface ExperimentsContentProps {
    currentLanguage: string;
}

export default function ExperimentsContent({ currentLanguage }: ExperimentsContentProps): JSX.Element {
    const languageClass = currentLanguage === 'en' ? 'en' : 'jp'; 

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

            <div className={`page-media-container`}>
                <video
                    className="page-photo"
                    autoPlay
                    muted
                    loop
                    playsInline 
                >
                    <source src={experimentsVideo1} />
                    Your browser does not support the video tag.
                </video>
            </div>

            <br/>

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

            <br />

            <div className={`page-media-container`}>
                <video
                    className="page-photo"
                    autoPlay
                    muted
                    loop
                    playsInline 
                >
                    <source src={experimentsVideo2} />
                    Your browser does not support the video tag.
                </video>
            </div>
            <br /><br />

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
                    playsInline 
                >
                    <source src={experimentsVideo3} />
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

            <br /><br />
        </div>
    );
}
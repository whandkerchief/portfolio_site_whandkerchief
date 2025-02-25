import React from "react";
import PhotoGallery from "./PhotoGallery";

import image1 from "../assets/planeterium-photos-and-videos/PIm1.png";
import image2 from "../assets/planeterium-photos-and-videos/PIm2.png";
import image3 from "../assets/planeterium-photos-and-videos/PIm3.png";
import image4 from "../assets/planeterium-photos-and-videos/PIm4.png";
import image5 from "../assets/planeterium-photos-and-videos/PIm5.png";
import PlaneteriumVideo from './../assets/planeterium-photos-and-videos/Planeterium Demo.mp4'

const photos = [image1, image2, image3, image4, image5];

interface PlaneteriumContentProps {
    currentLanguage: string;
}

export default function PlaneteriumContent({ currentLanguage }: PlaneteriumContentProps){
    const languageClass = currentLanguage === 'en' ? 'en' : 'jp'; 

    return (
        <div>
            <a href="https://github.com/whannah0809/planeterium" className='page-body-link' style={{ fontSize: 'clamp(1.5rem, 2.25vw, 3rem)' }}>
                {currentLanguage === 'en' ? 'View project GitHub here' : 'プロジェクトのGitHubページはこちら'}
            </a>

            <br /><br />

            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                        <>
                            During my time as a part-time maintenance worker at TeamLab Planets, I was inspired by their spatial art works, and started thinking about how I could use my skills in Unity to develop interactive event space graphics. I was especially interested in how I could harness user interaction to create a unique experience for each visitor. 
                        </>
                    ) : (
                        <>
                            私がチームラボPlanetsでメンテナンス作業員のアルバイトをしているとき、Planetsの空間アートに感銘を受け、自分のUnityのスキルを活かしてインタラクティブなイベントスペースのグラフィックを開発できないかと考えました。特に、ユーザーのインタラクションを活用して、お客様ごとに異なるユニークな体験を生み出す事に興味を持ちました。
                        </>
                    )}
            </div>

            <br/>

            <div className="page-media-container">
                <video
                    className="page-photo"
                    style={{ border: "none" }}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={PlaneteriumVideo} />
                    Your browser does not support the video tag.
                </video>
            </div>
            <br />

            <br />
            
            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                        <>
                            The concept of the planetarium event space is to visualize visitors' angel numbers through procedurally generated stars. Whether it’s their birthday month or just an arbitrary number they hold special, the planetarium visual generates a unique star for every number. The idea of infinity that exists between numbers and stars inspired this concept, and works to give each visitor a unique experience.
                        </>
                    ) : (
                        <>
                            このプラネタリウムイベントスペースのコンセプトは、来場者のラッキーナンバーやエンジェルナンバーをプロシージャルに生成された星として可視化することです。誕生月であったり、個人的に特別な意味を持つ数字であったりと、どんな数字であっても、それぞれの数字に対応したユニークな星が生成されます。数字と星の間に存在する「無限」という概念にインスピレーションを受け、このアイデアを通じて来場者ごとに異なる体験を提供することを目指しています。
                        </>
                    )}
            </div>

            <br />
            
            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                        <>
                            As each star displayed represents a number that is special to somebody who happens to visit on the same day, the star sky becomes one that is unique to the collection of visitors who share the space by chance. 
                        </>
                    ) : (
                        <>
                            また、その日に訪れた人々の特別な数字によって作られた星が集まり、一つの夜空を形成するという仕組みによって、偶然同じ空間を共有した人々が生み出す唯一無二の景色が生まれます。
                        </>
                    )}
            </div>

            <br />

            <PhotoGallery photos={photos} />

            <br/>
            
            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                        <>
                            The main visual works by setting up a server that accepts requests from external applications containing user input. The user input is hashed and remapped using a murmur hash function, and then is used to deform a circular shape to produce a blob texture. Particles are then emitted using this blob texture to create a unique star. Aspects like colour are also procedurally decided using the remapped user input. In this way, a unique star is created for any arbitrary number. 
                        </>
                    ) : (
                        <>
                            このメインビジュアルの仕組みとしては、外部アプリケーションからのリクエストを受け付けるサーバーを設置し、ユーザーの入力を取得します。その入力値はMurmurハッシュ関数を用いてハッシュ化・リマップされ、円形の形状を変形させて独自のテクスチャを生成します。そのテクスチャを元にパーティクルを放出し、ユニークな星を作り出します。また、色彩などの要素も、リマップされたユーザー入力を基にプロシージャルに決定されます。このようにして、どんな数字であっても、唯一無二の星が生み出される仕組みになっています。
                        </>
                    )}
            </div>

            <br/>


        </div>
    );
}
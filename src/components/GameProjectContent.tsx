import React from "react";
import UnityComponent from './UnityComponent';
import PhotoGallery from "./PhotoGallery";
import gameImage8 from './../assets/game-photos/Photo8.png';
import gameVideo1 from './../assets/game-photos/game-video.mp4';
import gameImage1 from './../assets/game-photos/Photo1.png';
import gameImage2 from './../assets/game-photos/Photo2.png';
import gameImage3 from './../assets/game-photos/Photo3.jpg';
import gameImage4 from './../assets/game-photos/Photo4.jpg';
import gameImage5 from './../assets/game-photos/Photo5.png';
import gameImage6 from './../assets/game-photos/Photo6.jpg';
import gameImage7 from './../assets/game-photos/Photo7.png'

const game_photos = [gameImage1, gameImage2, gameImage3, gameImage4, gameImage5, gameImage6, gameImage7];

interface GameProjectContentProps {
    currentLanguage: string;
}

export default function GameProjectContent({ currentLanguage }: GameProjectContentProps): JSX.Element {
    const languageClass = currentLanguage === 'en' ? 'en' : 'jp'; 

    return (
        <div>
            <a href="https://github.com/whannah0809/IYWTDTLDIT" className='page-body-link' style={{ fontSize: 'clamp(1.5rem, 2.25vw, 3rem)' }}>
                {currentLanguage === 'en' ? 'View project GitHub here' : 'プロジェクトのGitHubページはこちら'}
            </a>

            <br /><br />

            <div className={`page-body page-body-${languageClass}`}>
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
            <PhotoGallery photos={game_photos} />

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
            </div>

            <br />

            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        The story was originally created by my peer (the artist) as an animation project. However we saw the potential for it to be created as a game which I took on development for. The artist generated a revised storyboard and a collection of concept art, and I am taking on all game development aspects from character modeling, animations, shading, scene lighting, and interaction mechanisms. In developing the game, what I hold most important is the communication of the scene atmosphere and invoked feelings that the artist had intended in his concept drawings.                    
                    </>
                ) : (
                    <>
                        このストーリーは私の共同制作者（アーティスト）がアニメーションプロジェクトとして作成したものです。しかし、これをゲームとして制作する可能性を見出し、私がゲーム開発を担当することになりました。アーティストはストーリーボードとコンセプトアートを作成し、私はキャラクターモデリング、アニメーション、シェーディング、シーン構成、インタラクション機能など、すべてのゲーム開発の側面を担当しています。ゲームを開発するにあたり、私が最も重要視しているのは、アーティストがコンセプトアートで意図したシーンの雰囲気や感情を忠実に伝えることです。
                    </>
                )}
            </div>
            
            <br />

            <div className="page-media-container">
                <img src={gameImage8} className="page-photo" />
            </div>

            <br/><br/>

            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        Based on the concept art, I modeled the characters on Blender, and utilized character rigging to create animations. In creating the characters, I had the artist generate character sheets with information about the characters’ personalities which I aimed to articulate in their designs and movements. The two main characters are juxtaposed, with one being determined, and the other being in despair. The determined character was therefore modeled with an exaggerated posture sticking out his chest, and walking with a swinging motion of his shoulders. The other was the opposite with a slouching posture and a walking motion as if he were dragging his body along the floor.
                    </>
                ) : (
                    <>
                        コンセプトアートに基づいて、Blenderを使用してキャラクターをモデリングし、キャラクターリギングを活用してアニメーションを制作しました。キャラクター制作において、アーティストにはキャラクターの性格に関する情報が記載されたキャラクターシートを作成してもらい、それをデザインや動きに反映させることに努めました。メインキャラクターの二人は対照的な性格を持ち、一人は決意に満ちた人物で、もう一人は絶望的な人物です。そのため、決意に満ちたキャラクターは胸を張った誇張された姿勢で、肩を大きく揺らしながら歩くようにデザインしました。一方で、絶望的なキャラクターは猫背の姿勢で、体を床に引きずるような歩き方をするようにキャラクターモデルとアニメーションを作成しました。
                    </>
                )}
            </div>

            <br />
            
            <div className={`page-body page-body-${languageClass}`}>
                {currentLanguage === 'en' ? (
                    <>
                        The overall feeling of the concept art has a hopeless dreadful feel to it, which I wanted to communicate through an overall low lit scene composition, with an ominous green bloom effect. This was achieved using the Universal Render Pipeline post processing feature along with fog and custom lighting. I also used a custom shader that utilizes the fresnel effect on the characters to match the scene lighting and atmosphere.
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
                    playsInline
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
            <br /><br/>
            <div className='mobile-unsupported'>
                <div className={`page-body page-body-${languageClass}`} style={{ fontSize: 'clamp(1.5rem, 2.25vw, 3rem)' }}>
                    {currentLanguage === 'en' ? 'Play the opening scene of the game (mobile not supported):' : 'ゲームの冒頭をプレイできます（モバイル非対応）：'}
                </div>
                <div className={`page-body page-body-${languageClass}`}>
                    {currentLanguage === 'en' ? 'Use your left and right arrow keys to move the character. Use the spacebar to interact with objects and advance dialogue.' : '左右矢印キーでキャラクターを移動させてください。スペースキーを使ってオブジェクトとに干渉したり、会話を進めたりできます。'}
                </div>
                <div className="page-media-container">
                    <UnityComponent />
                </div>
                <br /><br /><br />
            </div>
        </div>
    );
}

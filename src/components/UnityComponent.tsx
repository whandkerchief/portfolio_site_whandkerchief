import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityComponent(): JSX.Element {  
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "/Build/WebGLBuild-IYWDLDIT.loader.js",
        dataUrl: "/Build/WebGLBuild-IYWDLDIT.data",
        frameworkUrl: "/Build/WebGLBuild-IYWDLDIT.framework.js",
        codeUrl: "/Build/WebGLBuild-IYWDLDIT.wasm",
});

return (
    <div>
        {!isLoaded && (
            <p>Loading... {Math.round(loadingProgression * 100)}%</p>
        )}
        <Unity
            unityProvider={unityProvider}
            style={{
                height: "50vh", // Adjust as necessary
                width: "100vh",
            }}
        />
    </div>
);
}

export default UnityComponent;
import { testimony as testimonyData } from "./common/testimony";

export const getPageContext = (pagePath)=>{
    console.log("Page to Load Context:", pagePath)

    let pageVariables = {};
    console.log("Page been loaded:", pagePath);
    switch (pagePath) {
        case '/index.html':
            pageVariables = testimonyData
            break;
    }
    const finalContext = {
        ...pageVariables
    }
    console.log("Context: ", JSON.stringify(finalContext, null, 2));
    return finalContext
}



chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "Quick_Search_NFT_on_MSU_Marketplace",
        title: "Quick Search NFT on MSU Marketplace",
        contexts: ["selection"],
        documentUrlPatterns: [ "https://msu.io/marketplace/*" ]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "Quick_Search_NFT_on_MSU_Marketplace" && info.selectionText) {
        const encodedQuery = encodeURIComponent(info.selectionText.split(' #')[0]);
        const searchUrl = `https://msu.io/marketplace/nft?keyword=${encodedQuery}`; 
        chrome.tabs.create({ url: searchUrl });
    }
});
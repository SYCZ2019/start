import { page } from "./functions.js";
const cookie = new page.Cookie;
const setting = {
    "s_engine":[
        {
            "name":"se_bing",
            "url":"https://bing.com/search?q="
        },
        {
            "name":"se_google",
            "url":"https://google.com/search?q="
        },
        {
            "name":"se_baidu",
            "url":"https://baidu.com/s?wd="
        },
        {
            "name":"se_toutiao",
            "url":"https://so.toutiao.com/search?keyword="
        },
        {
            "name":"se_toutiao_pc",
            "url":"https://so.toutiao.com/search?dvpf=pc&keyword="
        }
    ]
};
const defaultPlugin = [
    {
        "id":"zk",
        "title":"中考倒计时",
        "type":"countdown",
        "value":["zk"]
    },
    {
        "id":"gk",
        "title":"高考倒计时",
        "type":"countdown",
        "value":["gk"]
    }
];
const set_se = document.getElementsByName("set-se");
let searchUrl = cookie.get('searchUrl');
if(searchUrl == null){
    searchUrl = "https://bing.com/search?q=";
}
cookie.set('searchUrl',searchUrl,365);
for(let i = 0; i < set_se.length; i++){
    if(setting['s_engine'][i]['url'] == searchUrl){
        set_se[i].children[0].checked = true;
    }
    set_se[i].children[0].addEventListener('change', function(){
        if(set_se[i].children[0].checked){
            cookie.set('searchUrl',setting['s_engine'][i]['url'],365);
            console.log(setting['s_engine'][i]['url']);
        }
    });
}
let pluginData = cookie.get("pluginData");
if(pluginData == null){
    pluginData = JSON.stringify(defaultPlugin);
}
cookie.set('pluginData',pluginData.replace(/\n/,""),365);
const set_plugin = document.getElementById("plugin");
set_plugin.innerText = pluginData;
set_plugin.addEventListener('input',function(){
    cookie.set('pluginData',set_plugin.value.replace(/\n/g,""),365);
});

/*! Copyright (c) SESHENGHUO.COM - Author: LIJUN - Email: zwlijun@gmail.com - Git: https://github.com/zwlijun/se.lib */
define(function(require){var a=require("mod/sa/lightanimation.74ffbad04b878952a0a3caa59508aad4e5feacaa"),b=a.newInstance("#w1","transition::opacity:1!0.5s ease>transformOrigin:50% 50%!;translate3d:150px,200px,0px!1s ease 2s;rotate:60deg!");b.play();var c=a.newInstance("#w2","animation::rotate:!1s linear 1s infinite normal");c.addKeyFrame("rotate","0%",{rotate:"0deg",scale:"1,1"}),c.addKeyFrame("rotate","50%",{rotate:"180deg",scale:"0.5,0.5"}),c.addKeyFrame("rotate","100%",{rotate:"360deg",scale:"1,1"}),c.printKeyFrames(),c.play()});

// poem
var words=[
	'和你一起去看棱镜',
	'浪漫本身就是你',
	'一起等太阳落下了天际',
	'你的名字涂满星光',
	'我想以世纪和你在一起',
    '成为彼此宇宙的终极浪漫',
	'总有一天你会出现在我身边',
    '最好的人注定会到身边',
    '此刻我也这样想',
	'我终将看到你身影逆光 出现',
	'等这一切 都被你了解',
	'十指错落紧牵',
	'期望从未破灭',
	'跨越时间 再没有分别',
	'携手走过明天',
	'光芒捧起你的脸',
	'狂奔向你不停歇',
	'石头想有糖的温度',
	'偶然黄昏见',
	'一笔一划都在写着我和你',
	'却藏着我语无伦次的秘密',
	'这是我一生中最勇敢的瞬间',
	'跨过飞杭 穿过弄堂',
	'你站在我始料未及的小巷',
	'远在世界尽头的你站在我面前',
	'我的眼中藏着星点嘴角有弧线',
	'你是黎明地平线是我永恒的终点',
	'我想把时间揉成碎片捧在我的手心',
	'明天周六 可以把我们一起出去玩改成我们去约会吗',
    '约会见',
    '再见面就是永远',
    '爱你就像热爱生命一样',
    '爱你就像习惯叹息一样',
    '总洋溢着暖',
    '晴空许愿星',
    '按捺不住想念你',
	'总忘不了你的眼睛',
	'想和你环热带岛屿',
	'想和你看星空极地',
	'想和你睡在宇宙里',
	'一起等太阳落下了天际',
	'就变成星星',
	'想和你看日出日落',
	'请取笑那些苦难吧',
	'你邀请流浪期待欢喜',
	'我看见了光',
	'你像气泡水直接淘气',
	'爱和星星眨眼睛',
	'有一个岛屿',
	'洒满了繁星',
	''
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#67fffa';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '22px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(5,40)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);
		
		setTimeout(function(){
		    word.style.color='#ffaa00'
		},10000)
		setTimeout(function(){
		    word.style.color='#efbeff';
		},20000)
		setTimeout(function(){
		    word.style.color='#67fffa'
		},30000)

    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let text = document.querySelector('.text').querySelector('h1');
      setTimeout(function(){
		  textone.innerHTML = '';	
		  text.innerHTML = '你就是浪漫本身';
		  text.style.color='#aaff7f'
      },10000)
	  setTimeout(function(){
	   /* textone.innerHTML = 'Mzyu'; */	     
	      text.innerHTML = '看见你 心里就会露出 满脸的喜悦';
	      text.style.color='#ffff00'
	      textone.innerHTML = '';
	  },20000)
	  setTimeout(function(){
	      textone.innerHTML = 'Mzyu';	
	      text.innerHTML = '';
	  },30000);
	  
	 
	/* var audio = document.getElementById('music1');
	var msbtn=document.getElementById('btn');
	
	msbtn.bind("touchstart", function bf() {
	
	  
	
	if(audio !== null) {
	
	//检测播放是否已暂停.audio.paused 在播放器播放时返回false.
	
	//alert(audio.paused);
	
	if(audio.paused) {
	
	audio.play(); //audio.play();// 这个就是播放
	
	msbtn.addClass("active")
	
	} else {
	
	audio.pause(); // 这个就是暂停
	
	msbtn.removeClass("active")
	
	}
	
	}
	
	}) */
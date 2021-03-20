var pick = "#6ddccf"

var coffee = document.getElementById("coffee");
var latte = document.getElementById("latte");
var ade = document.getElementById("ade");
var smoothie = document.getElementById("smoothie");
var juice = document.getElementById("juice");
var tea = document.getElementById("tea");

var bread = document.getElementById("bread");
var scone = document.getElementById("scone");
var cake = document.getElementById("cake");
var salad = document.getElementById("salad");

var coffeeItem = [
    "아메리카노", "카페라떼", "바닐라라떼", "헤이즐넛라떼", "카푸치노", "카페모카", "카라멜마끼야또"
]
var latteItem = [
    "녹차라떼", "고구마라떼", "초코라떼", "딸기라떼"
]
var adeItem = [
    "레몬에이드", "키위에이드", "자몽에이드"
]
var smoothieItem = [
    "스무디", "요거트스무디"
]
var juiceItem = [
    "생과일주스"
]
var teaItem = [
    "녹차", "유자차", "매실차", "자몽차", "레몬차", "레몬꿀차", "밀크티"
]
var breadItem = [
    "우유", "녹차", "초코", "크림치즈", "브리오슈", "호두시나몬", "블루베리"
]
var sconeItem = [
    "플레인", "녹차", "유자", "초코"
]
var cakeItem = [
    "바스크치즈", "초코"
]
var saladItem = [
    "기본", "새우", "브라타치즈"
]

// coffee
for (var i=0; i<coffeeItem.length; i++) {
    var item = document.createElement("p");
    item.innerHTML = coffeeItem[i];
    item.onclick = function() {
        console.log(this);
        this.style.color = pick; 
    }
    coffee.appendChild(item);
}

// latte
for (var i=0; i<latteItem.length; i++) {
    var item = document.createElement("p");
    item.innerHTML = latteItem[i];
    item.onclick = function() {
        this.style.color = pick;
    }
    latte.appendChild(item);
}

// ade
for (var i=0; i<adeItem.length; i++) {
    var item = document.createElement("p");
    item.innerHTML = adeItem[i];
        item.onclick = function() {
        this.style.color = pick;
    }
    ade.appendChild(item);
}

// smoothie
for (var i=0; i<smoothieItem.length; i++) {
    var item = document.createElement("p");
    item.innerHTML = smoothieItem[i];
        item.onclick = function() {
        this.style.color = pick;
    }
    smoothie.appendChild(item);
}

// juice
for (var i=0; i<juiceItem.length; i++) {
    var item = document.createElement("p");
    item.innerHTML = juiceItem[i];
        item.onclick = function() {
        this.style.color = pick;
    }
    juice.appendChild(item);
}

// tea
for (var i=0; i<teaItem.length; i++) {
    var item = document.createElement("p");
    item.innerHTML = teaItem[i];
        item.onclick = function() {
        this.style.color = pick;
    }
    tea.appendChild(item);
}

// bread
for (var i=0; i<breadItem.length; i++) {
    var item = document.createElement("p");
    item.innerHTML = breadItem[i];
        item.onclick = function() {
        this.style.color = pick;
    }
    bread.appendChild(item);
}

// scone
for (var i=0; i<sconeItem.length; i++) {
    var item = document.createElement("p");
    item.innerHTML = sconeItem[i];
        item.onclick = function() {
        this.style.color = pick;
    }
    scone.appendChild(item);
}

// cake
for (var i=0; i<cakeItem.length; i++) {
    var item = document.createElement("p");
    item.innerHTML = cakeItem[i];
        item.onclick = function() {
        this.style.color = pick;
    }
    cake.appendChild(item);
}

// salad
for (var i=0; i<saladItem.length; i++) {
    var item = document.createElement("p");
    item.innerHTML = saladItem[i];
    salad.appendChild(item);
        item.onclick = function() {
        this.style.color = pick;
    }
}
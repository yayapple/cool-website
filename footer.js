
footerText();

function footerText() {
    const messages = new Array(
        "give me your credit card information please.",
        "this has been an apple™ experience.",
        "i love you.",
        "let's keep in touch.",
        "please give me your mom's phone number.",
        "tell me a joke.",
        "don't be surprised.",
        "i'm behind you.",
        "turn around.",
        "lol cat..",
        "who wants to play valorant.",
        "stop posting about among us.",
        "keep it to yourself.",
        "reload the page.",
        "i don't know what to put here.",
        "dave please change the footer text thank you.",
        "get owned.",
        "dbjnhiyunkzvdrcdggkuywuntmnarsto.",
        "i'm in me mum's car.",
        "so... are we like a thing?..",
        "i need to know.",
        "send me your finest money.",
        "i also do website and carrd commissions.",
        "this text changes you know.",
        "we already know. it's ok. we forgive you.",
        "mom, dad, i'm gay.",
        "you're just as funny as you think you are.",
        "i also tutor people.",
        "you have to do it. you need to.",
        "you're out of eggs.",
        "go drink some water.",
        "you need to get that checked out.",
        "thanks.",
        "twitter? i hardly know 'er!",
        "my keyboard layout looks like this: qwfpbjluy;[]\ arstgkneio' xcdvzmh,./ .",
        "tell me all of your problems. i won't solve them.",
        "you need to leave.",
        "tik tok? more like lick sock.",
        "lalalalalalalalala",
        "speak up a little, i can't hear you.",
        "you.",
        "sanovumazeqfwpl;yukairestnaidvzgrkinatsvyuk;"
    );
    document.getElementsByClassName("footer")[0].children[1].innerHTML = messages[messages.length * Math.random() | 0];
}
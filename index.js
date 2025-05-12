const fs = require('fs');
const readline = require('readline-sync');

// 1. load the word dict
const words = JSON.parse(fs.readFileSync('./words.json', 'utf-8'));

// 2. the random function
function getRandomWord() {
    const idx = Math.floor(Math.random() * words.length);
    return words[idx];
}

// 3. the game main loop
let score = 0;
const rounds = 5;
for (let i = 0; i < rounds; i++) {
    const { fr, en } = getRandomWord();
    console.log(`\n第 ${i+1} 题：法语 —— ${fr}`);
    const answer = readline.question(`请输入英文释义：`).trim();

    if (answer.toLowerCase() === en.trim().toLowerCase()) {
        console.log(`回答正确！`);
        score++;
    } else {
        console.log(`回答错误！`);
        console.log(`正确答案是：${en}`);
    }
}

console.log(`\n游戏结束，你的得分是：${score} / ${rounds}`);

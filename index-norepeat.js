const fs = require('fs');
const readline = require('readline-sync');

// 1. load the word dict
const words = JSON.parse(fs.readFileSync('./words.json', 'utf-8'));

// 2. 复制单词数组用于抽题
let pool = [...words];

let score = 0;
const rounds = Math.min(5, pool.length); // 避免题数大于单词数

for (let i = 0; i < rounds; i++) {
    // 随机抽取并移除
    const idx = Math.floor(Math.random() * pool.length);
    const { fr, en } = pool.splice(idx, 1)[0];

    console.log(`\n第 ${i+1} 题：法语 —— ${fr}`);
    const answer = readline.question('请输入英文释义：').trim();

    if (answer.toLowerCase() === en.trim().toLowerCase()) {
        console.log('回答正确！');
        score++;
    } else {
        console.log('回答错误！');
        console.log(`正确答案是：${en}`);
    }
}

console.log(`\n游戏结束，你的得分是：${score} / ${rounds}`);

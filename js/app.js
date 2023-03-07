let words = ["alpha", "beta", "gamma", "delta"];
let translation = ["ziqyz", "palz", "ozwwz", "sailz"];
let secret_word = "ziqyz";

for (let i = 0; i < secret_word.length; i++) {
    console.log(secret_word[i] + " = " + words[0][i]);
}
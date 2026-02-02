function moveNo() {
const noBtn = document.getElementById("no");

const x = Math.random() * 200;
const y = Math.random() * 40;

noBtn.style.left = x + "px";
noBtn.style.top = y + "px";

noBtn.innerHTML = "Yes 💖";
noBtn.style.backgroundColor = "#ff4d6d";
noBtn.style.color = "white";
}

function yesClicked() {
document.body.innerHTML = `
<div style="height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background:linear-gradient(135deg,#ff758c,#ff7eb3);color:white;text-align:center;">
<h1>Yayyy Shweta!!! 💕😍</h1>
<p style="font-size:1.4rem;">Looks like our love story just said YES 💘</p>
</div>
`;
}

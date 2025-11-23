    const btnTheme = document.getElementById('theme-toggle');

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});


const starsContainer = document.getElementById('stars');

// สร้างดาวหลายขนาด
const starSizes = [1,2,4,6];
const totalStars = 80;

for(let i=0;i<totalStars;i++){
    const star = document.createElement('div');
    star.classList.add('star');
    const size = starSizes[Math.floor(Math.random()*starSizes.length)];
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random()*100}%`;
    star.style.left = `${Math.random()*100}%`;
    star.style.animationDuration = `${Math.random()*6+4}s`;
    star.style.animationDelay = `${Math.random()*5}s`;
    starsContainer.appendChild(star);
}


    // ------------------ ระบบสลับธีม Light / Dark ------------------
const themeBtn = document.getElementById("theme-toggle");
const body = document.body;

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    // เปลี่ยนไอคอนตามธีม
    const icon = themeBtn.querySelector("i");
    if (body.classList.contains("dark")) {
        icon.classList.remove("ph-moon");
        icon.classList.add("ph-sun");
    } else {
        icon.classList.remove("ph-sun");
        icon.classList.add("ph-moon");
    }
});
// Shooting star
function createShootingStar(){
    const shooting = document.createElement('div');
    shooting.classList.add('shooting-star');
    shooting.style.left = `${Math.random()*window.innerWidth}px`;
    shooting.style.top = `${Math.random()*window.innerHeight/2}px`;
    shooting.style.animationDuration = `${Math.random()*1+1.5}s`;
    starsContainer.appendChild(shooting);
    setTimeout(()=>shooting.remove(), 2000);
}
setInterval(createShootingStar, 2000);
    function toggleTheme() {
            const body = document.body;
            const icon = document.getElementById("theme-icon");

            body.classList.toggle("dark");

            if (body.classList.contains("dark")) {
                icon.className = "ph ph-sun";  // ☀️
            } else {
                icon.className = "ph ph-moon"; // 🌙
            }
        }
        

        // Topic selection
        const buttons = document.querySelectorAll('.menu-button');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('unselected');
                const icon = btn.querySelector('.check-icon-left');
                if (icon) {
                    icon.style.display = btn.classList.contains('unselected') ? 'none' : 'flex';
                }
            });
        });

        // Final button
       document.getElementById('final-button').addEventListener('click', () => {
    const selected = [];
    buttons.forEach(btn => {
        if (!btn.classList.contains('unselected')) {
            selected.push(btn.dataset.topic);
        }
    });

    if (selected.length === 0) {
        alert("กรุณาเลือกหัวข้ออย่างน้อย 1 หัวข้อ");
        return;
    }

    localStorage.setItem('topics', JSON.stringify(selected));

    // ⭐ เพิ่มตรงนี้
    localStorage.setItem("fortuneType", localStorage.getItem("fortuneType"));

    window.location.href = "index4.html";
});

            localStorage.setItem('topics', JSON.stringify(selected));
            window.location.href = "index4.html";
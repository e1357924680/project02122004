// Initialize AOS for Scroll Animations
AOS.init({
    duration: 1200,
    offset: 100,
    easing: 'ease-in-out',
    once: true, // يجعل الحركة تظهر مرة واحدة فقط عند التمرير الأول
});

// Typed.js for typing effect
let typed = new Typed('#typed-title', {
    strings: ["ברוכים הבאים לתיק העבודות שלי", "Discover My Skills and Experience"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});

// Skill Progress Bars using Chart.js
let skillPython = new Chart(document.getElementById("skillPython"), {
    type: "doughnut",
    data: { labels: ["Python"], datasets: [{ data: [90, 10], backgroundColor: ["#f0a500", "#e0e0e0"] }] },
    options: { cutout: "80%" }
});

document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    Swal.fire({
        title: 'ההודעה נשלחה!',
        text: 'תודה על פנייתך. נחזור אליך בקרוב.',
        icon: 'success',
        confirmButtonText: 'סגור'
    });
    // ניקוי שדות לאחר השליחה
    document.getElementById("name").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("email").value = '';
    document.getElementById("message").value = '';
});


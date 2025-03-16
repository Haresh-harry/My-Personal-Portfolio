// visit github function

function visitGit() {
    window.open('https://github.com/Haresh-harry');
}

// download resume function

function download() {
    var url = "https://drive.google.com/uc?export=download&id=1tq1hBpGYLhuIVppYtLNDHG5cXKBrESjS";
    var iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = 'none';
    iframe.src = url;
    document.body.appendChild(iframe);

    iframe.onload = function() {
        iframe.contentWindow.print();
    };

    alert("Click Ok to Download CV ..!");
}

// contact mail function

function contactMail() {
    var email = "hareshrouthu2002@gmail.com";
    var subject = "Testing";
    var body = "Hello, I would like to inquire about...";
    var mailtoLink = "https://mail.google.com/mail/?view=cm&fs=1&to=" + email + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
}

// menu-icon function

const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = function () {
    navLinks.classList.toggle('active');
}
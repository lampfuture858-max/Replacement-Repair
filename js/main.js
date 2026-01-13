function toggleQR() {
    var el = document.getElementById('qrModal') || document.querySelector('.qr-modal');
    if (!el) return;
    el.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function(){
    var form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e){
            e.preventDefault();
            var note = document.getElementById('formNote');
            if (note) note.classList.remove('hidden');
        });
    }
});

function toggleMobileMenu() {
    var el = document.getElementById('mobileMenu');
    if (!el) return;
    el.classList.toggle('active');
}

window.addEventListener('resize', function(){
    var el = document.getElementById('mobileMenu');
    if (el && window.innerWidth >= 768) el.classList.remove('active');
});

function openWeChat() {
    var start = Date.now();
    try {
        var iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = 'weixin://';
        document.body.appendChild(iframe);
        setTimeout(function(){
            try { document.body.removeChild(iframe); } catch(e){}
            if (Date.now() - start < 1400) toggleQR();
        }, 1200);
    } catch (e) {
        // fallback
        toggleQR();
    }
}

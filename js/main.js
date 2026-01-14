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
function copyWeChat() {
    var id = 'yw13829751079';
    function showToast(msg) {
        var t = document.getElementById('copyToast');
        if (!t) {
            t = document.createElement('div');
            t.id = 'copyToast';
            t.style.position = 'fixed';
            t.style.left = '50%';
            t.style.bottom = '18%';
            t.style.transform = 'translateX(-50%)';
            t.style.background = 'rgba(0,0,0,0.8)';
            t.style.color = '#fff';
            t.style.padding = '10px 16px';
            t.style.borderRadius = '10px';
            t.style.zIndex = 9999;
            t.style.fontSize = '14px';
            t.style.opacity = '0';
            t.style.transition = 'opacity 180ms';
            document.body.appendChild(t);
        }
        t.textContent = msg;
        t.style.opacity = '1';
        setTimeout(function(){ t.style.opacity = '0'; }, 1600);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(id).then(function(){
            showToast('微信号已复制：' + id);
        }).catch(function(){
            toggleQR();
        });
        return;
    }

    var ta = document.createElement('textarea');
    ta.value = id;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
        document.execCommand('copy');
        showToast('微信号已复制：' + id);
    } catch (e) {
        toggleQR();
    }
    document.body.removeChild(ta);
}

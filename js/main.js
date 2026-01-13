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

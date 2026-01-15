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

function toggleServiceSubmenu() {
    var submenu = document.getElementById('serviceSubmenu');
    var chevron = document.getElementById('serviceChevron');
    if (!submenu) return;
    submenu.classList.toggle('hidden');
    if (chevron) {
        if (submenu.classList.contains('hidden')) {
            chevron.classList.remove('rotate');
        } else {
            chevron.classList.add('rotate');
        }
    }
}
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
var servicesData = {
    s1: {
        title: '一、住宅 / 餐馆 / 商业来水、下水管维修',
        icon: 'images/icon1.png',
        items: [
            '来水管、下水管漏水快速查修与封堵',
            '下水道堵塞、返水、不通诊断与疏通',
            '老旧管道维修与整段更换',
            '厨房与卫生间排水异常处理与密封修复'
        ]
    },
    s2: {
        title: '二、管道疏通 & 挖街换管',
        icon: 'images/icon2.png',
        items: [
            '室内外下水道专业疏通（手工 + 高压水机）',
            '主下水管与街道主管堵塞定位与处理',
            '挖街换管、老旧街管更新与恢复通行',
            '油脂、树根与顽固堵塞清理（提供免费电脑摄像检测）'
        ]
    },
    s3: {
        title: '三、水系统维修与更换',
        icon: 'images/icon3.png',
        items: [
            '来水总开关维修与更换',
            '水压异常与异常水费排查',
            '隐蔽漏水检测（含超声波与内窥镜）',
            '各类水管配件及阀门维修更换'
        ]
    },
    s4: {
        title: '四、水泵 / 热水炉 / 暖气系统',
        icon: 'images/icon4.png',
        items: [
            '大型抽水泵安装、调试与维修',
            '热水炉（Hot Water Heater）安装与更换',
            '暖气炉（Boiler / Furnace）检修与维护',
            '暖气不热、异响、泄漏等故障诊断与修复'
        ]
    },
    s5: {
        title: '五、煤气管道检测与维修（安全第一）',
        icon: 'images/icon3.png',
        items: [
            '煤气管道完整性检查与压力测试',
            '煤气泄漏快速排查与临时处置',
            '煤气管维修、更换与合规加固'
        ],
        desc: '提供专业煤气管道安全检测、泄漏排查与合规维修，严格按安全规范施工，确保居住与商用场所安全。'
    }
};

function showService(serviceId) {
    var data = servicesData[serviceId];
    if (!data) return;
    
    var modal = document.getElementById('serviceDetailModal');
    if (!modal) return;
    
    var titleEl = modal.querySelector('#serviceTitle');
    var iconEl = modal.querySelector('#serviceIcon');
    var itemsEl = modal.querySelector('#serviceItems');
    var descEl = modal.querySelector('#serviceDesc');
    
    if (titleEl) titleEl.textContent = data.title;
    if (iconEl) iconEl.src = data.icon;
    
    if (itemsEl) {
        itemsEl.innerHTML = '';
        data.items.forEach(function(item) {
            var li = document.createElement('li');
            li.textContent = item;
            itemsEl.appendChild(li);
        });
    }
    
    if (descEl) {
        descEl.style.display = data.desc ? 'block' : 'none';
        if (data.desc) descEl.textContent = data.desc;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeServiceDetail() {
    var modal = document.getElementById('serviceDetailModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}
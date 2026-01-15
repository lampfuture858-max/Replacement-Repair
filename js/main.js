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
        title: '住宅 / 餐馆 / 商业来水、下水管维修',
        icon: 'images/icon1.png',
        coverImage: 'images/hero.jpg',
        description: '专业诊断与快速修复，涵盖住宅到商业场景的全系列管道问题',
        shortDesc: '来水管、下水管漏水快速查修与封堵，下水道堵塞、返水诊断与疏通，老旧管道维修与整段更换，厨房与卫生间排水异常处理。',
        features: [
            {icon: '🔍', title: '精准诊断', desc: '电脑摄像内窥镜精准定位问题'},
            {icon: '⚡', title: '快速上门', desc: '纽约五大区小时级别抵达'},
            {icon: '💰', title: '透明报价', desc: '先报后修，无隐藏收费'},
            {icon: '🛡️', title: '质保承诺', desc: '工作质保 + 商业保险'}
        ],
        items: [
            '来水管、下水管漏水快速查修与封堵',
            '下水道堵塞、返水、不通诊断与疏通',
            '老旧管道维修与整段更换（PVC、铜管、铁管）',
            '厨房与卫生间排水异常处理与密封修复'
        ]
    },
    s2: {
        title: '管道疏通 & 挖街换管',
        icon: 'images/icon2.png',
        coverImage: 'images/hero.jpg',
        description: '专业高压疏通设备，处理餐厅油脂、树根、顽固堵塞与街管问题',
        shortDesc: '室内外下水道专业疏通，主下水管与街道主管堵塞定位处理，挖街换管、老旧街管更新，油脂树根顽固堵塞清理。',
        features: [
            {icon: '💧', title: '高压水机', desc: '500+ psi高压清洁管道'},
            {icon: '🎯', title: '油脂清理', desc: '餐厅油脂堆积专业处理'},
            {icon: '🌳', title: '树根清除', desc: '电机钻头树根清除'},
            {icon: '🚧', title: '街管更换', desc: '市政许可 + 专业施工'}
        ],
        items: [
            '室内外下水道专业疏通（手工 + 高压水机双重方案）',
            '主下水管与街道主管堵塞定位与处理',
            '挖街换管、老旧街管更新与恢复通行',
            '油脂、树根与顽固堵塞清理（提供免费电脑摄像检测）'
        ]
    },
    s3: {
        title: '水系统维修与更换',
        icon: 'images/icon3.png',
        coverImage: 'images/hero.jpg',
        description: '全屋水系统检测、维修、更新，解决水压、漏水、水质问题',
        shortDesc: '来水总开关维修与更换，水压异常与异常水费排查，隐蔽漏水检测，各类水管配件及阀门维修更换。',
        features: [
            {icon: '🔌', title: '来水主阀', desc: '主关阀维修与更换'},
            {icon: '📊', title: '压力检测', desc: '水压异常排查与调试'},
            {icon: '🔬', title: '漏水检测', desc: '超声波 + 内窥镜检测'},
            {icon: '🔧', title: '管件更换', desc: '铜管、PVC全系列配件'}
        ],
        items: [
            '来水总开关维修与更换（确保紧急关断）',
            '水压异常与异常水费排查（识别隐蔽漏水）',
            '隐蔽漏水检测（超声波与内窥镜技术）',
            '各类水管配件及阀门维修更换'
        ]
    },
    s4: {
        title: '水泵 / 热水炉 / 暖气系统',
        icon: 'images/icon4.png',
        coverImage: 'images/hero.jpg',
        description: '大型设备安装、维修、保养，确保全年供水供暖稳定',
        shortDesc: '大型抽水泵安装调试维修，热水炉安装与更换，暖气炉检修与维护，暖气不热异响泄漏诊断修复。',
        features: [
            {icon: '💨', title: '抽水泵', desc: '多层楼宇增压泵安装'},
            {icon: '🔥', title: '热水炉', desc: '坦克式/无坦克式热水器更换'},
            {icon: '❄️', title: '暖气系统', desc: '锅炉检修 + 管道放气'},
            {icon: '📈', title: '能效升级', desc: '高效节能设备推荐'}
        ],
        items: [
            '大型抽水泵安装、调试与维修（多层供水系统）',
            '热水炉（Tank/Tankless）安装、维护与更换',
            '暖气炉（Boiler/Furnace）检修、保养与维护',
            '暖气不热、异响、泄漏等故障诊断与修复'
        ]
    },
    s5: {
        title: '煤气管道检测与维修',
        icon: 'images/icon3.png',
        coverImage: 'images/hero.jpg',
        description: '严格遵守安全规范，提供专业煤气管道检测与合规维修',
        shortDesc: '煤气管道完整性检查与压力测试，煤气泄漏快速排查与临时处置，煤气管维修、更换与合规加固。',
        features: [
            {icon: '🚨', title: '泄漏检测', desc: '专业检漏仪快速定位'},
            {icon: '✅', title: '合规施工', desc: '遵守 DOB 安全规范'},
            {icon: '📋', title: '证书齐全', desc: '持证技师 + 商业保险'},
            {icon: '🛡️', title: '24/7 应急', desc: '泄漏紧急处置服务'}
        ],
        items: [
            '煤气管道完整性检查与压力测试（年度合规检测）',
            '煤气泄漏快速排查与临时处置（24/7 应急）',
            '煤气管维修、更换与合规加固（遵守 DOB 标准）'
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
    var shortDescEl = modal.querySelector('#serviceShortDesc');
    var featuresEl = modal.querySelector('#serviceFeatures');
    
    if (titleEl) titleEl.textContent = data.title;
    if (iconEl) iconEl.src = data.icon;
    if (shortDescEl) {
        shortDescEl.textContent = data.shortDesc || '';
        shortDescEl.style.display = data.shortDesc ? 'block' : 'none';
    }
    
    // 渲染特性卡片
    if (featuresEl && data.features) {
        featuresEl.innerHTML = '';
        data.features.forEach(function(feature) {
            var featureDiv = document.createElement('div');
            featureDiv.className = 'flex items-start gap-3 pb-3 border-b last:border-b-0';
            featureDiv.innerHTML = '<div class="text-2xl flex-shrink-0">' + feature.icon + '</div><div><div class="font-bold text-sm">' + feature.title + '</div><div class="text-xs text-gray-500">' + feature.desc + '</div></div>';
            featuresEl.appendChild(featureDiv);
        });
        featuresEl.style.display = data.features ? 'block' : 'none';
    }
    
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
    // 防止背景滚动
    document.documentElement.style.overflow = 'hidden';
}

function closeServiceDetail() {
    var modal = document.getElementById('serviceDetailModal');
    if (modal) {
        modal.classList.remove('active');
        document.documentElement.style.overflow = '';
    }
}
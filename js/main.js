// ===== 基础UI功能 =====
function toggleQR() {
    var el = document.getElementById('qrModal') || document.querySelector('.qr-modal');
    if (!el) return;
    el.classList.toggle('active');
}

function toggleMobileMenu() {
    var el = document.getElementById('mobileMenu');
    if (!el) return;
    var isOpening = !el.classList.contains('active');
    el.classList.toggle('active');
    
    // 打开菜单时，先收起子菜单，然后根据当前页面决定是否展开
    if (isOpening) {
        resetMobileMenuState();
        // 延迟一下再检查是否需要展开
        setTimeout(function() {
            checkAndExpandActiveService();
        }, 50);
    }
}

// 强制关闭菜单
function closeMobileMenu() {
    var el = document.getElementById('mobileMenu');
    if (el && el.classList.contains('active')) {
        el.classList.remove('active');
    }
}

// 点击遮罩层关闭菜单
document.addEventListener('DOMContentLoaded', function() {
    var mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            // 如果点击的是遮罩层本身（不是菜单面板）
            if (e.target === mobileMenu) {
                toggleMobileMenu();
            }
        });
    }
    
    // 高亮当前页面的菜单项
    highlightCurrentPage();
    
    // 监听hash变化（用于services.html页面内的锚点跳转）
    window.addEventListener('hashchange', function() {
        highlightCurrentPage();
    });
});

// 根据当前页面URL和hash高亮对应的菜单项
function highlightCurrentPage() {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var currentHash = window.location.hash;
    
    // 移除所有激活状态
    document.querySelectorAll('.mobile-menu a, .service-mobile-item > button').forEach(function(item) {
        item.classList.remove('active');
    });
    
    // 高亮对应的菜单项
    if (currentPage === 'index.html' || currentPage === '') {
        // 首页不高亮任何菜单项，或者可以添加一个首页链接
    } else if (currentPage === 'services.html') {
        var serviceBtn = document.querySelector('.service-mobile-item > button');
        if (serviceBtn) {
            serviceBtn.classList.add('active');
        }
        
        // 如果有hash，高亮对应的子菜单项
        if (currentHash) {
            var submenuLinks = document.querySelectorAll('#serviceSubmenu a');
            submenuLinks.forEach(function(link) {
                if (link.getAttribute('href').includes(currentHash)) {
                    link.classList.add('active');
                }
            });
        }
    } else if (currentPage === 'blog.html') {
        var blogLinks = document.querySelectorAll('.mobile-menu a[href*="blog.html"]');
        blogLinks.forEach(function(link) { link.classList.add('active'); });
    } else if (currentPage === 'contact.html') {
        var contactLinks = document.querySelectorAll('.mobile-menu a[href*="contact.html"]');
        contactLinks.forEach(function(link) { link.classList.add('active'); });
    }
    
    // 处理带hash的情况（专业设备、服务流程等）
    if (currentHash === '#equipment') {
        var equipmentLinks = document.querySelectorAll('.mobile-menu a[href*="#equipment"]');
        equipmentLinks.forEach(function(link) { link.classList.add('active'); });
    } else if (currentHash === '#process') {
        var processLinks = document.querySelectorAll('.mobile-menu a[href*="#process"]');
        processLinks.forEach(function(link) { link.classList.add('active'); });
    }
}

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

// 在打开移动菜单时重置子菜单状态
function resetMobileMenuState() {
    var submenu = document.getElementById('serviceSubmenu');
    var chevron = document.getElementById('serviceChevron');
    if (submenu && !submenu.classList.contains('hidden')) {
        submenu.classList.add('hidden');
        if (chevron) {
            chevron.classList.remove('rotate');
        }
    }
}

// 检查是否有激活的服务项，如果有则自动展开
function checkAndExpandActiveService() {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var currentHash = window.location.hash;
    
    // 如果在服务页面且有hash（具体服务），或者服务按钮/子菜单项有激活状态，则展开
    var shouldExpand = false;
    
    if (currentPage === 'services.html' && currentHash) {
        shouldExpand = true;
    }
    
    // 检查是否有激活的子菜单项
    var activeSubmenuItem = document.querySelector('#serviceSubmenu a.active');
    if (activeSubmenuItem) {
        shouldExpand = true;
    }
    
    if (shouldExpand) {
        var submenu = document.getElementById('serviceSubmenu');
        var chevron = document.getElementById('serviceChevron');
        if (submenu && submenu.classList.contains('hidden')) {
            submenu.classList.remove('hidden');
            if (chevron) chevron.classList.add('rotate');
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

// ===== 服务内容折叠展开功能 =====
function toggleServiceContent(serviceId) {
    const content = document.getElementById('content-' + serviceId);
    const icon = document.getElementById('icon-' + serviceId);
    
    if (!content) return;
    
    if (content.classList.contains('service-content-hidden')) {
        // 展开
        content.classList.remove('service-content-hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
    } else {
        // 折叠
        content.classList.add('service-content-hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
    }
}

// ===== 页面加载和窗口事件 =====
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

window.addEventListener('resize', function(){
    var el = document.getElementById('mobileMenu');
    if (el && window.innerWidth >= 768) el.classList.remove('active');
});
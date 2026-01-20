function toggleQR() {
    var el = document.getElementById('qrModal') || document.querySelector('.qr-modal');
    if (!el) return;
    el.classList.toggle('active');
}



document.addEventListener('DOMContentLoaded', function(){
    // 确保全局函数可用
    window.scrollToSection = scrollToSection;
    window.performScroll = performScroll;
    
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
        iconType: 'image',
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
        iconType: 'image',
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
        iconType: 'image',
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
        iconType: 'image',
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
        icon: 'fa-fire-extinguisher',
        iconType: 'fontawesome',
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
    var iconContainerEl = iconEl ? iconEl.parentElement : null;
    
    if (titleEl) titleEl.textContent = data.title;
    
    // Handle icon - Font Awesome or image
    if (data.iconType === 'fontawesome' && iconContainerEl) {
        iconEl.style.display = 'none';
        
        var faIcon = iconContainerEl.querySelector('.fa-icon');
        if (!faIcon) {
            faIcon = document.createElement('div');
            faIcon.className = 'fa-icon text-red-600 flex-shrink-0';
            faIcon.style.fontSize = '80px';
            iconContainerEl.insertBefore(faIcon, iconEl);
        }
        
        faIcon.className = 'fa-icon text-red-600 flex-shrink-0';
        faIcon.style.fontSize = '80px';
        faIcon.innerHTML = '<i class="fas ' + data.icon + '"></i>';
    } else if (iconEl) {
        if (iconContainerEl) {
            var faIcon = iconContainerEl.querySelector('.fa-icon');
            if (faIcon) faIcon.style.display = 'none';
        }
        iconEl.src = data.icon;
        iconEl.style.display = 'block';
    }
    
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
    
    // 添加案例显示 - 直接在模态框中创建案例部分
    // 寻找或创建案例容器
    var casesContainer = modal.querySelector('[id="serviceCases"]') || 
                        document.getElementById('serviceCases');
    
    if (!casesContainer) {
        // 如果不存在，在描述之后创建
        var descEl = modal.querySelector('#serviceDesc');
        casesContainer = document.createElement('div');
        casesContainer.id = 'serviceCases';
        casesContainer.className = 'mb-6';
        casesContainer.innerHTML = '<h3 class="font-bold text-lg mb-3 text-slate-800">💼 客户案例</h3><div id="servicesCasesContent" class="grid grid-cols-1 gap-2 sm:gap-3"></div>';
        
        if (descEl && descEl.parentNode) {
            descEl.parentNode.insertBefore(casesContainer, descEl.nextSibling);
        } else {
            modal.querySelector('.p-8').appendChild(casesContainer);
        }
    }
    
    var casesContent = casesContainer.querySelector('#servicesCasesContent') ||
                      document.getElementById('servicesCasesContent');
    
    if (casesContainer && casesContent) {
        // 案例数据定义
        var casesData = {
            's1': [
                { name: '曼哈顿公寓主卧卫生间返水', problem: '主卧卫生间每次冲厕所就返水，楼下住户已投诉3次。用管道疏通机试过多次都不行。', solution: '电脑摄像定位堵点，使用高压水机彻底冲洗，并更换破损接头，2.5 小时恢复正常排水。', feedback: '⭐⭐⭐⭐⭐ "专业又靠谱，几分钟就看出问题，价位也合理。"', location: '📍 曼哈顿上东城', time: '⏱ 2024年10月' },
                { name: '法拉盛中餐馆厨房下水漏水', problem: '厨房下水管接头滴水半个月，楼下卖场天花板被泡坏，多家维修报价超 2000 美元。', solution: '拆检接头并清理油污，更换耐高温密封胶与螺栓，加装防震垫圈，半小时交付使用。', feedback: '⭐⭐⭐⭐⭐ "报价透明、效率超快，餐厅当晚就恢复营业。"', location: '📍 法拉盛缅街', time: '⏱ 2024年9月' },
                { name: '皇后区老房子来水管冻裂', problem: '严寒夜里铜管冻裂淹水，邻居认为需要整屋换管，预算高昂。', solution: '仅更换破裂段并包覆保温棉，外加伴热带防再冻裂，总成本控制在 350 美元。', feedback: '⭐⭐⭐⭐⭐ "花小钱办大事，师傅把冬季防护也一并教会我们。"', location: '📍 皇后区森林小丘', time: '⏱ 2024年1月' }
            ],
            's2': [
                { name: '皇后区整栋楼主下水道堵塞', problem: '四层住宅楼主下水道长期返水，多家公司建议挖街换管，报价高达 8000 美元。', solution: '电脑摄像定位堵塞在街管接口，直接使用高压水机清除油脂杂物，3 小时免挖街恢复排水。', feedback: '⭐⭐⭐⭐⭐ "省了6000多块！还不用破坏街道。对比其他公司的报价，真是天壤之别。"', location: '📍 皇后区牙买加', time: '⏱ 2024年8月' },
                { name: '布鲁克林街道下水管树根穿破', problem: '整条街道下水道堵塞，最后排查发现是树根穿破了下水管，邻近3户都受影响，城市部门要求业主自费修复。', solution: '先用高压水机清理树根，再精准挖开 30 米破损段更换新管，并原样恢复路面。', feedback: '⭐⭐⭐⭐⭐ "方案专业靠谱，还协助协调邻里与市政验收。"', location: '📍 布鲁克林展望高地', time: '⏱ 2024年7月' },
                { name: '曼哈顿餐馆厨房油脂堵塞', problem: '忙碌餐馆每周堵一次，下班后仍需临时疏通，严重影响营业。', solution: '晚间停业后进行高压热水冲洗，彻底剥离油垢并制定月度保养计划，3 个月无再堵。', feedback: '⭐⭐⭐⭐⭐ "一次彻底解决，厨房运转顺多了。"', location: '📍 曼哈顿中城', time: '⏱ 2024年6月' }
            ],
            's3': [
                { name: '曼哈顿豪宅隐蔽漏水排查', problem: '业主水费突然翻倍却找不到漏点，装修高端不敢随意拆墙。', solution: '使用超声波与热成像交叉定位，仅拆一块瓷砖更换接头，保留全部装饰。', feedback: '⭐⭐⭐⭐⭐ "装修一点没破坏，终于解决水费异常。"', location: '📍 曼哈顿上东区', time: '⏱ 2024年11月' },
                { name: '法拉盛公寓来水压力异常', problem: '整栋楼高层没水、低层水压过大，多次维修无果。', solution: '检测后确认楼顶储水箱进水阀故障，当天更换并校准压力，恢复全楼供水。', feedback: '⭐⭐⭐⭐⭐ "费用低还高效，住户满意度大幅提升。"', location: '📍 法拉盛缅街', time: '⏱ 2024年5月' },
                { name: '布朗士民宅水表故障', problem: '三个月水费暴涨至 800 美元，水务公司判定为用水过量。', solution: '逐点排查确认水表失准，协助提交报告并更换新表，成功追回多付费用。', feedback: '⭐⭐⭐⭐⭐ "不仅修好还帮忙维权，真正为客户着想。"', location: '📍 布朗士日落公园', time: '⏱ 2024年4月' }
            ],
            's4': [
                { name: '布朗士暖气炉紧急抢修', problem: '一月寒流夜间锅炉停机，全屋温度骤降，热线维修均排不到号。', solution: '30 分钟到场排查电控故障并清理燃烧器积碳，更换点火器后立即恢复供暖。', feedback: '⭐⭐⭐⭐⭐ "半夜救了全家，暖气立刻热起来，非常感谢。"', location: '📍 布朗士莫里尼亚', time: '⏱ 2024年1月' },
                { name: '曼哈顿热水炉延寿保养', problem: '使用 30 年的储水式热水炉不出热水，多位维修工建议整机更换。', solution: '检测后仅更换温度传感器与加热棒，并清洗水垢，520 美元恢复热水供应。', feedback: '⭐⭐⭐⭐⭐ "节省了几千块的换机费用，热水量比以前还稳定。"', location: '📍 曼哈顿中城', time: '⏱ 2024年3月' },
                { name: '皇后区地下室抽水泵安装', problem: '新购公寓地下室逢雨必积水，担心潮湿霉变影响房屋价值。', solution: '根据排水高度设计坑位，安装自动浮球泵并配置后备电源，交付前完成试泵培训。', feedback: '⭐⭐⭐⭐⭐ "暴雨后地下室一直干爽，还安排定期巡检。"', location: '📍 皇后区牙买加', time: '⏱ 2024年2月' }
            ],
            's5': [
                { name: '曼哈顿烤箱煤气泄漏紧急排查', problem: '业主闻到厨房有轻微的煤气味，但检测器没有显示。不确定是否真的泄漏，也不知道找谁。', solution: '用专业气体检测仪器进行全面排查，定位到烤箱进气接头处有微小泄漏。更换了接头和胶管，进行压力测试确认没有问题。', feedback: '⭐⭐⭐⭐⭐ "太专业了！不仅修好泄漏，还详细解释了煤气安全知识。心理踏实多了。"', location: '📍 曼哈顿上西城', time: '⏱ 2024年10月' },
                { name: '法拉盛餐馆定期煤气安全检测', problem: '餐馆每月被要求进行煤气安全检测，但很难找到可靠的检测服务。之前的检测人员标准不统一。', solution: '与餐馆建立了定期检测合作（每季度一次），每次都用标准化检测、出具检测报告、记录存档。现在餐馆的煤气安全完全合规，审计无忧。', feedback: '⭐⭐⭐⭐⭐ "找到了稳定的合作方，再也不用为煤气安全检测发愁了。推荐所有餐馆都这样做。"', location: '📍 法拉盛缅街', time: '⏱ 2024年9月' },
                { name: '皇后区整栋楼煤气管道更新', problem: '楼管发现旧楼的煤气管道已有40年历史，多处锈蚀。城市部门要求更新以确保安全。', solution: '制定了分阶段更新方案，最小化对住户的影响。更换了全部旧管道、安装新的安全装置、通过城市部门检验。整个项目专业、高效、安全。', feedback: '⭐⭐⭐⭐⭐ "大工程做得井井有条，住户没有怨言。城市部门一次通过检验，杨师傅的专业让我们非常满意。"', location: '📍 皇后区牙买加', time: '⏱ 2024年8月' }
            ]
        };
        
        // 获取该服务的案例数据
        var cases = casesData[serviceId];
        if (cases && cases.length > 0) {
            casesContent.innerHTML = '';
            cases.forEach(function(caseItem) {
                var caseEl = document.createElement('div');
                caseEl.className = 'bg-gradient-to-br from-gray-50 to-white rounded-lg p-2 sm:p-3 border border-gray-200 text-xs sm:text-sm';
                caseEl.innerHTML = '<p class="text-xs text-red-600 font-bold uppercase mb-1">真实案例</p>' +
                    '<h4 class="text-xs sm:text-sm font-bold text-slate-800 mb-1">' + caseItem.name + '</h4>' +
                    '<p class="text-xs text-gray-600 mb-1"><strong>问题：</strong>' + caseItem.problem + '</p>' +
                    '<p class="text-xs text-gray-600 mb-2"><strong>解决：</strong>' + caseItem.solution + '</p>' +
                    '<p class="text-xs mb-1"><strong class="text-slate-800">反馈：</strong><span class="text-gray-600">' + caseItem.feedback + '</span></p>' +
                    '<p class="text-xs text-gray-500">' + caseItem.location + ' | ' + caseItem.time + '</p>';
                casesContent.appendChild(caseEl);
            });
            // 移除hidden class并设置display
            casesContainer.classList.remove('hidden');
            casesContainer.style.display = 'block';
        } else {
            casesContainer.classList.add('hidden');
            casesContainer.style.display = 'none';
        }
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

// ===== 案例展示系统 =====
window.casesList = {
    s1: {
        title: '来水 / 下水管维修案例',
        subtitle: '真实客户反馈 · 现场施工展示 · 对症下药、快速解决',
        cases: [
            { name: '曼哈顿公寓主卧卫生间返水', problem: '主卧卫生间每次冲厕所就返水，楼下住户已投诉3次。用管道疏通机试过多次都不行。', solution: '杨师傅用电脑摄像内窥镜定位到3楼与4楼之间的主下水管内有油脂堆积 + 陶片碎裂，用高压水机清理 + 换管接头，共耗时2.5小时。', tags: ['电脑摄像诊断', '高压水机', '换管接头'], tagColors: ['bg-blue-100 text-blue-700', 'bg-green-100 text-green-700', 'bg-purple-100 text-purple-700'], feedback: '⭐⭐⭐⭐⭐ "非常专业！一眼看出问题所在，效率高，价格也很公道，已向朋友推荐。"', location: '📍 曼哈顿上东城', time: '⏱ 2024年10月' },
            { name: '法拉盛中餐馆厨房下水漏水', problem: '厨房下水管接头漏水，滴在楼下卖场天花板上，已漏了半个月。询问了3家维修公司都报价2000元以上。', solution: '杨师傅上门检查，发现下水管接头处防水胶老化 + 螺栓松动，清理接头、更换硅胶、上紧螺栓，30分钟搞定，收费$480。', tags: ['漏水查修', '防水处理', '快速维修'], tagColors: ['bg-orange-100 text-orange-700', 'bg-red-100 text-red-700', 'bg-yellow-100 text-yellow-700'], feedback: '⭐⭐⭐⭐⭐ "太实在了！别的报2000块的活儿，一上门就能诊断问题还这么便宜。立刻给员工加餐！"', location: '📍 法拉盛缅街', time: '⏱ 2024年9月' },
            { name: '皇后区老房子来水管冻裂', problem: '冬天来水管冻裂，楼下淹水。房子已有80年历史，来水管是铁管，多处锈蚀。邻居怀疑得全换新管。', solution: '杨师傅检查后，只需要换冻裂处 + 加装防冻伴热线，成本$350。旧铁管能继续用5-10年，业主非常满意。', tags: ['冻裂修复', '防冻处理', '成本节省'], tagColors: ['bg-cyan-100 text-cyan-700', 'bg-teal-100 text-teal-700', 'bg-green-100 text-green-700'], feedback: '⭐⭐⭐⭐⭐ "省了我至少1000块钱！没有乱建议换管，专业、诚实、强烈推荐。"', location: '📍 皇后区森林小丘', time: '⏱ 2024年1月' }
        ]
    },
    s2: {
        title: '疏通 & 挖街换管案例',
        subtitle: '高压水机 · 电脑摄像 · 一次搞定顽固堵塞',
        cases: [
            { name: '皇后区整栋楼主下水道堵塞', problem: '整栋4层楼下水道不通，1楼返水，楼管说已经好几年了。请了多家公司都说要挖街换管，报价$8000+。', solution: '杨师傅用电脑摄像定位，发现堵塞点在街道主管与楼管接口处，全是油脂 + 纸制品。用高压水机直接疏通，不用挖街，耗时3小时，收费$1200。', tags: ['电脑摄像定位', '高压水机', '省钱方案'], tagColors: ['bg-amber-100 text-amber-700', 'bg-orange-100 text-orange-700', 'bg-red-100 text-red-700'], feedback: '⭐⭐⭐⭐⭐ "省了6000多块！还不用破坏街道。对比其他公司的报价，真是天壤之别。"', location: '📍 皇后区牙买加', time: '⏱ 2024年8月' },
            { name: '布鲁克林街道下水管树根穿破', problem: '整条街道下水道堵塞，最后排查发现是树根穿破了下水管，邻近3户都受影响，城市部门要求业主自费修复。', solution: '杨师傅评估后，先用高压水机清理树根，然后挖街换管。只换了最严重的30米管段，并妥善恢复路面和绿化，全部费用$3500。', tags: ['树根清理', '挖街换管', '路面恢复'], tagColors: ['bg-yellow-100 text-yellow-700', 'bg-amber-100 text-amber-700', 'bg-green-100 text-green-700'], feedback: '⭐⭐⭐⭐⭐ "从诊断到施工都很专业，还帮我们处理与邻居的协调问题。城市部门检查也通过了！"', location: '📍 布鲁克林展望高地', time: '⏱ 2024年7月' },
            { name: '曼哈顿高层餐馆厨房油脂堵塞', problem: '繁忙餐馆厨房每周都要疏通一次，请的普通工人用钻机每次都是临时疏通，效果不好，非常影响营业。', solution: '杨师傅用高压水机深度清理，彻底清除管道内的油脂沉淀，并教导厨房人员定期保养。从那以后，这家餐馆3个月都没有堵塞过。', tags: ['高压清洗', '油脂清理', '定期保养'], tagColors: ['bg-orange-100 text-orange-700', 'bg-red-100 text-red-700', 'bg-purple-100 text-purple-700'], feedback: '⭐⭐⭐⭐⭐ "一劳永逸的方案！现在每月只需预防性维护一次，省了我们太多麻烦。"', location: '📍 曼哈顿中城', time: '⏱ 2024年6月' }
        ]
    },
    s3: {
        title: '水系统维修案例',
        subtitle: '隐蔽漏水检测 · 水压异常排查 · 全面系统诊断',
        cases: [
            { name: '曼哈顿豪宅隐蔽漏水排查', problem: '业主水费突然翻倍，但看不出来哪里漏水。装修公司和其他维修工都找不到。房主非常焦虑。', solution: '杨师傅用超声波检测仪在墙体内部定位，发现是2楼浴室下的来水管接头处微漏。只需打开一小块瓷砖，更换接头，损失最小。', tags: ['超声波检测', '精准定位', '最小损伤'], tagColors: ['bg-blue-100 text-blue-700', 'bg-indigo-100 text-indigo-700', 'bg-cyan-100 text-cyan-700'], feedback: '⭐⭐⭐⭐⭐ "终于找到漏点了！杨师傅的技术真的专业，保留了我的装修。"', location: '📍 曼哈顿上东区', time: '⏱ 2024年11月' },
            { name: '法拉盛公寓来水压力异常', problem: '整栋楼来水压力不足，高层都没有水，但低层却很强。物业找了好几个水管工都没好好诊断。', solution: '杨师傅发现是楼顶储水箱进水阀门老化，水流不足。只需换个阀门，整栋楼水压就正常了。费用$280。', tags: ['系统诊断', '阀门更换', '经济方案'], tagColors: ['bg-teal-100 text-teal-700', 'bg-blue-100 text-blue-700', 'bg-green-100 text-green-700'], feedback: '⭐⭐⭐⭐⭐ "物业推荐给住户的最好维修工。问题诊断得很快，价格也公道。"', location: '📍 法拉盛缅街', time: '⏱ 2024年5月' },
            { name: '布朗士民宅水表故障导致水费异常', problem: '业主3个月水费达到$800，明显异常。水务公司说是使用问题。业主很冤枉，不知道找谁诊断。', solution: '杨师傅检查发现水表已经坏了，不准确计量。向水务公司反映，帮业主更换了新水表，并追回了多交的费用。', tags: ['水表诊断', '协议沟通', '费用追回'], tagColors: ['bg-cyan-100 text-cyan-700', 'bg-teal-100 text-teal-700', 'bg-blue-100 text-blue-700'], feedback: '⭐⭐⭐⭐⭐ "太感谢了！杨师傅不仅修好了问题，还帮我追回了多交的水费。真是可靠！"', location: '📍 布朗士日落公园', time: '⏱ 2024年4月' }
        ]
    },
    s4: {
        title: '水泵 / 热水炉 / 暖气系统案例',
        subtitle: '安装 · 维修 · 更换 · 冬天不再冻',
        cases: [
            { name: '布朗士暖气炉突然停止工作', problem: '1月严寒，暖气炉突然不工作，房间温度急剧下降。业主急坏了，打遍了紧急热线都排队很久。', solution: '杨师傅30分钟内上门（比其他公司快得多），发现是电路故障 + 燃烧器积碳。清理积碳、更换点火器，暖气恢复正常。收费$650。', tags: ['快速上门', '紧急维修', '快速恢复'], tagColors: ['bg-red-100 text-red-700', 'bg-orange-100 text-orange-700', 'bg-yellow-100 text-yellow-700'], feedback: '⭐⭐⭐⭐⭐ "真的救了我的命！冬天没有暖气我真活不了。杨师傅的应急反应速度一流！"', location: '📍 布朗士莫里尼亚', time: '⏱ 2024年1月' },
            { name: '曼哈顿热水炉老化需要更换', problem: '30年的热水炉不再供应热水，维修工都建议得换新炉。但新炉要$4000+，非常贵。', solution: '杨师傅查看后发现只是温度传感器和加热棒需要换，不必整炉更换。只花$520就完全恢复了热水供应。', tags: ['精准诊断', '部件更换', '省钱方案'], tagColors: ['bg-yellow-100 text-yellow-700', 'bg-orange-100 text-orange-700', 'bg-red-100 text-red-700'], feedback: '⭐⭐⭐⭐⭐ "帮我省了3000多块钱！诚实的维修工现在太少了，必须推荐。"', location: '📍 曼哈顿中城', time: '⏱ 2024年3月' },
            { name: '皇后区地下室抽水泵安装', problem: '新购置的公寓地下室经常积水，特别是下雨天。业主想装抽水泵但不知道如何选型和安装。', solution: '杨师傅根据地下室的面积、积水量、排水管位置，选择了合适的泵型。安装、调试、教导使用，全程专业。现在下再大的雨也不怕。', tags: ['方案设计', '专业安装', '长期保障'], tagColors: ['bg-purple-100 text-purple-700', 'bg-indigo-100 text-indigo-700', 'bg-blue-100 text-blue-700'], feedback: '⭐⭐⭐⭐⭐ "不仅安装好，还定期帮我检测泵的状况。这样的售后服务太难得了！"', location: '📍 皇后区牙买加', time: '⏱ 2024年2月' }
        ]
    },
    s5: {
        title: '煤气管道检测 & 维修案例',
        subtitle: '安全第一 · 专业检测 · 合规维修',
        cases: [
            { name: '曼哈顿烤箱煤气泄漏紧急排查', problem: '业主闻到厨房有轻微的煤气味，但检测器没有显示。不确定是否真的泄漏，也不知道找谁。', solution: '杨师傅用专业气体检测仪器进行全面排查，定位到烤箱进气接头处有微小泄漏。更换了接头和胶管，进行压力测试确认没有问题。', tags: ['紧急排查', '专业检测', '安全保障'], tagColors: ['bg-red-100 text-red-700', 'bg-rose-100 text-rose-700', 'bg-orange-100 text-orange-700'], feedback: '⭐⭐⭐⭐⭐ "太专业了！不仅修好泄漏，还详细解释了煤气安全知识。心理踏实多了。"', location: '📍 曼哈顿上西城', time: '⏱ 2024年10月' },
            { name: '法拉盛餐馆定期煤气安全检测', problem: '餐馆每月被要求进行煤气安全检测，但很难找到可靠的检测服务。之前的检测人员标准不统一。', solution: '杨师傅与餐馆建立了定期检测合作（每季度一次），每次都用标准化检测、出具检测报告、记录存档。现在餐馆的煤气安全完全合规，审计无忧。', tags: ['定期检测', '标准化报告', '合规保障'], tagColors: ['bg-orange-100 text-orange-700', 'bg-red-100 text-red-700', 'bg-yellow-100 text-yellow-700'], feedback: '⭐⭐⭐⭐⭐ "找到了稳定的合作方，再也不用为煤气安全检测发愁了。推荐所有餐馆都这样做。"', location: '📍 法拉盛缅街', time: '⏱ 2024年9月' },
            { name: '皇后区整栋楼煤气管道更新', problem: '楼管发现旧楼的煤气管道已有40年历史，多处锈蚀。城市部门要求更新以确保安全。', solution: '杨师傅制定了分阶段更新方案，最小化对住户的影响。更换了全部旧管道、安装新的安全装置、通过城市部门检验。整个项目专业、高效、安全。', tags: ['系统更新', '分阶段施工', '部门认可'], tagColors: ['bg-yellow-100 text-yellow-700', 'bg-orange-100 text-orange-700', 'bg-red-100 text-red-700'], feedback: '⭐⭐⭐⭐⭐ "大工程做得井井有条，住户没有怨言。城市部门一次通过检验，杨师傅的专业让我们非常满意。"', location: '📍 皇后区牙买加', time: '⏱ 2024年8月' }
        ]
    }
};

function displayServiceCases(serviceId) {
    const data = window.casesList[serviceId];
    if (!data) return '';
    
    let html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">';
    
    data.cases.forEach((item) => {
        html += '<div class="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-shadow">';
        html += '<p class="text-xs text-red-600 font-bold uppercase mb-1">真实案例</p>';
        html += '<h4 class="text-sm font-bold text-slate-800 mb-2">' + item.name + '</h4>';
        html += '<p class="text-xs text-gray-600 mb-2"><strong>问题：</strong>' + item.problem + '</p>';
        html += '<p class="text-xs text-gray-600 mb-2"><strong>解决：</strong>' + item.solution + '</p>';
        html += '<div class="flex gap-1 flex-wrap mb-2">';
        item.tags.forEach((tag, i) => {
            html += '<span class="' + item.tagColors[i] + ' text-xs px-1.5 py-0.5 rounded-full font-semibold">' + tag + '</span>';
        });
        html += '</div>';
        html += '<p class="text-xs mb-1"><strong class="text-slate-800">反馈：</strong><span class="text-gray-600">' + item.feedback + '</span></p>';
        html += '<p class="text-xs text-gray-500">' + item.location + ' | ' + item.time + '</p>';
        html += '</div>';
    });
    
    html += '</div>';
    return html;
}

function toggleCases(serviceId) {
    const container = document.getElementById('cases-' + serviceId + '-container');
    const toggle = document.getElementById('toggle-' + serviceId);
    
    if (!container) {
        return;
    }
    
    if (container.classList.contains('hidden')) {
        // 显示
        container.classList.remove('hidden');
        if (toggle) toggle.style.transform = 'rotate(180deg)';
    } else {
        // 隐藏
        container.classList.add('hidden');
        if (toggle) toggle.style.transform = 'rotate(0deg)';
    }
}

// 滚动到指定服务部分
function scrollToSection(sectionId) {
    console.log('scrollToSection called with:', sectionId);
    // 如果在移动端，先关闭菜单
    var mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        // 延迟滚动以允许菜单动画完成
        setTimeout(function() {
            performScroll(sectionId);
        }, 100);
    } else {
        performScroll(sectionId);
    }
}

function performScroll(sectionId) {
    console.log('performScroll called with:', sectionId);
    // 根据 sectionId 找到对应的元素
    var element = document.getElementById(sectionId);
    console.log('Found element:', element);
    
    if (element) {
        // 计算滚动位置，考虑粘性导航栏高度
        var navHeight = 96; // 粘性导航栏高度
        var elementTop = element.getBoundingClientRect().top + window.scrollY;
        var scrollPosition = elementTop - navHeight;
        
        // 平滑滚动到计算后的位置
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
        console.log('Scrolling to position:', scrollPosition);
    } else {
        console.log('Element not found with id:', sectionId);
    }
}

// 将函数挂载到全局对象
window.displayServiceCases = displayServiceCases;
window.toggleCases = toggleCases;
window.scrollToSection = scrollToSection;
window.performScroll = performScroll;
window.scrollToSection = scrollToSection;
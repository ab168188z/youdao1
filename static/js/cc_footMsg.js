/**
 * 页面底部信息生成脚本（支持多域名配置）
 * 功能：根据域名自动切换版权信息、备案信息和 Logo 配置
 * 最后更新：2023-12-27
 * 优化内容：Logo 配置独立，支持多域名定制
 */

// 域名与底部信息配置映射
const DOMAIN_CONFIGS = {
  // 默认配置（当域名不匹配时使用）
  default: {
    company: "",
    icpNumber: "",
    copyright: "",
  },
  // 示例域名配置
  "newlds.zuitie.cn": {
    tips: "",
    company: "马鞍山超聪网络科技有限公司",
    icpNumber: "马鞍山市郑蒲港新区孵化园6号楼4层",
    copyright: "联系电话：4006886515",
    about: "",
  },
  "bdlds.kafan58.com": {
    tips: "",
    company: "卡饭（上海）信息安全有限公司",
    icpNumber: "沪ICP备2020031077号-10",
    copyright: "",
    about: "",
  },
  "lds.10284.com": {
    tips: "本网站的图文和软件来自于网络，如有内容侵犯您的合法权益，请及时与我们联系，我们将第一时间安排删除。",
    company: "马鞍山一云网络科技有限责任公司",
    icpNumber: "皖ICP备2025092500号-1&nbsp;&nbsp;&nbsp;公司地址：马鞍山市花山区霍里镇晟峰软件园2栋802",
    copyright: "&nbsp;&nbsp;&nbsp;联系电话：4008387003<br>全国扫黑除恶举报电话 010-12389&nbsp;&nbsp;&nbsp;马鞍山市扫黑除恶举报电话 0555-2422094",
    
    about: "Copyright 2019-2024 All Rights Reserved.",
    links: 
        {
            "关于我们": "https://lds.10284.com/lds/gywm.html",
            "隐私政策": "https://lds.10284.com/lds/yszc.html",
            "用户权限": "https://lds.10284.com/lds/yhqx.html",
        }
  },
  "xz.10284.com": {
    tips: "本网站的图文和软件来自于网络，如有内容侵犯您的合法权益，请及时与我们联系，我们将第一时间安排删除。",
    company: "马鞍山一云网络科技有限责任公司",
    icpNumber: "皖ICP备2025092500号-1&nbsp;&nbsp;&nbsp;公司地址：马鞍山市花山区霍里镇晟峰软件园2栋802",
    copyright: "&nbsp;&nbsp;&nbsp;联系电话：4008387003<br>全国扫黑除恶举报电话 010-12389&nbsp;&nbsp;&nbsp;马鞍山市扫黑除恶举报电话 0555-2422094",
    
    about: "Copyright 2019-2024 All Rights Reserved.",
    links: 
        {
            "关于我们": "https://lds.10284.com/lds/gywm.html",
            "隐私政策": "https://lds.10284.com/lds/yszc.html",
            "用户权限": "https://lds.10284.com/lds/yhqx.html",
        }
  },
  "yqcz.10284.com": {
    tips: "",
    company: "马鞍山一云网络科技有限责任公司",
    icpNumber: "皖ICP备2025092500号-1",
    copyright: "电话：180-520-458-14 ",
    about: "",
  },
  "soft.10284.com": {
    tips: "本网站的图文和软件来自于网络，如有内容侵犯您的合法权益，请及时与我们联系，我们将第一时间安排删除。",
    company: "马鞍山一云网络科技有限责任公司",
    icpNumber: "皖ICP备2025092500号-1&nbsp;&nbsp;&nbsp;公司地址：马鞍山市花山区霍里镇晟峰软件园2栋802",
    copyright: "&nbsp;&nbsp;&nbsp;联系电话：4008387003<br>全国扫黑除恶举报电话 010-12389&nbsp;&nbsp;&nbsp;马鞍山市扫黑除恶举报电话 0555-2422094",
    
    about: "Copyright 2019-2024 All Rights Reserved.",
    links: 
        {
            "关于我们": "https://lds.10284.com/lds/gywm.html",
            "隐私政策": "https://lds.10284.com/lds/yszc.html",
            "用户权限": "https://lds.10284.com/lds/yhqx.html",
        }
  },
  "yr.rrycloud.com": {
    tips: "",
    company: "马鞍山云睿网络科技有限责任公司",
    icpNumber: "--",
    copyright: "",
    about: "",
  },
  "zuhao.ichongjiayuan.com": {
    tips: "",
    company: "马鞍山爱宠网络科技有限责任公司",
    icpNumber: "皖ICP备2024062017号-1",
    copyright: "",
    about: "",
  },
  "fj.sdjiapa.cn": {
    tips: "",
    company: "扬州久尺网络科技有限公司",
    icpNumber: "苏ICP备2023028652号-1",
    copyright: "",
    about: "",
  },
  "xiazai.njhykj.com": {
    company: "南京瀚永科技发展有限公司",
    icpNumber: "苏ICP备11031967号-1",
    copyright: "",
    about: "",
  },
  "softxz.yzhzkj.cn": {
    tips: "",
    company: "扬州市汇洲科技有限公司",
    icpNumber: "苏ICP备2024144515号-2",
    copyright: "",
    about: "",
  },
  "lds.kafan58.com": {
    company: "卡饭（上海）信息安全有限公司",
    icpNumber: "沪ICP备2020031077号-10",
    copyright: "",
    about: "",
  },
  "lds.sengfeng.cn": {
    tips: "",
    company: "合肥水花网络科技有限公司",
    icpNumber: "皖ICP备2022004577号-3",
    copyright: "地址：安徽省合肥市包河区汤泉路与宿松路交叉口西80米绿地中心D座4004室<br>联系电话：4006886515",
    about: "",
  },
  "ggzuhao.zuitie.cn": {
    tips: "",
    company: "马鞍山超聪网络科技有限公司",
    icpNumber: "马鞍山市郑蒲港新区孵化园6号楼4层",
    copyright: "联系电话：4006886515",
    about: "",
  },
  "zuhao1.pengjuanxinxi.cn": {
    tips: "",
    company: "湖南鹏娟信息科技有限公司",
    icpNumber: "湘ICP备2023024336号-1",
    copyright: "",
    about: "",
  },
  "yun.beimeidao.cn": {
    tips: "",
    company: "北美道（北京）科技有限公司",
    icpNumber: "京ICP备2022024416号-1",
    copyright: "",
    about: "",
  },
  "softxz.kafan58.com": {
    tips: "",
    company: "卡饭（上海）信息安全有限公司",
    icpNumber: "沪ICP备2020031077号-10",
    copyright: "",
    about: "",
  },
  "soft.zxcv456.cc": {
    tips: "",
    company: "昆山志峰网络科技有限公司",
    icpNumber: "苏ICP备2025160411号-1",
    copyright: "",
    about: "",
  },
  "soft.yzhzkj.top": {
    tips: "",
    company: "扬州市汇洲科技有限公司",
    icpNumber: "苏ICP备2024144515号-1",
    copyright: "",
    about: "",
  },
};

// Logo 配置映射
const LOGO_CONFIGS = {
  // 默认 Logo 配置
  //   default: {
  //     logoUrl: "https://soft.uesou.cn/images/logo/baozang-v3.png",
  //     logoLink: "https://soft1.zuitie.cn/",
  //     logoStyle: "position: absolute; left: 10px; top: 10px; z-index: 100; width: auto; height: 50px;",
  //   },
  // 可以添加更多域名特定的 Logo 配置，例如：
  "newlds.zuitie.cn": {
    logoUrl: "https://soft.uesou.cn/images/logo/baozang-v3.png",
    logoLink: "https://soft1.zuitie.cn/",
    logoStyle:
      "position: absolute; left: 15px; top: 15px; z-index: 100; width: auto; height: 60px;",
  },
  "ggzuhao.zuitie.cn": {
    logoUrl: "https://soft.uesou.cn/images/logo/baozang-v3.png",
    logoLink: "https://soft1.zuitie.cn/",
    logoStyle:
      "position: absolute; left: 15px; top: 15px; z-index: 100; width: auto; height: 60px;",
  },
  "zuhao.ichongjiayuan.com": {
    logoUrl: "https://soft.uesou.cn/images/logo/baozang-v3.png",
    logoLink: "https://soft1.zuitie.cn/",
    logoStyle:
      "position: absolute; left: 15px; top: 15px; z-index: 100; width: auto; height: 60px;",
  },
  "bdlds.kafan58.com": {
    logoUrl: "https://newlds.zuitie.cn/kaituo/kaituo.png",
    logoLink: "https://newlds.zuitie.cn/kaituo/index.html",
    logoStyle:
      "position: absolute; left: 15px; top: 15px; z-index: 100; width: auto; height: 60px;",
  },
  "lds.10284.com": {
    logoUrl: "https://www.10284.com/96kaifa/static/images/logo.png",
    logoLink: "https://www.10284.com/",
    logoStyle:
      "position: absolute; left: 15px; top: 15px; z-index: 100; width: auto; height: 60px;",
  },
  "xz.10284.com": {
    logoUrl: "https://www.10284.com/96kaifa/static/images/logo.png",
    logoLink: "https://www.10284.com/",
    logoStyle:
      "position: absolute; left: 15px; top: 15px; z-index: 100; width: auto; height: 60px;",
  },
  "soft.10284.com": {
    logoUrl: "https://www.10284.com/96kaifa/static/images/logo.png",
    logoLink: "https://www.10284.com/",
    logoStyle:
      "position: absolute; left: 15px; top: 15px; z-index: 1000; width: auto; height: 60px;",
  },
  "yqcz.10284.com": {
    logoUrl: "https://www.10284.com/96kaifa/static/images/logo.png",
    logoLink: "https://www.10284.com/",
    logoStyle:
      "position: absolute; left: 15px; top: 15px; z-index: 100; width: auto; height: 60px;",
  },
  "lds.sengfeng.cn": {
    logoUrl: "https://soft.uesou.cn/images/shuihua.png",
    logoLink: "http://xz.fengshei.cn/",
    logoStyle:
      "position: absolute; left: 15px; top: 15px; z-index: 100; width: auto; height: 60px;",
  },
};

// 公共配置
const COMMON_CONFIG = {
  gaIcon: "https://newlds.zuitie.cn/ga.png",
  icpLink: "https://beian.miit.gov.cn/#/Integrated/index",
};

// 获取当前域名
function getCurrentDomain() {
  return window.location.hostname;
}

// 获取当前域名的页脚配置
function getCurrentConfig() {
  const domain = getCurrentDomain();
  return DOMAIN_CONFIGS[domain] || DOMAIN_CONFIGS["default"];
}

// 获取当前域名的 Logo 配置
function getCurrentLogoConfig() {
  const domain = getCurrentDomain();
  return LOGO_CONFIGS[domain] || LOGO_CONFIGS["default"];
}

// 生成页脚 HTML
function generateFooter() {
  const config = getCurrentConfig();
  
  const currentDomain = getCurrentDomain(); // 先获取当前域名
  // 特殊处理lds.10284.com域名的链接
  if (currentDomain === "lds.10284.com" && config.links||currentDomain === "soft.10284.com"&& config.links||currentDomain === "xz.10284.com"&& config.links) {
    const linksHtml = Object.entries(config.links)
      .map(([text, url]) => `<a href="${url}" target="_blank" style="color: #999; text-decoration: none;">${text}</a>`)
      .join('&nbsp;&nbsp;&nbsp;&nbsp;');
    
    return `
      <div style="text-align: center; font-size: 13px; color: #999; margin: 20px 0;">
        <p>${config.tips || ''}</p>
        <p>
          ${config.company}
          <img src="${COMMON_CONFIG.gaIcon}" alt="公安网监备案" 
               style="vertical-align: middle; margin-left: 3px; width: 16px;">
          <a href="${COMMON_CONFIG.icpLink}" target="_blank" 
            style="color: #999; text-decoration: none;">
            ${config.icpNumber}
          </a>
          ${config.copyright || ''}
        </p>
        <p>
          ${linksHtml}
          &nbsp;&nbsp;&nbsp;${config.about || ''}
        </p>
      </div>
    `;
  }else{
      return `
    <div style="text-align: center; font-size: 13px; color: #999; margin: 20px 0;">
      ${config.tips ? `<p>${config.tips}</p>` : ''}
      <p>
        ${config.company || ""}
        <img src="${COMMON_CONFIG.gaIcon}" alt="公安网监备案" 
             style="vertical-align: middle; margin-left: 3px; width: 16px;">
        <a href="${COMMON_CONFIG.icpLink}" target="_blank" 
          style="color: #999; text-decoration: none;">
          ${config.icpNumber || ""}
        </a>
      </p>
      ${config.copyright ? `<p>${config.copyright}</p>` : ''}
      ${config.about ? `<p>${config.about}</p>` : ''}
    </div>
  `;
  }
  
  
}

// 生成 Logo HTML
function generateLogo() {
  const config = getCurrentLogoConfig();

  return `
     <a href="${config.logoLink}" target="_blank" style="display: inline-block;">
      <img src="${config.logoUrl}" style="${config.logoStyle}" alt="网站Logo" />
    </a>
  `;
}

// 生成并插入页脚和 Logo
function initFooter() {
  const footerContainer = document.getElementById("foot");
  if (footerContainer) {
    footerContainer.innerHTML = generateFooter();
  }

  const logoContainer = document.getElementById("logo");
  if (logoContainer) {
    logoContainer.innerHTML = generateLogo();
  }
}

// 页面加载完成后执行初始化
if (document.readyState === "complete") {
  initFooter();
} else {
  window.addEventListener("load", initFooter);
}

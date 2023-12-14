/**
 * 给所有页面 <a> 标签上添加了 target='_blank' 属性。
 * 这样就可以确保链接在单击时在新标签页中打开。
 */
class Link {
    constructor() {
        // 获取所有的<a>标签元素
        this.alink = document.getElementsByTagName('a');

        // 存储所有<a>标签的href属性值
        this.hrefs = [];
        for (let i = 0; i < this.alink.length; i++) {
            this.hrefs.push(this.alink[i].getAttribute('href'));
        }

        // 获取应该跳过的<a>标签的索引
        this.skippedHrefs = this.getSkippedHrefs();

        // 添加target='_blank'属性
        this.addBlankAttribute(false);

        // 监听页面打开事件
        this.listenPageOpen();
    }

    // 获取应该跳过的<a>标签的索引
    getSkippedHrefs() {
        let skippedHrefs = [];
        for (let i = 0; i < this.hrefs.length; i++) {
            if (!this.hrefs[i].startsWith('#')) {
                skippedHrefs.push(i);
            }
        }
        return skippedHrefs;
    }

    // 给<a>标签添加target='_blank'属性
    addBlankAttribute(isDelayed) {
        for (let i = 0; i < this.skippedHrefs.length; i++) {
            const link = this.alink[this.skippedHrefs[i]];
            if (!link.hasAttribute('target')) {
                link.setAttribute('target', '_blank');
            }
        }
        if (isDelayed) {
            window.addEventListener('load', () => {
                this.addBlankAttribute(false);
            });
        }
    }

    // 监听页面打开事件，在页面加载完成后再次添加target='_blank'属性
    listenPageOpen() {
        this.addBlankAttribute(true);
    }
}

// 创建 Link 的实例
const linkInstance = new Link();

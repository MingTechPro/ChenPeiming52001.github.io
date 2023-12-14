/**
 * 给所有页面 <a> 标签上添加 target='_blank' 属性。
 * 这样就可以确保链接在单击时在新标签页中打开。
 */
class Link {
    constructor() {
        // 获取所有的<a>标签元素
        this.alink = document.getElementsByTagName('a');

        // 添加target='_blank'属性
        this.addBlankAttribute();

        // 监听页面打开事件
        this.listenPageOpen();
    }

    // 给<a>标签添加target='_blank'属性
    addBlankAttribute() {
        for (let i = 0; i < this.alink.length; i++) {
            const link = this.alink[i];
            const href = link.getAttribute('href');

            if (href && !href.startsWith('#') && !link.hasAttribute('target')) {
                link.setAttribute('target', '_blank');
            }
        }
    }

    // 监听页面打开事件，在页面加载完成后再次添加target='_blank'属性
    listenPageOpen() {
        window.addEventListener('load', () => {
            this.addBlankAttribute();
        });
    }
}

// 创建 Link 的实例
const linkInstance = new Link();

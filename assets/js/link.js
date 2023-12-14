/**
 * 给所有页面 <a> 标签上添加了 target='_blank' 属性。
 * 这样就可以确保链接在单击时在新标签页中打开。
 */
class Link {
    constructor() {
        /**
         * 获取a标签元素
         */
        this.alink = document.getElementsByTagName('a');

        /**
         * 调用初始化方法
         */
        this.blank();
        /**
         * 调用页面打开方法
         */
        this.openPage();
    }

    /**
     * 给 <a> 标签添加 target = '_blank' 属性
     */
    blank() {
        for (let i = 0; i < this.alink.length; i++) {
            const link = this.alink[i];

            // 跳过以 "#" 开头的链接
            if (link.href.startsWith("#") || link.getAttribute('href') === '#') {
                continue;
            }

            if (!link.hasAttribute('target')) {
                link.setAttribute('target', '_blank');
            }
        }
    }

    /**
     * 页面打开方法，用于监听页打开
     */
    openPage() {
        /** 
         * 添加页面打开事件监听器，当页面打开时调用blank方法，
         * 给没有  target = '_blank' 属性的 <a> 标签添加 target = '_blank' 属性
        */
        window.addEventListener('load', () => {
            this.blank();
        });
    }

}

/**
 * 创建 Link 的实例
 */
const linkInstance = new Link();
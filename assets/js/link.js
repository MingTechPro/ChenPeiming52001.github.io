// 给所有页面 <a> 标签上添加了 target='_blank' 属性。这样就可以确保链接在单击时在新标签页中打开。
class Link {
    constructor(){
        // 获取a标签元素
        this.alink = document.getElementsByTagName('a');

        // 调用初始化方法
        this.blank();
    }

    // 给a标签添加 target = '_blank' 属性
    blank() {
        for (let i = 0; i < this.alink.length; i++) {
            this.alink[i].setAttribute('target', '_blank');
        }
    }

}

// 创建 Link 的实例
const linkInstance  = new Link();
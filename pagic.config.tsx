export default {
    srcDir: 'src',
    theme: 'blog',
    plugins: ['blog'],
    title: '这是一个博客',
    description: '混吃等死｜只会拷贝粘贴',
    github: 'https://github.com/adcaf5/blog',
    nav: [
      {
        text: '首页',
        link: '/',
        icon: 'czs-home-l',
      },
      {
        text: '归档',
        link: '/archives/',
        icon: 'czs-box-l',
      },
      {
        text: '分类',
        link: '/categories/',
        icon: 'czs-category-l',
      },
      {
        text: '标签',
        link: '/tags/',
        icon: 'czs-tag-l',
      },
      {
        text: '关于',
        link: '/about/',
        icon: 'czs-about-l',
      },
      {
        text: '友链',
        link: '/links/',
        icon: 'czs-link-l',
      },
    ],
    blog: {
        root: '/posts/',
        social: {
            github: 'adcaf5/blog',
            email: 'eks@outlook.lv',
            twitter: 'adcaf5',
        },
    },
};
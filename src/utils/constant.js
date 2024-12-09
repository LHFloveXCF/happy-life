// 博客的云环境ID
export const env = 'react-blog-admin-test-1a3424a4e2';

export const source_github = 'https://github.com/lzxjack/react-blog';

export const icp_site = 'https://beian.miit.gov.cn/#/Integrated/index';
export const icp_no = '沫沫的微笑-001';

export const blogAdminUrl = 'https://admin.lzxjack.top:81';

export const siteTitle = '幸福的小窝';

// GitHub地址
export const githubUrl = 'https://github.com/lzxjack';
// CSDN地址
export const csdnUrl = 'https://blog.csdn.net/Jack_lzx';

// siteCount ID
export const count_id = 'cd045e756100126d005169f014931c65';

// 微信二维码地址
export const weChatQRCode = 'https://img.lzxjack.top:99/202203302344287.webp';
// QQ二维码地址
export const QQ_QRCode = 'https://img.lzxjack.top:99/202203302344487.webp';

// 透明头像
export const cardUrl = 'https://img.lzxjack.top:99/202203302348298.webp';

// loading
export const smallLoadingUrl = 'https://img.lzxjack.top:99/202203302022741.webp';

// 博客运行起始日
export const time = '2020-12-16 14:00:00';

// // 博客背景图片
// export const blogBackGroundImgs = [
//   'https://img.lzxjack.top:99/20210818111500.jpg',
//   'https://img.lzxjack.top:99/20210818111501.png',
//   'https://img.lzxjack.top:99/20210818111502.jpg',
//   'https://img.lzxjack.top:99/20211126190312.jpg',
//   'https://img.lzxjack.top:99/202203241558769.jpg',
//   'https://img.lzxjack.top:99/202203241604408.jpg',
//   'https://img.lzxjack.top:99/202203241627101.jpg',
//   'https://img.lzxjack.top:99/202203241627102.jpg',
//   'https://img.lzxjack.top:99/202203241627103.jpg'
// ];
// // 背景图选择
// export const imgNum = 7;

// // 与模式相符合的背景图
// export const modeBg = [
//   'https://img.lzxjack.top:99/202203241627101.jpg',
//   'https://img.lzxjack.top:99/202203242228220.jpg',
//   'https://img.lzxjack.top:99/202203241627103.jpg'
// ];

// 数据缓存时间
export const staleTime = 180000;
export const siteCountStale = 300000;

// 首页文章分页，每页数据
export const size_config = Object.freeze({
  homeSize: 8,
  msgSize: 10,
  detailPostSize: 10,
  articleBackSize: 20,
});


// 个人信息
export const myName = '飞鸟';
export const myLink = 'https://lzxjack.top';
export const myAvatar = 'https://img.lzxjack.top:99/202203302154224.webp';
export const myDescr = '一只平凡的鸟罢了。';
export const myEmail = '965555169@qq.com';
export const adminUid = '41fcc65978324a8db4048993dfc0a9df';
export const QQ = '965555169';

export const myAvatar70 = 'https://img.lzxjack.top:99/202203302156259.webp';

// 默认头像集合（若用户没获取QQ头像，则随机显示此数组中的头像）
export const defaultCommentAvatarArr = [
  'https://img.lzxjack.top:99/202203302148474.webp',
  'https://img.lzxjack.top:99/202203302148475.webp',
  'https://img.lzxjack.top:99/202203302148476.webp',
  'https://img.lzxjack.top:99/202203302148477.webp',
  'https://img.lzxjack.top:99/202203302148478.webp',
  'https://img.lzxjack.top:99/202203302148479.webp',
  'https://img.lzxjack.top:99/202203302148480.webp',
  'https://img.lzxjack.top:99/202203302148481.webp',
  'https://img.lzxjack.top:99/202203302148482.webp',
  'https://img.lzxjack.top:99/202203302148483.webp'
];

export const avatarArrLen = defaultCommentAvatarArr.length;

// 评论回复时，发送邮件提醒的API地址
export const emailApi = 'https://react-blog-admin-test-1a3424a4e2-1304393382.ap-shanghai.app.tcloudbase.com/email';

export const server_host = 'http://127.0.0.1:18141/api/';

export const imgUrlPrefix = 'http://127.0.0.1:18141/show/'

// 每日诗词替换链接
export const url_daily_poem = 'https://v2.jinrishici.com/one.json?client=npm-sdk/1.0';
export const footer_desc = [
  '生活',
  '快乐的分享',
  '记忆',
];

export const cur_view = Object.freeze({
  CLIENT: 1,
  BACKGROUND: 2,
});

export const c_b_sign_state = Object.freeze({
  write_article: "1",
  setting_article: "3",
});

export const c_b_article_table = [
  {
    title: 'title',
    dataIndex: 'title',
    key: 'key',
  },
  {
    title: 'id',
    dataIndex: 'id',
    key: 'key',
  }, {
    title: 'content',
    key: 'key',
    dataIndex: 'content',
  },
]
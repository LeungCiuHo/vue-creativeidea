import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      isLogin:false,
      user:{
        username:'LeungCiuHo',
        psw:'LeungCiuHo',
        avatar: "https://upload.jianshu.io/users/upload_avatars/17905706/3e4a9124-7007-44fa-9153-d865383af344.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
        nickname: "LeungCiuHo",
        slug:'0cf47f53627d'
      },
      //首页侧边栏banner
      bannerClubArr:[
        require('../../public/img/banner-club-1.png'),
        require('../../public/img/banner-club-2.png'),
        require('../../public/img/banner-club-3.png'),
        require('../../public/img/banner-club-4.png'),
        require('../../public/img/banner-club-5.png'),
        require('../../public/img/banner-club-6.png')
      ],
      carouseIndex:0,
      //首页轮播
      carouselArr:[
        require('../../public/img/home-banner.jpg'),
        require('../../public/img/home-banner-2.jpg'),
        require('../../public/img/home-banner-3.jpg'),
        require('../../public/img/home-banner-4.jpg'),
      ],
      //关注栏目
      recommendTags:[
        {type:'all',title:'全部推荐'},
        {type:'user',title:'推荐作者'},
        {type:'collection',title:'推荐专题'}
      ],
      followList:[],
      //个人文章列表
      myArticleList:[],
      //作者栏目
      authorColumns:[
        {type:'shared_at',title:'最新发布',icon:'icon-wenzhang'},
        {type:'commented_at',title:'最新评论',icon:'icon-pinglun1'},
        {type:'top',title:'热门',icon:'icon-huo'}
      ],
      //专题栏目
      CollectionColumns:[
        {type:'commented_at',title:'最新评论',icon:'icon-pinglun1'},
        {type:'added_at',title:'最新收录',icon:'icon-wenzhang'},
        {type:'top',title:'热门',icon:'icon-huo'}
      ],
      //热门搜索
      hotSearch:["区块链","小程序","vue","毕业","PHP","故事","flutter","理财","美食","投稿","手帐","书法","PPT","穿搭","打碗碗花","简书","姥姥的澎湖湾","设计","创业","交友","籽盐","教育","思维导图","疯哥哥","梅西","时间管理","golang","连载","自律","职场","考研","慢世人","悦欣","一纸vr","spring","eos","足球","程序员","林露含","彩铅","金融","木风杂谈","日更","成长","外婆是方言","docker"]
    },
    mutations,
    actions
  })
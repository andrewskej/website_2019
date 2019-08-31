
const fullDataSet = {

    contact:{
        name:'You sik Jeon',
        linkedin:'https://www.linkedin.com/in/yousik-andrew-jeon-b02ab389',
        github:'http://www.github.com/andrewskej',
        email:'andrewskej@gmail.com',
        address:'4407 Rue Bossuet, Montreal, QC',
        phone:'438-866-5241'
    },

    bio:{
        facts:[
            `- I am former : Account Executive in advertising field`,
            `- I survived in : 1 planet, 3 continents, 5 countries, 9 cities in past 15 years`,  
            `- I speak high level : English, Japanese, Korean , mid level French`,
            `- I refresh myself by : climbing walls or rolling on mat`, 
            `- I would define myself a : Junior Javascript web developer`,
            `- I feel comfortable using : react.js, jQuery, node.js`,
            `- I feel a bit frustrated doing : colors, layouts, animations `,
            `- I experienced two extreme environment : google korea and military service`,
            `- I am also interested in adding these to my skill set : react native, electron, python, kotlin`,
        ]
    },

    career:{
        2006 : [{
            title:`University of Illinois`,
            link:`https://illinois.edu/`,
            subTitle:`Bachelor of psychology`,
            where:`Champaign, IL, USA`,
            from:`Sep 2006`,
            to:`May 2013`,
            type:'edu',
            desc:[`Class of 2013`]
        }],
        2009: [{
            title:`Republic of Korea Air Force`,
            link:`http://www.afa.ac.kr/user/indexMain.action?handle=1&siteId=afa-eng`,
            subTitle:`Staff Sergeant`,
            where:`Cheongju, South Korea`,
            from:`Sep 2009`,
            to:`Oct 2011`,
            type:'work',
            desc:[`English Translation of Cadets Manuals : Level-III Confidential documents`]
        }],
        2012: [{
            title:`Aqueduct Advertising & Design`,
            link:`http://aqueduct.co.uk/`,
            subTitle:`Digital Planning Department`,
            where:`London, UK`,
            from:`Jun 2012`,
            to:`Aug 2012`,
            type:'work',
            desc:[`Internship in digital planning`]
            },
            {
            title:`The University of Hong Kong`,
            link:`https://www.hku.hk/`,
            subTitle:`Exchange Student`,
            where:`Hong Kong`,
            from:`Sep 2012`,
            to:`Dec 2012`,
            type:'edu',
            desc:[`East Asian Culture and Digital marketing`]
        }],
        2013: [{
            title:`Google Korea`,
            link:`https://www.google.co.kr/`,
            subTitle:`R & D Department`,
            where:`Seoul, South Korea`,
            from:`Feb 2013`,
            to:`May 2013`,
            type:'work',
            desc:[`Data Curation : Collecting and Matching massive raw data in Excel, supporting new search engine algorithm development` ]
        },{
            title:`Cheil WorldWide`,
            link:`https://www.cheil.com/hq`,
            subTitle:`Account Executive`,
            where:`Seoul, South Korea`,
            from:`Jul 2013`,
            to:`Jan 2016`,
            type:'work',
            desc:[`Client management`, `Responsible for advertising campaigns of Samsung Electronics`, `Project management`]
        }],
        2016: [{
            title:`VMC Canada`,
            link:`https://www.vmc.com/games/`,
            subTitle:`Q & A Tester`,
            where:`Montreal, QC, Canada`,
            from:`Jul 2016`,
            to:`Oct 2016`,
            type:'work',
            desc:[`Localization test, QA test on multiple platforms :  mobile(iOS, Android, Windows mobile), Occulus VR, PC `]
        }],
        2017: [{
            title:`SSangyong Institute of System Technology`,
            link:`https://www.sist.co.kr/index.do`,
            subTitle:`Java Web developer Intensive course`,
            where:`Seoul, South Korea`,
            from:`Jun 2017`,
            to:`Dec 2017`,
            type:'edu',
            desc:[`Java, Spring, Oracle DB, HTML, CSS, Javascript, jQuery`]
        }],
        2018: [{
            title:`HelloNature.net`,
            link:`http://hellonature.net/shop/main/index.php`,
            subTitle:`jQuery & Node.js developer`,
            where:`Seoul, South Korea`,
            from:`Apr 2018`,
            to:`Dec 2018`,
            type:'work',
            desc:[`Promotions Page, Coupons Page with jQuery, node.js, MariaDB`, `Maintenance and Debugging on React pages`, `Refactoring work of PHP pages into node.js`]
        }],
        2019: [{
            title:`The e & m`,
            link:`https://www.theenm.com/`,
            subTitle:`React & Node.js developer`,
            where:`Seoul, South Korea`,
            from:`Dec 2018`,
            to:`May 2019`,
            type:'work',
            desc: [`Slack Bot by Node.js for internal communication tool development`, `Admin page by Node.js and React for weather forecast application(react-native, firebase)`]                    
        }]
    },

    skills:{
        computer:[
            `/images/skills_dev/html5.png`,
            `/images/skills_dev/css3.png`,
            `/images/skills_dev/js.png`,
            `/images/skills_dev/reactjs.jpg`,
            `/images/skills_dev/nodejs.png`,
            `/images/skills_dev/mysql.jpg`,
            `/images/skills_dev/mariaDB.png`,
            `/images/skills_dev/aws.png`,
            `/images/skills_dev/firebase.png`,
            `/images/skills_dev/git.png`,
            `/images/skills_dev/jenkins.png`,
        ],
    
        language:[
            `/images/skills_lang/english.png`,
            `/images/skills_lang/french.png`,
            `/images/skills_lang/japanese.png`,
            `/images/skills_lang/korean.png`,
            // `/images/skills_lang/spanish.png`,
            // `/images/skills_lang/chinese.png`,
            // `/images/skills_lang/thai.png`,
            // `/images/skills_lang/russian.png`
    
            // icon source: https://www.iconfinder.com/iconsets/ensign-11
        ],
    
        others:[
    
        ]
    },

    works:{
        enm:
        {
            title:
            `the enm`,
            desc:
            `Slack helper bot, admin page of mobile weather application.`,
            skills:
            `node.js, react.js, react-native, firebase push, weather API`,
            links:
            ``,
            thumbnail:
            `/images/works/romrom_admin.png`
        },
        
        hellonature:
        {
            title:
            `hellonature`,
            desc:
            `Refactoring - old php pages into node.js page`,
            skills:
            `node.js, react.js, jQuery, AWS, mySQL, mariaDB, PHP`,
            links:
            `http://hellonature.net/mobile_shop/#/welcome`,
            thumbnail:
            `/images/works/hn_thumbnail.png`
        },
    
        etc:
        {
            title:
            `personal`,
            desc:
            `Trying to work on tiny things I am interested`,
            skills:``,
            links:
            `http://github.com/andrewskej`,
            thumbnail:
            `/images/works/github_repo.png`
        }
    },


}





export default fullDataSet
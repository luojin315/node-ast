import React, { Component } from 'react'

import { editingStatus } from '../../../store/store'
import PubSub from 'pubsub-js'
import { seekComponents } from '../../publicjs'


const h1Style = {
    color: '#333', fontSize: '18px', fontWeight: 'bold', textAlign: 'center', marginBottom: '10px'
};
const h2Style = {
    color: '#555', fontSize: '15px', fontWeight: 'bold', textAlign: 'center'
};
let getChangeComponent = null;
export default class studentHonor extends Component {
    state = {
        componentJson: [
            {
                component: 'Banner',
                props: {
                    bannerList: [
                        { id: 1, adress: "#", src: require("../../assets/aboutUs/studentHonor/banner.jpg").default },
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "替换的内容", subTitle: "" }
                }
            },
            {
                component: 'Paragraph',
                props: {
                    style: h1Style,
                    text: "“青春风采”国际青少年艺术节开幕式"
                }
            },
            {
                component: 'Paragraph',
                props: {
                    style: h2Style,
                    text: "桔子树学员登上国家级艺术殿堂——北京音乐厅，绽放青春风采"
                }
            },

            {
                component: 'ZoomCarousel',
                props: {
                    list: [
                        { src: require('../../assets/brandIntroduction/classScene/swiper1.png').default },
                        { src: require('../../assets/brandIntroduction/classScene/swiper2.png').default },
                        { src: require('../../assets/brandIntroduction/classScene/swiper3.png').default },
                        { src: require('../../assets/brandIntroduction/classScene/swiper4.png').default },
                        { src: require('../../assets/brandIntroduction/classScene/swiper5.png').default },
                    ]
                }
            },
            {
                component: 'Paragraph',
                props: {
                    style: { ...h1Style, marginTop: '30px' },
                    text: "其他重大赛事活动"
                }
            },
            {
                component: 'Paragraph',
                props: {
                    style: h2Style,
                    text: "桔子树主办，连续三届被纳入由北京市文资办主办的北京惠民文化消费季"
                }
            },
            {
                component: 'ImgTextCrossing',
                props: {
                    list: [
                        {
                            img: require('../../assets/aboutUs/studentHonor/honor1.png').default,
                            text: {
                                title: '花儿朵朵少儿舞蹈展演', subTitle: '中国舞蹈家协会主办，桔子树学员获多项殊荣'
                            },
                            type: "left"
                        },
                        {
                            img: require('../../assets/aboutUs/studentHonor/honor2.png').default,
                            text: {
                                title: '李斯特怀香港国际钢琴公开赛', subTitle: '桔子树学员登上世界级舞台，在国家未来大剧院奏响华美乐章'
                            },
                            type: "left"
                        },
                        {
                            img: require('../../assets/aboutUs/studentHonor/honor3.png').default,
                            text: {
                                title: '海外桃李杯国际舞蹈大赛', subTitle: '桔子树学员绽放“海外桃李杯”舞蹈大赛，获得多项大奖'
                            },
                            type: "right"
                        },
                        {
                            img: require('../../assets/aboutUs/studentHonor/honor4.png').default,
                            text: {
                                title: '金桔杯艺术大赛', subTitle: '桔子树主办，连续三届被纳入由北京市文资办主办的北京惠民文化消费季'
                            },
                            type: "right"
                        },
                    ]
                }
            },
            {
                component: 'Title',
                props: {
                    info: { title: "更多活动", subTitle: "" }
                }
            },
            {
                component: 'ImgBlindPlatoon',
                props: {
                    imgList: [
                        { img: [require('../../assets/aboutUs/studentHonor/img1.png').default], id: 1 },
                        {
                            img: [
                                require('../../assets/aboutUs/studentHonor/img2.png').default,
                                require('../../assets/aboutUs/studentHonor/img3.png').default
                            ], id: 2
                        },
                        {
                            img: [
                                require('../../assets/aboutUs/studentHonor/img4.png').default,
                                require('../../assets/aboutUs/studentHonor/img5.png').default
                            ], id: 3
                        },
                        {
                            img: [
                                require('../../assets/aboutUs/studentHonor/img6.png').default,
                                require('../../assets/aboutUs/studentHonor/img7.png').default,
                                require('../../assets/aboutUs/studentHonor/img8.png').default
                            ], id: 4
                        },
                        {
                            img: [
                                require('../../assets/aboutUs/studentHonor/img9.png').default,
                                require('../../assets/aboutUs/studentHonor/img10.png').default
                            ], id: 5
                        },
                        {
                            img: [require('../../assets/aboutUs/studentHonor/img11.png').default]
                            , id: 6
                        },
                    ]
                }
            },
            {
                component: 'TeacherStandards',
                props: {
                    list: [
                        {
                            img: require('../../assets/aboutUs/teachers/flag1.png').default, title: "海外知名艺术院校归国教师", text: "此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述"
                        },
                        {
                            img: require('../../assets/aboutUs/teachers/flag2.png').default, title: "国内艺术院校毕业教师", text: "此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述"
                        },
                        {
                            img: require('../../assets/aboutUs/teachers/flag3.png').default, title: "覆盖艺术学习多科目", text: "此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述"
                        },
                        {
                            img: require('../../assets/aboutUs/teachers/flag4.png').default, title: "丰富一线教学经验", text: "此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述此处写描述"
                        },
                    ]
                }
            },
            {
                component: 'Form',
                props: {
                }
            },

        ]
    }
    componentDidMount() {
        document.title = '桔子树艺术-学员风采';
        if (!editingStatus.getState()) return false;
        //订阅 - 接收编辑器改变组件后的数据
        getChangeComponent = PubSub.subscribe('getChangeComponentData', (msg, data) => {
            if (data.type !== 'studentHonor') {
                window.parent.PubSub.publish('operationMessage', {
                    message: '组件名不对应',
                    type: 'error'
                });
                return false;
            }
            this.setState({
                componentJson: data.componentJson
            })
            window.parent.PubSub.publish('operationMessage', {
                message: '修改成功',
                type: 'success'
            })
        });
    }
    componentWillUnmount() {
        //组件即将销毁后移除订阅
        PubSub.unsubscribe(getChangeComponent);
    }
    render() {
        const { componentJson } = this.state;
        return (
            <div>
                {
                    seekComponents(componentJson, 'studentHonor')
                }
            </div>
        )
    }
}

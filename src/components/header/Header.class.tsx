import React, { ReactPropTypes } from 'react';
import logo from '../../assets/logo.svg';
import styles from './Header.module.css';

import {Layout, Typography, Input, Menu ,Button ,Dropdown} from 'antd'
import {GlobalOutlined} from "@ant-design/icons"
import {withRouter,RouteComponentProps} from "./../../Helpers/withRouter"
// import { useNavigate, useLocation, useParams} from 'react-router-dom';
import store,{RootState} from "../../redux/store"
import { LanguageState } from '../../redux/language/languageReducer';
import { MenuInfo } from 'rc-menu/lib/interface';
import {withTranslation, WithTranslation} from 'react-i18next'
import { addLanguageActionCreater, changeLanguageActionCreator } from '../../redux/language/languageActions';
import {connect} from 'react-redux'
interface State extends LanguageState {}

const mapStateToProps = (state:RootState) => {
  return {
    language:state.language,
    languageList:state.languageList
  }
}

class HeaderComponent extends React.Component<RouteComponentProps & WithTranslation,State> {
    constructor(props:RouteComponentProps & WithTranslation) {
        super(props);
        const storeState = store.getState();
        this.state  = {
            language:storeState.language,
            languageList:storeState.languageList
        }

        store.subscribe(() => {
          const storeState = store.getState()
          this.setState({
            ...this.state,
            language:storeState.language,
            languageList:storeState.languageList
          })
        })
    }
    menuClickHanlder(e:any) {
      console.log(e);
      if (e.key === 'new' ) {
        let action = addLanguageActionCreater("新语言","new_lang");
        store.dispatch(action)
      } else {
        changeLanguageActionCreator(e.key)
      }

    }
    render(): React.ReactNode {
        const {navigate, t} = this.props;
        return (
            <div className={styles['app-header']}>
            <div className={styles["top-header"]}>
              <div className={styles.inner}>
                <Typography.Text>{t("header.slogan")}</Typography.Text>
                <Dropdown.Button
                style={{marginLeft: 15}}
                overlay={
                <Menu
                onClick={this.menuClickHanlder.bind(this)}
                items={[...this.state.languageList.map((l:any) =>  {return{key:l.code,label:l.name}}),{key:'new',label:'添加新语言'}]}/>
                }
                icon={<GlobalOutlined/>}
                >{this.state.language=='zh'?'语言':'Language'}</Dropdown.Button>
                <Button.Group>
                  <Button onClick={() => navigate('register')}>注册</Button>
                  <Button onClick={() => navigate('singIn')}>登陆</Button>
                </Button.Group>
              </div>

            </div>
            <Layout.Header className={styles['main-header']}>
              <span onClick={() => navigate("/")}>
                <img src={logo} className={styles['App-logo']} alt="logo" />
                <Typography.Title level={3} className={styles.title}>React 旅游网</Typography.Title>
              </span>

              <Input.Search
              placeholder='请输入旅游目的地，主题，或关键字'
              className={styles["search-input"]}
              ></Input.Search>
            </Layout.Header>
            <Menu mode={"horizontal"} className={styles["main-menu"]}
              items={[
                { key: "1", label: "旅游首页" },
                { key: "2", label: "周末游" },
                { key: "3", label: "跟团游" },
                { key: "4", label: "自由行" },
                { key: "5", label: "私家团" },
                { key: "6", label: "邮轮" },
                { key: "7", label: "酒店+景点" },
                { key: "8", label: "当地玩乐" },
                { key: "9", label: "主题游" },
                { key: "10", label: "定制游" },
                { key: "11", label: "游学" },
                { key: "12", label: "签证" },
                { key: "13", label: "企业游" },
                { key: "14", label: "高端游" },
                { key: "15", label: "爱玩户外" },
                { key: "16", label: "保险" },
              ]}
            />
          </div>
        )
    }

}

export const Header =connect(mapStateToProps)(withTranslation()(withRouter(HeaderComponent)))


/* export const Header1:React.FC = () => {
  const navigate = useNavigate();
    return (
        <div className={styles['app-header']}>
        <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <Typography.Text>让旅游更幸福</Typography.Text>
            <Dropdown.Button
            style={{marginLeft: 15}}
            overlay={
            <Menu
            items={
              [
                {key:'1',label:'中文'},
                {key:'2',label:'Engilsh'}
              ]
            }/>
            }    icon={<GlobalOutlined/>} >语言</Dropdown.Button>
            <Button.Group>
              <Button onClick={() => navigate('register')}>注册</Button>
              <Button onClick={() => navigate('singIn')}>登陆</Button>
            </Button.Group>
          </div>

        </div>
        <Layout.Header className={styles['main-header']}>
          <span onClick={() => navigate("/")}>
            <img src={logo} className={styles['App-logo']} alt="logo" />
            <Typography.Title level={3} className={styles.title}>React 旅游网</Typography.Title>
          </span>

          <Input.Search
          placeholder='请输入旅游目的地，主题，或关键字'
          className={styles["search-input"]}
          ></Input.Search>
        </Layout.Header>
        <Menu mode={"horizontal"} className={styles["main-menu"]}
          items={[
            { key: "1", label: "旅游首页" },
            { key: "2", label: "周末游" },
            { key: "3", label: "跟团游" },
            { key: "4", label: "自由行" },
            { key: "5", label: "私家团" },
            { key: "6", label: "邮轮" },
            { key: "7", label: "酒店+景点" },
            { key: "8", label: "当地玩乐" },
            { key: "9", label: "主题游" },
            { key: "10", label: "定制游" },
            { key: "11", label: "游学" },
            { key: "12", label: "签证" },
            { key: "13", label: "企业游" },
            { key: "14", label: "高端游" },
            { key: "15", label: "爱玩户外" },
            { key: "16", label: "保险" },
          ]}
        />
      </div>
    )
 }*/
import { SettingDrawer } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import { history, Link } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import { currentUser as queryCurrentUser, menu } from './services/ant-design-pro/api';
import { BookOutlined, LinkOutlined } from '@ant-design/icons';
import defaultSettings from '../config/defaultSettings';
import NoFoundPage from '@/pages/404';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';
/** 获取用户信息比较慢的时候会展示一个 loading */

export const initialStateConfig = {
  loading: <PageLoading />,
};
/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */

const parseMenu = (menuData, path) => {
  let isPass = true;
  const toParse = (menuData) => {
    for (let routeData of menuData) {
      if (!isPass) break;
      if (routeData.path === path) {
        isPass = false;
        break;
      }
      if (routeData.hasOwnProperty('routes')) {
        toParse(routeData.routes);
      }
    }
  };
  toParse(menuData);
  return isPass;
};

export async function getInitialState() {
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser();
      return msg;
    } catch (error) {
      history.push(loginPath);
    }

    return undefined;
  }; // 如果是登录页面，不执行

  const fetchMenu = async () => {
    try {
      const menuData = await menu();
      return menuData;
    } catch (error) {
      history.push(loginPath);
    }

    return undefined;
  };

  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    const menuData = await fetchMenu();
    return {
      fetchUserInfo,
      fetchMenu,
      currentUser,
      menuData,
      settings: defaultSettings,
    };
  }

  return {
    fetchUserInfo,
    fetchMenu,
    settings: defaultSettings,
  };
} // ProLayout 支持的api https://procomponents.ant.design/components/layout

export const layout = ({ initialState, setInitialState }) => {
  return {
    menu: {
      params: initialState,
      request: async () => {
        return initialState.menuData;
      },
    },
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      // content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history; // 如果没有登录，重定向到 login

      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children, props) => {
      if (initialState?.loading) return <PageLoading />;
      if (location.pathname !== loginPath) {
        if (parseMenu(initialState.menuData, location.pathname)) {
          return <NoFoundPage />;
        }
      }
      return (
        <>
          {children}
          {!props.location?.pathname?.includes('/login') && (
            <SettingDrawer
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({ ...preInitialState, settings }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};

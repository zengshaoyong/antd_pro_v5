import { PlusOutlined } from '@ant-design/icons';
import { Button, message, Input, Drawer } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { useRequest } from 'umi';

import { testData } from '@/services/ant-design-pro/api';

export default () => {
  const [counter, setCounter] = useState(0);
  // const { data } = useRequest(testData);
  // const fun1 = useRequest(testData, {
  //   manual: true,
  //   onSuccess: (data, params, refresh) => {
  //     // message.success(`The username was changed to "${params[0]}" !`);
  //     // console.log('params', params);
  //     console.log('data', data);
  //     console.log('params', params);
  //     // setCounter(result);
  //   },
  //   onError: (error) => {
  //     message.error(error.message);
  //   },
  // });

  // const fun2 = useRequest(testData, {
  //   manual: true,
  //   onSuccess: (result, params) => {
  //     // message.success(`The username was changed to "${params[0]}" !`);
  //     console.log('params', params);
  //     console.log('result', result);
  //   },
  //   onError: (error) => {
  //     message.error(error.message);
  //   },
  // });

  const { run, data, refresh, params, loading } = useRequest(testData, {
    manual: true,
    onSuccess: () => {
      // message.success(`The username was changed to "${params[0]}" !`);
      // console.log('params', params);
      console.log('data', data);
      console.log('params', params);
      // setCounter(result);
    },
    onError: (error) => {
      message.error(error.message);
    },
  });

  // console.log(data);

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await testData();
  //     setCounter(data);
  //   })();
  // }, []);

  // const updateData = async () => {
  //   const { data } = await testData();
  //   setCounter(5);
  // };

  // useEffect(async () => {
  //   const { data } = await testData();
  //   setCounter(data);
  // }, []);

  // useEffect(async () => {
  //   await testData().then((res) => {
  //     const { data } = res;
  //     setCounter(data);
  //   });
  // }, []);

  const updateData = () => {
    console.log(fun2.params);
  };

  return (
    <div>
      <div style={{ backgroundColor: 'white' }}>
        <p>{counter}</p>
      </div>

      <Button loading={loading} onClick={() => run({ username: 'zsy' })}>
        点击
      </Button>
      <Button onClick={() => refresh()}>点击</Button>
      <Button onClick={updateData}>点击</Button>
    </div>
  );
};

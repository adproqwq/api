import renderer from './renderer';
import type { IQQResultData, INetEaseResultData } from './types';
import { snackbar } from 'mdui';

const basicUrl = 'https://api.xingzhige.com';

const QQ = async (target: string) => {
  const apiUrl = `${basicUrl}/API/QQmusicVIP/`;
  const responce: IQQResultData = await (await fetch(`${apiUrl}?max=20&name=${target}`)).json();
  if(responce.code == -201){
    snackbar({
      message: '搜索无结果',
      placement: 'top',
    });
  }
  else renderer(`${apiUrl}?name=${target}`, responce);
};

const NetEase = async (target: string) => {
  const apiUrl = `${basicUrl}/API/NetEase_CloudMusic_new/`;
  const responce: INetEaseResultData = await (await fetch(`${apiUrl}?pagesize=20&name=${target}`)).json();
  if(responce.code == -404){
    snackbar({
      message: '搜索无结果',
      placement: 'top',
    });
  }
  else renderer(`${apiUrl}?name=${target}`, responce);
};

export default async (platform: string, target: string) => {
  if(platform == 'QQ') QQ(target);
  else if(platform == 'NetEase') NetEase(target);
};
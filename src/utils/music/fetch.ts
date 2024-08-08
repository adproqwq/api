import renderer from './renderer';
import type { IQQResultData, INetEaseResultData } from './types';

const basicUrl = '/adpro/xingzhige';

const QQ = async (target: string) => {
  const apiUrl = `${basicUrl}/API/QQmusicVIP/`;
  const responce: IQQResultData = await (await fetch(`${apiUrl}?name=${target}`)).json();
  renderer(`${apiUrl}?name=${target}`, responce);
};

const NetEase = async (target: string) => {
  const apiUrl = `${basicUrl}/API/NetEase_CloudMusic_new/`;
  const responce: INetEaseResultData = await (await fetch(`${apiUrl}?name=${target}`)).json();
  renderer(`${apiUrl}?name=${target}`, responce);
};

export default async (platform: string, target: string) => {
  if(platform == 'QQ') QQ(target);
  else if(platform == 'NetEase') NetEase(target);
};
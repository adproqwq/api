export interface IQQCommonData {
  songname: string,
  name: string,
  album: string,
  pay: string,
  song_type: string,
  type: number,
  songid: number,
  mid: string,
  src: string,
  cover: string,
  songurl: string,
};

export interface IQQResultDataEx extends IQQCommonData {
  grp: string,
};

export interface IQQSongDataEx extends IQQCommonData {
  subtitle: string,
  time: string,
  bpm: number,
  quality: string,
  interval: string,
  size: string,
  kbps: string,
};

export interface IQQResultData {
  code: number,
  msg: string,
  data: IQQResultDataEx[],
};

export interface IQQSongData {
  code: number,
  msg: string,
  data: IQQSongDataEx,
};

export interface INetEaseCommonData {
  songname: string,
  name: string,
  album: string,
  pay: string,
  song_type: string,
  id: number,
  src: string,
  cover: string,
  songurl: string,
};

export interface INetEaseSongDataEx extends INetEaseCommonData {
  quality: string,
  interval: string,
  size: string,
  kbps: string,
};

export interface INetEaseResultData {
  code: number,
  msg: string,
  data: INetEaseCommonData[],
};

export interface INetEaseSongData {
  code: number,
  msg: string,
  data: INetEaseSongDataEx,
};
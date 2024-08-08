import type { IQQResultData, IQQSongData, INetEaseResultData, INetEaseSongData } from './types';
import type { Button } from 'mdui';

export default (url: string, results: IQQResultData | INetEaseResultData) => {
  const list = document.createElement('mdui-list');

  results.data.forEach((result, index) => {
    const listItem = document.createElement('mdui-list-item');
    const div = document.createElement('div');
    const cover = document.createElement('img');
    const songName = document.createElement('span');
    const singers = document.createElement('span');
    const album = document.createElement('span');
    const dlButton = document.createElement('mdui-button');

    cover.src = result.cover;
    cover.height = 50;
    cover.width = 50;

    songName.textContent = result.songname;

    singers.textContent = result.name;

    album.textContent = result.album;

    dlButton.textContent = '下载';
    dlButton.variant = 'tonal';
    dlButton.setAttribute('data-index', String(index + 1));
    dlButton.onclick = async (e) => {
      const index = (e.target as Button).getAttribute('data-index')!;
      const responce: IQQSongData | INetEaseSongData = await (await fetch(`${url}&n=${index}`)).json();
      window.open(responce.data.src);
    };

    div.slot = 'custom';
    div.classList.add('list');
    div.appendChild(cover);
    div.appendChild(songName);
    div.appendChild(singers);
    div.appendChild(album);
    div.appendChild(dlButton);

    listItem.appendChild(div);

    list.appendChild(listItem);
  });

  (document.querySelector('#searchResults') as HTMLDivElement).appendChild(list);
};
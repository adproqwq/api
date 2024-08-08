import type { IQQResultData, IQQSongData, INetEaseResultData, INetEaseSongData } from './types';
import type { Button } from 'mdui';

export default (url: string, results: IQQResultData | INetEaseResultData) => {
  const list = document.createElement('mdui-list');

  results.data.forEach((result, index) => {
    const listItem = document.createElement('mdui-list-item');
    const div = document.createElement('div');
    const cover = document.createElement('img');
    const coverDiv = document.createElement('div');
    const songName = document.createElement('span');
    const songNameDiv = document.createElement('div');
    const singers = document.createElement('span');
    const singersDiv = document.createElement('div');
    const album = document.createElement('span');
    const albumDiv = document.createElement('div');
    const dlButton = document.createElement('mdui-button');
    const dlButtonDiv = document.createElement('div');
    const divider = document.createElement('mdui-divider');

    cover.src = result.cover;
    cover.height = 50;
    cover.width = 50;

    coverDiv.appendChild(cover);
    coverDiv.classList.add('list-item-img');

    songName.textContent = result.songname;

    songNameDiv.appendChild(songName);
    songNameDiv.classList.add('list-item-div');

    singers.textContent = result.name;

    singersDiv.appendChild(singers);
    singersDiv.classList.add('list-item-div');

    album.textContent = result.album;

    albumDiv.appendChild(album);
    albumDiv.classList.add('list-item-div');

    dlButton.textContent = '下载';
    dlButton.variant = 'tonal';
    dlButton.setAttribute('data-index', String(index + 1));
    dlButton.onclick = async (e) => {
      const index = (e.target as Button).getAttribute('data-index')!;
      const responce: IQQSongData | INetEaseSongData = await (await fetch(`${url}&n=${index}`)).json();
      window.open(responce.data.src);
    };

    dlButtonDiv.appendChild(dlButton);
    dlButtonDiv.classList.add('list-item-btn');

    div.slot = 'custom';
    div.classList.add('list');
    div.appendChild(coverDiv);
    div.appendChild(songNameDiv);
    div.appendChild(singersDiv);
    div.appendChild(albumDiv);
    div.appendChild(dlButton);

    listItem.appendChild(div);

    list.appendChild(listItem);
    list.appendChild(divider);
  });

  (document.querySelector('#searchResults') as HTMLDivElement).appendChild(list);
};
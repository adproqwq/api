<script lang="ts">
import search from '@/utils/music/search';
import { defineComponent } from 'vue';
import { type TextField, prompt, setColorScheme, removeColorScheme } from 'mdui';
import '@/assets/music.css';
import '@mdui/icons/search';
import '@mdui/icons/palette--outlined';

export default defineComponent({
  methods: {
    search(){
      const target = (document.querySelector('#searchBox') as TextField).value;
      search(target);
    },
    setColourTheme(){
      prompt({
        headline: '调整主题色',
        description: '输入一个以#开头的16进制颜色值，留空恢复默认',
        confirmText: '应用',
        cancelText: '取消',
        closeOnEsc: true,
        closeOnOverlayClick: true,
        textFieldOptions: {
          autosize: true,
          autocomplete: 'off',
          autofocus: true,
        },
        onConfirm: (value) => {
          if(value != ''){
            localStorage.setItem('colourTheme', value);
            setColorScheme(value);
          }
          else{
            localStorage.removeItem('colourTheme');
            removeColorScheme();
          }
        },
      });
    },
  },
  mounted(){
    if(localStorage.getItem('colourTheme')){
      const colourHex = localStorage.getItem('colourTheme')!;
      setColorScheme(colourHex);
    }
  },
});
</script>

<template>
  <div>
    <mdui-segmented-button-group id="platform" selects="single">
      <mdui-segmented-button value="QQ">小Q</mdui-segmented-button>
      <mdui-segmented-button value="NetEase">小云</mdui-segmented-button>
    </mdui-segmented-button-group>
    <mdui-button-icon variant="standard" icon="palette--outlined" @click="setColourTheme()"></mdui-button-icon>
  </div>
  <div>
    <mdui-text-field id="searchBox" variant="filled" label="搜索" placeholder="请输入信息" clearable>
      <mdui-button-icon slot="end-icon" icon="search" @click="search()"></mdui-button-icon>
    </mdui-text-field>
  </div>
  <div id="searchResults"></div>
</template>
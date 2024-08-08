<script lang="ts">
import search from '@/utils/music/search';
import { defineComponent } from 'vue';
import type { TextField } from 'mdui';
import '@/assets/music.css';
import '@mdui/icons/search';

export default defineComponent({
  methods: {
    search(){
      const target = (document.querySelector('#searchBox') as TextField).value;
      search(target);
    },
  },
});
</script>

<template>
  <div>
    <mdui-segmented-button-group id="platform" selects="single">
      <mdui-segmented-button value="QQ">小Q</mdui-segmented-button>
      <mdui-segmented-button value="NetEase">小云</mdui-segmented-button>
    </mdui-segmented-button-group>
  </div>
  <div>
    <mdui-text-field id="searchBox" variant="filled" label="搜索" placeholder="请输入信息" clearable>
      <mdui-button-icon slot="end-icon" icon="search" @click="search()"></mdui-button-icon>
    </mdui-text-field>
  </div>
  <div id="searchResults"></div>
</template>
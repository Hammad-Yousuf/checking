<template>
  <div id="app">
    <instagram-widget widget-id="8"></instagram-widget>
  </div>
</template>

<script>
import  InstagramWidget from './components/InstagramWidget'

export default {
  name: 'app',
  components: {
    'instagram-widget': InstagramWidget
  }
}
</script>


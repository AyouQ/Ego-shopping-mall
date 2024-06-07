<template>
    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
        </div>
      </template>
      <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
      <template #footer>Footer content</template>
    </el-card>
    <slot>{{msg}}</slot>
    <router-link to="Layout">跳转Layout</router-link>
</template>
<script>
export default{
    props: {
        msg:String
    }
}
</script>

  
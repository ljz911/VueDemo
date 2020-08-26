//定义组件注册的模板template
var tabs = `
                <div id="aaa">
                  <el-tabs v-model="index"  @tab-click="handleClick">
                    <el-tab-pane v-for="(item,i) in list" :label="item.label" :name="i">{{item.content}}</el-tab-pane>
                  </el-tabs>
                </div>
            `;
//Vue定义组件
var template_tabs = Vue.extend({
        template:tabs,
        //这里的data与vue对象的data类似，只不过组件中的data必须是函数的形式
        data(){
            return {
                index:0,
            }
        },
    //这里的methods与vue对象的methods一样，可以在这里定义组件的函数 没用到也可以不写
        methods:{
            handleClick:function(tab,event){
                console.log(tab,event);
            }
        },
        //props用来接收外部参数的
        props:['index','list'],
});

//Vue注册全局组件
Vue.component('tem-tabs',template_tabs);
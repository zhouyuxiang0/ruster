<template>
  <div id="homecategorypage">
      <main>
        <div id="container">
          <div id="center">
              <div id="header">
                <li  ><a href="/a/home/best" >最美</a></li>
                <li  ><a href="/" >全部</a></li>
                <span v-for="(category, index) in categorys" :key="index">
                    <li v-if="category.category_name != 'office'">
                      <a :href="'/a/home/' + category.category_name" >{{ category.category_name_cn }}</a>
                    </li>
                </span>
                <li  ><a href="/a/home/care" >未回复</a></li>
              </div>
              <div id="content">
                      <div id="items" v-for="(theme, index) in theme_list" :key="index">
                            
                          <div id="line">
                            <di id="avatar">
                              <a :href="'/a/user/' + theme.user_id"><img :src= theme.user_avatar ></a>
                            </di>
                            <div id="theme_item">  
                              <div id="item">
                                <div id="item-title">
                                  <a :href="'/a/'+ theme.category_name + '/theme/' + theme.id" title="theme.title"> {{ theme.title }} </a>
                                </div>
                                <div id="detail">
                                    <span id="info" class="col-name">{{ theme.category_name_cn }}</span>
                                    <span id="info"><a :href="'/a/user/' + theme.user_id">{{ theme.username }}</a></span>
                                    <span id="info"><a :href="'/a/'+ theme.category_name + '/theme/' + theme.id">{{ theme.comment_count }}</a></span>
                                    <span id="info">{{ theme.view_count }}</span>
                                    <span id="info"> {{ theme.rtime }} </span>
                                    <!-- <span id="more">  ••  </span> -->
                                </div> 
                              </div>                        
                            </div>
                          </div>
                      </div>
              </div>
              <div v-if="$route.params.number <= page_count">
                    <ul id="pagination">
                            <li id="one" ><a :href="'/a/home/' + $route.params.homecategory">1</a></li>

                            <li v-if="$route.params.number <= 2"></li>
                            <li v-else><a :href="'/a/home/' + $route.params.homecategory + '/' + ($route.params.number - 1)"> << </a></li>
                            
                            <li >••</li>

                            <li v-if="(half_count - 3) > 2" ><a :href="'/a/home/' + $route.params.homecategory + '/' + (half_count - 3)">{{ half_count - 3 }}</a></li>
                            <li v-if="half_count > 2" ><a :href="'/a/home/' + $route.params.homecategory + '/' + half_count" >{{ half_count }}</a></li>
                            <li v-if="(half_count + 3) < page_count" ><a :href="'/a/home/' + $route.params.homecategory + '/' + (half_count + 3)" >{{ half_count + 3 }}</a></li>

                            <li >••</li>
                            
                             <li v-if="$route.params.number == page_count"></li>
                            <li v-else><a :href="'/a/home/' + $route.params.homecategory + '/' + ($route.params.number - (-1))"> >> </a></li>

                            <li ><a :href="'/a/home/' + $route.params.homecategory + '/' + page_count">{{ page_count }}</a></li>  
                    </ul>       
              </div>
              <div v-else>
                  <ul id="pagination">
                      <li id="one" > <a href="/">1</a></li>
                  </ul>  
              </div>
          </div>
          <side></side>
          <gotop></gotop>
        </div>
      </main>
  </div>
</template>

<script>
/* eslint-disable */
import URLprefix from '../../config'
import Side from '../../components/side/Side'
import Gotop from '../../components/gotop/Gotop'
export default {
  name: 'homecategorypage',
  components: {
    "gotop": Gotop,
    "side": Side
  },
  data: function() {
    return {
      theme_list: '',
      signin_user: '',
      page_count: '',
      categorys: '',
      half_count:''
    }
  },
  mounted: function() {
    let home_page_id = this.$route.params.number
    let category_name = this.$route.params.homecategory
    let data = { 
        page_id: Number.parseInt(home_page_id),
        category_name: category_name
    }
    console.log(category_name)
       fetch(URLprefix + "api/home/category_list/page_id",{
                  body: JSON.stringify(data), 
                  headers: {
                    'content-type': 'application/json'
                  },
                  method: 'POST',
                  mode: 'cors'
              }).then(response => response.json())
              .then(json => {
                  json.theme_list.map((item) => {
                      if (item.user_avatar == "") {
                        item.user_avatar = "https://www.gravatar.com/avatar/1"
                      }
                  })
                  this.theme_list = json.theme_list
                  this.page_count = json.theme_page_count
                  this.half_count = Math.ceil(json.theme_page_count/2)
                  this.categorys = json.categorys
              })
              .catch((e) => {
                console.log(e)
              }) 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#center {
  background-color: #FFFFFF;
}
#header {
  padding: 0.8rem 0.2rem;
  box-shadow: 0 0 3px rgba(0,0,0,0.1), 0 -1px 1px rgba(0,0,0,0.1);
}
#header li {
  display: inline-block;
  color: #0d8575;
  font-weight: bold;
  margin-right: 1rem;
}
#center #items #line {
    display: flex;
    padding: 0.2rem 0.4rem;
    border-bottom: 1px solid #f3e1f8;
}
#center #theme_item {
    flex: 1;
}
#center #item a {
  color: #0541af;
}
#center #items #detail .col-name {
    color: #f16bf1;
    font-weight: bold;
}
#center #content #detail #info {
  padding-right: 0.8rem;
  font-size: 0.7rem;
}
#center #pagination li {
  display: inline; 
  border: 1px solid #cfd9ee;
  padding: 0.33rem;
  vertical-align: middle;
  line-height: 2.2rem;
}
#center #pagination #one{
  border: 1px solid #5bb383;
  margin-left: 0.4vw;
}
#center #pagination a{
  color: #0541af;
  font-weight: bold;
}
@media only screen and (max-width: 600px) {
    main{
        margin: 2vh auto;
        width: 97%;
    }
    #header {
        padding: 0.3rem 0.2rem;
    }
    #center #content #items {
        padding: 0.2rem 0;
    }
    #center #content #items #line {
        padding: 0.2rem;
    }
    #center #avatar img {
        width: 2.4rem;
        height: 2.4rem;
        margin-right: 0.5rem;
        border-radius: 50%;
    }
}
@media only screen and (min-width: 600px) and (max-width: 850px) {
    main{
        margin: 0 auto;
        width: 80%;
        padding-top: 77px;
    }
    #container {
      display: flex;
      flex-flow: row;
    }
    #container #center {
        width: 90%;
        margin-right: 1vw;
    }
    #container #center #avatar img {
        width: 2.5rem;
        height: 2.5rem;
        margin: 0.2rem 0.6rem 0 0;
        border-radius: 50%;
    }
    #center #items #office #detail, #center #items #item #detail {
        margin-top: -0.2rem;
    }
    #container #side {
        flex: 1;
    }
}
@media only screen and (min-width: 850px) {
    main {
        margin: 0 auto;
        width: 72%;
        padding-top: 77px;
    }
    #container {
      display: flex;
      flex-flow: row;
    }
    #container #center {
        width: 80%;
        margin-right: 1vw;
    }
    #container #center #avatar img {
        width: 2.5rem;
        height: 2.5rem;
        margin: 0.2rem 0.6rem 0 0;
        border-radius: 50%;
    }
    #center #items #item #item-title {
      font-size: 1.1rem;
    }
    #container #side {
        flex: 1;
    }
}
        
</style>
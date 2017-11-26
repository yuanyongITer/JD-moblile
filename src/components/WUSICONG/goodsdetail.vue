    <template>  
      <div class="page-navbar">   
        <!-- navbar -->  
        <mt-navbar class="page-part" v-model="selected">  
          <mt-tab-item id="1">选项一</mt-tab-item>  
          <mt-tab-item id="2">选项二</mt-tab-item>  
          <mt-tab-item id="3">选项三</mt-tab-item>  
        </mt-navbar>  
        <!-- tabcontainer -->  
        <mt-tab-container v-model="selected">  
          <mt-tab-container-item id="1">  
            <div class="firstPage_class_flex">
            	<div class="div_class_flex"><span></span>商品信息<span></span></div>
            	<div class="div_class_image"></div>
            	<div></div>
            </div>
          </mt-tab-container-item>  
          <mt-tab-container-item id="2">  
          </mt-tab-container-item> 
          <mt-tab-container-item id="3">  
          </mt-tab-container-item>  
        </mt-tab-container>  
      </div>  
    </template>  
      
    <script>  
    export default {  
      name: 'page-navbar',  
      data() {  
        return {  
          selected: '1',  
        };  
      }  
    };  
    </script>  
    <style scoped>
    	.first_class_flex{
    		display: flex;
    		flex-direction: column;
    		align-content: center;
    	}
    	.div_class_flex{
    		display: flex;
    		justify-content:space-between ;
    	}
    	.left_class_line{
    		border:4px,0,0,0;
    		border-style: solid;
    	}
    	.div_class_image{
    		background-image: url('/static/img1.jpg');
    	}
    </style>
const app = Vue.createApp({ 
    data(){
        return{
            counter: 0,
        }
    },
    computed: {
        message(){
            if(this.counter > 0 && this.counter < 37){
                return 'Not there yet!';
            }else if(this.number > 37){
                return 'Too much';
            }else{
                return this.counter;
            }
        }
    }, 
    watch:{
        counter(value){
            const that = this;
            setTimeout(function(){
                that.counter = 0;
            }, '5000');
        }
    },  
    methods: {
        add(num){
            this.counter += num;
        },
    }
})
app.mount('#assignment');
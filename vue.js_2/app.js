const app = Vue.createApp({
    data(){
        return {
            counter: 10,
            name: '',
            //confirmedName: '',
            //fullname: '',
            lastName: '',
        };
    },
    watch: {
        counter(value){
            if(value > 50){
                const that = this;
                setTimeout(function(){
                    that.counter = 0;
                }, 2000);
                //this.counter = 0;
            }
        }
        /*name(value){
            if(value === ''){
                this.fullname = '';
            }else{
                this.fullname = value + ' ' + this.lastName;
            }
        },
        lastName(value){
            if(value === ''){
                this.fullname = '';
            }else{
                this.fullname = this.name + ' ' + value;
            }
        }*/
    },
    computed: {
        fullname(){
            console.log('Running again...');
            if(this.name === ''){
                return '';
            }
            return this.name + ' ' + this.lastName;
        },
    },
    methods: {
        addCounter(num){
            this.counter = this.counter + num;
            //this.counter++;
        },
        removeCounter(num){
            this.counter = this.counter - num;
            //this.counter--;
        },
        setName(event){
            this.name = event.target.value;
        },
        /*submitForm(event){
            event.preventDefault();
            alert('Submitted!');
        }*/
        submitForm(){
            alert('Submitted!');
        },
        /*confirmInput(){
            this.confirmedName = this.name;
        },*/
        resetInput(){
           this.name = '';
           this.lastName = '';
        },
        outputFullName(){
            console.log('Running again....');
            if(this.name === ''){
                return '';
            }
            return this.name + ' ' + 'Bhardwaj';
        }
    }
});

app.mount('#events');
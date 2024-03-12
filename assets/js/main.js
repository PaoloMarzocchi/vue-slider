const { createApp } = Vue

createApp({
    data() {
        return {
            activeImg: 0,
            series:{
                title: 'Rick and Morty',
                genre: 'Animated Fiction',
                numbSeasons: 7,
                creators: 'Justin Roiland & Dan Harmon',
                images: [
                    "./assets/img/01.jpg",
                    "./assets/img/02.jpg",
                    "./assets/img/03.jpg",
                    "./assets/img/04.jpg",
                    "./assets/img/05.jpg",
                    "./assets/img/06.jpg",
                ]
            }
        }
    },
    methods: {
        prev(){
            this.activeImg--;
            

            if(this.activeImg < 0){
                this.activeImg = this.series.images.length - 1;
            }
        },
        next(){
            this.activeImg++;
            
            if (this.activeImg === this.series.images.length) {
                this.activeImg = 0;
            }
        },
    },
    mounted(){
        setInterval(this.next, 3000);
    }
}).mount('#app')
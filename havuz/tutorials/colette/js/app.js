new Vue({
    el: '#exercise',
    data: {
        value:0,
        sayi:Math.floor(Math.random() * 101),
        hak:6

    },
    methods:{
        result:function(){
            if (this.value>this.sayi) return "Büyük";
            if (this.value<this.sayi) return "Küçük";
            if (this.value=this.sayi) return "Eşit";

        },
        randomArtır:function(){
            this.hak--;
            return this.value+=Math.floor(Math.random() * 101);
        },
        randomAzalt:function(){
            this.hak--;
            return this.value-=Math.floor(Math.random() * 101);
        }
    }
});


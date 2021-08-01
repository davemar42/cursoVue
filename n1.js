const app=new Vue({
    el:'#app',

    data:{
        titulo:"hola soy Vue",
        frutas:[{nombre: 'pera', cantidad:10},
        {nombre: 'manzana',cantidad:0},
        {nombre: 'naranja',cantidad:12},],
        nuevaFruta:'',
        nuevaCantidad:0,
        total:0

        
    },
    methods:{
        agregarFruta(){
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad:this.nuevaCantidad 
            })
            this.nuevaFruta='';
            this.nuevaCantidad=0;
            
        }

    },
    computed:{
        sumarFrutas(){
            this.total=0;
            for(item of this.frutas){
                this.total = this.total+item.cantidad;
            }
            return this.total;

        }

    }
})

